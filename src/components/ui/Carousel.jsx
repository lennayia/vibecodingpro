import { motion, AnimatePresence } from 'framer-motion'
import { useState, useCallback, useRef, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

/**
 * Carousel - Modulární komponenta pro karusely s peek efektem na mobilu
 *
 * Mobile: Swipe carousel s peek efektem a touch podporou
 * Desktop: Animovaný carousel s šipkami a dots navigací
 *
 * @param {Array} slides - Pole dat pro jednotlivé slides
 * @param {Function} renderSlide - Render funkce pro každý slide (item, index) => JSX
 * @param {string} mobileCardWidth - Šířka karty na mobilu (default: "75%")
 * @param {string} tabletCardWidth - Šířka karty na tabletu (default: "85%")
 * @param {number} gap - Mezera mezi kartami v px (default: 3 = 12px)
 * @param {boolean} showArrows - Zobrazit navigační šipky na desktopu (default: true)
 * @param {boolean} showDots - Zobrazit dots indikátor na desktopu (default: true)
 * @param {boolean} dragEnabled - Povolit drag/swipe (default: true)
 * @param {number} initialSlide - Počáteční slide index (default: 0)
 * @param {string} className - Dodatečné CSS třídy pro wrapper
 */
export default function Carousel({
  slides = [],
  renderSlide,
  mobileCardWidth = "75%",
  tabletCardWidth = "85%",
  gap = 3,
  showArrows = true,
  showDots = true,
  dragEnabled = true,
  initialSlide = 0,
  className = ""
}) {
  // Convert gap number to actual px value (gap-3 = 12px, gap-4 = 16px, etc.)
  const gapMap = {
    1: '4px',
    2: '8px',
    3: '12px',
    4: '16px',
    5: '20px',
    6: '24px',
    8: '32px'
  }
  const gapPx = gapMap[gap] || '12px'

  // Generate unique class name for this instance
  const carouselId = `carousel-${Math.random().toString(36).substr(2, 9)}`

  const [currentSlide, setCurrentSlide] = useState(initialSlide)
  const scrollContainerRef = useRef(null)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)
  const scrollTimeout = useRef(null)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }, [slides.length])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }, [slides.length])

  const handleDragEnd = useCallback((e, { offset, velocity }) => {
    if (!dragEnabled) return

    const swipe = Math.abs(offset.x) * velocity.x
    if (swipe < -500) {
      nextSlide()
    } else if (swipe > 500) {
      prevSlide()
    }
  }, [dragEnabled, nextSlide, prevSlide])

  // Track scroll position to update currentSlide for dots indicator
  const handleScroll = useCallback(() => {
    if (!scrollContainerRef.current) return

    // Clear previous timeout
    if (scrollTimeout.current) {
      clearTimeout(scrollTimeout.current)
    }

    // Wait for scroll to settle before updating currentSlide
    scrollTimeout.current = setTimeout(() => {
      const container = scrollContainerRef.current
      if (!container) return

      const scrollLeft = container.scrollLeft
      const cardWidth = container.children[0]?.offsetWidth || 0
      const gap = parseInt(gapPx) || 0

      // Calculate which slide is currently centered
      const slideIndex = Math.round(scrollLeft / (cardWidth + gap))
      setCurrentSlide(Math.min(slideIndex, slides.length - 1))
    }, 150) // Debounce scroll updates
  }, [slides.length, gapPx])

  // Update scroll position when currentSlide changes programmatically (dots click, etc.)
  useEffect(() => {
    if (!scrollContainerRef.current) return

    const container = scrollContainerRef.current
    const cardWidth = container.children[0]?.offsetWidth || 0
    const gap = parseInt(gapPx) || 0

    const scrollPosition = currentSlide * (cardWidth + gap)
    container.scrollTo({
      left: scrollPosition,
      behavior: 'smooth'
    })
  }, [currentSlide, gapPx])

  if (!slides || slides.length === 0) {
    return null
  }

  return (
    <div className={`relative max-w-2xl mx-auto ${className}`}>
      {/* Responsive width styles */}
      <style>{`
        .${carouselId} .carousel-card {
          width: ${mobileCardWidth};
        }
        @media (min-width: 640px) {
          .${carouselId} .carousel-card {
            width: ${tabletCardWidth};
          }
        }
      `}</style>

      {/* Carousel Container */}
      <div className={`relative ${carouselId}`}>
        {/* Mobile: Swipe carousel with peek effect - Apple-like */}
        <div className="md:hidden relative overflow-visible pl-2">
          {/* Main card container - positioned left with peek on right */}
          <div className="relative" style={{ width: '85%' }}>
            <AnimatePresence initial={false} mode="popLayout">
              <motion.div
                key={currentSlide}
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -300, opacity: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.1}
                onDragEnd={(e, { offset, velocity }) => {
                  // Very sensitive - low threshold like Apple
                  if (offset.x > 50 || velocity.x > 500) {
                    // Swipe right - previous (infinite loop)
                    prevSlide()
                  } else if (offset.x < -50 || velocity.x < -500) {
                    // Swipe left - next (infinite loop)
                    nextSlide()
                  }
                }}
              >
                {renderSlide(slides[currentSlide], currentSlide)}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Peek card - next (right) - Always show with infinite loop */}
          {slides.length > 1 && (
            <div
              className="absolute right-0 top-0 bottom-0 pointer-events-none"
              style={{
                width: '25%',
                opacity: 0.4,
                zIndex: -1
              }}
            >
              {renderSlide(slides[(currentSlide + 1) % slides.length], (currentSlide + 1) % slides.length)}
            </div>
          )}

          {/* Mobile dots indicator */}
          {showDots && slides.length > 1 && (
            <div className="flex justify-center gap-2 mt-6">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`rounded-full cursor-pointer transition-all ${
                    index === currentSlide
                      ? 'bg-accent w-8 h-2'
                      : 'bg-gray-400 dark:bg-gray-600 w-2 h-2'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Desktop: animated carousel */}
        <div className="hidden md:block relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              {...(dragEnabled && {
                drag: "x",
                dragConstraints: { left: 0, right: 0 },
                dragElastic: 0.2,
                onDragEnd: handleDragEnd
              })}
            >
              {renderSlide(slides[currentSlide], currentSlide)}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Arrows - desktop only */}
      {showArrows && slides.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="hidden md:block absolute left-0 top-1/2 bg-white/90 dark:bg-accent/10 border border-gray-300 dark:border-accent/30 rounded-full p-2 z-20 cursor-pointer hover:bg-white dark:hover:bg-accent/20 transition-colors"
            style={{
              transform: 'translate(-1rem, -50%)',
              transition: 'none'
            }}
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-accent" strokeWidth={2} />
          </button>
          <button
            onClick={nextSlide}
            className="hidden md:block absolute right-0 top-1/2 bg-white/90 dark:bg-accent/10 border border-gray-300 dark:border-accent/30 rounded-full p-2 z-20 cursor-pointer hover:bg-white dark:hover:bg-accent/20 transition-colors"
            style={{
              transform: 'translate(1rem, -50%)',
              transition: 'none'
            }}
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-accent" strokeWidth={2} />
          </button>
        </>
      )}

      {/* Dots Indicator - desktop only */}
      {showDots && slides.length > 1 && (
        <div className="hidden md:flex justify-center gap-3 mt-3 mb-6">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`rounded-full cursor-pointer ${
                index === currentSlide
                  ? 'bg-accent w-12 h-3'
                  : 'bg-gray-400 dark:bg-gray-600 w-5 h-5'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
