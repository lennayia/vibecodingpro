import { motion, AnimatePresence } from 'framer-motion'
import { BookOpen, Lightbulb, Route, Tag, ChevronRight } from 'lucide-react'
import { scrollToSection } from '../../utils/scroll'
import ThemeToggle from './ThemeToggle'

export default function SlideOutMenu({ isOpen, onClose }) {
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
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[10000]"
            onClick={onClose}
          />

          {/* Slide-out menu with glassmorphism - icon only */}
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
            style={{ right: 0, left: 'auto' }}
            className="fixed top-0 h-full w-16 bg-white/80 dark:bg-[#0a0a1a]/80 backdrop-blur-xl border-l border-white/60 dark:border-accent/30 shadow-2xl z-[99999] flex flex-col cursor-grab active:cursor-grabbing"
          >
            {/* Glass shine overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />

            {/* Menu content */}
            <div className="relative z-[100000] flex-1 flex flex-col pt-4 gap-4 items-center">
              {/* Close button - elegant arrow */}
              <button
                onClick={onClose}
                className="relative p-2 rounded-lg hover:opacity-80 transition-opacity group"
                aria-label="Zavřít menu"
              >
                <ChevronRight className="w-9 h-9 text-gray-900 dark:text-white" strokeWidth={2.5} />

                {/* Tooltip */}
                <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                  Zavřít
                </span>
              </button>

              {/* Divider */}
              <div className="border-t border-white/30 dark:border-accent/20 w-10" />

              {/* Theme toggle - centered */}
              <div className="flex justify-center">
                <ThemeToggle />
              </div>

              {/* Divider */}
              <div className="border-t border-white/30 dark:border-accent/20 w-10" />

              {/* Navigation links - icon only with tooltips */}
              <nav className="flex flex-col gap-2">
                {anchorLinks.map((link) => {
                  const Icon = link.icon
                  return (
                    <button
                      key={link.id}
                      onClick={() => handleLinkClick(link.id)}
                      className="relative p-2 rounded-lg hover:opacity-80 transition-opacity group"
                      aria-label={link.label}
                    >
                      <Icon className="w-9 h-9 text-gray-900 dark:text-white" strokeWidth={2.5} />

                      {/* Tooltip - vlevo od ikony */}
                      <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                        {link.label}
                      </span>
                    </button>
                  )
                })}
              </nav>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
