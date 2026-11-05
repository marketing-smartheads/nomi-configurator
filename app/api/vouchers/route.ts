import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

// 1. GET: Voor het ophalen van alle vouchers
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
              klantEmail
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
    const nodes = json?.data?.vouchers?.nodes || [];

    return NextResponse.json({ vouchers: nodes });
  } catch (error) {
    console.error('Fout bij ophalen vouchers (GET):', error);
    return NextResponse.json({ vouchers: [] }, { status: 500 });
  }
}

// 2. POST: Strenge e-mail- en vouchercodeverificatie
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
      query GetAllVouchersForAuth {
        vouchers(first: 100) {
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
      body: JSON.stringify({ query }),
      cache: 'no-store',
    });

    const json = await res.json();
    const vouchers = json?.data?.vouchers?.nodes || [];

    const ingevoerdeCodeClean = toegangscode.trim().toLowerCase();
    const ingevoerdeEmailClean = klantEmail.trim().toLowerCase();

    const voucher = vouchers.find((v: any) => {
      const codeField = (v?.voucherVelden?.toegangscode || '').trim().toLowerCase();
      const titleField = (v?.title || '').trim().toLowerCase();
      return codeField === ingevoerdeCodeClean || titleField === ingevoerdeCodeClean;
    });

    if (!voucher) {
      return NextResponse.json(
        { error: 'Ongeldige vouchercode. Controleer uw invoer.' },
        { status: 404 }
      );
    }

    const velden = voucher.voucherVelden || {};
    const opgeslagenEmail = (velden.klantEmail || '').trim().toLowerCase();

    // 🛑 STRENGE E-MAILVALIDATIE:
    // Als de voucher al een gekoppeld e-mailadres heeft, moet het exact matchen.
    if (opgeslagenEmail && opgeslagenEmail !== '-' && opgeslagenEmail !== '') {
      if (opgeslagenEmail !== ingevoerdeEmailClean) {
        return NextResponse.json(
          { error: 'Dit e-mailadres komt niet overeen met het e-mailadres dat aan deze vouchercode is gekoppeld.' },
          { status: 401 }
        );
      }
    } else {
      // Eerste keer inloggen: Sla het e-mailadres direct op in WordPress
      const updateMutation = `
        mutation UpdateVoucherEmail($id: ID!, $email: String!) {
          updateVoucher(input: { id: $id, voucherVelden: { klantEmail: $email, status: "bevestigd" } }) {
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
          variables: { id: voucher.databaseId, email: ingevoerdeEmailClean } 
        }),
        cache: 'no-store',
      }).catch(err => console.warn('Kon e-mailadres niet updaten in WP:', err));
    }

    const isBevestigd = velden.status === 'bevestigd' || velden.status === 'Keuze definitief bevestigd' || Boolean(opgeslagenEmail);

    return NextResponse.json({ 
      success: true, 
      isBevestigd, 
      status: velden.status || 'bevestigd' 
    });

  } catch (error: any) {
    console.error('Vouchers POST API fout:', error);
    return NextResponse.json(
      { error: 'Er is een fout opgetreden bij de verificatie.' },
      { status: 500 }
    );
  }
}