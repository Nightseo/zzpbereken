// Configuración de keywords para generación de calculadoras
// Esta data viene del análisis de keywords

export interface KeywordConfig {
  id: number
  url: string
  slug: string
  keyword: string
  volume: number
  difficulty: string
  kwCount: number
  priority: 'ALTA' | 'MEDIA' | 'BAJA'
  description: string
  category: string
}

export const keywordsConfig: KeywordConfig[] = [
  {
    id: 1,
    url: '/beregn/lon-efter-skat',
    slug: 'lon-efter-skat',
    keyword: 'beregn løn efter skat',
    volume: 12000,
    difficulty: '7',
    kwCount: 26,
    priority: 'ALTA',
    description: 'Beregn din nettoløn efter skat. Indtast din bruttoløn og få præcis beregning af hvad du får udbetalt.',
    category: 'Løn & Skat'
  },
  {
    id: 2,
    url: '/beregn/procent',
    slug: 'procent',
    keyword: 'beregn procent',
    volume: 1200,
    difficulty: '2',
    kwCount: 18,
    priority: 'ALTA',
    description: 'Beregn procent, procentvis stigning, fald og forskel. Nem og hurtig procentberegner.',
    category: 'Matematik'
  },
  {
    id: 3,
    url: '/beregn/flexjob-lon',
    slug: 'flexjob-lon',
    keyword: 'beregn fleksjob',
    volume: 550,
    difficulty: '3-4',
    kwCount: 8,
    priority: 'MEDIA',
    description: 'Beregn løn i fleksjob. Find ud af hvad du får udbetalt i et flexjob.',
    category: 'Løn & Skat'
  },
  {
    id: 4,
    url: '/beregn/enhedspris',
    slug: 'enhedspris',
    keyword: 'beregn kilopris',
    volume: 520,
    difficulty: '0-2',
    kwCount: 6,
    priority: 'MEDIA',
    description: 'Sammenlign priser pr. kilo, liter eller kilometer. Find den bedste pris.',
    category: 'Matematik'
  },
  {
    id: 5,
    url: '/beregn/renters-rente',
    slug: 'renters-rente',
    keyword: 'beregn renters rente',
    volume: 280,
    difficulty: '0',
    kwCount: 2,
    priority: 'MEDIA',
    description: 'Beregn renters rente og se hvordan din opsparing vokser over tid.',
    category: 'Investering & Opsparing'
  },
  {
    id: 6,
    url: '/beregn/deltidslon',
    slug: 'deltidslon',
    keyword: 'beregn deltidsløn',
    volume: 170,
    difficulty: '0-2',
    kwCount: 4,
    priority: 'BAJA',
    description: 'Beregn månedsløn ved deltidsansættelse baseret på timeløn.',
    category: 'Løn & Skat'
  },
  {
    id: 7,
    url: '/beregn/procesrente',
    slug: 'procesrente',
    keyword: 'beregn procesrente',
    volume: 150,
    difficulty: '0',
    kwCount: 3,
    priority: 'BAJA',
    description: 'Beregn procesrente ved forsinket betaling efter danske regler.',
    category: 'Forretning'
  },
  {
    id: 8,
    url: '/beregn/daekningsbidrag',
    slug: 'daekningsbidrag',
    keyword: 'beregn dækningsbidrag',
    volume: 100,
    difficulty: '0',
    kwCount: 1,
    priority: 'BAJA',
    description: 'Beregn dækningsbidrag og break-even point for din virksomhed.',
    category: 'Forretning'
  },
  {
    id: 9,
    url: '/beregn/opsparing',
    slug: 'opsparing',
    keyword: 'beregn opsparing',
    volume: 100,
    difficulty: '1',
    kwCount: 1,
    priority: 'BAJA',
    description: 'Beregn hvordan din opsparing vokser med regelmæssige indbetalinger.',
    category: 'Investering & Opsparing'
  },
  {
    id: 10,
    url: '/beregn/inflation',
    slug: 'inflation',
    keyword: 'beregn inflation',
    volume: 90,
    difficulty: '2',
    kwCount: 2,
    priority: 'BAJA',
    description: 'Beregn inflationens påvirkning på din købekraft over tid.',
    category: 'Privatøkonomi'
  },
  {
    id: 11,
    url: '/beregn/husleje',
    slug: 'husleje',
    keyword: 'beregn husleje',
    volume: 80,
    difficulty: '0',
    kwCount: 1,
    priority: 'BAJA',
    description: 'Beregn hvad du har råd til i husleje baseret på din indkomst.',
    category: 'Privatøkonomi'
  },
  {
    id: 12,
    url: '/beregn/moms',
    slug: 'moms',
    keyword: 'beregn moms',
    volume: 70,
    difficulty: '2-5',
    kwCount: 3,
    priority: 'BAJA',
    description: 'Beregn moms. Tilføj eller fjern 25% dansk moms fra et beløb.',
    category: 'Forretning'
  },
  {
    id: 13,
    url: '/beregn/feriedage',
    slug: 'feriedage',
    keyword: 'beregn feriedage',
    volume: 60,
    difficulty: '0',
    kwCount: 2,
    priority: 'BAJA',
    description: 'Beregn hvor mange feriedage du har optjent og deres værdi.',
    category: 'Løn & Skat'
  },
  {
    id: 14,
    url: '/beregn/fleksydelse',
    slug: 'fleksydelse',
    keyword: 'beregn fleksydelse',
    volume: 30,
    difficulty: '2',
    kwCount: 1,
    priority: 'BAJA',
    description: 'Beregn din fleksydelse fra folkepension.',
    category: 'Investering & Opsparing'
  },
  {
    id: 15,
    url: '/beregn/flexleasing',
    slug: 'flexleasing',
    keyword: 'beregn flexleasing',
    volume: 30,
    difficulty: '0',
    kwCount: 1,
    priority: 'BAJA',
    description: 'Beregn omkostninger ved flexleasing af bil.',
    category: 'Transport'
  },
  {
    id: 16,
    url: '/beregn/lonstigning',
    slug: 'lonstigning',
    keyword: 'beregn lønstigning',
    volume: 20,
    difficulty: '1',
    kwCount: 1,
    priority: 'BAJA',
    description: 'Beregn hvor meget din løn stiger i kroner og procent.',
    category: 'Løn & Skat'
  },
  {
    id: 17,
    url: '/beregn/nutidsvaerdi',
    slug: 'nutidsvaerdi',
    keyword: 'beregn nutidsværdi',
    volume: 20,
    difficulty: '0',
    kwCount: 1,
    priority: 'BAJA',
    description: 'Beregn nutidsværdi (NPV) af fremtidige pengestrømme.',
    category: 'Investering & Opsparing'
  },
  {
    id: 18,
    url: '/beregn/indlaansrente',
    slug: 'indlaansrente',
    keyword: 'beregn indlånsrente',
    volume: 10,
    difficulty: '2',
    kwCount: 1,
    priority: 'BAJA',
    description: 'Beregn afkast på indlån i bank.',
    category: 'Investering & Opsparing'
  }
]

export function getKeywordConfig(slug: string): KeywordConfig | undefined {
  return keywordsConfig.find(k => k.slug === slug)
}
