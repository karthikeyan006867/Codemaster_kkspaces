'use client'

import { Award, Download, Share2, Calendar, CheckCircle } from 'lucide-react'
import { useRef } from 'react'

interface CertificateProps {
  userName: string
  courseName: string
  completionDate: string
  credentialId: string
  skills: string[]
  testScore?: number
  onDownload?: () => void
  onShare?: () => void
}

export default function Certificate({ 
  userName, 
  courseName, 
  completionDate, 
  credentialId,
  skills,
  testScore,
  onShare 
}: CertificateProps) {
  const certificateRef = useRef<HTMLDivElement>(null)

  const handleDownload = async () => {
    if (!certificateRef.current) return

    try {
      // Dynamically import html2canvas
      const html2canvas = (await import('html2canvas')).default
      
      // Get dimensions and prepare for capture
      const element = certificateRef.current
      const width = element.offsetWidth
      const height = element.offsetHeight
      
      // Capture the certificate as canvas with better settings
      const canvas = await html2canvas(element, {
        scale: 3, // Higher quality for better download
        backgroundColor: '#0f172a', // Match slate-900 background
        logging: false,
        useCORS: true,
        allowTaint: true,
        width: width,
        height: height,
        windowWidth: width,
        windowHeight: height,
        scrollX: 0,
        scrollY: -window.scrollY,
        x: 0,
        y: 0,
        foreignObjectRendering: false
      })

      // Convert canvas to blob and download as PNG for better quality
      canvas.toBlob((blob) => {
        if (!blob) {
          alert('Failed to generate certificate image')
          return
        }
        
        // Create download link
        const url = URL.createObjectURL(blob)
        const link = document.createElement('a')
        const fileName = `Certificate_${courseName.replace(/[^a-zA-Z0-9]/g, '_')}_${credentialId}.png`
        link.href = url
        link.download = fileName
        document.body.appendChild(link)
        link.click()
        
        // Cleanup
        setTimeout(() => {
          document.body.removeChild(link)
          URL.revokeObjectURL(url)
        }, 100)
      }, 'image/png', 1.0)
    } catch (error) {
      console.error('Error downloading certificate:', error)
      alert('Failed to download certificate. Please try again.')
    }
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Action Buttons */}
      <div className="flex justify-end gap-3 mb-4">
        <button
          onClick={onShare}
          className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          <Share2 className="h-4 w-4" />
          Share
        </button>
        <button
          onClick={handleDownload}
          className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
        >
          <Download className="h-4 w-4" />
          Download PNG
        </button>
      </div>

      {/* Certificate Container */}
      <div 
        ref={certificateRef}
        className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-16 rounded-2xl overflow-hidden shadow-2xl"
        style={{
          boxShadow: '0 25px 70px rgba(0,0,0,0.6), inset 0 0 120px rgba(59,130,246,0.15), 0 0 0 1px rgba(255,215,0,0.2)'
        }}
      >
        {/* Decorative Corner Elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          {/* Top Left Corner */}
          <div className="absolute top-8 left-8">
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 transform -skew-x-12"></div>
            <div className="w-1 h-24 bg-gradient-to-b from-yellow-400 to-orange-500 transform -skew-y-12 mt-2"></div>
          </div>
          
          {/* Top Right Corner */}
          <div className="absolute top-8 right-8">
            <div className="w-24 h-1 bg-gradient-to-l from-yellow-400 to-orange-500 transform skew-x-12"></div>
            <div className="w-1 h-24 bg-gradient-to-b from-yellow-400 to-orange-500 transform skew-y-12 mt-2 ml-auto"></div>
          </div>
          
          {/* Bottom Left Corner */}
          <div className="absolute bottom-8 left-8">
            <div className="w-1 h-24 bg-gradient-to-t from-yellow-400 to-orange-500 transform skew-y-12 mb-2"></div>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 transform skew-x-12"></div>
          </div>
          
          {/* Bottom Right Corner */}
          <div className="absolute bottom-8 right-8">
            <div className="w-1 h-24 bg-gradient-to-t from-yellow-400 to-orange-500 transform -skew-y-12 mb-2 ml-auto"></div>
            <div className="w-24 h-1 bg-gradient-to-l from-yellow-400 to-orange-500 transform -skew-x-12"></div>
          </div>

          {/* Hexagonal Border Frame */}
          <svg 
            className="absolute inset-0 w-full h-full" 
            viewBox="0 0 800 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M 100 50 L 700 50 L 750 300 L 700 550 L 100 550 L 50 300 Z" 
              stroke="url(#goldGradient)" 
              strokeWidth="3" 
              fill="none"
              opacity="0.3"
            />
            <defs>
              <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFD700" />
                <stop offset="50%" stopColor="#FFA500" />
                <stop offset="100%" stopColor="#FFD700" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center">
          {/* Certificate Title */}
          <div className="mb-10">
            <div className="inline-block">
              <h1 className="text-6xl md:text-7xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-400 mb-3 tracking-wide" style={{ fontFamily: 'Georgia, serif', textShadow: '0 0 30px rgba(251,191,36,0.3)' }}>
                Certificate
              </h1>
              <div className="h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
            </div>
            <p className="text-gray-300 text-xl tracking-[0.3em] mt-4 font-light">OF COMPLETION</p>
          </div>

          {/* Certificate ID Badge */}
          <div className="inline-block mb-6">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 px-6 py-2 rounded-full">
              <p className="text-slate-900 font-bold text-sm tracking-wider">
                CERTIFICATE ID: {credentialId}
              </p>
            </div>
          </div>

          {/* Presentee Info */}
          <div className="mb-10">
            <p className="text-gray-400 text-sm uppercase tracking-[0.2em] mb-4 font-light">This certifies that</p>
            <div className="mb-8 px-8 py-6 bg-gradient-to-r from-transparent via-slate-800/50 to-transparent border-y border-yellow-500/20">
              <h2 className="text-5xl md:text-6xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-white via-yellow-100 to-white mb-2" style={{ fontFamily: 'Brush Script MT, cursive, Georgia', textShadow: '0 2px 20px rgba(255,255,255,0.2)' }}>
                {userName}
              </h2>
            </div>
            <p className="text-gray-400 text-sm uppercase tracking-[0.2em] mb-4 font-light">has successfully completed the</p>
            <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 mb-8 px-4" style={{ minHeight: '2.5rem', textShadow: '0 0 20px rgba(59,130,246,0.3)' }}>
              {courseName || 'Course Name'} Course
            </h3>
          </div>

          {/* Skills Section */}
          <div className="mb-10">
            <p className="text-gray-400 text-sm uppercase tracking-[0.2em] mb-5 font-light">Demonstrating proficiency in</p>
            <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
              {skills.map((skill, index) => (
                <span 
                  key={index}
                  className="px-5 py-2 bg-gradient-to-r from-slate-800/80 to-slate-700/80 border border-yellow-500/40 rounded-full text-yellow-200 text-sm font-medium shadow-lg hover:shadow-yellow-500/20 transition-shadow"
                  style={{ boxShadow: '0 2px 10px rgba(234,179,8,0.1)' }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Test Score Badge */}
          {testScore !== undefined && testScore > 0 && (
            <div className="mb-10">
              <div className="inline-block relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 rounded-xl blur-xl opacity-30"></div>
                <div className="relative bg-gradient-to-r from-green-600 to-emerald-600 px-10 py-4 rounded-xl shadow-2xl border border-green-400/30">
                  <p className="text-green-100 text-xs uppercase tracking-[0.2em] mb-2 font-light">Final Test Score</p>
                  <p className="text-white text-4xl font-bold">{testScore}<span className="text-2xl">%</span></p>
                </div>
              </div>
            </div>
          )}

          {/* Badge and Signatures */}
          <div className="flex items-center justify-between max-w-4xl mx-auto mt-14 pt-10 border-t border-gradient-to-r from-transparent via-gray-600 to-transparent">
            {/* Date */}
            <div className="text-left flex-1">
              <div className="flex items-center gap-2 text-gray-400 mb-3">
                <Calendar className="h-5 w-5 text-blue-400" />
                <span className="text-xs uppercase tracking-[0.15em] font-light">Completion Date</span>
              </div>
              <p className="text-white font-semibold text-lg">{completionDate}</p>
              <div className="w-24 h-0.5 bg-gradient-to-r from-blue-400 to-transparent mt-2"></div>
            </div>

            {/* Central Badge */}
            <div className="flex-shrink-0 mx-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full blur-lg opacity-50"></div>
                <div className="relative w-28 h-28 bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-600 rounded-full flex items-center justify-center shadow-2xl border-4 border-slate-900">
                  <div className="absolute inset-2 bg-gradient-to-br from-slate-900 to-slate-800 rounded-full"></div>
                  <Award className="relative z-10 h-14 w-14 text-yellow-400" />
                  <div className="absolute -bottom-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 text-xs font-bold px-4 py-1.5 rounded-full shadow-lg border-2 border-slate-900">
                    {new Date().getFullYear()}
                  </div>
                </div>
              </div>
            </div>

            {/* Signature */}
            <div className="text-right flex-1">
              <div className="flex items-center justify-end gap-2 text-gray-400 mb-3">
                <span className="text-xs uppercase tracking-[0.15em] font-light">Verified</span>
                <CheckCircle className="h-5 w-5 text-green-400" />
              </div>
              <div className="text-white">
                <div className="font-serif text-2xl mb-2 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500" style={{ fontFamily: 'Brush Script MT, cursive, Georgia' }}>
                  Flaver Town
                </div>
                <div className="text-xs text-gray-400 font-light tracking-wide">Learning Platform</div>
              </div>
              <div className="w-24 h-0.5 bg-gradient-to-l from-green-400 to-transparent mt-2 ml-auto"></div>
            </div>
          </div>
        </div>

        {/* Disclaimer at Bottom */}
        <div className="relative z-10 mt-8 pt-4 border-t border-gray-700/50">
          <p className="text-center text-xs text-gray-500 italic">
            * This is an educational certificate of completion and is not an officially accredited certification. 
            This certificate validates the successful completion of course materials on the CodeMaster learning platform.
          </p>
        </div>

        {/* Watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
          <Award className="h-96 w-96 text-yellow-400" />
        </div>
      </div>

      {/* Verification Info */}
      <div className="mt-6 p-4 bg-slate-800 rounded-lg border border-slate-700">
        <div className="flex items-start gap-3">
          <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
          <div className="flex-1">
            <h4 className="text-white font-semibold mb-1">Certificate Verification</h4>
            <p className="text-sm text-gray-400 mb-2">
              This certificate can be verified using the credential ID: <code className="text-yellow-400 font-mono">{credentialId}</code>
            </p>
            <a 
              href={`https://verify.codemaster.com/${credentialId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 text-sm underline"
            >
              Verify this certificate →
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
