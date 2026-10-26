'use client';

export default function StepOneWoning({ 
  stepTitle, 
  configuratorData, 
  woningTypenLijst, 
  woningType, 
  selectedIndeling, 
  setSelectedIndeling 
}: any) {
  
  const gefilterdeLijst = woningType 
    ? woningTypenLijst.filter((item: any) => {
        const typeNaam = item.typeNaam || item.type_naam || item.titel || '';
        return typeNaam.toLowerCase().replaceAll(' ', '') === woningType.toLowerCase().replaceAll(' ', '');
      })
    : woningTypenLijst;

  if (!woningType && woningTypenLijst.length > 0) {
    return (
      <div className="space-y-12 min-h-[400px] flex flex-col justify-center items-center">
        <p className="text-xs text-muted tracking-widest uppercase animate-pulse">
          Uw woningtype wordt geladen...
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-12">
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <p className="text-[10px] tracking-[0.25em] uppercase text-primary font-semibold">
          {`Stap 1 · ${stepTitle}`}
        </p>
        <h2 className="font-serif text-[clamp(2.25rem,3vw+1rem,3rem)] text-dark font-normal">
          {configuratorData?.stap1Titel || 'Kies uw gewenste indeling'}
        </h2>
        <p className="text-xs sm:text-sm text-muted leading-relaxed max-w-2xl mx-auto">
          {configuratorData?.stap1Omschrijving || 'Thomas de Gier stelde verschillende indelingen samen voor uw woning. Kies de indeling die het beste bij uw levensstijl past.'}
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 max-w-4xl mx-auto">
        {gefilterdeLijst.length > 0 ? (
          gefilterdeLijst.map((item: any, index: number) => {
            const typeNaam = item.typeNaam || item.type_naam || woningType;
            const indelingTitel = item.indelingTitel || item.indeling_titel || `Indeling 0${index + 1}`;
            const metrage = item.metrage || '';
            const imageUrl = item.plattegrond?.node?.sourceUrl || item.plattegrond?.sourceUrl;
            
            const isSelected = selectedIndeling && (
              selectedIndeling === item || 
              selectedIndeling?.indelingTitel === indelingTitel || 
              selectedIndeling?.indeling_titel === indelingTitel
            );

            return (
              <button
                key={indelingTitel + index}
                type="button"
                onClick={() => setSelectedIndeling(item)}
                className={`bg-white p-6 rounded-[2.5rem] cursor-pointer text-left transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-md border ${
                  isSelected ? 'border-primary ring-2 ring-primary' : 'border-dark/15 hover:border-primary/50'
                }`}
              >
                <div>
                  {/* Container met object-contain en padding zodat de hele plattegrond zichtbaar blijft */}
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
  );
}