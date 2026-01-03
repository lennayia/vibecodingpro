import { useEffect, lazy, Suspense } from 'react'

// Layout components
import Navigation from '../components/layout/Navigation'
import Footer from '../components/layout/Footer'
import ScrollProgress from '../components/ui/ScrollProgress'
import ScrollToTop from '../components/ui/ScrollToTop'
import CookieBanner from '../components/ui/CookieBanner'

// Critical sections - load immediately for visual quality
import Hero from '../components/sections/Hero'
import PortfolioHolographic from '../components/sections/PortfolioHolographic'
import WhatIsVibecoding from '../components/sections/WhatIsVibecoding'
import WhyOwnApp from '../components/sections/WhyOwnApp'
import ImagineSection from '../components/sections/ImagineSection'
import CaseStudy from '../components/sections/CaseStudy'
import Phases from '../components/sections/Phases'
import WhyConsultation from '../components/sections/WhyConsultation'
import WhyMe from '../components/sections/WhyMe'

// Only lazy load bottom sections (below the fold)
const WhatYouCanCreate = lazy(() => import('../components/sections/WhatYouCanCreate'))
const Comparison = lazy(() => import('../components/sections/Comparison'))
const Bonuses = lazy(() => import('../components/sections/BonusesTabs'))
const PromoCoupon = lazy(() => import('../components/sections/PromoCoupon'))
const Pricing = lazy(() => import('../components/sections/Pricing'))
const PricingPackages = lazy(() => import('../components/sections/Pricing').then(module => ({ default: module.PricingPackages })))
const PricingGuaranteeNew = lazy(() => import('../components/sections/PricingGuaranteeNew'))
const FAQ = lazy(() => import('../components/sections/FAQ'))
const CTA = lazy(() => import('../components/sections/CTA'))

export default function HomePage() {
  return (
    <>
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
          <PortfolioHolographic />
          <Suspense fallback={<div className="min-h-screen" />}>
            <WhatYouCanCreate />
            <Comparison />
          </Suspense>
          <WhatIsVibecoding />
          <WhyOwnApp />
          <ImagineSection />
          <CaseStudy />
          <WhyConsultation />
          <Phases />
          <WhyMe />
          <Suspense fallback={<div className="min-h-screen" />}>
            <Bonuses />
            <Pricing />
            <PromoCoupon />
            <PricingPackages />
            <PricingGuaranteeNew />
            <FAQ />
            <CTA />
          </Suspense>
        </main>

        <Footer />
      </div>
      <CookieBanner />
    </>
  )
}
