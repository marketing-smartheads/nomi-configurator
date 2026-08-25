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
              downloadCategorie {
                categorieTitel
                bestandenLijst {
                  bestandTitel
                  uploadBestand {
                    node {
                      sourceUrl
                      fileSize
                      mimeType
                    }
                  }
                }
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
                partnerLijst {
                  partnerNaam
                  partnerOmschrijving
                  partnerRol
                }
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
  
  const res = await fetch(process.env.NEXT_PUBLIC_WORDPRESS_API_URL || 'http://tg-backend.development/graphql', {
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