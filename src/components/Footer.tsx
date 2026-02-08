import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t mt-16 py-8 px-4" style={{ borderColor: '#F0F0F0' }}>
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm" style={{ color: '#999999' }}>
          <span className="font-semibold" style={{ color: '#1A1A1A' }}>90min.studio</span>
          {' '}— learn anything in 90 minutes, one step at a time
        </p>
        <nav className="flex items-center gap-4">
          <Link href="/about" className="text-sm hover:underline" style={{ color: '#999999' }}>
            About
          </Link>
          <span style={{ color: '#E0E0E0' }}>·</span>
          <span className="text-sm" style={{ color: '#CCCCCC' }}>
            Contact
          </span>
        </nav>
      </div>
    </footer>
  );
}
