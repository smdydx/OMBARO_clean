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
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-black via-gray-900 to-black backdrop-blur-xl border-b border-primary-900 shadow-sm">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18 md:h-20">
          <Link to="/" className="flex items-center group z-50">
            <div className="relative py-2 px-3 bg-gradient-to-r from-primary-600 to-primary-700 rounded-lg">
              <img
                src="/ombaro-logo.png"
                alt="OMBARO"
                className="h-8 sm:h-9 md:h-10 lg:h-12 w-auto max-w-[120px] sm:max-w-[140px] md:max-w-[160px] lg:max-w-[180px] object-contain transition-all duration-300 group-hover:scale-105"
              />
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="px-5 py-2.5 text-gray-300 hover:text-white font-medium transition-all duration-200 hover:bg-primary-900/50 rounded-lg text-sm"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-6">
            <Link to="/app">
              <button
                className="px-6 py-2.5 text-gray-300 hover:text-white font-medium transition-all duration-200 hover:bg-primary-900/50 rounded-full text-sm"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
              >
                Login
              </button>
            </Link>
            <Link to="/app">
              <button
                className="px-7 py-2.5 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 text-sm"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
              >
                Get Started
              </button>
            </Link>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 sm:p-2.5 rounded-lg hover:bg-primary-900/50 active:bg-primary-800/50 transition-all duration-200 z-50 relative"
            aria-label="Toggle menu"
            type="button"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 sm:w-7 sm:h-7 text-gray-300" />
            ) : (
              <Menu className="w-6 h-6 sm:w-7 sm:h-7 text-gray-300" />
            )}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        {/* Mobile Menu */}
        <div
          className={`fixed top-16 right-0 left-0 bg-white shadow-xl z-40 md:hidden transform transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
          }`}
        >
          <nav className="flex flex-col p-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-lg transition-colors font-medium"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/app"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-4 py-3 bg-gradient-to-r from-green-600 to-black text-white rounded-lg hover:from-green-700 hover:to-gray-900 transition-all shadow-md text-center font-semibold"
            >
              Get Started
            </Link>
          </nav>
        </div>

        {/* Bottom Water Wave Effect */}
        <div className="absolute bottom-0 left-0 right-0 h-8 overflow-hidden">
          <svg viewBox="0 0 1440 80" className="w-full h-full" preserveAspectRatio="none">
            <path
              fill="rgba(0, 255, 135, 0.15)"
              d="M0,40 Q180,20 360,40 T720,40 T1080,40 T1440,40 L1440,80 L0,80 Z"
            >
              <animate
                attributeName="d"
                dur="4s"
                repeatCount="indefinite"
                values="
                  M0,40 Q180,20 360,40 T720,40 T1080,40 T1440,40 L1440,80 L0,80 Z;
                  M0,40 Q180,55 360,40 T720,40 T1080,40 T1440,40 L1440,80 L0,80 Z;
                  M0,40 Q180,20 360,40 T720,40 T1080,40 T1440,40 L1440,80 L0,80 Z
                "
              />
            </path>
            <path
              fill="rgba(1, 107, 58, 0.1)"
              d="M0,45 Q240,25 480,45 T960,45 T1440,45 L1440,80 L0,80 Z"
            >
              <animate
                attributeName="d"
                dur="3.5s"
                repeatCount="indefinite"
                values="
                  M0,45 Q240,25 480,45 T960,45 T1440,45 L1440,80 L0,80 Z;
                  M0,45 Q240,60 480,45 T960,45 T1440,45 L1440,80 L0,80 Z;
                  M0,45 Q240,25 480,45 T960,45 T1440,45 L1440,80 L0,80 Z
                "
              />
            </path>
          </svg>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-gradient-to-br from-black via-gray-900 to-black border-t border-primary-900 shadow-xl">
          <nav className="px-4 py-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-3 px-4 text-gray-300 hover:text-white font-medium transition-all duration-200 hover:bg-primary-900/50 rounded-lg text-sm"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-6 space-y-4 border-t border-primary-900 mt-4">
              <Link to="/app" onClick={() => setIsMobileMenuOpen(false)}>
                <button
                  className="w-full py-3 text-gray-300 hover:text-white font-medium transition-all duration-200 hover:bg-primary-900/50 rounded-full border border-primary-800 text-sm"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
                >
                  Login
                </button>
              </Link>
              <Link to="/app" onClick={() => setIsMobileMenuOpen(false)}>
                <button
                  className="w-full py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-full shadow-md text-sm"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
                >
                  Get Started
                </button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};