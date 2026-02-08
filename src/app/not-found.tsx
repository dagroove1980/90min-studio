import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Compass } from 'lucide-react';

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="max-w-xl mx-auto px-4 py-20 text-center">
        <div
          className="flex items-center justify-center w-16 h-16 rounded-2xl mx-auto mb-4"
          style={{ backgroundColor: 'rgba(230, 57, 70, 0.08)' }}
        >
          <Compass size={28} style={{ color: '#E63946' }} />
        </div>
        <h1
          className="text-2xl font-bold mb-2"
          style={{ fontFamily: 'var(--font-heading)', color: '#1A1A1A' }}
        >
          Page not found
        </h1>
        <p className="text-base mb-6" style={{ color: '#999999' }}>
          This skill plan doesn&apos;t exist — but there are 300+ others waiting for you.
        </p>
        <Link
          href="/"
          className="inline-flex px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 hover:-translate-y-0.5"
          style={{ backgroundColor: '#1A1A1A', color: '#FFFFFF' }}
        >
          Browse all skills
        </Link>
      </main>
      <Footer />
    </>
  );
}
