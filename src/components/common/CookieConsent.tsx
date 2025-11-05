
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
      <div className="relative pointer-events-auto w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden animate-slide-up border-4 border-primary-600/20">
        {/* Close Button */}
        <button
          onClick={handleDecline}
          className="absolute top-4 right-4 w-10 h-10 bg-neutral-100 hover:bg-neutral-200 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 z-10"
        >
          <X className="w-5 h-5 text-neutral-600" />
        </button>

        <div className="relative">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50 opacity-50" />
          
          {/* Animated Background Elements */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-primary-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-secondary-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />

          <div className="relative p-8 md:p-10">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              {/* Icon Section */}
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-2xl flex items-center justify-center shadow-xl animate-bounce" style={{ animationDuration: '3s' }}>
                  <Cookie className="w-10 h-10 text-white" />
                </div>
              </div>

              {/* Content Section */}
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-black text-neutral-900 mb-3 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                  We Value Your Privacy
                </h3>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
                  By clicking "Accept All", you consent to our use of cookies.
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
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={handleAccept}
                    className="flex-1 bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-8 py-4 rounded-xl font-bold hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                  >
                    <CheckCircle className="w-5 h-5" />
                    <span>Accept All Cookies</span>
                  </button>
                  <button
                    onClick={handleDecline}
                    className="flex-1 bg-neutral-100 text-neutral-700 px-8 py-4 rounded-xl font-bold hover:bg-neutral-200 transition-all duration-300 transform hover:scale-105"
                  >
                    Decline
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
