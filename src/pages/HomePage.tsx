import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Shield, X, Sparkles, Check } from "lucide-react";
import { MarketingHeader } from "../components/marketing/MarketingHeader";
import { MarketingFooter } from "../components/marketing/MarketingFooter";

export const HomePage: React.FC = () => {
  const [showTermsBanner, setShowTermsBanner] = useState(true);
  const [isClosing, setIsClosing] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const carouselRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLElement>(null);
  const whyChooseRef = useRef<HTMLElement>(null);
  const testimonialsRef = useRef<HTMLElement>(null);
  const faqRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLElement>(null);

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
      const sections = [
        heroRef.current,
        aboutRef.current,
        servicesRef.current,
        whyChooseRef.current,
        testimonialsRef.current,
        faqRef.current,
        ctaRef.current,
      ];

      sections.forEach((section, index) => {
        if (!section) return;

        const rect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const scrollProgress = Math.min(
          Math.max(0, (windowHeight - rect.top) / windowHeight),
          1
        );

        // Parallax effect: previous section moves left/down as new section appears
        if (scrollProgress > 0 && scrollProgress < 1) {
          const translateY = scrollProgress * 30;
          const translateX = scrollProgress * -20;
          const opacity = 1 - scrollProgress * 0.3;
          
          section.style.transform = `translateY(${translateY}px) translateX(${translateX}px)`;
          section.style.opacity = opacity.toString();
        } else if (scrollProgress >= 1) {
          section.style.transform = 'translateY(0) translateX(0)';
          section.style.opacity = '1';
        }

        // Reveal animations
        if (rect.top < windowHeight * 0.8) {
          section.classList.add('scroll-revealed');
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!carouselRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <MarketingHeader />

      <style>{`
        @keyframes slideFromLeft {
          from {
            opacity: 0;
            transform: translateX(-60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideFromRight {
          from {
            opacity: 0;
            transform: translateX(60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        /* Hero animations */
        .hero-word-1 {
          animation: slideFromLeft 800ms ease-out forwards;
          animation-delay: 0ms;
          opacity: 0;
        }

        .hero-word-2 {
          animation: slideFromLeft 800ms ease-out forwards;
          animation-delay: 150ms;
          opacity: 0;
        }

        .hero-word-3 {
          animation: slideFromLeft 800ms ease-out forwards;
          animation-delay: 300ms;
          opacity: 0;
        }

        .hero-subtitle {
          animation: slideFromLeft 800ms ease-out forwards;
          animation-delay: 450ms;
          opacity: 0;
        }

        .hero-button {
          animation: fadeUp 800ms ease-out forwards;
          animation-delay: 600ms;
          opacity: 0;
        }

        .hero-image-wrapper {
          animation: slideFromRight 900ms ease-out forwards;
          animation-delay: 300ms;
          opacity: 0;
        }

        .hero-stat {
          animation: fadeUp 600ms ease-out forwards;
          opacity: 0;
        }

        .hero-stat-1 { animation-delay: 700ms; }
        .hero-stat-2 { animation-delay: 850ms; }
        .hero-stat-3 { animation-delay: 1000ms; }
        .hero-stat-4 { animation-delay: 1150ms; }

        /* Scroll-triggered animations */
        section {
          opacity: 0;
          transition: transform 0.3s ease-out, opacity 0.3s ease-out;
        }

        section.scroll-revealed .animate-on-scroll-left {
          animation: slideFromLeft 800ms ease-out forwards;
        }

        section.scroll-revealed .animate-on-scroll-right {
          animation: slideFromRight 800ms ease-out forwards;
        }

        section.scroll-revealed .animate-on-scroll-up {
          animation: fadeUp 800ms ease-out forwards;
        }

        section.scroll-revealed .animate-on-scroll-fade {
          animation: fadeIn 800ms ease-out forwards;
        }

        .animate-on-scroll-left,
        .animate-on-scroll-right,
        .animate-on-scroll-up,
        .animate-on-scroll-fade {
          opacity: 0;
        }

        .stagger-1 { animation-delay: 0ms !important; }
        .stagger-2 { animation-delay: 150ms !important; }
        .stagger-3 { animation-delay: 300ms !important; }
        .stagger-4 { animation-delay: 450ms !important; }

        section.scroll-revealed {
          opacity: 1;
        }

        /* Simple frame for images */
        .image-frame {
          border: 3px solid rgba(16, 185, 129, 0.3);
          border-radius: 1.5rem;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
        }

        .hero-image {
          height: 40vh;
          min-height: 300px;
        }

        @media (min-width: 640px) {
          .hero-image {
            height: 45vh;
            min-height: 350px;
          }
        }

        @media (min-width: 768px) {
          .hero-image {
            height: 50vh;
            min-height: 400px;
          }
        }

        @media (min-width: 1024px) {
          .hero-image {
            height: 55vh;
            max-height: 600px;
          }
        }

        .services-carousel {
          display: flex;
          gap: 1rem;
          overflow-x: auto;
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          -ms-overflow-style: none;
          padding: 0.5rem 0;
          cursor: grab;
        }

        @media (min-width: 640px) {
          .services-carousel {
            gap: 1.25rem;
            padding: 0.75rem 0;
          }
        }

        @media (min-width: 768px) {
          .services-carousel {
            gap: 1.5rem;
            padding: 1rem 0;
          }
        }

        .services-carousel::-webkit-scrollbar {
          display: none;
        }

        .services-carousel.dragging {
          cursor: grabbing;
          scroll-behavior: auto;
        }

        .service-card {
          position: relative;
          overflow: hidden;
          flex: 0 0 auto;
          width: 280px;
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        @media (min-width: 640px) {
          .service-card {
            width: 300px;
          }
        }

        @media (min-width: 768px) {
          .service-card {
            width: 340px;
          }
        }

        @media (min-width: 1024px) {
          .service-card {
            width: 380px;
          }
        }

        .service-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .service-card img {
          transition: transform 0.4s ease;
        }

        .service-card:hover img {
          transform: scale(1.05);
        }

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

      <main className="">
        {/* Terms Banner */}
        <div
          className={`bg-gradient-to-r from-primary-600 to-primary-700 border-b-2 sm:border-b-4 border-primary-800 transition-all duration-700 ease-in-out overflow-hidden ${
            showTermsBanner && !isClosing
              ? "max-h-32 opacity-100"
              : "max-h-0 opacity-0 border-0"
          }`}
        >
          <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2 sm:py-3">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center space-x-2 flex-1">
                <Shield className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 text-white" />
                <p className="text-xs sm:text-sm font-semibold text-white">
                  Please read our Terms & Conditions before booking
                </p>
              </div>
              <button
                onClick={handleCloseBanner}
                className="p-1.5 hover:bg-white/20 rounded-lg transition-colors flex-shrink-0"
                aria-label="Close banner"
                type="button"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section
          ref={heroRef}
          className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-emerald-950 to-black py-8 sm:py-12 md:py-16 lg:py-20 scroll-revealed"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center mb-8 sm:mb-10">
              <div className="space-y-4 sm:space-y-6">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-normal leading-tight">
                  <div className="hero-word-1 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-green-300 to-emerald-500">
                    India's #1
                  </div>
                  <div className="hero-word-2 text-white">Spa & Salon</div>
                  <div className="hero-word-3 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-green-300 to-emerald-500">
                    Platform
                  </div>
                </h1>
                <p className="hero-subtitle text-white/90 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed max-w-xl">
                  Experience premium spa and salon services at your doorstep.
                  Book verified professionals, enjoy transparent pricing, and
                  relax with certified therapists across India.
                </p>
                <div className="hero-button pt-2">
                  <Link to="/app">
                    <button className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full text-sm sm:text-base md:text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center gap-2">
                      Book Now
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                    </button>
                  </Link>
                </div>
              </div>

              <div className="hero-image-wrapper relative">
                <div className="hero-image relative rounded-2xl sm:rounded-3xl overflow-hidden image-frame">
                  <img
                    src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1200&q=80"
                    alt="Luxury Spa Interior"
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="eager"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 pt-6 sm:pt-8 border-t border-emerald-500/30">
              <div className="hero-stat hero-stat-1 text-center">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-300 mb-1 sm:mb-2">
                  10,000+
                </h2>
                <p className="text-white/80 text-xs sm:text-sm md:text-base lg:text-lg">
                  Verified Professionals
                </p>
              </div>
              <div className="hero-stat hero-stat-2 text-center">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-300 mb-1 sm:mb-2">
                  50+
                </h2>
                <p className="text-white/80 text-xs sm:text-sm md:text-base lg:text-lg">
                  Cities Covered
                </p>
              </div>
              <div className="hero-stat hero-stat-3 text-center">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-300 mb-1 sm:mb-2">
                  1M+
                </h2>
                <p className="text-white/80 text-xs sm:text-sm md:text-base lg:text-lg">
                  Happy Customers
                </p>
              </div>
              <div className="hero-stat hero-stat-4 text-center">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-300 mb-1 sm:mb-2">
                  24/7
                </h2>
                <p className="text-white/80 text-xs sm:text-sm md:text-base lg:text-lg">
                  Customer Support
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          ref={aboutRef}
          className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-b from-black via-gray-900 to-emerald-950 overflow-hidden"
        >
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
              <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                <div>
                  <p className="animate-on-scroll-fade stagger-1 text-xs sm:text-sm font-semibold text-emerald-400 tracking-wider mb-2 sm:mb-3 uppercase">
                    About Us
                  </p>
                  <h2 className="animate-on-scroll-left stagger-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white mb-4 sm:mb-6 font-normal">
                    Your Wellness Partner, At Your Doorstep
                  </h2>
                  <p className="animate-on-scroll-left stagger-3 text-white/90 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed">
                    Ombaro brings professional spa and salon services to your
                    home. With a network of certified therapists and beauty
                    experts, we ensure quality, hygiene, and convenience. From
                    relaxing massages to premium facials, we've got you covered.
                  </p>
                </div>
                <div className="animate-on-scroll-left stagger-4 bg-gradient-to-br from-emerald-900/40 to-green-900/40 backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl border border-emerald-500/30 shadow-2xl">
                  <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <Shield className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-emerald-400" />
                      <div>
                        <p className="text-white font-semibold text-xs sm:text-sm lg:text-base">
                          Verified
                        </p>
                        <p className="text-white/70 text-xs sm:text-sm">
                          Professionals
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3">
                      <Star className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-emerald-400" />
                      <div>
                        <p className="text-white font-semibold text-xs sm:text-sm lg:text-base">
                          Premium
                        </p>
                        <p className="text-white/70 text-xs sm:text-sm">
                          Quality
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3">
                      <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-emerald-400" />
                      <div>
                        <p className="text-white font-semibold text-xs sm:text-sm lg:text-base">
                          Hygienic
                        </p>
                        <p className="text-white/70 text-xs sm:text-sm">
                          Services
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3">
                      <Check className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-emerald-400" />
                      <div>
                        <p className="text-white font-semibold text-xs sm:text-sm lg:text-base">
                          Transparent
                        </p>
                        <p className="text-white/70 text-xs sm:text-sm">
                          Pricing
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="animate-on-scroll-right stagger-2 relative">
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden image-frame h-64 sm:h-80 md:h-96 lg:h-[500px]">
                  <img
                    src="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=1200&q=80"
                    alt="Professional Spa Service"
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section
          ref={servicesRef}
          className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-b from-emerald-950 via-gray-900 to-black overflow-hidden"
        >
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <p className="animate-on-scroll-fade stagger-1 text-xs sm:text-sm font-semibold text-emerald-400 tracking-wider mb-2 sm:mb-3 uppercase">
                Our Services
              </p>
              <h2 className="animate-on-scroll-up stagger-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white mb-4 sm:mb-6 font-normal">
                Indulge in Our Premium Services
              </h2>
              <p className="animate-on-scroll-up stagger-3 text-white/80 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl max-w-3xl mx-auto leading-relaxed">
                From relaxing spa treatments to stunning salon makeovers, we
                bring luxury to your doorstep.
              </p>
            </div>

            <div
              ref={carouselRef}
              className={`services-carousel ${isDragging ? "dragging" : ""}`}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseLeave}
            >
              {[
                {
                  title: "Spa & Massage",
                  desc: "Relax and rejuvenate with our therapeutic massages",
                  img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80",
                  link: "/services/spa-massage",
                },
                {
                  title: "Beauty Salon",
                  desc: "Hair, makeup, and beauty treatments at home",
                  img: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80",
                  link: "/services/beauty-salon",
                },
                {
                  title: "Bridal Makeup",
                  desc: "Look stunning on your special day",
                  img: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=80",
                  link: "/services/bridal-makeup",
                },
              ].map((service, index) => (
                <Link
                  key={index}
                  to={service.link}
                  className="service-card bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl sm:rounded-2xl overflow-hidden border border-emerald-500/20"
                >
                  <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4 sm:p-5 md:p-6">
                    <h3 className="text-white text-lg sm:text-xl md:text-2xl font-semibold mb-2">
                      {service.title}
                    </h3>
                    <p className="text-white/70 text-sm sm:text-base mb-3 sm:mb-4">
                      {service.desc}
                    </p>
                    <div className="flex items-center text-emerald-400 text-xs sm:text-sm font-semibold">
                      Explore Service
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section
          ref={whyChooseRef}
          className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-b from-black via-emerald-950 to-gray-900 overflow-hidden"
        >
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
              <div className="animate-on-scroll-left stagger-1 relative order-2 lg:order-1">
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden image-frame h-64 sm:h-80 md:h-96 lg:h-[500px]">
                  <img
                    src="https://images.unsplash.com/photo-1519415387722-a1c3bbef716c?w=1200&q=80"
                    alt="Professional Team"
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="space-y-4 sm:space-y-6 lg:space-y-8 order-1 lg:order-2">
                <div>
                  <p className="animate-on-scroll-fade stagger-1 text-xs sm:text-sm font-semibold text-emerald-400 tracking-wider mb-2 sm:mb-3 uppercase">
                    Why Choose Us
                  </p>
                  <h2 className="animate-on-scroll-left stagger-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white mb-4 sm:mb-6 font-normal">
                    Experience Excellence in Every Service
                  </h2>
                </div>

                <div className="space-y-3 sm:space-y-4 md:space-y-6">
                  {[
                    {
                      icon: Shield,
                      title: "100% Verified Professionals",
                      desc: "All our therapists are certified and background-verified",
                    },
                    {
                      icon: Star,
                      title: "Premium Quality Products",
                      desc: "We use only the best and safest products",
                    },
                    {
                      icon: Sparkles,
                      title: "Hygienic Standards",
                      desc: "Strict hygiene protocols followed at all times",
                    },
                    {
                      icon: Check,
                      title: "Transparent Pricing",
                      desc: "No hidden charges, what you see is what you pay",
                    },
                  ].map((feature, index) => (
                    <div
                      key={index}
                      className={`animate-on-scroll-left stagger-${index + 2} flex items-start gap-3 sm:gap-4 bg-gradient-to-r from-emerald-900/20 to-transparent backdrop-blur-sm p-3 sm:p-4 lg:p-6 rounded-lg sm:rounded-xl border border-emerald-500/20`}
                    >
                      <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-emerald-400 flex-shrink-0 mt-0.5 sm:mt-1" />
                      <div>
                        <h3 className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-semibold mb-0.5 sm:mb-1">
                          {feature.title}
                        </h3>
                        <p className="text-white/70 text-xs sm:text-sm md:text-base">
                          {feature.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section
          ref={testimonialsRef}
          className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-900 via-black to-emerald-950 overflow-hidden"
        >
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <p className="animate-on-scroll-fade stagger-1 text-xs sm:text-sm font-semibold text-emerald-400 tracking-wider mb-2 sm:mb-3 uppercase">
                Testimonials
              </p>
              <h2 className="animate-on-scroll-up stagger-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white mb-4 sm:mb-6 font-normal">
                What Our Customers Say
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {[
                {
                  name: "Priya Sharma",
                  rating: 5,
                  text: "Amazing service! The therapist was professional and the massage was incredibly relaxing.",
                },
                {
                  name: "Rahul Verma",
                  rating: 5,
                  text: "Best spa experience at home. Highly recommend for anyone looking for convenience and quality.",
                },
                {
                  name: "Anita Singh",
                  rating: 5,
                  text: "The bridal makeup was flawless. I felt like a princess on my wedding day!",
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className={`animate-on-scroll-up stagger-${index + 1} bg-gradient-to-br from-emerald-900/30 to-gray-900/50 backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl border border-emerald-500/20 shadow-xl`}
                >
                  <div className="flex items-center gap-1 mb-3 sm:mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 sm:w-5 sm:h-5 fill-emerald-400 text-emerald-400"
                      />
                    ))}
                  </div>
                  <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed mb-3 sm:mb-4">
                    "{testimonial.text}"
                  </p>
                  <p className="text-emerald-400 font-semibold text-xs sm:text-sm md:text-base">
                    - {testimonial.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section
          ref={faqRef}
          className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-b from-emerald-950 via-gray-900 to-black overflow-hidden"
        >
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <p className="animate-on-scroll-fade stagger-1 text-xs sm:text-sm font-semibold text-emerald-400 tracking-wider mb-2 sm:mb-3 uppercase">
                FAQ
              </p>
              <h2 className="animate-on-scroll-up stagger-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-4 font-normal">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {[
                {
                  q: "How do I book a service?",
                  a: "Simply browse our services, select what you need, choose your preferred time slot, and confirm your booking. It's that easy!",
                },
                {
                  q: "Are the professionals verified?",
                  a: "Yes, all our professionals are thoroughly background-checked, certified, and trained to provide the best service.",
                },
                {
                  q: "What safety measures do you follow?",
                  a: "We follow strict hygiene protocols, use sanitized equipment, and our professionals wear protective gear during service.",
                },
                {
                  q: "Can I reschedule or cancel my booking?",
                  a: "Yes, you can reschedule or cancel your booking up to 6 hours before the scheduled time without any charges.",
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className={`animate-on-scroll-left stagger-${index + 1} bg-gradient-to-r from-emerald-900/20 to-gray-900/30 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-emerald-500/20`}
                >
                  <h3 className="text-white text-sm sm:text-base md:text-lg font-semibold mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-white/70 text-xs sm:text-sm md:text-base leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          ref={ctaRef}
          className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-black via-emerald-950 to-gray-900 overflow-hidden"
        >
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="animate-on-scroll-up stagger-1">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white mb-4 sm:mb-6 font-normal">
                Ready to Experience Luxury?
              </h2>
              <p className="text-white/90 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed mb-6 sm:mb-8 max-w-3xl mx-auto">
                Book your first service and enjoy premium spa and salon
                treatments in the comfort of your home.
              </p>
              <Link to="/app">
                <button className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 rounded-full text-base sm:text-lg md:text-xl font-semibold transition-all duration-300 shadow-2xl hover:shadow-emerald-500/50 inline-flex items-center gap-2 sm:gap-3">
                  Book Now
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
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
