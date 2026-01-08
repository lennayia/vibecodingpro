import { useEffect, memo } from 'react'
import { motion } from 'framer-motion'
import Navigation from '../layout/Navigation'
import Footer from '../layout/Footer'
import { ShoppingCart } from 'lucide-react'

// Constants for consistent sizing
const ICON_SIZE = 'order-icon-size'
const STROKE_WIDTH = 2

const OrderPageTemplate = memo(function OrderPageTemplate({
  packageName,
  consultationInfo,
  price,
  capacity,
  resultText,
  simpleShopFormId,
  pageTitle,
  badge = null
}) {
  useEffect(() => {
    // Set page title
    document.title = pageTitle

    // Load SimpleShop script
    if (!window.sss) {
      const script = document.createElement('script')
      script.src = 'https://form.simpleshop.cz/prj/js/SimpleShopService.js'
      script.async = true
      document.body.appendChild(script)

      script.onload = () => {
        if (window.sss) {
          window.sss('createForm', simpleShopFormId)
        }
      }
    } else {
      window.sss('createForm', simpleShopFormId)
    }
  }, [pageTitle, simpleShopFormId])

  return (
    <div className="min-h-screen bg-[#f2f2f2] dark:bg-[#070716]">
      <Navigation />

      <main className="order-main-padding-top order-main-padding-bottom">
        <div className="max-w-4xl mx-auto px-4">
          {/* Package Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center order-summary-mb"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <ShoppingCart className={`${ICON_SIZE} text-accent`} strokeWidth={STROKE_WIDTH} />
              <h1 className="font-display font-bold text-fluid-order-heading">
                Objednávka
              </h1>
            </div>

            {badge && badge}

            <div className="relative inline-block mx-auto mb-6">
              <div className="absolute inset-0 bg-accent/10 blur-lg animate-pulse" />
              <h3 className="relative font-display font-bold text-fluid-order-package text-accent drop-shadow-[0_0_20px_rgba(0,255,136,0.6)]">
                {packageName}
              </h3>
            </div>

            <div className="order-details-mb">
              <p className="text-fluid-order-info font-light mb-2">
                {consultationInfo}
              </p>
              <p className="text-fluid-order-price font-bold text-accent mb-2">
                {price}
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <p className="text-fluid-order-capacity font-light mb-4">
                {capacity}
              </p>
              <div className="bg-gray-100 dark:bg-[#05050f] rounded-xl border border-gray-200 dark:border-gray-700 order-result-padding">
                <p className="font-semibold mb-2 text-accent">Výsledek:</p>
                <p className="font-light">
                  {resultText}
                </p>
              </div>
            </div>
          </motion.div>

          {/* SimpleShop Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <div className="order-form-padding">
              <div data-SimpleShopForm={simpleShopFormId}>
                <div className="text-center text-sm text-gray-500 dark:text-gray-400">
                  Prodejní formulář je vytvořen v systému <a href="https://www.simpleshop.cz/?utm_source=simpleshop&utm_medium=form&utm_campaign=22023" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">SimpleShop.cz</a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  )
})

export default OrderPageTemplate
