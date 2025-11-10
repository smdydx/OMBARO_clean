import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Star, Shield, Award, Users, TrendingUp, CheckCircle, Sparkles, ArrowRight, X } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { MarketingHeader } from '../components/marketing/MarketingHeader';
import { MarketingFooter } from '../components/marketing/MarketingFooter';
import { HeroSlider } from '../components/common/HeroSlider';

// Placeholder for categories, as it's not provided in the original code but used in the changes.
// Assuming this is meant to be a section similar to 'services' or 'features' but specifically for homepage cards.
// For the purpose of this edit, I will define a placeholder `categories` array.
// If this `categories` array is defined elsewhere or should be derived from existing data,
// that part of the original code would need to be present.
const categories = [
  {
    title: 'Luxury Spa',
    description: 'Indulge in ultimate relaxation and rejuvenation with our premium spa treatments.',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1200&q=90',
    path: '/spa-massage',
  },
  {
    title: 'Bridal Beauty',
    description: 'Look your best on your special day with our expert bridal makeup and styling services.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=90',
    path: '/bridal-makeup',
  },
  {
    title: 'Hair & Styling',
    description: 'Transform your look with our professional hair salon services, from cuts to color and more.',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=1200&q=90',
    path: '/beauty-salon',
  },
];


export const HomePage: React.FC = () => {
  const [showTermsBanner, setShowTermsBanner] = useState(true);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    // Auto-close after 5 seconds
    const timer = setTimeout(() => {
      handleCloseBanner();
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleCloseBanner = () => {
    setIsClosing(true);
    setTimeout(() => {
      setShowTermsBanner(false);
    }, 800); // Animation duration
  };
  const features = [
    {
      icon: MapPin,
      title: 'Find Nearby Services',
      description: 'Discover premium salons, spas, and wellness centers in your area with our smart location-based search.',
    },
    {
      icon: Clock,
      title: 'Easy Booking',
      description: 'Book appointments in seconds with our intuitive booking system. No phone calls needed.',
    },
    {
      icon: Star,
      title: 'Verified Professionals',
      description: 'All our partner professionals are verified, certified, and highly rated by customers.',
    },
    {
      icon: Shield,
      title: 'Secure Payments',
      description: 'Safe and secure payment options with multiple payment methods for your convenience.',
    },
  ];

  const services = [
    {
      title: 'Spa & Massage Therapy',
      description: 'Relaxing spa treatments, deep tissue massage, aromatherapy, and rejuvenation packages',
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1200&q=90',
      IconComponent: Sparkles,
      link: '/spa-massage'
    },
    {
      title: 'Bridal Makeup & Styling',
      description: 'Complete bridal makeup, hair styling, pre-wedding packages, and special occasion looks',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=90',
      IconComponent: Star,
      link: '/bridal-makeup'
    },
    {
      title: 'Hair Salon Services',
      description: 'Professional haircuts, styling, coloring, keratin treatments, and hair spa',
      image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=1200&q=90',
      IconComponent: Users,
      link: '/beauty-salon'
    },
    {
      title: 'Skincare & Facials',
      description: 'Advanced facial treatments, skin analysis, anti-aging solutions, and beauty routines',
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1200&q=90',
      IconComponent: Sparkles,
      link: '/beauty-salon'
    },
    {
      title: 'Nail Art & Manicure',
      description: 'Professional manicure, pedicure, nail extensions, and creative nail art designs',
      image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=1200&q=90',
      IconComponent: Star,
      link: '/beauty-salon'
    },
    {
      title: 'Makeup & Cosmetics',
      description: 'Party makeup, professional makeup services, and personalized beauty consultations',
      image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=1200&q=90',
      IconComponent: Award,
      link: '/beauty-salon'
    },
    {
      title: 'Body Treatments',
      description: 'Body scrubs, wraps, waxing services, and complete body care solutions',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1200&q=90',
      IconComponent: TrendingUp,
      link: '/spa-massage'
    },
    {
      title: 'Wellness Programs',
      description: 'Holistic wellness, yoga, meditation, and lifestyle improvement programs',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&q=90',
      IconComponent: CheckCircle,
      link: '/spa-massage'
    },
  ];

  const stats = [
    { number: '50,000+', label: 'Happy Customers' },
    { number: '500+', label: 'Partner Vendors' },
    { number: '1,000+', label: 'Services Available' },
    { number: '25+', label: 'Cities Covered' },
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Regular Customer',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=90',
      rating: 5,
      comment: 'OMBARO has made booking spa appointments so easy! The therapists are professional and the service is always top-notch.',
    },
    {
      name: 'Rahul Verma',
      role: 'Business Professional',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=90',
      rating: 5,
      comment: 'As a busy professional, I love how convenient it is to book wellness services on the go. Highly recommended!',
    },
    {
      name: 'Anjali Reddy',
      role: 'Wellness Enthusiast',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=90',
      rating: 5,
      comment: 'The quality of service providers on OMBARO is exceptional. I have found my go-to spa and salon through this platform.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <MarketingHeader />

      {/* Animated Terms & Conditions Banner */}
      <div
        className={`transition-all duration-700 ease-in-out ${
          showTermsBanner ? 'mt-16 opacity-100 max-h-20 sm:max-h-24' : 'mt-16 opacity-0 max-h-0 overflow-hidden'
        }`}
      >
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 border-b-2 sm:border-b-4 border-primary-800">
          <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2 sm:py-4">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center space-x-2 text-white flex-1">
                <Shield className="w-4 h-4 sm:w-6 sm:h-6 animate-pulse flex-shrink-0" />
                <p className="text-xs sm:text-sm md:text-base font-semibold">
                  Please read our{' '}
                  <Link
                    to="/terms"
                    className="underline font-bold hover:text-primary-100 transition-colors"
                    onClick={handleCloseBanner}
                  >
                    Terms & Conditions
                  </Link>
                  {' '}before booking
                </p>
                <Shield className="w-4 h-4 sm:w-6 sm:h-6 animate-pulse flex-shrink-0 hidden sm:block" />
              </div>
              <button
                onClick={handleCloseBanner}
                className="p-1.5 sm:p-2 hover:bg-white/20 rounded-lg transition-colors flex-shrink-0"
                aria-label="Close banner"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <main>
        <HeroSlider />

        <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-white via-primary-50/30 to-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1920&q=80')] bg-cover bg-center opacity-5" />
          <div className="absolute top-0 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-primary-200/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-0 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-accent-200/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />

          <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="group relative animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-100/50 to-accent-100/50 rounded-2xl sm:rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative bg-white rounded-xl sm:rounded-2xl md:rounded-3xl p-3 sm:p-4 md:p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 sm:hover:-translate-y-4 hover:scale-105 border border-primary-100 hover:border-primary-400 text-center overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-accent-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative z-10">
                      <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-display font-bold bg-gradient-to-br from-primary-600 via-accent-500 to-primary-700 bg-clip-text text-transparent mb-1 sm:mb-2 md:mb-3 group-hover:scale-110 transition-transform duration-500 leading-tight">
                        {stat.number}
                      </div>
                      <div className="text-xs sm:text-sm md:text-base text-gray-900 font-semibold tracking-wide leading-tight">{stat.label}</div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-primary-400 via-accent-400 to-primary-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-br from-neutral-50 via-white to-primary-50/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&q=80')] bg-cover bg-center opacity-5" />
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary-200/30 to-accent-200/30 rounded-full blur-3xl animate-float" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-accent-200/30 to-primary-200/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in-up">
              <div className="inline-flex items-center space-x-2 bg-primary-100 rounded-full px-6 py-3 mb-6 shadow-soft">
                <span className="text-primary-700 font-bold text-sm tracking-wider uppercase">Why Choose Us</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold bg-gradient-to-r from-primary-600 via-accent-500 to-primary-700 bg-clip-text text-transparent mb-6">
                Why Choose OMBARO?
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
                We make beauty and wellness services accessible, convenient, and reliable with cutting-edge technology.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="group relative animate-fade-in-up cursor-pointer"
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-200/40 to-accent-200/40 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110" />
                    <div className="relative bg-white rounded-3xl p-8 shadow-soft hover:shadow-strong transition-all duration-700 hover:-translate-y-4 border border-primary-100/30 hover:border-primary-300/70 overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-100/50 to-accent-100/50 rounded-full -translate-y-16 translate-x-16 opacity-50 group-hover:opacity-100 transition-opacity duration-700" />

                      <div className="relative mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-700">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-primary-700 transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-neutral-600 leading-relaxed">{feature.description}</p>

                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-accent-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-neutral-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-primary-100 to-secondary-100 rounded-full px-6 py-2 mb-4">
                <Sparkles className="w-4 h-4 text-primary-600" />
                <span className="text-sm font-semibold text-primary-700">Premium Services</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 bg-clip-text text-transparent mb-4">
                Our Services
              </h2>
              <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
                Explore our wide range of beauty and wellness services
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <Link
                  key={index}
                  to={service.link}
                  className="group cursor-pointer"
                >
                  <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                    {/* Image Container */}
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                      {/* Floating Icon */}
                      <div className="absolute top-4 right-4 w-14 h-14 bg-white rounded-2xl shadow-xl flex items-center justify-center transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300">
                        <service.IconComponent className="w-7 h-7 text-primary-600" />
                      </div>

                      {/* Title Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        <h3 className="text-xl font-bold text-white mb-1 transform group-hover:translate-x-1 transition-transform duration-300">
                          {service.title}
                        </h3>
                        <div className="w-12 h-1 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full transform origin-left group-hover:scale-x-150 transition-transform duration-300" />
                      </div>
                    </div>

                    {/* Content Container */}
                    <div className="p-5">
                      <p className="text-neutral-600 text-sm leading-relaxed line-clamp-2 group-hover:text-neutral-700 transition-colors">
                        {service.description}
                      </p>

                      {/* Action Button */}
                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-sm font-semibold text-primary-600 group-hover:text-primary-700 transition-colors">
                          Explore Service
                        </span>
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center transform group-hover:translate-x-1 transition-transform">
                          <ArrowRight className="w-4 h-4 text-primary-600" />
                        </div>
                      </div>
                    </div>

                    {/* Decorative gradient border on hover */}
                    <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-primary-200 transition-colors duration-300 pointer-events-none" />
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-16">
              <Link to="/services">
                <Button size="lg" className="shadow-xl hover:shadow-2xl transition-shadow">
                  View All Services
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary-100/50 to-secondary-100/50 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-accent-100/50 to-primary-100/50 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-100 to-secondary-100 rounded-full px-6 py-2 mb-4">
                <Sparkles className="w-5 h-5 text-primary-600" />
                <span className="text-primary-700 text-sm font-semibold">Join Our Network</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 bg-clip-text text-transparent mb-4">
                Are You a Beauty Professional?
              </h2>
              <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
                Join our network of verified professionals and grow your business
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {[
                {
                  icon: TrendingUp,
                  title: 'Increase Revenue',
                  description: 'Get more bookings and increase your monthly revenue by 40%'
                },
                {
                  icon: Clock,
                  title: 'Smart Scheduling',
                  description: 'Manage your schedule efficiently with automated booking system'
                },
                {
                  icon: Star,
                  title: 'Build Reputation',
                  description: 'Build your professional reputation with verified customer reviews'
                },
                {
                  icon: Users,
                  title: 'Business Analytics',
                  description: 'Access to business analytics and insights to grow smarter'
                },
              ].map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={index}
                    className="group bg-white rounded-3xl p-8 shadow-soft hover:shadow-strong transition-all duration-300 hover:-translate-y-2 border border-neutral-100"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-neutral-900 mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-neutral-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="relative bg-white rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden shadow-xl md:shadow-2xl border border-primary-100 md:border-2">
              <div className="absolute inset-0 bg-white" />
              <div className="relative z-10 grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 items-center p-4 sm:p-6 md:p-8 lg:p-12">
                <div className="text-neutral-900">
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-2 sm:mb-3 md:mb-4 lg:mb-6 bg-gradient-to-r from-primary-600 via-accent-500 to-primary-700 bg-clip-text text-transparent leading-tight">
                    Ready to Transform Your Business?
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-neutral-700 mb-3 sm:mb-4 md:mb-6 lg:mb-8 leading-relaxed">
                    Join thousands of successful beauty professionals who have already grown their business with OMBARO. Start your journey today.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4">
                    <Link to="/app" className="w-full sm:w-auto">
                      <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-primary-600 to-accent-600 text-white hover:from-primary-700 hover:to-accent-700 shadow-lg md:shadow-xl hover:shadow-xl md:hover:shadow-2xl transition-all transform hover:scale-105 text-xs sm:text-sm md:text-base px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4">
                        Become a Partner
                        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 ml-1 sm:ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="relative mt-4 md:mt-0">
                  <img
                    src="https://images.unsplash.com/photo-1522337360788-8b13dee7045427?w=1200&q=90"
                    alt="Beauty professional at work"
                    className="rounded-xl md:rounded-2xl shadow-lg md:shadow-2xl transform hover:scale-105 transition-transform duration-300 w-full"
                  />
                  <div className="absolute -bottom-3 sm:-bottom-4 md:-bottom-6 -left-3 sm:-left-4 md:-left-6 bg-white rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6 shadow-lg md:shadow-xl">
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent mb-0.5 sm:mb-1">
                      500+
                    </div>
                    <div className="text-xs sm:text-sm text-neutral-600 font-semibold">Partner Vendors</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-br from-neutral-50 via-primary-50/20 to-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=1920&q=80')] bg-cover bg-center opacity-5" />
          <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-amber-200/30 to-orange-200/30 rounded-full blur-3xl animate-float" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in-up">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full px-6 py-3 mb-6 shadow-soft animate-bounce-subtle">
                <Star className="w-5 h-5 text-amber-600 fill-current" />
                <span className="text-amber-700 font-bold text-sm tracking-wider uppercase">Customer Love</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold bg-gradient-to-r from-amber-600 via-orange-500 to-amber-700 bg-clip-text text-transparent mb-6">
                What Our Customers Say
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
                Join thousands of satisfied customers who trust OMBARO for their beauty and wellness needs
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group relative animate-fade-in-up cursor-pointer"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-200/40 to-orange-200/40 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" />
                  <div className="relative bg-white rounded-3xl p-8 shadow-soft hover:shadow-strong transition-all duration-700 hover:-translate-y-4 border border-amber-100/50 hover:border-amber-300/70 overflow-hidden">
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-amber-100/60 to-orange-100/60 rounded-full group-hover:scale-150 transition-transform duration-1000" />

                    <div className="relative">
                      <div className="flex items-center space-x-1 mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-6 h-6 fill-amber-400 text-amber-400 group-hover:scale-125 transition-transform duration-300"
                            style={{ transitionDelay: `${i * 50}ms` }}
                          />
                        ))}
                      </div>

                      <div className="mb-8">
                        <div className="text-6xl text-amber-200 font-serif mb-2">"</div>
                        <p className="text-neutral-700 leading-relaxed text-lg italic relative z-10">
                          {testimonial.comment}
                        </p>
                      </div>

                      <div className="flex items-center space-x-4 pt-6 border-t border-amber-100">
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full blur-md opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="relative w-16 h-16 rounded-full object-cover border-3 border-white shadow-lg group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <div>
                          <p className="font-bold text-neutral-900 text-lg">{testimonial.name}</p>
                          <p className="text-sm text-neutral-600 font-medium">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="relative bg-gradient-to-br from-primary-50 via-accent-50 to-secondary-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 w-32 sm:w-64 h-32 sm:h-64 bg-gradient-to-br from-primary-200/30 to-accent-200/30 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-32 sm:w-64 h-32 sm:h-64 bg-gradient-to-tr from-secondary-200/30 to-primary-200/30 rounded-full blur-3xl" />
              <div className="relative z-10">
                <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-primary-600 mx-auto mb-3 sm:mb-4" />
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 mb-3 sm:mb-4">
                  Ready to Get Started?
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-neutral-600 mb-6 sm:mb-8 px-2 sm:px-0">
                  Join thousands of customers who have transformed their beauty routine with OMBARO
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <Link to="/app" className="w-full sm:w-auto">
                    <Button size="lg" className="w-full sm:w-auto shadow-lg hover:shadow-xl transition-shadow">
                      Sign Up Now
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                  <Link to="/contact" className="w-full sm:w-auto">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto">
                      Contact Us
                    </Button>
                  </Link>
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