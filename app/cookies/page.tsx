import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cookiepolitik - PengeKalkulator',
  description: 'Information om hvordan PengeKalkulator bruger cookies og lignende teknologier på vores hjemmeside.',
  alternates: {
    canonical: 'https://pengekalkulator.com/cookies',
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
              Cookiepolitik
            </h1>
            <p className="text-lg text-gray-600">
              Sidst opdateret: {new Date().toLocaleDateString('da-DK', { year: 'numeric', month: 'long', day: 'numeric' })}
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
                  Denne cookiepolitik forklarer, hvad cookies er, hvordan vi bruger dem på PengeKalkulator.com,
                  og hvordan du kan styre dine cookieindstillinger. Ved at bruge vores hjemmeside accepterer du
                  brugen af cookies i overensstemmelse med denne politik.
                </p>
              </div>
            </section>

            {/* Hvad er cookies */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Hvad er cookies?</h2>
              <p className="text-gray-700 mb-4">
                Cookies er små tekstfiler, der gemmes på din computer, tablet eller mobiltelefon, når du besøger en hjemmeside.
                Cookies gør det muligt for hjemmesiden at genkende din enhed og huske dine præferencer eller handlinger over tid.
              </p>
              <div className="bg-gray-50 border border-gray-200 p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Cookies kan være:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Session cookies:</strong> Midlertidige cookies, der slettes, når du lukker din browser.</li>
                  <li><strong>Persistente cookies:</strong> Forbliver på din enhed i en bestemt periode eller indtil du sletter dem manuelt.</li>
                  <li><strong>Førstepartscookies:</strong> Sat af den hjemmeside, du besøger.</li>
                  <li><strong>Tredjepartscookies:</strong> Sat af eksterne tjenester på hjemmesiden.</li>
                </ul>
              </div>
            </section>

            {/* Hvorfor bruger vi cookies */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Hvorfor bruger vi cookies?</h2>
              <p className="text-gray-700 mb-6">
                På PengeKalkulator bruger vi cookies til følgende formål:
              </p>

              <div className="space-y-4">
                <div className="border-l-4 border-green-500 bg-green-50 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">✓ Nødvendige cookies</h3>
                  <p className="text-gray-700 text-sm mb-2">
                    Disse cookies er essentielle for, at hjemmesiden kan fungere korrekt.
                  </p>
                  <ul className="text-gray-700 text-sm list-disc pl-5 space-y-1">
                    <li>Huske dine cookieindstillinger</li>
                    <li>Sikre sikker forbindelse (HTTPS)</li>
                    <li>Bevare sessionstilstand</li>
                  </ul>
                  <p className="text-gray-600 text-xs mt-2">
                    <strong>Varighed:</strong> Session eller op til 1 år<br />
                    <strong>Samtykke påkrævet:</strong> Nej (teknisk nødvendige)
                  </p>
                </div>

                <div className="border-l-4 border-blue-500 bg-blue-50 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">📊 Funktionelle cookies</h3>
                  <p className="text-gray-700 text-sm mb-2">
                    Disse cookies forbedrer hjemmesidens funktionalitet og brugeroplevelse.
                  </p>
                  <ul className="text-gray-700 text-sm list-disc pl-5 space-y-1">
                    <li>Huske dine valg og præferencer</li>
                    <li>Gemme kalkulatorindstillinger lokalt</li>
                    <li>Tilpasse indhold til dine behov</li>
                  </ul>
                  <p className="text-gray-600 text-xs mt-2">
                    <strong>Varighed:</strong> Op til 1 år<br />
                    <strong>Samtykke påkrævet:</strong> Ja
                  </p>
                </div>

                <div className="border-l-4 border-purple-500 bg-purple-50 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">📈 Analyse cookies</h3>
                  <p className="text-gray-700 text-sm mb-2">
                    Disse cookies hjælper os med at forstå, hvordan besøgende bruger hjemmesiden.
                  </p>
                  <ul className="text-gray-700 text-sm list-disc pl-5 space-y-1">
                    <li>Indsamle anonyme statistikker om besøgende</li>
                    <li>Måle hjemmesidens performance</li>
                    <li>Identificere populære sider og funktioner</li>
                    <li>Forbedre brugeroplevelsen baseret på data</li>
                  </ul>
                  <p className="text-gray-600 text-xs mt-2">
                    <strong>Varighed:</strong> Op til 2 år<br />
                    <strong>Samtykke påkrævet:</strong> Ja
                  </p>
                </div>

                <div className="border-l-4 border-orange-500 bg-orange-50 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">🎯 Marketing cookies</h3>
                  <p className="text-gray-700 text-sm mb-2">
                    Vi bruger i øjeblikket IKKE marketing eller reklamecookies på PengeKalkulator.
                  </p>
                  <p className="text-gray-600 text-xs mt-2">
                    <strong>Status:</strong> Ikke i brug
                  </p>
                </div>
              </div>
            </section>

            {/* Specifikke cookies */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Specifikke cookies vi bruger</h2>
              <p className="text-gray-700 mb-6">
                Her er en oversigt over de specifikke cookies, der kan blive sat på PengeKalkulator:
              </p>

              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">Cookie navn</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">Type</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">Formål</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">Varighed</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="bg-white">
                      <td className="px-4 py-3 text-sm text-gray-900 font-mono">cookie_consent</td>
                      <td className="px-4 py-3 text-sm text-gray-700">Nødvendig</td>
                      <td className="px-4 py-3 text-sm text-gray-700">Gemmer dine cookieindstillinger</td>
                      <td className="px-4 py-3 text-sm text-gray-700">1 år</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-4 py-3 text-sm text-gray-900 font-mono">session_id</td>
                      <td className="px-4 py-3 text-sm text-gray-700">Nødvendig</td>
                      <td className="px-4 py-3 text-sm text-gray-700">Identificerer din session</td>
                      <td className="px-4 py-3 text-sm text-gray-700">Session</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-4 py-3 text-sm text-gray-900 font-mono">calculator_prefs</td>
                      <td className="px-4 py-3 text-sm text-gray-700">Funktionel</td>
                      <td className="px-4 py-3 text-sm text-gray-700">Husker kalkulatorindstillinger</td>
                      <td className="px-4 py-3 text-sm text-gray-700">6 måneder</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-4 py-3 text-sm text-gray-900 font-mono">_analytics</td>
                      <td className="px-4 py-3 text-sm text-gray-700">Analyse</td>
                      <td className="px-4 py-3 text-sm text-gray-700">Anonyme brugsstatistikker</td>
                      <td className="px-4 py-3 text-sm text-gray-700">2 år</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Local Storage */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Local Storage og Session Storage</h2>
              <p className="text-gray-700 mb-4">
                Ud over cookies bruger vi også Local Storage og Session Storage til at gemme data lokalt i din browser:
              </p>
              <div className="bg-blue-50 border border-blue-200 p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Hvad gemmes?</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Kalkulatorresultater (så du kan se tidligere beregninger)</li>
                  <li>✓ Brugerindstillinger og præferencer</li>
                  <li>✓ Midlertidige data under brug af kalkulatorer</li>
                </ul>
                <p className="text-gray-600 text-sm mt-4">
                  <strong>Vigtigt:</strong> Alle data gemmes kun lokalt på din enhed og sendes ALDRIG til vores servere.
                  Du kan til enhver tid rydde disse data via din browsers indstillinger.
                </p>
              </div>
            </section>

            {/* Tredjepartscookies */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Tredjepartscookies</h2>
              <p className="text-gray-700 mb-4">
                Nogle cookies på vores hjemmeside kan blive sat af tredjepartstjenester:
              </p>
              <div className="space-y-4">
                <div className="border border-gray-200 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Hosting (Vercel)</h3>
                  <p className="text-gray-700 text-sm">
                    Vores hosting-udbyder kan sætte tekniske cookies for at sikre hjemmesidens tilgængelighed og sikkerhed.
                  </p>
                </div>
              </div>
            </section>

            {/* Sådan styrer du cookies */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Sådan styrer du cookies</h2>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">6.1 Cookie-banner</h3>
              <p className="text-gray-700 mb-4">
                Når du besøger PengeKalkulator første gang, vises en cookie-banner, hvor du kan acceptere eller afvise ikke-nødvendige cookies.
                Du kan til enhver tid ændre dine præferencer.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">6.2 Browserindstillinger</h3>
              <p className="text-gray-700 mb-4">
                Du kan også styre cookies direkte i din browsers indstillinger:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 border border-gray-200 p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Google Chrome</h4>
                  <p className="text-gray-700 text-sm">
                    Indstillinger → Privatliv og sikkerhed → Cookies og andre webstedsdata
                  </p>
                </div>
                <div className="bg-gray-50 border border-gray-200 p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Mozilla Firefox</h4>
                  <p className="text-gray-700 text-sm">
                    Indstillinger → Privatliv & sikkerhed → Cookies og webstedsdata
                  </p>
                </div>
                <div className="bg-gray-50 border border-gray-200 p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Safari</h4>
                  <p className="text-gray-700 text-sm">
                    Præferencer → Privatliv → Administrer webstedsdata
                  </p>
                </div>
                <div className="bg-gray-50 border border-gray-200 p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Microsoft Edge</h4>
                  <p className="text-gray-700 text-sm">
                    Indstillinger → Cookies og webstedstilladelser → Administrer cookies
                  </p>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                <p className="text-gray-700 text-sm">
                  <strong>Bemærk:</strong> Hvis du blokerer eller sletter cookies, kan nogle funktioner på hjemmesiden
                  muligvis ikke fungere korrekt.
                </p>
              </div>
            </section>

            {/* Do Not Track */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Do Not Track (DNT)</h2>
              <p className="text-gray-700">
                Vi respekterer "Do Not Track" signaler fra din browser. Hvis du har aktiveret DNT, vil vi ikke
                sætte analyse- eller marketingcookies på din enhed.
              </p>
            </section>

            {/* Opdateringer */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Opdateringer af cookiepolitikken</h2>
              <p className="text-gray-700">
                Vi kan opdatere denne cookiepolitik fra tid til anden for at afspejle ændringer i vores praksis eller af juridiske årsager.
                Væsentlige ændringer vil blive meddelt via hjemmesiden. Vi opfordrer dig til regelmæssigt at gennemgå denne side.
              </p>
            </section>

            {/* Kontakt */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Spørgsmål om cookies?</h2>
              <p className="text-gray-700 mb-4">
                Har du spørgsmål til vores brug af cookies?
              </p>
              <div className="bg-primary-50 border-l-4 border-primary-600 p-6">
                <p className="text-gray-800 font-semibold mb-2">Kontakt os:</p>
                <p className="text-gray-700">
                  E-mail: <a href="mailto:kontakt@pengekalkulator.com" className="text-primary-600 hover:text-primary-700 underline">kontakt@pengekalkulator.com</a>
                </p>
              </div>
            </section>

            {/* Relaterede politikker */}
            <section className="mb-12">
              <div className="bg-gray-50 border border-gray-200 p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Læs også:</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/privatlivspolitik" className="text-primary-600 hover:text-primary-700 underline">
                      → Privatlivspolitik
                    </Link>
                  </li>
                  <li>
                    <Link href="/vilkaar" className="text-primary-600 hover:text-primary-700 underline">
                      → Vilkår & Betingelser
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
