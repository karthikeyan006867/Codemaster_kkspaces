import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'
import type { NextFetchEvent, NextRequest } from 'next/server'

const isPublicRoute = createRouteMatcher([
  '/',
  '/sign-in(.*)',
  '/sign-up(.*)',
  '/api/webhook(.*)', // Allow webhooks
])

function applySecurityHeaders(response: Response): Response {
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('X-Frame-Options', 'SAMEORIGIN')
  response.headers.set('X-XSS-Protection', '1; mode=block')
  return response
}

const clerkHandler = clerkMiddleware(async (auth, req: NextRequest) => {
  const { userId } = await auth()

  // Check if route is protected and user is not authenticated
  if (!isPublicRoute(req) && !userId) {
    const signInUrl = new URL('/sign-in', req.url)
    signInUrl.searchParams.set('redirect_url', req.url)
    return applySecurityHeaders(NextResponse.redirect(signInUrl))
  }

  // Note: Admin authorization is handled at the page/API route level
  // This allows us to use currentUser() which is not available in Edge runtime
  return applySecurityHeaders(NextResponse.next())
})

export default async function middleware(req: NextRequest, event: NextFetchEvent) {
  try {
    const response = (await clerkHandler(req, event)) ?? NextResponse.next()
    return applySecurityHeaders(response)
  } catch (error) {
    // Fail-open to prevent site-wide 500 when Clerk env/config is invalid in deployment.
    console.error('Middleware fallback due to Clerk error:', error)

    if (!isPublicRoute(req)) {
      const signInUrl = new URL('/sign-in', req.url)
      signInUrl.searchParams.set('redirect_url', req.url)
      return applySecurityHeaders(NextResponse.redirect(signInUrl))
    }

    return applySecurityHeaders(NextResponse.next())
  }
}

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}
