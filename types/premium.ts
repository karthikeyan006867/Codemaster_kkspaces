// Premium & Monetization Features

export interface Review {
  userId: string
  userName: string
  rating: number
  comment: string
  date: string
}

export interface Subscription {
  id: string
  userId: string
  plan: SubscriptionPlan
  status: 'active' | 'cancelled' | 'expired' | 'trial'
  startDate: string
  endDate: string
  autoRenew: boolean
  paymentMethod: PaymentMethod
  billingHistory: BillingRecord[]
}

export interface SubscriptionPlan {
  id: string
  name: 'free' | 'pro' | 'premium' | 'enterprise'
  price: number
  interval: 'monthly' | 'yearly'
  features: PlanFeature[]
  limits: PlanLimits
}

export interface PlanFeature {
  name: string
  description: string
  included: boolean
}

export interface PlanLimits {
  lessonsPerDay: number
  challengesPerDay: number
  aiInteractions: number
  codeReviews: number
  playgrounds: number
  storage: number // MB
  collaborators: number
}

export interface PaymentMethod {
  type: 'card' | 'paypal' | 'bank'
  last4?: string
  brand?: string
  expiryMonth?: number
  expiryYear?: number
}

export interface BillingRecord {
  id: string
  date: string
  amount: number
  status: 'paid' | 'pending' | 'failed'
  invoiceUrl: string
}

export interface Marketplace {
  id: string
  type: 'course' | 'template' | 'plugin' | 'theme'
  title: string
  description: string
  author: string
  price: number
  rating: number
  downloads: number
  reviews: Review[]
  tags: string[]
  screenshots: string[]
  previewUrl?: string
}

export interface TeamAccount {
  id: string
  name: string
  owner: string
  members: TeamMember[]
  seats: number
  plan: string
  sharedResources: SharedResource[]
  analytics: TeamAnalytics
}

export interface TeamMember {
  userId: string
  role: 'owner' | 'admin' | 'member' | 'viewer'
  joinedAt: string
  permissions: string[]
}

export interface SharedResource {
  type: 'course' | 'project' | 'snippet' | 'playground'
  id: string
  sharedBy: string
  sharedAt: string
}

export interface TeamAnalytics {
  totalLessons: number
  averageProgress: number
  topPerformers: string[]
  activeMembers: number
  completionRate: number
}
