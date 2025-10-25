// Configuración de categorías con descripciones SEO
// IMPORTANTE: Solo 6 categorías para evitar canibalización

export interface CategoryInfo {
  name: string
  slug: string
  description: string
  seoText: string
  metaTitle: string
  metaDescription: string
}

export const categories: Record<string, CategoryInfo> = {
  'lon-skat': {
    name: 'Løn & Skat',
    slug: 'lon-skat',
    description: 'Beregn løn efter skat, fleksjob, deltidsløn, feriedage og lønstigning med vores præcise kalkulatorer.',
    seoText: 'Få hjælp til at beregne din nettoløn efter skat, fleksjob-løn, deltidsansættelse, feriedage og lønstigning. Alle vores kalkulatorer følger gældende danske skatteregler og lovgivning.',
    metaTitle: 'Løn & Skat Kalkulatorer - Beregn Din Løn Efter Skat',
    metaDescription: 'Præcise kalkulatorer til løn efter skat, fleksjob, deltidsløn, feriedage og lønstigning. Følger dansk lovgivning. Gratis at bruge.'
  },
  'forretning': {
    name: 'Forretning',
    slug: 'forretning',
    description: 'Virksomhedskalkulatorer til dækningsbidrag, break-even, moms og forretningsanalyse.',
    seoText: 'Beregn dækningsbidrag, break-even point, moms, procesrente og andre vigtige forretningstal. Værktøjer der hjælper dig med at drive din virksomhed bedre.',
    metaTitle: 'Forretning Kalkulatorer - Dækningsbidrag & Break-Even',
    metaDescription: 'Beregn dækningsbidrag, break-even, moms og andre forretningstal. Professionelle værktøjer til virksomheder. Gratis.'
  },
  'investering-opsparing': {
    name: 'Investering & Opsparing',
    slug: 'investering-opsparing',
    description: 'Planlæg din økonomiske fremtid med kalkulatorer til opsparing, renter, pension og investeringer.',
    seoText: 'Beregn renters rente, pension, fleksydelse, nutidsværdi, indlånsrente og planlæg din opsparing. Se hvordan dine investeringer vokser over tid. Værktøjer til en bedre økonomisk fremtid.',
    metaTitle: 'Investering & Opsparing Kalkulatorer - Planlæg Din Fremtid',
    metaDescription: 'Beregn opsparing, renters rente, pension og investeringsafkast. Planlæg din økonomiske fremtid med vores gratis kalkulatorer.'
  },
  'privatokonomi': {
    name: 'Privatøkonomi',
    slug: 'privatokonomi',
    description: 'Beregn husleje, inflation, købekraft og hvad du har råd til.',
    seoText: 'Find ud af hvad du har råd til i husleje, beregn inflationens påvirkning på din købekraft og planlæg din privatøkonomi. Værktøjer til bedre økonomisk forståelse.',
    metaTitle: 'Privatøkonomi Kalkulatorer - Husleje & Købekraft',
    metaDescription: 'Beregn husleje, inflation, købekraft og planlæg din privatøkonomi. Gratis kalkulatorer til privatpersoner.'
  },
  'transport': {
    name: 'Transport',
    slug: 'transport',
    description: 'Beregn omkostninger ved flexleasing, transportudgifter og enhedspriser.',
    seoText: 'Beregn omkostninger ved flexleasing af bil, transportudgifter og sammenlign enhedspriser. Værktøjer til transport og mobilitet.',
    metaTitle: 'Transport Kalkulatorer - Flexleasing & Omkostninger',
    metaDescription: 'Beregn flexleasing omkostninger og transportudgifter. Gratis transport kalkulatorer.'
  },
  'matematik': {
    name: 'Matematik',
    slug: 'matematik',
    description: 'Matematiske beregninger gjort enkle - procent, enhedspriser og andre beregninger.',
    seoText: 'Fra procentberegninger til sammenligning af enhedspriser. Vores værktøjer hjælper dig med alle former for matematiske udregninger.',
    metaTitle: 'Matematik Kalkulatorer - Procent & Enhedspriser',
    metaDescription: 'Professionelle kalkulatorer til matematik. Beregn procent, enhedspriser og meget mere. Gratis og nemt at bruge.'
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
