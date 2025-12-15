import { motion } from 'framer-motion'
import { useState, useRef, useEffect, memo, useMemo } from 'react'
import Section from '../layout/Section'
import ParticleBackground from '../ui/ParticleBackground'
import { fadeIn, slideUp } from '../../constants/animations'

const AnimatedPhotoWithParticles = memo(function AnimatedPhotoWithParticles() {
  const containerRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  // Intersection Observer - pausovat photo animace když není viditelná
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          setIsVisible(entry.isIntersecting)
        })
      },
      { threshold: 0.1 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
  }, [])

  return (
    <div className="absolute inset-0 z-0 overflow-hidden" ref={containerRef}>
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
    animation: verticalRotate 20s linear infinite;
  }

  .photo-fade {
    animation: photoFade 20s linear infinite;
  }

  /* Disable heavy animations on mobile for performance */
  @media (max-width: 767px) {
    .vertical-rotate {
      animation: none !important;
    }
    .photo-fade {
      animation: none !important;
      opacity: 0.15 !important;
      filter: none !important;
    }
  }
`}</style>

      {/* Particles - ZA fotkou */}
      <ParticleBackground
        particleCount={130}
        showConnections={false}
        mouseInteraction={false}
        opacity={0.6}
      />

      <div
        className="absolute inset-y-0 right-0 w-1/3 md:w-1/2 lg:w-2/3 overflow-hidden"
        style={{
          aspectRatio: '832/1248',
          transform: 'translateX(20%)',
          willChange: 'transform',
        }}
      >
        {/* Vertikální otáčení - paused on mobile via CSS */}
        <div
          className="h-full w-full vertical-rotate"
          style={{
            transformStyle: 'preserve-3d',
            maskImage: 'linear-gradient(to right, transparent 0%, black 30%, black 100%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 30%, black 100%)',
            willChange: 'transform',
            animationPlayState: isVisible ? 'running' : 'paused',
          }}
        >
          {/* Přední strana */}
          <div className="absolute inset-0" style={{ backfaceVisibility: 'hidden', willChange: 'transform' }}>
            <img
              src="/lenka.webp"
              alt=""
              width="832"
              height="1248"
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover object-center md:object-[center_-60px] lg:object-[center_-120px] photo-fade"
              style={{
                maskImage: 'linear-gradient(to right, transparent 0%, black 20%, black 100%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 20%, black 100%)',
                willChange: 'opacity, filter',
                animationPlayState: isVisible ? 'running' : 'paused',
              }}
            />
          </div>

          {/* Zadní strana - zrcadlově */}
          <div
            className="absolute inset-0"
            style={{
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
              willChange: 'transform'
            }}
          >
            <img
              src="/lenka.webp"
              alt=""
              width="832"
              height="1248"
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover object-center md:object-[center_-60px] lg:object-[center_-120px] photo-fade"
              style={{
                transform: 'scaleX(-1)',
                maskImage: 'linear-gradient(to left, transparent 0%, black 20%, black 100%)',
                WebkitMaskImage: 'linear-gradient(to left, transparent 0%, black 20%, black 100%)',
                willChange: 'opacity, filter',
                animationPlayState: isVisible ? 'running' : 'paused',
              }}
            />
          </div>
        </div>
      </div>

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to right, #05050f 0%, #05050f 45%, transparent 60%)',
        }}
      />
    </div>
  )
})

export default function WhyMeSeo() {
  const credentials = useMemo(() => [
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
  ], [])

  return (
    <Section
      background="dark"
      className="min-h-screen flex items-center justify-center !pt-4 !pb-8 md:!pt-4 md:!pb-8 lg:!pt-8 lg:!pb-16"
      showScrollIndicator={true}
      backgroundElement={<AnimatedPhotoWithParticles />}
    >
      <motion.div {...fadeIn}>
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
              {...slideUp}
              transition={{ delay: index * 0.1 }}
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