import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Target, Wrench, MessageSquare, FileText, Rocket, RefreshCw, Package, X, Check } from 'lucide-react'

function App() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  }

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const phases = [
    {
      number: "01",
      title: "Vize a příprava",
      description: "Definujeme, co chcete postavit a pro koho. Vytvoříme jasnou vizi vaší aplikace.",
      Icon: Target
    },
    {
      number: "02",
      title: "Technické zázemí",
      description: "Nastavíme všechny potřebné nástroje - Claude Code, GitHub, Supabase, Vercel.",
      Icon: Wrench
    },
    {
      number: "03",
      title: "Komunikace s AI",
      description: "Naučíme vás mluvit s Claude Code efektivně - správné prompty, kontext, iterace.",
      Icon: MessageSquare
    },
    {
      number: "04",
      title: "Startovací dokumenty",
      description: "Připravíme product brief, user stories a wireframes - základ úspěchu.",
      Icon: FileText
    },
    {
      number: "05",
      title: "První kroky",
      description: "Inicializace projektu, základní struktura a první komponenty.",
      Icon: Rocket
    },
    {
      number: "06",
      title: "Workflow a iterace",
      description: "Nastavíme denní rutinu, testování a správné verzování kódu.",
      Icon: RefreshCw
    },
    {
      number: "07",
      title: "Dokončení a spuštění",
      description: "Testování, deploy na Vercel a spuštění vaší aplikace do světa.",
      Icon: Package
    }
  ]

  const benefits = [
    { value: "60%", label: "Úspora času" },
    { value: "3x", label: "Více klientů" },
    { value: "24/7", label: "Dostupnost" },
    { value: "∞", label: "Škálovatelnost" }
  ]

  return (
    <div className="min-h-screen bg-[#f2f2f2] dark:bg-[#070716] text-[#070716] dark:text-[#f2f2f2] transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-[#f2f2f2]/80 dark:bg-[#070716]/80">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-display font-bold text-2xl">Claude Code Konzultace</div>
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-[#05050f] transition-colors"
          >
            {isDark ? '☀️' : '🌙'}
          </button>
        </div>
      </nav>

      {/* Hero Section - #070716 */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20 dark:bg-[#070716]">
        <motion.div
          className="max-w-6xl mx-auto text-center"
          initial="initial"
          animate="animate"
          variants={stagger}
        >
          <motion.div
            variants={fadeInUp}
            className="mb-6 inline-block"
          >
            <span className="px-4 py-2 bg-gray-100 dark:bg-[#05050f] rounded-full text-sm font-medium border border-gray-200 dark:border-[#070716]">
              Postavte si vlastní aplikaci za 6 měsíců
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="font-display font-bold text-6xl md:text-8xl lg:text-9xl mb-8 leading-tight text-gray-900 dark:text-[#eaeaea]"
          >
            Škálujte své podnikání
            <br />
            <span className="text-gradient">s vlastní aplikací</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-gray-600 dark:text-[#eaeaea] mb-12 max-w-3xl mx-auto"
          >
            Přestaňte měnit čas za peníze. Vytvořte si aplikaci, která pracuje za vás 24/7
            a pomáhá stovkám klientek - zatímco vy si užíváte svobodu a růst.
            <span className="block mt-4 text-lg">Bez zkušeností s kódováním.</span>
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex justify-center"
          >
            <button className="btn btn-primary">
              Objednat konzultaci
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Julie vs Martina Comparison - #05050f */}
      <section className="py-32 px-6 dark:bg-[#05050f]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display font-bold text-5xl md:text-6xl mb-8 text-center text-gray-900 dark:text-[#eaeaea]">
              Dvě cesty. Jeden obor.
            </h2>
            <p className="text-xl text-gray-600 dark:text-[#eaeaea] mb-16 text-center max-w-3xl mx-auto">
              Obě učí ženy zdravě spát. Ale jejich život vypadá úplně jinak.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Martina - Without App */}
              <motion.div
                className="bg-gray-50 dark:bg-[#070716] rounded-3xl p-8 border border-gray-200 dark:border-[#05050f]"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="mb-6">
                  <h3 className="font-display font-bold text-3xl mb-2 text-[#9A0303]">
                    Martina
                  </h3>
                  <p className="text-gray-600 dark:text-[#eaeaea]">Jen konzultace</p>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3 text-gray-700 dark:text-[#f2f2f2]">
                    <X className="w-5 h-5 text-[#9A0303] flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span><strong>6 konzultací denně</strong> - jedna za druhou, žádný prostor na dech</span>
                  </div>
                  <div className="flex items-start gap-3 text-gray-700 dark:text-[#f2f2f2]">
                    <X className="w-5 h-5 text-[#9A0303] flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span><strong>Opakuje stejné rady</strong> stále dokola - vyčerpávající</span>
                  </div>
                  <div className="flex items-start gap-3 text-gray-700 dark:text-[#f2f2f2]">
                    <X className="w-5 h-5 text-[#9A0303] flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span><strong>Odmítá 3-4 nové klientky týdně</strong> - nemá kapacitu</span>
                  </div>
                  <div className="flex items-start gap-3 text-gray-700 dark:text-[#f2f2f2]">
                    <X className="w-5 h-5 text-[#9A0303] flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span><strong>Večer vyčerpaná</strong> - na rodinu zbývá jen útržky energie</span>
                  </div>
                  <div className="flex items-start gap-3 text-gray-700 dark:text-[#f2f2f2]">
                    <X className="w-5 h-5 text-[#9A0303] flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span><strong>Nemůže na dovolenou</strong> - klientky čekají jen na ni</span>
                  </div>
                  <div className="flex items-start gap-3 text-gray-700 dark:text-[#f2f2f2]">
                    <X className="w-5 h-5 text-[#9A0303] flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span><strong>Příjem omezený</strong> - vydělá jen když aktivně pracuje</span>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                  <p className="italic text-gray-600 dark:text-[#eaeaea]">
                    "Cítím se jako na běžícím pásu. Pomáhám lidem, ale sama se topím."
                  </p>
                </div>
              </motion.div>

              {/* Julie - With App */}
              <motion.div
                className="bg-gray-50 dark:bg-[#070716] rounded-3xl p-8 border border-gray-200 dark:border-[#05050f]"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="mb-6">
                  <h3 className="font-display font-bold text-3xl mb-2 text-[#0000CD] dark:text-[#0DDD0D]">
                    Julie
                  </h3>
                  <p className="text-gray-600 dark:text-[#eaeaea]">Aplikace + premium konzultace</p>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3 text-gray-700 dark:text-[#f2f2f2]">
                    <Check className="w-5 h-5 text-[#0000CD] dark:text-[#0DDD0D] flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span><strong>Aplikace pomáhá 300+ ženám</strong> - spánkové tracky, meditace, personalizované tipy 24/7</span>
                  </div>
                  <div className="flex items-start gap-3 text-gray-700 dark:text-[#f2f2f2]">
                    <Check className="w-5 h-5 text-[#0000CD] dark:text-[#0DDD0D] flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span><strong>Klientky nadšené</strong> - mají podporu kdykoliv, vidí pokrok, cítí se méně samy</span>
                  </div>
                  <div className="flex items-start gap-3 text-gray-700 dark:text-[#f2f2f2]">
                    <Check className="w-5 h-5 text-[#0000CD] dark:text-[#0DDD0D] flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span><strong>2-3 premium konzultace týdně</strong> - za vyšší cenu, s klientkami které jsou už připravené</span>
                  </div>
                  <div className="flex items-start gap-3 text-gray-700 dark:text-[#f2f2f2]">
                    <Check className="w-5 h-5 text-[#0000CD] dark:text-[#0DDD0D] flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span><strong>Plná energie</strong> - čas na běhání, rodinu, koníčky</span>
                  </div>
                  <div className="flex items-start gap-3 text-gray-700 dark:text-[#f2f2f2]">
                    <Check className="w-5 h-5 text-[#0000CD] dark:text-[#0DDD0D] flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span><strong>Měsíc na Bali</strong> - aplikace běží sama, příjem pokračuje</span>
                  </div>
                  <div className="flex items-start gap-3 text-gray-700 dark:text-[#f2f2f2]">
                    <Check className="w-5 h-5 text-[#0000CD] dark:text-[#0DDD0D] flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span><strong>Příjem 4x vyšší</strong> - a stále roste</span>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                  <p className="italic text-gray-600 dark:text-[#eaeaea]">
                    "Konečně žiju. Pomáhám víc lidem než kdy předtím - a sama se cítím naplněná."
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div
              className="mt-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p className="text-2xl font-semibold text-gray-700 dark:text-[#f2f2f2] mb-4">
                Stejné znalosti. Stejná vášeň pomáhat.
              </p>
              <p className="text-3xl font-display font-bold">
                Úplně jiný život.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Case Study - #070716 */}
      <section className="py-32 px-6 dark:bg-[#070716]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <span className="px-4 py-2 bg-gray-100 dark:bg-[#05050f] rounded-full text-sm font-medium border border-gray-200 dark:border-[#070716]">
                Příběh úspěchu
              </span>
            </div>

            <div className="bg-gray-50 dark:bg-[#05050f] rounded-3xl p-12 border border-gray-200 dark:border-[#070716]">
              <div className="mb-8">
                <h3 className="font-display font-bold text-3xl md:text-4xl mb-4">
                  "Teď pomáhám 200 klientkám měsíčně místo 15"
                </h3>
                <p className="text-lg text-gray-600 dark:text-[#eaeaea]">
                  Jana, nutriční poradkyně
                </p>
              </div>

              <div className="space-y-6 text-lg text-gray-700 dark:text-[#f2f2f2]">
                <p>
                  <span className="font-semibold text-[#9A0303]">Před:</span> Jana trávila 20 hodin týdně individuálními konzultacemi. Musela odmítat nové klientky. Měla pocit, že její znalosti mají omezenou hodnotu - vydělávala jen když aktivně pracovala.
                </p>

                <p>
                  <span className="font-semibold text-[#0000CD] dark:text-[#0DDD0D]">Dnes:</span> Její aplikace nabízí personalizované jídelníčky, trackování pokroku a denní tipy. Funguje 24/7. Jana tráví 5 hodin týdně na vylepšování aplikace a zbytek času věnuje prémiové konzultace za vyšší cenu.
                </p>

                <div className="grid md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                  <div>
                    <div className="font-display font-bold text-4xl text-[#0000CD] dark:text-[#0DDD0D] mb-2">13x</div>
                    <div className="text-base text-gray-600 dark:text-[#eaeaea]">více klientek</div>
                  </div>
                  <div>
                    <div className="font-display font-bold text-4xl text-[#0000CD] dark:text-[#0DDD0D] mb-2">75%</div>
                    <div className="text-base text-gray-600 dark:text-[#eaeaea]">méně času</div>
                  </div>
                  <div>
                    <div className="font-display font-bold text-4xl text-[#0000CD] dark:text-[#0DDD0D] mb-2">5x</div>
                    <div className="text-base text-gray-600 dark:text-[#eaeaea]">vyšší příjem</div>
                  </div>
                </div>

                <p className="italic pt-6 text-gray-600 dark:text-[#eaeaea]">
                  "Cítím se konečně svobodná. Moje práce pomáhá lidem i když spím. A mám čas na rodinu. To je k nezaplacení."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Imagine Section - #05050f */}
      <section className="py-32 px-6 dark:bg-[#05050f]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display font-bold text-5xl md:text-6xl mb-12 text-center text-gray-900 dark:text-[#eaeaea]">
              Představte si...
            </h2>

            <div className="space-y-8 text-xl text-gray-700 dark:text-[#f2f2f2]">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
                className="leading-relaxed"
              >
                Je ráno a vy kontrolujete telefon. <span className="font-semibold">15 nových klientek se registrovalo přes noc.</span> Žádné schůzky, žádné emaily. Vaše aplikace jim poskytla přesně to, co potřebovaly.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="leading-relaxed"
              >
                <span className="font-semibold">Nemusíte odmítat zákaznice</span> kvůli nedostatku času. Vaše kapacita je neomezená. Pomáháte desítkám, stovkám lidí současně - a každý dostává personalizovanou péči.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="leading-relaxed"
              >
                Vaše klientky vás milují - aplikace jim <span className="font-semibold">šetří čas, dává jim výsledky</span> a je k dispozici kdykoliv potřebují. Doporučují vás dál, protože jste inovativní a profesionální.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="leading-relaxed"
              >
                Místo aby vás práce vyčerpávala, <span className="font-semibold">cítíte se naplněná a svobodná.</span> Máte čas na rodinu, koníčky, dovolenou. A váš příjem? Ten roste, i když si dopřejete volno.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
                className="leading-relaxed font-semibold text-center text-2xl pt-8"
              >
                Tohle není sen. Tohle je realita s vlastní aplikací.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Stats - #070716 */}
      <section className="py-32 px-6 dark:bg-[#070716]">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="font-display font-bold text-5xl md:text-6xl mb-20 text-center text-gray-900 dark:text-[#eaeaea]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Reálný dopad
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="text-center p-8 rounded-3xl bg-gray-50 dark:bg-[#05050f] hover:scale-105 transition-transform border border-gray-200 dark:border-[#070716]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="font-display font-bold text-5xl md:text-6xl mb-4 text-[#0000CD] dark:text-[#0DDD0D]">
                  {benefit.value}
                </div>
                <div className="text-lg text-gray-600 dark:text-[#eaeaea]">
                  {benefit.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7 Phases - #05050f */}
      <section className="py-32 px-6 dark:bg-[#05050f]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display font-bold text-5xl md:text-6xl mb-8 text-center text-gray-900 dark:text-[#eaeaea]">
              7 fází k vaší aplikaci
            </h2>
            <p className="text-xl text-gray-600 dark:text-[#eaeaea] mb-20 text-center max-w-3xl mx-auto">
              Strukturovaný proces, který vás provede od nápadu až po spuštěnou aplikaci
            </p>

            <div className="space-y-6">
              {phases.map((phase, index) => (
                <motion.div
                  key={index}
                  className="group bg-[#f2f2f2] dark:bg-[#070716] rounded-3xl p-8 hover:scale-[1.02] transition-all duration-300 border border-gray-200 dark:border-[#05050f]"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start gap-6">
                    <phase.Icon className="w-10 h-10 text-[#0000CD] dark:text-[#0DDD0D] flex-shrink-0" strokeWidth={1.5} />
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-3">
                        <span className="font-display font-bold text-gray-400 dark:text-gray-600 text-2xl">
                          {phase.number}
                        </span>
                        <h3 className="font-display font-bold text-2xl md:text-3xl">
                          {phase.title}
                        </h3>
                      </div>
                      <p className="text-lg text-gray-600 dark:text-[#eaeaea]">
                        {phase.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section - #05050f */}
      <section className="py-32 px-6 dark:bg-[#05050f]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display font-bold text-5xl md:text-6xl mb-8 text-center text-gray-900 dark:text-[#eaeaea]">
              Balíčky konzultací
            </h2>
            <p className="text-xl text-gray-600 dark:text-[#eaeaea] mb-16 text-center max-w-3xl mx-auto">
              Vyberte si cestu, která vám sedí
            </p>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* TEORIE Package */}
              <motion.div
                className="bg-gray-50 dark:bg-[#070716] rounded-3xl p-8 border border-gray-200 dark:border-[#05050f] transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mb-6">
                  <h3 className="font-display font-bold text-3xl mb-2">
                    TEORIE
                  </h3>
                  <p className="text-gray-600 dark:text-[#eaeaea] mb-4">2 hodiny</p>
                  <p className="text-sm text-gray-600 dark:text-[#eaeaea]">
                    Pro ženy, které chtějí nejdřív pochopit, jestli je to pro ně
                  </p>
                </div>

                <div className="mb-8">
                  <div className="text-4xl font-display font-bold mb-2">
                    3.900 Kč
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-2 text-gray-700 dark:text-[#f2f2f2]">
                    <Check className="w-5 h-5 text-[#0000CD] dark:text-[#0DDD0D] flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span>Jak Claude Code funguje a co je možné</span>
                  </div>
                  <div className="flex items-start gap-2 text-gray-700 dark:text-[#f2f2f2]">
                    <Check className="w-5 h-5 text-[#0000CD] dark:text-[#0DDD0D] flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span>Jaké nástroje potřebujete a proč</span>
                  </div>
                  <div className="flex items-start gap-2 text-gray-700 dark:text-[#f2f2f2]">
                    <Check className="w-5 h-5 text-[#0000CD] dark:text-[#0DDD0D] flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span>7 fází podrobně vysvětlených</span>
                  </div>
                  <div className="flex items-start gap-2 text-gray-700 dark:text-[#f2f2f2]">
                    <Check className="w-5 h-5 text-[#0000CD] dark:text-[#0DDD0D] flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span>Analýza vašeho konkrétního use case</span>
                  </div>
                  <div className="flex items-start gap-2 text-gray-700 dark:text-[#f2f2f2]">
                    <Check className="w-5 h-5 text-[#0000CD] dark:text-[#0DDD0D] flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span>Roadmapa: co dělat krok za krokem</span>
                  </div>
                  <div className="flex items-start gap-2 text-gray-700 dark:text-[#f2f2f2]">
                    <Check className="w-5 h-5 text-[#0000CD] dark:text-[#0DDD0D] flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span>Q&A</span>
                  </div>
                </div>

                <div className="mb-6 p-4 bg-gray-100 dark:bg-[#05050f] rounded-xl">
                  <p className="text-sm font-semibold mb-1">Výsledek:</p>
                  <p className="text-sm text-gray-600 dark:text-[#eaeaea]">
                    Rozumíte procesu, víte jestli do toho jít, máte plán
                  </p>
                </div>

                <button className="btn btn-primary w-full">
                  Rezervovat TEORIE
                </button>
              </motion.div>

              {/* TEORIE + PRAXE Package */}
              <motion.div
                className="bg-gray-50 dark:bg-[#070716] rounded-3xl p-8 border border-gray-200 dark:border-[#05050f] transition-all relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="btn-badge">
                    NEJOBLÍBENĚJŠÍ
                  </span>
                </div>

                <div className="mb-6 mt-4">
                  <h3 className="font-display font-bold text-3xl mb-2">
                    TEORIE + PRAXE
                  </h3>
                  <p className="text-gray-600 dark:text-[#eaeaea] mb-4">5 hodin</p>
                  <p className="text-sm text-gray-600 dark:text-[#eaeaea]">
                    Pro ženy, které chtějí nejen vědět, ale rovnou začít
                  </p>
                </div>

                <div className="mb-8">
                  <div className="text-4xl font-display font-bold mb-2">
                    9.900 Kč
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-2 text-gray-700 dark:text-[#f2f2f2]">
                    <Check className="w-5 h-5 text-[#0000CD] dark:text-[#0DDD0D] flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span className="font-semibold">Vše z TEORIE (2h) +</span>
                  </div>
                  <div className="flex items-start gap-2 text-gray-700 dark:text-[#f2f2f2]">
                    <Check className="w-5 h-5 text-[#0000CD] dark:text-[#0DDD0D] flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span><strong>Hands-on setup:</strong> Společně nainstalujeme a nastavíme všechny nástroje (1h)</span>
                  </div>
                  <div className="flex items-start gap-2 text-gray-700 dark:text-[#f2f2f2]">
                    <Check className="w-5 h-5 text-[#0000CD] dark:text-[#0DDD0D] flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span><strong>Product brief:</strong> Vytvoříme základ vaší aplikace společně (1h)</span>
                  </div>
                  <div className="flex items-start gap-2 text-gray-700 dark:text-[#f2f2f2]">
                    <Check className="w-5 h-5 text-[#0000CD] dark:text-[#0DDD0D] flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span><strong>První kroky:</strong> Inicializace projektu, první komponenty, první kód (1h)</span>
                  </div>
                </div>

                <div className="mb-6 p-4 bg-gray-100 dark:bg-[#05050f] rounded-xl border border-gray-200 dark:border-gray-700">
                  <p className="text-sm font-semibold mb-1">Výsledek:</p>
                  <p className="text-sm text-gray-600 dark:text-[#eaeaea]">
                    Rozumíte PLUS máte hotovo - nástroje běží, projekt existuje, první kód napsaný
                  </p>
                </div>

                <button className="btn btn-primary w-full">
                  Rezervovat TEORIE + PRAXE
                </button>
              </motion.div>
            </div>

            <motion.div
              className="mt-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-600 dark:text-[#eaeaea]">
                Nevíte si rady? <a href="#" className="underline hover:no-underline font-semibold">Napište mi</a> a pomůžu vám vybrat
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Pay for Consultation - #070716 */}
      <section className="py-32 px-6 dark:bg-[#070716]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display font-bold text-5xl md:text-6xl mb-8 text-center text-gray-900 dark:text-[#eaeaea]">
              Proč konzultace?
            </h2>
            <p className="text-xl text-gray-600 dark:text-[#eaeaea] mb-16 text-center max-w-3xl mx-auto">
              Protože správný začátek rozhoduje o úspěchu
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                className="bg-gray-50 dark:bg-[#070716] rounded-3xl p-8 border border-gray-200 dark:border-[#05050f]"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="font-display font-bold text-2xl mb-4 text-[#9A0303]">
                  Bez konzultace
                </h3>
                <ul className="space-y-3 text-gray-700 dark:text-[#f2f2f2]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#9A0303] mt-1">×</span>
                    <span>Ztratíte měsíce pokusů a omylů</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#9A0303] mt-1">×</span>
                    <span>Investujete do špatných nástrojů</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#9A0303] mt-1">×</span>
                    <span>Vzdáte to předčasně z frustrace</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#9A0303] mt-1">×</span>
                    <span>Vaše konkurence vás předběhne</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                className="bg-gray-50 dark:bg-[#070716] rounded-3xl p-8 border border-gray-200 dark:border-[#05050f]"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="font-display font-bold text-2xl mb-4 text-[#0000CD] dark:text-[#0DDD0D]">
                  S konzultací
                </h3>
                <ul className="space-y-3 text-gray-700 dark:text-[#f2f2f2]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#0000CD] dark:text-[#0DDD0D] mt-1">✓</span>
                    <span>Jasná roadmapa od nultého dne</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0000CD] dark:text-[#0DDD0D] mt-1">✓</span>
                    <span>Vyhněte se drahým chybám</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0000CD] dark:text-[#0DDD0D] mt-1">✓</span>
                    <span>Podporovaný průvodce celou cestou</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0000CD] dark:text-[#0DDD0D] mt-1">✓</span>
                    <span>Hotová aplikace za 6 měsíců</span>
                  </li>
                </ul>
              </motion.div>
            </div>

            <motion.div
              className="mt-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-gray-600 dark:text-[#eaeaea] mb-4">
                Investice do konzultace = úspora času, peněz a nervů
              </p>
              <p className="text-2xl font-semibold">
                Vaše aplikace vám vrátí investici během prvních měsíců provozu
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section - #070716 */}
      <section className="py-32 px-6 dark:bg-[#070716]">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display font-bold text-5xl md:text-7xl mb-8 text-gray-900 dark:text-[#eaeaea]">
            Váš nový život začíná teď
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-[#eaeaea] mb-4">
            Přestaňte snít a začněte tvořit. Vaše klientky na vás čekají.
          </p>
          <p className="text-lg text-gray-600 dark:text-[#eaeaea] mb-12">
            Za 6 měsíců budete mít hotovou aplikaci. Za rok budete pomáhat stovkám lidí.
            A cítit se svobodně.
          </p>
          <button className="btn btn-primary btn-lg">
            Objednat konzultaci
          </button>
          <p className="text-sm text-gray-500 dark:text-gray-500 mt-6">
            Změna začíná rozhodnutím. Udělejte ho dnes.
          </p>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="dark:bg-[#05050f] py-12 px-6">
        <div className="max-w-6xl mx-auto text-center text-gray-600 dark:text-[#eaeaea]">
          <p className="mb-4">Claude Code Konzultace © 2026</p>
          <p className="text-sm">Postaveno s Claude Code, React a Framer Motion</p>
        </div>
      </footer>
    </div>
  )
}

export default App
