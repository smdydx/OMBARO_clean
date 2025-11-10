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

  // Hero slider images
  const [currentSlideImage, setCurrentSlideImage] = React.useState(0);
  const heroImages = [
    '/attached_assets/stock_images/spa_treatment_room_i_609c3288.jpg',
    '/attached_assets/stock_images/luxury_spa_massage_t_690db67f.jpg',
    '/attached_assets/stock_images/spa_treatment_room_i_a3b5e6e7.jpg',
    '/attached_assets/stock_images/luxury_spa_massage_t_2767ba26.jpg'
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideImage((prev) => (prev + 1) % heroImages.length);
    }, 4000); // Change image every 4 seconds
    return () => clearInterval(interval);
  }, []);

  // Updated services array with unique images for each service
  const services = [
    {
      title: 'Relax & Enjoy a Unique Experience',
      subtitle: 'SPA TREATMENTS',
      description: 'Indulge in our premium spa treatments designed to rejuvenate your body and mind. Experience tranquility like never before.',
      image: '/attached_assets/stock_images/spa_treatment_room_i_79626365.jpg',
      link: '/spa-massage',
      reverse: false
    },
    {
      title: 'Massage & Therapy',
      subtitle: 'HEALING TOUCH',
      description: 'Expert therapeutic massages that relieve stress, ease muscle tension, and promote overall wellness and relaxation.',
      image: '/attached_assets/stock_images/luxury_spa_massage_t_3fdc8d75.jpg',
      link: '/spa-massage',
      reverse: true
    },
    {
      title: 'Relax at the Hot tub',
      subtitle: 'HOTTUB THERAPY',
      description: 'Immerse yourself in our luxurious hot tub facilities, perfect for unwinding and soothing tired muscles.',
      image: '/attached_assets/stock_images/spa_treatment_room_i_f52c1c96.jpg',
      link: '/spa-massage',
      reverse: false
    },
    {
      title: 'Beauty & Wellness',
      subtitle: 'COMPLETE CARE',
      description: 'Comprehensive beauty and wellness services tailored to enhance your natural beauty and boost your confidence.',
      image: '/attached_assets/stock_images/beauty_salon_facial__65176adc.jpg',
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

      {/* Animated Terms & Conditions Banner */}
      <div
        className={`transition-all duration-700 ease-in-out ${
          showTermsBanner ? 'mt-16 opacity-100 max-h-20 sm:max-h-24' : 'mt-16 opacity-0 max-h-0 overflow-hidden'
        }`}
      >
        <div className="bg-gradient-to-r from-cyan-600 to-cyan-700 border-b-2 sm:border-b-4 border-cyan-800">
          <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2 sm:py-4">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center space-x-2 text-white flex-1">
                <Shield className="w-4 h-4 sm:w-6 sm:h-6 animate-pulse flex-shrink-0" />
                <p className="text-xs sm:text-sm md:text-base font-semibold">
                  Please read our{' '}
                  <Link
                    to="/terms"
                    className="underline font-bold hover:text-cyan-100 transition-colors"
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
        {/* Hero Section with Images */}
        <section className="relative bg-gradient-to-b from-cyan-50/30 via-white to-white overflow-hidden pt-20">
          <div className="absolute inset-0 bg-[url('/attached_assets/stock_images/luxury_spa_massage_t_48a88152.jpg')] bg-cover bg-center opacity-5"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Left Content */}
              <div className="text-center lg:text-left">
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-light text-gray-800 mb-6 leading-tight">
                  RELAX
                  <br />
                  <span className="font-normal text-cyan-600">& ENJOY</span>
                </h1>
                <p className="text-base md:text-lg text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                  Experience ultimate relaxation with our premium spa and wellness services. 
                  Book your perfect moment of tranquility today.
                </p>
                <Link to="/app">
                  <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 md:px-8 py-2.5 md:py-3 rounded-full text-sm font-medium transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center">
                    Book Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </Link>
              </div>

              {/* Right Content - Hero Image Slider */}
              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src={heroImages[currentSlideImage]}
                    alt="Spa Experience"
                    className="w-full h-[350px] md:h-[500px] object-cover transition-opacity duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/20 to-transparent"></div>
                  {/* Slider indicators */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                    {heroImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlideImage(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === currentSlideImage ? 'bg-white w-6' : 'bg-white/50'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
                
                {/* Floating Card */}
                <div className="absolute -bottom-4 md:-bottom-6 -left-4 md:-left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 md:p-6 shadow-xl max-w-[200px] md:max-w-xs">
                  <div className="flex items-center space-x-3 md:space-x-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-cyan-100 rounded-full flex items-center justify-center">
                      <Star className="w-5 h-5 md:w-6 md:h-6 text-cyan-600" />
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
          
          {/* Wave Divider */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1200 120" className="w-full h-12 md:h-16" preserveAspectRatio="none">
              <path d="M0,0 Q300,60 600,30 T1200,0 L1200,120 L0,120 Z" fill="#ffffff" />
            </svg>
          </div>
        </section>

        {/* Services Sections - Alternating Layout */}
        {services.map((service, index) => (
          <section key={index} className="relative py-20 overflow-hidden bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${service.reverse ? 'lg:grid-flow-dense' : ''}`}>
                {/* Image */}
                <div className={service.reverse ? 'lg:col-start-2' : ''}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="rounded-3xl shadow-2xl w-full object-cover h-[400px]"
                  />
                </div>

                {/* Content */}
                <div className={`${service.reverse ? 'lg:col-start-1 lg:row-start-1' : ''} text-center lg:text-left`}>
                  <div className="text-sm font-semibold text-cyan-600 tracking-wider mb-3">
                    {service.subtitle}
                  </div>
                  <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6 leading-tight">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
                    {service.description}
                  </p>
                  <Link to={service.link}>
                    <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 shadow-lg hover:shadow-xl">
                      Learn More
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Wave Divider - Only on last item */}
            {index === services.length - 1 && (
              <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1200 120" className="w-full h-24" preserveAspectRatio="none">
                  <path d="M0,0 Q300,60 600,30 T1200,0 L1200,120 L0,120 Z" fill="#f0fdfa" />
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
                Explore Our <span className="font-normal text-cyan-600">Services</span>
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Discover a wide range of premium beauty and wellness services
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {categories.map((category, index) => (
                <Link key={index} to={category.path}>
                  <div className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer">
                    <div className="relative h-80">
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
                      <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 inline-flex items-center">
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
        <section className="py-20 bg-gradient-to-b from-white to-cyan-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-4">
                Why Choose <span className="font-normal text-cyan-600">OMBARO</span>
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
                  <div className="w-16 h-16 rounded-full bg-cyan-100 flex items-center justify-center mb-4 mx-auto">
                    <feature.icon className="w-8 h-8 text-cyan-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gradient-to-b from-cyan-50 to-white">
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
                <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center">
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
            <div className="bg-gradient-to-br from-cyan-50 to-white rounded-3xl p-12 shadow-xl">
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