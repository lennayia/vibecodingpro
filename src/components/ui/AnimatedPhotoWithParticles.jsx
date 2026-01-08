import { useState, useRef, useEffect, useCallback, memo, lazy, Suspense } from 'react'
import '../../styles/whyme.css'

// Lazy load ParticleBackground to enable code splitting
const ParticleBackground = lazy(() => import('./ParticleBackground'))

const AnimatedPhotoWithParticles = memo(function AnimatedPhotoWithParticles() {
  const containerRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  // Memoized IntersectionObserver callback
  const handleIntersection = useCallback((entries) => {
    entries.forEach(entry => {
      setIsVisible(entry.isIntersecting)
    })
  }, [])

  // Intersection Observer - pausovat photo animace když není viditelná
  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.1 })

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
  }, [handleIntersection])

  return (
    <div className="absolute inset-0 z-0 overflow-hidden" ref={containerRef}>
      {/* Particles - ZA fotkou */}
      <Suspense fallback={null}>
        <ParticleBackground
          particleCount={130}
          showConnections={false}
          mouseInteraction={false}
          opacity={0.6}
        />
      </Suspense>

      <div className="absolute inset-y-0 right-0 w-1/3 md:w-1/2 lg:w-2/3 overflow-hidden photo-container">
        {/* Vertikální otáčení - paused on mobile via CSS */}
        <div
          className="h-full w-full vertical-rotate rotate-container mask-gradient-right-30"
          style={{
            animationPlayState: isVisible ? 'running' : 'paused',
          }}
        >
          {/* Přední strana */}
          <div className="absolute inset-0 photo-face">
            <img
              src="/thumbnails/lenka.webp"
              alt=""
              width="832"
              height="1248"
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover object-center md:object-[center_-60px] lg:object-[center_-120px] photo-fade mask-gradient-right-20 photo-will-change-effects"
              style={{
                animationPlayState: isVisible ? 'running' : 'paused',
              }}
            />
          </div>

          {/* Zadní strana - zrcadlově */}
          <div className="absolute inset-0 photo-face-back">
            <img
              src="/thumbnails/lenka.webp"
              alt=""
              width="832"
              height="1248"
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover object-center md:object-[center_-60px] lg:object-[center_-120px] photo-fade photo-mirror mask-gradient-left-20 photo-will-change-effects"
              style={{
                animationPlayState: isVisible ? 'running' : 'paused',
              }}
            />
          </div>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none gradient-overlay-whyme" />
    </div>
  )
})

export default AnimatedPhotoWithParticles
