import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900">
          <div className="text-center p-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              Ops! Algo deu errado.
            </h2>
            <p className="text-gray-300 mb-6">
              Pedimos desculpas pelo inconveniente. Por favor, tente atualizar a página.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-green-400 text-black rounded-full hover:bg-green-500 transition-colors"
            >
              Atualizar Página
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;