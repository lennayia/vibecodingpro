import { useEffect, lazy, Suspense } from 'react'

// Layout components
import ErrorBoundary from './components/ErrorBoundary'
import Navigation from './components/layout/Navigation'
import Footer from './components/layout/Footer'
import ScrollProgress from './components/ui/ScrollProgress'
import ScrollToTop from './components/ui/ScrollToTop'

// Only Hero is above the fold - load immediately
import Hero from './components/sections/Hero'

// Lazy load everything else for better initial load performance
const WhatYouCanCreate = lazy(() => import('./components/sections/WhatYouCanCreate'))
const Comparison = lazy(() => import('./components/sections/Comparison'))
const PortfolioHolographic = lazy(() => import('./components/sections/PortfolioHolographic'))
const WhatIsVibecoding = lazy(() => import('./components/sections/WhatIsVibecoding'))
const WhyOwnApp = lazy(() => import('./components/sections/WhyOwnApp'))
const ImagineSection = lazy(() => import('./components/sections/ImagineSection'))
const CaseStudy = lazy(() => import('./components/sections/CaseStudy'))
const Phases = lazy(() => import('./components/sections/Phases'))
const WhyConsultation = lazy(() => import('./components/sections/WhyConsultation'))
const WhyMe = lazy(() => import('./components/sections/WhyMe'))
const Bonuses = lazy(() => import('./components/sections/BonusesTabs'))
const Pricing = lazy(() => import('./components/sections/Pricing'))
const PricingPackages = lazy(() => import('./components/sections/Pricing').then(module => ({ default: module.PricingPackages })))
const PricingGuarantee = lazy(() => import('./components/sections/Pricing').then(module => ({ default: module.PricingGuarantee })))
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
      <div className="min-h-screen bg-[#f2f2f2] dark:bg-[#070716] transition-colors duration-300">
        <ScrollProgress />
        <ScrollToTop />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-white dark:focus:bg-gray-900 focus:text-black dark:focus:text-white"
        >
          Přeskočit na hlavní obsah
        </a>

        <Navigation />

        <main id="main-content" role="main">
          <Hero />
          <Suspense fallback={<div className="min-h-[400px]" />}>
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
