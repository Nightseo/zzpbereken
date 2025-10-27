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
  return `Je bent een expert webontwikkelaar gespecialiseerd in het maken van financiële en zakelijke calculators in HTML en vanilla JavaScript.

TAAK: Maak een functionele calculator voor "${config.keyword}" in het NEDERLANDS voor Nederlandse gebruikers (vooral ZZP'ers en kleine ondernemers).

PROJECTINFORMATIE:
- Hoofd keyword: ${config.keyword}
- Zoekvolume: ${config.volume}
- Beschrijving: ${config.description}
- Categorie: ${config.category}
- Prioriteit: ${config.priority}

⚠️ BELANGRIJK - NEDERLANDSE WETGEVING:
- Volg STRIKT de huidige Nederlandse wetgeving
- Voor belastingen: gebruik geldende tarieven in Nederland (bijv: BTW 21% hoog tarief, 9% laag tarief)
- Voor salarissen: pas het Nederlandse belastingsysteem toe (loonheffing, inkomstenbelasting 2025, schijven, heffingskortingen)
- Voor ZZP: gebruik Nederlandse regels (uurtarief, omzetprognose, BTW-drempel €25.000, kleinondernemersregeling)
- Voor financiële berekeningen: gebruik Nederlandse normen en formules
- Alle voorbeelden moeten relevant zijn voor gebruikers in Nederland
- Valuta: Euro (€)
- Nummerformaat: Nederlands formaat (komma voor decimalen, punt voor duizendtallen in display)

TECHNISCHE VEREISTEN:

1. **HTML** - Gebruik UITSLUITEND deze CSS classes (al gedefinieerd):
   - Containers: .calc-container, .calc-group
   - Labels: .calc-label
   - Inputs: .calc-input, .calc-select
   - Input met suffix: .calc-input-wrapper + .calc-input-suffix
   - Buttons: .calc-button, .calc-button-secondary
   - Resultaten: .calc-result-container, .calc-result-box, .calc-result-value, .calc-result-label, .calc-result-subtitle
   - Breakdown: .calc-breakdown, .calc-breakdown-item, .calc-breakdown-label, .calc-breakdown-value
   - States: .calc-error, .calc-help, .calc-loading

2. **JavaScript**:
   - Pure vanilla JS (geen frameworks)
   - Functioneel en zonder fouten
   - Gebruik addEventListener voor events
   - Formatteer getallen in Nederlands formaat (toLocaleString('nl-NL'))
   - Input validatie
   - Toon resultaten met gedetailleerde breakdown

3. **Inhoud 100% in het NEDERLANDS**:
   - ALLE inhoud moet in het Nederlands (labels, placeholders, berichten, etc.)
   - Duidelijke en beschrijvende labels in het Nederlands
   - Informatieve foutmeldingen in het Nederlands
   - Instructies in het Nederlands
   - Gebruik "€" voor Euro
   - Gebruik "," voor decimalen en "." voor duizendtallen in display (Nederlands formaat)
   - Technische termen in het Nederlands (niet letterlijk vertalen uit het Engels)
   - ZZP-specifieke termen: "ZZP'er", "zzp-inkomen", "omzet", "BTW-aangifte", etc.

4. **Functionaliteit**:
   - De calculator moet praktisch en nuttig zijn
   - Inclusief validaties
   - Toon breakdown/uitsplitsing van de berekening
   - Behandel edge cases
   - Responsive (de CSS classes zijn dit al)

ANTWOORDFORMAAT:

Antwoord ALLEEN met een geldige JSON in dit exacte formaat:

{
  "html": "HTML code hier met de gespecificeerde CSS classes",
  "logic": "JavaScript code hier - volledige functionele code",
  "styles": "Extra CSS indien absoluut noodzakelijk (leeg indien niet)",
  "metadata": {
    "title": "SEO geoptimaliseerde titel in het Nederlands (max 60 tekens)",
    "description": "SEO meta beschrijving in het Nederlands (max 155 tekens)",
    "excerpt": "Korte samenvatting van de calculator in het Nederlands (1-2 regels)"
  }
}

BELANGRIJK:
- Voeg GEEN markdown toe, alleen pure JSON
- Gebruik NIET \`\`\`json of iets dergelijks
- De HTML moet alleen de gespecificeerde classes gebruiken
- De JavaScript moet functioneel en compleet zijn
- Alles in het Nederlands
- Zorg ervoor dat de JSON geldig is

Genereer nu de calculator:`
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
  console.log(`\n🤖 Calculator genereren: ${slug}`)
  console.log('━'.repeat(50))

  // Configuratie ophalen
  const config = getKeywordConfig(slug)
  if (!config) {
    throw new Error(`❌ Configuratie niet gevonden voor: ${slug}`)
  }

  console.log(`📊 Keyword: ${config.keyword}`)
  console.log(`📈 Volume: ${config.volume}`)
  console.log(`🎯 Priority: ${config.priority}`)
  console.log(`\n⏳ Genereren met Claude API...`)

  try {
    // Claude API aanroepen
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

    // Response extraheren
    const content = message.content[0]
    if (content.type !== 'text') {
      throw new Error('Onverwacht antwoord van Claude')
    }

    // JSON parsen
    let responseText = content.text.trim()

    // Eventuele markdown verwijderen
    responseText = responseText.replace(/^```json\s*/i, '').replace(/\s*```$/, '')

    const response: ClaudeCalculatorResponse = JSON.parse(responseText)

    console.log(`✅ Code succesvol gegenereerd`)
    console.log(`   - HTML: ${response.html.length} tekens`)
    console.log(`   - Logic: ${response.logic.length} tekens`)
    console.log(`   - Title: ${response.metadata.title}`)

    // Data bestand aanmaken
    const fileContent = `import { CalculatorData } from '@/types/calculator'

/**
 * Calculator: ${config.keyword}
 * Automatisch gegenereerd met Claude API
 * Datum: ${new Date().toISOString()}
 */

export const ${slug.replace(/-/g, '_')}CalculatorData: CalculatorData = {
  slug: '${slug}',

  metadata: {
    title: ${JSON.stringify(response.metadata.title)},
    description: ${JSON.stringify(response.metadata.description)},
    excerpt: ${JSON.stringify(response.metadata.excerpt)},
    canonical: 'https://zzpbereken.com${config.url}',
    keywords: [${JSON.stringify(config.keyword)}],
    category: ${JSON.stringify(config.category)}
  },

  calculator: {
    html: ${JSON.stringify(response.html)},
    logic: ${JSON.stringify(response.logic)},
    styles: ${JSON.stringify(response.styles || '')}
  },

  content: {
    // Deze inhoud wordt gegenereerd door OpenAI in de volgende stap
    howToUse: {
      title: 'Hoe te gebruiken',
      description: 'In afwachting van OpenAI generatie',
      steps: []
    },
    examples: [],
    faqs: []
  },

  generatedAt: '${new Date().toISOString()}',
  version: '1.0.0'
}
`

    // Bestand opslaan
    const outputPath = path.join(__dirname, '..', 'calculators-data', `${slug}.ts`)
    fs.writeFileSync(outputPath, fileContent, 'utf-8')

    console.log(`\n💾 Bestand opgeslagen: calculators-data/${slug}.ts`)
    console.log(`✨ Generatie succesvol afgerond!\n`)

  } catch (error: any) {
    console.error(`\n❌ Fout bij genereren calculator:`)
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
📋 Calculator Generator met Claude API

Gebruik:
  npm run generate:calculator -- --slug=SLUG

Voorbeelden:
  npm run generate:calculator -- --slug=btw-berekenen
  npm run generate:calculator -- --slug=uurloon-calculator

Beschikbare calculators:
  - btw-berekenen (HOGE prioriteit)
  - uurloon-calculator (HOGE prioriteit)
  - inkomstenbelasting
  - ... en meer
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
    await generateCalculator(slug)
  } catch (error) {
    process.exit(1)
  }
}

main()
