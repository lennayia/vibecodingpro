import { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext(null)

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(() => {
    // Force dark mode as default - remove any light mode from localStorage
    const savedTheme = localStorage.getItem('theme')
    if (!savedTheme || savedTheme !== 'dark') {
      localStorage.setItem('theme', 'dark')
      document.documentElement.classList.add('dark')
    }
    return true // Always start with dark mode
  })

  useEffect(() => {
    // Apply theme class to document
    if (isDark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDark])

  const toggleTheme = () => {
    setIsDark(!isDark)
    // useEffect will handle DOM and localStorage updates
    // Dispatch custom event for theme change
    window.dispatchEvent(new Event('themeChange'))
  }

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}
