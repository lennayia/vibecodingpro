import { memo, lazy, Suspense } from 'react'

// Lazy load background components for better performance
const ParticleBackground = lazy(() => import('./ParticleBackground'))
const NeuralBackground = lazy(() => import('./NeuralBackground'))

/**
 * Unified animated background component
 * Supports multiple background types with consistent API
 * Memoized to prevent re-renders when props don't change
 */
function AnimatedBackground({
  type = 'particles',
  count,
  opacity = 0.6,
  // Particle-specific props
  showConnections = true,
  mouseInteraction = true,
  particleCount,
}) {
  // Render appropriate background based on type
  switch (type) {
    case 'neural':
    case 'binary': // Keep binary as alias for backwards compatibility
      return (
        <Suspense fallback={null}>
          <NeuralBackground nodeCount={count || 20} />
        </Suspense>
      )

    case 'particles':
    default:
      return (
        <Suspense fallback={null}>
          <ParticleBackground
            particleCount={particleCount || count}
            showConnections={showConnections}
            mouseInteraction={mouseInteraction}
            opacity={opacity}
          />
        </Suspense>
      )
  }
}

export default memo(AnimatedBackground)
