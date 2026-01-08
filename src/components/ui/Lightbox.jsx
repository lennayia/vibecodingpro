import { useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

/**
 * Lightbox component for displaying full-size images
 * Features:
 * - Lazy loading (full image loads only when opened)
 * - ESC key to close
 * - Click outside to close
 * - GPU-accelerated animations
 */
export default function Lightbox({ isOpen, onClose, imageSrc, imageAlt = '' }) {
  // Close on ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose()
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEsc)
      // Prevent body scroll when lightbox is open
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEsc)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  const handleBackdropClick = useCallback((e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }, [onClose])

  if (!isOpen) return null

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={handleBackdropClick}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-[10001] text-white hover:text-accent transition-colors p-2 rounded-full bg-black/50 hover:bg-black/70"
            aria-label="Zavřít"
          >
            <X size={24} strokeWidth={2} />
          </button>

          {/* Image container */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="max-w-[90vw] max-h-[90vh] flex items-center justify-center"
          >
            <img
              src={imageSrc}
              alt={imageAlt}
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              loading="lazy"
            />
          </motion.div>

          {/* Click hint */}
          <p className="absolute bottom-4 text-white/70 text-sm">
            Klikněte kamkoliv nebo stiskněte ESC pro zavření
          </p>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  )
}
