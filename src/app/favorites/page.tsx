'use client';

import { useState, useEffect } from 'react';
import { getFavorites } from '@/lib/favorites';
import { getSkillById } from '@/lib/skills';
import type { Skill } from '@/types/skill';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SkillGrid from '@/components/SkillGrid';
import EmptyState from '@/components/EmptyState';

export default function FavoritesPage() {
  const [skills, setSkills] = useState<Skill[]>([]);

  useEffect(() => {
    const load = () => {
      const ids = getFavorites();
      const found = ids.map(getSkillById).filter(Boolean) as Skill[];
      setSkills(found);
    };
    load();
    window.addEventListener('favorites-changed', load);
    return () => window.removeEventListener('favorites-changed', load);
  }, []);

  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <h1
          className="text-2xl sm:text-3xl font-bold mb-6"
          style={{ fontFamily: 'var(--font-heading)', color: '#1A1A1A' }}
        >
          Your Saved Skills
        </h1>
        {skills.length === 0 ? (
          <EmptyState
            title="No saved skills yet"
            message="Bookmark skills you want to try and they'll show up here."
          />
        ) : (
          <SkillGrid skills={skills} />
        )}
      </main>
      <Footer />
    </>
  );
}
