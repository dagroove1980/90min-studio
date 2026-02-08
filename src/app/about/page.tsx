import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'About',
  description: '90min.studio is a library of structured 90-minute plans to learn any skill from zero. Not courses, not tutorials — just a clear plan and a timer.',
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="max-w-2xl mx-auto px-4 sm:px-6 py-12">
        <h1
          className="text-3xl font-bold mb-6"
          style={{ fontFamily: 'var(--font-heading)', color: '#1A1A1A' }}
        >
          About 90min.studio
        </h1>
        <div className="space-y-4 text-base leading-relaxed" style={{ color: '#444444' }}>
          <p>
            <strong>90min.studio</strong> is a library of structured 90-minute plans to learn any skill
            from zero. Not courses. Not tutorials. Not 40-hour curriculums you&apos;ll never finish. Just
            a clear plan and 90 minutes.
          </p>
          <p>
            Every plan takes you from &ldquo;I&apos;ve never done this&rdquo; to &ldquo;I just did
            it&rdquo; in a single session. Each one has timed steps, specific instructions, and a
            concrete outcome promise — so you know exactly what you&apos;ll be able to do when
            you&apos;re done.
          </p>
          <p className="font-medium" style={{ color: '#1A1A1A' }}>
            The philosophy is simple: you don&apos;t need motivation. You need a plan and 90 minutes.
            Sit down, follow the steps, and you&apos;ll surprise yourself.
          </p>
          <p>
            This is for anyone who&apos;s ever said &ldquo;I wish I could...&rdquo; — play guitar,
            cook a real meal, give a great presentation, fix things around the house, learn a new
            language. Now you can. In 90 minutes.
          </p>
          <h2
            className="text-xl font-bold pt-4"
            style={{ fontFamily: 'var(--font-heading)', color: '#1A1A1A' }}
          >
            How it works
          </h2>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Pick a skill that interests you</li>
            <li>Gather what you need (most skills require nothing or very little)</li>
            <li>Set a timer for 90 minutes</li>
            <li>Follow the steps</li>
            <li>Surprise yourself</li>
          </ol>
          <p className="pt-4 text-sm" style={{ color: '#999999' }}>
            Made with care. Questions? Reach out at hello@90min.studio
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
