import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { getGeneratedCalculators } from '@/lib/generated-calculators'
import { categories } from '@/lib/categories'

export default async function Home() {
  const calculatorsData = await getGeneratedCalculators()
  return (
    <>
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-secondary-900 via-secondary-800 to-primary-900 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px'}}></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-36">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center space-x-2 bg-primary-500 text-white px-4 py-2 text-sm font-semibold mb-6 shadow-lg">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Voor ZZP'ers in Nederland</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
                  Jouw ZZP administratie
                  <span className="block text-primary-400 mt-2">simpel berekend</span>
                </h1>

                <p className="text-lg sm:text-xl text-gray-200 mb-10 leading-relaxed">
                  Professionele rekentools voor BTW, uurloon, inkomstenbelasting en meer.
                  Speciaal ontwikkeld voor Nederlandse ZZP'ers en ondernemers.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <a href="#calculators" className="inline-flex items-center justify-center px-8 py-4 bg-primary-500 text-white font-bold hover:bg-primary-600 transition-all shadow-xl hover:shadow-2xl">
                    <span>Start gratis</span>
                    <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                  <a href="#features" className="inline-flex items-center justify-center px-8 py-4 bg-white text-secondary-900 font-bold hover:bg-gray-100 transition-all shadow-xl">
                    Meer info
                  </a>
                </div>

                {/* Stats */}
                <div className="flex items-center gap-8 pt-8 border-t border-white/20">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary-500 flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">5+</span>
                    </div>
                    <div className="text-white text-sm font-medium">Tools beschikbaar</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-500 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="text-white text-sm font-medium">100% Gratis</div>
                  </div>
                </div>
              </div>

              <div className="hidden lg:block">
                <div className="bg-white/10 backdrop-blur-sm p-8 border border-white/20 shadow-2xl">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 bg-white/90 p-4 shadow">
                      <div className="w-10 h-10 bg-primary-500 flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 font-medium">Uurloon Calculator</div>
                        <div className="text-lg text-secondary-900 font-bold">€67,50 / uur</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 bg-white/90 p-4 shadow">
                      <div className="w-10 h-10 bg-secondary-800 flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 font-medium">BTW Berekening</div>
                        <div className="text-lg text-secondary-900 font-bold">21% toegepast</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 bg-white/90 p-4 shadow">
                      <div className="w-10 h-10 bg-green-500 flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 font-medium">Status</div>
                        <div className="text-lg text-secondary-900 font-bold">Direct beschikbaar</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              <div>
                <div className="inline-block px-4 py-2 bg-primary-100 text-primary-700 text-sm font-semibold mb-6">
                  Speciaal voor ZZP'ers
                </div>
                <h2 className="text-4xl font-extrabold text-secondary-900 mb-6">
                  Maak administratie makkelijker
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Onze calculators zijn speciaal ontwikkeld voor Nederlandse ZZP'ers.
                  Van BTW-berekeningen tot uurloon bepalen - alles wat je nodig hebt op één plek.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Nederlandse Belastingregels</h4>
                      <p className="text-gray-600">Altijd up-to-date met de laatste belastingtarieven en regelgeving</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-secondary-800 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Gemakkelijk & Intuïtief</h4>
                      <p className="text-gray-600">Geen ingewikkelde formules - vul de gegevens in en krijg direct resultaat</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Volledig Gratis</h4>
                      <p className="text-gray-600">Geen abonnementen of verborgen kosten - voor altijd gratis te gebruiken</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-primary-500 to-primary-600 p-8 text-white shadow-xl">
                  <div className="w-14 h-14 bg-white/20 flex items-center justify-center mb-6">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Snel</h3>
                  <p className="text-primary-100">Direct resultaat zonder wachten</p>
                </div>

                <div className="bg-gradient-to-br from-secondary-800 to-secondary-900 p-8 text-white shadow-xl mt-8">
                  <div className="w-14 h-14 bg-white/20 flex items-center justify-center mb-6">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Betrouwbaar</h3>
                  <p className="text-secondary-200">Volgens NL wetgeving</p>
                </div>

                <div className="bg-gradient-to-br from-green-500 to-green-600 p-8 text-white shadow-xl -mt-8">
                  <div className="w-14 h-14 bg-white/20 flex items-center justify-center mb-6">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Gratis</h3>
                  <p className="text-green-100">Altijd en voor iedereen</p>
                </div>

                <div className="bg-gradient-to-br from-primary-600 to-primary-700 p-8 text-white shadow-xl">
                  <div className="w-14 h-14 bg-white/20 flex items-center justify-center mb-6">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Precies</h3>
                  <p className="text-primary-100">Accurate berekeningen</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-20 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Ontdek per categorie</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Vind de juiste calculator voor jouw behoefte in onze georganiseerde categorieën
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.values(categories).map((category) => (
                <Link
                  key={category.slug}
                  href={`/categorie/${category.slug}`}
                  className="bg-white border-2 border-gray-200 p-6 hover:border-primary-600 hover:shadow-lg transition-all group"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {category.description}
                  </p>
                  <div className="inline-flex items-center text-primary-600 text-sm font-semibold group-hover:gap-2 transition-all">
                    <span>Bekijk calculators</span>
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Calculators Grid */}
        <section id="calculators" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Alle rekentools
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {Object.keys(calculatorsData).length} professionele calculators klaar voor gebruik. Kies degene die je nodig hebt.
              </p>
            </div>

            {Object.keys(calculatorsData).length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.entries(calculatorsData).map(([slug, calculator]) => (
                  <Link
                    key={slug}
                    href={`/bereken/${slug}`}
                    className="bg-white border border-gray-200 p-8 hover:border-primary-600 hover:shadow-md transition-all group"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                        {calculator.metadata.h2 || calculator.metadata.title}
                      </h3>
                      <svg className="w-5 h-5 text-gray-400 group-hover:text-primary-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {calculator.metadata.excerpt}
                    </p>
                    <div className="inline-flex items-center text-primary-600 text-sm font-semibold">
                      <span>Gebruik calculator</span>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-gray-50 border border-gray-200">
                <p className="text-gray-600">Er zijn nog geen calculators gegenereerd.</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500 via-primary-600 to-secondary-800"></div>
          <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>

          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-5 py-2 mb-6">
                <div className="w-2 h-2 bg-green-400 animate-pulse"></div>
                <span className="text-white font-semibold text-sm">Klaar voor gebruik</span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
                Begin vandaag nog met<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-primary-100">
                  eenvoudige berekeningen
                </span>
              </h2>

              <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
                Bespaar tijd op je administratie. Onze calculators geven je direct inzicht in je financiële situatie als ZZP'er.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                <a href="#calculators" className="group inline-flex items-center justify-center px-10 py-5 bg-white text-secondary-900 font-bold hover:bg-gray-100 transition-all shadow-2xl hover:shadow-3xl hover:scale-105">
                  <span className="text-lg">Probeer gratis</span>
                  <svg className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                <a href="#features" className="inline-flex items-center justify-center px-10 py-5 border-2 border-white text-white font-bold hover:bg-white hover:text-secondary-900 transition-all">
                  <span className="text-lg">Leer meer</span>
                </a>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-16 border-t border-white/20">
              <div className="text-center">
                <div className="text-4xl font-extrabold text-white mb-2">5+</div>
                <div className="text-white/80 text-sm font-medium">Verschillende tools</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-extrabold text-white mb-2">24/7</div>
                <div className="text-white/80 text-sm font-medium">Altijd beschikbaar</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-extrabold text-white mb-2">€0</div>
                <div className="text-white/80 text-sm font-medium">Compleet gratis</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* JSON-LD Structured Data Schema for Home Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              // 1. Organization Schema
              {
                '@type': 'Organization',
                '@id': 'https://zzpbereken.com/#organization',
                name: 'ZZP Bereken',
                url: 'https://zzpbereken.com',
                logo: {
                  '@type': 'ImageObject',
                  url: 'https://zzpbereken.com/icon.png',
                  width: 512,
                  height: 512,
                },
                description: 'Professionele rekentools voor ZZP\'ers en kleine ondernemers in Nederland',
                sameAs: [],
                contactPoint: {
                  '@type': 'ContactPoint',
                  contactType: 'customer service',
                  availableLanguage: 'Dutch',
                },
              },
              // 2. WebSite Schema with SearchAction
              {
                '@type': 'WebSite',
                '@id': 'https://zzpbereken.com/#website',
                url: 'https://zzpbereken.com',
                name: 'ZZP Bereken',
                description: 'Uitgebreide verzameling gratis online calculators voor ZZP\'ers, bedrijf, financiën en administratie',
                publisher: {
                  '@id': 'https://zzpbereken.com/#organization',
                },
                inLanguage: 'nl-NL',
                potentialAction: {
                  '@type': 'SearchAction',
                  target: {
                    '@type': 'EntryPoint',
                    urlTemplate: 'https://zzpbereken.com/?s={search_term_string}',
                  },
                  'query-input': 'required name=search_term_string',
                },
              },
              // 3. WebPage Schema
              {
                '@type': 'WebPage',
                '@id': 'https://zzpbereken.com/#webpage',
                url: 'https://zzpbereken.com',
                name: 'ZZP Bereken - Gratis Rekentools voor ZZP\'ers en Ondernemers',
                description: 'Uitgebreide verzameling gratis online calculators voor bedrijf, financiën en administratie. Snelle, nauwkeurige berekeningen voor ZZP\'ers en kleine ondernemers.',
                isPartOf: {
                  '@id': 'https://zzpbereken.com/#website',
                },
                about: {
                  '@id': 'https://zzpbereken.com/#organization',
                },
                inLanguage: 'nl-NL',
              },
              // 4. ItemList Schema (List of Calculators)
              {
                '@type': 'ItemList',
                '@id': 'https://zzpbereken.com/#calculators',
                name: 'Calculators',
                description: 'Verzameling professionele rekentools',
                numberOfItems: Object.keys(calculatorsData).length,
                itemListElement: Object.entries(calculatorsData)
                  .slice(0, 10)
                  .map(([slug, calc], index) => ({
                    '@type': 'ListItem',
                    position: index + 1,
                    item: {
                      '@type': 'SoftwareApplication',
                      name: calc.metadata.h2 || calc.metadata.title,
                      description: calc.metadata.excerpt,
                      url: `https://zzpbereken.com/bereken/${slug}`,
                      applicationCategory: 'FinanceApplication',
                      operatingSystem: 'Web Browser',
                      offers: {
                        '@type': 'Offer',
                        price: '0',
                        priceCurrency: 'EUR',
                      },
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
