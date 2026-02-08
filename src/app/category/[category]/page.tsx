import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ALL_CATEGORIES, categoryLabels, categoryPageTitles, categoryIntros } from '@/lib/constants';
import { filterSkills, sortSkills } from '@/lib/skills';
import type { Category } from '@/types/skill';
import BrowsePage from '@/components/BrowsePage';

export function generateStaticParams() {
  return ALL_CATEGORIES.map((c) => ({ category: c }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const cat = category as Category;
  if (!ALL_CATEGORIES.includes(cat)) return {};
  return {
    title: categoryPageTitles[cat],
    description: categoryIntros[cat]?.slice(0, 155),
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const cat = category as Category;
  if (!ALL_CATEGORIES.includes(cat)) notFound();

  const skills = sortSkills(filterSkills({ category: cat }), 'popular');

  return (
    <BrowsePage
      title={categoryPageTitles[cat]}
      intro={categoryIntros[cat]}
      skills={skills}
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: categoryLabels[cat] },
      ]}
    />
  );
}
