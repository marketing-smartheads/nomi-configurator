import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    let toegangscode = body.toegangscode || body.voucherCode || '';
    let klantNaam = body.klantNaam || body.naam;
    let klantEmail = body.klantEmail || body.email;
    let woningType = body.woningType || body.selected_woningType || body.geselecteerdeWoning;
    let designPakket = body.designPakket || body.selected_designPakket || body.geselecteerdePakket;
    let woningObject = body.woningObject || 'Nomi — Object';
    let partners = body.partners;
    let bestanden = body.bestanden || body.bestandenLijst;
    let klantTelefoon = body.klantTelefoon || body.telefoon || '';

    // Delen met de partner (documentatielijst) mag alleen bij expliciete toestemming
    const toestemmingPartner = body.toestemmingPartner === true;

    console.log("📥 Ontvangen data in API route:", { 
      toegangscode, 
      klantNaam, 
      klantEmail, 
      woningType, 
      designPakket,
      bestandenStructuur: Array.isArray(bestanden) ? `Array met ${bestanden.length} items` : typeof bestanden
    });

    const klantEmailGeldig =
      typeof klantEmail === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(klantEmail.trim());
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

    // --- AUTOMATISCHE ENDPOINT FALLBACK KETEN ---
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
      console.log(`🔍 Start WordPress query op endpoint: ${endpoint} voor toegangscode veld: "${schoneToegangscode}"`);

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
        fallbackPartners = rawWpPartners.map((p: any) => ({
          naam: p?.partnerNaam || p?.partner_naam || 'Partner',
          email: p?.partnerEMail || p?.partnerEmail || p?.email
        })).filter((p: any) => p.email);
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

    // --- STAP 2: Partners verzamelen (als schone platte tekst) ---
    let frontendPartners = Array.isArray(partners) ? partners : [];
    
    const allePartnersMap = new Map();
    [...frontendPartners, ...fallbackPartners].forEach((p: any) => {
      const email = p?.partnerEMail || p?.partnerEmail || p?.email || (typeof p === 'string' && p.includes('@') ? p : '');
      const naam = p?.partnerNaam || p?.partner_naam || p?.naam || (typeof p === 'string' && !p.includes('@') ? p : 'Partner');
      if (email) {
        allePartnersMap.set(email.toLowerCase(), { naam, email });
      }
    });

    const uniekePartners = Array.from(allePartnersMap.values());
    const schonePartnersEmails = uniekePartners
      .map(p => p.email)
      .filter((email) => typeof email === 'string' && email.trim() !== '' && email.toLowerCase() !== klantEmailClean.toLowerCase());

    // GEEN HTML-tags zoals &bull; hierin zodat het schone platte tekst blijft in de mail
    const partnersNamenString = uniekePartners.length > 0
      ? uniekePartners.map(p => p.naam).join(' • ')
      : 'Nomi Utrecht • Thomas de Gier';

    // --- STAP 3: Datum & Tijd ---
    const nu = new Date();
    const datumString = nu.toLocaleDateString('nl-NL', { day: 'numeric', month: 'long', year: 'numeric' });
    const tijdString = nu.toLocaleTimeString('nl-NL', { hour: '2-digit', minute: '2-digit' });

    // --- STAP 4: Diepgaande Bestanden Parser ---
    let actieveBestanden: { naam: string; url: string }[] = [];

    const extractFileUrlAndName = (obj: any) => {
      if (!obj || typeof obj !== 'object') return;

      const fileNaam = obj?.bestandTitel || obj?.titel || obj?.title || obj?.naam || obj?.name || obj?.filename || obj?.postTitle || 'Document';
      
      let fileUrl = '#';
      if (typeof obj === 'string' && obj.startsWith('http')) {
        fileUrl = obj;
      } else if (obj?.sourceUrl) {
        fileUrl = obj.sourceUrl;
      } else if (obj?.mediaItemUrl) {
        fileUrl = obj.mediaItemUrl;
      } else if (obj?.bestandLink) {
        fileUrl = typeof obj.bestandLink === 'string' ? obj.bestandLink : (obj.bestandLink?.sourceUrl || obj.bestandLink?.mediaItemUrl || obj.bestandLink?.url || obj.bestandLink?.uri || '#');
      } else if (obj?.uploadBestand) {
        if (typeof obj.uploadBestand === 'string') {
          fileUrl = obj.uploadBestand;
        } else {
          fileUrl = obj.uploadBestand?.sourceUrl || obj.uploadBestand?.node?.sourceUrl || obj.uploadBestand?.node?.mediaItemUrl || obj.uploadBestand?.mediaItemUrl || obj.uploadBestand?.url || '#';
        }
      } else {
        fileUrl = obj?.url || obj?.link || obj?.uri || '#';
      }

      if (fileUrl && fileUrl !== '#') {
        if (!actieveBestanden.some(b => b.url === fileUrl)) {
          actieveBestanden.push({ naam: fileNaam, url: fileUrl });
        }
      }
    };

    const parseBestandenStructure = (item: any) => {
      if (!item) return;

      if (Array.isArray(item)) {
        item.forEach(parseBestandenStructure);
      } else if (typeof item === 'object') {
        if (Array.isArray(item.bestandenLijst)) {
          item.bestandenLijst.forEach(parseBestandenStructure);
        }
        if (Array.isArray(item.bestanden)) {
          item.bestanden.forEach(parseBestandenStructure);
        }
        if (Array.isArray(item.files)) {
          item.files.forEach(parseBestandenStructure);
        }
        extractFileUrlAndName(item);
      }
    };

    if (bestanden) {
      parseBestandenStructure(bestanden);
    }

    if (actieveBestanden.length === 0) {
      actieveBestanden = [
        { naam: `MOODBOARD — HOTEL CHIC`, url: '#' },
        { naam: 'WOONKAMER', url: '#' }
      ];
    }

    // let bestandenHtml = actieveBestanden.map((b) => 
    //   `<a href="${b.url}" target="_blank" style="display:inline-block;background-color:#dcd7ce;color:#1a1a1a;font-size:11px;font-weight:bold;text-transform:uppercase;text-decoration:none;padding:8px 14px;border-radius:20px;margin:0 8px 10px 0;letter-spacing:0.5px;">${b.naam}</a>&nbsp;`
    // ).join('');

    // --- STAP 5: Versturen via Resend ---
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
            designPakket: designPakket,
            datumString: datumString,
            tijdString: tijdString,
            chequeStatus: 'Verzilverd',
            aanhef: aanhefTekst,
            // bestandenHtml: bestandenHtml,
            verstuurdNaar: partnersNamenString
          }
        }
      });

      if (response.error) {
        console.error(`❌ Resend weigerde e-mail voor ${ontvangerEmail}:`, response.error);
        throw new Error(response.error.message);
      }

      console.log(`✅ E-mail succesvol verzonden naar ${ontvangerEmail}`);
      return response;
    };

    // --- Documentatielijst-aanvraag naar de partner (alleen bij toestemming) ---
    // Ontvanger wordt server-side bepaald, nooit vanuit de request.
    // Test: zet PARTNER_EMAIL (of NEXT_PUBLIC_PARTNER_EMAIL) op het webmaster-adres.
    const PARTNER_ONTVANGER =
      process.env.PARTNER_EMAIL ||
      process.env.NEXT_PUBLIC_PARTNER_EMAIL ||
      'tobias@aanhuis-spijk.nl';

    const esc = (v: unknown) =>
      String(v ?? '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');

    const stuurDocumentatieAanvraag = async () => {
      const regels: [string, string][] = [
        ['Naam', klantNaam],
        ['E-mail', klantEmailClean],
        ['Telefoon', String(klantTelefoon).trim()],
        ['Type woning', woningType || '-'],
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
        console.error(`❌ Resend weigerde documentatie-aanvraag voor ${PARTNER_ONTVANGER}:`, response.error);
        throw new Error(response.error.message);
      }

      console.log(`✅ Documentatie-aanvraag verzonden naar ${PARTNER_ONTVANGER}`);
      return response;
    };

    // MAIL_TEST_MODE=true: de bevestigingsmails naar de partners uit WordPress worden overgeslagen
    const testModus = process.env.MAIL_TEST_MODE === 'true';
    const partnerBevestigingen = testModus ? [] : schonePartnersEmails;

    const finalEmailPromises = [
      // Klant krijgt alleen een mail als er een geldig adres is (bij 'niet delen' is dat optioneel)
      ...(klantEmailGeldig ? [stuurResendMail(klantEmailClean, `Beste ${klantNaam},`)] : []),
      ...partnerBevestigingen.map((pEmail) => stuurResendMail(pEmail, 'Beste partners,')),
      ...(toestemmingPartner ? [stuurDocumentatieAanvraag()] : []),
    ];

    await Promise.all(finalEmailPromises);

    return NextResponse.json({ success: true, message: 'Alles succesvol verzonden!' });

  } catch (error: any) {
    console.error('❌ Resend & API server critical error:', error);
    return NextResponse.json({ success: false, error: error.message || 'E-mail kon niet worden verzonden' }, { status: 500 });
  }
}