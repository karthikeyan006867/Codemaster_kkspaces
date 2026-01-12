'use client'

import { useState, useEffect } from 'react'
import { X, Download } from 'lucide-react'
import Link from 'next/link'

export default function MobileInstallBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    // Check if user is on mobile
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    
    // Check if banner was previously dismissed
    const wasDismissed = localStorage.getItem('installBannerDismissed')
    
    if (isMobile && !wasDismissed) {
      setIsVisible(true)
    }
  }, [])

  const handleDismiss = () => {
    setIsVisible(false)
    setDismissed(true)
    localStorage.setItem('installBannerDismissed', 'true')
  }

  if (!isVisible || dismissed) return null

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-primary-600 to-accent-600 text-white shadow-2xl">
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center gap-3 flex-1">
          <div className="bg-white/20 p-2 rounded-lg">
            <Download className="h-6 w-6" />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-sm">Install Flavor Town</h3>
            <p className="text-xs text-white/80">Get the full app experience!</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Link
            href="/download"
            className="bg-white text-primary-600 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-gray-100 transition-colors"
          >
            Install
          </Link>
          <button
            onClick={handleDismiss}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
