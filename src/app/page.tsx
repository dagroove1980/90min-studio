import { Suspense } from 'react';
import Link from 'next/link';
import { getAllSkills, sortSkills } from '@/lib/skills';
import { ALL_CATEGORIES, ALL_DIFFICULTIES, ALL_SETTINGS, categoryLabels, difficultyLabels, settingLabels, categoryIcons } from '@/lib/constants';
import { categoryColors, difficultyColors, settingColors } from '@/lib/colors';
import { getIcon } from '@/lib/icons';
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

        {/* Browse by Category */}
        <section className="mb-14 mt-10">
          <h2 className="text-xl font-bold mb-5" style={{ fontFamily: 'var(--font-heading)', color: '#1A1A1A' }}>Browse by Category</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {ALL_CATEGORIES.map((category) => {
              const colors = categoryColors[category];
              const Icon = getIcon(categoryIcons[category]);
              return (
                <Link
                  key={category}
                  href={`/category/${category}`}
                  className="flex items-center gap-3 p-4 rounded-2xl border hover:shadow-md transition-shadow"
                  style={{ borderColor: '#F0F0F0', backgroundColor: '#FFFFFF' }}
                >
                  <div
                    className="flex items-center justify-center shrink-0"
                    style={{ width: 40, height: 40, borderRadius: 10, backgroundColor: colors.bg }}
                  >
                    <Icon size={20} style={{ color: colors.text }} />
                  </div>
                  <span className="text-sm font-semibold" style={{ fontFamily: 'var(--font-heading)', color: '#1A1A1A' }}>
                    {categoryLabels[category]}
                  </span>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Browse by Difficulty */}
        <section className="mb-14">
          <h2 className="text-xl font-bold mb-5" style={{ fontFamily: 'var(--font-heading)', color: '#1A1A1A' }}>Browse by Difficulty</h2>
          <div className="flex flex-wrap gap-2">
            {ALL_DIFFICULTIES.map((difficulty) => {
              const colors = difficultyColors[difficulty];
              return (
                <Link
                  key={difficulty}
                  href={`/difficulty/${difficulty}`}
                  className="px-4 py-2 rounded-full text-sm font-medium border hover:shadow-md transition-shadow"
                  style={{ borderColor: '#F0F0F0', backgroundColor: colors.bg, color: colors.text }}
                >
                  {difficultyLabels[difficulty]}
                </Link>
              );
            })}
          </div>
        </section>

        {/* Browse by Setting */}
        <section className="mb-14">
          <h2 className="text-xl font-bold mb-5" style={{ fontFamily: 'var(--font-heading)', color: '#1A1A1A' }}>Browse by Setting</h2>
          <div className="flex flex-wrap gap-2">
            {ALL_SETTINGS.map((setting) => {
              const colors = settingColors[setting];
              return (
                <Link
                  key={setting}
                  href={`/setting/${setting}`}
                  className="px-4 py-2 rounded-full text-sm font-medium border hover:shadow-md transition-shadow"
                  style={{ borderColor: '#F0F0F0', backgroundColor: colors.bg, color: colors.text }}
                >
                  {settingLabels[setting]}
                </Link>
              );
            })}
          </div>
        </section>

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
