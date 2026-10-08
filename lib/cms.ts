// lib/cms.ts

export async function getPageData() {
  const query = `
    query GetPageSections {
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
              # TOEGEVOEGD: Haalt de 360° renders repeater op uit het CMS
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
              visualsSlider {
                nodes {
                  sourceUrl
                }
              }
              materialenLijst {
                materiaalTitel            
              }
              moodboardGallery {
                nodes {
                  sourceUrl
                }
              }
              bevestigingStap {
                bannerAfbeelding {
                  node {
                    sourceUrl
                  }
                }
                bannerTitel            
              }            
            }

            downloadSectie {
              downloadTitel
              downloadIntroductie            
            }
          }
        }
      }
    }
  `;
  
  

  // Bepaal automatisch het juiste GraphQL endpoint op basis van de omgeving
  const graphqlEndpoint = process.env.NODE_ENV === 'development'
    ? (process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT || 'http://tg-backend.development/graphql')
    : (process.env.NEXT_PUBLIC_LIVE_WORDPRESS_ENDPOINT || 'https://cms.nomi-configurator.nl/graphql');

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
  };
}

// In src/lib/cms.ts
export async function getVoucherData(voucherCode: string | null) {
  if (!voucherCode) return null;
  
  const query = `
    query GetVoucherByCode($code: String!) {
      vouchers(where: { search: $code }) {
        nodes {
          title
          voucherDetails {
            toegangscode
            klantNaam
            klantEmail
            gekozenTypeWoning
            gekozenDesignpakket
            status
          }
        }
      }
    }
  `;

  const graphqlEndpoint = process.env.NODE_ENV === 'development'
    ? (process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT || 'http://tg-backend.development/graphql')
    : (process.env.NEXT_PUBLIC_LIVE_WORDPRESS_ENDPOINT || 'https://cms.nomi-configurator.nl/graphql');

  try {
    const res = await fetch(graphqlEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query, variables: { code: voucherCode } }),
      cache: 'no-store',
    });

    const json = await res.json();
    const vouchers = json?.data?.vouchers?.nodes || [];
    
    const match = vouchers.find((v: any) => 
      v?.voucherDetails?.toegangscode?.toLowerCase() === voucherCode.toLowerCase() ||
      v?.title?.toLowerCase() === voucherCode.toLowerCase()
    );

    return match ? match.voucherDetails : null;
  } catch (error) {
    console.error('Fout bij ophalen voucher via GraphQL:', error);
    return null;
  }
}