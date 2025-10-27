/**
 * Keywords configuratie voor ZZP Bereken
 * Geëxtraheerd uit keywords-extracted.txt
 * Gefilterd voor unieke search intents (anti-cannibalisatie)
 */

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
  // ============================================
  // ALTA PRIORITEIT (20 keywords)
  // ============================================
  {
    id: 1,
    url: '/bereken/zzp-berekenen',
    slug: 'zzp-berekenen',
    keyword: 'zzp berekenen',
    volume: 5000,
    difficulty: '8',
    kwCount: 25,
    priority: 'ALTA',
    description: 'Algemene ZZP calculator voor alle berekeningen',
    category: 'Algemeen'
  },
  {
    id: 2,
    url: '/bereken/belasting-zzp',
    slug: 'belasting-zzp',
    keyword: 'belasting zzp berekenen',
    volume: 3500,
    difficulty: '7',
    kwCount: 18,
    priority: 'ALTA',
    description: 'Bereken je belasting als ZZP\'er inclusief alle aftrekposten',
    category: 'Belastingen'
  },
  {
    id: 3,
    url: '/bereken/btw-zzp',
    slug: 'btw-zzp',
    keyword: 'btw berekenen zzp',
    volume: 2800,
    difficulty: '6',
    kwCount: 15,
    priority: 'ALTA',
    description: 'Bereken BTW voor ZZP\'ers (21% en 9% tarief)',
    category: 'Belastingen'
  },
  {
    id: 4,
    url: '/bereken/hypotheek-zzp',
    slug: 'hypotheek-zzp',
    keyword: 'hypotheek zzp berekenen',
    volume: 3200,
    difficulty: '7',
    kwCount: 22,
    priority: 'ALTA',
    description: 'Bereken je maximale hypotheek als ZZP\'er',
    category: 'Hypotheek'
  },
  {
    id: 5,
    url: '/bereken/bruto-netto-zzp',
    slug: 'bruto-netto-zzp',
    keyword: 'zzp bruto netto berekenen',
    volume: 4500,
    difficulty: '8',
    kwCount: 20,
    priority: 'ALTA',
    description: 'Bereken je netto inkomen uit bruto omzet als ZZP\'er',
    category: 'Financiën'
  },
  {
    id: 6,
    url: '/bereken/uurtarief-zzp',
    slug: 'uurtarief-zzp',
    keyword: 'uurtarief zzp berekenen',
    volume: 3800,
    difficulty: '7',
    kwCount: 16,
    priority: 'ALTA',
    description: 'Bereken je ideale uurtarief als ZZP\'er',
    category: 'Omzet'
  },
  {
    id: 7,
    url: '/bereken/uurloon-zzp',
    slug: 'uurloon-zzp',
    keyword: 'uurloon zzp berekenen',
    volume: 3500,
    difficulty: '7',
    kwCount: 14,
    priority: 'ALTA',
    description: 'Bereken je uurloon inclusief kosten en belastingen',
    category: 'Omzet'
  },
  {
    id: 8,
    url: '/bereken/omzet-zzp',
    slug: 'omzet-zzp',
    keyword: 'omzet berekenen zzp',
    volume: 2500,
    difficulty: '6',
    kwCount: 12,
    priority: 'ALTA',
    description: 'Bereken je verwachte jaaromzet als ZZP\'er',
    category: 'Omzet'
  },
  {
    id: 9,
    url: '/bereken/zzp-netto',
    slug: 'zzp-netto',
    keyword: 'zzp netto berekenen',
    volume: 3000,
    difficulty: '7',
    kwCount: 18,
    priority: 'ALTA',
    description: 'Bereken je netto inkomen na belastingen en kosten',
    category: 'Financiën'
  },
  {
    id: 10,
    url: '/bereken/zzp-inkomen',
    slug: 'zzp-inkomen',
    keyword: 'zzp inkomen berekenen',
    volume: 2800,
    difficulty: '6',
    kwCount: 15,
    priority: 'ALTA',
    description: 'Bereken je totale inkomen als ZZP\'er',
    category: 'Financiën'
  },
  {
    id: 11,
    url: '/bereken/belastbaar-inkomen-zzp',
    slug: 'belastbaar-inkomen-zzp',
    keyword: 'belastbaar inkomen berekenen zzp',
    volume: 2200,
    difficulty: '6',
    kwCount: 13,
    priority: 'ALTA',
    description: 'Bereken je belastbaar inkomen als ZZP\'er',
    category: 'Belastingen'
  },
  {
    id: 12,
    url: '/bereken/ib-zzp',
    slug: 'ib-zzp',
    keyword: 'ib berekenen zzp',
    volume: 2500,
    difficulty: '6',
    kwCount: 14,
    priority: 'ALTA',
    description: 'Bereken je inkomstenbelasting (IB) als ZZP\'er',
    category: 'Belastingen'
  },
  {
    id: 13,
    url: '/bereken/winst-zzp',
    slug: 'winst-zzp',
    keyword: 'winst berekenen zzp',
    volume: 2000,
    difficulty: '5',
    kwCount: 12,
    priority: 'ALTA',
    description: 'Bereken je fiscale winst als ZZP\'er',
    category: 'Financiën'
  },
  {
    id: 14,
    url: '/bereken/zelfstandigenaftrek',
    slug: 'zelfstandigenaftrek',
    keyword: 'zelfstandigenaftrek berekenen',
    volume: 2800,
    difficulty: '6',
    kwCount: 10,
    priority: 'ALTA',
    description: 'Bereken je zelfstandigenaftrek voor 2025',
    category: 'Belastingen'
  },
  {
    id: 15,
    url: '/bereken/pensioen-zzp',
    slug: 'pensioen-zzp',
    keyword: 'pensioen zzp berekenen',
    volume: 1800,
    difficulty: '5',
    kwCount: 11,
    priority: 'ALTA',
    description: 'Bereken je pensioenopbouw als ZZP\'er',
    category: 'Pensioen'
  },
  {
    id: 16,
    url: '/bereken/aov-zzp',
    slug: 'aov-zzp',
    keyword: 'aov zzp berekenen',
    volume: 1500,
    difficulty: '5',
    kwCount: 9,
    priority: 'ALTA',
    description: 'Bereken je AOV premie als ZZP\'er',
    category: 'Verzekeringen'
  },
  {
    id: 17,
    url: '/bereken/zzp-en-loondienst-belasting',
    slug: 'zzp-en-loondienst-belasting',
    keyword: 'zzp en loondienst belasting berekenen',
    volume: 1800,
    difficulty: '6',
    kwCount: 12,
    priority: 'ALTA',
    description: 'Bereken je belasting met ZZP en loondienst',
    category: 'Belastingen'
  },
  {
    id: 18,
    url: '/bereken/zzp-naast-loondienst',
    slug: 'zzp-naast-loondienst',
    keyword: 'zzp naast loondienst berekenen',
    volume: 2000,
    difficulty: '6',
    kwCount: 13,
    priority: 'ALTA',
    description: 'Bereken je inkomen met ZZP naast loondienst',
    category: 'Belastingen'
  },
  {
    id: 19,
    url: '/bereken/jaaromzet-zzp',
    slug: 'jaaromzet-zzp',
    keyword: 'jaaromzet berekenen zzp',
    volume: 1600,
    difficulty: '5',
    kwCount: 10,
    priority: 'ALTA',
    description: 'Bereken je jaaromzet als ZZP\'er',
    category: 'Omzet'
  },
  {
    id: 20,
    url: '/bereken/bruto-inkomen-zzp',
    slug: 'bruto-inkomen-zzp',
    keyword: 'bruto inkomen berekenen zzp',
    volume: 1800,
    difficulty: '5',
    kwCount: 11,
    priority: 'ALTA',
    description: 'Bereken je bruto inkomen als ZZP\'er',
    category: 'Financiën'
  },

  // ============================================
  // MEDIA PRIORITEIT (19 keywords)
  // ============================================
  {
    id: 21,
    url: '/bereken/reiskosten-zzp',
    slug: 'reiskosten-zzp',
    keyword: 'reiskosten berekenen zzp',
    volume: 1200,
    difficulty: '4',
    kwCount: 8,
    priority: 'MEDIA',
    description: 'Bereken je zakelijke reiskosten als ZZP\'er',
    category: 'Kosten'
  },
  {
    id: 22,
    url: '/bereken/bv-of-eenmanszaak',
    slug: 'bv-of-eenmanszaak',
    keyword: 'bv of eenmanszaak berekenen',
    volume: 1400,
    difficulty: '5',
    kwCount: 9,
    priority: 'MEDIA',
    description: 'Bereken wat voordeliger is: BV of eenmanszaak',
    category: 'Ondernemingsvorm'
  },
  {
    id: 23,
    url: '/bereken/omslagpunt-bv-eenmanszaak',
    slug: 'omslagpunt-bv-eenmanszaak',
    keyword: 'omslagpunt bv eenmanszaak berekenen',
    volume: 800,
    difficulty: '4',
    kwCount: 7,
    priority: 'MEDIA',
    description: 'Bereken het omslagpunt tussen BV en eenmanszaak',
    category: 'Ondernemingsvorm'
  },
  {
    id: 24,
    url: '/bereken/fiscale-winst-zzp',
    slug: 'fiscale-winst-zzp',
    keyword: 'fiscale winst berekenen zzp',
    volume: 1000,
    difficulty: '4',
    kwCount: 8,
    priority: 'MEDIA',
    description: 'Bereken je fiscale winst als ZZP\'er',
    category: 'Belastingen'
  },
  {
    id: 25,
    url: '/bereken/netto-winst-zzp',
    slug: 'netto-winst-zzp',
    keyword: 'netto winst berekenen zzp',
    volume: 1100,
    difficulty: '4',
    kwCount: 9,
    priority: 'MEDIA',
    description: 'Bereken je netto winst na belastingen',
    category: 'Financiën'
  },
  {
    id: 26,
    url: '/bereken/verzamelinkomen-zzp',
    slug: 'verzamelinkomen-zzp',
    keyword: 'verzamelinkomen zzp berekenen',
    volume: 900,
    difficulty: '4',
    kwCount: 7,
    priority: 'MEDIA',
    description: 'Bereken je verzamelinkomen voor belastingaangifte',
    category: 'Belastingen'
  },
  {
    id: 27,
    url: '/bereken/toetsingsinkomen-zzp',
    slug: 'toetsingsinkomen-zzp',
    keyword: 'toetsingsinkomen zzp berekenen',
    volume: 850,
    difficulty: '4',
    kwCount: 6,
    priority: 'MEDIA',
    description: 'Bereken je toetsingsinkomen voor hypotheek',
    category: 'Hypotheek'
  },
  {
    id: 28,
    url: '/bereken/jaarinkomen-zzp',
    slug: 'jaarinkomen-zzp',
    keyword: 'jaarinkomen zzp berekenen',
    volume: 1300,
    difficulty: '5',
    kwCount: 10,
    priority: 'MEDIA',
    description: 'Bereken je totale jaarinkomen als ZZP\'er',
    category: 'Financiën'
  },
  {
    id: 29,
    url: '/bereken/netto-salaris-zzp',
    slug: 'netto-salaris-zzp',
    keyword: 'netto salaris berekenen zzp',
    volume: 1400,
    difficulty: '5',
    kwCount: 11,
    priority: 'MEDIA',
    description: 'Bereken je netto salaris als ZZP\'er',
    category: 'Financiën'
  },
  {
    id: 30,
    url: '/bereken/loon-zzp',
    slug: 'loon-zzp',
    keyword: 'loon berekenen zzp',
    volume: 1200,
    difficulty: '4',
    kwCount: 9,
    priority: 'MEDIA',
    description: 'Bereken je loon als ZZP\'er',
    category: 'Financiën'
  },
  {
    id: 31,
    url: '/bereken/zzp-salaris',
    slug: 'zzp-salaris',
    keyword: 'zzp salaris berekenen',
    volume: 1500,
    difficulty: '5',
    kwCount: 10,
    priority: 'MEDIA',
    description: 'Bereken je salaris als ZZP\'er',
    category: 'Financiën'
  },
  {
    id: 32,
    url: '/bereken/netto-uurtarief-zzp',
    slug: 'netto-uurtarief-zzp',
    keyword: 'netto uurtarief zzp berekenen',
    volume: 1100,
    difficulty: '4',
    kwCount: 8,
    priority: 'MEDIA',
    description: 'Bereken je netto uurtarief als ZZP\'er',
    category: 'Omzet'
  },
  {
    id: 33,
    url: '/bereken/freelance-uurtarief',
    slug: 'freelance-uurtarief',
    keyword: 'freelance uurtarief berekenen',
    volume: 1300,
    difficulty: '5',
    kwCount: 9,
    priority: 'MEDIA',
    description: 'Bereken je freelance uurtarief',
    category: 'Omzet'
  },
  {
    id: 34,
    url: '/bereken/van-zzp-naar-loondienst',
    slug: 'van-zzp-naar-loondienst',
    keyword: 'van zzp naar loondienst berekenen',
    volume: 700,
    difficulty: '4',
    kwCount: 6,
    priority: 'MEDIA',
    description: 'Bereken het verschil tussen ZZP en loondienst',
    category: 'Belastingen'
  },
  {
    id: 35,
    url: '/bereken/zvw-zzp',
    slug: 'zvw-zzp',
    keyword: 'zvw berekenen zzp',
    volume: 900,
    difficulty: '4',
    kwCount: 7,
    priority: 'MEDIA',
    description: 'Bereken je zorgverzekeringswet (ZVW) als ZZP\'er',
    category: 'Belastingen'
  },
  {
    id: 36,
    url: '/bereken/kosten-zzp',
    slug: 'kosten-zzp',
    keyword: 'zzp kosten berekenen',
    volume: 1100,
    difficulty: '4',
    kwCount: 8,
    priority: 'MEDIA',
    description: 'Bereken je zakelijke kosten als ZZP\'er',
    category: 'Kosten'
  },
  {
    id: 37,
    url: '/bereken/belastingdruk-zzp',
    slug: 'belastingdruk-zzp',
    keyword: 'belastingdruk zzp berekenen',
    volume: 650,
    difficulty: '3',
    kwCount: 5,
    priority: 'MEDIA',
    description: 'Bereken je belastingdruk als ZZP\'er',
    category: 'Belastingen'
  },
  {
    id: 38,
    url: '/bereken/arbeidsongeschiktheidsverzekering-zzp',
    slug: 'arbeidsongeschiktheidsverzekering-zzp',
    keyword: 'arbeidsongeschiktheidsverzekering zzp berekenen',
    volume: 800,
    difficulty: '4',
    kwCount: 6,
    priority: 'MEDIA',
    description: 'Bereken je arbeidsongeschiktheidsverzekering als ZZP\'er',
    category: 'Verzekeringen'
  },
  {
    id: 39,
    url: '/bereken/jaarruimte-zzp',
    slug: 'jaarruimte-zzp',
    keyword: 'jaarruimte berekenen zzp',
    volume: 700,
    difficulty: '3',
    kwCount: 5,
    priority: 'MEDIA',
    description: 'Bereken je jaarruimte voor pensioen als ZZP\'er',
    category: 'Pensioen'
  },

  // ============================================
  // BAJA PRIORITEIT (6 keywords)
  // ============================================
  {
    id: 40,
    url: '/bereken/voorrijkosten-zzp',
    slug: 'voorrijkosten-zzp',
    keyword: 'voorrijkosten berekenen zzp',
    volume: 400,
    difficulty: '2',
    kwCount: 4,
    priority: 'BAJA',
    description: 'Bereken je voorrijkosten als ZZP\'er',
    category: 'Kosten'
  },
  {
    id: 41,
    url: '/bereken/kinderalimentatie-zzp',
    slug: 'kinderalimentatie-zzp',
    keyword: 'kinderalimentatie berekenen zzp',
    volume: 350,
    difficulty: '2',
    kwCount: 3,
    priority: 'BAJA',
    description: 'Bereken kinderalimentatie als ZZP\'er',
    category: 'Financiën'
  },
  {
    id: 42,
    url: '/bereken/zakelijke-lening-zzp',
    slug: 'zakelijke-lening-zzp',
    keyword: 'zakelijke lening zzp berekenen',
    volume: 450,
    difficulty: '3',
    kwCount: 4,
    priority: 'BAJA',
    description: 'Bereken je zakelijke lening als ZZP\'er',
    category: 'Financiën'
  },
  {
    id: 43,
    url: '/bereken/parttime-zzp',
    slug: 'parttime-zzp',
    keyword: 'parttime zzp berekenen',
    volume: 500,
    difficulty: '3',
    kwCount: 5,
    priority: 'BAJA',
    description: 'Bereken je inkomen als parttime ZZP\'er',
    category: 'Belastingen'
  },
  {
    id: 44,
    url: '/bereken/stakingswinst-eenmanszaak',
    slug: 'stakingswinst-eenmanszaak',
    keyword: 'stakingswinst eenmanszaak berekenen',
    volume: 400,
    difficulty: '3',
    kwCount: 4,
    priority: 'BAJA',
    description: 'Bereken je stakingswinst bij beëindiging eenmanszaak',
    category: 'Belastingen'
  },
  {
    id: 45,
    url: '/bereken/huis-kopen-zzp',
    slug: 'huis-kopen-zzp',
    keyword: 'huis kopen zzp berekenen',
    volume: 600,
    difficulty: '3',
    kwCount: 6,
    priority: 'BAJA',
    description: 'Bereken je hypotheek voor huis kopen als ZZP\'er',
    category: 'Hypotheek'
  }
]

export function getKeywordConfig(slug: string): KeywordConfig | undefined {
  return keywordsConfig.find(kw => kw.slug === slug)
}
