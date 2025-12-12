import { Check } from 'lucide-react'
import Card from './Card'
import Button from './Button'
import Badge from './Badge'

export default function PricingCard({
  title,
  duration,
  price,
  description,
  features,
  resultTitle,
  resultDescription,
  buttonText,
  isPopular = false,
  delay = 0
}) {
  return (
    <Card background="light" animate={true} delay={delay} className="relative">
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <Badge className="btn-badge-accent">NEJOBLÍBENĚJŠÍ</Badge>
        </div>
      )}

      <div className={`mb-6 ${isPopular ? 'mt-4' : ''}`}>
        <h3 className="font-display font-bold mb-2">
          {title}
        </h3>
        <p className="mb-4">{duration}</p>
        <p>
          {description}
        </p>
      </div>

      <div className="mb-8">
        <div className="text-4xl font-display font-bold mb-2">
          {price}
        </div>
      </div>

      <div className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-2">
            <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" strokeWidth={2} />
            <span dangerouslySetInnerHTML={{ __html: feature }} />
          </div>
        ))}
      </div>

      <div className="mb-6 p-4 bg-gray-100 dark:bg-[#05050f] rounded-xl border border-gray-200 dark:border-gray-700">
        <p className="font-semibold mb-1">{resultTitle}</p>
        <p>
          {resultDescription}
        </p>
      </div>

      <Button>
        {buttonText}
      </Button>
    </Card>
  )
}
