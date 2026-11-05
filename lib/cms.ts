// lib/cms.ts
export async function getPageData() {
  const query = `
    query GetConfiguratorPage {
      page(id: "28", idType: DATABASE_ID) {
        sections { 
          hero {
            subtitel
            titel
            omschrijving
            afbeelding {
              node {
                sourceUrl
                altText
              }
            }
          }
          story {
            subtitel
            titel
            videobron
            videoPoster {
              node {
                sourceUrl
              }
            }
          }
          cta {
            subtitel
            titel
            knoptekst
          }
          faq {
            subtitel
            titel
            vragen {
              vraag
              antwoord
            }
          }
        }
        configuratorBeheer {        
          configurator {
            stappenBalk {
              stapTitel
            }
            titelStap1
            stap1Omschrijving
            woningTypen {
              typeNaam
              indelingTitel
              metrage
              plattegrond {
                node {
                  sourceUrl
                }
              }
              designPakketten {
                pakketId
                pakketTitel
                pakketOmschrijving
                pakketAabeelding {
                  node {
                    sourceUrl
                  }
                }
                stap3Omschrijving
                visualsSlider(first: 100) {
                  nodes {
                    sourceUrl
                    mediaItemUrl
                  }
                }
                materialenLijst {
                  materiaalTitel
                }
                moodboardGallery(first: 100) {
                  nodes {
                    sourceUrl
                    mediaItemUrl
                  }
                }
                bevestigingStap {
                  bannerAfbeelding {
                    node {
                      sourceUrl
                      mediaItemUrl
                    }
                  }
                  bannerTitel
                }
              }
              panoramaRenders {
                stijlNaam
                renderBestand {
                  node {
                    sourceUrl
                    mediaItemUrl
                  }
                }
              }
              downloadCategorie {
                categorieTitel
                bestandenLijst {
                  bestandTitel
                  uploadBestand {
                    node {
                      sourceUrl
                      mediaItemUrl
                      fileSize
                      mimeType
                    }
                  }
                }
              }
              partnerLijst {
                partnerNaam
                partnerOmschrijving
                partnerRol
                partnerEMail
              }
            }
            titelStap2
            stap2omschrijving

            bevestigingTitel
            bevestigingSubtitel
            bevestigingOmschrijving
            bevestigingWaarschuwingTekst
            bevestigingAkkoordTekst

            downloadSectie {
              downloadTitel
              downloadIntroductie            
            }
          }
        }
      }
    }
  `;

  const graphqlEndpoint = 'https://cms.nomi-configurator.nl/graphql';

  const res = await fetch(graphqlEndpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query }),
    cache: 'no-store',
  });
  
  const result = await res.json();
  
  if (result.errors) {
    console.error('GraphQL Fouten:', JSON.stringify(result.errors, null, 2));
    throw new Error('GraphQL query fout');
  }

  if (!result.data || !result.data.page) {
    console.error('Data niet gevonden in:', result);
    throw new Error('Geen data gevonden voor de opgegeven pagina');
  }

  return {
    sections: result.data.page.sections,
    configuratorData: result.data.page.configuratorBeheer.configurator,
    downloadLimietDagen: 14,
  };
}

export async function getVoucherData(voucherCode: string) {
  const cleanCode = voucherCode.trim().toUpperCase();

  const query = `
    query GetAllVouchers {
      vouchers(first: 100) {
        nodes {
          title
          slug
          voucherVelden {
            toegangscode
            gekozenTypeWoning
            gekozenDesignpakket
            status
          }
        }
      }
    }
  `;

  const graphqlEndpoint = 'https://cms.nomi-configurator.nl/graphql';

  try {
    const res = await fetch(graphqlEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query }),
      cache: 'no-store',
    });

    const json = await res.json();
    const vouchers = json?.data?.vouchers?.nodes || [];
    
    const match = vouchers.find((v: any) => {
      const codeField = (v?.voucherVelden?.toegangscode || '').trim().toUpperCase();
      const postTitle = (v?.title || '').trim().toUpperCase();
      return codeField === cleanCode || postTitle === cleanCode;
    });

    if (!match) {
      return null;
    }

    return {
      gekozenTypeWoning: match.voucherVelden?.gekozenTypeWoning || 'Type A',
      gekozenDesignpakket: match.voucherVelden?.gekozenDesignpakket || 'Hotel Chic',
    };
  } catch (error) {
    console.error('Fout bij ophalen vouchers via GraphQL:', error);
    return null;
  }
}

export async function verifyAndAuthVoucher(toegangscode: string, klantEmail: string) {
  const cleanCode = (toegangscode || '').trim().toUpperCase();
  const cleanEmail = (klantEmail || '').trim().toLowerCase();

  const graphqlEndpoint = 'https://cms.nomi-configurator.nl/graphql';

  const query = `
    query GetAllVouchersForAuth {
      vouchers(first: 100) {
        nodes {
          databaseId
          title
          slug
          voucherVelden {
            toegangscode
            status
            klantEmail
          }
        }
      }
    }
  `;

  try {
    const res = await fetch(graphqlEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
      cache: 'no-store',
    });

    const json = await res.json();
    const vouchers = json?.data?.vouchers?.nodes || [];

    console.log('DEBUG: Ingevoerde code:', cleanCode);
    console.log('DEBUG: Totaal aantal opgehaalde vouchers uit WP:', vouchers.length);

    if (json.errors) {
      console.error('DEBUG: GraphQL errors:', json.errors);
    }

    const voucher = vouchers.find((v: any) => {
      const codeField = String(v?.voucherVelden?.toegangscode || '').trim().toUpperCase();
      const titleField = String(v?.title || '').trim().toUpperCase();
      const slugField = String(v?.slug || '').trim().toUpperCase();
      
      return codeField === cleanCode || titleField === cleanCode || slugField === cleanCode;
    });

    if (!voucher) {
      console.warn('DEBUG: Geen voucher gevonden voor code:', cleanCode);
      return { success: false, error: 'Ongeldige vouchercode. Controleer uw invoer.' };
    }

    const velden = voucher.voucherVelden || {};
    const opgeslagenEmail = String(velden.klantEmail || '').trim().toLowerCase();
    const status = String(velden.status || '').trim().toLowerCase();

    console.log('DEBUG: Gevonden voucher ID:', voucher.databaseId, '| Opgeslagen e-mail:', opgeslagenEmail);

    if (opgeslagenEmail && opgeslagenEmail !== '-' && opgeslagenEmail !== '') {
      if (opgeslagenEmail !== cleanEmail) {
        return { 
          success: false, 
          error: 'Dit e-mailadres komt niet overeen met het e-mailadres dat aan deze vouchercode is gekoppeld.' 
        };
      }
    } else {
      const updateMutation = `
        mutation UpdateVoucherEmail($id: ID!, $email: String!) {
          updateVoucher(input: { id: $id, voucherVelden: { klantEmail: $email, status: "bevestigd" } }) {
            voucher { databaseId }
          }
        }
      `;

      await fetch(graphqlEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: updateMutation,
          variables: { id: voucher.databaseId, email: cleanEmail }
        }),
        cache: 'no-store',
      }).catch(err => console.warn('Kon e-mailadres niet updaten in WP:', err));
    }

    const isBevestigd = status === 'bevestigd' || status.includes('bevestigd') || Boolean(opgeslagenEmail && opgeslagenEmail !== '-');

    return { success: true, isBevestigd };
  } catch (err) {
    console.error('GraphQL verificatie fout:', err);
    return { success: false, error: 'Er is een technische fout opgetreden bij de verificatie.' };
  }
}