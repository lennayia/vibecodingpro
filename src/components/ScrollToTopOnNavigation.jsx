import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Scrolls to top of page on route change
 * Must be used inside BrowserRouter
 */
export default function ScrollToTopOnNavigation() {
  const { pathname } = useLocation()

  useEffect(() => {
    // Instant scroll to top (no smooth behavior for route changes)
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
