import { useState, useEffect } from 'react';
import Hero from './Hero';
import Story from './Story';
import Cta from './Cta';
import Faq from './Faq';
import { getPageData } from '../lib/cms';

export default function WelcomeScreen({ onStart }: { onStart: () => void }) {
  const [sectionsData, setSectionsData] = useState<any>(() => {
    if (typeof window !== 'undefined') {
      const cached = localStorage.getItem('nomi_pagedata');
      return cached ? JSON.parse(cached) : null;
    }
    return null;
  });

  useEffect(() => {
    getPageData().then(data => {
      if (data) {
        console.log('Ontvangen data uit WordPress:', data); // Handig om te debuggen in F12 console
        setSectionsData(data);
        localStorage.setItem('nomi_pagedata', JSON.stringify(data));
      }
    }).catch(err => console.error(err));
  }, []);

  if (!sectionsData) {
    return (
      <div className="min-h-screen bg-[#121212] flex items-center justify-center">
        <div className="text-white text-center font-sans">Gegevens worden geladen...</div>
      </div>
    );
  }

  // Omdat getPageData() een object teruggeeft met { sections, configuratorData }, 
  // moeten we de data uit sections halen:
  const sections = sectionsData.sections || sectionsData; 

  return (
    <>
      <Hero data={sections.hero} onStart={onStart} />
      <Story data={sections.story} />
      <Cta data={sections.cta} onStart={onStart} />
      <Faq data={sections.faq} />
    </>
  );
}