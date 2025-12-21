import { memo } from 'react'
import Card from './Card'
import FeatureListItem from './FeatureListItem'

function ComparisonCard({ data, direction, delay, background = "light" }) {
  const { name, subtitle, type, features, quote } = data

  return (
    <Card
      background={background}
      animate={true}
      delay={delay}
      initial={{ opacity: 0, x: direction === "left" ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="!px-2"
    >
      <div className="mb-6 text-center">
        <h3 className="font-display font-bold mb-2">
          {name}
        </h3>
        <p className="text-xl font-light">{subtitle}</p>
      </div>

      <div className="space-y-2 mb-4">
        {features.map((feature, index) => (
          <FeatureListItem
            key={index}
            text={feature.text}
            type={type}
          />
        ))}
      </div>

      <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
        <p className="italic text-center text-xl">
          „{quote}"
        </p>
      </div>
    </Card>
  )
}

export default memo(ComparisonCard)
