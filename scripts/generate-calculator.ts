#!/usr/bin/env tsx

import Anthropic from '@anthropic-ai/sdk'
import * as fs from 'fs'
import * as path from 'path'
import * as dotenv from 'dotenv'
import { getKeywordConfig, KeywordConfig } from './keywords-config'

// Cargar variables de entorno
dotenv.config({ path: path.join(__dirname, '..', '.env.local') })

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

// Prompt para Claude
function createPrompt(config: KeywordConfig): string {
  return `Eres un experto desarrollador web especializado en crear calculadoras financieras y de negocios en HTML y JavaScript vanilla.

TAREA: Crear una calculadora funcional para "${config.keyword}" en DANÉS para usuarios daneses.

INFORMACIÓN DEL PROYECTO:
- Keyword principal: ${config.keyword}
- Volumen de búsqueda: ${config.volume}
- Descripción: ${config.description}
- Categoría: ${config.category}
- Prioridad: ${config.priority}

⚠️ IMPORTANTE - LEGISLACIÓN DANESA:
- Sigue ESTRICTAMENTE la legislación danesa actual
- Si es sobre impuestos: usa las tasas vigentes en Dinamarca (ej: moms 25%)
- Si es sobre salarios: aplica el sistema fiscal danés (AM-bidrag, skattefradrag, etc.)
- Si es sobre cálculos financieros: usa normas y fórmulas danesas
- Todos los ejemplos deben ser relevantes para usuarios en Dinamarca
- Moneda: Corona danesa (kr)
- Formato de números: formato danés (coma para decimales, punto para miles en display)

REQUISITOS TÉCNICOS:

1. **HTML** - Usa EXCLUSIVAMENTE estas clases CSS (ya están definidas):
   - Containers: .calc-container, .calc-group
   - Labels: .calc-label
   - Inputs: .calc-input, .calc-select
   - Input con sufijo: .calc-input-wrapper + .calc-input-suffix
   - Botones: .calc-button, .calc-button-secondary
   - Resultados: .calc-result-container, .calc-result-box, .calc-result-value, .calc-result-label, .calc-result-subtitle
   - Breakdown: .calc-breakdown, .calc-breakdown-item, .calc-breakdown-label, .calc-breakdown-value
   - Estados: .calc-error, .calc-help, .calc-loading

2. **JavaScript**:
   - Vanilla JS puro (sin frameworks)
   - Funcional y sin errores
   - Usar addEventListener para eventos
   - Formatear números en formato danés (toLocaleString('da-DK'))
   - Validación de inputs
   - Mostrar resultados con breakdown detallado

3. **Contenido 100% en DANÉS**:
   - TODO el contenido debe estar en danés (labels, placeholders, mensajes, etc.)
   - Labels claros y descriptivos en danés
   - Mensajes de error informativos en danés
   - Instrucciones en danés
   - Usar "kr" para moneda danesa
   - Usar "," para decimales y "." para miles en display (formato danés)
   - Términos técnicos en danés (no traducir literalmente del inglés)

4. **Funcionalidad**:
   - La calculadora debe ser práctica y útil
   - Incluir validaciones
   - Mostrar breakdown/desglose de la calculación
   - Manejar casos extremos
   - Responsive (las clases CSS ya lo son)

FORMATO DE RESPUESTA:

Responde ÚNICAMENTE con un JSON válido en este formato exacto:

{
  "html": "HTML code aquí usando las clases CSS especificadas",
  "logic": "JavaScript code aquí - código completo funcional",
  "styles": "CSS adicional si es absolutamente necesario (vacío si no)",
  "metadata": {
    "title": "Título SEO optimizado en danés (max 60 caracteres)",
    "description": "Meta descripción SEO en danés (max 155 caracteres)",
    "excerpt": "Resumen corto de la calculadora en danés (1-2 líneas)"
  }
}

IMPORTANTE:
- NO incluyas markdown, solo el JSON puro
- NO uses \`\`\`json o similar
- El HTML debe usar solo las clases especificadas
- El JavaScript debe ser funcional y completo
- Todo en danés
- Asegúrate que el JSON sea válido

Genera la calculadora ahora:`
}

interface ClaudeCalculatorResponse {
  html: string
  logic: string
  styles: string
  metadata: {
    title: string
    description: string
    excerpt: string
  }
}

async function generateCalculator(slug: string): Promise<void> {
  console.log(`\n🤖 Generando calculadora: ${slug}`)
  console.log('━'.repeat(50))

  // Obtener configuración
  const config = getKeywordConfig(slug)
  if (!config) {
    throw new Error(`❌ No se encontró configuración para: ${slug}`)
  }

  console.log(`📊 Keyword: ${config.keyword}`)
  console.log(`📈 Volume: ${config.volume}`)
  console.log(`🎯 Priority: ${config.priority}`)
  console.log(`\n⏳ Generando con Claude API...`)

  try {
    // Llamar a Claude API
    const message = await anthropic.messages.create({
      model: process.env.GENERATION_MODEL_CLAUDE || 'claude-sonnet-4-5-20250929',
      max_tokens: 20000,
      temperature: 1,
      messages: [
        {
          role: 'user',
          content: createPrompt(config)
        }
      ]
    })

    // Extraer respuesta
    const content = message.content[0]
    if (content.type !== 'text') {
      throw new Error('Respuesta inesperada de Claude')
    }

    // Parsear JSON
    let responseText = content.text.trim()

    // Limpiar posibles markdown
    responseText = responseText.replace(/^```json\s*/i, '').replace(/\s*```$/, '')

    const response: ClaudeCalculatorResponse = JSON.parse(responseText)

    console.log(`✅ Código generado exitosamente`)
    console.log(`   - HTML: ${response.html.length} caracteres`)
    console.log(`   - Logic: ${response.logic.length} caracteres`)
    console.log(`   - Title: ${response.metadata.title}`)

    // Crear archivo de datos
    const fileContent = `import { CalculatorData } from '@/types/calculator'

/**
 * Calculadora: ${config.keyword}
 * Generado automáticamente con Claude API
 * Fecha: ${new Date().toISOString()}
 */

export const ${slug.replace(/-/g, '_')}CalculatorData: CalculatorData = {
  slug: '${slug}',

  metadata: {
    title: ${JSON.stringify(response.metadata.title)},
    description: ${JSON.stringify(response.metadata.description)},
    excerpt: ${JSON.stringify(response.metadata.excerpt)},
    canonical: 'https://pengekalkulator.com${config.url}',
    keywords: [${JSON.stringify(config.keyword)}],
    category: ${JSON.stringify(config.category)}
  },

  calculator: {
    html: ${JSON.stringify(response.html)},
    logic: ${JSON.stringify(response.logic)},
    styles: ${JSON.stringify(response.styles || '')}
  },

  content: {
    // Este contenido será generado por OpenAI en el siguiente paso
    howToUse: {
      title: 'Sådan bruges kalkulatoren',
      description: 'Pending OpenAI generation',
      steps: []
    },
    examples: [],
    faqs: []
  },

  generatedAt: '${new Date().toISOString()}',
  version: '1.0.0'
}
`

    // Guardar archivo
    const outputPath = path.join(__dirname, '..', 'calculators-data', `${slug}.ts`)
    fs.writeFileSync(outputPath, fileContent, 'utf-8')

    console.log(`\n💾 Archivo guardado: calculators-data/${slug}.ts`)
    console.log(`✨ Generación completada exitosamente!\n`)

  } catch (error: any) {
    console.error(`\n❌ Error generando calculadora:`)
    console.error(error.message)
    if (error.response) {
      console.error('Response:', error.response.data)
    }
    throw error
  }
}

// CLI
async function main() {
  const args = process.argv.slice(2)

  if (args.length === 0 || args[0] === '--help') {
    console.log(`
📋 Generador de Calculadoras con Claude API

Uso:
  npm run generate:calculator -- --slug=SLUG

Ejemplos:
  npm run generate:calculator -- --slug=procent
  npm run generate:calculator -- --slug=lon-efter-skat

Calculadoras disponibles:
  - lon-efter-skat (ALTA prioridad)
  - procent (ALTA prioridad)
  - flexjob-lon
  - enhedspris
  - renters-rente
  ... y 13 más
    `)
    process.exit(0)
  }

  const slugArg = args.find(arg => arg.startsWith('--slug='))
  if (!slugArg) {
    console.error('❌ Error: Debes especificar --slug=SLUG')
    process.exit(1)
  }

  const slug = slugArg.replace('--slug=', '')

  try {
    await generateCalculator(slug)
  } catch (error) {
    process.exit(1)
  }
}

main()
