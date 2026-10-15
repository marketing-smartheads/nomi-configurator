import { getPageData } from '@/lib/cms';
import MainContent from '@/components/MainContent';
import VoucherWelcomeModal from '@/components/VoucherWelcomeModal';

export default async function VoucherLandingPage() {
  const { sections, configuratorData } = await getPageData();

  return (
    <>
      {/* Activeert automatisch de welkomst-popup als er een ?code= parameter in de URL staat */}
      <VoucherWelcomeModal />
      
      <MainContent
        sections={sections}
        configuratorData={configuratorData}
      />
    </>
  );
}