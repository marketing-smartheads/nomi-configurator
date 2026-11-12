'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function StepThreeVisuals({ 
  stepTitle, 
  configuratorData, 
  designPakket,
  woningType 
}: any) {
  const data = configuratorData?.configurator || configuratorData;
  const stappenBalk = data?.stappenBalk || data?.stappen_balk || [];
  const rawWoningTypen = data?.woningTypen || data?.woning_typen || [];
  const woningTypenLijst = Array.isArray(rawWoningTypen) ? rawWoningTypen : rawWoningTypen?.nodes || [];

  const [opgeslagenWoning, setOpgeslagenWoning] = useState(woningType || '');
  const [opgeslagenIndeling, setOpgeslagenIndeling] = useState('');
  const [actiefPakket, setActiefPakket] = useState('Hotel Chic');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const rawW = woningType || localStorage.getItem('selected_woningType') || sessionStorage.getItem('selected_woningType') || '';
        setOpgeslagenWoning(rawW);

        const rawInd = localStorage.getItem('selected_indeling') || sessionStorage.getItem('selected_indeling') || '';
        if (rawInd) {
          if (rawInd.startsWith('{')) {
            const parsed = JSON.parse(rawInd);
            setOpgeslagenIndeling(parsed?.indelingTitel || parsed?.indeling_titel || '');
          } else {
            setOpgeslagenIndeling(rawInd);
          }
        }

        const sessionPak = sessionStorage.getItem('geselecteerdPakket');
        const localPak = localStorage.getItem('selected_designPakket');
        const gekozen = sessionPak || localPak || designPakket || 'Hotel Chic';
        setActiefPakket(gekozen);
      } catch (e) {
        // ignore
      }
    }
  }, [woningType, designPakket]);

  const normWoning = (opgeslagenWoning || '').toLowerCase().replace(/[^a-z0-9]/g, '');
  const normIndeling = (opgeslagenIndeling || '').toLowerCase().replace(/[^a-z0-9]/g, '');
  const normPakket = (actiefPakket || '').toLowerCase().replace(/[^a-z0-9]/g, '');

  const matchendeRijen = woningTypenLijst.filter((w: any) => {
    const naam = (w?.typeNaam || w?.typenaam || '').toLowerCase().replace(/[^a-z0-9]/g, '');
    const indTitel = (w?.indelingTitel || w?.indeling_titel || '').toLowerCase().replace(/[^a-z0-9]/g, '');
    
    const typeMatch = normWoning ? naam === normWoning || naam.includes(normWoning) || normWoning.includes(naam) : true;
    const indelingMatch = normIndeling ? indTitel === normIndeling || indTitel.includes(normIndeling) || normIndeling.includes(indTitel) : true;
    
    return typeMatch && indelingMatch;
  });

  const allePakketten: any[] = [];
  const allePanoramaRenders: any[] = [];

  matchendeRijen.forEach((rij: any) => {
    const rawP = rij?.designPakketten || rij?.design_pakketten || [];
    const pakketLijst = Array.isArray(rawP) ? rawP : rawP?.nodes || [];
    pakketLijst.forEach((p: any) => allePakketten.push(p));

    const rawR = rij?.panoramaRenders || rij?.panorama_renders || [];
    const renderLijst = Array.isArray(rawR) ? rawR : rawR?.nodes || [];
    renderLijst.forEach((r: any) => allePanoramaRenders.push(r));
  });

  const huidigPakketObj = allePakketten.find((p: any) => {
    const pId = (p.pakketId || p.pakket_id || '').trim().toLowerCase().replace(/[^a-z0-9]/g, '');
    const pTitel = (p.pakketTitel || p.pakket_titel || '').trim().toLowerCase().replace(/[^a-z0-9]/g, '');
    return pId === normPakket || pTitel === normPakket || pId.includes(normPakket) || normPakket.includes(pId) || pTitel.includes(normPakket) || normPakket.includes(pTitel);
  }) || allePakketten[0] || {};

  const pakketTitel = huidigPakketObj?.pakketTitel || huidigPakketObj?.pakket_titel || actiefPakket;
  const stapTitel = `Uw gekozen stijl: ${pakketTitel}`;
  const stapOmschrijving = stappenBalk[2]?.stapOmschrijving || stappenBalk[2]?.stap_omschrijving || '';

  const rawVisuals = huidigPakketObj?.visualsSlider || huidigPakketObj?.visuals_slider;
  let visuals: any[] = [];
  if (Array.isArray(rawVisuals)) {
    visuals = rawVisuals;
  } else if (rawVisuals?.nodes) {
    visuals = rawVisuals.nodes;
  } else if (rawVisuals?.edges) {
    visuals = rawVisuals.edges.map((e: any) => e.node);
  }

  const materialen = huidigPakketObj?.materialenLijst || huidigPakketObj?.materialen_lijst || [];
  
  const rawMoodboard = huidigPakketObj?.moodboardGallery || huidigPakketObj?.moodboard_gallery;
  let moodboardGallery: any[] = [];
  if (Array.isArray(rawMoodboard)) {
    moodboardGallery = rawMoodboard;
  } else if (rawMoodboard?.nodes) {
    moodboardGallery = rawMoodboard.nodes;
  } else if (rawMoodboard?.edges) {
    moodboardGallery = rawMoodboard.edges.map((e: any) => e.node);
  }
  const singleMoodboardImage = moodboardGallery[0];
  const moodboardUrl = singleMoodboardImage?.sourceUrl || singleMoodboardImage?.node?.sourceUrl || singleMoodboardImage?.mediaItemUrl;

  // Pannellum 360° logica
  const [isPannellumLoaded, setIsPannellumLoaded] = useState<boolean>(false);

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

  let geselecteerdeMediaUrl: string | null = null;
  let isVideo = false;

  const gevondenRender = allePanoramaRenders.find((item: any) => {
    const stijlNaam = (item?.stijlNaam || item?.stijl_naam || '').toLowerCase().replace(/[^a-z0-9]/g, '');
    return stijlNaam && (normPakket === stijlNaam || normPakket.includes(stijlNaam) || stijlNaam.includes(normPakket));
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
    geselecteerdeMediaUrl = isVideo ? rawMediaUrl : `/api/download?url=${encodeURIComponent(rawMediaUrl)}&name=panorama.jpg`;
  }

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

        const container = document.getElementById('step3-panorama-container');
        if (container) {
          container.innerHTML = '';
        }

        (window as any).pannellum.viewer('step3-panorama-container', {
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

  // Visual Slider & Thumbnail State Management
  const [activeIndex, setActiveIndex] = useState(0);
  const [thumbPage, setThumbPage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
  };

  const thumbsPerPage = 4;
  const maxThumbPage = Math.max(0, Math.ceil(visuals.length / thumbsPerPage) - 1);

  const triggerSlide = (newIndex: number) => {
    if (isAnimating || newIndex === activeIndex) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex(newIndex);
      setThumbPage(Math.floor(newIndex / thumbsPerPage));
      setIsAnimating(false);
    }, 250);
  };

  const handleNext = () => {
    if (visuals.length === 0 || isAnimating) return;
    const nextIndex = (activeIndex + 1) % visuals.length;
    triggerSlide(nextIndex);
  };

  const handlePrev = () => {
    if (visuals.length === 0 || isAnimating) return;
    const prevIndex = (activeIndex - 1 + visuals.length) % visuals.length;
    triggerSlide(prevIndex);
  };

  const handleThumbClick = (absoluteIdx: number) => {
    if (isAnimating) return;
    triggerSlide(absoluteIdx);
  };

  const currentThumbs = visuals.slice(
    thumbPage * thumbsPerPage, 
    (thumbPage + 1) * thumbsPerPage
  );

  return (
    <div className="space-y-16">
      <div className="text-center space-y-4 max-w-3xl mx-auto px-4">
        <p className="text-[10px] tracking-[0.25em] uppercase text-primary font-semibold">
          {`Stap 3 · ${stepTitle}`}
        </p>
        <h2 className="text-3xl sm:text-5xl font-serif text-dark font-normal">
          {stapTitel}
        </h2>
        {stapOmschrijving && (
          <p className="text-xs sm:text-sm text-muted leading-relaxed max-w-2xl mx-auto">
            {stapOmschrijving}
          </p>
        )}
      </div>

      {/* 1. 360° Panorama Viewer */}
      {geselecteerdeMediaUrl && (
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="w-full bg-white p-6 sm:p-12 rounded-[2.5rem] space-y-6 sm:space-y-8 shadow-sm">
            <div>
              <span className="text-[10px] tracking-widest uppercase px-3 py-1 rounded-full bg-[#D9D3CB] text-dark inline-block mb-3 font-medium">
                360° Beleving
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-dark">Interactieve 360° ruimte</h3>
              <p className="text-xs sm:text-sm text-muted mt-1">Ervaar uw gekozen stijl in een interactieve panorama weergave.</p>
            </div>

            {isVideo ? (
              <div className="w-full aspect-4/3 sm:aspect-16/10 relative overflow-hidden rounded-4xl bg-black shadow-inner">
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
                id="step3-panorama-container" 
                style={{ width: '100%', height: '500px' }} 
                className="w-full aspect-4/3 sm:aspect-16/10 rounded-4xl overflow-hidden bg-[#EFECE6] shadow-inner relative"
              />
            )}
          </div>
        </div>
      )}

      {/* 2. 3D Visuals Slider + Thumbnails */}
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="relative">
          <div className="w-full bg-white p-6 sm:p-12 rounded-[2.5rem] space-y-6 sm:space-y-8 shadow-sm">
            <div>
              <span className="text-[10px] tracking-widest uppercase px-3 py-1 rounded-full bg-[#D9D3CB] text-dark inline-block mb-3 font-medium">
                3D Visuals
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-dark">Visuals en sferen</h3>
              <p className="text-xs sm:text-sm text-muted mt-1">Bekijk de visuals van uw gekozen designpakket.</p>
            </div>

            <div 
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
              className="w-full aspect-4/3 sm:aspect-16/10 relative overflow-hidden flex items-center justify-center rounded-4xl active:cursor-grabbing"
            >
              {visuals.length > 0 ? (
                visuals.map((vis: any, idx: number) => {
                  const isActive = idx === activeIndex;
                  const imgSrc = vis?.sourceUrl || vis?.node?.sourceUrl || vis?.mediaItemUrl;
                  return (
                    <div 
                      key={idx} 
                      className={`absolute inset-0 w-full h-full transition-all duration-500 ease-in-out transform ${
                        isActive 
                          ? 'opacity-100 translate-x-0 z-10 scale-100' 
                          : 'opacity-0 translate-x-full z-0 scale-95'
                      }`}
                    >
                      {imgSrc && (
                        <Image 
                          src={imgSrc} 
                          alt={`3D Visual ${idx + 1}`} 
                          fill 
                          className="object-cover rounded-4xl"
                          draggable={false}
                        />
                      )}
                    </div>
                  );
                })
              ) : (
                <span className="text-xs text-muted z-10">[ Geen 3D visuals gevonden voor deze indeling ]</span>
              )}
            </div>
          </div>

          {visuals.length > 1 && (
            <div className="flex justify-center items-center gap-4 mt-6 sm:mt-0">
              <button 
                onClick={handlePrev}
                className="w-12 h-12 rounded-full bg-[#1A1A1A] border-[1.5px] border-[#D9D3CB] flex items-center justify-center text-white shadow-xl hover:scale-105 transition cursor-pointer sm:absolute sm:-left-6 sm:top-1/2 sm:-translate-y-1/2 sm:z-30"
                aria-label="Vorige visual"
              >
                ‹
              </button>

              <button 
                onClick={handleNext}
                className="w-12 h-12 rounded-full bg-[#1A1A1A] border-[1.5px] border-[#D9D3CB] flex items-center justify-center text-white shadow-xl hover:scale-105 transition cursor-pointer sm:absolute sm:-right-6 sm:top-1/2 sm:-translate-y-1/2 sm:z-30"
                aria-label="Volgende visual"
              >
                ›
              </button>
            </div>
          )}
        </div>

        {visuals.length > 1 && (
          <div className="hidden sm:grid grid-cols-4 gap-6 pt-4">
            {currentThumbs.map((vis: any, relativeIdx: number) => {
              const absoluteIdx = thumbPage * thumbsPerPage + relativeIdx;
              const imgSrc = vis?.sourceUrl || vis?.node?.sourceUrl || vis?.mediaItemUrl;
              
              const isFirstOfPage = relativeIdx === 0;
              const isLastOfPage = relativeIdx === currentThumbs.length - 1;

              const canGoPrev = thumbPage > 0;
              const canGoNext = thumbPage < maxThumbPage;

              return (
                <div
                  key={absoluteIdx}
                  onClick={() => handleThumbClick(absoluteIdx)}
                  className={`relative w-full aspect-4/3 rounded-3xl overflow-hidden bg-white transition-all text-left shadow-sm cursor-pointer group ${
                    activeIndex === absoluteIdx ? 'ring-2 ring-primary' : ''
                  }`}
                >
                  {imgSrc && (
                    <Image src={imgSrc} alt={`Thumbnail ${absoluteIdx + 1}`} fill className="object-cover" />
                  )}

                  {isFirstOfPage && canGoPrev && (
                    <div 
                      onClick={(e) => {
                        e.stopPropagation();
                        setThumbPage((p) => Math.max(0, p - 1));
                      }}
                      className="absolute inset-y-0 left-0 w-1/2 bg-black/60 hover:bg-black/75 transition flex items-center justify-center text-white font-semibold text-xs z-20 cursor-pointer"
                      title="Vorige thumbnails"
                    >
                      ‹ Vorige
                    </div>
                  )}

                  {isLastOfPage && canGoNext && (
                    <div 
                      onClick={(e) => {
                        e.stopPropagation();
                        setThumbPage((p) => Math.min(maxThumbPage, p + 1));
                      }}
                      className="absolute inset-y-0 right-0 w-1/2 bg-black/60 hover:bg-black/75 transition flex items-center justify-center text-white font-semibold text-xs z-20 cursor-pointer"
                      title="Volgende thumbnails"
                    >
                      Volgende ›
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* 3. Materialenlijst en Moodboard Afbeelding */}
      <div className="bg-white rounded-[2.5rem] max-w-6xl mx-auto overflow-hidden shadow-sm flex flex-col sm:mx-auto">
        <div className="p-6 sm:p-12 pb-8 space-y-8">
          <div>
            <span className="text-[10px] tracking-widest uppercase px-3 py-1 rounded-full bg-[#D9D3CB] text-dark inline-block mb-3 font-medium">
              {`Moodboard ${pakketTitel}`}
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif text-dark">Materialen in dit pakket</h3>
            <p className="text-xs sm:text-sm text-muted mt-1">De materialen en texturen waaruit uw ontwerp is opgebouwd.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-12 pt-2">
            {materialen.length > 0 ? (
              materialen.map((mat: any, idx: number) => {
                const matTitel = mat.materiaal_titel || mat.materiaalTitel || '';
                return (
                  <div key={idx} className="flex items-center space-x-4 py-3.5 border-b border-[#F0EBE1]">
                    <div className="w-10 h-10 rounded-xl bg-[#E8E2D5] shrink-0" />
                    <span className="text-xs sm:text-sm font-normal text-dark">{matTitel}</span>
                  </div>
                );
              })
            ) : (
              <p className="text-xs text-muted">Geen materialen ingevoerd voor dit pakket.</p>
            )}
          </div>
        </div>
        
        {moodboardUrl && (
          <div className="w-full relative aspect-video overflow-hidden bg-secondary">
            <Image 
              src={moodboardUrl} 
              alt={`Moodboard ${pakketTitel}`} 
              fill 
              className="object-cover" 
            />
          </div>
        )}
      </div>
    </div>
  );
}