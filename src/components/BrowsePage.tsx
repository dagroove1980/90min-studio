import type { Skill } from '@/types/skill';
import Header from './Header';
import Footer from './Footer';
import SkillGrid from './SkillGrid';
import AdSlot from './AdSlot';
import Breadcrumbs from './Breadcrumbs';

interface BrowsePageProps {
  title: string;
  intro?: string;
  skills: Skill[];
  breadcrumbs?: { label: string; href?: string }[];
}

export default function BrowsePage({ title, intro, skills, breadcrumbs }: BrowsePageProps) {
  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {breadcrumbs && (
          <div className="mb-4">
            <Breadcrumbs items={breadcrumbs} />
          </div>
        )}
        <h1
          className="text-2xl sm:text-3xl font-bold mb-2"
          style={{ fontFamily: 'var(--font-heading)', color: '#1A1A1A' }}
        >
          {title}
        </h1>
        {intro && (
          <p className="text-base leading-relaxed mb-6 max-w-2xl" style={{ color: '#666666' }}>
            {intro}
          </p>
        )}
        <div className="mb-6">
          <AdSlot position="filter-page" />
        </div>
        <SkillGrid skills={skills} />
      </main>
      <Footer />
    </>
  );
}
