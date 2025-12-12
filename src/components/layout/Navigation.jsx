export default function Navigation({ isDark, setIsDark }) {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-[#f2f2f2]/80 dark:bg-[#070716]/80">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="font-display font-bold text-2xl">Claude Code Konzultace</div>
        <button
          onClick={() => setIsDark(!isDark)}
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-[#05050f] transition-colors"
        >
          {isDark ? '☀️' : '🌙'}
        </button>
      </div>
    </nav>
  )
}
