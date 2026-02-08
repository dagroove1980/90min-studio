'use client';

import { useState, useEffect } from 'react';
import type { Skill } from '@/types/skill';
import SkillCard from './SkillCard';
import AdSlot from './AdSlot';
import EmptyState from './EmptyState';

interface SkillGridProps {
  skills: Skill[];
  pageSize?: number;
}

export default function SkillGrid({ skills, pageSize = 24 }: SkillGridProps) {
  const [visible, setVisible] = useState(pageSize);

  useEffect(() => {
    setVisible(pageSize);
  }, [skills, pageSize]);

  if (skills.length === 0) {
    return <EmptyState title="No skills found" message="Try adjusting your filters." />;
  }

  const shown = skills.slice(0, visible);
  const hasMore = visible < skills.length;

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {shown.map((skill, i) => (
          <div key={skill.id}>
            <SkillCard skill={skill} />
            {(i + 1) % 12 === 0 && i + 1 < shown.length && (
              <div className="col-span-full mt-4 mb-4">
                <AdSlot position="in-grid" />
              </div>
            )}
          </div>
        ))}
      </div>
      {hasMore && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setVisible((v) => v + pageSize)}
            className="px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 hover:-translate-y-0.5"
            style={{
              backgroundColor: '#1A1A1A',
              color: '#FFFFFF',
            }}
          >
            Show more skills ({skills.length - visible} remaining)
          </button>
        </div>
      )}
    </div>
  );
}
