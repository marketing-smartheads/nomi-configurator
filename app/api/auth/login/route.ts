import { NextResponse } from 'next/server';

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
    
    // Probeer in te loggen door te testen of de credentials werken via WordPress Basic Auth
    const basicAuth = 'Basic ' + Buffer.from(`${username}:${password}`).toString('base64');
    
    const query = `
      query TestLogin {
        viewer {
          id
          name
          email
        }
      }
    `;

    const res = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': basicAuth,
      },
      body: JSON.stringify({ query }),
      cache: 'no-store',
    });

    const json = await res.json();

    if (json.errors || !json?.data?.viewer) {
      return NextResponse.json(
        { error: 'Ongeldige gebruikersnaam of wachtwoord.' },
        { status: 401 }
      );
    }

    return NextResponse.json({
      success: true,
      user: json.data.viewer,
    });
  } catch (err) {
    console.error('Login error:', err);
    return NextResponse.json(
      { error: 'Er is een technische fout opgetreden bij het inloggen.' },
      { status: 500 }
    );
  }
}