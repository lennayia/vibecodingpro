import { memo } from 'react'

function Badge({ children, className = "" }) {
  return (
    <span className={`btn-badge ${className}`}>
      {children}
    </span>
  )
}

export default memo(Badge)
