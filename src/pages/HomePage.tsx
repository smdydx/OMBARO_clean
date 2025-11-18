import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Shield, X } from "lucide-react";
import { MarketingHeader } from "../components/marketing/MarketingHeader";
import { MarketingFooter } from "../components/marketing/MarketingFooter";

export const HomePage: React.FC = () => {
  const [showTermsBanner, setShowTermsBanner] = useState(true);
  const [isClosing, setIsClosing] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  
  const carouselRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLElement>(null);
  const caseStudiesRef = useRef<HTMLElement>(null);
  const testimonialsRef = useRef<HTMLElement>(null);
  const pricingRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLElement>(null);
  
  const heroImageRef = useRef<HTMLDivElement>(null);
  const aboutImageRef = useRef<HTMLImageElement>(null);

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
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          updateParallax();
          updateScrollAnimations();
          ticking = false;
        });
        ticking = true;
      }
    };

    const updateParallax = () => {
      const scrollPos = window.scrollY;
      
      if (heroImageRef.current) {
        const parallaxOffset = scrollPos * 0.5;
        heroImageRef.current.style.transform = `translateY(${parallaxOffset}px)`;
      }
      
      if (aboutImageRef.current) {
        const rect = aboutImageRef.current.getBoundingClientRect();
        const scrollProgress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
        if (scrollProgress > 0 && scrollProgress < 1) {
          const parallaxOffset = (scrollProgress - 0.5) * -100;
          aboutImageRef.current.style.transform = `translateY(${parallaxOffset}px)`;
        }
      }
    };

    const updateScrollAnimations = () => {
      const sections = [
        heroRef.current,
        aboutRef.current,
        servicesRef.current,
        caseStudiesRef.current,
        testimonialsRef.current,
        pricingRef.current,
        ctaRef.current,
      ];

      sections.forEach((section) => {
        if (!section) return;
        
        const rect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const triggerPoint = windowHeight * 0.75;
        
        if (rect.top < triggerPoint && rect.bottom > 0) {
          const scrollProgress = Math.min(
            1,
            Math.max(0, (triggerPoint - rect.top) / (windowHeight * 0.5))
          );
          
          section.style.setProperty('--scroll-progress', scrollProgress.toString());
          
          if (!section.classList.contains('scroll-revealed')) {
            section.classList.add('scroll-revealed');
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
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
            transform: translateX(-100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideFromRight {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(40px);
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

        @keyframes scaleUp {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .hero-word-1 {
          animation: slideFromLeft 1000ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
          animation-delay: 0ms;
          opacity: 0;
          will-change: transform, opacity;
        }

        .hero-word-2 {
          animation: slideFromLeft 1000ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
          animation-delay: 200ms;
          opacity: 0;
          will-change: transform, opacity;
        }

        .hero-word-3 {
          animation: slideFromLeft 1000ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
          animation-delay: 400ms;
          opacity: 0;
          will-change: transform, opacity;
        }

        .hero-subtitle {
          animation: slideFromLeft 1000ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
          animation-delay: 600ms;
          opacity: 0;
          will-change: transform, opacity;
        }

        .hero-button {
          animation: fadeUp 1000ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
          animation-delay: 800ms;
          opacity: 0;
          will-change: transform, opacity;
        }

        .hero-image-wrapper {
          animation: slideFromRight 1200ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
          animation-delay: 300ms;
          opacity: 0;
          will-change: transform, opacity;
        }

        .hero-stat-1 {
          animation: fadeUp 800ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
          animation-delay: 1000ms;
          opacity: 0;
          will-change: transform, opacity;
        }

        .hero-stat-2 {
          animation: fadeUp 800ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
          animation-delay: 1150ms;
          opacity: 0;
          will-change: transform, opacity;
        }

        .hero-stat-3 {
          animation: fadeUp 800ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
          animation-delay: 1300ms;
          opacity: 0;
          will-change: transform, opacity;
        }

        .hero-stat-4 {
          animation: fadeUp 800ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
          animation-delay: 1450ms;
          opacity: 0;
          will-change: transform, opacity;
        }

        section {
          opacity: 0;
        }

        section.scroll-revealed .animate-on-scroll-left {
          animation: slideFromLeft 1000ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        section.scroll-revealed .animate-on-scroll-right {
          animation: slideFromRight 1000ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        section.scroll-revealed .animate-on-scroll-up {
          animation: fadeUp 1000ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        section.scroll-revealed .animate-on-scroll-fade {
          animation: fadeIn 1000ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        section.scroll-revealed .animate-on-scroll-scale {
          animation: scaleUp 1000ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .animate-on-scroll-left,
        .animate-on-scroll-right,
        .animate-on-scroll-up,
        .animate-on-scroll-fade,
        .animate-on-scroll-scale {
          opacity: 0;
          will-change: transform, opacity;
        }

        .stagger-1 { animation-delay: 0ms !important; }
        .stagger-2 { animation-delay: 200ms !important; }
        .stagger-3 { animation-delay: 400ms !important; }
        .stagger-4 { animation-delay: 600ms !important; }

        .stagger-fast-1 { animation-delay: 0ms !important; }
        .stagger-fast-2 { animation-delay: 150ms !important; }
        .stagger-fast-3 { animation-delay: 300ms !important; }
        .stagger-fast-4 { animation-delay: 450ms !important; }

        section.scroll-revealed {
          opacity: 1;
          transition: opacity 600ms ease-out;
        }

        .hero-image {
          height: 50vw;
          max-height: 600px;
          min-height: 400px;
          will-change: transform;
          transition: transform 0.1s linear;
        }

        @media (min-width: 992px) {
          .hero-image {
            height: 50vw;
          }
        }

        .webflow-heading {
          font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          font-weight: 400;
          line-height: 1.1;
          letter-spacing: -0.02em;
        }

        .webflow-text {
          font-family: system-ui, -apple-system, sans-serif;
          font-size: 1.125rem;
          line-height: 1.6;
          color: #666;
        }

        .services-carousel {
          display: flex;
          gap: 1.5rem;
          overflow-x: auto;
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          -ms-overflow-style: none;
          padding: 1rem 0;
          cursor: grab;
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
          width: 320px;
          cursor: pointer;
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.5s;
        }

        @media (min-width: 768px) {
          .service-card {
            width: 380px;
          }
        }

        .service-card:hover {
          transform: translateY(-12px) scale(1.05);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
        }

        .service-card img {
          transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .service-card:hover img {
          transform: scale(1.15);
        }

        .case-study-card {
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.5s;
        }

        .case-study-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }

        .case-study-card img {
          transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .case-study-card:hover img {
          transform: scale(1.1);
        }

        .parallax-image {
          will-change: transform;
          transition: transform 0.1s linear;
        }

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
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

        {/* Hero Section - Staggered Word-by-Word Animation */}
        <section ref={heroRef} className="relative overflow-hidden bg-white py-12 md:py-20 lg:py-32 scroll-revealed">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-12">
              {/* Left Text Content - Staggered Animation */}
              <div className="space-y-6">
                <h1 className="webflow-heading text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-gray-900 font-normal">
                  <div className="hero-word-1">Empowering</div>
                  <div className="hero-word-2">Business</div>
                  <div className="hero-word-3">Growth</div>
                </h1>
                <p className="hero-subtitle webflow-text max-w-xl text-lg">
                  Our digital marketing solutions are designed to deliver measurable results and accelerate your online growth through innovative strategies.
                </p>
                <div className="hero-button flex gap-4 pt-4">
                  <Link to="/app">
                    <button className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-full text-base font-medium transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center gap-2">
                      Let's Talk
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </Link>
                </div>
              </div>

              {/* Right Image - Slides from Right with Parallax */}
              <div className="hero-image-wrapper relative">
                <div ref={heroImageRef} className="hero-image relative rounded-3xl overflow-hidden shadow-2xl parallax-image">
                  <img
                    src="https://cdn.prod.website-files.com/68bfd5901895b58f0d2e6d33/68c01353ba4fe52ebf9e1cd6_d899696bed5fc7d310c42da48c1b171f_IMG3.avif"
                    alt="Hero"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Stats Section - Staggered Fade Up */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-gray-200">
              <div className="hero-stat-1">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">125+</h2>
                <p className="text-gray-600">Industries served</p>
              </div>
              <div className="hero-stat-2">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">95%</h2>
                <p className="text-gray-600">Client retention</p>
              </div>
              <div className="hero-stat-3">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">500+</h2>
                <p className="text-gray-600">Projects completed</p>
              </div>
              <div className="hero-stat-4">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">24/7</h2>
                <p className="text-gray-600">Support available</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section - Coordinated Left/Right */}
        <section ref={aboutRef} className="py-20 bg-gray-50">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content - Slides from Left */}
              <div className="space-y-8">
                <div>
                  <p className="animate-on-scroll-fade stagger-1 text-sm font-semibold text-gray-500 tracking-wider mb-3 uppercase">
                    01 / About
                  </p>
                  <h2 className="animate-on-scroll-left stagger-2 webflow-heading text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-6 font-normal">
                    Trusted by over 100 businesses worldwide
                  </h2>
                  <p className="animate-on-scroll-left stagger-3 webflow-text text-lg">
                    We believe in creating meaningful, lasting connections through digital innovation. Whether it's building your brand, optimizing your website, or driving traffic with cutting-edge marketing strategies.
                  </p>
                </div>
                <div className="animate-on-scroll-left stagger-4 bg-white p-8 rounded-2xl shadow-lg">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src="https://cdn.prod.website-files.com/68bfd5901895b58f0d2e6d33/68c151d7ece54bad85171ad3_fe3ef22dcd0ff322e4c249d33d30f9bc_Testimonials-1.avif"
                      alt="CEO"
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-gray-900">Miles, Esther</p>
                      <p className="text-sm text-gray-600">Chairman</p>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed italic">
                    "Working with this team transformed our business. Their innovative approach and dedication to results is unmatched."
                  </p>
                </div>
              </div>
              
              {/* Right Image - Slides from Right with Parallax */}
              <div className="animate-on-scroll-right stagger-2">
                <img
                  ref={aboutImageRef}
                  src="https://cdn.prod.website-files.com/68bfd5901895b58f0d2e6d33/68c0fa82a5e8c587cb5976bd_2039ece10f2ad381c4a36262e21daef2_about-img.avif"
                  alt="About"
                  className="w-full rounded-3xl shadow-2xl parallax-image"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section - Staggered Service Cards */}
        <section ref={servicesRef} className="py-20 bg-white">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <p className="animate-on-scroll-fade stagger-1 text-sm font-semibold text-gray-500 tracking-wider mb-3 uppercase">
                02 / Services
              </p>
              <h2 className="animate-on-scroll-left stagger-2 webflow-heading text-4xl md:text-5xl lg:text-6xl text-gray-900 font-normal">
                Digital solutions that deliver results
              </h2>
            </div>
            <div 
              ref={carouselRef}
              className={`services-carousel ${isDragging ? 'dragging' : ''}`}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseLeave}
            >
              {[
                {
                  title: "Web design",
                  image: "https://cdn.prod.website-files.com/68c1d32faae3f16628f1caa1/6917fb138b51b9bdb722a009_service-img-1.avif"
                },
                {
                  title: "Photography",
                  image: "https://cdn.prod.website-files.com/68c1d32faae3f16628f1caa1/6917fb45c4bc0481021b7e7a_service-img-2.avif"
                },
                {
                  title: "Branding",
                  image: "https://cdn.prod.website-files.com/68c1d32faae3f16628f1caa1/6917fc0c55ebb78e4a468fe6_service-img-3.avif"
                },
                {
                  title: "Develop",
                  image: "https://cdn.prod.website-files.com/68c1d32faae3f16628f1caa1/6917fc3d0e38b2018a72f5d3_service-img-4.avif"
                }
              ].map((service, index) => (
                <div 
                  key={index} 
                  className={`service-card animate-on-scroll-scale stagger-fast-${index + 1} group relative rounded-2xl shadow-lg`}
                >
                  <div className="relative h-96 overflow-hidden rounded-2xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                      draggable="false"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-3xl font-bold text-white mb-2">{service.title}</h3>
                    <div className="w-12 h-1 bg-white transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies - Staggered Cards */}
        <section ref={caseStudiesRef} className="py-20 bg-gray-50">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <p className="animate-on-scroll-fade stagger-1 text-sm font-semibold text-gray-500 tracking-wider mb-3 uppercase">
                03 / Case studies
              </p>
              <h2 className="animate-on-scroll-left stagger-2 webflow-heading text-4xl md:text-5xl lg:text-6xl text-gray-900 font-normal">
                Explore our proven success stories
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Website Redesign for Indromate Company",
                  subtitle: "Increased traffic by 120%",
                  image: "https://cdn.prod.website-files.com/68c1d32faae3f16628f1caa1/6917fe79f3c529f153a06d61_Case-Studies-img-1.avif"
                },
                {
                  title: "SEO & Digital Marketing for HomeStyle",
                  subtitle: "Increased client inquiries by 90%",
                  image: "https://cdn.prod.website-files.com/68c1d32faae3f16628f1caa1/6917feb9e68a344d90703d58_Case-Studies-img-2.avif"
                },
                {
                  title: "Time Management Strategies",
                  subtitle: "Crafted campaigns that convert",
                  image: "https://cdn.prod.website-files.com/68c1d32faae3f16628f1caa1/6917ff716163f9b04d5eb949_Case-Studies-img-3.avif"
                }
              ].map((study, index) => (
                <div 
                  key={index} 
                  className={`case-study-card animate-on-scroll-up stagger-${index + 2} bg-white rounded-2xl shadow-lg overflow-hidden`}
                >
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3 leading-tight">
                      {study.title}
                    </h3>
                    <p className="text-gray-600 text-lg">{study.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials - Staggered Cards */}
        <section ref={testimonialsRef} className="py-20 bg-white">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="animate-on-scroll-fade stagger-1 text-sm font-semibold text-gray-500 tracking-wider mb-3 uppercase">
                04 / Testimonials
              </p>
              <h2 className="animate-on-scroll-left stagger-2 webflow-heading text-4xl md:text-5xl lg:text-6xl text-gray-900 font-normal">
                Trusted by our clients
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  quote: "Working with this team was a game-changer. They turned our ideas into a website that perfectly reflects our brand.",
                  name: "Sarah Mitchell",
                  role: "Marketing Director",
                  image: "https://cdn.prod.website-files.com/68bfd5901895b58f0d2e6d33/69182a3eb549c5fb65f3102a_testi-4.avif"
                },
                {
                  quote: "Our traffic and engagement have skyrocketed since launching the new site. These guys know what they're doing!",
                  name: "David Khan",
                  role: "Founder of StyleNest",
                  image: "https://cdn.prod.website-files.com/68bfd5901895b58f0d2e6d33/69182a6c2c690da68c523eeb_testi-5.avif"
                },
                {
                  quote: "They didn't just design a website they built an online experience that helps us convert visitors into clients.",
                  name: "James Park",
                  role: "CEO at FintechX",
                  image: "https://cdn.prod.website-files.com/68bfd5901895b58f0d2e6d33/69182b367ef2d7a7ce7e916c_testi-6.avif"
                }
              ].map((testimonial, index) => (
                <div key={index} className={`animate-on-scroll-scale stagger-${index + 2} bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-500`}>
                  <div className="flex items-center space-x-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 text-lg leading-relaxed italic">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-gray-900 text-lg">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing - Staggered Cards with Parallax */}
        <section ref={pricingRef} className="relative py-20 bg-gray-50 overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-gray-200/40 to-gray-300/40 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-br from-gray-300/40 to-gray-200/40 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          
          <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="animate-on-scroll-fade stagger-1 text-sm font-semibold text-gray-500 tracking-wider mb-3 uppercase">
                05 / Pricing
              </p>
              <h2 className="animate-on-scroll-up stagger-2 webflow-heading text-4xl md:text-5xl lg:text-6xl text-gray-900 font-normal mb-4">
                Choose your perfect plan
              </h2>
              <p className="animate-on-scroll-fade stagger-3 webflow-text text-lg max-w-2xl mx-auto">
                Flexible pricing options designed to grow with your business
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Starter Package",
                  subtitle: "Best for solo founders",
                  price: "$899",
                  features: [
                    "1–2 Page Website Design",
                    "Mobile Responsive Design",
                    "Basic UI/UX Flow",
                    "1 Revision Round",
                    "Delivery in 5 Business Days"
                  ]
                },
                {
                  name: "Pro Package",
                  subtitle: "Best for growing businesses",
                  price: "$1,699",
                  features: [
                    "Up to 5 Pages",
                    "Full UI/UX Design",
                    "Responsive all devices",
                    "Design system",
                    "Delivery in 7–10 days"
                  ],
                  featured: true
                },
                {
                  name: "Ultimate Package",
                  subtitle: "Best for enterprises",
                  price: "$1,899",
                  features: [
                    "Unlimited Pages",
                    "Advanced UI/UX Design",
                    "Custom Features",
                    "Unlimited Revisions",
                    "Priority Support"
                  ]
                }
              ].map((plan, index) => (
                <div
                  key={index}
                  className={`animate-on-scroll-scale stagger-${index + 2} bg-white p-8 rounded-2xl shadow-lg transition-all duration-700 hover:shadow-2xl hover:-translate-y-3 ${
                    plan.featured ? "ring-2 ring-black md:scale-105 relative z-10" : ""
                  }`}
                >
                  {plan.featured && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-black text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                      Most Popular
                    </div>
                  )}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600">{plan.subtitle}</p>
                  </div>
                  <div className="mb-8 pb-8 border-b border-gray-200">
                    <p className="text-5xl font-bold text-gray-900">{plan.price}</p>
                    <p className="text-gray-600 mt-1">per project</p>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-700">
                        <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact">
                    <button
                      className={`w-full py-4 rounded-full font-semibold transition-all duration-500 transform hover:scale-105 ${
                        plan.featured
                          ? "bg-black hover:bg-gray-800 text-white shadow-lg hover:shadow-2xl"
                          : "bg-gray-100 hover:bg-gray-900 hover:text-white text-gray-900"
                      }`}
                    >
                      Get Started Today
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section - Staggered with Smooth Reveal */}
        <section ref={ctaRef} className="relative py-20 bg-white overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-gray-100/60 to-gray-200/60 rounded-full blur-3xl animate-float"></div>
          
          <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Left Content - Slides from Left */}
              <div className="space-y-8">
                <div>
                  <p className="animate-on-scroll-fade stagger-1 text-sm font-semibold text-gray-500 tracking-wider mb-3 uppercase">
                    06 / FAQ
                  </p>
                  <h2 className="animate-on-scroll-left stagger-2 webflow-heading text-4xl md:text-5xl lg:text-6xl text-gray-900 font-normal mb-6">
                    Common questions answered
                  </h2>
                  <p className="animate-on-scroll-left stagger-3 webflow-text text-lg">
                    Everything you need to know about our services and how we work
                  </p>
                </div>
                
                <div className="animate-on-scroll-left stagger-4 space-y-6">
                  {[
                    {
                      q: "How long does a typical project take?",
                      a: "Most projects are completed within 2-4 weeks, depending on complexity and scope."
                    },
                    {
                      q: "Do you offer ongoing support?",
                      a: "Yes, we provide 24/7 support and maintenance packages for all our clients."
                    },
                    {
                      q: "Can I request changes after launch?",
                      a: "Absolutely! We offer revision packages and can make updates as your business evolves."
                    }
                  ].map((faq, index) => (
                    <div key={index} className="bg-gray-50 p-6 rounded-2xl hover:bg-gray-100 transition-colors duration-300">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{faq.q}</h3>
                      <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Image - Slides from Right */}
              <div className="animate-on-scroll-right stagger-2 relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="https://cdn.prod.website-files.com/68bfd5901895b58f0d2e6d33/68c14e3b3be7f93cfe07eeda_81e8a0ed9b0cfc31bfd2ad7d64be4603_FAQ.avif"
                    alt="FAQ"
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-black text-white p-8 rounded-2xl shadow-2xl max-w-sm">
                  <p className="text-lg font-semibold mb-2">Still have questions?</p>
                  <p className="text-gray-300 mb-4">We're here to help you succeed</p>
                  <Link to="/contact">
                    <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 inline-flex items-center gap-2">
                      Contact Us
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Coordinated Animation with Parallax */}
        <section className="relative py-32 md:py-40 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden">
          {/* Animated Grid Pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItMnptMC0ydi0yaDJ2Mmgtem0tMiAyaC0ydjJoMnYtem0wLTJoMnYtMmgtMnYyem0tMiAwaC0ydjJoMnYtem0wIDBoMnYtMmgtMnYyem0wLTJ2LTJoLTJ2Mmgyem0yIDBWMzBoMnYyaC0yem0wIDBoLTJ2Mmgydi0yem0yIDB2Mmgydi0yaC0yem0wIDJ2Mmgydi0yaC0yem0yLTJ2LTJoMnYyaC0yem0wIDBoLTJ2Mmgydi0yem0wIDJoMnYyaC0ydi0yem0tMiAwdi0yaC0ydjJoMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>
          
          {/* Floating Gradient Orbs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
          
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="animate-on-scroll-scale stagger-1 inline-block mb-8 px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <p className="text-sm font-semibold text-white tracking-wider uppercase">
                Let's Build Something Amazing
              </p>
            </div>
            <h2 className="animate-on-scroll-up stagger-2 webflow-heading text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-8 font-normal leading-tight">
              Ready to Transform<br />Your Digital Presence?
            </h2>
            <p className="animate-on-scroll-up stagger-3 text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Let's discuss how we can help elevate your brand and drive measurable results with cutting-edge digital solutions
            </p>
            <div className="animate-on-scroll-up stagger-4 flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/contact">
                <button className="group bg-white hover:bg-gray-100 text-black px-12 py-5 rounded-full text-xl font-bold transition-all duration-500 shadow-2xl hover:shadow-white/20 hover:scale-110 inline-flex items-center gap-3">
                  Let's Talk
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                </button>
              </Link>
              <Link to="/services">
                <button className="px-12 py-5 rounded-full text-xl font-semibold border-2 border-white/30 hover:border-white text-white transition-all duration-500 hover:bg-white/10 hover:scale-105">
                  View Our Services
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
