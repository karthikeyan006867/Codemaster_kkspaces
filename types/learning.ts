// Enhanced Learning Features Type Definitions

export interface DetailedLesson {
  id: string
  title: string
  description: string
  category: string
  difficulty: 'beginner' | 'intermediate' | 'advanced' | 'expert'
  estimatedTime: number // minutes
  sections: LessonSection[]
  prerequisites: string[]
  learningObjectives: string[]
  quiz: Quiz
  project?: Project
  resources: Resource[]
  tags: string[]
  xpReward: number
  completionRate: number
  rating: number
  reviews: Review[]
}

export interface LessonSection {
  id: string
  title: string
  type: 'theory' | 'example' | 'practice' | 'video' | 'interactive'
  content: string
  code?: CodeExample[]
  interactive?: InteractiveElement
  estimatedTime: number
}

export interface CodeExample {
  id: string
  title: string
  code: string
  language: string
  explanation: string
  output?: string
  editable: boolean
  tests?: TestCase[]
}

export interface TestCase {
  input: string
  expectedOutput: string
  description: string
}

export interface InteractiveElement {
  type: 'quiz' | 'coding-challenge' | 'drag-drop' | 'fill-blank' | 'visualization'
  config: Record<string, any>
  validation: ValidationRule[]
}

export interface ValidationRule {
  type: 'regex' | 'exact' | 'contains' | 'custom'
  value: string | RegExp | Function
  errorMessage: string
}

export interface Quiz {
  id: string
  questions: QuizQuestion[]
  passingScore: number
  timeLimit?: number
  attempts: number
}

export interface QuizQuestion {
  id: string
  question: string
  type: 'multiple-choice' | 'code' | 'true-false' | 'fill-blank' | 'matching'
  options?: string[]
  correctAnswer: string | string[]
  explanation: string
  points: number
  hints: string[]
}

export interface Project {
  id: string
  title: string
  description: string
  difficulty: string
  requirements: string[]
  starter: string
  solution?: string
  tests: ProjectTest[]
  milestones: ProjectMilestone[]
  estimatedTime: number
  xpReward: number
}

export interface ProjectTest {
  id: string
  description: string
  testCode: string
  points: number
}

export interface ProjectMilestone {
  id: string
  title: string
  description: string
  criteria: string[]
  xpReward: number
}

export interface Resource {
  id: string
  title: string
  type: 'article' | 'video' | 'documentation' | 'tool' | 'cheatsheet'
  url: string
  description: string
  tags: string[]
}

export interface Review {
  id: string
  userId: string
  rating: number
  comment: string
  helpful: number
  timestamp: string
}

export interface LearningPath {
  id: string
  title: string
  description: string
  courses: string[]
  estimatedTime: number
  difficulty: string
  prerequisites: string[]
  outcomes: string[]
  enrolled: number
  rating: number
}

export interface SkillTree {
  id: string
  name: string
  category: string
  nodes: SkillNode[]
}

export interface SkillNode {
  id: string
  title: string
  description: string
  level: number
  xpRequired: number
  prerequisites: string[]
  rewards: Reward[]
  unlocked: boolean
  completed: boolean
  progress: number
}

export interface Reward {
  type: 'badge' | 'xp' | 'title' | 'feature' | 'content'
  value: string | number
  description: string
}

export interface DailyQuest {
  id: string
  title: string
  description: string
  type: 'lesson' | 'challenge' | 'practice' | 'social' | 'streak'
  target: number
  progress: number
  xpReward: number
  expiresAt: string
  completed: boolean
}

export interface CodeSnippet {
  id: string
  title: string
  description: string
  code: string
  language: string
  authorId: string
  tags: string[]
  category: string
  visibility: 'public' | 'private' | 'unlisted'
  likes: number
  forks: number
  comments: SnippetComment[]
  createdAt: string
  updatedAt: string
}

export interface SnippetComment {
  id: string
  userId: string
  content: string
  code?: string
  timestamp: string
  likes: number
}
