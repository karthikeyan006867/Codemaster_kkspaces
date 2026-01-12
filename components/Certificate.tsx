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
        className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-12 rounded-lg overflow-hidden"
        style={{
          boxShadow: '0 20px 60px rgba(0,0,0,0.5), inset 0 0 100px rgba(255,215,0,0.1)'
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
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl font-serif text-white mb-2 tracking-wider" style={{ fontFamily: 'Georgia, serif' }}>
              Certificate
            </h1>
            <p className="text-gray-300 text-lg tracking-widest">OF COMPLETION</p>
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
          <div className="mb-8">
            <p className="text-gray-400 text-sm uppercase tracking-wider mb-3">This certifies that</p>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6 tracking-wide" style={{ fontFamily: 'Brush Script MT, cursive' }}>
              {userName}
            </h2>
            <p className="text-gray-400 text-sm uppercase tracking-wider mb-3">has successfully completed the</p>
            <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 mb-6" style={{ minHeight: '2.5rem' }}>
              {courseName || 'Course Name'} Course
            </h3>
          </div>

          {/* Skills Section */}
          <div className="mb-8">
            <p className="text-gray-400 text-sm uppercase tracking-wider mb-3">Demonstrating proficiency in</p>
            <div className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto">
              {skills.map((skill, index) => (
                <span 
                  key={index}
                  className="px-4 py-1 bg-slate-700/50 border border-yellow-500/30 rounded-full text-yellow-300 text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Test Score Badge */}
          {testScore !== undefined && testScore > 0 && (
            <div className="mb-8">
              <div className="inline-block bg-gradient-to-r from-green-600 to-emerald-600 px-8 py-3 rounded-lg shadow-lg">
                <p className="text-white text-sm uppercase tracking-wider mb-1">Final Test Score</p>
                <p className="text-white text-3xl font-bold">{testScore}%</p>
              </div>
            </div>
          )}

          {/* Badge and Signatures */}
          <div className="flex items-center justify-between max-w-3xl mx-auto mt-12 pt-8 border-t border-gray-700">
            {/* Date */}
            <div className="text-left">
              <div className="flex items-center gap-2 text-gray-400 mb-2">
                <Calendar className="h-4 w-4" />
                <span className="text-xs uppercase tracking-wider">Completion Date</span>
              </div>
              <p className="text-white font-semibold">{completionDate}</p>
            </div>

            {/* Central Badge */}
            <div className="flex-shrink-0">
              <div className="relative w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                <div className="absolute inset-1 bg-slate-900 rounded-full"></div>
                <Award className="relative z-10 h-12 w-12 text-yellow-400" />
                <div className="absolute -bottom-2 bg-yellow-500 text-slate-900 text-xs font-bold px-3 py-1 rounded-full">
                  {new Date().getFullYear()}
                </div>
              </div>
            </div>

            {/* Signature */}
            <div className="text-right">
              <div className="flex items-center justify-end gap-2 text-gray-400 mb-2">
                <CheckCircle className="h-4 w-4" />
                <span className="text-xs uppercase tracking-wider">Verified</span>
              </div>
              <div className="text-white">
                <div className="font-serif text-xl mb-1" style={{ fontFamily: 'Brush Script MT, cursive' }}>
                  CodeMaster
                </div>
                <div className="text-xs text-gray-400">Platform Administrator</div>
              </div>
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
