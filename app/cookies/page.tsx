import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cookiebeleid - ZZP Bereken',
  description: 'Informatie over hoe ZZP Bereken cookies en vergelijkbare technologieën gebruikt op onze website.',
  alternates: {
    canonical: 'https://zzpbereken.com/cookies',
  },
}

export default function CookiesPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Cookiebeleid
            </h1>
            <p className="text-lg text-gray-600">
              Laatst bijgewerkt: {new Date().toLocaleDateString('nl-NL', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <section className="mb-12">
              <div className="bg-primary-50 border-l-4 border-primary-600 p-6 mb-8">
                <p className="text-gray-800 leading-relaxed">
                  Dit cookiebeleid legt uit wat cookies zijn, hoe we ze gebruiken op ZZPBereken.com,
                  en hoe u uw cookie-instellingen kunt beheren. Door gebruik te maken van onze website
                  accepteert u het gebruik van cookies in overeenstemming met dit beleid.
                </p>
              </div>
            </section>

            {/* Wat zijn cookies */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Wat zijn cookies?</h2>
              <p className="text-gray-700 mb-4">
                Cookies zijn kleine tekstbestanden die op uw computer, tablet of mobiele telefoon worden opgeslagen wanneer u een website bezoekt.
                Cookies stellen de website in staat om uw apparaat te herkennen en uw voorkeuren of acties in de loop van de tijd te onthouden.
              </p>
              <div className="bg-gray-50 border border-gray-200 p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Cookies kunnen zijn:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Sessiecookies:</strong> Tijdelijke cookies die worden verwijderd wanneer u uw browser sluit.</li>
                  <li><strong>Permanente cookies:</strong> Blijven op uw apparaat gedurende een bepaalde periode of totdat u ze handmatig verwijdert.</li>
                  <li><strong>Eerste-partij cookies:</strong> Geplaatst door de website die u bezoekt.</li>
                  <li><strong>Derde-partij cookies:</strong> Geplaatst door externe diensten op de website.</li>
                </ul>
              </div>
            </section>

            {/* Waarom gebruiken we cookies */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Waarom gebruiken we cookies?</h2>
              <p className="text-gray-700 mb-6">
                Op ZZP Bereken gebruiken we cookies voor de volgende doeleinden:
              </p>

              <div className="space-y-4">
                <div className="border-l-4 border-green-500 bg-green-50 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">✓ Noodzakelijke cookies</h3>
                  <p className="text-gray-700 text-sm mb-2">
                    Deze cookies zijn essentieel voor het correct functioneren van de website.
                  </p>
                  <ul className="text-gray-700 text-sm list-disc pl-5 space-y-1">
                    <li>Onthouden van uw cookie-instellingen</li>
                    <li>Zorgen voor veilige verbinding (HTTPS)</li>
                    <li>Behouden van sessiestatus</li>
                  </ul>
                  <p className="text-gray-600 text-xs mt-2">
                    <strong>Duur:</strong> Sessie of tot 1 jaar<br />
                    <strong>Toestemming vereist:</strong> Nee (technisch noodzakelijk)
                  </p>
                </div>

                <div className="border-l-4 border-blue-500 bg-blue-50 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">📊 Functionele cookies</h3>
                  <p className="text-gray-700 text-sm mb-2">
                    Deze cookies verbeteren de functionaliteit en gebruikerservaring van de website.
                  </p>
                  <ul className="text-gray-700 text-sm list-disc pl-5 space-y-1">
                    <li>Onthouden van uw keuzes en voorkeuren</li>
                    <li>Lokaal opslaan van calculator-instellingen</li>
                    <li>Aanpassen van inhoud aan uw behoeften</li>
                  </ul>
                  <p className="text-gray-600 text-xs mt-2">
                    <strong>Duur:</strong> Tot 1 jaar<br />
                    <strong>Toestemming vereist:</strong> Ja
                  </p>
                </div>

                <div className="border-l-4 border-purple-500 bg-purple-50 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">📈 Analytische cookies</h3>
                  <p className="text-gray-700 text-sm mb-2">
                    Deze cookies helpen ons te begrijpen hoe bezoekers de website gebruiken.
                  </p>
                  <ul className="text-gray-700 text-sm list-disc pl-5 space-y-1">
                    <li>Verzamelen van anonieme statistieken over bezoekers</li>
                    <li>Meten van website-prestaties</li>
                    <li>Identificeren van populaire pagina's en functies</li>
                    <li>Verbeteren van gebruikerservaring op basis van data</li>
                  </ul>
                  <p className="text-gray-600 text-xs mt-2">
                    <strong>Duur:</strong> Tot 2 jaar<br />
                    <strong>Toestemming vereist:</strong> Ja
                  </p>
                </div>

                <div className="border-l-4 border-orange-500 bg-orange-50 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">🎯 Marketing cookies</h3>
                  <p className="text-gray-700 text-sm mb-2">
                    We gebruiken momenteel GEEN marketing- of reclamecookies op ZZP Bereken.
                  </p>
                  <p className="text-gray-600 text-xs mt-2">
                    <strong>Status:</strong> Niet in gebruik
                  </p>
                </div>
              </div>
            </section>

            {/* Specifieke cookies */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Specifieke cookies die we gebruiken</h2>
              <p className="text-gray-700 mb-6">
                Hier is een overzicht van de specifieke cookies die op ZZP Bereken kunnen worden geplaatst:
              </p>

              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">Cookie naam</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">Type</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">Doel</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">Duur</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="bg-white">
                      <td className="px-4 py-3 text-sm text-gray-900 font-mono">cookie_consent</td>
                      <td className="px-4 py-3 text-sm text-gray-700">Noodzakelijk</td>
                      <td className="px-4 py-3 text-sm text-gray-700">Slaat uw cookie-instellingen op</td>
                      <td className="px-4 py-3 text-sm text-gray-700">1 jaar</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-4 py-3 text-sm text-gray-900 font-mono">session_id</td>
                      <td className="px-4 py-3 text-sm text-gray-700">Noodzakelijk</td>
                      <td className="px-4 py-3 text-sm text-gray-700">Identificeert uw sessie</td>
                      <td className="px-4 py-3 text-sm text-gray-700">Sessie</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-4 py-3 text-sm text-gray-900 font-mono">calculator_prefs</td>
                      <td className="px-4 py-3 text-sm text-gray-700">Functioneel</td>
                      <td className="px-4 py-3 text-sm text-gray-700">Onthoudt calculator-instellingen</td>
                      <td className="px-4 py-3 text-sm text-gray-700">6 maanden</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-4 py-3 text-sm text-gray-900 font-mono">_analytics</td>
                      <td className="px-4 py-3 text-sm text-gray-700">Analytisch</td>
                      <td className="px-4 py-3 text-sm text-gray-700">Anonieme gebruiksstatistieken</td>
                      <td className="px-4 py-3 text-sm text-gray-700">2 jaar</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Local Storage */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Local Storage en Session Storage</h2>
              <p className="text-gray-700 mb-4">
                Naast cookies gebruiken we ook Local Storage en Session Storage om gegevens lokaal in uw browser op te slaan:
              </p>
              <div className="bg-blue-50 border border-blue-200 p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Wat wordt opgeslagen?</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Calculator-resultaten (zodat u eerdere berekeningen kunt bekijken)</li>
                  <li>✓ Gebruikersinstellingen en voorkeuren</li>
                  <li>✓ Tijdelijke gegevens tijdens het gebruik van calculators</li>
                </ul>
                <p className="text-gray-600 text-sm mt-4">
                  <strong>Belangrijk:</strong> Alle gegevens worden alleen lokaal op uw apparaat opgeslagen en worden NOOIT naar onze servers verzonden.
                  U kunt deze gegevens op elk moment wissen via uw browserinstellingen.
                </p>
              </div>
            </section>

            {/* Derde-partij cookies */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Derde-partij cookies</h2>
              <p className="text-gray-700 mb-4">
                Sommige cookies op onze website kunnen worden geplaatst door diensten van derden:
              </p>
              <div className="space-y-4">
                <div className="border border-gray-200 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Hosting (Vercel)</h3>
                  <p className="text-gray-700 text-sm">
                    Onze hosting-provider kan technische cookies plaatsen om de beschikbaarheid en veiligheid van de website te waarborgen.
                  </p>
                </div>
              </div>
            </section>

            {/* Hoe u cookies beheert */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Hoe u cookies beheert</h2>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">6.1 Cookie-banner</h3>
              <p className="text-gray-700 mb-4">
                Wanneer u ZZP Bereken voor het eerst bezoekt, wordt een cookie-banner weergegeven waar u niet-noodzakelijke cookies kunt accepteren of weigeren.
                U kunt uw voorkeuren op elk moment wijzigen.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">6.2 Browserinstellingen</h3>
              <p className="text-gray-700 mb-4">
                U kunt cookies ook rechtstreeks in uw browserinstellingen beheren:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 border border-gray-200 p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Google Chrome</h4>
                  <p className="text-gray-700 text-sm">
                    Instellingen → Privacy en beveiliging → Cookies en andere sitegegevens
                  </p>
                </div>
                <div className="bg-gray-50 border border-gray-200 p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Mozilla Firefox</h4>
                  <p className="text-gray-700 text-sm">
                    Instellingen → Privacy & Beveiliging → Cookies en sitegegevens
                  </p>
                </div>
                <div className="bg-gray-50 border border-gray-200 p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Safari</h4>
                  <p className="text-gray-700 text-sm">
                    Voorkeuren → Privacy → Websitegegevens beheren
                  </p>
                </div>
                <div className="bg-gray-50 border border-gray-200 p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Microsoft Edge</h4>
                  <p className="text-gray-700 text-sm">
                    Instellingen → Cookies en sitemachtigingen → Cookies beheren
                  </p>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                <p className="text-gray-700 text-sm">
                  <strong>Let op:</strong> Als u cookies blokkeert of verwijdert, kunnen sommige functies van de website
                  mogelijk niet correct werken.
                </p>
              </div>
            </section>

            {/* Do Not Track */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Do Not Track (DNT)</h2>
              <p className="text-gray-700">
                We respecteren "Do Not Track" signalen van uw browser. Als u DNT heeft ingeschakeld, zullen we geen
                analytische of marketingcookies op uw apparaat plaatsen.
              </p>
            </section>

            {/* Updates */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Updates van het cookiebeleid</h2>
              <p className="text-gray-700">
                We kunnen dit cookiebeleid van tijd tot tijd bijwerken om wijzigingen in onze praktijken of om juridische redenen weer te geven.
                Belangrijke wijzigingen worden via de website aangekondigd. We raden u aan deze pagina regelmatig te bekijken.
              </p>
            </section>

            {/* Contact */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Vragen over cookies?</h2>
              <p className="text-gray-700 mb-4">
                Heeft u vragen over ons gebruik van cookies?
              </p>
              <div className="bg-primary-50 border-l-4 border-primary-600 p-6">
                <p className="text-gray-800 font-semibold mb-2">Neem contact met ons op:</p>
                <p className="text-gray-700">
                  E-mail: <a href="mailto:info@zzpbereken.com" className="text-primary-600 hover:text-primary-700 underline">info@zzpbereken.com</a>
                </p>
              </div>
            </section>

            {/* Gerelateerde beleidsregels */}
            <section className="mb-12">
              <div className="bg-gray-50 border border-gray-200 p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Lees ook:</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/privacybeleid" className="text-primary-600 hover:text-primary-700 underline">
                      → Privacybeleid
                    </Link>
                  </li>
                  <li>
                    <Link href="/voorwaarden" className="text-primary-600 hover:text-primary-700 underline">
                      → Algemene Voorwaarden
                    </Link>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
