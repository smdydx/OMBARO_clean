
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export const MarketingHeader: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-slate-900/95 via-slate-800/95 to-slate-900/95 shadow-2xl border-b border-blue-500/20 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center group">
            <img 
              src="/ombaro-logo.png" 
              alt="OMBARO" 
              className="h-12 sm:h-14 md:h-16 w-auto object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-2xl"
              onError={(e) => {
                e.currentTarget.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="60"><text x="10" y="40" font-family="Gilda Display" font-size="32" fill="%23f1f5f9" font-weight="400">OMBARO</text></svg>';
              }}
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="px-5 py-2.5 text-slate-200 hover:text-white font-normal transition-all duration-300 hover:bg-blue-900/20 rounded-sm tracking-widest text-sm uppercase"
                style={{ fontFamily: "'Tenor Sans', sans-serif", letterSpacing: '0.15em' }}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/app">
              <button 
                className="px-6 py-2.5 text-slate-200 hover:text-white font-normal transition-all duration-300 hover:bg-blue-900/20 rounded-sm border border-blue-500/30 hover:border-blue-400/50 text-sm uppercase tracking-widest" 
                style={{ fontFamily: "'Tenor Sans', sans-serif", letterSpacing: '0.15em' }}
              >
                Login
              </button>
            </Link>
            <Link to="/app">
              <button 
                className="px-8 py-2.5 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700 text-white font-medium rounded-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-blue-500/30 text-sm uppercase tracking-widest" 
                style={{ fontFamily: "'Tenor Sans', sans-serif", letterSpacing: '0.15em' }}
              >
                Sign Up
              </button>
            </Link>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-3 rounded-sm hover:bg-blue-900/20 transition-all duration-300"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-slate-200" />
            ) : (
              <Menu className="w-6 h-6 text-slate-200" />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-gradient-to-b from-slate-900/98 to-slate-800/98 border-t border-blue-500/20 shadow-2xl animate-fade-in-down backdrop-blur-md">
          <nav className="px-4 py-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-3 px-4 text-slate-200 hover:text-white font-normal transition-all duration-300 hover:bg-blue-900/20 rounded-sm text-sm uppercase tracking-widest"
                style={{ fontFamily: "'Tenor Sans', sans-serif", letterSpacing: '0.15em' }}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 space-y-3 border-t border-blue-500/20">
              <Link to="/app" onClick={() => setIsMobileMenuOpen(false)}>
                <button 
                  className="w-full py-3 text-slate-200 hover:text-white font-normal transition-all duration-300 hover:bg-blue-900/20 rounded-sm border border-blue-500/30 text-sm uppercase tracking-widest" 
                  style={{ fontFamily: "'Tenor Sans', sans-serif", letterSpacing: '0.15em' }}
                >
                  Login
                </button>
              </Link>
              <Link to="/app" onClick={() => setIsMobileMenuOpen(false)}>
                <button 
                  className="w-full py-3 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700 text-white font-medium rounded-sm shadow-lg hover:shadow-xl transition-all duration-300 text-sm uppercase tracking-widest" 
                  style={{ fontFamily: "'Tenor Sans', sans-serif", letterSpacing: '0.15em' }}
                >
                  Sign Up
                </button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
