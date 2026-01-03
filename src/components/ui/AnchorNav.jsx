import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { scrollToSection } from '../../utils/scroll'

export default function AnchorNav() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  const links = [
    { id: 'story', label: 'Příběh' },
    { id: 'what-you-can-create', label: 'Co vytvoříte' },
    { id: 'process', label: 'Proces' },
    { id: 'pricing-section', label: 'Ceník' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      // Show menu after scrolling down 100px (reduced from 300px)
      setIsVisible(window.scrollY > 100)

      // Update active section based on scroll position
      const sections = links.map(link => ({
        id: link.id,
        element: document.getElementById(link.id)
      })).filter(s => s.element)

      // Find which section is currently in view
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        const rect = section.element.getBoundingClientRect()

        // Section is considered active if it's in the top 40% of the viewport
        if (rect.top <= window.innerHeight * 0.4) {
          setActiveSection(section.id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Check initial state

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = (id) => {
    scrollToSection(id)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-4 left-1/2 -translate-x-1/2 z-40"
        >
          {/* Glassmorphism container */}
          <div className="relative px-4 py-2 bg-white/40 dark:bg-[#070716]/30 backdrop-blur-xl rounded-full border border-white/60 dark:border-accent/20 shadow-lg shadow-accent/5">
            {/* Gradient shine overlay */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />

            {/* Navigation links */}
            <ul className="relative z-10 flex items-center gap-2 md:gap-4">
              {links.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleClick(link.id)}
                    className={`
                      relative px-3 py-1.5 text-sm md:text-base font-medium rounded-full
                      transition-all duration-300
                      ${activeSection === link.id
                        ? 'text-white dark:text-black'
                        : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                      }
                    `}
                  >
                    {/* Active background */}
                    {activeSection === link.id && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute inset-0 bg-accent dark:bg-accent-dark rounded-full -z-10"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  )
}
