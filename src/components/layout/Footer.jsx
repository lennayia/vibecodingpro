import { memo } from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="dark:bg-[#05050f] py-12 px-6">
      <div className="max-w-6xl mx-auto text-center text-gray-700 dark:text-[#eaeaea]">
        <div className="flex flex-wrap items-center justify-center gap-6 mb-6">
          <Link
            to="/obchodni-podminky"
            className="hover:text-accent transition-colors text-sm"
          >
            Obchodní podmínky
          </Link>
          <span className="text-gray-400">•</span>
          <Link
            to="/gdpr"
            className="hover:text-accent transition-colors text-sm"
          >
            Ochrana osobních údajů
          </Link>
          <span className="text-gray-400">•</span>
          <a
            href="mailto:lenna@online-byznys.cz"
            className="hover:text-accent transition-colors text-sm"
          >
            Kontakt
          </a>
        </div>
        <p className="mb-4">VibecodingPro © 2025</p>
        <p className="text-sm">Postaveno s Claude Code, React a Framer Motion</p>
      </div>
    </footer>
  )
}

export default memo(Footer)
