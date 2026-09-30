import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertCircle, RotateCcw } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Portfolio ErrorBoundary caught an error:', error, errorInfo);
  }

  private handleReload = () => {
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#050608] text-[#F5F7FA] flex items-center justify-center p-6">
          <div className="max-w-md w-full p-8 rounded-3xl liquid-glass border border-white/10 text-center shadow-2xl">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 flex items-center justify-center mx-auto mb-4">
              <AlertCircle className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold font-display text-white mb-2">
              Portfolio Experience
            </h2>
            <p className="text-sm text-zinc-400 mb-6 leading-relaxed">
              A temporary display glitch occurred while rendering. Click below to refresh the experience.
            </p>
            <button
              type="button"
              onClick={this.handleReload}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold text-black bg-cyan-300 hover:bg-cyan-200 transition-colors shadow-lg"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Reload Experience</span>
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
