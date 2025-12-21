import { useEffect, useRef, useState } from 'react'

export default function ParticleBackground({
  particleCount: customParticleCount,
  showConnections = true,
  mouseInteraction = true,
  opacity = 0.6
}) {
  const canvasRef = useRef(null)
  const particles = useRef([])
  const mousePos = useRef({ x: null, y: null })
  const animationFrameId = useRef(null)
  const isVisibleRef = useRef(true)
  const [isMobile, setIsMobile] = useState(false)

  // Detect mobile (<640px) and disable particles completely for performance
  // Tablets (>=640px) get particles
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    const parentElement = canvas.parentElement
    let width = parentElement.clientWidth
    let height = parentElement.clientHeight

    // Check dark mode
    const isDark = document.documentElement.classList.contains('dark')
    // Light mode: blue (#0000CD) = rgb(0, 0, 205)
    // Dark mode: green (#0DDD0D) = rgb(13, 221, 13)
    const particleColor = isDark ? '13, 221, 13' : '0, 0, 205'

    // Reduced particle count on mobile, normal on desktop
    const particleCount = customParticleCount || (isMobile ? 30 : 80)

    canvas.width = width
    canvas.height = height

    // Particle class
    class Particle {
      constructor(index) {
        this.reset(index)
      }

      reset(index) {
        // Distribute particles evenly across the screen, including top area
        // First 25% of particles will be forced to upper area
        const forceTopArea = index !== undefined && index < particleCount * 0.25

        this.x = Math.random() * width

        if (forceTopArea) {
          // Force some particles to top 30% of screen
          this.y = Math.random() * (height * 0.3)
        } else {
          this.y = Math.random() * height
        }

        this.vx = (Math.random() - 0.5) * 0.5
        this.vy = (Math.random() - 0.5) * 0.5
        this.radius = Math.random() * 1.5 + 1.5 // Částice (1.5-3px)
        this.opacity = Math.random() * 0.3 + 0.2 // Jemnější opacity (0.2-0.5)
      }

      update(isStatic = false) {
        // Skip movement on mobile (static particles)
        if (isStatic) return

        // Movement
        this.x += this.vx
        this.y += this.vy

        // Mouse repulsion (only if enabled)
        if (mouseInteraction && mousePos.current.x !== null && mousePos.current.y !== null) {
          const dx = mousePos.current.x - this.x
          const dy = mousePos.current.y - this.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          const maxDistance = 100

          if (distance < maxDistance) {
            const force = (maxDistance - distance) / maxDistance
            this.x -= (dx / distance) * force * 2
            this.y -= (dy / distance) * force * 2
          }
        }

        // Boundary check
        if (this.x < 0 || this.x > width) this.vx *= -1
        if (this.y < 0 || this.y > height) this.vy *= -1

        // Keep in bounds
        this.x = Math.max(0, Math.min(width, this.x))
        this.y = Math.max(0, Math.min(height, this.y))
      }

      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${particleColor}, ${this.opacity})`
        ctx.fill()
      }
    }

    // Initialize particles
    particles.current = []
    for (let i = 0; i < particleCount; i++) {
      particles.current.push(new Particle(i))
    }

    // Draw connections between particles
    function drawConnections() {
      for (let i = 0; i < particles.current.length; i++) {
        for (let j = i + 1; j < particles.current.length; j++) {
          const dx = particles.current[i].x - particles.current[j].x
          const dy = particles.current[i].y - particles.current[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            ctx.beginPath()
            ctx.moveTo(particles.current[i].x, particles.current[i].y)
            ctx.lineTo(particles.current[j].x, particles.current[j].y)
            const opacity = (1 - distance / 150) * 0.15 // Jemnější čáry
            ctx.strokeStyle = `rgba(${particleColor}, ${opacity})`
            ctx.lineWidth = 1 // Normální tloušťka
            ctx.stroke()
          }
        }
      }
    }

    // Animation loop (or single render on mobile)
    function animate() {
      // Only animate if visible
      if (!isVisibleRef.current && !isMobile) {
        animationFrameId.current = requestAnimationFrame(animate)
        return
      }

      ctx.clearRect(0, 0, width, height)

      particles.current.forEach(particle => {
        particle.update(isMobile) // Pass isMobile - static on mobile
        particle.draw()
      })

      // Draw connections only if enabled
      if (showConnections) {
        drawConnections()
      }

      // On mobile, render only once (static). On desktop, keep animating.
      if (!isMobile) {
        animationFrameId.current = requestAnimationFrame(animate)
      }
    }

    animate()

    // Intersection Observer to pause animation when not visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          isVisibleRef.current = entry.isIntersecting
        })
      },
      { threshold: 0 }
    )

    observer.observe(canvas)

    // Mouse move handler
    function handleMouseMove(e) {
      const rect = canvas.getBoundingClientRect()
      mousePos.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      }
    }

    // Mouse leave handler
    function handleMouseLeave() {
      mousePos.current = { x: null, y: null }
    }

    // Resize handler
    function handleResize() {
      width = parentElement.clientWidth
      height = parentElement.clientHeight
      canvas.width = width
      canvas.height = height

      // Recalculate particle positions - reset particles that are outside new viewport
      particles.current.forEach(particle => {
        if (particle.x > width || particle.y > height) {
          // Particle is outside new viewport - give it a new random position
          particle.x = Math.random() * width
          particle.y = Math.random() * height
        }
      })
    }

    // Add mouse event listeners only if mouse interaction is enabled
    if (mouseInteraction) {
      window.addEventListener('mousemove', handleMouseMove)
      window.addEventListener('mouseleave', handleMouseLeave)
    }
    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      if (mouseInteraction) {
        window.removeEventListener('mousemove', handleMouseMove)
        window.removeEventListener('mouseleave', handleMouseLeave)
      }
      window.removeEventListener('resize', handleResize)
      observer.disconnect()
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current)
      }
    }
  }, [customParticleCount, showConnections, mouseInteraction, isMobile])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none"
      style={{ opacity }}
    />
  )
}
