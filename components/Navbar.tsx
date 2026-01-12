'use client'

import Link from 'next/link'
import { SignInButton, SignUpButton, UserButton, useUser } from '@clerk/nextjs'
import { Code2, Menu, X } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'

export default function Navbar() {
  const { isSignedIn, user } = useUser()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-xl border-b border-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="bg-gradient-to-br from-primary-500 to-accent-500 p-2 rounded-lg group-hover:scale-110 transition-transform">
              <Code2 className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
            </div>
            <span className="text-lg sm:text-xl font-bold text-gradient">CodeMaster</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Link href="/courses" className="text-sm lg:text-base text-gray-300 hover:text-white transition-colors font-medium">
              Courses
            </Link>
            <Link href="/challenges" className="text-sm lg:text-base text-gray-300 hover:text-white transition-colors font-medium">
              Challenges
            </Link>
            <Link href="/dashboard" className="text-sm lg:text-base text-gray-300 hover:text-white transition-colors font-medium">
              Dashboard
            </Link>
          </div>

          {/* Auth Buttons & Profile */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            {!isSignedIn ? (
              <>
                <SignInButton mode="modal">
                  <button className="hidden sm:block text-gray-300 hover:text-white transition-colors px-3 lg:px-4 py-2 text-sm lg:text-base font-medium">
                    Sign In
                  </button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <button className="bg-gradient-to-r from-primary-500 to-accent-500 text-white px-4 sm:px-6 py-2 rounded-lg hover:opacity-90 transition-opacity font-semibold text-sm lg:text-base shadow-lg">
                    Get Started
                  </button>
                </SignUpButton>
              </>
            ) : (
              <div className="flex items-center gap-3 sm:gap-4">
                {/* User Profile Photo & Name - Desktop */}
                <div className="hidden md:flex items-center gap-3 px-3 py-1.5 rounded-lg bg-gray-800/50 border border-gray-700">
                  {user?.imageUrl ? (
                    <Image 
                      src={user.imageUrl} 
                      alt={user.fullName || 'User'} 
                      width={32} 
                      height={32}
                      className="rounded-full ring-2 ring-primary-500/50"
                    />
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-sm font-bold ring-2 ring-primary-500/50">
                      {user?.firstName?.[0] || 'U'}
                    </div>
                  )}
                  <div className="text-left">
                    <div className="text-sm font-semibold text-white">{user?.firstName || 'User'}</div>
                    <div className="text-xs text-gray-400">Member</div>
                  </div>
                </div>
                
                {/* UserButton with custom styling */}
                <UserButton 
                  afterSignOutUrl="/"
                  appearance={{
                    elements: {
                      avatarBox: "w-9 h-9 sm:w-10 sm:h-10 ring-2 ring-primary-500/50 hover:ring-primary-400 transition-all",
                      userButtonPopoverCard: "bg-gray-800 border border-gray-700",
                      userButtonPopoverActionButton: "hover:bg-gray-700",
                    }
                  }}
                />
              </div>
            )}

            {/* Mobile menu button */}
            <button
              className="md:hidden text-gray-300 hover:text-white p-2 rounded-lg hover:bg-gray-800 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-900/98 backdrop-blur-xl border-t border-gray-800 shadow-2xl">
          {/* User Profile - Mobile */}
          {isSignedIn && user && (
            <div className="px-4 pt-4 pb-3 border-b border-gray-800">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-800/50">
                {user.imageUrl ? (
                  <Image 
                    src={user.imageUrl} 
                    alt={user.fullName || 'User'} 
                    width={48} 
                    height={48}
                    className="rounded-full ring-2 ring-primary-500/50"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-lg font-bold ring-2 ring-primary-500/50">
                    {user.firstName?.[0] || 'U'}
                  </div>
                )}
                <div>
                  <div className="font-semibold text-white text-base">{user.fullName || 'User'}</div>
                  <div className="text-sm text-gray-400">{user.primaryEmailAddress?.emailAddress}</div>
                </div>
              </div>
            </div>
          )}
          
          <div className="px-4 pt-3 pb-4 space-y-1">
            <Link
              href="/courses"
              className="block px-4 py-3 text-base font-medium text-gray-300 hover:bg-gray-800/70 hover:text-white rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              📚 Courses
            </Link>
            <Link
              href="/challenges"
              className="block px-4 py-3 text-base font-medium text-gray-300 hover:bg-gray-800/70 hover:text-white rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              🎯 Challenges
            </Link>
            <Link
              href="/dashboard"
              className="block px-4 py-3 text-base font-medium text-gray-300 hover:bg-gray-800/70 hover:text-white rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              📊 Dashboard
            </Link>
            <Link
              href="/settings"
              className="block px-4 py-3 text-base font-medium text-gray-300 hover:bg-gray-800/70 hover:text-white rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              ⚙️ Settings
            </Link>
            <Link
              href="/download"
              className="block px-4 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg transition-colors font-semibold text-center text-base mt-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              📱 Install as App
            </Link>
            {!isSignedIn && (
              <div className="pt-4 space-y-2 border-t border-gray-800 mt-3">
                <SignInButton mode="modal">
                  <button className="w-full text-left px-4 py-3 text-base font-medium text-gray-300 hover:bg-gray-800/70 hover:text-white rounded-lg transition-colors">
                    🔐 Sign In
                  </button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <button className="w-full bg-gradient-to-r from-primary-500 to-accent-500 text-white px-4 py-3 rounded-lg hover:opacity-90 transition-opacity font-semibold text-base">
                    ✨ Get Started
                  </button>
                </SignUpButton>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}
