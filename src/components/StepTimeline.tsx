import type { Step } from '@/types/skill';
import StepIcon from './StepIcon';

interface StepTimelineProps {
  steps: Step[];
  color: string;
  size?: 'card' | 'detail';
}

export default function StepTimeline({ steps, color, size = 'card' }: StepTimelineProps) {
  const iconSize = size === 'detail' ? 'md' : 'sm';
  const textSize = size === 'detail' ? 'text-base' : 'text-sm';
  const labelSize = size === 'detail' ? 'text-sm' : 'text-xs';
  const gap = size === 'detail' ? 'gap-5' : 'gap-3';

  return (
    <div className={`flex flex-col ${gap}`}>
      {steps.map((step, i) => (
        <div key={i} className="flex gap-3 relative">
          {/* Connector line */}
          {i < steps.length - 1 && (
            <div
              className="absolute left-[18px] top-[42px] w-[2px]"
              style={{
                backgroundColor: '#F0F0F0',
                height: size === 'detail' ? 'calc(100% - 20px)' : 'calc(100% - 14px)',
              }}
            />
          )}
          <div className="relative z-10">
            <StepIcon name={step.icon} color={color} size={iconSize} />
          </div>
          <div className="flex-1 min-w-0 pt-0.5">
            <div className="flex items-center gap-2 mb-0.5">
              <span className={`${labelSize} font-semibold`} style={{ color: '#1A1A1A' }}>
                {step.label}
              </span>
              <span
                className="text-[10px] font-medium px-2 py-0.5 rounded-full"
                style={{
                  backgroundColor: `${color}14`,
                  color: color,
                }}
              >
                {step.time}
              </span>
            </div>
            <p className={`${textSize} leading-relaxed`} style={{ color: '#666666' }}>
              {step.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
