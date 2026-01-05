import { motion } from 'framer-motion'
import { memo } from 'react'
import { Check, X } from 'lucide-react'
import Section from '../layout/Section'
import { fadeIn, slideUp } from '../../constants/animations'

const comparisonData = [
  {
    feature: 'Konzultace 55 min.',
    vibe: '3',
    vibeCoding: '6',
    vip: '10'
  },
  {
    feature: 'Kapacita',
    vibe: '5 žen',
    vibeCoding: '3 ženy',
    vip: '1 žena'
  },
  {
    feature: 'Etapy',
    vibe: '6',
    vibeCoding: '9',
    vip: '12'
  },
  {
    feature: '✧  Pochopení',
    vibe: true,
    vibeCoding: true,
    vip: true
  },
  {
    feature: '✧  Rozhodnutí',
    vibe: true,
    vibeCoding: true,
    vip: true
  },
  {
    feature: '✧  Kódování s AI',
    vibe: false,
    vibeCoding: true,
    vip: true
  },
  {
    feature: '✧  MVP*',
    vibe: false,
    vibeCoding: false,
    vip: true
  },
  {
    feature: 'Bonusy',
    vibe: '1',
    vibeCoding: '11',
    vip: '12'
  },
  {
    feature: '✧  Návody',
    vibe: '1',
    vibeCoding: '9',
    vip: '10'
  },
  {
    feature: '✧  Nahrávky',
    vibe: false,
    vibeCoding: true,
    vip: true
  },
  {
    feature: '✧  Zápisky',
    vibe: false,
    vibeCoding: false,
    vip: true
  },
  {
    feature: '✧  Další podpora',
    vibe: false,
    vibeCoding: '2 týdny',
    vip: '2 týdny'
  },
  {
    feature: '✧  Check-in call 30 min.',
    vibe: false,
    vibeCoding: false,
    vip: '2'
  },
  {
    feature: 'Sleva na další 2 hod.',
    vibe: '300 Kč',
    vibeCoding: '600 Kč',
    vip: '900 Kč'
  },
  {
    feature: 'Cena',
    vibe: '3 900 Kč',
    vibeCoding: '8 900 Kč',
    vip: '19 900 Kč',
    highlight: true
  }
]

function PricingComparison() {
  return (
    <Section
      background="none"
      className="bg-white dark:bg-[#05050f]"
      centered={true}
      customPadding="pt-4 md:pt-6 pb-6 md:pb-8 px-[4%]"
    >
      <motion.div {...fadeIn}>
        <motion.h2
          className="font-display dark:font-['Manrope',sans-serif] font-bold text-center mb-4 md:mb-6"
          {...slideUp}
        >
          Rychlé porovnání variant
        </motion.h2>

        <motion.div
          className="max-w-5xl mx-auto overflow-x-auto pt-4"
          {...slideUp}
          transition={{ delay: 0.2 }}
        >
          <div className="min-w-[640px]">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-accent/30">
                  <th className="text-left px-3 py-1 font-display dark:font-['Manrope',sans-serif] font-semibold">
                    Počet
                  </th>
                  <th className="text-center px-3 py-1">
                    <div className="font-display dark:font-['Manrope',sans-serif] font-bold text-lg">VIBE</div>
                  </th>
                  <th className="text-center px-3 py-1 bg-accent/5 dark:bg-accent/10 relative">
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                      <span className="bg-accent dark:bg-[#0ddd0d] text-black text-xs font-bold px-3 py-1 rounded-lg whitespace-nowrap">
                        DOPORUČENO
                      </span>
                    </div>
                    <div className="font-display dark:font-['Manrope',sans-serif] font-bold text-lg text-accent mt-2">VIBE+CODING</div>
                  </th>
                  <th className="text-center px-3 py-1">
                    <div className="font-display dark:font-['Manrope',sans-serif] font-bold text-lg">VIBECODING VIP</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr
                    key={index}
                    className={`border-b border-accent/10 ${row.highlight ? 'bg-accent/5 dark:bg-accent/5' : ''}`}
                  >
                    <td className="px-3 py-1 font-semibold text-sm">
                      {row.feature}
                    </td>
                    <td className="px-3 py-1 text-center">
                      {typeof row.vibe === 'boolean' ? (
                        row.vibe ? (
                          <Check className="w-5 h-5 text-accent mx-auto" strokeWidth={2.5} />
                        ) : (
                          <X className="w-5 h-5 text-gray-400 mx-auto" strokeWidth={2} />
                        )
                      ) : (
                        <span className={`${row.highlight ? 'font-bold text-accent' : 'font-light'}`}>
                          {row.vibe}
                        </span>
                      )}
                    </td>
                    <td className="px-3 py-1 text-center bg-accent/5 dark:bg-accent/10">
                      {typeof row.vibeCoding === 'boolean' ? (
                        row.vibeCoding ? (
                          <Check className="w-5 h-5 text-accent mx-auto" strokeWidth={2.5} />
                        ) : (
                          <X className="w-5 h-5 text-gray-400 mx-auto" strokeWidth={2} />
                        )
                      ) : (
                        <span className={`${row.highlight ? 'font-bold text-accent' : 'font-light'}`}>
                          {row.vibeCoding}
                        </span>
                      )}
                    </td>
                    <td className="px-3 py-1 text-center">
                      {typeof row.vip === 'boolean' ? (
                        row.vip ? (
                          <Check className="w-5 h-5 text-accent mx-auto" strokeWidth={2.5} />
                        ) : (
                          <X className="w-5 h-5 text-gray-400 mx-auto" strokeWidth={2} />
                        )
                      ) : (
                        <span className={`${row.highlight ? 'font-bold text-accent' : 'font-light'}`}>
                          {row.vip}
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.p
          className="text-center text-xs font-light mt-4 max-w-2xl mx-auto text-gray-600 dark:text-gray-400"
          {...slideUp}
          transition={{ delay: 0.3 }}
        >
          *MVP = Minimum Viable Product = funkční základ připravený k prodeji i k dalšímu růstu
        </motion.p>

        <motion.p
          className="text-center text-sm font-light mt-3 max-w-2xl mx-auto"
          {...slideUp}
          transition={{ delay: 0.4 }}
        >
          💡 Tip: Pokud si nejste jistí, začněte s VIBE+CODING - získáte pochopení i první výsledky.
        </motion.p>
      </motion.div>
    </Section>
  )
}

export default memo(PricingComparison)
