import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface AppSettings {
  // Appearance
  theme: 'dark' | 'light' | 'auto'
  colorScheme: 'default' | 'blue' | 'purple' | 'green' | 'orange'
  fontSize: 'small' | 'medium' | 'large' | 'x-large'
  reducedMotion: boolean
  highContrast: boolean
  
  // Code Editor
  editorTheme: 'vs-dark' | 'light' | 'hc-black'
  editorFontSize: number
  editorFontFamily: string
  editorLineHeight: number
  editorTabSize: number
  editorWordWrap: 'on' | 'off' | 'wordWrapColumn'
  editorMinimap: boolean
  editorLineNumbers: boolean
  editorAutoSave: boolean
  autoSave: boolean
  vimMode: boolean
  autoComplete: boolean
  tabSize: 2 | 4 | 8
  
  // Learning
  autoPlayNextLesson: boolean
  showHintsAutomatically: boolean
  enableKeyboardShortcuts: boolean
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  dailyGoalMinutes: number
  dailyGoal: 15 | 30 | 60 | 120
  dailyGoalReminders: boolean
  
  // Notifications
  emailDigest: boolean
  progressUpdates: boolean
  newCourses: boolean
  achievements: boolean
  dailyReminders: boolean
  weeklyReports: boolean
  achievementNotifications: boolean
  soundEffects: boolean
  emailNotifications: boolean
  
  // Privacy
  showProfile: boolean
  showProgress: boolean
  allowAnalytics: boolean
  shareAchievements: boolean
  publicProfile: boolean
  shareProgress: boolean
  analytics: boolean
  
  // Accessibility
  screenReaderOptimized: boolean
  keyboardNavigationOnly: boolean
  captions: boolean
  keyboardNavigation: boolean
  screenReader: boolean
  
  // Language
  language: 'en' | 'es' | 'fr' | 'de' | 'pt' | 'zh' | 'ja'
  
  // Mobile
  hapticFeedback: boolean
  swipeGestures: boolean
  compactMode: boolean
}

interface SettingsState {
  settings: AppSettings
  updateSettings: (updates: Partial<AppSettings>) => void
  resetSettings: () => void
}

const defaultSettings: AppSettings = {
  // Appearance
  theme: 'dark',
  colorScheme: 'default',
  fontSize: 'medium',
  reducedMotion: false,
  highContrast: false,
  
  // Code Editor
  editorTheme: 'vs-dark',
  editorFontSize: 14,
  editorFontFamily: 'Fira Code, Consolas, monospace',
  editorLineHeight: 1.6,
  editorTabSize: 2,
  editorWordWrap: 'on',
  editorMinimap: true,
  editorLineNumbers: true,
  editorAutoSave: true,
  autoSave: true,
  vimMode: false,
  autoComplete: true,
  tabSize: 2,
  
  // Learning
  autoPlayNextLesson: false,
  showHintsAutomatically: false,
  enableKeyboardShortcuts: true,
  difficulty: 'beginner',
  dailyGoalMinutes: 30,
  dailyGoal: 30,
  dailyGoalReminders: false,
  
  // Notifications
  emailDigest: true,
  progressUpdates: true,
  newCourses: false,
  achievements: true,
  dailyReminders: false,
  weeklyReports: true,
  achievementNotifications: true,
  soundEffects: true,
  emailNotifications: false,
  
  // Privacy
  showProfile: true,
  showProgress: true,
  allowAnalytics: true,
  shareAchievements: true,
  publicProfile: true,
  shareProgress: true,
  analytics: true,
  
  // Accessibility
  screenReaderOptimized: false,
  keyboardNavigationOnly: false,
  captions: false,
  keyboardNavigation: false,
  screenReader: false,
  
  // Language
  language: 'en',
  
  // Mobile
  hapticFeedback: true,
  swipeGestures: true,
  compactMode: false,
}

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      settings: defaultSettings,
      
      updateSettings: (updates) => set((state) => ({
        settings: { ...state.settings, ...updates }
      })),
      
      resetSettings: () => set({ settings: defaultSettings }),
    }),
    {
      name: 'codemaster-settings',
    }
  )
)
