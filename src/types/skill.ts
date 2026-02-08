export type Category = 'music' | 'cooking' | 'tech' | 'finance' | 'fitness' | 'life' | 'creative' | 'language' | 'social' | 'style' | 'outdoors' | 'mindset' | 'games';

export type Difficulty = 'beginner' | 'intermediate' | 'advanced';

export type Setting = 'home' | 'outdoor' | 'gym' | 'anywhere';

export type SortOption = 'popular' | 'new' | 'random';

export interface Step {
  time: string;
  label: string;
  text: string;
  icon: string;
}

export interface Resource {
  label: string;
  url: string;
  icon: string;
}

export interface Skill {
  id: string;
  name: string;
  icon: string;
  color: string;
  category: Category;
  subcategory: string;
  difficulty: Difficulty;
  setting: Setting;
  outcome: string;
  needs: string[];
  steps: Step[];
  tip: string;
  resources: Resource[];
  likes: number;
  createdAt: string;
  featured: boolean;
}
