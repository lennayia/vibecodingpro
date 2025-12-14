import { useState, useEffect } from 'react'

// Layout components
import Navigation from './components/layout/Navigation'
import Footer from './components/layout/Footer'
import ScrollProgress from './components/ui/ScrollProgress'
import ScrollToTop from './components/ui/ScrollToTop'

// Section components
import Hero from './components/sections/Hero'
import WhyOwnApp from './components/sections/WhyOwnApp'
import WhyConsultation from './components/sections/WhyConsultation'
import Comparison from './components/sections/Comparison'
import CaseStudy from './components/sections/CaseStudy'
import WhyMe from './components/sections/WhyMe'
import ImagineSection from './components/sections/ImagineSection'
import Phases from './components/sections/Phases'
import Bonuses from './components/sections/Bonuses'
import Pricing, { PricingPackages, PricingGuarantee } from './components/sections/Pricing'
import CTA from './components/sections/CTA'

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
        <WhyOwnApp />
        <Comparison />
        <ImagineSection />
        <CaseStudy />
        <Phases />
        <WhyConsultation />
        <WhyMe />
        <Bonuses />
        <Pricing />
        <PricingPackages />
        <PricingGuarantee />
        <CTA />
      </main>

      <Footer />
    </div>
  )
}

export default App
