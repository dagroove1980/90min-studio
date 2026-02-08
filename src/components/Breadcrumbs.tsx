import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm flex-wrap">
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-1.5">
          {i > 0 && <ChevronRight size={14} style={{ color: '#CCCCCC' }} />}
          {item.href ? (
            <Link href={item.href} className="hover:underline" style={{ color: '#999999' }}>
              {item.label}
            </Link>
          ) : (
            <span style={{ color: '#1A1A1A' }}>{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
