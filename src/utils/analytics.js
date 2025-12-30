/**
 * Analytics utility that respects GDPR cookie consent
 * Only loads analytics if user has given consent
 */

/**
 * Check if user has given cookie consent
 * @returns {boolean} true if consent is given, false otherwise
 */
export function hasAnalyticsConsent() {
  if (typeof window === 'undefined') return false
  const consent = localStorage.getItem('cookieConsent')
  return consent === 'accepted'
}

/**
 * Initialize Google Analytics (only if consent given)
 * Call this after user accepts cookies
 */
export function initializeAnalytics() {
  if (!hasAnalyticsConsent()) {
    console.log('[Analytics] Consent not given, skipping initialization')
    return
  }

  // Google Analytics Measurement ID
  const GA_MEASUREMENT_ID = 'G-GSKXRHSYWS'

  // Load Google Analytics script
  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
  document.head.appendChild(script)

  // Initialize gtag
  window.dataLayer = window.dataLayer || []
  function gtag() {
    window.dataLayer.push(arguments)
  }
  window.gtag = gtag
  gtag('js', new Date())
  gtag('config', GA_MEASUREMENT_ID, {
    anonymize_ip: true, // GDPR requirement
    cookie_flags: 'SameSite=None;Secure' // Security best practice
  })

  console.log('[Analytics] Initialized with consent')
}

/**
 * Track page view (only if consent given)
 */
export function trackPageView(pagePath) {
  if (!hasAnalyticsConsent() || !window.gtag) {
    return
  }

  window.gtag('event', 'page_view', {
    page_path: pagePath
  })
}

/**
 * Track custom event (only if consent given)
 */
export function trackEvent(eventName, eventParams = {}) {
  if (!hasAnalyticsConsent() || !window.gtag) {
    return
  }

  window.gtag('event', eventName, eventParams)
}

/**
 * Disable analytics (when user declines or revokes consent)
 */
export function disableAnalytics() {
  // Disable Google Analytics
  if (window.gtag) {
    const GA_MEASUREMENT_ID = 'G-GSKXRHSYWS'
    window[`ga-disable-${GA_MEASUREMENT_ID}`] = true
    console.log('[Analytics] Disabled')
  }
}
