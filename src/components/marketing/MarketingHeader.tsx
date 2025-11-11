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
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-black via-green-900/20 to-black border-b border-green-800/30 shadow-xl">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-24 md:h-28">
          <div className="flex items-center justify-between flex-1">
            <Link to="/" className="flex items-center group z-50">
              <div className="relative rounded-full p-2 bg-black shadow-lg border border-green-700/20">
                <img
                  src="/ombaro-logo-new.png"
                  alt="OMBARO"
                  className="h-12 sm:h-14 md:h-16 w-auto object-contain transition-all duration-300 group-hover:scale-105"
                />
              </div>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-1 absolute left-1/2 transform -translate-x-1/2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="px-5 py-2.5 text-gray-300 hover:text-white font-medium transition-all duration-200 hover:bg-green-700/30 rounded-lg text-sm"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-6 ml-auto">
            <Link to="/app">
              <button
                className="px-6 py-2.5 text-gray-300 hover:text-white font-medium transition-all duration-200 hover:bg-green-700/30 rounded-full text-sm"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
              >
                Login
              </button>
            </Link>
            <Link to="/app">
              <button
                className="px-7 py-2.5 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 text-sm"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
              >
                Get Started
              </button>
            </Link>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 sm:p-2.5 rounded-lg hover:bg-green-700/30 active:bg-green-800/50 transition-all duration-200 z-50 relative"
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
          className={`fixed top-20 sm:top-24 md:top-28 right-0 left-0 bg-black border-b border-gray-800 shadow-2xl z-40 md:hidden transform transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
          }`}
        >
          <nav className="flex flex-col p-6 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-5 py-3.5 text-white hover:bg-green-600/20 hover:text-green-400 rounded-xl transition-all font-medium border border-transparent hover:border-green-600/30"
              >
                {link.name}
              </Link>
            ))}
            <div className="border-t border-gray-800 my-3"></div>
            <Link
              to="/app"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-5 py-3.5 text-white hover:bg-green-600/20 hover:text-green-400 rounded-xl transition-all font-medium border border-transparent hover:border-green-600/30"
            >
              Login
            </Link>
            <Link
              to="/app"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-5 py-3.5 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl hover:from-green-600 hover:to-green-700 transition-all shadow-lg text-center font-semibold"
            >
              Get Started
            </Link>
          </nav>
        </div>

        </div>
    </header>
  );
};