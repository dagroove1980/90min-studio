import { ImageResponse } from '@vercel/og';
import { getSkillById, getAllSkills } from '@/lib/skills';
import { categoryLabels, difficultyLabels } from '@/lib/constants';

export const alt = '90min.studio skill plan';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OGImage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const skill = getSkillById(id);

  if (!skill) {
    return new ImageResponse(
      (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#FAF9F7',
            fontSize: 48,
            fontWeight: 700,
            color: '#1A1A1A',
          }}
        >
          90min.studio
        </div>
      ),
      size
    );
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#FAF9F7',
          padding: 60,
        }}
      >
        {/* Icon circle */}
        <div
          style={{
            width: 80,
            height: 80,
            borderRadius: 20,
            backgroundColor: `${skill.color}20`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 24,
          }}
        >
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: 10,
              backgroundColor: skill.color,
            }}
          />
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 48,
            fontWeight: 700,
            color: '#1A1A1A',
            textAlign: 'center',
            lineHeight: 1.2,
            maxWidth: 900,
            marginBottom: 16,
          }}
        >
          {skill.name}
        </div>

        {/* Tags */}
        <div style={{ display: 'flex', gap: 12, marginBottom: 20 }}>
          <div
            style={{
              fontSize: 20,
              padding: '6px 16px',
              borderRadius: 20,
              backgroundColor: `${skill.color}20`,
              color: skill.color,
              fontWeight: 600,
            }}
          >
            {categoryLabels[skill.category]}
          </div>
          <div
            style={{
              fontSize: 20,
              padding: '6px 16px',
              borderRadius: 20,
              backgroundColor: '#F5F5F5',
              color: '#666666',
              fontWeight: 600,
            }}
          >
            {difficultyLabels[skill.difficulty]}
          </div>
          <div
            style={{
              fontSize: 20,
              padding: '6px 16px',
              borderRadius: 20,
              backgroundColor: '#F5F5F5',
              color: '#666666',
              fontWeight: 600,
            }}
          >
            90 min · {skill.steps.length} steps
          </div>
        </div>

        {/* Outcome */}
        <div
          style={{
            fontSize: 22,
            color: '#666666',
            textAlign: 'center',
            maxWidth: 800,
            marginBottom: 30,
          }}
        >
          {skill.outcome}
        </div>

        {/* Branding */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <span style={{ fontSize: 24, fontWeight: 700, color: '#1A1A1A' }}>90min</span>
          <span style={{ fontSize: 24, fontWeight: 700, color: '#E63946' }}>.studio</span>
        </div>
      </div>
    ),
    size
  );
}
