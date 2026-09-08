'use client';

import { useState, useEffect } from 'react';

type ScreenType = 'welcome' | 'configurator' | 'download' | 'login';

export function useConfigurator() {
  const [screen, setScreenState] = useState<ScreenType>(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      if (params.get('screen') === 'welcome') {
        localStorage.setItem('current_screen', 'welcome');
        return 'welcome';
      }
      
      const savedScreen = localStorage.getItem('current_screen');
      if (savedScreen === 'welcome' || savedScreen === 'configurator' || savedScreen === 'download' || savedScreen === 'login') {
        return savedScreen as ScreenType;
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

  const [toegangscode, setToegangscode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('toegangscode') || '';
    }
    return '';
  });

  const [klantEmail, setKlantEmail] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('klantEmail') || '';
    }
    return '';
  });

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
    }
  };

  // SLIMME INLOG-CONTROLE: Check direct in WordPress of de code al verzilverd is
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const cleanCode = toegangscode.trim().toUpperCase();

    if (typeof window !== 'undefined') {
      localStorage.setItem('toegangscode', cleanCode);
      localStorage.setItem('klantEmail', klantEmail.trim());
    }

    try {
      const res = await fetch('/api/vouchers');
      const data = await res.json();

      if (data.vouchers) {
        const found = data.vouchers.find((v: any) => {
          const details = v.voucherVelden || {};
          const code = String(details.toegangscode || v.title || '').trim().toUpperCase();
          return code === cleanCode;
        });

        if (found) {
          const details = found.voucherVelden || {};
          const statusVal = String(details.status || '');
          const isVerzilverd = 
            statusVal === 'bevestigd' || 
            statusVal.toLowerCase().includes('bevestigd') || 
            statusVal.toLowerCase().includes('verzilverd');

          if (isVerzilverd) {
            if (typeof window !== 'undefined') {
              sessionStorage.setItem('configuratorConfirmed', 'true');
            }
            setScreen('configurator'); // Dit triggert de 'reeds verzilverd' melding in MainContent
            setLoading(false);
            return;
          }
        }
      }
    } catch (err) {
      console.error('Fout bij controleren voucher status:', err);
    }

    // Als hij niet verzilverd is, gewoon door naar de normale workflow
    setTimeout(() => {
      setLoading(false);
      setScreen('welcome');
    }, 500);
  };

  const handleSaveChoices = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert('Uw keuzes zijn succesvol opgeslagen!');
      if (typeof window !== 'undefined') {
        sessionStorage.setItem('configuratorConfirmed', 'true');
      }
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
    klantEmail,
    setKlantEmail,
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