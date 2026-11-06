import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');

  if (!code) {
    return NextResponse.json({ error: 'Geen code opgegeven' }, { status: 400 });
  }

  try {
    const endpoint = process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT || 'https://cms.nomi-configurator.nl/graphql';
    const wpUser = process.env.WORDPRESS_AUTH_USER;
    const wpPass = process.env.WORDPRESS_AUTH_PASSWORD;
    const basicAuth = wpUser && wpPass ? 'Basic ' + Buffer.from(`${wpUser}:${wpPass}`).toString('base64') : '';

    const query = `
      query GetVouchersVerify {
        vouchers(first: 100) {
          nodes {
            databaseId
            title
            voucherVelden {
              toegangscode
              status
              klantEMail
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
    const cleanCode = code.trim().toLowerCase();

    const voucher = vouchers.find((v: any) => {
      const cField = (v?.voucherVelden?.toegangscode || '').trim().toLowerCase();
      const tField = (v?.title || '').trim().toLowerCase();
      return cField === cleanCode || tField === cleanCode;
    });

    if (!voucher) {
      return NextResponse.json({ error: 'Voucher niet gevonden' }, { status: 404 });
    }

    const velden = voucher.voucherVelden || {};
    const isBevestigd = velden.status === 'bevestigd' || velden.status === 'Keuze definitief bevestigd';

    return NextResponse.json({
      success: true,
      isBevestigd,
      status: velden.status || 'niet_ingevuld',
      klantEmail: velden.klantEMail || ''
    });
  } catch (err) {
    return NextResponse.json({ error: 'Serverfout' }, { status: 500 });
  }
}

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

    const endpoint = process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT || 'https://cms.nomi-configurator.nl/graphql';
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
              klantEMail
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
    const opgeslagenEmail = (velden.klantEMail || '').trim().toLowerCase();

    // 🛑 STRENGE E-MAILVALIDATIE:
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
          updateVoucher(input: { id: $id, voucherVelden: { klantEMail: $email, status: "bevestigd" } }) {
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
    console.error('Verify Voucher POST API fout:', error);
    return NextResponse.json(
      { error: 'Er is een fout opgetreden bij de verificatie.' },
      { status: 500 }
    );
  }
}