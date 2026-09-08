'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useConfigurator } from '../lib/useConfigurator';
import LoginScreen from '../components/LoginScreen';
import WelcomeScreen from '../components/WelcomeScreen';
import ConfiguratorScreen from '../components/ConfiguratorScreen';
import Header from '../components/Header'; 
import Footer from '../components/Footer';

interface MainContentProps {
  sections: any;
  configuratorData: any;
  initialScreen?: string;
}

export default function MainContent({ sections, configuratorData, initialScreen }: MainContentProps) {
  const {
    screen, setScreen,
    toegangscode, setToegangscode,
    klantEmail, setKlantEmail,
    loading, error,
    woningType, setWoningType,
    designPakket, setDesignPakket,
    handleLogin, handleSaveChoices
  } = useConfigurator();

  const [isMounted, setIsMounted] = useState(false);
  const [isReedsBevestigd, setIsReedsBevestigd] = useState(false);

  // ACHTERGROND CHECK: Altijd backend controleren bij opstarten als er een code bekend is
  useEffect(() => {
    setIsMounted(true);

    if (typeof window !== 'undefined') {
      // 1. Check eerst of sessionStorage het al weet
      if (sessionStorage.getItem('configuratorConfirmed') === 'true') {
        setIsReedsBevestigd(true);
      }

      // 2. Vraag daarna de live status op in WordPress op basis van de opgeslagen toegangscode
      const savedCode = localStorage.getItem('toegangscode');
      if (savedCode) {
        fetch('/api/vouchers')
          .then(res => res.json())
          .then(data => {
            if (data.vouchers) {
              const found = data.vouchers.find((v: any) => {
                const details = v.voucherVelden || {};
                const code = String(details.toegangscode || v.title || '').trim().toUpperCase();
                return code === savedCode.trim().toUpperCase();
              });

              if (found) {
                const details = found.voucherVelden || {};
                const statusVal = String(details.status || '');
                const isVerzilverd = 
                  statusVal === 'bevestigd' || 
                  statusVal.toLowerCase().includes('bevestigd') || 
                  statusVal.toLowerCase().includes('verzilverd');

                if (isVerzilverd) {
                  setIsReedsBevestigd(true);
                  sessionStorage.setItem('configuratorConfirmed', 'true');
                }
              }
            }
          })
          .catch(err => {
            console.error('Kon status niet ophalen bij initialisatie:', err);
          });
      }
    }

    if (initialScreen === 'welcome') {
      setScreen('welcome');
      if (typeof window !== 'undefined') {
        localStorage.removeItem('configuratorCurrentStep');
      }
    }
  }, [initialScreen, setScreen]);
  
  if (!isMounted) {
    return <main className="w-full min-h-screen bg-[#111115]" />;
  }

  if (loading && screen === 'login') {
    return <main className="w-full min-h-screen bg-dark" />;
  }

  // Toon het inlogscherm met bewegende achtergrond
  if (screen === 'login') {
    return (
      <main className="w-full min-h-screen relative flex items-center justify-center font-sans text-zinc-100 px-6 py-8 sm:py-12 sm:px-0 overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/assets/bg-interior.jpg"
            alt="Background luxe interieur"
            fill
            priority
            className="object-cover object-center animate-slow-zoom"
          />
        </div>
        <div className="absolute inset-0 z-10 bg-gradient-overlay" />
        <div className="relative z-20 w-full max-w-135 sm:h-189.25 flex items-center justify-center">
          <LoginScreen 
            toegangscode={toegangscode} 
            setToegangscode={setToegangscode}
            klantEmail={klantEmail}
            setKlantEmail={setKlantEmail}
            error={error}
            loading={loading}
            onSubmit={handleLogin}
          />
        </div>
      </main>
    );
  }

  const handleReturnToHome = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('configuratorCurrentStep');
    }
    setScreen('welcome');
  };

  return (
    <div className="min-h-screen bg-[#111115] text-zinc-100 font-sans flex flex-col justify-between relative">
      <Header 
        currentScreen={screen} 
        onStart={() => setScreen(screen === 'welcome' ? 'configurator' : 'welcome')} 
      />
      <main className="flex flex-col flex-grow w-full relative">
        {screen === 'welcome' && (
          <div className="flex flex-col items-center justify-center flex-grow">
            <WelcomeScreen onStart={() => setScreen('configurator')} />
          </div>
        )}

        {screen === 'configurator' && (
          <>
            
            <ConfiguratorScreen 
              woningType={woningType}
              setWoningType={setWoningType}
              designPakket={designPakket}
              setDesignPakket={setDesignPakket}
              loading={loading}
              onBack={handleReturnToHome}
              onConfirm={handleSaveChoices}
              configuratorData={configuratorData} 
            />

            
            {isReedsBevestigd && (
              <div className="absolute inset-0 z-40 flex items-start justify-center px-6 py-16">
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-all duration-500" />
                
                <div className="relative z-50 w-full max-w-lg p-8 md:p-12 bg-white/95 backdrop-blur-md rounded-4xl shadow-2xl text-dark text-center space-y-6 border border-white/25 animate-in fade-in zoom-in-95 duration-300">
                  <h2 className="text-3xl font-serif text-dark">Vouchercode reeds gebruikt</h2>
                  <p className="text-sm leading-relaxed text-zinc-700">
                    Deze vouchercode is al ingewisseld en kan niet meer opnieuw worden gebruikt. 
                    Bij vragen kunt u contact opnemen met de makelaar: <strong className="text-dark">De Keizer Makelaarsgroep</strong> via{' '}
                    <a href="tel:0306008240" className="underline hover:opacity-80 font-medium text-dark">030-600 82 40</a> of mail naar{' '}
                    <a href="mailto:nieuwbouw@dekeizer.nl" className="underline hover:opacity-80 font-medium text-dark">nieuwbouw@dekeizer.nl</a>.
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={() => {
                        if (typeof window !== 'undefined') {
                          sessionStorage.setItem('geselecteerdeWoning', woningType || localStorage.getItem('selected_woningType') || 'Bouwnummer 1');
                          sessionStorage.setItem('geselecteerdPakket', designPakket || localStorage.getItem('selected_designPakket') || 'Pakket A');
                        }
                        window.location.href = '/download';
                      }}
                      className="inline-block w-full py-4 bg-dark text-white rounded-xl text-xs font-bold uppercase tracking-widest hover:opacity-90 transition text-center shadow-lg cursor-pointer"
                    >
                      Ga naar mijn downloadpagina
                    </button>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </main>
      
      <Footer 
        onNavigateHome={handleReturnToHome}
        onNavigateConfigurator={(step = 1) => {
          setScreen('configurator');
          if (typeof window !== 'undefined') {
            localStorage.setItem('configuratorCurrentStep', step.toString());
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }}
      />
    </div>
  );
}