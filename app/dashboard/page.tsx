'use client';

import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function DashboardPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [loading, setLoading] = useState(false);

  const [vouchers, setVouchers] = useState<any[]>([]);
  const [fetchingData, setFetchingData] = useState(false);

  // Check of de sessie al bekend is bij herladen
  useEffect(() => {
    const savedAuth = sessionStorage.getItem('nomi_dashboard_auth');
    if (savedAuth === 'true') {
      setIsLoggedIn(true);
      fetchVouchers();
    }
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');
    setLoading(true);

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setIsLoggedIn(true);
        sessionStorage.setItem('nomi_dashboard_auth', 'true');
        fetchVouchers();
      } else {
        setLoginError(data.error || 'Inloggen mislukt.');
      }
    } catch (err) {
      setLoginError('Er is een technische fout opgetreden.');
    } finally {
      setLoading(false);
    }
  };

  const fetchVouchers = async () => {
    setFetchingData(true);
    try {
      const res = await fetch('/api/vouchers');
      const data = await res.json();

      if (res.ok && data.vouchers) {
        setVouchers(data.vouchers);
      } else {
        console.error('Kon vouchers niet laden:', data.error);
      }
    } catch (err) {
      console.error('Fout bij ophalen vouchers voor dashboard:', err);
    } finally {
      setFetchingData(false);
    }
  };

  // --- CSV EXPORTEREN FUNCTIE ---
  const handleExportCsv = () => {
    if (vouchers.length === 0) {
      alert('Geen data beschikbaar om te exporteren.');
      return;
    }

    const headers = ['Toegangscode', 'Type woning', 'Klantnaam', 'Klant E-mail', 'Designpakket', 'Status'];
    
    const rows = vouchers.map(v => {
      const details = v.voucherVelden || {};
      const toegangscode = `"${details.toegangscode || v.title || ''}"`;
      const woningType = `"${details.gekozenTypeWoning || details.gekozen_type_woning || 'Onbekend'}"`;
      const klantNaam = `"${details.klantNaam || details.klant_naam || '—'}"`;
      const klantEmail = `"${details.klantEMail || details.klant_email || '—'}"`;
      const designPakket = `"${details.gekozenDesignpakket || details.gekozen_designpakket || '—'}"`;
      
      const statusVal = String(details.status || '');
      const isVerz = statusVal === 'bevestigd' || statusVal.toLowerCase().includes('bevestigd') || statusVal.toLowerCase().includes('verzilverd');
      const status = `"${isVerz ? 'Verzilverd' : 'Niet verzilverd'}"`;

      return [toegangscode, woningType, klantNaam, klantEmail, designPakket, status].join(';');
    });

    const csvContent = '\uFEFF' + [headers.join(';'), ...rows].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `nomi-cheque-dashboard-${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // --- STATISTIEKEN BEREKENEN OP BASIS VAN DATABASE ---
  const totaalWoningen = vouchers.length;
  const verzilverdLijst = vouchers.filter(v => {
    const statusVal = String(v.voucherVelden?.status || '');
    return (
      statusVal === 'bevestigd' || 
      statusVal.toLowerCase().includes('bevestigd') || 
      statusVal.toLowerCase().includes('verzilverd')
    );
  });
  const aantalVerzilverd = verzilverdLijst.length;
  const aantalOpen = totaalWoningen - aantalVerzilverd;
  const voortgangPercentage = totaalWoningen > 0 ? Math.round((aantalVerzilverd / totaalWoningen) * 100) : 0;

  return (
    <div className="min-h-screen bg-dark flex flex-col justify-between text-dark">
      <Header currentScreen="configurator" />

      <main className="grow bg-[#F9F6F0]">
        {!isLoggedIn ? (
          /* INLOGSCHERM */
          <div className="flex items-center justify-center py-24 px-6">
            <div className="bg-white p-8 rounded-2xl w-full max-w-md shadow-lg border border-[#E5E2DD]">
              <h2 className="font-serif text-2xl text-dark mb-2">Dashboard Inloggen</h2>
              <p className="text-[#666] text-sm mb-6">Log in met je Gebruikersnaam en Application password.</p>

              {loginError && (
                <div className="bg-[#FDF2F2] border border-[#F5C6CB] text-[#721C24] p-3 rounded-lg text-xs mb-4">
                  {loginError}
                </div>
              )}

              <form onSubmit={handleLogin}>
                <div className="mb-4">
                  <label className="block text-xs font-bold uppercase text-[#888] mb-2">Gebruikersnaam</label>
                  <input 
                    type="text" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    required
                    className="w-full p-3 rounded-lg border border-[#E5E2DD] text-sm box-border focus:outline-none focus:border-dark"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-xs font-bold uppercase text-[#888] mb-2">Application Password</label>
                  <input 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required
                    className="w-full p-3 rounded-lg border border-[#E5E2DD] text-sm box-border focus:outline-none focus:border-dark"
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full bg-dark text-white p-3.5 rounded-lg font-bold text-xs uppercase tracking-wider cursor-pointer hover:bg-black transition"
                >
                  {loading ? 'Bezig met inloggen...' : 'Inloggen'}
                </button>
              </form>
            </div>
          </div>
        ) : (
          /* HOOFD DASHBOARD SCHERM */
          <div className="max-w-7xl mx-auto px-6 sm:px-12 py-12">
            
            <div className="flex justify-between items-start mb-8">
              <div>
                <span className="text-[10px] font-bold tracking-[0.2em] text-[#C5A880] uppercase block mb-2">
                  INTERN • OVERZICHT
                </span>
                <h1 className="text-4xl md:text-5xl font-serif text-dark mb-3">
                  Cheque-dashboard
                </h1>
                <p className="text-[#666] text-base">
                  Live overzicht op basis van alle actieve vouchers in de database.
                </p>
              </div>

              <button 
                onClick={() => { sessionStorage.removeItem('nomi_dashboard_auth'); setIsLoggedIn(false); }}
                className="bg-transparent border border-dark/20 text-dark px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-dark hover:text-white transition cursor-pointer"
              >
                Uitloggen
              </button>
            </div>

            {/* Statistieken Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="bg-white p-6 rounded-2xl border border-[#E5E2DD] shadow-sm">
                <div className="font-serif text-4xl text-dark mb-1">{totaalWoningen}</div>
                <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#888]">Totaal woningen</div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-[#E5E2DD] shadow-sm">
                <div className="font-serif text-4xl text-[#2E7D4E] mb-1">{aantalVerzilverd}</div>
                <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#888]">Verzilverd</div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-[#E5E2DD] shadow-sm">
                <div className="font-serif text-4xl text-[#A63A3A] mb-1">{aantalOpen}</div>
                <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#888]">Nog open</div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-[#E5E2DD] shadow-sm">
                <div className="font-serif text-4xl text-[#9E835E] mb-1">{voortgangPercentage}%</div>
                <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#888]">Voortgang</div>
              </div>
            </div>

            {/* Tabel Overzicht */}
            <div className="bg-white rounded-2xl border border-[#E5E2DD] shadow-sm overflow-hidden">
              <div className="p-6 border-b border-[#E5E2DD] flex justify-between items-center">
                <h3 className="m-0 text-lg font-serif text-dark">Alle woningen</h3>
                <button 
                  onClick={handleExportCsv}
                  className="bg-transparent border-none text-dark text-xs font-bold cursor-pointer uppercase tracking-wider hover:text-[#C5A880] transition"
                >
                  Exporteer ↓
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-left text-sm">
                  <thead>
                    <tr className="border-b border-[#E5E2DD] text-[#888] text-[10px] uppercase tracking-wider">
                      <th className="py-4 px-6">Type woning</th>
                      <th className="py-4 px-6">Klant naam</th>
                      <th className="py-4 px-6">Designpakket</th>
                      <th className="py-4 px-6">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {fetchingData ? (
                      <tr>
                        <td colSpan={4} className="py-8 text-center text-[#888]">Gegevens ophalen uit WordPress...</td>
                      </tr>
                    ) : vouchers.length === 0 ? (
                      <tr>
                        <td colSpan={4} className="py-8 text-center text-[#888]">Geen vouchers gevonden in de backend.</td>
                      </tr>
                    ) : (
                      vouchers.map((v, index) => {
                        const details = v.voucherVelden || {};
                        
                        const woningTypeLabel = details.gekozenTypeWoning || details.gekozen_type_woning || v.title || 'Type Onbekend';
                        const klantNaam = details.klantNaam || details.klant_naam || '—';
                        const designPakket = details.gekozenDesignpakket || details.gekozen_designpakket || '—';
                        
                        const statusVal = String(details.status || '');
                        const isVerzilverd = 
                          statusVal === 'bevestigd' || 
                          statusVal.toLowerCase().includes('bevestigd') || 
                          statusVal.toLowerCase().includes('verzilverd');

                        return (
                          <tr key={v.databaseId || index} className="border-b border-[#EFECE6] hover:bg-[#FAF9F6] transition">
                            <td className="py-4 px-6 font-bold text-dark">{woningTypeLabel}</td>
                            <td className="py-4 px-6 text-[#555]">{klantNaam}</td>
                            <td className="py-4 px-6 text-[#555]">{designPakket}</td>
                            <td className="py-4 px-6">
                              {isVerzilverd ? (
                                <span className="inline-flex items-center bg-[#EAF4ED] text-[#2E7D4E] py-1 px-3 rounded-full text-xs font-bold">
                                  <span className="w-1.5 h-1.5 bg-[#2E7D4E] rounded-full inline-block mr-1.5"></span>
                                  Verzilverd
                                </span>
                              ) : (
                                <span className="inline-flex items-center bg-[#FDF2F2] text-[#A63A3A] py-1 px-3 rounded-full text-xs font-bold">
                                  <span className="w-1.5 h-1.5 bg-[#A63A3A] rounded-full inline-block mr-1.5"></span>
                                  Niet verzilverd
                                </span>
                              )}
                            </td>
                          </tr>
                        );
                      })
                    )}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}