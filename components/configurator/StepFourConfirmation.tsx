'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Button from '../Button';

interface StepFourConfirmationProps {
  stepTitle: string;
  configuratorData: any;
  woningType: string | null;
  designPakket: string | null;
  onBack: () => void;
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
  const [showPopup, setShowPopup] = useState(false);
  const [agreed1, setAgreed1] = useState(false);
  const [agreed2, setAgreed2] = useState(false);
  const [klantNaam, setKlantNaam] = useState('');
  const [klantEmail, setKlantEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  // Haal automatisch e-mail en naam op uit sessionStorage/localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const opgeslagenEmail = 
        sessionStorage.getItem('klantEmail') || 
        localStorage.getItem('klantEmail') || 
        sessionStorage.getItem('email') || 
        localStorage.getItem('email') || '';
      setKlantEmail(opgeslagenEmail);

      const opgeslagenNaam = 
        sessionStorage.getItem('klantNaam') || 
        localStorage.getItem('klantNaam') || '';
      if (opgeslagenNaam) setKlantNaam(opgeslagenNaam);
    }
  }, []);

  const rawWoningTypen = configuratorData?.woningTypen || configuratorData?.woning_typen || [];
  const woningTypenLijst = Array.isArray(rawWoningTypen) ? rawWoningTypen : rawWoningTypen?.nodes || [];

  const rawDesignPakketten = configuratorData?.designPakketten || configuratorData?.design_pakketten || [];
  const designPakkettenLijst = Array.isArray(rawDesignPakketten) ? rawDesignPakketten : rawDesignPakketten?.nodes || [];

  const storedWoning = woningTypenLijst.find((w: any) => (w?.typeNaam || w?.type_naam) === woningType) || null;
  const storedPakket = designPakkettenLijst.find((p: any) => (p?.pakketId || p?.pakket_id || p?.pakketTitel) === designPakket) || null;

  const bevData = storedPakket?.bevestigingStap || storedPakket?.bevestiging_stap || {};
  const heroImage = bevData?.bannerAfbeelding?.node?.sourceUrl || bevData?.banner_afbeelding?.sourceUrl || bevData?.bannerAfbeelding?.sourceUrl;
  const heroTitle = bevData?.bannerTitel || bevData?.banner_titel;

  const rawPartners = storedWoning?.partnerLijst || storedWoning?.partner_lijst || storedWoning?.partnerLijst?.nodes || [];
  const partners = Array.isArray(rawPartners) ? rawPartners : [];

  const sectieTitel = configuratorData?.bevestigingTitel || configuratorData?.bevestiging_titel;
  const subtitel = configuratorData?.bevestigingSubtitel || configuratorData?.bevestiging_subtitel;
  const omschrijving = configuratorData?.bevestigingOmschrijving || configuratorData?.bevestiging_omschrijving;
  const waarschuwingTekst = configuratorData?.bevestigingWaarschuwingTekst || configuratorData?.bevestiging_waarschuwing || "Let op: na het bevestigen kunt u niet meer terug naar de vorige stappen. Controleer daarom uw keuzes hierboven goed.";
  const akkoordTekst = configuratorData?.bevestigingAkkoordTekst || configuratorData?.bevestiging_akkoord || "Ik ga ermee akkoord dat mijn contactgegevens worden gedeeld met de betrokken partners, zodat zij mij vrijblijvend kunnen informeren over de mogelijkheden.";

  const partnersTitel = configuratorData?.geselecteerdePartnersTitel || configuratorData?.geselecteerde_partners_titel || "Geselecteerde partners";
  const partnersOmschrijving = configuratorData?.geselecteerdePartnersOmschrijving || configuratorData?.geselecteerde_partners_omschrijving || "Onze partners ontvangen uw keuze en werken volgens onze richtlijnen. Zij nemen vrijblijvend contact met u op om u te informeren over de mogelijkheden.";

  const handleOpenPopup = () => {
    if (!klantNaam) {
      alert('Vul alstublieft eerst uw volledige naam / familienaam in.');
      return;
    }
    setShowPopup(true);
  };

  const handleFinalConfirm = async () => {
    setIsSubmitting(true);

    const opgeslagenCode = typeof window !== 'undefined' 
      ? (sessionStorage.getItem('toegangscode') || localStorage.getItem('toegangscode') || sessionStorage.getItem('voucherCode') || localStorage.getItem('voucherCode') || sessionStorage.getItem('code') || localStorage.getItem('code') || '') 
      : '';

    const opgeslagenEmail = typeof window !== 'undefined' 
      ? (sessionStorage.getItem('klantEmail') || localStorage.getItem('klantEmail') || sessionStorage.getItem('email') || localStorage.getItem('email') || klantEmail) 
      : klantEmail;

    const payload = {
      toegangscode: opgeslagenCode,
      klantNaam: klantNaam,
      klantEmail: opgeslagenEmail,
      woningType: storedWoning?.typeNaam || storedWoning?.type_naam || woningType,
      designPakket: storedPakket?.pakketTitel || storedPakket?.pakket_titel || designPakket,
      partners,
      bestanden: storedWoning?.downloadCategorie || storedWoning?.download_categorieen || []
    };

    console.log('📤 Verzonden payload naar /api/confirm:', payload);

    try {
      const response = await fetch('/api/confirm', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        console.error('API Error details:', JSON.stringify(errorData, null, 2));
        throw new Error(errorData?.error || errorData?.message || 'Fout bij het verzenden van de bevestigingsmail.');
      }

      if (typeof window !== 'undefined') {
        sessionStorage.setItem('configuratorConfirmed', 'true');
        sessionStorage.setItem('klantNaam', klantNaam);
        sessionStorage.setItem('klantEmail', opgeslagenEmail);
      }

      sessionStorage.setItem('geselecteerdeWoning', storedWoning?.typeNaam || storedWoning?.type_naam || woningType || '');
      sessionStorage.setItem('geselecteerdPakket', storedPakket?.pakketTitel || storedPakket?.pakket_titel || designPakket || '');

      router.push('/download');
    } catch (error: any) {
      console.error(error);
      alert(`Er is iets misgegaan: ${error.message || 'Onbekende fout'}`);
    } finally {
      setIsSubmitting(false);
      setShowPopup(false);
    }
  };

  return (
    <div>
      {/* 1. HERO SECTIE */}
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
        <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-black/25 to-black/80" />
        
        <div className="relative z-20 text-white text-center max-w-4xl mx-auto pt-6">
          {heroTitle && <h1 className="text-4xl md:text-6xl font-serif">{heroTitle}</h1>}
        </div>

        <div className="relative z-20 max-w-6xl mx-auto w-full flex">
          <div className="inline-flex flex-wrap sm:flex-nowrap items-center bg-[#181820]/80 backdrop-blur-md border border-white/10 rounded-2xl p-2 shadow-2xl">
            <div className="px-6 py-3 flex flex-col min-w-[200px]">
              <span className="text-[10px] font-bold tracking-[0.2em] text-primary uppercase">Type woning</span>
              <span className="text-lg font-serif text-white mt-0.5">{storedWoning?.typeNaam || storedWoning?.type_naam || woningType || 'Niet geselecteerd'}</span>
            </div>
            <div className="hidden sm:block w-[1px] h-10 bg-white/10 my-auto" />
            <div className="px-6 py-3 flex flex-col min-w-[200px] border-t sm:border-t-0 border-white/10 w-full sm:w-auto">
              <span className="text-[10px] font-bold tracking-[0.2em] text-primary uppercase">Designpakket</span>
              <span className="text-lg font-serif text-white mt-0.5">{storedPakket?.pakketTitel || storedPakket?.pakket_titel || designPakket || 'Niet geselecteerd'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. BEVESTIGING TEKST & FORMULIER */}
      <div className="max-w-xl max-sm:px-4 mx-auto text-center space-y-8 py-16">
        <div className="space-y-3">
          {sectieTitel && <h2 className="text-3xl md:text-4xl font-serif text-dark m-0">{sectieTitel}</h2>}
          {subtitel && <h2 className="text-2xl md:text-3xl font-serif text-primary">{subtitel}</h2>}
          {omschrijving && <p className="text-muted text-base leading-relaxed pt-2">{omschrijving}</p>}
        </div>

        <div className="space-y-4 text-left border-t border-b border-dark/10 py-8">
          <h3 className="font-serif text-dark text-base">Uw gegevens voor de definitieve bevestiging</h3>
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-muted mb-2">Volledige naam / Familienaam</label>
            <input 
              type="text" 
              value={klantNaam} 
              onChange={(e) => setKlantNaam(e.target.value)}
              placeholder="Bijv. Fam. de Vries" 
              className="w-full h-12 px-4 rounded-lg bg-white border border-dark/15 text-dark focus:outline-none focus:border-dark text-sm transition-all"
              required
            />
          </div>
        </div>

        <div className="flex items-center justify-center gap-8 pt-2">
          <Button 
            onClick={handleOpenPopup}
            disabled={!klantNaam || loading}
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

      {/* POP-UP BIJ BEVESTIGEN */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-8 shadow-2xl space-y-6 text-left relative animate-in fade-in zoom-in-95 duration-200">
            <h3 className="text-2xl font-serif text-dark">Definitief bevestigen</h3>
            <p className="text-sm text-muted">Controleer uw keuzes goed. Na bevestiging worden de gegevens doorgestuurd naar de partners en projectmanagement.</p>
            
            <div className="space-y-4 pt-2">
              <label className="flex items-start gap-3 cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={agreed1} 
                  onChange={(e) => setAgreed1(e.target.checked)}
                  className="mt-1 w-5 h-5 accent-[#2E7D4E] rounded cursor-pointer"
                />
                <span className="text-xs text-dark leading-relaxed">{akkoordTekst}</span>
              </label>

              <label className="flex items-start gap-3 cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={agreed2} 
                  onChange={(e) => setAgreed2(e.target.checked)}
                  className="mt-1 w-5 h-5 accent-[#2E7D4E] rounded cursor-pointer"
                />
                <span className="text-xs font-bold text-primary uppercase tracking-wide leading-relaxed">{waarschuwingTekst}</span>
              </label>
            </div>

            <div className="flex items-center justify-end gap-4 pt-4 border-t border-dark/10">
              <button 
                onClick={() => setShowPopup(false)}
                className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-muted hover:text-dark transition cursor-pointer"
              >
                Annuleren
              </button>
              <Button 
                onClick={handleFinalConfirm}
                disabled={!agreed1 || !agreed2 || isSubmitting}
                loading={isSubmitting}
                className="px-6 py-3 text-xs"
              >
                AKKOORD & VERSTUREN
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* 3. GESELECTEERDE PARTNERS LIJST */}
      {partners.length > 0 && (
        <div className="max-w-4xl mx-auto max-sm:px-4 space-y-10 py-16">
          <div className="text-center space-y-3">
            <h3 className="text-3xl md:text-4xl font-serif text-dark">{partnersTitel}</h3>
            <p className="text-muted text-lg max-w-xl mx-auto leading-relaxed">{partnersOmschrijving}</p>
          </div>
          <div className="border-t border-dark/10">
            {partners.map((partner: any, index: number) => (
              <div key={index} className="py-6 flex items-center justify-between border-b border-dark/10 gap-4">
                <div className="flex items-center space-x-5">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#E5E2DD] shrink-0" />
                  <div>
                    <h4 className="font-serif text-dark text-lg">{partner?.partnerNaam || partner?.partner_naam}</h4>
                    {(partner?.partnerOmschrijving || partner?.partner_omschrijving) && (
                      <p className="text-xs text-muted mt-0.5">{partner?.partnerOmschrijving || partner?.partner_omschrijving}</p>
                    )}
                  </div>
                </div>
                {(partner?.partnerRol || partner?.partner_rol) && (
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase bg-[#E5E2DD]/70 text-dark px-5 py-2.5 rounded-full shrink-0">
                    {partner?.partnerRol || partner?.partner_rol}
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