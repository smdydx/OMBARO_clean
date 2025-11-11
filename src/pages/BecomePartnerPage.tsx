
import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, CheckCircle, TrendingUp, Users, Calendar, Wallet,
  BarChart3, Shield, Star, Phone, Mail, Award, Target, Zap,
  ChevronDown, ChevronUp, Sparkles, Crown, Heart, Coffee
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { MarketingHeader } from '../components/marketing/MarketingHeader';
import { MarketingFooter } from '../components/marketing/MarketingFooter';

export const BecomePartnerPage: React.FC = () => {
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <MarketingHeader />

      <main className="pt-16">
        {/* Elegant Hero Section */}
        <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-sky-50 via-white to-sky-50">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-96 h-96 bg-sky-400 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center space-x-2 bg-sky-100 rounded-full px-6 py-3 mb-8">
                  <Sparkles className="w-5 h-5 text-sky-600" />
                  <span className="text-sky-800 text-sm font-semibold tracking-wider uppercase">Premium Partner Program</span>
                </div>

                <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight text-gray-900" style={{ fontFamily: "'Tenor Sans', serif" }}>
                  Grow Your<br />
                  <span className="text-sky-600">Beauty Empire</span>
                </h1>

                <p className="text-xl md:text-2xl mb-10 text-gray-600 leading-relaxed">
                  Join 500+ successful businesses thriving on India's most trusted beauty platform
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <Link to="/app">
                    <Button size="lg" className="w-full sm:w-auto bg-sky-600 hover:bg-sky-700 text-white shadow-xl text-lg px-10 py-6 rounded-full">
                      Start Your Journey
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                  <a href="tel:+911234567890">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-sky-600 text-sky-600 hover:bg-sky-50 text-lg px-10 py-6 rounded-full">
                      <Phone className="w-5 h-5 mr-2" />
                      Call Us Now
                    </Button>
                  </a>
                </div>

                <div className="flex flex-wrap gap-6 text-gray-700">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-sky-600" />
                    <span className="font-medium">Zero Setup Cost</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-sky-600" />
                    <span className="font-medium">24hr Approval</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-sky-600" />
                    <span className="font-medium">Instant Payouts</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-200 to-cyan-200 rounded-3xl transform rotate-6"></div>
                <img 
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=90"
                  alt="Partner Success"
                  className="relative rounded-3xl shadow-2xl w-full h-[600px] object-cover"
                />
                <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-2xl p-6 max-w-xs">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-8 h-8 text-sky-600" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-gray-900">40%</div>
                      <div className="text-sm text-gray-600">Revenue Growth</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Elegant Stats */}
        <section className="py-20 bg-white border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
              <div className="text-center">
                <div className="text-5xl font-bold mb-3 text-sky-600" style={{ fontFamily: "'Tenor Sans', serif" }}>500+</div>
                <div className="text-gray-600 font-medium">Partner Businesses</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-3 text-sky-600" style={{ fontFamily: "'Tenor Sans', serif" }}>50K+</div>
                <div className="text-gray-600 font-medium">Monthly Customers</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-3 text-sky-600" style={{ fontFamily: "'Tenor Sans', serif" }}>40%</div>
                <div className="text-gray-600 font-medium">Revenue Increase</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-3 text-sky-600" style={{ fontFamily: "'Tenor Sans', serif" }}>4.8★</div>
                <div className="text-gray-600 font-medium">Partner Rating</div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section - Clean & Minimal */}
        <section className="py-32 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'Tenor Sans', serif" }}>
                Why Partner With Us
              </h2>
              <div className="w-24 h-1 bg-sky-600 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Everything you need to build a successful beauty business
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
                <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mb-6">
                  <TrendingUp className="w-8 h-8 text-sky-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900" style={{ fontFamily: "'Tenor Sans', serif" }}>
                  Grow Revenue
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Partners see an average 40% increase in bookings within the first 3 months of joining our platform.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-sky-600" />
                    <span>Automated booking system</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-sky-600" />
                    <span>24/7 customer support</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
                <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mb-6">
                  <Calendar className="w-8 h-8 text-sky-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900" style={{ fontFamily: "'Tenor Sans', serif" }}>
                  Smart Management
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Save 15+ hours weekly with our automated scheduling and customer management system.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-sky-600" />
                    <span>Real-time scheduling</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-sky-600" />
                    <span>CRM integration</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
                <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mb-6">
                  <Wallet className="w-8 h-8 text-sky-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900" style={{ fontFamily: "'Tenor Sans', serif" }}>
                  Instant Payments
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Get paid within 24 hours directly to your bank account - secure, fast, and reliable.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-sky-600" />
                    <span>Secure payments</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-sky-600" />
                    <span>Transparent reports</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Perfect For - Elegant Grid */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'Tenor Sans', serif" }}>
                Perfect For Every Business
              </h2>
              <div className="w-24 h-1 bg-sky-600 mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-sky-50 to-cyan-50 p-12 hover:shadow-2xl transition-all duration-500">
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                    <Sparkles className="w-10 h-10 text-sky-600" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-gray-900" style={{ fontFamily: "'Tenor Sans', serif" }}>
                    Spa & Wellness Centers
                  </h3>
                  <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                    Professional booking management for spas and wellness centers
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-white/80 rounded-full text-sm text-gray-700 shadow-sm">Therapist Scheduling</span>
                    <span className="px-4 py-2 bg-white/80 rounded-full text-sm text-gray-700 shadow-sm">Service Packages</span>
                    <span className="px-4 py-2 bg-white/80 rounded-full text-sm text-gray-700 shadow-sm">Memberships</span>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-sky-50 to-cyan-50 p-12 hover:shadow-2xl transition-all duration-500">
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                    <Crown className="w-10 h-10 text-sky-600" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-gray-900" style={{ fontFamily: "'Tenor Sans', serif" }}>
                    Beauty Salons
                  </h3>
                  <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                    Complete salon management with stylist tracking and inventory
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-white/80 rounded-full text-sm text-gray-700 shadow-sm">Stylist Management</span>
                    <span className="px-4 py-2 bg-white/80 rounded-full text-sm text-gray-700 shadow-sm">Product Sales</span>
                    <span className="px-4 py-2 bg-white/80 rounded-full text-sm text-gray-700 shadow-sm">Customer Loyalty</span>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-sky-50 to-cyan-50 p-12 hover:shadow-2xl transition-all duration-500">
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                    <Award className="w-10 h-10 text-sky-600" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-gray-900" style={{ fontFamily: "'Tenor Sans', serif" }}>
                    Bridal Makeup Artists
                  </h3>
                  <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                    Showcase your portfolio and manage wedding bookings effortlessly
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-white/80 rounded-full text-sm text-gray-700 shadow-sm">Portfolio Gallery</span>
                    <span className="px-4 py-2 bg-white/80 rounded-full text-sm text-gray-700 shadow-sm">Package Bookings</span>
                    <span className="px-4 py-2 bg-white/80 rounded-full text-sm text-gray-700 shadow-sm">Trial Sessions</span>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-sky-50 to-cyan-50 p-12 hover:shadow-2xl transition-all duration-500">
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                    <Heart className="w-10 h-10 text-sky-600" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-gray-900" style={{ fontFamily: "'Tenor Sans', serif" }}>
                    Wellness Centers
                  </h3>
                  <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                    Holistic wellness programs, yoga classes, and therapy services
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-white/80 rounded-full text-sm text-gray-700 shadow-sm">Class Scheduling</span>
                    <span className="px-4 py-2 bg-white/80 rounded-full text-sm text-gray-700 shadow-sm">Memberships</span>
                    <span className="px-4 py-2 bg-white/80 rounded-full text-sm text-gray-700 shadow-sm">Programs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials - Clean Minimal */}
        <section className="py-32 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'Tenor Sans', serif" }}>
                Success Stories
              </h2>
              <div className="w-24 h-1 bg-sky-600 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600">
                Real businesses, real growth, real success
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed text-lg">
                  "OMBARO transformed our spa business completely. Revenue doubled in 6 months!"
                </p>
                <div className="pt-6 border-t border-gray-100">
                  <div className="font-bold text-gray-900 text-lg">Meera Kapoor</div>
                  <div className="text-sm text-gray-500">Serenity Spa, Mumbai</div>
                </div>
                <div className="mt-4 inline-block px-4 py-2 bg-sky-100 text-sky-700 rounded-full text-sm font-semibold">
                  +45% Revenue
                </div>
              </div>

              <div className="bg-white rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed text-lg">
                  "Managing appointments was always a headache. OMBARO made everything so simple!"
                </p>
                <div className="pt-6 border-t border-gray-100">
                  <div className="font-bold text-gray-900 text-lg">Rajesh Sharma</div>
                  <div className="text-sm text-gray-500">Glamour Salon, Delhi</div>
                </div>
                <div className="mt-4 inline-block px-4 py-2 bg-sky-100 text-sky-700 rounded-full text-sm font-semibold">
                  +60% Bookings
                </div>
              </div>

              <div className="bg-white rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed text-lg">
                  "As a freelance artist, OMBARO gave me access to hundreds of brides. Calendar fully booked!"
                </p>
                <div className="pt-6 border-t border-gray-100">
                  <div className="font-bold text-gray-900 text-lg">Priya Deshmukh</div>
                  <div className="text-sm text-gray-500">Bridal Makeup Artist, Pune</div>
                </div>
                <div className="mt-4 inline-block px-4 py-2 bg-sky-100 text-sky-700 rounded-full text-sm font-semibold">
                  +80% Growth
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works - Minimal Timeline */}
        <section className="py-32 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'Tenor Sans', serif" }}>
                Get Started in 4 Steps
              </h2>
              <div className="w-24 h-1 bg-sky-600 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600">
                Your business online in less than 48 hours
              </p>
            </div>

            <div className="space-y-16">
              <div className="flex items-start space-x-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-sky-600 text-white rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-3xl font-bold">1</span>
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900" style={{ fontFamily: "'Tenor Sans', serif" }}>
                    Register
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Fill simple form with your business details. Takes less than 5 minutes.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-sky-600 text-white rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-3xl font-bold">2</span>
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900" style={{ fontFamily: "'Tenor Sans', serif" }}>
                    Get Verified
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    We verify your documents within 24-48 hours. Quick and hassle-free.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-sky-600 text-white rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-3xl font-bold">3</span>
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900" style={{ fontFamily: "'Tenor Sans', serif" }}>
                    Setup Profile
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Add photos, services, pricing & availability. Make your profile shine.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-sky-600 text-white rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-3xl font-bold">4</span>
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900" style={{ fontFamily: "'Tenor Sans', serif" }}>
                    Go Live!
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Start receiving bookings immediately and watch your business grow.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-16">
              <Link to="/app">
                <Button size="lg" className="bg-sky-600 hover:bg-sky-700 text-white text-lg px-12 py-6 rounded-full shadow-xl">
                  Start Your Free Registration
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Platform Features */}
        <section className="py-32 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'Tenor Sans', serif" }}>
                Platform Features
              </h2>
              <div className="w-24 h-1 bg-sky-600 mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                { icon: Calendar, title: 'Smart Booking', desc: 'Automated appointments' },
                { icon: Wallet, title: 'Instant Payouts', desc: 'Get paid in 24 hours' },
                { icon: BarChart3, title: 'Analytics', desc: 'Track performance' },
                { icon: Users, title: 'CRM Tools', desc: 'Manage customers' },
                { icon: Shield, title: 'Trust & Safety', desc: 'Verified reviews' },
                { icon: Zap, title: 'Marketing', desc: 'Promotional campaigns' },
                { icon: Phone, title: '24/7 Support', desc: 'Dedicated manager' },
                { icon: Target, title: 'Multi-Location', desc: 'Manage branches' },
              ].map((feature, idx) => (
                <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 text-center">
                  <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-sky-600" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-32 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'Tenor Sans', serif" }}>
                Common Questions
              </h2>
              <div className="w-24 h-1 bg-sky-600 mx-auto"></div>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: "How long does registration take?",
                  a: "Just 10 minutes to apply, and 24-48 hours for approval. You can start accepting bookings immediately after approval."
                },
                {
                  q: "What commission does OMBARO charge?",
                  a: "Commission varies from 15-30% based on your partnership model. No hidden fees - you only pay on completed bookings."
                },
                {
                  q: "When do I receive payments?",
                  a: "Payments are processed instantly after service completion. Funds reach your bank account within 24-48 hours."
                },
                {
                  q: "Can I manage multiple locations?",
                  a: "Yes! Our platform supports multi-location management from a single dashboard."
                },
                {
                  q: "Is there any setup fee?",
                  a: "No setup fees, no hidden charges. Join for free and start growing your business immediately."
                }
              ].map((faq, idx) => (
                <div key={idx} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-md overflow-hidden border border-gray-100">
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-gray-900 text-lg pr-4">{faq.q}</span>
                    {openFaq === idx ? (
                      <ChevronUp className="w-6 h-6 text-sky-600 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-sky-600 flex-shrink-0" />
                    )}
                  </button>
                  {openFaq === idx && (
                    <div className="px-8 pb-6 text-gray-600 leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA - Elegant */}
        <section className="py-32 bg-gradient-to-br from-sky-600 to-cyan-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: "'Tenor Sans', serif" }}>
              Ready to Transform Your Business?
            </h2>
            <p className="text-2xl mb-12 text-white/90">
              Join 500+ successful beauty businesses on OMBARO today
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Link to="/app">
                <Button size="lg" className="w-full sm:w-auto bg-white text-sky-600 hover:bg-gray-100 text-lg px-12 py-6 rounded-full shadow-2xl font-semibold">
                  Start Free Registration
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <a href="mailto:partners@ombaro.com">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-white text-white hover:bg-white/10 text-lg px-12 py-6 rounded-full">
                  <Mail className="w-5 h-5 mr-2" />
                  Email Us
                </Button>
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-8">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5" />
                <span>Zero Setup Cost</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5" />
                <span>24hr Approval</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5" />
                <span>Instant Payouts</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5" />
                <span>Free Support</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <MarketingFooter />
    </div>
  );
};
