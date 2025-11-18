import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Shield, X, Clock, Users, Award, CheckCircle } from "lucide-react";
import { MarketingHeader } from "../components/marketing/MarketingHeader";
import { MarketingFooter } from "../components/marketing/MarketingFooter";

export const HomePage: React.FC = () => {
  const [showTermsBanner, setShowTermsBanner] = useState(true);
  const [isClosing, setIsClosing] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const handleCloseBanner = () => {
    setIsClosing(true);
    setTimeout(() => {
      setShowTermsBanner(false);
      setIsClosing(false);
    }, 500);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (showTermsBanner) {
        handleCloseBanner();
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, [showTermsBanner]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white snap-y snap-mandatory overflow-y-scroll h-screen">
      <MarketingHeader />

      <style>{`
        /* Snap Scrolling */
        .snap-section {
          scroll-snap-align: start;
          scroll-snap-stop: always;
          min-height: 100vh;
        }

        /* Smooth Animations */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
        }

        .animate-fade-in-left {
          animation: fadeInLeft 1s ease-out forwards;
        }

        .animate-fade-in-right {
          animation: fadeInRight 1s ease-out forwards;
        }

        .animate-scale-in {
          animation: scaleIn 1s ease-out forwards;
        }

        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
        .delay-400 { animation-delay: 400ms; }
        .delay-500 { animation-delay: 500ms; }
        .delay-600 { animation-delay: 600ms; }
        .delay-700 { animation-delay: 700ms; }
        .delay-800 { animation-delay: 800ms; }


        /* Parallax Effect */
        .parallax {
          transform: translateY(calc(var(--scroll) * 0.5px));
        }

        /* Image Frame Effect */
        .image-frame {
          position: relative;
          overflow: hidden;
          border-radius: 24px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
        }

        .image-frame::before {
          content: '';
          position: absolute;
          inset: 0;
          border: 2px solid rgba(255, 255, 255, 0.2);
          border-radius: 24px;
          pointer-events: none;
          z-index: 1;
        }

        .image-frame img {
          transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .image-frame:hover img {
          transform: scale(1.1);
        }

        /* Card Hover Effects */
        .service-card-hover {
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .service-card-hover:hover {
          transform: translateY(-12px);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
        }

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

      <main className="pt-20">
        {/* Terms Banner */}
        <div
          className={`bg-gradient-to-r from-primary-600 to-primary-700 border-b-2 sm:border-b-4 border-primary-800 transition-all duration-700 ease-in-out overflow-hidden ${
            showTermsBanner && !isClosing
              ? "max-h-32 opacity-100"
              : "max-h-0 opacity-0 border-0"
          }`}
        >
          <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-3 sm:py-4">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center space-x-2 flex-1">
                <Shield className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 text-white" />
                <p className="text-xs sm:text-sm md:text-base font-semibold text-white">
                  Please read our Terms & Conditions before booking
                </p>
              </div>
              <button
                onClick={handleCloseBanner}
                className="p-2 hover:bg-white/20 rounded-lg transition-colors flex-shrink-0"
                aria-label="Close banner"
                type="button"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="snap-section relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white flex items-center">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 leading-tight animate-fade-in-left">
                  Your Wellness,<br />
                  <span className="text-primary-600">Our Priority</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 leading-relaxed animate-fade-in-left delay-200">
                  Experience premium spa and salon services at home. Book expert therapists and beauticians in minutes.
                </p>
                <div className="flex flex-wrap gap-4 animate-fade-in-left delay-400">
                  <Link to="/app">
                    <button className="bg-primary-600 hover:bg-primary-700 text-white px-10 py-5 rounded-full text-lg font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl inline-flex items-center gap-3">
                      Book Now
                      <ArrowRight className="w-6 h-6" />
                    </button>
                  </Link>
                  <Link to="/services">
                    <button className="border-2 border-gray-300 hover:border-primary-600 text-gray-900 px-10 py-5 rounded-full text-lg font-semibold transition-all duration-300">
                      Explore Services
                    </button>
                  </Link>
                </div>
              </div>

              {/* Right Image */}
              <div className="animate-fade-in-right delay-300">
                <div className="image-frame">
                  <img
                    src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80"
                    alt="Premium Spa Experience"
                    className="w-full h-auto rounded-3xl"
                  />
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-gray-200">
              <div className="text-center animate-fade-in-up delay-500">
                <h3 className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">50K+</h3>
                <p className="text-gray-600 font-medium">Happy Customers</p>
              </div>
              <div className="text-center animate-fade-in-up delay-600">
                <h3 className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">1000+</h3>
                <p className="text-gray-600 font-medium">Expert Professionals</p>
              </div>
              <div className="text-center animate-fade-in-up delay-700">
                <h3 className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">25+</h3>
                <p className="text-gray-600 font-medium">Cities Covered</p>
              </div>
              <div className="text-center animate-fade-in-up delay-800">
                <h3 className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">4.8/5</h3>
                <p className="text-gray-600 font-medium">Customer Rating</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="snap-section relative bg-white flex items-center overflow-hidden">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center mb-16">
              <p className="text-primary-600 font-semibold text-lg mb-4 uppercase tracking-wider">Our Services</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Premium Wellness Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From relaxing spa treatments to professional beauty services, we bring everything to your doorstep
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Spa & Massage",
                  description: "Rejuvenate with our expert massage therapists",
                  image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&q=80",
                  icon: "🧘‍♀️"
                },
                {
                  title: "Beauty Salon",
                  description: "Professional beauty services at home",
                  image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80",
                  icon: "💅"
                },
                {
                  title: "Bridal Makeup",
                  description: "Look stunning on your special day",
                  image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80",
                  icon: "💄"
                },
                {
                  title: "Hair Care",
                  description: "Expert hair styling and treatments",
                  image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&q=80",
                  icon: "💇‍♀️"
                },
                {
                  title: "Skin Care",
                  description: "Advanced facial and skin treatments",
                  image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80",
                  icon: "✨"
                },
                {
                  title: "Wellness",
                  description: "Holistic wellness and therapy sessions",
                  image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80",
                  icon: "🌿"
                }
              ].map((service, index) => (
                <div key={index} className="service-card-hover bg-white rounded-3xl overflow-hidden shadow-lg group">
                  <div className="image-frame rounded-none">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <div className="text-5xl mb-4">{service.icon}</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">{service.description}</p>
                    <button className="text-primary-600 font-semibold inline-flex items-center gap-2 group-hover:gap-4 transition-all">
                      Learn More
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="snap-section relative bg-gradient-to-br from-primary-50 to-white flex items-center overflow-hidden">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="image-frame">
                <img
                  src="https://images.unsplash.com/photo-1519415387722-a1c3bbef716c?w=800&q=80"
                  alt="Professional Service"
                  className="w-full h-auto rounded-3xl"
                />
              </div>

              <div className="space-y-8">
                <div>
                  <p className="text-primary-600 font-semibold text-lg mb-4 uppercase tracking-wider">Why OMBARO</p>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                    Your Trusted Wellness Partner
                  </h2>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    We connect you with certified professionals who deliver exceptional services in the comfort of your home.
                  </p>
                </div>

                <div className="space-y-6">
                  {[
                    {
                      icon: CheckCircle,
                      title: "Verified Professionals",
                      description: "All our therapists and beauticians are certified and background-verified"
                    },
                    {
                      icon: Clock,
                      title: "Flexible Booking",
                      description: "Book services at your convenient time, 7 days a week"
                    },
                    {
                      icon: Award,
                      title: "Premium Quality",
                      description: "We use only high-quality products and follow strict hygiene protocols"
                    },
                    {
                      icon: Users,
                      title: "Customer Support",
                      description: "24/7 customer support to assist you with any queries"
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex gap-6 items-start group">
                      <div className="flex-shrink-0 w-14 h-14 bg-primary-100 rounded-2xl flex items-center justify-center group-hover:bg-primary-600 transition-colors duration-300">
                        <item.icon className="w-7 h-7 text-primary-600 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="snap-section relative bg-white flex items-center overflow-hidden">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center mb-16">
              <p className="text-primary-600 font-semibold text-lg mb-4 uppercase tracking-wider">Simple Process</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Book in 3 Easy Steps
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              {[
                {
                  step: "01",
                  title: "Choose Service",
                  description: "Select from our wide range of spa and salon services",
                  image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=500&q=80"
                },
                {
                  step: "02",
                  title: "Book Appointment",
                  description: "Pick your preferred date, time, and professional",
                  image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=500&q=80"
                },
                {
                  step: "03",
                  title: "Relax & Enjoy",
                  description: "Sit back and enjoy premium services at your doorstep",
                  image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=500&q=80"
                }
              ].map((step, index) => (
                <div key={index} className="text-center group">
                  <div className="mb-8 relative">
                    <div className="image-frame mx-auto w-full max-w-sm">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-80 object-cover rounded-3xl"
                      />
                    </div>
                    <div className="absolute -top-6 -left-6 w-20 h-20 bg-primary-600 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                      <span className="text-3xl font-bold text-white">{step.step}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="snap-section relative bg-gradient-to-br from-gray-50 to-white flex items-center overflow-hidden">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center mb-16">
              <p className="text-primary-600 font-semibold text-lg mb-4 uppercase tracking-wider">Testimonials</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                What Our Customers Say
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Priya Sharma",
                  role: "Regular Customer",
                  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
                  review: "OMBARO has been a game-changer for me. The convenience of getting spa services at home with such professional therapists is amazing!"
                },
                {
                  name: "Rajesh Kumar",
                  role: "Corporate Professional",
                  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
                  review: "The quality of service is outstanding. All professionals are well-trained and the booking process is super smooth."
                },
                {
                  name: "Anita Desai",
                  role: "Homemaker",
                  image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
                  review: "I love how easy it is to book appointments. The therapists are punctual, professional, and use high-quality products."
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500">
                  <div className="flex items-center space-x-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed mb-8 italic">"{testimonial.review}"</p>
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-bold text-gray-900 text-lg">{testimonial.name}</p>
                      <p className="text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="snap-section relative bg-gradient-to-br from-primary-600 to-primary-800 text-white flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItMnptMC0ydi0yaDJ2Mmgtem0tMiAyaC0ydjJoMnYtem0wLTJoMnYtMmgtMnYyem0tMiAwaC0ydjJoMnYtem0wIDBoMnYtMmgtMnYyem0wLTJ2LTJoLTJ2Mmgyem0yIDBWMzBoMnYyaC0yem0wIDBoLTJ2Mmgydi0yem0yIDB2Mmgydi0yaC0yem0wIDJ2Mmgydi0yaC0yem0yLTJ2LTJoMnYyaC0yem0wIDBoLTJ2Mmgydi0yem0wIDJoMnYyaC0ydi0yem0tMiAwdi0yaC0ydjJoMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>

          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              Ready to Experience<br />Premium Wellness?
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join thousands of satisfied customers who trust OMBARO for their wellness needs
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/app">
                <button className="bg-white hover:bg-gray-100 text-primary-600 px-12 py-6 rounded-full text-xl font-bold transition-all duration-500 shadow-2xl hover:shadow-white/20 hover:scale-110 inline-flex items-center gap-3">
                  Book Your Service
                  <ArrowRight className="w-6 h-6" />
                </button>
              </Link>
              <Link to="/contact">
                <button className="border-2 border-white/50 hover:border-white text-white px-12 py-6 rounded-full text-xl font-semibold transition-all duration-500 hover:bg-white/10">
                  Contact Us
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