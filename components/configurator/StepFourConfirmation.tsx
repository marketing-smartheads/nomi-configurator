'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Button from '../Button';

const PARTNER_NAAM = 'Aanhuis Spijk';
const PARTNER_CONTACT = 'Tobias';
const PARTNER_EMAIL = process.env.NEXT_PUBLIC_PARTNER_EMAIL || 'tobias@aanhuis-spijk.nl';

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
  onConfirm,
  loading,
}: StepFourConfirmationProps) {
  const [showPopup, setShowPopup] = useState(false);
  const [agreedPartner, setAgreedPartner] = useState<boolean | null>(null);
  const [agreedWarning, setAgreedWarning] = useState(false);

  const [klantNaam, setKlantNaam] = useState('');
  const [klantEmail, setKlantEmail] = useState('');
  const [klantTelefoon, setKlantTelefoon] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [manualNotice, setManualNotice] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const opgeslagenEmail =
        sessionStorage.getItem('klantEmail') ||
        localStorage.getItem('klantEmail') || '';
      setKlantEmail(opgeslagenEmail);

      const opgeslagenNaam =
        sessionStorage.getItem('klantNaam') ||
        localStorage.getItem('klantNaam') || '';
      if (opgeslagenNaam) setKlantNaam(opgeslagenNaam);

      const opgeslagenTel =
        sessionStorage.getItem('klantTelefoon') ||
        localStorage.getItem('klantTelefoon') || '';
      if (opgeslagenTel) setKlantTelefoon(opgeslagenTel);
    }
  }, []);

  const data = configuratorData?.configurator || configuratorData;
  const rawWoningTypen = data?.woningTypen || data?.woning_typen || [];
  const woningTypenLijst = Array.isArray(rawWoningTypen) ? rawWoningTypen : rawWoningTypen?.nodes || [];

  const rawDesignPakketten = data?.designPakketten || data?.designPaketten || data?.design_paketten || [];
  const designPakkettenLijst = Array.isArray(rawDesignPakketten) ? rawDesignPakketten : rawDesignPakketten?.nodes || [];

  const storedWoning = woningTypenLijst.find((w: any) => {
    const wNaam = (w?.typeNaam || w?.type_naam || '').trim().toLowerCase();
    return wNaam === (woningType || '').trim().toLowerCase();
  }) || null;

  const storedPakket = designPakkettenLijst.find((p: any) => {
    const pId = (p?.pakketId || p?.pakket_id || '').trim().toLowerCase();
    const pTitel = (p?.pakketTitel || p?.pakket_titel || '').trim().toLowerCase();
    const selected = (designPakket || '').trim().toLowerCase();
    return pId === selected || pTitel === selected;
  }) || designPakkettenLijst[0];

  const woningNaam = storedWoning?.typeNaam || storedWoning?.type_naam || woningType || '';
  const pakketNaam = storedPakket?.pakketTitel || storedPakket?.pakket_titel || designPakket || '';

  // Haal gekozen indeling op om te tonen op de bevestigingspagina
  let opgeslagenIndeling = '';
  try {
    const rawInd = typeof window !== 'undefined' ? (localStorage.getItem('selected_indeling') || sessionStorage.getItem('selected_indeling')) : '';
    if (rawInd) {
      if (rawInd.startsWith('{')) {
        const parsed = JSON.parse(rawInd);
        opgeslagenIndeling = parsed?.indelingTitel || parsed?.indeling_titel || '';
      } else {
        opgeslagenIndeling = rawInd;
      }
    }
  } catch (e) {
    opgeslagenIndeling = '';
  }
  if (!opgeslagenIndeling && typeof window !== 'undefined') {
    opgeslagenIndeling = sessionStorage.getItem('geselecteerdeIndeling') || localStorage.getItem('geselecteerdeIndeling') || '';
  }

  const bevData = storedPakket?.bevestigingStap || storedPakket?.bevestiging_stap || {};
  const rawImage = bevData?.bannerAfbeelding || bevData?.banner_afbeelding;
  const heroImage = typeof rawImage === 'string' ? rawImage : rawImage?.node?.sourceUrl || rawImage?.sourceUrl || rawImage?.mediaItemUrl || null;
  const heroTitle = bevData?.bannerTitel || bevData?.banner_titel || '';

  const rawPartners = storedWoning?.partnerLijst || storedWoning?.partner_lijst || storedWoning?.partnerLijst?.nodes || [];
  const partners = Array.isArray(rawPartners) ? rawPartners : [];

  const sectieTitel = data?.bevestigingTitel || data?.bevestiging_titel;
  const subtitel = data?.bevestigingSubtitel || data?.bevestiging_subtitel;
  const omschrijving = data?.bevestigingOmschrijving || data?.bevestiging_omschrijving;
  const waarschuwingTekst = data?.bevestigingWaarschuwingTekst || data?.bevestiging_waarschuwing || "Let op: na het bevestigen kunt u niet meer terug naar de vorige stappen. Controleer daarom uw keuzes hierboven goed.";

  const emailGeldig = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(klantEmail.trim());
  const telefoonGeldig = klantTelefoon.replace(/\D/g, '').length >= 8;
  const gegevensCompleet = klantNaam.trim() !== '' && emailGeldig && telefoonGeldig;

  const kanBevestigen =
    agreedPartner !== null &&
    agreedWarning &&
    !isSubmitting &&
    (agreedPartner === false || gegevensCompleet);

  const handleSubmit = async (toestemming: boolean) => {
    setIsSubmitting(true);
    setErrorMessage('');

    const opgeslagenCode = typeof window !== 'undefined'
      ? (sessionStorage.getItem('toegangscode') || localStorage.getItem('toegangscode') || '')
      : '';

    const payload = {
      toegangscode: opgeslagenCode,
      klantNaam: klantNaam.trim(),
      klantEmail: klantEmail.trim() || 'Niet ingevuld',
      klantTelefoon: klantTelefoon.trim() || 'Niet ingevuld',
      woningType: woningNaam,
      gekozenIndeling: opgeslagenIndeling,
      designPakket: pakketNaam,
      partners,
      bestanden: storedWoning?.downloadCategorie || storedWoning?.download_categorieen || [],
      toestemmingPartner: toestemming,
    };

    try {
      const response = await fetch('/api/confirm', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(errorData?.error || errorData?.message || 'Fout bij het verwerken van de bevestiging.');
      }

      sessionStorage.setItem('configuratorConfirmed', 'true');
      sessionStorage.setItem('klantNaam', klantNaam.trim());
      sessionStorage.setItem('klantEmail', klantEmail.trim());
      sessionStorage.setItem('klantTelefoon', klantTelefoon.trim());
      sessionStorage.setItem('geselecteerdeWoning', woningNaam);
      sessionStorage.setItem('geselecteerdeIndeling', opgeslagenIndeling);
      sessionStorage.setItem('geselecteerdPakket', pakketNaam);

      setShowPopup(false);
      if (onConfirm) onConfirm();
      router.push('/download');
    } catch (error: any) {
      console.error(error);
      setErrorMessage(`Versturen is niet gelukt: ${error.message || 'onbekende fout'}. Probeer het opnieuw.`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <div className="relative w-full h-125 overflow-hidden flex flex-col justify-between p-8 sm:p-12">
        {heroImage && (
          <Image src={heroImage} alt={heroTitle || 'Sfeer'} fill className="absolute inset-0 object-cover object-center w-full z-0" priority />
        )}
        <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-black/25 to-black/80" />

        <div className="relative z-20 text-white text-center max-w-4xl mx-auto pt-6">
          {heroTitle && <h1 className="text-4xl md:text-6xl font-serif">{heroTitle}</h1>}
        </div>

        <div className="relative z-20 max-w-6xl mx-auto w-full flex">
          <div className="inline-flex flex-wrap sm:flex-nowrap items-center bg-[#181820]/80 backdrop-blur-md border border-white/10 rounded-2xl p-2 shadow-2xl gap-2">
            <div className="px-6 py-3 flex flex-col min-w-[150px]">
              <span className="text-[10px] font-bold tracking-[0.2em] text-primary uppercase">Type woning</span>
              <span className="text-lg font-serif text-white mt-0.5">{woningNaam || 'Niet geselecteerd'}</span>
            </div>
            {opgeslagenIndeling && (
              <div className="px-6 py-3 flex flex-col min-w-[150px] border-t sm:border-t-0 border-white/10">
                <span className="text-[10px] font-bold tracking-[0.2em] text-primary uppercase">Gekozen indeling</span>
                <span className="text-lg font-serif text-white mt-0.5">{opgeslagenIndeling}</span>
              </div>
            )}
            <div className="px-6 py-3 flex flex-col min-w-[150px] border-t sm:border-t-0 border-white/10">
              <span className="text-[10px] font-bold tracking-[0.2em] text-primary uppercase">Designpakket</span>
              <span className="text-lg font-serif text-white mt-0.5">{pakketNaam || 'Niet geselecteerd'}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-xl max-sm:px-4 mx-auto text-center space-y-8 py-16">
        <div className="space-y-3">
          {sectieTitel && <h2 className="text-3xl md:text-4xl font-serif text-dark m-0">{sectieTitel}</h2>}
          {subtitel && <h2 className="text-2xl md:text-3xl font-serif text-primary">{subtitel}</h2>}
          {omschrijving && <p className="text-muted text-base leading-relaxed pt-2">{omschrijving}</p>}
        </div>

        <div className="space-y-4 text-left border-t border-b border-dark/10 py-8">
          <h3 className="font-serif text-dark text-base">Uw contactgegevens voor de bevestiging</h3>
          <div>
            <label htmlFor="klantNaam" className="block text-[11px] font-bold uppercase tracking-wider text-muted mb-2">Volledige naam / Familienaam *</label>
            <input
              id="klantNaam"
              type="text"
              value={klantNaam}
              onChange={(e) => setKlantNaam(e.target.value)}
              placeholder="Bijv. Fam. de Vries"
              className="w-full h-12 px-4 rounded-lg bg-white border border-dark/15 text-dark focus:outline-none text-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="klantEmail" className="block text-[11px] font-bold uppercase tracking-wider text-muted mb-2">E-mailadres</label>
            <input
              id="klantEmail"
              type="email"
              value={klantEmail}
              onChange={(e) => setKlantEmail(e.target.value)}
              placeholder="naam@voorbeeld.nl"
              className="w-full h-12 px-4 rounded-lg bg-white border border-dark/15 text-dark focus:outline-none text-sm"
            />
          </div>
          <div>
            <label htmlFor="klantTelefoon" className="block text-[11px] font-bold uppercase tracking-wider text-muted mb-2">Telefoonnummer</label>
            <input
              id="klantTelefoon"
              type="tel"
              value={klantTelefoon}
              onChange={(e) => setKlantTelefoon(e.target.value)}
              placeholder="06 12345678"
              className="w-full h-12 px-4 rounded-lg bg-white border border-dark/15 text-dark focus:outline-none text-sm"
            />
          </div>
        </div>

        <div className="flex items-center justify-center gap-8 pt-2">
          <Button
            onClick={() => {
              if (!klantNaam.trim()) {
                setErrorMessage('Vul eerst uw volledige naam in.');
                return;
              }
              setShowPopup(true);
            }}
            disabled={!klantNaam.trim() || loading}
            loading={loading}
            className="px-10 py-4"
          >
            BEVESTIG KEUZES
          </Button>
          <button type="button" onClick={onBack} className="cursor-pointer text-dark hover:text-primary text-[11px] font-bold tracking-[0.25em] uppercase transition">
            TERUG
          </button>
        </div>
      </div>

      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-8 shadow-2xl space-y-6 text-left relative">
            <h3 className="text-2xl font-serif text-dark">Toestemming contactgegevens</h3>
            <p className="text-sm text-muted">Mogen wij uw gegevens samen met uw keuzes delen met {PARTNER_NAAM}?</p>
            <div className="space-y-4 pt-2">
              <label className="flex items-center gap-3 cursor-pointer p-3 rounded-xl bg-[#F9F6F0] border border-dark/10">
                <input type="radio" name="partnerAkkoord" checked={agreedPartner === true} onChange={() => setAgreedPartner(true)} className="w-4 h-4 accent-[#C5A880]" />
                <span className="text-xs font-medium text-dark"><strong>Ja, delen:</strong> deel mijn gegevens.</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer p-3 rounded-xl bg-[#F9F6F0] border border-dark/10">
                <input type="radio" name="partnerAkkoord" checked={agreedPartner === false} onChange={() => setAgreedPartner(false)} className="w-4 h-4 accent-[#C5A880]" />
                <span className="text-xs font-medium text-dark"><strong>Nee, niet delen:</strong> ik neem zelf contact op.</span>
              </label>
              <label className="flex items-start gap-3 cursor-pointer p-2">
                <input type="checkbox" checked={agreedWarning} onChange={(e) => setAgreedWarning(e.target.checked)} className="mt-1 w-5 h-5 accent-dark rounded" />
                <span className="text-xs font-bold text-primary uppercase tracking-wide">{waarschuwingTekst}</span>
              </label>
            </div>
            <div className="flex items-center justify-end gap-4 pt-4 border-t border-dark/10">
              <button type="button" onClick={() => setShowPopup(false)} className="px-5 py-2.5 text-xs font-bold uppercase text-muted">Annuleren</button>
              <Button onClick={() => handleSubmit(agreedPartner === true)} disabled={!kanBevestigen} loading={isSubmitting} className="px-6 py-3 text-xs">
                AKKOORD & VERSTUREN
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}