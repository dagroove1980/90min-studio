import type { Skill } from '@/types/skill';
import { categoryLabels, difficultyLabels } from './constants';

export function skillMetaTitle(skill: Skill): string {
  return `${skill.name} in 90 Minutes — Step-by-Step Plan`;
}

export function skillMetaDescription(skill: Skill): string {
  return `Learn to ${skill.outcome.toLowerCase()} in just 90 minutes. A ${skill.difficulty} ${categoryLabels[skill.category].toLowerCase()} skill with ${skill.steps.length} clear steps to go from zero to doing it.`;
}

export function skillStructuredData(skill: Skill): object {
  const baseUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'https://90min.studio';

  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: skill.name,
    description: `Learn to ${skill.outcome.toLowerCase()} in 90 minutes.`,
    totalTime: 'PT90M',
    supply: skill.needs.map((n) => ({
      '@type': 'HowToSupply',
      name: n,
    })),
    step: skill.steps.map((step, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: step.label,
      text: step.text,
    })),
    url: `${baseUrl}/skill/${skill.id}`,
  };
}

export function collectionStructuredData(
  title: string,
  description: string,
  url: string
): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: title,
    description,
    url,
  };
}

export function breadcrumbStructuredData(
  items: { name: string; url: string }[]
): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
