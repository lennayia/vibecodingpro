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
        style={{ padding: '1.25rem' }}
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
            style={{ marginBottom: '0.75rem', lineHeight: 1.2 }}
            className={`
              font-display font-bold text-center text-2xl
              ${isPositive ? 'text-accent text-shadow-accent' : 'text-gray-400 dark:text-gray-500'}
            `}
          >
            {slide.title}
          </h3>

          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', margin: 0, padding: 0 }}>
            {slide.items.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: slideIndex * 0.2 + index * 0.1 }}
                style={{ 
  display: 'flex', 
  alignItems: 'baseline', 
  gap: '0.5rem', 
  margin: 0, 
  padding: '0.2rem 0',
  lineHeight: 1.3 
}}
              >
                <span 
  className={`${slide.iconColor} font-bold flex-shrink-0`}
  style={{ fontSize: '1rem', lineHeight: 1.3 }}
>
  {slide.icon}
</span>
                <span style={{ lineHeight: 1.35, fontSize: '0.9375rem', fontWeight: 300 }}>
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
          <h2 
            className="font-display font-bold text-center leading-tight"
            style={{ marginBottom: '1rem' }}
          >
            Nebuďte na to sami
          </h2>
          <div 
            className="text-center max-w-3xl mx-auto"
            style={{ marginBottom: '1.5rem' }}
          >
            <p style={{ lineHeight: 1.4, margin: 0 }}>
              Nemusíte strávit půl roku nachytřováním ze všemožných různých zdrojů.
            </p>
            <p style={{ lineHeight: 1.4, margin: 0 }}>
              Ráda vám předám, co jsem se za 6 měsíců s vibecodingem naučila.
            </p>
          </div>

          {/* Desktop: Side-by-side comparison */}
          <div 
            className="hidden md:block max-w-6xl mx-auto"
            style={{ marginBottom: '1.5rem' }}
          >
            <div 
              className="grid md:grid-cols-2"
              style={{ gap: '1.25rem' }}
            >
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
          <div 
            className="md:hidden -mx-4"
            style={{ marginBottom: '1.5rem' }}
          >
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
            className="text-center"
            style={{ marginTop: '1.5rem' }}
            {...slideUp}
            transition={{ delay: 0.6 }}
          >
            <p style={{ lineHeight: 1.4, marginBottom: '0.25rem' }}>
              Investicí do spolupráce uspoříte čas, peníze i nervy.
            </p>
            <p style={{ lineHeight: 1.4, marginBottom: '1.5rem' }}>
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