import { NextRequest, NextResponse } from 'next/server'
import { exec } from 'child_process'
import { promisify } from 'util'

const execAsync = promisify(exec)

export async function POST(request: NextRequest) {
  try {
    const { slug, type } = await request.json()

    if (!slug) {
      return NextResponse.json({ error: 'Slug is required' }, { status: 400 })
    }

    if (!type || !['calculator', 'content', 'both'].includes(type)) {
      return NextResponse.json({ error: 'Type must be calculator, content, or both' }, { status: 400 })
    }

    let output = ''

    // Generate calculator code with Claude
    if (type === 'calculator' || type === 'both') {
      const { stdout, stderr } = await execAsync(`npm run generate:calculator -- --slug=${slug}`)
      output += stdout
      if (stderr) output += '\nErrors: ' + stderr
    }

    // Generate content with OpenAI
    if (type === 'content' || type === 'both') {
      const { stdout, stderr } = await execAsync(`npm run generate:content -- --slug=${slug}`)
      output += stdout
      if (stderr) output += '\nErrors: ' + stderr
    }

    return NextResponse.json({
      success: true,
      message: `Generated ${type} for ${slug}`,
      output
    })

  } catch (error: any) {
    console.error('Generation error:', error)
    return NextResponse.json({
      success: false,
      error: error.message,
      output: error.stdout || error.stderr || ''
    }, { status: 500 })
  }
}
