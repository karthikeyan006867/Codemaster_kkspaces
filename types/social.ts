// Social Features Type Definitions

export interface UserProfile {
  userId: string
  displayName: string
  bio: string
  avatar: string
  level: number
  xp: number
  title: string
  badges: string[]
  skills: Record<string, number> // skill: proficiency %
  joinedDate: string
  lastActive: string
  stats: {
    lessonsCompleted: number
    points: number
    streak: number
    challengesWon: number
    projectsCompleted: number
    helpfulContributions: number
  }
  preferences: {
    visibility: 'public' | 'friends' | 'private'
    showProgress: boolean
    allowMessages: boolean
    allowFriendRequests: boolean
  }
}

export interface Friendship {
  id: string
  userId1: string
  userId2: string
  status: 'pending' | 'accepted' | 'blocked'
  requestedBy: string
  createdAt: string
  acceptedAt?: string
}

export interface Message {
  id: string
  senderId: string
  recipientId: string
  content: string
  timestamp: string
  read: boolean
  type: 'text' | 'code' | 'lesson-share' | 'challenge'
  metadata?: {
    lessonId?: string
    code?: string
    language?: string
  }
}

export interface StudyGroup {
  id: string
  name: string
  description: string
  avatar: string
  createdBy: string
  members: string[]
  admins: string[]
  isPrivate: boolean
  tags: string[]
  focusAreas: string[]
  createdAt: string
  stats: {
    totalMembers: number
    lessonsCompleted: number
    activeMembers: number
  }
}

export interface GroupPost {
  id: string
  groupId: string
  authorId: string
  content: string
  type: 'discussion' | 'question' | 'resource' | 'achievement'
  code?: string
  language?: string
  attachments?: string[]
  likes: string[]
  comments: GroupComment[]
  timestamp: string
  tags: string[]
}

export interface GroupComment {
  id: string
  postId: string
  authorId: string
  content: string
  timestamp: string
  likes: string[]
  isAnswer?: boolean
}

export interface Activity {
  id: string
  userId: string
  type: 'lesson' | 'challenge' | 'achievement' | 'friend' | 'project' | 'milestone'
  action: string
  metadata: Record<string, any>
  timestamp: string
  visibility: 'public' | 'friends' | 'private'
}

export interface Notification {
  id: string
  userId: string
  type: 'friend_request' | 'message' | 'mention' | 'achievement' | 'group_invite' | 'challenge' | 'reminder'
  title: string
  message: string
  read: boolean
  actionUrl?: string
  timestamp: string
  expiresAt?: string
}
