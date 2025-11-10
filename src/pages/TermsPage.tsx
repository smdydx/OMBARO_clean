
import React, { useState } from 'react';
import { MarketingHeader } from '../components/marketing/MarketingHeader';
import { MarketingFooter } from '../components/marketing/MarketingFooter';
import { Shield, FileText, CheckCircle, ChevronDown, ChevronUp, Scale, Info, AlertCircle, Lock, Users, CreditCard, Calendar, Phone, Mail, XCircle, UserX, Ban, Gavel } from 'lucide-react';

export const TermsPage: React.FC = () => {
  const [expandedSection, setExpandedSection] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  const sections = [
    {
      title: 'Parties and Scope',
      icon: Users,
      color: 'from-sky-400 to-sky-500',
      content: [
        'These Terms form a contract between you and OMBARO.',
        'OMBARO runs a marketplace that connects customers and service providers.',
        'OMBARO does not own or operate the services offered by providers.',
        'Providers are independent and responsible for the services they deliver.'
      ]
    },
    {
      title: 'Definitions',
      icon: FileText,
      color: 'from-sky-500 to-sky-600',
      content: [
        'Customer: a user who books services on the Platform.',
        'Provider: a freelance beautician or partner salon registered on the Platform.',
        'Services: bookings, listings, product sales, certification, and related features.',
        'Monodose Kits: single-use products supplied or sold through OMBARO.'
      ]
    },
    {
      title: 'Eligibility and Account',
      icon: Lock,
      color: 'from-sky-400 to-cyan-500',
      content: [
        'You must be at least 18 years old to create an Account.',
        'Provide true, current, and complete information.',
        'Keep your login details safe and confidential.',
        'You are responsible for all activity on your Account.',
        'Tell us right away about any unauthorized access.'
      ]
    },
    {
      title: 'Registration and KYC for Providers',
      icon: Shield,
      color: 'from-sky-500 to-blue-500',
      content: [
        'Providers must register with required documents and KYC details.',
        'OMBARO may verify identity, address, and other documents.',
        'Verification may include background checks and references.',
        'OMBARO may refuse or suspend any registration at its discretion.'
      ]
    },
    {
      title: 'Booking Process',
      icon: Calendar,
      color: 'from-cyan-400 to-sky-500',
      content: [
        'Bookings are requests to receive Services at a chosen time and place.',
        'OMBARO will try to match a Provider for your booking.',
        'You will get booking confirmation by SMS, email, or push message.',
        'If no Provider is available, we will offer alternatives or cancel the request.',
        'Providers may accept or decline a booking after review.'
      ]
    },
    {
      title: 'Pricing, Fees, and Payments',
      icon: CreditCard,
      color: 'from-blue-500 to-sky-600',
      content: [
        'Prices shown at booking include taxes unless stated otherwise.',
        'OMBARO may charge a facilitation fee for using the Platform.',
        'Providers set service prices subject to Platform rules.',
        'Payments are processed by a third-party payment processor.',
        'OMBARO is not liable for payment processor errors.',
        'For cash payments, Customers must pay the exact amount due.',
        'Tips are voluntary and go to the Provider unless stated otherwise.'
      ]
    },
    {
      title: 'Promotions and Credits',
      icon: Info,
      color: 'from-sky-400 to-cyan-600',
      content: [
        'Promotional codes or credits follow separate terms.',
        'Credits are not cash and they may expire.',
        'OMBARO may disable credits if misuse or fraud is suspected.',
        'Promo offers may vary by user and geography.'
      ]
    },
    {
      title: 'Cancellations and Refunds',
      icon: XCircle,
      color: 'from-sky-500 to-sky-700',
      content: [
        'Cancellation rules apply as shown on the Platform at booking.',
        'If you cancel after confirmation, cancellation fees may apply.',
        'Refunds follow the Platform\'s refund policy and law.',
        'For Provider no-shows, we will offer a reschedule or refund.',
        'Refund timelines depend on payment method and bank rules.'
      ]
    },
    {
      title: 'Service Standards and Customer Conduct',
      icon: CheckCircle,
      color: 'from-cyan-500 to-sky-600',
      content: [
        'Providers must deliver Services professionally and safely.',
        'Customers must treat Providers with respect and follow instructions.',
        'OMBARO may suspend or ban users who violate conduct standards.',
        'Any disputes should be reported to OMBARO support immediately.'
      ]
    },
    {
      title: 'Monodose Kits and Product Sales',
      icon: Info,
      color: 'from-sky-400 to-blue-500',
      content: [
        'OMBARO may sell or recommend Monodose Kits for certain services.',
        'Product descriptions, ingredients, and usage instructions are for reference only.',
        'OMBARO is not liable for allergic reactions or adverse effects from product use.',
        'Customers should check ingredients and consult professionals if needed.',
        'Returns and refunds for products follow OMBARO\'s return policy.'
      ]
    },
    {
      title: 'Prohibited Conduct - ZERO TOLERANCE',
      icon: Ban,
      color: 'from-red-600 to-red-800',
      content: [
        '⚠️ OMBARO has a ZERO TOLERANCE policy for exploitation and illegal activities.',
        'OMBARO does NOT engage in, promote, or support human trafficking, forced labor, or any form of exploitation.',
        'Sexual activity, sexual services, or any illegal conduct is STRICTLY PROHIBITED.',
        'Customers are prohibited from soliciting or attempting to engage Providers in any inappropriate activity.',
        'Any attempt to force, coerce, harass, or exploit a Provider will result in IMMEDIATE service termination.',
        'Violators will face account suspension, permanent ban, and possible LEGAL ACTION.',
        'OMBARO fully cooperates with law enforcement in cases of misconduct.'
      ]
    },
    {
      title: 'Provider Safety and Rights',
      icon: Shield,
      color: 'from-sky-500 to-blue-600',
      content: [
        'Providers have the RIGHT TO REFUSE SERVICE if they feel unsafe or disrespected.',
        'Providers can decline service if pressured to perform outside the agreed scope.',
        'OMBARO protects Provider safety and dignity at all times.',
        'Any customer misconduct will be reported and acted upon immediately.',
        'Providers are protected by OMBARO\'s safety policies and legal support.'
      ]
    },
    {
      title: 'Liability and Disclaimers',
      icon: AlertCircle,
      color: 'from-sky-500 to-cyan-600',
      content: [
        'OMBARO is a platform connecting customers and providers only.',
        'OMBARO is not liable for the quality, safety, or legality of Services performed by Providers.',
        'Customers use Services at their own risk.',
        'OMBARO is not responsible for injuries, damages, or losses arising from Services.',
        'Maximum liability is limited to the amount paid for the specific Service.',
        'OMBARO does not guarantee availability of Providers or Services.'
      ]
    },
    {
      title: 'Indemnity',
      icon: Gavel,
      color: 'from-blue-500 to-sky-600',
      content: [
        'Customers agree to indemnify and hold harmless OMBARO from any liability arising from:',
        '• Customer misconduct or breach of these Terms',
        '• Unlawful actions by the Customer',
        '• Disputes between Customer and Provider',
        '• Any violation of third-party rights',
        'This indemnity includes all legal fees and damages.'
      ]
    },
    {
      title: 'Data Protection and Privacy',
      icon: Lock,
      color: 'from-sky-400 to-cyan-500',
      content: [
        'OMBARO collects and processes personal data as described in the Privacy Policy.',
        'By using the Platform, you consent to data collection and processing.',
        'OMBARO may share data with Providers, payment processors, and authorities as needed.',
        'OMBARO implements security measures but cannot guarantee absolute security.',
        'You have rights to access, correct, or delete your personal data as per applicable law.'
      ]
    },
    {
      title: 'Intellectual Property',
      icon: Shield,
      color: 'from-cyan-500 to-sky-600',
      content: [
        'All Platform content, trademarks, and logos are owned by OMBARO or licensors.',
        'You may not copy, modify, or distribute Platform content without permission.',
        'User-generated content remains your property, but you grant OMBARO a license to use it.',
        'OMBARO may remove any content that violates these Terms or third-party rights.'
      ]
    },
    {
      title: 'Termination and Suspension',
      icon: UserX,
      color: 'from-sky-500 to-blue-500',
      content: [
        'OMBARO may suspend or terminate your Account at any time for violations.',
        'You may close your Account by contacting support.',
        'Upon termination, all rights and licenses granted to you will cease.',
        'OMBARO may retain your data as required by law or policy.',
        'Termination does not affect outstanding obligations or liabilities.'
      ]
    },
    {
      title: 'Dispute Resolution and Governing Law',
      icon: Scale,
      color: 'from-sky-400 to-blue-600',
      content: [
        'These Terms are governed by the laws of India.',
        'Disputes should first be resolved through good-faith negotiation.',
        'If negotiation fails, disputes will be resolved through arbitration in accordance with Indian Arbitration law.',
        'Arbitration will be conducted in English in the city where OMBARO is headquartered.',
        'You waive any right to a jury trial or class action lawsuit.'
      ]
    },
    {
      title: 'Changes to Terms',
      icon: FileText,
      color: 'from-cyan-400 to-sky-500',
      content: [
        'OMBARO may update these Terms from time to time.',
        'Updated Terms will be posted on the Platform with the "Last updated" date.',
        'Continued use of the Platform after updates constitutes acceptance.',
        'Material changes will be notified via email or Platform notification.',
        'You should review Terms periodically.'
      ]
    },
    {
      title: 'Acceptance and Acknowledgment',
      icon: CheckCircle,
      color: 'from-sky-500 to-cyan-600',
      content: [
        '✅ By confirming a booking or using OMBARO, you confirm that:',
        '• You have READ and UNDERSTOOD these Terms & Conditions',
        '• You AGREE to abide by all Terms and policies',
        '• You understand the ZERO TOLERANCE policy against exploitation',
        '• You acknowledge that violations may result in permanent ban and legal action',
        '• You consent to OMBARO cooperating with law enforcement if needed'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-sky-50">
      <MarketingHeader />

      <main className="pt-16">
        {/* Critical Notice Banner */}
        

        {/* Hero Section */}
        <section className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-br from-sky-400 via-sky-500 to-sky-600 text-white overflow-hidden">
          {/* Animated Water Wave - Top */}
          <div className="absolute top-0 left-0 right-0 h-24 sm:h-32 md:h-40 opacity-30 rotate-180">
            <svg viewBox="0 0 1440 320" className="w-full h-full" preserveAspectRatio="none">
              <defs>
                <linearGradient id="waveGradientTop" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#ffffff', stopOpacity: 0.4 }} />
                  <stop offset="100%" style={{ stopColor: '#e0f2fe', stopOpacity: 0.2 }} />
                </linearGradient>
              </defs>
              <path fill="url(#waveGradientTop)" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,165.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                <animate attributeName="d" dur="10s" repeatCount="indefinite" values="
                  M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,165.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                  M0,128L48,138.7C96,149,192,171,288,165.3C384,160,480,128,576,122.7C672,117,768,139,864,144C960,149,1056,139,1152,128C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                  M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,165.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
              </path>
            </svg>
          </div>
          
          {/* Animated Water Wave - Bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 md:h-40 opacity-40">
            <svg viewBox="0 0 1440 320" className="w-full h-full" preserveAspectRatio="none">
              <defs>
                <linearGradient id="waveGradientBottom" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#e0f2fe', stopOpacity: 0.3 }} />
                  <stop offset="100%" style={{ stopColor: '#ffffff', stopOpacity: 0.5 }} />
                </linearGradient>
              </defs>
              <path fill="url(#waveGradientBottom)" fillOpacity="1" d="M0,192L48,181.3C96,171,192,149,288,154.7C384,160,480,192,576,197.3C672,203,768,181,864,170.7C960,160,1056,160,1152,170.7C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                <animate attributeName="d" dur="8s" repeatCount="indefinite" values="
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
              <Scale className="w-4 h-4 sm:w-5 sm:h-5 text-amber-300 animate-bounce" style={{ animationDuration: '2s' }} />
              <span className="text-white text-xs sm:text-sm font-semibold tracking-wide">Legal Information</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
              Terms & Conditions
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Please read these terms carefully before using the OMBARO platform
            </p>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-sky-50 via-white to-sky-50 rounded-3xl p-8 md:p-12 shadow-xl border-l-4 border-sky-500">
              <div className="flex items-start space-x-3 sm:space-x-4 md:space-x-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-sky-500 to-sky-600 rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <FileText className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl md:text-4xl font-black text-neutral-900 mb-6">
                    OMBARO — Terms & Conditions
                  </h2>
                  <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                    These Terms govern your use of the OMBARO website and app (the Platform). By using the Platform, you accept and agree to these Terms. If you do not agree, do not use the Platform.
                  </p>
                  <div className="flex items-center space-x-3 text-sm text-neutral-600">
                    <div className="flex items-center space-x-2 bg-sky-100 px-4 py-2 rounded-full">
                      <Calendar className="w-4 h-4 text-sky-600" />
                      <span className="font-semibold">Last updated: January 2025</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Terms Sections */}
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
                      className="w-full px-3 sm:px-4 md:px-6 lg:px-8 py-3 sm:py-4 md:py-5 lg:py-6 flex items-center justify-between hover:bg-neutral-50 transition-colors duration-300 group"
                    >
                      <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 flex-1">
                        <div className="w-9 h-9 xs:w-10 xs:h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-sky-100 rounded-lg md:rounded-xl flex items-center justify-center shadow-md transform group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                          <Icon className="w-4 h-4 xs:w-5 xs:h-5 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-sky-600" />
                        </div>
                        <h3 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-neutral-900 text-left group-hover:text-sky-600 transition-colors">
                          {section.title}
                        </h3>
                      </div>
                      <div className={`w-7 h-7 xs:w-8 xs:h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-sky-100 rounded-lg flex items-center justify-center transform transition-transform duration-300 flex-shrink-0 ${isExpanded ? 'rotate-180' : ''}`}>
                        {isExpanded ? (
                          <ChevronUp className="w-4 h-4 xs:w-5 xs:h-5 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6 text-sky-600" />
                        ) : (
                          <ChevronDown className="w-4 h-4 xs:w-5 xs:h-5 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6 text-sky-600" />
                        )}
                      </div>
                    </button>
                    
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="px-8 pb-8 pt-4 bg-gradient-to-br from-neutral-50 to-white">
                        <ul className="space-y-4">
                          {section.content.map((item, idx) => (
                            <li key={idx} className="flex items-start space-x-3">
                              <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5 text-sky-500" />
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
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative bg-gradient-to-br from-sky-500 via-sky-600 to-sky-700 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 text-white overflow-hidden shadow-2xl">
              {/* Water Wave Effect */}
              <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-24 md:h-32 opacity-20">
                <svg viewBox="0 0 1440 320" className="w-full h-full" preserveAspectRatio="none">
                  <path fill="#ffffff" fillOpacity="1" d="M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,154.7C672,149,768,171,864,181.3C960,192,1056,192,1152,181.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                    <animate attributeName="d" dur="7s" repeatCount="indefinite" values="
                      M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,154.7C672,149,768,171,864,181.3C960,192,1056,192,1152,181.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                      M0,192L48,181.3C96,171,192,149,288,154.7C384,160,480,192,576,197.3C672,203,768,181,864,170.7C960,160,1056,160,1152,170.7C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                      M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,154.7C672,149,768,171,864,181.3C960,192,1056,192,1152,181.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
                  </path>
                </svg>
              </div>
              
              <div className="absolute inset-0">
                <div className="absolute top-0 right-0 w-48 sm:w-56 md:w-64 h-48 sm:h-56 md:h-64 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
                <div className="absolute bottom-0 left-0 w-48 sm:w-56 md:w-64 h-48 sm:h-56 md:h-64 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />
              </div>

              <div className="relative z-10 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-white/20 backdrop-blur-sm rounded-xl md:rounded-2xl mb-4 sm:mb-5 md:mb-6">
                  <Shield className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-white" />
                </div>
                <h3 className="text-3xl md:text-4xl font-black mb-6">Questions About Our Terms?</h3>
                <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
                  If you have any questions or concerns about our Terms & Conditions, please contact our support team.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <a
                    href="mailto:legal@ombaro.com"
                    className="group bg-white text-sky-600 px-4 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 rounded-xl md:rounded-2xl font-bold hover:bg-neutral-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 flex items-center justify-center space-x-2 sm:space-x-3 text-sm sm:text-base"
                  >
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="hidden xs:inline">legal@ombaro.com</span>
                    <span className="xs:hidden">Email</span>
                  </a>
                  <a
                    href="tel:+911234567890"
                    className="group bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-4 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 rounded-xl md:rounded-2xl font-bold hover:bg-white/20 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 flex items-center justify-center space-x-2 sm:space-x-3 text-sm sm:text-base"
                  >
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="hidden xs:inline">+91 123 456 7890</span>
                    <span className="xs:hidden">Call</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <MarketingFooter />
    </div>
  );
};
