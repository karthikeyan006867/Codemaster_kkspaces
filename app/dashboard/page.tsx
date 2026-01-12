'use client'

import { useEffect } from 'react'
import { useUser } from '@clerk/nextjs'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import Link from 'next/link'
import { Trophy, Flame, Target, Clock, BookOpen, Code, TrendingUp, Calendar } from 'lucide-react'
import { courses } from '@/data/courses'
import { useProgressStore } from '@/store/progressStore'
import { useSettingsStore } from '@/store/settingsStore'

export default function DashboardPage() {
  const { user, isLoaded } = useUser()
  const { settings } = useSettingsStore()
  const { 
    completedLessons, 
    completedChallenges,
    totalPoints,
    streak, 
    longestStreak,
    timeSpent,
    weeklyTime,
    weeklyLessons,
    weeklyChallenges,
    weeklyPoints,
    courseProgress,
    setUserId,
    loadProgressFromServer
  } = useProgressStore()

  // Load user progress from server on page load
  useEffect(() => {
    if (isLoaded && user) {
      setUserId(user.id)
      // Always fetch fresh data from server on page load
      loadProgressFromServer()
    }
  }, [isLoaded, user, setUserId, loadProgressFromServer])

  // Calculate stats from actual progress
  const stats = {
    lessonsCompleted: completedLessons.length,
    challengesCompleted: completedChallenges.length,
    currentStreak: streak,
    totalPoints: totalPoints,
    totalTime: timeSpent, // total time spent
  }

  // Get recently started courses
  const recentCourses = courses.filter(c => 
    courseProgress[c.id] && courseProgress[c.id].percentage > 0 && courseProgress[c.id].percentage < 100
  ).slice(0, 3)

  // If no courses in progress, show first few courses
  const coursesToShow = recentCourses.length > 0 ? recentCourses : courses.slice(0, 2)

  return (
    <div className="min-h-screen">
      <Navbar />
      <Sidebar />
      
      <main className="ml-0 md:ml-64 pt-16 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Welcome Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-2">
              Welcome back, <span className="text-gradient">{user?.firstName || 'Learner'}!</span>
            </h1>
            <p className="text-gray-400 text-lg">Keep up the great work! Here&apos;s your progress</p>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="card-gradient p-6 rounded-xl border border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary-500/20 flex items-center justify-center border border-primary-500/30">
                  <BookOpen className="h-6 w-6 text-primary-400" />
                </div>
                <TrendingUp className="h-5 w-5 text-green-400" />
              </div>
              <div className="text-3xl font-bold mb-1">{stats.lessonsCompleted}</div>
              <div className="text-sm text-gray-400">Lessons Completed</div>
            </div>

            <div className="card-gradient p-6 rounded-xl border border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-orange-500/20 flex items-center justify-center border border-orange-500/30">
                  <Flame className="h-6 w-6 text-orange-400" />
                </div>
                <span className="text-xs text-orange-400 font-semibold">🔥 HOT</span>
              </div>
              <div className="text-3xl font-bold mb-1">{stats.currentStreak}</div>
              <div className="text-sm text-gray-400">Day Streak</div>
            </div>

            <div className="card-gradient p-6 rounded-xl border border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-accent-500/20 flex items-center justify-center border border-accent-500/30">
                  <Trophy className="h-6 w-6 text-accent-400" />
                </div>
              </div>
              <div className="text-3xl font-bold mb-1">{stats.totalPoints}</div>
              <div className="text-sm text-gray-400">Total Points</div>
            </div>

            <div className="card-gradient p-6 rounded-xl border border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center border border-green-500/30">
                  <Clock className="h-6 w-6 text-green-400" />
                </div>
              </div>
              <div className="text-3xl font-bold mb-1">{weeklyTime}m</div>
              <div className="text-sm text-gray-400">Time This Week</div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Continue Learning */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Continue Learning</h2>
                <div className="grid gap-4">
                  {coursesToShow.map((course) => (
                    <Link
                      key={course.id}
                      href={`/courses/${course.id}`}
                      className="card-gradient p-6 rounded-xl border border-gray-700 hover:border-gray-600 transition-all hover:scale-[1.01] group"
                    >
                      <div className="flex items-start gap-4">
                        <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${course.color} flex items-center justify-center text-3xl flex-shrink-0 group-hover:scale-110 transition-transform`}>
                          {course.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-400 transition-colors">
                            {course.title}
                          </h3>
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-sm text-gray-400">{course.lessons.length} lessons available</span>
                            <span className="text-xs text-primary-400 font-semibold">
                              {courseProgress[course.id]?.percentage || 0}% Complete
                            </span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <div 
                              className={`bg-gradient-to-r ${course.color} h-2 rounded-full transition-all duration-300`}
                              style={{ width: `${courseProgress[course.id]?.percentage || 0}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Learning Stats */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Learning Stats</h2>
                <div className="card-gradient rounded-xl border border-gray-700 p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex items-center gap-4">
                      <div className="bg-primary-500/20 p-4 rounded-xl">
                        <BookOpen className="h-8 w-8 text-primary-400" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold">{stats.lessonsCompleted}</div>
                        <div className="text-sm text-gray-400">Lessons Completed</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="bg-orange-500/20 p-4 rounded-xl">
                        <Flame className="h-8 w-8 text-orange-400" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold">{stats.currentStreak} Days</div>
                        <div className="text-sm text-gray-400">Current Streak</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="bg-green-500/20 p-4 rounded-xl">
                        <Clock className="h-8 w-8 text-green-400" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold">{Math.floor(stats.totalTime / 60)}h {stats.totalTime % 60}m</div>
                        <div className="text-sm text-gray-400">Total Time Spent</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="bg-accent-500/20 p-4 rounded-xl">
                        <Trophy className="h-8 w-8 text-accent-400" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold">{stats.totalPoints}</div>
                        <div className="text-sm text-gray-400">Total Points</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-700">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-400">This Week</span>
                      <span className="text-sm font-semibold text-primary-400">{weeklyTime} minutes</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-primary-500 to-accent-500 h-2 rounded-full"
                        style={{ width: `${Math.min((weeklyTime / (settings.dailyGoal * 7)) * 100, 100)}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Goal: {settings.dailyGoal * 7} minutes/week</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Weekly Report */}
              <div className="card-gradient p-6 rounded-xl border border-gray-700">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary-400" />
                  Weekly Report
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">Lessons This Week</span>
                    <span className="font-semibold text-primary-400">{weeklyLessons}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">Challenges This Week</span>
                    <span className="font-semibold text-purple-400">{weeklyChallenges}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">Time This Week</span>
                    <span className="font-semibold text-green-400">{weeklyTime} min</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">Points This Week</span>
                    <span className="font-semibold text-yellow-400">{weeklyPoints}</span>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-700">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-400">Weekly Goal</span>
                      <span className="text-xs font-semibold text-primary-400">
                        {Math.round((weeklyTime / (settings.dailyGoal * 7)) * 100)}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-primary-500 to-accent-500 h-2 rounded-full transition-all"
                        style={{ width: `${Math.min((weeklyTime / (settings.dailyGoal * 7)) * 100, 100)}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">
                      {weeklyTime >= (settings.dailyGoal * 7)
                        ? "✅ Weekly goal achieved!" 
                        : `${(settings.dailyGoal * 7) - weeklyTime} min to goal`}
                    </p>
                  </div>
                </div>
              </div>

              {/* Daily Goal */}
              <div className="card-gradient p-6 rounded-xl border border-gray-700">
                <h3 className="text-lg font-bold mb-4">Daily Target</h3>
                <div className="text-center mb-4">
                  <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-primary-500/20 to-accent-500/20 border-4 border-primary-500/30 mb-2">
                    <span className="text-3xl font-bold text-gradient">
                      {Math.round((stats.lessonsCompleted / settings.dailyGoal) * 100)}%
                    </span>
                  </div>
                  <p className="text-sm text-gray-400">{stats.lessonsCompleted} / {settings.dailyGoal} lessons today</p>
                </div>
                <Link
                  href="/courses"
                  className="block w-full bg-gradient-to-r from-primary-500 to-accent-500 text-white text-center py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  Continue Learning
                </Link>
              </div>

              {/* Achievements */}
              <div className="card-gradient p-6 rounded-xl border border-gray-700">
                <h3 className="text-lg font-bold mb-4">Recent Achievements</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
                    <div className="text-2xl">🏆</div>
                    <div>
                      <div className="font-semibold text-sm">First Steps</div>
                      <div className="text-xs text-gray-400">Complete 5 lessons</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
                    <div className="text-2xl">🔥</div>
                    <div>
                      <div className="font-semibold text-sm">Week Warrior</div>
                      <div className="text-xs text-gray-400">7 day streak</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg opacity-50">
                    <div className="text-2xl">⚡</div>
                    <div>
                      <div className="font-semibold text-sm">Speed Demon</div>
                      <div className="text-xs text-gray-400">Complete in 24h</div>
                    </div>
                  </div>
                </div>
                <Link
                  href="/achievements"
                  className="block text-center text-primary-400 hover:text-primary-300 text-sm font-medium mt-4"
                >
                  View All →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
