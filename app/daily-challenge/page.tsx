'use client'

import { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import CodeEditor from '@/components/CodeEditor'
import { Calendar, Trophy, Flame, Star, Award, Clock } from 'lucide-react'
import { useProgressStore } from '@/store/progressStore'

const dailyChallenge = {
  id: 'daily-sum-challenge',
  title: "Sum of Two Numbers",
  difficulty: "Easy",
  points: 100,
  description: "Write a function that takes two numbers as parameters and returns their sum.",
  testCases: [
    { 
      name: 'Test Case 1: sum(5, 3)', 
      test: (code: string) => {
        try {
          // Create isolated scope for eval
          const func = new Function(code + '; return typeof sum !== "undefined" ? sum : null;')
          const sum = func()
          if (typeof sum === 'function') {
            return sum(5, 3) === 8
          }
          return false
        } catch (error) {
          console.error('Test error:', error)
          return false
        }
      },
      errorMessage: 'Expected sum(5, 3) to return 8'
    },
    { 
      name: 'Test Case 2: sum(-1, 1)', 
      test: (code: string) => {
        try {
          const func = new Function(code + '; return typeof sum !== "undefined" ? sum : null;')
          const sum = func()
          if (typeof sum === 'function') {
            return sum(-1, 1) === 0
          }
          return false
        } catch (error) {
          console.error('Test error:', error)
          return false
        }
      },
      errorMessage: 'Expected sum(-1, 1) to return 0'
    },
    { 
      name: 'Test Case 3: sum(100, 200)', 
      test: (code: string) => {
        try {
          const func = new Function(code + '; return typeof sum !== "undefined" ? sum : null;')
          const sum = func()
          if (typeof sum === 'function') {
            return sum(100, 200) === 300
          }
          return false
        } catch (error) {
          console.error('Test error:', error)
          return false
        }
      },
      errorMessage: 'Expected sum(100, 200) to return 300'
    }
  ],
  starterCode: {
    javascript: `function sum(a, b) {\n  // Your code here\n  return a + b;\n}\n\n// Test your function\nconsole.log(sum(5, 3)); // Should output 8\nconsole.log(sum(-1, 1)); // Should output 0\nconsole.log(sum(100, 200)); // Should output 300`,
    python: `def sum(a, b):\n    # Your code here\n    return a + b\n\n# Test your function\nprint(sum(5, 3))  # Should output 8\nprint(sum(-1, 1))  # Should output 0\nprint(sum(100, 200))  # Should output 300`,
    typescript: `function sum(a: number, b: number): number {\n  // Your code here\n  return a + b;\n}\n\n// Test your function\nconsole.log(sum(5, 3)); // Should output 8\nconsole.log(sum(-1, 1)); // Should output 0\nconsole.log(sum(100, 200)); // Should output 300`
  }
}

export default function DailyChallengePage() {
  const [language, setLanguage] = useState<'javascript' | 'python' | 'typescript'>('javascript')
  const [completed, setCompleted] = useState(false)
  const { streak, totalPoints, completeChallenge, completedChallenges } = useProgressStore()

  useEffect(() => {
    // Check if already completed
    if (completedChallenges.includes(dailyChallenge.id)) {
      setCompleted(true)
    }
  }, [completedChallenges])

  const handleSuccess = () => {
    if (!completed && !completedChallenges.includes(dailyChallenge.id)) {
      setCompleted(true)
      completeChallenge(dailyChallenge.id)
      setTimeout(() => {
        alert(`🎉 Challenge completed! +${dailyChallenge.points} points\nTotal Points: ${totalPoints + dailyChallenge.points}`)
      }, 500)
    }
  }

  return (
    <div className="min-h-screen bg-gray-950">
      <Navbar />
      <Sidebar />
      
      <main className="ml-0 md:ml-64 pt-16 pb-20 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* Header */}
          <div className="mb-6">
            <h1 className="text-3xl md:text-4xl font-bold mb-2 flex items-center gap-3">
              <Calendar className="h-8 w-8 text-primary-400" />
              <span className="text-gradient">Daily Challenge</span>
            </h1>
            <p className="text-gray-400">
              Complete today&apos;s challenge to maintain your streak!
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="card-gradient border border-gray-700 rounded-xl p-4">
              <div className="flex items-center gap-3">
                <div className="bg-orange-500/20 p-3 rounded-lg">
                  <Flame className="h-6 w-6 text-orange-400" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Current Streak</div>
                  <div className="text-2xl font-bold">{streak} Days</div>
                </div>
              </div>
            </div>

            <div className="card-gradient border border-gray-700 rounded-xl p-4">
              <div className="flex items-center gap-3">
                <div className="bg-yellow-500/20 p-3 rounded-lg">
                  <Trophy className="h-6 w-6 text-yellow-400" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Challenges Completed</div>
                  <div className="text-2xl font-bold">{completedChallenges.length}</div>
                </div>
              </div>
            </div>

            <div className="card-gradient border border-gray-700 rounded-xl p-4">
              <div className="flex items-center gap-3">
                <div className="bg-primary-500/20 p-3 rounded-lg">
                  <Star className="h-6 w-6 text-primary-400" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Total Points</div>
                  <div className="text-2xl font-bold">{totalPoints.toLocaleString()}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Challenge Details */}
            <div className="card-gradient border border-gray-700 rounded-xl p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold mb-2">{dailyChallenge.title}</h2>
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-semibold">
                      {dailyChallenge.difficulty}
                    </span>
                    <span className="flex items-center gap-1 text-yellow-400">
                      <Trophy className="h-4 w-4" />
                      {dailyChallenge.points} pts
                    </span>
                  </div>
                </div>
                {completed && (
                  <div className="bg-green-500/20 p-3 rounded-lg">
                    <Award className="h-6 w-6 text-green-400" />
                  </div>
                )}
              </div>

              <div className="mb-6">
                <h3 className="font-semibold mb-2">Description</h3>
                <p className="text-gray-300">{dailyChallenge.description}</p>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  Test Cases
                </h3>
                <div className="space-y-2">
                  {dailyChallenge.testCases.map((test, i) => (
                    <div key={i} className="bg-gray-800/50 rounded-lg p-3">
                      <div className="text-sm font-medium text-primary-400 mb-1">
                        {test.name}
                      </div>
                      <div className="text-xs text-gray-400">
                        {test.errorMessage.replace('Expected ', '')}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                <p className="text-sm text-blue-300">
                  💡 <strong>Hint:</strong> Use the + operator to add two numbers together.
                </p>
              </div>
            </div>

            {/* Code Editor */}
            <div className="space-y-4">
              <div className="flex gap-2">
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value as any)}
                  className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="javascript">JavaScript</option>
                  <option value="python">Python</option>
                  <option value="typescript">TypeScript</option>
                </select>
              </div>

              <div className="card-gradient border border-gray-700 rounded-xl p-4">
                <CodeEditor
                  language={language}
                  initialCode={dailyChallenge.starterCode[language]}
                  testCases={language === 'javascript' || language === 'typescript' ? dailyChallenge.testCases : undefined}
                  onSuccess={handleSuccess}
                />
              </div>
            </div>
          </div>

          {/* Previous Challenges */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Previous Challenges</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: 'Reverse String', difficulty: 'Easy', completed: true },
                { title: 'Find Maximum', difficulty: 'Medium', completed: true },
                { title: 'Binary Search', difficulty: 'Hard', completed: false },
              ].map((challenge, i) => (
                <div key={i} className="card-gradient border border-gray-700 rounded-xl p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold">{challenge.title}</h3>
                    {challenge.completed && (
                      <Award className="h-5 w-5 text-green-400" />
                    )}
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    challenge.difficulty === 'Easy' ? 'bg-green-500/20 text-green-400' :
                    challenge.difficulty === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-red-500/20 text-red-400'
                  }`}>
                    {challenge.difficulty}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
