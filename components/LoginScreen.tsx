'use client';

import Image from 'next/image';
import Link from 'next/link';

import Button from './Button';

interface LoginScreenProps {
  toegangscode: string;
  setToegangscode: (val: string) => void;
  wachtwoord: string;
  setWachtwoord: (val: string) => void;
  error: string | null;
  loading: boolean;
  onSubmit: (e: React.FormEvent) => void;
}

export default function LoginScreen({
  toegangscode,
  setToegangscode,
  wachtwoord,
  setWachtwoord,
  error,
  loading,
  onSubmit,
}: LoginScreenProps) {
  return (
    <div 
      className="w-full max-w-135 relative border border-white/10 shadow-2xl overflow-hidden flex flex-col justify-between rounded-4xl px-5 py-8 sm:px-14.5 sm:py-13"
      style={{
        backgroundColor: 'rgba(235, 229, 222, 0.42)', // #EBE5DE op 42%
        backdropFilter: 'blur(44px)',
        WebkitBackdropFilter: 'blur(44px)',
      }}
    >
      <form onSubmit={onSubmit} className="flex flex-col h-full justify-between">
        
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
          <h1 className="font-serif font-bold text-heading text-dark mb-3">
            Tot uw nieuwe<br />interieur
          </h1>
          <p className="text-body text-dark">
            Voer uw unieke toegangscode en wachtwoord in om uw interieurreis te starten.
          </p>
        </div>

        <div className="space-y-5 mb-8">
          <div>
            <label className="block text-[11px] tracking-wider uppercase font-semibold text-dark/80 mb-2">
              Toegangscode
            </label>
            <input
              type="text"
              value={toegangscode}
              onChange={(e) => setToegangscode(e.target.value)}
              placeholder="X X 3 0 2 5 L K J 5 8 9"
              required
              className="w-full h-13.5 px-5 rounded-xl text-xs sm:text-sm tracking-widest font-sans
                bg-dark border border-white/10 
                backdrop-blur-[3.75rem] 
                text-text-primary placeholder-text-primary/40 
                focus:outline-none focus:border-white/35 transition-all duration-300
              "
            />
          </div>

          <div>
            <label className="block text-[11px] tracking-wider uppercase font-semibold text-dark/80 mb-2">
              Wachtwoord
            </label>
            <input
              type="password"
              value={wachtwoord}
              onChange={(e) => setWachtwoord(e.target.value)}
              placeholder="••••••••"
              required
              className="w-full h-13.5 px-5 rounded-xl text-xs sm:text-sm tracking-widest font-sans                
                bg-dark border border-white/10 backdrop-blur-[3.75rem] 
                text-text-primary placeholder-text-primary/40 
                focus:outline-none focus:border-white/35 transition-all duration-300
              "
            />
          </div>
        </div>

        {error && (
          <p className="text-md text-center text-sans text-primary font-semibold mb-4">
            {error}
          </p>
        )}

        <div className="space-y-6">
          <Button
            type="submit"
            loading={loading}
            className="w-full" 
          >
            Start mijn interieurreis
          </Button>

          <p className="text-body-sm text-dark text-center">
            Geen toegangscode ontvangen? Neem contact op met uw projectbegeleider.
          </p>
        </div>

      </form>
    </div>
  );
}