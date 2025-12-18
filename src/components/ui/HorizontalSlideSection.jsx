import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef, useCallback } from 'react'
import { ChevronDown } from 'lucide-react'

/**
 * HorizontalSlideSection - Modulární komponenta pro horizontální slides
 *
 * Desktop: Horizontální slides s navigací kolečkem myši
 * Mobile: Klasické vertikální zobrazení
 *
 * @param {Array} slides - Pole React elementů pro jednotlivé slides
 * @param {number} mobileBreakpoint - Šířka viewportu pro mobile (default: 768)
 * @param {boolean} enableWheelNavigation - Povolit navigaci kolečkem (default: true)
 */
export default function HorizontalSlideSection({
  slides = [],
  mobileBreakpoint = 768,
  enableWheelNavigation = true,
  mobileLayout = null, // Vlastní layout pro mobile
  showScrollArrow = true, // Zobrazit šipku na posledním slidu
  className = ''
}) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [isInViewport, setIsInViewport] = useState(true)
  const sectionRef = useRef(null)
  const isScrollingRef = useRef(false)
  const totalSlides = slides.length
  const isLastSlide = currentSlide === totalSlides - 1

  // Handle scroll to next section
  const handleScrollToNext = useCallback(() => {
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })
  }, [])

  // Handle swipe/drag to change slides (both horizontal and vertical)
  const handleDragEnd = (e, { offset, velocity }) => {
    const swipeX = Math.abs(offset.x) * velocity.x
    const swipeY = Math.abs(offset.y) * velocity.y

    // Swipe left OR down = next slide
    if (swipeX < -500 || swipeY < -500) {
      if (currentSlide < totalSlides - 1) {
        setCurrentSlide(prev => prev + 1)
      }
    }
    // Swipe right OR up = previous slide
    else if (swipeX > 500 || swipeY > 500) {
      if (currentSlide > 0) {
        setCurrentSlide(prev => prev - 1)
      }
    }
  }

  // Detect mobile screens
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < mobileBreakpoint)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [mobileBreakpoint])

  // Track if section is in viewport
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const rect = sectionRef.current.getBoundingClientRect()
      const inView = rect.top < window.innerHeight && rect.bottom > 0
      setIsInViewport(inView)
    }

    handleScroll() // Initial check
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Horizontal scroll with mouse wheel (desktop only)
  useEffect(() => {
    if (!enableWheelNavigation || isMobile) return

    const handleWheel = (e) => {
      if (!sectionRef.current) return

      const rect = sectionRef.current.getBoundingClientRect()
      // Check if section is the active one (center of viewport is within section)
      const viewportCenter = window.innerHeight / 2
      const isActive = rect.top < viewportCenter && rect.bottom > viewportCenter

      if (!isActive) return

      if (isScrollingRef.current) {
        e.preventDefault()
        return
      }

      if (e.deltaY > 0) {
        // Scrolling down
        if (currentSlide < totalSlides - 1) {
          e.preventDefault()
          isScrollingRef.current = true
          setCurrentSlide(prev => prev + 1)
          setTimeout(() => {
            isScrollingRef.current = false
          }, 800)
        }
      } else if (e.deltaY < 0) {
        // Scrolling up
        if (currentSlide > 0) {
          e.preventDefault()
          isScrollingRef.current = true
          setCurrentSlide(prev => prev - 1)
          setTimeout(() => {
            isScrollingRef.current = false
          }, 800)
        }
      }
    }

    window.addEventListener('wheel', handleWheel, { passive: false })
    return () => window.removeEventListener('wheel', handleWheel)
  }, [currentSlide, isMobile, enableWheelNavigation, totalSlides])

  return (
    <div ref={sectionRef} className={`relative w-full h-full ${className}`} style={{ position: 'relative' }}>
      {/* Mobile: Vertical layout */}
      {isMobile ? (
        mobileLayout || (
          <div className="flex flex-col gap-8 md:gap-12">
            {slides.map((slide, index) => (
              <div key={index}>{slide}</div>
            ))}
          </div>
        )
      ) : (
        /* Desktop: Horizontal slides with horizontal & vertical swipe support */
        <div className="w-full h-full flex flex-col">
          <div className="flex-1 min-h-0 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                drag
                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                dragElastic={0.2}
                onDragEnd={handleDragEnd}
                className="w-full h-full cursor-grab active:cursor-grabbing"
              >
                {slides[currentSlide]}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Scroll arrow - appears on last slide */}
          {showScrollArrow && isLastSlide && (
            <div className="w-full flex justify-center items-end pb-4" style={{ height: 'clamp(6rem, 12vh, 10rem)' }}>
              <motion.button
                onClick={handleScrollToNext}
                className="flex items-center justify-center rounded-full bg-accent/20 hover:bg-accent/30 backdrop-blur-sm border-2 border-accent transition-all cursor-pointer"
                style={{
                  width: 'clamp(3rem, 6vh, 4rem)',
                  height: 'clamp(3rem, 6vh, 4rem)'
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: 1,
                  scale: [1, 1.15, 1],
                  y: [0, 10, 0]
                }}
                transition={{
                  opacity: { duration: 0.3 },
                  scale: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  },
                  y: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
                whileHover={{ scale: 1.2 }}
                aria-label="Scroll to next section"
              >
                <ChevronDown
                  className="text-accent"
                  strokeWidth={3}
                  style={{
                    width: 'clamp(1.5rem, 4vh, 2rem)',
                    height: 'clamp(1.5rem, 4vh, 2rem)',
                    filter: 'drop-shadow(0 0 8px rgba(0, 255, 136, 0.5))'
                  }}
                />
              </motion.button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
