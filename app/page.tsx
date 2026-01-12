'use client'

import Link from 'next/link'
import { ArrowRight, Code, Zap, Trophy, Users } from 'lucide-react'
import Navbar from '@/components/Navbar'

export default function HomePage() {
  const courses = [
    {
      id: 'html',
      title: 'HTML Fundamentals',
      icon: '🌐',
      level: 'Beginner',
      lessons: 25,
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'css',
      title: 'CSS Mastery',
      icon: '🎨',
      level: 'Beginner to Advanced',
      lessons: 35,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'javascript',
      title: 'JavaScript Pro',
      icon: '⚡',
      level: 'Beginner to Expert',
      lessons: 50,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      id: 'python',
      title: 'Python Full Stack',
      icon: '🐍',
      level: 'All Levels',
      lessons: 60,
      color: 'from-green-500 to-emerald-500'
    },
  ]

  const features = [
    {
      icon: Code,
      title: 'Interactive Code Editor',
      description: 'Write and test code in real-time with our built-in Monaco editor'
    },
    {
      icon: Zap,
      title: 'Instant Feedback',
      description: 'Get immediate results and learn from your mistakes faster'
    },
    {
      icon: Trophy,
      title: 'Achievements & Badges',
      description: 'Earn rewards as you progress through courses and challenges'
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Learn with thousands of developers from around the world'
    },
  ]

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Master <span className="text-gradient">Full-Stack</span>
            <br />
            Development
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
            Learn HTML, CSS, JavaScript, and Python from scratch to professional level.
            Interactive lessons, real-world projects, and instant feedback.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/sign-up"
              className="bg-gradient-to-r from-primary-500 to-accent-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-all hover:scale-105 flex items-center gap-2 group"
            >
              Start Learning Free
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/courses"
              className="border border-gray-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-colors"
            >
              Browse Courses
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient mb-2">34</div>
              <div className="text-gray-400">Languages</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient mb-2">56</div>
              <div className="text-gray-400">Challenges</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient mb-2">100+</div>
              <div className="text-gray-400">Achievements</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient mb-2">100%</div>
              <div className="text-gray-400">Free</div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            Choose Your <span className="text-gradient">Learning Path</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Start from the basics or jump into advanced topics. All courses are designed
            to take you from zero to hero.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course, index) => (
              <Link
                key={index}
                href={`/courses/${course.id}`}
                className="card-gradient p-6 rounded-2xl border border-gray-700 hover:border-gray-600 transition-all hover:scale-105 hover:glow group"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${course.color} flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform`}>
                  {course.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                <p className="text-sm text-gray-400 mb-4">{course.level}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">{course.lessons} Lessons</span>
                  <ArrowRight className="h-4 w-4 text-primary-400 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Why <span className="text-gradient">CodeMaster</span> Academy?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary-500/20 to-accent-500/20 border border-primary-500/30 mb-4">
                  <feature.icon className="h-8 w-8 text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center bg-white p-12 rounded-2xl border-2 border-gray-200 shadow-2xl">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Ready to Start Your Journey?
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Join thousands of developers learning to code. It&apos;s completely free!
          </p>
          <Link
            href="/sign-up"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500 to-accent-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-all hover:scale-105 group shadow-lg"
          >
            Get Started Now
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 px-4">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>&copy; 2025 CodeMaster Academy. Built with Next.js, Clerk, and ❤️</p>
        </div>
      </footer>
    </div>
  )
}
