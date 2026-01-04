import { motion } from 'framer-motion'
import { useCallback, memo } from 'react'
import Section from '../layout/Section'
import Button from '../ui/Button'
import Carousel from '../ui/Carousel'
import AnimatedBackground from '../ui/AnimatedBackground'
import { whyConsultationSlides } from '../../constants/data'
import { fadeIn, slideUp } from '../../constants/animations'
import { scrollToSection } from '../../utils/scroll'

const ComparisonCard = memo(function ComparisonCard({ slide, index: slideIndex, isMobile }) {
  const isPositive = slide.type === 'positive'

  return (
    <div className={`relative h-full ${isPositive ? 'z-10' : 'z-0'}`}>
      {/* Holographic glow for positive card */}
      {isPositive && (
        <motion.div
          className="absolute -inset-4 rounded-3xl opacity-0 holographic-glow"
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
          border-2 backdrop-blur-md p-5
          ${isPositive
            ? 'bg-[#B56C4E]/5 dark:bg-white/5 border-[#B56C4E]/40 dark:border-accent/30 shadow-2xl'
            : 'bg-white/40 dark:bg-black/30 border-gray-300/40 dark:border-gray-600/30'
          }
          transition-all duration-500
          hover:scale-[1.02] hover:shadow-2xl
        `}
      >
        {/* Holographic shine overlay for positive card */}
        {isPositive && (
          <motion.div
            className="absolute inset-0 rounded-3xl opacity-30 holographic-shine"
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
          <div className="absolute inset-0 rounded-3xl pointer-events-none opacity-20 holographic-scanlines" />
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
              font-display font-bold text-center text-2xl mb-3 leading-tight
              ${isPositive ? 'text-accent text-shadow-accent' : 'text-gray-600 dark:text-gray-400'}
            `}
          >
            {slide.title}
          </h3>

          <ul className="flex flex-col gap-1 m-0 p-0">
            {slide.items.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: slideIndex * 0.2 + index * 0.1 }}
                className="flex items-baseline gap-2 m-0 py-[0.2rem] leading-snug"
              >
                <span className={`${slide.iconColor} font-bold flex-shrink-0 text-base leading-snug`}>
  {slide.icon}
</span>
                <span className="leading-snug font-light text-fluid-card-item">
                  {item}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  )
})

function WhyConsultation() {
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
      showScrollIndicator={true}
      backgroundElement={binaryBackground}
    >
      <div className="w-full relative z-10">
        <motion.div {...fadeIn}>
          <h2 className="font-display font-bold text-center leading-tight mb-4">
            Nebuďte na to sami
          </h2>
          <div className="text-center max-w-3xl mx-auto mb-6">
            <p className="leading-relaxed m-0">
              Nemusíte strávit půl roku nachytřováním ze všemožných různých zdrojů.
            </p>
            <p className="leading-relaxed m-0">
              Ráda vám předám, co jsem se za 6 měsíců s vibecodingem naučila.
            </p>
          </div>

          {/* Desktop: Side-by-side comparison */}
          <div className="hidden md:block max-w-6xl mx-auto mb-6">
            <div className="grid md:grid-cols-2 gap-5">
              {whyConsultationSlides.map((slide, index) => (
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
          <div className="md:hidden -mx-4 mb-6">
            <Carousel
              slides={whyConsultationSlides}
              renderSlide={renderSlide}
              showArrows={true}
              showDots={true}
              dragEnabled={true}
              className="px-12"
            />
          </div>

          <motion.div
            className="text-center mt-6"
            {...slideUp}
            transition={{ delay: 0.6 }}
          >
            <p className="leading-relaxed mb-1">
              Investicí do spolupráce uspoříte čas, peníze i nervy.
            </p>
            <p className="leading-relaxed mb-6">
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

export default memo(WhyConsultation)