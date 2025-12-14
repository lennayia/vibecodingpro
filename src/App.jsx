import { useState, useEffect } from 'react'

// Layout components
import Navigation from './components/layout/Navigation'
import Footer from './components/layout/Footer'
import ScrollProgress from './components/ui/ScrollProgress'

// Section components
import Hero from './components/sections/Hero'
import JulieVsMartina from './components/sections/JulieVsMartina'
import CaseStudy from './components/sections/CaseStudy'
import ImagineSection from './components/sections/ImagineSection'
import BenefitsStats from './components/sections/BenefitsStats'
import Phases from './components/sections/Phases'
import Pricing from './components/sections/Pricing'
import WhyConsultation from './components/sections/WhyConsultation'
import CTA from './components/sections/CTA'

function App() {
  const [isDark, setIsDark] = useState(() => {
    // Check system preference on initial load
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    return true
  })

  useEffect(() => {
    // Apply dark class
    const root = document.documentElement
    if (isDark) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }

    // Save preference to localStorage
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  // Listen for system theme changes
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
      {/* Skip to main content for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-white dark:focus:bg-gray-900 focus:text-black dark:focus:text-white"
      >
        Přeskočit na hlavní obsah
      </a>

      <Navigation isDark={isDark} setIsDark={setIsDark} />

      <main id="main-content" role="main">
        <Hero />
        <JulieVsMartina />
        <CaseStudy />
        <ImagineSection />
        <BenefitsStats />
        <Phases />
        <Pricing />
        <WhyConsultation />
        <CTA />
      </main>

      <Footer />
    </div>
  )
}

export default App
