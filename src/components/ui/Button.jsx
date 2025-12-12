export default function Button({
  children,
  variant = "primary",
  size = "default",
  className = "",
  ...props
}) {
  const baseClass = "btn"
  const variantClass = variant === "primary" ? "btn-primary" : ""
  const sizeClass = size === "lg" ? "btn-lg" : ""

  return (
    <button
      className={`${baseClass} ${variantClass} ${sizeClass} ${className}`}
      style={{ padding: '0.875rem 1.75rem' }}
      {...props}
    >
      {children}
    </button>
  )
}
