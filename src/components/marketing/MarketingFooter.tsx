import React from "react";
import { Link } from "react-router-dom";
import {
  Sparkles,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  Shield,
  FileText,
} from "lucide-react";

export const MarketingFooter: React.FC = () => {
  return (
    <footer className="bg-white text-gray-900 border-t border-gray-200 rounded-tl-3xl rounded-tr-3xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-10">
        {/* Logo and Social Media */}
        <div className="mb-6 sm:mb-8">
          <div className="flex items-center mb-3">
            <img
              src="/ombaro-logo-new.png"
              alt="OMBARO"
              className="h-10 sm:h-12 w-auto object-contain"
            />
          </div>
          <p className="text-xs sm:text-sm text-gray-700 mb-3 max-w-md">
            Your trusted beauty and wellness partner. Discover premium services
            near you.
          </p>
          <div className="flex space-x-2 sm:space-x-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 sm:w-9 sm:h-9 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 sm:w-9 sm:h-9 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 sm:w-9 sm:h-9 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 sm:w-9 sm:h-9 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </a>
          </div>
        </div>

        {/* All Links in One Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-xs sm:text-base font-semibold mb-2 sm:mb-3 text-gray-900">
              Quick Links
            </h3>
            <ul className="space-y-1 sm:space-y-1.5">
              <li>
                <Link
                  to="/"
                  className="text-xs sm:text-sm text-gray-700 hover:text-emerald-600 transition-colors block py-0.5 sm:py-1"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-xs sm:text-sm text-gray-700 hover:text-emerald-600 transition-colors block py-0.5 sm:py-1"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-xs sm:text-sm text-gray-700 hover:text-emerald-600 transition-colors block py-0.5 sm:py-1"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/how-it-works"
                  className="text-xs sm:text-sm text-gray-700 hover:text-emerald-600 transition-colors block py-0.5 sm:py-1"
                >
                  How It Works
                </Link>
              </li>
            </ul>
          </div>

          {/* For Businesses */}
          <div>
            <h3 className="text-xs sm:text-base font-semibold mb-2 sm:mb-3 text-gray-900">
              For Business
            </h3>
            <ul className="space-y-1 sm:space-y-1.5">
              <li>
                <Link
                  to="/become-a-partner"
                  className="text-xs sm:text-sm text-gray-700 hover:text-emerald-600 transition-colors block py-0.5 sm:py-1"
                >
                  Partner With Us
                </Link>
              </li>
              <li>
                <Link
                  to="/app"
                  className="text-xs sm:text-sm text-gray-700 hover:text-emerald-600 transition-colors block py-0.5 sm:py-1"
                >
                  Vendor Login
                </Link>
              </li>
              <li>
                <Link
                  to="/become-a-partner"
                  className="text-xs sm:text-sm text-gray-700 hover:text-emerald-600 transition-colors block py-0.5 sm:py-1"
                >
                  Partner Benefits
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-xs sm:text-base font-semibold mb-2 sm:mb-3 text-gray-900">
              Contact Us
            </h3>
            <ul className="space-y-1 sm:space-y-1.5">
              <li className="flex items-start space-x-1.5">
                <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5 mt-0.5 flex-shrink-0 text-emerald-600" />
                <a
                  href="tel:+911234567890"
                  className="text-xs sm:text-sm text-gray-700 hover:text-emerald-600 transition-colors"
                >
                  +91 123 456 7890
                </a>
              </li>
              <li className="flex items-start space-x-1.5">
                <Mail className="w-3 h-3 sm:w-3.5 sm:h-3.5 mt-0.5 flex-shrink-0 text-emerald-600" />
                <a
                  href="mailto:hello@ombaro.com"
                  className="text-xs sm:text-sm text-gray-700 hover:text-emerald-600 transition-colors"
                >
                  hello@ombaro.com
                </a>
              </li>
              <li className="flex items-start space-x-1.5">
                <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 mt-0.5 flex-shrink-0 text-emerald-600" />
                <span className="text-xs sm:text-sm text-gray-700">
                  123 Beauty Street, IN 110001
                </span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xs sm:text-base font-semibold mb-2 sm:mb-3 text-gray-900">
              Legal
            </h3>
            <ul className="space-y-1 sm:space-y-1.5">
              <li>
                <Link
                  to="/terms"
                  className="text-xs sm:text-sm text-emerald-600 hover:text-emerald-700 font-semibold transition-colors block py-0.5 sm:py-1"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-xs sm:text-sm text-gray-700 hover:text-emerald-600 transition-colors block py-0.5 sm:py-1"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/refund-policy"
                  className="text-xs sm:text-sm text-gray-700 hover:text-emerald-600 transition-colors block py-0.5 sm:py-1"
                >
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-6 sm:mt-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
              <p className="text-xs text-gray-700 text-center sm:text-left">
                &copy; 2025 OMBARO. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
