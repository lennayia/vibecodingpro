import { memo } from 'react'
import { Link } from 'react-router-dom'
import { Mail, Facebook, Instagram, Linkedin } from 'lucide-react'

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
        </div>

        {/* Kontakt section */}
        <div className="mb-8">
          <h3 className="text-sm font-semibold mb-4 text-gray-900 dark:text-white">Kontakt</h3>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a
              href="mailto:lenna@online-byznys.cz"
              className="hover:text-accent transition-colors text-sm flex items-center gap-2"
              aria-label="E-mail"
            >
              <Mail className="w-4 h-4" />
              lenna@online-byznys.cz
            </a>
            <a
              href="https://facebook.com/lenkaroubalka"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors text-sm flex items-center gap-2"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" />
              Facebook
            </a>
            <a
              href="https://www.instagram.com/online.byznys/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors text-sm flex items-center gap-2"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/in/lenkaroubalova/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors text-sm flex items-center gap-2"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </div>
        </div>

        <p className="mb-4">VibecodingPro © 2025</p>
        <p className="text-sm">Postaveno s Claude Code, React a Framer Motion</p>
      </div>
    </footer>
  )
}

export default memo(Footer)
