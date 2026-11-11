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
    const basicAuth = 'Basic ' + Buffer.from(`${username.trim()}:${password.trim()}`).toString('base64');

    // 1. Probeer authenticatie via WordPress REST API met Application Passwords
    const authRes = await fetch(`${wpBaseUrl}/wp-json/wp/v2/users/me?context=edit`, {
      method: 'GET',
      headers: {
        'Authorization': basicAuth,
        'Content-Type': 'application/json'
      },
      cache: 'no-store'
    });

    if (authRes.ok) {
      const userData = await authRes.json();
      const roles: string[] = userData.roles || ['contributor'];

      return NextResponse.json({ 
        success: true, 
        user: { 
          name: userData.name || username, 
          email: userData.email || '',
          roles: roles
        } 
      });
    }

    // 2. Fallback: Als REST API faalt, verifieer via WordPress GraphQL viewer query
    const graphqlQuery = `
      query TestAuthViewer {
        viewer {
          username
          email
          roles {
            nodes {
              name
            }
          }
        }
      }
    `;

    const gqlRes = await fetch(wpEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': basicAuth,
      },
      body: JSON.stringify({ query: graphqlQuery }),
      cache: 'no-store',
    });

    const gqlJson = await gqlRes.json();

    if (gqlRes.ok && gqlJson?.data?.viewer) {
      const viewer = gqlJson.data.viewer;
      return NextResponse.json({ 
        success: true, 
        user: { 
          name: viewer.username || username, 
          email: viewer.email || '',
          roles: ['contributor']
        } 
      });
    }

    // Als beide falen is de inlog onjuist
    return NextResponse.json({ error: 'Ongeldige gebruikersnaam of application password.' }, { status: 401 });

  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json({ error: 'Er is een fout opgetreden bij het inloggen.' }, { status: 500 });
  }
}