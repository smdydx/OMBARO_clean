import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, CheckCircle, TrendingUp, Users, Calendar, Wallet,
  BarChart3, Shield, Star, Phone, Mail, Award, Target, Zap,
  ChevronDown, ChevronUp, Sparkles, Crown
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
        {/* Hero Section with Large Background Image */}
        <section className="relative h-[600px] md:h-[700px] overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1600&q=90')",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
          </div>
          
          <div className="relative z-10 h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-2xl">
                <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-5 py-2.5 mb-6">
                  <Sparkles className="w-5 h-5 text-white" />
                  <span className="text-white text-sm font-semibold tracking-wide">INDIA'S #1 BEAUTY PLATFORM</span>
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>
                  Partner with<br />OMBARO
                </h1>

                <p className="text-xl md:text-2xl mb-8 text-white/95 leading-relaxed" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>
                  Join 500+ successful businesses growing with India's leading beauty and wellness platform
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link to="/app">
                    <Button size="lg" className="w-full sm:w-auto bg-white text-gray-900 hover:bg-gray-100 shadow-2xl text-base md:text-lg px-8 py-6">
                      Start Your Journey
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                  <a href="tel:+911234567890">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-white text-white hover:bg-white/10 text-base md:text-lg px-8 py-6">
                      <Phone className="w-5 h-5 mr-2" />
                      Call Us Now
                    </Button>
                  </a>
                </div>

                <div className="flex items-center gap-6">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-white font-medium">No Setup Fees</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-white font-medium">24hr Approval</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section with Background */}
        <section className="py-16 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold mb-2" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>500+</div>
                <div className="text-white/80 font-medium">Partner Businesses</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>50K+</div>
                <div className="text-white/80 font-medium">Monthly Customers</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>40%</div>
                <div className="text-white/80 font-medium">Revenue Increase</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>4.8★</div>
                <div className="text-white/80 font-medium">Partner Rating</div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Partner - Image Grid Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>
                Why Top Businesses Choose OMBARO
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Join successful spa owners, salon professionals, and wellness experts who are growing their revenue
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Benefit 1 with Image */}
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="relative h-80">
                  <img 
                    src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=90"
                    alt="Revenue Growth"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <TrendingUp className="w-10 h-10 mb-3 text-green-400" />
                    <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>
                      Grow Your Revenue
                    </h3>
                    <p className="text-white/90">
                      Partners see 40% average increase in bookings within the first 3 months
                    </p>
                  </div>
                </div>
              </div>

              {/* Benefit 2 with Image */}
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="relative h-80">
                  <img 
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=90"
                    alt="Smart Management"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <Calendar className="w-10 h-10 mb-3 text-blue-400" />
                    <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>
                      Smart Management
                    </h3>
                    <p className="text-white/90">
                      Automated booking system that saves 15+ hours weekly on scheduling
                    </p>
                  </div>
                </div>
              </div>

              {/* Benefit 3 with Image */}
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="relative h-80">
                  <img 
                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=90"
                    alt="Instant Payments"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <Wallet className="w-10 h-10 mb-3 text-yellow-400" />
                    <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>
                      Instant Payments
                    </h3>
                    <p className="text-white/90">
                      Get paid within 24 hours directly to your bank account - secure & reliable
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Perfect For Section - Large Image Cards */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>
                Perfect For Every Beauty Business
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Spa & Massage */}
              <div className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="relative h-96">
                  <img 
                    src="https://images.pexels.com/photos/3997392/pexels-photo-3997392.jpeg?auto=compress&cs=tinysrgb&w=1200"
                    alt="Spa & Massage Centers"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4">
                      <Sparkles className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold mb-3" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>
                      Spa & Massage Centers
                    </h3>
                    <p className="text-white/90 text-lg mb-4">
                      Professional booking management for spas and wellness centers
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">Therapist Scheduling</span>
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">Service Packages</span>
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">Membership Plans</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Beauty Salons */}
              <div className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="relative h-96">
                  <img 
                    src="https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=1200"
                    alt="Beauty Salons"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4">
                      <Crown className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold mb-3" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>
                      Beauty Salons
                    </h3>
                    <p className="text-white/90 text-lg mb-4">
                      Complete salon management with stylist tracking and inventory
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">Stylist Management</span>
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">Product Sales</span>
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">Customer Loyalty</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bridal Makeup */}
              <div className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="relative h-96">
                  <img 
                    src="https://images.pexels.com/photos/1585325/pexels-photo-1585325.jpeg?auto=compress&cs=tinysrgb&w=1200"
                    alt="Bridal Makeup"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold mb-3" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>
                      Bridal Makeup Artists
                    </h3>
                    <p className="text-white/90 text-lg mb-4">
                      Showcase your portfolio and manage wedding bookings effortlessly
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">Portfolio Gallery</span>
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">Package Bookings</span>
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">Trial Sessions</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Wellness Centers */}
              <div className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="relative h-96">
                  <img 
                    src="https://images.pexels.com/photos/3822621/pexels-photo-3822621.jpeg?auto=compress&cs=tinysrgb&w=1200"
                    alt="Wellness Centers"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold mb-3" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>
                      Wellness Centers
                    </h3>
                    <p className="text-white/90 text-lg mb-4">
                      Holistic wellness programs, yoga classes, and therapy services
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">Class Scheduling</span>
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">Memberships</span>
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">Health Programs</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories - Photo Testimonials */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>
                Success Stories from Our Partners
              </h2>
              <p className="text-xl text-gray-600">
                Real businesses, real growth, real success
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="relative h-64">
                  <img 
                    src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=90"
                    alt="Spa Owner"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full font-bold">
                    +45% Revenue
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">
                    "OMBARO transformed our spa business completely. Revenue doubled in 6 months!"
                  </p>
                  <div className="flex items-center">
                    <div>
                      <div className="font-bold text-gray-900">Meera Kapoor</div>
                      <div className="text-sm text-gray-500">Serenity Spa, Mumbai</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="relative h-64">
                  <img 
                    src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=800&q=90"
                    alt="Salon Owner"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full font-bold">
                    +60% Bookings
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">
                    "Managing appointments was always a headache. OMBARO made everything so simple!"
                  </p>
                  <div className="flex items-center">
                    <div>
                      <div className="font-bold text-gray-900">Rajesh Sharma</div>
                      <div className="text-sm text-gray-500">Glamour Salon, Delhi</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="relative h-64">
                  <img 
                    src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&q=90"
                    alt="Makeup Artist"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full font-bold">
                    +80% Growth
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">
                    "As a freelance artist, OMBARO gave me access to hundreds of brides. Calendar fully booked!"
                  </p>
                  <div className="flex items-center">
                    <div>
                      <div className="font-bold text-gray-900">Priya Deshmukh</div>
                      <div className="text-sm text-gray-500">Bridal Makeup Artist, Pune</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works - Visual Timeline */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>
                Start in 4 Simple Steps
              </h2>
              <p className="text-xl text-gray-600">
                Get your business online in less than 48 hours
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl">
                    <span className="text-5xl font-bold text-white">1</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>Register</h3>
                <p className="text-gray-600">Fill simple form with your business details</p>
              </div>

              <div className="text-center group">
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl">
                    <span className="text-5xl font-bold text-white">2</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>Get Verified</h3>
                <p className="text-gray-600">We verify your documents within 24-48 hours</p>
              </div>

              <div className="text-center group">
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl">
                    <span className="text-5xl font-bold text-white">3</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>Setup Profile</h3>
                <p className="text-gray-600">Add photos, services, pricing & availability</p>
              </div>

              <div className="text-center group">
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl">
                    <span className="text-5xl font-bold text-white">4</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>Go Live!</h3>
                <p className="text-gray-600">Start receiving bookings immediately</p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link to="/app">
                <Button size="lg" className="text-lg px-10 py-6 shadow-xl">
                  Start Your Free Registration
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Platform Features - Icon Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>
                Everything You Need to Succeed
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl border-2 border-blue-100 hover:border-blue-500 transition-all duration-300 hover:shadow-lg">
                <div className="w-14 h-14 bg-blue-500 rounded-xl flex items-center justify-center mb-4">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2">Smart Booking</h3>
                <p className="text-gray-600 text-sm">Automated appointment management</p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-2xl border-2 border-green-100 hover:border-green-500 transition-all duration-300 hover:shadow-lg">
                <div className="w-14 h-14 bg-green-500 rounded-xl flex items-center justify-center mb-4">
                  <Wallet className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2">Instant Payouts</h3>
                <p className="text-gray-600 text-sm">Get paid within 24 hours</p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-2xl border-2 border-purple-100 hover:border-purple-500 transition-all duration-300 hover:shadow-lg">
                <div className="w-14 h-14 bg-purple-500 rounded-xl flex items-center justify-center mb-4">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2">Analytics</h3>
                <p className="text-gray-600 text-sm">Track revenue & performance</p>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-white p-6 rounded-2xl border-2 border-yellow-100 hover:border-yellow-500 transition-all duration-300 hover:shadow-lg">
                <div className="w-14 h-14 bg-yellow-500 rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2">CRM Tools</h3>
                <p className="text-gray-600 text-sm">Build customer relationships</p>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-white p-6 rounded-2xl border-2 border-red-100 hover:border-red-500 transition-all duration-300 hover:shadow-lg">
                <div className="w-14 h-14 bg-red-500 rounded-xl flex items-center justify-center mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2">Trust & Safety</h3>
                <p className="text-gray-600 text-sm">Verified reviews & secure payments</p>
              </div>

              <div className="bg-gradient-to-br from-indigo-50 to-white p-6 rounded-2xl border-2 border-indigo-100 hover:border-indigo-500 transition-all duration-300 hover:shadow-lg">
                <div className="w-14 h-14 bg-indigo-500 rounded-xl flex items-center justify-center mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2">Marketing</h3>
                <p className="text-gray-600 text-sm">Promotional campaigns & visibility</p>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-white p-6 rounded-2xl border-2 border-pink-100 hover:border-pink-500 transition-all duration-300 hover:shadow-lg">
                <div className="w-14 h-14 bg-pink-500 rounded-xl flex items-center justify-center mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2">24/7 Support</h3>
                <p className="text-gray-600 text-sm">Dedicated account manager</p>
              </div>

              <div className="bg-gradient-to-br from-teal-50 to-white p-6 rounded-2xl border-2 border-teal-100 hover:border-teal-500 transition-all duration-300 hover:shadow-lg">
                <div className="w-14 h-14 bg-teal-500 rounded-xl flex items-center justify-center mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2">Multi-Location</h3>
                <p className="text-gray-600 text-sm">Manage multiple branches</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>
                Frequently Asked Questions
              </h2>
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
                <div key={idx} className="bg-white rounded-xl shadow-md overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-gray-900 text-lg">{faq.q}</span>
                    {openFaq === idx ? (
                      <ChevronUp className="w-5 h-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    )}
                  </button>
                  {openFaq === idx && (
                    <div className="px-6 pb-5 text-gray-600">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section with Background Image */}
        <section className="relative py-24 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=1600&q=90')",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 to-blue-800/95" />
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>
              Ready to Grow Your Business?
            </h2>
            <p className="text-xl md:text-2xl mb-10 text-white/90">
              Join 500+ successful beauty businesses on OMBARO today
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Link to="/app">
                <Button size="lg" className="w-full sm:w-auto bg-white text-gray-900 hover:bg-gray-100 text-lg px-10 py-6 shadow-2xl">
                  Register Now - It's Free
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <a href="mailto:partners@ombaro.com">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-white text-white hover:bg-white/10 text-lg px-10 py-6">
                  <Mail className="w-5 h-5 mr-2" />
                  Email Us
                </Button>
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-sm">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>No Setup Fees</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>24hr Approval</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Instant Payouts</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
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
