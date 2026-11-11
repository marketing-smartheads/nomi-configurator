import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();

    if (!username || !password) {
      return NextResponse.json(
        { error: 'Gebruikersnaam en wachtwoord zijn verplicht.' },
        { status: 400 }
      );
    }

    const wpEndpoint = process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT || 'https://cms.nomi-configurator.nl/graphql';
    const wpBaseUrl = wpEndpoint.replace('/graphql', '');

    // Verifieer het reguliere WordPress wachtwoord via de JWT / REST API
    const authRes = await fetch(`${wpBaseUrl}/wp-json/jwt-auth/v1/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });

    const authData = await authRes.json();

    if (!authRes.ok || !authData.token) {
      // Fallback: Als JWT plugin niet actief is, controleer via Basic Auth GraphQL met normale credentials
      const basicAuth = 'Basic ' + Buffer.from(`${username}:${password}`).toString('base64');
      const testQuery = await fetch(wpEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': basicAuth,
        },
        body: JSON.stringify({
          query: `query { viewer { id name email } }`,
        }),
      });

      const testJson = await testQuery.json();
      if (!testJson?.data?.viewer) {
        return NextResponse.json(
          { error: 'Ongeldige gebruikersnaam of wachtwoord.' },
          { status: 401 }
        );
      }

      return NextResponse.json({
        success: true,
        user: testJson.data.viewer,
        authHeader: basicAuth,
      });
    }

    return NextResponse.json({
      success: true,
      token: authData.token,
      user: authData.user_display_name,
    });
  } catch (error) {
    console.error('Fout bij inloggen:', error);
    return NextResponse.json(
      { error: 'Er is een fout opgetreden bij het inloggen.' },
      { status: 500 }
    );
  }
}