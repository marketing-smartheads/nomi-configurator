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
            Laatst bijgewerkt op: juni 2026
          </p>
        </div>

        <div className="space-y-8 sm:space-y-10 text-sm sm:text-base text-zinc-300 leading-relaxed">
          <section className="space-y-3 p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#1a1a20] border border-zinc-800/80 shadow-lg text-sm">
            <p>
              Welkom bij de interieur- en designconfigurator van NOMI in samenwerking met Thomas de Gier. Wij respecteren de privacy van al onze gebruikers en dragen er zorg voor dat de persoonlijke informatie die u ons verschaft vertrouwelijk wordt behandeld. In deze privacy- en cookieverklaring leggen wij uit welke gegevens wij verzamelen, waarom wij deze opslaan in ons CMS en hoe wij omgaan met sessie- en browseropslag.
            </p>
          </section>

          <div className="space-y-3">
            <h2 className="text-lg sm:text-xl font-serif text-white pt-2">1. Welke persoonsgegevens verwerken en bewaren wij?</h2>
            <p className="text-sm sm:text-base">
              Wanneer u gebruikmaakt van onze configurator, inlogt met een unieke vouchercode en uw keuzes definitief bevestigt, slaan wij de volgende gegevens op in onze beveiligde database (CMS) en uw browsersessie:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-zinc-400">
              <li>Uw unieke toegangscode (vouchercode)</li>
              <li>Uw contactgegevens (naam, e-mailadres en telefoonnummer)</li>
              <li>Uw gekozen woningtype, indeling en designpakket</li>
              <li>Uw toestemmingskeuze met betrekking tot het delen van gegevens met de partner (Aanhuis Spijk)</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg sm:text-xl font-serif text-white pt-2">2. Waarom verwerken en bewaren wij deze gegevens?</h2>
            <p className="text-sm sm:text-base">
              Wij gebruiken en bewaren deze gegevens voor de volgende doeleinden:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-zinc-400">
              <li>Het verifiëren van uw unieke toegangscode via onze backend.</li>
              <li>Het mogelijk maken van uw persoonlijke interieurconfiguratie en het tussentijds onthouden van uw stappen.</li>
              <li>Het vastleggen van uw definitieve keuzes in ons CMS zodat deze gekoppeld kunnen worden aan uw vouchercode.</li>
              <li>Het delen van uw configuratie en contactgegevens met de geselecteerde partner (Aanhuis Spijk) indien u hiervoor akkoord heeft gegeven.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg sm:text-xl font-serif text-white pt-2">3. Over Browseropslag (Session Storage & Local Storage)</h2>
            <p className="text-sm sm:text-base">
              Onze webapplicatie maakt gebruik van functionele browsertechnologieën om uw sessie soepel te laten verlopen:
            </p>
            
            <div className="space-y-3 pt-2">
              <div className="p-4 rounded-xl sm:rounded-2xl bg-zinc-900/50 border border-zinc-800 space-y-1">
                <p className="text-sm font-medium text-white">A. Noodzakelijke Sessie- en Lokale Opslag</p>
                <p className="text-xs text-zinc-400">
                  We gebruiken <code className="text-white bg-zinc-800 px-1 py-0.5 rounded">sessionStorage</code> en lokale opslag om uw actieve sessiestatus en keuzes tijdelijk lokaal te bewaren tijdens uw bezoek. Hiervoor is geen toestemming vereist.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg sm:text-xl font-serif text-white pt-2">4. Overzicht van opslag en gegevens</h2>
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
                    <td className="p-3 sm:p-4 font-mono text-white">Klantgegevens & Configuratiedata</td>
                    <td className="p-3 sm:p-4">CMS / Database (WordPress)</td>
                    <td className="p-3 sm:p-4">Vastleggen van definitieve keuzes en partneroverdracht.</td>
                    <td className="p-3 sm:p-4">Gedurende het project / zolang noodzakelijk</td>
                  </tr>
                  <tr>
                    <td className="p-3 sm:p-4 font-mono text-white">Sessiedata & Inlogstatus</td>
                    <td className="p-3 sm:p-4">Session Storage / Local Storage</td>
                    <td className="p-3 sm:p-4">Tijdelijk onthouden van keuzes tijdens het configureren.</td>
                    <td className="p-3 sm:p-4">Tijdens browsersessie / tot sluiten van tabblad</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg sm:text-xl font-serif text-white pt-2">5. Uw rechten</h2>
            <p className="text-sm sm:text-base">
              U heeft het recht om uw persoonsgegevens in te zien, te corrigeren of te laten verwijderen uit ons CMS.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg sm:text-xl font-serif text-white pt-2">6. Vragen of contact</h2>
            <p className="text-sm sm:text-base">
              Voor vragen over het privacybeleid of de opslag van uw gegevens kunt u contact opnemen met de betrokken partner:
            </p>
            <div className="p-4 rounded-2xl bg-[#1a1a20] border border-zinc-800 space-y-1 text-zinc-300 text-xs sm:text-sm">
              <p className="font-medium text-white">Aanhuis Spijk (Tobias)</p>
              <p className="text-zinc-400">E-mail: Tobias@aanhuis-spijk.nl</p>
              <p className="text-zinc-400">Telefoon: 030 - 600 82 40</p>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}