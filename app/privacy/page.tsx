// app/privacy/page.tsx
'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#111115] text-zinc-100 font-sans flex flex-col justify-between selection:bg-white selection:text-[#111115]">
      {/* Header */}
      <Header currentScreen="privacy" onStart={() => window.location.href = '/'} />

      {/* Hoofdinhoud */}
      <main className="flex-grow w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-8 sm:space-y-12">
        
        {/* Paginatitel */}
        <div className="space-y-2 sm:space-y-3">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif text-white tracking-tight">
            Privacy- en Cookieverklaring
          </h1>
          <p className="text-[11px] sm:text-xs text-zinc-400 tracking-wider uppercase">
            Laatst bijgewerkt op: juni 2026
          </p>
        </div>

        {/* Artikelen container */}
        <div className="space-y-8 sm:space-y-10 text-sm sm:text-base text-zinc-300 leading-relaxed">
          
          {/* Introductie blok */}
          <section className="space-y-3 p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#1a1a20] border border-zinc-800/80 shadow-lg text-sm">
            <p>
              Welkom bij de interieur- en designconfigurator van NOMI in samenwerking met Thomas de Gier. Wij respecteren de privacy van al onze gebruikers en dragen er zorg voor dat de persoonlijke informatie die u ons verschaft vertrouwelijk wordt behandeld. In deze privacy- en cookieverklaring leggen wij uit welke gegevens wij verzamelen, waarom wij deze gebruiken en hoe wij omgaan met cookies, session storage en lokale opslag.
            </p>
          </section>

          {/* Sectie 1 */}
          <div className="space-y-3">
            <h2 className="text-lg sm:text-xl font-serif text-white pt-2">1. Welke persoonsgegevens verwerken wij?</h2>
            <p className="text-sm sm:text-base">
              Wanneer u gebruikmaakt van onze configurator en inlogt met een unieke vouchercode, verwerken wij uitsluitend de gegevens die nodig zijn om uw sessie en interieurvoorkeuren te beheren:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-zinc-400">
              <li>Uw unieke toegangscode (vouchercode)</li>
              <li>Uw e-mailadres (voor de beveiligde downloadpagina en communicatie)</li>
              <li>Uw gekozen interieur- en designopties</li>
            </ul>
          </div>

          {/* Sectie 2 */}
          <div className="space-y-3">
            <h2 className="text-lg sm:text-xl font-serif text-white pt-2">2. Waarom verwerken wij deze gegevens?</h2>
            <p className="text-sm sm:text-base">
              Wij gebruiken deze gegevens uitsluitend voor de volgende doeleinden:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-zinc-400">
              <li>Het verifiëren van uw unieke toegangscode via onze backend.</li>
              <li>Het tonen, opslaan en tussentijds laden van uw persoonlijke interieurconfiguratie.</li>
              <li>Het tijdelijk bewaren van uw sessiestatus en actieve keuzes.</li>
            </ul>
          </div>

          {/* Sectie 3 */}
          <div className="space-y-3">
            <h2 className="text-lg sm:text-xl font-serif text-white pt-2">3. Over Cookies, Session Storage en Local Storage</h2>
            <p className="text-sm sm:text-base">
              Onze webapplicatie maakt gebruik van functionele browsertechnologieën om uw sessie soepel te laten verlopen en uw cookiekeuze te onthouden:
            </p>
            
            <div className="space-y-3 pt-2">
              <div className="p-4 rounded-xl sm:rounded-2xl bg-zinc-900/50 border border-zinc-800 space-y-1">
                <p className="text-sm font-medium text-white">A. Noodzakelijke Cookies &amp; Browseropslag</p>
                <p className="text-xs text-zinc-400">
                  Essentieel voor de werking van de applicatie. Hiermee onthouden we via een beveiligde cookie uw cookiebanner-voorkeur en gebruiken we <code className="text-white bg-zinc-800 px-1 py-0.5 rounded">sessionStorage</code> of lokale opslag om tijdelijke configuratiegegevens en uw actieve sessiestatus gedurende uw bezoek te bewaren. Hiervoor is geen toestemming vereist.
                </p>
              </div>

              <div className="p-4 rounded-xl sm:rounded-2xl bg-zinc-900/50 border border-zinc-800 space-y-1">
                <p className="text-sm font-medium text-white">B. Analytische Voorkeuren</p>
                <p className="text-xs text-zinc-400">
                  Indien ingeschakeld, kunnen wij analytische tools inzetten om anoniem het gebruik van de configurator te meten. <em>Dit start pas na uw uitdrukkelijke toestemming via de cookiebanner.</em>
                </p>
              </div>

              <div className="p-4 rounded-xl sm:rounded-2xl bg-zinc-900/50 border border-zinc-800 space-y-1">
                <p className="text-sm font-medium text-white">C. Marketing- en Trackingvoorkeuren</p>
                <p className="text-xs text-zinc-400">
                  Wordt uitsluitend ingeschakeld als u hier toestemming voor geeft.
                </p>
              </div>
            </div>
          </div>

          {/* Sectie 4: Kloppende Tabel */}
          <div className="space-y-3">
            <h2 className="text-lg sm:text-xl font-serif text-white pt-2">4. Overzicht van geplaatste cookies en opslag</h2>
            <div className="w-full overflow-x-auto border border-zinc-800 rounded-2xl bg-[#1a1a20] shadow-sm">
              <table className="w-full text-left text-xs text-zinc-300 min-w-[600px]">
                <thead className="bg-zinc-900/80 border-b border-zinc-800 text-zinc-400 uppercase tracking-wider">
                  <tr>
                    <th className="p-3 sm:p-4">Naam / Sleutel</th>
                    <th className="p-3 sm:p-4">Opslagtype</th>
                    <th className="p-3 sm:p-4">Doel</th>
                    <th className="p-3 sm:p-4">Bewaartermijn</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800/60">
                  <tr>
                    <td className="p-3 sm:p-4 font-mono text-white">cookie_consent</td>
                    <td className="p-3 sm:p-4">Browser Cookie</td>
                    <td className="p-3 sm:p-4">Onthoudt uw keuzes uit de cookiebanner.</td>
                    <td className="p-3 sm:p-4">1 jaar</td>
                  </tr>
                  <tr>
                    <td className="p-3 sm:p-4 font-mono text-white">Configuratie &amp; Sessiedata</td>
                    <td className="p-3 sm:p-4">Session Storage / Local Storage</td>
                    <td className="p-3 sm:p-4">Slaat tijdelijk uw actieve interieurkeuzes, ingevoerde vouchercode en sessiestatus op.</td>
                    <td className="p-3 sm:p-4">Tijdens brwosersessie / tot sluiten van tabblad</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Sectie 5 & 6 */}
          <div className="space-y-3">
            <h2 className="text-lg sm:text-xl font-serif text-white pt-2">5. Uw rechten en intrekken van toestemming</h2>
            <p className="text-sm sm:text-base">
              U heeft het recht om uw persoonsgegevens in te zien, te corrigeren of te verwijderen. Daarnaast kunt u uw cookie-toestemming op elk moment wijzigen door rechtsonder op het koekje-icoon te klikken en uw instellingen aan te passen.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg sm:text-xl font-serif text-white pt-2">6. Vragen of contact</h2>
            <p className="text-sm sm:text-base">
              Voor vragen over ons privacybeleid of deze verklaring kunt u contact opnemen:
            </p>
            <div className="p-4 rounded-2xl bg-[#1a1a20] border border-zinc-800 space-y-1 text-zinc-300 text-xs sm:text-sm">
              <p className="font-medium text-white">NOMI &amp; Thomas de Gier</p>
              <p className="text-zinc-400">E-mail: email@adres.nl</p>
            </div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}