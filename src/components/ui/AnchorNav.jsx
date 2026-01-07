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
    // Handle menu visibility on scroll
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    // Use IntersectionObserver for section detection (no forced reflow!)
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -60% 0px', // Section is active when in top 40% of viewport
      threshold: 0
    }

    const observerCallback = (entries) => {
      // Find the most visible section
      const visibleSections = entries
        .filter(entry => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

      if (visibleSections.length > 0) {
        setActiveSection(visibleSections[0].target.id)
      }
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    // Observe all sections
    links.forEach(link => {
      const element = document.getElementById(link.id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      observer.disconnect()
    }
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
