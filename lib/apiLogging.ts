export function isDynamicServerUsageError(error: unknown): boolean {
  if (!error || typeof error !== 'object') {
    return false
  }

  const candidate = error as { digest?: unknown; message?: unknown; description?: unknown }
  const digest = typeof candidate.digest === 'string' ? candidate.digest : ''
  const message = typeof candidate.message === 'string' ? candidate.message : ''
  const description = typeof candidate.description === 'string' ? candidate.description : ''

  return (
    digest === 'DYNAMIC_SERVER_USAGE' ||
    message.includes('Dynamic server usage') ||
    description.includes('Dynamic server usage')
  )
}

export function logApiError(context: string, error: unknown): void {
  // During static generation, Next.js can throw expected dynamic usage warnings for request-bound APIs.
  // Suppress these noisy logs to keep build output actionable.
  if (isDynamicServerUsageError(error)) {
    return
  }

  console.error(context, error)
}
