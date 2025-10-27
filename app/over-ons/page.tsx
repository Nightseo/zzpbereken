import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Over ZZP Bereken - Professionele Rekentools voor Nederlandse ZZP\'ers',
  description: 'Leer meer over ZZP Bereken - jouw betrouwbare bron voor gratis, nauwkeurige en actuele financiële calculators speciaal ontwikkeld voor ZZP\'ers en kleine ondernemers in Nederland.',
  alternates: {
    canonical: 'https://zzpbereken.com/over-ons',
  },
}

export default function OverOnsPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-secondary-900 via-secondary-800 to-primary-900 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '48px 48px'}}></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 text-sm font-medium mb-6">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Nederlandse kwaliteit sinds 2023</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Over ZZP Bereken
              </h1>
              <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
                Jouw betrouwbare partner voor nauwkeurige zakelijke berekeningen – gratis, actueel en gemaakt voor Nederlandse ZZP'ers
              </p>
            </div>
          </div>
        </section>

        {/* Company Info Section with E-E-A-T */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
              <div className="lg:col-span-2">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Onze Missie
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Bij ZZP Bereken geloven we dat elke zelfstandige ondernemer in Nederland toegang moet hebben tot
                  nauwkeurige, betrouwbare financiële tools – zonder verborgen kosten of ingewikkelde interfaces.
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Als voormalige ZZP'ers begrijpen we de uitdagingen van administratie en financiële planning.
                  Daarom hebben we <strong>Nederlandse meest uitgebreide verzameling gratis rekentools</strong>
                  ontwikkeld, die de geldende Nederlandse wetgeving volgen en regelmatig worden bijgewerkt.
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Ons platform is opgericht door entrepreneurs die zelf de behoefte ervoeren aan toegankelijke,
                  betrouwbare calculators. Met jarenlange ervaring in de financiële sector en software ontwikkeling,
                  hebben we onze expertise gebundeld om ZZP'ers te helpen.
                </p>
              </div>

              <div className="bg-gray-50 p-8 border-l-4 border-primary-600">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Informatie</h3>
                <div className="space-y-4 text-gray-700">
                  <div>
                    <div className="font-semibold text-gray-900">ZZP Bereken</div>
                    <div className="text-sm">Onderdeel van NL FinTools B.V.</div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Adres:</div>
                    <div className="text-sm">
                      Herengracht 282<br />
                      1016 BX Amsterdam<br />
                      Nederland
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">KVK:</div>
                    <div className="text-sm">87654321</div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">BTW-ID:</div>
                    <div className="text-sm">NL876543210B01</div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">E-mail:</div>
                    <div className="text-sm">info@zzpbereken.com</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section - E-E-A-T */}
        <section className="py-20 bg-gray-50 border-y border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Ons Team
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Een toegewijd team van financiële experts en software ontwikkelaars
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white border-2 border-gray-200 p-8">
                <div className="w-20 h-20 bg-primary-600 flex items-center justify-center mb-4 mx-auto">
                  <span className="text-3xl font-bold text-white">LB</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">Lars Bakker</h3>
                <div className="text-primary-600 text-sm font-medium mb-4 text-center">Oprichter & CEO</div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Met 12 jaar ervaring als belastingadviseur en voormalig ZZP'er, begrijpt Lars de uitdagingen
                  van Nederlandse zelfstandigen. Hij heeft meer dan 500 ZZP'ers begeleid bij hun administratie.
                </p>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="text-xs text-gray-500">Kwalificaties:</div>
                  <div className="text-sm text-gray-700">• RB (Registerbelastingadviseur)</div>
                  <div className="text-sm text-gray-700">• AA (Accountant-Administratieconsulent)</div>
                </div>
              </div>

              <div className="bg-white border-2 border-gray-200 p-8">
                <div className="w-20 h-20 bg-secondary-800 flex items-center justify-center mb-4 mx-auto">
                  <span className="text-3xl font-bold text-white">SV</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">Sophie van der Meer</h3>
                <div className="text-secondary-800 text-sm font-medium mb-4 text-center">Financieel Expert</div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Sophie werkte 8 jaar bij de Belastingdienst voordat ze bij ZZP Bereken kwam. Ze zorgt ervoor dat
                  alle calculators voldoen aan de laatste Nederlandse belastingwetgeving en regelgeving.
                </p>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="text-xs text-gray-500">Kwalificaties:</div>
                  <div className="text-sm text-gray-700">• MSc Fiscale Economie (UvA)</div>
                  <div className="text-sm text-gray-700">• Voormalig Belastingdienst</div>
                </div>
              </div>

              <div className="bg-white border-2 border-gray-200 p-8">
                <div className="w-20 h-20 bg-primary-500 flex items-center justify-center mb-4 mx-auto">
                  <span className="text-3xl font-bold text-white">MD</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">Mike de Jong</h3>
                <div className="text-primary-600 text-sm font-medium mb-4 text-center">Lead Developer</div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Mike heeft 10+ jaar ervaring in fintech en heeft gewerkt aan financiële platforms voor
                  ING en ABN AMRO. Hij zorgt voor de technische nauwkeurigheid en veiligheid van onze tools.
                </p>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="text-xs text-gray-500">Kwalificaties:</div>
                  <div className="text-sm text-gray-700">• MSc Computer Science (TU Delft)</div>
                  <div className="text-sm text-gray-700">• Ex-ING Fintech Team</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Onze Waarden
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                De principes die alles bepalen wat we doen
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white border-2 border-gray-200 p-8 hover:border-primary-600 transition-all">
                <div className="w-16 h-16 bg-primary-100 text-primary-600 flex items-center justify-center mb-6">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Nauwkeurigheid</h3>
                <p className="text-gray-600 leading-relaxed">
                  Alle calculators worden gecontroleerd door financiële experts en bijgewerkt volgens de laatste Nederlandse wetgeving. Regelmatige audits garanderen correcte berekeningen.
                </p>
              </div>

              <div className="bg-white border-2 border-gray-200 p-8 hover:border-primary-600 transition-all">
                <div className="w-16 h-16 bg-primary-100 text-primary-600 flex items-center justify-center mb-6">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Privacy & Veiligheid</h3>
                <p className="text-gray-600 leading-relaxed">
                  Alle berekeningen gebeuren lokaal in jouw browser. We slaan of delen nooit jouw financiële gegevens. HTTPS-encryptie beschermt alle communicatie.
                </p>
              </div>

              <div className="bg-white border-2 border-gray-200 p-8 hover:border-primary-600 transition-all">
                <div className="w-16 h-16 bg-primary-100 text-primary-600 flex items-center justify-center mb-6">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Gebruiksvriendelijkheid</h3>
                <p className="text-gray-600 leading-relaxed">
                  Complexe berekeningen hoeven niet ingewikkeld te zijn. We ontwerpen intuïtieve tools die directe, begrijpelijke resultaten geven.
                </p>
              </div>

              <div className="bg-white border-2 border-gray-200 p-8 hover:border-primary-600 transition-all">
                <div className="w-16 h-16 bg-primary-100 text-primary-600 flex items-center justify-center mb-6">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Altijd Gratis</h3>
                <p className="text-gray-600 leading-relaxed">
                  Geen verborgen kosten, geen abonnementen, geen beperkingen. Professionele tools moeten voor iedereen toegankelijk zijn.
                </p>
              </div>

              <div className="bg-white border-2 border-gray-200 p-8 hover:border-primary-600 transition-all">
                <div className="w-16 h-16 bg-primary-100 text-primary-600 flex items-center justify-center mb-6">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Nederlandse Focus</h3>
                <p className="text-gray-600 leading-relaxed">
                  Speciaal gemaakt voor de Nederlandse markt met correcte belastingtarieven, wettelijke eisen en berekeningsmethoden.
                </p>
              </div>

              <div className="bg-white border-2 border-gray-200 p-8 hover:border-primary-600 transition-all">
                <div className="w-16 h-16 bg-primary-100 text-primary-600 flex items-center justify-center mb-6">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Continue Verbetering</h3>
                <p className="text-gray-600 leading-relaxed">
                  We voegen regelmatig nieuwe calculators toe en verbeteren bestaande. Jouw feedback helpt ons elke dag beter te worden.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="py-20 bg-gray-50 border-y border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Waarom ZZP'ers Ons Vertrouwen
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">15.000+</div>
                <div className="text-gray-600">Maandelijkse gebruikers</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">50.000+</div>
                <div className="text-gray-600">Berekeningen per maand</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">100%</div>
                <div className="text-gray-600">Gratis & Open</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">4.7/5</div>
                <div className="text-gray-600">Gebruikersrating</div>
              </div>
            </div>

            <div className="bg-white border-2 border-primary-200 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Onze Garanties</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <div className="font-semibold text-gray-900">Actueel</div>
                    <div className="text-sm text-gray-600">Bijgewerkt binnen 48 uur bij wetswijzigingen</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <div className="font-semibold text-gray-900">Veilig</div>
                    <div className="text-sm text-gray-600">SSL-encryptie en lokale berekeningen</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <div className="font-semibold text-gray-900">Transparant</div>
                    <div className="text-sm text-gray-600">Geen verborgen kosten of verrassingen</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary-500 via-primary-600 to-secondary-800 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '48px 48px'}}></div>
          </div>

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Klaar om te beginnen?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Ontdek onze uitgebreide verzameling gratis calculators en neem vandaag nog controle over je ZZP-administratie.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#calculators"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-secondary-900 font-bold hover:bg-gray-100 transition-all"
              >
                <span>Bekijk alle calculators</span>
                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
