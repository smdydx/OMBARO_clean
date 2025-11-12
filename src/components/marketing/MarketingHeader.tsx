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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-24 md:h-28">
          <div className="flex items-center justify-between flex-1">
            <Link to="/" className="flex items-center group z-50">
              <div className="relative rounded-full p-2 bg-white shadow-lg border-2 border-green-500/30">
                <img
                  src="/ombaro-logo-new.png"
                  alt="OMBARO"
                  className="h-14 sm:h-14 md:h-16 w-auto object-contain transition-all duration-300 group-hover:scale-105"
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
            <Link 
              to="/terms" 
              className="group flex items-center space-x-1.5 px-2 xl:px-3 py-2 text-gray-700 hover:text-green-600 font-medium transition-all duration-200 hover:bg-emerald-50 rounded-lg"
              title="Terms & Conditions"
            >
              <FileText className="w-4 h-4 group-hover:scale-110 transition-transform flex-shrink-0" />
              <span className="text-xs xl:text-sm whitespace-nowrap hidden xl:inline">Terms</span>
            </Link>
            <Link 
              to="/refund-policy" 
              className="group flex items-center space-x-1.5 px-2 xl:px-3 py-2 text-gray-700 hover:text-green-600 font-medium transition-all duration-200 hover:bg-emerald-50 rounded-lg"
              title="Refund Policy"
            >
              <FileText className="w-4 h-4 group-hover:scale-110 transition-transform flex-shrink-0" />
              <span className="text-xs xl:text-sm whitespace-nowrap hidden xl:inline">Refund</span>
            </Link>
            <div className="h-6 w-px bg-gray-300 mx-1"></div>
            <Link to="/app">
              <button
                className="px-3 xl:px-4 py-2 text-gray-700 hover:text-gray-900 font-medium transition-all duration-200 hover:bg-emerald-50 rounded-full text-xs xl:text-sm whitespace-nowrap"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
              >
                Login
              </button>
            </Link>
            <Link to="/app">
              <button
                className="px-4 xl:px-6 py-2 xl:py-2.5 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 text-xs xl:text-sm whitespace-nowrap"
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
          className={`fixed top-20 sm:top-24 md:top-28 right-0 left-0 bg-white border-b border-gray-200 shadow-2xl z-40 lg:hidden transform transition-all duration-300 ease-in-out overflow-y-auto max-h-[calc(100vh-5rem)] ${
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
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              <Link
                to="/terms"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex flex-col items-center justify-center space-y-1.5 px-3 py-3 sm:py-3.5 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-xl transition-all font-medium border border-gray-200 hover:border-emerald-200"
              >
                <FileText className="w-5 h-5 sm:w-6 sm:h-6" />
                <span className="text-xs sm:text-sm text-center">Terms</span>
              </Link>
              <Link
                to="/refund-policy"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex flex-col items-center justify-center space-y-1.5 px-3 py-3 sm:py-3.5 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-xl transition-all font-medium border border-gray-200 hover:border-emerald-200"
              >
                <FileText className="w-5 h-5 sm:w-6 sm:h-6" />
                <span className="text-xs sm:text-sm text-center">Refund</span>
              </Link>
            </div>
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