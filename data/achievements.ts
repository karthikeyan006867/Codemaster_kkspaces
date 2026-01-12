export interface Achievement {
  id: string
  title: string
  description: string
  icon: string
  category: 'Learning' | 'Streak' | 'Challenge' | 'Speed' | 'Perfect' | 'Language' | 'Social' | 'Special'
  points: number
  requirement: number
  rarity: 'Common' | 'Rare' | 'Epic' | 'Legendary' | 'Mythic'
  unlocked?: boolean
  progress?: number
}

export const achievements: Achievement[] = [
  // ========== LEARNING ACHIEVEMENTS ==========
  {
    id: 'first-lesson',
    title: 'First Steps',
    description: 'Complete your first lesson',
    icon: '🎓',
    category: 'Learning',
    points: 10,
    requirement: 1,
    rarity: 'Common'
  },
  {
    id: 'lessons-10',
    title: 'Eager Learner',
    description: 'Complete 10 lessons',
    icon: '📚',
    category: 'Learning',
    points: 50,
    requirement: 10,
    rarity: 'Common'
  },
  {
    id: 'lessons-50',
    title: 'Knowledge Seeker',
    description: 'Complete 50 lessons',
    icon: '🔍',
    category: 'Learning',
    points: 100,
    requirement: 50,
    rarity: 'Rare'
  },
  {
    id: 'lessons-100',
    title: 'Century Club',
    description: 'Complete 100 lessons',
    icon: '💯',
    category: 'Learning',
    points: 200,
    requirement: 100,
    rarity: 'Rare'
  },
  {
    id: 'lessons-250',
    title: 'Master Student',
    description: 'Complete 250 lessons',
    icon: '🎖️',
    category: 'Learning',
    points: 500,
    requirement: 250,
    rarity: 'Epic'
  },
  {
    id: 'lessons-500',
    title: 'Coding Virtuoso',
    description: 'Complete 500 lessons',
    icon: '👑',
    category: 'Learning',
    points: 1000,
    requirement: 500,
    rarity: 'Epic'
  },
  {
    id: 'lessons-1000',
    title: 'Legendary Scholar',
    description: 'Complete 1000 lessons',
    icon: '🏆',
    category: 'Learning',
    points: 2500,
    requirement: 1000,
    rarity: 'Legendary'
  },
  {
    id: 'lessons-2000',
    title: 'Code Deity',
    description: 'Complete 2000 lessons',
    icon: '⚡',
    category: 'Learning',
    points: 5000,
    requirement: 2000,
    rarity: 'Mythic'
  },

  // ========== STREAK ACHIEVEMENTS ==========
  {
    id: 'streak-3',
    title: 'Getting Started',
    description: '3 day learning streak',
    icon: '🔥',
    category: 'Streak',
    points: 30,
    requirement: 3,
    rarity: 'Common'
  },
  {
    id: 'streak-7',
    title: 'Week Warrior',
    description: '7 day learning streak',
    icon: '📅',
    category: 'Streak',
    points: 70,
    requirement: 7,
    rarity: 'Common'
  },
  {
    id: 'streak-14',
    title: 'Two Week Champion',
    description: '14 day learning streak',
    icon: '🌟',
    category: 'Streak',
    points: 140,
    requirement: 14,
    rarity: 'Rare'
  },
  {
    id: 'streak-30',
    title: 'Monthly Dedication',
    description: '30 day learning streak',
    icon: '💪',
    category: 'Streak',
    points: 300,
    requirement: 30,
    rarity: 'Rare'
  },
  {
    id: 'streak-60',
    title: 'Unstoppable Force',
    description: '60 day learning streak',
    icon: '🚀',
    category: 'Streak',
    points: 600,
    requirement: 60,
    rarity: 'Epic'
  },
  {
    id: 'streak-90',
    title: 'Quarter Year Master',
    description: '90 day learning streak',
    icon: '💎',
    category: 'Streak',
    points: 900,
    requirement: 90,
    rarity: 'Epic'
  },
  {
    id: 'streak-180',
    title: 'Half Year Hero',
    description: '180 day learning streak',
    icon: '🎯',
    category: 'Streak',
    points: 1800,
    requirement: 180,
    rarity: 'Legendary'
  },
  {
    id: 'streak-365',
    title: 'Year of Excellence',
    description: '365 day learning streak',
    icon: '🌈',
    category: 'Streak',
    points: 3650,
    requirement: 365,
    rarity: 'Legendary'
  },
  {
    id: 'streak-500',
    title: 'Eternal Learner',
    description: '500 day learning streak',
    icon: '♾️',
    category: 'Streak',
    points: 5000,
    requirement: 500,
    rarity: 'Mythic'
  },
  {
    id: 'streak-1000',
    title: 'Millennium Mind',
    description: '1000 day learning streak',
    icon: '🌌',
    category: 'Streak',
    points: 10000,
    requirement: 1000,
    rarity: 'Mythic'
  },

  // ========== CHALLENGE ACHIEVEMENTS ==========
  {
    id: 'challenge-1',
    title: 'Challenge Accepted',
    description: 'Complete your first challenge',
    icon: '⚔️',
    category: 'Challenge',
    points: 20,
    requirement: 1,
    rarity: 'Common'
  },
  {
    id: 'challenge-10',
    title: 'Problem Solver',
    description: 'Complete 10 challenges',
    icon: '🧩',
    category: 'Challenge',
    points: 100,
    requirement: 10,
    rarity: 'Common'
  },
  {
    id: 'challenge-25',
    title: 'Challenge Hunter',
    description: 'Complete 25 challenges',
    icon: '🎯',
    category: 'Challenge',
    points: 250,
    requirement: 25,
    rarity: 'Rare'
  },
  {
    id: 'challenge-50',
    title: 'Algorithm Master',
    description: 'Complete 50 challenges',
    icon: '🧠',
    category: 'Challenge',
    points: 500,
    requirement: 50,
    rarity: 'Rare'
  },
  {
    id: 'challenge-100',
    title: 'Challenge Champion',
    description: 'Complete 100 challenges',
    icon: '🏅',
    category: 'Challenge',
    points: 1000,
    requirement: 100,
    rarity: 'Epic'
  },
  {
    id: 'challenge-250',
    title: 'Elite Competitor',
    description: 'Complete 250 challenges',
    icon: '⭐',
    category: 'Challenge',
    points: 2500,
    requirement: 250,
    rarity: 'Epic'
  },
  {
    id: 'challenge-500',
    title: 'Challenge Overlord',
    description: 'Complete 500 challenges',
    icon: '👹',
    category: 'Challenge',
    points: 5000,
    requirement: 500,
    rarity: 'Legendary'
  },

  // ========== SPEED ACHIEVEMENTS ==========
  {
    id: 'speed-easy-5min',
    title: 'Quick Thinker',
    description: 'Complete an easy challenge in under 5 minutes',
    icon: '⚡',
    category: 'Speed',
    points: 50,
    requirement: 1,
    rarity: 'Common'
  },
  {
    id: 'speed-medium-10min',
    title: 'Speed Demon',
    description: 'Complete a medium challenge in under 10 minutes',
    icon: '💨',
    category: 'Speed',
    points: 100,
    requirement: 1,
    rarity: 'Rare'
  },
  {
    id: 'speed-hard-20min',
    title: 'Lightning Fast',
    description: 'Complete a hard challenge in under 20 minutes',
    icon: '⚡⚡',
    category: 'Speed',
    points: 200,
    requirement: 1,
    rarity: 'Epic'
  },
  {
    id: 'speed-expert-30min',
    title: 'Code Flash',
    description: 'Complete an expert challenge in under 30 minutes',
    icon: '🌩️',
    category: 'Speed',
    points: 400,
    requirement: 1,
    rarity: 'Legendary'
  },
  {
    id: 'speed-10-challenges',
    title: 'Speed Runner',
    description: 'Complete 10 challenges before time limit',
    icon: '🏃',
    category: 'Speed',
    points: 300,
    requirement: 10,
    rarity: 'Rare'
  },
  {
    id: 'speed-25-challenges',
    title: 'Time Bender',
    description: 'Complete 25 challenges before time limit',
    icon: '⏰',
    category: 'Speed',
    points: 750,
    requirement: 25,
    rarity: 'Epic'
  },

  // ========== PERFECT SCORE ACHIEVEMENTS ==========
  {
    id: 'perfect-1',
    title: 'Flawless',
    description: 'Get a perfect score on a challenge',
    icon: '✨',
    category: 'Perfect',
    points: 50,
    requirement: 1,
    rarity: 'Common'
  },
  {
    id: 'perfect-10',
    title: 'Perfectionist',
    description: 'Get perfect scores on 10 challenges',
    icon: '💫',
    category: 'Perfect',
    points: 200,
    requirement: 10,
    rarity: 'Rare'
  },
  {
    id: 'perfect-25',
    title: 'Precision Master',
    description: 'Get perfect scores on 25 challenges',
    icon: '🎯',
    category: 'Perfect',
    points: 500,
    requirement: 25,
    rarity: 'Epic'
  },
  {
    id: 'perfect-50',
    title: 'Flawless Victor',
    description: 'Get perfect scores on 50 challenges',
    icon: '👌',
    category: 'Perfect',
    points: 1000,
    requirement: 50,
    rarity: 'Epic'
  },
  {
    id: 'perfect-100',
    title: 'Absolute Perfection',
    description: 'Get perfect scores on 100 challenges',
    icon: '🌟',
    category: 'Perfect',
    points: 2000,
    requirement: 100,
    rarity: 'Legendary'
  },

  // ========== LANGUAGE MASTERY ACHIEVEMENTS ==========
  {
    id: 'lang-complete-js',
    title: 'JavaScript Master',
    description: 'Complete all JavaScript lessons',
    icon: '🟨',
    category: 'Language',
    points: 500,
    requirement: 1,
    rarity: 'Epic'
  },
  {
    id: 'lang-complete-python',
    title: 'Python Master',
    description: 'Complete all Python lessons',
    icon: '🐍',
    category: 'Language',
    points: 500,
    requirement: 1,
    rarity: 'Epic'
  },
  {
    id: 'lang-complete-ts',
    title: 'TypeScript Master',
    description: 'Complete all TypeScript lessons',
    icon: '🔷',
    category: 'Language',
    points: 500,
    requirement: 1,
    rarity: 'Epic'
  },
  {
    id: 'lang-complete-react',
    title: 'React Master',
    description: 'Complete all React lessons',
    icon: '⚛️',
    category: 'Language',
    points: 500,
    requirement: 1,
    rarity: 'Epic'
  },
  {
    id: 'lang-complete-rust',
    title: 'Rust Master',
    description: 'Complete all Rust lessons',
    icon: '🦀',
    category: 'Language',
    points: 600,
    requirement: 1,
    rarity: 'Legendary'
  },
  {
    id: 'lang-complete-go',
    title: 'Go Master',
    description: 'Complete all Go lessons',
    icon: '🐹',
    category: 'Language',
    points: 600,
    requirement: 1,
    rarity: 'Legendary'
  },
  {
    id: 'polyglot-3',
    title: 'Polyglot',
    description: 'Master 3 programming languages',
    icon: '🌍',
    category: 'Language',
    points: 1000,
    requirement: 3,
    rarity: 'Epic'
  },
  {
    id: 'polyglot-5',
    title: 'Multi-Language Expert',
    description: 'Master 5 programming languages',
    icon: '🌎',
    category: 'Language',
    points: 2000,
    requirement: 5,
    rarity: 'Legendary'
  },
  {
    id: 'polyglot-10',
    title: 'Language Omniscient',
    description: 'Master 10 programming languages',
    icon: '🌏',
    category: 'Language',
    points: 5000,
    requirement: 10,
    rarity: 'Mythic'
  },
  {
    id: 'lang-all-frontend',
    title: 'Frontend Guru',
    description: 'Master HTML, CSS, JavaScript, and React',
    icon: '🎨',
    category: 'Language',
    points: 1500,
    requirement: 4,
    rarity: 'Legendary'
  },
  {
    id: 'lang-all-backend',
    title: 'Backend Wizard',
    description: 'Master Python, Node.js, SQL, and Go',
    icon: '⚙️',
    category: 'Language',
    points: 1500,
    requirement: 4,
    rarity: 'Legendary'
  },
  {
    id: 'lang-full-stack',
    title: 'Full Stack Titan',
    description: 'Master all frontend and backend technologies',
    icon: '🔥',
    category: 'Language',
    points: 3000,
    requirement: 8,
    rarity: 'Mythic'
  },

  // ========== SPECIAL ACHIEVEMENTS ==========
  {
    id: 'early-bird',
    title: 'Early Bird',
    description: 'Complete a lesson before 6 AM',
    icon: '🌅',
    category: 'Special',
    points: 100,
    requirement: 1,
    rarity: 'Rare'
  },
  {
    id: 'night-owl',
    title: 'Night Owl',
    description: 'Complete a lesson after midnight',
    icon: '🦉',
    category: 'Special',
    points: 100,
    requirement: 1,
    rarity: 'Rare'
  },
  {
    id: 'weekend-warrior',
    title: 'Weekend Warrior',
    description: 'Complete 10 lessons on weekends',
    icon: '🎖️',
    category: 'Special',
    points: 200,
    requirement: 10,
    rarity: 'Rare'
  },
  {
    id: 'daily-dedication',
    title: 'Daily Dedication',
    description: 'Complete at least 1 lesson every day for a week',
    icon: '📆',
    category: 'Special',
    points: 150,
    requirement: 7,
    rarity: 'Rare'
  },
  {
    id: 'marathon-10',
    title: 'Coding Marathon',
    description: 'Complete 10 lessons in one day',
    icon: '🏃‍♂️',
    category: 'Special',
    points: 300,
    requirement: 10,
    rarity: 'Epic'
  },
  {
    id: 'marathon-25',
    title: 'Ultra Marathon',
    description: 'Complete 25 lessons in one day',
    icon: '🏃‍♀️',
    category: 'Special',
    points: 750,
    requirement: 25,
    rarity: 'Legendary'
  },
  {
    id: 'first-blood',
    title: 'First Blood',
    description: 'Be first to complete a newly released lesson',
    icon: '🩸',
    category: 'Special',
    points: 250,
    requirement: 1,
    rarity: 'Epic'
  },
  {
    id: 'bug-hunter',
    title: 'Bug Hunter',
    description: 'Report 5 bugs or issues',
    icon: '🐛',
    category: 'Special',
    points: 200,
    requirement: 5,
    rarity: 'Rare'
  },
  {
    id: 'helper',
    title: 'Community Helper',
    description: 'Help 10 other learners',
    icon: '🤝',
    category: 'Social',
    points: 300,
    requirement: 10,
    rarity: 'Epic'
  },
  {
    id: 'comeback-kid',
    title: 'Comeback Kid',
    description: 'Restart learning after 30 day break',
    icon: '💪',
    category: 'Special',
    points: 150,
    requirement: 1,
    rarity: 'Rare'
  },
  {
    id: 'explorer',
    title: 'Explorer',
    description: 'Try lessons from 10 different languages',
    icon: '🗺️',
    category: 'Special',
    points: 250,
    requirement: 10,
    rarity: 'Rare'
  },
  {
    id: 'completionist',
    title: 'Completionist',
    description: 'Complete all lessons in a course before moving to next',
    icon: '✅',
    category: 'Special',
    points: 400,
    requirement: 1,
    rarity: 'Epic'
  },
  {
    id: 'no-hints',
    title: 'Self Sufficient',
    description: 'Complete 25 lessons without using hints',
    icon: '🧠',
    category: 'Special',
    points: 500,
    requirement: 25,
    rarity: 'Epic'
  },
  {
    id: 'speedster-week',
    title: 'Speedster',
    description: 'Complete a week of lessons in under 30 minutes total',
    icon: '🚄',
    category: 'Speed',
    points: 600,
    requirement: 7,
    rarity: 'Legendary'
  },

  // ========== POINT MILESTONES ==========
  {
    id: 'points-1k',
    title: '1K Points',
    description: 'Earn 1,000 points',
    icon: '💰',
    category: 'Learning',
    points: 100,
    requirement: 1000,
    rarity: 'Common'
  },
  {
    id: 'points-5k',
    title: '5K Points',
    description: 'Earn 5,000 points',
    icon: '💵',
    category: 'Learning',
    points: 250,
    requirement: 5000,
    rarity: 'Rare'
  },
  {
    id: 'points-10k',
    title: '10K Points',
    description: 'Earn 10,000 points',
    icon: '💸',
    category: 'Learning',
    points: 500,
    requirement: 10000,
    rarity: 'Epic'
  },
  {
    id: 'points-25k',
    title: '25K Points',
    description: 'Earn 25,000 points',
    icon: '💎',
    category: 'Learning',
    points: 1000,
    requirement: 25000,
    rarity: 'Epic'
  },
  {
    id: 'points-50k',
    title: '50K Points',
    description: 'Earn 50,000 points',
    icon: '👑',
    category: 'Learning',
    points: 2000,
    requirement: 50000,
    rarity: 'Legendary'
  },
  {
    id: 'points-100k',
    title: '100K Points',
    description: 'Earn 100,000 points',
    icon: '🏰',
    category: 'Learning',
    points: 5000,
    requirement: 100000,
    rarity: 'Legendary'
  },
  {
    id: 'points-250k',
    title: 'Quarter Million',
    description: 'Earn 250,000 points',
    icon: '🌠',
    category: 'Learning',
    points: 10000,
    requirement: 250000,
    rarity: 'Mythic'
  },
  {
    id: 'points-500k',
    title: 'Half Million',
    description: 'Earn 500,000 points',
    icon: '🎆',
    category: 'Learning',
    points: 20000,
    requirement: 500000,
    rarity: 'Mythic'
  },
  {
    id: 'points-1m',
    title: 'Millionaire',
    description: 'Earn 1,000,000 points',
    icon: '💫',
    category: 'Learning',
    points: 50000,
    requirement: 1000000,
    rarity: 'Mythic'
  },

  // ========== CATEGORY SPECIFIC ==========
  {
    id: 'algo-master-10',
    title: 'Algorithm Apprentice',
    description: 'Complete 10 algorithm challenges',
    icon: '🔢',
    category: 'Challenge',
    points: 150,
    requirement: 10,
    rarity: 'Rare'
  },
  {
    id: 'algo-master-25',
    title: 'Algorithm Expert',
    description: 'Complete 25 algorithm challenges',
    icon: '🧮',
    category: 'Challenge',
    points: 400,
    requirement: 25,
    rarity: 'Epic'
  },
  {
    id: 'web-dev-10',
    title: 'Web Developer',
    description: 'Complete 10 web development challenges',
    icon: '🌐',
    category: 'Challenge',
    points: 150,
    requirement: 10,
    rarity: 'Rare'
  },
  {
    id: 'data-struct-10',
    title: 'Data Structure Specialist',
    description: 'Complete 10 data structure challenges',
    icon: '🗂️',
    category: 'Challenge',
    points: 150,
    requirement: 10,
    rarity: 'Rare'
  },
  {
    id: 'string-master-15',
    title: 'String Manipulator',
    description: 'Complete 15 string challenges',
    icon: '📝',
    category: 'Challenge',
    points: 200,
    requirement: 15,
    rarity: 'Rare'
  },
  {
    id: 'array-master-15',
    title: 'Array Wizard',
    description: 'Complete 15 array challenges',
    icon: '📊',
    category: 'Challenge',
    points: 200,
    requirement: 15,
    rarity: 'Rare'
  },

  // ========== EASTER EGGS & FUN ==========
  {
    id: 'hello-world',
    title: 'Hello, World!',
    description: 'Write your first "Hello, World!" program',
    icon: '👋',
    category: 'Special',
    points: 25,
    requirement: 1,
    rarity: 'Common'
  },
  {
    id: 'fizzbuzz',
    title: 'FizzBuzz Master',
    description: 'Complete the classic FizzBuzz challenge',
    icon: '🔄',
    category: 'Challenge',
    points: 50,
    requirement: 1,
    rarity: 'Common'
  },
  {
    id: 'palindrome',
    title: 'Palindrome Pro',
    description: 'Complete palindrome challenges',
    icon: '🔁',
    category: 'Challenge',
    points: 75,
    requirement: 1,
    rarity: 'Common'
  },
  {
    id: 'binary',
    title: 'Binary Beast',
    description: 'Complete binary search challenge',
    icon: '🔍',
    category: 'Challenge',
    points: 100,
    requirement: 1,
    rarity: 'Rare'
  },
  {
    id: 'recursion',
    title: 'Recursion Inception',
    description: 'Complete 5 recursive solutions',
    icon: '🔁',
    category: 'Challenge',
    points: 200,
    requirement: 5,
    rarity: 'Epic'
  },
  {
    id: 'coffee-break',
    title: 'Coffee Break',
    description: 'Learn for exactly 15 minutes',
    icon: '☕',
    category: 'Special',
    points: 50,
    requirement: 1,
    rarity: 'Rare'
  },
  {
    id: 'lucky-7',
    title: 'Lucky Seven',
    description: 'Complete lesson #7 in 7 different languages',
    icon: '🎰',
    category: 'Special',
    points: 350,
    requirement: 7,
    rarity: 'Epic'
  },
  {
    id: 'wizard',
    title: 'Code Wizard',
    description: 'Complete all lessons in a month',
    icon: '🧙',
    category: 'Special',
    points: 1500,
    requirement: 1,
    rarity: 'Legendary'
  },
  {
    id: 'time-traveler',
    title: 'Time Traveler',
    description: 'Code in languages from 3 different decades',
    icon: '⏳',
    category: 'Language',
    points: 300,
    requirement: 3,
    rarity: 'Epic'
  },
  {
    id: 'dark-mode',
    title: 'Dark Mode Devotee',
    description: 'Use dark mode for 30 days straight',
    icon: '🌙',
    category: 'Special',
    points: 100,
    requirement: 30,
    rarity: 'Rare'
  }
];
