'use client';

import { useEffect } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';

export default function VoucherParamHandler() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const codeParam = searchParams.get('code');
    if (codeParam) {
      const cleanCode = codeParam.trim().toUpperCase();
      localStorage.setItem('toegangscode', cleanCode);
      localStorage.setItem('voucherCode', cleanCode);
      sessionStorage.setItem('toegangscode', cleanCode);
      sessionStorage.setItem('voucherCode', cleanCode);

      // Verwijder de ?code= parameter uit de adresbalk zonder de pagina te herladen
      router.replace(pathname, { scroll: false });
    }
  }, [searchParams, router, pathname]);

  return null; // Render niets op het scherm
}