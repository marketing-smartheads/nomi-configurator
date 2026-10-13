import { useEffect } from 'react';
import Image from 'next/image';

export default function StepOneWoning({ 
  stepTitle, 
  configuratorData, 
  woningTypenLijst, 
  woningType, 
  setWoningType 
}: any) {
  // Filter de lijst zodat uitsluitend het type wordt getoond dat gekoppeld is aan de vouchercode
  const gefilterdeLijst = woningType 
    ? woningTypenLijst.filter((item: any) => {
        const typeNaam = item.typeNaam || item.type_naam || item.titel || '';
        return typeNaam.toLowerCase().replaceAll(' ', '') === woningType.toLowerCase().replaceAll(' ', '');
      })
    : woningTypenLijst;

  // Automatisch de enige gefilterde optie selecteren zodra deze bekend is
  useEffect(() => {
    if (gefilterdeLijst.length === 1) {
      const geselecteerdeWoning = gefilterdeLijst[0];
      const typeNaam = geselecteerdeWoning.typeNaam || geselecteerdeWoning.type_naam || geselecteerdeWoning.titel;
      if (typeNaam && woningType !== typeNaam) {
        setWoningType(typeNaam);
      }
    }
  }, [gefilterdeLijst, woningType, setWoningType]);

  // Als woningType nog leeg is bij eerste render (terwijl voucher geladen wordt), 
  // tonen we een nette loader in plaats van kort alle 4 de woningen
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
          {configuratorData?.stap1Titel || configuratorData?.titelStap1 || 'Welk type woning heeft u?'}
        </h2>
        <p className="text-xs sm:text-sm text-muted leading-relaxed max-w-2xl mx-auto">
          {configuratorData?.stap1Omschrijving || configuratorData?.omschrijvingStap1 || 'Thomas de Gier stelde drie totaal verschillende indelingen samen, elk met een eigen speelsheid en ruimtelijk effect.'}
        </p>
      </div>
      
      {/* Breder grid: max-w-4xl / max-w-5xl net als stap 2, en flex/center bij 1 item */}
      <div className={`flex flex-wrap justify-center gap-8 pt-4 mx-auto ${
        gefilterdeLijst.length === 1 ? 'max-w-xl' : 'max-w-5xl'
      }`}>
        {gefilterdeLijst.length > 0 ? (
          gefilterdeLijst.map((item: any, index: number) => {
            const typeNaam = item.typeNaam || item.type_naam || `Type ${index + 1}`;
            const indelingTitel = item.indelingTitel || item.indeling_titel || '';
            const metrage = item.metrage || '';
            const isSelected = woningType === typeNaam;
            const imageUrl = item.plattegrond?.node?.sourceUrl || item.plattegrond?.sourceUrl;

            return (
              <button
                key={typeNaam + index}
                type="button"
                onClick={() => setWoningType(typeNaam)}
                className={`bg-white p-8 rounded-[2.5rem] cursor-pointer text-left transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-md w-full ${
                  gefilterdeLijst.length === 1 ? 'max-w-xl' : 'md:w-[calc(50%-1rem)]'
                } ${
                  isSelected ? 'border-primary ring-1 ring-primary' : 'border-dark/15 hover:border-primary/50'
                }`}
              >
                <div>
                  <div className="w-full aspect-16/10 bg-secondary rounded-2xl mb-6 relative overflow-hidden flex items-center justify-center text-[11px] text-muted border border-dark/5">
                    {imageUrl ? (
                      <Image 
                        src={imageUrl} 
                        alt={indelingTitel || 'Plattegrond'} 
                        fill 
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority
                      />
                    ) : (
                      <span className="text-muted/60 font-medium">
                        [ Plattegrond {indelingTitel} ]
                      </span>
                    )}
                  </div>

                  <span className="text-[10px] tracking-widest uppercase px-3.5 py-1.5 rounded-full bg-[#D9D3CB] text-dark inline-block mb-3 font-medium">
                    {typeNaam}
                  </span>
                  <h3 className="text-2xl font-serif text-dark">{indelingTitel}</h3>
                  <p className="text-xs text-muted py-3.5">{metrage}</p>
                </div>

                <div className="text-[11px] font-semibold tracking-wider text-primary mt-4">
                  {isSelected ? 'GESELECTEERD ✓' : 'SELECTEER →'}
                </div>
              </button>
            );
          })
        ) : (
          <div className="col-span-2 text-center py-12 text-muted text-xs">
            Geen woningtypen gevonden voor uw vouchercode.
          </div>
        )}
      </div>
    </div>
  );
}