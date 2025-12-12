export default function Badge({ children, className = "" }) {
  return (
    <span className={`btn-badge ${className}`}>
      {children}
    </span>
  )
}
