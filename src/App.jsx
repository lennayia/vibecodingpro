import { useState, useEffect, lazy, Suspense } from 'react'

// Layout components
import ErrorBoundary from './components/ErrorBoundary'
import Navigation from './components/layout/Navigation'
import Footer from './components/layout/Footer'
import ScrollProgress from './components/ui/ScrollProgress'
import ScrollToTop from './components/ui/ScrollToTop'

// Section components - immediate load (above the fold)
import Hero from './components/sections/Hero'
import WhatIsVibecoding from './components/sections/WhatIsVibecoding'
import WhatYouCanCreate from './components/sections/WhatYouCanCreate'
import PortfolioHolographic from './components/sections/PortfolioHolographic'
import WhyOwnApp from './components/sections/WhyOwnApp'
import Comparison from './components/sections/Comparison'
import ImagineSection from './components/sections/ImagineSection'
import CaseStudy from './components/sections/CaseStudy'
import Phases from './components/sections/Phases'
import WhyConsultation from './components/sections/WhyConsultation'
import WhyMe from './components/sections/WhyMe'

// Lazy load heavy sections (below the fold)
const Bonuses = lazy(() => import('./components/sections/Bonuses'))
const Pricing = lazy(() => import('./components/sections/Pricing'))
const PricingPackages = lazy(() => import('./components/sections/Pricing').then(module => ({ default: module.PricingPackages })))
const PricingGuarantee = lazy(() => import('./components/sections/Pricing').then(module => ({ default: module.PricingGuarantee })))
const CTA = lazy(() => import('./components/sections/CTA'))

function App() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    return true
  })

  useEffect(() => {
    const root = document.documentElement
    if (isDark) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = (e) => {
      const savedTheme = localStorage.getItem('theme')
      if (!savedTheme) {
        setIsDark(e.matches)
      }
    }
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-[#f2f2f2] dark:bg-[#070716] transition-colors duration-300">
        <ScrollProgress />
        <ScrollToTop />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-white dark:focus:bg-gray-900 focus:text-black dark:focus:text-white"
        >
          Přeskočit na hlavní obsah
        </a>

        <Navigation isDark={isDark} setIsDark={setIsDark} />

        <main id="main-content" role="main">
          <Hero />
          <WhatYouCanCreate />
          <Comparison />
          <PortfolioHolographic />
          <WhatIsVibecoding />
          <WhyOwnApp />
          <ImagineSection />
          <CaseStudy />
          <Phases />
          <WhyConsultation />
          <WhyMe />
          <Suspense fallback={<div className="min-h-screen" />}>
            <Bonuses />
            <Pricing />
            <PricingPackages />
            <PricingGuarantee />
            <CTA />
          </Suspense>
        </main>

        <Footer />
      </div>
    </ErrorBoundary>
  )
}

export default App
