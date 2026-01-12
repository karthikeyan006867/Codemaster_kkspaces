'use client'

import { Download, Monitor, Smartphone, Globe } from 'lucide-react'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function DownloadPage() {
  const [windowsAvailable, setWindowsAvailable] = useState(false)
  const [androidAvailable, setAndroidAvailable] = useState(false)
  const [downloading, setDownloading] = useState<'windows' | 'android' | null>(null)
  const [checking, setChecking] = useState(true)

  useEffect(() => {
    const checkDownloads = async () => {
      try {
        const windowsCheck = await fetch('/api/download/windows', { method: 'HEAD' })
        setWindowsAvailable(windowsCheck.ok)
        
        const androidCheck = await fetch('/api/download/android', { method: 'HEAD' })
        setAndroidAvailable(androidCheck.ok)
      } catch (error) {
        console.error('Failed to check downloads:', error)
      } finally {
        setChecking(false)
      }
    }

    checkDownloads()
  }, [])

  const handleDownload = async (platform: 'windows' | 'android') => {
    setDownloading(platform)
    
    try {
      const endpoint = platform === 'windows' ? '/api/download/windows' : '/api/download/android'
      const filename = platform === 'windows' ? 'flavor-town-setup.msi' : 'flavor-town.apk'
      
      const link = document.createElement('a')
      link.href = endpoint
      link.download = filename
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      
    } catch (error) {
      console.error('Download failed:', error)
      alert('Download failed. Please try again or contact support.')
    } finally {
      setDownloading(null)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Download Flavor Town
          </h1>
          <p className="text-xl text-gray-300">
            Learn coding on your favorite platform
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Windows Download */}
          <div className="glass-effect rounded-2xl p-8 hover:scale-105 transition-transform duration-300">
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center">
                <Monitor className="w-12 h-12 text-white" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-white text-center mb-4">
              Windows
            </h2>
            <p className="text-gray-300 text-center mb-6">
              Full desktop experience with offline support
            </p>
            <ul className="text-gray-400 space-y-2 mb-8">
              <li>✓ Native Windows application</li>
              <li>✓ Offline code editor</li>
              <li>✓ Auto-sync progress</li>
              <li>✓ Desktop notifications</li>
            </ul>
            <button
              onClick={() => handleDownload('windows')}
              disabled={!windowsAvailable || downloading === 'windows' || checking}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {downloading === 'windows' ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Downloading...
                </>
              ) : checking ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Checking...
                </>
              ) : !windowsAvailable ? (
                <>Build Required</>
              ) : (
                <>
                  <Download className="w-5 h-5" />
                  Download for Windows
                </>
              )}
            </button>
            <p className="text-xs text-gray-500 text-center mt-4">
              {windowsAvailable ? 'Windows 10/11 • 64-bit • Free' : 'Run: npm run tauri:build:windows'}
            </p>
          </div>

          {/* Android Download */}
          <div className="glass-effect rounded-2xl p-8 hover:scale-105 transition-transform duration-300">
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl flex items-center justify-center">
                <Smartphone className="w-12 h-12 text-white" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-white text-center mb-4">
              Android
            </h2>
            <p className="text-gray-300 text-center mb-6">
              Learn coding anywhere, anytime on your phone
            </p>
            <ul className="text-gray-400 space-y-2 mb-8">
              <li>✓ Mobile-optimized interface</li>
              <li>✓ Code on the go</li>
              <li>✓ Cloud sync</li>
              <li>✓ Native Android app</li>
            </ul>
            <button
              onClick={() => handleDownload('android')}
              disabled={!androidAvailable || downloading === 'android' || checking}
              className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-4 rounded-xl font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {downloading === 'android' ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Downloading...
                </>
              ) : checking ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Checking...
                </>
              ) : !androidAvailable ? (
                <>Build Required</>
              ) : (
                <>
                  <Download className="w-5 h-5" />
                  Download APK
                </>
              )}
            </button>
            <p className="text-xs text-gray-500 text-center mt-4">
              {androidAvailable ? 'Android 8.0+ • Free • Direct Install' : 'Run: node scripts/build-android-apk.js'}
            </p>
            {androidAvailable && (
              <p className="text-xs text-center mt-2 text-green-400">
                ✅ APK Ready - Click to download
              </p>
            )}
          </div>
        </div>

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Download Flavor Town
          </h1>
          <p className="text-xl text-gray-300">
            Native apps for Windows and Android
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Windows Desktop App */}
          <div className="glass-effect rounded-2xl p-8 hover:scale-105 transition-transform duration-300">
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center">
                <Monitor className="w-12 h-12 text-white" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-white text-center mb-4">
              Windows
            </h2>
            <p className="text-gray-300 text-center mb-6">
              Full desktop experience with native performance
            </p>
            <ul className="text-gray-400 space-y-2 mb-8">
              <li>✓ Native Windows application</li>
              <li>✓ Blazing fast performance</li>
              <li>✓ Offline support</li>
              <li>✓ Auto-sync progress</li>
            </ul>
            <button
              onClick={() => handleDownload('windows')}
              disabled={!windowsAvailable || downloading === 'windows' || checking}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {downloading === 'windows' ? (
                <>
                  <Download className="w-5 h-5 animate-bounce" />
                  Downloading...
                </>
              ) : checking ? (
                <>Checking...</>
              ) : !windowsAvailable ? (
                <>Build Required</>
              ) : (
                <>
                  <Download className="w-5 h-5" />
                  Download for Windows
                </>
              )}
            </button>
            <p className="text-xs text-gray-500 text-center mt-4">
              {windowsAvailable ? 'Windows 10/11 • 64-bit • Free' : 'Run: npm run build:windows'}
            </p>
          </div>

          {/* Android App */}
          <div className="glass-effect rounded-2xl p-8 hover:scale-105 transition-transform duration-300">
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl flex items-center justify-center">
                <Smartphone className="w-12 h-12 text-white" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-white text-center mb-4">
              Android
            </h2>
            <p className="text-gray-300 text-center mb-6">
              Learn coding on the go with native Android app
            </p>
            <ul className="text-gray-400 space-y-2 mb-8">
              <li>✓ Native Android app</li>
              <li>✓ Mobile-optimized interface</li>
              <li>✓ Code anywhere, anytime</li>
              <li>✓ Cloud sync</li>
            </ul>
            <button
              onClick={() => handleDownload('android')}
              disabled={!androidAvailable || downloading === 'android' || checking}
              className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-4 rounded-xl font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {downloading === 'android' ? (
                <>
                  <Download className="w-5 h-5 animate-bounce" />
                  Downloading...
                </>
              ) : checking ? (
                <>Checking...</>
              ) : !androidAvailable ? (
                <>Build Required</>
              ) : (
                <>
                  <Download className="w-5 h-5" />
                  Download APK
                </>
              )}
            </button>
            <p className="text-xs text-gray-500 text-center mt-4">
              {androidAvailable ? 'Android 8.0+ • Free' : 'Run: npm run build:android'}
            </p>
          </div>
        </div>

        {/* Web Version */}
        <div className="mt-12 text-center">
          <div className="glass-effect rounded-2xl p-8 max-w-2xl mx-auto">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                <Globe className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Use Web Version
            </h3>
            <p className="text-gray-300 mb-6">
              Access Flavor Town instantly in your browser - no installation required
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
            >
              Launch Web App
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
