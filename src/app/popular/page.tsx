import { Suspense } from 'react';
import type { Metadata } from 'next';
import { getAllSkills, sortSkills } from '@/lib/skills';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HomepageContent from '@/components/HomepageContent';

export const metadata: Metadata = {
  title: 'Most Popular Skills to Learn in 90 Minutes',
  description: 'The most-loved 90-minute skill plans. Browse the skills people are learning right now.',
};

export default function PopularPage() {
  const allSkills = sortSkills(getAllSkills(), 'popular');

  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <h1
          className="text-2xl sm:text-3xl font-bold mb-6"
          style={{ fontFamily: 'var(--font-heading)', color: '#1A1A1A' }}
        >
          Most Popular Skills
        </h1>
        <Suspense fallback={null}>
          <HomepageContent allSkills={allSkills} defaultSort="popular" />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
