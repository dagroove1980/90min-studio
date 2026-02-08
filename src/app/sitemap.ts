import type { MetadataRoute } from 'next';
import { getAllSkills, getValidSubcategoryPages, getValidCombinedFilters } from '@/lib/skills';
import { ALL_CATEGORIES, ALL_DIFFICULTIES, ALL_SETTINGS } from '@/lib/constants';

const BASE_URL = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : 'https://90min.studio';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE_URL}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${BASE_URL}/popular`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/new`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
  ];

  const skillPages: MetadataRoute.Sitemap = getAllSkills().map((s) => ({
    url: `${BASE_URL}/skill/${s.id}`,
    lastModified: s.createdAt,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  const categoryPages: MetadataRoute.Sitemap = ALL_CATEGORIES.map((c) => ({
    url: `${BASE_URL}/category/${c}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const difficultyPages: MetadataRoute.Sitemap = ALL_DIFFICULTIES.map((d) => ({
    url: `${BASE_URL}/difficulty/${d}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  const settingPages: MetadataRoute.Sitemap = ALL_SETTINGS.map((s) => ({
    url: `${BASE_URL}/setting/${s}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  const subcatPages: MetadataRoute.Sitemap = getValidSubcategoryPages().map((p) => ({
    url: `${BASE_URL}/category/${p.category}/${p.sub}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  const comboPages: MetadataRoute.Sitemap = getValidCombinedFilters().map((p) => ({
    url: `${BASE_URL}/category/${p.category}/${p.sub}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  return [
    ...staticPages,
    ...skillPages,
    ...categoryPages,
    ...difficultyPages,
    ...settingPages,
    ...subcatPages,
    ...comboPages,
  ];
}
