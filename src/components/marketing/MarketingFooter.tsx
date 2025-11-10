import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Briefcase, Shield, FileText } from 'lucide-react';

export const MarketingFooter: React.FC = () => {
  return (
    <footer className="bg-white text-gray-800 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/ombaro-logo.png" 
                alt="OMBARO" 
                className="h-12 w-auto object-contain brightness-200"
              />
            </div>
            <p className="text-sm mb-4">
              Your trusted beauty and wellness partner. Discover premium services near you.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-neutral-100 rounded-lg flex items-center justify-center hover:bg-primary-600 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-neutral-100 rounded-lg flex items-center justify-center hover:bg-primary-600 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-neutral-100 rounded-lg flex items-center justify-center hover:bg-primary-600 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-neutral-100 rounded-lg flex items-center justify-center hover:bg-primary-600 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-gray-800">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-xs sm:text-sm text-gray-600 hover:text-cyan-600 transition-colors duration-200 block py-1 sm:py-1.5">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-xs sm:text-sm text-gray-600 hover:text-cyan-600 transition-colors duration-200 block py-1 sm:py-1.5">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-xs sm:text-sm text-gray-600 hover:text-cyan-600 transition-colors duration-200 block py-1 sm:py-1.5">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-xs sm:text-sm text-gray-600 hover:text-cyan-600 transition-colors duration-200 block py-1 sm:py-1.5">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-xs sm:text-sm text-gray-600 hover:text-cyan-600 transition-colors duration-200 block py-1 sm:py-1.5">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-gray-800">For Businesses</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/become-a-partner" className="text-xs sm:text-sm text-gray-600 hover:text-cyan-600 transition-colors duration-200 block py-1 sm:py-1.5 flex items-center space-x-2 group">
                  <Briefcase className="w-4 h-4 text-cyan-600 group-hover:text-cyan-300" />
                  <span>Partner With Us</span>
                </Link>
              </li>
              <li>
                <Link to="/app" className="text-xs sm:text-sm text-gray-600 hover:text-cyan-600 transition-colors duration-200 block py-1 sm:py-1.5">
                  Vendor Login
                </Link>
              </li>
              <li>
                <Link to="/become-a-partner" className="text-xs sm:text-sm text-gray-600 hover:text-cyan-600 transition-colors duration-200 block py-1 sm:py-1.5">
                  Partner Benefits
                </Link>
              </li>
              <li>
                <Link to="/app" className="text-xs sm:text-sm text-gray-600 hover:text-cyan-600 transition-colors duration-200 block py-1 sm:py-1.5">
                  Support Center
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-gray-800">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-cyan-600" />
                <span>123 Beauty Street, Wellness City, IN 110001</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 flex-shrink-0 text-cyan-600" />
                <a href="tel:+911234567890" className="text-xs sm:text-sm text-gray-600 hover:text-cyan-600 transition-colors duration-200 block py-1 sm:py-1.5">
                  +91 123 456 7890
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 flex-shrink-0 text-cyan-600" />
                <a href="mailto:hello@ombaro.com" className="text-xs sm:text-sm text-gray-600 hover:text-cyan-600 transition-colors duration-200 block py-1 sm:py-1.5">
                  hello@ombaro.com
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links - Prominent */}
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-gray-800 flex items-center space-x-2">
              <Shield className="w-5 h-5 text-cyan-600" />
              <span>Legal</span>
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/terms"
                  className="text-cyan-600 hover:text-cyan-700 font-semibold transition-colors duration-200 block py-1 sm:py-1.5 flex items-center space-x-1"
                >
                  <FileText className="w-4 h-4" />
                  <span>Terms & Conditions</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-gray-600 hover:text-cyan-600 transition-colors duration-200 block py-1 sm:py-1.5 flex items-center space-x-1"
                >
                  <Shield className="w-4 h-4" />
                  <span>Privacy Policy</span>
                </Link>
              </li>
            </ul>
            <div className="mt-4 bg-cyan-50 border-2 border-cyan-200 rounded-lg p-3">
              <p className="text-xs font-medium text-cyan-800">
                ⚠️ By using OMBARO, you agree to our Terms & Conditions
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
              <p className="text-xs sm:text-sm text-gray-600 text-center md:text-left">
                &copy; 2025 OMBARO. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm">
                <Link to="/privacy" className="text-xs sm:text-sm text-gray-600 hover:text-cyan-600 transition-colors duration-200 block py-1 sm:py-1.5">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="text-xs sm:text-sm text-gray-600 hover:text-cyan-600 transition-colors duration-200 block py-1 sm:py-1.5">
                  Terms of Service
                </Link>
                <Link to="/cookies" className="text-xs sm:text-sm text-gray-600 hover:text-cyan-600 transition-colors duration-200 block py-1 sm:py-1.5">
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};