import type { Category, Difficulty, Setting } from '@/types/skill';

export const ALL_CATEGORIES: Category[] = [
  'music',
  'cooking',
  'tech',
  'finance',
  'fitness',
  'life',
  'creative',
  'language',
  'social',
  'style',
  'outdoors',
  'mindset',
  'games'
];

export const ALL_DIFFICULTIES: Difficulty[] = [
  'beginner',
  'intermediate',
  'advanced'
];

export const ALL_SETTINGS: Setting[] = [
  'home',
  'outdoor',
  'gym',
  'anywhere'
];

export const categoryLabels: Record<Category, string> = {
  music: 'Music',
  cooking: 'Cooking',
  tech: 'Tech',
  finance: 'Finance',
  fitness: 'Fitness & Health',
  life: 'Life Skills',
  creative: 'Creative',
  language: 'Language',
  social: 'Social & Communication',
  style: 'Style & Grooming',
  outdoors: 'Outdoors & Nature',
  mindset: 'Mindset & Productivity',
  games: 'Games & Fun'
};

export const difficultyLabels: Record<Difficulty, string> = {
  beginner: 'Beginner',
  intermediate: 'Intermediate',
  advanced: 'Advanced'
};

export const settingLabels: Record<Setting, string> = {
  home: 'Home',
  outdoor: 'Outdoor',
  gym: 'Gym',
  anywhere: 'Anywhere'
};

export const categoryIcons: Record<Category, string> = {
  music: 'music',
  cooking: 'utensils',
  tech: 'code',
  finance: 'trending-up',
  fitness: 'dumbbell',
  life: 'wrench',
  creative: 'palette',
  language: 'globe',
  social: 'message-square',
  style: 'shirt',
  outdoors: 'mountain',
  mindset: 'brain',
  games: 'gamepad'
};

export const SUBCATEGORIES: Record<Category, string[]> = {
  music: [
    'guitar',
    'piano',
    'ukulele',
    'drums',
    'singing',
    'harmonica',
    'music-theory',
    'beat-making',
    'music-production',
    'dj-basics'
  ],
  cooking: [
    'knife-skills',
    'pasta',
    'bread-baking',
    'stir-fry',
    'sushi',
    'breakfast',
    'grilling',
    'desserts',
    'cocktails',
    'meal-prep'
  ],
  tech: [
    'web-development',
    'python',
    'javascript',
    'ai-tools',
    'spreadsheets',
    'video-editing',
    'graphic-design',
    'automation',
    'cybersecurity-basics',
    'no-code-tools'
  ],
  finance: [
    'budgeting',
    'investing-basics',
    'crypto',
    'side-income',
    'taxes',
    'credit-score',
    'real-estate-basics',
    'retirement-planning',
    'passive-income',
    'negotiation'
  ],
  fitness: [
    'bodyweight-training',
    'running',
    'yoga',
    'stretching',
    'hiit',
    'strength-training',
    'martial-arts-basics',
    'dance',
    'swimming',
    'nutrition-basics'
  ],
  life: [
    'home-repair',
    'car-maintenance',
    'sewing',
    'cleaning-hacks',
    'organization',
    'time-management',
    'first-aid',
    'gardening',
    'laundry-care',
    'home-security'
  ],
  creative: [
    'drawing',
    'painting',
    'photography',
    'writing',
    'calligraphy',
    'origami',
    'pottery',
    'flower-arranging',
    'candle-making',
    'woodworking-basics'
  ],
  language: [
    'spanish-basics',
    'french-basics',
    'mandarin-basics',
    'japanese-basics',
    'sign-language',
    'pronunciation',
    'vocabulary-building',
    'conversation-practice',
    'grammar-essentials',
    'accent-training'
  ],
  social: [
    'public-speaking',
    'networking',
    'active-listening',
    'conflict-resolution',
    'body-language',
    'storytelling',
    'small-talk',
    'dating-confidence',
    'interview-skills',
    'persuasion'
  ],
  style: [
    'hair-styling',
    'skincare-routine',
    'wardrobe-basics',
    'color-coordination',
    'accessorizing',
    'grooming',
    'shoe-care',
    'fragrance',
    'posture',
    'dressing-for-occasion'
  ],
  outdoors: [
    'hiking-basics',
    'camping',
    'fire-building',
    'fishing',
    'navigation',
    'knot-tying',
    'foraging',
    'wildlife-identification',
    'survival-basics',
    'rock-climbing-basics'
  ],
  mindset: [
    'meditation',
    'journaling',
    'goal-setting',
    'habit-building',
    'speed-reading',
    'memory-techniques',
    'focus-training',
    'stress-management',
    'decision-making',
    'note-taking'
  ],
  games: [
    'chess',
    'poker',
    'card-games',
    'pool',
    'darts',
    'rubiks-cube',
    'magic-tricks',
    'juggling',
    'board-game-strategy',
    'trivia-mastery'
  ]
};

export const subcategoryLabels: Record<string, string> = {
  // Music
  'guitar': 'Guitar',
  'piano': 'Piano',
  'ukulele': 'Ukulele',
  'drums': 'Drums',
  'singing': 'Singing',
  'harmonica': 'Harmonica',
  'music-theory': 'Music Theory',
  'beat-making': 'Beat Making',
  'music-production': 'Music Production',
  'dj-basics': 'DJ Basics',

  // Cooking
  'knife-skills': 'Knife Skills',
  'pasta': 'Pasta',
  'bread-baking': 'Bread Baking',
  'stir-fry': 'Stir Fry',
  'sushi': 'Sushi',
  'breakfast': 'Breakfast',
  'grilling': 'Grilling',
  'desserts': 'Desserts',
  'cocktails': 'Cocktails',
  'meal-prep': 'Meal Prep',

  // Tech
  'web-development': 'Web Development',
  'python': 'Python',
  'javascript': 'JavaScript',
  'ai-tools': 'AI Tools',
  'spreadsheets': 'Spreadsheets',
  'video-editing': 'Video Editing',
  'graphic-design': 'Graphic Design',
  'automation': 'Automation',
  'cybersecurity-basics': 'Cybersecurity Basics',
  'no-code-tools': 'No-Code Tools',

  // Finance
  'budgeting': 'Budgeting',
  'investing-basics': 'Investing Basics',
  'crypto': 'Crypto',
  'side-income': 'Side Income',
  'taxes': 'Taxes',
  'credit-score': 'Credit Score',
  'real-estate-basics': 'Real Estate Basics',
  'retirement-planning': 'Retirement Planning',
  'passive-income': 'Passive Income',
  'negotiation': 'Negotiation',

  // Fitness
  'bodyweight-training': 'Bodyweight Training',
  'running': 'Running',
  'yoga': 'Yoga',
  'stretching': 'Stretching',
  'hiit': 'HIIT',
  'strength-training': 'Strength Training',
  'martial-arts-basics': 'Martial Arts Basics',
  'dance': 'Dance',
  'swimming': 'Swimming',
  'nutrition-basics': 'Nutrition Basics',

  // Life
  'home-repair': 'Home Repair',
  'car-maintenance': 'Car Maintenance',
  'sewing': 'Sewing',
  'cleaning-hacks': 'Cleaning Hacks',
  'organization': 'Organization',
  'time-management': 'Time Management',
  'first-aid': 'First Aid',
  'gardening': 'Gardening',
  'laundry-care': 'Laundry Care',
  'home-security': 'Home Security',

  // Creative
  'drawing': 'Drawing',
  'painting': 'Painting',
  'photography': 'Photography',
  'writing': 'Writing',
  'calligraphy': 'Calligraphy',
  'origami': 'Origami',
  'pottery': 'Pottery',
  'flower-arranging': 'Flower Arranging',
  'candle-making': 'Candle Making',
  'woodworking-basics': 'Woodworking Basics',

  // Language
  'spanish-basics': 'Spanish Basics',
  'french-basics': 'French Basics',
  'mandarin-basics': 'Mandarin Basics',
  'japanese-basics': 'Japanese Basics',
  'sign-language': 'Sign Language',
  'pronunciation': 'Pronunciation',
  'vocabulary-building': 'Vocabulary Building',
  'conversation-practice': 'Conversation Practice',
  'grammar-essentials': 'Grammar Essentials',
  'accent-training': 'Accent Training',

  // Social
  'public-speaking': 'Public Speaking',
  'networking': 'Networking',
  'active-listening': 'Active Listening',
  'conflict-resolution': 'Conflict Resolution',
  'body-language': 'Body Language',
  'storytelling': 'Storytelling',
  'small-talk': 'Small Talk',
  'dating-confidence': 'Dating Confidence',
  'interview-skills': 'Interview Skills',
  'persuasion': 'Persuasion',

  // Style
  'hair-styling': 'Hair Styling',
  'skincare-routine': 'Skincare Routine',
  'wardrobe-basics': 'Wardrobe Basics',
  'color-coordination': 'Color Coordination',
  'accessorizing': 'Accessorizing',
  'grooming': 'Grooming',
  'shoe-care': 'Shoe Care',
  'fragrance': 'Fragrance',
  'posture': 'Posture',
  'dressing-for-occasion': 'Dressing for Occasion',

  // Outdoors
  'hiking-basics': 'Hiking Basics',
  'camping': 'Camping',
  'fire-building': 'Fire Building',
  'fishing': 'Fishing',
  'navigation': 'Navigation',
  'knot-tying': 'Knot Tying',
  'foraging': 'Foraging',
  'wildlife-identification': 'Wildlife Identification',
  'survival-basics': 'Survival Basics',
  'rock-climbing-basics': 'Rock Climbing Basics',

  // Mindset
  'meditation': 'Meditation',
  'journaling': 'Journaling',
  'goal-setting': 'Goal Setting',
  'habit-building': 'Habit Building',
  'speed-reading': 'Speed Reading',
  'memory-techniques': 'Memory Techniques',
  'focus-training': 'Focus Training',
  'stress-management': 'Stress Management',
  'decision-making': 'Decision Making',
  'note-taking': 'Note Taking',

  // Games
  'chess': 'Chess',
  'poker': 'Poker',
  'card-games': 'Card Games',
  'pool': 'Pool',
  'darts': 'Darts',
  'rubiks-cube': 'Rubik\'s Cube',
  'magic-tricks': 'Magic Tricks',
  'juggling': 'Juggling',
  'board-game-strategy': 'Board Game Strategy',
  'trivia-mastery': 'Trivia Mastery'
};

export const categoryPageTitles: Record<Category, string> = {
  music: 'Learn Music in 90 Minutes — Beginner Instrument Plans',
  cooking: 'Learn Cooking in 90 Minutes — Quick Recipe Mastery',
  tech: 'Learn Tech Skills in 90 Minutes — Practical Digital Skills',
  finance: 'Learn Finance in 90 Minutes — Money Management Basics',
  fitness: 'Learn Fitness in 90 Minutes — Quick Workout Plans',
  life: 'Learn Life Skills in 90 Minutes — Essential Everyday Skills',
  creative: 'Learn Creative Skills in 90 Minutes — Express Your Creativity',
  language: 'Learn Language Basics in 90 Minutes — Start Speaking Today',
  social: 'Learn Social Skills in 90 Minutes — Communication Mastery',
  style: 'Learn Style & Grooming in 90 Minutes — Look Your Best',
  outdoors: 'Learn Outdoor Skills in 90 Minutes — Nature & Adventure',
  mindset: 'Learn Mindset Skills in 90 Minutes — Mental Performance',
  games: 'Learn Games in 90 Minutes — Win More, Have Fun'
};

export const categoryIntros: Record<Category, string> = {
  music: 'Music is one of life\'s greatest joys, and you don\'t need years of lessons to start making it. Whether you want to strum a few chords on guitar, play a simple melody on piano, or understand the basics of music theory, 90 minutes is enough to get you started. These plans are designed for absolute beginners who want to experience the thrill of creating music quickly. No prior experience needed—just curiosity and a willingness to try. Pick an instrument, follow the plan, and surprise yourself with what you can do in an afternoon.',

  cooking: 'Cooking doesn\'t have to be complicated or time-consuming. With the right techniques and a simple recipe, you can create delicious meals that impress yourself and others. These 90-minute plans teach you fundamental cooking skills like knife work, flavor building, and timing—all while making something you\'ll actually want to eat. Whether you\'re a complete beginner or just want to expand your repertoire, these plans break down cooking into clear, achievable steps. Stop relying on takeout and delivery. Learn to cook with confidence.',

  tech: 'Technology powers everything today, and knowing even basic tech skills can transform your productivity and career prospects. These 90-minute plans teach you practical digital skills that you can use immediately—whether it\'s building a simple website, automating repetitive tasks, or understanding how AI tools work. No computer science degree required. We focus on what actually matters: skills that save you time, make you more valuable, and open up new possibilities. Start with one plan and see how quickly you can level up your digital literacy.',

  finance: 'Financial literacy is one of the most important life skills, yet most people never learn the basics. These 90-minute plans teach you practical money management—from creating a budget that actually works to understanding how investing works. Whether you\'re trying to pay off debt, save for a goal, or start building wealth, these plans give you actionable frameworks you can implement immediately. Money doesn\'t have to be stressful or confusing. With the right knowledge, you can take control of your financial future starting today.',

  fitness: 'Getting fit doesn\'t require expensive gym memberships or complicated programs. These 90-minute plans teach you effective workouts you can do anywhere—from bodyweight exercises at home to proper running form to foundational yoga poses. Whether you\'re just starting out or getting back into shape, these plans focus on proper technique, realistic progressions, and building sustainable habits. Fitness is a skill you can learn, just like anything else. Start with one plan and discover how good movement feels.',

  life: 'Life skills are the practical abilities that make everyday life easier, yet most of us never formally learn them. These 90-minute plans teach you essential skills like basic home repair, car maintenance, proper organization, and emergency first aid. These aren\'t just "nice to have"—they\'re skills that save you money, reduce stress, and make you more self-reliant. Whether you\'re moving into your first apartment or just tired of calling someone else for every little thing, these plans give you practical knowledge you\'ll use for years.',

  creative: 'Everyone has creativity inside them—it just needs the right conditions to emerge. These 90-minute plans introduce you to creative skills like drawing, painting, photography, and writing through structured exercises that actually work. You don\'t need natural talent or expensive supplies. You just need to start. Whether you want to express yourself artistically, document your life visually, or explore a new creative outlet, these plans remove the intimidation and give you a clear starting point. Create something today.',

  language: 'Learning a language opens up new worlds—new people, new cultures, new ways of thinking. These 90-minute plans focus on practical conversational skills you can use immediately, not textbook grammar. Whether you\'re learning Spanish for travel, French for work, or just want to understand the basics of a new language, these plans teach you high-frequency phrases, proper pronunciation, and cultural context. You won\'t be fluent after 90 minutes, but you\'ll have a solid foundation and the confidence to keep learning.',

  social: 'Social skills are some of the most valuable abilities you can develop, affecting everything from your career to your relationships to your overall happiness. These 90-minute plans teach you practical communication techniques—from public speaking to active listening to reading body language. Whether you\'re naturally introverted or just want to improve your social confidence, these plans give you frameworks and strategies you can practice immediately. Great relationships aren\'t just luck—they\'re built on skills you can learn.',

  style: 'How you present yourself affects how others perceive you and how you feel about yourself. These 90-minute plans teach you practical style and grooming fundamentals—from building a versatile wardrobe to proper skincare routines to understanding color coordination. This isn\'t about following trends or spending lots of money. It\'s about understanding the basics of personal presentation and developing your own style with confidence. Whether you\'re preparing for job interviews or just want to look more put-together, these plans give you the knowledge to level up your appearance.',

  outdoors: 'Outdoor skills connect you with nature and build self-reliance in ways that modern life often misses. These 90-minute plans teach you practical outdoor abilities like hiking safely, building a fire, basic navigation, and essential camping skills. Whether you\'re planning your first camping trip or just want to be more comfortable in nature, these plans focus on safety, proper technique, and respect for the environment. You don\'t need to be an experienced outdoorsperson—just a willingness to learn and explore.',

  mindset: 'Your mindset and mental habits shape everything else in your life—your productivity, your relationships, your ability to achieve goals. These 90-minute plans teach you practical cognitive skills like meditation, effective goal-setting, speed reading, and stress management. These aren\'t abstract concepts—they\'re concrete techniques you can practice and improve. Whether you want to be more focused, more organized, or simply more present in your life, these plans give you tools that compound over time. Start training your mind today.',

  games: 'Games are more than just entertainment—they\'re opportunities to develop strategic thinking, improve memory, and build social connections. These 90-minute plans teach you the fundamentals of classic games like chess and poker, party skills like magic tricks and juggling, and puzzle-solving abilities like solving a Rubik\'s Cube. Whether you want to impress friends, exercise your brain, or just have more fun at social gatherings, these plans break down complex skills into learnable steps. Play is learning, and learning should be playful.'
};

export const difficultyPageTitles: Record<Difficulty, string> = {
  beginner: 'Beginner Skills — Start Learning in 90 Minutes',
  intermediate: 'Intermediate Skills — Level Up Your Abilities',
  advanced: 'Advanced Skills — Master Complex Techniques'
};

export const difficultyIntros: Record<Difficulty, string> = {
  beginner: 'Starting something new is always the hardest part. These beginner-level plans are designed for absolute newcomers who have little to no experience in a skill. Every plan breaks things down into clear, manageable steps—no confusing jargon, no assumptions about prior knowledge. We focus on building confidence through early wins and establishing proper fundamentals that will serve you as you continue learning. Whether you\'re picking up an instrument for the first time, learning to code, or trying a new physical activity, these plans meet you where you are and give you a solid foundation to build on.',

  intermediate: 'You\'ve got the basics down and you\'re ready to go deeper. These intermediate-level plans assume you have foundational knowledge and are ready to develop more refined techniques, tackle more complex challenges, and expand your capabilities. We focus on building versatility, improving efficiency, and connecting concepts you\'ve learned into more sophisticated applications. Whether you\'re advancing your technical skills, refining your creative abilities, or taking your fitness to the next level, these plans help you break through plateaus and continue progressing.',

  advanced: 'You\'re experienced and looking for serious challenges. These advanced-level plans are designed for people who have solid foundations and want to master complex techniques, develop professional-level skills, or push their abilities to new heights. We assume you understand the fundamentals and can handle sophisticated concepts, nuanced techniques, and demanding practice routines. Whether you\'re pursuing mastery, preparing for performance, or simply love deep learning, these plans will challenge you and expand what you thought was possible in 90 minutes.'
};

export const settingPageTitles: Record<Setting, string> = {
  home: 'Home Skills — Learn From Your Living Room',
  outdoor: 'Outdoor Skills — Nature & Adventure Plans',
  gym: 'Gym Skills — Maximize Your Workout Space',
  anywhere: 'Anywhere Skills — Learn On The Go'
};

export const settingIntros: Record<Setting, string> = {
  home: 'Your home is the perfect learning environment—comfortable, private, and convenient. These plans are designed to be done from the comfort of your living space, whether that\'s an apartment, house, or dorm room. No need to travel anywhere or worry about what others think. Whether you\'re learning to cook in your kitchen, practicing an instrument in your bedroom, or doing bodyweight exercises in your living room, these plans make the most of your personal space. The best learning environment is the one you\'re already in.',

  outdoor: 'Some skills are meant to be learned under open sky. These outdoor plans take you into nature—whether that\'s a local park, hiking trail, campground, or even just your backyard. We focus on skills that connect you with the natural world, build outdoor confidence, and develop practical abilities you can use on adventures. Whether you\'re learning to build a fire, navigate by landmarks, identify local plants, or simply move confidently through natural terrain, these plans help you become more comfortable and capable outside.',

  gym: 'The gym provides equipment, space, and an environment designed for physical development. These plans are specifically designed for gym settings—whether that\'s a commercial fitness center, school gym, or community recreation space. We focus on proper equipment use, effective workout structures, and techniques that take advantage of gym resources like weights, machines, and dedicated workout areas. Whether you\'re new to the gym or looking to optimize your time there, these plans help you train with purpose and confidence.',

  anywhere: 'The best skills are the ones you can practice wherever life takes you. These plans require minimal or no equipment and can be done in almost any setting—at home, in a park, in a hotel room, at a coffee shop, or during your commute. We focus on portable skills, mental techniques, and abilities that don\'t depend on special locations or gear. Whether you\'re traveling frequently, have an unpredictable schedule, or just value flexibility, these plans fit into your life however it looks today.'
};
