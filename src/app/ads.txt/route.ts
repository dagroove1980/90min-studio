import { NextResponse } from 'next/server';

export async function GET() {
  return new NextResponse(
    'google.com, pub-3452665186406442, DIRECT, f08c47fec0942fa0',
    {
      headers: {
        'Content-Type': 'text/plain',
        'Cache-Control': 'public, max-age=86400',
      },
    }
  );
}
