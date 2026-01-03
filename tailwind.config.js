/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '667px', // Custom breakpoint: mobile do 666px, od 667px desktop
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'system-ui', 'sans-serif'],
        display: ['Cormorant Garamond', 'serif'], // Elegant serif for light mode
        'display-dark': ['Manrope', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'], // Keep Manrope for dark mode
      },
      colors: {
        primary: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        accent: {
          DEFAULT: '#0000CD', // Blue for light mode
          dark: '#0DDD0D', // Green for dark mode
        },
        'off-white': '#f2f2f2',
        'off-black': '#1a1a1a',
        'light-text': '#e1e1e1',
      },
    },
  },
  plugins: [],
}
