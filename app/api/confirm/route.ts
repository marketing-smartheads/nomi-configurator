import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Staat op false zodat Resend de partnermails daadwerkelijk verstuurt naar de adressen uit PARTNER_EMAILS_BY_NAME
const DRY_RUN_PARTNER_EMAILS = false;

// E-mailadressen gekoppeld aan de exacte Partner Naam (case-insensitive)
const PARTNER_EMAILS_BY_NAME: Record<string, string[]> = {
  'thuis in bouwen': [
    'p.vanrijswijk@thuisinbouwen.nl',
    'j.spruijtenburg@thuisinbouwen.nl',
  ],
  'bruynzeel keukens': [
    'jvdheuvel2@bruynzeelkeukens.nl',
  ],
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function splitEmails(rawEmail: unknown): string[] {
  if (!rawEmail || typeof rawEmail !== 'string') return [];

  return rawEmail
    .split(/[,;\n]+/)
    .map((addr) => addr.trim())
    .filter((addr) => EMAIL_REGEX.test(addr));
}

function getEmailsForPartner(partnerNaam: string, rawEmail: unknown): string[] {
  const normalizedName = String(partnerNaam || '').trim().toLowerCase();
  const mappedEmails = PARTNER_EMAILS_BY_NAME[normalizedName] || [];
  const parsedRawEmails = splitEmails(rawEmail);

  return Array.from(new Set([...mappedEmails, ...parsedRawEmails]));
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    let toegangscode = body.toegangscode || body.voucherCode || '';
    let klantNaam = body.klantNaam || body.naam;
    let klantEmail = body.klantEmail || body.email;
    let woningType = body.woningType || body.selected_woningType || body.geselecteerdeWoning;
    let gekozenIndeling = body.gekozenIndeling || body.selected_indeling || body.geselecteerdeIndeling || 'Standaard indeling';
    let designPakket = body.designPakket || body.selected_designPakket || body.geselecteerdPakket;
    let woningObject = body.woningObject || 'Nomi — Object';
    let partners = body.partners;
    let bestanden = body.bestanden || body.bestandenLijst;
    let klantTelefoon = body.klantTelefoon || body.telefoon || '';

    const toestemmingPartner = body.toestemmingPartner === true;

    const klantEmailGeldig =
      typeof klantEmail === 'string' && EMAIL_REGEX.test(klantEmail.trim());
    const klantEmailClean = klantEmailGeldig ? klantEmail.trim() : '';
    const telefoonGeldig = String(klantTelefoon).replace(/\D/g, '').length >= 8;

    if (!klantNaam) {
      return NextResponse.json(
        { error: 'Ontbrekende verplichte klantgegevens.' },
        { status: 400 }
      );
    }

    if (toestemmingPartner && (!klantEmailGeldig || !telefoonGeldig)) {
      return NextResponse.json(
        { error: 'Voor het delen met de partner zijn een geldig e-mailadres en telefoonnummer nodig.' },
        { status: 400 }
      );
    }

    const endpointsToTry = [
      process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT || process.env.NEXT_PUBLIC_WORDPRESS_API_URL,
      process.env.NEXT_PUBLIC_LIVE_WORDPRESS_ENDPOINT
    ].filter(Boolean) as string[];

    let fallbackPartners: { naam: string; email: string }[] = [];

    const wpUser = process.env.WORDPRESS_AUTH_USER;
    const wpPass = process.env.WORDPRESS_AUTH_PASSWORD;
    const basicAuth = wpUser && wpPass ? 'Basic ' + Buffer.from(`${wpUser}:${wpPass}`).toString('base64') : '';

    async function executeWpQuery(endpoint: string) {
      const schoneToegangscode = String(toegangscode || '').trim().toUpperCase();

      const query = `
        query GetData($toegangscode: String!) {
          vouchers(where: { metaQuery: { key: "toegangscode", value: $toegangscode, compare: EQUAL } }) {
            nodes {
              databaseId
              title
            }
          }
          page(id: "home", idType: URI) {
            homePaginaVelden {
              partnerLijst {
                partnerNaam
                partnerEMail
                partnerEmail
                email
              }
            }
          }
        }
      `;

      const headers: Record<string, string> = {
        'Content-Type': 'application/json',
      };
      if (basicAuth) {
        headers['Authorization'] = basicAuth;
      }

      const wpRes = await fetch(endpoint, {
        method: 'POST',
        headers,
        body: JSON.stringify({
          query: query,
          variables: { toegangscode: schoneToegangscode }
        })
      });

      if (!wpRes.ok) {
        const errText = await wpRes.text();
        throw new Error(`HTTP error! status: ${wpRes.status} - ${errText}`);
      }

      const wpJson = await wpRes.json();
      let voucherNode = wpJson?.data?.vouchers?.nodes?.[0];

      if (!voucherNode && schoneToegangscode) {
        const titleQuery = `
          query GetByTitle($toegangscode: String!) {
            vouchers(where: { title: $toegangscode }) {
              nodes {
                databaseId
                title
              }
            }
          }
        `;
        const titleRes = await fetch(endpoint, {
          method: 'POST',
          headers,
          body: JSON.stringify({ query: titleQuery, variables: { toegangscode: schoneToegangscode } })
        });
        const titleJson = await titleRes.json();
        voucherNode = titleJson?.data?.vouchers?.nodes?.[0];
      }

      const rawWpPartners = wpJson?.data?.page?.homePaginaVelden?.partnerLijst;
      if (Array.isArray(rawWpPartners)) {
        fallbackPartners = rawWpPartners.flatMap((p: any) => {
          const naam = p?.partnerNaam || p?.partner_naam || p?.naam || 'Partner';
          const ruweEmail = p?.partnerEMail || p?.partnerEmail || p?.email || '';
          return getEmailsForPartner(naam, ruweEmail).map((email) => ({ naam, email }));
        });
      }

      if (voucherNode) {
        const voucherId = voucherNode.databaseId;
        try {
          const wpBaseUrl = endpoint.replace(/\/(graphql|wp-json)\/?$/, '');
          const restUrlsToTry = [
            `${wpBaseUrl}/wp-json/wp/v2/vouchers/${voucherId}`,
            `${wpBaseUrl}/wp-json/wp/v2/voucher/${voucherId}`
          ];

          for (const restUrl of restUrlsToTry) {
            const updateRes = await fetch(restUrl, {
              method: 'POST',
              headers,
              body: JSON.stringify({
                acf: {
                  toegangscode: schoneToegangscode,
                  status: "bevestigd",
                  klant_naam: klantNaam,
                  "klant_e-mail": klantEmail,
                  gekozen_type_woning: woningType,
                  gekozen_indeling: gekozenIndeling,
                  gekozen_designpakket: designPakket
                }
              })
            });

            if (updateRes.ok) break;
          }
        } catch (updateErr) {
          console.warn("⚠️ Kon WordPress post niet updaten via REST API:", updateErr);
        }
      }

      return true;
    }

    for (const endpoint of endpointsToTry) {
      try {
        await executeWpQuery(endpoint);
        break;
      } catch (err) {
        console.warn(`⚠️ Endpoint ${endpoint} mislukt, foutmelding:`, err);
      }
    }

    let frontendPartners = Array.isArray(partners) ? partners : [];

    const allePartnersMap = new Map<string, { naam: string; email: string }>();
    [...frontendPartners, ...fallbackPartners].forEach((p: any) => {
      const naam =
        p?.partnerNaam ||
        p?.partner_naam ||
        p?.naam ||
        (typeof p === 'string' && !p.includes('@') ? p : 'Partner');
      const ruweEmail =
        p?.partnerEMail ||
        p?.partnerEmail ||
        p?.email ||
        (typeof p === 'string' && p.includes('@') ? p : '');

      getEmailsForPartner(naam, ruweEmail).forEach((email) => {
        const key = email.toLowerCase();
        if (!allePartnersMap.has(key)) {
          allePartnersMap.set(key, { naam, email });
        }
      });
    });

    const uniekePartners = Array.from(allePartnersMap.values());
    const schonePartnersEmails = uniekePartners
      .map((p) => p.email)
      .filter(
        (email) =>
          typeof email === 'string' &&
          email.trim() !== '' &&
          email.toLowerCase() !== klantEmailClean.toLowerCase()
      );

    const partnersNamenString =
      uniekePartners.length > 0
        ? Array.from(new Set(uniekePartners.map((p) => p.naam))).join(' • ')
        : 'Nomi Utrecht • Thomas de Gier';

    const nu = new Date();
    const datumString = nu.toLocaleDateString('nl-NL', { day: 'numeric', month: 'long', year: 'numeric' });
    const tijdString = nu.toLocaleTimeString('nl-NL', { hour: '2-digit', minute: '2-digit' });

    const templateId = process.env.RESEND_TEMPLATE_ID || 'd532cedb-3f4b-4315-bf51-c3fcdf348fcc';

    const stuurResendMail = async (ontvangerEmail: string, aanhefTekst: string) => {
      const response = await resend.emails.send({
        from: 'Nomi Configurator <noreply@nomi-configurator.nl>',
        to: [ontvangerEmail],
        subject: `Jouw keuze bevestigd — ${woningType}`,
        template: {
          id: templateId,
          variables: {
            klantNaam: klantNaam,
            voucherCode: toegangscode || 'N.v.t.',
            toegangscode: toegangscode || 'N.v.t.',
            woningObject: woningObject,
            woningType: woningType,
            gekozenIndeling: gekozenIndeling,
            designPakket: designPakket,
            datumString: datumString,
            tijdString: tijdString,
            chequeStatus: 'Verzilverd',
            aanhef: aanhefTekst,
            verstuurdNaar: partnersNamenString
          }
        }
      });

      if (response.error) {
        throw new Error(response.error.message);
      }

      console.log(`✅ Resend e-mail verzonden naar: ${ontvangerEmail} (${aanhefTekst})`);
      return response;
    };

    const PARTNER_ONTVANGER =
      process.env.PARTNER_EMAIL ||
      process.env.NEXT_PUBLIC_PARTNER_EMAIL ||
      'tobias@aanhuis-spijk.nl';

    const esc = (v: unknown) =>
      String(v ?? '')
        .replace(/&/g, '&')
        .replace(/</g, '<')
        .replace(/>/g, '>')
        .replace(/"/g, '"');

    const stuurDocumentatieAanvraag = async () => {
      const regels: [string, string][] = [
        ['Naam', klantNaam],
        ['E-mail', klantEmailClean],
        ['Telefoon', String(klantTelefoon).trim()],
        ['Type woning', woningType || '-'],
        ['Gekozen indeling', gekozenIndeling || '-'],
        ['Designpakket', designPakket || '-'],
        ['Toegangscode', toegangscode || 'N.v.t.'],
        ['Datum', `${datumString} om ${tijdString}`],
      ];

      const html =
        `<p>Beste Tobias,</p>` +
        `<p>Een klant heeft toestemming gegeven om de contactgegevens te delen en wil de <strong>documentatielijst</strong> ontvangen.</p>` +
        `<table cellpadding="6" style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px;">` +
        regels.map(([k, v]) => `<tr><td style="color:#666;">${esc(k)}</td><td><strong>${esc(v)}</strong></td></tr>`).join('') +
        `</table>` +
        `<p>Je kunt direct reageren op deze mail om contact op te nemen met de klant.</p>`;

      const text =
        `Beste Tobias,\n\nEen klant heeft toestemming gegeven om de contactgegevens te delen en wil de documentatielijst ontvangen.\n\n` +
        regels.map(([k, v]) => `${k}: ${v}`).join('\n');

      const response = await resend.emails.send({
        from: 'Nomi Configurator <noreply@nomi-configurator.nl>',
        to: [PARTNER_ONTVANGER],
        replyTo: klantEmailClean,
        subject: `Aanvraag documentatielijst — ${klantNaam}`,
        html,
        text,
      });

      if (response.error) {
        throw new Error(response.error.message);
      }

      console.log(`✅ Documentatie-aanvraag via Resend verzonden naar: ${PARTNER_ONTVANGER}`);
      return response;
    };

    const testModus = process.env.MAIL_TEST_MODE === 'true';
    const partnerBevestigingen =
      testModus || DRY_RUN_PARTNER_EMAILS ? [] : schonePartnersEmails;

    console.log('📋 Gekoppelde partner-ontvangers:', uniekePartners);
    console.log('📨 Actieve partnerbevestigingen via Resend:', partnerBevestigingen);

    const finalEmailPromises = [
      ...(klantEmailGeldig ? [stuurResendMail(klantEmailClean, `Beste ${klantNaam},`)] : []),
      ...partnerBevestigingen.map((pEmail) => stuurResendMail(pEmail, 'Beste partners,')),
      ...(toestemmingPartner ? [stuurDocumentatieAanvraag()] : []),
    ];

    await Promise.all(finalEmailPromises);

    return NextResponse.json({
      success: true,
      message: 'Alles succesvol verzonden!',
      partnerRecipients: partnerBevestigingen,
    });

  } catch (error: any) {
    console.error('❌ Resend & API server critical error:', error);
    return NextResponse.json({ success: false, error: error.message || 'E-mail kon niet worden verzonden' }, { status: 500 });
  }
}