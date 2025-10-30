import * as fs from 'fs'
import * as path from 'path'

interface CalculatorInfo {
  id: number
  slug: string
  keyword: string
  category: string
  url: string
}

function extractMetadataFromFile(filePath: string, slug: string): CalculatorInfo | null {
  try {
    const content = fs.readFileSync(filePath, 'utf-8')

    // Verificar que no es un template pendiente
    if (content.includes('Pending OpenAI generation')) {
      return null
    }

    // Extraer category
    const categoryMatch = content.match(/category:\s*["']([^"']+)["']/)
    const category = categoryMatch ? categoryMatch[1] : 'General'

    // Extraer keyword del h1
    const h1Match = content.match(/h1:\s*["']([^"']+)["']/)
    const keyword = h1Match ? h1Match[1] : slug.replace(/-/g, ' ')

    // Generar ID basado en el nombre del archivo (timestamp del archivo)
    const stats = fs.statSync(filePath)
    const id = Math.floor(stats.mtimeMs / 1000) // Unix timestamp en segundos

    return {
      id,
      slug,
      keyword,
      category,
      url: `/bereken/${slug}`
    }
  } catch (error) {
    console.error(`Error extracting metadata from ${slug}:`, error)
    return null
  }
}

function generateCalculatorsList() {
  const calculatorsDir = path.join(process.cwd(), 'calculators-data')
  const availableCalculators: CalculatorInfo[] = []

  if (!fs.existsSync(calculatorsDir)) {
    console.log('⚠️  Calculators directory not found')
    // Crear archivo vacío
    const publicDir = path.join(process.cwd(), 'public')
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true })
    }
    fs.writeFileSync(
      path.join(publicDir, 'calculators-list.json'),
      JSON.stringify([])
    )
    return
  }

  // Leer TODOS los archivos .ts en calculators-data/
  const files = fs.readdirSync(calculatorsDir)
  const tsFiles = files.filter(file => file.endsWith('.ts'))

  for (const file of tsFiles) {
    const slug = file.replace('.ts', '')
    const filePath = path.join(calculatorsDir, file)

    const metadata = extractMetadataFromFile(filePath, slug)
    if (metadata) {
      availableCalculators.push(metadata)
    }
  }

  // Ordenar por ID descendente (más recientes primero)
  availableCalculators.sort((a, b) => b.id - a.id)

  // Guardar en public para que sea accesible estáticamente
  const publicDir = path.join(process.cwd(), 'public')
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true })
  }

  const outputPath = path.join(publicDir, 'calculators-list.json')
  fs.writeFileSync(outputPath, JSON.stringify(availableCalculators, null, 2))

  console.log(`✅ Generated calculators list: ${availableCalculators.length} calculators`)
  console.log(`   Output: ${outputPath}`)
  console.log(`   Latest calculators:`)
  availableCalculators.slice(0, 6).forEach((calc, i) => {
    console.log(`   ${i + 1}. ${calc.keyword} (${calc.slug})`)
  })
}

// Ejecutar si se llama directamente
if (require.main === module) {
  generateCalculatorsList()
}

export { generateCalculatorsList }
