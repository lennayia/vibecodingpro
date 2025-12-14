import { useState, useEffect } from 'react'

// Layout components
import Navigation from './components/layout/Navigation'
import Footer from './components/layout/Footer'
import ScrollProgress from './components/ui/ScrollProgress'

// Section components - SEO versions
import HeroSeo from './components/sections/Hero-seo'
import WhyOwnAppSeo from './components/sections/WhyOwnApp-seo'
import WhyConsultationSeo from './components/sections/WhyConsultation-seo'
import ComparisonSeo from './components/sections/Comparison-seo'
import CaseStudySeo from './components/sections/CaseStudy-seo'
import WhyMeSeo from './components/sections/WhyMe-seo'
import ImagineSectionSeo from './components/sections/ImagineSection-seo'
import PhasesSeo from './components/sections/Phases-seo'
import BonusesSeo from './components/sections/Bonuses-seo'
import PricingSeo, { PricingPackagesSeo, PricingGuaranteeSeo } from './components/sections/Pricing-seo'
import CTASeo from './components/sections/CTA-seo'

function AppSeo() {
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
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-white dark:focus:bg-gray-900 focus:text-black dark:focus:text-white"
      >
        Přeskočit na hlavní obsah
      </a>

      <Navigation isDark={isDark} setIsDark={setIsDark} />

      <main id="main-content" role="main">
        <HeroSeo />
        <WhyOwnAppSeo />
        <ComparisonSeo />
        <ImagineSectionSeo />
        <PhasesSeo />
        <WhyConsultationSeo />
        <CaseStudySeo />
        <WhyMeSeo />
        <BonusesSeo />
        <PricingSeo />
        <PricingPackagesSeo />
        <PricingGuaranteeSeo />
        <CTASeo />
      </main>

      <Footer />
    </div>
  )
}

export default AppSeo
