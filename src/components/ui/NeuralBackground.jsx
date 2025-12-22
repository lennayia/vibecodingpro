import { useEffect, useRef, useState, useMemo } from 'react'

export default function NeuralBackground({ nodeCount = 15 }) {
  const canvasRef = useRef(null)
  const nodesRef = useRef([])
  const connectionsRef = useRef([])
  const travelingSignalsRef = useRef([]) // Běžící signály
  const animationFrameId = useRef(null)
  const isVisibleRef = useRef(true)
  const [isMobile, setIsMobile] = useState(false)

  // Detect mobile and reduced motion
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Generate neural network structure
  const networkStructure = useMemo(() => {
    const layers = 5
    const nodes = []
    const connections = []

    // Configuration: [animated nodes, static depth nodes]
    const nodesPerLayerConfig = {
      0: { animated: 0, static: 10 },  // Více statických bodů
      1: { animated: 4, static: 8 },   // Více animovaných i statických
      2: { animated: 5, static: 10 },  // Centrum - nejvíc bodů
      3: { animated: 4, static: 8 },
      4: { animated: 0, static: 10 },
    }

    // Generate nodes
    let nodeId = 0
    for (let layer = 0; layer < layers; layer++) {
      const x = layers > 1 ? layer / (layers - 1) : 0.5
      const config = nodesPerLayerConfig[layer]

      // Animated nodes - larger and more visible
      for (let i = 0; i < config.animated; i++) {
        const y = config.animated > 1 ? i / (config.animated - 1) : 0.5
        const baseX = Math.max(0, Math.min(1, x + (Math.random() - 0.5) * 0.1))
        const baseY = Math.max(0, Math.min(1, y + (Math.random() - 0.5) * 0.1))
        nodes.push({
          id: nodeId++,
          x: baseX,
          y: baseY,
          baseX, // Remember base position
          baseY,
          vx: (Math.random() - 0.5) * 0.0003, // Slow floating velocity
          vy: (Math.random() - 0.5) * 0.0003,
          layer,
          isAnimated: true,
          baseRadius: 4,
          targetRadius: 7,
          currentRadius: 4,
          opacity: 0.6,
          targetOpacity: 0.9,
          currentOpacity: 0.6,
          animationPhase: Math.random() * Math.PI * 2,
        })
      }

      // Static depth nodes - more visible
      for (let i = 0; i < config.static; i++) {
        const y = config.static > 1 ? i / (config.static - 1) : 0.5
        nodes.push({
          id: nodeId++,
          x: Math.max(0, Math.min(1, x + (Math.random() - 0.5) * 0.15)),
          y: Math.max(0, Math.min(1, y + (Math.random() - 0.5) * 0.15)),
          layer,
          isAnimated: false,
          radius: 2 + Math.random() * 2,
          opacity: 0.25 + Math.random() * 0.3,
        })
      }
    }

    // Generate connections - store references to nodes, not IDs (for performance)
    nodes.forEach((node1) => {
      nodes.forEach((node2) => {
        if (node2.layer === node1.layer + 1) {
          // Always connect animated nodes
          if (node1.isAnimated && node2.isAnimated) {
            connections.push({ fromNode: node1, toNode: node2 })
          }
          // Sparse connections for depth nodes
          else if (!node1.isAnimated && !node2.isAnimated && Math.random() < 0.2) {
            connections.push({ fromNode: node1, toNode: node2 })
          }
          // Mixed connections
          else if ((node1.isAnimated || node2.isAnimated) && Math.random() < 0.3) {
            connections.push({ fromNode: node1, toNode: node2 })
          }
        }
      })
    })

    return { nodes, connections }
  }, [nodeCount])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    const parentElement = canvas.parentElement

    // Check dark mode dynamically
    const getNodeColor = () => {
      const isDark = document.documentElement.classList.contains('dark')
      return isDark ? '13, 221, 13' : '0, 0, 205' // Green in dark, blue in light
    }

    // Wait for parent to have dimensions
    const initCanvas = () => {
      let width = parentElement.clientWidth || window.innerWidth
      let height = parentElement.clientHeight || window.innerHeight

      canvas.width = width
      canvas.height = height

      // Initialize nodes with pixel positions
      nodesRef.current = networkStructure.nodes.map(node => ({
        ...node,
        px: node.x * width,
        py: node.y * height,
      }))

      // Update connections to reference the new nodes with px/py
      connectionsRef.current = networkStructure.connections.map(conn => ({
        fromNode: nodesRef.current.find(n => n.id === conn.fromNode.id),
        toNode: nodesRef.current.find(n => n.id === conn.toNode.id),
      }))

      return { width, height }
    }

    const { width: initialWidth, height: initialHeight } = initCanvas()
    let width = initialWidth
    let height = initialHeight

    // Animation loop
    let time = 0
    let lastSignalSpawn = 0

    function animate() {
      // Skip rendering if not visible (but keep loop running)
      if (!isVisibleRef.current) {
        if (!isMobile) {
          animationFrameId.current = requestAnimationFrame(animate)
        }
        return
      }

      // Get current node color based on theme
      const nodeColor = getNodeColor()

      ctx.clearRect(0, 0, width, height)

      // Generate new traveling signals periodically (only on desktop)
      if (!isMobile && connectionsRef.current.length > 0) {
        const timeSinceLastSpawn = time - lastSignalSpawn
        if (timeSinceLastSpawn > 1.5) { // Spawn signal every 1.5 seconds
          const randomConnection = connectionsRef.current[Math.floor(Math.random() * connectionsRef.current.length)]
          travelingSignalsRef.current.push({
            connection: randomConnection,
            progress: 0, // 0 to 1 along the line
            speed: 0.001 + Math.random() * 0.0008, // Ultra slow speed (0.001 - 0.0018)
            size: 3 + Math.random() * 2
          })
          lastSignalSpawn = time
        }
      }

      // Draw connections - subtle and elegant (optimized - no .find())
      connectionsRef.current.forEach(conn => {
        // Direct reference to nodes (no .find() needed)
        const node1 = conn.fromNode
        const node2 = conn.toNode

        // Gradient for elegant fading lines
        const gradient = ctx.createLinearGradient(node1.px, node1.py, node2.px, node2.py)
        gradient.addColorStop(0, `rgba(${nodeColor}, 0.05)`)
        gradient.addColorStop(0.5, `rgba(${nodeColor}, 0.15)`)
        gradient.addColorStop(1, `rgba(${nodeColor}, 0.05)`)

        ctx.beginPath()
        ctx.moveTo(node1.px, node1.py)
        ctx.lineTo(node2.px, node2.py)
        ctx.strokeStyle = gradient
        ctx.lineWidth = 1
        ctx.stroke()
      })

      // Update and draw traveling signals (optimized - no .find())
      if (!isMobile) {
        travelingSignalsRef.current = travelingSignalsRef.current.filter(signal => {
          // Update progress
          signal.progress += signal.speed

          // Remove completed signals
          if (signal.progress >= 1) return false

          // Direct reference to nodes (no .find() needed)
          const node1 = signal.connection.fromNode
          const node2 = signal.connection.toNode

          // Calculate position along the line
          const x = node1.px + (node2.px - node1.px) * signal.progress
          const y = node1.py + (node2.py - node1.py) * signal.progress

          // Draw glowing signal
          ctx.shadowBlur = 12
          ctx.shadowColor = `rgba(${nodeColor}, 0.8)`
          ctx.beginPath()
          ctx.arc(x, y, signal.size, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(${nodeColor}, 0.9)`
          ctx.fill()
          ctx.shadowBlur = 0

          return true // Keep signal
        })
      }

      // Update and draw nodes
      time += 0.05 // Faster pulsing (~1.5 second cycle)
      nodesRef.current.forEach(node => {
        if (node.isAnimated && !isMobile) {
          // Floating movement - gentle drift
          node.x += node.vx
          node.y += node.vy

          // Keep nodes near their base position (max 3% drift)
          const maxDrift = 0.03
          if (Math.abs(node.x - node.baseX) > maxDrift) {
            node.vx *= -1
            node.x = node.baseX + Math.sign(node.x - node.baseX) * maxDrift
          }
          if (Math.abs(node.y - node.baseY) > maxDrift) {
            node.vy *= -1
            node.y = node.baseY + Math.sign(node.y - node.baseY) * maxDrift
          }

          // Update pixel positions
          node.px = node.x * width
          node.py = node.y * height

          // Smooth pulsing animation
          const phase = time + node.animationPhase
          const pulse = (Math.sin(phase) + 1) / 2 // 0 to 1

          node.currentRadius = node.baseRadius + pulse * (node.targetRadius - node.baseRadius)
          node.currentOpacity = node.opacity + pulse * (node.targetOpacity - node.opacity)

          // Draw animated node with subtle glow
          ctx.shadowBlur = 8
          ctx.shadowColor = `rgba(${nodeColor}, ${node.currentOpacity * 0.6})`
          ctx.beginPath()
          ctx.arc(node.px, node.py, node.currentRadius, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(${nodeColor}, ${node.currentOpacity})`
          ctx.fill()
          ctx.shadowBlur = 0
        } else {
          // Draw static depth node - subtle
          ctx.beginPath()
          ctx.arc(node.px, node.py, node.radius, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(${nodeColor}, ${node.opacity})`
          ctx.fill()
        }
      })

      // Continue animation on desktop, render once on mobile
      if (!isMobile) {
        animationFrameId.current = requestAnimationFrame(animate)
      }
    }

    animate()

    // Intersection Observer to pause when not visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          isVisibleRef.current = entry.isIntersecting
        })
      },
      { threshold: 0 }
    )

    observer.observe(canvas)

    // Resize handler
    function handleResize() {
      width = parentElement.clientWidth || window.innerWidth
      height = parentElement.clientHeight || window.innerHeight
      canvas.width = width
      canvas.height = height

      // Update pixel positions (connections still reference same node objects)
      nodesRef.current.forEach(node => {
        node.px = node.x * width
        node.py = node.y * height
      })

      // Redraw immediately after resize
      if (isMobile) {
        time = 0
        animate()
      }
    }

    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize)
      observer.disconnect()
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current)
      }
    }
  }, [networkStructure, isMobile])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none"
      style={{ opacity: 0.5 }}
    />
  )
}
