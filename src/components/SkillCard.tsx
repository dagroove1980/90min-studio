'use client';

import { useState } from 'react';
import Link from 'next/link';
import type { Skill } from '@/types/skill';
import { categoryColors, difficultyColors } from '@/lib/colors';
import { categoryLabels, difficultyLabels } from '@/lib/constants';
import HeroIcon from './HeroIcon';
import OutcomeBox from './OutcomeBox';
import NeedsList from './NeedsList';
import StepTimeline from './StepTimeline';
import ProTip from './ProTip';
import FavoriteButton from './FavoriteButton';
import { Clock, Target, ChevronDown, ChevronUp, Heart } from 'lucide-react';

interface SkillCardProps {
  skill: Skill;
}

export default function SkillCard({ skill }: SkillCardProps) {
  const [expanded, setExpanded] = useState(false);
  const catColor = categoryColors[skill.category];
  const diffColor = difficultyColors[skill.difficulty];

  return (
    <article
      className="rounded-[20px] bg-white transition-all duration-300 cursor-pointer"
      style={{
        boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 8px 30px rgba(0,0,0,0.03)',
      }}
      onClick={() => setExpanded(!expanded)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setExpanded(!expanded);
        }
      }}
      tabIndex={0}
      role="button"
      aria-expanded={expanded}
    >
      <div className="p-5">
        {/* Header */}
        <div className="flex items-start gap-3 mb-3">
          <HeroIcon name={skill.icon} color={skill.color} />
          <div className="flex-1 min-w-0">
            <Link
              href={`/skill/${skill.id}`}
              onClick={(e) => e.stopPropagation()}
              className="text-[17px] font-bold leading-tight hover:underline block"
              style={{ color: '#1A1A1A', fontFamily: 'var(--font-heading)' }}
            >
              {skill.name}
            </Link>
            <div className="flex items-center gap-2 mt-1" style={{ color: '#AAAAAA' }}>
              <Clock size={13} />
              <span className="text-xs">90 min</span>
              <span className="text-xs">·</span>
              <Target size={13} />
              <span className="text-xs">{skill.steps.length} steps</span>
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          <Link
            href={`/category/${skill.category}`}
            onClick={(e) => e.stopPropagation()}
            className="text-xs font-medium px-2.5 py-1 rounded-full transition-opacity hover:opacity-80"
            style={{ backgroundColor: catColor.bg, color: catColor.text }}
          >
            {categoryLabels[skill.category]}
          </Link>
          <span
            className="text-xs font-medium px-2.5 py-1 rounded-full"
            style={{ backgroundColor: diffColor.bg, color: diffColor.text }}
          >
            {difficultyLabels[skill.difficulty]}
          </span>
        </div>

        {/* Outcome */}
        <OutcomeBox outcome={skill.outcome} />

        {/* Expanded content */}
        {expanded && (
          <div className="mt-4 space-y-4">
            <NeedsList needs={skill.needs} />
            <StepTimeline steps={skill.steps} color={skill.color} />
            <ProTip tip={skill.tip} />
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between mt-3 pt-3 border-t" style={{ borderColor: '#F0F0F0' }}>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1" style={{ color: '#DDDDDD' }}>
              <Heart size={14} />
              <span className="text-xs">{skill.likes.toLocaleString()}</span>
            </div>
            <FavoriteButton skillId={skill.id} />
          </div>
          <div className="flex items-center gap-1 text-xs" style={{ color: '#CCCCCC' }}>
            <span>{expanded ? 'collapse' : 'see the plan'}</span>
            {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </div>
        </div>
      </div>
    </article>
  );
}
