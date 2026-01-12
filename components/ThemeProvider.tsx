'use client'

import { useEffect } from 'react'
import { useSettingsStore } from '@/store/settingsStore'

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { settings } = useSettingsStore()

  useEffect(() => {
    const root = document.documentElement
    
    // Apply theme
    if (settings.theme === 'auto') {
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      root.classList.toggle('dark', isDark)
      root.classList.toggle('light', !isDark)
    } else {
      root.classList.toggle('dark', settings.theme === 'dark')
      root.classList.toggle('light', settings.theme === 'light')
    }

    // Apply color scheme with CSS variables
    const colorSchemes = {
      default: { primary: '#3b82f6', accent: '#8b5cf6' },
      blue: { primary: '#0ea5e9', accent: '#06b6d4' },
      purple: { primary: '#8b5cf6', accent: '#a855f7' },
      green: { primary: '#10b981', accent: '#14b8a6' },
      orange: { primary: '#f97316', accent: '#fb923c' }
    }
    
    const scheme = colorSchemes[settings.colorScheme] || colorSchemes.default
    root.style.setProperty('--color-primary', scheme.primary)
    root.style.setProperty('--color-accent', scheme.accent)
    root.setAttribute('data-color-scheme', settings.colorScheme)
    
    // Apply font size
    const fontSizeMap = {
      small: '14px',
      medium: '16px',
      large: '18px',
      'x-large': '20px'
    }
    root.style.fontSize = fontSizeMap[settings.fontSize]
    
    // Apply reduced motion
    if (settings.reducedMotion) {
      root.style.setProperty('--animation-duration', '0.01ms')
      root.classList.add('reduce-motion')
    } else {
      root.style.setProperty('--animation-duration', '300ms')
      root.classList.remove('reduce-motion')
    }

    // Apply high contrast
    root.classList.toggle('high-contrast', settings.highContrast)
    
    // Apply compact mode for mobile
    root.classList.toggle('compact-mode', settings.compactMode)
    
  }, [settings])

  return <>{children}</>
}

