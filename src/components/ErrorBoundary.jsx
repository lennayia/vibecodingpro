import { Component } from 'react'

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
        <div className="min-h-screen flex items-center justify-center bg-[#f2f2f2] dark:bg-[#070716] p-4">
          <div className="text-center max-w-md">
            <h1 className="text-4xl font-bold mb-4">Něco se pokazilo</h1>
            <p className="text-xl mb-8">
              Omlouváme se, došlo k nečekané chybě.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-accent text-white rounded-full hover:opacity-90 transition-opacity"
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
