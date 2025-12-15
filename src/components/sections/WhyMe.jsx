import { motion } from 'framer-motion'
import { useState, useRef, useEffect, memo } from 'react'
import Section from '../layout/Section'

const AnimatedPhotoWithParticles = memo(function AnimatedPhotoWithParticles() {
  const containerRef = useRef(null)
  const canvasRef = useRef(null)
  const particlesRef = useRef([])

  // Particle system - kolem celé fotky
  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const ctx = canvas.getContext('2d')
    const updateCanvasSize = () => {
      const rect = container.getBoundingClientRect()
      canvas.width = rect.width
      canvas.height = rect.height
    }

    updateCanvasSize()

    // Create particles
    class Particle {
      constructor() {
        this.reset()
      }

      reset() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.vx = (Math.random() - 0.5) * 0.5
        this.vy = (Math.random() - 0.5) * 0.5
        this.radius = Math.random() * 1.5 + 1.5
        this.opacity = Math.random() * 0.3 + 0.2
      }

      update() {
        this.x += this.vx
        this.y += this.vy

        // Wrap around edges
        if (this.x < 0) this.x = canvas.width
        if (this.x > canvas.width) this.x = 0
        if (this.y < 0) this.y = canvas.height
        if (this.y > canvas.height) this.y = 0
      }

      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0, 255, 136, ${this.opacity})`
        ctx.fill()
      }
    }

    // Initialize particles
    particlesRef.current = []
    for (let i = 0; i < 130; i++) {
      particlesRef.current.push(new Particle())
    }

    // Animation loop
    let animationId
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particlesRef.current.forEach(particle => {
        particle.update()
        particle.draw()
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [])

  return (
    <div className="absolute inset-0 z-0" ref={containerRef}>
      <style>{`
  @keyframes verticalRotate {
    0% {
      transform: perspective(1000px) rotateY(0deg);
    }
    25% {
      transform: perspective(1000px) rotateY(-90deg);
    }
    50% {
      transform: perspective(1000px) rotateY(-180deg);
    }
    75% {
      transform: perspective(1000px) rotateY(-270deg);
    }
    100% {
      transform: perspective(1000px) rotateY(-360deg);
    }
  }

  @keyframes photoFade {
  0% {
    opacity: 0.15;
    filter: blur(0px);
  }
  10% {
    opacity: 0.15;
    filter: blur(0px);
  }
  16% {
    opacity: 0.05;
    filter: blur(10px);
  }
  22% {
    opacity: 0;
    filter: blur(25px);
  }
  28% {
    opacity: 0;
    filter: blur(25px);
  }
  34% {
    opacity: 0.05;
    filter: blur(10px);
  }
  40% {
    opacity: 0.15;
    filter: blur(0px);
  }
  60% {
    opacity: 0.15;
    filter: blur(0px);
  }
  66% {
    opacity: 0.05;
    filter: blur(10px);
  }
  72% {
    opacity: 0;
    filter: blur(25px);
  }
  78% {
    opacity: 0;
    filter: blur(25px);
  }
  84% {
    opacity: 0.05;
    filter: blur(10px);
  }
  90% {
    opacity: 0.15;
    filter: blur(0px);
  }
  100% {
    opacity: 0.15;
    filter: blur(0px);
  }
}

  .vertical-rotate {
    animation: verticalRotate 15s linear infinite;
  }

  .photo-fade {
    animation: photoFade 15s linear infinite;
  }
`}</style>

      {/* Particles canvas - ZA fotkou */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: 0.6 }}
      />

      <div
        className="absolute inset-y-0 right-0 w-1/2"
        style={{
          aspectRatio: '832/1248',
        }}
      >
        {/* Vertikální otáčení */}
        <div className="h-full w-full vertical-rotate" style={{ transformStyle: 'preserve-3d' }}>
          {/* Přední strana */}
          <div className="absolute inset-0" style={{ backfaceVisibility: 'hidden' }}>
            <img
  src="/lenka.webp"
  alt=""
  width="832"
  height="1248"
  loading="lazy"
  decoding="async"
  className="h-full w-full object-cover object-[center_-120px] photo-fade"
/>
          </div>

          {/* Zadní strana - zrcadlově */}
          <div
            className="absolute inset-0"
            style={{
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)'
            }}
          >
            <img
  src="/lenka.webp"
  alt=""
  width="832"
  height="1248"
  loading="lazy"
  decoding="async"
  className="h-full w-full object-cover object-[center_-120px] photo-fade"
/>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-[#f2f2f2] via-[#f2f2f2]/80 to-transparent dark:from-[#05050f] dark:via-[#05050f]/80 dark:to-transparent pointer-events-none" />
    </div>
  )
})

export default function WhyMeSeo() {
  const credentials = [
    {
      title: "Ani řádek kódu",
      description: "Dneska chápu pasti vibecodingu. Sama jsem do nich šlapala a zjišťovala, kudy vede cesta."
    },
    {
      title: "8 aplikací",
      description: "CoachPro, PaymentsPro, PianoPro... To jsou reálné projekty pro reálné lidi."
    },
    {
      title: "2 500+ hodin praxe",
      description: "Chyby, pokusy, průlomy. Předám vám je, a vy to zvládnete rychleji. A nebojte, chyby si uděláte i svoje."
    },
    {
      title: "Učím, co sama dělám",
      description: "Nepřebírám informace, zkouším a ověřuju na vlastní kůži. Učím z toho, co funguje."
    }
  ]

  return (
    <Section
      background="dark"
      className="min-h-screen flex items-center justify-center !pt-4 !pb-8 md:!pt-4 md:!pb-8 lg:!pt-8 lg:!pb-16"
      showScrollIndicator={true}
      backgroundElement={<AnimatedPhotoWithParticles />}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="font-display font-bold mb-6 text-center" style={{ lineHeight: '1.3' }}>
          Proč zrovna se mnou?
        </h2>

        <p className="text-xl text-center mb-16">
          Pomáhám podnikatelkám, které chtějí zhmotnit svoji vizi – ale nechtějí se učit programovat.
        </p>

        <div className="space-y-8">
          {credentials.map((item, index) => (
            <motion.div
              key={index}
              className="border-b border-gray-700 pb-8 last:border-b-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="grid md:grid-cols-2 gap-6 items-start">
                <h3 className="font-display font-bold">
                  {item.title}
                </h3>
                <p>
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  )
}