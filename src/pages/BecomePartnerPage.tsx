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
        {/* Premium Hero Section - Improved Responsive */}
        <section className="relative min-h-[500px] sm:min-h-[600px] md:min-h-[700px] lg:min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-green-50 via-white to-green-50 pt-20 sm:pt-24 md:pt-28">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-green-200 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-emerald-200 rounded-full blur-3xl animate-pulse"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-6 sm:py-8 md:py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
              {/* Left Content */}
              <div className="order-2 lg:order-1">
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500 to-green-600 rounded-full px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 mb-4 sm:mb-6 md:mb-8 shadow-lg">
                  <Crown className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white" />
                  <span className="text-white text-xs sm:text-sm font-bold tracking-wider uppercase">Elite Partner Program</span>
                </div>

                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight text-gray-900" style={{ fontFamily: "'Tenor Sans', serif" }}>
                  Join OMBARO's<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600">
                    Wellness Partner Network
                  </span>
                </h1>

                <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-6 md:mb-8 text-gray-700 leading-relaxed">
                  Grow your wellness business with OMBARO's trusted platform. Offer premium spa treatments, couples therapy packages, luxury travel wellness experiences, hotel partnerships, and exclusive private sessions.
                </p>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 mb-6 sm:mb-8 shadow-lg">
                  <h3 className="text-gray-900 font-bold text-base sm:text-lg mb-3 sm:mb-4 flex items-center">
                    <Gift className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mr-2" />
                    Premium Partnership Benefits
                  </h3>
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex items-center text-gray-700">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mr-2 sm:mr-3 flex-shrink-0" />
                      <span className="text-xs sm:text-sm md:text-base">Exclusive couples & private therapy packages</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mr-2 sm:mr-3 flex-shrink-0" />
                      <span className="text-xs sm:text-sm md:text-base">Travel wellness vouchers & hotel tie-ups</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mr-2 sm:mr-3 flex-shrink-0" />
                      <span className="text-xs sm:text-sm md:text-base">VIP dating & companionship wellness services</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mr-2 sm:mr-3 flex-shrink-0" />
                      <span className="text-xs sm:text-sm md:text-base">Complete discretion & privacy guaranteed</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
                  <Link to="/app" className="w-full sm:w-auto">
                    <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-2xl text-sm sm:text-base md:text-lg px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 rounded-full transform hover:scale-105 transition-all">
                      Claim Your Spot Now
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                    </Button>
                  </Link>
                  <a href="tel:+919876543210" className="w-full sm:w-auto">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-green-600 text-green-700 hover:bg-green-50 text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 rounded-full">
                      <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                      Talk to Expert
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
                      src="/images/spa_treatment_room_i_69fbabb0.jpg"
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
                      src="/images/beauty_salon_facial__65176adc.jpg"
                      alt="Beauty Facial Treatment"
                      className="rounded-2xl sm:rounded-3xl shadow-xl w-full h-32 sm:h-40 md:h-52 lg:h-64 object-cover border-2 border-green-500/20 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl sm:rounded-3xl"></div>
                  </div>

                  {/* Bottom Left Image */}
                  <div className="col-span-5 relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-green-400 rounded-2xl sm:rounded-3xl transform rotate-1 opacity-15 group-hover:-rotate-1 group-hover:scale-105 transition-all duration-500"></div>
                    <img
                      src="/images/luxury_spa_massage_t_690db67f.jpg"
                      alt="Professional Massage Therapy"
                      className="rounded-2xl sm:rounded-3xl shadow-xl w-full h-32 sm:h-40 md:h-52 lg:h-64 object-cover border-2 border-green-500/20 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl sm:rounded-3xl"></div>
                  </div>

                  {/* Bottom Right Image */}
                  <div className="col-span-7 relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl sm:rounded-3xl transform -rotate-2 opacity-20 group-hover:rotate-2 group-hover:scale-105 transition-all duration-500"></div>
                    <img
                      src="/images/spa_treatment_room_i_f52c1c96.jpg"
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
                        src="/images/luxury_spa_massage_t_3fdc8d75.jpg" 
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
                          src="/images/spa_treatment_room_i_69fbabb0.jpg" 
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
                          src="/images/beauty_salon_facial__65176adc.jpg" 
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
                    src="/images/spa_treatment_room_i_79626365.jpg" 
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
                    src="/images/luxury_spa_massage_t_48a88152.jpg" 
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
                    Our platform helps you grow your business by connecting you with customers actively looking for wellness services in your area
                  </p>
                  <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl p-3 sm:p-4 mb-3 sm:mb-4 shadow-lg">
                    <div className="text-2xl sm:text-3xl font-bold text-white mb-1">Real Growth</div>
                    <div className="text-xs sm:text-sm text-green-50">Steady Customer Flow</div>
                  </div>
                  <div className="text-[10px] sm:text-xs text-gray-600 italic">
                    *Results vary by location and services
                  </div>
                </div>
              </div>

              {/* Complete Freedom */}
              <div className="group relative bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-green-500/30 transition-all duration-500 border-2 border-green-200 hover:border-green-400 transform hover:-translate-y-2">
                <div className="absolute top-0 right-0 w-32 sm:w-40 h-32 sm:h-40 bg-green-100 rounded-bl-full opacity-50 group-hover:opacity-70 transition-opacity"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="relative h-40 sm:h-48 md:h-56 overflow-hidden">
                  <img 
                    src="/images/beauty_salon_facial__29de6e5b.jpg" 
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

        {/* Final CTA */}
        <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-green-500 via-green-600 to-green-700 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-white rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6" style={{ fontFamily: "'Tenor Sans', serif" }}>
              Ready to Grow Your Business?
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-white/95">
              Join OMBARO's trusted wellness platform today
            </p>

            <div className="bg-white/10 backdrop-blur-md border-2 border-white/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 mb-8 sm:mb-10 max-w-2xl mx-auto">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6">Partnership Benefits:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-left">
                <div className="flex items-start space-x-2 sm:space-x-3">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-300 flex-shrink-0 mt-0.5 sm:mt-1" />
                  <span className="text-sm sm:text-base">Simple onboarding process</span>
                </div>
                <div className="flex items-start space-x-2 sm:space-x-3">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-300 flex-shrink-0 mt-0.5 sm:mt-1" />
                  <span className="text-sm sm:text-base">Verified customer base</span>
                </div>
                <div className="flex items-start space-x-2 sm:space-x-3">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-300 flex-shrink-0 mt-0.5 sm:mt-1" />
                  <span className="text-sm sm:text-base">Secure payment system</span>
                </div>
                <div className="flex items-start space-x-2 sm:space-x-3">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-300 flex-shrink-0 mt-0.5 sm:mt-1" />
                  <span className="text-sm sm:text-base">Platform support</span>
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