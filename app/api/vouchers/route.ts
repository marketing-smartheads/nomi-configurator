import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  try {
    const endpoint = process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT || 'https://cms.nomi-configurator.nl/graphql';
    
    // Omdat de inlog nu via het dashboard loopt, gebruiken we de publieke/basic endpoint of admin credentials indien ingesteld
    const wpUser = process.env.WORDPRESS_AUTH_USER;
    const wpPass = process.env.WORDPRESS_AUTH_PASSWORD;
    const basicAuth = wpUser && wpPass ? 'Basic ' + Buffer.from(`${wpUser}:${wpPass}`).toString('base64') : '';

    const query = `
      query GetAllVouchersDashboard {
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
              gekozenIndeling
            }
          }
        }
      }
    `;

    const res = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(basicAuth ? { 'Authorization': basicAuth } : {}),
      },
      body: JSON.stringify({ query }),
      cache: 'no-store',
    });

    const json = await res.json();
    const vouchers = json?.data?.vouchers?.nodes || [];

    return NextResponse.json({ success: true, vouchers });
  } catch (err) {
    console.error('Fetch vouchers API error:', err);
    return NextResponse.json({ error: 'Kon vouchers niet ophalen' }, { status: 500 });
  }
}