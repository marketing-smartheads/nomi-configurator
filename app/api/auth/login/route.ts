import { NextResponse } from 'next/server';

const BEKENDE_GEBRUIKERS: Record<string, { firstName: string; email: string; role?: 'admin' | 'makelaar' }> = {
  'mark nc': {
    firstName: 'Mark',
    email: 'mark.vanwoudenberg@dekeizer.nl',
    role: 'makelaar',
  },
  'mark': {
    firstName: 'Mark',
    email: 'mark.vanwoudenberg@dekeizer.nl',
    role: 'makelaar',
  },
  'mark.vanwoudenberg@dekeizer.nl': {
    firstName: 'Mark',
    email: 'mark.vanwoudenberg@dekeizer.nl',
    role: 'makelaar',
  },
  'thomas nc': {
    firstName: 'Thomas',
    email: 'thomas@thomasdegier.com',
    role: 'admin',
  },
  'thomas': {
    firstName: 'Thomas',
    email: 'thomas@thomasdegier.com',
    role: 'admin',
  },
  'thomas@thomasdegier.com': {
    firstName: 'Thomas',
    email: 'thomas@thomasdegier.com',
    role: 'admin',
  },
};

function extractCookieHeader(setCookieHeader: string): string {
  if (!setCookieHeader) return '';
  // Splits meerdere Set-Cookie headers en haal per cookie alleen "naam=waarde" op
  return setCookieHeader
    .split(/,(?=\s*[a-zA-Z0-9_-]+=)/)
    .map((cookie) => cookie.split(';')[0].trim())
    .filter(Boolean)
    .join('; ');
}

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();

    if (!username || !password) {
      return NextResponse.json(
        { error: 'Vul zowel je gebruikersnaam als wachtwoord in.' },
        { status: 400 }
      );
    }

    const endpoint = process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT || 'https://cms.nomi-configurator.nl/graphql';
    const wpBaseUrl = endpoint.replace('/graphql', '');

    const formData = new URLSearchParams();
    formData.append('log', username);
    formData.append('pwd', password);
    formData.append('wp-submit', 'Log In');
    formData.append('redirect_to', `${wpBaseUrl}/wp-admin/`);
    formData.append('testcookie', '1');

    const loginRes = await fetch(`${wpBaseUrl}/wp-login.php`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData.toString(),
      redirect: 'manual',
    });

    const rawSetCookie = loginRes.headers.get('set-cookie') || '';
    const isSuccess = loginRes.status === 302 || rawSetCookie.includes('wordpress_logged_in');

    if (!isSuccess) {
      return NextResponse.json(
        { error: 'Ongeldige gebruikersnaam of wachtwoord.' },
        { status: 401 }
      );
    }

    const cleanLookup = String(username).trim().toLowerCase();
    const knownUser = BEKENDE_GEBRUIKERS[cleanLookup];

    let firstName = knownUser?.firstName || '';
    let email = knownUser?.email || (String(username).includes('@') ? String(username).trim() : '');

    const cookieHeader = extractCookieHeader(rawSetCookie);

    // 1. Probeer voornaam en e-mail op te halen via WP REST API met de zojuist ontvangen login-cookies
    if (cookieHeader && (!firstName || !email)) {
      try {
        const meRes = await fetch(`${wpBaseUrl}/wp-json/wp/v2/users/me?context=edit`, {
          method: 'GET',
          headers: {
            Cookie: cookieHeader,
          },
          cache: 'no-store',
        });

        if (meRes.ok) {
          const meData = await meRes.json();
          const rawFirst = String(meData.first_name || '').trim();
          const rawDisplay = String(meData.name || '').trim();
          firstName = firstName || rawFirst || rawDisplay.split(' ')[0] || '';
          email = email || String(meData.email || '').trim();
        }
      } catch {
        // Negeer en probeer GraphQL hieronder
      }
    }

    // 2. Fallback via WPGraphQL viewer query met de login-cookies
    if (cookieHeader && (!firstName || !email)) {
      try {
        const gqlRes = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Cookie: cookieHeader,
          },
          body: JSON.stringify({
            query: `
              query GetViewerDetails {
                viewer {
                  firstName
                  name
                  email
                }
              }
            `,
          }),
          cache: 'no-store',
        });

        if (gqlRes.ok) {
          const gqlJson = await gqlRes.json();
          const viewer = gqlJson?.data?.viewer;
          if (viewer) {
            const rawFirst = String(viewer.firstName || '').trim();
            const rawDisplay = String(viewer.name || '').trim();
            firstName = firstName || rawFirst || rawDisplay.split(' ')[0] || '';
            email = email || String(viewer.email || '').trim();
          }
        }
      } catch {
        // Negeer fout
      }
    }

    // Laatste fallback op voornaam als WordPress alleen display_name/username teruggeeft
    if (!firstName) {
      firstName = String(username).trim().split(/[\s@]/)[0];
    }

    const isMakelaar =
      knownUser?.role === 'makelaar' ||
      cleanLookup.includes('makelaar') ||
      cleanLookup.includes('dekeizer') ||
      cleanLookup.includes('woudenberg') ||
      cleanLookup.includes('mark') ||
      email.toLowerCase().includes('dekeizer.nl');

    return NextResponse.json({
      success: true,
      role: isMakelaar ? 'makelaar' : 'admin',
      firstName,
      email,
      user: {
        name: username,
        firstName,
        email,
      },
    });
  } catch (err) {
    console.error('Login error:', err);
    return NextResponse.json(
      { error: 'Er is een technische fout opgetreden bij het inloggen.' },
      { status: 500 }
    );
  }
}