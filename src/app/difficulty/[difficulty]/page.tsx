import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ALL_DIFFICULTIES, difficultyLabels, difficultyPageTitles, difficultyIntros } from '@/lib/constants';
import { filterSkills, sortSkills } from '@/lib/skills';
import type { Difficulty } from '@/types/skill';
import BrowsePage from '@/components/BrowsePage';

export function generateStaticParams() {
  return ALL_DIFFICULTIES.map((d) => ({ difficulty: d }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ difficulty: string }>;
}): Promise<Metadata> {
  const { difficulty } = await params;
  const diff = difficulty as Difficulty;
  if (!ALL_DIFFICULTIES.includes(diff)) return {};
  return {
    title: difficultyPageTitles[diff],
    description: difficultyIntros[diff]?.slice(0, 155),
  };
}

export default async function DifficultyPage({
  params,
}: {
  params: Promise<{ difficulty: string }>;
}) {
  const { difficulty } = await params;
  const diff = difficulty as Difficulty;
  if (!ALL_DIFFICULTIES.includes(diff)) notFound();

  const skills = sortSkills(filterSkills({ difficulty: diff }), 'popular');

  return (
    <BrowsePage
      title={difficultyPageTitles[diff]}
      intro={difficultyIntros[diff]}
      skills={skills}
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: difficultyLabels[diff] },
      ]}
    />
  );
}
