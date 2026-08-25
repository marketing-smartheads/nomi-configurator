import Image from 'next/image';

export default function StepOneWoning({ 
  stepTitle, 
  configuratorData, 
  woningTypenLijst, 
  woningType, 
  setWoningType 
}: any) {
  return (
    <div className="space-y-12">
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <p className="text-[10px] tracking-[0.25em] uppercase text-primary font-semibold">
          {`Stap 1 · ${stepTitle}`}
        </p>
        <h2 className="font-serif text-[clamp(2.25rem,3vw+1rem,3rem)] text-dark font-normal">
          {configuratorData?.stap1Titel || configuratorData?.titelStap1 || 'Welk type woning heeft u?'}
        </h2>
        <p className="text-xs sm:text-sm text-muted leading-relaxed max-w-2xl mx-auto">
          {configuratorData?.stap1Omschrijving || configuratorData?.omschrijvingStap1 || 'Thomas de Gier stelde drie totaal verschillende indelingen samen, elk met een eigen speelsheid en ruimtelijk effect.'}
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
        {woningTypenLijst.length > 0 ? (
          woningTypenLijst.map((item: any, index: number) => {
            const typeNaam = item.typeNaam || item.type_naam || `Type ${index + 1}`;
            const indelingTitel = item.indelingTitel || item.indeling_titel || '';
            const metrage = item.metrage || '';
            const isSelected = woningType === typeNaam;
            const imageUrl = item.plattegrond?.node?.sourceUrl || item.plattegrond?.sourceUrl;

            return (
              <button
                key={typeNaam + index}
                onClick={() => setWoningType(typeNaam)}
                className={`bg-white p-7 rounded-[2.5rem] cursor-pointer text-left transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-md ${
                  isSelected ? 'border-primary ring-1 ring-primary' : 'border-dark/10 hover:border-primary/50'
                }`}
              >
                <div>
                  <div className="w-full h-48 bg-secondary rounded-2xl mb-6 relative overflow-hidden flex items-center justify-center text-[11px] text-muted border border-dark/5">
                    {imageUrl ? (
                      <Image 
                        src={imageUrl} 
                        alt={indelingTitel || 'Plattegrond'} 
                        fill 
                        className="object-cover"
                      />
                    ) : (
                      `[ Plattegrond ${indelingTitel} ]`
                    )}
                  </div>

                  <span className="text-[10px] tracking-widest uppercase px-3.5 py-1.5 rounded-full bg-[#D9D3CB] text-dark inline-block mb-3 font-medium">
                    {typeNaam}
                  </span>
                  <h3 className="text-2xl font-serif text-dark">{indelingTitel}</h3>
                  <p className="text-xs text-muted py-3.5">{metrage}</p>
                </div>

                <div className="text-[11px] font-semibold tracking-wider text-primary">
                  {isSelected ? 'GESELECTEERD ✓' : 'SELECTEER →'}
                </div>
              </button>
            );
          })
        ) : (
          <div className="col-span-3 text-center py-12 text-muted text-xs">
            Geen woningtypen beschikbaar.
          </div>
        )}
      </div>
    </div>
  );
}