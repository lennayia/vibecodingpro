import { memo } from 'react'

function Footer() {
  return (
    <footer className="dark:bg-[#05050f] py-12 px-6">
      <div className="max-w-6xl mx-auto text-center text-gray-600 dark:text-[#eaeaea]">
        <p className="mb-4">Claude Code Konzultace © 2026</p>
        <p>Postaveno s Claude Code, React a Framer Motion</p>
      </div>
    </footer>
  )
}

export default memo(Footer)
