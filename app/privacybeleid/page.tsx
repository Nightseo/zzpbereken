import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacybeleid - ZZP Bereken',
  description: 'Lees hoe ZZP Bereken uw persoonlijke gegevens verwerkt in overeenstemming met de AVG en Nederlandse wetgeving.',
  alternates: {
    canonical: 'https://zzpbereken.com/privacybeleid',
  },
}

export default function PrivacybeleidPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Privacybeleid
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
                  Bij ZZP Bereken nemen we uw privacy serieus. Dit privacybeleid legt uit
                  hoe we uw persoonlijke gegevens verzamelen, gebruiken en beschermen in overeenstemming met
                  de Algemene Verordening Gegevensbescherming (AVG) en Nederlandse wetgeving.
                </p>
              </div>
            </section>

            {/* Verantwoordelijke */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Verwerkingsverantwoordelijke</h2>
              <div className="bg-white border border-gray-200 p-6">
                <p className="text-gray-700 mb-4">
                  <strong>NL FinTools B.V.</strong> is verwerkingsverantwoordelijke voor de verwerking van uw persoonlijke gegevens.
                </p>
                <p className="text-gray-700 mb-2"><strong>Contactgegevens:</strong></p>
                <p className="text-gray-700">
                  Bedrijfsnaam: NL FinTools B.V.<br />
                  Adres: Herengracht 282, 1016 BX Amsterdam<br />
                  KVK: 87654321<br />
                  BTW-ID: NL876543210B01<br />
                  E-mail: info@zzpbereken.com<br />
                  Website: https://zzpbereken.com
                </p>
              </div>
            </section>

            {/* Welke gegevens verzamelen we */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Welke gegevens verzamelen we?</h2>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">2.1 Calculatorgegevens</h3>
              <p className="text-gray-700 mb-4">
                Wanneer u onze calculators gebruikt, worden alle berekeningen <strong>lokaal in uw browser</strong> verwerkt.
                We verzamelen, bewaren of versturen NIET de cijfers of gegevens die u in onze calculators invoert.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">2.2 Automatisch verzamelde gegevens</h3>
              <p className="text-gray-700 mb-4">
                We kunnen automatisch bepaalde technische informatie verzamelen wanneer u onze website bezoekt:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>IP-adres (geanonimiseerd)</li>
                <li>Browsertype en -versie</li>
                <li>Besturingssysteem</li>
                <li>Bezochte pagina's en tijdstippen</li>
                <li>Verwijzende website (referrer)</li>
                <li>Algemene geografische locatie (land/regio)</li>
              </ul>
              <p className="text-gray-700">
                Deze informatie wordt uitsluitend gebruikt om de functionaliteit en gebruikerservaring van de website te verbeteren.
              </p>
            </section>

            {/* Doeleinden van verwerking */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Doeleinden van gegevensverwerking</h2>
              <p className="text-gray-700 mb-4">
                We verwerken uw persoonlijke gegevens voor de volgende doeleinden:
              </p>
              <div className="space-y-4">
                <div className="bg-gray-50 border border-gray-200 p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">✓ Beheer van de website</h4>
                  <p className="text-gray-700 text-sm">
                    Het leveren en onderhouden van onze gratis calculators en het waarborgen van correcte werking.
                  </p>
                </div>
                <div className="bg-gray-50 border border-gray-200 p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">✓ Verbetering van diensten</h4>
                  <p className="text-gray-700 text-sm">
                    Het analyseren van websitegebruik om de gebruikerservaring te verbeteren en nieuwe functies toe te voegen.
                  </p>
                </div>
                <div className="bg-gray-50 border border-gray-200 p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">✓ Beveiliging</h4>
                  <p className="text-gray-700 text-sm">
                    Bescherming tegen misbruik, fraude en beveiligingsbedreigingen.
                  </p>
                </div>
                <div className="bg-gray-50 border border-gray-200 p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">✓ Wettelijke verplichtingen</h4>
                  <p className="text-gray-700 text-sm">
                    Het naleven van geldende wetgeving en overheidseisen.
                  </p>
                </div>
              </div>
            </section>

            {/* Rechtsgrond */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Rechtsgrond voor verwerking</h2>
              <p className="text-gray-700 mb-4">
                We verwerken uw persoonlijke gegevens op basis van:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li><strong>Gerechtvaardigd belang:</strong> We hebben een gerechtvaardigd belang bij het exploiteren van de website, het analyseren van gebruik en het verbeteren van onze diensten.</li>
                <li><strong>Toestemming:</strong> Wanneer u cookies accepteert via onze cookie-banner.</li>
                <li><strong>Wettelijke verplichtingen:</strong> Waar nodig om te voldoen aan wetgeving.</li>
              </ul>
            </section>

            {/* Verstrekking aan derden */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Verstrekking van persoonlijke gegevens</h2>
              <p className="text-gray-700 mb-4">
                We verkopen uw persoonlijke gegevens NOOIT aan derden.
              </p>
              <p className="text-gray-700 mb-4">
                We kunnen gegevens delen met de volgende categorieën ontvangers:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li><strong>Hostingproviders:</strong> Voor het hosten en beheren van de website (bijv. Vercel).</li>
                <li><strong>Analysetools:</strong> Voor geanonimiseerde webanalyse (indien gebruikt).</li>
                <li><strong>Overheidsinstanties:</strong> Als de wet dit vereist.</li>
              </ul>
            </section>

            {/* Bewaartermijn */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Bewaartermijn</h2>
              <p className="text-gray-700 mb-4">
                We bewaren uw persoonlijke gegevens alleen zolang dit noodzakelijk is:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Calculatorgegevens: Worden NIET bewaard (alles wordt lokaal in uw browser verwerkt)</li>
                <li>Technische logbestanden: Maximaal 90 dagen</li>
                <li>Cookies: Zie ons <Link href="/cookies" className="text-primary-600 hover:text-primary-700 underline">cookiebeleid</Link></li>
              </ul>
            </section>

            {/* Uw rechten */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Uw rechten</h2>
              <p className="text-gray-700 mb-4">
                Op grond van de AVG heeft u de volgende rechten:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="border border-gray-200 p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">🔍 Recht op inzage</h4>
                  <p className="text-gray-700 text-sm">
                    U kunt een kopie opvragen van de persoonlijke gegevens die we over u verwerken.
                  </p>
                </div>
                <div className="border border-gray-200 p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">✏️ Recht op rectificatie</h4>
                  <p className="text-gray-700 text-sm">
                    U kunt onjuiste of onvolledige gegevens laten corrigeren.
                  </p>
                </div>
                <div className="border border-gray-200 p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">🗑️ Recht op verwijdering</h4>
                  <p className="text-gray-700 text-sm">
                    U kunt verzoeken dat we uw persoonlijke gegevens verwijderen.
                  </p>
                </div>
                <div className="border border-gray-200 p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">⛔ Recht op beperking</h4>
                  <p className="text-gray-700 text-sm">
                    U kunt verzoeken om beperking van de verwerking van uw gegevens.
                  </p>
                </div>
                <div className="border border-gray-200 p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">📦 Recht op dataportabiliteit</h4>
                  <p className="text-gray-700 text-sm">
                    U kunt uw gegevens in een gestructureerd, machineleesbaar formaat ontvangen.
                  </p>
                </div>
                <div className="border border-gray-200 p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">🚫 Recht van bezwaar</h4>
                  <p className="text-gray-700 text-sm">
                    U kunt bezwaar maken tegen bepaalde vormen van verwerking.
                  </p>
                </div>
              </div>
              <p className="text-gray-700">
                Om uw rechten uit te oefenen, neem contact met ons op via: <a href="mailto:info@zzpbereken.com" className="text-primary-600 hover:text-primary-700 underline">info@zzpbereken.com</a>
              </p>
            </section>

            {/* Beveiliging */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Gegevensbeveiliging</h2>
              <p className="text-gray-700 mb-4">
                We hebben passende technische en organisatorische beveiligingsmaatregelen geïmplementeerd om uw persoonlijke gegevens te beschermen:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>SSL/TLS-versleuteling van al het gegevensverkeer</li>
                <li>Regelmatige beveiligingsupdates</li>
                <li>Toegangscontrole en authenticatie</li>
                <li>Veilige hosting bij erkende providers</li>
                <li>Geen opslag van gevoelige calculatorgegevens</li>
              </ul>
            </section>

            {/* Kinderen */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Privacy van kinderen</h2>
              <p className="text-gray-700">
                Onze diensten zijn bedoeld voor personen van 16 jaar en ouder. We verzamelen niet bewust persoonlijke gegevens van kinderen onder de 16 jaar.
                Als u een ouder of voogd bent en ontdekt dat uw kind ons persoonlijke gegevens heeft verstrekt, neem dan contact met ons op.
              </p>
            </section>

            {/* Wijzigingen */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Wijzigingen in het privacybeleid</h2>
              <p className="text-gray-700">
                We kunnen dit privacybeleid van tijd tot tijd bijwerken. Belangrijke wijzigingen worden duidelijk op de website gecommuniceerd.
                We raden u aan deze pagina regelmatig te bekijken om op de hoogte te blijven van hoe we uw gegevens beschermen.
              </p>
            </section>

            {/* Klachten */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Klachten bij de Autoriteit Persoonsgegevens</h2>
              <p className="text-gray-700 mb-4">
                U heeft het recht om een klacht in te dienen bij de Autoriteit Persoonsgegevens als u van mening bent dat onze verwerking van uw persoonlijke gegevens in strijd is met de privacywetgeving.
              </p>
              <div className="bg-gray-50 border border-gray-200 p-6">
                <p className="text-gray-700 mb-2"><strong>Autoriteit Persoonsgegevens</strong></p>
                <p className="text-gray-700">
                  Postbus 93374<br />
                  2509 AJ Den Haag<br />
                  Telefoon: 088 - 1805 250<br />
                  Website: <a href="https://www.autoriteitpersoonsgegevens.nl" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 underline">www.autoriteitpersoonsgegevens.nl</a>
                </p>
              </div>
            </section>

            {/* Contact */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Neem contact met ons op</h2>
              <p className="text-gray-700 mb-4">
                Heeft u vragen over dit privacybeleid of onze verwerking van persoonlijke gegevens?
              </p>
              <div className="bg-primary-50 border-l-4 border-primary-600 p-6">
                <p className="text-gray-800 font-semibold mb-2">Contact ZZP Bereken:</p>
                <p className="text-gray-700">
                  NL FinTools B.V.<br />
                  Herengracht 282<br />
                  1016 BX Amsterdam<br />
                  E-mail: <a href="mailto:info@zzpbereken.com" className="text-primary-600 hover:text-primary-700 underline">info@zzpbereken.com</a><br />
                  <br />
                  We streven ernaar om alle verzoeken binnen 30 dagen te beantwoorden.
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
