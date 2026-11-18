// components/StepTwoDesign.tsx
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function StepTwoDesign({ 
  stepTitle, 
  configuratorData, 
  designPakket, 
  setDesignPakket,
  woningType
}: any) {
  const data = configuratorData?.configurator || configuratorData;
  const stappenBalk = data?.stappenBalk || data?.stappen_balk || [];

  const titel = data?.titelStap2 || 'Kies uw designpakket';
  const omschrijving = stappenBalk[1]?.stapOmschrijving || stappenBalk[1]?.stap_omschrijving || '';
  
  const rawWoningTypen = data?.woningTypen || data?.woning_typen || [];
  const woningTypenLijst = Array.isArray(rawWoningTypen) ? rawWoningTypen : rawWoningTypen?.nodes || [];

  const [opgeslagenWoning, setOpgeslagenWoning] = useState(woningType || '');
  const [opgeslagenIndeling, setOpgeslagenIndeling] = useState('');

  // Lightbox / Zoom state
  const [lightboxImage, setLightboxImage] = useState<{ url: string; title: string } | null>(null);

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
      } catch (e) {
        setOpgeslagenIndeling('');
      }
    }
  }, [woningType]);

  // Sluit lightbox met Escape toets
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxImage(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const normWoning = (opgeslagenWoning || '').toLowerCase().replace(/[^a-z0-9]/g, '');
  const normIndeling = (opgeslagenIndeling || '').toLowerCase().replace(/[^a-z0-9]/g, '');

  const matchendeWoningRijen = woningTypenLijst.filter((w: any) => {
    const naam = (w?.typeNaam || w?.typenaam || '').toLowerCase().replace(/[^a-z0-9]/g, '');
    const indTitel = (w?.indelingTitel || w?.indeling_titel || '').toLowerCase().replace(/[^a-z0-9]/g, '');
    
    const typeMatch = normWoning ? naam === normWoning || naam.includes(normWoning) || normWoning.includes(naam) : true;
    const indelingMatch = normIndeling ? indTitel === normIndeling || indTitel.includes(normIndeling) || normIndeling.includes(indTitel) : true;
    
    return typeMatch && indelingMatch;
  });

  const alleVerzameldePakketten: any[] = [];
  matchendeWoningRijen.forEach((rij: any) => {
    const rawP = rij?.designPakketten || rij?.design_pakketten || [];
    const pakketLijst = Array.isArray(rawP) ? rawP : rawP?.nodes || [];
    pakketLijst.forEach((p: any) => {
      if (p && (p.pakketTitel || p.pakket_titel || p.pakketId || p.pakket_id)) {
        alleVerzameldePakketten.push(p);
      }
    });
  });

  const uniekePakketMap = new Map();
  alleVerzameldePakketten.forEach((pakket) => {
    const schoneNaam = (pakket.pakketTitel || pakket.pakket_titel || pakket.pakketId || pakket.pakket_id || '').trim().toLowerCase();
    if (schoneNaam && !uniekePakketMap.has(schoneNaam)) {
      uniekePakketMap.set(schoneNaam, pakket);
    }
  });
  const pakkettenLijst = Array.from(uniekePakketMap.values());

  const [isConfirmed, setIsConfirmed] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const confirmedStatus = localStorage.getItem('configuratorConfirmed');
      if (confirmedStatus === 'true') {
        setIsConfirmed(true);
      }
    }
  }, []);

  const handleSelect = (pakketTitel: string, pakketId: string) => {
    const gekozen = pakketTitel || pakketId;
    setDesignPakket(gekozen);
    if (typeof window !== 'undefined') {
      localStorage.setItem('selected_designPakket', gekozen);
      sessionStorage.setItem('geselecteerdPakket', gekozen);
    }
  };

  return (
    <div className="space-y-12">
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <p className="text-[10px] tracking-[0.25em] uppercase text-primary font-semibold">
          {stepTitle || 'Designpakket'}
        </p>
        <h2 className="text-4xl sm:text-5xl font-serif text-dark font-normal">
          {titel}
        </h2>
        {omschrijving && (
          <p className="text-xs sm:text-sm text-muted leading-relaxed max-w-2xl mx-auto">
            {omschrijving}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto pt-4">
        {pakkettenLijst.length > 0 ? (
          pakkettenLijst.map((pakket: any, index: number) => {
            const pakketId = pakket.pakketId || pakket.pakket_id || `pakket-${index}`;
            const pakketTitel = pakket.pakketTitel || pakket.pakket_titel || '';
            const pakketOmschrijving = pakket.pakketOmschrijving || pakket.pakket_omschrijving || '';
            
            const actueelGekozen = designPakket || (typeof window !== 'undefined' ? localStorage.getItem('selected_designPakket') : '');
            const isSelected = (actueelGekozen || '').toLowerCase().trim() === (pakketId || '').toLowerCase().trim() ||
                              (actueelGekozen || '').toLowerCase().trim() === (pakketTitel || '').toLowerCase().trim();

            const afbField = pakket.pakketAabeelding || pakket.pakket_aabeelding;
            const imageUrl = afbField?.node?.sourceUrl || afbField?.sourceUrl;

            const materialen = pakket.materialenLijst || pakket.materialen_lijst || [];

            return (
              <div
                key={pakketId + index}
                className={`bg-white p-7 rounded-[2.5rem] border transition-all duration-300 flex flex-col justify-between shadow-lg ${
                  isSelected ? 'border-primary ring-1 ring-primary shadow-md' : 'border-dark/10 hover:border-primary/50'
                }`}
              >
                <div>
                  {/* Klikbare afbeelding met vergrootglas */}
                  <div 
                    onClick={() => imageUrl && setLightboxImage({ url: imageUrl, title: pakketTitel })}
                    className={`w-full h-72 bg-secondary rounded-2xl mb-6 relative overflow-hidden flex items-center justify-center border border-dark/5 group ${imageUrl ? 'cursor-pointer' : ''}`}
                    title="Klik om te vergroten"
                  >
                    {imageUrl ? (
                      <>
                        <Image 
                          src={imageUrl} 
                          alt={pakketTitel || 'Moodboard'} 
                          fill 
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        {/* Vergrootglas Overlay Knop */}
                        <div className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-dark/75 backdrop-blur-md flex items-center justify-center text-white shadow-lg opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                          </svg>
                        </div>
                      </>
                    ) : (
                      <span className="text-xs text-muted">[ Afbeelding {pakketTitel} ]</span>
                    )}
                  </div>

                  <span className="text-[10px] tracking-widest uppercase px-3.5 py-1.5 rounded-full bg-[#D9D3CB] text-dark inline-block mb-3 font-medium">
                    Designpakket
                  </span>
                  
                  <h3 className="text-3xl font-serif text-dark mb-3">{pakketTitel}</h3>
                  
                  {pakketOmschrijving && (
                    <p className="text-xs sm:text-sm text-muted leading-relaxed mb-6">
                      {pakketOmschrijving}
                    </p>
                  )}

                  {materialen.length > 0 && (
                    <div className="mb-8 bg-[#F9F6F0] p-5 rounded-2xl border border-dark/5">
                      <h4 className="text-[11px] font-bold uppercase tracking-wider text-dark mb-3">De materialen in dit pakket:</h4>
                      <ul className="grid sm:grid-cols-2 gap-2">
                        {materialen.map((mat: any, mIdx: number) => (
                          <li key={mIdx} className="text-xs text-muted flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                            {mat.materiaalTitel || mat.materiaal_titel}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-dark/5">
                  {isConfirmed ? (
                    <Link 
                      href="/download"
                      className="text-[11px] font-semibold tracking-wider text-dark hover:text-primary transition uppercase"
                    >
                      BEKIJK RENDERS →
                    </Link>
                  ) : (
                    <div />
                  )}

                  <button
                    type="button"
                    onClick={() => handleSelect(pakketTitel, pakketId)}
                    className={`cursor-pointer px-6 py-3 rounded-full text-[11px] font-semibold tracking-wider transition uppercase ${
                      isSelected 
                        ? 'bg-dark text-white' 
                        : 'bg-dark text-white hover:bg-primary'
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
            Geen designpakketten beschikbaar voor dit type woning.
          </div>
        )}
      </div>

      {/* Fancybox / Lightbox Modal */}
      {lightboxImage && (
        <div 
          onClick={() => setLightboxImage(null)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8 animate-fadeIn cursor-zoom-out"
        >
          <div 
            onClick={(e) => e.stopPropagation()} 
            className="relative max-w-5xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl p-4 sm:p-6 space-y-4"
          >
            <div className="flex items-center justify-between">
              <h4 className="font-serif text-xl sm:text-2xl text-dark">{lightboxImage.title}</h4>
              <button 
                onClick={() => setLightboxImage(null)}
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-dark hover:bg-dark hover:text-white transition cursor-pointer"
                aria-label="Sluiten"
              >
                ✕
              </button>
            </div>
            <div className="relative w-full aspect-16/10 rounded-2xl overflow-hidden bg-secondary">
              <Image 
                src={lightboxImage.url} 
                alt={lightboxImage.title} 
                fill 
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}