// components/configurator/StepFourConfirmation.tsx
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Button from '../Button';

const PARTNER_NAAM = 'Aanhuis Spijk';
const PARTNER_CONTACT = 'Tobias';
const PARTNER_EMAIL = 'Tobias@aanhuis-spijk.nl';
const PARTNER_TELEFOON = '030 - 600 82 40';

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

  const data = configuratorData?.configurator || configuratorData || {};
  const rawWoningTypen = data?.woningTypen || data?.woning_typen || [];
  const woningTypenLijst = Array.isArray(rawWoningTypen) 
    ? rawWoningTypen 
    : (rawWoningTypen?.nodes || rawWoningTypen?.edges || []);

  let opgeslagenIndeling = '';
  let parsedIndelingObj: any = null;
  try {
    const rawInd = typeof window !== 'undefined' ? (localStorage.getItem('selected_indeling') || sessionStorage.getItem('selected_indeling')) : '';
    if (rawInd) {
      if (rawInd.startsWith('{')) {
        parsedIndelingObj = JSON.parse(rawInd);
        opgeslagenIndeling = parsedIndelingObj?.indelingTitel || parsedIndelingObj?.indeling_titel || '';
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

  const sessionPakket = typeof window !== 'undefined' ? (sessionStorage.getItem('geselecteerdPakket') || localStorage.getItem('selected_designPakket')) : '';
  const actiefPakket = designPakket || sessionPakket || 'Hotel Chic';

  const normWoning = (woningType || '').toLowerCase().replace(/[^a-z0-9]/g, '');
  const normIndeling = (opgeslagenIndeling || '').toLowerCase().replace(/[^a-z0-9]/g, '');
  const normPakket = (actiefPakket || '').toLowerCase().replace(/[^a-z0-9]/g, '');

  const matchendeRijen = Array.isArray(woningTypenLijst) ? woningTypenLijst.filter((w: any) => {
    if (!w) return false;
    const naam = (w?.typeNaam || w?.typenaam || '').toLowerCase().replace(/[^a-z0-9]/g, '');
    const indTitel = (w?.indelingTitel || w?.indeling_titel || '').toLowerCase().replace(/[^a-z0-9]/g, '');
    const typeMatch = !normWoning || naam.includes(normWoning) || normWoning.includes(naam);
    const indelingMatch = !normIndeling || indTitel.includes(normIndeling) || normIndeling.includes(indTitel);
    return typeMatch && indelingMatch;
  }) : [];

  const gebruikteRijen = matchendeRijen.length > 0 ? matchendeRijen : (Array.isArray(woningTypenLijst) ? woningTypenLijst : []);

  const allePakketten: any[] = [];
  gebruikteRijen.forEach((rij: any) => {
    const rawP = rij?.designPakketten || rij?.design_pakketten || [];
    const pakketLijst = Array.isArray(rawP) ? rawP : (rawP?.nodes || rawP?.edges || []);
    if (Array.isArray(pakketLijst)) {
      pakketLijst.forEach((p: any) => { if (p) allePakketten.push(p); });
    }
  });

  const storedPakket = allePakketten.find((p: any) => {
    const pId = (p?.pakketId || p?.pakket_id || '').trim().toLowerCase().replace(/[^a-z0-9]/g, '');
    const pTitel = (p?.pakketTitel || p?.pakket_titel || '').trim().toLowerCase().replace(/[^a-z0-9]/g, '');
    return pId === normWoning || pTitel === normPakket || pId.includes(normPakket) || normPakket.includes(pId) || pTitel.includes(normPakket) || normPakket.includes(pTitel);
  }) || allePakketten[0] || {};

  const storedWoning = gebruikteRijen[0] || {};

  const woningNaam = storedWoning?.typeNaam || storedWoning?.type_naam || parsedIndelingObj?.typeNaam || parsedIndelingObj?.type_naam || woningType || '';
  const indelingTitel = storedWoning?.indelingTitel || storedWoning?.indeling_titel || opgeslagenIndeling || 'Gekozen indeling';
  const metrage = storedWoning?.metrage || parsedIndelingObj?.metrage || '';
  const plattegrondUrl =
    storedWoning?.plattegrond?.node?.sourceUrl ||
    storedWoning?.plattegrond?.sourceUrl ||
    parsedIndelingObj?.plattegrond?.node?.sourceUrl ||
    parsedIndelingObj?.plattegrond?.sourceUrl ||
    null;

  const pakketNaam = storedPakket?.pakketTitel || storedPakket?.pakket_titel || actiefPakket;
  const pakketOmschrijving = storedPakket?.pakketOmschrijving || storedPakket?.pakket_omschrijving || '';

  const rawVisuals = storedPakket?.visualsSlider || storedPakket?.visuals_slider;
  let visualsAantal = 4;
  if (Array.isArray(rawVisuals)) {
    visualsAantal = rawVisuals.length;
  } else if (rawVisuals?.nodes) {
    visualsAantal = rawVisuals.nodes.length;
  } else if (rawVisuals?.edges) {
    visualsAantal = rawVisuals.edges.length;
  }

  // Ophalen van de enkele pakket_aabeelding (met 'aabeelding')
  const rawPakketAfb = 
    storedPakket?.pakket_aabeelding || 
    storedPakket?.pakketAabeelding || 
    storedPakket?.pakketAfbeelding || 
    storedPakket?.pakket_afbeelding || 
    null;

  const moodboardAfbeeldingUrl = 
    rawPakketAfb?.sourceUrl || 
    rawPakketAfb?.node?.sourceUrl || 
    rawPakketAfb?.mediaItemUrl || 
    rawPakketAfb?.node?.mediaItemUrl || 
    rawPakketAfb?.url || 
    (typeof rawPakketAfb === 'string' ? rawPakketAfb : null);

  // Ophaalmethode voor materialenlijst
  const rawMaterialen = storedPakket?.materialenLijst || storedPakket?.materialen_lijst || [];
  const materialenLijst = Array.isArray(rawMaterialen) ? rawMaterialen : (rawMaterialen?.nodes || rawMaterialen?.edges || []);
  const materialenAantal = materialenLijst.length > 0 ? materialenLijst.length : 5;

  const bevData = storedPakket?.bevestigingStap || storedPakket?.bevestiging_stap || {};
  const rawImage = bevData?.bannerAfbeelding || bevData?.banner_afbeelding;
  
  const heroImage = 
    rawImage?.node?.sourceUrl || 
    rawImage?.sourceUrl || 
    rawImage?.node?.mediaItemUrl || 
    rawImage?.mediaItemUrl || 
    null;

  const heroTitle = bevData?.bannerTitel || bevData?.banner_titel || '';

  const partnersSectieTitel = 
    bevData?.geselecteerdePartnersTitel || 
    bevData?.geselecteerde_partners_titel || 
    'Geselecteerde partners';

  const partnersSectieOmschrijving = 
    bevData?.geselecteerdePartnersOmschrijving || 
    bevData?.geselecteerde_partners_omschrijving || 
    'Onze partners ontvangen jouw keuze en werken volgens onze richtlijnen. Zij nemen vrijblijvend contact met je op om je te informeren over de mogelijkheden.';

  const rawPartners = storedWoning?.partnerLijst || storedWoning?.partner_lijst || data?.partnerLijst || data?.partner_lijst || [];
  const partners = Array.isArray(rawPartners) ? rawPartners : (rawPartners?.nodes || rawPartners?.edges || []);

  const sectieTitel = data?.bevestigingTitel || data?.bevestiging_titel;
  const subtitel = data?.bevestigingSubtitel || data?.bevestiging_subtitel;
  const omschrijving = data?.bevestigingOmschrijving || data?.bevestiging_omschrijving;
  const waarschuwingTekst = data?.bevestigingWaarschuwingTekst || data?.bevestiging_waarschuwing || "Let op: na het bevestigen kun je niet meer terug naar de vorige stappen. Controleer daarom jouw keuzes hierboven goed.";

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
      partnerEmailTarget: PARTNER_EMAIL,
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
      localStorage.setItem('configurator_definitief_bevestigd', 'true');
      localStorage.setItem('klantNaam', klantNaam.trim());
      localStorage.setItem('klantEmail', klantEmail.trim());
      localStorage.setItem('klantTelefoon', klantTelefoon.trim());
      localStorage.setItem('geselecteerdeWoning', woningNaam);
      localStorage.setItem('geselecteerdeIndeling', opgeslagenIndeling);
      localStorage.setItem('geselecteerdPakket', pakketNaam);

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

        <div className="relative z-20 text-white text-center max-w-4xl mx-auto pt-6 flex-1 flex items-center justify-center">
          {heroTitle && <h1 className="text-4xl md:text-6xl font-serif">{heroTitle}</h1>}
        </div>
      </div>

      <div className="relative w-full overflow-hidden">
        <div
          aria-hidden="true"
          className="hidden lg:block absolute left-0 top-0 bottom-0 w-44 xl:w-56 pointer-events-none select-none z-0"
          style={{
            backgroundImage: "url('/assets/Nomi achtergrond element patroon.svg')",
            backgroundRepeat: 'repeat-y',
            backgroundPosition: 'left top',
            backgroundSize: '100% auto',
          }}
        />
        <div
          aria-hidden="true"
          className="hidden lg:block absolute right-0 top-0 bottom-0 w-44 xl:w-56 pointer-events-none select-none z-0"
          style={{
            backgroundImage: "url('/assets/Patroon logo Thomas de Gier achtergrond.svg')",
            backgroundRepeat: 'repeat-y',
            backgroundPosition: 'right top',
            backgroundSize: '100% auto',
          }}
        />

        <div className="relative z-10 py-16 px-4 sm:px-6">
          <div className="max-w-xl mx-auto text-center space-y-8">
            <div className="space-y-3">
              {sectieTitel && <h2 className="text-3xl md:text-4xl font-serif text-dark m-0">{sectieTitel}</h2>}
              {subtitel && <h2 className="text-2xl md:text-3xl font-serif text-primary">{subtitel}</h2>}
              {omschrijving && <p className="text-xs sm:text-sm text-muted leading-relaxed">{omschrijving}</p>}
            </div>

            <div className="flex items-center justify-center gap-6 sm:gap-8 py-2">
              <div className="relative h-8 sm:h-10 w-36 sm:w-44">
                <Image 
                  src="/assets/imgi_1_Logo_NOMI_LANDSCAPE_GRADIENT-RGB.svg" 
                  alt="Nomi Logo" 
                  fill 
                  className="object-contain object-right"
                />
              </div>
              <div className="relative h-4 w-4">
                <Image 
                  src="/assets/X.svg" 
                  alt="X" 
                  fill 
                  className="object-contain"
                />
              </div>
              <div className="relative h-8 sm:h-10 w-40 sm:w-48">
                <Image 
                  src="/assets/logo-tdg.svg" 
                  alt="Thomas de Gier Logo" 
                  fill 
                  className="object-contain object-left"
                />
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch mt-12 mb-8 text-left">
            <div className="md:col-span-7 bg-white rounded-[2rem] overflow-hidden shadow-sm border border-dark/5 flex flex-col justify-between">
              <div className="relative w-full aspect-[4/3] bg-[#3E372F]">
                {heroImage ? (
                  <Image
                    src={heroImage}
                    alt={pakketNaam}
                    fill
                    className="object-cover object-center"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-white/60 text-xs">
                    Hoofdvisual · {pakketNaam}
                  </div>
                )}
                <span className="absolute top-4 left-4 bg-white text-dark text-[10px] font-bold tracking-[0.15em] uppercase px-4 py-1.5 rounded-full shadow-sm">
                  JOUW INTERIEUR
                </span>
              </div>

              <div className="p-6 sm:p-8 space-y-2 flex-1 flex flex-col justify-center">
                <span className="block text-[10px] font-bold tracking-[0.2em] text-primary uppercase">
                  GEKOZEN STIJL
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif text-dark">
                  {pakketNaam}
                </h3>
                {pakketOmschrijving && (
                  <p className="text-xs sm:text-sm text-muted leading-relaxed pt-1">
                    {pakketOmschrijving}
                  </p>
                )}
              </div>
            </div>

            <div className="md:col-span-5 flex flex-col h-full gap-6">
              <div className="bg-white rounded-[2rem] p-6 sm:p-7 shadow-sm border border-dark/5">
                <div className="space-y-3">
                  <div className="w-full aspect-[16/10] bg-[#F3F0EA] rounded-2xl relative overflow-hidden flex items-center justify-center p-4 border border-dark/5">
                    {plattegrondUrl ? (
                      <img
                        src={plattegrondUrl}
                        alt={indelingTitel}
                        className="max-h-full max-w-full object-contain"
                      />
                    ) : (
                      <span className="text-xs text-muted text-center">
                        [ Plattegrond {indelingTitel} ]
                      </span>
                    )}
                  </div>
                </div>

                <div className="py-6 sm:py-8 space-y-2 flex-1 flex flex-col justify-center">
                  <span className="block text-[10px] font-bold tracking-[0.2em] text-primary uppercase">
                    GEKOZEN INDELING
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif text-dark">
                    {indelingTitel}{woningNaam ? ` · ${woningNaam}` : ''}
                  </h3>
                  {metrage && (
                    <p className="text-xs text-muted pt-3">{metrage}</p>
                  )}
                </div>
              </div>

              <div className="bg-[#1A1A1A] text-white rounded-[2rem] px-7 py-8 shadow-lg flex flex-col justify-center flex-1">
                <span className="block text-[10px] font-bold tracking-[0.2em] text-primary uppercase pb-3">
                  JOUW SAMENVATTING
                </span>
                 <h3 className="text-2xl sm:text-3xl font-serif text-white">
                    Concept
                  </h3>
                <p className="text-xs sm:text-sm text-white leading-relaxed pt-3">
                  1 indeling · 1 stijl · {visualsAantal} aanzichten gevisualiseerd · {materialenAantal} materialen
                </p>
              </div>
            </div>
          </div>

          {/* MOODBOARD & MATERIALEN BLOK */}
          <div className="max-w-4xl mx-auto mb-14">
            <div className="bg-white rounded-[2.5rem] p-6 sm:p-12 shadow-sm border border-dark/5 space-y-8">
              {/* Tag (bijv. MODERN RAW) boven de moodboard afbeelding */}
              <div>
                <span className="text-[10px] tracking-widest uppercase px-3 py-1 rounded-full bg-[#D9D3CB] text-dark inline-block mb-3 font-medium">
                  {pakketNaam}
                </span>

                {/* Enkele Pakket Afbeelding (Moodboard) */}
                {moodboardAfbeeldingUrl && (
                  <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-[#E8E2D5] mb-6">
                    <Image src={moodboardAfbeeldingUrl} alt={pakketNaam} fill className="object-cover object-center" />
                  </div>
                )}

                <h3 className="text-2xl sm:text-3xl font-serif text-dark">Materialen in dit pakket</h3>
                <p className="text-xs sm:text-sm text-muted mt-1">De materialen en texturen waaruit jouw ontwerp is opgebouwd.</p>
              </div>

              {/* Materialen lijst */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-12 pt-2">
                {materialenLijst.length > 0 ? (
                  materialenLijst.map((mat: any, mIdx: number) => {
                    const matNaam = 
                      mat?.materiaalNaam || 
                      mat?.materiaal_naam || 
                      mat?.materiaalTitel || 
                      mat?.materiaal_titel || 
                      mat?.titel || 
                      mat?.title || 
                      mat?.naam || 
                      mat?.text || 
                      (typeof mat === 'string' ? mat : '');

                    const matIcon = 
                      mat?.materiaalAfbeelding?.node?.sourceUrl || 
                      mat?.materiaal_afbeelding?.sourceUrl || 
                      mat?.afbeelding?.sourceUrl || 
                      mat?.materiaalAfbeelding || 
                      null;

                    return (
                      <div key={mIdx} className="flex items-center space-x-4 py-3.5 border-b border-[#F0EBE1]">
                        <div className="w-10 h-10 rounded-xl bg-[#E8E2D5] shrink-0 relative overflow-hidden flex items-center justify-center">
                          {matIcon && typeof matIcon === 'string' ? (
                            <Image src={matIcon} alt={matNaam || 'Materiaal'} fill className="object-cover" />
                          ) : null}
                        </div>
                        <span className="text-xs sm:text-sm font-normal text-dark">
                          {matNaam || `Materiaal ${mIdx + 1}`}
                        </span>
                      </div>
                    );
                  })
                ) : (
                  <>
                    <div className="flex items-center space-x-4 py-3.5 border-b border-[#F0EBE1]">
                      <div className="w-10 h-10 rounded-xl bg-[#E8E2D5] shrink-0"></div>
                      <span className="text-xs sm:text-sm font-normal text-dark">Travertin look</span>
                    </div>
                    <div className="flex items-center space-x-4 py-3.5 border-b border-[#F0EBE1]">
                      <div className="w-10 h-10 rounded-xl bg-[#E8E2D5] shrink-0"></div>
                      <span className="text-xs sm:text-sm font-normal text-dark">Beton cement</span>
                    </div>
                    <div className="flex items-center space-x-4 py-3.5 border-b border-[#F0EBE1]">
                      <div className="w-10 h-10 rounded-xl bg-[#E8E2D5] shrink-0"></div>
                      <span className="text-xs sm:text-sm font-normal text-dark">Eiken hout</span>
                    </div>
                    <div className="flex items-center space-x-4 py-3.5 border-b border-[#F0EBE1]">
                      <div className="w-10 h-10 rounded-xl bg-[#E8E2D5] shrink-0"></div>
                      <span className="text-xs sm:text-sm font-normal text-dark">Gun metal</span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="max-w-xl mx-auto text-center space-y-8">
            {errorMessage && (
              <div className="p-4 bg-red-50 border border-red-200 text-red-700 text-xs rounded-lg">
                {errorMessage}
              </div>
            )}

            <div className="space-y-4 text-left border-t border-b border-dark/10 py-8">
              <h3 className="font-serif text-dark text-base">Jouw contactgegevens voor de bevestiging</h3>
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
                    setErrorMessage('Vul eerst jouw volledige naam in.');
                    return;
                  }
                  setShowPopup(true);
                }}
                disabled={!klantNaam.trim() || loading}
                loading={loading}
                className="px-10 py-4"
              >
                BEVESTIG KEUZE
              </Button>
              <button type="button" onClick={onBack} className="cursor-pointer text-dark hover:text-primary text-[11px] font-bold tracking-[0.25em] uppercase transition">
                TERUG
              </button>
            </div>
          </div>

          {partners.length > 0 && (
            <div className="max-w-3xl mx-auto px-4 py-20 text-center space-y-10">
              <div className="space-y-3 max-w-xl mx-auto">
                <h3 className="text-3xl md:text-5xl font-serif text-dark font-normal">{partnersSectieTitel}</h3>
                {partnersSectieOmschrijving && (
                  <p className="text-xs sm:text-sm text-muted leading-relaxed">
                    {partnersSectieOmschrijving}
                  </p>
                )}
              </div>
              <div className="text-left divide-y divide-[#E6E1D6]">
                {partners.map((partner: any, pIdx: number) => {
                  const pNaam = partner.partnerNaam || partner.partner_naam || partner.naam || '';
                  const pOmschrijving = partner.partnerOmschrijving || partner.partner_omschrijving || partner.omschrijving || '';
                  const pRol = partner.partnerRol || partner.partner_rol || partner.rol || partner.partnerRole || '';
                  
                  return (
                    <div key={pIdx} className="py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 first:pt-0 last:pb-0">
                      <div className="flex items-center gap-5">
                        <div className="w-12 h-12 rounded-2xl bg-[#D9D3CB] shrink-0" />
                        <div>
                          <h4 className="font-serif text-xl text-dark">{pNaam}</h4>
                          {pOmschrijving && <p className="text-xs text-muted mt-1">{pOmschrijving}</p>}
                        </div>
                      </div>
                      {pRol && (
                        <span className="self-start sm:self-center px-5 py-2 rounded-full bg-[#E8E2D5] text-dark text-[10px] tracking-[0.2em] uppercase font-semibold">
                          {pRol}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>

      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-8 shadow-2xl space-y-6 text-left relative">
            <h3 className="text-2xl font-serif text-dark">Toestemming contactgegevens</h3>
            <p className="text-sm text-muted leading-relaxed">
              Wil je dat we jouw gegevens en gekozen configuratie delen met <strong>{PARTNER_NAAM}</strong>, zodat zij vrijblijvend contact met je kunnen opnemen om de mogelijkheden te bespreken?
            </p>
            <div className="space-y-3 pt-1">
              <label className="flex items-start gap-3 cursor-pointer p-4 rounded-xl bg-[#F9F6F0] border border-dark/10 hover:border-dark/20 transition">
                <input
                  type="radio"
                  name="partnerAkkoord"
                  checked={agreedPartner === true}
                  onChange={() => setAgreedPartner(true)}
                  className="mt-1 w-4 h-4 accent-[#C5A880]"
                />
                <div className="text-sm text-dark space-y-0.5">
                  <strong className="block font-semibold">Ja, partners mogen contact met mij opnemen</strong>
                  <span className="text-xs text-muted block leading-relaxed">
                    Deel mijn gegevens met {PARTNER_NAAM}, zodat {PARTNER_CONTACT} vrijblijvend contact opneemt en ik direct toegang krijg tot mijn documentatie.
                  </span>
                </div>
              </label>

              <label className="flex items-start gap-3 cursor-pointer p-4 rounded-xl bg-[#F9F6F0] border border-dark/10 hover:border-dark/20 transition">
                <input
                  type="radio"
                  name="partnerAkkoord"
                  checked={agreedPartner === false}
                  onChange={() => setAgreedPartner(false)}
                  className="mt-1 w-4 h-4 accent-[#C5A880]"
                />
                <div className="text-sm text-dark space-y-0.5">
                  <strong className="block font-semibold">Nee, ik neem zelf contact op</strong>
                  <span className="text-xs text-muted block leading-relaxed">
                    Deel mijn gegevens niet automatisch. Ik neem zelf contact op met {PARTNER_NAAM} om de mogelijkheden en documentatie te bespreken.
                  </span>
                </div>
              </label>

              {agreedPartner === false && (
                <div className="p-4 rounded-xl bg-[#F9F6F0] border border-dark/10 text-sm text-dark space-y-1.5 animate-fadeIn">
                  <p className="font-semibold text-xs uppercase tracking-wider text-dark/70 mb-2">
                    Direct contact opnemen met {PARTNER_NAAM}:
                  </p>
                  <div>Contactpersoon: <span className="font-medium">{PARTNER_CONTACT}</span></div>
                  <div>
                    E-mail:{' '}
                    <a href={`mailto:${PARTNER_EMAIL}`} className="underline font-medium hover:text-primary">
                      {PARTNER_EMAIL}
                    </a>
                  </div>
                  <div>
                    Telefoon:{' '}
                    <a href={`tel:${PARTNER_TELEFOON}`} className="underline font-medium hover:text-primary">
                      {PARTNER_TELEFOON}
                    </a>
                  </div>
                </div>
              )}

              <label className="flex items-start gap-3 cursor-pointer pt-2 px-1">
                <input
                  type="checkbox"
                  checked={agreedWarning}
                  onChange={(e) => setAgreedWarning(e.target.checked)}
                  className="mt-0.5 w-4 h-4 accent-dark rounded"
                />
                <span className="text-[11px] font-bold text-primary uppercase tracking-wide leading-snug">
                  {waarschuwingTekst}
                </span>
              </label>
            </div>
            <div className="flex items-center justify-end gap-4 pt-4 border-t border-dark/10">
              <button
                type="button"
                onClick={() => setShowPopup(false)}
                className="px-5 py-2.5 text-xs font-bold uppercase text-muted hover:text-dark transition"
              >
                Annuleren
              </button>
              <Button
                onClick={() => handleSubmit(agreedPartner === true)}
                disabled={!kanBevestigen}
                loading={isSubmitting}
                className="px-6 py-3 text-xs"
              >
                {agreedPartner === false ? 'KEUZE OPSLAAN' : 'AKKOORD & VERSTUREN'}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}