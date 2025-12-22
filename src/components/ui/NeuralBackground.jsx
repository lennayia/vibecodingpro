import { motion } from 'framer-motion'
import { useMemo, useState, useEffect } from 'react'

export default function NeuralBackground({ nodeCount = 15 }) {
  // Detect if user prefers reduced motion or is on mobile
  const [shouldAnimate, setShouldAnimate] = useState(true)

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    // Check if mobile (simpler check)
    const isMobile = window.innerWidth < 768

    setShouldAnimate(!prefersReducedMotion && !isMobile)
  }, [])
  // Generate nodes in a more structured grid pattern (neural network layers)
  const nodes = useMemo(() => {
    const layers = 5 // Number of layers in neural network
    const nodesPerLayer = Math.ceil(nodeCount / layers)
    const nodesList = []

    for (let layer = 0; layer < layers; layer++) {
      const x = layers > 1 ? (layer * 100) / (layers - 1) : 50 // 0%, 25%, 50%, 75%, 100%
      for (let i = 0; i < nodesPerLayer; i++) {
        if (nodesList.length >= nodeCount) break
        const y = nodesPerLayer > 1 ? (i * 100) / (nodesPerLayer - 1) : 50 // Spread from 0% to 100%
        nodesList.push({
          id: nodesList.length,
          x: Math.max(0, Math.min(100, x + (Math.random() - 0.5) * 10)), // Full width 0-100%
          y: Math.max(0, Math.min(100, y + (Math.random() - 0.5) * 10)), // Full height 0-100%
          layer,
          delay: Math.random() * 3,
        })
      }
    }
    return nodesList
  }, [nodeCount])

  // Generate connections primarily between adjacent layers
  const connections = useMemo(() => {
    const lines = []

    nodes.forEach((node1) => {
      // Connect to next layer nodes
      nodes.forEach((node2) => {
        if (node2.layer === node1.layer + 1) {
          lines.push({
            id: `${node1.id}-${node2.id}`,
            x1: node1.x,
            y1: node1.y,
            x2: node2.x,
            y2: node2.y,
            delay: Math.random() * 5,
          })
        }
      })
    })

    return lines
  }, [nodes])

  // Return subtle static version on mobile for performance
  if (!shouldAnimate) {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-50 text-accent dark:text-[#0DDD0D]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="connectionGradientStatic" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="currentColor" stopOpacity="0.2" />
              <stop offset="50%" stopColor="currentColor" stopOpacity="0.5" />
              <stop offset="100%" stopColor="currentColor" stopOpacity="0.2" />
            </linearGradient>
          </defs>

          {/* Simplified connections */}
          {connections.filter((line, i) => i % 2 === 0).map((line) => (
            <line
              key={line.id}
              x1={`${line.x1}%`}
              y1={`${line.y1}%`}
              x2={`${line.x2}%`}
              y2={`${line.y2}%`}
              stroke="url(#connectionGradientStatic)"
              strokeWidth="1.5"
            />
          ))}

          {/* Minimal nodes */}
          {nodes.filter((node, i) => i % 2 === 0).map((node) => (
            <circle
              key={node.id}
              cx={`${node.x}%`}
              cy={`${node.y}%`}
              r="4"
              fill="currentColor"
              opacity="0.4"
            />
          ))}
        </svg>
      </div>
    )
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-50">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Gradient for connections - Light mode */}
          <linearGradient id="connectionGradientLight" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0000CD" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#0000CD" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#0000CD" stopOpacity="0.2" />
          </linearGradient>

          {/* Gradient for connections - Dark mode */}
          <linearGradient id="connectionGradientDark" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0DDD0D" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#0DDD0D" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#0DDD0D" stopOpacity="0.2" />
          </linearGradient>

          {/* Glow effect for nodes */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Connections (lines) with gradient - Light mode */}
        {connections.map((line) => (
          <g key={line.id}>
            <motion.line
              className="dark:hidden"
              x1={`${line.x1}%`}
              y1={`${line.y1}%`}
              x2={`${line.x2}%`}
              y2={`${line.y2}%`}
              stroke="url(#connectionGradientLight)"
              strokeWidth="2"
              initial={{ pathLength: 0, opacity: 0.3 }}
              animate={{
                pathLength: [0, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                pathLength: { duration: 3, repeat: Infinity, delay: line.delay },
                opacity: { duration: 4, repeat: Infinity, delay: line.delay, ease: 'easeInOut' },
              }}
            />
            {/* Connections (lines) with gradient - Dark mode */}
            <motion.line
              className="hidden dark:block"
              x1={`${line.x1}%`}
              y1={`${line.y1}%`}
              x2={`${line.x2}%`}
              y2={`${line.y2}%`}
              stroke="url(#connectionGradientDark)"
              strokeWidth="2"
              initial={{ pathLength: 0, opacity: 0.3 }}
              animate={{
                pathLength: [0, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                pathLength: { duration: 3, repeat: Infinity, delay: line.delay },
                opacity: { duration: 4, repeat: Infinity, delay: line.delay, ease: 'easeInOut' },
              }}
            />
          </g>
        ))}

        {/* Flow pulses along connections */}
        {connections.filter((_, i) => i % 2 === 0).map((line) => (
          <g key={`flow-${line.id}`}>
            {/* Light mode flow */}
            <motion.circle
              className="dark:hidden"
              r="3"
              fill="#0000CD"
              filter="url(#glow)"
              initial={{
                cx: `${line.x1}%`,
                cy: `${line.y1}%`,
                opacity: 0,
              }}
              animate={{
                cx: [`${line.x1}%`, `${line.x2}%`],
                cy: [`${line.y1}%`, `${line.y2}%`],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: line.delay,
                ease: 'easeInOut',
              }}
            />
            {/* Dark mode flow */}
            <motion.circle
              className="hidden dark:block"
              r="3"
              fill="#0DDD0D"
              filter="url(#glow)"
              initial={{
                cx: `${line.x1}%`,
                cy: `${line.y1}%`,
                opacity: 0,
              }}
              animate={{
                cx: [`${line.x1}%`, `${line.x2}%`],
                cy: [`${line.y1}%`, `${line.y2}%`],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: line.delay,
                ease: 'easeInOut',
              }}
            />
          </g>
        ))}

        {/* Nodes (neurons) with rings */}
        {nodes.map((node) => (
          <g key={node.id}>
            {/* Light mode nodes */}
            <g className="dark:hidden">
              {/* Outer ring */}
              <motion.circle
                cx={`${node.x}%`}
                cy={`${node.y}%`}
                r="10"
                stroke="#0000CD"
                fill="none"
                strokeWidth="2"
                initial={{ opacity: 0.3, r: 10 }}
                animate={{
                  opacity: [0.3, 0.5, 0.3],
                  r: [10, 12, 10],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: node.delay,
                  ease: 'easeInOut',
                }}
              />
              {/* Inner core */}
              <motion.circle
                cx={`${node.x}%`}
                cy={`${node.y}%`}
                r="5"
                fill="#0000CD"
                filter="url(#glow)"
                initial={{ opacity: 0.6 }}
                animate={{
                  opacity: [0.6, 0.9, 0.6],
                  r: [5, 6, 5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: node.delay,
                  ease: 'easeInOut',
                }}
              />
            </g>
            {/* Dark mode nodes */}
            <g className="hidden dark:block">
              {/* Outer ring */}
              <motion.circle
                cx={`${node.x}%`}
                cy={`${node.y}%`}
                r="10"
                stroke="#0DDD0D"
                fill="none"
                strokeWidth="2"
                initial={{ opacity: 0.3, r: 10 }}
                animate={{
                  opacity: [0.3, 0.5, 0.3],
                  r: [10, 12, 10],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: node.delay,
                  ease: 'easeInOut',
                }}
              />
              {/* Inner core */}
              <motion.circle
                cx={`${node.x}%`}
                cy={`${node.y}%`}
                r="5"
                fill="#0DDD0D"
                filter="url(#glow)"
                initial={{ opacity: 0.6 }}
                animate={{
                  opacity: [0.6, 0.9, 0.6],
                  r: [5, 6, 5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: node.delay,
                  ease: 'easeInOut',
                }}
              />
            </g>
          </g>
        ))}
      </svg>
    </div>
  )
}
