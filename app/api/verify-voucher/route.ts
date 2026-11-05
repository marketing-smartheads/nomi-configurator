import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');
  const email = searchParams.get('email');

  if (!code) {
    return NextResponse.json({ error: 'Geen code opgegeven' }, { status: 400 });
  }

  const endpoint = process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT || '';
  const wpUser = process.env.WORDPRESS_AUTH_USER;
  const wpPass = process.env.WORDPRESS_AUTH_PASSWORD;
  const basicAuth = wpUser && wpPass ? 'Basic ' + Buffer.from(`${wpUser}:${wpPass}`).toString('base64') : '';

  const query = `
    query GetVoucherStatus($code: String!) {
      vouchers(where: { search: $code }) {
        nodes {
          databaseId
          voucherVelden {
            toegangscode
            status
            klantEmail
          }
        }
      }
    }
  `;

  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(basicAuth ? { 'Authorization': basicAuth } : {}),
      },
      body: JSON.stringify({ query, variables: { code: code.trim() } }),
      cache: 'no-store',
    });

    const json = await res.json();
    const vouchers = json?.data?.vouchers?.nodes || [];

    const voucher = vouchers.find((v: any) => 
      (v?.voucherVelden?.toegangscode || '').trim().toLowerCase() === code.trim().toLowerCase()
    );

    if (!voucher) {
      return NextResponse.json({ isGeldig: false, message: 'Voucher niet gevonden' }, { status: 404 });
    }

    const velden = voucher.voucherVelden || {};
    const opgeslagenEmail = (velden.klantEmail || '').trim().toLowerCase();
    const ingevoerdeEmail = (email || '').trim().toLowerCase();

    // Als er een e-mail meegegeven is én opgeslagen is, MOETEN ze matchen
    if (email && opgeslagenEmail && opgeslagenEmail !== '-' && opgeslagenEmail !== '') {
      if (opgeslagenEmail !== ingevoerdeEmail) {
        return NextResponse.json({ 
          isGeldig: false, 
          isBevestigd: false, 
          status: 'email_mismatch',
          error: 'E-mailadres komt niet overeen met deze vouchercode.' 
        }, { status: 401 });
      }
    }

    const isBevestigd = velden.status === 'bevestigd';

    return NextResponse.json({
      isGeldig: true,
      isBevestigd,
      status: velden.status || 'niet_ingevuld',
      klantEmail: velden.klantEmail || '',
    });
  } catch (error) {
    console.error('Voucher verificatie fout:', error);
    return NextResponse.json({ error: 'Serverfout bij verifiëren voucher' }, { status: 500 });
  }
}