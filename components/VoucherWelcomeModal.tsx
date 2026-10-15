'use client';

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Button from './Button';

export default function VoucherWelcomeModal() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [voucherCode, setVoucherCode] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const code = searchParams.get('code');
    if (code) {
      setVoucherCode(code);
      setIsOpen(true);
      // Direct opslaan in storage
      localStorage.setItem('toegangscode', code);
      localStorage.setItem('voucherCode', code);
      sessionStorage.setItem('toegangscode', code);
      sessionStorage.setItem('voucherCode', code);
    }
  }, [searchParams]);

  const handleCopy = () => {
    if (voucherCode) {
      navigator.clipboard.writeText(voucherCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleStart = () => {
    setIsOpen(false);
    // Verwijder de query parameter uit de URL zodat de pop-up niet opnieuw triggert bij herladen
    router.replace('/');
  };

  if (!isOpen || !voucherCode) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4 animate-in fade-in duration-300">
      <div className="bg-[#FAF7F2] border border-[#C5A880]/30 rounded-[2.5rem] max-w-lg w-full p-8 sm:p-12 shadow-2xl space-y-8 text-center relative">
        
        {/* Branding / Header */}
        <div className="space-y-3">
          <p className="text-[10px] tracking-[0.25em] uppercase text-primary font-semibold">
            Exclusieve Uitnodiging
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-dark">
            Welkom bij NOMI
          </h2>
          <p className="text-xs sm:text-sm text-muted leading-relaxed max-w-md mx-auto">
            Uw persoonlijke woonwensen zijn gekoppeld aan onderstaande unieke vouchercode. Start direct met het samenstellen van uw interieur.
          </p>
        </div>

        {/* Voucher Container */}
        <div className="bg-white border border-dark/10 rounded-2xl p-6 space-y-3 shadow-sm">
          <span className="text-[10px] uppercase tracking-widest text-muted block">
            Uw Vouchercode
          </span>
          <div className="text-2xl sm:text-3xl font-serif text-dark tracking-wider font-medium select-all">
            {voucherCode}
          </div>
          
          <div className="pt-2 flex justify-center">
            <button
              type="button"
              onClick={handleCopy}
              className="text-xs font-bold tracking-widest uppercase text-primary hover:text-dark transition cursor-pointer flex items-center gap-1.5"
            >
              {copied ? 'GEKOPIEERD ✓' : 'KOPIEER CODE 📋'}
            </button>
          </div>
        </div>

        {/* Start Actie */}
        <div className="space-y-4 pt-2">
          <Button
            onClick={handleStart}
            className="w-full py-4 text-xs font-bold tracking-[0.2em] uppercase"
          >
            START CONFIGURATOR →
          </Button>
          <p className="text-[11px] text-muted/70">
            De code is automatisch voor u ingevuld en vergrendeld.
          </p>
        </div>

      </div>
    </div>
  );
}