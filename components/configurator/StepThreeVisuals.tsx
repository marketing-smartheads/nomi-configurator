'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function StepThreeVisuals({ 
  stepTitle, 
  configuratorData, 
  designPakket 
}: any) {
  const rawPakketten = configuratorData?.designPakketten || [];
  const pakkettenLijst = Array.isArray(rawPakketten) ? rawPakketten : rawPakketten?.nodes || [];
  const huidigPakket = pakkettenLijst.find((p: any) => (p.pakketId || p.pakket_id) === designPakket) || pakkettenLijst[0];

  const pakketTitel = huidigPakket?.pakketTitel || 'Hotel Chic';
  const stapTitel = `Uw gekozen stijl: ${pakketTitel}`;
  const stapOmschrijving = huidigPakket?.stap3Omschrijving || configuratorData?.stap3Omschrijving || 'Bekijk hieronder de 3D-visuals van uw woning. Zo ervaart u vooraf hoe het eindresultaat eruitziet — tot in de materialen en sferen.';

  const visuals = huidigPakket?.visualsSlider?.nodes || [];
  const materialen = huidigPakket?.materialenLijst || [];
  const moodboardGallery = huidigPakket?.moodboardGallery?.nodes || [];

  const [activeIndex, setActiveIndex] = useState(0);
  const [thumbPage, setThumbPage] = useState(0);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('right');
  const [isAnimating, setIsAnimating] = useState(false);

  const thumbsPerPage = 4;
  const maxThumbPage = Math.max(0, Math.ceil(visuals.length / thumbsPerPage) - 1);

  const triggerSlide = (newIndex: number, direction: 'left' | 'right') => {
    if (isAnimating || newIndex === activeIndex) return;
    setSlideDirection(direction);
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
    triggerSlide(nextIndex, 'right');
  };

  const handlePrev = () => {
    if (visuals.length === 0 || isAnimating) return;
    const prevIndex = (activeIndex - 1 + visuals.length) % visuals.length;
    triggerSlide(prevIndex, 'left');
  };

  const handleThumbClick = (absoluteIdx: number) => {
    if (isAnimating) return;
    const direction = absoluteIdx > activeIndex ? 'right' : 'left';
    triggerSlide(absoluteIdx, direction);
  };

  const handlePrevThumbPage = () => {
    setThumbPage((prev) => (prev > 0 ? prev - 1 : maxThumbPage));
  };

  const handleNextThumbPage = () => {
    setThumbPage((prev) => (prev < maxThumbPage ? prev + 1 : 0));
  };

  const currentThumbs = visuals.slice(
    thumbPage * thumbsPerPage, 
    (thumbPage + 1) * thumbsPerPage
  );

  return (
    <div className="space-y-16">
      {/* Header */}
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <p className="text-[10px] tracking-[0.25em] uppercase text-primary font-semibold">
          {`Stap 3 · ${stepTitle}`}
        </p>
        <h2 className="text-4xl sm:text-5xl font-serif text-dark font-normal">
          {stapTitel}
        </h2>
        <p className="text-xs sm:text-sm text-muted leading-relaxed">
          {stapOmschrijving}
        </p>
      </div>

      {/* 3D Visuals Sectie */}
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="relative flex items-center">
          {/* Vorige Pijl */}
          {visuals.length > 1 && (
            <button 
              onClick={handlePrev}
              className="absolute -left-6 z-30 w-12 h-12 rounded-full bg-[#1A1A1A] border-[1.5px] border-[#D9D3CB] flex items-center justify-center text-white shadow-xl hover:scale-105 transition cursor-pointer"
              aria-label="Vorige visual"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.82129 0.5C7.90691 0.500059 7.98026 0.526325 8.0625 0.608398C8.1448 0.694341 8.1709 0.771445 8.1709 0.857422C8.17081 0.944261 8.14426 1.01826 8.0625 1.10059L1.70117 7.46191H15.1113C15.2328 7.46193 15.3079 7.49726 15.3721 7.56055C15.4342 7.6219 15.4687 7.69362 15.4688 7.81348C15.4688 7.93333 15.4342 8.00505 15.3721 8.06641C15.3079 8.12969 15.2328 8.16502 15.1113 8.16504H1.70117L8.05664 14.5205V14.5195C8.1389 14.602 8.16719 14.6788 8.16797 14.7705V14.7715C8.16849 14.838 8.15383 14.8964 8.1123 14.9561L8.06055 15.0176C7.9806 15.0985 7.90742 15.1248 7.81836 15.124C7.72391 15.1231 7.6456 15.0931 7.5625 15.0107L0.614258 8.0625C0.561096 8.00833 0.5354 7.9662 0.523438 7.9375V7.93652C0.50833 7.90019 0.5 7.8601 0.5 7.8125C0.50003 7.76491 0.508641 7.72576 0.523438 7.69043V7.68945C0.535302 7.66099 0.560769 7.61862 0.614258 7.56445L7.56445 0.614258C7.65485 0.527034 7.73453 0.5 7.82129 0.5Z" fill="white" stroke="white"/>
              </svg>
            </button>
          )}

          {/* Witte hoofdkaart */}
          <div className="w-full bg-white p-8 sm:p-12 rounded-[2.5rem] space-y-8">
            <div>
              <span className="text-[10px] tracking-widest uppercase px-3 py-1 rounded-full bg-[#D9D3CB] text-dark inline-block mb-3 font-medium">
                3D Visuals
              </span>
              <h3 className="text-3xl font-serif text-dark">Materialen in dit pakket</h3>
              <p className="text-xs sm:text-sm text-muted mt-1">De materialen en texturen waaruit uw ontwerp is opgebouwd.</p>
            </div>

            <div className="w-full h-100 sm:h-137.5 relative overflow-hidden flex items-center justify-center">
              {visuals.length > 0 ? (
                visuals.map((vis: any, idx: number) => {
                  const isActive = idx === activeIndex;
                  return (
                    <div 
                      key={idx} 
                      className={`absolute inset-0 w-full h-full transition-all duration-500 ease-in-out transform ${
                        isActive 
                          ? 'opacity-100 translate-x-0 z-10 scale-100' 
                          : slideDirection === 'right'
                          ? (idx < activeIndex ? 'opacity-0 -translate-x-full z-0 scale-95' : 'opacity-0 translate-x-full z-0 scale-95')
                          : (idx < activeIndex ? 'opacity-0 -translate-x-full z-0 scale-95' : 'opacity-0 translate-x-full z-0 scale-95')
                      }`}
                    >
                      {vis?.sourceUrl && (
                        <Image 
                          src={vis.sourceUrl} 
                          alt={`3D Visual ${idx + 1}`} 
                          fill 
                          className="object-cover rounded-[2.5rem]"
                        />
                      )}
                    </div>
                  );
                })
              ) : (
                <span className="text-xs text-muted z-10">[ 3D Visual Viewer ]</span>
              )}
            </div>
          </div>

          {/* Volgende Pijl */}
          {visuals.length > 1 && (
            <button 
              onClick={handleNext}
              className="absolute -right-6 z-30 w-12 h-12 rounded-full bg-[#1A1A1A] border-[1.5px] border-[#D9D3CB] flex items-center justify-center text-white shadow-xl hover:scale-105 transition cursor-pointer"
              aria-label="Volgende visual"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.9951 4.68945C12.0661 4.69012 12.1279 4.70677 12.1895 4.75L12.251 4.80273L19.1992 11.751C19.2524 11.8051 19.2781 11.8473 19.29 11.876V11.877C19.3052 11.9133 19.3135 11.9534 19.3135 12.001C19.3134 12.0486 19.3048 12.0877 19.29 12.123V12.124C19.2782 12.1525 19.2527 12.1948 19.1992 12.249L12.2451 19.1973C12.1538 19.2875 12.0752 19.3135 11.9922 19.3135C11.9115 19.3134 11.8393 19.2889 11.7559 19.2031L11.751 19.1982L11.6992 19.1377C11.6571 19.0781 11.6426 19.02 11.6426 18.9551C11.6426 18.8904 11.6573 18.8328 11.6992 18.7734L11.751 18.7129L18.1123 12.3516H4.70215C4.58005 12.3515 4.50781 12.3164 4.44727 12.2559H4.44629C4.38542 12.195 4.35059 12.122 4.35059 12C4.35059 11.878 4.38542 11.805 4.44629 11.7441H4.44727C4.50782 11.6836 4.58005 11.6485 4.70215 11.6484H18.1123L11.7568 5.29297C11.6955 5.23162 11.6637 5.17322 11.6514 5.1084L11.6455 5.04102C11.6446 4.95107 11.6708 4.87748 11.751 4.79688L11.752 4.7959C11.8321 4.71531 11.9055 4.68868 11.9951 4.68945Z" fill="white" stroke="white"/>
              </svg>
            </button>
          )}
        </div>

        {/* Thumbnails Grid */}
        {visuals.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-4">
            {currentThumbs.map((vis: any, relativeIdx: number) => {
              const absoluteIdx = thumbPage * thumbsPerPage + relativeIdx;
              const isFirstInRow = relativeIdx === 0;
              const isLastInRow = relativeIdx === currentThumbs.length - 1;
              const showNavigation = visuals.length > 4 && maxThumbPage > 0;
              
              return (
                <div
                  key={absoluteIdx}
                  onClick={() => handleThumbClick(absoluteIdx)}
                  className={`relative w-full h-55 sm:h-76 rounded-4xl overflow-hidden bg-white transition-all text-left shadow-sm cursor-pointer group ${
                    activeIndex === absoluteIdx ? 'ring-2 ring-primary' : ''
                  }`}
                >
                  {vis?.sourceUrl && (
                    <Image src={vis.sourceUrl} alt={`Thumbnail ${absoluteIdx + 1}`} fill className="object-cover" />
                  )}

                  {isFirstInRow && showNavigation && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handlePrevThumbPage();
                      }}
                      className="absolute inset-y-0 left-0 w-1/2 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-medium text-xs tracking-wider uppercase z-10 hover:bg-black/60 cursor-pointer"
                      title="Vorige pagina"
                    >
                      Vorige
                    </button>
                  )}

                  {isLastInRow && showNavigation && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleNextThumbPage();
                      }}
                      className="absolute inset-y-0 right-0 w-1/2 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-medium text-xs tracking-wider uppercase z-10 hover:bg-black/60 cursor-pointer"
                      title="Volgende pagina"
                    >
                      Meer
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Materialen Overzicht & Moodboard Gallery als één doorlopend wit blok met tussenruimte en grotere hoogte */}
      <div className="bg-white rounded-[2.5rem] max-w-6xl mx-auto overflow-hidden shadow-sm flex flex-col">
        {/* Top gedeelte met padding */}
        <div className="p-8 sm:p-12 pb-8 space-y-8">
          <div>
            <span className="text-[10px] tracking-widest uppercase px-3 py-1 rounded-full bg-[#D9D3CB] text-dark inline-block mb-3 font-medium">
              {`Moodboard ${pakketTitel}`}
            </span>
            <h3 className="text-3xl font-serif text-dark">Materialen in dit pakket</h3>
            <p className="text-xs sm:text-sm text-muted mt-1">De materialen en texturen waaruit uw ontwerp is opgebouwd.</p>
          </div>

          {/* Materiaallijst */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-12 pt-2">
            {materialen.map((mat: any, idx: number) => (
              <div key={idx} className="flex items-center space-x-4 py-3.5 border-b border-[#F0EBE1]">
                <div className="w-10 h-10 rounded-xl bg-[#E8E2D5] shrink-0" />
                <span className="text-xs sm:text-sm font-normal text-dark">{mat.materiaalTitel}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Moodboard Gallery Grid - Sluit naadloos aan op de zijkanten/onderkant, met gap-4 ertussen en een grotere hoogte */}
        {moodboardGallery.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {moodboardGallery.map((img: any, idx: number) => {
              const imageUrl = img?.sourceUrl;
              if (!imageUrl) return null;

              return (
                <div key={`moodboard-${idx}`} className="relative overflow-hidden bg-secondary h-80 sm:h-105">
                  <Image 
                    src={imageUrl} 
                    alt={`Moodboard afbeelding ${idx + 1}`} 
                    fill 
                    className="object-cover" 
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}