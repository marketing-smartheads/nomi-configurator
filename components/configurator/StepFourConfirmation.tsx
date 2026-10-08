'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Button from '../Button';

// Partner voor de documentatielijst.
// Tijdens testen: zet NEXT_PUBLIC_PARTNER_EMAIL=webmaster@marketingsmartheads.nl in .env.local
// In productie: variabele weglaten, dan gaat de mail naar Tobias.
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
  // null = nog niet gekozen. Toestemming mag niet vooraf aangevinkt staan (AVG).
  const [agreedPartner, setAgreedPartner] = useState<boolean | null>(null);
  const [agreedWarning, setAgreedWarning] = useState(false); // Definitief vinkje

  const [klantNaam, setKlantNaam] = useState('');
  const [klantEmail, setKlantEmail] = useState('');
  const [klantTelefoon, setKlantTelefoon] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [manualNotice, setManualNotice] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  // Haal automatisch gegevens op uit sessionStorage/localStorage
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

      const opgeslagenTel =
        sessionStorage.getItem('klantTelefoon') ||
        localStorage.getItem('klantTelefoon') || '';
      if (opgeslagenTel) setKlantTelefoon(opgeslagenTel);
    }
  }, []);

  const rawWoningTypen = configuratorData?.woningTypen || configuratorData?.woning_typen || [];
  const woningTypenLijst = Array.isArray(rawWoningTypen) ? rawWoningTypen : rawWoningTypen?.nodes || [];

  const rawDesignPakketten = configuratorData?.designPakketten || configuratorData?.design_pakketten || [];
  const designPakkettenLijst = Array.isArray(rawDesignPakketten) ? rawDesignPakketten : rawDesignPakketten?.nodes || [];

  const storedWoning = woningTypenLijst.find((w: any) => (w?.typeNaam || w?.type_naam) === woningType) || null;
  const storedPakket = designPakkettenLijst.find((p: any) => (p?.pakketId || p?.pakket_id || p?.pakketTitel) === designPakket) || null;

  const woningNaam = storedWoning?.typeNaam || storedWoning?.type_naam || woningType || '';
  const pakketNaam = storedPakket?.pakketTitel || storedPakket?.pakket_titel || designPakket || '';

  const bevData = storedPakket?.bevestigingStap || storedPakket?.bevestiging_stap || {};
  const heroImage = bevData?.bannerAfbeelding?.node?.sourceUrl || bevData?.banner_afbeelding?.sourceUrl || bevData?.bannerAfbeelding?.sourceUrl;
  const heroTitle = bevData?.bannerTitel || bevData?.banner_titel;

  const rawPartners = storedWoning?.partnerLijst || storedWoning?.partner_lijst || storedWoning?.partnerLijst?.nodes || [];
  const partners = Array.isArray(rawPartners) ? rawPartners : [];

  const sectieTitel = configuratorData?.bevestigingTitel || configuratorData?.bevestiging_titel;
  const subtitel = configuratorData?.bevestigingSubtitel || configuratorData?.bevestiging_subtitel;
  const omschrijving = configuratorData?.bevestigingOmschrijving || configuratorData?.bevestiging_omschrijving;
  const waarschuwingTekst = configuratorData?.bevestigingWaarschuwingTekst || configuratorData?.bevestiging_waarschuwing || "Let op: na het bevestigen kunt u niet meer terug naar de vorige stappen. Controleer daarom uw keuzes hierboven goed.";

  const partnersTitel = configuratorData?.geselecteerdePartnersTitel || configuratorData?.geselecteerde_partners_titel || "Geselecteerde partners";
  const partnersOmschrijving = configuratorData?.geselecteerdePartnersOmschrijving || configuratorData?.geselecteerde_partners_omschrijving || "Onze partners ontvangen uw keuze en werken volgens onze richtlijnen. Zij nemen vrijblijvend contact met u op om u te informeren over de mogelijkheden.";

  // Validatie: voor delen zijn naam, e-mail en telefoon nodig
  const emailGeldig = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(klantEmail.trim());
  const telefoonGeldig = klantTelefoon.replace(/\D/g, '').length >= 8;
  const gegevensCompleet = klantNaam.trim() !== '' && emailGeldig && telefoonGeldig;

  const kanBevestigen =
    agreedPartner !== null &&
    agreedWarning &&
    !isSubmitting &&
    (agreedPartner === false || gegevensCompleet);

  // Voorgevulde mail voor scenario 2 (klant neemt zelf contact op)
  const mailtoHref =
    `mailto:${PARTNER_EMAIL}` +
    `?subject=${encodeURIComponent('Aanvraag documentatielijst')}` +
    `&body=${encodeURIComponent(
      `Beste ${PARTNER_CONTACT},\n\nGraag ontvang ik de documentatielijst.\n\n` +
      `Naam: ${klantNaam}\n` +
      (woningNaam ? `Type woning: ${woningNaam}\n` : '') +
      (pakketNaam ? `Designpakket: ${pakketNaam}\n` : '') +
      `\nMet vriendelijke groet,\n${klantNaam}`
    )}`;

  const handleOpenPopup = () => {
    if (!klantNaam.trim()) {
      setErrorMessage('Vul eerst uw volledige naam / familienaam in.');
      return;
    }
    setErrorMessage('');
    setShowPopup(true);
  };

  // Scenario 1: wel akkoord -> mail naar partner + door naar downloadpagina
  const handlePartnerConfirm = async () => {
    setIsSubmitting(true);
    setErrorMessage('');

    const opgeslagenCode = typeof window !== 'undefined'
      ? (sessionStorage.getItem('toegangscode') || localStorage.getItem('toegangscode') || sessionStorage.getItem('voucherCode') || localStorage.getItem('voucherCode') || '')
      : '';

    const payload = {
      toegangscode: opgeslagenCode,
      klantNaam: klantNaam.trim(),
      klantEmail: klantEmail.trim(),
      klantTelefoon: klantTelefoon.trim(),
      woningType: woningNaam,
      designPakket: pakketNaam,
      partners,
      bestanden: storedWoning?.downloadCategorie || storedWoning?.download_categorieen || [],
      toestemmingPartner: true,
      testOntvanger: PARTNER_EMAIL, // Wordt opgevangen in de API route
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
      sessionStorage.setItem('geselecteerdPakket', pakketNaam);

      setShowPopup(false);
      if (onConfirm) onConfirm();
      router.push('/download');
    } catch (error: any) {
      console.error(error);
      // Popup blijft open zodat de klant het opnieuw kan proberen
      setErrorMessage(`Versturen is niet gelukt: ${error.message || 'onbekende fout'}. Probeer het opnieuw.`);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Scenario 2: geen akkoord -> niets versturen, instructie tonen op het scherm
  const handleManualContact = () => {
    setShowPopup(false);
    setErrorMessage('');
    setManualNotice(true);
  };

  const handleSwitchToShare = () => {
    setManualNotice(false);
    setAgreedPartner(true);
    setAgreedWarning(false);
    setShowPopup(true);
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
              <span className="text-lg font-serif text-white mt-0.5">{woningNaam || 'Niet geselecteerd'}</span>
            </div>
            <div className="hidden sm:block w-[1px] h-10 bg-white/10 my-auto" />
            <div className="px-6 py-3 flex flex-col min-w-[200px] border-t sm:border-t-0 border-white/10 w-full sm:w-auto">
              <span className="text-[10px] font-bold tracking-[0.2em] text-primary uppercase">Designpakket</span>
              <span className="text-lg font-serif text-white mt-0.5">{pakketNaam || 'Niet geselecteerd'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. BEVESTIGING TEKST & FORMULIER (Naam, E-mail, Telefoon) */}
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
              className="w-full h-12 px-4 rounded-lg bg-white border border-dark/15 text-dark focus:outline-none focus:border-dark text-sm transition-all"
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
              className="w-full h-12 px-4 rounded-lg bg-white border border-dark/15 text-dark focus:outline-none focus:border-dark text-sm transition-all"
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
              className="w-full h-12 px-4 rounded-lg bg-white border border-dark/15 text-dark focus:outline-none focus:border-dark text-sm transition-all"
            />
          </div>

          <p className="text-xs text-muted leading-relaxed pt-1">
            E-mailadres en telefoonnummer zijn alleen nodig als u uw gegevens wilt delen met {PARTNER_NAAM}.
          </p>
        </div>

        {errorMessage && !showPopup && (
          <p role="alert" className="text-sm text-red-700 text-left">{errorMessage}</p>
        )}

        {/* SCENARIO 2: handmatige instructie, getoond na keuze 'niet akkoord' */}
        {manualNotice ? (
          <div className="space-y-6">
            <div className="bg-[#F9F6F0] border border-[#C5A880]/40 p-6 rounded-2xl text-left space-y-4" role="status">
              <h4 className="font-serif text-dark text-base">Documentatielijst zelf opvragen</h4>
              <p className="text-sm text-muted leading-relaxed">
                U heeft gekozen om uw gegevens niet te delen. Wij sturen daarom niets automatisch door.
                Wilt u de documentatielijst ontvangen? Neem dan zelf contact op met <strong>{PARTNER_NAAM}</strong> (t.a.v. {PARTNER_CONTACT}).
              </p>
              <a
                href={mailtoHref}
                className="inline-block text-sm font-medium text-primary underline underline-offset-2 break-all"
              >
                {PARTNER_EMAIL}
              </a>
              <p className="text-xs text-muted">
                Vermeld uw naam, het type woning en het gekozen designpakket. De e-mail hierboven is al voor u ingevuld.
              </p>
            </div>

            <div className="flex items-center justify-center gap-8">
              <button
                type="button"
                onClick={handleSwitchToShare}
                className="cursor-pointer text-dark hover:text-primary text-[11px] font-bold tracking-[0.25em] uppercase transition"
              >
                Toch gegevens delen
              </button>
              <button
                type="button"
                onClick={onBack}
                disabled={loading}
                className="cursor-pointer text-dark hover:text-primary text-[11px] font-bold tracking-[0.25em] uppercase transition"
              >
                TERUG
              </button>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center gap-8 pt-2">
            <Button
              onClick={handleOpenPopup}
              disabled={!klantNaam.trim() || loading}
              loading={loading}
              className="px-10 py-4"
            >
              BEVESTIG KEUZES
            </Button>

            <button
              type="button"
              onClick={onBack}
              disabled={loading}
              className="cursor-pointer text-dark hover:text-primary text-[11px] font-bold tracking-[0.25em] uppercase transition"
            >
              TERUG
            </button>
          </div>
        )}
      </div>

      {/* POP-UP MET KEUZE WEL/NIET AKKOORD */}
      {showPopup && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="toestemming-titel"
        >
          <div className="bg-white rounded-2xl max-w-lg w-full p-8 shadow-2xl space-y-6 text-left relative animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
            <h3 id="toestemming-titel" className="text-2xl font-serif text-dark">Toestemming contactgegevens</h3>
            <p className="text-sm text-muted">
              Mogen wij uw naam, e-mailadres en telefoonnummer samen met uw keuzes delen met {PARTNER_NAAM}? Zij gebruiken die om u de documentatielijst te sturen.
            </p>

            <div className="space-y-4 pt-2">
              <div className="space-y-2" role="radiogroup" aria-label="Gegevens delen met partner">
                <label className="flex items-center gap-3 cursor-pointer p-3 rounded-xl bg-[#F9F6F0] border border-dark/10">
                  <input
                    type="radio"
                    name="partnerAkkoord"
                    checked={agreedPartner === true}
                    onChange={() => setAgreedPartner(true)}
                    className="w-4 h-4 accent-[#C5A880] cursor-pointer"
                  />
                  <span className="text-xs font-medium text-dark">
                    <strong>Ja, delen:</strong> deel mijn gegevens met {PARTNER_NAAM}. Ik krijg direct toegang tot de downloadpagina.
                  </span>
                </label>

                <label className="flex items-center gap-3 cursor-pointer p-3 rounded-xl bg-[#F9F6F0] border border-dark/10">
                  <input
                    type="radio"
                    name="partnerAkkoord"
                    checked={agreedPartner === false}
                    onChange={() => setAgreedPartner(false)}
                    className="w-4 h-4 accent-[#C5A880] cursor-pointer"
                  />
                  <span className="text-xs font-medium text-dark">
                    <strong>Nee, niet delen:</strong> ik neem zelf contact op om de documentatielijst te ontvangen.
                  </span>
                </label>
              </div>

              {/* Ontbrekende gegevens bij 'ja' */}
              {agreedPartner === true && !gegevensCompleet && (
                <p role="alert" className="text-xs text-red-700 leading-relaxed">
                  Om te kunnen delen hebben we een naam, een geldig e-mailadres en een telefoonnummer nodig. Sluit dit venster en vul de ontbrekende velden in.
                </p>
              )}

              {/* Waarschuwing */}
              <label className="flex items-start gap-3 cursor-pointer p-2 pt-2">
                <input
                  type="checkbox"
                  checked={agreedWarning}
                  onChange={(e) => setAgreedWarning(e.target.checked)}
                  className="mt-1 w-5 h-5 accent-dark rounded cursor-pointer shrink-0"
                />
                <span className="text-xs font-bold text-primary uppercase tracking-wide leading-relaxed">{waarschuwingTekst}</span>
              </label>
            </div>

            {errorMessage && (
              <p role="alert" className="text-sm text-red-700">{errorMessage}</p>
            )}

            <div className="flex items-center justify-end gap-4 pt-4 border-t border-dark/10">
              <button
                type="button"
                onClick={() => { setShowPopup(false); setErrorMessage(''); }}
                disabled={isSubmitting}
                className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-muted hover:text-dark transition cursor-pointer"
              >
                Annuleren
              </button>

              <Button
                onClick={() => {
                  if (!kanBevestigen) return;
                  if (agreedPartner) {
                    handlePartnerConfirm();
                  } else {
                    handleManualContact();
                  }
                }}
                disabled={!kanBevestigen}
                loading={isSubmitting}
                className="px-6 py-3 text-xs"
              >
                {agreedPartner === false ? 'DOORGAAN ZONDER DELEN' : 'AKKOORD & VERSTUREN'}
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