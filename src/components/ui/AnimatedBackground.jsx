import ParticleBackground from './ParticleBackground'
import NeuralBackground from './NeuralBackground'

/**
 * Unified animated background component
 * Supports multiple background types with consistent API
 */
export default function AnimatedBackground({
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
      return <NeuralBackground nodeCount={count || 20} />

    case 'particles':
    default:
      return (
        <ParticleBackground
          particleCount={particleCount || count}
          showConnections={showConnections}
          mouseInteraction={mouseInteraction}
          opacity={opacity}
        />
      )
  }
}
