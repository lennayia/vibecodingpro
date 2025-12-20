import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Navigation from '../components/layout/Navigation'
import Footer from '../components/layout/Footer'
import CookieBanner from '../components/ui/CookieBanner'
import { FileText } from 'lucide-react'

export default function TermsPage() {
  useEffect(() => {
    document.title = 'Obchodní podmínky | Vibecoding'
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
              <FileText className="w-8 h-8 text-accent" strokeWidth={2} />
              <h1 className="font-display font-bold text-4xl md:text-5xl">
                Obchodní podmínky
              </h1>
            </div>
            <p className="text-xl font-light">
              Pro poskytování konzultačních a mentoringových služeb v oblasti vibecoding
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
              <div className="mb-8">
                <p className="font-semibold">
                  Lenka Roubalová, IČ: 49266896<br />
                  se sídlem Jiřice 104, 289 22<br />
                  (dále jen „Poskytovatel")
                </p>
              </div>

              <section className="mb-8">
                <h2 className="font-display font-bold text-2xl mb-4">I. Úvodní ustanovení</h2>
                <ol className="space-y-3">
                  <li>Tyto obchodní podmínky (dále jen „OP") upravují vzájemná práva a povinnosti mezi Poskytovatelem a fyzickou či právnickou osobou (dále jen „Klient"), která uzavírá smlouvu o poskytování služeb prostřednictvím webových stránek www.vibecodingpro.cz nebo přímou komunikací s Poskytovatelem.</li>
                  <li>Předmětem služeb je poskytování konzultací, mentoringu a vzdělávání v oblasti tvorby digitálních nástrojů a aplikací s využitím AI asistentů (dále jen „vibecoding"). Poskytovatel neposkytuje programátorské služby v tradičním smyslu – Klient si pod vedením Poskytovatele vytváří vlastní digitální nástroje sám.</li>
                  <li>Služby jsou určeny především pro podnikatelky, koučky, lektorky, terapeutky a další osoby, které chtějí rozšířit své podnikání o digitální nástroje bez nutnosti tradičního programování.</li>
                  <li>Tyto OP jsou nedílnou součástí každé smlouvy uzavřené mezi Poskytovatelem a Klientem. Odchylná ujednání ve smlouvě mají přednost před ustanoveními těchto OP.</li>
                </ol>
              </section>

              <section className="mb-8">
                <h2 className="font-display font-bold text-2xl mb-4">II. Definice pojmů</h2>
                <dl className="space-y-3">
                  <dt className="font-semibold">Vibecoding</dt>
                  <dd className="ml-4">Metoda tvorby digitálních nástrojů a aplikací s využitím AI asistentů, při které uživatel komunikuje s AI pomocí přirozeného jazyka a AI generuje potřebný kód.</dd>

                  <dt className="font-semibold">Konzultace</dt>
                  <dd className="ml-4">Individuální setkání (online nebo osobně), při kterém Poskytovatel radí Klientovi ohledně koncepce, strategie a realizace jeho projektu.</dd>

                  <dt className="font-semibold">Mentoring</dt>
                  <dd className="ml-4">Dlouhodobější spolupráce zahrnující vedení Klienta procesem tvorby jeho digitálního nástroje, včetně praktické podpory při práci s AI nástroji.</dd>

                  <dt className="font-semibold">Projekt</dt>
                  <dd className="ml-4">Konkrétní digitální nástroj nebo aplikace, kterou Klient vytváří v rámci spolupráce s Poskytovatelem.</dd>

                  <dt className="font-semibold">Fáze</dt>
                  <dd className="ml-4">Jednotlivé kroky metodologie vibecoding, které Klient prochází při tvorbě svého projektu.</dd>
                </dl>
              </section>

              <section className="mb-8">
                <h2 className="font-display font-bold text-2xl mb-4">III. Nabídka služeb a jejich rozsah</h2>
                <ol className="space-y-3">
                  <li>
                    Poskytovatel nabízí služby ve třech základních balíčcích:
                    <ul className="ml-6 mt-2 space-y-1">
                      <li>a) VIBE – konzultační balíček v rozsahu 3 hodin.</li>
                      <li>b) VIBE+CODING – mentoringový balíček v rozsahu 6 hodin.</li>
                      <li>c) VIBECODING VIP – komplexní mentoringový balíček v rozsahu 10 hodin.</li>
                    </ul>
                  </li>
                  <li>Rozsah hodin uvedený u každého balíčku je orientační. Nevyčerpané hodiny v rámci balíčku lze využít do 6 měsíců od zakoupení, poté propadají bez náhrady.</li>
                  <li>Poskytovatel si vyhrazuje právo upravit obsah jednotlivých balíčků. O změnách bude Klient informován před uzavřením smlouvy.</li>
                </ol>
              </section>

              <section className="mb-8">
                <h2 className="font-display font-bold text-2xl mb-4">IV. Uzavření smlouvy</h2>
                <ol className="space-y-3">
                  <li>Smlouva je uzavřena okamžikem, kdy Klient odešle objednávku (vyplněním objednávkového formuláře, e-mailem nebo jinou formou) a Poskytovatel objednávku potvrdí e-mailem.</li>
                  <li>Odesláním objednávky Klient potvrzuje, že se seznámil s těmito OP, souhlasí s nimi a zavazuje se je dodržovat.</li>
                  <li>Poskytovatel si vyhrazuje právo odmítnout objednávku, zejména pokud má pochybnosti o serióznosti Klienta nebo pokud služba není pro Klienta vhodná.</li>
                  <li>Smlouva se uzavírá na dobu určitou – do vyčerpání zakoupeného balíčku nebo do uplynutí 6 měsíců od zakoupení, podle toho, co nastane dříve.</li>
                </ol>
              </section>

              <section className="mb-8">
                <h2 className="font-display font-bold text-2xl mb-4">V. Ceny a platební podmínky</h2>
                <ol className="space-y-3">
                  <li>Aktuální ceny služeb jsou uvedeny na webových stránkách Poskytovatele. Všechny ceny jsou uvedeny v českých korunách (CZK) a jsou konečné (Poskytovatel není plátcem DPH).</li>
                  <li>Platba je splatná předem, před zahájením poskytování služeb, pokud není dohodnuto jinak.</li>
                  <li>Platbu lze provést bankovním převodem na účet Poskytovatele.</li>
                  <li>Daňový doklad (fakturu) obdrží Klient elektronicky na e-mailovou adresu uvedenou při objednávce, a to po přijetí platby.</li>
                  <li>V případě prodlení s platbou je Poskytovatel oprávněn pozastavit poskytování služeb do doby úhrady.</li>
                </ol>
              </section>

              <section className="mb-8">
                <h2 className="font-display font-bold text-2xl mb-4">VI. Realizace služeb</h2>
                <ol className="space-y-3">
                  <li>Konzultace a mentoring probíhají primárně online formou videohovoru (Zoom, Google Meet nebo jiná platforma dle dohody). Po vzájemné dohodě je možné i osobní setkání.</li>
                  <li>Termíny konzultací se domlouvají individuálně s přiměřeným předstihem. Klient má právo na přeložení termínu, pokud o to požádá nejméně 14 hodin předem.</li>
                  <li>Pokud Klient termín zruší méně než 14 hodin předem nebo se nedostaví bez omluvy, konzultace se považuje za uskutečněnou a příslušná doba se odečte z balíčku.</li>
                  <li>Poskytovatel může s předchozím souhlasem Klienta pořizovat záznamy konzultací pro účely dalšího vzdělávání Klienta. Bez výslovného souhlasu Klienta nebudou záznamy sdíleny s třetími stranami ani použity pro marketingové účely.</li>
                  <li>Mezi jednotlivými konzultacemi může Poskytovatel poskytovat Klientovi podporu prostřednictvím e-mailu nebo dohodnutého komunikačního kanálu. Rozsah této podpory je součástí zakoupeného balíčku.</li>
                </ol>
              </section>

              <section className="mb-8">
                <h2 className="font-display font-bold text-2xl mb-4">VII. Práva a povinnosti Klienta</h2>
                <p className="font-semibold mb-3">Klient má právo:</p>
                <ul className="ml-6 space-y-2 mb-4">
                  <li>a) na poskytnutí služeb v rozsahu a kvalitě odpovídající zakoupenému balíčku;</li>
                  <li>b) na přeložení termínu konzultace za podmínek uvedených v čl. VI;</li>
                  <li>c) klást dotazy a žádat vysvětlení během konzultací;</li>
                  <li>d) na důvěrné zacházení s informacemi, které Poskytovateli sdělí.</li>
                </ul>

                <p className="font-semibold mb-3">Klient je povinen:</p>
                <ul className="ml-6 space-y-2">
                  <li>a) poskytnout Poskytovateli pravdivé a úplné informace potřebné pro poskytování služeb;</li>
                  <li>b) aktivně spolupracovat při realizaci služeb a plnit dohodnuté úkoly mezi konzultacemi;</li>
                  <li>c) zajistit si na vlastní náklady potřebné technické vybavení a přístupy k nástrojům potřebným pro vibecoding (počítač, internet, případně předplatné AI nástrojů);</li>
                  <li>d) dodržovat termíny konzultací nebo je včas rušit/přesouvat;</li>
                  <li>e) uhradit cenu služeb řádně a včas.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="font-display font-bold text-2xl mb-4">VIII. Práva a povinnosti Poskytovatele</h2>
                <p className="font-semibold mb-3">Poskytovatel má právo:</p>
                <ul className="ml-6 space-y-2 mb-4">
                  <li>a) na úhradu ceny za poskytnuté služby;</li>
                  <li>b) odmítnout poskytnutí služeb, pokud Klient nespolupracuje nebo porušuje tyto OP;</li>
                  <li>c) přeložit termín konzultace z vážných důvodů (nemoc, technické problémy apod.);</li>
                  <li>d) používat anonymizované informace o spolupráci pro své marketingové účely (reference, případové studie) pouze s výslovným souhlasem Klienta.</li>
                </ul>

                <p className="font-semibold mb-3">Poskytovatel je povinen:</p>
                <ul className="ml-6 space-y-2">
                  <li>a) poskytovat služby odborně, svědomitě a v souladu s dohodnutým rozsahem;</li>
                  <li>b) zachovávat mlčenlivost o informacích, které se dozví od Klienta;</li>
                  <li>c) informovat Klienta o všech skutečnostech, které mohou mít vliv na poskytování služeb;</li>
                  <li>d) vystavit daňový doklad po přijetí platby.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="font-display font-bold text-2xl mb-4">IX. Výsledky spolupráce a duševní vlastnictví</h2>
                <ol className="space-y-3">
                  <li><strong>Aplikace a nástroje vytvořené Klientem:</strong> Veškeré digitální nástroje, aplikace a produkty, které Klient vytvoří v rámci spolupráce s Poskytovatelem, jsou výhradním vlastnictvím Klienta. Klient s nimi může volně nakládat, včetně jejich prodeje, úprav nebo dalšího vývoje.</li>
                  <li><strong>Metodologie Poskytovatele:</strong> Metodologie vibecoding, vzdělávací materiály, pracovní postupy a know-how Poskytovatele zůstávají duševním vlastnictvím Poskytovatele. Klient je oprávněn tyto poznatky využívat pro vlastní potřebu, není však oprávněn je dále šířit, prodávat nebo na jejich základě poskytovat obdobné služby třetím osobám bez písemného souhlasu Poskytovatele.</li>
                  <li><strong>Obsah vytvořený AI:</strong> Kód a obsah generovaný AI nástroji v rámci tvorby projektu Klienta je vlastnictvím Klienta. Poskytovatel nenese odpovědnost za případné nároky třetích stran týkající se takto generovaného obsahu.</li>
                  <li>Klient odpovídá za to, že obsah jeho projektu (texty, obrázky, data) neporušuje práva třetích osob, zejména autorská práva, ochranné známky a práva na ochranu osobnosti.</li>
                </ol>
              </section>

              <section className="mb-8">
                <h2 className="font-display font-bold text-2xl mb-4">X. Omezení odpovědnosti a vyloučení záruk</h2>
                <ol className="space-y-3">
                  <li><strong>Povaha služeb:</strong> Služby Poskytovatele mají vzdělávací a konzultační charakter. Poskytovatel předává znalosti a dovednosti, ale konečný výsledek závisí na aktivitě, schopnostech a nasazení Klienta.</li>
                  <li><strong>Žádná garance konkrétních výsledků:</strong> Poskytovatel negarantuje dosažení konkrétních obchodních výsledků (výše příjmů, počet klientů, úspěšnost aplikace na trhu apod.). Případové studie a příklady úspěšných klientů prezentované na webových stránkách jsou ilustrativní a nepředstavují záruku obdobných výsledků.</li>
                  <li><strong>Technické nástroje třetích stran:</strong> Poskytovatel nenese odpovědnost za dostupnost, funkčnost nebo změny podmínek AI nástrojů, hostingových služeb a dalších technických řešení třetích stran, které Klient při tvorbě svého projektu využívá.</li>
                  <li><strong>Omezení náhrady škody:</strong> V případě porušení povinností Poskytovatele je náhrada škody omezena maximálně do výše ceny zaplacené Klientem za příslušný balíček služeb. Poskytovatel neodpovídá za ušlý zisk, nepřímé škody nebo následné škody.</li>
                  <li>Klient bere na vědomí, že provoz digitálních nástrojů a aplikací s sebou nese rizika (technické výpadky, bezpečnostní hrozby, změny právních předpisů) a je povinen tato rizika ve svém podnikání zohlednit.</li>
                </ol>
              </section>

              <section className="mb-8">
                <h2 className="font-display font-bold text-2xl mb-4">XI. Odstoupení od smlouvy</h2>

                <h3 className="font-semibold text-xl mb-3">Odstoupení Klientem – spotřebitel</h3>
                <ol className="space-y-3 mb-6">
                  <li>Klient, který je spotřebitelem ve smyslu § 419 občanského zákoníku, má právo odstoupit od smlouvy bez udání důvodu ve lhůtě 14 dnů ode dne uzavření smlouvy.</li>
                  <li>Pokud Klient výslovně požádal o zahájení poskytování služeb před uplynutím lhůty pro odstoupení a služby byly poskytnuty v plném rozsahu, právo na odstoupení od smlouvy Klientovi nevzniká.</li>
                  <li>Pokud Klient odstoupí od smlouvy poté, co bylo na jeho žádost zahájeno poskytování služeb, je povinen uhradit poměrnou část ceny za služby poskytnuté do okamžiku odstoupení.</li>
                  <li>Odstoupení od smlouvy musí být učiněno písemně (e-mailem na lenna@online-byznys.cz) a musí obsahovat identifikaci Klienta a číslo objednávky.</li>
                </ol>

                <h3 className="font-semibold text-xl mb-3">Garance spokojenosti</h3>
                <ol className="space-y-3 mb-6">
                  <li>Nad rámec zákonného práva na odstoupení nabízí Poskytovatel garanci spokojenosti: Pokud Klient po první konzultaci zjistí, že služba pro něj není vhodná, může do 7 dnů od první konzultace požádat o vrácení celé zaplacené částky.</li>
                  <li>Podmínkou uplatnění garance spokojenosti je, že Klient absolvoval první konzultaci v plném rozsahu a aktivně se jí účastnil. Garance se nevztahuje na případy, kdy Klient odmítl spolupracovat nebo neposkytl potřebné informace.</li>
                  <li>V případě vrácení platby na základě garance spokojenosti bude částka vrácena na účet Klienta do 14 dnů od schválení žádosti.</li>
                </ol>

                <h3 className="font-semibold text-xl mb-3">Odstoupení Poskytovatelem</h3>
                <ol className="space-y-3">
                  <li>Poskytovatel je oprávněn odstoupit od smlouvy, pokud Klient podstatně porušuje své povinnosti, zejména pokud: nespolupracuje, opakovaně ruší termíny bez omluvy, jedná v rozporu s dobrými mravy nebo poškozuje dobré jméno Poskytovatele.</li>
                  <li>V případě odstoupení Poskytovatelem z důvodů na straně Klienta nemá Klient nárok na vrácení již uhrazené ceny za poskytnuté služby.</li>
                </ol>
              </section>

              <section className="mb-8">
                <h2 className="font-display font-bold text-2xl mb-4">XII. Reklamace a řešení sporů</h2>
                <ol className="space-y-3">
                  <li>Klient má právo reklamovat služby, které nebyly poskytnuty v souladu se smlouvou nebo těmito OP. Reklamaci je třeba uplatnit písemně (e-mailem na lenna@online-byznys.cz) bez zbytečného odkladu po zjištění vady.</li>
                  <li>Reklamace musí obsahovat popis vady a požadovaný způsob řešení. Poskytovatel vyřídí reklamaci nejpozději do 30 dnů od jejího obdržení.</li>
                  <li>V případě oprávněné reklamace má Klient právo na bezplatné odstranění vady (např. dodatečná konzultace) nebo na přiměřenou slevu z ceny.</li>
                  <li>Klient, který je spotřebitelem, má právo na mimosoudní řešení spotřebitelského sporu. Příslušným subjektem je Česká obchodní inspekce (www.coi.cz).</li>
                  <li>Případné spory budou řešeny přednostně smírnou cestou. Pokud se nepodaří spor vyřešit smírně, jsou k jeho rozhodnutí příslušné české soudy.</li>
                </ol>
              </section>

              <section className="mb-8">
                <h2 className="font-display font-bold text-2xl mb-4">XIII. Ochrana osobních údajů</h2>
                <ol className="space-y-3">
                  <li>Poskytovatel zpracovává osobní údaje Klienta v souladu s nařízením GDPR a zákonem č. 110/2019 Sb., o zpracování osobních údajů.</li>
                  <li>Podrobné informace o zpracování osobních údajů jsou uvedeny v samostatném dokumentu <a href="/gdpr" className="text-accent hover:underline">Zásady ochrany osobních údajů</a>, který je dostupný na webových stránkách Poskytovatele.</li>
                </ol>
              </section>

              <section className="mb-8">
                <h2 className="font-display font-bold text-2xl mb-4">XIV. Závěrečná ustanovení</h2>
                <ol className="space-y-3">
                  <li>Tyto OP jsou platné a účinné od 21. 12. 2025.</li>
                  <li>Poskytovatel si vyhrazuje právo tyto OP jednostranně změnit. Změny budou zveřejněny na webových stránkách. Pro již uzavřené smlouvy platí OP ve znění účinném v době uzavření smlouvy.</li>
                  <li>Vztahy neupravené těmito OP se řídí právním řádem České republiky, zejména zákonem č. 89/2012 Sb., občanským zákoníkem.</li>
                  <li>Je-li některé ustanovení těchto OP neplatné nebo neúčinné, nemá to vliv na platnost a účinnost ostatních ustanovení.</li>
                  <li>Písemná forma je zachována i při komunikaci prostřednictvím e-mailu.</li>
                </ol>
              </section>

              <div className="text-center mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                <p className="font-light">V Jiřicích, dne 20. 12. 2025</p>
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
