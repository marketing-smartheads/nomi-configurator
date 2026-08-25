import { getPageData } from '@/lib/cms';
import MainContent from '@/components/MainContent';

export default async function Home() {
  const { sections, configuratorData } = await getPageData();

  return (
    <MainContent 
      sections={sections} 
      configuratorData={configuratorData} 
    />
  );
}