import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const endpoint = process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT || '';
    const wpUser = process.env.WORDPRESS_AUTH_USER;
    const wpPass = process.env.WORDPRESS_AUTH_PASSWORD;
    const basicAuth = wpUser && wpPass ? 'Basic ' + Buffer.from(`${wpUser}:${wpPass}`).toString('base64') : '';

    const query = `
      query GetAllVouchers {
        vouchers(first: 100) {
          nodes {
            databaseId
            title
            voucherVelden {
              toegangscode
              status
              klantEMail
              klantNaam
              gekozenTypeWoning
              gekozenDesignpakket
            }
          }
        }
      }
    `;

    const res = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(basicAuth ? { 'Authorization': basicAuth } : {})
        },
        body: JSON.stringify({ query }),
        cache: 'no-store'
    });

    const json = await res.json();

    if (json.errors) {
      console.error('GraphQL Errors:', json.errors);
      return NextResponse.json({ error: json.errors[0].message }, { status: 400 });
    }

    return NextResponse.json({ vouchers: json?.data?.vouchers?.nodes || [] });
  } catch (error) {
    console.error('Fout bij ophalen vouchers:', error);
    return NextResponse.json({ error: 'Interne serverfout' }, { status: 500 });
  }
}