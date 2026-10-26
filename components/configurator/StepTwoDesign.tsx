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
    if (typeof window !== 'undefined') {
      const confirmedStatus = localStorage.getItem('configuratorConfirmed');
      if (confirmedStatus === 'true') {
        setIsConfirmed(true);
      }
    }
  }, []);

  const titel = configuratorData?.titelStap2 || 'Kies uw designpakket';
  const omschrijving = configuratorData?.stap2omschrijving || '';
  
  // Ophalen van de ACF repeater data via de juiste camelCase GraphQL naam
  const rawPakketten = configuratorData?.designPaketten || [];
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
            // Koppeling met de exacte ACF subvelden
            const pakketId = pakket.pakket_id || `pakket-${index}`;
            const pakketTitel = pakket.pakket_titel || '';
            const pakketOmschrijving = pakket.pakket_omschrijving || '';
            const isSelected = designPakket === pakketId;

            const afbField = pakket.pakket_aabeelding;
            const imageUrl = afbField?.node?.sourceUrl || afbField?.sourceUrl;

            // Dynamische materialenlijst direct uit de backend repeater
            const materialen = pakket.materialen_lijst || [];

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
                  <p className="text-xs sm:text-sm text-muted leading-relaxed mb-6">{pakketOmschrijving}</p>

                  {/* Backend materialenlijst per pakket */}
                  {materialen.length > 0 && (
                    <div className="mb-8 bg-[#F9F6F0] p-5 rounded-2xl border border-dark/5">
                      <h4 className="text-[11px] font-bold uppercase tracking-wider text-dark mb-3">De materialen in dit pakket:</h4>
                      <ul className="grid grid-cols-2 gap-2">
                        {materialen.map((mat: any, mIdx: number) => (
                          <li key={mIdx} className="text-xs text-muted flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                            {mat.materiaal_titel}
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