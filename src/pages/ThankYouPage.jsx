import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navigation from '../components/layout/Navigation'
import Footer from '../components/layout/Footer'
import { CheckCircle, Mail, ArrowRight } from 'lucide-react'

export default function ThankYouPage() {
  useEffect(() => {
    document.title = 'Děkujeme | Vibecoding'
  }, [])

  return (
    <div className="min-h-screen bg-[#f2f2f2] dark:bg-[#070716]">
      <Navigation />

      <main style={{ paddingTop: 'clamp(6rem, 12vh, 12rem)', paddingBottom: 'clamp(4rem, 8vh, 8rem)' }}>
        <div className="max-w-3xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            {/* Success Icon */}
            <div className="flex justify-center" style={{ marginBottom: 'clamp(2rem, 4vh, 4rem)' }}>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="bg-green-100 dark:bg-green-900/30 rounded-full"
                style={{ padding: 'clamp(1rem, 2vh, 1.5rem)' }}
              >
                <CheckCircle className="w-16 h-16 text-green-600 dark:text-green-400" strokeWidth={2} />
              </motion.div>
            </div>

            {/* Thank You Message */}
            <h1 className="font-display font-bold text-4xl md:text-5xl" style={{ marginBottom: 'clamp(1.5rem, 3vh, 3rem)' }}>
              Děkujeme za objednávku!
            </h1>

            <p className="text-xl font-light max-w-2xl mx-auto" style={{ marginBottom: 'clamp(2rem, 4vh, 4rem)' }}>
              Vaše objednávka byla úspěšně přijata. Těšíme se na spolupráci s vámi! 🎉
            </p>

            {/* What's Next Section */}
            <div
              className="bg-white dark:bg-[#05050f] rounded-2xl border-2 border-gray-200 dark:border-gray-700 shadow-lg overflow-hidden"
              style={{ marginBottom: 'clamp(2rem, 4vh, 4rem)' }}
            >
              <div
                className="bg-gray-50 dark:bg-[#0a0a1a] border-b border-gray-200 dark:border-gray-700"
                style={{ padding: 'clamp(1rem, 2vh, 1.5rem)' }}
              >
                <h2 className="font-display font-bold text-2xl">
                  Co bude dál?
                </h2>
              </div>

              <div style={{ padding: 'clamp(1.5rem, 3vh, 2rem)' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(1.5rem, 3vh, 2rem)' }} className="text-left max-w-xl mx-auto">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                      <span className="text-accent font-bold">1</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Zaplaťte objednávku</h3>
                    <p className="font-light text-gray-600 dark:text-gray-400">
                      Platební instrukce najdete v emailu, který jsme vám právě poslali.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                      <Mail className="w-4 h-4 text-accent" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Obdržíte potvrzení</h3>
                    <p className="font-light text-gray-600 dark:text-gray-400">
                      Po připsání platby vám pošleme email s odkazem na rezervaci vašeho termínu.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                      <ArrowRight className="w-4 h-4 text-accent" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Rezervujte si termín</h3>
                    <p className="font-light text-gray-600 dark:text-gray-400">
                      Klikněte na odkaz v emailu a vyberte si termín, který vám vyhovuje.
                    </p>
                  </div>
                </div>
              </div>
              </div>
            </div>

            {/* CTA Button */}
            <Link
              to="/"
              className="inline-block bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-4 rounded-lg transition-colors shadow-lg"
            >
              Zpět na hlavní stránku
            </Link>

            {/* Support Note */}
            <p style={{ marginTop: 'clamp(2rem, 4vh, 4rem)' }} className="text-sm font-light text-gray-600 dark:text-gray-400">
              Máte otázky? <a href="mailto:info@vibecoding.cz" className="text-accent hover:underline">Napište nám</a>
            </p>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
