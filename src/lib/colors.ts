import type { Category, Difficulty } from '@/types/skill';

export const categoryColors: Record<Category, { bg: string; text: string }> = {
  music: { bg: '#EDE7F6', text: '#5C6BC0' },
  cooking: { bg: '#FFF3E0', text: '#E65100' },
  tech: { bg: '#E0F2F1', text: '#00897B' },
  finance: { bg: '#E3F2FD', text: '#1565C0' },
  fitness: { bg: '#E8F5E9', text: '#2E7D32' },
  life: { bg: '#E0F7FA', text: '#00838F' },
  creative: { bg: '#F3E5F5', text: '#7B1FA2' },
  language: { bg: '#FFF8E1', text: '#F57F17' },
  social: { bg: '#FCE4EC', text: '#C2185B' },
  style: { bg: '#F3E5F5', text: '#6A1B9A' },
  outdoors: { bg: '#E8F5E9', text: '#33691E' },
  mindset: { bg: '#E8EAF6', text: '#283593' },
  games: { bg: '#FFF3E0', text: '#EF6C00' },
};

export const difficultyColors: Record<Difficulty, { bg: string; text: string }> = {
  beginner: { bg: '#E8F5E9', text: '#2E7D32' },
  intermediate: { bg: '#FFF8E1', text: '#F57F17' },
  advanced: { bg: '#FFEBEE', text: '#C62828' },
};

export function hexToRgba(hex: string, opacity: number): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}
