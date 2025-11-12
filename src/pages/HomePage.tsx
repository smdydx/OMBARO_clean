import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Shield, X } from 'lucide-react';
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
      icon: Star, // Changed from MapPin to Star as per new design direction
      title: 'Find Nearby Services',
      description: 'Discover premium salons, spas, and wellness centers in your area with our smart location-based search.',
    },
    {
      icon: Star, // Changed from Clock to Star
      title: 'Easy Booking',
      description: 'Book appointments in seconds with our intuitive booking system. No phone calls needed.',
    },
    {
      icon: Star, // Changed from Star to Star
      title: 'Verified Professionals',
      description: 'All our partner professionals are verified, certified, and highly rated by customers.',
    },
    {
      icon: Star, // Changed from Shield to Star
      title: 'Secure Payments',
      description: 'Safe and secure payment options with multiple payment methods for your convenience.',
    },
  ];



  // Updated services array with unique images for each service
  const services = [
    {
      title: 'Relax & Enjoy a Unique Experience',
      subtitle: 'SPA TREATMENTS',
      description: 'Indulge in our premium spa treatments designed to rejuvenate your body and mind. Experience tranquility like never before.',
      image: '/images/spa_treatment_room_i_79626365.jpg',
      link: '/spa-massage',
      reverse: false
    },
    {
      title: 'Massage & Therapy',
      subtitle: 'HEALING TOUCH',
      description: 'Expert therapeutic massages that relieve stress, ease muscle tension, and promote overall wellness and relaxation.',
      image: '/images/luxury_spa_massage_t_3fdc8d75.jpg',
      link: '/spa-massage',
      reverse: true
    },
    {
      title: 'Relax at the Hot tub',
      subtitle: 'HOTTUB THERAPY',
      description: 'Immerse yourself in our luxurious hot tub facilities, perfect for unwinding and soothing tired muscles.',
      image: '/images/spa_treatment_room_i_f52c1c96.jpg',
      link: '/spa-massage',
      reverse: false
    },
    {
      title: 'Beauty & Wellness',
      subtitle: 'COMPLETE CARE',
      description: 'Comprehensive beauty and wellness services tailored to enhance your natural beauty and boost your confidence.',
      image: '/images/beauty_salon_facial__65176adc.jpg',
      link: '/beauty-salon',
      reverse: true
    }
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

      <main>
        {/* Animated Terms & Conditions Banner - Moved above hero section */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 border-b-2 sm:border-b-4 border-primary-800">
          <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2 sm:py-4">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center space-x-2 text-white flex-1">
                <Shield className="w-4 h-4 sm:w-6 sm:h-6 animate-pulse flex-shrink-0" />
                <p className="text-xs sm:text-sm md:text-base font-semibold">
                  Please read our{' '}
                  <Link
                    to="/terms"
                    className="underline font-bold hover:text-green-100 transition-colors"
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

        {/* Hero Section - Relax & Enjoy with Water Flow */}
        <section className="relative overflow-hidden bg-gradient-to-b from-primary-50 via-white to-white">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 md:py-16">
            <div className="grid lg:grid-cols-5 gap-6 sm:gap-8 md:gap-12 items-center">
              {/* Left Content */}
              <div className="lg:col-span-3 text-center lg:text-left relative z-10">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-light text-gray-800 mb-4 sm:mb-6 leading-tight">
                  RELAX
                  <br />
                  <span className="font-normal text-primary-600">& ENJOY</span>
                </h1>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                  Experience ultimate relaxation with our premium spa and wellness services. 
                  Book your perfect moment of tranquility today.
                </p>
                <Link to="/app">
                  <button className="bg-primary-500 hover:bg-primary-600 text-white px-6 md:px-8 py-2.5 md:py-3 rounded-full text-sm font-medium transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center">
                    Book Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </Link>
              </div>

              {/* Right Content - Image with Painted Frame */}
              <div className="lg:col-span-2 relative">
                <div className="relative p-4 bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-3xl shadow-2xl">
                  <div className="absolute inset-0 rounded-3xl border-8 border-white shadow-inner"></div>
                  <div className="absolute inset-2 rounded-2xl border-4 border-amber-100/50"></div>
                  
                  <div className="relative rounded-2xl overflow-hidden shadow-xl">
                    <img 
                      src="/images/beauty_salon_facial__338eb5d5.jpg"
                      alt="Spa Experience"
                      loading="eager"
                      decoding="async"
                      className="w-full h-[350px] md:h-[500px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent"></div>
                  </div>
                </div>

                <div className="absolute -bottom-4 md:-bottom-6 -left-4 md:-left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 md:p-6 shadow-xl max-w-[200px] md:max-w-xs">
                  <div className="flex items-center space-x-3 md:space-x-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-primary-100 rounded-full flex items-center justify-center">
                      <Star className="w-5 h-5 md:w-6 md:h-6 text-primary-600" />
                    </div>
                    <div>
                      <p className="text-xl md:text-2xl font-bold text-gray-800">50,000+</p>
                      <p className="text-xs md:text-sm text-gray-600">Happy Customers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Animated Water Flow Wave - Bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-32 md:h-40">
            <svg viewBox="0 0 1440 320" className="w-full h-full" preserveAspectRatio="none">
              <defs>
                <linearGradient id="waterGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#00FF87', stopOpacity: 0.9 }} />
                  <stop offset="50%" style={{ stopColor: '#016B3A', stopOpacity: 0.6 }} />
                  <stop offset="100%" style={{ stopColor: '#000000', stopOpacity: 0.8 }} />
                </linearGradient>
              </defs>
              <path fill="url(#waterGradient)" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,165.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                <animate attributeName="d" dur="8s" repeatCount="indefinite" values="
                  M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,165.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                  M0,128L48,144C96,160,192,192,288,186.7C384,181,480,139,576,128C672,117,768,139,864,154.7C960,171,1056,181,1152,176C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                  M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,165.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
              </path>
            </svg>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-24 md:h-32 opacity-60">
            <svg viewBox="0 0 1440 320" className="w-full h-full" preserveAspectRatio="none">
              <path fill="#016B3A" fillOpacity="0.5" d="M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,154.7C672,149,768,171,864,181.3C960,192,1056,192,1152,181.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                <animate attributeName="d" dur="6s" repeatCount="indefinite" values="
                  M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,154.7C672,149,768,171,864,181.3C960,192,1056,192,1152,181.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                  M0,192L48,181.3C96,171,192,149,288,154.7C384,160,480,192,576,197.3C672,203,768,181,864,170.7C960,160,1056,160,1152,170.7C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                  M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,154.7C672,149,768,171,864,181.3C960,192,1056,192,1152,181.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
              </path>
            </svg>
          </div>
        </section>

      {/* Services Sections - Alternating Layout */}
        <section className="relative py-12 md:py-20 overflow-hidden bg-gradient-to-b from-white via-primary-50 to-white mt-4 md:mt-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid lg:grid-cols-2 gap-12 items-center ${services[0].reverse ? 'lg:grid-flow-dense' : ''}`}>
              {/* Image with Painted Frame */}
              <div className={services[0].reverse ? 'lg:col-start-2' : ''}>
                <div className="relative p-4 bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-3xl shadow-2xl">
                  {/* Painted Frame Border */}
                  <div className="absolute inset-0 rounded-3xl border-8 border-white shadow-inner"></div>
                  <div className="absolute inset-2 rounded-2xl border-4 border-amber-100/50"></div>
                  
                  <img
                    src={services[0].image}
                    alt={services[0].title}
                    className="relative rounded-2xl shadow-xl w-full object-cover h-[400px]"
                  />
                </div>
              </div>

              {/* Content */}
              <div className={`${services[0].reverse ? 'lg:col-start-1 lg:row-start-1' : ''} text-center lg:text-left`}>
                <div className="text-sm font-semibold text-primary-600 tracking-wider mb-3">
                  {services[0].subtitle}
                </div>
                <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6 leading-tight">
                  {services[0].title}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
                  {services[0].description}
                </p>
                <Link to={services[0].link}>
                  <button className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 shadow-lg hover:shadow-xl">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Wave Divider - Only on last item */}
          {services.length === 1 && (
            <div className="absolute bottom-0 left-0 right-0">
              <svg viewBox="0 0 1200 120" className="w-full h-24" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="waveGreen1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{ stopColor: '#00FF87', stopOpacity: 0.3 }} />
                    <stop offset="50%" style={{ stopColor: '#016B3A', stopOpacity: 0.4 }} />
                    <stop offset="100%" style={{ stopColor: '#000000', stopOpacity: 0.5 }} />
                  </linearGradient>
                </defs>
                <path d="M0,0 Q300,60 600,30 T1200,0 L1200,120 L0,120 Z" fill="url(#waveGreen1)" />
              </svg>
            </div>
          )}
        </section>

        {services.slice(1).map((service, index) => (
          <section key={index} className="relative py-20 overflow-hidden bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${service.reverse ? 'lg:grid-flow-dense' : ''}`}>
                {/* Image with Painted Frame */}
                <div className={service.reverse ? 'lg:col-start-2' : ''}>
                  <div className="relative p-4 bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-3xl shadow-2xl">
                    {/* Painted Frame Border */}
                    <div className="absolute inset-0 rounded-3xl border-8 border-white shadow-inner"></div>
                    <div className="absolute inset-2 rounded-2xl border-4 border-amber-100/50"></div>
                    
                    <img
                      src={service.image}
                      alt={service.title}
                      className="relative rounded-2xl shadow-xl w-full object-cover h-[400px]"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={`${service.reverse ? 'lg:col-start-1 lg:row-start-1' : ''} text-center lg:text-left`}>
                  <div className="text-sm font-semibold text-primary-600 tracking-wider mb-3">
                    {service.subtitle}
                  </div>
                  <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6 leading-tight">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
                    {service.description}
                  </p>
                  <Link to={service.link}>
                    <button className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 shadow-lg hover:shadow-xl">
                      Learn More
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Wave Divider - Only on last item */}
            {index === services.length - 2 && ( // Adjusted index for slice
              <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1200 120" className="w-full h-24" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="waveGreen2" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" style={{ stopColor: '#00FF87', stopOpacity: 0.3 }} />
                      <stop offset="50%" style={{ stopColor: '#016B3A', stopOpacity: 0.4 }} />
                      <stop offset="100%" style={{ stopColor: '#000000', stopOpacity: 0.5 }} />
                    </linearGradient>
                  </defs>
                  <path d="M0,0 Q300,60 600,30 T1200,0 L1200,120 L0,120 Z" fill="url(#waveGreen2)" />
                </svg>
              </div>
            )}
          </section>
        ))}

        {/* All Services Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-4">
                Explore Our <span className="font-normal text-primary-600">Services</span>
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Discover a wide range of premium beauty and wellness services
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {categories.map((category, index) => (
                <Link key={index} to={category.path}>
                  <div className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer">
                    {/* Painted Frame Effect */}
                    <div className="absolute inset-0 p-3 bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-3xl">
                      <div className="absolute inset-0 rounded-3xl border-6 border-white shadow-inner"></div>
                      <div className="absolute inset-2 rounded-2xl border-3 border-amber-100/40"></div>
                    </div>
                    
                    <div className="relative h-80 m-3 rounded-2xl overflow-hidden">
                      <img
                        src={category.image}
                        alt={category.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                      <p className="text-sm text-gray-200 mb-4">{category.description}</p>
                      <button className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 inline-flex items-center">
                        Explore Services
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="relative py-20 bg-gradient-to-b from-primary-50 via-white to-white overflow-hidden">
          {/* Top Wave */}
          <div className="absolute top-0 left-0 right-0 h-24">
            <svg viewBox="0 0 1440 320" className="w-full h-full" preserveAspectRatio="none">
              <defs>
                <linearGradient id="waveGreenTop" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: '#00FF87', stopOpacity: 0.2 }} />
                  <stop offset="50%" style={{ stopColor: '#016B3A', stopOpacity: 0.3 }} />
                  <stop offset="100%" style={{ stopColor: '#000000', stopOpacity: 0.4 }} />
                </linearGradient>
              </defs>
              <path fill="url(#waveGreenTop)" fillOpacity="1" d="M0,64L48,85.3C96,107,192,149,288,154.7C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,176C1248,171,1344,149,1392,138.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
            </svg>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-4">
                Why Choose <span className="font-normal text-primary-600">OMBARO</span>
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Your trusted partner for premium beauty and wellness services across India
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mb-4 mx-auto">
                    <feature.icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Wave */}
          <div className="absolute bottom-0 left-0 right-0 h-24">
            <svg viewBox="0 0 1440 320" className="w-full h-full" preserveAspectRatio="none">
              <defs>
                <linearGradient id="waveGreenBottom" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: '#00FF87', stopOpacity: 0.2 }} />
                  <stop offset="50%" style={{ stopColor: '#016B3A', stopOpacity: 0.3 }} />
                  <stop offset="100%" style={{ stopColor: '#000000', stopOpacity: 0.4 }} />
                </linearGradient>
              </defs>
              <path fill="url(#waveGreenBottom)" fillOpacity="1" d="M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,154.7C672,149,768,171,864,181.3C960,192,1056,192,1152,181.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gradient-to-b from-primary-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-4">
                What Our Customers Say
              </h2>
              <p className="text-gray-600 text-lg">Real experiences from our valued customers</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed italic">
                    "{testimonial.comment}"
                  </p>
                  <div className="flex items-center space-x-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-gray-800">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link to="/app">
                <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center">
                  Book Your Experience
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-gradient-to-br from-primary-50 to-white rounded-3xl p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Join thousands of customers who have transformed their beauty routine with OMBARO
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/app">
                  <Button size="lg" className="shadow-lg hover:shadow-xl transition-shadow">
                    Sign Up Now
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <MarketingFooter />
    </div>
  );
};