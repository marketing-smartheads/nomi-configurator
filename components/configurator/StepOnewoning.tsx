// components/StepOneWoning.tsx
'use client';

import { useState, useEffect } from 'react';

export default function StepOneWoning({ 
  stepTitle, 
  configuratorData, 
  woningTypenLijst, 
  woningType, 
  selectedIndeling, 
  setSelectedIndeling,
  onNext,
  onBack 
}: any) {
  const data = configuratorData?.configurator || configuratorData;
  const stappenBalk = data?.stappenBalk || data?.stappen_balk || [];
  const stap1Omschrijving = stappenBalk[0]?.stapOmschrijving || stappenBalk[0]?.stap_omschrijving || '';
  
  // Lightbox / Zoom state voor plattegrond & inhoudelijk interieuradvies
  const [lightboxImage, setLightboxImage] = useState<{ url: string; title: string; toelichting?: string } | null>(null);

  // Sluit lightbox met Escape toets
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxImage(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const gefilterdeLijst = woningType 
    ? woningTypenLijst.filter((item: any) => {
        const typeNaam = item.typeNaam || item.type_naam || item.titel || '';
        return typeNaam.toLowerCase().replaceAll(' ', '') === woningType.toLowerCase().replaceAll(' ', '');
      })
    : woningTypenLijst;

  // Unieke indelingen filteren op basis van indelingstitel zodat dubbele rijen uit het CMS netjes worden samengevoegd
  const uniekeIndelingen = gefilterdeLijst.filter((item: any, index: number, self: any[]) => {
    const titel = (item.indelingTitel || item.indeling_titel || `Indeling 0${index + 1}`).trim().toLowerCase();
    return index === self.findIndex((t: any) => (t.indelingTitel || t.indeling_titel || '').trim().toLowerCase() === titel);
  });

  const handleSelectIndeling = (item: any, indelingTitel: string) => {
    setSelectedIndeling(item);
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('selected_indeling', JSON.stringify(item));
        sessionStorage.setItem('selected_indeling', JSON.stringify(item));
        sessionStorage.setItem('geselecteerdeIndeling', indelingTitel);
      } catch (e) {
        console.error('Kon indeling niet opslaan in storage:', e);
      }
    }
  };

  if (!woningType && woningTypenLijst.length > 0) {
    return (
      <div className="relative min-h-[400px] flex flex-col justify-center items-center">
        <p className="text-xs text-muted tracking-widest uppercase animate-pulse z-10">
          Uw woningtype wordt geladen...
        </p>
      </div>
    );
  }

  return (
    <div className="relative w-full py-16 px-4 sm:px-8">
      {/* Hoofdinhoud */}
      <div className="relative z-10 space-y-10 max-w-5xl mx-auto w-full">
        
        {/* Titel & Omschrijving */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <p className="text-[10px] tracking-[0.25em] uppercase text-primary font-semibold">
            {`${stepTitle}`}
          </p>
          <h2 className="font-serif text-[clamp(2.25rem,3vw+1rem,3rem)] text-dark font-normal">
            {data?.titelStap1 || data?.stap1Titel || 'Kies uw gewenste indeling'}
          </h2>
          {stap1Omschrijving && (
            <p className="text-xs sm:text-sm text-muted leading-relaxed max-w-2xl mx-auto">
              {stap1Omschrijving}
            </p>
          )}
        </div>
        
        {/* Indelingen Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto w-full">
          {uniekeIndelingen.length > 0 ? (
            uniekeIndelingen.map((item: any, index: number) => {
              const typeNaam = item.typeNaam || item.type_naam || woningType;
              const indelingTitel = item.indelingTitel || item.indeling_titel || `Indeling 0${index + 1}`;
              const metrage = item.metrage || '';
              const imageUrl = item.plattegrond?.node?.sourceUrl || item.plattegrond?.sourceUrl;
              const toelichtingTekst = item.toelichting || '';
              
              const geselecteerdeTitel = selectedIndeling?.indelingTitel || selectedIndeling?.indeling_titel || selectedIndeling;
              const isSelected = selectedIndeling && (
                selectedIndeling === item || 
                geselecteerdeTitel === indelingTitel
              );

              return (
                <div
                  key={`indeling-${index}-${indelingTitel}`}
                  className={`bg-white p-6 rounded-[2.5rem] transition-all duration-300 flex flex-col justify-between shadow-lg border ${
                    isSelected ? 'border-primary ring-2 ring-primary' : 'border-dark/15 hover:border-primary/50'
                  }`}
                >
                  <div>
                    {/* Klikbare plattegrond afbeelding met vergrootglas overlay */}
                    <div 
                      onClick={(e) => {
                        e.stopPropagation();
                        if (imageUrl) {
                          setLightboxImage({ 
                            url: imageUrl, 
                            title: `${typeNaam} · ${indelingTitel}`, 
                            toelichting: toelichtingTekst 
                          });
                        }
                      }}
                      className={`w-full aspect-16/10 bg-white rounded-2xl mb-6 relative overflow-hidden flex items-center justify-center p-4 border border-dark/5 group ${imageUrl ? 'cursor-pointer' : ''}`}
                      title="Klik om te vergroten"
                    >
                      {imageUrl ? (
                        <>
                          <img 
                            src={imageUrl} 
                            alt={indelingTitel} 
                            className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                          />
                          {/* Vergrootglas Overlay Knop */}
                          <div className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-dark/75 backdrop-blur-md flex items-center justify-center text-white shadow-lg opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                            </svg>
                          </div>
                        </>
                      ) : (
                        <span className="text-muted/60 font-medium text-xs">
                          [ Plattegrond {indelingTitel} ]
                        </span>
                      )}
                    </div>

                    <span className="text-[10px] tracking-widest uppercase px-3.5 py-1.5 rounded-full bg-[#D9D3CB] text-dark inline-block mb-3 font-medium">
                      {typeNaam}
                    </span>
                    <h3 className="text-xl font-serif text-dark">{indelingTitel}</h3>
                    <p className="text-xs text-muted py-2">{metrage}</p>
                  </div>

                  <div className="flex items-center justify-end pt-4 mt-4 border-t border-dark/5">
                    <button
                      type="button"
                      onClick={() => handleSelectIndeling(item, indelingTitel)}
                      className={`cursor-pointer px-5 py-2.5 rounded-full text-[11px] font-semibold tracking-wider transition uppercase ${
                        isSelected ? 'bg-primary text-white' : 'bg-dark text-white hover:bg-primary'
                      }`}
                    >
                      {isSelected ? 'GESELECTEERD ✓' : 'SELECTEER'}
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="col-span-2 text-center py-12 text-muted text-xs">
              Geen indelingen gevonden voor uw vouchercode.
            </div>
          )}
        </div>

        {/* Navigatieknoppen onderaan: twee herkenbare knoppen met pijlen en duidelijke tekst */}
        <nav
          aria-label="Stappennavigatie"
          className="max-w-4xl mx-auto px-4 pt-12 mt-12 border-t border-dark/15 w-full"
        >
          <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-4">
            {onBack ? (
              <button
                type="button"
                onClick={onBack}
                className="cursor-pointer flex items-center justify-center gap-3 w-full sm:w-auto rounded-full py-[1.125rem] px-8 text-[11px] font-bold tracking-[0.25em] uppercase border-2 border-dark text-dark bg-transparent hover:bg-dark hover:text-white transition-all duration-300 ease-in-out active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
                Vorige stap
              </button>
            ) : <div className="hidden sm:block" />}

            {onNext && (
              <div className="w-full sm:w-auto flex flex-col items-center sm:items-end gap-2">
                <button
                  type="button"
                  onClick={onNext}
                  disabled={!selectedIndeling}
                  className="cursor-pointer flex items-center justify-center gap-3 w-full sm:w-auto rounded-full py-[1.125rem] px-8 text-[11px] font-bold tracking-[0.25em] uppercase border-2 border-dark bg-dark text-white shadow-md hover:bg-primary hover:border-primary transition-all duration-300 ease-in-out active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none"
                >
                  Volgende stap
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                {!selectedIndeling && (
                  <p className="text-[11px] text-muted" role="status">
                    Selecteer eerst een indeling
                  </p>
                )}
              </div>
            )}
          </div>
        </nav>

      </div>

      {/* Fancybox / Lightbox Modal inclusief Inhoudelijk interieuradvies */}
      {lightboxImage && (
        <div 
          onClick={() => setLightboxImage(null)}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8 animate-fadeIn cursor-zoom-out"
        >
          <div 
            onClick={(e) => e.stopPropagation()} 
            className="relative max-w-4xl w-full bg-white rounded-[2rem] overflow-hidden shadow-2xl p-6 sm:p-8 space-y-6 text-left cursor-default"
          >
            <div className="flex items-center justify-between border-b border-dark/10 pb-4">
              <h4 className="font-serif text-2xl text-dark">{lightboxImage.title}</h4>
              <button 
                onClick={() => setLightboxImage(null)}
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-dark hover:bg-dark hover:text-white transition cursor-pointer"
                aria-label="Sluiten"
              >
                ✕
              </button>
            </div>

            <div className="relative w-full aspect-16/10 rounded-2xl overflow-hidden bg-[#F9F6F0] border border-dark/5 p-4 flex items-center justify-center">
              <img 
                src={lightboxImage.url} 
                alt={lightboxImage.title} 
                className="max-h-full max-w-full object-contain"
              />
            </div>

            {lightboxImage.toelichting ? (
              <div className="bg-[#F9F6F0] p-6 rounded-2xl border border-dark/10 space-y-2">
                <span className="block text-[10px] font-bold tracking-[0.2em] text-primary uppercase">
                  Inhoudelijk interieuradvies
                </span>
                <p className="text-xs sm:text-sm text-muted leading-relaxed">
                  {lightboxImage.toelichting}
                </p>
              </div>
            ) : (
              <p className="text-xs text-muted italic text-center py-2">
                Geen aanvullende toelichting beschikbaar voor deze indeling.
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}