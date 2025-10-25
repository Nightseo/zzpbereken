#!/usr/bin/env tsx

import OpenAI from 'openai'
import * as fs from 'fs'
import * as path from 'path'
import * as dotenv from 'dotenv'
import { getKeywordConfig } from './keywords-config'

// Cargar variables de entorno
dotenv.config({ path: path.join(__dirname, '..', '.env.local') })

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

// STYLE GUIDE - Se pasa a todos los prompts para consistencia
const STYLE_GUIDE = `
SKRIVESTIL OG TONE:
- Professionel men tilgængelig og brugervenlig
- Brug naturligt dansk sprog som en indfødt dansker ville skrive
- Undgå direkte oversættelser fra engelsk - brug danske udtryk og vendinger
- Vær præcis og konkret uden at være teknisk overvældende
- Brug "du" til læseren (ikke "De")
- Korte, klare sætninger
- Struktureret og let at skanne
- Hjælpsom og støttende tone
- Fokus på praktisk anvendelse
`

// Prompt 1: How to Use (Sådan bruges kalkulatoren)
function createHowToUsePrompt(keyword: string, description: string): string {
  return `Du er content writer for en dansk finansiel hjemmeside.

OPGAVE: Skriv en "Sådan bruges kalkulatoren" sektion for: ${keyword}

INFORMATION:
- Emne: ${keyword}
- Beskrivelse: ${description}

${STYLE_GUIDE}

INDHOLD:
Skriv en kort vejledning med:
1. En fængende overskrift (5-8 ord)
2. En kort introduktion (1-2 linjer) der forklarer hvad kalkulatoren gør
3. 3-4 trin der forklarer hvordan man bruger kalkulatoren
   - Hvert trin skal have: nummer, kort titel (3-5 ord), beskrivelse (max 100 tegn)
   - Vær konkret og handlingsorienteret

SVAR FORMAT (kun JSON):
{
  "title": "Overskrift på dansk",
  "description": "Introduktion på dansk",
  "steps": [
    {
      "step": 1,
      "title": "Trin titel",
      "description": "Trin beskrivelse"
    }
  ]
}

Skriv HELE svaret på perfekt dansk. Kun JSON, ingen markdown.`
}

// Prompt 2: Examples (Eksempler)
function createExamplesPrompt(keyword: string, description: string, previousContent: string): string {
  return `Du er content writer for en dansk finansiel hjemmeside.

OPGAVE: Skriv praktiske eksempler for: ${keyword}

INFORMATION:
- Emne: ${keyword}
- Beskrivelse: ${description}

TIDLIGERE INDHOLD (for kontekst):
${previousContent}

${STYLE_GUIDE}

INDHOLD:
Skriv 2-3 realistiske eksempler der viser hvordan kalkulatoren bruges:
- Hvert eksempel skal have:
  * En kort overskrift (5-8 ord)
  * En beskrivelse af situationen (1-2 linjer)
  * Konkrete input-værdier der passer til danske forhold
  * Forventet resultat
  * En kort forklaring (1 linje)
- Eksemplerne skal være relevante for danske brugere
- Brug realistiske danske tal og scenarier

SVAR FORMAT (kun JSON):
{
  "examples": [
    {
      "title": "Eksempel overskrift",
      "description": "Situationsbeskrivelse",
      "input": {
        "felt1": "værdi1",
        "felt2": "værdi2"
      },
      "output": "Resultat",
      "explanation": "Forklaring"
    }
  ]
}

Skriv HELE svaret på perfekt dansk. Kun JSON, ingen markdown.`
}

// Prompt 3: FAQs (Ofte stillede spørgsmål)
function createFAQsPrompt(keyword: string, description: string, previousContent: string): string {
  return `Du er content writer for en dansk finansiel hjemmeside.

OPGAVE: Skriv ofte stillede spørgsmål for: ${keyword}

INFORMATION:
- Emne: ${keyword}
- Beskrivelse: ${description}

TIDLIGERE INDHOLD (for kontekst):
${previousContent}

${STYLE_GUIDE}

INDHOLD:
Skriv 4-6 relevante spørgsmål og svar:
- Spørgsmål som danske brugere faktisk ville stille
- Klare, korte svar (max 200 tegn)
- Fokus på praktisk hjælp
- Inkluder eventuelt:
  * Hvordan fungerer det?
  * Hvad skal jeg være opmærksom på?
  * Er det i henhold til danske regler?
  * Tips og tricks
- Undgå åbenlyse eller trivielle spørgsmål

SVAR FORMAT (kun JSON):
{
  "faqs": [
    {
      "question": "Spørgsmål på dansk?",
      "answer": "Svar på dansk."
    }
  ]
}

Skriv HELE svaret på perfekt dansk. Kun JSON, ingen markdown.`
}

// Prompt 4: Additional Info (Yderligere information)
function createAdditionalInfoPrompt(keyword: string, description: string, category: string, previousContent: string): string {
  return `Du er content writer for en dansk finansiel hjemmeside.

OPGAVE: Skriv en "Yderligere information" sektion for: ${keyword}

INFORMATION:
- Emne: ${keyword}
- Beskrivelse: ${description}
- Kategori: ${category}

TIDLIGERE INDHOLD (for kontekst):
${previousContent}

${STYLE_GUIDE}

INDHOLD:
Skriv en kort, informativ tekst (max 300 tegn) om:
- Baggrundsinformation om emnet
- Relevant kontekst for danske forhold
- Lovgivning eller regler hvis relevant
- Praktiske tips eller anbefalinger
- Hvorfor det er vigtigt

Giv sektionen en passende overskrift (4-6 ord).

SVAR FORMAT (kun JSON):
{
  "additionalInfo": {
    "title": "Overskrift på dansk",
    "content": "Indhold på dansk (max 300 tegn)"
  }
}

Skriv HELE svaret på perfekt dansk. Kun JSON, ingen markdown.`
}

// Prompt 5: Meta SEO (Titel og beskrivelse)
function createMetaSEOPrompt(keyword: string, description: string, previousContent: string): string {
  return `Du er SEO-specialist for en dansk hjemmeside.

OPGAVE: Skriv SEO-optimeret meta titel, beskrivelse og side-titler for: ${keyword}

INFORMATION:
- Primær keyword: ${keyword}
- Beskrivelse: ${description}

TIDLIGERE INDHOLD (for kontekst):
${previousContent}

KRAV FOR META TITEL:
- Længde: 50-60 tegn (tættere på 60 er bedre)
- SKAL inkludere ordet "Kalkulator"
- Skal være naturlig og læsbar (UNDGÅ "beregn X med kalkulator" - det er for redundant)
- Fokus på værdi og resultat, ikke kun på værktøjet
- UNDGÅ "PengeKalkulator" eller brand navn
- Vær specifik og fængende

KRAV FOR META BESKRIVELSE:
- Længde: 140-155 tegn (tættere på 155 er bedre)
- Skal være actionorienteret og fængende
- Inkluder fordele/resultater
- Skal få folk til at klikke
- Undgå generiske fraser som "hurtigt overblik" eller "prøv vores"
- Vær konkret om hvad brugeren får

GODE EKSEMPLER:
- Keyword: "procent"
  → Meta titel: "Procent Kalkulator - Beregn Stigning, Fald og Forskel"
  → Meta beskrivelse: "Præcis procentberegning med trin-for-trin forklaring. Beregn stigning, fald, procent af beløb og procentforskel. Gratis og nem at bruge."

- Keyword: "løn efter skat"
  → Meta titel: "Løn efter Skat Kalkulator - Beregn Din Nettoløn 2025"
  → Meta beskrivelse: "Beregn præcist hvad du får udbetalt efter AM-bidrag og skat. Inkluderer fradrag og følger gældende skattesatser. Nemt og nøjagtigt."

- Keyword: "indlånsrente"
  → Meta titel: "Indlånsrente Kalkulator - Beregn Dit Bankafkast"
  → Meta beskrivelse: "Beregn dit reelle afkast på bankopsparing inkl. renter, månedlige indskud og kapitalindkomstskat. Se hvordan din opsparing vokser over tid."

DÅRLIGE EKSEMPLER (UNDGÅ):
❌ "Beregn indlånsrente med Kalkulator" (for kort og redundant)
❌ "Få hurtigt overblik over dit bankafkast. Prøv vores kalkulator!" (generisk og for kort)

H1 og H2:
- H1: skal starte med "Beregn" efterfulgt af keyword (f.eks. "Beregn indlånsrente")
- H2: skal være keyword efterfulgt af "Kalkulator" med stort K (f.eks. "Indlånsrente Kalkulator")

SVAR FORMAT (kun JSON):
{
  "metadata": {
    "title": "Meta titel (50-60 tegn - inkluder 'Kalkulator')",
    "description": "Meta beskrivelse (140-155 tegn - konkret og actionorienteret)",
    "h1": "Beregn [keyword]",
    "h2": "[Keyword] Kalkulator"
  }
}

Skriv HELE svaret på perfekt dansk. Kun JSON, ingen markdown.`
}

async function callOpenAI(prompt: string, section: string): Promise<any> {
  console.log(`  → Genererer ${section}...`)

  const completion = await openai.chat.completions.create({
    model: process.env.GENERATION_MODEL_OPENAI || 'gpt-4o',
    messages: [
      {
        role: 'system',
        content: 'Du er en ekspert dansk content writer med dyb forståelse for dansk sprog, kultur og finansielle forhold. Du skriver som en indfødt dansker.'
      },
      {
        role: 'user',
        content: prompt
      }
    ],
    temperature: 0.7,
    max_tokens: 2000
  })

  const responseText = completion.choices[0].message.content?.trim() || ''
  const cleanedResponse = responseText.replace(/^```json\s*/i, '').replace(/\s*```$/, '')

  return JSON.parse(cleanedResponse)
}

async function generateContent(slug: string): Promise<void> {
  console.log(`\n✍️ Genererer indhold for: ${slug}`)
  console.log('━'.repeat(50))

  // Verificar que existe el archivo de la calculadora
  const calculatorPath = path.join(__dirname, '..', 'calculators-data', `${slug}.ts`)
  if (!fs.existsSync(calculatorPath)) {
    throw new Error(`❌ Kalkulatoren findes ikke: ${slug}.ts\nGenerer først koden med: npm run generate:calculator -- --slug=${slug}`)
  }

  const config = getKeywordConfig(slug)
  if (!config) {
    throw new Error(`❌ Kunne ikke finde konfiguration for: ${slug}`)
  }

  console.log(`📚 Keyword: ${config.keyword}`)
  console.log(`📈 Volume: ${config.volume}`)
  console.log(`\n🎯 Genererer indhold med OpenAI (5 sektioner)...\n`)

  try {
    let previousContent = ''

    // 1. How to Use
    const howToUse = await callOpenAI(
      createHowToUsePrompt(config.keyword, config.description),
      'Sådan bruges kalkulatoren'
    )
    previousContent += JSON.stringify(howToUse)

    // 2. Examples
    const examples = await callOpenAI(
      createExamplesPrompt(config.keyword, config.description, previousContent),
      'Eksempler'
    )
    previousContent += JSON.stringify(examples)

    // 3. FAQs
    const faqs = await callOpenAI(
      createFAQsPrompt(config.keyword, config.description, previousContent),
      'Ofte stillede spørgsmål'
    )
    previousContent += JSON.stringify(faqs)

    // 4. Additional Info
    const additionalInfo = await callOpenAI(
      createAdditionalInfoPrompt(config.keyword, config.description, config.category, previousContent),
      'Yderligere information'
    )
    previousContent += JSON.stringify(additionalInfo)

    // 5. Meta SEO
    const metadata = await callOpenAI(
      createMetaSEOPrompt(config.keyword, config.description, previousContent),
      'Meta SEO'
    )

    console.log(`\n✅ Alt indhold genereret!`)
    console.log(`   - Trin: ${howToUse.steps.length}`)
    console.log(`   - Eksempler: ${examples.examples.length}`)
    console.log(`   - FAQ: ${faqs.faqs.length}`)
    console.log(`   - Meta titel: ${metadata.metadata.title}`)
    console.log(`   - H1: ${metadata.metadata.h1}`)
    console.log(`   - H2: ${metadata.metadata.h2}`)

    // Leer archivo existente
    let calculatorContent = fs.readFileSync(calculatorPath, 'utf-8')

    // Actualizar metadata
    calculatorContent = calculatorContent.replace(
      /title:\s*"[^"]+"/,
      `title: ${JSON.stringify(metadata.metadata.title)}`
    )
    calculatorContent = calculatorContent.replace(
      /description:\s*"[^"]+"/,
      `description: ${JSON.stringify(metadata.metadata.description)}`
    )

    // Añadir h1 y h2 si no existen
    if (metadata.metadata.h1 && !calculatorContent.includes('h1:')) {
      calculatorContent = calculatorContent.replace(
        /(category:\s*"[^"]+")(\s*\n)/,
        `$1,\n    h1: ${JSON.stringify(metadata.metadata.h1)},\n    h2: ${JSON.stringify(metadata.metadata.h2)}$2`
      )
    } else if (metadata.metadata.h1) {
      // Actualizar h1 y h2 existentes
      calculatorContent = calculatorContent.replace(
        /h1:\s*"[^"]+"/,
        `h1: ${JSON.stringify(metadata.metadata.h1)}`
      )
      calculatorContent = calculatorContent.replace(
        /h2:\s*"[^"]+"/,
        `h2: ${JSON.stringify(metadata.metadata.h2)}`
      )
    }

    // Reemplazar sección de content
    const contentSection = `  content: {
    howToUse: ${JSON.stringify(howToUse, null, 6).replace(/\n/g, '\n    ')},
    examples: ${JSON.stringify(examples.examples, null, 6).replace(/\n/g, '\n    ')},
    faqs: ${JSON.stringify(faqs.faqs, null, 6).replace(/\n/g, '\n    ')},
    additionalInfo: ${JSON.stringify(additionalInfo.additionalInfo, null, 6).replace(/\n/g, '\n    ')}
  }`

    // Buscar y reemplazar desde 'content: {' hasta antes de 'generatedAt:'
    calculatorContent = calculatorContent.replace(
      /content:\s*\{[\s\S]*?\n  \}[\s\S]*?(?=\n\s*generatedAt:)/,
      contentSection + ',\n'
    )

    // Guardar archivo actualizado
    fs.writeFileSync(calculatorPath, calculatorContent, 'utf-8')

    console.log(`\n💾 Fil opdateret: calculators-data/${slug}.ts`)
    console.log(`✨ Indhold færdigt!\n`)

  } catch (error: any) {
    console.error(`\n❌ Fejl ved generering:`)
    console.error(error.message)
    if (error.response) {
      console.error('Response:', error.response)
    }
    throw error
  }
}

// CLI
async function main() {
  const args = process.argv.slice(2)

  if (args.length === 0 || args[0] === '--help') {
    console.log(`
📝 Indhold Generator med OpenAI

Brug:
  npm run generate:content -- --slug=SLUG

Eksempler:
  npm run generate:content -- --slug=procent
  npm run generate:content -- --slug=lon-efter-skat

Note: Generer først kalkulatorkoden med:
  npm run generate:calculator -- --slug=SLUG
    `)
    process.exit(0)
  }

  const slugArg = args.find(arg => arg.startsWith('--slug='))
  if (!slugArg) {
    console.error('❌ Fejl: Du skal angive --slug=SLUG')
    process.exit(1)
  }

  const slug = slugArg.replace('--slug=', '')

  try {
    await generateContent(slug)
  } catch (error) {
    process.exit(1)
  }
}

main()
