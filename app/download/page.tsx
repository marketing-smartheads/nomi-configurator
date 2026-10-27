'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getPageData, getVoucherData } from '@/lib/cms';
import { downloadZip } from 'client-zip';

export default function DownloadPage() {
  const router = useRouter();
  
  const [woningType, setWoningType] = useState<string>('Type A');
  const [gekozenIndeling, setGekozenIndeling] = useState<string>('');
  const [designPakket, setDesignPakket] = useState<string>('Hotel Chic');
  const [pageData, setPageData] = useState<any>(null);
  const [isDownloading, setIsDownloading] = useState<boolean>(false);
  const [isAuthorized, setIsAuthorized] = useState<boolean>(false);
  const [needsVoucherInput, setNeedsVoucherInput] = useState<boolean>(false);
  const [voucherInput, setVoucherInput] = useState<string>('');
  const [voucherError, setVoucherError] = useState<string | null>(null);

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
          console.warn('Kon getPageData niet ophalen:', cmsErr);
        }

        if (!cmsData) {
          const cachedData = sessionStorage.getItem('nomi_pagedata');
          if (cachedData) cmsData = JSON.parse(cachedData);
        } else {
          sessionStorage.setItem('nomi_pagedata', JSON.stringify(cmsData));
        }

        if (isMounted && cmsData) setPageData(cmsData);

        const configuratorData = cmsData?.configuratorData || cmsData?.configurator || {};
        const instelbareDagen = Number(cmsData?.downloadLimietDagen || configuratorData?.downloadLimietDagen || 14); 
        const maxTijd = process.env.NODE_ENV === 'development' ? 60 * 60 * 1000 : instelbareDagen * 24 * 60 * 60 * 1000;    

        const isConfirmed = 
          localStorage.getItem('configurator_bevestigd') === 'true' || 
          localStorage.getItem('configuratorConfirmed') === 'true' ||
          sessionStorage.getItem('configuratorConfirmed') === 'true';

        const timestamp = localStorage.getItem('download_timestamp');
        let geldig = false;

        if (isConfirmed && timestamp) {
          if (Date.now() - Number(timestamp) <= maxTijd) geldig = true;
        }

        const opgeslagenCode = localStorage.getItem('toegangscode');
        if (!geldig && opgeslagenCode) geldig = true;

        if (!geldig) {
          if (isMounted) setNeedsVoucherInput(true);
          return;
        }

        let resolvedWoning = localStorage.getItem('selected_woningType') || sessionStorage.getItem('geselecteerdeWoning') || '';
        let resolvedPakket = localStorage.getItem('selected_designPakket') || sessionStorage.getItem('geselecteerdPakket') || '';

        let resolvedIndeling = '';
        try {
          const rawLocalStorageIndeling = localStorage.getItem('selected_indeling') || sessionStorage.getItem('selected_indeling');
          if (rawLocalStorageIndeling) {
            if (rawLocalStorageIndeling.startsWith('{')) {
              const parsedObj = JSON.parse(rawLocalStorageIndeling);
              resolvedIndeling = parsedObj?.indelingTitel || parsedObj?.indeling_titel || parsedObj?.titel || '';
            } else {
              resolvedIndeling = rawLocalStorageIndeling;
            }
          }
        } catch (e) {
          resolvedIndeling = '';
        }

        if (!resolvedIndeling) {
          resolvedIndeling = sessionStorage.getItem('geselecteerdeIndeling') || localStorage.getItem('geselecteerdeIndeling') || '';
        }

        if (opgeslagenCode && (!resolvedWoning || !resolvedPakket)) {
          const liveVoucherData = await getVoucherData(opgeslagenCode);
          if (liveVoucherData && liveVoucherData.gekozenTypeWoning) {
            resolvedWoning = liveVoucherData.gekozenTypeWoning;
            resolvedPakket = liveVoucherData.gekozenDesignpakket || 'Hotel Chic';
            localStorage.setItem('selected_woningType', resolvedWoning);
            localStorage.setItem('selected_designPakket', resolvedPakket);
          }
        }

        if (!resolvedWoning) resolvedWoning = 'Type A';
        if (!resolvedPakket) resolvedPakket = 'Hotel Chic';

        if (isMounted) {
          setWoningType(resolvedWoning);
          setGekozenIndeling(resolvedIndeling);
          setDesignPakket(resolvedPakket);
          setIsAuthorized(true);
        }
      } catch (err) {
        console.error('Fout bij initialiseren downloadpagina:', err);
        if (isMounted) setNeedsVoucherInput(true);
      }
    }

    initDownloadPage();
    return () => { isMounted = false; };
  }, []);

  const handleVoucherSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const code = voucherInput.trim();
    if (!code || code.length < 3) {
      setVoucherError('Vul een geldige vouchercode in.');
      return;
    }

    try {
      setVoucherError('Controleren...');
      const voucherData = await getVoucherData(code);

      if (!voucherData || !voucherData.gekozenTypeWoning) {
        setVoucherError('Onjuiste vouchercode of geen woningkoppeling gevonden.');
        return;
      }

      const finalWoning = voucherData.gekozenTypeWoning;
      const finalPakket = voucherData.gekozenDesignpakket || 'Hotel Chic';

      localStorage.setItem('toegangscode', code.toUpperCase());
      localStorage.setItem('download_timestamp', Date.now().toString());
      localStorage.setItem('selected_woningType', finalWoning);
      localStorage.setItem('selected_designPakket', finalPakket);

      setWoningType(finalWoning);
      setDesignPakket(finalPakket);
      setNeedsVoucherInput(false);
      setIsAuthorized(true);
    } catch (err) {
      console.error(err);
      setVoucherError('Er is een fout opgetreden bij het controleren van de code.');
    }
  };

  const configuratorData = pageData?.configuratorData || pageData?.configurator || {};
  const downloadSectie = configuratorData?.downloadSectie || {};
  const designPakkettenLijst = configuratorData?.designPaketten || configuratorData?.design_paketten || [];
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
    const uploadObj = bestand?.uploadBestand || bestand?.upload_bestand || bestand?.bestand || {};
    const node = uploadObj?.node || uploadObj;
    let url = node?.mediaItemUrl || node?.sourceUrl || node?.guid || uploadObj?.mediaItemUrl || uploadObj?.sourceUrl || null;
    if (url && typeof url === 'object') url = url.mediaItemUrl || url.sourceUrl || url.url || null;
    return typeof url === 'string' && url.startsWith('http') ? url : null;
  };

  const categorieen = huidigWoningTypeObj?.downloadCategorie || huidigWoningTypeObj?.downloadCategorieën || huidigWoningTypeObj?.download_categorieën || [];

  // Haal het getal van de gekozen indeling op (bijv. "2" uit "Indeling 02")
  const indelingNummerMatch = (gekozenIndeling || '').match(/\d+/);
  const indelingNummer = indelingNummerMatch ? indelingNummerMatch[0].replace(/^0+/, '') : '2'; // Standaard 2

  // SLIMME EN NAUWKEURIGE FILTERFUNCTIE
  const getGefilterdeBestanden = (rawBestandenLijst: any[]) => {
    const activePakketLower = (designPakket || '').toLowerCase(); // bijv. "hotel chic"
    const isHotelChic = activePakketLower.includes('hotel');
    const uitsluitPakket = isHotelChic ? 'modern raw' : 'hotel chic';
    const uitsluitPakketAlt = isHotelChic ? 'modern_raw' : 'hotel_chic';

    return rawBestandenLijst.filter((bestand: any) => {
      const titel = (bestand?.bestandTitel || bestand?.bestand_titel || '').toLowerCase();
      const urlOfPad = (getFileUrl(bestand) || '').toLowerCase();
      const combined = `${titel} ${urlOfPad}`;

      // 1. Sluit direct bestanden uit die van het andere designpakket zijn
      if (combined.includes(uitsluitPakket) || combined.includes(uitsluitPakketAlt)) {
        return false;
      }

      // 2. Bepaal of het bestand bij ons gekozen indelingnummer hoort (of algemeen is zoals moodboards/infosheets)
      const isAlgemeen = !combined.includes('ec0') && !combined.includes('ec') && !combined.includes('concept') && !combined.includes('indeling');
      
      if (isAlgemeen) {
        return combined.includes(activePakketLower) || combined.includes('moodboard') || combined.includes('info sheet');
      }

      // 3. Voor specifieke bestanden (technische tekeningen, concepten, indelingen): 
      // Controleer of het juiste indelingnummer erin voorkomt (bijv. "2", "02", "ec02", "concept 2")
      const matchJuisteIndeling = 
        combined.includes(`ec0${indelingNummer}`) || 
        combined.includes(`ec${indelingNummer}`) || 
        combined.includes(`concept ${indelingNummer}`) || 
        combined.includes(`concept-${indelingNummer}`) || 
        combined.includes(`concept_${indelingNummer}`) || 
        combined.includes(`concept${indelingNummer}`) || 
        combined.includes(`indeling 0${indelingNummer}`) || 
        combined.includes(`indeling0${indelingNummer}`) ||
        combined.includes(`_0${indelingNummer}_`) ||
        combined.includes(`_0${indelingNummer}.`) ||
        combined.includes(`-${indelingNummer}-`) ||
        combined.includes(`type e${indelingNummer}`) ||
        combined.includes(`type_e_${indelingNummer}`) ||
        combined.includes(`type_e0${indelingNummer}`) ||
        combined.includes(`typeec0${indelingNummer}`);

      if (matchJuisteIndeling) {
        return true;
      }

      // Als er een ander indelingnummer in staat (bijv. 1 i.p.v. 2), direct uitsluiten
      const andereGetallen = ['1', '3', '4', '5'].filter(n => n !== indelingNummer);
      for (const ander of andereGetallen) {
        if (
          combined.includes(`ec0${ander}`) || 
          combined.includes(`ec${ander}`) || 
          combined.includes(`concept ${ander}`) || 
          combined.includes(`concept-${ander}`) || 
          combined.includes(`concept_${ander}`) || 
          combined.includes(`concept${ander}`) || 
          combined.includes(`indeling 0${ander}`) || 
          combined.includes(`indeling0${ander}`) ||
          combined.includes(`-_0${ander}_`) ||
          combined.includes(`-${ander}.`)
        ) {
          return false;
        }
      }

      return combined.includes(activePakketLower);
    });
  };

  if (needsVoucherInput) {
    return (
      <div className="min-h-screen bg-dark flex flex-col justify-between text-dark">
        <Header currentScreen="download" />
        <main className="grow bg-[#F9F6F0] flex items-center justify-center px-6 py-20">
          <div className="max-w-md w-full bg-white p-8 sm:p-10 rounded-3xl shadow-sm border border-[#EFECE6] text-center space-y-6">
            <div>
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#C5A880] uppercase">BEVEILIGDE PAGINA</span>
              <h2 className="text-3xl font-serif text-dark mt-2">Vul uw vouchercode in</h2>
              <p className="text-[#666] text-sm mt-2 leading-relaxed">Om de documentatielijsten te bekijken, kunt u hieronder uw unieke vouchercode opgeven.</p>
            </div>
            {voucherError && <p className="text-red-600 text-xs font-medium">{voucherError}</p>}
            <form onSubmit={handleVoucherSubmit} className="space-y-4">
              <input 
                type="text"
                placeholder="Bijv. XX3060"
                value={voucherInput}
                onChange={(e) => setVoucherInput(e.target.value)}
                className="w-full px-4 py-3 bg-[#F9F6F0] border border-[#EFECE6] rounded-xl text-dark text-sm focus:outline-none focus:border-[#C5A880]"
                required
              />
              <button type="submit" className="w-full bg-dark text-white py-3.5 rounded-full font-bold text-xs tracking-[0.2em] uppercase hover:bg-black transition shadow-md cursor-pointer">
                Toegang krijgen
              </button>
            </form>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!isAuthorized) {
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
    if (mimeType.includes('pdf') || lowerUrl.includes('.pdf')) ext = 'PDF';
    else if (mimeType.includes('webp') || lowerUrl.includes('.webp')) ext = 'WEBP';
    else if (mimeType.includes('jpeg') || mimeType.includes('jpg') || lowerUrl.includes('.jpg')) ext = 'JPG';
    else if (mimeType.includes('png') || lowerUrl.includes('.png')) ext = 'PNG';
    
    const bytes = subObj?.node?.fileSize || subObj?.fileSize || bestand?.fileSize;
    if (bytes) {
      const mb = Number(bytes) / (1024 * 1024);
      return `${ext} • ${mb < 1 ? mb.toFixed(2) : Math.round(mb)} MB`;
    }
    return ext;
  };

  const handleSingleDownload = (e: React.MouseEvent, fileUrl: string | null, fileName: string, rawBestandObj: any) => {
    e.preventDefault();
    if (!fileUrl || fileUrl === '#') {
      alert('Geen geldig bestand gekoppeld in het CMS.');
      return;
    }
    let extension = 'pdf';
    const cleanUrl = fileUrl.split('?')[0];
    const parts = cleanUrl.split('.');
    const extPart = parts[parts.length - 1].toLowerCase();
    if (['jpg', 'jpeg', 'png', 'webp', 'pdf'].includes(extPart)) extension = extPart;

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
        const rawBestandenLijst = cat?.bestandenLijst || cat?.bestanden_lijst || [];
        const gefilterdeBestanden = getGefilterdeBestanden(rawBestandenLijst);

        for (const bestand of gefilterdeBestanden) {
          const fileName = dataTypeSafeName(bestand);
          const fileUrl = getFileUrl(bestand);
          if (fileUrl) {
            try {
              let extension = 'pdf';
              const cleanUrl = fileUrl.split('?')[0];
              const parts = cleanUrl.split('.');
              const extPart = parts[parts.length - 1].toLowerCase();
              if (['jpg', 'jpeg', 'png', 'webp', 'pdf'].includes(extPart)) extension = extPart;

              const safeName = fileName.replace(/[^a-zA-Z0-9_-]/g, '_');
              const proxyUrl = `/api/download?url=${encodeURIComponent(fileUrl)}&name=${encodeURIComponent(`${safeName}.${extension}`)}`;
              const response = await fetch(proxyUrl);
              if (!response.ok) throw new Error('Proxy download mislukt');
              const blob = await response.blob();

              filesToZip.push({ name: `${safeName}.${extension}`, lastModified: new Date(), input: blob });
            } catch (fetchErr) {
              console.warn('Kon bestand niet ophalen:', fileUrl);
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
      link.download = `${woningType}-${gekozenIndeling || 'indeling'}-${designPakket}-designpakket.zip`;
      link.click();
      link.remove();
    } catch (error) {
      console.error('Fout bij maken ZIP:', error);
      alert('Er is iets misgegaan.');
    } finally {
      setIsDownloading(false);
    }
  };

  const dataTypeSafeName = (bestand: any) => bestand?.bestandTitel || bestand?.bestand_titel || 'download-bestand';

  return (
    <div className="min-h-screen bg-dark flex flex-col justify-between text-dark">
      <Header currentScreen="download" />

      <main className="grow bg-[#F9F6F0]">
        <div className="relative w-full pt-16 pb-12 px-6 sm:px-12 flex flex-col items-center">        
          <div className="relative z-20 text-center max-w-3xl mx-auto pt-6">
            <span className="text-[10px] font-bold tracking-[0.2em] text-[#C5A880] uppercase">BEVESTIGD • UW PAKKET STAAT KLAAR</span>
            <h1 className="text-4xl md:text-6xl font-serif mt-3 text-dark">{downloadTitel}</h1>
            <div className="text-[#666] text-base md:text-lg leading-relaxed pt-4 mx-auto" dangerouslySetInnerHTML={{ __html: formattedIntro }} />
          </div>

          <div className="relative z-20 max-w-6xl mx-auto w-full flex flex-col sm:flex-row justify-center items-center gap-3 mt-8">
            <div className="px-6 py-2.5 bg-[#D9D3CB] rounded-full text-xs tracking-[0.15em] font-semibold uppercase text-dark w-fit">
              {woningType}
            </div>
            {gekozenIndeling && (
              <div className="px-6 py-2.5 bg-[#D9D3CB] rounded-full text-xs tracking-[0.15em] font-semibold uppercase text-dark w-fit">
                {gekozenIndeling}
              </div>
            )}
            <div className="px-6 py-2.5 bg-[#D9D3CB] rounded-full text-xs tracking-[0.15em] font-semibold uppercase text-dark w-fit">
              {designPakket}
            </div>
          </div>
        </div>

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
                    <img src={imgUrl} alt={`Moodboard ${idx + 1}`} className="w-full h-full object-cover hover:scale-105 transition duration-500" />
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
              const gefilterdeBestanden = getGefilterdeBestanden(rawBestandenLijst);

              if (gefilterdeBestanden.length === 0) return null;

              return (
                <div key={catIndex} className="space-y-6">
                  <h3 className="text-3xl font-serif text-dark">{catTitel}</h3>
                  <div className="space-y-2">
                    {gefilterdeBestanden.map((bestand: any, fileIndex: number) => {
                      const fileUrl = getFileUrl(bestand);
                      const metaText = getFileMeta(bestand, fileUrl);
                      const fileName = dataTypeSafeName(bestand);

                      return (
                        <a
                          key={fileIndex}
                          href={fileUrl && fileUrl !== '#' ? fileUrl : undefined}
                          onClick={(e) => handleSingleDownload(e, fileUrl, fileName, bestand)}
                          className="flex items-center justify-between py-4 border-b border-[#EFECE6] hover:border-[#C5A880] transition group cursor-pointer"
                        >
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-lg bg-[#EFECE6] shrink-0 flex items-center justify-center text-xs font-bold text-[#666]" />
                            <div>
                              <h4 className="font-medium text-dark text-base group-hover:text-[#C5A880] transition">{fileName}</h4>
                              <span className="text-[14px] text-muted mt-0.5 block font-normal">{metaText}</span>
                            </div>
                          </div>
                          <div className="pr-2 text-[#C5A880] font-light text-xl">↓</div>
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