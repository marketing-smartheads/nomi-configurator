'use client';

import { useState } from 'react';

type ScreenType = 'welcome' | 'configurator' | 'download' | 'login';

export function useConfigurator() {
  const [screen, setScreenState] = useState<ScreenType>(() => {
    if (typeof window !== 'undefined') {
      // Controleer of de URL expliciet om 'welcome' vraagt
      const params = new URLSearchParams(window.location.search);
      if (params.get('screen') === 'welcome') {
        localStorage.setItem('current_screen', 'welcome');
        return 'welcome';
      }
      
      const savedScreen = localStorage.getItem('current_screen');
      if (savedScreen === 'welcome' || savedScreen === 'configurator' || savedScreen === 'download' || savedScreen === 'login') {
        return savedScreen;
      }
    }
    return 'login';
  });

  const [woningType, setWoningTypeState] = useState<string | null>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('selected_woningType');
    }
    return null;
  });

  const [designPakket, setDesignPakketState] = useState<string | null>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('selected_designPakket');
    }
    return null;
  });

  const [toegangscode, setToegangscode] = useState('');
  const [wachtwoord, setWachtwoord] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const setScreen = (newScreen: ScreenType) => {
    setScreenState(newScreen);
    if (typeof window !== 'undefined') {
      localStorage.setItem('current_screen', newScreen);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const setWoningType = (type: string | null) => {
    setWoningTypeState(type);
    if (typeof window !== 'undefined') {
      if (type) {
        localStorage.setItem('selected_woningType', type);
      } else {
        localStorage.removeItem('selected_woningType');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const setDesignPakket = (pakket: string | null) => {
    setDesignPakketState(pakket);
    if (typeof window !== 'undefined') {
      if (pakket) {
        localStorage.setItem('selected_designPakket', pakket);
      } else {
        localStorage.removeItem('selected_designPakket');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    setTimeout(() => {
      setLoading(false);
      setScreen('welcome');
    }, 800);
  };

  const handleSaveChoices = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert('Uw keuzes zijn succesvol opgeslagen!');
      localStorage.removeItem('selected_woningType');
      localStorage.removeItem('selected_designPakket');
      setScreen('welcome');
      setWoningType(null);
      setDesignPakket(null);
    }, 1000);
  };

  return {
    screen,
    setScreen,
    toegangscode,
    setToegangscode,
    wachtwoord,
    setWachtwoord,
    loading,
    error,
    woningType,
    setWoningType,
    designPakket,
    setDesignPakket,
    handleLogin,
    handleSaveChoices,
  };
}