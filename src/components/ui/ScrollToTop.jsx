import { useState, useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 100) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility, { passive: true })
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [])

  if (!isVisible) return null

  return createPortal(
    <button
      onClick={scrollToTop}
      aria-label="Zpět nahoru"
      className="scroll-to-top-btn"
      style={{
        position: 'fixed',
        right: '24px',
        bottom: '24px',
        zIndex: 9999,
        padding: 0,
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        opacity: isVisible ? 1 : 0,
        transform: 'none',
        transition: 'opacity 0.3s ease',
      }}
    >
      <svg
        className="w-8 h-8 text-accent"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>,
    document.body
  )
}

export default ScrollToTop
