import { useEffect, lazy, Suspense } from 'react'

// Layout components
import ErrorBoundary from './components/ErrorBoundary'
import Navigation from './components/layout/Navigation'
import Footer from './components/layout/Footer'
import ScrollProgress from './components/ui/ScrollProgress'
import ScrollToTop from './components/ui/ScrollToTop'

// Critical sections - load immediately for visual quality
import Hero from './components/sections/Hero'
import WhatYouCanCreate from './components/sections/WhatYouCanCreate'
import Comparison from './components/sections/Comparison'
import PortfolioHolographic from './components/sections/PortfolioHolographic'
import WhatIsVibecoding from './components/sections/WhatIsVibecoding'
import WhyOwnApp from './components/sections/WhyOwnApp'
import ImagineSection from './components/sections/ImagineSection'
import CaseStudy from './components/sections/CaseStudy'
import Phases from './components/sections/Phases'
import WhyConsultation from './components/sections/WhyConsultation'
import WhyMe from './components/sections/WhyMe'

// Only lazy load bottom sections (below the fold)
const Bonuses = lazy(() => import('./components/sections/BonusesTabs'))
const Pricing = lazy(() => import('./components/sections/Pricing'))
const PricingPackages = lazy(() => import('./components/sections/Pricing').then(module => ({ default: module.PricingPackages })))
const PricingGuarantee = lazy(() => import('./components/sections/PricingGuarantee'))
const FAQ = lazy(() => import('./components/sections/FAQ'))
const CTA = lazy(() => import('./components/sections/CTA'))

function App() {
  // Force dark mode permanently
  useEffect(() => {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  }, [])

  return (
    <ErrorBoundary>
      <ScrollProgress />
      <ScrollToTop />
      <div className="min-h-screen bg-[#f2f2f2] dark:bg-[#070716] transition-colors duration-300">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-white dark:focus:bg-gray-900 focus:text-black dark:focus:text-white"
        >
          Přeskočit na hlavní obsah
        </a>

        <Navigation />

        <main id="main-content" role="main">
          <Hero />
          <WhatYouCanCreate />
          <Comparison />
          <WhatIsVibecoding />
          <PortfolioHolographic />
          <WhyOwnApp />
          <ImagineSection />
          <CaseStudy />
          <WhyConsultation />
          <Phases />
          <WhyMe />
          <Suspense fallback={<div className="min-h-screen" />}>
            <Bonuses />
            <Pricing />
            <PricingPackages />
            <PricingGuarantee />
            <FAQ />
            <CTA />
          </Suspense>
        </main>

        <Footer />
      </div>
    </ErrorBoundary>
  )
}

export default App
