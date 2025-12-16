import { motion } from 'framer-motion'
import Section from '../layout/Section'
import ComparisonCard from '../ui/ComparisonCard'
import { comparisonData } from '../../constants/data'
import { fadeIn } from '../../constants/animations'

export default function ComparisonSeo() {
  return (
    <Section background="light" className="min-h-screen flex items-center justify-center !pt-1 !pb-4 md:!pt-2 md:!pb-6 lg:!pt-4 lg:!pb-8 relative overflow-hidden" showScrollIndicator={true}>
      {/* Holographic background */}
      <div className="absolute inset-0 z-0 opacity-50">
        {/* Gentle Holographic glow - expanded to right */}
        <motion.div
          className="absolute inset-0 blur-xl md:blur-3xl"
          style={{ willChange: 'transform' }}
          animate={{
            background: [
              'radial-gradient(circle at 70% 30%, rgba(0, 255, 136, 0.3), rgba(0, 200, 255, 0.2) 40%, rgba(0, 255, 136, 0.1) 70%, transparent)',
              'radial-gradient(circle at 75% 35%, rgba(0, 200, 255, 0.3), rgba(0, 255, 136, 0.2) 40%, rgba(0, 200, 255, 0.1) 70%, transparent)',
              'radial-gradient(circle at 65% 25%, rgba(0, 255, 136, 0.3), rgba(0, 200, 255, 0.2) 40%, rgba(0, 255, 136, 0.1) 70%, transparent)',
              'radial-gradient(circle at 70% 30%, rgba(0, 255, 136, 0.3), rgba(0, 200, 255, 0.2) 40%, rgba(0, 255, 136, 0.1) 70%, transparent)',
            ],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />

        {/* Background image LEFT - horizontally flipped */}
        <div className="hidden md:flex absolute inset-0 items-start justify-start -ml-12 pt-16">
          <motion.img
            src="/Vibecoding-koucka-jana.webp"
            alt=""
            className="h-1/3 w-auto object-cover"
            style={{
              filter: 'drop-shadow(0.5px 0 0 rgba(0,255,136,0.15)) drop-shadow(-0.5px 0 0 rgba(0,200,255,0.15))',
              willChange: 'transform, opacity',
            }}
            animate={{
              opacity: [0.3, 0.28, 0.32, 0.3],
              x: [0, 0.3, -0.3, 0],
              scaleX: [-1, -1.02, -0.98, -1.01, -1],
              scaleY: [1, 1.02, 0.98, 1.01, 1],
              rotate: [0, 1.5, -1.5, 1, -1, 0],
            }}
            transition={{
              opacity: {
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut'
              },
              x: {
                duration: 1,
                repeat: Infinity,
                repeatDelay: 10
              },
              scale: {
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut'
              },
              rotate: {
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut'
              }
            }}
          />
        </div>

        {/* Background image RIGHT - original */}
        <div className="hidden md:flex absolute inset-0 items-start justify-end -mr-12 pt-6">
          <motion.img
            src="/koucka.webp"
            alt=""
            className="h-1/3 w-auto object-cover"
            style={{
              filter: 'drop-shadow(0.5px 0 0 rgba(0,255,136,0.15)) drop-shadow(-0.5px 0 0 rgba(0,200,255,0.15))',
              willChange: 'transform, opacity',
            }}
            animate={{
              opacity: [0.3, 0.28, 0.32, 0.3],
              x: [0, -0.3, 0.3, 0],
              scale: [1, 1.02, 0.98, 1.01, 1],
              rotate: [0, -1.5, 1.5, -1, 1, 0],
            }}
            transition={{
              opacity: {
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut'
              },
              x: {
                duration: 1,
                repeat: Infinity,
                repeatDelay: 10
              },
              scale: {
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut'
              },
              rotate: {
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut'
              }
            }}
          />
        </div>

        {/* Scanlines - covering whole section */}
        <motion.div
          className="hidden md:block absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 255, 136, 0.08) 2px, rgba(0, 255, 136, 0.08) 4px)',
            willChange: 'transform, opacity',
          }}
          animate={{
            y: [0, -100],
            opacity: [0.12, 0.18, 0.12],
          }}
          transition={{
            y: {
              duration: 8,
              repeat: Infinity,
              ease: 'linear'
            },
            opacity: {
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut'
            }
          }}
        />

        {/* Color shift overlay - covering whole section */}
        <motion.div
          className="hidden md:block absolute inset-0 mix-blend-overlay"
          style={{ willChange: 'transform' }}
          animate={{
            background: [
              'linear-gradient(180deg, rgba(0,255,136,0) 0%, rgba(0,255,136,0.1) 50%, rgba(0,255,136,0) 100%)',
              'linear-gradient(180deg, rgba(0,200,255,0) 0%, rgba(0,200,255,0.1) 50%, rgba(0,200,255,0) 100%)',
              'linear-gradient(180deg, rgba(0,255,136,0) 0%, rgba(0,255,136,0.1) 50%, rgba(0,255,136,0) 100%)',
            ],
            y: [-200, 200],
          }}
          transition={{
            background: {
              duration: 10,
              repeat: Infinity,
              ease: 'linear'
            },
            y: {
              duration: 12,
              repeat: Infinity,
              ease: 'linear'
            }
          }}
        />
      </div>

      <div className="relative z-10">
        <motion.div {...fadeIn}>
          <h2 className="font-display font-bold mb-8 text-center" style={{ lineHeight: '1.3' }}>
            Dobré nástroje posouvají
          </h2>
          <h3 className="font-display font-bold mb-6 text-center">
            Dvě ženy. Jeden obor. Dvě cesty.
          </h3>
          <p className="mb-8 md:mb-12 lg:mb-16 text-center max-w-3xl mx-auto text-xl font-light">
            <span className="block text-xl font-light">Martina a Julie: obě učí klientky zdravě spát.</span>
            <span className="block text-xl font-light">Stejné znalosti. Stejná vášeň pomáhat.</span>
            <span className="block mt-6 text-xl font-light">Ale životy mají jiné.</span>
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <ComparisonCard
              data={comparisonData.martina}
              direction="left"
              delay={0}
              background="dark"
            />

            <ComparisonCard
              data={comparisonData.julie}
              direction="right"
              delay={0}
              background="dark"
            />
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
