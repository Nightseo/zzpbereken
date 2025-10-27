import { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { getGeneratedCalculators } from '@/lib/generated-calculators'
import { categories } from '@/lib/categories'

export const metadata: Metadata = {
  title: 'Alle Calculators - ZZP Bereken',
  description: 'Compleet overzicht van al onze gratis ZZP calculators georganiseerd per categorie. Vind snel de juiste rekentools voor uw behoeften.',
  keywords: ['calculators', 'rekentools', 'ZZP calculators', 'gratis calculators', 'Nederlandse calculators', 'belastingcalculators'],
  openGraph: {
    title: 'Alle Calculators - ZZP Bereken',
    description: 'Compleet overzicht van al onze gratis ZZP calculators georganiseerd per categorie.',
    type: 'website',
    locale: 'nl_NL',
  },
  alternates: {
    canonical: 'https://zzpbereken.com/bereken',
  },
}

export default async function AllCalculatorsPage() {
  const calculatorsData = await getGeneratedCalculators()

  // Group calculators by category
  const calculatorsByCategory: Record<string, Array<{ slug: string; data: any }>> = {}

  Object.entries(calculatorsData).forEach(([slug, calculator]) => {
    const categoryName = calculator.metadata.category
    if (!calculatorsByCategory[categoryName]) {
      calculatorsByCategory[categoryName] = []
    }
    calculatorsByCategory[categoryName].push({ slug, data: calculator })
  })

  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
            <div className="max-w-3xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Alle ZZP Calculators
              </h1>
              <p className="text-base md:text-xl text-gray-600 leading-relaxed">
                Compleet overzicht van al onze {Object.keys(calculatorsData).length} gratis ZZP calculators.
                Vind snel de juiste rekentool voor uw behoeften.
              </p>
            </div>
          </div>
        </div>

        {/* Calculators by Category */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          {Object.values(categories).map((category) => {
            const categoryCalculators = calculatorsByCategory[category.name] || []

            if (categoryCalculators.length === 0) return null

            return (
              <div key={category.slug} className="mb-16 last:mb-0">
                {/* Category Header */}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                      {category.name}
                    </h2>
                    <Link
                      href={`/categorie/${category.slug}`}
                      className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm"
                    >
                      Bekijk categorie
                      <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                  <p className="text-gray-600 max-w-3xl">
                    {category.description}
                  </p>
                </div>

                {/* Calculators Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categoryCalculators.map(({ slug, data }) => (
                    <Link
                      key={slug}
                      href={`/bereken/${slug}`}
                      className="bg-white border border-gray-200 p-6 hover:border-primary-600 hover:shadow-lg transition-all group"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary-600 transition-colors pr-2">
                          {data.metadata.h2 || data.metadata.title}
                        </h3>
                        <svg
                          className="w-5 h-5 text-gray-400 group-hover:text-primary-600 group-hover:translate-x-1 transition-all flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                      <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                        {data.metadata.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="inline-flex items-center text-primary-600 text-sm font-semibold">
                          Gebruik calculator
                        </span>
                        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1">
                          {data.metadata.category}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )
          })}

          {Object.keys(calculatorsData).length === 0 && (
            <div className="text-center py-16 bg-gray-50 border border-gray-200">
              <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              <p className="text-gray-600 text-lg">Er zijn nog geen calculators gegenereerd.</p>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-primary-600 to-primary-700 border-t border-primary-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Kunt u de calculator die u zoekt niet vinden?
            </h2>
            <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
              We voegen regelmatig nieuwe calculators toe op basis van Nederlandse wetgeving en de behoeften van ZZP'ers.
            </p>
            <Link
              href="/"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-medium hover:bg-gray-100 transition-all"
            >
              Terug naar home
            </Link>
          </div>
        </div>
      </main>
      <Footer />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'CollectionPage',
                '@id': 'https://zzpbereken.com/bereken#webpage',
                url: 'https://zzpbereken.com/bereken',
                name: 'Alle Calculators - ZZP Bereken',
                description: 'Compleet overzicht van al onze gratis ZZP calculators georganiseerd per categorie.',
                isPartOf: {
                  '@id': 'https://zzpbereken.com/#website',
                },
                inLanguage: 'nl-NL',
              },
              {
                '@type': 'ItemList',
                name: 'ZZP Calculators',
                description: 'Verzameling van professionele rekentools voor ZZP\'ers',
                numberOfItems: Object.keys(calculatorsData).length,
                itemListElement: Object.entries(calculatorsData).map(([slug, calc], index) => ({
                  '@type': 'ListItem',
                  position: index + 1,
                  item: {
                    '@type': 'SoftwareApplication',
                    name: calc.metadata.h2 || calc.metadata.title,
                    description: calc.metadata.excerpt,
                    url: `https://zzpbereken.com/bereken/${slug}`,
                    applicationCategory: 'FinanceApplication',
                  },
                })),
              },
            ],
          }),
        }}
      />
    </>
  )
}
