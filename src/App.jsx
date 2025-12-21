import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ErrorBoundary from './components/ErrorBoundary'

// Pages
import HomePage from './pages/HomePage'
import VibeOrderPage from './pages/VibeOrderPage'
import VibecodingOrderPage from './pages/VibecodingOrderPage'
import VipVibecodingOrderPage from './pages/VipVibecodingOrderPage'
import ThankYouPage from './pages/ThankYouPage'
import ReservationPage from './pages/ReservationPage'
import TermsPage from './pages/TermsPage'
import GdprPage from './pages/GdprPage'

function App() {
  // Initialize theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = savedTheme === 'dark' || !savedTheme

    if (prefersDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])

  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/vibe" element={<VibeOrderPage />} />
          <Route path="/vibecoding" element={<VibecodingOrderPage />} />
          <Route path="/vipvibecoding" element={<VipVibecodingOrderPage />} />
          <Route path="/dekuji" element={<ThankYouPage />} />
          <Route path="/rezervace" element={<ReservationPage />} />
          <Route path="/obchodni-podminky" element={<TermsPage />} />
          <Route path="/gdpr" element={<GdprPage />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  )
}

export default App
