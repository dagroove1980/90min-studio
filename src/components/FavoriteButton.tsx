'use client';

import { useState, useEffect } from 'react';
import { Bookmark } from 'lucide-react';
import { isFavorite, toggleFavorite } from '@/lib/favorites';

interface FavoriteButtonProps {
  skillId: string;
}

export default function FavoriteButton({ skillId }: FavoriteButtonProps) {
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setSaved(isFavorite(skillId));
    const handler = () => setSaved(isFavorite(skillId));
    window.addEventListener('favorites-changed', handler);
    return () => window.removeEventListener('favorites-changed', handler);
  }, [skillId]);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nowSaved = toggleFavorite(skillId);
    setSaved(nowSaved);
  };

  return (
    <button
      onClick={handleClick}
      aria-label={saved ? 'Remove from favorites' : 'Add to favorites'}
      className="transition-colors"
    >
      <Bookmark
        size={18}
        fill={saved ? '#E63946' : 'none'}
        style={{ color: saved ? '#E63946' : '#CCCCCC' }}
      />
    </button>
  );
}
