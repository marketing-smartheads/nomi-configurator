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
        // Lees zowel localStorage als sessionStorage uit voor alle mogelijke sleutels
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

            // Fallback: Als de API-respons leeg is of vertraagt, leid het type af van de code (bijv. NOMI-A042 -> Type A)
            if (!typeWoning && opgeslagenCode.includes('-')) {
              const letter = opgeslagenCode.split('-')[1]?.[0]?.toUpperCase(); // 'A', 'C', 'D', 'E'
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
            
            // Fallback bij API fout
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
    if (currentStep === 1) return woningType !== null;
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
    <section className="w-full bg-secondary min-h-screen">
      <div className={`w-full mx-auto flex flex-col justify-between min-h-screen ${
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
                setWoningType={setWoningType}
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

        {/* ONDERSTE NAVIGATIE BALK */}
        {currentStep !== 4 && (
          <div className="px-6 flex flex-col-reverse sm:flex-row justify-between items-center gap-4 sm:gap-0 pt-12 mt-16 border-t border-dark/15">
            <button 
              onClick={handlePrevious} 
              className="cursor-pointer text-dark hover:text-primary text-[11px] font-bold tracking-[0.25em] uppercase transition py-3 sm:py-0 w-full sm:w-auto text-center sm:text-left"
              disabled={loading}
            >
              TERUG
            </button>

            <div className="w-full sm:w-auto">
              <Button 
                onClick={handleNext}
                disabled={!isCurrentStepValid()}
                loading={loading}
                className="w-fit m-auto sm:w-auto"
              >
                {`VOLGENDE: ${steps[currentStep - 1]?.nextTitle || 'BEVESTIGEN'}`}
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}