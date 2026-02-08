import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ALL_SETTINGS, settingLabels, settingPageTitles, settingIntros } from '@/lib/constants';
import { filterSkills, sortSkills } from '@/lib/skills';
import type { Setting } from '@/types/skill';
import BrowsePage from '@/components/BrowsePage';

export function generateStaticParams() {
  return ALL_SETTINGS.map((s) => ({ setting: s }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ setting: string }>;
}): Promise<Metadata> {
  const { setting } = await params;
  const s = setting as Setting;
  if (!ALL_SETTINGS.includes(s)) return {};
  return {
    title: settingPageTitles[s],
    description: settingIntros[s]?.slice(0, 155),
  };
}

export default async function SettingPage({
  params,
}: {
  params: Promise<{ setting: string }>;
}) {
  const { setting } = await params;
  const s = setting as Setting;
  if (!ALL_SETTINGS.includes(s)) notFound();

  const skills = sortSkills(filterSkills({ setting: s }), 'popular');

  return (
    <BrowsePage
      title={settingPageTitles[s]}
      intro={settingIntros[s]}
      skills={skills}
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: settingLabels[s] },
      ]}
    />
  );
}
