import * as fs from 'fs'
import * as path from 'path'
import { keywordsConfig } from './keywords-config'

interface CalculatorInfo {
  id: number
  slug: string
  keyword: string
  category: string
  url: string
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

  // Verificar cada calculadora del config
  for (const calc of keywordsConfig) {
    const calculatorPath = path.join(calculatorsDir, `${calc.slug}.ts`)

    if (fs.existsSync(calculatorPath)) {
      try {
        const fileContent = fs.readFileSync(calculatorPath, 'utf-8')

        // Verificar que no es un template pendiente
        if (!fileContent.includes('Pending OpenAI generation')) {
          availableCalculators.push({
            id: calc.id,
            slug: calc.slug,
            keyword: calc.keyword,
            category: calc.category,
            url: calc.url
          })
        }
      } catch (error) {
        console.error(`Error reading calculator ${calc.slug}:`, error)
      }
    }
  }

  // Guardar en public para que sea accesible estáticamente
  const publicDir = path.join(process.cwd(), 'public')
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true })
  }

  const outputPath = path.join(publicDir, 'calculators-list.json')
  fs.writeFileSync(outputPath, JSON.stringify(availableCalculators, null, 2))

  console.log(`✅ Generated calculators list: ${availableCalculators.length} calculators`)
  console.log(`   Output: ${outputPath}`)
}

// Ejecutar si se llama directamente
if (require.main === module) {
  generateCalculatorsList()
}

export { generateCalculatorsList }
