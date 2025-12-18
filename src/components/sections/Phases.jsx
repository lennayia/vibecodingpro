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

// Mobile: 1 phase per slide
const mobilePhaseSlides = phases.map((phase, index) => {
  let packageName = 'VIBE'
  if (index >= 6 && index < 9) packageName = 'VIBE+CODING'
  else if (index >= 9) packageName = 'VIBECODING VIP'
  return { package: packageName, phases: [phase] }
})

export default function Phases() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 668)
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
          <h2 className="font-display font-bold mb-6 md:mb-8 text-center" style={{ lineHeight: '1.3' }}>
            Společně rozběhneme tvorbu
          </h2>
          <p className="mb-8 text-center max-w-3xl mx-auto text-xl font-light">
            Krok za krokem od nápadu až po funkční digi-nástroj
          </p>

          {/* Carousel Container */}
          <div className="max-w-5xl mx-auto relative px-4 md:px-12 lg:px-16">
            {/* Package Badge */}
            <div className="text-center mb-6">
              <Badge>{slides[currentSlide].package}</Badge>
            </div>

            {/* Carousel */}
            <div className="relative overflow-hidden min-h-[500px] md:min-h-0">
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
                  className="md:static"
                >
                  <div className="space-y-6">
                    {slides[currentSlide].phases.map((phase, index) => (
                      <div key={phase.number} className="relative">
                        {/* Phase Card */}
                        <div className={`w-full md:w-5/6 lg:w-2/3 mx-auto ${index % 2 === 0 ? 'md:ml-0 md:mr-auto' : 'md:ml-auto md:mr-0'}`}>
                          <div className="group relative bg-[#f2f2f2] dark:bg-[#070716] rounded-2xl md:rounded-3xl p-4 md:p-6 hover:scale-[1.01] transition-all duration-300 border-2 border-gray-200 dark:border-[#05050f] hover:border-accent/30 overflow-hidden min-h-[420px] md:min-h-0 flex flex-col">
                            {/* Holographic glow on hover */}
                            <motion.div
                              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                              style={{
                                background: 'radial-gradient(circle at 50% 50%, rgba(0, 255, 136, 0.1), transparent 70%)',
                                pointerEvents: 'none',
                              }}
                            />

                            {/* Header */}
                            <div className="flex items-start gap-3 md:gap-4 mb-3 md:mb-4 relative z-10">
                              <div className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-accent/10 border-2 border-accent/30 flex-shrink-0">
                                <phase.Icon className="w-6 h-6 md:w-8 md:h-8 text-accent" strokeWidth={1.5} />
                              </div>
                              <div className="flex-1">
                                <span className="font-display font-bold text-accent text-xl md:text-2xl">
                                  {phase.number}
                                </span>
                                <h3 className="font-display font-bold text-lg md:text-xl mt-0.5 md:mt-1">
                                  {phase.title}
                                </h3>
                              </div>
                            </div>

                            {/* Split Content */}
                            <div className="space-y-2 md:space-y-3 relative z-10 flex-1 flex flex-col justify-start">
                              {/* Your Action */}
                              <div className="bg-white/50 dark:bg-black/20 rounded-lg md:rounded-xl p-3 md:p-4 border border-gray-200 dark:border-gray-800">
                                <div className="flex items-start gap-2">
                                  <span className="text-xs md:text-sm font-semibold text-accent flex-shrink-0">Vy:</span>
                                  <p className="text-xs md:text-sm flex-1">{phase.yourAction}</p>
                                </div>
                              </div>

                              {/* My Support */}
                              <div className="bg-accent/5 dark:bg-accent/10 rounded-lg md:rounded-xl p-3 md:p-4 border border-accent/20">
                                <div className="flex items-start gap-2">
                                  <span className="text-xs md:text-sm font-semibold text-accent flex-shrink-0">Já:</span>
                                  <p className="text-xs md:text-sm flex-1">{phase.mySupport}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Diagonal Arrow between phases - only on desktop with multiple phases */}
                        {!isMobile && index < slides[currentSlide].phases.length - 1 && (
                          <div className={`w-5/6 lg:w-2/3 mx-auto ${index % 2 === 0 ? 'ml-0 mr-auto' : 'ml-auto mr-0'}`}>
                            <div className={`flex ${index % 2 === 0 ? 'justify-start pl-32 lg:pl-56' : 'justify-end pr-40 lg:pr-64'} py-4`}>
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

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-20 md:top-1/2 bg-accent/10 rounded-full p-2 z-20 cursor-pointer"
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
              className="absolute right-0 top-20 md:top-1/2 bg-accent/10 rounded-full p-2 z-20 cursor-pointer"
              style={{
                transform: 'translate(1rem, -50%)',
                transition: 'none'
              }}
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6 text-accent" strokeWidth={2} />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-3 mt-8 flex-wrap max-w-md mx-auto">
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
