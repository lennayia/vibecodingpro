import { Component } from 'react'
import { Sparkles } from 'lucide-react'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-[#f2f2f2] dark:bg-[#070716] p-4 animate-fade-in">
          <div className="text-center max-w-md">
            <div className="flex justify-center mb-6 animate-pulse">
              <Sparkles className="w-16 h-16 text-accent" strokeWidth={1.5} />
            </div>
            <h1 className="text-4xl font-bold mb-4">Zdá se, že aplikace spadla do meditace 🧘‍♀️</h1>
            <p className="text-xl mb-8 font-light">
              Omlouváme se, došlo k nečekané chybě.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-accent text-white rounded-full hover:opacity-90 transition-opacity font-semibold"
            >
              Obnovit stránku
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
