// components/StepThreeVisuals.tsx
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function StepThreeVisuals({ 
  stepTitle, 
  configuratorData, 
  designPakket,
  woningType 
}: any) {
  const data = configuratorData?.configurator || configuratorData;
  const rawWoningTypen = data?.woningTypen || data?.woning_typen || [];
  const woningTypenLijst = Array.isArray(rawWoningTypen) ? rawWoningTypen : rawWoningTypen?.nodes || [];

  const [opgeslagenWoning, setOpgeslagenWoning] = useState(woningType || '');
  const [opgeslagenIndeling, setOpgeslagenIndeling] = useState('');
  const [actiefPakket, setActiefPakket] = useState('Hotel Chic');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const rawW = woningType || localStorage.getItem('selected_woningType') || sessionStorage.getItem('selected_woningType') || '';
        setOpgeslagenWoning(rawW);

        const rawInd = localStorage.getItem('selected_indeling') || sessionStorage.getItem('selected_indeling') || '';
        if (rawInd) {
          if (rawInd.startsWith('{')) {
            const parsed = JSON.parse(rawInd);
            setOpgeslagenIndeling(parsed?.indelingTitel || parsed?.indeling_titel || '');
          } else {
            setOpgeslagenIndeling(rawInd);
          }
        }

        const sessionPak = sessionStorage.getItem('geselecteerdPakket');
        const localPak = localStorage.getItem('selected_designPakket');
        const gekozen = sessionPak || localPak || designPakket || 'Hotel Chic';
        setActiefPakket(gekozen);
      } catch (e) {
        // ignore
      }
    }
  }, [woningType, designPakket]);

  const normWoning = (opgeslagenWoning || '').toLowerCase().replace(/[^a-z0-9]/g, '');
  const normIndeling = (opgeslagenIndeling || '').toLowerCase().replace(/[^a-z0-9]/g, '');
  const normPakket = (actiefPakket || '').toLowerCase().replace(/[^a-z0-9]/g, '');

  const matchendeRijen = woningTypenLijst.filter((w: any) => {
    const naam = (w?.typeNaam || w?.typenaam || '').toLowerCase().replace(/[^a-z0-9]/g, '');
    const indTitel = (w?.indelingTitel || w?.indeling_titel || '').toLowerCase().replace(/[^a-z0-9]/g, '');
    
    const typeMatch = normWoning ? naam === normWoning || naam.includes(normWoning) || normWoning.includes(naam) : true;
    const indelingMatch = normIndeling ? indTitel === normIndeling || indTitel.includes(normIndeling) || normIndeling.includes(indTitel) : true;
    
    return typeMatch && indelingMatch;
  });

  const allePakketten: any[] = [];
  const allePanoramaRenders: any[] = [];

  matchendeRijen.forEach((rij: any) => {
    const rawP = rij?.designPakketten || rij?.design_pakketten || [];
    const pakketLijst = Array.isArray(rawP) ? rawP : rawP?.nodes || [];
    pakketLijst.forEach((p: any) => allePakketten.push(p));

    const rawR = rij?.panoramaRenders || rij?.panorama_renders || [];
    const renderLijst = Array.isArray(rawR) ? rawR : rawR?.nodes || [];
    renderLijst.forEach((r: any) => allePanoramaRenders.push(r));
  });

  const huidigPakketObj = allePakketten.find((p: any) => {
    const pId = (p.pakketId || p.pakket_id || '').trim().toLowerCase().replace(/[^a-z0-9]/g, '');
    const pTitel = (p.pakketTitel || p.pakket_titel || '').trim().toLowerCase().replace(/[^a-z0-9]/g, '');
    return pId === normPakket || pTitel === normPakket || pId.includes(normPakket) || normPakket.includes(pId) || pTitel.includes(normPakket) || normPakket.includes(pTitel);
  }) || allePakketten[0] || {};

  const pakketTitel = huidigPakketObj?.pakketTitel || huidigPakketObj?.pakket_titel || actiefPakket;
  const stapTitel = `Uw gekozen stijl: ${pakketTitel}`;
  const stapOmschrijving = huidigPakketObj?.stap3Omschrijving || huidigPakketObj?.stap3_omschrijving || data?.stap3Omschrijving || 'Bekijk hieronder de 3D-visuals van uw woning.';

  const rawVisuals = huidigPakketObj?.visualsSlider || huidigPakketObj?.visuals_slider;
  let visuals: any[] = [];
  if (Array.isArray(rawVisuals)) {
    visuals = rawVisuals;
  } else if (rawVisuals?.nodes) {
    visuals = rawVisuals.nodes;
  }

  const materialen = huidigPakketObj?.materialenLijst || huidigPakketObj?.materialen_lijst || [];
  
  const rawMoodboard = huidigPakketObj?.moodboardGallery || huidigPakketObj?.moodboard_gallery;
  let moodboardGallery: any[] = [];
  if (Array.isArray(rawMoodboard)) {
    moodboardGallery = rawMoodboard;
  } else if (rawMoodboard?.nodes) {
    moodboardGallery = rawMoodboard.nodes;
  }
  const singleMoodboardImage = moodboardGallery[0];
  const moodboardUrl = singleMoodboardImage?.sourceUrl || singleMoodboardImage?.node?.sourceUrl || singleMoodboardImage?.mediaItemUrl;

  return (
    <div className="space-y-16">
      <div className="text-center space-y-4 max-w-2xl mx-auto px-4">
        <p className="text-[10px] tracking-[0.25em] uppercase text-primary font-semibold">
          {`Stap 3 · ${stepTitle}`}
        </p>
        <h2 className="text-3xl sm:text-5xl font-serif text-dark font-normal">
          {stapTitel}
        </h2>
        <p className="text-xs sm:text-sm text-muted leading-relaxed">
          {stapOmschrijving}
        </p>
      </div>

      <div className="max-w-6xl mx-auto space-y-8">
        <div className="w-full bg-white p-6 sm:p-12 rounded-[2.5rem] space-y-6 shadow-sm">
          <div>
            <span className="text-[10px] tracking-widest uppercase px-3 py-1 rounded-full bg-[#D9D3CB] text-dark inline-block mb-3 font-medium">
              3D Visuals
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif text-dark">Visuals en sferen</h3>
          </div>

          <div className="w-full aspect-4/3 sm:aspect-16/10 relative overflow-hidden flex items-center justify-center rounded-4xl">
            {visuals.length > 0 ? (
              visuals.map((vis: any, idx: number) => {
                const isActive = idx === 0;
                const imgSrc = vis?.sourceUrl || vis?.node?.sourceUrl || vis?.mediaItemUrl;
                return (
                  <div key={idx} className={`absolute inset-0 w-full h-full ${isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
                    {imgSrc && <Image src={imgSrc} alt={`Visual ${idx + 1}`} fill className="object-cover rounded-4xl" />}
                  </div>
                );
              })
            ) : (
              <span className="text-xs text-muted z-10">[ Geen 3D visuals geconfigureerd voor dit pakket ]</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}