'use client'

import { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import { FileCode, Plus, Search, Tag, Star, Copy, Trash2, Edit, X } from 'lucide-react'
import { Editor } from '@monaco-editor/react'

interface Snippet {
  id: string
  title: string
  language: string
  code: string
  tags: string[]
  starred: boolean
  createdAt: string
}

const defaultSnippets: Snippet[] = [
  {
    id: '1',
    title: 'Debounce Function',
    language: 'javascript',
    code: `function debounce(func, delay) {\n  let timeout;\n  return function(...args) {\n    clearTimeout(timeout);\n    timeout = setTimeout(() => func.apply(this, args), delay);\n  };\n}`,
    tags: ['utility', 'performance'],
    starred: true,
    createdAt: '2024-01-15'
  },
  {
    id: '2',
    title: 'Quick Sort Algorithm',
    language: 'python',
    code: `def quicksort(arr):\n    if len(arr) <= 1:\n        return arr\n    pivot = arr[len(arr) // 2]\n    left = [x for x in arr if x < pivot]\n    middle = [x for x in arr if x == pivot]\n    right = [x for x in arr if x > pivot]\n    return quicksort(left) + middle + quicksort(right)`,
    tags: ['algorithm', 'sorting'],
    starred: false,
    createdAt: '2024-01-14'
  },
  {
    id: '3',
    title: 'React Custom Hook',
    language: 'typescript',
    code: `import { useState, useEffect } from 'react';\n\nfunction useLocalStorage<T>(key: string, initialValue: T) {\n  const [value, setValue] = useState<T>(() => {\n    const item = localStorage.getItem(key);\n    return item ? JSON.parse(item) : initialValue;\n  });\n\n  useEffect(() => {\n    localStorage.setItem(key, JSON.stringify(value));\n  }, [key, value]);\n\n  return [value, setValue] as const;\n}`,
    tags: ['react', 'hooks', 'typescript'],
    starred: true,
    createdAt: '2024-01-13'
  }
]

export default function SnippetsPage() {
  const [snippets, setSnippets] = useState<Snippet[]>(defaultSnippets)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedLanguage, setSelectedLanguage] = useState('all')
  const [selectedSnippet, setSelectedSnippet] = useState<Snippet | null>(defaultSnippets[0])
  const [isCreating, setIsCreating] = useState(false)
  const [newSnippet, setNewSnippet] = useState({ title: '', language: 'javascript', code: '', tags: '' })

  // Load snippets from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('code-snippets')
    if (saved) {
      try {
        const parsed = JSON.parse(saved)
        setSnippets(parsed)
        if (parsed.length > 0) setSelectedSnippet(parsed[0])
      } catch (e) {
        console.error('Failed to load snippets:', e)
      }
    }
  }, [])

  // Save to localStorage whenever snippets change
  useEffect(() => {
    if (snippets.length > 0) {
      localStorage.setItem('code-snippets', JSON.stringify(snippets))
    }
  }, [snippets])

  const filteredSnippets = snippets.filter(snippet => {
    const matchesSearch = snippet.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         snippet.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesLanguage = selectedLanguage === 'all' || snippet.language === selectedLanguage
    return matchesSearch && matchesLanguage
  })

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code)
    alert('Code copied to clipboard!')
  }

  const handleToggleStar = (id: string) => {
    setSnippets(snippets.map(s => 
      s.id === id ? { ...s, starred: !s.starred } : s
    ))
  }

  const handleDelete = (id: string) => {
    if (confirm('Delete this snippet?')) {
      const updated = snippets.filter(s => s.id !== id)
      setSnippets(updated)
      if (selectedSnippet?.id === id) {
        setSelectedSnippet(updated[0] || null)
      }
    }
  }

  const handleCreateSnippet = () => {
    if (!newSnippet.title || !newSnippet.code) {
      alert('Please fill in title and code')
      return
    }

    const snippet: Snippet = {
      id: Date.now().toString(),
      title: newSnippet.title,
      language: newSnippet.language,
      code: newSnippet.code,
      tags: newSnippet.tags.split(',').map(t => t.trim()).filter(Boolean),
      starred: false,
      createdAt: new Date().toISOString().split('T')[0]
    }

    setSnippets([snippet, ...snippets])
    setSelectedSnippet(snippet)
    setIsCreating(false)
    setNewSnippet({ title: '', language: 'javascript', code: '', tags: '' })
    alert('Snippet created successfully!')
  }

  return (
    <div className="min-h-screen bg-gray-950">
      <Navbar />
      <Sidebar />
      
      <main className="ml-0 md:ml-64 pt-16 pb-20 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* Header */}
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2 flex items-center gap-3">
                <FileCode className="h-8 w-8 text-primary-400" />
                <span className="text-gradient">Code Snippets</span>
              </h1>
              <p className="text-gray-400">
                Save and organize your favorite code snippets
              </p>
            </div>

            <button 
              onClick={() => setIsCreating(true)}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-lg hover:opacity-90 transition-opacity font-semibold"
            >
              <Plus className="h-5 w-5" />
              New Snippet
            </button>
          </div>

          {/* Filters */}
          <div className="mb-6 flex flex-wrap gap-3">
            <div className="relative flex-1 min-w-[200px]">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search snippets..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>

            <select
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
              className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="all">All Languages</option>
              <option value="javascript">JavaScript</option>
              <option value="python">Python</option>
              <option value="typescript">TypeScript</option>
              <option value="java">Java</option>
              <option value="csharp">C#</option>
            </select>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Snippets List */}
            <div className="lg:col-span-1 space-y-3">
              <h2 className="font-semibold text-sm text-gray-400 mb-3">
                {filteredSnippets.length} snippets
              </h2>
              {filteredSnippets.map((snippet) => (
                <div
                  key={snippet.id}
                  onClick={() => setSelectedSnippet(snippet)}
                  className={`card-gradient border-2 rounded-xl p-4 cursor-pointer transition-all ${
                    selectedSnippet?.id === snippet.id
                      ? 'border-primary-500'
                      : 'border-gray-700 hover:border-gray-600'
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold">{snippet.title}</h3>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        handleToggleStar(snippet.id)
                      }}
                    >
                      <Star className={`h-4 w-4 ${snippet.starred ? 'text-yellow-400 fill-yellow-400' : 'text-gray-400'}`} />
                    </button>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 bg-primary-500/20 text-primary-400 rounded text-xs">
                      {snippet.language}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {snippet.tags.map((tag, i) => (
                      <span key={i} className="text-xs text-gray-400">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Snippet Details */}
            {selectedSnippet && !isCreating && (
              <div className="lg:col-span-2 card-gradient border border-gray-700 rounded-xl p-6">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">{selectedSnippet.title}</h2>
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 bg-primary-500/20 text-primary-400 rounded-full text-sm font-semibold">
                        {selectedSnippet.language}
                      </span>
                      <span className="text-sm text-gray-400">
                        Created {selectedSnippet.createdAt}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button 
                      onClick={() => handleToggleStar(selectedSnippet.id)}
                      className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      <Star className={`h-5 w-5 ${selectedSnippet.starred ? 'text-yellow-400 fill-yellow-400' : 'text-gray-400'}`} />
                    </button>
                    <button 
                      onClick={() => handleDelete(selectedSnippet.id)}
                      className="p-2 bg-red-900/30 rounded-lg hover:bg-red-900/50 transition-colors"
                    >
                      <Trash2 className="h-5 w-5 text-red-400" />
                    </button>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {selectedSnippet.tags.map((tag, i) => (
                      <span key={i} className="flex items-center gap-1 px-3 py-1 bg-gray-800 rounded-full text-sm">
                        <Tag className="h-3 w-3" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="relative">
                  <button
                    onClick={() => handleCopy(selectedSnippet.code)}
                    className="absolute top-3 right-3 z-10 flex items-center gap-2 px-3 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors text-sm"
                  >
                    <Copy className="h-4 w-4" />
                    Copy
                  </button>
                  <Editor
                    height="500px"
                    language={selectedSnippet.language}
                    value={selectedSnippet.code}
                    theme="vs-dark"
                    options={{
                      readOnly: true,
                      minimap: { enabled: false },
                      fontSize: 14,
                      lineNumbers: 'on',
                      scrollBeyondLastLine: false,
                      automaticLayout: true,
                    }}
                  />
                </div>
              </div>
            )}

            {/* Create New Snippet Form */}
            {isCreating && (
              <div className="lg:col-span-2 card-gradient border border-gray-700 rounded-xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold">Create New Snippet</h2>
                  <button 
                    onClick={() => setIsCreating(false)}
                    className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Title</label>
                    <input
                      type="text"
                      value={newSnippet.title}
                      onChange={(e) => setNewSnippet({ ...newSnippet, title: e.target.value })}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="e.g., Array Map Function"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Language</label>
                      <select
                        value={newSnippet.language}
                        onChange={(e) => setNewSnippet({ ...newSnippet, language: e.target.value })}
                        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                      >
                        <option value="javascript">JavaScript</option>
                        <option value="python">Python</option>
                        <option value="typescript">TypeScript</option>
                        <option value="java">Java</option>
                        <option value="csharp">C#</option>
                        <option value="go">Go</option>
                        <option value="rust">Rust</option>
                        <option value="ruby">Ruby</option>
                        <option value="php">PHP</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Tags (comma-separated)</label>
                      <input
                        type="text"
                        value={newSnippet.tags}
                        onChange={(e) => setNewSnippet({ ...newSnippet, tags: e.target.value })}
                        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                        placeholder="e.g., array, utility, functional"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Code</label>
                    <Editor
                      height="400px"
                      language={newSnippet.language}
                      value={newSnippet.code}
                      onChange={(value) => setNewSnippet({ ...newSnippet, code: value || '' })}
                      theme="vs-dark"
                      options={{
                        minimap: { enabled: false },
                        fontSize: 14,
                        lineNumbers: 'on',
                        scrollBeyondLastLine: false,
                        automaticLayout: true,
                      }}
                    />
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={handleCreateSnippet}
                      className="flex-1 bg-gradient-to-r from-primary-500 to-accent-500 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                    >
                      Create Snippet
                    </button>
                    <button
                      onClick={() => setIsCreating(false)}
                      className="px-6 bg-gray-800 text-white py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
