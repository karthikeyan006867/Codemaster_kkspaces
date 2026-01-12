'use client'

import { useState } from 'react'
import { useUser, useClerk } from '@clerk/nextjs'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import { useSettingsStore } from '@/store/settingsStore'
import { useProgressStore } from '@/store/progressStore'
import { 
  User, Bell, Moon, Globe, Shield, Code, Save, Check, 
  Eye, Keyboard, Smartphone, Palette, Type, Zap, Target,
  Volume2, ChevronRight, RotateCcw, Download, Upload, Sun, Trash2, LogOut
} from 'lucide-react'

type SettingTab = 'appearance' | 'editor' | 'learning' | 'notifications' | 'privacy' | 'accessibility' | 'account'

export default function SettingsPage() {
  const { user } = useUser()
  const { signOut } = useClerk()
  const { settings, updateSettings, resetSettings } = useSettingsStore()
  const progressStore = useProgressStore()
  const [activeTab, setActiveTab] = useState<SettingTab>('appearance')
  const [saved, setSaved] = useState(false)

  const handleSave = () => {
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  const handleReset = () => {
    if (confirm('Are you sure you want to reset all settings to default?')) {
      resetSettings()
      handleSave()
    }
  }

  const handleResetProgress = () => {
    if (confirm('⚠️ WARNING: This will delete ALL your progress, points, and completed lessons. This action cannot be undone!\n\nAre you absolutely sure?')) {
      if (confirm('This is your final confirmation. All progress will be permanently deleted. Continue?')) {
        // Clear the progress store
        localStorage.removeItem('progress-storage')
        // Reload the page to reset the store
        window.location.reload()
      }
    }
  }

  const handleSignOut = async () => {
    if (confirm('Are you sure you want to sign out?')) {
      await signOut()
      window.location.href = '/'
    }
  }

  const handleDeleteAccount = async () => {
    if (confirm('⚠️ CRITICAL WARNING: This will PERMANENTLY delete your account and ALL associated data.\n\nThis includes:\n- Your profile\n- All progress and achievements\n- All saved data\n\nThis action CANNOT be undone!\n\nAre you absolutely sure?')) {
      if (confirm('Final confirmation: Type DELETE in the next dialog to confirm account deletion.')) {
        const confirmation = prompt('Type DELETE to confirm account deletion:')
        if (confirmation === 'DELETE') {
          try {
            // Delete the user account through API
            const response = await fetch('/api/user/delete', {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json'
              }
            })

            if (response.ok) {
              alert('Account deleted successfully. Redirecting to home page...')
              // Sign out and redirect
              await signOut()
              window.location.href = '/'
            } else {
              const error = await response.json()
              throw new Error(error.message || 'Failed to delete account')
            }
          } catch (error) {
            console.error('Error deleting account:', error)
            alert('Failed to delete account. Please try again or contact support.')
          }
        } else {
          alert('Account deletion cancelled.')
        }
      }
    }
  }

  const tabs = [
    { id: 'appearance' as const, label: 'Appearance', icon: Palette },
    { id: 'editor' as const, label: 'Code Editor', icon: Code },
    { id: 'learning' as const, label: 'Learning', icon: Target },
    { id: 'notifications' as const, label: 'Notifications', icon: Bell },
    { id: 'privacy' as const, label: 'Privacy', icon: Shield },
    { id: 'accessibility' as const, label: 'Accessibility', icon: Eye },
    { id: 'account' as const, label: 'Account', icon: User },
  ]

  return (
    <div className="min-h-screen bg-gray-950">
      <Navbar />
      <Sidebar />
      
      <main className="ml-0 md:ml-64 pt-16 pb-24 md:pb-20 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 py-4 md:py-12">
          {/* Header */}
          <div className="mb-4 md:mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
              <span className="text-gradient">Settings</span>
            </h1>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg">
              Customize your learning experience
            </p>
          </div>

          {/* Mobile Tab Selector */}
          <div className="md:hidden mb-4">
            <select
              value={activeTab}
              onChange={(e) => setActiveTab(e.target.value as SettingTab)}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3.5 text-white focus:outline-none focus:ring-2 focus:ring-primary-500 text-base font-medium shadow-lg"
            >
              {tabs.map(tab => (
                <option key={tab.id} value={tab.id}>{tab.label}</option>
              ))}
            </select>
          </div>

          <div className="flex flex-col md:flex-row gap-4 md:gap-6">
            {/* Desktop Sidebar */}
            <div className="hidden md:block w-64 flex-shrink-0">
              <div className="card-gradient rounded-xl border border-gray-700 p-2 sticky top-20 shadow-xl">
                {tabs.map((tab) => {
                  const Icon = tab.icon
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                        activeTab === tab.id
                          ? 'bg-primary-500/20 text-primary-400 border border-primary-500/30'
                          : 'text-gray-400 hover:bg-gray-800/50 hover:text-white'
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                      <span className="font-medium">{tab.label}</span>
                      {activeTab === tab.id && (
                        <ChevronRight className="h-4 w-4 ml-auto" />
                      )}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Settings Content */}
            <div className="flex-1">
              <div className="card-gradient rounded-xl border border-gray-700 p-4 sm:p-6 md:p-8 shadow-xl">
                
                {/* Appearance Settings */}
                {activeTab === 'appearance' && (
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <Palette className="h-6 w-6 text-primary-400" />
                        Appearance
                      </h2>
                    </div>

                    {/* Theme */}
                    <div className="space-y-3">
                      <label className="block text-sm font-semibold text-gray-300">Theme Mode</label>
                      <div className="grid grid-cols-3 gap-3">
                        {[
                          { value: 'dark', label: 'Dark', icon: Moon },
                          { value: 'light', label: 'Light', icon: Sun },
                          { value: 'auto', label: 'Auto', icon: Smartphone }
                        ].map((theme) => {
                          const Icon = theme.icon
                          return (
                            <button
                              key={theme.value}
                              onClick={() => {
                                updateSettings({ theme: theme.value as any })
                                handleSave()
                              }}
                              className={`flex flex-col items-center gap-2 p-4 rounded-lg border-2 transition-all ${
                                settings.theme === theme.value
                                  ? 'border-primary-500 bg-primary-500/10'
                                  : 'border-gray-700 hover:border-gray-600'
                              }`}
                            >
                              <Icon className="h-6 w-6" />
                              <span className="text-sm font-medium">{theme.label}</span>
                            </button>
                          )
                        })}
                      </div>
                    </div>

                    {/* Color Scheme */}
                    <div className="space-y-3">
                      <label className="block text-sm font-semibold text-gray-300">Color Scheme</label>
                      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                        {[
                          { value: 'default', label: 'Default', colors: ['#3b82f6', '#8b5cf6'] },
                          { value: 'blue', label: 'Ocean Blue', colors: ['#0ea5e9', '#06b6d4'] },
                          { value: 'purple', label: 'Royal Purple', colors: ['#8b5cf6', '#a855f7'] },
                          { value: 'green', label: 'Forest Green', colors: ['#10b981', '#14b8a6'] },
                          { value: 'orange', label: 'Sunset Orange', colors: ['#f97316', '#fb923c'] }
                        ].map((scheme) => (
                          <button
                            key={scheme.value}
                            onClick={() => {
                              updateSettings({ colorScheme: scheme.value as any })
                              handleSave()
                            }}
                            className={`p-4 rounded-lg border-2 transition-all ${
                              settings.colorScheme === scheme.value
                                ? 'border-primary-500 bg-primary-500/10'
                                : 'border-gray-700 hover:border-gray-600'
                            }`}
                          >
                            <div className="flex gap-1 mb-2">
                              {scheme.colors.map((color, i) => (
                                <div
                                  key={i}
                                  className="w-6 h-6 rounded"
                                  style={{ background: color }}
                                />
                              ))}
                            </div>
                            <span className="text-xs font-medium">{scheme.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Font Size */}
                    <div className="space-y-3">
                      <label className="block text-sm font-semibold text-gray-300">Font Size</label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {[
                          { value: 'small', label: 'Small', size: 'text-sm' },
                          { value: 'medium', label: 'Medium', size: 'text-base' },
                          { value: 'large', label: 'Large', size: 'text-lg' },
                          { value: 'x-large', label: 'Extra Large', size: 'text-xl' }
                        ].map((size) => (
                          <button
                            key={size.value}
                            onClick={() => {
                              updateSettings({ fontSize: size.value as any })
                              handleSave()
                            }}
                            className={`p-4 rounded-lg border-2 transition-all ${
                              settings.fontSize === size.value
                                ? 'border-primary-500 bg-primary-500/10'
                                : 'border-gray-700 hover:border-gray-600'
                            }`}
                          >
                            <Type className={`h-6 w-6 mx-auto mb-2 ${size.size}`} />
                            <span className="text-sm font-medium">{size.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* High Contrast */}
                    <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <Eye className="h-5 w-5 text-blue-400" />
                        <div>
                          <div className="font-semibold">High Contrast</div>
                          <div className="text-sm text-gray-400">Increase color contrast</div>
                        </div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={settings.highContrast}
                          onChange={(e) => {
                            updateSettings({ highContrast: e.target.checked })
                            handleSave()
                          }}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-500"></div>
                      </label>
                    </div>

                    {/* Reduced Motion */}
                    <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <Zap className="h-5 w-5 text-yellow-400" />
                        <div>
                          <div className="font-semibold">Reduce Motion</div>
                          <div className="text-sm text-gray-400">Minimize animations</div>
                        </div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={settings.reducedMotion}
                          onChange={(e) => {
                            updateSettings({ reducedMotion: e.target.checked })
                            handleSave()
                          }}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-500"></div>
                      </label>
                    </div>
                  </div>
                )}

                {activeTab === 'editor' && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold flex items-center gap-2">
                      <Code className="h-6 w-6 text-primary-400" />
                      Code Editor
                    </h2>
                    
                    {/* Editor Settings */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <Code className="h-5 w-5 text-green-400" />
                          <div>
                            <div className="font-semibold">Auto Save</div>
                            <div className="text-sm text-gray-400">Automatically save code changes</div>
                          </div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={settings.autoSave}
                            onChange={(e) => {
                              updateSettings({ autoSave: e.target.checked })
                              handleSave()
                            }}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-500"></div>
                        </label>
                      </div>

                      <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <Keyboard className="h-5 w-5 text-purple-400" />
                          <div>
                            <div className="font-semibold">Vim Mode</div>
                            <div className="text-sm text-gray-400">Enable Vim keybindings</div>
                          </div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={settings.vimMode}
                            onChange={(e) => {
                              updateSettings({ vimMode: e.target.checked })
                              handleSave()
                            }}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-500"></div>
                        </label>
                      </div>

                      <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <Zap className="h-5 w-5 text-yellow-400" />
                          <div>
                            <div className="font-semibold">Auto Complete</div>
                            <div className="text-sm text-gray-400">Show code suggestions</div>
                          </div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={settings.autoComplete}
                            onChange={(e) => {
                              updateSettings({ autoComplete: e.target.checked })
                              handleSave()
                            }}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-500"></div>
                        </label>
                      </div>

                      <div className="space-y-3">
                        <label className="block text-sm font-semibold text-gray-300">Tab Size</label>
                        <select
                          value={settings.tabSize}
                          onChange={(e) => {
                            updateSettings({ tabSize: parseInt(e.target.value) as any })
                            handleSave()
                          }}
                          className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                        >
                          <option value="2">2 spaces</option>
                          <option value="4">4 spaces</option>
                          <option value="8">8 spaces</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'learning' && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold flex items-center gap-2">
                      <Target className="h-6 w-6 text-primary-400" />
                      Learning
                    </h2>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <Bell className="h-5 w-5 text-blue-400" />
                          <div>
                            <div className="font-semibold">Daily Reminders</div>
                            <div className="text-sm text-gray-400">Get daily coding reminders</div>
                          </div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={settings.dailyGoalReminders}
                            onChange={(e) => {
                              updateSettings({ dailyGoalReminders: e.target.checked })
                              handleSave()
                            }}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-500"></div>
                        </label>
                      </div>

                      <div className="space-y-3">
                        <label className="block text-sm font-semibold text-gray-300">Daily Goal (minutes)</label>
                        <select
                          value={settings.dailyGoal}
                          onChange={(e) => {
                            updateSettings({ dailyGoal: parseInt(e.target.value) as any })
                            handleSave()
                          }}
                          className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                        >
                          <option value="15">15 minutes</option>
                          <option value="30">30 minutes</option>
                          <option value="60">1 hour</option>
                          <option value="120">2 hours</option>
                        </select>
                      </div>

                      <div className="space-y-3">
                        <label className="block text-sm font-semibold text-gray-300">Difficulty Preference</label>
                        <select
                          value={settings.difficulty}
                          onChange={(e) => {
                            updateSettings({ difficulty: e.target.value as any })
                            handleSave()
                          }}
                          className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                        >
                          <option value="beginner">Beginner</option>
                          <option value="intermediate">Intermediate</option>
                          <option value="advanced">Advanced</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'notifications' && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold flex items-center gap-2">
                      <Bell className="h-6 w-6 text-primary-400" />
                      Notifications
                    </h2>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <Bell className="h-5 w-5 text-green-400" />
                          <div>
                            <div className="font-semibold">Achievement Notifications</div>
                            <div className="text-sm text-gray-400">Get notified when you earn achievements</div>
                          </div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={settings.achievementNotifications}
                            onChange={(e) => {
                              updateSettings({ achievementNotifications: e.target.checked })
                              handleSave()
                            }}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-500"></div>
                        </label>
                      </div>

                      <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <Volume2 className="h-5 w-5 text-blue-400" />
                          <div>
                            <div className="font-semibold">Sound Effects</div>
                            <div className="text-sm text-gray-400">Play sounds for actions</div>
                          </div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={settings.soundEffects}
                            onChange={(e) => {
                              updateSettings({ soundEffects: e.target.checked })
                              handleSave()
                            }}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-500"></div>
                        </label>
                      </div>

                      <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <Bell className="h-5 w-5 text-purple-400" />
                          <div>
                            <div className="font-semibold">Email Notifications</div>
                            <div className="text-sm text-gray-400">Receive updates via email</div>
                          </div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={settings.emailNotifications}
                            onChange={(e) => {
                              updateSettings({ emailNotifications: e.target.checked })
                              handleSave()
                            }}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-500"></div>
                        </label>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'privacy' && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold flex items-center gap-2">
                      <Shield className="h-6 w-6 text-primary-400" />
                      Privacy
                    </h2>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <Eye className="h-5 w-5 text-green-400" />
                          <div>
                            <div className="font-semibold">Public Profile</div>
                            <div className="text-sm text-gray-400">Show your profile to other users</div>
                          </div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={settings.publicProfile}
                            onChange={(e) => {
                              updateSettings({ publicProfile: e.target.checked })
                              handleSave()
                            }}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-500"></div>
                        </label>
                      </div>

                      <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <Globe className="h-5 w-5 text-blue-400" />
                          <div>
                            <div className="font-semibold">Share Progress</div>
                            <div className="text-sm text-gray-400">Allow sharing your progress</div>
                          </div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={settings.shareProgress}
                            onChange={(e) => {
                              updateSettings({ shareProgress: e.target.checked })
                              handleSave()
                            }}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-500"></div>
                        </label>
                      </div>

                      <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <Shield className="h-5 w-5 text-yellow-400" />
                          <div>
                            <div className="font-semibold">Analytics</div>
                            <div className="text-sm text-gray-400">Help improve the app</div>
                          </div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={settings.analytics}
                            onChange={(e) => {
                              updateSettings({ analytics: e.target.checked })
                              handleSave()
                            }}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-500"></div>
                        </label>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'accessibility' && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold flex items-center gap-2">
                      <Eye className="h-6 w-6 text-primary-400" />
                      Accessibility
                    </h2>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <Keyboard className="h-5 w-5 text-green-400" />
                          <div>
                            <div className="font-semibold">Keyboard Navigation</div>
                            <div className="text-sm text-gray-400">Enhanced keyboard shortcuts</div>
                          </div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={settings.keyboardNavigation}
                            onChange={(e) => {
                              updateSettings({ keyboardNavigation: e.target.checked })
                              handleSave()
                            }}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-500"></div>
                        </label>
                      </div>

                      <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <Volume2 className="h-5 w-5 text-blue-400" />
                          <div>
                            <div className="font-semibold">Screen Reader</div>
                            <div className="text-sm text-gray-400">Screen reader optimizations</div>
                          </div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={settings.screenReader}
                            onChange={(e) => {
                              updateSettings({ screenReader: e.target.checked })
                              handleSave()
                            }}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-500"></div>
                        </label>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'account' && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold flex items-center gap-2">
                      <User className="h-6 w-6 text-primary-400" />
                      Account
                    </h2>
                    <div className="space-y-6">
                      <div className="p-4 bg-gray-800/50 rounded-lg">
                        <div className="flex items-center gap-4">
                          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-2xl font-bold">
                            {user?.firstName?.[0] || 'U'}
                          </div>
                          <div>
                            <div className="font-semibold text-lg">{user?.fullName || 'User'}</div>
                            <div className="text-sm text-gray-400">{user?.primaryEmailAddress?.emailAddress}</div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <button className="w-full flex items-center justify-between p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors">
                          <span className="font-semibold">Export Data</span>
                          <Download className="h-5 w-5 text-gray-400" />
                        </button>
                        
                        <button className="w-full flex items-center justify-between p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors">
                          <span className="font-semibold">Import Data</span>
                          <Upload className="h-5 w-5 text-gray-400" />
                        </button>

                        <div className="border-t border-gray-700 pt-3 mt-3">
                          <button 
                            onClick={handleSignOut}
                            className="w-full flex items-center justify-between p-4 bg-blue-900/30 border border-blue-700 text-blue-400 rounded-lg hover:bg-blue-900/50 transition-colors mb-3"
                          >
                            <div className="text-left">
                              <div className="font-semibold">Sign Out</div>
                              <div className="text-xs text-blue-300 mt-0.5">Log out of your account</div>
                            </div>
                            <LogOut className="h-5 w-5" />
                          </button>

                          <div className="p-4 bg-red-900/20 border border-red-700/50 rounded-lg mb-3">
                            <div className="flex items-start gap-3">
                              <div className="text-red-400 mt-0.5">⚠️</div>
                              <div>
                                <div className="font-semibold text-red-400 mb-1">Danger Zone</div>
                                <p className="text-sm text-gray-300">These actions cannot be undone. Please be careful.</p>
                              </div>
                            </div>
                          </div>
                          
                          <button 
                            onClick={handleResetProgress}
                            className="w-full flex items-center justify-between p-4 bg-red-900/30 border border-red-700 text-red-400 rounded-lg hover:bg-red-900/50 transition-colors mb-3"
                          >
                            <div className="text-left">
                              <div className="font-semibold">Reset All Progress</div>
                              <div className="text-xs text-red-300 mt-0.5">Delete all lessons, points, and achievements</div>
                            </div>
                            <Trash2 className="h-5 w-5" />
                          </button>

                          <button 
                            onClick={handleDeleteAccount}
                            className="w-full flex items-center justify-between p-4 bg-red-950 border-2 border-red-600 text-red-500 rounded-lg hover:bg-red-900 transition-colors"
                          >
                            <div className="text-left">
                              <div className="font-bold">Delete Account</div>
                              <div className="text-xs text-red-400 mt-0.5">Permanently delete your account and all data</div>
                            </div>
                            <Trash2 className="h-6 w-6" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

              </div>

              {/* Action Buttons */}
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleSave}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-lg font-semibold hover:opacity-90 transition-all"
                >
                  {saved ? (
                    <>
                      <Check className="h-5 w-5" />
                      Saved!
                    </>
                  ) : (
                    <>
                      <Save className="h-5 w-5" />
                      Save Changes
                    </>
                  )}
                </button>
                <button
                  onClick={handleReset}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg font-semibold hover:bg-gray-700 transition-colors"
                >
                  <RotateCcw className="h-5 w-5" />
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
