'use client'

import { useState } from 'react'
import Link from 'next/link'
import { courses } from '@/data/courses'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import { ArrowRight, Clock, BookOpen, Filter } from 'lucide-react'

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('All')

  const categories = ['All', 'Frontend', 'Backend', 'Database', 'Mobile', 'DevOps', 'Data Science', 'Systems', 'Full-Stack']
  const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced']

  const filteredCourses = courses.filter(course => {
    const categoryMatch = selectedCategory === 'All' || course.category === selectedCategory
    const difficultyMatch = selectedDifficulty === 'All' || course.difficulty === selectedDifficulty
    return categoryMatch && difficultyMatch
  })

  return (
    <div className="min-h-screen">
      <Navbar />
      <Sidebar />
      
      <main className="ml-0 md:ml-64 pt-16 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Browse <span className="text-gradient">Courses</span>
            </h1>
            <p className="text-xl text-gray-400">
              Choose your learning path and start coding today
            </p>
          </div>

          {/* Filters */}
          <div className="mb-8 space-y-6">
            {/* Category Filter */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Filter className="h-5 w-5 text-primary-400" />
                <h3 className="text-lg font-semibold">Category</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                      selectedCategory === category
                        ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/50'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Difficulty Filter */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Difficulty Level</h3>
              <div className="flex flex-wrap gap-2">
                {difficulties.map((difficulty) => (
                  <button
                    key={difficulty}
                    onClick={() => setSelectedDifficulty(difficulty)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                      selectedDifficulty === difficulty
                        ? difficulty === 'Beginner'
                          ? 'bg-green-500 text-white shadow-lg shadow-green-500/50'
                          : difficulty === 'Intermediate'
                          ? 'bg-yellow-500 text-white shadow-lg shadow-yellow-500/50'
                          : difficulty === 'Advanced'
                          ? 'bg-red-500 text-white shadow-lg shadow-red-500/50'
                          : 'bg-primary-500 text-white shadow-lg shadow-primary-500/50'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700'
                    }`}
                  >
                    {difficulty}
                  </button>
                ))}
              </div>
            </div>

            {/* Results Count */}
            <div className="text-gray-400">
              Showing <span className="text-primary-400 font-semibold">{filteredCourses.length}</span> course{filteredCourses.length !== 1 ? 's' : ''}
            </div>
          </div>

          {/* Courses Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredCourses.map((course) => (
              <Link
                key={course.id}
                href={`/courses/${course.id}`}
                className="card-gradient p-8 rounded-2xl border border-gray-700 hover:border-gray-600 transition-all hover:scale-[1.02] hover:glow group"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${course.color} flex items-center justify-center text-4xl group-hover:scale-110 transition-transform`}>
                    {course.icon}
                  </div>
                  <div className="flex flex-col gap-2 items-end">
                    <span className="px-3 py-1 bg-primary-500/20 text-primary-400 rounded-full text-sm font-medium border border-primary-500/30">
                      {course.difficulty}
                    </span>
                    <span className="px-3 py-1 bg-accent-500/20 text-accent-400 rounded-full text-xs font-medium border border-accent-500/30">
                      {course.category}
                    </span>
                  </div>
                </div>

                <h2 className="text-2xl font-bold mb-3">{course.title}</h2>
                <p className="text-gray-400 mb-6">{course.description}</p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <div className="flex items-center space-x-1">
                      <BookOpen className="h-4 w-4" />
                      <span>{course.lessons.length} Lessons</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{course.duration}</span>
                    </div>
                  </div>
                  <ArrowRight className="h-5 w-5 text-primary-400 group-hover:translate-x-2 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

          {/* No Results */}
          {filteredCourses.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-400 mb-4">No courses found with the selected filters</p>
              <button
                onClick={() => {
                  setSelectedCategory('All')
                  setSelectedDifficulty('All')
                }}
                className="px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
