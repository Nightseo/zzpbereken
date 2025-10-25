// Tipos para la estructura de datos de calculadoras

export interface CalculatorMetadata {
  title: string
  description: string
  excerpt: string
  canonical: string
  keywords: string[]
  category: string
  h1?: string // Título H1 generado por IA (opcional para retrocompatibilidad)
  h2?: string // Título H2 generado por IA (opcional para retrocompatibilidad)
}

export interface CalculatorCode {
  html: string
  logic: string
  styles?: string // Estilos adicionales específicos (opcional)
}

export interface HowToUseStep {
  step: number
  title: string
  description: string
}

export interface CalculatorExample {
  title: string
  description: string
  input: Record<string, string | number>
  output: string
  explanation?: string
}

export interface CalculatorFAQ {
  question: string
  answer: string
}

export interface CalculatorContent {
  howToUse: {
    title: string
    description: string
    steps: HowToUseStep[]
  }
  examples: CalculatorExample[]
  faqs: CalculatorFAQ[]
  additionalInfo?: {
    title: string
    content: string
  }
}

export interface CalculatorData {
  slug: string
  metadata: CalculatorMetadata
  calculator: CalculatorCode
  content: CalculatorContent
  generatedAt: string
  version: string
}

// Configuración para generación con Claude
export interface ClaudeGenerationConfig {
  slug: string
  keyword: string
  volume: number
  difficulty: string
  kwCount: number
  priority: 'ALTA' | 'MEDIA' | 'BAJA'
  description: string
}

// Configuración para generación con OpenAI
export interface OpenAIGenerationConfig {
  slug: string
  calculatorCode: CalculatorCode
  metadata: CalculatorMetadata
}

// Respuesta de Claude API
export interface ClaudeResponse {
  calculator: CalculatorCode
  metadata: Partial<CalculatorMetadata>
}

// Respuesta de OpenAI API
export interface OpenAIResponse {
  content: CalculatorContent
  metadata: Partial<CalculatorMetadata>
}
