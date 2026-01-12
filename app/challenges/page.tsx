'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import { Trophy, Clock, Code2, Zap, Flame, Star, Lock, CheckCircle2 } from 'lucide-react'
import CodeEditor from '@/components/CodeEditor'
import { challenges as allChallenges, Challenge as ChallengeType } from '@/data/challenges'
import { useProgressStore } from '@/store/progressStore'

export default function ChallengesPage() {
  const [selectedChallenge, setSelectedChallenge] = useState<ChallengeType | null>(null)
  const [selectedLanguage, setSelectedLanguage] = useState<string>('javascript')
  const [filter, setFilter] = useState<'all' | 'easy' | 'medium' | 'hard' | 'expert'>('all')
  const { completedChallenges, completeChallenge } = useProgressStore()

  const languages = [
    { id: 'javascript', name: 'JavaScript', icon: '🟨' },
    { id: 'python', name: 'Python', icon: '🐍' },
    { id: 'typescript', name: 'TypeScript', icon: '🔷' },
    { id: 'java', name: 'Java', icon: '☕' },
    { id: 'csharp', name: 'C#', icon: '💜' },
    { id: 'go', name: 'Go', icon: '🔵' },
    { id: 'rust', name: 'Rust', icon: '🦀' },
    { id: 'ruby', name: 'Ruby', icon: '💎' },
    { id: 'php', name: 'PHP', icon: '🐘' },
    { id: 'swift', name: 'Swift', icon: '🍎' },
  ]

  const filteredChallenges = allChallenges.filter(ch => 
    filter === 'all' || ch.difficulty.toLowerCase() === filter
  )

  const totalPoints = completedChallenges.length * 100
  const completedCount = completedChallenges.length

  const handleSubmit = () => {
    if (!selectedChallenge) return
    
    try {
      // Mark as completed
      completeChallenge(selectedChallenge.id)
      alert('Challenge completed! 🎉')
    } catch (error) {
      console.error('Error completing challenge:', error)
    }
  }

  const getDifficultyColor = (difficulty: string) => {
    const colors = {
      'Easy': 'text-green-400 bg-green-500/10',
      'Medium': 'text-yellow-400 bg-yellow-500/10',
      'Hard': 'text-orange-400 bg-orange-500/10',
      'Expert': 'text-red-400 bg-red-500/10'
    }
    return colors[difficulty as keyof typeof colors] || colors.Easy
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <Sidebar />
      
      <main className="ml-0 md:ml-64 pt-16 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">
              Coding <span className="text-gradient">Challenges</span>
            </h1>
            <p className="text-gray-400 text-lg">
              Test your skills with real-world coding challenges
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="card-gradient p-4 rounded-xl border border-gray-700">
              <div className="text-2xl font-bold text-primary-400">{completedCount}</div>
              <div className="text-sm text-gray-400">Completed</div>
            </div>
            <div className="card-gradient p-4 rounded-xl border border-gray-700">
              <div className="text-2xl font-bold text-accent-400">{allChallenges.length}</div>
              <div className="text-sm text-gray-400">Total</div>
            </div>
            <div className="card-gradient p-4 rounded-xl border border-gray-700">
              <div className="text-2xl font-bold text-green-400">{totalPoints}</div>
              <div className="text-sm text-gray-400">Points</div>
            </div>
            <div className="card-gradient p-4 rounded-xl border border-gray-700">
              <div className="text-2xl font-bold text-orange-400">0</div>
              <div className="text-sm text-gray-400">Streak</div>
            </div>
          </div>

          {/* Filters */}
          <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
            {['all', 'easy', 'medium', 'hard', 'expert'].map(diff => (
              <button
                key={diff}
                onClick={() => setFilter(diff as any)}
                className={`px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
                  filter === diff
                    ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white'
                    : 'bg-gray-800 text-gray-400 hover:text-white'
                }`}
              >
                {diff.charAt(0).toUpperCase() + diff.slice(1)}
              </button>
            ))}
          </div>

          {/* Challenges Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredChallenges.map(challenge => {
              const isCompleted = completedChallenges.includes(challenge.id)
              return (
                <div
                  key={challenge.id}
                  className="card-gradient p-6 rounded-xl border border-gray-700 hover:border-gray-600 transition-all cursor-pointer group"
                  onClick={() => setSelectedChallenge(challenge)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`px-3 py-1 rounded-full text-xs font-semibold border ${getDifficultyColor(challenge.difficulty)}`}>
                      {challenge.difficulty}
                    </div>
                    {isCompleted && <CheckCircle2 className="h-5 w-5 text-green-400" />}
                  </div>

                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary-400 transition-colors">
                    {challenge.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {challenge.description}
                  </p>

                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1 text-gray-400">
                        <Trophy className="h-4 w-4" />
                        <span>{challenge.points}</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-400">
                        <Clock className="h-4 w-4" />
                        <span>{challenge.timeLimit}m</span>
                      </div>
                    </div>
                    <div className="text-xs text-gray-500">{challenge.category}</div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Challenge Modal */}
          {selectedChallenge && (
            <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
              <div className="bg-gray-900 border border-gray-700 rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
                <div className="sticky top-0 bg-gray-900 border-b border-gray-700 p-6 flex items-center justify-between z-10">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">{selectedChallenge.title}</h2>
                    <div className="flex items-center gap-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getDifficultyColor(selectedChallenge.difficulty)}`}>
                        {selectedChallenge.difficulty}
                      </span>
                      <span className="text-sm text-gray-400">{selectedChallenge.category}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedChallenge(null)}
                    className="text-gray-400 hover:text-white transition-colors text-3xl font-light leading-none"
                  >
                    ×
                  </button>
                </div>

                <div className="p-6 space-y-6">
                  <div>
                    <h3 className="text-lg font-bold mb-2">Description</h3>
                    <p className="text-gray-300">{selectedChallenge.prompt}</p>
                  </div>

                  {/* Code Editor and Output */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-bold mb-3">Your Solution</h3>
                      <CodeEditor
                        language={selectedLanguage}
                        initialCode={selectedChallenge.initialCode}
                        onSuccess={() => completeChallenge(selectedChallenge.id)}
                      />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold mb-2">Requirements</h3>
                    <div className="flex items-center gap-6 text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <Trophy className="h-4 w-4" />
                        <span>{selectedChallenge.points} points</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>{selectedChallenge.timeLimit} minutes</span>
                      </div>
                    </div>
                  </div>

                  {/* Language Selector */}
                  <div>
                    <h3 className="text-lg font-bold mb-3">Choose Your Language</h3>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                      {languages.map(lang => (
                        <button
                          key={lang.id}
                          onClick={() => setSelectedLanguage(lang.id)}
                          className={`p-3 rounded-lg border transition-all ${
                            selectedLanguage === lang.id
                              ? 'border-primary-500 bg-primary-500/10 text-white'
                              : 'border-gray-700 hover:border-gray-600 text-gray-400 hover:text-white'
                          }`}
                        >
                          <div className="text-2xl mb-1">{lang.icon}</div>
                          <div className="text-sm font-semibold">{lang.name}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {selectedChallenge.hints && (
                    <div>
                      <h3 className="text-lg font-bold mb-2">Hints</h3>
                      <ul className="list-disc list-inside space-y-1 text-gray-400">
                        {selectedChallenge.hints.map((hint, i) => (
                          <li key={i}>{hint}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
