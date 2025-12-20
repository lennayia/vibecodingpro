import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Navigation from '../components/layout/Navigation'
import Footer from '../components/layout/Footer'
import { ShoppingCart, Crown } from 'lucide-react'

export default function VipVibecodingOrderPage() {
  useEffect(() => {
    // Set page title
    document.title = 'Objednávka VIBECODING VIP | Vibecoding'

    // Load SimpleShop script
    if (!window.sss) {
      const script = document.createElement('script')
      script.src = 'https://form.simpleshop.cz/prj/js/SimpleShopService.js'
      script.async = true
      document.body.appendChild(script)

      script.onload = () => {
        if (window.sss) {
          window.sss('createForm', 'Jm9Gy')
        }
      }
    } else {
      window.sss('createForm', 'Jm9Gy')
    }
  }, [])

  return (
    <div className="min-h-screen bg-[#f2f2f2] dark:bg-[#070716]">
      <Navigation />

      <main style={{ paddingTop: 'clamp(6rem, 12vh, 12rem)', paddingBottom: 'clamp(4rem, 8vh, 8rem)' }}>
        <div className="max-w-4xl mx-auto px-4">
          {/* Package Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
            style={{ marginBottom: 'clamp(3rem, 6vh, 6rem)' }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <ShoppingCart className="w-8 h-8 text-accent" strokeWidth={2} />
              <h1 className="font-display font-bold text-4xl md:text-5xl">
                Objednávka
              </h1>
            </div>

            <div className="relative inline-block mb-4">
              <div className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1.5 rounded-full text-sm font-semibold">
                EXKLUZIVNÍ
              </div>
              <div className="absolute -top-1 -right-1">
                <Crown className="w-5 h-5 text-white" strokeWidth={2} />
              </div>
            </div>

            <div className="relative inline-block mx-auto mb-6">
              <div className="absolute inset-0 bg-accent/10 blur-lg animate-pulse" />
              <h2 className="relative font-display font-bold text-4xl md:text-5xl text-accent drop-shadow-[0_0_20px_rgba(0,255,136,0.6)]">
                VIBECODING VIP
              </h2>
            </div>

            <div style={{ marginBottom: 'clamp(1.5rem, 3vh, 3rem)' }}>
              <p className="text-xl font-light mb-2">
                10x 55 min VIP mentoring
              </p>
              <p className="text-4xl font-bold text-accent mb-2">
                19 900 Kč
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <p className="text-lg font-light mb-4">
                Pro 1 ženu, která chce pochopit, začít a dokončit
              </p>
              <div
                className="bg-gray-100 dark:bg-[#05050f] rounded-xl border border-gray-200 dark:border-gray-700"
                style={{ padding: 'clamp(1rem, 2vh, 1.5rem)' }}
              >
                <p className="font-semibold mb-2 text-accent">Výsledek:</p>
                <p className="font-light">
                  Funkční produkt. Rozumíte mu, umíte ho rozvíjet. Garantovaný výsledek. Přímá linka k mentorce. Osobní vztah.
                </p>
              </div>
            </div>
          </motion.div>

          {/* SimpleShop Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <div style={{ padding: 'clamp(1.5rem, 3vh, 2rem)' }}>
              <div data-SimpleShopForm="Jm9Gy">
                <div className="text-center text-sm text-gray-500 dark:text-gray-400">
                  Prodejní formulář je vytvořen v systému <a href="https://www.simpleshop.cz/?utm_source=simpleshop&utm_medium=form&utm_campaign=22023" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">SimpleShop.cz</a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
