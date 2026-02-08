import { CheckCircle } from 'lucide-react';

interface OutcomeBoxProps {
  outcome: string;
}

export default function OutcomeBox({ outcome }: OutcomeBoxProps) {
  return (
    <div
      className="flex items-start gap-2.5 px-3.5 py-3 rounded-[10px]"
      style={{ backgroundColor: '#FAFAF8' }}
    >
      <CheckCircle size={18} className="shrink-0 mt-0.5" style={{ color: '#2E7D32' }} />
      <p className="text-sm leading-snug" style={{ color: '#1A1A1A' }}>
        <span className="font-semibold">After 90 min:</span> {outcome}
      </p>
    </div>
  );
}
