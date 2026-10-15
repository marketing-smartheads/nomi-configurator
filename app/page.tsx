import { getPageData } from '@/lib/cms';
import MainContent from '@/components/MainContent';
import VoucherParamHandler from '@/components/VoucherParamHandler';

export default async function Home() {
  const { sections, configuratorData } = await getPageData();

  return (
    <>
      <VoucherParamHandler />
      <MainContent
        sections={sections}
        configuratorData={configuratorData}
      />
    </>
  );
}