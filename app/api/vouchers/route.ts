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

export async function GET(request: Request) {
  try {
    // Check of het verzoek van het interne dashboard komt via een speciale header
    const secretKey = request.headers.get('x-admin-secret');
    const expectedSecret = process.env.ADMIN_SECRET_KEY || 'veiligheids-token-hier';
    const referer = request.headers.get('referer') || '';
    
    // Als het niet vanuit de dashboard-pagina komt én geen geheime key heeft, weren we het af
    const isDashboardInternal = referer.includes('/dashboard');

    if (!isDashboardInternal && secretKey !== expectedSecret) {
      return NextResponse.json(
        { success: false, error: 'Niet geautoriseerd.' },
        { status: 403 }
      );
    }

    const endpoint = process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT || 'https://cms.nomi-configurator.nl/graphql';
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
    const allVouchers = json?.data?.vouchers?.nodes || [];

    const vouchers = allVouchers.filter((v: any) => {
      const codeField = (v?.voucherVelden?.toegangscode || '').trim().toLowerCase();
      const titleField = (v?.title || '').trim().toLowerCase();
      
      if (VERHUUR_VOUCHERS.has(codeField) || VERHUUR_VOUCHERS.has(titleField)) {
        return false;
      }
      return true;
    });

    return NextResponse.json({ success: true, vouchers });
  } catch (err) {
    console.error('Fetch vouchers API error:', err);
    return NextResponse.json({ error: 'Kon vouchers niet ophalen' }, { status: 500 });
  }
}