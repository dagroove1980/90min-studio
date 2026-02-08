import { getIcon } from '@/lib/icons';
import { ExternalLink } from 'lucide-react';
import type { Resource } from '@/types/skill';

interface ResourceLinksProps {
  resources: Resource[];
  color: string;
}

export default function ResourceLinks({ resources, color }: ResourceLinksProps) {
  if (!resources || resources.length === 0) return null;

  return (
    <div>
      <h3 className="text-lg font-bold mb-3" style={{ color: '#1A1A1A' }}>
        Keep Going
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {resources.map((r, i) => {
          const Icon = getIcon(r.icon);
          return (
            <a
              key={i}
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3.5 rounded-xl border transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
              style={{ borderColor: '#F0F0F0', backgroundColor: '#FFFFFF' }}
            >
              <div
                className="flex items-center justify-center w-10 h-10 rounded-lg shrink-0"
                style={{ backgroundColor: `${color}14` }}
              >
                <Icon size={18} style={{ color }} />
              </div>
              <span className="text-sm font-medium flex-1" style={{ color: '#1A1A1A' }}>
                {r.label}
              </span>
              <ExternalLink size={14} style={{ color: '#CCCCCC' }} />
            </a>
          );
        })}
      </div>
    </div>
  );
}
