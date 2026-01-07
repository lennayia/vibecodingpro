import { useEffect, lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ErrorBoundary from './components/ErrorBoundary'

// HomePage - eager load (critical path)
import HomePage from './pages/HomePage'

// Lazy load other pages (not on critical path)
const VibeOrderPage = lazy(() => import('./pages/VibeOrderPage'))
const VibecodingOrderPage = lazy(() => import('./pages/VibecodingOrderPage'))
const VipVibecodingOrderPage = lazy(() => import('./pages/VipVibecodingOrderPage'))
const ThankYouPage = lazy(() => import('./pages/ThankYouPage'))
const ReservationPage = lazy(() => import('./pages/ReservationPage'))
const TermsPage = lazy(() => import('./pages/TermsPage'))
const GdprPage = lazy(() => import('./pages/GdprPage'))

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
        <Suspense fallback={
          <div className="min-h-screen flex items-center justify-center bg-white dark:bg-[#05050f]">
            <div className="text-center">
              <div className="inline-block w-8 h-8 border-4 border-accent/30 border-t-accent rounded-full animate-spin mb-4"></div>
              <p className="text-gray-600 dark:text-gray-400">Načítám...</p>
            </div>
          </div>
        }>
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
        </Suspense>
      </BrowserRouter>
    </ErrorBoundary>
  )
}

export default App
