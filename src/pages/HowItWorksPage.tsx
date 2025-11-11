import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar, CreditCard, Star, Smartphone, MapPin, CheckCircle, TrendingUp, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { MarketingHeader } from '../components/marketing/MarketingHeader';
import { MarketingFooter } from '../components/marketing/MarketingFooter';

export const HowItWorksPage: React.FC = () => {
  const customerSteps = [
    {
      icon: Search,
      title: 'Browse & Discover',
      description: 'Search for salons, spas, and wellness centers near you. Filter by service type, ratings, and price.',
    },
    {
      icon: Calendar,
      title: 'Book Appointment',
      description: 'Select your preferred service, date, and time. Choose from available slots that fit your schedule.',
    },
    {
      icon: CreditCard,
      title: 'Secure Payment',
      description: 'Pay securely using multiple payment options. Get instant booking confirmation.',
    },
    {
      icon: Star,
      title: 'Enjoy Service',
      description: 'Relax and enjoy your service. Rate your experience and help others make informed choices.',
    },
  ];

  const vendorSteps = [
    {
      icon: Smartphone,
      title: 'Register Your Business',
      description: 'Sign up and create your business profile with details about your services and specialties.',
    },
    {
      icon: MapPin,
      title: 'Get Verified',
      description: 'Complete the verification process. Our team ensures all partners meet quality standards.',
    },
    {
      icon: Calendar,
      title: 'Manage Bookings',
      description: 'Receive and manage bookings through our easy-to-use dashboard. Set your availability.',
    },
    {
      icon: TrendingUp,
      title: 'Grow Your Business',
      description: 'Reach thousands of customers. Track performance with detailed analytics and insights.',
    },
  ];

  const features = [
    {
      icon: CheckCircle,
      title: 'Real-Time Availability',
      description: 'See live availability and book instantly',
    },
    {
      icon: CheckCircle,
      title: 'Secure Payments',
      description: 'Multiple payment options with secure processing',
    },
    {
      icon: CheckCircle,
      title: 'Easy Rescheduling',
      description: 'Modify or cancel bookings hassle-free',
    },
    {
      icon: CheckCircle,
      title: 'Rating System',
      description: 'Transparent reviews and ratings from real customers',
    },
    {
      icon: CheckCircle,
      title: 'Customer Support',
      description: '24/7 support for any queries or issues',
    },
    {
      icon: CheckCircle,
      title: 'Loyalty Rewards',
      description: 'Earn points and get discounts on future bookings',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <MarketingHeader />

      <main className="pt-16">
        <section className="relative bg-gradient-to-br from-green-50 via-white to-green-50/30 py-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-800 mb-6 leading-tight">
              How It <span className="font-normal text-green-600 whitespace-nowrap">Works</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Simple, fast, and convenient. Book your beauty and wellness services in just a few steps.
            </p>
          </div>

          {/* Split Background with Rounded Edges */}
          <div className="absolute inset-0 -z-10 flex">
            <div className="w-4/5 bg-white"></div>
            <div className="w-1/5 bg-gradient-to-br from-green-100 to-green-200 rounded-l-[100px]"></div>
          </div>

          {/* Decorative Circle */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -z-5">
            <div className="w-48 h-96 bg-gradient-to-r from-green-200 to-green-200 rounded-r-full opacity-40"></div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                For Customers
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                Book your perfect beauty experience in 4 simple steps
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {customerSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="relative">
                    <div className="text-center">
                      <div className="relative inline-flex items-center justify-center mb-6">
                        <div className="w-20 h-20 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-full flex items-center justify-center shadow-lg">
                          <Icon className="w-10 h-10 text-white" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md border-2 border-primary-200">
                          <span className="text-sm font-bold text-primary-600">{index + 1}</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                        {step.title}
                      </h3>
                      <p className="text-neutral-600">{step.description}</p>
                    </div>
                    {index < customerSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-primary-200 to-transparent -ml-4" />
                    )}
                  </div>
                );
              })}
            </div>

            <div className="text-center mt-12">
              <Link to="/app">
                <Button size="lg">
                  Start Booking Now
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                For Business Partners
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                Join our network and grow your business with OMBARO
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {vendorSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="relative">
                    <div className="bg-white rounded-2xl p-6 shadow-soft h-full">
                      <div className="relative inline-flex items-center justify-center mb-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-xl flex items-center justify-center">
                          <Icon className="w-8 h-8 text-primary-600" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-7 h-7 bg-primary-600 rounded-full flex items-center justify-center shadow-md">
                          <span className="text-sm font-bold text-white">{index + 1}</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                        {step.title}
                      </h3>
                      <p className="text-neutral-600">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="text-center mt-12">
              <Link to="/app">
                <Button size="lg" variant="outline">
                  Become a Partner
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                Key Features
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                Everything you need for a seamless booking experience
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-neutral-900 mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-neutral-600">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden py-20 bg-gradient-to-b from-green-50 via-green-50 to-white rounded-tl-[50px] rounded-tr-[50px]">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="animate-pulse">
                <svg className="w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
                  <path fill="currentColor" fillOpacity="0.3" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,106.7C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" className="text-green-400"></path>
                </svg>
              </div>
            </div>
          </div>
          
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                  Download Our Mobile App
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Get the full OMBARO experience on your mobile device. Book services on the go,
                  track your appointments, and enjoy exclusive app-only offers.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-gradient-to-r from-green-500 to-green-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-xl transition-all duration-300 shadow-lg">
                    Download for iOS
                  </button>
                  <button className="bg-gradient-to-r from-green-500 to-green-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-xl transition-all duration-300 shadow-lg">
                    Download for Android
                  </button>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-64 h-64 bg-white/30 rounded-3xl backdrop-blur-sm flex items-center justify-center shadow-lg">
                    <Smartphone className="w-32 h-32 text-green-600/50" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-neutral-600 mb-8">
              Join thousands of satisfied customers and experience the future of beauty booking
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/app">
                <Button size="lg">
                  Book Your First Service
                </Button>
              </Link>
              <Link to="/app">
                <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center">
                  Get Started Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <MarketingFooter />
    </div>
  );
};