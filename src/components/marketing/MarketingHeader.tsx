import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Smartphone, Globe } from 'lucide-react';

const styles = `
  @keyframes wave-animation {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-33.33%);
    }
  }
  
  @keyframes logo-spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  
  @keyframes glow-pulse {
    0% {
      box-shadow: 0 0 5px rgba(16, 185, 129, 0.4), 0 0 10px rgba(16, 185, 129, 0.3), inset 0 0 8px rgba(16, 185, 129, 0.2);
    }
    50% {
      box-shadow: 0 0 15px rgba(16, 185, 129, 0.8), 0 0 25px rgba(16, 185, 129, 0.6), inset 0 0 15px rgba(16, 185, 129, 0.4), 0 0 40px rgba(16, 185, 129, 0.5);
    }
    100% {
      box-shadow: 0 0 5px rgba(16, 185, 129, 0.4), 0 0 10px rgba(16, 185, 129, 0.3), inset 0 0 8px rgba(16, 185, 129, 0.2);
    }
  }
  
  @keyframes logo-glow {
    0%, 100% {
      box-shadow: 0 0 8px rgba(16, 185, 129, 0.5), 0 0 16px rgba(16, 185, 129, 0.3);
    }
    50% {
      box-shadow: 0 0 20px rgba(16, 185, 129, 1), 0 0 30px rgba(16, 185, 129, 0.7), inset 0 0 10px rgba(16, 185, 129, 0.3);
    }
  }
  
  @keyframes auto-blink {
    0%, 100% {
      box-shadow: 0 0 8px rgba(16, 185, 129, 0.5), 0 0 16px rgba(16, 185, 129, 0.3);
    }
    50% {
      box-shadow: 0 0 20px rgba(16, 185, 129, 1), 0 0 30px rgba(16, 185, 129, 0.7), inset 0 0 10px rgba(16, 185, 129, 0.3);
    }
  }
  
  @keyframes slide-down {
    from {
      transform: translateY(-100%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
  
  @keyframes fade-in-overlay {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
  .wave-animated {
    animation: wave-animation 8s linear infinite;
    width: 300%;
    left: 0;
  }
  
  .logo-container {
    animation: auto-blink 2s ease-in-out infinite;
  }
  
  .mobile-menu-slide {
    animation: slide-down 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
  
  .mobile-overlay-fade {
    animation: fade-in-overlay 0.3s ease-out;
  }
`;

export const MarketingHeader: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const location = useLocation();
  const isPartnerPage = location.pathname === '/become-a-partner';

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-br from-white via-green-50/30 to-emerald-50/20 border-b border-green-100 shadow-lg relative overflow-hidden">
      <style>{styles}</style>
      {/* Decorative Wave Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-green-200/20 to-emerald-300/20 rounded-full blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-teal-200/20 to-green-300/20 rounded-full blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute -bottom-10 left-0 w-full h-20 overflow-hidden">
          <svg className="w-full h-full wave-animated" viewBox="0 0 3600 120" preserveAspectRatio="none">
            <path d="M0,0 C150,50 350,0 600,30 C850,60 1050,20 1200,40 C1350,50 1550,0 1800,30 C2050,60 2250,20 2400,40 C2550,50 2750,0 3000,30 C3250,60 3450,20 3600,40 L3600,120 L0,120 Z" fill="url(#wave-gradient)" opacity="0.15"></path>
            <path d="M0,20 C200,60 400,10 600,50 C800,90 1000,40 1200,60 C1400,90 1600,40 1800,60 C2000,90 2200,40 2400,60 C2600,90 2800,40 3000,60 C3200,90 3400,40 3600,60 L3600,120 L0,120 Z" fill="url(#wave-gradient)" opacity="0.12"></path>
            <defs>
              <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#064e3b" />
                <stop offset="50%" stopColor="#022c22" />
                <stop offset="100%" stopColor="#001a11" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24 xl:h-28">
          <div className="flex items-center lg:flex-1">
            <Link to="/" className="flex items-center group z-50 logo-hover-spin">
              <div className="logo-container relative rounded-full p-2 sm:p-2.5 lg:p-3 xl:p-4 bg-white shadow-lg lg:shadow-2xl border-3 border-emerald-600 sm:border-4 lg:border-4 xl:border-5 transition-all duration-300" style={{ position: 'relative' }}>
                <img
                  src="/ombaro-logo-new.png"
                  alt="OMBARO"
                  className="h-10 sm:h-11 lg:h-12 xl:h-16 w-auto object-contain transition-all duration-300 group-hover:scale-105"
                />
              </div>
            </Link>
          </div>

          <nav className="hidden lg:flex items-center space-x-1 flex-1 justify-center max-w-4xl mx-auto">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="relative px-4 xl:px-5 py-2.5 text-gray-700 font-medium transition-all duration-300 rounded-lg text-sm whitespace-nowrap group overflow-hidden"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
              >
                <span className="relative z-10 flex items-center gap-1.5 group-hover:text-white transition-colors duration-300">
                  {link.name}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-600 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-y-full group-hover:translate-y-0 shadow-lg group-hover:shadow-xl"></div>
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 group-hover:w-full transition-all duration-500 rounded-full"></div>
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-2 xl:space-x-3 flex-shrink-0">
            <button
              onClick={() => setShowLoginModal(true)}
              className="relative px-5 py-2 text-gray-700 font-medium transition-all duration-300 rounded-full text-sm whitespace-nowrap group overflow-hidden"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
            >
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">Login</span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 to-green-700 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            </button>
            {!isPartnerPage && (
              <Link to="/become-a-partner">
                <button
                  className="relative px-6 py-2.5 bg-gradient-to-r from-green-500 via-emerald-600 to-teal-600 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl transition-all duration-400 hover:-translate-y-1 text-sm whitespace-nowrap group overflow-hidden border border-transparent hover:border-white/30"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
                >
                  <span className="relative z-10 flex items-center justify-center">Become a Partner</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-600 via-emerald-700 to-green-700 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                </button>
              </Link>
            )}
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
            className="mobile-overlay-fade fixed inset-0 bg-black/40 z-40 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        {/* Modern Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-slide lg:hidden fixed inset-0 top-20 z-40 bg-gradient-to-br from-white/95 via-emerald-50/70 to-white/80 backdrop-blur-xl shadow-2xl">
          {/* Menu Content */}
          <div className="h-full overflow-y-auto">
            {/* Navigation Section */}
            <nav className="px-4 pt-6 pb-4 space-y-0">
              {navLinks.map((link, idx) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block px-4 py-3.5 text-gray-700 rounded-2xl transition-all duration-200 group hover:bg-gradient-to-r hover:from-emerald-100/60 hover:to-green-100/40 active:bg-emerald-200/50 font-medium text-base"
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{ fontFamily: "'Inter', sans-serif", animationDelay: `${idx * 50}ms` }}
                >
                  <span className="group-hover:text-emerald-700 transition-colors">{link.name}</span>
                </Link>
              ))}
            </nav>

            {/* Elegant Divider */}
            <div className="my-2 mx-4">
              <div className="h-px bg-gradient-to-r from-emerald-200/30 via-emerald-300/60 to-emerald-200/30 rounded-full"></div>
            </div>

            {/* Action Buttons Section */}
            <div className="px-4 pb-8 pt-4 space-y-3">
              {!isPartnerPage && (
                <Link
                  to="/become-a-partner"
                  className="flex items-center justify-center gap-2.5 px-5 py-3.5 bg-gradient-to-r from-emerald-50 to-green-50 text-emerald-700 border-2 border-emerald-300 hover:border-emerald-500 hover:bg-emerald-100/60 active:bg-emerald-200 rounded-2xl transition-all duration-300 font-semibold text-base shadow-md hover:shadow-lg transform hover:scale-105"
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>Become a Partner</span>
                </Link>
              )}

              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setShowLoginModal(true);
                }}
                className={`flex items-center justify-center gap-2.5 px-5 py-3.5 bg-gradient-to-r from-emerald-600 to-green-600 text-white hover:from-emerald-700 hover:to-green-700 active:from-emerald-800 active:to-green-800 rounded-2xl transition-all duration-300 font-semibold text-base shadow-lg hover:shadow-2xl transform hover:scale-105 ${!isPartnerPage ? 'w-full' : 'w-full'}`}
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                </svg>
                <span>Login / Sign Up</span>
              </button>
            </div>
          </div>
        </div>
      )}

        </div>

      {/* Login Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 relative animate-slideUp">
            <button
              onClick={() => setShowLoginModal(false)}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>

            <div className="text-center mb-8">
              <div className="mb-4">
                <img
                  src="/ombaro-logo-new.png"
                  alt="OMBARO"
                  className="h-16 w-auto mx-auto"
                />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome to OMBARO</h2>
              <p className="text-gray-600">How would you like to continue?</p>
            </div>

            <div className="space-y-4">
              <Link
                to="/app"
                className="block w-full"
                onClick={() => setShowLoginModal(false)}
              >
                <button className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <Globe className="w-6 h-6" />
                  <span>Continue with Website</span>
                </button>
              </Link>

              <button
                onClick={() => {
                  alert('Mobile app coming soon! Please use the web app for now.');
                  setShowLoginModal(false);
                }}
                className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-white hover:bg-gray-50 text-gray-700 border-2 border-gray-300 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-300"
              >
                <Smartphone className="w-6 h-6" />
                <span>Continue with Mobile App</span>
              </button>
            </div>

            <p className="text-center text-sm text-gray-500 mt-6">
              Don't have an account?{' '}
              <Link
                to="/app"
                className="text-green-600 font-semibold hover:text-green-700"
                onClick={() => setShowLoginModal(false)}
              >
                Sign up here
              </Link>
            </p>
          </div>
        </div>
      )}
    </header>
  );
};