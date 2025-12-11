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
            <span className="px-4 py-2 bg-gray-100 dark:bg-[#05050f] rounded-full text-sm font-medium shadow-[0_0_15px_rgba(13,221,13,0.3)]">
              Postavte si vlastní aplikaci za 6 měsíců
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="font-display font-bold text-6xl md:text-8xl lg:text-9xl mb-8 leading-tight"
          >
            Škálujte své podnikání
            <br />
            <span className="text-gradient">s vlastní aplikací</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto"
          >
            Naučte se tvořit aplikace s Claude Code. Ušetřete čas, pomozte více klientům,
            vydělejte více. Bez zkušeností s kódováním.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="px-8 py-4 bg-[#0DDD0D] text-[#070716] rounded-full font-semibold text-lg hover:scale-105 transition-transform shadow-[0_0_20px_rgba(13,221,13,0.5)]">
              Rezervovat konzultaci
            </button>
            <button className="px-8 py-4 bg-transparent rounded-full font-semibold text-lg hover:scale-105 transition-transform shadow-[0_0_15px_rgba(13,221,13,0.3)]">
              Zjistit více
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Problem/Solution Section - #05050f */}
      <section className="py-32 px-6 dark:bg-[#05050f]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display font-bold text-5xl md:text-6xl mb-16 text-center">
              Proč vlastní aplikace?
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="font-display font-bold text-3xl mb-4 text-[#9A0303]">
                  Bez vlastní aplikace
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 text-lg text-gray-700 dark:text-gray-300">
                    <X className="w-5 h-5 text-[#9A0303] flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span>Omezený čas - můžete obsluhovat jen tolik klientů, kolik máte hodin</span>
                  </div>
                  <div className="flex items-start gap-3 text-lg text-gray-700 dark:text-gray-300">
                    <X className="w-5 h-5 text-[#9A0303] flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span>Nemožnost škálovat - růst znamená více práce</span>
                  </div>
                  <div className="flex items-start gap-3 text-lg text-gray-700 dark:text-gray-300">
                    <X className="w-5 h-5 text-[#9A0303] flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span>Nižší výdělky - čas = peníze, ale čas je omezený</span>
                  </div>
                  <div className="flex items-start gap-3 text-lg text-gray-700 dark:text-gray-300">
                    <X className="w-5 h-5 text-[#9A0303] flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span>Manuální práce - opakujete stejné úkony stále dokola</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="font-display font-bold text-3xl mb-4 text-[#0DDD0D]">
                  S vlastní aplikací
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 text-lg text-gray-700 dark:text-gray-300">
                    <Check className="w-5 h-5 text-[#0DDD0D] flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span>Automatizace - aplikace pracuje za vás 24/7</span>
                  </div>
                  <div className="flex items-start gap-3 text-lg text-gray-700 dark:text-gray-300">
                    <Check className="w-5 h-5 text-[#0DDD0D] flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span>Neomezené škálování - pomozte stovkám klientů najednou</span>
                  </div>
                  <div className="flex items-start gap-3 text-lg text-gray-700 dark:text-gray-300">
                    <Check className="w-5 h-5 text-[#0DDD0D] flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span>Vyšší výdělky - jeden produkt, nekonečné možnosti</span>
                  </div>
                  <div className="flex items-start gap-3 text-lg text-gray-700 dark:text-gray-300">
                    <Check className="w-5 h-5 text-[#0DDD0D] flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span>Svoboda času - vaše aplikace funguje, i když spíte</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Stats - #070716 */}
      <section className="py-32 px-6 dark:bg-[#070716]">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="font-display font-bold text-5xl md:text-6xl mb-20 text-center"
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
                className="text-center p-8 rounded-3xl bg-gray-50 dark:bg-[#05050f] hover:scale-105 transition-transform shadow-[0_0_20px_rgba(13,221,13,0.2)] hover:shadow-[0_0_30px_rgba(13,221,13,0.4)]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="font-display font-bold text-5xl md:text-6xl mb-4 text-[#0DDD0D]">
                  {benefit.value}
                </div>
                <div className="text-lg text-gray-600 dark:text-gray-400">
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
            <h2 className="font-display font-bold text-5xl md:text-6xl mb-8 text-center">
              7 fází k vaší aplikaci
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-20 text-center max-w-3xl mx-auto">
              Strukturovaný proces, který vás provede od nápadu až po spuštěnou aplikaci
            </p>

            <div className="space-y-6">
              {phases.map((phase, index) => (
                <motion.div
                  key={index}
                  className="group bg-[#f2f2f2] dark:bg-[#070716] rounded-3xl p-8 hover:scale-[1.02] transition-all duration-300 shadow-[0_0_15px_rgba(13,221,13,0.2)] hover:shadow-[0_0_25px_rgba(13,221,13,0.4)]"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start gap-6">
                    <phase.Icon className="w-10 h-10 text-[#0DDD0D] flex-shrink-0" strokeWidth={1.5} />
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-3">
                        <span className="font-display font-bold text-gray-400 dark:text-gray-600 text-2xl">
                          {phase.number}
                        </span>
                        <h3 className="font-display font-bold text-2xl md:text-3xl">
                          {phase.title}
                        </h3>
                      </div>
                      <p className="text-lg text-gray-600 dark:text-gray-400">
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

      {/* CTA Section - #070716 */}
      <section className="py-32 px-6 dark:bg-[#070716]">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display font-bold text-5xl md:text-7xl mb-8">
            Jste připraveni začít?
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-12">
            Rezervujte si konzultaci a začněte budovat aplikaci, která změní vaše podnikání
          </p>
          <button className="px-12 py-6 bg-[#0DDD0D] text-[#070716] rounded-full font-semibold text-xl hover:scale-105 transition-transform shadow-[0_0_25px_rgba(13,221,13,0.5)]">
            Rezervovat konzultaci nyní
          </button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="dark:bg-[#05050f] py-12 px-6">
        <div className="max-w-6xl mx-auto text-center text-gray-600 dark:text-gray-400">
          <p className="mb-4">Claude Code Konzultace © 2026</p>
          <p className="text-sm">Postaveno s Claude Code, React a Framer Motion</p>
        </div>
      </footer>
    </div>
  )
}

export default App
