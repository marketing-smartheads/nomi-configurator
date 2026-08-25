'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getPageData } from '@/lib/cms';
import { downloadZip } from 'client-zip';

export default function DownloadPage() {
  const router = useRouter();
  
  const [woningType, setWoningType] = useState<string | null>(null);
  const [designPakket, setDesignPakket] = useState<string | null>(null);
  const [pageData, setPageData] = useState<any>(null);
  const [isDownloading, setIsDownloading] = useState<boolean>(false);
  const [isAuthorized, setIsAuthorized] = useState<boolean>(false);

  useEffect(() => {
    const storedWoning = sessionStorage.getItem('geselecteerdeWoning');
    const storedPakket = sessionStorage.getItem('geselecteerdPakket');
    
    if (!storedWoning || !storedPakket) {
      router.push('/');
      return;
    }

    setWoningType(storedWoning);
    setDesignPakket(storedPakket);
    setIsAuthorized(true);

    async function fetchData() {
      try {
        const data = await getPageData();
        setPageData(data);
      } catch (err) {
        console.error('Fout bij ophalen CMS data:', err);
      }
    }
    fetchData();
  }, [router]);

  if (!isAuthorized || !woningType || !designPakket) {
    return (
      <div className="min-h-screen bg-dark flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-[#C5A880] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  const configuratorData = pageData?.configuratorData || {};
  const downloadSectie = configuratorData?.downloadSectie || {};
  const designPakkettenLijst = configuratorData?.designPakketten || [];
  const woningTypenLijst = configuratorData?.woningTypen || [];

  // Zoek het geselecteerde designpakket
  const huidigPakketObj = designPakkettenLijst.find(
    (p: any) => p?.pakketTitel?.toLowerCase() === designPakket.toLowerCase()
  ) || designPakkettenLijst[0];

  // Zoek het geselecteerde woningtype op basis van sessionStorage
  const huidigWoningTypeObj = woningTypenLijst.find(
    (w: any) => w?.typeNaam?.toLowerCase() === woningType.toLowerCase()
  ) || woningTypenLijst[0];

  const moodboardGallery = huidigPakketObj?.moodboardGallery?.nodes || huidigPakketObj?.moodboardGallery || [];
  const downloadTitel = downloadSectie?.downloadTitel || 'Download uw designpakket';
  
  const rawIntro = downloadSectie?.downloadIntroductie || 'Alle designbestanden voor %type% — %designpakket%. Download losse bestanden of alles in één keer.';
  const formattedIntro = rawIntro
    .replace('%type%', woningType)
    .replace('%designpakket%', designPakket);

  // Veilig ophalen van categorieën (vangt eventuele naamverschillen op)
  const categorieen = huidigWoningTypeObj?.downloadCategorie || huidigWoningTypeObj?.downloadCategorieën || [];

  const getFileUrl = (bestand: any) => {
    let url = (
      bestand?.uploadBestand?.mediaItemUrl ||
      bestand?.uploadBestand?.node?.mediaItemUrl ||
      bestand?.uploadBestand?.sourceUrl ||
      bestand?.uploadBestand?.node?.sourceUrl ||
      bestand?.uploadBestand?.url ||
      bestand?.bestandUrl ||
      bestand?.url ||
      null
    );

    if (url) {
      url = url.replace(/-pdf\.jpg$/i, '.pdf');
      url = url.replace(/\.pdf\.jpg$/i, '.pdf');
      if (url.toLowerCase().endsWith('-pdf')) {
        url = url.slice(0, -4) + '.pdf';
      }
    }

    return url;
  };

  // Check of er minimaal één geldig bestand aanwezig is
  const heeftBestanden = categorieen.some((cat: any) => 
    cat?.bestandenLijst && cat.bestandenLijst.length > 0 && 
    cat.bestandenLijst.some((bestand: any) => getFileUrl(bestand))
  );

  const getFileMeta = (bestand: any, fileUrl: string | null) => {
    const mimeType = bestand?.uploadBestand?.node?.mimeType || bestand?.uploadBestand?.mimeType || '';
    
    let ext = 'PDF';
    if (mimeType.includes('pdf') || fileUrl?.toLowerCase().includes('.pdf')) {
      ext = 'PDF';
    } else if (mimeType.includes('jpeg') || mimeType.includes('jpg') || fileUrl?.toLowerCase().includes('.jpg') || fileUrl?.toLowerCase().includes('.jpeg')) {
      ext = 'JPG';
    } else if (mimeType.includes('png') || fileUrl?.toLowerCase().includes('.png')) {
      ext = 'PNG';
    }
    
    const bytes = 
      bestand?.uploadBestand?.node?.fileSize || 
      bestand?.uploadBestand?.fileSize || 
      bestand?.fileSize;

    if (bytes) {
      const mb = Number(bytes) / (1024 * 1024);
      return `${ext} • ${mb < 1 ? mb.toFixed(2) : Math.round(mb)} MB`;
    }

    return ext;
  };

  const handleSingleDownload = (e: React.MouseEvent, fileUrl: string, fileName: string) => {
    e.preventDefault();
    if (!fileUrl || fileUrl === '#') {
      alert('Geen geldig bestand gekoppeld in het CMS.');
      return;
    }

    let extension = 'pdf';
    const cleanUrl = fileUrl.split('?')[0];
    const parts = cleanUrl.split('.');
    const extPart = parts[parts.length - 1].toLowerCase();
    if (['jpg', 'jpeg', 'png', 'pdf'].includes(extPart)) {
      extension = extPart;
    }

    const safeName = fileName.replace(/[^a-zA-Z0-9_-]/g, '_');
    const proxyUrl = `/api/download?url=${encodeURIComponent(fileUrl)}&name=${encodeURIComponent(`${safeName}.${extension}`)}`;

    const link = document.createElement('a');
    link.href = proxyUrl;
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  const handleAutomaticZipDownload = async () => {
    try {
      setIsDownloading(true);
      const filesToZip: any[] = [];

      for (const cat of categorieen) {
        for (const bestand of cat?.bestandenLijst || []) {
          const fileUrl = getFileUrl(bestand);
          const fileName = bestand?.bestandTitel || 'download-bestand';
          
          if (fileUrl) {
            try {
              let extension = 'pdf';
              const cleanUrl = fileUrl.split('?')[0];
              const parts = cleanUrl.split('.');
              const extPart = parts[parts.length - 1].toLowerCase();
              if (['jpg', 'jpeg', 'png', 'pdf'].includes(extPart)) {
                extension = extPart;
              }

              const safeName = fileName.replace(/[^a-zA-Z0-9_-]/g, '_');
              const proxyUrl = `/api/download?url=${encodeURIComponent(fileUrl)}&name=${encodeURIComponent(`${safeName}.${extension}`)}`;
              
              const response = await fetch(proxyUrl);
              if (!response.ok) throw new Error('Proxy download mislukt');
              
              const blob = await response.blob();

              filesToZip.push({
                name: `${safeName}.${extension}`,
                lastModified: new Date(),
                input: blob
              });
            } catch (fetchErr) {
              console.warn('Kon bestand niet ophalen via proxy voor zip:', fileUrl);
            }
          }
        }
      }

      if (filesToZip.length === 0) {
        alert('Geen bestanden gevonden om te zippen.');
        setIsDownloading(false);
        return;
      }

      const blob = await downloadZip(filesToZip).blob();
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = `${woningType}-${designPakket}-designpakket.zip`;
      link.click();
      link.remove();
    } catch (error) {
      console.error('Fout bij het genereren van de ZIP:', error);
      alert('Er is iets misgegaan bij het maken van het zip-bestand.');
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="min-h-screen bg-dark flex flex-col justify-between text-dark">
      <Header currentScreen="download" />

      <main className="grow bg-[#F9F6F0]">
        <div className="relative w-full pt-16 pb-12 px-6 sm:px-12 flex flex-col items-center">        
          <div className="relative z-20 text-center max-w-3xl mx-auto pt-6">
            <span className="text-[10px] font-bold tracking-[0.2em] text-[#C5A880] uppercase">
              BEVESTIGD • UW PAKKET STAAT KLAAR
            </span>
            <h1 className="text-4xl md:text-6xl font-serif mt-3 text-dark">
              {downloadTitel}
            </h1>
            
            <div 
              className="text-[#666] text-base md:text-lg leading-relaxed pt-4 mx-auto"
              dangerouslySetInnerHTML={{ __html: formattedIntro }}
            />
          </div>

          <div className="relative z-20 max-w-6xl mx-auto w-full flex flex-col sm:flex-row justify-center gap-3 mt-8">
            <div className="px-6 py-2.5 bg-[#D9D3CB] rounded-full text-xs tracking-[0.15em] font-semibold uppercase text-dark w-fit">
              {woningType}
            </div>
            <div className="px-6 py-2.5 bg-[#D9D3CB] rounded-full text-xs tracking-[0.15em] font-semibold uppercase text-dark w-fit">
              {designPakket}
            </div>
          </div>
        </div>

        <div className="w-full pb-12 text-center">
          <div className="max-w-4xl mx-auto px-6">
            <button
              onClick={handleAutomaticZipDownload}
              disabled={isDownloading || !heeftBestanden}
              className="inline-block bg-dark text-white px-10 py-4 rounded-full font-bold text-xs tracking-[0.2em] uppercase hover:bg-black transition shadow-lg cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {!heeftBestanden 
                ? 'GEEN BESTANDEN BESCHIKBAAR' 
                : isDownloading 
                  ? 'BEZIG MET GENEREREN...' 
                  : 'DOWNLOAD ALLES (.ZIP)'}
            </button>
          </div>
        </div>

        {moodboardGallery.length > 0 && (
          <div className="w-full pb-20 px-6 sm:px-12">
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {moodboardGallery.map((img: any, idx: number) => {
                const imgUrl = img?.sourceUrl || img?.node?.sourceUrl || img?.url;
                if (!imgUrl) return null;
                return (
                  <div key={idx} className="overflow-hidden rounded-2xl aspect-[4/3] shadow-sm bg-[#EFECE6]">
                    <img 
                      src={imgUrl} 
                      alt={`Moodboard ${idx + 1}`} 
                      className="w-full h-full object-cover hover:scale-105 transition duration-500" 
                    />
                  </div>
                );
              })}
            </div>
          </div>
        )}

        <div className="pt-6 pb-24">
          <div className="max-w-4xl mx-auto px-6 space-y-16">
            {categorieen?.map((cat: any, catIndex: number) => (
              <div key={catIndex} className="space-y-6">
                <h3 className="text-3xl font-serif text-dark">
                  {cat?.categorieTitel}
                </h3>

                <div className="space-y-2">
                  {cat?.bestandenLijst?.map((bestand: any, fileIndex: number) => {
                    const fileUrl = getFileUrl(bestand);
                    const metaText = getFileMeta(bestand, fileUrl);
                    const fileName = bestand?.bestandTitel || 'download-bestand';

                    return (
                      <a
                        key={fileIndex}
                        href={fileUrl && fileUrl !== '#' ? fileUrl : undefined}
                        onClick={(e) => handleSingleDownload(e, fileUrl, fileName)}
                        className="flex items-center justify-between py-4 border-b border-[#EFECE6] hover:border-[#C5A880] transition group cursor-pointer"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-lg bg-[#EFECE6] shrink-0 flex items-center justify-center text-xs font-bold text-[#666]">
                            {/* Icoon */}
                          </div>
                          <div>
                            <h4 className="font-medium text-dark text-base group-hover:text-[#C5A880] transition">
                              {fileName}
                            </h4>
                            <span className="text-[14px] text-muted mt-0.5 block font-normal">
                              {metaText}
                            </span>
                          </div>
                        </div>

                        <div className="pr-2 text-[#C5A880] font-light text-xl">
                          ↓
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}