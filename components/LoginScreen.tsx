'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';
import { useRouter } from 'next/navigation';

interface LoginScreenProps {
  toegangscode: string;
  setToegangscode: (val: string) => void;
  klantEmail: string;
  setKlantEmail: (val: string) => void;
  error: string | null;
  loading: boolean;
  onSubmit: (e: React.FormEvent) => void;
}

export default function LoginScreen({
  toegangscode,
  setToegangscode,
  klantEmail,
  setKlantEmail,
  error,
  loading,
  onSubmit,
}: LoginScreenProps) {
  const router = useRouter();
  const [isReedsBevestigd, setIsReedsBevestigd] = useState(false);
  const [isChecking, setIsChecking] = useState(false);
  const [customError, setCustomError] = useState<string | null>(null);

  const [localCode, setLocalCode] = useState(toegangscode);
  const [localEmail, setLocalEmail] = useState(klantEmail);

  useEffect(() => {
    setLocalCode(toegangscode);
  }, [toegangscode]);

  useEffect(() => {
    setLocalEmail(klantEmail);
  }, [klantEmail]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const confirmed = sessionStorage.getItem('configuratorConfirmed');
      if (confirmed === 'true') {
        setIsReedsBevestigd(true);
      }
    }
  }, []);

  const handleVouchercodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.toUpperCase();
    setLocalCode(val);
    setToegangscode(val);
    setCustomError(null);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setLocalEmail(val);
    setKlantEmail(val);
    setCustomError(null);
  };

  const handleSubmitWithStorage = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsChecking(true);
    setCustomError(null);
    
    try {
      const ingevoerdeCodeClean = localCode.trim().toUpperCase();
      const ingevoerdeEmailClean = localEmail.trim();

      // Roep het /api/vouchers endpoint aan om de combinatie strikt te verifiëren
      const res = await fetch('/api/auth-voucher', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          toegangscode: ingevoerdeCodeClean,
          klantEmail: ingevoerdeEmailClean,
        }),
      });

      const data = await res.json();

      // Als de API de inlog afkeurt (bijv. verkeerd e-mailadres of code), stop direct!
      if (!res.ok) {
        setCustomError(data.error || 'De combinatie van vouchercode en e-mailadres is onjuist.');
        setIsChecking(false);
        return;
      }

      // Sla gegevens op in storage
      if (typeof window !== 'undefined') {
        sessionStorage.setItem('voucherCode', ingevoerdeCodeClean);
        sessionStorage.setItem('klantEmail', ingevoerdeEmailClean);
        sessionStorage.setItem('toegangscode', ingevoerdeCodeClean);
        localStorage.setItem('toegangscode', ingevoerdeCodeClean);
        localStorage.setItem('klantEmail', ingevoerdeEmailClean);
      }

      if (data.isBevestigd) {
        if (typeof window !== 'undefined') {
          sessionStorage.setItem('configuratorConfirmed', 'true');
          localStorage.setItem('configurator_definitief_bevestigd', 'true');
        }
        setIsReedsBevestigd(true);
        setIsChecking(false);
        return;
      }

    } catch (err) {
      console.error('Fout bij verifiëren voucher:', err);
      setCustomError('Er ging iets mis bij het controleren van de gegevens. Probeer het opnieuw.');
      setIsChecking(false);
      return;
    }

    setIsChecking(false);
    onSubmit(e);
  };

  if (isReedsBevestigd) {
    return (
      <div 
        className="w-full max-w-135 relative border border-white/10 shadow-2xl overflow-hidden flex flex-col justify-between rounded-4xl px-5 py-8 sm:px-14 sm:py-12 text-center space-y-6"
        style={{
          backgroundColor: 'rgba(235, 229, 222, 0.42)',
          backdropFilter: 'blur(44px)',
          WebkitBackdropFilter: 'blur(44px)',
        }}
      >
        <div className="space-y-4">
          <h2 className="text-3xl font-serif text-dark">Vouchercode reeds gebruikt</h2>
          <p className="text-sm text-zinc-700 leading-relaxed">
            Deze vouchercode is al ingewisseld en kan niet meer opnieuw worden gebruikt. 
            Bij vragen kunt u contact opnemen met de makelaar: <strong className="text-dark">De Keizer Makelaarsgroep</strong> via{' '}
            <a href="tel:0306008240" className="underline hover:opacity-80 font-medium text-dark">030-600 82 40</a> of mail naar{' '}
            <a href="mailto:nieuwbouw@dekeizer.nl" className="underline hover:opacity-80 font-medium text-dark">nieuwbouw@dekeizer.nl</a>.
          </p>
        </div>

        <div className="pt-4">
          <a
            href="/download"
            className="inline-block w-full py-4 bg-dark text-white rounded-xl text-xs font-bold uppercase tracking-widest hover:opacity-90 transition text-center"
          >
            Ga naar mijn downloadpagina
          </a>
        </div>
      </div>
    );
  }

  const displayError = customError || error;

  return (
    <div 
      className="w-full max-w-135 relative border border-white/10 shadow-2xl overflow-hidden flex flex-col justify-between rounded-4xl px-5 py-8 sm:px-14 sm:py-12"
      style={{
        backgroundColor: 'rgba(235, 229, 222, 0.42)',
        backdropFilter: 'blur(44px)',
        WebkitBackdropFilter: 'blur(44px)',
      }}
    >
      <form onSubmit={handleSubmitWithStorage} className="flex flex-col h-full justify-between">
        
        <div className="flex items-center justify-between w-full mb-10">
          <div className="relative h-7 w-28">
            <Link 
              href="https://www.nomi-utrecht.nl/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="relative h-7 w-28 block hover:opacity-80 transition-opacity"
            >
              <Image 
                src="/assets/logo-nomi.svg" 
                alt="Nomi Logo" 
                fill 
                className="object-contain object-left"
              />
            </Link>
          </div>
          <div className="relative h-3 w-3 opacity-40">
            <Image 
              src="/assets/x-symbol.svg" 
              alt="X" 
              fill 
              className="object-contain"
            />
          </div>
          <div className="relative h-7 w-32">
            <Link 
              href="https://www.thomasdegier.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="relative h-7 w-32 block hover:opacity-80 transition-opacity"
            >
              <Image 
                src="/assets/logo-tdg.svg" 
                alt="Thomas de Gier Logo" 
                fill 
                className="object-contain object-right"
              />
            </Link>
          </div>
        </div>

        <div className="mb-8">
          <p className="text-[11px] tracking-[0.2em] uppercase font-medium text-accent mb-2">
            Exclusieve Toegang
          </p>
          <h1 className="font-serif font-bold text-3xl sm:text-4xl text-dark mb-3">
            Tot uw nieuwe<br />interieur
          </h1>
          <p className="text-sm text-dark">
            Voer uw unieke vouchercode en e-mailadres in om uw interieurreis te starten.
          </p>
        </div>

        <div className="space-y-5 mb-8">
          <div>
            <label className="block text-[11px] tracking-wider uppercase font-semibold text-dark/80 mb-2">
              Vouchercode
            </label>
            <input
              type="text"
              value={localCode}
              onChange={handleVouchercodeChange}
              placeholder="XX-XXXX-X"
              required
              className="w-full h-13 px-5 rounded-xl text-base sm:text-sm tracking-widest font-sans
                bg-dark border border-white/10 
                backdrop-blur-[3.75rem] 
                text-white placeholder-white/40 
                focus:outline-none focus:border-white/35 transition-all duration-300 uppercase
              "
            />
          </div>

          <div>
            <label className="block text-[11px] tracking-wider uppercase font-semibold text-dark/80 mb-2">
              E-mailadres
            </label>
            <input
              type="email"
              value={localEmail}
              onChange={handleEmailChange}
              placeholder="naam@voorbeeld.nl"
              required
              className="w-full h-13 px-5 rounded-xl text-base sm:text-sm tracking-widest font-sans            
                bg-dark border border-white/10 backdrop-blur-[3.75rem] 
                text-white placeholder-white/40 
                focus:outline-none focus:border-white/35 transition-all duration-300
              "
            />
          </div>
        </div>

        {displayError && (
          <p className="text-sm text-center text-red-600 font-semibold mb-4">
            {displayError}
          </p>
        )}

        <div className="space-y-6">
          <Button
            type="submit"
            loading={loading || isChecking}
            className="w-full" 
          >
            Start mijn interieurreis
          </Button>

          <p className="text-xs text-dark text-center leading-relaxed">
            Geen toegangscode ontvangen? Neem contact op met uw projectbegeleider. Voor vragen of meer informatie; neem contact op met De Keizer Makelaarsgroep via 030-600 82 40 of mail naar <a href="mailto:nieuwbouw@dekeizer.nl" className="underline hover:opacity-80">nieuwbouw@dekeizer.nl</a>.
          </p>
        </div>

      </form>
    </div>
  );
}