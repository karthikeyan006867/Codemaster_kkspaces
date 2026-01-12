'use client'

import { useState } from 'react'
import { advancedChallenges, CodeChallenge } from '@/data/advancedChallenges'
import CodeEditor from '@/components/CodeEditor'

export default function AdvancedChallengesPage() {
  const [selectedChallenge, setSelectedChallenge] = useState<CodeChallenge | null>(null)
  const [selectedLanguage, setSelectedLanguage] = useState<string>('python')
  const [userCode, setUserCode] = useState<string>('')
  const [output, setOutput] = useState<string>('')
  const [filterCategory, setFilterCategory] = useState<string>('all')
  const [filterDifficulty, setFilterDifficulty] = useState<string>('all')

  const categories = Array.from(new Set(advancedChallenges.map(c => c.category)))

  const filteredChallenges = advancedChallenges.filter(challenge => {
    const categoryMatch = filterCategory === 'all' || challenge.category === filterCategory
    const difficultyMatch = filterDifficulty === 'all' || challenge.difficulty === filterDifficulty
    return categoryMatch && difficultyMatch
  })

  const handleChallengeSelect = (challenge: CodeChallenge) => {
    setSelectedChallenge(challenge)
    setSelectedLanguage(challenge.languages[0])
    setUserCode(challenge.starterCode[challenge.languages[0]] || '')
    setOutput('')
  }

  const handleLanguageChange = (lang: string) => {
    setSelectedLanguage(lang)
    if (selectedChallenge) {
      setUserCode(selectedChallenge.starterCode[lang] || '')
    }
  }

  const handleRunCode = () => {
    setOutput('Code execution feature coming soon! Check the solution tab for working code.')
  }

  const handleShowSolution = () => {
    if (selectedChallenge) {
      setUserCode(selectedChallenge.solution[selectedLanguage] || '')
      setOutput('✅ Solution loaded! Study the code and understand the approach.')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            🏆 Advanced Code Challenges
          </h1>
          <p className="text-xl text-gray-300">
            Master algorithms, data structures, and problem-solving across multiple languages
          </p>
        </div>

        {!selectedChallenge ? (
          <>
            {/* Filters */}
            <div className="mb-8 flex gap-4 flex-wrap">
              <div>
                <label className="block text-sm font-medium mb-2">Category</label>
                <select
                  value={filterCategory}
                  onChange={(e) => setFilterCategory(e.target.value)}
                  className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white"
                >
                  <option value="all">All Categories</option>
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Difficulty</label>
                <select
                  value={filterDifficulty}
                  onChange={(e) => setFilterDifficulty(e.target.value)}
                  className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white"
                >
                  <option value="all">All Levels</option>
                  <option value="Medium">Medium</option>
                  <option value="Hard">Hard</option>
                  <option value="Expert">Expert</option>
                </select>
              </div>
            </div>

            {/* Challenges Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredChallenges.map(challenge => (
                <div
                  key={challenge.id}
                  onClick={() => handleChallengeSelect(challenge)}
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 cursor-pointer hover:border-blue-500 hover:shadow-xl transition-all transform hover:-translate-y-1"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-blue-400">{challenge.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      challenge.difficulty === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                      challenge.difficulty === 'Hard' ? 'bg-orange-500/20 text-orange-400' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                      {challenge.difficulty}
                    </span>
                  </div>

                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">{challenge.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {challenge.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between items-center text-sm text-gray-400">
                    <span>⏱️ {challenge.estimatedTime} min</span>
                    <span>🏅 {challenge.points} points</span>
                  </div>

                  <div className="mt-4 flex gap-2">
                    {challenge.languages.slice(0, 4).map(lang => (
                      <span key={lang} className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded">
                        {lang}
                      </span>
                    ))}
                    {challenge.languages.length > 4 && (
                      <span className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded">
                        +{challenge.languages.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            {/* Challenge Detail View */}
            <button
              onClick={() => setSelectedChallenge(null)}
              className="mb-6 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition"
            >
              ← Back to Challenges
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left: Problem Description */}
              <div className="lg:col-span-1 space-y-6">
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                  <h2 className="text-2xl font-bold text-blue-400 mb-4">{selectedChallenge.title}</h2>
                  
                  <div className="flex gap-3 mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      selectedChallenge.difficulty === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                      selectedChallenge.difficulty === 'Hard' ? 'bg-orange-500/20 text-orange-400' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                      {selectedChallenge.difficulty}
                    </span>
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs font-bold">
                      {selectedChallenge.points} points
                    </span>
                  </div>

                  <p className="text-gray-300 mb-6 whitespace-pre-line">{selectedChallenge.description}</p>

                  <h3 className="text-lg font-bold text-green-400 mb-3">Test Cases</h3>
                  {selectedChallenge.testCases.map((testCase, index) => (
                    <div key={index} className="bg-gray-900/50 rounded-lg p-4 mb-3">
                      <p className="text-sm text-gray-400 mb-1">Input:</p>
                      <code className="text-blue-300 text-sm">{testCase.input}</code>
                      
                      <p className="text-sm text-gray-400 mt-2 mb-1">Expected Output:</p>
                      <code className="text-green-300 text-sm">{testCase.expectedOutput}</code>
                      
                      <p className="text-xs text-gray-500 mt-2">{testCase.explanation}</p>
                    </div>
                  ))}

                  <h3 className="text-lg font-bold text-yellow-400 mb-3 mt-6">Hints</h3>
                  {selectedChallenge.hints.map((hint, index) => (
                    <div key={index} className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3 mb-2">
                      <p className="text-sm text-yellow-200">💡 Hint {index + 1}: {hint}</p>
                    </div>
                  ))}

                  <h3 className="text-lg font-bold text-purple-400 mb-3 mt-6">Learning Objectives</h3>
                  <ul className="space-y-2">
                    {selectedChallenge.learningObjectives.map((obj, index) => (
                      <li key={index} className="text-sm text-gray-300 flex items-start">
                        <span className="text-purple-400 mr-2">✓</span>
                        {obj}
                      </li>
                    ))}
                  </ul>

                  <h3 className="text-lg font-bold text-blue-400 mb-3 mt-6">Real-World Application</h3>
                  <p className="text-sm text-gray-300">{selectedChallenge.realWorldApplication}</p>
                </div>
              </div>

              {/* Right: Code Editor */}
              <div className="lg:col-span-2 space-y-4">
                {/* Language Selector */}
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-4">
                  <label className="block text-sm font-medium mb-2">Choose Language:</label>
                  <div className="flex gap-2 flex-wrap">
                    {selectedChallenge.languages.map(lang => (
                      <button
                        key={lang}
                        onClick={() => handleLanguageChange(lang)}
                        className={`px-4 py-2 rounded-lg font-medium transition ${
                          selectedLanguage === lang
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                        }`}
                      >
                        {lang.charAt(0).toUpperCase() + lang.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Code Editor */}
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden">
                  <div className="bg-gray-900/70 px-4 py-2 flex justify-between items-center border-b border-gray-700">
                    <span className="text-sm font-medium">Code Editor</span>
                    <div className="flex gap-2">
                      <button
                        onClick={handleRunCode}
                        className="px-4 py-1 bg-green-600 hover:bg-green-700 rounded text-sm font-medium transition"
                      >
                        ▶ Run Code
                      </button>
                      <button
                        onClick={handleShowSolution}
                        className="px-4 py-1 bg-yellow-600 hover:bg-yellow-700 rounded text-sm font-medium transition"
                      >
                        💡 Show Solution
                      </button>
                    </div>
                  </div>
                  
                  <CodeEditor
                    initialCode={userCode}
                    language={selectedLanguage}
                  />
                </div>

                {/* Output */}
                {output && (
                  <div className="bg-gray-900/70 border border-gray-700 rounded-xl p-4">
                    <h3 className="text-sm font-bold text-green-400 mb-2">Output:</h3>
                    <pre className="text-sm text-gray-300 whitespace-pre-wrap">{output}</pre>
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
