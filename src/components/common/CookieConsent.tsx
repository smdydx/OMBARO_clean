import React, { useState, useEffect } from 'react';
import { Cookie, X, Shield, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center p-4 pointer-events-none">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm pointer-events-auto" onClick={handleDecline} />

      {/* Cookie Popup */}
      <div className="fixed bottom-0 left-0 right-0 z-50 animate-slide-up">
        <div className="max-w-7xl mx-auto p-2 sm:p-4 md:p-6">
          <div className="relative">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50 opacity-50 rounded-2xl" />

          {/* Animated Background Elements */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-primary-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-secondary-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />

          <div className="relative p-4 sm:p-6 md:p-8 lg:p-10 rounded-2xl border-2 border-primary-200/50 bg-white/80 backdrop-blur-sm shadow-2xl">
            <div className="flex flex-col md:flex-row gap-4 sm:gap-6 items-start">
              {/* Icon Section */}
              <div className="flex-shrink-0 hidden sm:block">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-2xl flex items-center justify-center shadow-xl animate-bounce" style={{ animationDuration: '3s' }}>
                  <Cookie className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
              </div>

              {/* Content Section */}
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-neutral-900 mb-2 sm:mb-3">
                  🍪 We Value Your Privacy
                </h3>
                <p className="text-neutral-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
                  We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
                  By clicking "Accept All", you consent to our use of cookies. You can customize your preferences or learn more in our{' '}
                  <Link to="/privacy" className="text-primary-600 hover:text-primary-700 font-semibold underline decoration-2 underline-offset-2">
                    Privacy Policy
                  </Link>
                  .
                </p>

                {/* Features */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm text-neutral-600">Essential functionality</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm text-neutral-600">Performance analytics</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm text-neutral-600">Personalized experience</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm text-neutral-600">Secure & encrypted</span>
                  </div>
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-4 text-sm mb-6">
                  <Link 
                    to="/privacy" 
                    className="flex items-center space-x-1 text-primary-600 hover:text-primary-700 font-semibold transition-colors"
                  >
                    <Shield className="w-4 h-4" />
                    <span>Privacy Policy</span>
                  </Link>
                  <Link 
                    to="/terms" 
                    className="flex items-center space-x-1 text-primary-600 hover:text-primary-700 font-semibold transition-colors"
                  >
                    <Shield className="w-4 h-4" />
                    <span>Terms & Conditions</span>
                  </Link>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <button
                    onClick={handleAccept}
                    className="flex-1 bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl focus:ring-4 focus:ring-primary-300 focus:outline-none text-sm sm:text-base"
                  >
                    Accept All Cookies
                  </button>
                  <button
                    onClick={handleDecline}
                    className="flex-1 bg-white hover:bg-neutral-50 text-neutral-700 font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-xl border-2 border-neutral-300 hover:border-primary-400 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg focus:ring-4 focus:ring-neutral-200 focus:outline-none text-sm sm:text-base"
                  >
                    Decline Optional
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(100px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slide-up {
          animation: slide-up 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};