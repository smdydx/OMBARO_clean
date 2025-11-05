
import React, { useState } from 'react';
import { MarketingHeader } from '../components/marketing/MarketingHeader';
import { MarketingFooter } from '../components/marketing/MarketingFooter';
import { Shield, FileText, CheckCircle, ChevronDown, ChevronUp, Scale, Info, AlertCircle, Lock, Users, CreditCard, Calendar, Phone, Mail } from 'lucide-react';

export const TermsPage: React.FC = () => {
  const [expandedSection, setExpandedSection] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  const sections = [
    {
      title: '1. Parties and Scope',
      icon: Users,
      color: 'from-blue-500 to-cyan-600',
      content: [
        'These Terms form a contract between you and OMBARO.',
        'OMBARO runs a marketplace that connects customers and service providers.',
        'OMBARO does not own or operate the services offered by providers.',
        'Providers are independent and responsible for the services they deliver.'
      ]
    },
    {
      title: '2. Definitions',
      icon: FileText,
      color: 'from-purple-500 to-pink-600',
      content: [
        'Customer: a user who books services on the Platform.',
        'Provider: a freelance beautician or partner salon registered on the Platform.',
        'Services: bookings, listings, product sales, certification, and related features.',
        'Monodose Kits: single-use products supplied or sold through OMBARO.'
      ]
    },
    {
      title: '3. Eligibility and Account',
      icon: Lock,
      color: 'from-green-500 to-emerald-600',
      content: [
        'You must be at least 18 years old to create an Account.',
        'Provide true, current, and complete information.',
        'Keep your login details safe and confidential.',
        'You are responsible for all activity on your Account.',
        'Tell us right away about any unauthorized access.'
      ]
    },
    {
      title: '4. Registration and KYC for Providers',
      icon: Shield,
      color: 'from-amber-500 to-orange-600',
      content: [
        'Providers must register with required documents and KYC details.',
        'OMBARO may verify identity, address, and other documents.',
        'Verification may include background checks and references.',
        'OMBARO may refuse or suspend any registration at its discretion.'
      ]
    },
    {
      title: '5. Booking Process',
      icon: Calendar,
      color: 'from-rose-500 to-red-600',
      content: [
        'Bookings are requests to receive Services at a chosen time and place.',
        'OMBARO will try to match a Provider for your booking.',
        'You will get booking confirmation by SMS, email, or push message.',
        'If no Provider is available, we will offer alternatives or cancel the request.',
        'Providers may accept or decline a booking after review.'
      ]
    },
    {
      title: '6. Pricing, Fees, and Payments',
      icon: CreditCard,
      color: 'from-indigo-500 to-blue-600',
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
      title: '7. Promotions and Credits',
      icon: Info,
      color: 'from-teal-500 to-cyan-600',
      content: [
        'Promotional codes or credits follow separate terms.',
        'Credits are not cash and they may expire.',
        'OMBARO may disable credits if misuse or fraud is suspected.',
        'Promo offers may vary by user and geography.'
      ]
    },
    {
      title: '8. Cancellations and Refunds',
      icon: AlertCircle,
      color: 'from-red-500 to-pink-600',
      content: [
        'Cancellation rules apply as shown on the Platform at booking.',
        'If you cancel after confirmation, cancellation fees may apply.',
        'Refunds follow the Platform\'s refund policy and law.',
        'For Provider no-shows, we will offer a reschedule or refund.',
        'Refund timelines depend on payment method and bank rules.'
      ]
    },
    {
      title: '9. Service Standards and Customer Conduct',
      icon: CheckCircle,
      color: 'from-green-500 to-lime-600',
      content: [
        'Providers must deliver Services professionally and safely.',
        'Customers must treat Providers with respect and follow instructions.',
        'OMBARO may suspend or ban users who violate conduct standards.',
        'Any disputes should be reported to OMBARO support immediately.'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-neutral-50">
      <MarketingHeader />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-br from-primary-600 via-secondary-600 to-accent-600 text-white overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }} />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s', animationDelay: '2s' }} />
          </div>
          
          {/* Pattern Overlay */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTQgMTZ2LTJoLTJ2Mmgyem00IDB2LTJoLTJ2Mmgyem00IDB2LTJoLTJ2Mmgyem00IDB2LTJoLTJ2Mmgyem0wLTR2LTJoLTJ2Mmgyem0wLTR2LTJoLTJ2Mmgyem0wLTR2LTJoLTJ2Mmgyem0wLTR2LTJoLTJ2MmgyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8 animate-fade-in-down">
              <Scale className="w-5 h-5 text-amber-300 animate-bounce" style={{ animationDuration: '2s' }} />
              <span className="text-white text-sm font-semibold tracking-wide">Legal Information</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 animate-fade-in-up leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-amber-100 to-white">
                Terms & Conditions
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Please read these terms carefully before using the OMBARO platform
            </p>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 rounded-3xl p-8 md:p-12 shadow-xl border-l-4 border-primary-600 transform hover:scale-105 transition-all duration-500 hover:shadow-2xl">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg animate-bounce" style={{ animationDuration: '3s' }}>
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl md:text-4xl font-black text-neutral-900 mb-6 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                    OMBARO — Terms & Conditions
                  </h2>
                  <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                    These Terms govern your use of the OMBARO website and app (the Platform). By using the Platform, you accept and agree to these Terms. If you do not agree, do not use the Platform.
                  </p>
                  <div className="flex items-center space-x-3 text-sm text-neutral-600">
                    <div className="flex items-center space-x-2 bg-primary-100 px-4 py-2 rounded-full">
                      <Calendar className="w-4 h-4 text-primary-600" />
                      <span className="font-semibold">Last updated: January 2025</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Terms Sections - Accordion Style */}
        <section className="py-16 bg-gradient-to-br from-neutral-50 to-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-4">
              {sections.map((section, index) => {
                const Icon = section.icon;
                const isExpanded = expandedSection === index;
                
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-neutral-100"
                    style={{
                      animationDelay: `${index * 0.1}s`,
                      animation: 'fadeInUp 0.6s ease-out forwards',
                      opacity: 0
                    }}
                  >
                    <button
                      onClick={() => toggleSection(index)}
                      className="w-full px-8 py-6 flex items-center justify-between hover:bg-neutral-50 transition-colors duration-300 group"
                    >
                      <div className="flex items-center space-x-4 flex-1">
                        <div className={`w-14 h-14 bg-gradient-to-br ${section.color} rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-neutral-900 text-left group-hover:text-primary-600 transition-colors">
                          {section.title}
                        </h3>
                      </div>
                      <div className={`w-10 h-10 bg-gradient-to-br ${section.color} rounded-lg flex items-center justify-center transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                        {isExpanded ? (
                          <ChevronUp className="w-6 h-6 text-white" />
                        ) : (
                          <ChevronDown className="w-6 h-6 text-white" />
                        )}
                      </div>
                    </button>
                    
                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="px-8 pb-8 pt-4 bg-gradient-to-br from-neutral-50 to-white">
                        <ul className="space-y-4">
                          {section.content.map((item, idx) => (
                            <li
                              key={idx}
                              className="flex items-start space-x-3 transform hover:translate-x-2 transition-transform duration-300"
                              style={{
                                animation: isExpanded ? `slideInLeft 0.4s ease-out ${idx * 0.1}s forwards` : 'none',
                                opacity: isExpanded ? 1 : 0
                              }}
                            >
                              <CheckCircle className={`w-6 h-6 flex-shrink-0 mt-0.5 bg-gradient-to-br ${section.color} rounded-full p-1 text-white`} />
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
            <div className="relative bg-gradient-to-br from-primary-600 via-secondary-600 to-accent-600 rounded-3xl p-12 text-white overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500">
              {/* Animated Background */}
              <div className="absolute inset-0">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />
              </div>

              <div className="relative z-10 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-6 animate-bounce" style={{ animationDuration: '3s' }}>
                  <Shield className="w-10 h-10 text-amber-300" />
                </div>
                <h3 className="text-3xl md:text-4xl font-black mb-6">Questions About Our Terms?</h3>
                <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
                  If you have any questions or concerns about our Terms & Conditions, please don't hesitate to contact our support team.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <a
                    href="mailto:legal@ombaro.com"
                    className="group bg-white text-primary-600 px-8 py-4 rounded-2xl font-bold hover:bg-neutral-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 flex items-center justify-center space-x-3"
                  >
                    <Mail className="w-5 h-5 group-hover:animate-bounce" />
                    <span>legal@ombaro.com</span>
                  </a>
                  <a
                    href="tel:+911234567890"
                    className="group bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-bold hover:bg-white/20 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 flex items-center justify-center space-x-3"
                  >
                    <Phone className="w-5 h-5 group-hover:animate-bounce" />
                    <span>+91 123 456 7890</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <MarketingFooter />

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-down {
          animation: fade-in-down 0.6s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};
