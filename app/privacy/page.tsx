// app/privacy/page.tsx
'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#111115] text-zinc-100 font-sans flex flex-col justify-between selection:bg-white selection:text-[#111115]">
      <Header currentScreen="welcome" onStart={() => window.location.href = '/'} />

      <main className="flex-grow w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-8 sm:space-y-12">
        
        <div className="space-y-2 sm:space-y-3">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif text-white tracking-tight">
            Privacy- en Cookieverklaring
          </h1>
          <p className="text-[11px] sm:text-xs text-zinc-400 tracking-wider uppercase">
            Laatst bijgewerkt op: november 2026
          </p>
        </div>

        <div className="space-y-8 sm:space-y-10 text-sm sm:text-base text-zinc-300 leading-relaxed">
          <section className="space-y-3 p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#1a1a20] border border-zinc-800/80 shadow-lg text-sm">
            <p>
              Welkom bij de interieur- en designconfigurator van NOMI in samenwerking met Thomas de Gier. Wij respecteren de privacy van al onze gebruikers en dragen er zorg voor dat de persoonlijke informatie die je met ons deelt strikt vertrouwelijk wordt behandeld. In deze privacy- en cookieverklaring leggen wij uit welke gegevens wij verzamelen, waarom wij deze opslaan in ons CMS en hoe wij omgaan met sessie- en browseropslag.
            </p>
          </section>

          <div className="space-y-3">
            <h2 className="text-lg sm:text-xl font-serif text-white pt-2">1. Welke persoonsgegevens verwerken en bewaren wij?</h2>
            <p className="text-sm sm:text-base">
              Wanneer je gebruikmaakt van onze configurator, inlogt met een unieke vouchercode en jouw keuzes definitief bevestigt, slaan wij uitsluitend de volgende gegevens op in onze beveiligde database (CMS) en jouw browsersessie:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-zinc-400">
              <li>Jouw unieke toegangscode (vouchercode)</li>
              <li>Het gekoppelde e-mailadres ter verificatie van jouw toegangscode</li>
              <li>Jouw gekozen woningtype, indeling en designpakket</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg sm:text-xl font-serif text-white pt-2">2. Waarom verwerken en bewaren wij deze gegevens?</h2>
            <p className="text-sm sm:text-base">
              Wij gebruiken en bewaren deze gegevens uitsluitend voor het functioneren van de configurator:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-zinc-400">
              <li>Het verifiëren van jouw unieke toegangscode en gekoppelde e-mailadres via onze beveiligde backend.</li>
              <li>Het mogelijk maken van jouw persoonlijke interieurconfiguratie en het tussentijds onthouden van jouw stappen.</li>
              <li>Het vastleggen van jouw definitieve keuzes in ons CMS zodat jouw persoonlijke downloadpakket (inclusief tekeningen en specificaties) direct beschikbaar wordt gesteld.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg sm:text-xl font-serif text-white pt-2">3. Geen verstrekking aan derden</h2>
            <p className="text-sm sm:text-base">
              Jouw gegevens en samengestelde configuratie worden binnen deze applicatie niet gedeeld met externe partners of derden en worden niet gebruikt voor commerciële benadering.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg sm:text-xl font-serif text-white pt-2">4. Over Browseropslag (Session Storage & Local Storage)</h2>
            <p className="text-sm sm:text-base">
              Onze webapplicatie maakt uitsluitend gebruik van strikt noodzakelijke, functionele browsertechnologieën om jouw sessie soepel te laten verlopen:
            </p>
            
            <div className="space-y-3 pt-2">
              <div className="p-4 rounded-xl sm:rounded-2xl bg-zinc-900/50 border border-zinc-800 space-y-1">
                <p className="text-sm font-medium text-white">Noodzakelijke Sessie- en Lokale Opslag</p>
                <p className="text-xs text-zinc-400">
                  We gebruiken <code className="text-white bg-zinc-800 px-1 py-0.5 rounded">sessionStorage</code> en <code className="text-white bg-zinc-800 px-1 py-0.5 rounded">localStorage</code> om jouw actieve sessiestatus, ingevoerde vouchercode en gekozen stappen tijdelijk lokaal op jouw apparaat te bewaren tijdens jouw bezoek. Hiervoor worden geen tracking- of marketingcookies geplaatst.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg sm:text-xl font-serif text-white pt-2">5. Overzicht van opslag en gegevens</h2>
            <div className="w-full overflow-x-auto border border-zinc-800 rounded-2xl bg-[#1a1a20] shadow-sm">
              <table className="w-full text-left text-xs text-zinc-300 min-w-150">
                <thead className="bg-zinc-900/80 border-b border-zinc-800 text-zinc-400 uppercase tracking-wider">
                  <tr>
                    <th className="p-3 sm:p-4">Gegeven / Sleutel</th>
                    <th className="p-3 sm:p-4">Opslaglocatie</th>
                    <th className="p-3 sm:p-4">Doel</th>
                    <th className="p-3 sm:p-4">Bewaartermijn</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800/60">
                  <tr>
                    <td className="p-3 sm:p-4 font-mono text-white">Vouchercode & Configuratiedata</td>
                    <td className="p-3 sm:p-4">Beveiligd CMS / Database</td>
                    <td className="p-3 sm:p-4">Vastleggen van jouw definitieve keuzes en vrijgeven van de downloads.</td>
                    <td className="p-3 sm:p-4">Gedurende de looptijd van het project</td>
                  </tr>
                  <tr>
                    <td className="p-3 sm:p-4 font-mono text-white">Sessiedata & Inlogstatus</td>
                    <td className="p-3 sm:p-4">Session Storage / Local Storage</td>
                    <td className="p-3 sm:p-4">Tijdelijk onthouden van keuzes en stappen tijdens het configureren.</td>
                    <td className="p-3 sm:p-4">Tijdens browsersessie / tot wissen van browsergegevens</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg sm:text-xl font-serif text-white pt-2">6. Jouw rechten</h2>
            <p className="text-sm sm:text-base">
              Op grond van de Algemene Verordening Gegevensbescherming (AVG) heb je het recht om jouw persoonsgegevens in te zien, te laten corrigeren of te laten verwijderen uit ons systeem. Via deze online configurator worden geen directe contactkanalen aangeboden; eventuele verzoeken lopen uitsluitend via jouw eigen projectbegeleider.
            </p>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}