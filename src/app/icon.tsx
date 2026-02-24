import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const size = {
    width: 48,
    height: 48,
};
export const contentType = 'image/png';

export default function Icon() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    background: '#0f172a',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#38bdf8',
                    fontSize: 26,
                    fontWeight: 900,
                    borderRadius: 8,
                    border: '1px solid #1e293b',
                }}
            >
                90
            </div>
        ),
        {
            ...size,
        }
    );
}
