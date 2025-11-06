import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Scissors, Heart, Flower2, Wind, Droplet, Star, Clock, CheckCircle, ArrowRight, TrendingUp, Users, BarChart3 } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { MarketingHeader } from '../components/marketing/MarketingHeader';
import { MarketingFooter } from '../components/marketing/MarketingFooter';

export const ServicesPage: React.FC = () => {
  const serviceCategories = [
    {
      icon: Sparkles,
      title: 'Spa & Massage',
      description: 'Relax and rejuvenate with our premium spa and massage services',
      services: [
        'Swedish Massage',
        'Deep Tissue Massage',
        'Hot Stone Therapy',
        'Aromatherapy',
        'Thai Massage',
        'Reflexology',
      ],
      image: 'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      icon: Scissors,
      title: 'Hair Services',
      description: 'Professional hair care from cutting to coloring and styling',
      services: [
        'Hair Cut & Styling',
        'Hair Coloring',
        'Hair Treatment',
        'Keratin Treatment',
        'Hair Spa',
        'Highlights & Lowlights',
      ],
      image: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      icon: Sparkles,
      title: 'Facial & Skin Care',
      description: 'Advanced facial treatments for glowing, healthy skin',
      services: [
        'Classic Facial',
        'Anti-Aging Facial',
        'Acne Treatment',
        'Hydrafacial',
        'Chemical Peel',
        'Skin Brightening',
      ],
      image: 'https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      icon: Flower2,
      title: 'Bridal Services',
      description: 'Complete bridal packages for your special day',
      services: [
        'Bridal Makeup',
        'Bridal Hair Styling',
        'Pre-Bridal Packages',
        'Mehendi Services',
        'Saree Draping',
        'Engagement Makeup',
      ],
      image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      icon: Wind,
      title: 'Makeup Services',
      description: 'Professional makeup for every occasion',
      services: [
        'Party Makeup',
        'HD Makeup',
        'Airbrush Makeup',
        'Natural Makeup',
        'Engagement Makeup',
        'Fashion Makeup',
      ],
      image: 'https://images.pexels.com/photos/3992876/pexels-photo-3992876.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      icon: Droplet,
      title: 'Nail Services',
      description: 'Beautiful nails with our manicure and pedicure services',
      services: [
        'Classic Manicure',
        'Classic Pedicure',
        'Gel Nails',
        'Nail Art',
        'Nail Extensions',
        'Spa Manicure & Pedicure',
      ],
      image: 'https://images.pexels.com/photos/3997989/pexels-photo-3997989.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      icon: Heart,
      title: 'Body Treatments',
      description: 'Comprehensive body care and beauty treatments',
      services: [
        'Waxing Services',
        'Body Scrub',
        'Body Wrap',
        'Threading',
        'Bleach',
        'Tan Removal',
      ],
      image: 'https://images.pexels.com/photos/3865676/pexels-photo-3865676.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      icon: Star,
      title: 'Wellness Programs',
      description: 'Holistic wellness and lifestyle improvement programs',
      services: [
        'Yoga Sessions',
        'Meditation Classes',
        'Nutrition Counseling',
        'Stress Management',
        'Weight Management',
        'Lifestyle Coaching',
      ],
      image: 'https://images.pexels.com/photos/3822621/pexels-photo-3822621.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  const benefits = [
    {
      icon: Star,
      title: 'Verified Professionals',
      description: 'All service providers are certified and verified',
    },
    {
      icon: Clock,
      title: 'Flexible Scheduling',
      description: 'Book appointments at your convenience',
    },
    {
      icon: Sparkles,
      title: 'Premium Quality',
      description: 'Only the best products and techniques',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <MarketingHeader />

      <main className="pt-16">
        <section className="bg-gradient-to-br from-primary-50 via-accent-50 to-secondary-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Our Services
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Explore our comprehensive range of beauty and wellness services designed to make you look and feel your best
            </p>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-neutral-900 mb-1">
                        {benefit.title}
                      </h3>
                      <p className="text-neutral-600">{benefit.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {serviceCategories.map((category, index) => {
                const Icon = category.icon;
                const isEven = index % 2 === 0;

                return (
                  <div
                    key={index}
                    className={`grid md:grid-cols-2 gap-8 items-center ${
                      isEven ? '' : 'md:grid-flow-dense'
                    }`}
                  >
                    <div className={isEven ? '' : 'md:col-start-2'}>
                      <div className="mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-xl flex items-center justify-center mb-4">
                          <Icon className="w-6 h-6 text-primary-600" />
                        </div>
                        <h2 className="text-3xl font-bold text-neutral-900 mb-3">
                          {category.title}
                        </h2>
                        <p className="text-lg text-neutral-600 mb-6">
                          {category.description}
                        </p>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        {category.services.map((service, serviceIndex) => (
                          <div
                            key={serviceIndex}
                            className="flex items-center space-x-2 text-neutral-700"
                          >
                            <div className="w-1.5 h-1.5 bg-primary-600 rounded-full" />
                            <span>{service}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className={isEven ? '' : 'md:col-start-1 md:row-start-1'}>
                      <img
                        src={category.image}
                        alt={category.title}
                        className="rounded-2xl shadow-xl w-full h-80 object-cover"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                Ready to Book Your Service?
              </h2>
              <p className="text-lg text-neutral-600 mb-8">
                Experience premium beauty and wellness services at your doorstep
              </p>
              <Link to="/app">
                <Button size="lg">
                  Book Now
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-primary-700 via-accent-600 to-secondary-700 text-white relative overflow-hidden">
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3865676/pexels-photo-3865676.jpeg?auto=compress&cs=tinysrgb&w=1200')] bg-cover bg-center opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 via-transparent to-accent-600/20" />

          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-5 py-2.5 shadow-lg">
                  <Sparkles className="w-5 h-5 text-amber-300 animate-pulse" />
                  <span className="text-white text-sm font-semibold tracking-wide">Join Our Professional Network</span>
                </div>

                <div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                    Are You a Beauty
                    <span className="block bg-gradient-to-r from-amber-200 via-yellow-200 to-amber-300 bg-clip-text text-transparent">
                      Professional?
                    </span>
                  </h2>
                  <p className="text-xl text-white/90 leading-relaxed">
                    Join our network of verified professionals and grow your business.
                    Reach thousands of customers looking for quality services.
                  </p>
                </div>

                {/* Benefits List */}
                <div className="space-y-4">
                  {[
                    { icon: TrendingUp, text: 'Get more bookings and increase revenue', color: 'from-accent-400 to-accent-500' },
                    { icon: Clock, text: 'Manage your schedule efficiently', color: 'from-secondary-400 to-secondary-500' },
                    { icon: Star, text: 'Build your professional reputation', color: 'from-primary-400 to-primary-500' },
                    { icon: BarChart3, text: 'Access to business analytics and insights', color: 'from-accent-500 to-primary-500' }
                  ].map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 hover:bg-white/15 transition-all duration-300 group"
                    >
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <benefit.icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-white/95 font-medium flex-1">{benefit.text}</span>
                      <CheckCircle className="w-5 h-5 text-accent-300 flex-shrink-0" />
                    </div>
                  ))}
                </div>

                <Link to="/become-partner">
                  <Button
                    size="lg"
                    className="bg-white hover:bg-white/95 hover:shadow-2xl hover:scale-105 transition-all duration-300 font-bold text-lg px-8 py-6 mt-6 md:mt-0"
                  >
                    <span style={{ color: '#b17d52', opacity: 1 }}>Become a Partner Today</span>
                    <ArrowRight className="w-6 h-6 ml-2" style={{ color: '#b17d52', opacity: 1 }} />
                  </Button>
                </Link>
              </div>

              {/* Right Content - Stats Cards */}
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-xl border border-white/30 rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl">
                  <div className="mb-4 sm:mb-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Partner Success Stats</h3>
                    <p className="text-sm sm:text-base text-white/80">Real results from our professionals</p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-5">
                    {[
                      {
                        icon: TrendingUp,
                        label: 'Revenue Growth',
                        value: '40%+',
                        gradient: 'from-accent-400 to-accent-600',
                        bgGradient: 'from-accent-500/20 to-accent-600/20'
                      },
                      {
                        icon: Users,
                        label: 'Active Customers',
                        value: '50,000+',
                        gradient: 'from-secondary-400 to-secondary-600',
                        bgGradient: 'from-secondary-500/20 to-secondary-600/20'
                      },
                      {
                        icon: Star,
                        label: 'Average Rating',
                        value: '4.8/5',
                        gradient: 'from-primary-400 to-primary-600',
                        bgGradient: 'from-primary-500/20 to-primary-600/20'
                      },
                      {
                        icon: Clock,
                        label: 'Booking Rate',
                        value: '85%+',
                        gradient: 'from-accent-500 to-primary-600',
                        bgGradient: 'from-accent-500/20 to-primary-600/20'
                      }
                    ].map((stat, index) => (
                      <div
                        key={index}
                        className={`bg-gradient-to-br ${stat.bgGradient} backdrop-blur-sm border border-white/30 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 text-center hover:scale-105 transition-all duration-300 group shadow-lg`}
                      >
                        <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br ${stat.gradient} mx-auto mb-2 sm:mb-3 md:mb-4 flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-300`}>
                          <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
                        </div>
                        <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</p>
                        <p className="text-xs sm:text-sm font-medium text-white/90">{stat.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Additional Info */}
                  <div className="mt-6 pt-6 border-t border-white/20">
                    <div className="flex items-center justify-center space-x-2 text-white/90">
                      <div className="flex -space-x-2">
                        {[1, 2, 3, 4].map((i) => (
                          <div
                            key={i}
                            className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-primary-400 to-accent-500"
                          />
                        ))}
                      </div>
                      <span className="text-sm font-medium">
                        Join <span className="font-bold text-white">500+</span> verified professionals
                      </span>
                    </div>
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-br from-accent-400 to-primary-600 rounded-2xl p-4 shadow-2xl transform rotate-3 hover:rotate-6 transition-transform duration-300">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-white">🎉</p>
                    <p className="text-xs font-bold text-white">Limited Slots</p>
                  </div>
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