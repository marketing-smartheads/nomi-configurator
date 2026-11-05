import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { toegangscode, klantEmail } = body;

    if (!toegangscode || !klantEmail) {
      return NextResponse.json(
        { error: 'Vul zowel een vouchercode als een e-mailadres in.' },
        { status: 400 }
      );
    }

    const endpoint = process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT || '';
    const wpUser = process.env.WORDPRESS_AUTH_USER;
    const wpPass = process.env.WORDPRESS_AUTH_PASSWORD;
    const basicAuth = wpUser && wpPass ? 'Basic ' + Buffer.from(`${wpUser}:${wpPass}`).toString('base64') : '';

    const query = `
      query GetVoucher($code: String!) {
        vouchers(where: { search: $code }) {
          nodes {
            databaseId
            title
            voucherVelden {
              toegangscode
              status
              klantEmail
              klantNaam
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
      body: JSON.stringify({ query, variables: { code: toegangscode.trim() } }),
      cache: 'no-store',
    });

    const json = await res.json();
    const vouchers = json?.data?.vouchers?.nodes || [];

    const voucher = vouchers.find((v: any) => 
      (v?.voucherVelden?.toegangscode || '').trim().toLowerCase() === toegangscode.trim().toLowerCase()
    );

    if (!voucher) {
      return NextResponse.json(
        { error: 'Ongeldige vouchercode. Controleer uw invoer.' },
        { status: 404 }
      );
    }

    const velden = voucher.voucherVelden || {};
    const opgeslagenEmail = (velden.klantEmail || '').trim().toLowerCase();
    const ingevoerdeEmail = klantEmail.trim().toLowerCase();

    // 🛑 STRENGE E-MAIL CHECK
    if (opgeslagenEmail && opgeslagenEmail !== '-' && opgeslagenEmail !== '') {
      if (opgeslagenEmail !== ingevoerdeEmail) {
        return NextResponse.json(
          { error: 'Dit e-mailadres komt niet overeen met het e-mailadres dat aan deze vouchercode is gekoppeld.' },
          { status: 401 }
        );
      }
    } else {
      // Eerste keer inloggen: koppel het ingevoerde e-mailadres aan de voucher in WordPress
      const updateMutation = `
        mutation UpdateVoucherEmail($id: ID!, $email: String!) {
          updateVoucher(input: { id: $id, voucherVelden: { klantEmail: $email } }) {
            voucher {
              databaseId
            }
          }
        }
      `;
      
      await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(basicAuth ? { 'Authorization': basicAuth } : {}),
        },
        body: JSON.stringify({ 
          query: updateMutation, 
          variables: { id: voucher.databaseId, email: ingevoerdeEmail } 
        }),
        cache: 'no-store',
      }).catch(err => console.warn('Kon e-mailadres niet updaten in WP:', err));
    }

    return NextResponse.json({ success: true, message: 'Toegang verleend' });

  } catch (error: any) {
    console.error('Auth API fout:', error);
    return NextResponse.json(
      { error: 'Er is een fout opgetreden bij de verificatie.' },
      { status: 500 }
    );
  }
}