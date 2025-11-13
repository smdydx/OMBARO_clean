import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, FileText } from 'lucide-react';

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
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-br from-white via-green-50/30 to-emerald-50/20 border-b border-green-100 shadow-lg relative overflow-hidden">
      {/* Decorative Wave Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-green-200/20 to-emerald-300/20 rounded-full blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-teal-200/20 to-green-300/20 rounded-full blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-full h-20">
          <svg className="w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0 C150,50 350,0 600,30 C850,60 1050,20 1200,40 L1200,120 L0,120 Z" fill="url(#wave-gradient)" opacity="0.1"></path>
            <path d="M0,20 C200,60 400,10 600,50 C800,90 1000,40 1200,60 L1200,120 L0,120 Z" fill="url(#wave-gradient)" opacity="0.08"></path>
            <defs>
              <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#10b981" />
                <stop offset="50%" stopColor="#059669" />
                <stop offset="100%" stopColor="#14b8a6" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20 xl:h-24">
          <div className="flex items-center lg:flex-1">
            <Link to="/" className="flex items-center group z-50">
              <div className="relative rounded-full p-1 sm:p-1.5 lg:p-2 xl:p-3 bg-white shadow-lg lg:shadow-2xl border-2 lg:border-3 xl:border-4 border-green-500/40">
                <img
                  src="/ombaro-logo-new.png"
                  alt="OMBARO"
                  className="h-8 sm:h-9 lg:h-12 xl:h-16 w-auto object-contain transition-all duration-300 group-hover:scale-105"
                />
              </div>
            </Link>
          </div>

          <nav className="hidden lg:flex items-center space-x-1 flex-1 justify-center max-w-4xl mx-auto">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="px-3 xl:px-4 py-2.5 text-gray-700 hover:text-gray-900 font-medium transition-all duration-200 hover:bg-emerald-50 rounded-lg text-sm whitespace-nowrap"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-2 xl:space-x-3 flex-shrink-0">
            <Link to="/app">
              <button
                className="px-4 py-2 text-gray-700 hover:text-gray-900 font-medium transition-all duration-200 hover:bg-emerald-50 rounded-full text-sm whitespace-nowrap"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
              >
                Login
              </button>
            </Link>
            <Link to="/app">
              <button
                className="px-6 py-2.5 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 text-sm whitespace-nowrap"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
              >
                Get Started
              </button>
            </Link>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 active:bg-gray-200 transition-all duration-200 z-50 relative"
            aria-label="Toggle menu"
            type="button"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        {/* Mobile Menu - Professional MNC Style */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-16 z-40 bg-white">
          {/* Menu Content */}
          <div className="h-full overflow-y-auto bg-gradient-to-b from-white via-gray-50/50 to-white">
            {/* Navigation Section */}
            <nav className="px-4 py-4 space-y-0.5">
              {navLinks.map((link, index) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="flex items-center justify-between px-4 py-3.5 text-gray-700 hover:bg-green-50 active:bg-green-100 rounded-lg transition-all duration-150 group"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="font-medium text-[15px] group-hover:text-green-600 transition-colors">{link.name}</span>
                  <svg 
                    className="w-5 h-5 text-gray-400 group-hover:text-green-600 group-hover:translate-x-0.5 transition-all" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </nav>

            {/* Divider */}
            <div className="h-2 bg-gradient-to-r from-transparent via-gray-200 to-transparent my-3 mx-4"></div>

            {/* Action Buttons Section */}
            <div className="px-4 pb-6 space-y-3">
              <Link
                to="/vendor/quick-signup"
                className="flex items-center justify-center gap-2 px-5 py-3.5 bg-white text-green-600 border-2 border-green-500 hover:bg-green-50 active:bg-green-100 rounded-lg transition-all duration-150 font-semibold text-[15px] shadow-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Become a Partner</span>
              </Link>

              <Link
                to="/auth"
                className="flex items-center justify-center gap-2 px-5 py-3.5 bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700 active:from-green-700 active:to-green-800 rounded-lg transition-all duration-150 font-semibold text-[15px] shadow-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                </svg>
                <span>Login / Sign Up</span>
              </Link>
            </div>

            {/* Professional Footer */}
            <div className="px-4 py-4 text-center border-t border-gray-200 mt-4">
              <p className="text-xs text-gray-600 font-medium">
                © 2024 OMBARO. All rights reserved.
              </p>
              <p className="text-[11px] text-gray-500 mt-0.5">
                Professional Wellness Solutions
              </p>
            </div>
          </div>
        </div>
      )}

        </div>
    </header>
  );
};