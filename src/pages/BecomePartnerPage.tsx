import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, CheckCircle, TrendingUp, Users, Calendar, Wallet,
  BarChart3, Shield, Star, Phone, Mail, Award, Target, Zap,
  ChevronDown, ChevronUp, Sparkles, Crown, Heart, Coffee, Lock,
  Eye, Gem, DollarSign, UserCheck, Gift, Briefcase
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { MarketingHeader } from '../components/marketing/MarketingHeader';
import { MarketingFooter } from '../components/marketing/MarketingFooter';

export const BecomePartnerPage: React.FC = () => {
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <MarketingHeader />

      <main className="pt-0">
        {/* Premium Hero Section */}
        <section className="relative min-h-[600px] sm:min-h-[700px] md:min-h-[800px] lg:min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black pt-16 sm:pt-20 md:pt-24">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-green-400 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-green-600 rounded-full blur-3xl animate-pulse"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 sm:py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div>
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500 to-green-600 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8 shadow-lg">
                  <Crown className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  <span className="text-white text-xs sm:text-sm font-bold tracking-wider uppercase">Elite Partner Program</span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight text-white" style={{ fontFamily: "'Tenor Sans', serif" }}>
                  Join OMBARO's<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
                    Partner Network
                  </span>
                </h1>

                <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-white/90 leading-relaxed">
                  Grow your spa business with OMBARO's trusted platform. Join our network of professional partners and reach more customers.
                </p>

                <div className="bg-white/10 backdrop-blur-md border border-green-500/30 rounded-2xl p-6 mb-8">
                  <h3 className="text-white font-bold text-lg mb-4 flex items-center">
                    <Gift className="w-5 h-5 text-green-400 mr-2" />
                    Partnership Benefits
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center text-white">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-sm sm:text-base">Easy onboarding process</span>
                    </div>
                    <div className="flex items-center text-white">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-sm sm:text-base">Access to verified customer base</span>
                    </div>
                    <div className="flex items-center text-white">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-sm sm:text-base">Platform support and tools</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link to="/app" className="w-full sm:w-auto">
                    <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-2xl text-lg px-12 py-6 rounded-full transform hover:scale-105 transition-all">
                      Claim Your Spot Now
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                  <a href="tel:+919876543210" className="w-full sm:w-auto">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-green-500 text-green-400 hover:bg-green-500/10 text-lg px-10 py-6 rounded-full">
                      <Phone className="w-5 h-5 mr-2" />
                      Talk to Expert
                    </Button>
                  </a>
                </div>

                <div className="flex flex-wrap gap-6 text-white/80 text-sm">
                  <div className="flex items-center space-x-2">
                    <UserCheck className="w-5 h-5 text-green-400" />
                    <span>24hr Approval</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <DollarSign className="w-5 h-5 text-green-400" />
                    <span>Daily Payouts</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Shield className="w-5 h-5 text-green-400" />
                    <span>100% Secure</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                {/* Enhanced Collage Design with Hover Effects */}
                <div className="grid grid-cols-12 gap-3 sm:gap-4">
                  {/* Large Image Top Left - Prominent */}
                  <div className="col-span-7 relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-600 rounded-3xl transform rotate-2 opacity-20 group-hover:rotate-3 group-hover:scale-105 transition-all duration-500"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <img
                      src="/images/luxury_spa_massage_t_2767ba26.jpg"
                      alt="Premium Thai Massage"
                      className="relative rounded-3xl shadow-2xl w-full h-56 sm:h-72 md:h-96 object-cover border-2 border-green-500/30 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="text-lg font-bold">Premium Services</div>
                      <div className="text-sm text-green-300">Luxury Experiences</div>
                    </div>
                  </div>

                  {/* Top Right Small Image */}
                  <div className="col-span-5 relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-green-700 rounded-3xl transform -rotate-1 opacity-15 group-hover:rotate-1 group-hover:scale-105 transition-all duration-500"></div>
                    <img
                      src="/images/luxury_spa_massage_t_3fdc8d75.jpg"
                      alt="Aromatherapy"
                      className="rounded-3xl shadow-xl w-full h-40 sm:h-52 md:h-64 object-cover border-2 border-green-500/20 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-3xl"></div>
                  </div>

                  {/* Bottom Left Image */}
                  <div className="col-span-5 relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-green-400 rounded-3xl transform rotate-1 opacity-15 group-hover:-rotate-1 group-hover:scale-105 transition-all duration-500"></div>
                    <img
                      src="/images/luxury_spa_massage_t_48a88152.jpg"
                      alt="Swedish Massage"
                      className="rounded-3xl shadow-xl w-full h-40 sm:h-52 md:h-64 object-cover border-2 border-green-500/20 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-3xl"></div>
                  </div>

                  {/* Bottom Right Image */}
                  <div className="col-span-7 relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-600 rounded-3xl transform -rotate-2 opacity-20 group-hover:rotate-2 group-hover:scale-105 transition-all duration-500"></div>
                    <img
                      src="/images/luxury_spa_massage_t_690db67f.jpg"
                      alt="Hot Oil Therapy"
                      className="rounded-3xl shadow-xl w-full h-40 sm:h-52 md:h-64 object-cover border-2 border-green-500/20 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-3xl"></div>
                  </div>
                </div>

                {/* Animated Stats Badge */}
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-green-500 via-green-600 to-green-700 rounded-3xl p-6 sm:p-8 shadow-2xl max-w-xs z-20 border-4 border-white transform hover:scale-110 transition-transform duration-300">
                  <div className="text-white relative">
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full animate-ping"></div>
                    <div className="text-4xl sm:text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-green-200">
                      500+
                    </div>
                    <p className="text-sm sm:text-base font-semibold opacity-90">Active Partners</p>
                    <p className="text-xs mt-2 opacity-75 flex items-center">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      Growing Network
                    </p>
                  </div>
                </div>

                {/* Floating Trust Badge */}
                <div className="absolute -top-4 -left-4 bg-white rounded-2xl p-3 shadow-xl z-20 border-2 border-green-500 transform hover:scale-110 transition-transform duration-300">
                  <div className="flex items-center space-x-2">
                    <Shield className="w-6 h-6 text-green-600" />
                    <div className="text-xs font-bold text-gray-900">Verified<br/>Partner</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Exclusive Benefits Section */}
        <section className="py-20 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'Tenor Sans', serif" }}>
                Why Top Spas Choose <span className="text-green-600">OMBARO</span>
              </h2>
              <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We connect you with customers looking for quality wellness services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* High-Value Clients */}
              <div className="group relative bg-gradient-to-br from-black via-gray-900 to-black rounded-3xl overflow-hidden shadow-2xl hover:shadow-green-500/50 transition-all duration-500 border-2 border-green-500 hover:border-green-400 transform hover:-translate-y-2">
                <div className="absolute top-0 right-0 w-40 h-40 bg-green-500 rounded-bl-full opacity-10 group-hover:opacity-20 transition-opacity"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10 p-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-green-500/50 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <Gem className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white" style={{ fontFamily: "'Tenor Sans', serif" }}>
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-green-500">Premium Clientele</span>
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Access to <strong className="text-green-400">verified high-net-worth individuals</strong> seeking exclusive wellness experiences and <strong className="text-green-400">personalized private services</strong>
                  </p>
                  <div className="space-y-2 text-sm text-gray-300">
                    <div className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-green-400" />
                      <span>Corporate executives & celebrities</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Lock className="w-4 h-4 text-green-400" />
                      <span>VIP membership programs</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Eye className="w-4 h-4 text-green-400" />
                      <span>Discreet premium services</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Maximum Revenue */}
              <div className="group relative bg-gradient-to-br from-black via-gray-900 to-black rounded-3xl overflow-hidden shadow-2xl hover:shadow-green-500/50 transition-all duration-500 border-2 border-green-500 hover:border-green-400 transform hover:-translate-y-2">
                <div className="absolute top-0 right-0 w-40 h-40 bg-green-500 rounded-bl-full opacity-10 group-hover:opacity-20 transition-opacity"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10 p-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-green-500/50 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <TrendingUp className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white" style={{ fontFamily: "'Tenor Sans', serif" }}>
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-green-500">Explosive Growth</span>
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Our platform helps you grow your business by connecting you with customers actively looking for wellness services in your area
                  </p>
                  <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-4 mb-4 shadow-lg">
                    <div className="text-3xl font-bold text-white mb-1">Real Growth</div>
                    <div className="text-sm text-green-100">Steady Customer Flow</div>
                  </div>
                  <div className="text-xs text-gray-400 italic">
                    *Results vary by location and services
                  </div>
                </div>
              </div>

              {/* Complete Freedom */}
              <div className="group relative bg-gradient-to-br from-black via-gray-900 to-black rounded-3xl overflow-hidden shadow-2xl hover:shadow-green-500/50 transition-all duration-500 border-2 border-green-500 hover:border-green-400 transform hover:-translate-y-2">
                <div className="absolute top-0 right-0 w-40 h-40 bg-green-500 rounded-bl-full opacity-10 group-hover:opacity-20 transition-opacity"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10 p-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-green-500/50 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <Briefcase className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white" style={{ fontFamily: "'Tenor Sans', serif" }}>
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-green-500">Your Business, Your Rules</span>
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    <strong className="text-green-400">Complete control</strong> over your services, pricing, and special offerings. We support <strong className="text-green-400">all types of wellness services</strong>
                  </p>
                  <div className="space-y-2 text-sm text-gray-300">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>Set your own prices & packages</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>Offer exclusive memberships</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>Private session bookings</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Premium Features Grid */}
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-12 text-white">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold mb-4" style={{ fontFamily: "'Tenor Sans', serif" }}>
                  What Makes Us Different
                </h3>
                <p className="text-white/80 text-lg">Features that actually make you money</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <Lock className="w-8 h-8 text-green-400 mb-4" />
                  <h4 className="font-bold mb-2">VIP Client Network</h4>
                  <p className="text-sm text-white/70">Exclusive access to high-paying clients seeking premium experiences</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <DollarSign className="w-8 h-8 text-green-400 mb-4" />
                  <h4 className="font-bold mb-2">Premium Pricing Support</h4>
                  <p className="text-sm text-white/70">Charge 2-3X more for exclusive services with our platform backing</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <Eye className="w-8 h-8 text-green-400 mb-4" />
                  <h4 className="font-bold mb-2">Privacy & Discretion</h4>
                  <p className="text-sm text-white/70">Private booking system for VIP clients - complete confidentiality</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <Wallet className="w-8 h-8 text-green-400 mb-4" />
                  <h4 className="font-bold mb-2">Instant Payments</h4>
                  <p className="text-sm text-white/70">Get paid within hours directly to your account - no delays</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories with Real Numbers */}
        <section className="py-20 bg-gradient-to-br from-green-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'Tenor Sans', serif" }}>
                Real Partners, Real Success
              </h2>
              <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600">These numbers speak louder than promises</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-green-100">
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed text-lg">
                  "Started earning <strong className="text-green-600">₹12L/month</strong> within 4 months. The VIP client network alone is worth it. My exclusive packages are always booked!"
                </p>
                <div className="pt-6 border-t border-gray-100">
                  <div className="font-bold text-gray-900 text-lg">Priya Malhotra</div>
                  <div className="text-sm text-gray-500">Luxury Spa, South Delhi</div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-bold">
                    +340% Revenue
                  </span>
                  <span className="text-xs text-gray-500">6 months</span>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-green-100">
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed text-lg">
                  "The platform understands premium business. My private consultation bookings increased <strong className="text-green-600">5X</strong>. Clients appreciate the discretion."
                </p>
                <div className="pt-6 border-t border-gray-100">
                  <div className="font-bold text-gray-900 text-lg">Rajesh Khanna</div>
                  <div className="text-sm text-gray-500">Elite Wellness Center, Mumbai</div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-bold">
                    +500% Bookings
                  </span>
                  <span className="text-xs text-gray-500">3 months</span>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-green-100">
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed text-lg">
                  "Finally a platform that supports <strong className="text-green-600">all our services</strong>. VIP memberships are fully booked. Earning ₹8L+ consistently!"
                </p>
                <div className="pt-6 border-t border-gray-100">
                  <div className="font-bold text-gray-900 text-lg">Sanya Kapoor</div>
                  <div className="text-sm text-gray-500">Premium Spa & Wellness, Bangalore</div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-bold">
                    +280% Growth
                  </span>
                  <span className="text-xs text-gray-500">5 months</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Massage Services Gallery */}
        <section className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6" style={{ fontFamily: "'Tenor Sans', serif" }}>
                Premium Massage Services
              </h2>
              <div className="w-24 h-1 bg-green-600 mx-auto mb-4 sm:mb-6"></div>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                Professional massage therapies for ultimate relaxation and wellness
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {/* Thai Massage */}
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-green-100 hover:border-green-400">
                <div className="aspect-w-16 aspect-h-12 bg-gray-200">
                  <img src="/images/luxury_spa_massage_t_2767ba26.jpg" alt="Thai Massage" className="w-full h-64 object-cover" />
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900">Thai Massage</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Traditional Thai massage with stretching and acupressure techniques for deep relaxation and improved flexibility.
                  </p>
                </div>
              </div>

              {/* Aroma Massage */}
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-green-100 hover:border-green-400">
                <div className="aspect-w-16 aspect-h-12 bg-gray-200">
                  <img src="/images/luxury_spa_massage_t_3fdc8d75.jpg" alt="Aroma Massage" className="w-full h-64 object-cover" />
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900">Aroma Massage</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Aromatherapy massage using essential oils to promote relaxation and reduce stress through soothing scents.
                  </p>
                </div>
              </div>

              {/* Swedish Massage */}
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-green-100 hover:border-green-400">
                <div className="aspect-w-16 aspect-h-12 bg-gray-200">
                  <img src="/images/luxury_spa_massage_t_48a88152.jpg" alt="Swedish Massage" className="w-full h-64 object-cover" />
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900">Swedish Massage</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Classic Swedish massage therapy using gentle, flowing strokes to improve circulation and overall well-being.
                  </p>
                </div>
              </div>

              {/* Hot Oil Massage */}
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-green-100 hover:border-green-400">
                <div className="aspect-w-16 aspect-h-12 bg-gray-200">
                  <img src="/images/luxury_spa_massage_t_690db67f.jpg" alt="Hot Oil Massage" className="w-full h-64 object-cover" />
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900">Hot Oil Massage</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Warm oil massage to promote wellness, stress relief, and healthy skin while deeply relaxing muscles.
                  </p>
                </div>
              </div>

              {/* Hot Stone Massage */}
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-green-100 hover:border-green-400">
                <div className="aspect-w-16 aspect-h-12 bg-gray-200">
                  <img src="/images/luxury_spa_massage_t_6f866171.jpg" alt="Hot Stone Massage" className="w-full h-64 object-cover" />
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900">Hot Stone Massage</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Heated volcanic stones and massage oils to release tension, promote circulation, and create positive energy.
                  </p>
                </div>
              </div>

              {/* Deep Tissue Massage */}
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-green-100 hover:border-green-400">
                <div className="aspect-w-16 aspect-h-12 bg-gray-200">
                  <img src="/images/spa_treatment_room_i_609c3288.jpg" alt="Deep Tissue Massage" className="w-full h-64 object-cover" />
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900">Deep Tissue Massage</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Focused deep pressure massage targeting chronic tension, muscle soreness, and specific problem areas.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-gradient-to-r from-green-500 to-green-600 rounded-3xl p-6 sm:p-8 text-white text-center">
              <Lock className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-4" />
              <h3 className="text-xl sm:text-2xl font-bold mb-3">Complete Privacy & Discretion Guaranteed</h3>
              <p className="text-base sm:text-lg text-white/90 max-w-3xl mx-auto px-4">
                Our platform is designed to support <strong>all types of wellness services</strong> with complete confidentiality.
                VIP clients, private bookings, exclusive memberships - everything handled with utmost discretion.
              </p>
            </div>
          </div>
        </section>

        {/* Service Types We Support */}
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-green-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6" style={{ fontFamily: "'Tenor Sans', serif" }}>
                We Support <span className="text-green-600">All</span> Your Services
              </h2>
              <div className="w-24 h-1 bg-green-600 mx-auto mb-4 sm:mb-6"></div>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                From basic spa treatments to <strong>exclusive VIP experiences</strong> - we've got you covered
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {[
                { name: 'Spa & Massage', icon: Sparkles, premium: 'Private Sessions' },
                { name: 'Beauty Treatments', icon: Heart, premium: 'VIP Packages' },
                { name: 'Wellness Programs', icon: Target, premium: 'Exclusive Memberships' },
                { name: 'Therapeutic Services', icon: Award, premium: 'Personalized Care' },
                { name: 'Body Treatments', icon: Coffee, premium: 'Luxury Experiences' },
                { name: 'Facial Care', icon: Star, premium: 'Premium Treatments' },
                { name: 'Aromatherapy', icon: Crown, premium: 'Custom Blends' },
                { name: 'Special Services', icon: Lock, premium: 'VIP Only' },
              ].map((service, idx) => (
                <div key={idx} className="group bg-gradient-to-br from-green-50 to-white rounded-2xl p-4 sm:p-6 text-center hover:shadow-xl transition-all duration-300 border-2 border-green-100 hover:border-green-400">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-sm sm:text-base md:text-lg font-bold mb-1 sm:mb-2 text-gray-900">{service.name}</h3>
                  <p className="text-xs sm:text-sm text-green-600 font-semibold">{service.premium}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Simple 3-Step Process */}
        <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6" style={{ fontFamily: "'Tenor Sans', serif" }}>
                Start Earning in 3 Simple Steps
              </h2>
              <div className="w-24 h-1 bg-green-500 mx-auto mb-6"></div>
              <p className="text-xl text-white/80">Launch your premium business in less than 24 hours</p>
            </div>

            <div className="space-y-12">
              <div className="flex items-start space-x-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 text-white rounded-full flex items-center justify-center shadow-2xl">
                    <span className="text-3xl font-bold">1</span>
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-2xl font-bold mb-3">Quick Registration</h3>
                  <p className="text-white/80 text-lg leading-relaxed">
                    Fill basic details in 5 minutes. No paperwork, no hassle. Just simple online form.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 text-white rounded-full flex items-center justify-center shadow-2xl">
                    <span className="text-3xl font-bold">2</span>
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-2xl font-bold mb-3">24hr Approval</h3>
                  <p className="text-white/80 text-lg leading-relaxed">
                    Our team verifies and approves within 24 hours. Get instant access to dashboard & VIP client network.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 text-white rounded-full flex items-center justify-center shadow-2xl">
                    <span className="text-3xl font-bold">3</span>
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-2xl font-bold mb-3">Start Earning!</h3>
                  <p className="text-white/80 text-lg leading-relaxed">
                    List your services, set premium prices, and watch bookings roll in. Get paid daily!
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-16">
              <Link to="/app">
                <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 text-lg px-16 py-6 rounded-full shadow-2xl font-bold transform hover:scale-105 transition-all">
                  Start Your Journey Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <p className="text-white/60 text-sm mt-4">No credit card required • Free to join</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'Tenor Sans', serif" }}>
                Questions? We've Got Answers
              </h2>
              <div className="w-24 h-1 bg-green-600 mx-auto"></div>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: "What types of services can I offer on the platform?",
                  a: "ALL types of wellness and spa services are supported - from basic massages to exclusive VIP packages, private consultations, therapeutic treatments, and premium memberships. We believe in complete business freedom."
                },
                {
                  q: "How much can I really earn?",
                  a: "Our top partners earn ₹8-15L monthly. Average partners make ₹5-7L. Your earnings depend on your services, pricing, and how you utilize our VIP client network. Premium services command premium prices."
                },
                {
                  q: "Is client privacy maintained for special services?",
                  a: "Absolutely. We have a dedicated VIP booking system with complete discretion. Private sessions, exclusive memberships, and special services are handled with utmost confidentiality. No client information is shared."
                },
                {
                  q: "What are the fees?",
                  a: "ZERO setup cost. Small commission only on completed bookings (15-25% based on service type). For premium/VIP services, even lower commission. You keep the majority of your earnings."
                },
                {
                  q: "How fast do I get paid?",
                  a: "Instant settlement after service completion. Money reaches your account within 24 hours. No weekly/monthly waiting. You earn, you get paid - simple!"
                }
              ].map((faq, idx) => (
                <div key={idx} className="bg-gradient-to-br from-green-50 to-white rounded-2xl shadow-lg overflow-hidden border-2 border-green-100">
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-green-50/50 transition-colors"
                  >
                    <span className="font-bold text-gray-900 text-lg pr-4">{faq.q}</span>
                    {openFaq === idx ? (
                      <ChevronUp className="w-6 h-6 text-green-600 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-green-600 flex-shrink-0" />
                    )}
                  </button>
                  {openFaq === idx && (
                    <div className="px-8 pb-6 text-gray-700 leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA - Urgency */}
        <section className="py-24 bg-gradient-to-br from-green-500 via-green-600 to-green-700 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: "'Tenor Sans', serif" }}>
              Ready to Grow Your Business?
            </h2>
            <p className="text-2xl mb-8 text-white/95">
              Join OMBARO's trusted wellness platform today
            </p>

            <div className="bg-white/10 backdrop-blur-md border-2 border-white/30 rounded-3xl p-8 mb-10 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-6">Partnership Benefits:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0 mt-1" />
                  <span>Simple onboarding process</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0 mt-1" />
                  <span>Verified customer base</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0 mt-1" />
                  <span>Secure payment system</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0 mt-1" />
                  <span>Platform support</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-10">
              <Link to="/app" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto bg-white text-green-600 hover:bg-gray-100 text-xl px-16 py-7 rounded-full shadow-2xl font-bold transform hover:scale-105 transition-all">
                  Claim Your Spot Now
                  <ArrowRight className="w-6 h-6 ml-2" />
                </Button>
              </Link>
              <a href="tel:+919876543210" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-3 border-white text-white hover:bg-white/10 text-xl px-12 py-7 rounded-full backdrop-blur-sm">
                  <Phone className="w-6 h-6 mr-2" />
                  Call: +91 98765 43210
                </Button>
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-sm">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5" />
                <span>No Hidden Charges</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5" />
                <span>24hr Approval</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5" />
                <span>100% Privacy Guaranteed</span>
              </div>
            </div>

            <p className="text-white/80 text-sm mt-8 italic">
              Join our growing network of wellness professionals
            </p>
          </div>
        </section>
      </main>

      <MarketingFooter />
    </div>
  );
};