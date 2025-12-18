import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
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

export default function Phases() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % phaseSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + phaseSlides.length) % phaseSlides.length)
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
          <div className="max-w-5xl mx-auto relative px-12 md:px-16">
            {/* Package Badge */}
            <div className="text-center mb-6">
              <Badge>{phaseSlides[currentSlide].package}</Badge>
            </div>

            {/* Carousel */}
            <div className="relative overflow-hidden">
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
                >
                  <div className="space-y-6">
                    {phaseSlides[currentSlide].phases.map((phase) => (
                      <div key={phase.number} className="group relative bg-[#f2f2f2] dark:bg-[#070716] rounded-3xl p-6 hover:scale-[1.01] transition-all duration-300 border-2 border-gray-200 dark:border-[#05050f] hover:border-accent/30 overflow-hidden">
                        {/* Holographic glow on hover */}
                        <motion.div
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                          style={{
                            background: 'radial-gradient(circle at 50% 50%, rgba(0, 255, 136, 0.1), transparent 70%)',
                            pointerEvents: 'none',
                          }}
                        />

                        {/* Header */}
                        <div className="flex items-start gap-4 mb-4 relative z-10">
                          <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 border-2 border-accent/30 flex-shrink-0">
                            <phase.Icon className="w-8 h-8 text-accent" strokeWidth={1.5} />
                          </div>
                          <div className="flex-1">
                            <span className="font-display font-bold text-accent text-2xl">
                              {phase.number}
                            </span>
                            <h3 className="font-display font-bold text-xl mt-1">
                              {phase.title}
                            </h3>
                          </div>
                        </div>

                        {/* Split Content */}
                        <div className="space-y-3 relative z-10">
                          {/* Your Action */}
                          <div className="bg-white/50 dark:bg-black/20 rounded-xl p-4 border border-gray-200 dark:border-gray-800">
                            <div className="flex items-start gap-2">
                              <span className="text-sm font-semibold text-accent flex-shrink-0">Vy:</span>
                              <p className="text-sm flex-1">{phase.yourAction}</p>
                            </div>
                          </div>

                          {/* My Support */}
                          <div className="bg-accent/5 dark:bg-accent/10 rounded-xl p-4 border border-accent/20">
                            <div className="flex items-start gap-2">
                              <span className="text-sm font-semibold text-accent flex-shrink-0">Já:</span>
                              <p className="text-sm flex-1">{phase.mySupport}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 bg-accent/10 rounded-full p-2 z-20 cursor-pointer"
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
              className="absolute right-0 top-1/2 bg-accent/10 rounded-full p-2 z-20 cursor-pointer"
              style={{
                transform: 'translate(1rem, -50%)',
                transition: 'none'
              }}
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6 text-accent" strokeWidth={2} />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-3 mt-8">
              {phaseSlides.map((_, index) => (
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
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
