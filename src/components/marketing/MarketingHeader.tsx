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
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-sky-50 via-white to-sky-50 backdrop-blur-xl border-b border-sky-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18 md:h-20">
          <Link to="/" className="flex items-center group">
            <div className="relative py-2">
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
                className="px-5 py-2.5 text-gray-700 hover:text-gray-900 font-medium transition-all duration-200 hover:bg-gray-50 rounded-lg text-sm"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-6">
            <Link to="/app">
              <button
                className="px-6 py-2.5 text-gray-700 hover:text-gray-900 font-medium transition-all duration-200 hover:bg-gray-50 rounded-full text-sm"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
              >
                Login
              </button>
            </Link>
            <Link to="/app">
              <button
                className="px-7 py-2.5 bg-gradient-to-r from-blue-900 to-blue-800 text-white font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 text-sm"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
              >
                Get Started
              </button>
            </Link>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-1.5 sm:p-2 rounded-lg hover:bg-gray-50 transition-all duration-200"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
            ) : (
              <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Bottom Water Wave Effect */}
        <div className="absolute bottom-0 left-0 right-0 h-8 overflow-hidden">
          <svg viewBox="0 0 1440 80" className="w-full h-full" preserveAspectRatio="none">
            <path
              fill="rgba(14, 165, 233, 0.15)"
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
              fill="rgba(6, 182, 212, 0.1)"
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
        <div className="md:hidden bg-gradient-to-br from-sky-50 via-white to-sky-50 border-t border-sky-100 shadow-xl">
          <nav className="px-4 py-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-3 px-4 text-gray-700 hover:text-gray-900 font-medium transition-all duration-200 hover:bg-gray-50 rounded-lg text-sm"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-6 space-y-4 border-t border-gray-100 mt-4">
              <Link to="/app" onClick={() => setIsMobileMenuOpen(false)}>
                <button
                  className="w-full py-3 text-gray-700 hover:text-gray-900 font-medium transition-all duration-200 hover:bg-gray-50 rounded-full border border-gray-200 text-sm"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
                >
                  Login
                </button>
              </Link>
              <Link to="/app" onClick={() => setIsMobileMenuOpen(false)}>
                <button
                  className="w-full py-3 bg-gradient-to-r from-blue-900 to-blue-800 text-white font-semibold rounded-full shadow-md text-sm"
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