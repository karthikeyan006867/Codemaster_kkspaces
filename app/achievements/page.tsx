'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import { Trophy, Lock, CheckCircle2, Star, Zap, Flame, Award, Target, BookOpen, Code2, Clock, TrendingUp } from 'lucide-react'
import { useProgressStore } from '@/store/progressStore'
import { achievements as achievementsData } from '@/data/achievements'
import type { Achievement as AchievementType } from '@/data/achievements'

interface Achievement extends AchievementType {
  unlocked: boolean
  progress: number
}

const rarityColors = {
  Common: 'from-gray-600 to-gray-800',
  Rare: 'from-blue-600 to-blue-800',
  Epic: 'from-purple-600 to-purple-800',
  Legendary: 'from-orange-600 to-orange-800',
  Mythic: 'from-red-600 via-pink-600 to-purple-700'
}

const rarityGlow = {
  Common: 'shadow-gray-500/20',
  Rare: 'shadow-blue-500/40',
  Epic: 'shadow-purple-500/50',
  Legendary: 'shadow-orange-500/60',
  Mythic: 'shadow-pink-500/70 animate-pulse'
}

export default function AchievementsPage() {
  const { completedLessons, streak, totalPoints, timeSpent } = useProgressStore()
  const [filter, setFilter] = useState<string>('All')
  const [rarityFilter, setRarityFilter] = useState<string>('All')
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState<'points' | 'rarity' | 'name'>('points')

  // Calculate progress for each achievement
  const achievements: Achievement[] = achievementsData.map(ach => {
    let progress = 0
    let unlocked = false

    // Calculate progress based on category
    if (ach.category === 'Learning' && ach.id.startsWith('lessons-')) {
      progress = completedLessons.length
      unlocked = progress >= ach.requirement
    } else if (ach.category === 'Streak') {
      progress = streak
      unlocked = progress >= ach.requirement
    } else if (ach.id.startsWith('points-')) {
      progress = totalPoints
      unlocked = progress >= ach.requirement
    }

    return {
      ...ach,
      unlocked,
      progress: Math.min(progress, ach.requirement)
    }
  })

  const categories = ['All', ...Array.from(new Set(achievements.map(a => a.category)))]
  const rarities = ['All', 'Common', 'Rare', 'Epic', 'Legendary', 'Mythic']

  const filteredAchievements = achievements
    .filter(achievement => {
      const matchesCategory = filter === 'All' || achievement.category === filter
      const matchesRarity = rarityFilter === 'All' || achievement.rarity === rarityFilter
      const matchesSearch = achievement.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           achievement.description.toLowerCase().includes(searchTerm.toLowerCase())
      return matchesCategory && matchesRarity && matchesSearch
    })
    .sort((a, b) => {
      if (sortBy === 'points') return b.points - a.points
      if (sortBy === 'name') return a.title.localeCompare(b.title)
      const rarityOrder = { Common: 0, Rare: 1, Epic: 2, Legendary: 3, Mythic: 4 }
      return rarityOrder[b.rarity] - rarityOrder[a.rarity]
    })

  const stats = {
    total: achievements.length,
    unlocked: achievements.filter(a => a.unlocked).length,
    totalPoints: achievements.reduce((sum, a) => sum + a.points, 0),
    earnedPoints: achievements.filter(a => a.unlocked).reduce((sum, a) => sum + a.points, 0)
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <Sidebar />
      
      <main className="ml-0 md:ml-64 pt-16 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="mb-8 text-center animate-fade-in-down">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
              🏆 Achievements
            </h1>
            <p className="text-gray-400 text-lg">Unlock {stats.total} achievements and earn {stats.totalPoints.toLocaleString()} points!</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="card-gradient p-6 rounded-xl border border-gray-700 hover-lift">
              <div className="flex items-center gap-3 mb-2">
                <Trophy className="h-6 w-6 text-primary-400" />
                <div className="text-3xl font-bold">{stats.unlocked}</div>
              </div>
              <div className="text-sm text-gray-400">Unlocked</div>
            </div>
            <div className="card-gradient p-6 rounded-xl border border-gray-700 hover-lift">
              <div className="flex items-center gap-3 mb-2">
                <Target className="h-6 w-6 text-accent-400" />
                <div className="text-3xl font-bold">{stats.total}</div>
              </div>
              <div className="text-sm text-gray-400">Total Achievements</div>
            </div>
            <div className="card-gradient p-6 rounded-xl border border-gray-700 hover-lift">
              <div className="flex items-center gap-3 mb-2">
                <Star className="h-6 w-6 text-yellow-400" />
                <div className="text-3xl font-bold">{stats.earnedPoints.toLocaleString()}</div>
              </div>
              <div className="text-sm text-gray-400">Points Earned</div>
            </div>
            <div className="card-gradient p-6 rounded-xl border border-gray-700 hover-lift">
              <div className="flex items-center gap-3 mb-2">
                <TrendingUp className="h-6 w-6 text-green-400" />
                <div className="text-3xl font-bold">{Math.round((stats.unlocked / stats.total) * 100)}%</div>
              </div>
              <div className="text-sm text-gray-400">Completion</div>
            </div>
          </div>

          {/* Filters */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 mb-8">
            <div className="grid md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Search</label>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search achievements..."
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Category</label>
                <select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:border-blue-500 focus:outline-none transition-colors capitalize"
                >
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Rarity</label>
                <select
                  value={rarityFilter}
                  onChange={(e) => setRarityFilter(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                >
                  {rarities.map(rarity => (
                    <option key={rarity} value={rarity}>{rarity}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Sort By</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                >
                  <option value="points">Points</option>
                  <option value="rarity">Rarity</option>
                  <option value="name">Name</option>
                </select>
              </div>
            </div>
          </div>

          {/* Category Filters - Keep for backward compatibility */}
          <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          </div>

          {/* Achievements Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAchievements.map((achievement, index) => (
              <div
                key={achievement.id}
                className={`relative bg-gradient-to-br ${rarityColors[achievement.rarity]} p-6 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${achievement.unlocked ? rarityGlow[achievement.rarity] : 'border-gray-700 opacity-75'} card-hover`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {/* Rarity Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    achievement.rarity === 'Mythic' ? 'bg-gradient-to-r from-red-500 to-purple-500 animate-pulse' :
                    achievement.rarity === 'Legendary' ? 'bg-orange-600' :
                    achievement.rarity === 'Epic' ? 'bg-purple-600' :
                    achievement.rarity === 'Rare' ? 'bg-blue-600' :
                    'bg-gray-600'
                  }`}>
                    {achievement.rarity}
                  </span>
                </div>

                {/* Icon */}
                <div className="text-6xl mb-4 text-center">
                  {achievement.unlocked ? achievement.icon : '🔒'}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-2 text-center">{achievement.title}</h3>

                {/* Description */}
                <p className="text-sm text-gray-200 text-center mb-4">{achievement.description}</p>

                {/* Progress */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-300">Progress</span>
                    <span className={achievement.unlocked ? 'text-green-400 font-semibold' : 'text-gray-300'}>
                      {achievement.progress} / {achievement.requirement}
                    </span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                    <div
                      className={`h-full transition-all duration-500 ${achievement.unlocked ? 'bg-gradient-to-r from-blue-500 to-green-500' : 'bg-gray-600'} progress-fill`}
                      style={{ width: `${(achievement.progress / achievement.requirement) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Stats */}
                <div className="flex justify-between items-center pt-4 border-t border-white border-opacity-20">
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-400">⭐</span>
                    <span className="font-bold">{achievement.points}</span>
                    <span className="text-xs text-gray-300">points</span>
                  </div>
                  <div className="text-sm text-gray-300">
                    {achievement.category}
                  </div>
                </div>

                {/* Unlocked Badge */}
                {achievement.unlocked && (
                  <div className="absolute -top-3 -right-3">
                    <div className="bg-green-500 rounded-full p-3 shadow-lg shadow-green-500/50 success-pop">
                      <CheckCircle2 className="h-6 w-6 text-white" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
