import { useState, useEffect } from 'react'

export function useTypingEffect(text, speed = 70, delay = 500) {
  const [displayedText, setDisplayedText] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    let timeout

    // Initial delay before starting
    timeout = setTimeout(() => {
      let currentIndex = 0

      const typeInterval = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayedText(text.slice(0, currentIndex + 1))
          currentIndex++
        } else {
          clearInterval(typeInterval)
          setIsComplete(true)

          // Hide cursor after 500ms
          setTimeout(() => {
            setShowCursor(false)
          }, 500)
        }
      }, speed)

      return () => clearInterval(typeInterval)
    }, delay)

    return () => clearTimeout(timeout)
  }, [text, speed, delay])

  return { displayedText, showCursor, isComplete }
}
