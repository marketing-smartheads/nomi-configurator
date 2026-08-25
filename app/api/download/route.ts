import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const fileUrl = searchParams.get('url');
  const fileName = searchParams.get('name') || 'download';

  if (!fileUrl) {
    return NextResponse.json({ error: 'Geen URL opgegeven' }, { status: 400 });
  }

  try {
    const response = await fetch(fileUrl);
    if (!response.ok) throw new Error('Kon bestand niet ophalen van backend');

    const blob = await response.blob();
    const headers = new Headers();
    headers.set('Content-Disposition', `attachment; filename="${fileName}"`);
    headers.set('Content-Type', blob.type || 'application/octet-stream');

    return new NextResponse(blob, {
      status: 200,
      headers,
    });
  } catch (error) {
    return NextResponse.json({ error: 'Download mislukt' }, { status: 500 });
  }
}