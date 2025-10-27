// Configuratie van categorieën met SEO beschrijvingen
// BELANGRIJK: Slechts 6 categorieën om kannibalisatie te voorkomen

export interface CategoryInfo {
  name: string
  slug: string
  description: string
  seoText: string
  metaTitle: string
  metaDescription: string
}

export const categories: Record<string, CategoryInfo> = {
  'belasting': {
    name: 'Belasting',
    slug: 'belasting',
    description: 'Bereken inkomstenbelasting, BTW-aangifte en belastingaftrek voor ZZP\'ers en ondernemers.',
    seoText: 'Krijg hulp bij het berekenen van je inkomstenbelasting, BTW-aangifte en belastingaftrek. Alle calculators volgen de geldende Nederlandse belastingregels.',
    metaTitle: 'Belasting Calculators - Bereken Inkomstenbelasting & BTW',
    metaDescription: 'Nauwkeurige calculators voor inkomstenbelasting, BTW en belastingaftrek. Volgt Nederlandse wetgeving. Gratis te gebruiken.'
  },
  'zzp-administratie': {
    name: 'ZZP Administratie',
    slug: 'zzp-administratie',
    description: 'Essentiële calculators voor ZZP\'ers - uurloon, omzetprognose en administratieve berekeningen.',
    seoText: 'Bereken je uurloon, maak omzetprognoses en houd je administratie bij. Tools die je helpen je ZZP-bedrijf beter te runnen.',
    metaTitle: 'ZZP Administratie Calculators - Uurloon & Omzet',
    metaDescription: 'Bereken uurloon, omzet en andere ZZP-cijfers. Professionele tools voor zelfstandigen. Gratis.'
  },
  'financien': {
    name: 'Financiën',
    slug: 'financien',
    description: 'Plan je financiële toekomst met calculators voor sparen, rente en investeringen.',
    seoText: 'Bereken samengestelde rente, pensioen, sparen en plan je investeringen. Zie hoe je geld groeit in de tijd. Tools voor een betere financiële toekomst.',
    metaTitle: 'Financiën Calculators - Plan Je Financiële Toekomst',
    metaDescription: 'Bereken sparen, samengestelde rente en beleggingsrendement. Plan je financiële toekomst met gratis calculators.'
  },
  'zakelijke-rekeningen': {
    name: 'Zakelijke Rekeningen',
    slug: 'zakelijke-rekeningen',
    description: 'Bereken winst, break-even en andere belangrijke bedrijfscijfers.',
    seoText: 'Bereken je winstmarge, break-even punt en andere belangrijke zakelijke cijfers. Tools die je helpen je bedrijf beter te begrijpen.',
    metaTitle: 'Zakelijke Calculators - Winst & Break-Even',
    metaDescription: 'Bereken winst, break-even en andere bedrijfscijfers. Professionele tools voor ondernemers. Gratis.'
  },
  'wiskunde': {
    name: 'Wiskunde',
    slug: 'wiskunde',
    description: 'Wiskundige berekeningen gemakkelijk gemaakt - percentage, eenheidsprijzen en andere berekeningen.',
    seoText: 'Van percentageberekeningen tot het vergelijken van eenheidsprijzen. Onze tools helpen je met alle vormen van wiskundige berekeningen.',
    metaTitle: 'Wiskunde Calculators - Percentage & Eenheidsprijzen',
    metaDescription: 'Professionele calculators voor wiskunde. Bereken percentage, eenheidsprijzen en veel meer. Gratis en eenvoudig te gebruiken.'
  }
}

// Helper function to get category by name
export function getCategoryByName(name: string): CategoryInfo | undefined {
  return Object.values(categories).find(cat => cat.name === name)
}

// Helper function to get category by slug
export function getCategoryBySlug(slug: string): CategoryInfo | undefined {
  return categories[slug]
}

// Helper to get all category slugs
export function getAllCategorySlugs(): string[] {
  return Object.keys(categories)
}
