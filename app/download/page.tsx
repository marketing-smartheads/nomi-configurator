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
  const [gekozenIndeling, setGekozenIndeling] = useState<string>('Indeling 01');
  const [designPakket, setDesignPakket] = useState<string>('Modern Raw');
  const [pageData, setPageData] = useState<any>(null);
  const [isDownloading, setIsDownloading] = useState<boolean>(false);
  const [isAuthorized, setIsAuthorized] = useState<boolean>(false);
  const [needsVoucherInput, setNeedsVoucherInput] = useState<boolean>(false);

  useEffect(() => {
    let isMounted = true;

    async function initDownloadPage() {
      try {
        // Haal de actieve vouchercode op uit alle mogelijke locaties
        const activeVoucher = typeof window !== 'undefined' 
          ? (localStorage.getItem('toegangscode') || sessionStorage.getItem('toegangscode') || localStorage.getItem('voucherCode') || sessionStorage.getItem('voucherCode') || '') 
          : '';

        const isDefinitiefBevestigd = 
          (typeof window !== 'undefined' && localStorage.getItem('configurator_definitief_bevestigd') === 'true') || 
          (typeof window !== 'undefined' && sessionStorage.getItem('configuratorConfirmed') === 'true');

        if (!activeVoucher || !isDefinitiefBevestigd) {
          if (isMounted) setNeedsVoucherInput(true);
          return;
        }

        // STAP 1: Vraag ALTIJD direct de echte data op uit WordPress voor DEZE specifieke vouchercode
        let resolvedWoning = 'Type A';
        let resolvedPakket = 'Modern Raw';
        let resolvedIndeling = 'Indeling 01';

        try {
          const voucherDataFromWP = await getVoucherData(activeVoucher) as any;
          if (voucherDataFromWP) {
            if (voucherDataFromWP.gekozenTypeWoning) resolvedWoning = voucherDataFromWP.gekozenTypeWoning;
            if (voucherDataFromWP.gekozenDesignpakket) resolvedPakket = voucherDataFromWP.gekozenDesignpakket;
            if (voucherDataFromWP.gekozenIndeling) resolvedIndeling = voucherDataFromWP.gekozenIndeling;
          }
        } catch (wpErr) {
          console.warn('Kon voucher data niet ophalen van WP:', wpErr);
        }

        // STAP 2: Overschrijf DIRECT alle storage keys zodat oude cache van NOMI-A004 volledig wordt gewist
        if (typeof window !== 'undefined') {
          localStorage.setItem('toegangscode', activeVoucher);
          sessionStorage.setItem('toegangscode', activeVoucher);
          localStorage.setItem('voucherCode', activeVoucher);
          sessionStorage.setItem('voucherCode', activeVoucher);

          localStorage.setItem('selected_woningType', resolvedWoning);
          sessionStorage.setItem('geselecteerdeWoning', resolvedWoning);

          localStorage.setItem('selected_designPakket', resolvedPakket);
          sessionStorage.setItem('geselecteerdPakket', resolvedPakket);

          localStorage.setItem('selected_indeling', resolvedIndeling);
          sessionStorage.setItem('geselecteerdeIndeling', resolvedIndeling);
        }

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

        if (isMounted) {
          if (cmsData) setPageData(cmsData);
          setWoningType(resolvedWoning);
          setGekozenIndeling(resolvedIndeling);
          setDesignPakket(resolvedPakket);
          setNeedsVoucherInput(false);
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

  const configuratorData = pageData?.configuratorData || pageData?.configurator || {};
  const downloadSectie = configuratorData?.downloadSectie || {};
  const rawWoningTypen = configuratorData?.woningTypen || configuratorData?.woning_typen || [];
  const woningTypenLijst = Array.isArray(rawWoningTypen) ? rawWoningTypen : rawWoningTypen?.nodes || [];

  const normWoning = (woningType || '').toLowerCase().replace(/[^a-z0-9]/g, '');
  const normIndeling = (gekozenIndeling || '').toLowerCase().replace(/[^a-z0-9]/g, '');
  const normPakket = (designPakket || '').toLowerCase().replace(/[^a-z0-9]/g, '');

  // Matchen op basis van WoningType en exacte Indeling (bijv. Indeling 02)
  const matchendeRijen = woningTypenLijst.filter((w: any) => {
    const naam = (w?.typeNaam || w?.typenaam || '').toLowerCase().replace(/[^a-z0-9]/g, '');
    const indTitel = (w?.indelingTitel || w?.indeling_titel || '').toLowerCase().replace(/[^a-z0-9]/g, '');
    const typeMatch = !normWoning || naam.includes(normWoning) || normWoning.includes(naam);
    const indelingMatch = !normIndeling || indTitel.includes(normIndeling) || normIndeling.includes(indTitel);
    return typeMatch && indelingMatch;
  });

  const gebruikteRijen = matchendeRijen.length > 0 ? matchendeRijen : woningTypenLijst;

  const allePakketten: any[] = [];
  gebruikteRijen.forEach((rij: any) => {
    const rawP = rij?.designPakketten || rij?.design_pakketten || [];
    const pakketLijst = Array.isArray(rawP) ? rawP : rawP?.nodes || [];
    pakketLijst.forEach((p: any) => allePakketten.push(p));
  });

  if (allePakketten.length === 0 && (configuratorData?.designPakketten || configuratorData?.design_pakketten)) {
    const algemeen = Array.isArray(configuratorData.designPakketten) ? configuratorData.designPakketten : (configuratorData.designPakketten?.nodes || configuratorData.design_pakketten || []);
    algemeen.forEach((p: any) => allePakketten.push(p));
  }

  // ULTRA-ROBUUSTE PAKKET MATCHING
  const huidigPakketObj = allePakketten.find((p: any) => {
    const pId = (p?.pakketId || p?.pakket_id || '').trim().toLowerCase().replace(/[^a-z0-9]/g, '');
    const pTitel = (p?.pakketTitel || p?.pakket_titel || '').trim().toLowerCase().replace(/[^a-z0-9]/g, '');
    return pId === normPakket || pTitel === normPakket || pId.includes(normPakket) || normPakket.includes(pId) || pTitel.includes(normPakket) || normPakket.includes(pTitel);
  }) || allePakketten.find((p: any) => {
    const pTitel = (p?.pakketTitel || p?.pakket_titel || '').trim().toLowerCase();
    if (normPakket.includes('raw') && (pTitel.includes('raw') || pTitel.includes('a'))) return true;
    if (normPakket.includes('chic') && (pTitel.includes('chic') || pTitel.includes('b'))) return true;
    return false;
  }) || allePakketten[0] || {};

  const alleCategorieen: any[] = [];
  
  gebruikteRijen.forEach((rij: any) => {
    const cats = rij?.downloadCategorie || rij?.downloadCategorieën || rij?.download_categorieen || [];
    const catLijst = Array.isArray(cats) ? cats : cats?.nodes || [];
    catLijst.forEach((c: any) => alleCategorieen.push(c));
  });

  const pakketCats = huidigPakketObj?.downloadCategorie || huidigPakketObj?.downloadCategorieën || huidigPakketObj?.download_categorieen || [];
  const pakketCatLijst = Array.isArray(pakketCats) ? pakketCats : pakketCats?.nodes || [];
  pakketCatLijst.forEach((c: any) => alleCategorieen.push(c));

  // ABSOLUTE FILTERING: Toon exact het gekozen pakket en filter de rest weg
  const gefilterdeCategorieen = alleCategorieen.map((cat: any) => {
    const rawBestanden = cat?.bestandenLijst || cat?.bestanden_lijst || [];
    const bestandenLijst = Array.isArray(rawBestanden) ? rawBestanden : rawBestanden?.nodes || [];

    const matchendeBestanden = bestandenLijst.filter((bestand: any) => {
      const titel = (bestand?.bestandTitel || bestand?.bestand_titel || '').toLowerCase();
      
      const isModernRaw = normPakket.includes('raw') || (normPakket.includes('a') && !normPakket.includes('chic'));
      const isHotelChic = normPakket.includes('chic') || normPakket.includes('b');

      if (isModernRaw) {
        if (titel.includes('hotel chic') || titel.includes('pakket b') || titel.includes('chic')) return false;
        return true;
      }
      if (isHotelChic) {
        if (titel.includes('modern raw') || titel.includes('pakket a') || (titel.includes(' raw') && !titel.includes('hotel chic'))) return false;
        return true;
      }
      return true;
    });

    return {
      ...cat,
      bestandenLijst: matchendeBestanden,
    };
  }).filter((cat: any) => (cat?.bestandenLijst || []).length > 0);

  const downloadTitel = downloadSectie?.downloadTitel || downloadSectie?.download_titel || 'Download uw designpakket';
  
  const formattedIntro = `Alle designbestanden voor ${woningType} — ${designPakket}. Download losse bestanden of alles in één keer.`;

  const getFileUrl = (bestand: any) => {
    if (!bestand) return null;
    if (typeof bestand === 'string') return bestand;
    const uploadObj = bestand?.uploadBestand || bestand?.upload_bestand || bestand?.bestand || {};
    const node = uploadObj?.node || uploadObj;
    let url = node?.mediaItemUrl || node?.sourceUrl || node?.guid || uploadObj?.mediaItemUrl || uploadObj?.sourceUrl || null;
    if (url && typeof url === 'object') url = url.mediaItemUrl || url.sourceUrl || url.url || null;
    return typeof url === 'string' && url.startsWith('http') ? url : null;
  };

  const dataTypeSafeName = (bestand: any) => bestand?.bestandTitel || bestand?.bestand_titel || 'download-bestand';

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

  const handleSingleDownload = (e: React.MouseEvent, fileUrl: string | null, fileName: string) => {
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

      for (const cat of gefilterdeCategorieen) {
        const bestandenLijst = cat?.bestandenLijst || [];

        for (const bestand of bestandenLijst) {
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
            } catch (fetchImgErr) {
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

  if (needsVoucherInput) {
    return (
      <div className="min-h-screen bg-dark flex flex-col justify-between text-dark">
        <Header currentScreen="download" />
        <main className="grow bg-[#F9F6F0] flex items-center justify-center px-6 py-20">
          <div className="max-w-md w-full bg-white p-8 sm:p-10 rounded-3xl shadow-sm border border-[#EFECE6] text-center space-y-6">
            <div>
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#C5A880] uppercase">BEVEILIGDE PAGINA</span>
              <h2 className="text-3xl font-serif text-dark mt-2">Geen actieve configuratie</h2>
              <p className="text-[#666] text-sm mt-2 leading-relaxed">U heeft de configuratie nog niet doorlopen en bevestigd. Voltooi eerst alle stappen in de configurator om uw downloads te ontgrendelen.</p>
            </div>
            <button 
              onClick={() => router.push('/')}
              className="w-full bg-dark text-white py-3.5 rounded-full font-bold text-xs tracking-[0.2em] uppercase hover:bg-black transition shadow-md cursor-pointer"
            >
              Naar de configurator
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!isAuthorized && !pageData) {
    return (
      <div className="min-h-screen bg-dark flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-[#C5A880] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark flex flex-col justify-between text-dark">
      <Header currentScreen="download" />

      <main className="grow bg-[#F9F6F0]">
        <div className="relative w-full pt-16 pb-12 px-6 sm:px-12 flex flex-col items-center">        
          <div className="relative z-20 text-center max-w-3xl mx-auto pt-6">
            <span className="text-[10px] font-bold tracking-[0.2em] text-[#C5A880] uppercase">BEVESTIGD • UW PAKKET STAAT KLAAR</span>
            <h1 className="text-4xl md:text-6xl font-serif mt-3 text-dark">{downloadTitel}</h1>
            <p className="text-[#666] text-base md:text-lg leading-relaxed pt-4 mx-auto">{formattedIntro}</p>
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

        <div className="pt-6 pb-24">
          <div className="max-w-4xl mx-auto px-6 space-y-16">
            {gefilterdeCategorieen?.map((cat: any, catIndex: number) => {
              const catTitel = cat?.categorieTitel || cat?.categorie_titel;
              const bestandenLijst = cat?.bestandenLijst || [];

              if (bestandenLijst.length === 0) return null;

              return (
                <div key={catIndex} className="space-y-6">
                  <h3 className="text-3xl font-serif text-dark">{catTitel}</h3>
                  <div className="space-y-2">
                    {bestandenLijst.map((bestand: any, fileIndex: number) => {
                      const fileUrl = getFileUrl(bestand);
                      const metaText = getFileMeta(bestand, fileUrl);
                      const fileName = dataTypeSafeName(bestand);

                      return (
                        <a
                          key={fileIndex}
                          href={fileUrl && fileUrl !== '#' ? fileUrl : undefined}
                          onClick={(e) => handleSingleDownload(e, fileUrl, fileName)}
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