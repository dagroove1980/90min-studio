import { Suspense } from 'react';
import { getAllSkills, sortSkills } from '@/lib/skills';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HomepageContent from '@/components/HomepageContent';
import AdSlot from '@/components/AdSlot';

export default function HomePage() {
  const allSkills = sortSkills(getAllSkills(), 'popular');

  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Hero */}
        <section className="text-center py-12 sm:py-16">
          <h1
            className="text-3xl sm:text-5xl font-bold mb-3"
            style={{ fontFamily: 'var(--font-heading)', color: '#1A1A1A', letterSpacing: '-0.03em' }}
          >
            Learn anything in 90 minutes.
          </h1>
          <p className="text-base sm:text-lg max-w-xl mx-auto" style={{ color: '#666666' }}>
            Step-by-step skill plans that take you from zero to &ldquo;I can actually do this.&rdquo;
            No courses. No fluff. Just a clear 90-minute plan.
          </p>
        </section>

        <AdSlot position="homepage-leaderboard" />

        <div className="mt-8">
          <Suspense fallback={null}>
            <HomepageContent allSkills={allSkills} defaultSort="popular" />
          </Suspense>
        </div>
      </main>
      <Footer />
    </>
  );
}
