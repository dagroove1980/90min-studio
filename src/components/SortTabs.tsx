'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const tabs = [
  { label: 'Popular', href: '/popular' },
  { label: 'New', href: '/new' },
  { label: 'Random', href: '/random' },
];

export default function SortTabs() {
  const pathname = usePathname();

  return (
    <div className="flex gap-4 border-b" style={{ borderColor: '#F0F0F0' }}>
      <Link
        href="/"
        className="text-sm font-medium pb-2 border-b-2 transition-colors"
        style={{
          borderColor: pathname === '/' ? '#1A1A1A' : 'transparent',
          color: pathname === '/' ? '#1A1A1A' : '#999999',
        }}
      >
        All
      </Link>
      {tabs.map((tab) => (
        <Link
          key={tab.href}
          href={tab.href}
          className="text-sm font-medium pb-2 border-b-2 transition-colors"
          style={{
            borderColor: pathname === tab.href ? '#1A1A1A' : 'transparent',
            color: pathname === tab.href ? '#1A1A1A' : '#999999',
          }}
        >
          {tab.label}
        </Link>
      ))}
    </div>
  );
}
