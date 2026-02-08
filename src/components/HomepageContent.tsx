'use client';

import { useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import type { Skill, Category, Difficulty, Setting, SortOption } from '@/types/skill';
import { filterSkills, sortSkills } from '@/lib/skills';
import FilterBar from './FilterBar';
import SortTabs from './SortTabs';
import SkillGrid from './SkillGrid';

interface HomepageContentProps {
  allSkills: Skill[];
  defaultSort?: SortOption;
}

export default function HomepageContent({ allSkills, defaultSort = 'popular' }: HomepageContentProps) {
  const searchParams = useSearchParams();
  const category = searchParams.get('category') as Category | null;
  const difficulty = searchParams.get('difficulty') as Difficulty | null;
  const setting = searchParams.get('setting') as Setting | null;

  const filtered = useMemo(() => {
    let result = filterSkills({
      category: category || undefined,
      difficulty: difficulty || undefined,
      setting: setting || undefined,
    });
    return sortSkills(result, defaultSort);
  }, [category, difficulty, setting, defaultSort]);

  return (
    <div className="space-y-6">
      <FilterBar />
      <SortTabs />
      <SkillGrid skills={filtered} />
    </div>
  );
}
