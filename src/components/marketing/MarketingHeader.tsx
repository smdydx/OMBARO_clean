import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Sparkles } from 'lucide-react';

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
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50 shadow-lg border-b-2 border-amber-200/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center group">
            <img 
              src="/ombaro-logo.png" 
              alt="OMBARO" 
              className="h-14 sm:h-16 md:h-20 lg:h-24 w-auto object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-md"
              onError={(e) => {
                e.currentTarget.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="60"><text x="10" y="40" font-family="Playfair Display" font-size="32" fill="%2378350f" font-weight="bold">OMBARO</text></svg>';
              }}
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="px-5 py-2.5 text-amber-900 hover:text-amber-700 font-medium transition-all duration-300 hover:bg-amber-100/50 rounded-xl tracking-wide"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/app">
              <button className="px-6 py-3 text-amber-900 hover:text-amber-700 font-medium transition-all duration-300 hover:bg-amber-100/50 rounded-xl border-2 border-amber-300/50 hover:border-amber-400" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                Login
              </button>
            </Link>
            <Link to="/app">
              <button className="px-8 py-3 bg-gradient-to-r from-amber-600 via-orange-500 to-amber-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                Sign Up
              </button>
            </Link>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-3 rounded-xl hover:bg-amber-100/50 transition-all duration-300"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-amber-900" />
            ) : (
              <Menu className="w-6 h-6 text-amber-900" />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-gradient-to-br from-amber-50 via-orange-50 to-amber-50 border-t border-amber-200/50 shadow-lg animate-fade-in-down backdrop-blur-sm">
          <nav className="px-4 py-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-3 px-4 text-amber-900 hover:text-amber-700 font-medium transition-all duration-300 hover:bg-amber-100/50 rounded-xl"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 space-y-3 border-t border-amber-200/50">
              <Link to="/app" onClick={() => setIsMobileMenuOpen(false)}>
                <button className="w-full py-3 text-amber-900 hover:text-amber-700 font-medium transition-all duration-300 hover:bg-amber-100/50 rounded-xl border-2 border-amber-300/50" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                  Login
                </button>
              </Link>
              <Link to="/app" onClick={() => setIsMobileMenuOpen(false)}>
                <button className="w-full py-3 bg-gradient-to-r from-amber-600 via-orange-500 to-amber-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
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
