import './globals.css'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import ThemeProvider from '@/components/ThemeProvider'
import MobileInstallBanner from '@/components/MobileInstallBanner'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Flavor Town - Learn Programming from Scratch',
  description: 'Master 14+ programming languages with interactive lessons, projects, and challenges',
  manifest: '/manifest.json',
  themeColor: '#667eea',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Flavor Town',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en" className="dark">
        <head>
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#667eea" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />
          <meta name="apple-mobile-web-app-title" content="Flavor Town" />
        </head>
        <body className={inter.className}>
          <ThemeProvider>{children}</ThemeProvider>
          <MobileInstallBanner />
        </body>
      </html>
    </ClerkProvider>
  )
}
