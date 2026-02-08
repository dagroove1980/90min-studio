import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllSkills, getSkillById, getSimilarSkills } from '@/lib/skills';
import { skillMetaTitle, skillMetaDescription, skillStructuredData, breadcrumbStructuredData } from '@/lib/seo';
import { categoryLabels, difficultyLabels, settingLabels } from '@/lib/constants';
import { categoryColors, difficultyColors, hexToRgba } from '@/lib/colors';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroIcon from '@/components/HeroIcon';
import Breadcrumbs from '@/components/Breadcrumbs';
import OutcomeBox from '@/components/OutcomeBox';
import NeedsList from '@/components/NeedsList';
import StepTimeline from '@/components/StepTimeline';
import ProTip from '@/components/ProTip';
import ResourceLinks from '@/components/ResourceLinks';
import SimilarSkills from '@/components/SimilarSkills';
import ShareButtons from '@/components/ShareButtons';
import FavoriteButton from '@/components/FavoriteButton';
import AdSlot from '@/components/AdSlot';
import { Clock, Target } from 'lucide-react';

export async function generateStaticParams() {
  return getAllSkills().map((s) => ({ id: s.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const skill = getSkillById(id);
  if (!skill) return {};
  return {
    title: skillMetaTitle(skill),
    description: skillMetaDescription(skill),
  };
}

export default async function SkillDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const skill = getSkillById(id);
  if (!skill) notFound();

  const similar = getSimilarSkills(skill, 4);
  const catColor = categoryColors[skill.category];
  const diffColor = difficultyColors[skill.difficulty];

  const baseUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'https://90min.studio';

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: categoryLabels[skill.category], href: `/category/${skill.category}` },
    { label: skill.name },
  ];

  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
        {/* Structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(skillStructuredData(skill)),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              breadcrumbStructuredData(
                breadcrumbItems
                  .filter((b) => b.href)
                  .map((b) => ({ name: b.label, url: `${baseUrl}${b.href}` }))
              )
            ),
          }}
        />

        <div className="mb-4">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        {/* Hero */}
        <div
          className="rounded-2xl p-6 sm:p-8 mb-8"
          style={{ backgroundColor: hexToRgba(skill.color, 0.05) }}
        >
          <div className="flex flex-col items-center text-center">
            <HeroIcon name={skill.icon} color={skill.color} size="detail" />
            <h1
              className="text-2xl sm:text-[32px] font-bold mt-4 mb-3"
              style={{ fontFamily: 'var(--font-heading)', color: '#1A1A1A', letterSpacing: '-0.02em' }}
            >
              {skill.name}
            </h1>
            <div className="flex flex-wrap justify-center gap-2 mb-3">
              <span
                className="text-xs font-medium px-2.5 py-1 rounded-full"
                style={{ backgroundColor: catColor.bg, color: catColor.text }}
              >
                {categoryLabels[skill.category]}
              </span>
              <span
                className="text-xs font-medium px-2.5 py-1 rounded-full"
                style={{ backgroundColor: diffColor.bg, color: diffColor.text }}
              >
                {difficultyLabels[skill.difficulty]}
              </span>
              <span
                className="text-xs font-medium px-2.5 py-1 rounded-full"
                style={{ backgroundColor: '#F5F5F5', color: '#666666' }}
              >
                {settingLabels[skill.setting]}
              </span>
            </div>
            <div className="flex items-center gap-3 text-sm mb-4" style={{ color: '#AAAAAA' }}>
              <div className="flex items-center gap-1">
                <Clock size={14} />
                <span>90 minutes</span>
              </div>
              <span>·</span>
              <div className="flex items-center gap-1">
                <Target size={14} />
                <span>{skill.steps.length} steps</span>
              </div>
              <span>·</span>
              <span>{difficultyLabels[skill.difficulty]}</span>
            </div>
            <div className="flex items-center gap-3">
              <ShareButtons title={skill.name} url={`${baseUrl}/skill/${skill.id}`} />
              <FavoriteButton skillId={skill.id} />
            </div>
          </div>
        </div>

        {/* Outcome */}
        <div className="mb-8">
          <div
            className="p-5 rounded-xl border"
            style={{ borderColor: '#E8F5E9', backgroundColor: '#FAFFF9' }}
          >
            <OutcomeBox outcome={skill.outcome} />
          </div>
        </div>

        {/* What you need */}
        <div className="mb-8">
          <NeedsList needs={skill.needs} />
        </div>

        {/* The 90-Minute Plan */}
        <div className="mb-8">
          <h2
            className="text-xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-heading)', color: '#1A1A1A' }}
          >
            The 90-Minute Plan
          </h2>
          <StepTimeline steps={skill.steps} color={skill.color} size="detail" />
        </div>

        {/* Pro Tip */}
        <div className="mb-8">
          <ProTip tip={skill.tip} size="detail" />
        </div>

        {/* Resources */}
        <div className="mb-8">
          <ResourceLinks resources={skill.resources} color={skill.color} />
        </div>

        {/* Ad */}
        <div className="mb-8">
          <AdSlot position="skill-detail" />
        </div>

        {/* Similar */}
        <SimilarSkills skills={similar} />
      </main>
      <Footer />
    </>
  );
}
