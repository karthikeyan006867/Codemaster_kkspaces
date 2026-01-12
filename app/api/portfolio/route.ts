import { currentUser } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

// Get user portfolio
export async function GET() {
  try {
    const user = await currentUser()
    
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Mock portfolio data
    const portfolio = {
      id: user.id,
      userId: user.id,
      title: `${user.firstName}'s Portfolio`,
      bio: 'Full-stack developer passionate about learning',
      skills: [
        { skill: 'JavaScript', level: 85, yearsOfExperience: 2, endorsements: 12 },
        { skill: 'React', level: 75, yearsOfExperience: 1, endorsements: 8 },
        { skill: 'Python', level: 70, yearsOfExperience: 1, endorsements: 5 },
      ],
      projects: [
        {
          title: 'E-commerce Platform',
          description: 'Built a full-stack e-commerce solution',
          technologies: ['React', 'Node.js', 'MongoDB'],
          githubUrl: 'https://github.com/user/project',
          featured: true,
          images: []
        }
      ],
      experience: [],
      education: [],
      certifications: [],
      theme: 'default',
      visibility: 'public'
    }

    return NextResponse.json({ 
      success: true,
      portfolio 
    })
  } catch (error) {
    console.error('Error fetching portfolio:', error)
    return NextResponse.json({ error: 'Failed to fetch portfolio' }, { status: 500 })
  }
}

// Update portfolio
export async function POST(request: Request) {
  try {
    const user = await currentUser()
    
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const updates = await request.json()

    return NextResponse.json({ 
      success: true,
      message: 'Portfolio updated successfully'
    })
  } catch (error) {
    console.error('Error updating portfolio:', error)
    return NextResponse.json({ error: 'Failed to update portfolio' }, { status: 500 })
  }
}
