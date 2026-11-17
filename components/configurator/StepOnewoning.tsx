'use client';

import Image from 'next/image';

export default function StepOneWoning({ 
  stepTitle, 
  configuratorData, 
  woningTypenLijst, 
  woningType, 
  selectedIndeling, 
  setSelectedIndeling 
}: any) {
  const data = configuratorData?.configurator || configuratorData;
  const stappenBalk = data?.stappenBalk || data?.stappen_balk || [];
  const stap1Omschrijving = stappenBalk[0]?.stapOmschrijving || stappenBalk[0]?.stap_omschrijving || '';
  
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
      <div className="relative min-h-[400px] flex flex-col justify-center items-center overflow-hidden">
        {/* Decoratieve achtergrond elementen links en rechts */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-32 md:w-48 opacity-20 pointer-events-none select-none">
          <Image src="/assets/Nomi achtergrond element patroon.svg" alt="" width={200} height={600} className="w-full h-auto object-contain" />
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-32 md:w-48 opacity-20 pointer-events-none select-none">
          <Image src="/assets/Patroon logo Thomas de Gier achtergrond.svg" alt="" width={200} height={600} className="w-full h-auto object-contain" />
        </div>

        <p className="text-xs text-muted tracking-widest uppercase animate-pulse z-10">
          Uw woningtype wordt geladen...
        </p>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen py-12 px-4 sm:px-8 overflow-hidden flex flex-col justify-between">
      {/* 1. Decoratieve achtergrondpatronen links en rechts over de hele configurator */}
      <div className="absolute left-0 top-0 bottom-0 w-36 sm:w-56 md:w-72 opacity-15 pointer-events-none select-none z-0 flex items-center overflow-hidden">
        <Image 
          src="/assets/Nomi achtergrond element patroon.svg" 
          alt="Nomi patroon" 
          width={300} 
          height={1000} 
          className="w-full h-auto object-cover" 
        />
      </div>

      <div className="absolute right-0 top-0 bottom-0 w-36 sm:w-56 md:w-72 opacity-15 pointer-events-none select-none z-0 flex items-center overflow-hidden">
        <Image 
          src="/assets/Patroon logo Thomas de Gier achtergrond.svg" 
          alt="Thomas de Gier patroon" 
          width={300} 
          height={1000} 
          className="w-full h-auto object-cover" 
        />
      </div>

      {/* Hoofdinhoud */}
      <div className="relative z-10 space-y-12 max-w-5xl mx-auto w-full">
        
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

        {/* 2. Logo's boven de indelingsblokken (NOMI x Thomas de Gier) */}
        <div className="flex items-center justify-center gap-6 py-2">
          <div className="relative h-6 sm:h-7 w-28 sm:w-32">
            <Image 
              src="/assets/logo-nomi.svg" 
              alt="Nomi Logo" 
              fill 
              className="object-contain object-right"
            />
          </div>
          <div className="relative h-3 w-3 opacity-50">
            <Image 
              src="/assets/x-symbol.svg" 
              alt="X" 
              fill 
              className="object-contain"
            />
          </div>
          <div className="relative h-6 sm:h-7 w-32 sm:w-36">
            <Image 
              src="/assets/logo-tdg.svg" 
              alt="Thomas de Gier Logo" 
              fill 
              className="object-contain object-left"
            />
          </div>
        </div>
        
        {/* Indelingen Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto w-full">
          {uniekeIndelingen.length > 0 ? (
            uniekeIndelingen.map((item: any, index: number) => {
              const typeNaam = item.typeNaam || item.type_naam || woningType;
              const indelingTitel = item.indelingTitel || item.indeling_titel || `Indeling 0${index + 1}`;
              const metrage = item.metrage || '';
              const imageUrl = item.plattegrond?.node?.sourceUrl || item.plattegrond?.sourceUrl;
              
              const geselecteerdeTitel = selectedIndeling?.indelingTitel || selectedIndeling?.indeling_titel || selectedIndeling;
              const isSelected = selectedIndeling && (
                selectedIndeling === item || 
                geselecteerdeTitel === indelingTitel
              );

              return (
                <button
                  key={`indeling-${index}-${indelingTitel}`}
                  type="button"
                  onClick={() => handleSelectIndeling(item, indelingTitel)}
                  className={`bg-white p-6 rounded-[2.5rem] cursor-pointer text-left transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-md border ${
                    isSelected ? 'border-primary ring-2 ring-primary' : 'border-dark/15 hover:border-primary/50'
                  }`}
                >
                  <div>
                    <div className="w-full aspect-16/10 bg-white rounded-2xl mb-6 relative overflow-hidden flex items-center justify-center p-4 border border-dark/5">
                      {imageUrl ? (
                        <img 
                          src={imageUrl} 
                          alt={indelingTitel} 
                          className="max-h-full max-w-full object-contain transition-transform duration-500 hover:scale-105"
                        />
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

                  <div className="text-[11px] font-semibold tracking-wider text-primary mt-4">
                    {isSelected ? 'GESELECTEERD ✓' : 'SELECTEER →'}
                  </div>
                </button>
              );
            })
          ) : (
            <div className="col-span-2 text-center py-12 text-muted text-xs">
              Geen indelingen gevonden voor uw vouchercode.
            </div>
          )}
        </div>

      </div>
    </div>
  );
}