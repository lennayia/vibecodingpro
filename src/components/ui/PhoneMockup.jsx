import { memo } from 'react'
import { motion } from 'framer-motion'
import { slideUp } from '../../constants/animations'

function PhoneMockup({ imageSrc, imageAlt = 'App Screenshot' }) {
  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      <motion.div
        {...slideUp}
        transition={{ delay: 0.4 }}
        className="absolute right-0 top-4 sm:top-12 md:top-32 lg:top-20 xl:top-16 opacity-20 sm:opacity-25 md:opacity-30"
      >
        <div className="relative" style={{
          width: 'clamp(100px, 25vw, 250px)',
          aspectRatio: '210/428'
        }}>
          {/* Phone Mockup */}
          <div className="relative w-full h-full" style={{ perspective: '1000px' }}>
            <motion.div
              className="relative w-full h-full"
              style={{
                rotate: 15,
                rotateX: 15,
                rotateY: -35,
                transformStyle: 'preserve-3d',
              }}
            >
              {/* iPhone Frame (Main) */}
              <div
                className="relative w-full h-full"
                style={{
                  background: '#1a1a1a',
                  borderRadius: '38px',
                  padding: '10px',
                  boxShadow: '20px 12px 35px rgba(0,0,0,0.9), 50px 120px 350px rgba(0,255,136,0.25), 35px 100px 250px rgba(0,200,255,0.2), 0 2px 6px rgba(0,0,0,0.15), inset 0 0 6px rgba(255,255,255,0.1), inset 0 -20px 40px rgba(0,0,0,1), inset 0 -12px 24px rgba(0,0,0,0.95)',
                  zIndex: 10,
                }}
              >
                {/* Notch */}
                <div
                  className="absolute top-0 left-1/2 transform -translate-x-1/2 z-20"
                  style={{
                    width: '105px',
                    height: '22px',
                    background: '#1a1a1a',
                    borderBottomLeftRadius: '15px',
                    borderBottomRightRadius: '15px',
                  }}
                >
                  {/* Speaker */}
                  <div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    style={{
                      width: '45px',
                      height: '5px',
                      background: '#0a0a0a',
                      borderRadius: '2.5px',
                    }}
                  />
                </div>

                {/* Screen */}
                <div
                  className="relative overflow-hidden"
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '32px',
                    background: '#000',
                  }}
                >
                  {/* Screen Content - Image */}
                  <motion.img
                    src={imageSrc}
                    alt={imageAlt}
                    className="w-full h-full object-cover relative z-10"
                    loading="lazy"
                    style={{
                      filter: 'drop-shadow(0.5px 0 0 rgba(0,255,136,0.15)) drop-shadow(-0.5px 0 0 rgba(0,200,255,0.15))'
                    }}
                    animate={{
                      filter: [
                        'drop-shadow(0.5px 0 0 rgba(0,255,136,0.15)) drop-shadow(-0.5px 0 0 rgba(0,200,255,0.15))',
                        'drop-shadow(0.8px 0 0 rgba(0,255,136,0.18)) drop-shadow(-0.8px 0 0 rgba(0,200,255,0.18))',
                        'drop-shadow(0.5px 0 0 rgba(0,255,136,0.15)) drop-shadow(-0.5px 0 0 rgba(0,200,255,0.15))',
                      ],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: 'easeInOut'
                    }}
                  />

                  {/* Slower scanlines */}
                  <motion.div
                    className="absolute inset-0 pointer-events-none z-20"
                    style={{
                      backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 255, 136, 0.08) 2px, rgba(0, 255, 136, 0.08) 4px)',
                    }}
                    animate={{
                      y: [0, -100],
                      opacity: [0.12, 0.18, 0.12],
                    }}
                    transition={{
                      y: {
                        duration: 8,
                        repeat: Infinity,
                        ease: 'linear'
                      },
                      opacity: {
                        duration: 5,
                        repeat: Infinity,
                        ease: 'easeInOut'
                      }
                    }}
                  />

                  {/* Subtle glitch bars */}
                  <motion.div
                    className="absolute inset-0 z-30"
                    style={{
                      background: 'repeating-linear-gradient(0deg, transparent 0%, transparent 40%, rgba(0, 255, 136, 0.06) 40%, rgba(0, 255, 136, 0.06) 42%, transparent 42%)',
                    }}
                    animate={{
                      y: [0, 150, -50, 0],
                      opacity: [0, 0.2, 0, 0.15, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 12,
                      ease: 'linear'
                    }}
                  />
                </div>
                {/* End of Screen */}

                {/* Side Button (Power) */}
                <div
                  className="absolute right-0 top-24"
                  style={{
                    width: '3px',
                    height: '45px',
                    background: '#0a0a0a',
                    borderTopLeftRadius: '1.5px',
                    borderBottomLeftRadius: '1.5px',
                  }}
                />

                {/* Volume Buttons */}
                <div
                  className="absolute left-0 top-21"
                  style={{
                    width: '3px',
                    height: '22px',
                    background: '#0a0a0a',
                    borderTopRightRadius: '1.5px',
                    borderBottomRightRadius: '1.5px',
                  }}
                />
                <div
                  className="absolute left-0 top-48"
                  style={{
                    width: '3px',
                    height: '22px',
                    background: '#0a0a0a',
                    borderTopRightRadius: '1.5px',
                    borderBottomRightRadius: '1.5px',
                  }}
                />
              </div>
              {/* End of iPhone Frame (Front Face) */}
            </motion.div>
            {/* End of 3D Phone Container */}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default memo(PhoneMockup)
