// components/CookieBanner.tsx
'use client';

import { useState, useEffect } from 'react';
import { LiaCookieSolid } from 'react-icons/lia';

// Hulpfunctie om een echte cookie te zetten
const setCookie = (name: string, value: string, days: number) => {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Lax`;
};

// Hulpfunctie om een echte cookie te lezen
const getCookie = (name: string) => {
  return document.cookie.split('; ').reduce((r, v) => {
    const parts = v.split('=');
    return parts[0] === name ? decodeURIComponent(parts[1]) : r;
  }, '');
};

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [hasConsent, setHasConsent] = useState(false);
  
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  const applyConsentScripts = (consent: { necessary: boolean; analytics: boolean; marketing: boolean }) => {
    if (consent.analytics) {
      console.log('[Cookies] Analytische toestemming verleend.');
    } else {
      console.log('[Cookies] Analytische cookies uitgeschakeld.');
    }

    if (consent.marketing) {
      console.log('[Cookies] Marketing toestemming verleend.');
    } else {
      console.log('[Cookies] Marketing cookies uitgeschakeld.');
    }
  };

  useEffect(() => {
    const consentStr = getCookie('cookie_consent');
    if (!consentStr) {
      setShowBanner(true);
      setHasConsent(false);
    } else {
      try {
        const savedConsent = JSON.parse(consentStr);
        setPreferences(savedConsent);
        applyConsentScripts(savedConsent);
        setHasConsent(true);
      } catch (e) {
        setShowBanner(true);
      }
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = { necessary: true, analytics: true, marketing: true };
    setCookie('cookie_consent', JSON.stringify(allAccepted), 365);
    setPreferences(allAccepted);
    applyConsentScripts(allAccepted);
    setShowBanner(false);
    setShowSettings(false);
    setHasConsent(true);
  };

  const handleAcceptNecessary = () => {
    const onlyNecessary = { necessary: true, analytics: false, marketing: false };
    setCookie('cookie_consent', JSON.stringify(onlyNecessary), 365);
    setPreferences(onlyNecessary);
    applyConsentScripts(onlyNecessary);
    setShowBanner(false);
    setShowSettings(false);
    setHasConsent(true);
  };

  const handleSaveCustom = () => {
    setCookie('cookie_consent', JSON.stringify(preferences), 365);
    applyConsentScripts(preferences);
    setShowBanner(false);
    setShowSettings(false);
    setHasConsent(true);
  };

  return (
    <>
      {/* 1. Grote Cookie Banner */}
      {showBanner && (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 bg-[#111115]/95 backdrop-blur-md border-t border-zinc-800 text-zinc-100 shadow-2xl animate-in fade-in slide-in-from-bottom duration-300">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-4">
            <div className="text-sm text-zinc-300 text-center lg:text-left space-y-1">
              <p className="font-medium text-white text-base">Over cookies en privacy</p>
              <p>
                Wij gebruiken cookies om uw sessie en voorkeuren te onthouden.{' '}
                <a href="/privacy" className="underline hover:text-white transition">Lees ons privacybeleid</a>.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-2.5 w-full lg:w-auto shrink-0">
              <button
                onClick={() => setShowSettings(true)}
                className="w-full sm:w-auto px-4 py-2.5 rounded-full border border-zinc-700 hover:border-zinc-500 text-zinc-300 text-xs font-bold uppercase tracking-wider transition cursor-pointer text-center"
              >
                Voorkeuren instellen
              </button>
              <button
                onClick={handleAcceptNecessary}
                className="w-full sm:w-auto px-4 py-2.5 rounded-full border border-zinc-700 hover:border-zinc-500 text-zinc-300 text-xs font-bold uppercase tracking-wider transition cursor-pointer text-center"
              >
                Alleen noodzakelijk
              </button>
              <button
                onClick={handleAcceptAll}
                className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-white text-[#111115] hover:bg-zinc-200 text-xs font-bold uppercase tracking-wider transition cursor-pointer shadow-md text-center"
              >
                Alles accepteren
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 2. Vast Koekje-icoontje Rechtsonder */}
      {hasConsent && !showBanner && (
        <button
          onClick={() => setShowSettings(true)}
          title="Cookievoorkeuren wijzigen"
          className="fixed bottom-6 right-6 z-40 p-3.5 bg-[#1a1a20] border border-zinc-700 text-zinc-200 hover:text-white rounded-full shadow-2xl hover:bg-zinc-800 hover:border-zinc-500 transition-all duration-200 cursor-pointer flex items-center justify-center group"
        >
          <LiaCookieSolid className="w-5 h-5 transition-transform group-hover:rotate-45" />
        </button>
      )}

      {/* 3. Pop-up voor voorkeuren */}
      {showSettings && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in">
          <div className="bg-[#1a1a20] border border-zinc-800 w-full max-w-lg rounded-3xl p-6 sm:p-8 text-zinc-100 shadow-2xl space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-serif text-white">Cookievoorkeuren beheren</h3>
              <button 
                onClick={() => setShowSettings(false)}
                className="text-zinc-400 hover:text-white text-lg font-bold cursor-pointer"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-zinc-400 leading-relaxed">
              Hier kunt u aangeven welke cookies u wilt toestaan. Noodzakelijke cookies zijn altijd ingeschakeld.
            </p>

            <div className="space-y-4">
              <div className="flex items-start justify-between p-4 rounded-2xl bg-zinc-900/50 border border-zinc-800">
                <div className="space-y-1 pr-4">
                  <p className="text-sm font-medium text-white">Noodzakelijk (Functioneel)</p>
                  <p className="text-xs text-zinc-400">Slaat uw sessie en cookiekeuze op via een beveiligde cookie.</p>
                </div>
                <input type="checkbox" checked disabled className="mt-1 accent-white cursor-not-allowed" />
              </div>

              <div className="flex items-start justify-between p-4 rounded-2xl bg-zinc-900/50 border border-zinc-800">
                <div className="space-y-1 pr-4">
                  <p className="text-sm font-medium text-white">Analytisch</p>
                  <p className="text-xs text-zinc-400">Helpt websitegebruik te meten om de configurator te optimaliseren.</p>
                </div>
                <input 
                  type="checkbox" 
                  checked={preferences.analytics}
                  onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                  className="mt-1 w-4 h-4 accent-white cursor-pointer" 
                />
              </div>

              <div className="flex items-start justify-between p-4 rounded-2xl bg-zinc-900/50 border border-zinc-800">
                <div className="space-y-1 pr-4">
                  <p className="text-sm font-medium text-white">Marketing & Tracking</p>
                  <p className="text-xs text-zinc-400">Voor campagnerelateerde doeleinden en conversiemetingen.</p>
                </div>
                <input 
                  type="checkbox" 
                  checked={preferences.marketing}
                  onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                  className="mt-1 w-4 h-4 accent-white cursor-pointer" 
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-end gap-2.5 pt-2">
              <button
                onClick={() => setShowSettings(false)}
                className="w-full sm:w-auto px-4 py-2.5 rounded-full border border-zinc-700 text-zinc-300 text-xs font-bold uppercase tracking-wider transition cursor-pointer hover:bg-zinc-800 text-center"
              >
                Annuleren
              </button>
              <button
                onClick={handleSaveCustom}
                className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-white text-[#111115] hover:bg-zinc-200 text-xs font-bold uppercase tracking-wider transition cursor-pointer shadow-md text-center"
              >
                Voorkeuren opslaan
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}