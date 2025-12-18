import { motion, AnimatePresence } from 'framer-motion'
import { useCallback, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Section from '../layout/Section'
import Card from '../ui/Card'
import Button from '../ui/Button'
import { fadeIn, slideUp } from '../../constants/animations'
import { scrollToSection } from '../../utils/scroll'

const slides = [
  {
    title: "Sami možná",
    items: [
      "Ztratíte měsíce pokusů a omylů",
      "Investujete do špatných nástrojů",
      "Vzdáte to předčasně z důvodu frustrace",
      "Vaše konkurence vás předběhne"
    ],
    icon: "×",
    iconColor: "text-[#9A0303]"
  },
  {
    title: "Spolu určitě",
    items: [
      "Získáte jasnou roadmapu od nultého dne",
      "Vyhnete se většině drahých chyb",
      "Máte podporujícího průvodce celou cestou",
      "Začínáte pracovat na své podnikatelské budoucnosti a polopasivním příjmu"
    ],
    icon: "✓",
    iconColor: "text-accent"
  }
]

export default function WhyConsultation() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const handleClick = useCallback(() => {
    scrollToSection('pricing-packages-section')
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <Section background="dark" className="min-h-screen flex items-center justify-center !pt-4 !pb-8 md:!pt-4 md:!pb-8 lg:!pt-8 lg:!pb-16" showScrollIndicator={true}>
      <div>
        <motion.div {...fadeIn}>
          <h2 className="font-display font-bold mb-8 text-center" style={{ lineHeight: '1.3' }}>
            Nebuďte na to sami
          </h2>
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <div className="space-y-4">
              <p className="text-xl font-light">
                Nemusíte strávit půl roku nachytřováním ze všemožných různých zdrojů.
              </p>
              <p className="text-xl font-light">
                Ráda vám předám, co jsem se za 6 měsíců s vibecodingem naučila.
              </p>
            </div>
          </div>

          {/* Carousel Container */}
          <div className="relative max-w-2xl mx-auto px-12 md:px-16">
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
                  <Card background="light" className="mx-auto max-w-md dark:!bg-[#070716]">
                    <h3 className="font-display font-bold mb-6 text-center text-2xl">
                      {slides[currentSlide].title}
                    </h3>
                    <ul className="space-y-4">
                      {slides[currentSlide].items.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className={`${slides[currentSlide].iconColor} mt-1 text-xl`}>
                            {slides[currentSlide].icon}
                          </span>
                          <span className="text-lg">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
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

            {/* Dots Indicator - larger and more visible */}
            <div className="flex justify-center gap-3 mt-8">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-3 rounded-full transition-all ${
                    index === currentSlide
                      ? 'bg-accent w-12'
                      : 'bg-gray-400 dark:bg-gray-600 hover:bg-accent/50 w-3'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <motion.div
            className="mt-12 text-center"
            {...slideUp}
            transition={{ delay: 0.3 }}
          >
            <p className="mb-4 text-xl font-light">
              Investicí do spolupráce uspoříte čas, peníze i nervy.
            </p>
            <p className="mb-8 text-xl font-light">
              Vaše nové nástroje vám investovaný čas vrátí.
            </p>
            <Button onClick={handleClick}>
              Vybrat službu
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  )
}
