import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'LearnItNow — Master Any Skill in 90 Minutes';
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: '#0f172a', // Slate 900
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                    fontFamily: 'sans-serif',
                }}
            >
                {/* Background Gradients/Effects for "Speed/Energy" */}
                <div
                    style={{
                        position: 'absolute',
                        top: 0, left: 0, right: 0, bottom: 0,
                        background: 'radial-gradient(circle at 100% 0%, #3b82f6 0%, transparent 40%)',
                        opacity: 0.4,
                    }}
                />
                <div
                    style={{
                        position: 'absolute',
                        bottom: -100, left: -100,
                        width: 500, height: 500,
                        background: '#f59e0b', // Amber 500 for "Attention/Energy"
                        filter: 'blur(100px)',
                        opacity: 0.2,
                        borderRadius: '50%',
                    }}
                />

                {/* Stopwatch / Timer Ring Abstract */}
                <div
                    style={{
                        position: 'absolute',
                        width: 700,
                        height: 700,
                        border: '2px solid rgba(255,255,255,0.05)',
                        borderRadius: '50%',
                    }}
                />
                <div
                    style={{
                        position: 'absolute',
                        width: 550,
                        height: 550,
                        border: '2px dashed rgba(255,255,255,0.1)',
                        borderRadius: '50%',
                        transform: 'rotate(-15deg)',
                    }}
                />

                {/* Content */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        zIndex: 10,
                    }}
                >
                    <div
                        style={{
                            fontSize: 140,
                            fontWeight: 900,
                            lineHeight: 0.8,
                            backgroundClip: 'text',
                            color: 'transparent',
                            backgroundImage: 'linear-gradient(to right, #4facfe 0%, #00f2fe 100%)',
                            letterSpacing: '-0.05em',
                        }}
                    >
                        LearnIt
                    </div>

                    <div
                        style={{
                            fontSize: 56,
                            fontWeight: 700,
                            color: 'white',
                            marginTop: 10,
                            letterSpacing: '0.02em',
                        }}
                    >
                        NOW
                    </div>

                    <div
                        style={{
                            marginTop: 40,
                            padding: '16px 40px',
                            background: 'rgba(255,255,255,0.1)',
                            border: '1px solid rgba(255,255,255,0.2)',
                            borderRadius: 100,
                            color: '#e2e8f0',
                            fontSize: 28,
                            fontWeight: 500,
                            boxShadow: '0 10px 30px -10px rgba(0,0,0,0.5)',
                        }}
                    >
                        Master Any Skill Fast.
                    </div>
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
