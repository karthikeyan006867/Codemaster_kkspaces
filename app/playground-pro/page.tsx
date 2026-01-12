'use client'

import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'

export default function PlaygroundProPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Navbar />
      <Sidebar />
      <div className="ml-0 md:ml-64 pt-16">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-white mb-4">Playground Pro</h1>
          <p className="text-gray-400">Advanced coding environment coming soon...</p>
        </div>
      </div>
    </div>
  )
}
