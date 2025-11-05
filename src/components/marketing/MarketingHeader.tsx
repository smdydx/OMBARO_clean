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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 gradient-green rounded-2xl flex items-center justify-center shadow-strong group-hover:scale-110 transition-all duration-300">
              <Sparkles className="w-6 h-6 text-white animate-bounce-subtle" />
            </div>
            <span className="text-3xl font-display font-black text-transparent bg-gradient-to-r from-primary-700 via-primary-600 to-accent-600 bg-clip-text">
              OMBARO
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="px-5 py-2.5 text-primary-900 hover:text-primary-700 font-semibold transition-all duration-300 hover:bg-primary-50 rounded-xl"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/app">
              <button className="px-6 py-3 text-primary-900 hover:text-primary-700 font-semibold transition-all duration-300 hover:bg-primary-50 rounded-xl">
                Login
              </button>
            </Link>
            <Link to="/app">
              <button className="px-8 py-3 gradient-green text-white font-bold rounded-xl shadow-medium hover:shadow-strong transition-all duration-300 hover:scale-105">
                Sign Up
              </button>
            </Link>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-3 rounded-xl hover:bg-primary-50 transition-all duration-300"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-primary-900" />
            ) : (
              <Menu className="w-6 h-6 text-primary-900" />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-primary-100/50 shadow-lg animate-fade-in-down">
          <nav className="px-4 py-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-3 px-4 text-primary-900 hover:text-primary-700 font-semibold transition-all duration-300 hover:bg-primary-50 rounded-xl"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 space-y-3 border-t border-primary-100/50">
              <Link to="/app" onClick={() => setIsMobileMenuOpen(false)}>
                <button className="w-full py-3 text-primary-900 hover:text-primary-700 font-semibold transition-all duration-300 hover:bg-primary-50 rounded-xl border-2 border-primary-200">
                  Login
                </button>
              </Link>
              <Link to="/app" onClick={() => setIsMobileMenuOpen(false)}>
                <button className="w-full py-3 gradient-green text-white font-bold rounded-xl shadow-medium hover:shadow-strong transition-all duration-300">
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
