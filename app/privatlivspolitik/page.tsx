import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privatlivspolitik - PengeKalkulator',
  description: 'Læs om hvordan PengeKalkulator behandler dine personoplysninger i henhold til GDPR og dansk lovgivning.',
  alternates: {
    canonical: 'https://pengekalkulator.com/privatlivspolitik',
  },
}

export default function PrivatlivspolitikPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Privatlivspolitik
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
                  Hos PengeKalkulator tager vi dit privatliv alvorligt. Denne privatlivspolitik forklarer,
                  hvordan vi indsamler, bruger og beskytter dine personoplysninger i overensstemmelse med
                  EU's Databeskyttelsesforordning (GDPR) og dansk lovgivning.
                </p>
              </div>
            </section>

            {/* Dataansvarlig */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Dataansvarlig</h2>
              <div className="bg-white border border-gray-200 p-6">
                <p className="text-gray-700 mb-4">
                  <strong>PengeKalkulator</strong> er dataansvarlig for behandlingen af dine personoplysninger.
                </p>
                <p className="text-gray-700 mb-2"><strong>Kontaktoplysninger:</strong></p>
                <p className="text-gray-700">
                  E-mail: kontakt@pengekalkulator.com<br />
                  Hjemmeside: https://pengekalkulator.com
                </p>
              </div>
            </section>

            {/* Hvilke oplysninger indsamler vi */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Hvilke oplysninger indsamler vi?</h2>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">2.1 Kalkulatordata</h3>
              <p className="text-gray-700 mb-4">
                Når du bruger vores kalkulatorer, behandles alle beregninger <strong>lokalt i din browser</strong>.
                Vi indsamler, gemmer eller sender IKKE de tal eller data, du indtaster i vores kalkulatorer.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">2.2 Automatisk indsamlede data</h3>
              <p className="text-gray-700 mb-4">
                Vi kan automatisk indsamle visse tekniske oplysninger, når du besøger vores hjemmeside:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>IP-adresse (anonymiseret)</li>
                <li>Browsertype og -version</li>
                <li>Operativsystem</li>
                <li>Besøgte sider og tidspunkter</li>
                <li>Henvisende hjemmeside (referrer)</li>
                <li>Generel geografisk placering (land/region)</li>
              </ul>
              <p className="text-gray-700">
                Disse oplysninger bruges udelukkende til at forbedre hjemmesidens funktionalitet og brugeroplevelse.
              </p>
            </section>

            {/* Formål med behandling */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Formål med behandling af personoplysninger</h2>
              <p className="text-gray-700 mb-4">
                Vi behandler dine personoplysninger til følgende formål:
              </p>
              <div className="space-y-4">
                <div className="bg-gray-50 border border-gray-200 p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">✓ Drift af hjemmesiden</h4>
                  <p className="text-gray-700 text-sm">
                    At levere og vedligeholde vores gratis kalkulatorer og sikre korrekt funktion.
                  </p>
                </div>
                <div className="bg-gray-50 border border-gray-200 p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">✓ Forbedring af tjenester</h4>
                  <p className="text-gray-700 text-sm">
                    At analysere brug af hjemmesiden for at forbedre brugeroplevelsen og tilføje nye funktioner.
                  </p>
                </div>
                <div className="bg-gray-50 border border-gray-200 p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">✓ Sikkerhed</h4>
                  <p className="text-gray-700 text-sm">
                    At beskytte mod misbrug, svindel og sikkerhedstrusler.
                  </p>
                </div>
                <div className="bg-gray-50 border border-gray-200 p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">✓ Lovmæssige forpligtelser</h4>
                  <p className="text-gray-700 text-sm">
                    At overholde gældende lovgivning og myndighedskrav.
                  </p>
                </div>
              </div>
            </section>

            {/* Retsgrundlag */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Retsgrundlag for behandling</h2>
              <p className="text-gray-700 mb-4">
                Vi behandler dine personoplysninger på grundlag af:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li><strong>Legitime interesser:</strong> Vi har en legitim interesse i at drive hjemmesiden, analysere brug og forbedre vores tjenester.</li>
                <li><strong>Samtykke:</strong> Når du accepterer cookies via vores cookie-banner.</li>
                <li><strong>Lovmæssige forpligtelser:</strong> Hvor det er nødvendigt for at overholde lovgivning.</li>
              </ul>
            </section>

            {/* Videregivelse */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Videregivelse af personoplysninger</h2>
              <p className="text-gray-700 mb-4">
                Vi sælger ALDRIG dine personoplysninger til tredjeparter.
              </p>
              <p className="text-gray-700 mb-4">
                Vi kan dele oplysninger med følgende kategorier af modtagere:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li><strong>Hosting-udbydere:</strong> For at hoste og drive hjemmesiden (f.eks. Vercel).</li>
                <li><strong>Analyseværktøjer:</strong> Til anonymiseret webanalyse (hvis anvendt).</li>
                <li><strong>Myndigheder:</strong> Hvis loven kræver det.</li>
              </ul>
            </section>

            {/* Opbevaring */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Opbevaringsperiode</h2>
              <p className="text-gray-700 mb-4">
                Vi opbevarer dine personoplysninger kun så længe, det er nødvendigt:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Kalkulatordata: Opbevares IKKE (alt behandles lokalt i din browser)</li>
                <li>Tekniske logfiler: Maksimalt 90 dage</li>
                <li>Cookies: Se vores <Link href="/cookies" className="text-primary-600 hover:text-primary-700 underline">cookiepolitik</Link></li>
              </ul>
            </section>

            {/* Dine rettigheder */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Dine rettigheder</h2>
              <p className="text-gray-700 mb-4">
                I henhold til GDPR har du følgende rettigheder:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="border border-gray-200 p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">🔍 Ret til indsigt</h4>
                  <p className="text-gray-700 text-sm">
                    Du kan anmode om en kopi af de personoplysninger, vi behandler om dig.
                  </p>
                </div>
                <div className="border border-gray-200 p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">✏️ Ret til berigtigelse</h4>
                  <p className="text-gray-700 text-sm">
                    Du kan få rettet ukorrekte eller ufuldstændige oplysninger.
                  </p>
                </div>
                <div className="border border-gray-200 p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">🗑️ Ret til sletning</h4>
                  <p className="text-gray-700 text-sm">
                    Du kan anmode om, at vi sletter dine personoplysninger.
                  </p>
                </div>
                <div className="border border-gray-200 p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">⛔ Ret til begrænsning</h4>
                  <p className="text-gray-700 text-sm">
                    Du kan anmode om begrænsning af behandlingen af dine oplysninger.
                  </p>
                </div>
                <div className="border border-gray-200 p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">📦 Ret til dataportabilitet</h4>
                  <p className="text-gray-700 text-sm">
                    Du kan få dine data i et struktureret, maskinlæsbart format.
                  </p>
                </div>
                <div className="border border-gray-200 p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">🚫 Ret til at gøre indsigelse</h4>
                  <p className="text-gray-700 text-sm">
                    Du kan gøre indsigelse mod visse former for behandling.
                  </p>
                </div>
              </div>
              <p className="text-gray-700">
                For at udøve dine rettigheder, kontakt os på: <a href="mailto:kontakt@pengekalkulator.com" className="text-primary-600 hover:text-primary-700 underline">kontakt@pengekalkulator.com</a>
              </p>
            </section>

            {/* Sikkerhed */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Datasikkerhed</h2>
              <p className="text-gray-700 mb-4">
                Vi har implementeret passende tekniske og organisatoriske sikkerhedsforanstaltninger for at beskytte dine personoplysninger:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>SSL/TLS-kryptering af al datatrafik</li>
                <li>Regelmæssige sikkerhedsopdateringer</li>
                <li>Adgangskontrol og autentificering</li>
                <li>Sikker hosting hos anerkendte udbydere</li>
                <li>Ingen lagring af følsomme kalkulatordata</li>
              </ul>
            </section>

            {/* Børn */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Børns privatliv</h2>
              <p className="text-gray-700">
                Vores tjenester er beregnet til personer over 15 år. Vi indsamler ikke bevidst personoplysninger fra børn under 15 år.
                Hvis du er forælder eller værge og opdager, at dit barn har givet os personoplysninger, bedes du kontakte os.
              </p>
            </section>

            {/* Ændringer */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Ændringer til privatlivspolitikken</h2>
              <p className="text-gray-700">
                Vi kan opdatere denne privatlivspolitik fra tid til anden. Væsentlige ændringer vil blive kommunikeret tydeligt på hjemmesiden.
                Vi opfordrer dig til regelmæssigt at gennemgå denne side for at holde dig informeret om, hvordan vi beskytter dine oplysninger.
              </p>
            </section>

            {/* Klager */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Klager til Datatilsynet</h2>
              <p className="text-gray-700 mb-4">
                Du har ret til at indgive en klage til Datatilsynet, hvis du mener, at vores behandling af dine personoplysninger er i strid med databeskyttelseslovgivningen.
              </p>
              <div className="bg-gray-50 border border-gray-200 p-6">
                <p className="text-gray-700 mb-2"><strong>Datatilsynet</strong></p>
                <p className="text-gray-700">
                  Borgergade 28, 5.<br />
                  1300 København K<br />
                  Telefon: +45 33 19 32 00<br />
                  E-mail: dt@datatilsynet.dk<br />
                  Web: <a href="https://www.datatilsynet.dk" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 underline">www.datatilsynet.dk</a>
                </p>
              </div>
            </section>

            {/* Kontakt */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Kontakt os</h2>
              <p className="text-gray-700 mb-4">
                Har du spørgsmål til denne privatlivspolitik eller vores behandling af personoplysninger?
              </p>
              <div className="bg-primary-50 border-l-4 border-primary-600 p-6">
                <p className="text-gray-800 font-semibold mb-2">Kontakt PengeKalkulator:</p>
                <p className="text-gray-700">
                  E-mail: <a href="mailto:kontakt@pengekalkulator.com" className="text-primary-600 hover:text-primary-700 underline">kontakt@pengekalkulator.com</a><br />
                  Vi bestræber os på at besvare alle henvendelser inden for 30 dage.
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
