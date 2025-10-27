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

// STIJLGIDS - Wordt doorgegeven aan alle prompts voor consistentie
const STYLE_GUIDE = `
SCHRIJFSTIJL EN TOON:
- Professioneel maar toegankelijk en gebruiksvriendelijk
- Gebruik natuurlijk Nederlands zoals een Nederlandse ZZP'er zou schrijven
- Vermijd directe vertalingen uit het Engels - gebruik Nederlandse uitdrukkingen en wendingen
- Wees precies en concreet zonder technisch overweldigend te zijn
- Gebruik "u" naar de lezer (beleefde vorm)
- Korte, heldere zinnen
- Gestructureerd en gemakkelijk te scannen
- Behulpzame en ondersteunende toon
- Focus op praktische toepassing
- ZZP-specifieke context waar relevant
`

// Prompt 1: How to Use (Hoe te gebruiken)
function createHowToUsePrompt(keyword: string, description: string): string {
  return `Je bent een content writer voor een Nederlandse financiële website voor ZZP'ers en kleine ondernemers.

OPDRACHT: Schrijf een "Hoe te gebruiken" sectie voor: ${keyword}

INFORMATIE:
- Onderwerp: ${keyword}
- Beschrijving: ${description}

${STYLE_GUIDE}

INHOUD:
Schrijf een korte handleiding met:
1. Een pakkende titel (5-8 woorden)
2. Een korte introductie (1-2 regels) die uitlegt wat de calculator doet
3. 3-4 stappen die uitleggen hoe je de calculator gebruikt
   - Elke stap moet hebben: nummer, korte titel (3-5 woorden), beschrijving (max 100 tekens)
   - Wees concreet en actiegericht

ANTWOORDFORMAAT (alleen JSON):
{
  "title": "Titel in het Nederlands",
  "description": "Introductie in het Nederlands",
  "steps": [
    {
      "step": 1,
      "title": "Stap titel",
      "description": "Stap beschrijving"
    }
  ]
}

Schrijf het HELE antwoord in perfect Nederlands. Alleen JSON, geen markdown.`
}

// Prompt 2: Examples (Voorbeelden)
function createExamplesPrompt(keyword: string, description: string, previousContent: string): string {
  return `Je bent een content writer voor een Nederlandse financiële website voor ZZP'ers en kleine ondernemers.

OPDRACHT: Schrijf praktische voorbeelden voor: ${keyword}

INFORMATIE:
- Onderwerp: ${keyword}
- Beschrijving: ${description}

EERDERE INHOUD (voor context):
${previousContent}

${STYLE_GUIDE}

INHOUD:
Schrijf 2-3 realistische voorbeelden die laten zien hoe de calculator wordt gebruikt:
- Elk voorbeeld moet hebben:
  * Een korte titel (5-8 woorden)
  * Een beschrijving van de situatie (1-2 regels)
  * Concrete input-waarden die passen bij Nederlandse omstandigheden
  * Verwacht resultaat
  * Een korte uitleg (1 regel)
- De voorbeelden moeten relevant zijn voor Nederlandse gebruikers
- Gebruik realistische Nederlandse cijfers en scenario's
- Voor ZZP-gerelateerde calculators: gebruik echte ZZP-scenario's (bijv. €75/uur voor freelancers, BTW-berekeningen met 21%, etc.)

ANTWOORDFORMAAT (alleen JSON):
{
  "examples": [
    {
      "title": "Voorbeeld titel",
      "description": "Situatiebeschrijving",
      "input": {
        "veld1": "waarde1",
        "veld2": "waarde2"
      },
      "output": "Resultaat",
      "explanation": "Uitleg"
    }
  ]
}

Schrijf het HELE antwoord in perfect Nederlands. Alleen JSON, geen markdown.`
}

// Prompt 3: FAQs (Veelgestelde vragen)
function createFAQsPrompt(keyword: string, description: string, previousContent: string): string {
  return `Je bent een content writer voor een Nederlandse financiële website voor ZZP'ers en kleine ondernemers.

OPDRACHT: Schrijf veelgestelde vragen voor: ${keyword}

INFORMATIE:
- Onderwerp: ${keyword}
- Beschrijving: ${description}

EERDERE INHOUD (voor context):
${previousContent}

${STYLE_GUIDE}

INHOUD:
Schrijf 4-6 relevante vragen en antwoorden:
- Vragen die Nederlandse gebruikers (vooral ZZP'ers) daadwerkelijk zouden stellen
- Heldere, korte antwoorden (max 200 tekens)
- Focus op praktische hulp
- Neem indien relevant op:
  * Hoe werkt het?
  * Waar moet ik op letten?
  * Is dit volgens Nederlandse regels/wetgeving?
  * Tips en tricks voor ZZP'ers
  * BTW-gerelateerde vragen indien relevant
- Vermijd voor de hand liggende of triviale vragen

ANTWOORDFORMAAT (alleen JSON):
{
  "faqs": [
    {
      "question": "Vraag in het Nederlands?",
      "answer": "Antwoord in het Nederlands."
    }
  ]
}

Schrijf het HELE antwoord in perfect Nederlands. Alleen JSON, geen markdown.`
}

// Prompt 4: Additional Info (Aanvullende informatie)
function createAdditionalInfoPrompt(keyword: string, description: string, category: string, previousContent: string): string {
  return `Je bent een content writer voor een Nederlandse financiële website voor ZZP'ers en kleine ondernemers.

OPDRACHT: Schrijf een "Aanvullende informatie" sectie voor: ${keyword}

INFORMATIE:
- Onderwerp: ${keyword}
- Beschrijving: ${description}
- Categorie: ${category}

EERDERE INHOUD (voor context):
${previousContent}

${STYLE_GUIDE}

INHOUD:
Schrijf een korte, informatieve tekst (max 300 tekens) over:
- Achtergrondinformatie over het onderwerp
- Relevante context voor Nederlandse omstandigheden
- Wetgeving of regels indien relevant (bijv. Belastingdienst richtlijnen, BTW-regels)
- Praktische tips of aanbevelingen voor ZZP'ers
- Waarom het belangrijk is voor zelfstandigen

Geef de sectie een passende titel (4-6 woorden).

ANTWOORDFORMAAT (alleen JSON):
{
  "additionalInfo": {
    "title": "Titel in het Nederlands",
    "content": "Inhoud in het Nederlands (max 300 tekens)"
  }
}

Schrijf het HELE antwoord in perfect Nederlands. Alleen JSON, geen markdown.`
}

// Prompt 5: Meta SEO (Titel en beschrijving)
function createMetaSEOPrompt(keyword: string, description: string, previousContent: string): string {
  return `Je bent een SEO-specialist voor een Nederlandse website voor ZZP'ers.

OPDRACHT: Schrijf SEO-geoptimaliseerde meta titel, beschrijving en pagina titels voor: ${keyword}

INFORMATIE:
- Primair keyword: ${keyword}
- Beschrijving: ${description}

EERDERE INHOUD (voor context):
${previousContent}

EISEN VOOR META TITEL:
- Lengte: 50-60 tekens (dichter bij 60 is beter)
- MOET het woord "Calculator" bevatten
- Moet natuurlijk en leesbaar zijn (VERMIJD "bereken X met calculator" - dat is te overbodig)
- Focus op waarde en resultaat, niet alleen op het hulpmiddel
- VERMIJD "ZZPBereken" of merknaam
- Wees specifiek en aantrekkelijk

EISEN VOOR META BESCHRIJVING:
- Lengte: 140-155 tekens (dichter bij 155 is beter)
- Moet actiegericht en aantrekkelijk zijn
- Voeg voordelen/resultaten toe
- Moet mensen aanzetten om te klikken
- Vermijd generieke zinnen zoals "snel overzicht" of "probeer onze"
- Wees concreet over wat de gebruiker krijgt
- Voor ZZP-calculators: vermeld relevantie voor zelfstandigen

GOEDE VOORBEELDEN:
- Keyword: "btw berekenen"
  → Meta titel: "BTW Calculator - Bereken 21% en 9% BTW Direct"
  → Meta beschrijving: "Bereken BTW snel en nauwkeurig. Inclusief en exclusief BTW berekenen voor 21% en 9% tarief. Ideaal voor ZZP'ers en ondernemers. Gratis en eenvoudig."

- Keyword: "uurloon"
  → Meta titel: "Uurloon Calculator - Bereken Je ZZP Uurtarief 2025"
  → Meta beschrijving: "Bereken je ideale uurloon als ZZP'er. Inclusief kosten, belastingen en gewenste winst. Volgt Nederlandse wetgeving. Gratis calculator."

- Keyword: "inkomstenbelasting"
  → Meta titel: "Inkomstenbelasting Calculator - Bereken Je Aanslag 2025"
  → Meta beschrijving: "Bereken precies je inkomstenbelasting over 2025. Inclusief schijven, heffingskortingen en aftrekposten. Voor ZZP'ers en werknemers. Actueel en betrouwbaar."

SLECHTE VOORBEELDEN (VERMIJD):
❌ "Bereken BTW met Calculator" (te kort en overbodig)
❌ "Krijg snel inzicht in je BTW. Probeer onze calculator!" (generiek en te kort)

H1 en H2:
- H1: moet beginnen met "Bereken" gevolgd door keyword (bijv. "Bereken BTW")
- H2: moet keyword zijn gevolgd door "Calculator" met hoofdletter C (bijv. "BTW Calculator")

ANTWOORDFORMAAT (alleen JSON):
{
  "metadata": {
    "title": "Meta titel (50-60 tekens - voeg 'Calculator' toe)",
    "description": "Meta beschrijving (140-155 tekens - concreet en actiegericht)",
    "h1": "Bereken [keyword]",
    "h2": "[Keyword] Calculator"
  }
}

Schrijf het HELE antwoord in perfect Nederlands. Alleen JSON, geen markdown.`
}

async function callOpenAI(prompt: string, section: string): Promise<any> {
  console.log(`  → Genereren ${section}...`)

  const completion = await openai.chat.completions.create({
    model: process.env.GENERATION_MODEL_OPENAI || 'gpt-4o',
    messages: [
      {
        role: 'system',
        content: 'Je bent een expert Nederlandse content writer met diepgaande kennis van de Nederlandse taal, cultuur en financiële omstandigheden voor ZZP\'ers. Je schrijft als een native Nederlandse ZZP-expert.'
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
  console.log(`\n✍️ Inhoud genereren voor: ${slug}`)
  console.log('━'.repeat(50))

  // Verificar que existe el archivo de la calculadora
  const calculatorPath = path.join(__dirname, '..', 'calculators-data', `${slug}.ts`)
  if (!fs.existsSync(calculatorPath)) {
    throw new Error(`❌ Calculator bestaat niet: ${slug}.ts\nGenereer eerst de code met: npm run generate:calculator -- --slug=${slug}`)
  }

  const config = getKeywordConfig(slug)
  if (!config) {
    throw new Error(`❌ Configuratie niet gevonden voor: ${slug}`)
  }

  console.log(`📚 Keyword: ${config.keyword}`)
  console.log(`📈 Volume: ${config.volume}`)
  console.log(`\n🎯 Inhoud genereren met OpenAI (5 secties)...\n`)

  try {
    let previousContent = ''

    // 1. How to Use
    const howToUse = await callOpenAI(
      createHowToUsePrompt(config.keyword, config.description),
      'Hoe te gebruiken'
    )
    previousContent += JSON.stringify(howToUse)

    // 2. Examples
    const examples = await callOpenAI(
      createExamplesPrompt(config.keyword, config.description, previousContent),
      'Voorbeelden'
    )
    previousContent += JSON.stringify(examples)

    // 3. FAQs
    const faqs = await callOpenAI(
      createFAQsPrompt(config.keyword, config.description, previousContent),
      'Veelgestelde vragen'
    )
    previousContent += JSON.stringify(faqs)

    // 4. Additional Info
    const additionalInfo = await callOpenAI(
      createAdditionalInfoPrompt(config.keyword, config.description, config.category, previousContent),
      'Aanvullende informatie'
    )
    previousContent += JSON.stringify(additionalInfo)

    // 5. Meta SEO
    const metadata = await callOpenAI(
      createMetaSEOPrompt(config.keyword, config.description, previousContent),
      'Meta SEO'
    )

    console.log(`\n✅ Alle inhoud gegenereerd!`)
    console.log(`   - Stappen: ${howToUse.steps.length}`)
    console.log(`   - Voorbeelden: ${examples.examples.length}`)
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

    console.log(`\n💾 Bestand bijgewerkt: calculators-data/${slug}.ts`)
    console.log(`✨ Inhoud klaar!\n`)

  } catch (error: any) {
    console.error(`\n❌ Fout bij genereren:`)
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
📝 Inhoud Generator met OpenAI

Gebruik:
  npm run generate:content -- --slug=SLUG

Voorbeelden:
  npm run generate:content -- --slug=btw-berekenen
  npm run generate:content -- --slug=uurloon-calculator

Note: Genereer eerst de calculator code met:
  npm run generate:calculator -- --slug=SLUG
    `)
    process.exit(0)
  }

  const slugArg = args.find(arg => arg.startsWith('--slug='))
  if (!slugArg) {
    console.error('❌ Fout: Je moet --slug=SLUG specificeren')
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
