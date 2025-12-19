import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, ArrowDown } from 'lucide-react'
import Section from '../layout/Section'
import Badge from '../ui/Badge'
import { phases } from '../../constants/data'
import { fadeIn } from '../../constants/animations'

// Group phases by package
const phaseSlides = [
  { package: 'VIBE', phases: phases.slice(0, 3) },
  { package: 'VIBE', phases: phases.slice(3, 6) },
  { package: 'VIBE+CODING', phases: phases.slice(6, 9) },
  { package: 'VIBECODING VIP', phases: phases.slice(9, 12) }
]

// Mobile: 2 phases per slide
const mobilePhaseSlides = [
  { package: 'VIBE', phases: phases.slice(0, 2) },
  { package: 'VIBE', phases: phases.slice(2, 4) },
  { package: 'VIBE', phases: phases.slice(4, 6) },
  { package: 'VIBE+CODING', phases: phases.slice(6, 8) },
  { package: 'VIBE+CODING', phases: phases.slice(8, 9).concat(phases.slice(9, 10)) },
  { package: 'VIBECODING VIP', phases: phases.slice(10, 12) }
]

export default function Phases() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [showArrows, setShowArrows] = useState(true)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1200)
      setShowArrows(window.innerWidth >= 600)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const slides = isMobile ? mobilePhaseSlides : phaseSlides

  // Reset slide when switching between mobile/desktop (must be before other effects)
  useEffect(() => {
    setCurrentSlide(0)
  }, [isMobile])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  // Safety check
  if (!slides[currentSlide]) {
    return null
  }

  return (
    <Section background="light" className="min-h-screen flex items-center justify-center !pt-4 !pb-8 md:!pt-4 md:!pb-8 lg:!pt-8 lg:!pb-16" showScrollIndicator={true}>
      <div id="phases-section" className="w-full">
        <motion.div {...fadeIn}>
          <h2 className="font-display font-bold mb-4 md:mb-6 text-center" style={{ lineHeight: '1.3' }}>
            Společně rozběhneme tvorbu
          </h2>
          <p className="mb-6 text-center max-w-3xl mx-auto text-xl font-light">
            Krok za krokem od nápadu až po funkční digi-nástroj
          </p>

          {/* Carousel Container */}
          <div className="max-w-5xl mx-auto relative px-4 min-[600px]:px-12 min-[1200px]:px-16">
            {/* Package Badge with Arrows */}
            <div className="relative flex items-center justify-center gap-4 mb-6">
              <button
                onClick={prevSlide}
                className="bg-accent/10 rounded-full p-2 cursor-pointer hover:bg-accent/20 transition-colors"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6 text-accent" strokeWidth={2} />
              </button>

              <motion.div
                key={slides[currentSlide].package}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-accent/10 blur-lg animate-pulse" />
                <span className="relative font-display font-bold text-2xl md:text-3xl text-accent drop-shadow-[0_0_20px_rgba(0,255,136,0.6)]">
                  varianta {slides[currentSlide].package}
                </span>
              </motion.div>

              <button
                onClick={nextSlide}
                className="bg-accent/10 rounded-full p-2 cursor-pointer hover:bg-accent/20 transition-colors"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6 text-accent" strokeWidth={2} />
              </button>
            </div>

            {/* Carousel */}
            <div className="relative overflow-hidden min-h-[500px] min-[600px]:min-h-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.3 }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={(e, { offset, velocity }) => {
                    const swipe = Math.abs(offset.x) * velocity.x
                    if (swipe < -500) {
                      nextSlide()
                    } else if (swipe > 500) {
                      prevSlide()
                    }
                  }}
                  className="min-[600px]:static"
                >
                  <div className="space-y-0 min-[600px]:space-y-3 min-[1200px]:space-y-3">
                    {slides[currentSlide].phases.map((phase, index) => (
                      <div key={phase.number} className="relative">
                        {/* Phase Card */}
                        <div className={`w-full min-[600px]:w-5/6 min-[1200px]:w-2/3 mx-auto ${index % 2 === 0 ? 'min-[600px]:ml-0 min-[600px]:mr-auto' : 'min-[600px]:ml-auto min-[600px]:mr-0'} ${index > 0 && !isMobile ? 'min-[600px]:-mt-12 min-[1200px]:mt-0' : ''}`}>
                          <div className="group relative bg-[#f2f2f2] dark:bg-[#070716] rounded-2xl min-[600px]:rounded-3xl p-3 hover:scale-[1.01] transition-all duration-300 border-2 border-gray-200 dark:border-[#05050f] hover:border-accent/30 overflow-hidden min-[600px]:min-h-0 flex flex-col">
                            {/* Holographic glow on hover */}
                            <motion.div
                              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                              style={{
                                background: 'radial-gradient(circle at 50% 50%, rgba(0, 255, 136, 0.1), transparent 70%)',
                                pointerEvents: 'none',
                              }}
                            />

                            {/* Header */}
                            <div className="flex items-start gap-3 mb-3 relative z-10">
                              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 border-2 border-accent/30 flex-shrink-0">
                                <phase.Icon className="w-6 h-6 text-accent" strokeWidth={1.5} />
                              </div>
                              <div className="flex-1">
                                <span className="font-display font-bold text-accent text-xl min-[600px]:text-2xl">
                                  {phase.number}
                                </span>
                                <h3 className="font-display font-bold text-lg min-[600px]:text-xl mt-0.5 min-[600px]:mt-1">
                                  {phase.title}
                                </h3>
                              </div>
                            </div>

                            {/* Split Content */}
                            <div className="space-y-2 relative z-10 flex-1 flex flex-col justify-start">
                              {/* Your Action */}
                              <div className="bg-white/50 dark:bg-black/20 rounded-lg min-[600px]:rounded-xl px-2 pt-1 pb-0.5 border border-gray-200 dark:border-gray-800">
                                <div className="flex items-start gap-2">
                                  <span className="text-xs min-[600px]:text-sm font-semibold text-accent flex-shrink-0">Vy:</span>
                                  <p className="text-xs min-[600px]:text-sm flex-1">{phase.yourAction}</p>
                                </div>
                              </div>

                              {/* My Support */}
                              <div className="bg-accent/5 dark:bg-accent/10 rounded-lg min-[600px]:rounded-xl px-2 pt-1 pb-0.5 border border-accent/20">
                                <div className="flex items-start gap-2">
                                  <span className="text-xs min-[600px]:text-sm font-semibold text-accent flex-shrink-0">{phase.supportLabel || "Já"}:</span>
                                  <p className="text-xs min-[600px]:text-sm flex-1">{phase.mySupport}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Diagonal Arrow between phases - only on desktop with multiple phases */}
                        {showArrows && index < slides[currentSlide].phases.length - 1 && (
                          <div className={`w-5/6 min-[1200px]:w-2/3 mx-auto ${index % 2 === 0 ? 'ml-0 mr-auto' : 'ml-auto mr-0'}`}>
                            <div className={`flex ${index % 2 === 0 ? 'justify-start pl-20 min-[1200px]:pl-56' : 'justify-end pr-40 min-[1200px]:pr-64'} py-2`}>
                              <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 + index * 0.1 }}
                              >
                                <ArrowDown className="w-8 h-8 text-accent" strokeWidth={2} style={{ transform: index % 2 === 0 ? 'rotate(-45deg)' : 'rotate(45deg)' }} />
                              </motion.div>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-3 mt-6 flex-wrap max-w-md mx-auto">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`rounded-full cursor-pointer ${
                    index === currentSlide
                      ? 'bg-accent w-12 h-3'
                      : 'bg-gray-400 dark:bg-gray-600 w-3 h-3'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
