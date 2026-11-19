import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

const VERHUUR_VOUCHERS = new Set([
  'nomi-a001', 'nomi-a003', 'nomi-a005', 'nomi-a006', 'nomi-a007', 'nomi-a013',
  'nomi-a019', 'nomi-a020', 'nomi-a021', 'nomi-a022', 'nomi-a023', 'nomi-a024',
  'nomi-a025', 'nomi-a026', 'nomi-a027', 'nomi-a028', 'nomi-a029', 'nomi-a030',
  'nomi-a031', 'nomi-a032', 'nomi-a033', 'nomi-a034', 'nomi-a035', 'nomi-a036',
  'nomi-c001', 'nomi-c002', 'nomi-c003',
  'nomi-d003', 'nomi-d004', 'nomi-d005', 'nomi-d006', 'nomi-d007'
]);

function getWpConfig() {
  const graphqlEndpoint =
    process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT ||
    'https://cms.nomi-configurator.nl/graphql';
  const wpBaseUrl = graphqlEndpoint.replace(/\/graphql\/?$/, '');
  const wpUser = process.env.WORDPRESS_AUTH_USER;
  const wpPass = process.env.WORDPRESS_AUTH_PASSWORD;
  const basicAuth =
    wpUser && wpPass
      ? 'Basic ' + Buffer.from(`${wpUser}:${wpPass}`).toString('base64')
      : '';

  return { graphqlEndpoint, wpBaseUrl, basicAuth };
}

export async function GET(request: Request) {
  try {
    const secretKey = request.headers.get('x-admin-secret');
    const expectedSecret = process.env.ADMIN_SECRET_KEY || 'veiligheids-token-hier';
    const referer = request.headers.get('referer') || '';

    const isDashboardInternal = referer.includes('/dashboard');

    if (!isDashboardInternal && secretKey !== expectedSecret) {
      return NextResponse.json({ success: true, vouchers: [] });
    }

    const { graphqlEndpoint, wpBaseUrl, basicAuth } = getWpConfig();

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

    const [graphqlRes, uitgegevenRes] = await Promise.all([
      fetch(graphqlEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(basicAuth ? { Authorization: basicAuth } : {}),
        },
        body: JSON.stringify({ query }),
        cache: 'no-store',
      }),
      fetch(`${wpBaseUrl}/wp-json/custom/v1/uitgegeven-status`, {
        method: 'GET',
        headers: {
          ...(basicAuth ? { Authorization: basicAuth } : {}),
        },
        cache: 'no-store',
      }).catch(() => null),
    ]);

    const json = await graphqlRes.json();
    const allVouchers = json?.data?.vouchers?.nodes || [];

    let uitgegevenMap: Record<string, boolean> = {};
    if (uitgegevenRes && uitgegevenRes.ok) {
      try {
        uitgegevenMap = await uitgegevenRes.json();
      } catch {
        uitgegevenMap = {};
      }
    }

    const vouchers = allVouchers
      .filter((v: any) => {
        const codeField = (v?.voucherVelden?.toegangscode || '').trim().toLowerCase();
        const titleField = (v?.title || '').trim().toLowerCase();

        if (VERHUUR_VOUCHERS.has(codeField) || VERHUUR_VOUCHERS.has(titleField)) {
          return false;
        }
        return true;
      })
      .map((v: any) => {
        const codeKey = (
          v?.voucherVelden?.toegangscode ||
          v?.title ||
          ''
        )
          .trim()
          .toLowerCase();

        return {
          ...v,
          voucherVelden: {
            ...(v.voucherVelden || {}),
            uitgegeven: Boolean(uitgegevenMap[codeKey]),
          },
        };
      });

    return NextResponse.json({ success: true, vouchers });
  } catch (err) {
    console.error('Fetch vouchers API error:', err);
    return NextResponse.json({ error: 'Kon vouchers niet ophalen' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { databaseId, toegangscode, uitgegeven } = body;

    if (!databaseId && !toegangscode) {
      return NextResponse.json(
        { success: false, error: 'Geen voucher-ID of toegangscode meegegeven.' },
        { status: 400 }
      );
    }

    const { wpBaseUrl, basicAuth } = getWpConfig();

    const wpRes = await fetch(`${wpBaseUrl}/wp-json/custom/v1/uitgegeven-status`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(basicAuth ? { Authorization: basicAuth } : {}),
      },
      body: JSON.stringify({
        databaseId,
        toegangscode,
        uitgegeven: Boolean(uitgegeven),
      }),
    });

    const wpData = await wpRes.json();

    if (!wpRes.ok || !wpData.success) {
      return NextResponse.json(
        { success: false, error: wpData?.error || 'Opslaan in WordPress mislukt.' },
        { status: wpRes.status || 500 }
      );
    }

    return NextResponse.json({
      success: true,
      uitgegeven: Boolean(wpData.uitgegeven),
    });
  } catch (err) {
    console.error('Update uitgegeven status API error:', err);
    return NextResponse.json(
      { success: false, error: 'Kon uitgiftestatus niet opslaan in WordPress.' },
      { status: 500 }
    );
  }
}