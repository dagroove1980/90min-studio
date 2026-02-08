import { getIcon } from '@/lib/icons';
import { hexToRgba } from '@/lib/colors';

interface StepIconProps {
  name: string;
  color: string;
  size?: 'sm' | 'md' | 'lg';
}

const sizes = {
  sm: { container: 38, icon: 18, radius: 10 },
  md: { container: 48, icon: 22, radius: 12 },
  lg: { container: 72, icon: 32, radius: 16 },
};

export default function StepIcon({ name, color, size = 'sm' }: StepIconProps) {
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
