'use client'

import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import SecurityDashboard from '@/components/SecurityDashboard'

export default function SecurityDashboardPage() {
  const { user, isLoaded } = useUser()
  const router = useRouter()

  useEffect(() => {
    // Redirect if not admin
    if (isLoaded && (!user || (user.publicMetadata as any)?.role !== 'admin')) {
      router.push('/dashboard')
    }
  }, [isLoaded, user, router])

  if (!isLoaded || !user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  return <SecurityDashboard />
}
