import { NextRequest, NextResponse } from 'next/server'
import * as fs from 'fs'
import * as path from 'path'

export async function POST(request: NextRequest) {
  try {
    const { slug } = await request.json()

    if (!slug) {
      return NextResponse.json({ error: 'Slug is required' }, { status: 400 })
    }

    // Check if calculator file exists
    const calculatorPath = path.join(process.cwd(), 'calculators-data', `${slug}.ts`)
    const exists = fs.existsSync(calculatorPath)

    // If exists, check if it has content (not just template)
    let hasContent = false
    if (exists) {
      const fileContent = fs.readFileSync(calculatorPath, 'utf-8')
      // Check if content section has actual data (not "Pending OpenAI generation")
      hasContent = !fileContent.includes('Pending OpenAI generation')
    }

    return NextResponse.json({
      exists,
      hasContent,
      isGenerated: exists && hasContent
    })

  } catch (error: any) {
    console.error('Check calculator error:', error)
    return NextResponse.json({
      error: error.message
    }, { status: 500 })
  }
}
