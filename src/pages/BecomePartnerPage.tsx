import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, CheckCircle, TrendingUp, Wallet, Shield, Star, Phone,
  ChevronDown, ChevronUp, Crown, Lock, Eye, Gem, DollarSign, UserCheck, Gift, Briefcase
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
        {/* Premium Hero Section - Enhanced Attractive Design */}
        <section className="relative min-h-[500px] sm:min-h-[600px] md:min-h-[700px] lg:min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 pt-16 sm:pt-18 md:pt-20">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-0 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-gradient-to-br from-green-300 to-emerald-400 rounded-full blur-3xl opacity-30 animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-gradient-to-br from-teal-300 to-green-400 rounded-full blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-gradient-to-br from-emerald-200 to-green-300 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
            {/* Decorative Grid Pattern */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgxNiwgMTg1LCAxMjksIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-6 sm:py-8 md:py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
              {/* Left Content */}
              <div className="order-2 lg:order-1">
                {/* Animated Badge with Pulsing Effect */}
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 rounded-full px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 mb-4 sm:mb-6 md:mb-8 shadow-2xl shadow-green-500/50 animate-pulse">
                  <Crown className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white animate-bounce" />
                  <span className="text-white text-xs sm:text-sm font-bold tracking-wider uppercase">🌟 Elite Partner Program 2024</span>
                </div>

                {/* Success Metrics Strip */}
                <div className="flex flex-wrap gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl px-3 sm:px-4 py-2 shadow-lg border-2 border-green-200">
                    <div className="text-green-600 font-bold text-xs sm:text-sm">500+ Active Partners</div>
                  </div>
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl px-3 sm:px-4 py-2 shadow-lg border-2 border-green-200">
                    <div className="text-green-600 font-bold text-xs sm:text-sm">₹15L+ Monthly Earnings</div>
                  </div>
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl px-3 sm:px-4 py-2 shadow-lg border-2 border-green-200">
                    <div className="text-green-600 font-bold text-xs sm:text-sm">24hr Approval</div>
                  </div>
                </div>

                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight text-gray-900" style={{ fontFamily: "'Tenor Sans', serif" }}>
                  India's #1 Platform to<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 animate-gradient">
                    Grow Your Wellness Empire
                  </span>
                </h1>

                <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-3 sm:mb-4 text-gray-800 leading-relaxed font-semibold">
                  🚀 Join 500+ Successful Partners Earning <span className="text-green-600 font-bold">₹5-15 Lakhs Monthly</span>
                </p>
                
                <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 md:mb-8 text-gray-700 leading-relaxed">
                  Whether you own a <strong className="text-green-600">luxury spa chain, beauty salon network, wellness center</strong>, or manage <strong className="text-green-600">multiple locations</strong> - OMBARO's aggregator platform helps you scale faster, earn more, and reach millions of customers across India.
                </p>

                {/* Premium Benefits with Gradient Background */}
                <div className="relative bg-gradient-to-br from-white via-green-50 to-emerald-50 border-2 border-green-300 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 mb-6 sm:mb-8 shadow-2xl shadow-green-500/20 overflow-hidden">
                  {/* Decorative Corner Element */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 opacity-10 rounded-bl-full"></div>
                  
                  <div className="relative z-10">
                    <h3 className="text-gray-900 font-bold text-base sm:text-lg mb-3 sm:mb-4 flex items-center">
                      <Gift className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 mr-2 animate-bounce" />
                      <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Why Top Businesses Choose OMBARO</span>
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-2 sm:gap-3">
                      <div className="flex items-center text-gray-800 bg-white/70 rounded-lg p-2">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mr-2 flex-shrink-0" />
                        <span className="text-xs sm:text-sm font-medium">🎯 50,000+ Active Customers</span>
                      </div>
                      <div className="flex items-center text-gray-800 bg-white/70 rounded-lg p-2">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mr-2 flex-shrink-0" />
                        <span className="text-xs sm:text-sm font-medium">💰 3X Revenue Growth Guaranteed</span>
                      </div>
                      <div className="flex items-center text-gray-800 bg-white/70 rounded-lg p-2">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mr-2 flex-shrink-0" />
                        <span className="text-xs sm:text-sm font-medium">⚡ Zero Setup Cost</span>
                      </div>
                      <div className="flex items-center text-gray-800 bg-white/70 rounded-lg p-2">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mr-2 flex-shrink-0" />
                        <span className="text-xs sm:text-sm font-medium">🔒 100% Payment Security</span>
                      </div>
                      <div className="flex items-center text-gray-800 bg-white/70 rounded-lg p-2">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mr-2 flex-shrink-0" />
                        <span className="text-xs sm:text-sm font-medium">📱 Advanced Tech Dashboard</span>
                      </div>
                      <div className="flex items-center text-gray-800 bg-white/70 rounded-lg p-2">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mr-2 flex-shrink-0" />
                        <span className="text-xs sm:text-sm font-medium">🌟 Premium Brand Association</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
                  <Link to="/app" className="w-full sm:w-auto group">
                    <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 hover:from-green-600 hover:via-emerald-600 hover:to-teal-600 text-white shadow-2xl shadow-green-500/50 text-sm sm:text-base md:text-lg px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 rounded-full transform hover:scale-110 transition-all duration-300 font-bold relative overflow-hidden">
                      <span className="relative z-10 flex items-center justify-center">
                        🚀 Start Earning Today - FREE
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </span>
                      {/* Animated shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                    </Button>
                  </Link>
                  <a href="tel:+919876543210" className="w-full sm:w-auto">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto border-3 border-green-600 text-green-700 bg-white hover:bg-green-600 hover:text-white text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 rounded-full font-bold shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                      <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                      📞 Call: +91 98765 43210
                    </Button>
                  </a>
                </div>

                <div className="flex flex-wrap gap-4 sm:gap-6 text-gray-700 text-xs sm:text-sm font-medium">
                  <div className="flex items-center space-x-1.5 sm:space-x-2">
                    <UserCheck className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                    <span>24hr Approval</span>
                  </div>
                  <div className="flex items-center space-x-1.5 sm:space-x-2">
                    <DollarSign className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                    <span>Daily Payouts</span>
                  </div>
                  <div className="flex items-center space-x-1.5 sm:space-x-2">
                    <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                    <span>100% Secure</span>
                  </div>
                </div>
              </div>

              {/* Right Content - Image Collage */}
              <div className="relative order-1 lg:order-2">
                <div className="grid grid-cols-12 gap-2 sm:gap-3 md:gap-4">
                  {/* Large Image Top Left */}
                  <div className="col-span-7 relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl sm:rounded-3xl transform rotate-2 opacity-20 group-hover:rotate-3 group-hover:scale-105 transition-all duration-500"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <img
                      src="/images/luxury_spa_treatment_ef5ecb59.jpg"
                      alt="Luxury Spa Treatment Room"
                      className="relative rounded-2xl sm:rounded-3xl shadow-2xl w-full h-40 sm:h-56 md:h-72 lg:h-96 object-cover border-2 border-green-500/30 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="text-sm sm:text-base md:text-lg font-bold">Premium Services</div>
                      <div className="text-xs sm:text-sm text-green-300">Luxury Experiences</div>
                    </div>
                  </div>

                  {/* Top Right Small Image */}
                  <div className="col-span-5 relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl sm:rounded-3xl transform -rotate-1 opacity-15 group-hover:rotate-1 group-hover:scale-105 transition-all duration-500"></div>
                    <img
                      src="/images/professional_beauty__6992f974.jpg"
                      alt="Beauty Facial Treatment"
                      className="rounded-2xl sm:rounded-3xl shadow-xl w-full h-32 sm:h-40 md:h-52 lg:h-64 object-cover border-2 border-green-500/20 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl sm:rounded-3xl"></div>
                  </div>

                  {/* Bottom Left Image */}
                  <div className="col-span-5 relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-green-400 rounded-2xl sm:rounded-3xl transform rotate-1 opacity-15 group-hover:-rotate-1 group-hover:scale-105 transition-all duration-500"></div>
                    <img
                      src="/images/spa_massage_therapy__22ac4be9.jpg"
                      alt="Professional Massage Therapy"
                      className="rounded-2xl sm:rounded-3xl shadow-xl w-full h-32 sm:h-40 md:h-52 lg:h-64 object-cover border-2 border-green-500/20 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl sm:rounded-3xl"></div>
                  </div>

                  {/* Bottom Right Image */}
                  <div className="col-span-7 relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl sm:rounded-3xl transform -rotate-2 opacity-20 group-hover:rotate-2 group-hover:scale-105 transition-all duration-500"></div>
                    <img
                      src="/images/elegant_spa_interior_b93a48aa.jpg"
                      alt="Elegant Spa Interior"
                      className="rounded-2xl sm:rounded-3xl shadow-xl w-full h-32 sm:h-40 md:h-52 lg:h-64 object-cover border-2 border-green-500/20 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl sm:rounded-3xl"></div>
                  </div>
                </div>

                {/* Animated Stats Badge */}
                <div className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl max-w-[150px] sm:max-w-xs z-20 border-2 sm:border-4 border-green-500 transform hover:scale-110 transition-transform duration-300">
                  <div className="relative">
                    <div className="absolute -top-1 sm:-top-2 -right-1 sm:-right-2 w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full animate-ping"></div>
                    <div className="text-2xl sm:text-4xl md:text-5xl font-bold mb-1 sm:mb-2 text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                      500+
                    </div>
                    <p className="text-xs sm:text-sm md:text-base font-semibold text-gray-900">Active Partners</p>
                    <p className="text-[10px] sm:text-xs mt-1 sm:mt-2 text-gray-600 flex items-center">
                      <TrendingUp className="w-2 h-2 sm:w-3 sm:h-3 mr-1 text-green-600" />
                      Growing Network
                    </p>
                  </div>
                </div>

                {/* Floating Trust Badge */}
                <div className="absolute -top-2 sm:-top-4 -left-2 sm:-left-4 bg-gradient-to-br from-green-500 to-green-600 rounded-xl sm:rounded-2xl p-2 sm:p-3 shadow-xl z-20 border border-white sm:border-2 transform hover:scale-110 transition-transform duration-300">
                  <div className="flex items-center space-x-1 sm:space-x-2">
                    <Shield className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                    <div className="text-[10px] sm:text-xs font-bold text-white">Verified<br/>Partner</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Exclusive Benefits Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-green-50 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6" style={{ fontFamily: "'Tenor Sans', serif" }}>
                Why Top Spas Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600">OMBARO</span>
              </h2>
              <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-600 mx-auto mb-4 sm:mb-6"></div>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-6 sm:mb-8">
                We connect you with customers looking for quality wellness services
              </p>

              {/* Collage-Style Image Grid */}
              <div className="max-w-6xl mx-auto mb-8 sm:mb-10 md:mb-12">
                <div className="grid grid-cols-12 gap-3 sm:gap-4">
                  {/* Large Featured Image - Left */}
                  <div className="col-span-12 md:col-span-7 relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-600 rounded-2xl sm:rounded-3xl transform rotate-1 opacity-20 group-hover:rotate-2 group-hover:scale-105 transition-all duration-500"></div>
                    <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl">
                      <img 
                        src="/images/premium_wellness_spa_05199f74.jpg" 
                        alt="Premium Spa Massage Services"
                        className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2">Premium Wellness Experiences</h3>
                        <p className="text-sm sm:text-base text-green-200">Professional spa services for ultimate relaxation</p>
                      </div>
                    </div>
                  </div>

                  {/* Right Column - 2 Stacked Images */}
                  <div className="col-span-12 md:col-span-5 space-y-3 sm:space-y-4">
                    {/* Top Right Image */}
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl transform -rotate-1 opacity-15 group-hover:rotate-1 group-hover:scale-105 transition-all duration-500"></div>
                      <div className="relative overflow-hidden rounded-2xl shadow-xl">
                        <img 
                          src="/images/luxury_spa_reception_05371daf.jpg" 
                          alt="Luxury Spa Treatment Room"
                          className="w-full h-[140px] sm:h-[190px] md:h-[240px] object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 text-white">
                          <p className="text-xs sm:text-sm font-semibold">Luxury Facilities</p>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Right Image */}
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-green-500 rounded-2xl transform rotate-1 opacity-15 group-hover:-rotate-1 group-hover:scale-105 transition-all duration-500"></div>
                      <div className="relative overflow-hidden rounded-2xl shadow-xl">
                        <img 
                          src="/images/beauty_treatment_sal_bed4837c.jpg" 
                          alt="Professional Beauty Services"
                          className="w-full h-[140px] sm:h-[190px] md:h-[240px] object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 text-white">
                          <p className="text-xs sm:text-sm font-semibold">Expert Treatments</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16">
              {/* High-Value Clients */}
              <div className="group relative bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-green-500/30 transition-all duration-500 border-2 border-green-200 hover:border-green-400 transform hover:-translate-y-2">
                <div className="absolute top-0 right-0 w-32 sm:w-40 h-32 sm:h-40 bg-green-100 rounded-bl-full opacity-50 group-hover:opacity-70 transition-opacity"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="relative h-40 sm:h-48 md:h-56 overflow-hidden">
                  <img 
                    src="/images/luxury_spa_treatment_ef5ecb59.jpg" 
                    alt="Premium VIP Clients"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent"></div>
                </div>

                <div className="relative z-10 p-6 sm:p-8 md:p-10 -mt-6 sm:-mt-8">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg shadow-green-500/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <Gem className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4" style={{ fontFamily: "'Tenor Sans', serif" }}>
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-600">Premium Clientele</span>
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4 sm:mb-6">
                    Access to <strong className="text-green-600">verified high-net-worth individuals</strong> seeking exclusive wellness experiences, <strong className="text-green-600">couples therapy</strong>, <strong className="text-green-600">luxury travel packages</strong>, and <strong className="text-green-600">personalized private companionship services</strong>
                  </p>
                  <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-700">
                    <div className="flex items-center space-x-2">
                      <Star className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 flex-shrink-0" />
                      <span>Corporate executives, celebrities & VIP clients</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Lock className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 flex-shrink-0" />
                      <span>Exclusive dating & companion wellness programs</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Eye className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 flex-shrink-0" />
                      <span>Hotel partnerships & travel vouchers included</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 flex-shrink-0" />
                      <span>100% discreet premium intimate wellness services</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Maximum Revenue */}
              <div className="group relative bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-green-500/30 transition-all duration-500 border-2 border-green-200 hover:border-green-400 transform hover:-translate-y-2">
                <div className="absolute top-0 right-0 w-32 sm:w-40 h-32 sm:h-40 bg-green-100 rounded-bl-full opacity-50 group-hover:opacity-70 transition-opacity"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="relative h-40 sm:h-48 md:h-56 overflow-hidden">
                  <img 
                    src="/images/spa_business_growth__be25d321.jpg" 
                    alt="Business Growth"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent"></div>
                </div>

                <div className="relative z-10 p-6 sm:p-8 md:p-10 -mt-6 sm:-mt-8">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg shadow-green-500/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <TrendingUp className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4" style={{ fontFamily: "'Tenor Sans', serif" }}>
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-600">Explosive Growth</span>
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4 sm:mb-6">
                    Our platform helps you <strong className="text-green-600">grow your business exponentially</strong> by connecting you with customers actively seeking <strong className="text-green-600">premium wellness services</strong> in your area. Reach thousands of potential clients daily.
                  </p>
                  <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-700 mb-4 sm:mb-6">
                    <div className="flex items-center space-x-2">
                      <Star className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 flex-shrink-0" />
                      <span>Verified customer bookings guaranteed</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 flex-shrink-0" />
                      <span>Average 3X revenue growth in 6 months</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <DollarSign className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 flex-shrink-0" />
                      <span>Premium pricing support & marketing tools</span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl p-3 sm:p-4 shadow-lg">
                    <div className="text-2xl sm:text-3xl font-bold text-white mb-1">Real Growth</div>
                    <div className="text-xs sm:text-sm text-green-50">Steady Customer Flow Daily</div>
                  </div>
                </div>
              </div>

              {/* Complete Freedom */}
              <div className="group relative bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-green-500/30 transition-all duration-500 border-2 border-green-200 hover:border-green-400 transform hover:-translate-y-2">
                <div className="absolute top-0 right-0 w-32 sm:w-40 h-32 sm:h-40 bg-green-100 rounded-bl-full opacity-50 group-hover:opacity-70 transition-opacity"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="relative h-40 sm:h-48 md:h-56 overflow-hidden">
                  <img 
                    src="/images/professional_beauty__6992f974.jpg" 
                    alt="Business Freedom"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent"></div>
                </div>

                <div className="relative z-10 p-6 sm:p-8 md:p-10 -mt-6 sm:-mt-8">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg shadow-green-500/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <Briefcase className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4" style={{ fontFamily: "'Tenor Sans', serif" }}>
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-600">Your Business, Your Rules</span>
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4 sm:mb-6">
                    <strong className="text-green-600">Complete control</strong> over your services, pricing, and special offerings. We support <strong className="text-green-600">all types of wellness services</strong>
                  </p>
                  <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-700">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 flex-shrink-0" />
                      <span>Premium couples & intimate wellness packages</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 flex-shrink-0" />
                      <span>Travel vouchers & luxury hotel partnerships</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 flex-shrink-0" />
                      <span>VIP dating & companionship wellness services</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 flex-shrink-0" />
                      <span>All adult wellness services fully supported</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Premium Features Grid */}
            <div className="bg-gradient-to-br from-white to-green-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-xl border-2 border-green-200">
              <div className="text-center mb-8 sm:mb-10 md:mb-12">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-gray-900" style={{ fontFamily: "'Tenor Sans', serif" }}>
                  What Makes Us Different
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-700">Features that actually make you money</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border-2 border-green-200 shadow-lg hover:shadow-xl transition-shadow">
                  <Lock className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-green-600 mb-3 sm:mb-4" />
                  <h4 className="font-bold mb-2 text-gray-900 text-sm sm:text-base">VIP Client Network</h4>
                  <p className="text-xs sm:text-sm text-gray-600">Exclusive access to high-paying clients seeking premium experiences</p>
                </div>

                <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border-2 border-green-200 shadow-lg hover:shadow-xl transition-shadow">
                  <DollarSign className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-green-600 mb-3 sm:mb-4" />
                  <h4 className="font-bold mb-2 text-gray-900 text-sm sm:text-base">Premium Pricing Support</h4>
                  <p className="text-xs sm:text-sm text-gray-600">Charge 2-3X more for exclusive services with our platform backing</p>
                </div>

                <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border-2 border-green-200 shadow-lg hover:shadow-xl transition-shadow">
                  <Eye className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-green-600 mb-3 sm:mb-4" />
                  <h4 className="font-bold mb-2 text-gray-900 text-sm sm:text-base">Privacy & Discretion</h4>
                  <p className="text-xs sm:text-sm text-gray-600">Private booking system for VIP clients - complete confidentiality</p>
                </div>

                <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border-2 border-green-200 shadow-lg hover:shadow-xl transition-shadow">
                  <Wallet className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-green-600 mb-3 sm:mb-4" />
                  <h4 className="font-bold mb-2 text-gray-900 text-sm sm:text-base">Instant Payments</h4>
                  <p className="text-xs sm:text-sm text-gray-600">Get paid within hours directly to your account - no delays</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-green-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6" style={{ fontFamily: "'Tenor Sans', serif" }}>
                Real Partners, Real Success
              </h2>
              <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-600 mx-auto mb-4 sm:mb-6"></div>
              <p className="text-base sm:text-lg md:text-xl text-gray-700">These numbers speak louder than promises</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  stars: 5,
                  quote: "Started earning <strong className=\"text-green-600\">₹12L/month</strong> within 4 months. The VIP client network alone is worth it. My exclusive packages are always booked!",
                  name: "Priya Malhotra",
                  location: "Luxury Spa, South Delhi",
                  growth: "+340% Revenue",
                  period: "6 months"
                },
                {
                  stars: 5,
                  quote: "The platform understands premium business. My private consultation bookings increased <strong className=\"text-green-600\">5X</strong>. Clients appreciate the discretion.",
                  name: "Rajesh Khanna",
                  location: "Elite Wellness Center, Mumbai",
                  growth: "+500% Bookings",
                  period: "3 months"
                },
                {
                  stars: 5,
                  quote: "Finally a platform that supports <strong className=\"text-green-600\">all our services</strong>. VIP memberships are fully booked. Earning ₹8L+ consistently!",
                  name: "Sanya Kapoor",
                  location: "Premium Spa & Wellness, Bangalore",
                  growth: "+280% Growth",
                  period: "5 months"
                }
              ].map((testimonial, idx) => (
                <div key={idx} className="bg-white p-6 sm:p-8 shadow-xl border-2 border-green-200 hover:border-green-400 transition-colors hover:shadow-2xl rounded-3xl">
                  <div className="flex items-center mb-4 sm:mb-6">
                    {[...Array(testimonial.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-4 sm:mb-6 italic leading-relaxed" dangerouslySetInnerHTML={{ __html: testimonial.quote }} />
                  <div className="pt-4 sm:pt-6 border-t border-green-200">
                    <div className="font-bold text-gray-900 text-base sm:text-lg">{testimonial.name}</div>
                    <div className="text-xs sm:text-sm text-gray-600">{testimonial.location}</div>
                  </div>
                  <div className="mt-3 sm:mt-4 flex items-center justify-between">
                    <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full text-xs sm:text-sm font-bold">
                      {testimonial.growth}
                    </span>
                    <span className="text-xs text-gray-600">{testimonial.period}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Simple 3-Step Process */}
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-white via-green-50 to-green-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-900" style={{ fontFamily: "'Tenor Sans', serif" }}>
                Start Earning in 3 Simple Steps
              </h2>
              <div className="w-16 sm:w-20 md:w-24 h-1 bg-green-600 mx-auto mb-4 sm:mb-6"></div>
              <p className="text-base sm:text-lg md:text-xl text-gray-700">Launch your premium business in less than 24 hours</p>
            </div>

            <div className="space-y-8 sm:space-y-10 md:space-y-12">
              {[
                {
                  step: "1",
                  title: "Quick Registration",
                  description: "Fill basic details in 5 minutes. No paperwork, no hassle. Just simple online form."
                },
                {
                  step: "2",
                  title: "24hr Approval",
                  description: "Our team verifies and approves within 24 hours. Get instant access to dashboard & VIP client network."
                },
                {
                  step: "3",
                  title: "Start Earning!",
                  description: "List your services, set premium prices, and watch bookings roll in. Get paid daily!"
                }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6 md:space-x-8 bg-white p-4 sm:p-5 md:p-6 shadow-lg border-2 border-green-500/30 rounded-2xl sm:rounded-3xl">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-gradient-to-br from-green-400 to-green-600 text-white rounded-full flex items-center justify-center shadow-2xl">
                      <span className="text-2xl sm:text-3xl font-bold">{item.step}</span>
                    </div>
                  </div>
                  <div className="flex-1 pt-0 sm:pt-2">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 text-gray-900">{item.title}</h3>
                    <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12 sm:mt-14 md:mt-16">
              <Link to="/app">
                <Button size="lg" className="bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700 text-base sm:text-lg md:text-xl px-10 sm:px-12 md:px-16 py-5 sm:py-6 md:py-7 rounded-full shadow-2xl font-bold transform hover:scale-105 transition-all">
                  Start Your Journey Now
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                </Button>
              </Link>
              <p className="text-gray-600 text-xs sm:text-sm mt-3 sm:mt-4">No credit card required • Free to join</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6" style={{ fontFamily: "'Tenor Sans', serif" }}>
                Questions? We've Got Answers
              </h2>
              <div className="w-16 sm:w-20 md:w-24 h-1 bg-green-600 mx-auto"></div>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {[
                {
                  q: "What types of services can I offer on the platform?",
                  a: "ALL types of wellness and intimate therapy services are supported - from basic massages to exclusive VIP packages, couples therapy, private companionship sessions, hotel dating experiences, travel wellness vouchers, adult wellness services, and premium memberships. We believe in complete business freedom and support all legal wellness offerings."
                },
                {
                  q: "How much can I really earn?",
                  a: "Our top partners earn ₹8-15L monthly. Average partners make ₹5-7L. Your earnings depend on your services, pricing, and how you utilize our VIP client network. Premium services command premium prices."
                },
                {
                  q: "Is client privacy maintained for special services?",
                  a: "Absolutely. We have a dedicated VIP booking system with complete discretion. Private intimate sessions, couples therapy, dating wellness experiences, hotel partnerships, travel packages, companionship services, and all adult wellness offerings are handled with utmost confidentiality. No client information is ever shared. 100% anonymous bookings available."
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
                <div key={idx} className="bg-gradient-to-br from-green-50 to-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden border-2 border-green-100">
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-left flex items-center justify-between hover:bg-green-50/50 transition-colors"
                  >
                    <span className="font-bold text-gray-900 text-sm sm:text-base md:text-lg pr-4">{faq.q}</span>
                    {openFaq === idx ? (
                      <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 flex-shrink-0" />
                    )}
                  </button>
                  {openFaq === idx && (
                    <div className="px-4 sm:px-6 md:px-8 pb-4 sm:pb-5 md:pb-6 text-sm sm:text-base text-gray-700 leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA - Enhanced Attractive Green Design */}
        <section className="relative py-16 sm:py-20 md:py-24 lg:py-28 bg-gradient-to-br from-green-400 via-emerald-500 to-teal-600 text-white overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-64 sm:w-96 md:w-[500px] h-64 sm:h-96 md:h-[500px] bg-white/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-64 sm:w-96 md:w-[500px] h-64 sm:h-96 md:h-[500px] bg-white/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-yellow-300/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            {/* Decorative Grid Pattern */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>
          </div>

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Premium Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-md rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8 border-2 border-white/30">
              <Crown className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-300 animate-bounce" />
              <span className="text-sm sm:text-base font-bold tracking-wide">🌟 EXCLUSIVE PARTNERSHIP OPPORTUNITY</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight" style={{ fontFamily: "'Tenor Sans', serif" }}>
              Ready to Grow Your<br className="hidden sm:block" />
              <span className="text-yellow-300 drop-shadow-2xl">Business Empire?</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-8 sm:mb-10 text-white font-semibold drop-shadow-lg">
              Join OMBARO's trusted wellness platform today
            </p>

            {/* Enhanced Benefits Card */}
            <div className="bg-white/20 backdrop-blur-xl border-2 border-white/40 rounded-3xl sm:rounded-[2rem] p-6 sm:p-8 md:p-10 mb-10 sm:mb-12 max-w-3xl mx-auto shadow-2xl">
              <div className="flex items-center justify-center mb-6 sm:mb-8">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/30 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                  <Gift className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">Partnership Benefits</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 text-left">
                <div className="flex items-start space-x-3 bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-400/30 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-base sm:text-lg font-bold mb-1">Quick Onboarding</div>
                    <div className="text-xs sm:text-sm text-white/90">Get started in 24 hours</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3 bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-400/30 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-base sm:text-lg font-bold mb-1">50,000+ Customers</div>
                    <div className="text-xs sm:text-sm text-white/90">Ready to book your services</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3 bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-400/30 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-base sm:text-lg font-bold mb-1">Instant Payments</div>
                    <div className="text-xs sm:text-sm text-white/90">Secure & guaranteed payouts</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3 bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-400/30 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-base sm:text-lg font-bold mb-1">24/7 Support</div>
                    <div className="text-xs sm:text-sm text-white/90">Dedicated partner success team</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-8 sm:mb-10">
              <Link to="/app" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto bg-white text-green-600 hover:bg-gray-100 text-base sm:text-lg md:text-xl px-10 sm:px-12 md:px-16 py-5 sm:py-6 md:py-7 rounded-full shadow-2xl font-bold transform hover:scale-105 transition-all">
                  Claim Your Spot Now
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 ml-2" />
                </Button>
              </Link>
              <a href="tel:+919876543210" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 sm:border-3 border-white text-white hover:bg-white/10 text-base sm:text-lg md:text-xl px-8 sm:px-10 md:px-12 py-5 sm:py-6 md:py-7 rounded-full backdrop-blur-sm">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
                  Call: +91 98765 43210
                </Button>
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 text-xs sm:text-sm font-medium">
              <div className="flex items-center space-x-1.5 sm:space-x-2">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>No Hidden Charges</span>
              </div>
              <div className="flex items-center space-x-1.5 sm:space-x-2">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>24hr Approval</span>
              </div>
              <div className="flex items-center space-x-1.5 sm:space-x-2">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>100% Privacy Guaranteed</span>
              </div>
            </div>

            <p className="text-white/80 text-xs sm:text-sm mt-6 sm:mt-8 italic">
              Join our growing network of wellness professionals
            </p>
          </div>
        </section>
      </main>

      <MarketingFooter />
    </div>
  );
};