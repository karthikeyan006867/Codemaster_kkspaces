'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useUser } from '@clerk/nextjs'
import { 
  Home, 
  BookOpen, 
  Target, 
  Trophy, 
  Settings,
  ChevronLeft,
  ChevronRight,
  Code2,
  TrendingUp,
  Calendar,
  Map,
  Users,
  FileCode,
  BarChart3,
  MessageSquare,
  Shield,
  Briefcase,
  Award,
  GraduationCap
} from 'lucide-react'
import { useState } from 'react'

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: Home },
  { name: 'Courses', href: '/courses', icon: BookOpen },
  { name: 'Challenges', href: '/challenges', icon: Target },
  { name: 'Daily Challenge', href: '/daily-challenge', icon: Calendar },
  { name: 'Playground', href: '/playground', icon: Code2 },
  { name: 'Learning Paths', href: '/learning-paths', icon: Map },
  { name: 'Career Paths', href: '/career', icon: Briefcase },
  { name: 'Certifications', href: '/certifications', icon: GraduationCap },
  { name: 'Snippets', href: '/snippets', icon: FileCode },
  { name: 'Leaderboard', href: '/leaderboard', icon: TrendingUp },
  { name: 'Analytics', href: '/analytics', icon: BarChart3 },
  { name: 'Achievements', href: '/achievements', icon: Trophy },
]

const bottomNavigation = [
  { name: 'Settings', href: '/settings', icon: Settings },
]

export default function Sidebar() {
  const pathname = usePathname()
  const { user } = useUser()
  const [collapsed, setCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  // Admin check - must match middleware logic
  const adminEmails = ['kaarthii009.g@gmail.com', 'karthii009.g@gmail.com']
  const userEmail = user?.emailAddresses[0]?.emailAddress?.toLowerCase()
  const publicMetadata = user?.publicMetadata as { role?: string } | undefined
  const isAdminByRole = publicMetadata?.role === 'admin'
  const isAdminByEmail = userEmail && adminEmails.includes(userEmail)
  const isAdmin = isAdminByRole || isAdminByEmail

  return (
    <>
      {/* Mobile Menu Button - Improved visibility */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="md:hidden fixed bottom-6 right-6 z-50 bg-gradient-to-r from-primary-600 to-accent-600 text-white p-4 rounded-full shadow-2xl hover:shadow-xl transition-all hover:scale-110 ring-4 ring-primary-500/20"
        aria-label={mobileOpen ? "Close menu" : "Open menu"}
      >
        {mobileOpen ? <ChevronLeft className="h-7 w-7" /> : <ChevronRight className="h-7 w-7" />}
      </button>

      {/* Mobile Overlay - Improved visibility */}
      {mobileOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40 animate-in fade-in duration-200"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar - Enhanced mobile view */}
      <aside
        className={`fixed left-0 top-16 h-[calc(100vh-4rem)] bg-gray-900/98 backdrop-blur-xl border-r border-gray-800 transition-all duration-300 z-40 shadow-2xl ${
          collapsed ? 'w-16' : 'w-64'
        } ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
      {/* Toggle Button - More visible on mobile */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="hidden md:block absolute -right-3 top-6 bg-gray-800 text-gray-300 p-1.5 rounded-full hover:bg-gray-700 transition-colors border border-gray-700 shadow-lg hover:shadow-xl"
        aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
      >
        {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
      </button>

      {/* Navigation - Improved mobile spacing */}
      <div className="flex flex-col h-full">
        <nav className="p-3 md:p-4 space-y-1.5 md:space-y-2 flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
          {/* Admin Dashboard - Only visible to admins */}
          {isAdmin && (
            <Link
              href="/admin"
              className={`flex items-center space-x-3 px-3 md:px-3 py-3 md:py-2 rounded-lg transition-all text-base md:text-sm ${
                pathname === '/admin'
                  ? 'bg-gradient-to-r from-primary-600 to-accent-600 text-white shadow-lg'
                  : 'text-gray-300 hover:bg-gray-800 hover:text-white'
              } ${collapsed ? 'justify-center' : ''}`}
            >
              <Shield className="h-6 w-6 md:h-5 md:w-5 flex-shrink-0" />
              {!collapsed && <span className="font-medium">Admin Panel</span>}
            </Link>
          )}
          
          {navigation.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href || pathname?.startsWith(item.href + '/')
            
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center space-x-3 px-3 md:px-4 py-3 md:py-3 rounded-lg transition-all group text-base md:text-sm ${
                  isActive
                    ? 'bg-gradient-to-r from-primary-500/20 to-accent-500/20 text-white border border-primary-500/30 shadow-lg'
                    : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                }`}
                title={collapsed ? item.name : ''}
              >
                <Icon className={`h-6 w-6 md:h-5 md:w-5 ${isActive ? 'text-primary-400' : 'group-hover:text-primary-400'}`} />
                {!collapsed && <span className="font-medium">{item.name}</span>}
              </Link>
            )
          })}
        </nav>

        {/* Bottom Navigation - Settings + Admin - Improved mobile spacing */}
        <div className="p-3 md:p-4 border-t border-gray-800 space-y-1.5 md:space-y-2">
          {isAdmin && (
            <Link
              href="/admin-panel"
              onClick={() => setMobileOpen(false)}
              className={`flex items-center space-x-3 px-3 md:px-4 py-3 md:py-3 rounded-lg transition-all group text-base md:text-sm ${
                pathname === '/admin-panel' || pathname?.startsWith('/admin-panel/')
                  ? 'bg-gradient-to-r from-red-500/20 to-orange-500/20 text-white border border-red-500/30 shadow-lg'
                  : 'text-gray-400 hover:bg-gray-800 hover:text-white'
              }`}
              title={collapsed ? 'Admin Dashboard' : ''}
            >
              <Shield className={`h-6 w-6 md:h-5 md:w-5 ${pathname === '/admin-panel' ? 'text-red-400' : 'group-hover:text-red-400'}`} />
              {!collapsed && <span className="font-medium">Admin Dashboard</span>}
            </Link>
          )}
          {bottomNavigation.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href || pathname?.startsWith(item.href + '/')
            
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center space-x-3 px-3 md:px-4 py-3 md:py-3 rounded-lg transition-all group text-base md:text-sm ${
                  isActive
                    ? 'bg-gradient-to-r from-primary-500/20 to-accent-500/20 text-white border border-primary-500/30 shadow-lg'
                    : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                }`}
                title={collapsed ? item.name : ''}
              >
                <Icon className={`h-6 w-6 md:h-5 md:w-5 ${isActive ? 'text-primary-400' : 'group-hover:text-primary-400'}`} />
                {!collapsed && <span className="font-medium">{item.name}</span>}
              </Link>
            )
          })}
        </div>
      </div>
      </aside>
    </>
  )
}
