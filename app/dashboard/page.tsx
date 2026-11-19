'use client';

import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Lijst van verhuur-vouchers die we uit het dashboard filteren voor de makelaar
const VERHUUR_VOUCHERS = new Set([
  // Type A verhuur vouchers
  'nomi-a001', 'nomi-a003', 'nomi-a005', 'nomi-a006', 'nomi-a007', 'nomi-a013',
  'nomi-a019', 'nomi-a020', 'nomi-a021', 'nomi-a022', 'nomi-a023', 'nomi-a024',
  'nomi-a025', 'nomi-a026', 'nomi-a027', 'nomi-a028', 'nomi-a029', 'nomi-a030',
  'nomi-a031', 'nomi-a032', 'nomi-a033', 'nomi-a034', 'nomi-a035', 'nomi-a036',
  // Type C verhuur vouchers
  'nomi-c001', 'nomi-c002', 'nomi-c003',
  // Type D verhuur vouchers
  'nomi-d003', 'nomi-d004', 'nomi-d005', 'nomi-d006', 'nomi-d007'
]);

// Exacte koppeling uit NOMI_Configurator_Bouwnummer_en_Verhuur_Mapping.xlsx (32 koopwoningen)
const VOUCHER_NAAR_BOUWNUMMER: Record<string, string> = {
  'nomi-a002': 'BNR 7',
  'nomi-a004': 'BNR 9',
  'nomi-a008': 'BNR 13',
  'nomi-a009': 'BNR 14',
  'nomi-e001': 'BNR 15',
  'nomi-e002': 'BNR 16',
  'nomi-a010': 'BNR 17',
  'nomi-a011': 'BNR 18',
  'nomi-a012': 'BNR 19',
  'nomi-a014': 'BNR 21',
  'nomi-a015': 'BNR 22',
  'nomi-a016': 'BNR 23',
  'nomi-a017': 'BNR 24',
  'nomi-a018': 'BNR 25',
  'nomi-e003': 'BNR 47',
  'nomi-e004': 'BNR 48',
  'nomi-c004': 'BNR 69',
  'nomi-a037': 'BNR 70',
  'nomi-a038': 'BNR 71',
  'nomi-a039': 'BNR 72',
  'nomi-a040': 'BNR 73',
  'nomi-a041': 'BNR 74',
  'nomi-a042': 'BNR 75',
  'nomi-a043': 'BNR 76',
  'nomi-a044': 'BNR 77',
  'nomi-a045': 'BNR 78',
  'nomi-e005': 'BNR 79',
  'nomi-f001': 'BNR 80',
  'nomi-d001': 'BNR 81',
  'nomi-d002': 'BNR 82',
  'nomi-d008': 'BNR 88',
  'nomi-c005': 'BNR 89',
};

interface LoggedInUser {
  firstName: string;
  email: string;
}

export default function DashboardPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState<'admin' | 'makelaar'>('admin');
  const [loggedInUser, setLoggedInUser] = useState<LoggedInUser>({
    firstName: '',
    email: '',
  });
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [loading, setLoading] = useState(false);

  const [vouchers, setVouchers] = useState<any[]>([]);
  const [fetchingData, setFetchingData] = useState(false);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [updatingCode, setUpdatingCode] = useState<string | null>(null);

  // Standaard sorteren op bouwnummer (BNR 7 -> BNR 89)
  const [sortField, setSortField] = useState<string>('bouwnummer');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  useEffect(() => {
    const savedAuth = sessionStorage.getItem('nomi_dashboard_auth');
    const savedRole = sessionStorage.getItem('nomi_dashboard_role');
    const savedUser = sessionStorage.getItem('nomi_dashboard_user');

    if (savedUser) {
      try {
        const parsed = JSON.parse(savedUser);
        setLoggedInUser({
          firstName: parsed.firstName || '',
          email: parsed.email || '',
        });
      } catch {
        // negeer ongeldige JSON
      }
    }

    if (savedAuth === 'true') {
      setIsLoggedIn(true);
      setUserRole(savedRole === 'makelaar' ? 'makelaar' : 'admin');
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
        const wpUserObj = data.user || data.data || {};
        const resolvedFirstName =
          data.firstName ||
          data.voornaam ||
          data.first_name ||
          wpUserObj.firstName ||
          wpUserObj.voornaam ||
          wpUserObj.first_name ||
          wpUserObj.name ||
          username.trim();

        const resolvedEmail =
          data.email ||
          data.userEmail ||
          data.user_email ||
          wpUserObj.email ||
          wpUserObj.userEmail ||
          wpUserObj.user_email ||
          (username.includes('@') ? username.trim() : '');

        const cleanUser = username.trim().toLowerCase();
        const isMakelaar =
          data.role === 'makelaar' ||
          cleanUser.includes('makelaar') ||
          cleanUser.includes('dekeizer') ||
          cleanUser.includes('woudenberg') ||
          cleanUser.includes('mark') ||
          String(resolvedEmail).toLowerCase().includes('dekeizer.nl');

        const resolvedRole: 'admin' | 'makelaar' = isMakelaar ? 'makelaar' : 'admin';

        const userInfo = {
          firstName: String(resolvedFirstName || '').trim(),
          email: String(resolvedEmail || '').trim(),
        };

        setLoggedInUser(userInfo);
        setIsLoggedIn(true);
        setUserRole(resolvedRole);
        sessionStorage.setItem('nomi_dashboard_auth', 'true');
        sessionStorage.setItem('nomi_dashboard_role', resolvedRole);
        sessionStorage.setItem('nomi_dashboard_user', JSON.stringify(userInfo));
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

  const getBouwnummer = (v: any): string => {
    const details = v?.voucherVelden || {};
    const codeKey = String(details.toegangscode || v?.title || '').trim().toLowerCase();
    const mappedBnr = VOUCHER_NAAR_BOUWNUMMER[codeKey];
    if (mappedBnr) return mappedBnr;

    const cmsWaarde =
      details.bouwnummer ||
      details.bouwNummer ||
      details.bouw_nummer ||
      v?.bouwnummer ||
      '';
    return String(cmsWaarde).trim();
  };

  const isVoucherUitgegeven = (v: any): boolean => {
    return Boolean(v?.voucherVelden?.uitgegeven);
  };

  const fetchVouchers = async () => {
    setFetchingData(true);
    try {
      const res = await fetch('/api/vouchers');
      const data = await res.json();

      if (res.ok && data.vouchers) {
        const koopVouchersOnly = data.vouchers.filter((v: any) => {
          const code = String(v.voucherVelden?.toegangscode || v.title || '').trim().toLowerCase();
          return !VERHUUR_VOUCHERS.has(code);
        });
        setVouchers(koopVouchersOnly);
      } else {
        console.error('Kon vouchers niet laden:', data.error);
      }
    } catch (err) {
      console.error('Fout bij ophalen vouchers voor dashboard:', err);
    } finally {
      setFetchingData(false);
    }
  };

  const handleToggleUitgegeven = async (voucher: any, rawCode: string, currentValue: boolean) => {
    if (!rawCode) return;
    const nextValue = !currentValue;

    setVouchers((prev) =>
      prev.map((item) => {
        const itemCode = String(item.voucherVelden?.toegangscode || item.title || '').trim();
        if (item.databaseId === voucher.databaseId || itemCode === rawCode) {
          return {
            ...item,
            voucherVelden: {
              ...(item.voucherVelden || {}),
              uitgegeven: nextValue,
            },
          };
        }
        return item;
      })
    );

    setUpdatingCode(rawCode);
    try {
      const res = await fetch('/api/vouchers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          databaseId: voucher.databaseId,
          toegangscode: rawCode,
          uitgegeven: nextValue,
        }),
      });

      if (!res.ok) {
        throw new Error('Opslaan in WordPress mislukt');
      }
    } catch (err) {
      console.error('Kon uitgegeven status niet opslaan in WordPress:', err);
      setVouchers((prev) =>
        prev.map((item) => {
          const itemCode = String(item.voucherVelden?.toegangscode || item.title || '').trim();
          if (item.databaseId === voucher.databaseId || itemCode === rawCode) {
            return {
              ...item,
              voucherVelden: {
                ...(item.voucherVelden || {}),
                uitgegeven: currentValue,
              },
            };
          }
          return item;
        })
      );
      alert('Het opslaan van de status in WordPress is mislukt. Probeer het opnieuw.');
    } finally {
      setUpdatingCode(null);
    }
  };

  const handleShareVoucher = async (rawCode: string, bouwnummer: string) => {
    if (!rawCode) return;
    const origin = typeof window !== 'undefined' ? window.location.origin : 'https://www.nomi-configurator.nl';
    const shareText = [
      `Jouw persoonlijke vouchercode voor de NOMI interieurconfigurator:`,
      bouwnummer ? `Bouwnummer: ${bouwnummer}` : null,
      `Vouchercode: ${rawCode}`,
      `Start hier: ${origin}`,
    ]
      .filter(Boolean)
      .join('\n');

    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(shareText);
      } else {
        const tempInput = document.createElement('textarea');
        tempInput.value = shareText;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
      }
      setCopiedCode(rawCode);
      setTimeout(() => {
        setCopiedCode((prev) => (prev === rawCode ? null : prev));
      }, 2500);
    } catch (err) {
      console.error('Kon vouchercode niet kopiëren:', err);
    }
  };

  // --- SORTEER FUNCTIE ---
  const handleSort = (field: string) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const getSortedVouchers = () => {
    return [...vouchers].sort((a, b) => {
      const detailsA = a.voucherVelden || {};
      const detailsB = b.voucherVelden || {};
      const statusA = String(detailsA.status || '');
      const statusB = String(detailsB.status || '');
      const isVerzilverdA = statusA === 'bevestigd' || statusA.toLowerCase().includes('bevestigd') || statusA.toLowerCase().includes('verzilverd');
      const isVerzilverdB = statusB === 'bevestigd' || statusB.toLowerCase().includes('bevestigd') || statusB.toLowerCase().includes('verzilverd');
      const codeA = String(detailsA.toegangscode || a.title || '').trim();
      const codeB = String(detailsB.toegangscode || b.title || '').trim();

      let valA = '';
      let valB = '';

      switch (sortField) {
        case 'bouwnummer':
          valA = getBouwnummer(a);
          valB = getBouwnummer(b);
          break;
        case 'woningType':
          valA = isVerzilverdA ? (detailsA.gekozenTypeWoning || detailsA.gekozen_type_woning || '') : '';
          valB = isVerzilverdB ? (detailsB.gekozenTypeWoning || detailsB.gekozen_type_woning || '') : '';
          break;
        case 'indeling':
          valA = isVerzilverdA ? (detailsA.gekozenIndeling || detailsA.gekozen_indeling || detailsA.indeling || '') : '';
          valB = isVerzilverdB ? (detailsB.gekozenIndeling || detailsB.gekozen_indeling || detailsB.indeling || '') : '';
          break;
        case 'klantNaam':
          valA = isVerzilverdA ? (detailsA.klantNaam || detailsA.klant_naam || '') : '';
          valB = isVerzilverdB ? (detailsB.klantNaam || detailsB.klant_naam || '') : '';
          break;
        case 'klantEmail':
          valA = isVerzilverdA ? (detailsA.klantEMail || detailsA.klant_email || '') : '';
          valB = isVerzilverdB ? (detailsB.klantEMail || detailsB.klant_email || '') : '';
          break;
        case 'designPakket':
          valA = isVerzilverdA ? (detailsA.gekozenDesignpakket || detailsA.gekozen_designpakket || '') : '';
          valB = isVerzilverdB ? (detailsB.gekozenDesignpakket || detailsB.gekozen_designpakket || '') : '';
          break;
        case 'status':
          valA = isVerzilverdA ? 'Verzilverd' : 'Niet verzilverd';
          valB = isVerzilverdB ? 'Verzilverd' : 'Niet verzilverd';
          break;
        case 'uitgegeven':
          valA = isVoucherUitgegeven(a) ? '1' : '0';
          valB = isVoucherUitgegeven(b) ? '1' : '0';
          break;
        case 'vouchercode':
        default:
          valA = codeA;
          valB = codeB;
          break;
      }

      const res = valA.localeCompare(valB, undefined, { numeric: true, sensitivity: 'base' });
      return sortDirection === 'asc' ? res : -res;
    });
  };

  // --- CSV EXPORTEREN FUNCTIE ---
  const handleExportCsv = () => {
    if (vouchers.length === 0) {
      alert('Geen data beschikbaar om te exporteren.');
      return;
    }

    const headers = ['Bouwnummer', 'Type woning', 'Indeling', 'Klantnaam', 'Klant e-mail', 'Designpakket', 'Status', 'Uitgegeven', 'Vouchercode'];
    
    const rows = getSortedVouchers().map(v => {
      const details = v.voucherVelden || {};
      const statusVal = String(details.status || '');
      const isVerzilverd = statusVal === 'bevestigd' || statusVal.toLowerCase().includes('bevestigd') || statusVal.toLowerCase().includes('verzilverd');
      const rawCode = String(details.toegangscode || v.title || '').trim();

      const bouwnummer = `"${getBouwnummer(v) || '—'}"`;
      const woningType = `"${isVerzilverd ? (details.gekozenTypeWoning || details.gekozen_type_woning || '—') : '—'}"`;
      const indeling = `"${isVerzilverd ? (details.gekozenIndeling || details.gekozen_indeling || details.indeling || '—') : '—'}"`;
      const klantNaam = `"${isVerzilverd ? (details.klantNaam || details.klant_naam || '—') : '—'}"`;
      const klantEmail = `"${isVerzilverd ? (details.klantEMail || details.klant_email || '—') : '—'}"`;
      const designPakket = `"${isVerzilverd ? (details.gekozenDesignpakket || details.gekozen_designpakket || '—') : '—'}"`;
      const status = `"${isVerzilverd ? 'Verzilverd' : 'Niet verzilverd'}"`;
      const uitgegeven = `"${isVoucherUitgegeven(v) ? 'Ja' : 'Nee'}"`;
      const code = `"${rawCode}"`;

      return [bouwnummer, woningType, indeling, klantNaam, klantEmail, designPakket, status, uitgegeven, code].join(';');
    });

    const csvContent = '\uFEFF' + [headers.join(';'), ...rows].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `nomi-koopwoningen-dashboard-${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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

  const sortedVouchers = getSortedVouchers();

  return (
    <div className="min-h-screen bg-dark flex flex-col justify-between text-dark">
      <Header currentScreen="configurator" />

      <main className="grow bg-[#F9F6F0]">
        {!isLoggedIn ? (
          <div className="flex items-center justify-center py-24 px-6">
            <div className="bg-white p-8 rounded-2xl w-full max-w-md shadow-lg border border-[#E5E2DD]">
              <h2 className="font-serif text-2xl text-dark mb-2">Dashboard Inloggen</h2>
              <p className="text-[#666] text-sm mb-6">Log in met je WordPress gebruikersnaam en wachtwoord.</p>

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
                  <label className="block text-xs font-bold uppercase text-[#888] mb-2">Wachtwoord</label>
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
          <div className="max-w-7xl mx-auto px-6 sm:px-12 py-12">
            
            <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8">
              <div>
                <span className="text-[10px] font-bold tracking-[0.2em] text-[#C5A880] uppercase block mb-2">
                  {userRole === 'makelaar' ? 'DE KEIZER MAKELAARSGROEP • OVERZICHT' : 'INTERN • OVERZICHT (KOOPWONINGEN)'}
                </span>
                <h1 className="text-4xl md:text-5xl font-serif text-dark mb-3">
                  Cheque-dashboard
                </h1>
                <p className="text-[#666] text-base">
                  {userRole === 'makelaar'
                    ? 'Overzicht van bouwnummers, vouchercodes om te delen met kopers en uitgiftestatus.'
                    : 'Live overzicht van alle actieve koopwoningen en hun configuratiestatus.'}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full md:w-auto">
                {/* Blok ingelogde WordPress gebruiker */}
                <div className="bg-white px-4 py-3 rounded-2xl border border-[#E5E2DD] shadow-sm flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#F3EFE8] text-dark font-serif font-bold text-sm flex items-center justify-center shrink-0">
                    {(loggedInUser.firstName || loggedInUser.email || 'W').charAt(0).toUpperCase()}
                  </div>
                  <div className="text-left min-w-0">
                    <div className="text-xs font-bold text-dark truncate">
                      {loggedInUser.firstName || '—'}
                    </div>
                    <div className="text-[11px] text-[#666] truncate">
                      {loggedInUser.email || '—'}
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => {
                    sessionStorage.removeItem('nomi_dashboard_auth');
                    sessionStorage.removeItem('nomi_dashboard_role');
                    sessionStorage.removeItem('nomi_dashboard_user');
                    setLoggedInUser({ firstName: '', email: '' });
                    setIsLoggedIn(false);
                  }}
                  className="bg-transparent border border-dark/20 text-dark px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-dark hover:text-white transition cursor-pointer self-start sm:self-center"
                >
                  Uitloggen
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="bg-white p-6 rounded-2xl border border-[#E5E2DD] shadow-sm">
                <div className="font-serif text-4xl text-dark mb-1">{totaalWoningen}</div>
                <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#888]">Totaal koopwoningen</div>
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

            <div className="bg-white rounded-2xl border border-[#E5E2DD] shadow-sm overflow-hidden">
              <div className="p-6 border-b border-[#E5E2DD] flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                <div>
                  <h3 className="m-0 text-lg font-serif text-dark">Koopwoningen overzicht</h3>
                  <p className="text-xs text-[#666] mt-1 mb-0">
                    Klik op <strong className="text-dark">Deel code</strong> om een kant-en-klare tekst met bouwnummer, vouchercode en link te kopiëren voor de koper.
                  </p>
                </div>
                <button 
                  onClick={handleExportCsv}
                  className="bg-transparent border-none text-dark text-xs font-bold cursor-pointer uppercase tracking-wider hover:text-[#C5A880] transition self-start sm:self-auto"
                >
                  Exporteer ↓
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-left text-sm">
                  <thead>
                    <tr className="border-b border-[#E5E2DD] text-[#888] text-[10px] uppercase tracking-wider">
                      <th onClick={() => handleSort('bouwnummer')} className="py-4 px-6 cursor-pointer hover:text-dark select-none">
                        Bouwnummer {sortField === 'bouwnummer' ? (sortDirection === 'asc' ? '↑' : '↓') : ''}
                      </th>
                      <th onClick={() => handleSort('woningType')} className="py-4 px-6 cursor-pointer hover:text-dark select-none">
                        Type woning {sortField === 'woningType' ? (sortDirection === 'asc' ? '↑' : '↓') : ''}
                      </th>
                      <th onClick={() => handleSort('indeling')} className="py-4 px-6 cursor-pointer hover:text-dark select-none">
                        Indeling {sortField === 'indeling' ? (sortDirection === 'asc' ? '↑' : '↓') : ''}
                      </th>
                      <th onClick={() => handleSort('klantNaam')} className="py-4 px-6 cursor-pointer hover:text-dark select-none">
                        Klant naam {sortField === 'klantNaam' ? (sortDirection === 'asc' ? '↑' : '↓') : ''}
                      </th>
                      <th onClick={() => handleSort('klantEmail')} className="py-4 px-6 cursor-pointer hover:text-dark select-none">
                        Klant e-mail {sortField === 'klantEmail' ? (sortDirection === 'asc' ? '↑' : '↓') : ''}
                      </th>
                      <th onClick={() => handleSort('designPakket')} className="py-4 px-6 cursor-pointer hover:text-dark select-none">
                        Designpakket {sortField === 'designPakket' ? (sortDirection === 'asc' ? '↑' : '↓') : ''}
                      </th>
                      <th onClick={() => handleSort('status')} className="py-4 px-6 cursor-pointer hover:text-dark select-none">
                        Status {sortField === 'status' ? (sortDirection === 'asc' ? '↑' : '↓') : ''}
                      </th>
                      <th onClick={() => handleSort('vouchercode')} className="py-4 px-6 cursor-pointer hover:text-dark select-none">
                        Vouchercode {sortField === 'vouchercode' ? (sortDirection === 'asc' ? '↑' : '↓') : ''}
                      </th>
                      <th onClick={() => handleSort('uitgegeven')} className="py-4 px-6 cursor-pointer hover:text-dark select-none">
                        Uitgegeven {sortField === 'uitgegeven' ? (sortDirection === 'asc' ? '↑' : '↓') : ''}
                      </th>
                      <th className="py-4 px-6 select-none" title="Kopieert een bericht met bouwnummer, vouchercode en link naar het klembord">
                        Delen
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {fetchingData ? (
                      <tr>
                        <td colSpan={10} className="py-8 text-center text-[#888]">Gegevens ophalen...</td>
                      </tr>
                    ) : sortedVouchers.length === 0 ? (
                      <tr>
                        <td colSpan={10} className="py-8 text-center text-[#888]">Geen koopwoningen gevonden.</td>
                      </tr>
                    ) : (
                      sortedVouchers.map((v, index) => {
                        const details = v.voucherVelden || {};
                        const statusVal = String(details.status || '');
                        const isVerzilverd = 
                          statusVal === 'bevestigd' || 
                          statusVal.toLowerCase().includes('bevestigd') || 
                          statusVal.toLowerCase().includes('verzilverd');

                        const bouwnummerLabel = getBouwnummer(v) || '—';
                        const woningTypeLabel = isVerzilverd ? (details.gekozenTypeWoning || details.gekozen_type_woning || '—') : '—';
                        const indelingLabel = isVerzilverd ? (details.gekozenIndeling || details.gekozen_indeling || details.indeling || '—') : '—';
                        const klantNaam = isVerzilverd ? (details.klantNaam || details.klant_naam || '—') : '—';
                        const klantEmail = isVerzilverd ? (details.klantEMail || details.klant_email || '—') : '—';
                        const designPakket = isVerzilverd ? (details.gekozenDesignpakket || details.gekozen_designpakket || '—') : '—';
                        const rawCode = String(details.toegangscode || v.title || '').trim();
                        const vouchercode = rawCode || '—';
                        const isUitgegeven = isVoucherUitgegeven(v);
                        const isCopied = copiedCode === rawCode;

                        return (
                          <tr key={v.databaseId || index} className="border-b border-[#EFECE6] hover:bg-[#FAF9F6] transition">
                            <td className="py-4 px-6 font-semibold text-dark whitespace-nowrap">{bouwnummerLabel}</td>
                            <td className="py-4 px-6 font-bold text-dark">{woningTypeLabel}</td>
                            <td className="py-4 px-6 text-[#555]">{indelingLabel}</td>
                            <td className="py-4 px-6 text-[#555]">{klantNaam}</td>
                            <td className="py-4 px-6 text-[#555]">{klantEmail}</td>
                            <td className="py-4 px-6 text-[#555]">{designPakket}</td>
                            <td className="py-4 px-6">
                              {isVerzilverd ? (
                                <span className="inline-flex items-center bg-[#EAF4ED] text-[#2E7D4E] py-1 px-3 rounded-full text-xs font-bold whitespace-nowrap">
                                  <span className="w-1.5 h-1.5 bg-[#2E7D4E] rounded-full inline-block mr-1.5"></span>
                                  Verzilverd
                                </span>
                              ) : (
                                <span className="inline-flex items-center bg-[#FDF2F2] text-[#A63A3A] py-1 px-3 rounded-full text-xs font-bold whitespace-nowrap">
                                  <span className="w-1.5 h-1.5 bg-[#A63A3A] rounded-full inline-block mr-1.5"></span>
                                  Niet verzilverd
                                </span>
                              )}
                            </td>
                            <td className="py-4 px-6 font-mono text-xs text-dark whitespace-nowrap">
                              {rawCode ? (
                                <a
                                  href={`/voucher?code=${encodeURIComponent(rawCode)}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="underline decoration-[#C5A880] underline-offset-4 hover:text-[#9E835E] transition inline-flex items-center gap-1"
                                  title={`Open ${rawCode} in een nieuw tabblad`}
                                >
                                  {vouchercode} ↗
                                </a>
                              ) : (
                                vouchercode
                              )}
                            </td>
                            <td className="py-4 px-6 whitespace-nowrap">
                              <label className="inline-flex items-center gap-2 cursor-pointer select-none">
                                <input
                                  type="checkbox"
                                  checked={isUitgegeven}
                                  disabled={!rawCode || updatingCode === rawCode}
                                  onChange={() => handleToggleUitgegeven(v, rawCode, isUitgegeven)}
                                  className="w-4 h-4 rounded accent-[#2E7D4E] cursor-pointer"
                                />
                                <span className={`text-xs font-semibold ${isUitgegeven ? 'text-[#2E7D4E]' : 'text-[#777]'}`}>
                                  {isUitgegeven ? 'Uitgegeven' : 'Niet uitgegeven'}
                                </span>
                              </label>
                            </td>
                            <td className="py-4 px-6 whitespace-nowrap">
                              {rawCode ? (
                                <div className="flex flex-col items-start gap-1">
                                  <button
                                    type="button"
                                    onClick={() => handleShareVoucher(rawCode, bouwnummerLabel === '—' ? '' : bouwnummerLabel)}
                                    title="Kopieer deeltektst met bouwnummer, vouchercode en link"
                                    className="px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#F3EFE8] hover:bg-dark hover:text-white text-dark transition cursor-pointer"
                                  >
                                    {isCopied ? 'Gekopieerd ✓' : 'Deel code'}
                                  </button>
                                  <span className="text-[10px] text-[#888] leading-tight">
                                    Kopieert code & link
                                  </span>
                                </div>
                              ) : (
                                <span className="text-[#999]">—</span>
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