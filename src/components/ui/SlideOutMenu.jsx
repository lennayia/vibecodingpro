import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, AlignRight } from 'lucide-react'
import { scrollToSection } from '../../utils/scroll'
import { useState, useEffect, useCallback } from 'react'
import Tooltip from './Tooltip'
import { anchorLinks } from '../../constants/data'

export default function SlideOutMenu({ isOpen, onOpen, onClose }) {
  const [activeSection, setActiveSection] = useState('')
  const [dragStartPos, setDragStartPos] = useState(null)

  // Track active section with Intersection Observer
  useEffect(() => {
    const sections = anchorLinks.map(link => link.id)

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

  const handleLinkClick = useCallback((id) => {
    scrollToSection(id)
    onClose()
  }, [onClose])

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
          className="hover:opacity-80 transition-opacity"
          aria-label="Otevřít menu"
        >
          <AlignRight className="nav-icon-fluid text-gray-900 dark:text-white" strokeWidth={2.5} />
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
            className="menu-panel flex flex-col items-center py-4 gap-4 cursor-grab active:cursor-grabbing"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="relative p-2 rounded-lg hover:opacity-80 transition-opacity group"
              aria-label="Zavřít menu"
            >
              <ChevronRight className="nav-icon-fluid text-[#2E2E2E] dark:text-white" strokeWidth={2.5} />
              <Tooltip text="Zavřít" />
            </button>

            {/* Divider */}
            <div className="menu-divider" />

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
                      className={`nav-icon-fluid transition-colors ${
                        activeSection === link.id
                          ? 'text-[#B56C4E] dark:text-[#0DDD0D]'
                          : 'text-[#2E2E2E] dark:text-white'
                      }`}
                      strokeWidth={activeSection === link.id ? 3 : 2.5}
                    />
                    <Tooltip text={link.label} />
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