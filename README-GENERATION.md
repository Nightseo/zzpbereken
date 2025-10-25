# 🤖 Sistema de Generación de Calculadoras

Sistema automatizado para generar calculadoras funcionales usando Claude AI y OpenAI.

## 📁 Estructura

```
/calculators-data/          # Datos generados de cada calculadora
  └── example-procent.ts    # Ejemplo de estructura
/scripts/                   # Scripts de generación
  ├── generate-calculator.ts  # Claude API - Genera código HTML/JS
  ├── generate-content.ts     # OpenAI API - Genera contenido SEO
  └── generate-all.ts         # Orquestador principal
/types/
  └── calculator.ts         # Tipos TypeScript
/app/
  └── calculator-styles.css # Estilos compartidos
```

## 🎨 Clases CSS Disponibles

### Containers
- `.calc-container` - Container principal
- `.calc-group` - Grupo de inputs

### Inputs y Forms
- `.calc-label` - Labels de campos
- `.calc-input` - Inputs de texto/número
- `.calc-select` - Dropdowns
- `.calc-input-wrapper` - Wrapper para inputs con sufijo
- `.calc-input-suffix` - Sufijo (kr, %, etc.)

### Botones
- `.calc-button` - Botón primario
- `.calc-button-secondary` - Botón secundario

### Resultados
- `.calc-result-container` - Container de resultados
- `.calc-result-box` - Caja de resultado principal
- `.calc-result-value` - Valor grande del resultado
- `.calc-result-label` - Label del resultado
- `.calc-result-subtitle` - Subtítulo

### Breakdown/Desglose
- `.calc-breakdown` - Container del desglose
- `.calc-breakdown-item` - Item individual
- `.calc-breakdown-label` - Label del item
- `.calc-breakdown-value` - Valor del item

### Estados
- `.calc-error` - Mensaje de error
- `.calc-help` - Texto de ayuda
- `.calc-loading` - Estado de carga

## 📝 Formato de Datos

Cada calculadora tiene esta estructura:

```typescript
{
  slug: string
  metadata: {
    title: string
    description: string
    excerpt: string
    canonical: string
    keywords: string[]
    category: string
  }
  calculator: {
    html: string      // HTML usando clases compartidas
    logic: string     // JavaScript vanilla
    styles?: string   // CSS adicional (opcional)
  }
  content: {
    howToUse: { ... }
    examples: [ ... ]
    faqs: [ ... ]
    additionalInfo: { ... }
  }
  generatedAt: string
  version: string
}
```

## 🚀 Uso (próximamente)

```bash
# Generar una calculadora específica
npm run generate:calculator -- --slug=lon-efter-skat

# Generar contenido para una calculadora
npm run generate:content -- --slug=lon-efter-skat

# Generar todas las calculadoras
npm run generate:all
```

## 🔑 Configuración

1. Copia `.env.local.example` a `.env.local`
2. Añade tus API keys:
   - Anthropic Claude: https://console.anthropic.com/
   - OpenAI: https://platform.openai.com/api-keys

## 📋 Lista de Calculadoras

Ver `/keywords` para la lista completa de 18 calculadoras a generar.

## 🎯 Próximos Pasos

- [ ] Implementar script de generación con Claude
- [ ] Implementar script de generación con OpenAI
- [ ] Crear template React para renderizar
- [ ] Generar las 2 primeras calculadoras (prueba)
- [ ] Generar todas las 18 calculadoras
