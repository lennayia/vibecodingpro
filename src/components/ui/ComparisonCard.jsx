import Card from './Card'
import FeatureListItem from './FeatureListItem'

export default function ComparisonCard({ data, direction, delay }) {
  const { name, subtitle, type, features, quote } = data

  return (
    <Card
      background="light"
      animate={true}
      delay={delay}
      initial={{ opacity: 0, x: direction === "left" ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="mb-12 text-center">
        <h3 className="font-display font-bold mb-2">
          {name}
        </h3>
        <p className="text-xl font-light">{subtitle}</p>
      </div>

      <div className="space-y-4 mb-6">
        {features.map((feature, index) => (
          <FeatureListItem
            key={index}
            text={feature.text}
            type={type}
          />
        ))}
      </div>

      <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
        <p className="italic text-center">
          „{quote}"
        </p>
      </div>
    </Card>
  )
}
