'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Button from '../Button';

interface StepFourConfirmationProps {
  stepTitle: string;
  configuratorData: any;
  woningType: string | null;
  designPakket: string | null;
  onBack: () => void;
  onConfirm?: () => void;
  loading: boolean;
}

export default function StepFourConfirmation({
  stepTitle,
  configuratorData,
  woningType,
  designPakket,
  onBack,
  loading,
}: StepFourConfirmationProps) {
  const [agreed, setAgreed] = useState(false);
  const router = useRouter();

  const rawWoningTypen = configuratorData?.woningTypen || configuratorData?.woning_typen || [];
  const woningTypenLijst = Array.isArray(rawWoningTypen) ? rawWoningTypen : rawWoningTypen?.nodes || [];

  const rawDesignPakketten = configuratorData?.designPakketten || [];
  const designPakkettenLijst = Array.isArray(rawDesignPakketten) ? rawDesignPakketten : rawDesignPakketten?.nodes || [];

  const storedWoning = woningTypenLijst.find((w: any) => w?.typeNaam === woningType) || null;
  const storedPakket = designPakkettenLijst.find((p: any) => p?.pakketId === designPakket) || null;

  // 1. Unieke banner & partners per designpakket uit de bevestiging_stap groep[cite: 3]
  const bevData = storedPakket?.bevestigingStap || {};
  const heroImage = bevData?.bannerAfbeelding?.node?.sourceUrl;
  const heroTitle = bevData?.bannerTitel;
  const partners = bevData?.partnerLijst || [];

  // 2. Algemene teksten op hoofdniveau ingesteld in ACF[cite: 3]
  const sectieTitel = configuratorData?.bevestigingTitel;
  const subtitel = configuratorData?.bevestigingSubtitel;
  const omschrijving = configuratorData?.bevestigingOmschrijving;
  const waarschuwingTekst = configuratorData?.bevestigingWaarschuwingTekst;
  const akkoordTekst = configuratorData?.bevestigingAkkoordTekst || "Ik ga ermee akkoord dat mijn contactgegevens worden gedeeld met de betrokken partners, zodat zij mij vrijblijvend kunnen informeren over de mogelijkheden.";

  // 3. Teksten voor de partners sectie[cite: 3]
  const partnersTitel = configuratorData?.geselecteerdePartnersTitel || "Geselecteerde partners";
  const partnersOmschrijving = configuratorData?.geselecteerdePartnersOmschrijving || "Onze partners ontvangen uw keuze en werken volgens onze richtlijnen. Zij nemen vrijblijvend contact met u op om u te informeren over de mogelijkheden.";

  const handleConfirmAction = () => {
    // 1. Sla de bevestiging op in localStorage zodat de 'Bekijk renders' knop in stap 2 zichtbaar wordt
    if (typeof window !== 'undefined') {
      localStorage.setItem('configuratorConfirmed', 'true');
    }

    // 2. Sla de keuzes op in sessionStorage zodat de downloadpagina ze kan uitlezen
    sessionStorage.setItem('geselecteerdeWoning', storedWoning?.typeNaam || woningType || '');
    sessionStorage.setItem('geselecteerdPakket', storedPakket?.pakketTitel || designPakket || '');

    // 3. Stuur direct door naar de download pagina
    router.push('/download');
  };

  return (
    <div>
      
      {/* 1. HERO SECTIE[cite: 3] */}
      <div className="relative w-full h-125 overflow-hidden flex flex-col justify-between p-8 sm:p-12">
        {heroImage && (
          <Image
            src={heroImage}
            alt={heroTitle || 'Gekozen interieur sfeer'}
            fill
            className="absolute inset-0 object-cover object-center w-full z-0"
            priority
          />
        )}
        
        <div 
          className="absolute inset-0 z-10 pointer-events-none" 
          style={{ background: 'linear-gradient(180deg, rgba(24, 24, 32, 0.25) 0%, rgba(24, 24, 32, 0.78) 100%)' }}
        />
        
        {/* Banner Titel[cite: 3] */}
        <div className="relative z-20 text-white text-center max-w-4xl mx-auto pt-6">
          {heroTitle && <h1 className="text-4xl md:text-6xl font-serif">{heroTitle}</h1>}
        </div>

        {/* Gekozen type woning & designpakket in 1 gecombineerd element[cite: 3] */}
        <div className="relative z-20 max-w-6xl mx-auto w-full flex">
          <div className="inline-flex flex-wrap sm:flex-nowrap items-center bg-[#181820]/80 backdrop-blur-md border border-white/10 rounded-2xl p-2 shadow-2xl">
            <div className="px-6 py-3 flex flex-col min-w-[200px]">
              <span className="text-[10px] font-bold tracking-[0.2em] text-primary uppercase">Type woning</span>
              <span className="text-lg font-serif text-white mt-0.5">{storedWoning?.typeNaam || woningType || 'Niet geselecteerd'}</span>
            </div>

            <div className="hidden sm:block w-[1px] h-10 bg-white/10 my-auto" />
            
            <div className="px-6 py-3 flex flex-col min-w-[200px] border-t sm:border-t-0 border-white/10 w-full sm:w-auto">
              <span className="text-[10px] font-bold tracking-[0.2em] text-primary uppercase">Designpakket</span>
              <span className="text-lg font-serif text-white mt-0.5">{storedPakket?.pakketTitel || designPakket || 'Niet geselecteerd'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. BEVESTIGING TEKST & WAARSCHUWING[cite: 3] */}
      <div className="max-w-2xl max-sm:px-4 mx-auto text-center space-y-6 py-16">
        <div className="space-y-3">
          {sectieTitel && (
            <h2 className="text-3xl md:text-4xl font-serif text-dark m-0">
              {sectieTitel}
            </h2>
          )}
          {subtitel && (
            <h2 className="text-2xl md:text-3xl font-serif text-primary">
              {subtitel}
            </h2>
          )}
          {omschrijving && (
            <p className="text-muted text-lg leading-relaxed pt-4">
              {omschrijving}
            </p>
          )}
        </div>

        {waarschuwingTekst && (
          <p className="text-[11px] font-bold tracking-[0.15em] text-primary uppercase leading-relaxed">
            {waarschuwingTekst}
          </p>
        )}

        {/* Checkbox[cite: 3] */}
        <label className="flex items-start justify-center gap-3 cursor-pointer pt-4 text-left">
          <div className="relative flex items-center justify-center mt-0.5">
            <input 
              type="checkbox" 
              checked={agreed} 
              onChange={(e) => setAgreed(e.target.checked)}
              className="peer sr-only"
            />
            <div className="w-6 h-6 bg-[#E5E2DD] rounded-lg peer-checked:bg-[#E5E2DD] transition-all flex items-center justify-center shrink-0">
              {agreed && (
                <svg 
                  className="w-4 h-4 text-[#2E7D4E]" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor" 
                  strokeWidth={3}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              )}
            </div>
          </div>
          <span className="text-xs text-dark leading-relaxed">
            {akkoordTekst}
          </span>
        </label>

        {/* Bevestig Keuzes + Terug[cite: 3] */}
        <div className="flex items-center justify-center gap-8 pt-6">
          <Button 
            onClick={handleConfirmAction}
            disabled={!agreed}
            loading={loading}
            className="px-10 py-4"
          >
            BEVESTIG KEUZES
          </Button>

          <button
            onClick={onBack}
            disabled={loading}
            className="cursor-pointer text-dark hover:text-primary text-[11px] font-bold tracking-[0.25em] uppercase transition"
          >
            TERUG
          </button>
        </div>
      </div>

      {/* 3. GESELECTEERDE PARTNERS LIJST[cite: 3] */}
      {partners.length > 0 && (
        <div className="max-w-4xl mx-auto max-sm:px-4 space-y-10 py-16">
          <div className="text-center space-y-3">
            <h3 className="text-3xl md:text-4xl font-serif text-dark">{partnersTitel}</h3>
            <p className="text-muted text-lg max-w-xl mx-auto leading-relaxed">
              {partnersOmschrijving}
            </p>
          </div>

          <div className="border-t border-dark/10">
            {partners.map((partner: any, index: number) => (
              <div 
                key={index} 
                className="py-6 flex items-center justify-between border-b border-dark/10 gap-4"
              >
                <div className="flex items-center space-x-5">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#E5E2DD] shrink-0" />
                  <div>
                    <h4 className="font-serif text-dark text-lg">{partner?.partnerNaam}</h4>
                    {partner?.partnerOmschrijving && (
                      <p className="text-xs text-muted mt-0.5">{partner?.partnerOmschrijving}</p>
                    )}
                  </div>
                </div>

                {partner?.partnerRol && (
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase bg-[#E5E2DD]/70 text-dark px-5 py-2.5 rounded-full shrink-0">
                    {partner?.partnerRol}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}