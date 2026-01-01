import { motion } from 'framer-motion'
import { memo, useMemo } from 'react'
import Section from '../layout/Section'
import AnimatedBackground from '../ui/AnimatedBackground'
import { fadeIn, slideUp, slideLeft } from '../../constants/animations'

function WhatIsVibecoding() {
  const targetGroups = useMemo(() => [
    "Koučky a mentorky",
    "Terapeutky a poradkyně",
    "Lektorky a učitelky",
    "Online podnikatelky",
    "Tvůrkyně kurzů a programů"
  ], [])

  const binaryBackground = <AnimatedBackground type="particles" particleCount={40} />

  return (
    <Section
      background="light"
      centered={true}
      className="!py-12 md:!py-8 lg:!py-12"
      showScrollIndicator={true}
      backgroundElement={binaryBackground}
    >
      <motion.div {...fadeIn}>
        <h2 className="font-display font-bold mb-4 md:mb-2 text-center" leading-tight>
          Vibecoding
        </h2>
        <h3 className="font-display font-bold mb-10 md:mb-8 text-center">
          Co to je a pro koho
        </h3>

        {/* Co to je */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-8">
          <motion.p
            className="text-xl mb-6 md:mb-4"
            {...slideUp}
            transition={{ delay: 0.1 }}
          >
            Popisujeme běžným jazykem, co chceme vytvořit, a AI za nás napíše kód. Nepotřebujeme umět programovat v klasickém smyslu, potřebujeme jasnou vizi a s AI kodérem konverzovat.
          </motion.p>

          <motion.p
            className="text-lg mb-6 md:mb-4"
            {...slideUp}
            transition={{ delay: 0.2 }}
          >
            Vibecoding = dovednost popsat vizi tak, aby to AI dobře pochopila.
          </motion.p>
          <motion.p
            className="text-xl mt-4 md:mt-0"
            {...slideUp}
            transition={{ delay: 0.3 }}
          >
            Využijete, pokud jste
          </motion.p>
        </div>

        {/* Pro koho */}
        <div className="max-w-2xl mx-auto mb-6">
          <ul className="space-y-2">
            {targetGroups.map((group, index) => (
              <motion.li
                key={index}
                className="flex items-center justify-center gap-3"
                {...slideLeft}
                transition={{ delay: index * 0.1 }}
              >
                <span className="text-white dark:text-gray-400 opacity-30 text-sm">✦</span>
                <span className="text-xl">{group}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Závěrečný text */}
        <motion.div
          className="text-center max-w-2xl mx-auto"
          {...slideUp}
          transition={{ delay: 0.6 }}
        >
          <p className="text-xl mb-4">Společné máte dvojí:</p>
          <div className="space-y-2">
            <p className="flex items-center justify-center gap-3 text-xl font-semibold">
              <span className="text-accent">✦</span>
              <span>Chcete pomoct víc lidem</span>
              <span className="text-accent">✦</span>
            </p>
            <p className="flex items-center justify-center gap-3 text-xl font-semibold">
              <span className="text-accent">✦</span>
              <span>Nechcete dřít víc hodin</span>
              <span className="text-accent">✦</span>
            </p>
          </div>
        </motion.div>
      </motion.div>
    </Section>
  )
}

export default memo(WhatIsVibecoding)
