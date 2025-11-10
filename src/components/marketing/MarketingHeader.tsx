import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

export const MarketingHeader: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services', hasSubmenu: true },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Contact', path: '/contact' },
  ];

  const servicesSubmenu = [
    { name: 'Spa & Massage', path: '/spa-massage' },
    { name: 'Beauty Salon', path: '/beauty-salon' },
    { name: 'Bridal Makeup', path: '/bridal-makeup' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18 md:h-20">
          <Link to="/" className="flex items-center group py-2">
            <img 
              src="/ombaro-logo.png" 
              alt="OMBARO" 
              className="h-12 sm:h-13 md:h-14 lg:h-16 w-auto max-w-[120px] sm:max-w-[140px] md:max-w-[160px] lg:max-w-[180px] object-contain transition-all duration-300 group-hover:scale-105"
              style={{ 
                filter: 'brightness(0) saturate(100%) invert(64%) sepia(94%) saturate(464%) hue-rotate(157deg) brightness(96%) contrast(91%)',
                mixBlendMode: 'normal'
              }}
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              link.hasSubmenu ? (
                <div key={link.path} className="relative group">
                  <button
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                    className="px-5 py-2.5 text-gray-700 hover:text-gray-900 font-medium transition-all duration-200 hover:bg-gray-50 rounded-lg text-sm flex items-center"
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
                  >
                    {link.name}
                    <ChevronDown className="w-4 h-4 ml-1" />
                  </button>
                  {isServicesOpen && (
                    <div
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                      className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50"
                    >
                      {servicesSubmenu.map((submenuItem) => (
                        <Link
                          key={submenuItem.path}
                          to={submenuItem.path}
                          className="block px-4 py-2.5 text-gray-700 hover:text-gray-900 hover:bg-gray-50 text-sm"
                          style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
                        >
                          {submenuItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className="px-5 py-2.5 text-gray-700 hover:text-gray-900 font-medium transition-all duration-200 hover:bg-gray-50 rounded-lg text-sm"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
                >
                  {link.name}
                </Link>
              )
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
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-xl">
          <nav className="px-4 py-6 space-y-2">
            {navLinks.map((link) => (
              link.hasSubmenu ? (
                <div key={link.path}>
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="w-full flex items-center justify-between py-3 px-4 text-gray-700 hover:text-gray-900 font-medium transition-all duration-200 hover:bg-gray-50 rounded-lg text-sm"
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
                  >
                    {link.name}
                    <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isServicesOpen && (
                    <div className="ml-4 mt-1 space-y-1">
                      {servicesSubmenu.map((submenuItem) => (
                        <Link
                          key={submenuItem.path}
                          to={submenuItem.path}
                          onClick={() => {
                            setIsMobileMenuOpen(false);
                            setIsServicesOpen(false);
                          }}
                          className="block py-2.5 px-4 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg text-sm"
                          style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
                        >
                          {submenuItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-3 px-4 text-gray-700 hover:text-gray-900 font-medium transition-all duration-200 hover:bg-gray-50 rounded-lg text-sm"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
                >
                  {link.name}
                </Link>
              )
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