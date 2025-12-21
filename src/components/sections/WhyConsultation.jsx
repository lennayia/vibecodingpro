import { motion, AnimatePresence } from 'framer-motion'
import { useCallback, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Section from '../layout/Section'
import Button from '../ui/Button'
import AnimatedBackground from '../ui/AnimatedBackground'
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
    iconColor: "text-[#9A0303]",
    type: "negative"
  },
  {
    title: "Společně určitě",
    items: [
      "Získáte jasnou roadmapu od nultého dne",
      "Vyhnete se většině drahých chyb",
      "Máte podporujícího průvodce celou cestou",
      "Začínáte pracovat na rozvoji podnikatelské budoucnosti a polopasivního příjmu"
    ],
    icon: "✓",
    iconColor: "text-accent",
    type: "positive"
  }
]

function ComparisonCard({ slide, index: slideIndex, isMobile }) {
  const isPositive = slide.type === 'positive'

  return (
    <div className={`relative h-full ${isPositive ? 'z-10' : 'z-0'}`}>
      {/* Holographic glow for positive card */}
      {isPositive && (
        <motion.div
          className="absolute -inset-4 rounded-3xl opacity-0"
          style={{
            background: 'linear-gradient(45deg, rgba(0, 255, 136, 0.4), rgba(0, 200, 255, 0.4))',
            filter: 'blur(20px)',
          }}
          animate={{
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      )}

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: slideIndex * 0.2 }}
        className={`
          relative h-full rounded-3xl
          border-2 backdrop-blur-md
          ${isPositive
            ? 'bg-white/10 dark:bg-white/5 border-accent/30 shadow-2xl'
            : 'bg-black/20 dark:bg-black/30 border-gray-600/30'
          }
          transition-all duration-500
          hover:scale-[1.02] hover:shadow-2xl
        `}
        className="p-8 md:p-[clamp(1.5rem,3vh,2rem)]"
      >
        {/* Holographic shine overlay for positive card */}
        {isPositive && (
          <motion.div
            className="absolute inset-0 rounded-3xl opacity-30"
            style={{
              background: 'linear-gradient(135deg, transparent 30%, rgba(0, 255, 136, 0.3) 50%, transparent 70%)',
            }}
            animate={{
              backgroundPosition: ['0% 0%', '200% 200%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        )}

        {/* Scanlines effect for positive card */}
        {isPositive && (
          <div
            className="absolute inset-0 rounded-3xl pointer-events-none opacity-20"
            style={{
              backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0, 255, 136, 0.1) 3px, rgba(0, 255, 136, 0.1) 6px)',
            }}
          />
        )}

        {/* Corner accents */}
        <>
          <div className={`absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 ${isPositive ? 'border-accent/50' : 'border-gray-600/50'}`} />
          <div className={`absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 ${isPositive ? 'border-accent/50' : 'border-gray-600/50'}`} />
          <div className={`absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 ${isPositive ? 'border-accent/50' : 'border-gray-600/50'}`} />
          <div className={`absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 ${isPositive ? 'border-accent/50' : 'border-gray-600/50'}`} />
        </>

        <div className="relative z-10">
          <h3
            className={`
              font-display font-bold text-center text-2xl mb-6 md:mb-[clamp(0.75rem,2vh,1.5rem)]
              ${isPositive ? 'text-accent' : 'text-gray-400 dark:text-gray-500'}
            `}
            style={isPositive ? { textShadow: '0 0 10px rgba(0, 255, 136, 0.3)' } : {}}
          >
            {slide.title}
          </h3>

          <ul className="flex flex-col gap-4 md:gap-[clamp(0.5rem,1.5vh,1rem)]">
            {slide.items.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: slideIndex * 0.2 + index * 0.1 }}
                className="flex items-start gap-3"
              >
                <span className={`${slide.iconColor} mt-1 text-xl font-bold flex-shrink-0`}>
                  {slide.icon}
                </span>
                <span className={`text-lg ${isPositive ? 'font-medium' : ''}`}>
                  {item}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  )
}

export default function WhyConsultation() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  // Detect screen size
  useState(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handleClick = useCallback(() => {
    scrollToSection('pricing-packages-section')
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const binaryBackground = <AnimatedBackground type="binary" count={50} />

  return (
    <Section
      background="dark"
      centered={true}
      className="!pt-12 !pb-12 md:!pt-4 md:!pb-8 lg:!pt-8 lg:!pb-16"
      showScrollIndicator={true}
      backgroundElement={binaryBackground}
    >
      <div className="w-full relative z-10">
        <motion.div {...fadeIn}>
          <h2 className="font-display font-bold text-center mb-8 md:mb-[clamp(1rem,2.5vh,2rem)]" style={{ lineHeight: '1.3' }}>
            Nebuďte na to sami
          </h2>
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-[clamp(1rem,2.5vh,2rem)]">
            <div className="flex flex-col gap-2 md:gap-[clamp(0.25rem,0.5vh,0.5rem)]">
              <p className="text-xl font-light">
                Nemusíte strávit půl roku nachytřováním ze všemožných různých zdrojů.
              </p>
              <p className="text-xl font-light">
                Ráda vám předám, co jsem se za 6 měsíců s vibecodingem naučila.
              </p>
            </div>
          </div>

          {/* Desktop: Side-by-side comparison */}
          <div className="hidden md:block max-w-6xl mx-auto mb-8 md:mb-[clamp(1rem,2.5vh,2rem)]">
            <div className="grid md:grid-cols-2 gap-8 md:gap-[clamp(1rem,2.5vh,2rem)]">
              {slides.map((slide, index) => (
                <ComparisonCard
                  key={index}
                  slide={slide}
                  index={index}
                  isMobile={false}
                />
              ))}
            </div>
          </div>

          {/* Mobile: Carousel */}
          <div className="md:hidden relative max-w-2xl mx-auto px-12 mb-8 md:mb-[clamp(1rem,2.5vh,2rem)]">
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
                  <ComparisonCard
                    slide={slides[currentSlide]}
                    index={0}
                    isMobile={true}
                  />
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
            <div className="flex justify-center gap-3 mt-8 md:mt-[clamp(1rem,2vh,2rem)]">
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
            className="text-center mt-12 md:mt-[clamp(1.5rem,4vh,3rem)]"
            {...slideUp}
            transition={{ delay: 0.6 }}
          >
            <p className="text-xl font-light mb-4 md:mb-[clamp(0.5rem,1.5vh,1rem)]">
              Investicí do spolupráce uspoříte čas, peníze i nervy.
            </p>
            <p className="text-xl font-light custom-spacing mb-12 md:mb-[clamp(2rem,4vh,4rem)]">
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
