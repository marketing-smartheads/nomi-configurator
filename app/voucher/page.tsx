import { getPageData } from '@/lib/cms';
import MainContent from '@/components/MainContent';
import VoucherWelcomeModal from '@/components/VoucherWelcomeModal';
import VoucherParamHandler from '@/components/VoucherParamHandler';
import { Suspense } from 'react';

export default async function VoucherLandingPage() {
  const { sections, configuratorData } = await getPageData();

  return (
    <Suspense fallback={null}>
      <VoucherParamHandler />
      {/* Activeert automatisch de welkomst-popup als er een ?code= parameter in de URL staat */}
      <VoucherWelcomeModal />
      
      <MainContent
        sections={sections}
        configuratorData={configuratorData}
      />
    </Suspense>
  );
}