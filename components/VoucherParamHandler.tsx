'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export default function VoucherParamHandler() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const codeParam = searchParams.get('code');
    if (codeParam) {
      localStorage.setItem('toegangscode', codeParam);
      localStorage.setItem('voucherCode', codeParam);
      sessionStorage.setItem('toegangscode', codeParam);
      sessionStorage.setItem('voucherCode', codeParam);
    }
  }, [searchParams]);

  return null; // Render niets op het scherm
}