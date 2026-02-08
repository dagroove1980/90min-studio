interface NeedsListProps {
  needs: string[];
}

export default function NeedsList({ needs }: NeedsListProps) {
  return (
    <div className="pt-4 border-t" style={{ borderColor: '#F0F0F0' }}>
      <p
        className="text-[10px] font-semibold tracking-[0.08em] uppercase mb-2"
        style={{ color: '#999999' }}
      >
        What you need
      </p>
      <div className="flex flex-wrap gap-1.5">
        {needs.map((item) => (
          <span
            key={item}
            className="text-xs px-2.5 py-1 rounded-full"
            style={{ backgroundColor: '#F5F5F5', color: '#666666' }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
