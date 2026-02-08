'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';
import type { Category, Difficulty, Setting } from '@/types/skill';
import { ALL_CATEGORIES, ALL_DIFFICULTIES, ALL_SETTINGS, categoryLabels, difficultyLabels, settingLabels } from '@/lib/constants';

interface FilterBarProps {
  activeCategory?: Category;
  activeDifficulty?: Difficulty;
  activeSetting?: Setting;
}

export default function FilterBar({ activeCategory, activeDifficulty, activeSetting }: FilterBarProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const updateParam = useCallback(
    (key: string, value: string | null) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
      router.push(`?${params.toString()}`, { scroll: false });
    },
    [router, searchParams]
  );

  const currentCategory = activeCategory || (searchParams.get('category') as Category | null);
  const currentDifficulty = activeDifficulty || (searchParams.get('difficulty') as Difficulty | null);
  const currentSetting = activeSetting || (searchParams.get('setting') as Setting | null);

  return (
    <div className="space-y-3">
      {/* Category pills */}
      <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-1">
        <button
          onClick={() => updateParam('category', null)}
          className="shrink-0 text-sm font-medium px-3.5 py-1.5 rounded-full transition-colors"
          style={{
            backgroundColor: !currentCategory ? '#1A1A1A' : '#F5F5F5',
            color: !currentCategory ? '#FFFFFF' : '#666666',
          }}
        >
          All skills
        </button>
        {ALL_CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => updateParam('category', currentCategory === cat ? null : cat)}
            className="shrink-0 text-sm font-medium px-3.5 py-1.5 rounded-full transition-colors"
            style={{
              backgroundColor: currentCategory === cat ? '#1A1A1A' : '#F5F5F5',
              color: currentCategory === cat ? '#FFFFFF' : '#666666',
            }}
          >
            {categoryLabels[cat]}
          </button>
        ))}
      </div>

      {/* Secondary filters */}
      <div className="flex flex-wrap gap-3">
        {/* Difficulty */}
        <div className="flex items-center gap-1.5">
          <span className="text-xs font-medium" style={{ color: '#999999' }}>
            Level:
          </span>
          <div className="flex gap-1">
            <button
              onClick={() => updateParam('difficulty', null)}
              className="text-xs px-2.5 py-1 rounded-full transition-colors"
              style={{
                backgroundColor: !currentDifficulty ? '#1A1A1A' : '#F5F5F5',
                color: !currentDifficulty ? '#FFFFFF' : '#666666',
              }}
            >
              Any
            </button>
            {ALL_DIFFICULTIES.map((d) => (
              <button
                key={d}
                onClick={() => updateParam('difficulty', currentDifficulty === d ? null : d)}
                className="text-xs px-2.5 py-1 rounded-full transition-colors"
                style={{
                  backgroundColor: currentDifficulty === d ? '#1A1A1A' : '#F5F5F5',
                  color: currentDifficulty === d ? '#FFFFFF' : '#666666',
                }}
              >
                {difficultyLabels[d]}
              </button>
            ))}
          </div>
        </div>

        {/* Setting */}
        <div className="flex items-center gap-1.5">
          <span className="text-xs font-medium" style={{ color: '#999999' }}>
            Setting:
          </span>
          <div className="flex gap-1">
            <button
              onClick={() => updateParam('setting', null)}
              className="text-xs px-2.5 py-1 rounded-full transition-colors"
              style={{
                backgroundColor: !currentSetting ? '#1A1A1A' : '#F5F5F5',
                color: !currentSetting ? '#FFFFFF' : '#666666',
              }}
            >
              Any
            </button>
            {ALL_SETTINGS.map((s) => (
              <button
                key={s}
                onClick={() => updateParam('setting', currentSetting === s ? null : s)}
                className="text-xs px-2.5 py-1 rounded-full transition-colors"
                style={{
                  backgroundColor: currentSetting === s ? '#1A1A1A' : '#F5F5F5',
                  color: currentSetting === s ? '#FFFFFF' : '#666666',
                }}
              >
                {settingLabels[s]}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
