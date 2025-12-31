import { motion, AnimatePresence } from 'framer-motion'
import { BookOpen, Lightbulb, Route, Tag, ChevronRight, AlignRight } from 'lucide-react'
import { scrollToSection } from '../../utils/scroll'
import ThemeToggle from './ThemeToggle'
import { useState, useEffect } from 'react'

export default function SlideOutMenu({ isOpen, onOpen, onClose }) {
  const [isDark, setIsDark] = useState(true)
  const [activeSection, setActiveSection] = useState('')
  const [dragStartPos, setDragStartPos] = useState(null)

  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains('dark'))
    }
    checkTheme()
    const observer = new MutationObserver(checkTheme)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
    return () => observer.disconnect()
  }, [])

  // Track active section with Intersection Observer
  useEffect(() => {
    const sections = ['what-you-can-create', 'story', 'process', 'pricing-section']

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the most visible section
        let maxRatio = 0
        let mostVisible = null

        entries.forEach(entry => {
          if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio
            mostVisible = entry.target.id
          }
        })

        // Set active if we found any visible section (even partially)
        if (mostVisible && maxRatio > 0.15) {
          setActiveSection(mostVisible)
        } else if (maxRatio === 0) {
          // Clear active if no sections are visible
          setActiveSection('')
        }
      },
      { threshold: [0, 0.1, 0.2, 0.3, 0.5, 0.75, 1], rootMargin: '-15% 0px -40% 0px' }
    )

    sections.forEach(id => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const anchorLinks = [
    { id: 'what-you-can-create', label: 'Co vytvoříte', icon: Lightbulb },
    { id: 'story', label: 'Příběh', icon: BookOpen },
    { id: 'process', label: 'Proces', icon: Route },
    { id: 'pricing-section', label: 'Ceník', icon: Tag }
  ]

  const handleLinkClick = (id) => {
    scrollToSection(id)
    onClose()
  }

  // Window-level drag detection to close menu
  useEffect(() => {
    if (!isOpen) return

    const handlePointerDown = (e) => {
      // Ignore if clicking on the menu itself
      const menuElement = document.querySelector('[data-menu-panel]')
      if (menuElement && menuElement.contains(e.target)) return

      setDragStartPos({ x: e.clientX, y: e.clientY })
    }

    const handlePointerMove = (e) => {
      if (dragStartPos) {
        const deltaX = Math.abs(e.clientX - dragStartPos.x)
        const deltaY = Math.abs(e.clientY - dragStartPos.y)
        if (deltaX > 30 || deltaY > 30) {
          onClose()
          setDragStartPos(null)
        }
      }
    }

    const handlePointerUp = () => {
      setDragStartPos(null)
    }

    window.addEventListener('pointerdown', handlePointerDown)
    window.addEventListener('pointermove', handlePointerMove)
    window.addEventListener('pointerup', handlePointerUp)

    return () => {
      window.removeEventListener('pointerdown', handlePointerDown)
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerup', handlePointerUp)
    }
  }, [isOpen, dragStartPos, onClose])

  return (
    <>
      {/* Hamburger button - v hlavičce (skryté když je menu otevřené) */}
      {!isOpen && (
        <button
          onClick={onOpen}
          className="p-2 rounded-lg hover:opacity-80 transition-opacity"
          aria-label="Otevřít menu"
        >
          <AlignRight className="w-8 h-8 text-gray-900 dark:text-white" strokeWidth={2.5} />
        </button>
      )}

      {/* Plovoucí slider menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            data-menu-panel
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={{ left: 0, right: 0.5 }}
            onDragEnd={(e, { offset, velocity }) => {
              // Zavřít menu pokud je taženo víc než 100px doprava nebo rychlost > 500
              if (offset.x > 100 || velocity.x > 500) {
                onClose()
              }
            }}
            style={{
              position: 'fixed',
              top: '0.5rem',
              right: 0,
              width: '4rem',
              zIndex: 99999,
              background: isDark ? 'rgba(7, 7, 22, 0.6)' : 'rgba(255, 253, 249, 0.85)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              boxShadow: isDark
                ? '-10px 0 40px rgba(0, 0, 205, 0.3), -5px 0 20px rgba(0, 0, 205, 0.2)'
                : '-10px 0 40px rgba(181, 108, 78, 0.2), -5px 0 20px rgba(181, 108, 78, 0.15)',
              borderRadius: '12px 0 0 12px'
            }}
            className="flex flex-col items-center py-4 gap-4 cursor-grab active:cursor-grabbing"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="relative p-2 rounded-lg hover:opacity-80 transition-opacity group"
              aria-label="Zavřít menu"
            >
              <ChevronRight className="w-8 h-8 text-[#2E2E2E] dark:text-white" strokeWidth={2.5} />
              <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                Zavřít
              </span>
            </button>

            {/* Divider */}
            <div style={{ width: '32px', height: '1px', background: isDark ? 'rgba(0, 0, 205, 0.4)' : 'rgba(181, 108, 78, 0.3)' }} />

            {/* Theme toggle */}
            <div className="flex justify-center">
              <ThemeToggle />
            </div>

            {/* Divider */}
            <div style={{ width: '32px', height: '1px', background: isDark ? 'rgba(0, 0, 205, 0.4)' : 'rgba(181, 108, 78, 0.3)' }} />

            {/* Navigation links */}
            <nav className="flex flex-col gap-3">
              {anchorLinks.map((link) => {
                const Icon = link.icon
                return (
                  <button
                    key={link.id}
                    onClick={() => handleLinkClick(link.id)}
                    className="relative p-2 rounded-lg hover:opacity-80 transition-all group"
                    aria-label={link.label}
                  >
                    <Icon
                      className={`w-8 h-8 transition-colors ${
                        activeSection === link.id
                          ? 'text-[#B56C4E] dark:text-[#0DDD0D]'
                          : 'text-[#2E2E2E] dark:text-white'
                      }`}
                      strokeWidth={activeSection === link.id ? 3 : 2.5}
                    />
                    <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                      {link.label}
                    </span>
                  </button>
                )
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}