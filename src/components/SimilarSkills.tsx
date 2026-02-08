import type { Skill } from '@/types/skill';
import SkillCard from './SkillCard';

interface SimilarSkillsProps {
  skills: Skill[];
}

export default function SimilarSkills({ skills }: SimilarSkillsProps) {
  if (skills.length === 0) return null;

  return (
    <div>
      <h3 className="text-lg font-bold mb-4" style={{ color: '#1A1A1A' }}>
        You might also try
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skills.map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>
    </div>
  );
}
