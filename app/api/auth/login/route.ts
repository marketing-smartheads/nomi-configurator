import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();

    if (!username || !password) {
      return NextResponse.json({ error: 'Vul zowel gebruikersnaam als wachtwoord in.' }, { status: 400 });
    }

    const wpEndpoint = process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT || 'https://cms.nomi-configurator.nl/graphql';
    const wpBaseUrl = wpEndpoint.replace(/\/(graphql|wp-json)\/?$/, '');

    // Mogelijke varianten van de gebruikersnaam proberen (om spaties/hoofdletters in WP op te vangen)
    const rawUser = username.trim();
    const usernamesToTry = [
      rawUser,                               // "Thomas NC"
      rawUser.toLowerCase(),                 // "thomas nc"
      rawUser.toLowerCase().replace(/\s+/g, '-'), // "thomas-nc"
      rawUser.toLowerCase().replace(/\s+/g, '')   // "thomasnc"
    ];

    let authSuccess = false;
    let userData: any = null;

    for (const u of usernamesToTry) {
      const basicAuth = 'Basic ' + Buffer.from(`${u}:${password.trim()}`).toString('base64');
      
      const authRes = await fetch(`${wpBaseUrl}/wp-json/wp/v2/users/me?context=edit`, {
        method: 'GET',
        headers: {
          'Authorization': basicAuth,
          'Content-Type': 'application/json'
        },
        cache: 'no-store'
      });

      if (authRes.ok) {
        authSuccess = true;
        userData = await authRes.json();
        break;
      }
    }

    if (!authSuccess) {
      return NextResponse.json({ error: 'Ongeldige gebruikersnaam of application password.' }, { status: 401 });
    }

    const roles: string[] = userData.roles || ['contributor'];

    return NextResponse.json({ 
      success: true, 
      user: { 
        name: userData.name || rawUser, 
        email: userData.email || '',
        roles: roles
      } 
    });

  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json({ error: 'Er is een fout opgetreden bij het inloggen.' }, { status: 500 });
  }
}