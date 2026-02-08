import { Suspense } from 'react';
import type { Metadata } from 'next';
import { getAllSkills } from '@/lib/skills';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HomepageContent from '@/components/HomepageContent';

export const metadata: Metadata = {
  title: 'Random Skills — Surprise Yourself',
  description: 'Can\'t decide what to learn? Let chance pick for you. Random 90-minute skill plans.',
};

export default function RandomPage() {
  const allSkills = getAllSkills();

  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <h1
          className="text-2xl sm:text-3xl font-bold mb-6"
          style={{ fontFamily: 'var(--font-heading)', color: '#1A1A1A' }}
        >
          Random Skills
        </h1>
        <Suspense fallback={null}>
          <HomepageContent allSkills={allSkills} defaultSort="random" />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
