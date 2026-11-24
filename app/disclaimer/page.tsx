// app/disclaimer/page.tsx
'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-[#111115] text-zinc-100 font-sans flex flex-col justify-between selection:bg-white selection:text-[#111115]">
      <Header currentScreen="welcome" onStart={() => (window.location.href = '/')} />

      <main className="flex-grow w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-8 sm:space-y-12">
        <div className="space-y-2 sm:space-y-3">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif text-white tracking-tight">
            Disclaimer woningindeling
          </h1>
          <p className="text-[11px] sm:text-xs text-zinc-400 tracking-wider uppercase">
            Laatst bijgewerkt op: november 2026
          </p>
        </div>

        <div className="space-y-8 sm:space-y-10 text-sm sm:text-base text-zinc-300 leading-relaxed">
          <section className="space-y-3 p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#1a1a20] border border-zinc-800/80 shadow-lg text-sm">
            <p>
              Tot en met <strong className="text-white font-semibold">7 december</strong> bestaat de gelegenheid om, in overleg met uw kopersadviseur, een wijzigingsverzoek in te dienen voor de reeds besproken woningindeling. De eventuele definitieve meerkosten die voortvloeien uit de gewenste aanpassing zullen vervolgens door <strong className="text-white font-semibold">ThuisinBouwen</strong> aan u kenbaar worden gemaakt.
            </p>
          </section>

          <div className="space-y-3">
            <h2 className="text-lg sm:text-xl font-serif text-white pt-2">
              1. Aankoop na 7 december
            </h2>
            <p className="text-sm sm:text-base">
              Voor kopers die na deze datum een woning aankopen, is het niet mogelijk de woningindeling te wijzigen.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg sm:text-xl font-serif text-white pt-2">
              2. Verwerking in de uitvoering
            </h2>
            <p className="text-sm sm:text-base">
              Verzoeken tot aanpassing van de indeling kunnen na 7 december niet meer in de uitvoering worden verwerkt.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg sm:text-xl font-serif text-white pt-2">
              3. Elektra- en lichtplan
            </h2>
            <p className="text-sm sm:text-base">
              Aanpassingen in het elektra-/lichtplan kunnen ook niet meer worden doorgevoerd na 7 december.
            </p>
            <p className="text-sm sm:text-base">
              Ook bij het “verplaatsen” van het kookeiland, zithoek en eethoek kan het lichtpunt niet meer worden gecentreerd boven de tafel en/of het eiland.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg sm:text-xl font-serif text-white pt-2">
              4. Sluitingsdatum wijzigingen en bestellen materialen
            </h2>
            <p className="text-sm sm:text-base">
              Onze sluitingsdatum voor het aanleveren van wijzigingen is vastgesteld op 7 december. Tot die datum kunnen wijzigingen met betrekking tot onder andere elektra en loodgieterswerk worden doorgegeven, zoals lichtpunten, elektrapunten, afvoeren en wateraansluitingen.
            </p>
            <p className="text-sm sm:text-base">
              Het bouwbedrijf start begin januari met het bestellen van vloeren en overige materialen. Vanaf dat moment kunnen er geen wijzigingen meer worden verwerkt.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}