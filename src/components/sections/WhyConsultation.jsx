import { motion } from 'framer-motion'
import { useCallback } from 'react'
import Section from '../layout/Section'
import Button from '../ui/Button'
import Carousel from '../ui/Carousel'
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
          p-8 md:p-[clamp(1.5rem,3vh,2rem)]
          ${isPositive
            ? 'bg-white/10 dark:bg-white/5 border-accent/30 shadow-2xl'
            : 'bg-black/20 dark:bg-black/30 border-gray-600/30'
          }
          transition-all duration-500
          hover:scale-[1.02] hover:shadow-2xl
        `}
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
  const handleClick = useCallback(() => {
    scrollToSection('pricing-packages-section')
  }, [])

  const renderSlide = (slide, index) => (
    <ComparisonCard
      key={index}
      slide={slide}
      index={0}
      isMobile={true}
    />
  )

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
          <div className="md:hidden mb-8 md:mb-[clamp(1rem,2.5vh,2rem)] -mx-4">
            <Carousel
              slides={slides}
              renderSlide={renderSlide}
              showArrows={true}
              showDots={true}
              dragEnabled={true}
              className="px-12"
            />
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
