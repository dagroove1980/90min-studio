import type { Skill, Category, Difficulty, Setting, SortOption } from '@/types/skill';
import skillsData from '../../data/skills.json';

const skills: Skill[] = skillsData as Skill[];

export function getAllSkills(): Skill[] {
  return skills;
}

export function getSkillById(id: string): Skill | undefined {
  return skills.find((s) => s.id === id);
}

interface FilterOptions {
  category?: Category;
  subcategory?: string;
  difficulty?: Difficulty;
  setting?: Setting;
}

export function filterSkills(options: FilterOptions): Skill[] {
  return skills.filter((s) => {
    if (options.category && s.category !== options.category) return false;
    if (options.subcategory && s.subcategory !== options.subcategory) return false;
    if (options.difficulty && s.difficulty !== options.difficulty) return false;
    if (options.setting && s.setting !== options.setting) return false;
    return true;
  });
}

export function sortSkills(list: Skill[], sort: SortOption): Skill[] {
  const copy = [...list];
  switch (sort) {
    case 'popular':
      return copy.sort((a, b) => b.likes - a.likes);
    case 'new':
      return copy.sort(
        (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
    case 'random':
      for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
      }
      return copy;
    default:
      return copy;
  }
}

export function getSimilarSkills(skill: Skill, count = 4): Skill[] {
  const others = skills.filter((s) => s.id !== skill.id);
  const scored = others.map((s) => {
    let score = 0;
    if (s.category === skill.category) score += 3;
    if (s.subcategory === skill.subcategory) score += 2;
    if (s.difficulty === skill.difficulty) score += 1;
    if (s.setting === skill.setting) score += 1;
    return { skill: s, score };
  });
  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, count).map((s) => s.skill);
}

export function getRandomSkill(excludeId?: string, fromSkills?: Skill[]): Skill {
  const pool = (fromSkills || skills).filter((s) => s.id !== excludeId);
  return pool[Math.floor(Math.random() * pool.length)];
}

export function getValidSubcategoryPages(): { category: Category; sub: string }[] {
  const combos: { category: Category; sub: string }[] = [];
  const grouped = new Map<string, number>();

  for (const s of skills) {
    const key = `${s.category}/${s.subcategory}`;
    grouped.set(key, (grouped.get(key) || 0) + 1);
  }

  for (const [key, count] of grouped) {
    if (count >= 3) {
      const [category, sub] = key.split('/');
      combos.push({ category: category as Category, sub });
    }
  }

  return combos;
}

export function getValidCombinedFilters(): { category: Category; sub: string }[] {
  const combos: { category: Category; sub: string }[] = [];

  // Category + difficulty combos
  const difficulties: Difficulty[] = ['beginner', 'intermediate', 'advanced'];
  for (const cat of [...new Set(skills.map((s) => s.category))]) {
    for (const diff of difficulties) {
      const count = skills.filter((s) => s.category === cat && s.difficulty === diff).length;
      if (count >= 4) {
        combos.push({ category: cat, sub: diff });
      }
    }
  }

  return combos;
}
