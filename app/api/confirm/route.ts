import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Vang alle mogelijke benamingen uit de frontend request op
    let toegangscode = body.toegangscode || body.voucherCode;
    let klantNaam = body.klantNaam || body.naam;
    let klantEmail = body.klantEmail || body.email;
    let woningType = body.woningType || body.selected_woningType || body.geselecteerdeWoning;
    let designPakket = body.designPakket || body.selected_designPakket || body.geselecteerdePakket;
    let woningObject = body.woningObject;
    let partners = body.partners;
    let bestanden = body.bestanden;

    console.log("📥 Ontvangen data in API route:", { 
      toegangscode, 
      klantNaam, 
      klantEmail, 
      woningType, 
      designPakket 
    });

    if (!klantNaam || !klantEmail) {
      return NextResponse.json(
        { error: 'Ontbrekende verplichte klantgegevens.' },
        { status: 400 }
      );
    }

    // --- AUTOMATISCHE ENDPOINT FALLBACK KETEN ---
    const endpointsToTry = [
      process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT || process.env.NEXT_PUBLIC_WORDPRESS_API_URL,
      process.env.NEXT_PUBLIC_LIVE_WORDPRESS_ENDPOINT
    ].filter(Boolean) as string[];

    let fallbackPartners: { naam: string; email: string }[] = [];

    // Authenticatie header opbouwen op basis van je .env.local
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

      // Fallback: probeer op Titel te zoeken als metaQuery niets oplevert
      if (!voucherNode) {
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
          naam: p?.partnerNaam || 'Partner',
          email: p?.partnerEMail || p?.partnerEmail || p?.email
        })).filter((p: any) => p.email);
      }

      if (voucherNode) {
        const voucherId = voucherNode.databaseId;
        console.log(`✅ Voucher gevonden met ID ${voucherId}. Bezig met updaten via REST API...`);

        try {
          const wpBaseUrl = endpoint.replace(/\/(graphql|wp-json)\/?$/, '');
          
          const restUrlsToTry = [
            `${wpBaseUrl}/wp-json/wp/v2/vouchers/${voucherId}`,
            `${wpBaseUrl}/wp-json/wp/v2/voucher/${voucherId}`
          ];

          let updateSuccess = false;

          for (const restUrl of restUrlsToTry) {
            console.log(`📡 Probeer REST API update via: ${restUrl}`);

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

            if (updateRes.ok) {
              console.log(`✅ WordPress Voucher succesvol bijgewerkt via REST API op URL: ${restUrl}`);
              updateSuccess = true;
              break;
            } else {
              const errText = await updateRes.text();
              console.warn(`⚠️ Poging mislukt op ${restUrl}, respons:`, errText);
            }
          }

          if (!updateSuccess) {
            console.error("❌ Alle REST API URL varianten voor de update zijn mislukt.");
          }

        } catch (updateErr) {
          console.warn("⚠️ Kon WordPress post niet updaten via REST API:", updateErr);
        }
      } else {
        console.warn(`⚠️ Geen enkele voucher node gevonden in WordPress voor code: ${schoneToegangscode}`);
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

    // --- STAP 2: Partners verzamelen ---
    let frontendPartners = Array.isArray(partners) ? partners : [];
    
    const allePartnersMap = new Map();
    [...frontendPartners, ...fallbackPartners].forEach((p: any) => {
      const email = p?.partnerEMail || p?.partnerEmail || p?.email;
      const naam = p?.partnerNaam || p?.naam || 'Partner';
      if (email) {
        allePartnersMap.set(email.toLowerCase(), { naam, email });
      }
    });

    const uniekePartners = Array.from(allePartnersMap.values());
    const schonePartnersEmails = uniekePartners
      .map(p => p.email)
      .filter((email) => typeof email === 'string' && email.trim() !== '' && email.toLowerCase() !== klantEmail.toLowerCase());

    const partnersNamenString = uniekePartners.map(p => p.naam).join(' & ');

    // --- STAP 3: Datum & Tijd ---
    const nu = new Date();
    const datumString = nu.toLocaleDateString('nl-NL', { day: 'numeric', month: 'long', year: 'numeric' });
    const tijdString = nu.toLocaleTimeString('nl-NL', { hour: '2-digit', minute: '2-digit' });
    const tijdStempel = `${datumString} om ${tijdString}`;

    // --- STAP 4: Bestanden robuust extraheren ---
    let actieveBestanden: { naam: string; url: string }[] = [];

    const processItem = (item: any) => {
      if (!item) return;
      const fileNaam = item?.bestandTitel || item?.titel || item?.title || item?.naam || item?.name || item?.filename || 'Document';
      
      let fileUrl = '#';
      if (typeof item === 'string') {
        fileUrl = item;
      } else if (item?.sourceUrl) {
        fileUrl = item.sourceUrl;
      } else if (item?.mediaItemUrl) {
        fileUrl = item.mediaItemUrl;
      } else if (item?.bestandLink) {
        fileUrl = typeof item.bestandLink === 'string' ? item.bestandLink : (item.bestandLink?.sourceUrl || item.bestandLink?.mediaItemUrl || item.bestandLink?.url || item.bestandLink?.uri || '#');
      } else if (item?.uploadBestand) {
        if (typeof item.uploadBestand === 'string') {
          fileUrl = item.uploadBestand;
        } else {
          fileUrl = item.uploadBestand?.sourceUrl || item.uploadBestand?.node?.sourceUrl || item.uploadBestand?.node?.mediaItemUrl || item.uploadBestand?.mediaItemUrl || item.uploadBestand?.url || '#';
        }
      } else {
        fileUrl = item?.url || item?.link || item?.uri || '#';
      }

      if (fileUrl && fileUrl !== '#') {
        actieveBestanden.push({ naam: fileNaam, url: fileUrl });
      }
    };

    if (Array.isArray(bestanden)) {
      bestanden.forEach((entry: any) => {
        if (Array.isArray(entry?.bestandenLijst)) {
          entry.bestandenLijst.forEach(processItem);
        } else if (Array.isArray(entry?.bestanden)) {
          entry.bestanden.forEach(processItem);
        } else {
          processItem(entry);
        }
      });
    }

    if (actieveBestanden.length === 0) {
      actieveBestanden = [
        { naam: `Moodboard — ${designPakket}`, url: '#' },
        { naam: 'Woonkamer', url: '#' },
        { naam: 'Slaapkamer', url: '#' }
      ];
    }

    // --- STAP 5: Platte tekst / eenvoudige e-mail opbouw zonder tabellen of poespas ---
    const bestandenHtmlList = actieveBestanden.map((b) => `
      <li><a href="${b.url}" target="_blank">${b.naam}</a></li>
    `).join('');

    const createEmailHtml = (introTekst: string) => `
      <div style="font-family: Arial, sans-serif; font-size: 14px; color: #333333; line-height: 1.5;">
        <p>${introTekst}</p>
        <p>De interieurconfiguratie is definitief bevestigd op ${tijdStempel}. Hieronder vind je een overzicht van de gegevens:</p>
        
        <ul>
          <li><strong>Klant:</strong> ${klantNaam}</li>
          <li><strong>E-mailadres:</strong> ${klantEmail}</li>
          <li><strong>Woningobject:</strong> Nomi — ${woningObject || woningType}</li>
          <li><strong>Type woning:</strong> ${woningType}</li>
          <li><strong>Designpakket:</strong> ${designPakket}</li>
          <li><strong>Status cheque:</strong> Verzilverd</li>
        </ul>

        <p><strong>Bijbehorende downloads / bestanden:</strong></p>
        <ul>
          ${bestandenHtmlList}
        </ul>

        <p style="margin-top: 30px; font-size: 12px; color: #666666;">
          Verstuurd naar: ${partnersNamenString || 'Nomi Utrecht · Thomas de Gier'}
        </p>
      </div>
    `;

    // --- STAP 6: Verstuur e-mails via Resend ---
    const klantEmailPromise = resend.emails.send({
      from: 'Nomi Configurator <noreply@nomi-configurator.nl>',
      to: [klantEmail],
      subject: `Keuze bevestigd — ${woningType} · ${designPakket}`,
      html: createEmailHtml(`Beste ${klantNaam},`),
    });

    const partnerEmailPromises = schonePartnersEmails.map((pEmail) => 
      resend.emails.send({
        from: 'Nomi Configurator <noreply@nomi-configurator.nl>',
        to: [pEmail],
        subject: `Keuze bevestigd — ${woningType} · ${designPakket}`,
        html: createEmailHtml('Beste partners,'),
      })
    );

    await Promise.all([klantEmailPromise, ...partnerEmailPromises]);

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Resend & API server error:', error);
    return NextResponse.json({ success: false, error: 'E-mail kon niet worden verzonden' }, { status: 500 });
  }
}