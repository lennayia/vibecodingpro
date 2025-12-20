import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Cookie, X } from 'lucide-react'

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const [isLeaving, setIsLeaving] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent')
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted')
    setIsLeaving(true)
    setTimeout(() => setIsVisible(false), 500)
  }

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined')
    setIsLeaving(true)
    setTimeout(() => setIsVisible(false), 500)
  }

  const messages = [
    {
      title: "🍪 Sušenky? Ne, cookies!",
      text: "Tyhle se nejí, ale pomáhají nám vědět, že jsi tu. Žádné špehování, slibuju.",
    },
    {
      title: "🤖 AI ti nedá pokoj...",
      text: "...dokud neklikneš. Cookies používáme jen na analytiku, ne na prodej tvé duše.",
    },
    {
      title: "🔮 Věštím, že klikneš na Jasně",
      text: "Cookies nám pomáhají dělat web lepší. A ne, nesledujeme, kolik kávy piješ.",
    },
  ]

  const randomMessage = messages[Math.floor(Math.random() * messages.length)]

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-[9999]"
        >
          <div className="relative bg-[#0a0a1a]/95 backdrop-blur-md border border-[#1a1a2e] rounded-2xl p-5 shadow-2xl shadow-black/50">
            {/* Zavírací tlačítko */}
            <button
              onClick={handleDecline}
              className="absolute top-3 right-3 text-gray-500 hover:text-white transition-colors"
              aria-label="Zavřít"
            >
              <X size={18} />
            </button>

            {/* Ikona */}
            <div className="flex items-start gap-4">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center"
              >
                <Cookie className="w-6 h-6 text-white" />
              </motion.div>

              <div className="flex-1 pr-4">
                <h3 className="font-bold text-white mb-1">
                  {randomMessage.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {randomMessage.text}
                </p>
              </div>
            </div>

            {/* Tlačítka */}
            <div className="flex gap-3 mt-4">
              <button
                onClick={handleAccept}
                className="flex-1 bg-[#22c55e] hover:bg-[#16a34a] text-white font-medium py-2.5 px-4 rounded-xl transition-all duration-200 hover:scale-[1.02]"
              >
                Jasně, v pohodě 👍
              </button>
              <button
                onClick={handleDecline}
                className="px-4 py-2.5 text-gray-400 hover:text-white border border-gray-700 hover:border-gray-500 rounded-xl transition-all duration-200"
              >
                Radši ne
              </button>
            </div>

            {/* Odkaz na GDPR */}
            <p className="text-xs text-gray-600 mt-3 text-center">
              Více info v{' '}
              <a href="/gdpr" className="text-gray-500 hover:text-[#22c55e] underline transition-colors">
                Zásadách ochrany osobních údajů
              </a>
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
