import { memo } from 'react'
import { Check, X } from 'lucide-react'

function FeatureListItem({ text, type = "positive" }) {
  const Icon = type === "positive" ? Check : X
  const colorClass = type === "positive" ? "text-accent" : "text-error"

  return (
    <div className="flex items-start gap-3">
      <Icon className={`w-5 h-5 ${colorClass} flex-shrink-0 mt-0.5`} strokeWidth={2} />
      <span className="text-sm" dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  )
}

export default memo(FeatureListItem)
