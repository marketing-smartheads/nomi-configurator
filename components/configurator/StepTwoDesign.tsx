'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function StepTwoDesign({ 
  stepTitle, 
  configuratorData, 
  designPakket, 
  setDesignPakket 
}: any) {
  const [isConfirmed, setIsConfirmed] = useState(false);

  useEffect(() => {
    // Check of de laatste stap (Bevestiging) al is afgerond
    if (typeof window !== 'undefined') {
      const confirmedStatus = localStorage.getItem('configuratorConfirmed');
      if (confirmedStatus === 'true') {
        setIsConfirmed(true);
      }
    }
  }, []);

  const titel = configuratorData?.titelStap2 || 'Kies uw designpakket';
  const omschrijving = configuratorData?.stap2omschrijving || '';
  
  const rawPakketten = configuratorData?.designPakketten || [];
  const pakkettenLijst = Array.isArray(rawPakketten) ? rawPakketten : rawPakketten?.nodes || [];

  return (
    <div className="space-y-12">
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <p className="text-[10px] tracking-[0.25em] uppercase text-primary font-semibold">
          {`Stap 2 · ${stepTitle}`}
        </p>
        <h2 className="text-4xl sm:text-5xl font-serif text-dark font-normal">
          {titel}
        </h2>
        <p className="text-muted leading-relaxed">
          {omschrijving}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto pt-4">
        {pakkettenLijst.length > 0 ? (
          pakkettenLijst.map((pakket: any, index: number) => {
            const pakketId = pakket.pakketId || `pakket-${index}`;
            const pakketTitel = pakket.pakketTitel || '';
            const pakketOmschrijving = pakket.pakketOmschrijving || '';
            const isSelected = designPakket === pakketId;

            const afbField = pakket.pakketAabeelding || pakket.pakketAfbeelding;
            const imageUrl = afbField?.node?.sourceUrl || afbField?.sourceUrl;

            return (
              <div
                key={pakketId + index}
                className={`bg-white p-7 rounded-[2.5rem] cursor-pointer border transition-all duration-300 flex flex-col justify-between shadow-lg ${
                  isSelected ? 'border-primary ring-1 ring-primary shadow-md' : 'border-dark/10 hover:border-primary/50'
                }`}
              >
                <div>
                  <div className="w-full h-72 bg-secondary rounded-2xl mb-6 relative overflow-hidden flex items-center justify-center border border-dark/5">
                    {imageUrl ? (
                      <Image 
                        src={imageUrl} 
                        alt={pakketTitel || 'Moodboard'} 
                        fill 
                        className="object-cover"
                      />
                    ) : (
                      `[ Afbeelding ${pakketTitel} ]`
                    )}
                  </div>

                  <span className="text-[10px] tracking-widest uppercase px-3.5 py-1.5 rounded-full bg-[#D9D3CB] text-dark inline-block mb-3 font-medium">
                    Designpakket
                  </span>
                  
                  <h3 className="text-3xl font-serif text-dark mb-3">{pakketTitel}</h3>
                  <p className="text-xs sm:text-sm text-muted leading-relaxed mb-8">{pakketOmschrijving}</p>
                </div>

                <div className="flex items-center justify-between pt-6">
                  {/* BEKIJK RENDERS KNOP: Enkel zichtbaar als Bevestigd is */}
                  {isConfirmed ? (
                    <Link 
                      href="/download"
                      className="text-[11px] font-semibold tracking-wider text-dark hover:text-primary transition uppercase"
                    >
                      BEKIJK RENDERS →
                    </Link>
                  ) : (
                    <div /> /* Lege ruimte behouden als de knop er niet is om layout stabiel te houden */
                  )}

                  <button
                    type="button"
                    onClick={() => setDesignPakket(pakketId)}
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
            Geen designpakketten beschikbaar.
          </div>
        )}
      </div>
    </div>
  );
}