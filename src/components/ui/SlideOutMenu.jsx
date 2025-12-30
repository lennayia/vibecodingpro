import { motion, AnimatePresence } from 'framer-motion'
import { BookOpen, Lightbulb, Route, Tag, ChevronRight, AlignRight } from 'lucide-react'
import { scrollToSection } from '../../utils/scroll'
import ThemeToggle from './ThemeToggle'

export default function SlideOutMenu({ isOpen, onOpen, onClose }) {
  const anchorLinks = [
    { id: 'story', label: 'Příběh', icon: BookOpen },
    { id: 'what-you-can-create', label: 'Co vytvoříte', icon: Lightbulb },
    { id: 'process', label: 'Proces', icon: Route },
    { id: 'pricing-section', label: 'Ceník', icon: Tag }
  ]

  const handleLinkClick = (id) => {
    scrollToSection(id)
    onClose()
  }

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
          <>
            {/* Neviditelná dotykové oblast pro swipe - zavře menu při tažení jakýmkoliv směrem */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              drag
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              dragElastic={0.1}
              onDragStart={() => {
                // Při jakémkoliv tažení zavřít menu
                onClose()
              }}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: '4rem',
                height: '100vh',
                zIndex: 99998,
                cursor: 'default'
              }}
            />

            <motion.div
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
              background: 'rgba(7, 7, 22, 0.6)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              boxShadow: '-10px 0 40px rgba(0, 0, 205, 0.3), -5px 0 20px rgba(0, 0, 205, 0.2)',
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
              <ChevronRight className="w-8 h-8 text-white" strokeWidth={2.5} />
              <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                Zavřít
              </span>
            </button>

            {/* Divider */}
            <div style={{ width: '32px', height: '1px', background: 'rgba(0, 0, 205, 0.4)' }} />

            {/* Theme toggle */}
            <div className="flex justify-center">
              <ThemeToggle />
            </div>

            {/* Divider */}
            <div style={{ width: '32px', height: '1px', background: 'rgba(0, 0, 205, 0.4)' }} />

            {/* Navigation links */}
            <nav className="flex flex-col gap-1">
              {anchorLinks.map((link) => {
                const Icon = link.icon
                return (
                  <button
                    key={link.id}
                    onClick={() => handleLinkClick(link.id)}
                    className="relative p-2 rounded-lg hover:opacity-80 transition-opacity group"
                    aria-label={link.label}
                  >
                    <Icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                    <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                      {link.label}
                    </span>
                  </button>
                )
              })}
            </nav>
          </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}