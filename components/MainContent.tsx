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
    wachtwoord, setWachtwoord,
    loading, error,
    woningType, setWoningType,
    designPakket, setDesignPakket,
    handleLogin, handleSaveChoices
  } = useConfigurator();

  const [isMounted, setIsMounted] = useState(false);

 useEffect(() => {
    setIsMounted(true);
    // Als de URL aangeeft dat we naar 'welcome' moeten, dwing dit direct af bij de hook én ruim de stap op
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

  // Toon het inlogscherm
  if (screen === 'login') {
    return (
      <main className="w-full min-h-screen relative flex items-center justify-center font-sans text-zinc-100 px-6 py-8 sm:py-12 sm:px-0">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/bg-interior.jpg"
            alt="Background luxe interieur"
            fill
            priority
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 z-10 bg-gradient-overlay" />
        <div className="relative z-20 w-full max-w-135 sm:h-189.25 flex items-center justify-center">
          <LoginScreen 
            toegangscode={toegangscode} 
            setToegangscode={setToegangscode}
            wachtwoord={wachtwoord}
            setWachtwoord={setWachtwoord}
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
    <div className="min-h-screen bg-[#111115] text-zinc-100 font-sans flex flex-col justify-between">
      <Header 
        currentScreen={screen} 
        onStart={() => setScreen(screen === 'welcome' ? 'configurator' : 'welcome')} 
      />
      <main className="flex flex-col flex-grow w-full">
        {screen === 'welcome' && (
          <div className="flex flex-col items-center justify-center flex-grow">
            <WelcomeScreen onStart={() => setScreen('configurator')} />
          </div>
        )}

        {screen === 'configurator' && (
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