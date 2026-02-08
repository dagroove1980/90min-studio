import { getIcon } from '@/lib/icons';
import { hexToRgba } from '@/lib/colors';

interface HeroIconProps {
  name: string;
  color: string;
  size?: 'card' | 'detail';
}

const sizes = {
  card: { container: 52, icon: 24, radius: 14 },
  detail: { container: 72, icon: 32, radius: 16 },
};

export default function HeroIcon({ name, color, size = 'card' }: HeroIconProps) {
  const Icon = getIcon(name);
  const s = sizes[size];

  return (
    <div
      className="flex items-center justify-center shrink-0"
      style={{
        width: s.container,
        height: s.container,
        borderRadius: s.radius,
        backgroundColor: hexToRgba(color, 0.12),
      }}
    >
      <Icon size={s.icon} style={{ color }} />
    </div>
  );
}
