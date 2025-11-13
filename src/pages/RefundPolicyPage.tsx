
import React, { useState } from 'react';
import { MarketingHeader } from '../components/marketing/MarketingHeader';
import { MarketingFooter } from '../components/marketing/MarketingFooter';
import { RefreshCw, CheckCircle, ChevronDown, ChevronUp, Shield, Clock, CreditCard, Package, AlertCircle, Users, Mail, Phone, Calendar, XCircle } from 'lucide-react';

export const RefundPolicyPage: React.FC = () => {
  const [expandedSection, setExpandedSection] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  const sections = [
    {
      title: 'Overview',
      icon: Shield,
      color: 'from-green-400 to-green-500',
      content: [
        'OMBARO provides a digital platform that connects customers with verified beauticians, freelancers, and partner salons for at-home beauty and wellness services.',
        'As OMBARO acts as a facilitator between customers and service providers, refunds and cancellations are subject to both Platform Terms and the Provider\'s service status at the time of request.'
      ]
    },
    {
      title: 'Customer Cancellations - Before Service Confirmation',
      icon: XCircle,
      color: 'from-green-500 to-green-600',
      content: [
        'You may cancel your booking anytime before a provider is assigned, at no charge.',
        'Full refund (if prepaid) will be issued to your original payment method or OMBARO Wallet within 7–10 business days.'
      ]
    },
    {
      title: 'After Service Confirmation (Before Start Time)',
      icon: Clock,
      color: 'from-green-400 to-green-500',
      content: [
        'If you cancel after a beautician/salon is assigned, but before they start traveling, a nominal cancellation fee may apply to cover scheduling costs.',
        'Refund will be processed after deduction of this fee.'
      ]
    },
    {
      title: 'After Service Professional Starts Traveling',
      icon: Users,
      color: 'from-green-500 to-green-600',
      content: [
        'If the professional has started traveling or arrived at your location, a 50% service charge may apply.',
        'The remaining amount will be refunded to your OMBARO Wallet within 5–7 business days.'
      ]
    },
    {
      title: 'After Service Has Started',
      icon: AlertCircle,
      color: 'from-red-500 to-red-600',
      content: [
        'Once the service begins, no refund is applicable except in cases of verified dissatisfaction, hygiene failure, or service quality issue (see Refunds Due to Service Issues section).'
      ]
    },
    {
      title: 'Provider Cancellations',
      icon: RefreshCw,
      color: 'from-green-400 to-green-500',
      content: [
        'If a provider cancels due to unavailability, illness, or other valid reasons, OMBARO will offer an alternate professional, or provide a 100% refund to your original payment method or OMBARO Wallet within 5–7 business days.',
        'Repeated cancellations by a provider will be subject to disciplinary action on our platform.'
      ]
    },
    {
      title: 'Product Orders (Monodose Kits & Beauty Products)',
      icon: Package,
      color: 'from-green-500 to-green-600',
      content: [
        'Cancellations are allowed before dispatch with a full refund.',
        'Once shipped, products can be returned only if damaged, defective, or incorrect.',
        'Refunds or replacements are processed within 7–10 business days after the returned item is received and inspected.',
        'Opened, used, or tampered products are not eligible for return for hygiene reasons.'
      ]
    },
    {
      title: 'Refunds Due to Service Issues',
      icon: AlertCircle,
      color: 'from-amber-500 to-orange-600',
      content: [
        'Customers may request refunds in cases such as: Poor hygiene or non-use of Monodose kits, Incomplete or unsatisfactory service, Overcharging or incorrect billing.',
        'Submit your complaint within 24 hours of service completion via the app, website, or email (support@ombaro.com).',
        'Provide pictures, videos, or order ID for review.',
        'OMBARO will review the case and may offer: Full or partial refund, Free re-service, or Service credits in OMBARO Wallet.',
        'Refunds are issued within 7–10 business days after claim verification.'
      ]
    },
    {
      title: 'Mode of Refund',
      icon: CreditCard,
      color: 'from-green-400 to-green-500',
      content: [
        'Refunds are credited to the original payment source (UPI, card, net banking, wallet).',
        'If payment was made in cash, refunds are issued to the OMBARO Wallet.',
        'Wallet credits are valid for 180 days from the date of issue.'
      ]
    },
    {
      title: 'Non-Refundable Situations',
      icon: XCircle,
      color: 'from-red-500 to-red-700',
      content: [
        '⚠️ No refund is provided in the following cases:',
        '• Change of mind after service completion',
        '• Unavailability of customer at the time of appointment',
        '• Service dissatisfaction not backed by valid proof',
        '• Repeated cancellations by the same user'
      ]
    },
    {
      title: 'For Providers (Beauticians / Salons)',
      icon: Users,
      color: 'from-green-500 to-green-600',
      content: [
        'Cancellations by providers less than 1 hour before service time may result in penalties or deductions from future payouts.',
        'Refunds to customers in such cases are borne by the provider as per OMBARO\'s partner policy.'
      ]
    },
    {
      title: 'Processing Time',
      icon: Clock,
      color: 'from-green-400 to-green-500',
      content: [
        'All approved refunds are processed within 5–10 working days, depending on your bank or payment provider.',
        'OMBARO is not responsible for delays due to third-party payment processors.'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50">
      <MarketingHeader />

      <main>
        {/* Hero Section */}
        <section className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-br from-primary-600 via-primary-700 to-black text-white overflow-hidden">
          {/* Animated Water Wave - Top */}
          <div className="absolute top-0 left-0 right-0 h-32 sm:h-40 md:h-48 opacity-40 rotate-180">
            <svg viewBox="0 0 1440 320" className="w-full h-full" preserveAspectRatio="none">
              <defs>
                <linearGradient id="waveGradientTop" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: '#00FF87', stopOpacity: 0.6 }} />
                  <stop offset="50%" style={{ stopColor: '#016B3A', stopOpacity: 0.4 }} />
                  <stop offset="100%" style={{ stopColor: '#000000', stopOpacity: 0.5 }} />
                </linearGradient>
              </defs>
              <path fill="url(#waveGradientTop)" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,165.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                <animate attributeName="d" dur="12s" repeatCount="indefinite" values="
                  M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,165.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                  M0,128L48,138.7C96,149,192,171,288,165.3C384,160,480,128,576,122.7C672,117,768,139,864,144C960,149,1056,139,1152,128C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                  M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,165.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
              </path>
            </svg>
          </div>
          
          {/* Animated Water Wave - Bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-40 md:h-48 opacity-50">
            <svg viewBox="0 0 1440 320" className="w-full h-full" preserveAspectRatio="none">
              <defs>
                <linearGradient id="waveGradientBottom" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: '#00FF87', stopOpacity: 0.5 }} />
                  <stop offset="50%" style={{ stopColor: '#016B3A', stopOpacity: 0.4 }} />
                  <stop offset="100%" style={{ stopColor: '#000000', stopOpacity: 0.6 }} />
                </linearGradient>
              </defs>
              <path fill="url(#waveGradientBottom)" fillOpacity="1" d="M0,192L48,181.3C96,171,192,149,288,154.7C384,160,480,192,576,197.3C672,203,768,181,864,170.7C960,160,1056,160,1152,170.7C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                <animate attributeName="d" dur="10s" repeatCount="indefinite" values="
                  M0,192L48,181.3C96,171,192,149,288,154.7C384,160,480,192,576,197.3C672,203,768,181,864,170.7C960,160,1056,160,1152,170.7C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                  M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,154.7C672,149,768,171,864,181.3C960,192,1056,192,1152,181.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                  M0,192L48,181.3C96,171,192,149,288,154.7C384,160,480,192,576,197.3C672,203,768,181,864,170.7C960,160,1056,160,1152,170.7C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
              </path>
            </svg>
          </div>
          
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
            <div className="absolute bottom-0 right-0 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }} />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 mb-6 sm:mb-8">
              <RefreshCw className="w-4 h-4 sm:w-5 sm:h-5 text-amber-300 animate-spin" style={{ animationDuration: '3s' }} />
              <span className="text-white text-xs sm:text-sm font-semibold tracking-wide">Refund Information</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
              Refund & Cancellation Policy
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Transparent and customer-friendly refund policies for all OMBARO services
            </p>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-green-50 via-white to-green-50 rounded-3xl p-8 md:p-12 shadow-xl border-l-4 border-green-500">
              <div className="flex items-start space-x-3 sm:space-x-4 md:space-x-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <RefreshCw className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl md:text-4xl font-black text-neutral-900 mb-6">
                    OMBARO — Refund & Cancellation Policy
                  </h2>
                  <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                    This policy outlines the terms for refunds and cancellations on the OMBARO platform. We strive to provide fair and transparent policies for both customers and service providers.
                  </p>
                  <div className="flex items-center space-x-3 text-sm text-neutral-600">
                    <div className="flex items-center space-x-2 bg-green-100 px-4 py-2 rounded-full">
                      <Calendar className="w-4 h-4 text-green-600" />
                      <span className="font-semibold">Effective Date: January 2025</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Policy Sections */}
        <section className="py-16 bg-gradient-to-br from-neutral-50 to-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-4">
              {sections.map((section, index) => {
                const Icon = section.icon;
                const isExpanded = expandedSection === index;
                
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-neutral-100"
                  >
                    <button
                      onClick={() => toggleSection(index)}
                      className="w-full px-4 sm:px-5 md:px-6 lg:px-8 py-4 sm:py-5 md:py-6 flex items-center justify-between hover:bg-neutral-50 transition-colors duration-300 group"
                    >
                      <div className="flex items-center space-x-3 sm:space-x-4 md:space-x-5 flex-1">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-16 lg:h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 flex-shrink-0">
                          <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-8 lg:h-8 text-green-600" />
                        </div>
                        <h3 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-neutral-900 text-left group-hover:text-green-600 transition-colors">
                          {section.title}
                        </h3>
                      </div>
                      <div className={`w-7 h-7 xs:w-8 xs:h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-green-100 rounded-lg flex items-center justify-center transform transition-transform duration-300 flex-shrink-0 ${isExpanded ? 'rotate-180' : ''}`}>
                        {isExpanded ? (
                          <ChevronUp className="w-4 h-4 xs:w-5 xs:h-5 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6 text-green-600" />
                        ) : (
                          <ChevronDown className="w-4 h-4 xs:w-5 xs:h-5 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6 text-green-600" />
                        )}
                      </div>
                    </button>
                    
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="px-8 pb-8 pt-4 bg-gradient-to-br from-neutral-50 to-white">
                        <ul className="space-y-4">
                          {section.content.map((item, idx) => (
                            <li key={idx} className="flex items-start space-x-3">
                              <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5 text-green-500" />
                              <span className="text-neutral-700 leading-relaxed text-lg">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-b from-white to-primary-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-black rounded-3xl p-8 sm:p-10 md:p-12 lg:p-16 text-white overflow-hidden shadow-2xl">
              <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 md:h-40 opacity-20">
                <svg viewBox="0 0 1440 320" className="w-full h-full" preserveAspectRatio="none">
                  <path fill="#ffffff" fillOpacity="1" d="M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,154.7C672,149,768,171,864,181.3C960,192,1056,192,1152,181.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                    <animate attributeName="d" dur="8s" repeatCount="indefinite" values="
                      M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,154.7C672,149,768,171,864,181.3C960,192,1056,192,1152,181.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                      M0,192L48,181.3C96,171,192,149,288,154.7C384,160,480,192,576,197.3C672,203,768,181,864,170.7C960,160,1056,160,1152,170.7C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                      M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,154.7C672,149,768,171,864,181.3C960,192,1056,192,1152,181.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
                  </path>
                </svg>
              </div>
              
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 right-0 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
                <div className="absolute bottom-0 left-0 w-56 sm:w-72 md:w-80 h-56 sm:h-72 md:h-80 bg-green-300/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }} />
              </div>

              <div className="relative z-10 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-white/20 backdrop-blur-md rounded-2xl md:rounded-3xl mb-6 sm:mb-8 shadow-lg transform hover:scale-110 hover:rotate-6 transition-all duration-300">
                  <Shield className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-white" />
                </div>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6 leading-tight">Need Help with Refunds?</h3>
                <p className="text-lg sm:text-xl md:text-2xl text-white/95 mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed">
                  Our customer support team is here to assist you with refund and cancellation queries.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center max-w-2xl mx-auto">
                  <a
                    href="mailto:support@ombaro.com"
                    className="group bg-white text-green-600 px-6 sm:px-8 md:px-10 py-4 sm:py-5 rounded-2xl font-bold hover:bg-green-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 flex items-center justify-center space-x-3 text-base sm:text-lg"
                  >
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-12 transition-transform duration-300" />
                    <span className="hidden sm:inline">support@ombaro.com</span>
                    <span className="sm:hidden">Email Us</span>
                  </a>
                  <a
                    href="tel:+911234567890"
                    className="group bg-white/10 backdrop-blur-md border-2 border-white/40 text-white px-6 sm:px-8 md:px-10 py-4 sm:py-5 rounded-2xl font-bold hover:bg-white/20 hover:border-white/60 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 flex items-center justify-center space-x-3 text-base sm:text-lg"
                  >
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-12 transition-transform duration-300" />
                    <span className="hidden sm:inline">+91 123 456 7890</span>
                    <span className="sm:hidden">Call Us</span>
                  </a>
                </div>
                <p className="text-white/80 text-sm sm:text-base mt-6 sm:mt-8">
                  Available: Monday to Sunday, 10 AM – 7 PM IST
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <MarketingFooter />
    </div>
  );
};
