// Gamification System Type Definitions

export interface Reward {
  type: 'badge' | 'xp' | 'item' | 'feature'
  value: string | number
  description: string
}

export interface TestCase {
  input: string
  expectedOutput: string
  passed?: boolean
}

export interface Badge {
  id: string
  name: string
  description: string
  icon: string
  rarity: 'common' | 'rare' | 'epic' | 'legendary'
  category: 'achievement' | 'milestone' | 'special' | 'seasonal'
  requirements: BadgeRequirement[]
  xpReward: number
  earnedBy: number
  earnedAt?: string
}

export interface BadgeRequirement {
  type: 'lessons' | 'points' | 'streak' | 'challenges' | 'social' | 'time' | 'perfect'
  value: number
  description: string
}

export interface Level {
  level: number
  title: string
  xpRequired: number
  xpTotal: number
  rewards: Reward[]
  features: string[]
  icon: string
}

export interface Leaderboard {
  id: string
  name: string
  type: 'global' | 'friends' | 'group' | 'course' | 'weekly' | 'monthly'
  metric: 'xp' | 'points' | 'lessons' | 'challenges' | 'streak'
  timeframe: 'all-time' | 'weekly' | 'monthly' | 'daily'
  entries: LeaderboardEntry[]
  updatedAt: string
}

export interface LeaderboardEntry {
  rank: number
  userId: string
  displayName: string
  avatar: string
  score: number
  change: number // rank change from previous period
  level: number
  badges: string[]
}

export interface Challenge {
  id: string
  title: string
  description: string
  type: 'daily' | 'weekly' | 'special' | 'community'
  difficulty: 'easy' | 'medium' | 'hard' | 'expert'
  category: string
  language: string
  problem: string
  starterCode: string
  solution: string
  testCases: TestCase[]
  hints: Hint[]
  constraints: string[]
  examples: ChallengeExample[]
  timeLimit?: number
  memoryLimit?: number
  submissions: number
  solved: number
  rating: number
  xpReward: number
  badges: string[]
  startDate?: string
  endDate?: string
  leaderboard?: ChallengeLeaderboard[]
}

export interface Hint {
  id: string
  content: string
  cost: number // XP cost to unlock
  unlocked: boolean
}

export interface ChallengeExample {
  input: string
  output: string
  explanation: string
}

export interface ChallengeLeaderboard {
  userId: string
  time: number
  memory: number
  language: string
  timestamp: string
  score: number
}

export interface Streak {
  current: number
  longest: number
  lastActivity: string
  freezesAvailable: number
  milestones: StreakMilestone[]
}

export interface StreakMilestone {
  days: number
  reward: Reward
  achieved: boolean
}

export interface Achievement {
  id: string
  name: string
  description: string
  icon: string
  category: string
  tier: number
  progress: number
  target: number
  unlocked: boolean
  unlockedAt?: string
  secret: boolean
  xpReward: number
}

export interface Competition {
  id: string
  name: string
  description: string
  type: '1v1' | 'team' | 'tournament' | 'battle-royale'
  status: 'upcoming' | 'active' | 'completed'
  participants: Participant[]
  challenges: string[]
  prizes: Prize[]
  rules: string[]
  startDate: string
  endDate: string
  winners?: Winner[]
}

export interface Participant {
  userId: string
  teamId?: string
  score: number
  rank: number
  submissions: number
}

export interface Prize {
  rank: number
  type: 'badge' | 'xp' | 'title' | 'premium'
  value: string | number
  description: string
}

export interface Winner {
  userId: string
  rank: number
  score: number
  prizes: Prize[]
}
