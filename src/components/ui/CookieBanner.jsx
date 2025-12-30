import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Cookie, X } from 'lucide-react'
import { initializeAnalytics, disableAnalytics } from '../../utils/analytics'

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(() => {
    // Check immediately on component mount
    if (typeof window !== 'undefined') {
      const consent = localStorage.getItem('cookieConsent')
      return !consent
    }
    return false
  })
  const [isLeaving, setIsLeaving] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const [isGdprPage, setIsGdprPage] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    // Check if we're on GDPR page
    setIsGdprPage(window.location.pathname.includes('/gdpr'))
  }, [])

  // Don't render on server or before mount
  if (!isMounted) return null

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted')
    // Initialize analytics only after consent
    initializeAnalytics()
    setIsLeaving(true)
    setTimeout(() => setIsVisible(false), 500)
  }

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined')
    // Disable analytics if user declines
    disableAnalytics()
    setIsLeaving(true)
    setTimeout(() => setIsVisible(false), 500)
  }

  const messages = [
    {
      title: "Sušenky? Ne, cookies!",
      text: "Tyhle se nejí, ale pomáhají nám vědět, že jste tu. Žádné špehování, slibuju.",
    },
    {
      title: "AI vám nedá pokoj...",
      text: "...dokud nekliknete. Cookies používáme jen na analytiku, ne na prodej vašeho auta.",
    },
    {
      title: "Věštím, že kliknete na Jasně",
      text: "Cookies nám pomáhají dělat web lepší. A ne, nesledujeme, kolik kávy pijete.",
    },
  ]

  const randomMessage = messages[Math.floor(Math.random() * messages.length)]

  return createPortal(
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-[9999]"
          style={{ position: 'fixed' }}
        >
          <div className="relative bg-[#1a1a2e] backdrop-blur-lg border-2 border-accent/30 rounded-2xl p-5 shadow-2xl shadow-accent/20">
            {/* Zavírací tlačítko */}
            <button
              onClick={handleDecline}
              className="absolute top-3 right-3 text-gray-500 hover:text-white transition-colors"
              aria-label="Zavřít"
            >
              <X size={18} />
            </button>

            {/* Obsah */}
            <div className="flex items-start gap-3">
              <Cookie className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" strokeWidth={2} />
              <div className="flex-1">
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
                Jasně, v pohodě
              </button>
              <button
                onClick={handleDecline}
                className="px-4 py-2.5 text-gray-400 hover:text-white border border-gray-700 hover:border-gray-500 rounded-xl transition-all duration-200"
              >
                Radši ne
              </button>
            </div>

            {/* Odkaz na GDPR nebo zpět na prodejku */}
            <p className="text-xs text-gray-600 mt-3 text-center">
              {isGdprPage ? (
                <a href="/" className="text-[#22c55e] hover:text-[#16a34a] font-semibold underline transition-colors">
                  Super, chci zpátky
                </a>
              ) : (
                <>
                  Více info v{' '}
                  <a href="/gdpr" className="text-gray-500 hover:text-[#22c55e] underline transition-colors">
                    Zásadách ochrany osobních údajů
                  </a>
                </>
              )}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  )
}
