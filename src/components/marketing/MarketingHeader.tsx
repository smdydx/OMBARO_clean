
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center group">
            <img 
              src="/ombaro-logo.png" 
              alt="OMBARO" 
              className="h-16 sm:h-20 md:h-24 w-auto object-contain transition-all duration-300 group-hover:scale-105"
            />
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

          <div className="hidden md:flex items-center space-x-3">
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
            className="md:hidden p-2 rounded-lg hover:bg-gray-50 transition-all duration-200"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-xl">
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
            <div className="pt-4 space-y-3 border-t border-gray-100">
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
