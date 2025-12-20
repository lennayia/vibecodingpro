import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Navigation from '../components/layout/Navigation'
import Footer from '../components/layout/Footer'
import CookieBanner from '../components/ui/CookieBanner'
import { Shield } from 'lucide-react'

export default function GdprPage() {
  useEffect(() => {
    document.title = 'Zásady ochrany osobních údajů | Vibecoding'
  }, [])

  return (
    <div className="min-h-screen bg-[#f2f2f2] dark:bg-[#070716]">
      <Navigation />

      <main style={{ paddingTop: 'clamp(6rem, 12vh, 12rem)', paddingBottom: 'clamp(4rem, 8vh, 8rem)' }}>
        <div className="max-w-4xl mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
            style={{ marginBottom: 'clamp(3rem, 6vh, 6rem)' }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Shield className="w-8 h-8 text-accent" strokeWidth={2} />
              <h1 className="font-display font-bold text-4xl md:text-5xl">
                Ochrana osobních údajů
              </h1>
            </div>
            <p className="text-xl font-light">
              Zásady zpracování osobních údajů (GDPR)
            </p>
            <p className="text-sm font-light mt-2">
              Účinné od: 21. 12. 2025
            </p>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white dark:bg-[#05050f] rounded-2xl shadow-lg"
            style={{ padding: 'clamp(2rem, 4vh, 3rem)' }}
          >
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <section className="mb-8">
                <h2 className="font-display font-bold text-2xl mb-4">I. Správce osobních údajů</h2>
                <p className="mb-4">Správcem osobních údajů je:</p>
                <div className="bg-gray-100 dark:bg-[#070716] p-4 rounded-lg">
                  <p className="font-semibold">
                    Lenka Roubalová<br />
                    IČ: 49266896<br />
                    Sídlo: Jiřice 104, 289 22<br />
                    E-mail: lenna@online-byznys.cz<br />
                    Webové stránky: https://vibecodingpro.cz
                  </p>
                </div>
                <p className="mt-4 font-light">(dále jen „Správce")</p>
                <p className="mt-2">Správce nejmenoval pověřence pro ochranu osobních údajů, neboť to není vyžadováno zákonem.</p>
              </section>

              <section className="mb-8">
                <h2 className="font-display font-bold text-2xl mb-4">II. Kategorie zpracovávaných osobních údajů</h2>
                <p className="mb-4">Správce zpracovává následující kategorie osobních údajů:</p>

                <h3 className="font-semibold text-xl mb-2">Identifikační údaje</h3>
                <p className="mb-4">Jméno a příjmení, název společnosti (u podnikajících osob), IČO, DIČ.</p>

                <h3 className="font-semibold text-xl mb-2">Kontaktní údaje</h3>
                <p className="mb-4">E-mailová adresa, telefonní číslo, fakturační adresa.</p>

                <h3 className="font-semibold text-xl mb-2">Údaje o objednávkách a platbách</h3>
                <p className="mb-4">Historie objednávek, zvolený balíček služeb, datum a způsob platby, číslo bankovního účtu (pro vrácení platby).</p>

                <h3 className="font-semibold text-xl mb-2">Údaje z komunikace</h3>
                <p className="mb-4">Obsah e-mailové komunikace, poznámky z konzultací, zpětná vazba.</p>

                <h3 className="font-semibold text-xl mb-2">Technické údaje</h3>
                <p>IP adresa, typ prohlížeče, údaje o zařízení, cookies (viz čl. VIII).</p>
              </section>

              <section className="mb-8">
                <h2 className="font-display font-bold text-2xl mb-4">III. Účely zpracování osobních údajů</h2>
                <p className="mb-4">Správce zpracovává osobní údaje pro následující účely:</p>

                <div className="space-y-4">
                  <div className="bg-gray-50 dark:bg-[#070716] p-4 rounded-lg">
                    <h3 className="font-semibold text-lg mb-2">Plnění smlouvy</h3>
                    <p className="mb-2">Poskytování objednaných služeb (konzultace, mentoring), komunikace ohledně služeb, plánování termínů, zasílání materiálů.</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Právní základ: Plnění smlouvy (čl. 6 odst. 1 písm. b) GDPR)</p>
                  </div>

                  <div className="bg-gray-50 dark:bg-[#070716] p-4 rounded-lg">
                    <h3 className="font-semibold text-lg mb-2">Fakturace a účetnictví</h3>
                    <p className="mb-2">Vystavování faktur, vedení účetnictví, plnění daňových povinností.</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Právní základ: Plnění právní povinnosti (čl. 6 odst. 1 písm. c) GDPR)</p>
                  </div>

                  <div className="bg-gray-50 dark:bg-[#070716] p-4 rounded-lg">
                    <h3 className="font-semibold text-lg mb-2">Marketing a zasílání obchodních sdělení</h3>
                    <p className="mb-2">Zasílání newsletteru, informací o novinkách, akcích a nových službách.</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Právní základ: Souhlas (čl. 6 odst. 1 písm. a) GDPR) nebo oprávněný zájem u stávajících klientů (čl. 6 odst. 1 písm. f) GDPR)</p>
                  </div>

                  <div className="bg-gray-50 dark:bg-[#070716] p-4 rounded-lg">
                    <h3 className="font-semibold text-lg mb-2">Zlepšování služeb</h3>
                    <p className="mb-2">Analýza zpětné vazby, vyhodnocování spokojenosti, zlepšování nabídky.</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Právní základ: Oprávněný zájem (čl. 6 odst. 1 písm. f) GDPR)</p>
                  </div>

                  <div className="bg-gray-50 dark:bg-[#070716] p-4 rounded-lg">
                    <h3 className="font-semibold text-lg mb-2">Ochrana práv</h3>
                    <p className="mb-2">Uplatňování právních nároků, obrana proti nárokům třetích osob.</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Právní základ: Oprávněný zájem (čl. 6 odst. 1 písm. f) GDPR)</p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="font-display font-bold text-2xl mb-4">IV. Doba uchovávání osobních údajů</h2>
                <p className="mb-4">Osobní údaje jsou uchovávány pouze po dobu nezbytnou pro daný účel:</p>
                <ul className="space-y-2 ml-6">
                  <li><strong>Údaje pro plnění smlouvy:</strong> Po dobu trvání smluvního vztahu a 3 roky po jeho ukončení (promlčecí lhůta).</li>
                  <li><strong>Účetní a daňové doklady:</strong> 10 let od konce účetního období, ve kterém vznikly (dle zákona o účetnictví).</li>
                  <li><strong>Marketingové údaje:</strong> Do odvolání souhlasu nebo 5 let od posledního kontaktu.</li>
                  <li><strong>Technické údaje (cookies):</strong> Dle nastavení jednotlivých cookies (viz čl. VIII).</li>
                </ul>
                <p className="mt-4">Po uplynutí doby uchovávání jsou údaje bezpečně smazány nebo anonymizovány.</p>
              </section>

              <section className="mb-8">
                <h2 className="font-display font-bold text-2xl mb-4">V. Příjemci osobních údajů</h2>
                <p className="mb-4">Správce může předávat osobní údaje následujícím kategoriím příjemců:</p>
                <ul className="space-y-2 ml-6">
                  <li><strong>Poskytovatel platební brány</strong> – pro zpracování plateb (např. Stripe, PayPal, GoPay)</li>
                  <li><strong>Poskytovatel e-mailových služeb</strong> – pro zasílání newsletterů a obchodních sdělení (např. MailerLite, Ecomail)</li>
                  <li><strong>Poskytovatel videohovorů</strong> – pro realizaci online konzultací (např. Zoom, Google Meet)</li>
                  <li><strong>Účetní a daňový poradce</strong> – pro vedení účetnictví a daňové poradenství</li>
                  <li><strong>Poskytovatel hostingu</strong> – pro provoz webových stránek (např. Vercel, WebKitty)</li>
                  <li><strong>Státní orgány</strong> – pokud to vyžaduje zákon (finanční úřad, soudy)</li>
                </ul>
                <p className="mt-4">Se všemi zpracovateli má Správce uzavřeny smlouvy o zpracování osobních údajů zajišťující ochranu vašich údajů.</p>
              </section>

              <section className="mb-8">
                <h2 className="font-display font-bold text-2xl mb-4">VI. Předávání údajů do třetích zemí</h2>
                <p className="mb-4">Některé služby, které Správce využívá, mohou být provozovány společnostmi se sídlem mimo Evropskou unii (zejména v USA). V těchto případech je předávání údajů zajištěno na základě:</p>
                <ul className="space-y-2 ml-6">
                  <li>Rozhodnutí Evropské komise o odpovídající ochraně (např. EU-US Data Privacy Framework)</li>
                  <li>Standardních smluvních doložek schválených Evropskou komisí</li>
                  <li>Závazných podnikových pravidel příjemce</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="font-display font-bold text-2xl mb-4">VII. Vaše práva</h2>
                <p className="mb-4">V souvislosti se zpracováním osobních údajů máte následující práva:</p>

                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Právo na přístup</h3>
                    <p>Máte právo získat potvrzení, zda jsou vaše údaje zpracovávány, a pokud ano, získat k nim přístup a informace o zpracování.</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">Právo na opravu</h3>
                    <p>Máte právo na opravu nepřesných údajů a doplnění neúplných údajů.</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">Právo na výmaz („právo být zapomenut")</h3>
                    <p>Máte právo na výmaz údajů, pokud pominul účel zpracování, odvoláte souhlas, vznesete námitku nebo jsou údaje zpracovávány protiprávně. Toto právo nelze uplatnit, pokud je zpracování nezbytné pro splnění právní povinnosti.</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">Právo na omezení zpracování</h3>
                    <p>Máte právo na omezení zpracování, pokud popíráte přesnost údajů, zpracování je protiprávní, Správce údaje nepotřebuje nebo jste vznesli námitku.</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">Právo na přenositelnost</h3>
                    <p>Máte právo získat své údaje ve strukturovaném, běžně používaném a strojově čitelném formátu a předat je jinému správci.</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">Právo vznést námitku</h3>
                    <p>Máte právo vznést námitku proti zpracování založenému na oprávněném zájmu. V případě přímého marketingu bude zpracování bez dalšího ukončeno.</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">Právo odvolat souhlas</h3>
                    <p>Pokud je zpracování založeno na souhlasu, máte právo souhlas kdykoli odvolat. Odvoláním souhlasu není dotčena zákonnost předchozího zpracování.</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">Právo podat stížnost</h3>
                    <p>Máte právo podat stížnost u dozorového úřadu, kterým je Úřad pro ochranu osobních údajů, Pplk. Sochora 27, 170 00 Praha 7, <a href="https://www.uoou.cz" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">www.uoou.cz</a>.</p>
                  </div>
                </div>

                <div className="bg-accent/10 border border-accent rounded-lg p-4 mt-6">
                  <p className="font-semibold mb-2">Jak uplatnit svá práva:</p>
                  <p>Kontaktujte Správce e-mailem na <a href="mailto:lenna@online-byznys.cz" className="text-accent hover:underline">lenna@online-byznys.cz</a>. Správce vyřídí vaši žádost bez zbytečného odkladu, nejpozději do 30 dnů.</p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="font-display font-bold text-2xl mb-4">VIII. Cookies</h2>
                <p className="mb-4">Webové stránky Správce používají cookies – malé textové soubory ukládané do vašeho prohlížeče.</p>

                <h3 className="font-semibold text-xl mb-3">Typy cookies</h3>
                <ul className="space-y-2 ml-6 mb-4">
                  <li><strong>Nezbytné cookies:</strong> Zajišťují základní funkčnost webu, nelze je vypnout.</li>
                  <li><strong>Analytické cookies:</strong> Pomáhají pochopit, jak návštěvníci web používají (např. Google Analytics).</li>
                  <li><strong>Marketingové cookies:</strong> Slouží k zobrazování relevantní reklamy.</li>
                </ul>

                <p className="mb-4"><strong>Správa cookies:</strong> Při první návštěvě webu budete požádáni o souhlas s cookies. Svůj souhlas můžete kdykoli změnit v nastavení cookies na webu nebo v nastavení prohlížeče.</p>
              </section>

              <section className="mb-8">
                <h2 className="font-display font-bold text-2xl mb-4">IX. Zabezpečení osobních údajů</h2>
                <p className="mb-4">Správce přijal technická a organizační opatření k ochraně osobních údajů:</p>
                <ul className="space-y-2 ml-6">
                  <li>Šifrovaný přenos dat (HTTPS)</li>
                  <li>Zabezpečený přístup k systémům (silná hesla, dvoufaktorové ověření)</li>
                  <li>Pravidelné aktualizace software</li>
                  <li>Omezený přístup k údajům pouze pro oprávněné osoby</li>
                  <li>Pravidelné zálohování dat</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="font-display font-bold text-2xl mb-4">X. Změny těchto zásad</h2>
                <p>Správce si vyhrazuje právo tyto zásady aktualizovat. O podstatných změnách budete informováni e-mailem nebo oznámením na webových stránkách. Aktuální verze je vždy dostupná na www.vibecodingpro.cz.</p>
              </section>

              <div className="text-center mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                <p className="font-light">Tyto zásady jsou účinné od 21. 12. 2025</p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
      <CookieBanner />
    </div>
  )
}
