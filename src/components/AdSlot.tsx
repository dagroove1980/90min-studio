interface AdSlotProps {
  position: 'homepage-leaderboard' | 'in-grid' | 'skill-detail' | 'filter-page';
}

export default function AdSlot({ position }: AdSlotProps) {
  return (
    <div
      className="w-full flex items-center justify-center rounded-xl border border-dashed"
      style={{
        borderColor: '#E0E0E0',
        backgroundColor: '#FAFAFA',
        minHeight: position === 'homepage-leaderboard' ? 90 : 250,
      }}
    >
      {/* Ad Slot: {position} */}
      <span className="text-xs" style={{ color: '#CCCCCC' }}>
        Ad
      </span>
    </div>
  );
}
