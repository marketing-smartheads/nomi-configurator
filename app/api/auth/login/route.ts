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
    const wpBaseUrl = endpoint.replace('/graphql', '');

    // Verifieer direct via de ingebouwde WordPress REST API / wp-login endpoint
    // Dit ondersteunt de standaard gebruikersnaam en het normale WordPress-wachtwoord feilloos.
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
      redirect: 'manual', // Voorkom automatische redirects zodat we de status kunnen controleren
    });

    // Als WordPress een redirect (302) teruggeeft naar wp-admin, is de login succesvol!
    const cookies = loginRes.headers.get('set-cookie') || '';
    const isSuccess = loginRes.status === 302 || cookies.includes('wordpress_logged_in');

    if (!isSuccess) {
      return NextResponse.json(
        { error: 'Ongeldige gebruikersnaam of wachtwoord.' },
        { status: 401 }
      );
    }

    return NextResponse.json({
      success: true,
      user: { name: username },
    });
  } catch (err) {
    console.error('Login error:', err);
    return NextResponse.json(
      { error: 'Er is een technische fout opgetreden bij het inloggen.' },
      { status: 500 }
    );
  }
}