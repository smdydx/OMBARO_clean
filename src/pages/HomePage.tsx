import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Star, Shield, Award, Users, TrendingUp, CheckCircle, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { MarketingHeader } from '../components/marketing/MarketingHeader';
import { MarketingFooter } from '../components/marketing/MarketingFooter';
import { HeroSlider } from '../components/common/HeroSlider';

export const HomePage: React.FC = () => {
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

      <main className="pt-16">
        <HeroSlider />

        <section className="py-20 bg-gradient-to-br from-white via-primary-50/30 to-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1920&q=80')] bg-cover bg-center opacity-5" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-200/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-200/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="group relative animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-100/50 to-accent-100/50 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-soft hover:shadow-strong transition-all duration-500 hover:-translate-y-3 border border-primary-100/50 hover:border-primary-300/50 text-center">
                    <div className="text-4xl md:text-5xl font-display font-bold bg-gradient-to-br from-primary-600 via-accent-500 to-primary-700 bg-clip-text text-transparent mb-3 group-hover:scale-125 transition-transform duration-500">
                      {stat.number}
                    </div>
                    <div className="text-neutral-700 font-semibold tracking-wide">{stat.label}</div>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-primary-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-100 to-accent-100 rounded-full px-6 py-3 mb-6 shadow-soft animate-bounce-subtle">
                <Sparkles className="w-5 h-5 text-primary-600" />
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
                  description: 'Get more bookings and increase your monthly revenue by 40%',
                  gradient: 'from-green-500 to-emerald-600'
                },
                {
                  icon: Clock,
                  title: 'Smart Scheduling',
                  description: 'Manage your schedule efficiently with automated booking system',
                  gradient: 'from-blue-500 to-cyan-600'
                },
                {
                  icon: Star,
                  title: 'Build Reputation',
                  description: 'Build your professional reputation with verified customer reviews',
                  gradient: 'from-amber-500 to-orange-600'
                },
                {
                  icon: Users,
                  title: 'Business Analytics',
                  description: 'Access to business analytics and insights to grow smarter',
                  gradient: 'from-purple-500 to-pink-600'
                },
              ].map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={index}
                    className="group bg-white rounded-3xl p-8 shadow-soft hover:shadow-strong transition-all duration-300 hover:-translate-y-2 border border-neutral-100"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-br ${benefit.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
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

            <div className="relative bg-gradient-to-br from-primary-600 via-secondary-600 to-accent-600 rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3865676/pexels-photo-3865676.jpeg?auto=compress&cs=tinysrgb&w=1200')] bg-cover bg-center opacity-10" />
              <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center p-12">
                <div className="text-white">
                  <h3 className="text-3xl md:text-4xl font-bold mb-6">
                    Ready to Transform Your Business?
                  </h3>
                  <p className="text-xl text-white/90 mb-8 leading-relaxed">
                    Join thousands of successful beauty professionals who have already grown their business with OMBARO. Start your journey today.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link to="/app">
                      <Button size="lg" className="w-full sm:w-auto bg-white text-primary-600 hover:bg-neutral-100 shadow-xl hover:shadow-2xl transition-all transform hover:scale-105">
                        Become a Partner
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Button>
                    </Link>
                    <Link to="/become-partner">
                      <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-white text-white hover:bg-white/10">
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="relative hidden md:block">
                  <img
                    src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&q=90"
                    alt="Beauty professional at work"
                    className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl">
                    <div className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent mb-1">
                      500+
                    </div>
                    <div className="text-sm text-neutral-600 font-semibold">Partner Vendors</div>
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

        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="relative bg-gradient-to-br from-primary-50 via-accent-50 to-secondary-50 rounded-3xl p-12 overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary-200/30 to-accent-200/30 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-secondary-200/30 to-primary-200/30 rounded-full blur-3xl" />
              <div className="relative z-10">
                <Sparkles className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                  Ready to Get Started?
                </h2>
                <p className="text-lg text-neutral-600 mb-8">
                  Join thousands of customers who have transformed their beauty routine with OMBARO
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/app">
                    <Button size="lg" className="w-full sm:w-auto shadow-lg hover:shadow-xl transition-shadow">
                      Sign Up Now
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                  <Link to="/contact">
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
