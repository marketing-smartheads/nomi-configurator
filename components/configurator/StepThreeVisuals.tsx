'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function StepThreeVisuals({ 
  stepTitle, 
  configuratorData, 
  designPakket 
}: any) {
  const rawPakketten = 
    configuratorData?.designPaketten || 
    configuratorData?.design_paketten || 
    configuratorData?.configuratorBeheer?.designPaketten ||
    configuratorData?.configuratorBeheer?.design_paketten ||
    [];

  const pakkettenLijst = Array.isArray(rawPakketten) 
    ? rawPakketten 
    : rawPakketten?.nodes || rawPakketten?.edges || [];
  
  const huidigPakket = pakkettenLijst.find((p: any) => (p.pakket_id || p.pakketId) === designPakket) || pakkettenLijst[0];

  const pakketTitel = huidigPakket?.pakket_titel || huidigPakket?.pakketTitel || 'Hotel Chic';
  const stapTitel = `Uw gekozen stijl: ${pakketTitel}`;
  const stapOmschrijving = huidigPakket?.stap3_omschrijving || huidigPakket?.stap3Omschrijving || configuratorData?.stap3Omschrijving || 'Bekijk hieronder de 3D-visuals van uw woning. Zo ervaart u vooraf hoe het eindresultaat eruitziet — tot in de materialen en sferen.';

  const visuals = huidigPakket?.visuals_slider?.nodes || huidigPakket?.visualsSlider?.nodes || huidigPakket?.visuals_slider || [];
  const materialen = huidigPakket?.materialen_lijst || huidigPakket?.materialenLijst || [];
  const moodboardGallery = huidigPakket?.moodboard_gallery?.nodes || huidigPakket?.moodboardGallery?.nodes || huidigPakket?.moodboard_gallery || [];

  const [activeIndex, setActiveIndex] = useState(0);
  const [thumbPage, setThumbPage] = useState(0);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('right');
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
      
      <div className="text-center space-y-4 max-w-2xl mx-auto px-4">
        <p className="text-[10px] tracking-[0.25em] uppercase text-primary font-semibold">
          {`Stap 3 · ${stepTitle}`}
        </p>
        <h2 className="text-3xl sm:text-5xl font-serif text-dark font-normal">
          {stapTitel}
        </h2>
        <p className="text-xs sm:text-sm text-muted leading-relaxed">
          {stapOmschrijving}
        </p>
      </div>

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
                  const imgSrc = vis?.sourceUrl || vis?.node?.sourceUrl;
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
                <span className="text-xs text-muted z-10">[ Geen 3D visuals gevonden ]</span>
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

        {visuals.length > 0 && (
          <div className="hidden sm:grid grid-cols-4 gap-6 pt-4">
            {currentThumbs.map((vis: any, relativeIdx: number) => {
              const absoluteIdx = thumbPage * thumbsPerPage + relativeIdx;
              const imgSrc = vis?.sourceUrl || vis?.node?.sourceUrl;
              
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
                </div>
              );
            })}
          </div>
        )}
      </div>

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
              materialen.map((mat: any, idx: number) => (
                <div key={idx} className="flex items-center space-x-4 py-3.5 border-b border-[#F0EBE1]">
                  <div className="w-10 h-10 rounded-xl bg-[#E8E2D5] shrink-0" />
                  <span className="text-xs sm:text-sm font-normal text-dark">{mat.materiaal_titel || mat.materiaalTitel}</span>
                </div>
              ))
            ) : (
              <p className="text-xs text-muted">Geen materialen ingevoerd voor dit pakket.</p>
            )}
          </div>
        </div>

        {moodboardGallery.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 sm:p-0">
            {moodboardGallery.map((img: any, idx: number) => {
              const imageUrl = img?.sourceUrl || img?.node?.sourceUrl;
              if (!imageUrl) return null;

              return (
                <div key={`moodboard-${idx}`} className="relative overflow-hidden bg-secondary aspect-4/5 rounded-2xl sm:rounded-none">
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