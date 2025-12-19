import ParticleBackground from './ParticleBackground'
import BinaryBackground from './BinaryBackground'

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
    case 'binary':
      return <BinaryBackground count={count || 40} />

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
