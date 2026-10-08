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
  const [needsVoucherInput, setNeedsVoucherInput] = useState<boolean>(false);
  const [voucherInput, setVoucherInput] = useState<string>('');
  const [voucherError, setVoucherError] = useState<string | null>(null);
  const [isPannellumLoaded, setIsPannellumLoaded] = useState<boolean>(false);

  // 1. Laad Pannellum scripts dynamisch in
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).pannellum) {
      setIsPannellumLoaded(true);
      return;
    }

    if (!document.getElementById('pannellum-css')) {
      const link = document.createElement('link');
      link.id = 'pannellum-css';
      link.rel = 'stylesheet';
      link.href = 'https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.css';
      document.head.appendChild(link);
    }

    let script = document.getElementById('pannellum-js') as HTMLScriptElement;
    if (!script) {
      script = document.createElement('script');
      script.id = 'pannellum-js';
      script.src = 'https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.js';
      script.async = true;
      script.onload = () => setIsPannellumLoaded(true);
      document.body.appendChild(script);
    } else {
      script.onload = () => setIsPannellumLoaded(true);
      if ((window as any).pannellum) {
        setIsPannellumLoaded(true);
      }
    }
  }, []);

  // 2. Initialiseer en valideer de downloadpagina & koppel voucher direct aan Type B / pakket
  useEffect(() => {
    let isMounted = true;

    async function initDownloadPage() {
      try {
        let cmsData = null;
        try {
          const fetchPromise = getPageData();
          const timeoutPromise = new Promise((_, reject) => 
            setTimeout(() => reject(new Error('CMS timeout')), 5000)
          );
          
          cmsData = await Promise.race([fetchPromise, timeoutPromise]);
        } catch (cmsErr) {
          console.warn('Kon getPageData niet ophalen, probeert cache:', cmsErr);
        }

        if (!cmsData) {
          const cachedData = sessionStorage.getItem('nomi_pagedata');
          if (cachedData) {
            cmsData = JSON.parse(cachedData);
          }
        } else {
          sessionStorage.setItem('nomi_pagedata', JSON.stringify(cmsData));
        }

        if (isMounted && cmsData) {
          setPageData(cmsData);
        }

        // Bepaal de geldigheidsduur (Standaard 14 dagen / 2 weken conform Chester, aanpasbaar via CMS)
        const configuratorData = cmsData?.configuratorData || cmsData?.configurator || {};
        const instelbareDagen = configuratorData?.downloadLimietDagen || 14; 
        const maxTijd = process.env.NODE_ENV === 'development'
          ? 60 * 60 * 1000                
          : instelbareDagen * 24 * 60 * 60 * 1000;     

        const isConfirmed = 
          localStorage.getItem('configurator_bevestigd') === 'true' || 
          localStorage.getItem('configuratorConfirmed') === 'true' ||
          sessionStorage.getItem('configuratorConfirmed') === 'true';

        const timestamp = localStorage.getItem('download_timestamp');
        let geldig = false;

        if (isConfirmed && timestamp) {
          const elapsed = Date.now() - Number(timestamp);
          if (elapsed <= maxTijd) {
            geldig = true;
          }
        }

        // Check of er een vouchercode aanwezig is (bijv. XX3060)
        const opgeslagenCode = localStorage.getItem('toegangscode');
        if (!geldig && opgeslagenCode) {
          geldig = true;
        }

        if (!geldig) {
          if (isMounted) {
            setNeedsVoucherInput(true);
          }
          return;
        }

        // SLIMME KOPPELING: Als voucher XX3060 is ingevoerd, forceer direct Type B en Hotel Chic
        let targetWoning = localStorage.getItem('selected_woningType') || sessionStorage.getItem('geselecteerdeWoning');
        let targetPakket = localStorage.getItem('selected_designPakket') || sessionStorage.getItem('geselecteerdPakket');

        if (opgeslagenCode?.toUpperCase() === 'XX3060') {
          targetWoning = 'Type B';
          targetPakket = 'Hotel Chic';
          localStorage.setItem('selected_woningType', 'Type B');
          localStorage.setItem('selected_designPakket', 'Hotel Chic');
        }

        if (!targetWoning || !targetPakket) {
          if (isMounted) {
            setWoningType('Type B'); // Fallback naar Type B i.p.v. Type A
            setDesignPakket('Hotel Chic');
            setIsAuthorized(true);
          }
          return;
        }

        if (isMounted) {
          setWoningType(targetWoning);
          setDesignPakket(targetPakket);
          setIsAuthorized(true);
        }
      } catch (err) {
        console.error('Fout bij initialiseren downloadpagina:', err);
        if (isMounted) {
          setNeedsVoucherInput(true);
        }
      }
    }

    initDownloadPage();

    return () => {
      isMounted = false;
    };
  }, []);

  // Handler voor het valideren van de ingevoerde vouchercode
  const handleVoucherSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const code = voucherInput.trim();
    if (!code || code.length < 3) {
      setVoucherError('Vul een geldige vouchercode in.');
      return;
    }

    try {
      localStorage.setItem('toegangscode', code);
      localStorage.setItem('download_timestamp', Date.now().toString());
      
      let toegekendWoning = 'Type A';
      let toegekendPakket = 'Hotel Chic';

      // Koppel XX3060 direct aan Type B zoals ingesteld in WordPress
      if (code.toUpperCase() === 'XX3060') {
        toegekendWoning = 'Type B';
        toegekendPakket = 'Hotel Chic';
      }

      localStorage.setItem('selected_woningType', toegekendWoning);
      localStorage.setItem('selected_designPakket', toegekendPakket);

      setWoningType(toegekendWoning);
      setDesignPakket(toegekendPakket);
      setNeedsVoucherInput(false);
      setIsAuthorized(true);
    } catch (err) {
      setVoucherError('Onjuiste vouchercode of kon geen verbinding maken.');
    }
  };

  const configuratorData = pageData?.configuratorData || pageData?.configurator || {};
  const downloadSectie = configuratorData?.downloadSectie || {};
  const designPakkettenLijst = configuratorData?.designPakketten || configuratorData?.design_pakketten || [];
  const woningTypenLijst = configuratorData?.woningTypen || configuratorData?.woning_typen || [];

  const normPakket = (designPakket || '').toLowerCase().replace(/[^a-z0-9]/g, '');
  const huidigPakketObj = designPakkettenLijst.find((p: any) => {
    const titel = (p?.pakketTitel || p?.pakket_titel || '').toLowerCase().replace(/[^a-z0-9]/g, '');
    return titel.includes(normPakket) || normPakket.includes(titel);
  }) || designPakkettenLijst[0];

  const normWoning = (woningType || '').toLowerCase().replace(/[^a-z0-9]/g, '');
  const huidigWoningTypeObj = woningTypenLijst.find((w: any) => {
    const naam = (w?.typeNaam || w?.typenaam || '').toLowerCase().replace(/[^a-z0-9]/g, '');
    return naam.includes(normWoning) || normWoning.includes(naam);
  }) || woningTypenLijst[0];

  const moodboardGallery = huidigPakketObj?.moodboardGallery || huidigWoningTypeObj?.moodboardGallery || huidigPakketObj?.moodboard_gallery || [];
  const moodboardNodes = moodboardGallery?.nodes || moodboardGallery;
  const downloadTitel = downloadSectie?.downloadTitel || downloadSectie?.download_titel || 'Download uw designpakket';
  
  const rawIntro = downloadSectie?.downloadIntroductie || downloadSectie?.download_introductie || 'Alle designbestanden voor %type% — %designpakket%. Download losse bestanden of alles in één keer.';
  const formattedIntro = typeof rawIntro === 'string' ? rawIntro
    .replace('%type%', woningType || '')
    .replace('%designpakket%', designPakket || '') : '';

  const getFileUrl = (bestand: any) => {
    if (!bestand) return null;
    if (typeof bestand === 'string') return bestand;

    const uploadObj = 
      bestand?.uploadBestand || 
      bestand?.upload_bestand || 
      bestand?.bestand || 
      {};

    const node = uploadObj?.node || uploadObj;

    let url = (
      node?.mediaItemUrl ||
      node?.sourceUrl ||
      node?.guid ||
      uploadObj?.mediaItemUrl ||
      uploadObj?.sourceUrl ||
      null
    );

    if (url && typeof url === 'object') {
      url = url.mediaItemUrl || url.sourceUrl || url.url || null;
    }

    return typeof url === 'string' && url.startsWith('http') ? url : null;
  };

  const categorieen = huidigWoningTypeObj?.downloadCategorie || huidigWoningTypeObj?.downloadCategorieën || huidigWoningTypeObj?.download_categorieën || [];

  const panoramaRendersLijst = 
    huidigWoningTypeObj?.panoramaRenders || 
    huidigWoningTypeObj?.panorama_renders || 
    huidigWoningTypeObj?.panoramaRendersLijst || [];

  let geselecteerdeMediaUrl: string | null = null;
  let isVideo = false;

  const gevondenRender = panoramaRendersLijst.find((item: any) => {
    const stijlNaam = (item?.stijlNaam || item?.stijl_naam || '').toLowerCase().replace(/[^a-z0-9]/g, '');
    return stijlNaam && (normPakket.includes(stijlNaam) || stijlNaam.includes(normPakket));
  });

  const renderBestandObj = gevondenRender?.renderBestand || gevondenRender?.render_bestand;
  const rawMediaUrl = (
    renderBestandObj?.mediaItemUrl ||
    renderBestandObj?.node?.mediaItemUrl ||
    renderBestandObj?.sourceUrl ||
    renderBestandObj?.node?.sourceUrl ||
    renderBestandObj?.url ||
    null
  );

  if (rawMediaUrl) {
    isVideo = /\.(mp4|webm|mov)(\?.*)?$/i.test(rawMediaUrl);
    if (isVideo) {
      geselecteerdeMediaUrl = rawMediaUrl;
    } else {
      geselecteerdeMediaUrl = `/api/download?url=${encodeURIComponent(rawMediaUrl)}&name=panorama.jpg`;
    }
  } else if (panoramaRendersLijst.length > 0) {
    const eersteItem = panoramaRendersLijst[0];
    const eersteBestand = eersteItem?.renderBestand || eersteItem?.render_bestand;
    const eersteUrl = eersteBestand?.mediaItemUrl || eersteBestand?.node?.mediaItemUrl || eersteBestand?.sourceUrl || eersteBestand?.url;
    if (eersteUrl) {
      isVideo = /\.(mp4|webm|mov)(\?.*)?$/i.test(eersteUrl);
      geselecteerdeMediaUrl = isVideo ? eersteUrl : `/api/download?url=${encodeURIComponent(eersteUrl)}&name=panorama.jpg`;
    }
  }

  // Initialiseer Pannellum 360° viewer
  useEffect(() => {
    let isMounted = true;
    let currentBlobUrl: string | null = null;

    async function loadPanorama() {
      if (isVideo || !isPannellumLoaded || !geselecteerdeMediaUrl || typeof window === 'undefined' || !(window as any).pannellum) {
        return;
      }

      try {
        const response = await fetch(geselecteerdeMediaUrl);
        if (!response.ok) throw new Error('Kon panorama afbeelding niet laden');
        const blob = await response.blob();
        
        if (!isMounted) return;

        currentBlobUrl = URL.createObjectURL(blob);

        const container = document.getElementById('panorama-container');
        if (container) {
          container.innerHTML = '';
        }

        (window as any).pannellum.viewer('panorama-container', {
          type: 'equirectangular',
          panorama: currentBlobUrl,
          autoLoad: true,
          autoRotate: -2,
          compass: false,
          showZoomCtrl: true,
          showFullscreenCtrl: true,
        });
      } catch (e) {
        console.error('Pannellum init error:', e);
      }
    }

    loadPanorama();

    return () => {
      isMounted = false;
      if (currentBlobUrl) {
        URL.revokeObjectURL(currentBlobUrl);
      }
    };
  }, [isPannellumLoaded, geselecteerdeMediaUrl, isVideo]);

  if (needsVoucherInput) {
    return (
      <div className="min-h-screen bg-dark flex flex-col justify-between text-dark">
        <Header currentScreen="download" />
        <main className="grow bg-[#F9F6F0] flex items-center justify-center px-6 py-20">
          <div className="max-w-md w-full bg-white p-8 sm:p-10 rounded-3xl shadow-sm border border-[#EFECE6] text-center space-y-6">
            <div>
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#C5A880] uppercase">
                BEVEILIGDE PAGINA
              </span>
              <h2 className="text-3xl font-serif text-dark mt-2">
                Vul uw vouchercode in
              </h2>
              <p className="text-[#666] text-sm mt-2 leading-relaxed">
                Om de documentatielijsten op een ander apparaat of na verloop van tijd te bekijken, kunt u hieronder uw unieke vouchercode opgeven.
              </p>
            </div>

            {voucherError && (
              <p className="text-red-600 text-xs font-medium">{voucherError}</p>
            )}

            <form onSubmit={handleVoucherSubmit} className="space-y-4">
              <input 
                type="text"
                placeholder="Bijv. XX3060"
                value={voucherInput}
                onChange={(e) => setVoucherInput(e.target.value)}
                className="w-full px-4 py-3 bg-[#F9F6F0] border border-[#EFECE6] rounded-xl text-dark text-sm focus:outline-none focus:border-[#C5A880]"
                required
              />
              <button 
                type="submit"
                className="w-full bg-dark text-white py-3.5 rounded-full font-bold text-xs tracking-[0.2em] uppercase hover:bg-black transition shadow-md cursor-pointer"
              >
                Toegang krijgen
              </button>
            </form>

            <div className="pt-4 border-t border-[#EFECE6]">
              <p className="text-xs text-[#666] leading-relaxed">
                Weet u uw code niet meer? Neem dan contact op met de makelaar: <strong>De Keizer Makelaarsgroep</strong>.
              </p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!isAuthorized || !woningType || !designPakket) {
    return (
      <div className="min-h-screen bg-dark flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-[#C5A880] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  const getFileMeta = (bestand: any, fileUrl: string | null) => {
    const subObj = bestand?.uploadBestand || bestand?.upload_bestand || bestand?.bestand || bestand?.pdfBestand || bestand;
    const mimeType = subObj?.node?.mimeType || subObj?.mimeType || '';
    const lowerUrl = fileUrl?.toLowerCase() || '';
    
    let ext = 'PDF';
    if (mimeType.includes('pdf') || lowerUrl.includes('.pdf')) {
      ext = 'PDF';
    } else if (mimeType.includes('webp') || lowerUrl.includes('.webp')) {
      ext = 'WEBP';
    } else if (mimeType.includes('jpeg') || mimeType.includes('jpg') || lowerUrl.includes('.jpg') || lowerUrl.includes('.jpeg')) {
      ext = 'JPG';
    } else if (mimeType.includes('png') || lowerUrl.includes('.png')) {
      ext = 'PNG';
    }
    
    const bytes = 
      subObj?.node?.fileSize || 
      subObj?.fileSize || 
      bestand?.fileSize;

    if (bytes) {
      const mb = Number(bytes) / (1024 * 1024);
      return `${ext} • ${mb < 1 ? mb.toFixed(2) : Math.round(mb)} MB`;
    }

    return ext;
  };

  const handleSingleDownload = (e: React.MouseEvent, fileUrl: string | null, fileName: string, rawBestandObj: any) => {
    e.preventDefault();
    if (!fileUrl || fileUrl === '#') {
      console.error('Geen URL gevonden voor bestand:', fileName, rawBestandObj);
      alert('Geen geldig bestand gekoppeld in het CMS.');
      return;
    }

    let extension = 'pdf';
    const cleanUrl = fileUrl.split('?')[0];
    const parts = cleanUrl.split('.');
    const extPart = parts[parts.length - 1].toLowerCase();
    if (['jpg', 'jpeg', 'png', 'webp', 'pdf'].includes(extPart)) {
      extension = extPart;
    }

    const safeName = (fileName || 'download').replace(/[^a-zA-Z0-9_-]/g, '_');
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
        const bestandenLijst = cat?.bestandenLijst || cat?.bestanden_lijst || [];
        for (const bestand of bestandenLijst) {
          const fileName = bestand?.bestandTitel || bestand?.bestand_titel || '';
          const fileNorm = fileName.toLowerCase().replace(/[^a-z0-9]/g, '');
          
          if (!fileNorm.includes(normPakket)) continue;

          const fileUrl = getFileUrl(bestand);
          
          if (fileUrl) {
            try {
              let extension = 'pdf';
              const cleanUrl = fileUrl.split('?')[0];
              const parts = cleanUrl.split('.');
              const extPart = parts[parts.length - 1].toLowerCase();
              if (['jpg', 'jpeg', 'png', 'webp', 'pdf'].includes(extPart)) {
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

        {/* 360° Viewer & Stijlweergave sectie */}
        {geselecteerdeMediaUrl && (
          <div className="w-full pb-16 px-6 sm:px-12">
            <div className="max-w-5xl mx-auto bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-[#EFECE6] space-y-6">
              <div>
                <span className="text-[10px] font-bold tracking-[0.2em] text-[#C5A880] uppercase">
                  360° BELEVING & STIJLWEERGAVE
                </span>
                <h3 className="text-2xl font-serif text-dark mt-1">
                  Bekijk uw interieur in 360 graden ({designPakket})
                </h3>
              </div>

              {isVideo ? (
                <div className="w-full h-[450px] sm:h-[550px] rounded-2xl overflow-hidden bg-black shadow-inner">
                  <video 
                    src={geselecteerdeMediaUrl} 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div 
                  id="panorama-container" 
                  style={{ width: '100%', height: '550px' }} 
                  className="rounded-2xl overflow-hidden bg-[#EFECE6] shadow-inner relative"
                />
              )}
            </div>
          </div>
        )}

        <div className="w-full pb-12 text-center">
          <div className="max-w-4xl mx-auto px-6">
            <button
              onClick={handleAutomaticZipDownload}
              disabled={isDownloading}
              className="inline-block bg-dark text-white px-10 py-4 rounded-full font-bold text-xs tracking-[0.2em] uppercase hover:bg-black transition shadow-lg cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isDownloading ? 'BEZIG MET GENEREREN...' : 'DOWNLOAD ALLES (.ZIP)'}
            </button>
          </div>
        </div>

        {moodboardNodes.length > 0 && (
          <div className="w-full pb-20 px-6 sm:px-12">
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {moodboardNodes.map((img: any, idx: number) => {
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
            {categorieen?.map((cat: any, catIndex: number) => {
              const catTitel = cat?.categorieTitel || cat?.categorie_titel;
              const rawBestandenLijst = cat?.bestandenLijst || cat?.bestanden_lijst || [];

              const gefilterdeBestanden = rawBestandenLijst.filter((bestand: any) => {
                const fileName = (bestand?.bestandTitel || bestand?.bestand_titel || '').toLowerCase().replace(/[^a-z0-9]/g, '');
                return fileName.includes(normPakket);
              });

              if (gefilterdeBestanden.length === 0) return null;

              return (
                <div key={catIndex} className="space-y-6">
                  <h3 className="text-3xl font-serif text-dark">
                    {catTitel}
                  </h3>

                  <div className="space-y-2">
                    {gefilterdeBestanden.map((bestand: any, fileIndex: number) => {
                      const fileUrl = getFileUrl(bestand);
                      const metaText = getFileMeta(bestand, fileUrl);
                      const fileName = bestand?.bestandTitel || bestand?.bestand_titel || 'download-bestand';

                      return (
                        <a
                          key={fileIndex}
                          href={fileUrl && fileUrl !== '#' ? fileUrl : undefined}
                          onClick={(e) => handleSingleDownload(e, fileUrl, fileName, bestand)}
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
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}