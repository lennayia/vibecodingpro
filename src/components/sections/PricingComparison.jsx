import { motion } from 'framer-motion'
import { memo } from 'react'
import { Check, X, Lightbulb } from 'lucide-react'
import Section from '../layout/Section'
import { fadeIn, slideUp } from '../../constants/animations'

// Constants for consistent sizing and styling
const ICON_SIZE = 'w-4 h-4'
const STROKE_WIDTH_CHECK = 2.5
const STROKE_WIDTH_X = 2
const STROKE_WIDTH_LIGHTBULB = 2

// Reusable responsive text component
const ResponsiveText = memo(({ mobile, desktop }) => (
  <>
    <span className="md:hidden">{mobile}</span>
    <span className="hidden md:inline">{desktop}</span>
  </>
))

// Reusable cell component to eliminate duplication
const ComparisonCell = memo(({ value, highlight, className = '' }) => {
  if (typeof value === 'boolean') {
    return value ? (
      <Check className={`${ICON_SIZE} text-accent mx-auto`} strokeWidth={STROKE_WIDTH_CHECK} />
    ) : (
      <X className={`${ICON_SIZE} text-gray-400 mx-auto`} strokeWidth={STROKE_WIDTH_X} />
    )
  }

  return (
    <span className={`${highlight ? 'font-bold text-accent' : 'font-light'} text-fluid-comparison-sm`}>
      {value}
    </span>
  )
})

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
    vibeCoding: '2 ženy',
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
    feature: '✧  MVP *',
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
    vibeCoding: '9 900 Kč',
    vip: '19 900 Kč',
    highlight: true
  }
]

function PricingComparison() {
  return (
    <Section
      background="none"
      className="comparison-bg pt-clamp-comparison pb-clamp-comparison"
      centered={true}
      showScrollIndicator={true}
      customPadding="px-[4%]"
    >
      <motion.div {...fadeIn}>
        <motion.h2
          className="font-display dark-heading-font font-bold text-center mb-clamp-sm"
          {...slideUp}
        >
          Rychlé porovnání variant
        </motion.h2>

        <motion.p
          className="block md:hidden text-center text-fluid-comparison-xs font-light mb-clamp-sm text-gray-600 dark:text-gray-400"
          {...slideUp}
          transition={{ delay: 0.15 }}
        >
          Varianty: V=VIBE, V+C=VIBE+CODING, VIP=VIBECODING VIP
        </motion.p>

        <motion.div
          className="max-w-5xl mx-auto overflow-x-auto pt-clamp-comparison"
          {...slideUp}
          transition={{ delay: 0.2 }}
        >
          <div className="min-w-[100%] md:min-w-[640px]">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-accent/30">
                  <th className="text-left table-cell-padding font-display dark-heading-font font-semibold text-fluid-comparison-sm">
                    Počet
                  </th>
                  <th className="text-center table-cell-padding">
                    <div className="font-display dark-heading-font font-bold text-fluid-comparison-base">
                      <ResponsiveText mobile="V" desktop="VIBE" />
                    </div>
                  </th>
                  <th className="text-center table-cell-padding bg-accent/5 dark:bg-accent/10 relative">
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                      <span className="px-3 py-1.5 md:px-4 md:py-2 backdrop-blur-sm rounded-xl font-normal border border-accent/40 text-accent text-fluid-comparison-xs whitespace-nowrap">
                        DOPORUČENO
                      </span>
                    </div>
                    <div className="font-display dark-heading-font font-bold text-fluid-comparison-base text-accent mt-clamp-phases">
                      <ResponsiveText mobile="V+C" desktop="VIBE+CODING" />
                    </div>
                  </th>
                  <th className="text-center table-cell-padding">
                    <div className="font-display dark-heading-font font-bold text-fluid-comparison-base">
                      <ResponsiveText mobile="VIP" desktop="VIBECODING VIP" />
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr
                    key={index}
                    className={`border-b border-accent/10 ${row.highlight ? 'bg-accent/5' : ''}`}
                  >
                    <td className={`table-cell-padding text-fluid-comparison-sm ${row.feature.includes('✧') ? 'font-normal' : 'font-semibold'}`}>
                      {row.feature}
                    </td>
                    <td className="table-cell-padding text-center">
                      <ComparisonCell value={row.vibe} highlight={row.highlight} />
                    </td>
                    <td className="table-cell-padding text-center bg-accent/5 dark:bg-accent/10">
                      <ComparisonCell value={row.vibeCoding} highlight={row.highlight} />
                    </td>
                    <td className="table-cell-padding text-center">
                      <ComparisonCell value={row.vip} highlight={row.highlight} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.p
          className="text-center text-fluid-comparison-note font-light mt-clamp-phases max-w-2xl mx-auto text-gray-600 dark:text-gray-400"
          {...slideUp}
          transition={{ delay: 0.3 }}
        >
          * MVP = Minimum Viable Product = funkční základ připravený k prodeji i k dalšímu růstu
        </motion.p>

        <motion.div
          className="text-center font-light mt-clamp-phases max-w-2xl mx-auto text-gray-600 dark:text-gray-400 flex items-start justify-center gap-2"
          {...slideUp}
          transition={{ delay: 0.4 }}
        >
          <Lightbulb className={`${ICON_SIZE} text-gray-600 dark:text-gray-400 flex-shrink-0 mt-0.5`} strokeWidth={STROKE_WIDTH_LIGHTBULB} />
          <span className="text-fluid-comparison-note">Tip: Pokud si nejste jistí, začněte s VIBE+CODING - získáte pochopení i první výsledky.</span>
        </motion.div>
      </motion.div>
    </Section>
  )
}

export default memo(PricingComparison)
