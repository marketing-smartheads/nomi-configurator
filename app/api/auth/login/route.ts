import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();

    if (!username || !password) {
      return NextResponse.json({ error: 'Vul zowel gebruikersnaam als wachtwoord in.' }, { status: 400 });
    }

    const wpEndpoint = process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT || process.env.NEXT_PUBLIC_WORDPRESS_API_URL;
    if (!wpEndpoint) {
      return NextResponse.json({ error: 'WordPress endpoint niet geconfigureerd.' }, { status: 500 });
    }

    const wpBaseUrl = wpEndpoint.replace(/\/(graphql|wp-json)\/?$/, '');
    
    // Authenticeer bij WordPress via de REST API met Application Passwords
    const authRes = await fetch(`${wpBaseUrl}/wp-json/wp/v2/users/me?context=edit`, {
      method: 'GET',
      headers: {
        'Authorization': 'Basic ' + Buffer.from(`${username}:${password}`).toString('base64')
      }
    });

    if (!authRes.ok) {
      return NextResponse.json({ error: 'Ongeldige gebruikersnaam of application password.' }, { status: 401 });
    }

    const userData = await authRes.json();
    const roles: string[] = userData.roles || [];

    // Toegestane rollen voor het dashboard (Administrator en Contributor, of pas dit naar wens aan)
    const isAllowed = roles.includes('administrator') || roles.includes('contributor') || roles.includes('subscriber');

    if (!isAllowed) {
      return NextResponse.json({ 
        error: 'Dit account heeft geen rechten om het dashboard te bekijken.' 
      }, { status: 403 });
    }

    return NextResponse.json({ 
      success: true, 
      user: { 
        name: userData.name, 
        email: userData.email,
        roles: roles
      } 
    });

  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json({ error: 'Er is een fout opgetreden bij het inloggen.' }, { status: 500 });
  }
}