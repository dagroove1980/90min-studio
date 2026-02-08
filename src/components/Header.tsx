'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Timer, Bookmark, Menu, X, Sparkles } from 'lucide-react';
import { getFavorites } from '@/lib/favorites';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [favCount, setFavCount] = useState(0);

  useEffect(() => {
    setFavCount(getFavorites().length);
    const handler = () => setFavCount(getFavorites().length);
    window.addEventListener('favorites-changed', handler);
    return () => window.removeEventListener('favorites-changed', handler);
  }, []);

  return (
    <header
      className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b"
      style={{ borderColor: '#F0F0F0' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1.5">
          <span className="text-xl font-bold" style={{ fontFamily: 'var(--font-heading)', color: '#1A1A1A' }}>
            90min
          </span>
          <span className="text-xl font-bold" style={{ fontFamily: 'var(--font-heading)', color: '#E63946' }}>
            .studio
          </span>
        </Link>

        {/* Tagline - hidden on mobile */}
        <div className="hidden md:flex items-center gap-1.5" style={{ color: '#999999' }}>
          <Timer size={14} />
          <span className="text-xs">Every skill. 90 minutes. Zero fluff.</span>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-4">
          <Link
            href="/"
            className="text-sm font-medium transition-colors hover:opacity-70"
            style={{ color: '#1A1A1A' }}
          >
            Browse
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium transition-colors hover:opacity-70"
            style={{ color: '#666666' }}
          >
            About
          </Link>
          <Link
            href="/favorites"
            className="flex items-center gap-1.5 text-sm font-medium transition-colors hover:opacity-70"
            style={{ color: '#666666' }}
          >
            <Bookmark size={15} />
            Favorites
            {favCount > 0 && (
              <span
                className="text-[10px] font-bold px-1.5 py-0.5 rounded-full"
                style={{ backgroundColor: '#E63946', color: '#FFFFFF' }}
              >
                {favCount}
              </span>
            )}
          </Link>
          <Link
            href="/random"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-sm font-medium transition-all duration-200 hover:-translate-y-0.5"
            style={{ backgroundColor: '#E63946', color: '#FFFFFF' }}
          >
            <Sparkles size={14} />
            Teach Me Something
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t px-4 py-4 space-y-3 bg-white" style={{ borderColor: '#F0F0F0' }}>
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="block text-sm font-medium"
            style={{ color: '#1A1A1A' }}
          >
            Browse
          </Link>
          <Link
            href="/about"
            onClick={() => setMenuOpen(false)}
            className="block text-sm font-medium"
            style={{ color: '#666666' }}
          >
            About
          </Link>
          <Link
            href="/favorites"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-1.5 text-sm font-medium"
            style={{ color: '#666666' }}
          >
            <Bookmark size={15} />
            Favorites
            {favCount > 0 && (
              <span
                className="text-[10px] font-bold px-1.5 py-0.5 rounded-full"
                style={{ backgroundColor: '#E63946', color: '#FFFFFF' }}
              >
                {favCount}
              </span>
            )}
          </Link>
          <Link
            href="/random"
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-full text-sm font-medium"
            style={{ backgroundColor: '#E63946', color: '#FFFFFF' }}
          >
            <Sparkles size={14} />
            Teach Me Something
          </Link>
        </div>
      )}
    </header>
  );
}
