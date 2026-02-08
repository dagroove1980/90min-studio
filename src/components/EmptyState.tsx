import { Heart } from 'lucide-react';

interface EmptyStateProps {
  title?: string;
  message?: string;
}

export default function EmptyState({
  title = 'Nothing here yet',
  message = 'Start exploring skills and save the ones you want to try.',
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
      <div
        className="flex items-center justify-center w-16 h-16 rounded-2xl mb-4"
        style={{ backgroundColor: 'rgba(230, 57, 70, 0.08)' }}
      >
        <Heart size={28} style={{ color: '#E63946' }} />
      </div>
      <h3 className="text-lg font-semibold mb-1" style={{ color: '#1A1A1A' }}>
        {title}
      </h3>
      <p className="text-sm max-w-xs" style={{ color: '#999999' }}>
        {message}
      </p>
    </div>
  );
}
