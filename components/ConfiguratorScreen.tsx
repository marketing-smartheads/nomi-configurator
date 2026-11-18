// components/ConfiguratorScreen.tsx
'use client';

import { useState, useEffect } from 'react';
import Button from './Button';
import StepOneWoning from './configurator/StepOnewoning';
import StepTwoDesign from './configurator/StepTwoDesign';
import StepThreeVisuals from './configurator/StepThreeVisuals';
import StepFourConfirmation from './configurator/StepFourConfirmation';

export default function ConfiguratorScreen({
  woningType, setWoningType, 
  designPakket, setDesignPakket, 
  selectedIndeling, setSelectedIndeling, 
  loading, onBack, onConfirm,
  configuratorData 
}: any) {
  // 1. Initialiseer currentStep vanuit localStorage (default is 1)
  const [currentStep, setCurrentStep] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedStep = localStorage.getItem('configuratorCurrentStep');
      return savedStep ? parseInt(savedStep, 10) : 1;
    }
    return 1;
  });

  // Automatische koppeling & locking van het woningtype op basis van de vouchercode
  useEffect(() => {
    const fetchVoucherWoningType = async () => {
      if (typeof window !== 'undefined') {
        const opgeslagenCode = 
          localStorage.getItem('toegangscode') || 
          localStorage.getItem('voucherCode') ||
          sessionStorage.getItem('toegangscode') || 
          sessionStorage.getItem('voucherCode');

        if (opgeslagenCode) {
          try {
            const res = await fetch(`/api/vouchers?code=${encodeURIComponent(opgeslagenCode)}`);
            const data = await res.json();
            
            let typeWoning = data?.gekozenTypeWoning || data?.typeWoning || data?.woningType;

            if (!typeWoning && opgeslagenCode.includes('-')) {
              const letter = opgeslagenCode.split('-')[1]?.[0]?.toUpperCase();
              if (letter) {
                typeWoning = `Type ${letter}`;
              }
            }
            
            if (typeWoning) {
              setWoningType(typeWoning);
              sessionStorage.setItem('geselecteerdeWoning', typeWoning);
            }
          } catch (err) {
            console.error('Kon vouchertype niet automatisch laden:', err);
            
            if (opgeslagenCode.includes('-')) {
              const letter = opgeslagenCode.split('-')[1]?.[0]?.toUpperCase();
              if (letter) {
                setWoningType(`Type ${letter}`);
              }
            }
          }
        }
      }
    };

    fetchVoucherWoningType();
  }, [setWoningType]);

  // 2. Sla de stap op in localStorage zodra deze verandert
  useEffect(() => {
    const handleStorageChange = () => {
      if (typeof window !== 'undefined') {
        const savedStep = localStorage.getItem('configuratorCurrentStep');
        if (savedStep) {
          const stepNum = parseInt(savedStep, 10);
          if (stepNum >= 1 && stepNum <= 4) {
            setCurrentStep(stepNum);
          }
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('configuratorStepChange', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('configuratorStepChange', handleStorageChange);
    };
  }, []);

  // 3. Scroll naar boven zodra de stap verandert
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentStep]);

  const fallbackStappenTitels = ['TYPE WONING', 'DESIGNPAKKET', 'VISUEEL ONTWERP', 'BEVESTIGING'];
  const wpStappen = configuratorData?.stappenBalk;
  
  const steps = [
    { number: 1, title: wpStappen?.[0]?.title || wpStappen?.[0]?.stapTitel || fallbackStappenTitels[0], nextTitle: wpStappen?.[1]?.title || wpStappen?.[1]?.stapTitel || 'DESIGNPAKKET' },
    { number: 2, title: wpStappen?.[1]?.title || wpStappen?.[1]?.stapTitel || fallbackStappenTitels[1], nextTitle: wpStappen?.[2]?.title || wpStappen?.[2]?.stapTitel || 'VISUEEL ONTWERP' },
    { number: 3, title: wpStappen?.[2]?.title || wpStappen?.[2]?.stapTitel || fallbackStappenTitels[2], nextTitle: wpStappen?.[3]?.title || wpStappen?.[3]?.stapTitel || 'BEVESTIGING' },
    { number: 4, title: wpStappen?.[3]?.title || wpStappen?.[3]?.stapTitel || fallbackStappenTitels[3], nextTitle: 'KEUZE BEVESTIGEN' },
  ];

  const rawWoningTypen = configuratorData?.woningTypen || configuratorData?.woning_typen || [];
  const woningTypenLijst = Array.isArray(rawWoningTypen) ? rawWoningTypen : rawWoningTypen?.nodes || [];

  const isCurrentStepValid = () => {
    if (currentStep === 1) return selectedIndeling !== null;
    if (currentStep === 2) return designPakket !== null;
    return true;
  };

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(prev => prev + 1);
    } else {
      onConfirm();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    } else {
      onBack();
    }
  };

  return (
    <section className="relative w-full bg-secondary min-h-screen overflow-hidden">
      
      {/* Achtergrondpatronen als CSS background voor stap 1 t/m 3 (bij stap 4 staan ze onder de hero banner) */}
      {currentStep !== 4 && (
        <>
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
        </>
      )}

      <div className={`relative z-10 w-full mx-auto flex flex-col justify-between min-h-screen ${
        currentStep === 4 ? 'px-0' : 'max-w-6xl py-28'
      }`}>
        
        <div className={currentStep === 4 ? 'w-full' : ''}>
          
          {/* STAPPEN BALK */}
          <div className={`flex items-center justify-center space-x-6 sm:space-x-12 mb-16 ${
            currentStep === 4 ? 'px-6 pt-28 max-w-6xl mx-auto' : ''
          }`}>
            {steps.map((step) => {
              const isActive = currentStep === step.number;
              const isCompleted = currentStep > step.number;

              return (
                <div key={step.number} className="flex items-center space-x-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-[0.8125rem] font-medium tracking-[0.08em] uppercase leading-[120%] transition-all ${
                    isActive 
                      ? 'bg-dark text-white border-[1.5px] border-primary' 
                      : isCompleted
                      ? 'bg-primary text-white border-transparent'
                      : 'bg-dark/5 text-muted border-transparent'
                  }`}>
                    {step.number}
                  </div>
                  <span className={`text-[0.8125rem] tracking-[0.08em] uppercase leading-[120%] hidden md:inline ${
                    isActive || isCompleted 
                      ? 'text-dark font-semibold tracking-[0.08em]' 
                      : 'text-muted tracking-[0.08em]'
                  }`}>
                    {step.title}
                  </span>
                </div>
              );
            })}
          </div>

          {/* STAP 1: WONING & INDELING */}
          {currentStep === 1 && (
            <div className="px-6">
              <StepOneWoning 
                stepTitle={steps[0].title}
                configuratorData={configuratorData}
                woningTypenLijst={woningTypenLijst}
                woningType={woningType}
                selectedIndeling={selectedIndeling}
                setSelectedIndeling={setSelectedIndeling}
              />
            </div>
          )}

          {/* STAP 2: DESIGNPAKKET */}
          {currentStep === 2 && (
            <div className="px-6">
              <StepTwoDesign 
                stepTitle={steps[1].title}
                configuratorData={configuratorData}
                designPakket={designPakket}
                setDesignPakket={setDesignPakket}
              />
            </div>
          )}
          
          {/* STAP 3: VISUEEL ONTWERP */}
          {currentStep === 3 && (
            <div className="px-6">
              <StepThreeVisuals 
                stepTitle={configuratorData?.stappenBalk?.[2]?.stapTitel || 'Visueel Ontwerp'} 
                configuratorData={configuratorData} 
                designPakket={designPakket} 
              />
            </div>
          )}

          {/* STAP 4: BEVESTIGING */}
          {currentStep === 4 && (
            <StepFourConfirmation 
              stepTitle={steps[3].title}
              configuratorData={configuratorData}
              woningType={woningType}
              designPakket={designPakket}
              onConfirm={onConfirm}
              onBack={handlePrevious}
              loading={loading}
            />
          )}
        </div>

        {/* ONDERSTE NAVIGATIE BALK (Verfijnd en optimaal uitgelijnd) */}
        {currentStep !== 4 && (
          <div className="max-w-5xl mx-auto px-6 py-12 mt-16 border-t border-dark/15 flex flex-col sm:flex-row justify-between items-center gap-4 w-full">
            <button
              type="button"
              onClick={handlePrevious}
              disabled={loading}
              className="cursor-pointer text-dark hover:text-primary text-[11px] font-bold tracking-[0.25em] uppercase transition-all duration-300 py-4 px-8 rounded-full bg-[#E8E2D5] hover:bg-[#D9D3CB] flex items-center gap-3 shadow-sm hover:shadow w-full sm:w-auto justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              Vorige stap
            </button>

            <button
              type="button"
              onClick={handleNext}
              disabled={!isCurrentStepValid() || loading}
              className={`cursor-pointer text-white text-[11px] font-bold tracking-[0.25em] uppercase transition-all duration-300 py-4 px-10 rounded-full bg-dark hover:bg-primary flex items-center gap-3 shadow-md hover:shadow-lg w-full sm:w-auto justify-center ${
                !isCurrentStepValid() ? 'opacity-50 cursor-not-allowed hover:bg-dark' : ''
              }`}
            >
              {`VOLGENDE: ${steps[currentStep - 1]?.nextTitle || 'BEVESTIGEN'}`}
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}