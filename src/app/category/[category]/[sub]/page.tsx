import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ALL_CATEGORIES, ALL_DIFFICULTIES, categoryLabels, difficultyLabels, SUBCATEGORIES, subcategoryLabels, categoryIntros, difficultyIntros } from '@/lib/constants';
import { filterSkills, sortSkills, getValidSubcategoryPages, getValidCombinedFilters } from '@/lib/skills';
import type { Category, Difficulty } from '@/types/skill';
import BrowsePage from '@/components/BrowsePage';

export function generateStaticParams() {
  const subcatPages = getValidSubcategoryPages().map((p) => ({
    category: p.category,
    sub: p.sub,
  }));
  const comboPages = getValidCombinedFilters().map((p) => ({
    category: p.category,
    sub: p.sub,
  }));
  return [...subcatPages, ...comboPages];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; sub: string }>;
}): Promise<Metadata> {
  const { category, sub } = await params;
  const cat = category as Category;

  if (ALL_DIFFICULTIES.includes(sub as Difficulty)) {
    const diff = sub as Difficulty;
    return {
      title: `${difficultyLabels[diff]} ${categoryLabels[cat]} Skills — 90-Minute Plans`,
      description: `${difficultyLabels[diff]} ${categoryLabels[cat].toLowerCase()} skills you can learn in 90 minutes with step-by-step plans.`,
    };
  }

  const label = subcategoryLabels[sub] || sub;
  return {
    title: `${label} in 90 Minutes — Step-by-Step Plans`,
    description: `Learn ${label.toLowerCase()} in 90 minutes with clear, step-by-step plans from zero to doing it.`,
  };
}

export default async function SubPage({
  params,
}: {
  params: Promise<{ category: string; sub: string }>;
}) {
  const { category, sub } = await params;
  const cat = category as Category;
  if (!ALL_CATEGORIES.includes(cat)) notFound();

  // Is it a difficulty combo?
  if (ALL_DIFFICULTIES.includes(sub as Difficulty)) {
    const diff = sub as Difficulty;
    const skills = sortSkills(
      filterSkills({ category: cat, difficulty: diff }),
      'popular'
    );
    if (skills.length < 4) notFound();

    return (
      <BrowsePage
        title={`${difficultyLabels[diff]} ${categoryLabels[cat]} Skills`}
        intro={difficultyIntros[diff]}
        skills={skills}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: categoryLabels[cat], href: `/category/${cat}` },
          { label: difficultyLabels[diff] },
        ]}
      />
    );
  }

  // Subcategory page
  const skills = sortSkills(
    filterSkills({ category: cat, subcategory: sub }),
    'popular'
  );
  if (skills.length < 3) notFound();

  const label = subcategoryLabels[sub] || sub;

  return (
    <BrowsePage
      title={`${label} in 90 Minutes`}
      intro={categoryIntros[cat]}
      skills={skills}
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: categoryLabels[cat], href: `/category/${cat}` },
        { label: label },
      ]}
    />
  );
}
