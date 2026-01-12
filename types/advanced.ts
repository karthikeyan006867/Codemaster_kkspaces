// AI & Advanced Features Type Definitions

export interface Prize {
  position: number
  title: string
  value: string
  description: string
}

export interface AICodeReview {
  id: string
  codeSnippet: string
  language: string
  feedback: AIFeedback[]
  overallScore: number
  improvements: string[]
  bestPractices: string[]
  securityIssues: SecurityIssue[]
  performanceScore: number
  timestamp: string
}

export interface AIFeedback {
  line: number
  severity: 'error' | 'warning' | 'info' | 'suggestion'
  message: string
  suggestion: string
  category: 'style' | 'performance' | 'security' | 'bug' | 'best-practice'
}

export interface SecurityIssue {
  type: string
  severity: 'critical' | 'high' | 'medium' | 'low'
  line: number
  description: string
  fix: string
}

export interface AITutor {
  conversationId: string
  messages: TutorMessage[]
  context: LearningContext
  suggestedTopics: string[]
  adaptiveLevel: number
}

export interface TutorMessage {
  id: string
  role: 'user' | 'ai'
  content: string
  code?: string
  timestamp: string
  helpful?: boolean
}

export interface LearningContext {
  currentLesson: string
  strugglingTopics: string[]
  strongTopics: string[]
  learningStyle: 'visual' | 'practical' | 'theoretical' | 'mixed'
  pace: 'fast' | 'normal' | 'slow'
}

export interface CodeCompletion {
  suggestions: CompletionSuggestion[]
  context: string
  language: string
}

export interface CompletionSuggestion {
  text: string
  type: 'keyword' | 'function' | 'variable' | 'snippet'
  documentation: string
  score: number
}

export interface SmartHint {
  id: string
  content: string
  type: 'explanation' | 'example' | 'link' | 'video'
  relevance: number
  unlockCost: number
}

export interface CareerPath {
  id: string
  title: string
  description: string
  roles: JobRole[]
  requiredSkills: Skill[]
  optionalSkills: Skill[]
  salaryRange: SalaryRange
  demandLevel: 'high' | 'medium' | 'low'
  growthRate: number
  roadmap: Milestone[]
}

export interface JobRole {
  title: string
  level: 'junior' | 'mid' | 'senior' | 'lead'
  description: string
  responsibilities: string[]
  requirements: string[]
}

export interface Skill {
  name: string
  category: string
  importance: 'critical' | 'important' | 'nice-to-have'
  currentLevel: number
  targetLevel: number
  resources: string[]
}

export interface SalaryRange {
  min: number
  max: number
  median: number
  currency: string
  location: string
}

export interface Milestone {
  title: string
  description: string
  skills: string[]
  estimatedTime: number
  completed: boolean
}

export interface Interview {
  id: string
  type: 'technical' | 'behavioral' | 'system-design' | 'coding'
  difficulty: 'easy' | 'medium' | 'hard'
  questions: InterviewQuestion[]
  company?: string
  position?: string
  duration: number
  score?: number
}

export interface InterviewQuestion {
  id: string
  question: string
  type: string
  hints: string[]
  answer?: string
  userAnswer?: string
  feedback?: string
  timeSpent?: number
}

export interface Certificate {
  id: string
  title: string
  description: string
  issuer: string
  issueDate: string
  expiryDate?: string
  credentialId: string
  verificationUrl: string
  skills: string[]
  level: string
  imageUrl: string
  shareableUrl: string
}

export interface Mentorship {
  id: string
  mentorId: string
  menteeId: string
  status: 'active' | 'completed' | 'pending' | 'paused'
  startDate: string
  endDate?: string
  focusAreas: string[]
  sessions: MentorshipSession[]
  goals: string[]
  progress: number
}

export interface MentorshipSession {
  id: string
  date: string
  duration: number
  topics: string[]
  notes: string
  homework?: string
  rating?: number
  feedback?: string
}

export interface LiveCoding {
  id: string
  title: string
  hostId: string
  participants: string[]
  language: string
  code: string
  startTime: string
  endTime?: string
  status: 'scheduled' | 'live' | 'ended'
  chat: ChatMessage[]
  recording?: string
}

export interface ChatMessage {
  userId: string
  message: string
  timestamp: string
  type: 'text' | 'code' | 'question'
}

export interface Hackathon {
  id: string
  name: string
  description: string
  theme: string
  startDate: string
  endDate: string
  prizes: Prize[]
  judges: string[]
  participants: HackathonTeam[]
  rules: string[]
  submissions: Submission[]
  sponsors: Sponsor[]
}

export interface HackathonTeam {
  teamId: string
  name: string
  members: string[]
  project: string
  techStack: string[]
  repositoryUrl?: string
}

export interface Submission {
  teamId: string
  projectUrl: string
  demoUrl?: string
  videoUrl?: string
  description: string
  screenshots: string[]
  submittedAt: string
  score?: number
  feedback?: string[]
}

export interface Sponsor {
  name: string
  logo: string
  tier: 'platinum' | 'gold' | 'silver' | 'bronze'
  website: string
}

export interface CodePlayground {
  id: string
  name: string
  language: string
  code: string
  output: string
  files: PlaygroundFile[]
  dependencies: string[]
  settings: PlaygroundSettings
  collaborative: boolean
  participants?: string[]
}

export interface PlaygroundFile {
  name: string
  path: string
  content: string
  language: string
}

export interface PlaygroundSettings {
  theme: 'light' | 'dark' | 'auto'
  fontSize: number
  tabSize: number
  autoSave: boolean
  linting: boolean
  formatting: boolean
}

export interface Portfolio {
  id: string
  userId: string
  title: string
  bio: string
  skills: SkillLevel[]
  projects: PortfolioProject[]
  experience: Experience[]
  education: Education[]
  certifications: Certificate[]
  githubUrl?: string
  linkedinUrl?: string
  websiteUrl?: string
  resumeUrl?: string
  theme: string
  visibility: 'public' | 'private' | 'unlisted'
}

export interface SkillLevel {
  skill: string
  level: number
  yearsOfExperience: number
  endorsements: number
}

export interface PortfolioProject {
  title: string
  description: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  images: string[]
  featured: boolean
}

export interface Experience {
  company: string
  position: string
  startDate: string
  endDate?: string
  current: boolean
  description: string
  achievements: string[]
}

export interface Education {
  institution: string
  degree: string
  field: string
  startDate: string
  endDate?: string
  gpa?: number
}
