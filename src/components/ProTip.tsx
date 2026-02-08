import { Lightbulb } from 'lucide-react';

interface ProTipProps {
  tip: string;
  size?: 'card' | 'detail';
}

export default function ProTip({ tip, size = 'card' }: ProTipProps) {
  return (
    <div
      className={`border-l-3 pl-3.5 ${size === 'detail' ? 'py-3' : 'py-2'}`}
      style={{ borderColor: '#E63946' }}
    >
      <div className="flex items-center gap-1.5 mb-1">
        <Lightbulb size={14} style={{ color: '#E63946' }} />
        <span
          className="text-[10px] font-semibold tracking-[0.08em] uppercase"
          style={{ color: '#E63946' }}
        >
          Pro Tip
        </span>
      </div>
      <p
        className={`italic leading-relaxed ${size === 'detail' ? 'text-base' : 'text-sm'}`}
        style={{ color: '#555555' }}
      >
        {tip}
      </p>
    </div>
  );
}
