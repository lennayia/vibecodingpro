import { motion } from 'framer-motion'
import { memo, useMemo } from 'react'
import Section from '../layout/Section'
import { fadeIn, slideUp, slideLeft } from '../../constants/animations'

function WhatIsVibecoding() {
  const targetGroups = useMemo(() => [
    "Koučky a mentorky",
    "Terapeutky a poradkyně",
    "Lektorky a učitelky",
    "Online podnikatelky",
    "Tvůrkyně kurzů a programů"
  ], [])

  return (
    <Section
      background="light"
      className="min-h-screen flex items-center justify-center !py-4 md:!py-8 lg:!py-12"
      showScrollIndicator={true}
    >
      <motion.div {...fadeIn}>
        <h2 className="font-display font-bold mb-16 text-center" style={{ lineHeight: '1.3' }}>
          Vibecoding - co a pro koho to je
        </h2>

        {/* Co to je */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.p
            className="text-xl mb-8"
            {...slideUp}
            transition={{ delay: 0.1 }}
          >
            Způsob tvorby aplikací, kdy popisujete běžným jazykem, co chcete vytvořit, a AI za Vás napíše kód. Nepotřebujeme umět programovat v klasickém smyslu, ovšem potřebujete jasnou vizi a vědět, jak konverhzovat s AI kodérem.
          </motion.p>

          <motion.p
            className="text-xl"
            {...slideUp}
            transition={{ delay: 0.2 }}
          >
            Vibecoding je dovednost popsat co chcete tak, aby to AI dobře pochopila. Využije, pokud jste
          </motion.p>
        </div>

        {/* Pro koho */}
        <div className="max-w-2xl mx-auto mb-12">
          <ul className="space-y-4">
            {targetGroups.map((group, index) => (
              <motion.li
                key={index}
                className="flex items-center justify-center gap-3"
                {...slideLeft}
                transition={{ delay: index * 0.1 }}
              >
                <span className="text-accent">✦</span>
                <span className="text-xl">{group}</span>
                <span className="text-accent">✦</span>
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
          <p className="text-xl mb-3">Společné máte jedno:</p>
          <p className="text-xl font-semibold">
            Chcete pomoct víc lidem – ale nechcete dřít víc hodin.
          </p>
        </motion.div>
      </motion.div>
    </Section>
  )
}

export default memo(WhatIsVibecoding)
