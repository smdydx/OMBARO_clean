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
        <div className="flex items-center justify-between h-20 sm:h-24 md:h-28">
          <div className="flex items-center justify-between flex-1">
            <Link to="/" className="flex items-center group z-50">
              <div className="relative rounded-full p-1.5 sm:p-2 md:p-3 bg-white shadow-2xl border-2 sm:border-3 md:border-4 border-green-500/40">
                <img
                  src="/ombaro-logo-new.png"
                  alt="OMBARO"
                  className="h-10 sm:h-12 md:h-16 w-auto object-contain transition-all duration-300 group-hover:scale-105"
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
            className="lg:hidden p-2 sm:p-2.5 rounded-lg hover:bg-gray-100 active:bg-gray-200 transition-all duration-200 z-50 relative"
            aria-label="Toggle menu"
            type="button"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 sm:w-7 sm:h-7 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 sm:w-7 sm:h-7 text-gray-700" />
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

        {/* Mobile Menu */}
        <div
          className={`fixed top-20 sm:top-24 md:top-28 right-0 left-0 bg-gradient-to-br from-white via-green-50/30 to-white border-b border-green-200 shadow-2xl z-40 lg:hidden transform transition-all duration-300 ease-in-out overflow-y-auto max-h-[calc(100vh-5rem)] ${
            isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
          }`}
        >
          <nav className="flex flex-col p-4 sm:p-6 space-y-2 sm:space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 sm:px-5 py-3 sm:py-3.5 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-xl transition-all font-medium border border-transparent hover:border-emerald-200"
              >
                {link.name}
              </Link>
            ))}
            <div className="border-t border-gray-200 my-2 sm:my-3"></div>
            <Link
              to="/app"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-4 sm:px-5 py-3 sm:py-3.5 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-xl transition-all font-medium border border-transparent hover:border-emerald-200 text-center"
            >
              Login
            </Link>
            <Link
              to="/app"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-4 sm:px-5 py-3 sm:py-3.5 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl hover:from-green-600 hover:to-green-700 transition-all shadow-lg text-center font-semibold"
            >
              Get Started
            </Link>
          </nav>
        </div>

        </div>
    </header>
  );
};