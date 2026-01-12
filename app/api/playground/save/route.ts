import { currentUser } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

// Save playground
export async function POST(request: Request) {
  try {
    const user = await currentUser()
    
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { code, language, name } = await request.json()

    if (!code || !language) {
      return NextResponse.json({ error: 'code and language required' }, { status: 400 })
    }

    const playgroundId = `pg_${Date.now()}`

    // In real app, save to database
    const playground = {
      id: playgroundId,
      userId: user.id,
      name: name || `Playground ${Date.now()}`,
      language,
      code,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }

    return NextResponse.json({ 
      success: true,
      playground 
    })
  } catch (error) {
    console.error('Error saving playground:', error)
    return NextResponse.json({ error: 'Failed to save playground' }, { status: 500 })
  }
}
