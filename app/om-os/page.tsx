import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Om PengeKalkulator - Professionelle Beregningsværktøjer til Danmark',
  description: 'Lær mere om PengeKalkulator - din pålidelige kilde til gratis, præcise og opdaterede økonomiske kalkulatorer for danske virksomheder og privatpersoner.',
  alternates: {
    canonical: 'https://pengekalkulator.com/om-os',
  },
}

export default function OmOsPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary-600 to-primary-700 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '48px 48px'}}></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 text-sm font-medium mb-6">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Dansk kvalitet siden 2024</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Om PengeKalkulator
              </h1>
              <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
                Din pålidelige partner for præcise økonomiske beregninger – gratis, opdateret og lavet til Danmark
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Vores mission
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Hos PengeKalkulator tror vi på, at alle danskere skal have adgang til præcise,
                  pålidelige økonomiske værktøjer – uden skjulte omkostninger eller komplekse brugerflader.
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Vi har skabt Danmarks mest omfattende samling af <strong>gratis beregningsværktøjer</strong>,
                  der følger gældende dansk lovgivning og opdateres løbende for at sikre nøjagtighed.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/#kalkulatorer"
                    className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white font-medium hover:bg-primary-700 transition-all"
                  >
                    <span>Udforsk kalkulatorer</span>
                    <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-8 border-l-4 border-primary-600">
                  <div className="text-4xl font-bold text-primary-600 mb-2">18+</div>
                  <div className="text-gray-700 font-medium">Kalkulatorer</div>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 border-l-4 border-green-600">
                  <div className="text-4xl font-bold text-green-600 mb-2">100%</div>
                  <div className="text-gray-700 font-medium">Gratis</div>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 border-l-4 border-blue-600">
                  <div className="text-4xl font-bold text-blue-600 mb-2">6</div>
                  <div className="text-gray-700 font-medium">Kategorier</div>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 border-l-4 border-purple-600">
                  <div className="text-4xl font-bold text-purple-600 mb-2">DK</div>
                  <div className="text-gray-700 font-medium">Lovgivning</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gray-50 border-y border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Vores værdier
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                De principper der styrer alt, hvad vi gør
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white border-2 border-gray-200 p-8 hover:border-primary-600 transition-all group">
                <div className="w-16 h-16 bg-primary-100 text-primary-600 flex items-center justify-center mb-6 group-hover:bg-primary-600 group-hover:text-white transition-all">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Præcision & Nøjagtighed</h3>
                <p className="text-gray-600 leading-relaxed">
                  Alle vores kalkulatorer er nøje kontrolleret og følger gældende dansk lovgivning.
                  Vi opdaterer løbende for at sikre korrekte beregninger.
                </p>
              </div>

              <div className="bg-white border-2 border-gray-200 p-8 hover:border-primary-600 transition-all group">
                <div className="w-16 h-16 bg-primary-100 text-primary-600 flex items-center justify-center mb-6 group-hover:bg-primary-600 group-hover:text-white transition-all">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Privatliv & Sikkerhed</h3>
                <p className="text-gray-600 leading-relaxed">
                  Alle beregninger foregår lokalt i din browser. Vi gemmer eller sender aldrig dine økonomiske data.
                  Dit privatliv er vores prioritet.
                </p>
              </div>

              <div className="bg-white border-2 border-gray-200 p-8 hover:border-primary-600 transition-all group">
                <div className="w-16 h-16 bg-primary-100 text-primary-600 flex items-center justify-center mb-6 group-hover:bg-primary-600 group-hover:text-white transition-all">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Brugervenlighed</h3>
                <p className="text-gray-600 leading-relaxed">
                  Komplekse beregninger skal ikke være komplicerede. Vi designer intuitive værktøjer,
                  der giver dig øjeblikkelige, forståelige resultater.
                </p>
              </div>

              <div className="bg-white border-2 border-gray-200 p-8 hover:border-primary-600 transition-all group">
                <div className="w-16 h-16 bg-primary-100 text-primary-600 flex items-center justify-center mb-6 group-hover:bg-primary-600 group-hover:text-white transition-all">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Altid Gratis</h3>
                <p className="text-gray-600 leading-relaxed">
                  Ingen skjulte gebyrer, ingen abonnementer, ingen begrænsninger.
                  Professionelle værktøjer skal være tilgængelige for alle.
                </p>
              </div>

              <div className="bg-white border-2 border-gray-200 p-8 hover:border-primary-600 transition-all group">
                <div className="w-16 h-16 bg-primary-100 text-primary-600 flex items-center justify-center mb-6 group-hover:bg-primary-600 group-hover:text-white transition-all">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Dansk Fokus</h3>
                <p className="text-gray-600 leading-relaxed">
                  Lavet specifikt til det danske marked med korrekte skattesatser, lovkrav og beregningsmetoder.
                  Vi taler dit sprog.
                </p>
              </div>

              <div className="bg-white border-2 border-gray-200 p-8 hover:border-primary-600 transition-all group">
                <div className="w-16 h-16 bg-primary-100 text-primary-600 flex items-center justify-center mb-6 group-hover:bg-primary-600 group-hover:text-white transition-all">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Konstant Udvikling</h3>
                <p className="text-gray-600 leading-relaxed">
                  Vi tilføjer løbende nye kalkulatorer og forbedrer eksisterende.
                  Din feedback hjælper os med at blive bedre hver dag.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What We Offer */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Hvad tilbyder vi?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Omfattende økonomiske værktøjer organiseret i kategorier
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/kategori/lon-skat" className="group">
                <div className="bg-white border-2 border-gray-200 p-6 h-full hover:border-primary-600 hover:shadow-lg transition-all">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary-100 text-primary-600 flex items-center justify-center mr-4 group-hover:bg-primary-600 group-hover:text-white transition-all">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Løn & Skat</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Beregn nettoløn, fleksjob, deltidsløn, feriedage og lønstigning med danske skatteregler.
                  </p>
                </div>
              </Link>

              <Link href="/kategori/forretning" className="group">
                <div className="bg-white border-2 border-gray-200 p-6 h-full hover:border-primary-600 hover:shadow-lg transition-all">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary-100 text-primary-600 flex items-center justify-center mr-4 group-hover:bg-primary-600 group-hover:text-white transition-all">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Forretning</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Dækningsbidrag, break-even, moms, procesrente og andre forretningsberegninger.
                  </p>
                </div>
              </Link>

              <Link href="/kategori/investering-opsparing" className="group">
                <div className="bg-white border-2 border-gray-200 p-6 h-full hover:border-primary-600 hover:shadow-lg transition-all">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary-100 text-primary-600 flex items-center justify-center mr-4 group-hover:bg-primary-600 group-hover:text-white transition-all">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Investering & Opsparing</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Renters rente, pension, nutidsværdi, indlånsrente og opsparingsberegninger.
                  </p>
                </div>
              </Link>

              <Link href="/kategori/privatokonomi" className="group">
                <div className="bg-white border-2 border-gray-200 p-6 h-full hover:border-primary-600 hover:shadow-lg transition-all">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary-100 text-primary-600 flex items-center justify-center mr-4 group-hover:bg-primary-600 group-hover:text-white transition-all">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Privatøkonomi</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Husleje, inflation, købekraft og personlig budgetplanlægning.
                  </p>
                </div>
              </Link>

              <Link href="/kategori/transport" className="group">
                <div className="bg-white border-2 border-gray-200 p-6 h-full hover:border-primary-600 hover:shadow-lg transition-all">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary-100 text-primary-600 flex items-center justify-center mr-4 group-hover:bg-primary-600 group-hover:text-white transition-all">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Transport</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Flexleasing, transportomkostninger og kilometerberegninger.
                  </p>
                </div>
              </Link>

              <Link href="/kategori/matematik" className="group">
                <div className="bg-white border-2 border-gray-200 p-6 h-full hover:border-primary-600 hover:shadow-lg transition-all">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary-100 text-primary-600 flex items-center justify-center mr-4 group-hover:bg-primary-600 group-hover:text-white transition-all">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Matematik</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Procentberegninger, enhedspriser og matematiske værktøjer.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-gray-50 border-y border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Hvorfor vælge PengeKalkulator?
                </h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Vi forstår, at økonomiske beslutninger kan være komplekse. Derfor har vi skabt værktøjer,
                  der gør det nemt at få overblik og træffe informerede valg om din økonomi.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-green-100 text-green-600 flex items-center justify-center">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Verificeret nøjagtighed</h3>
                      <p className="text-gray-600">
                        Alle beregninger er kontrolleret af økonomiske eksperter og opdateres løbende
                        i takt med ændringer i dansk lovgivning.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-100 text-blue-600 flex items-center justify-center">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Fuldt privatliv</h3>
                      <p className="text-gray-600">
                        Dine beregninger sker lokalt på din enhed. Vi gemmer eller deler aldrig dine økonomiske oplysninger.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-purple-100 text-purple-600 flex items-center justify-center">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Øjeblikkelige resultater</h3>
                      <p className="text-gray-600">
                        Få præcise svar på sekunder. Ingen ventetid, ingen komplicerede processer – bare hurtige, pålidelige beregninger.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white border border-gray-200 p-6">
                  <div className="text-primary-600 mb-2">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">Lynhurtig</h4>
                  <p className="text-sm text-gray-600">Få svar på sekunder</p>
                </div>
                <div className="bg-white border border-gray-200 p-6">
                  <div className="text-primary-600 mb-2">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">Fungerer overalt</h4>
                  <p className="text-sm text-gray-600">Mobil, tablet og desktop</p>
                </div>
                <div className="bg-white border border-gray-200 p-6">
                  <div className="text-primary-600 mb-2">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">Sikker forbindelse</h4>
                  <p className="text-sm text-gray-600">Beskyttet datatrafik</p>
                </div>
                <div className="bg-white border border-gray-200 p-6">
                  <div className="text-primary-600 mb-2">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">Altid tilgængelig</h4>
                  <p className="text-sm text-gray-600">24/7 uden begrænsninger</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-700 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '48px 48px'}}></div>
          </div>

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Klar til at komme i gang?
            </h2>
            <p className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto">
              Udforsk vores omfattende samling af gratis kalkulatorer og tag kontrol over din økonomi i dag.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#kalkulatorer"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-medium hover:bg-gray-100 transition-all"
              >
                <span>Se alle kalkulatorer</span>
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
