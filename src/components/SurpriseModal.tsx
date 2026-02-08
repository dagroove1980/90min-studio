'use client';

import { useState, useEffect, useCallback } from 'react';
import { X, Sparkles } from 'lucide-react';
import type { Skill } from '@/types/skill';
import { getRandomSkill } from '@/lib/skills';
import SkillCard from './SkillCard';

interface SurpriseModalProps {
  fromSkills?: Skill[];
}

export default function SurpriseModal({ fromSkills }: SurpriseModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [skill, setSkill] = useState<Skill | null>(null);

  const open = useCallback(() => {
    setSkill(getRandomSkill(undefined, fromSkills));
    setIsOpen(true);
  }, [fromSkills]);

  const reroll = useCallback(() => {
    setSkill(getRandomSkill(skill?.id, fromSkills));
  }, [skill, fromSkills]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  return (
    <>
      <button
        onClick={open}
        className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-sm font-medium transition-all duration-200 hover:-translate-y-0.5"
        style={{ backgroundColor: '#E63946', color: '#FFFFFF' }}
      >
        <Sparkles size={14} />
        Teach Me Something
      </button>

      {isOpen && skill && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(8px)' }}
          onClick={() => setIsOpen(false)}
        >
          <div
            className="w-full max-w-lg max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center mb-4">
              <div className="flex items-center justify-center gap-2 mb-1">
                <Sparkles size={18} style={{ color: '#E63946' }} />
                <h2 className="text-lg font-bold text-white">
                  Your next 90 minutes start now...
                </h2>
                <Sparkles size={18} style={{ color: '#E63946' }} />
              </div>
            </div>
            <SkillCard skill={skill} />
            <div className="flex justify-center gap-3 mt-4">
              <button
                onClick={reroll}
                className="px-4 py-2 rounded-full text-sm font-medium transition-colors"
                style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#FFFFFF' }}
              >
                Try another
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 rounded-full text-sm font-medium transition-colors"
                style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#FFFFFF' }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
