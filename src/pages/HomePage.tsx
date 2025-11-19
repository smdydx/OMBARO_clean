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
  const [scrollY, setScrollY] = useState(0);
  const [countdown, setCountdown] = useState(5);

  const carouselRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLElement>(null);
  const whyChooseRef = useRef<HTMLElement>(null);
  const testimonialsRef = useRef<HTMLElement>(null);
  const faqRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLElement>(null);

  const heroImageRef = useRef<HTMLDivElement>(null);
  const aboutImageRef = useRef<HTMLImageElement>(null);
  const whyChooseImageRef = useRef<HTMLImageElement>(null);
  const testimonialsImageRef = useRef<HTMLDivElement>(null);
  const faqImageRef = useRef<HTMLImageElement>(null);

  const handleCloseBanner = () => {
    setIsClosing(true);
    setTimeout(() => {
      setShowTermsBanner(false);
      setIsClosing(false);
    }, 500);
  };

  useEffect(() => {
    if (!showTermsBanner) return;

    const countdownInterval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          handleCloseBanner();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, [showTermsBanner]);

  useEffect(() => {
    let ticking = false;
    let autoScrollInterval: NodeJS.Timeout | null = null;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          updateParallax();
          updateScrollAnimations();
          handleServiceCarouselAutoScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    const handleServiceCarouselAutoScroll = () => {
      // Auto-scroll disabled for better user control
      if (autoScrollInterval) {
        clearInterval(autoScrollInterval);
        autoScrollInterval = null;
      }
    };

    const updateParallax = () => {
      const scrollPos = window.scrollY;

      if (heroImageRef.current) {
        const parallaxOffset = scrollPos * 0.5;
        heroImageRef.current.style.transform = `translateY(${parallaxOffset}px)`;
      }

      const parallaxImages = [
        aboutImageRef.current,
        whyChooseImageRef.current,
        testimonialsImageRef.current,
        faqImageRef.current,
      ];

      parallaxImages.forEach((img) => {
        if (!img) return;
        const rect = img.getBoundingClientRect();
        const scrollProgress =
          (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
        if (scrollProgress > 0 && scrollProgress < 1) {
          const parallaxOffset = (scrollProgress - 0.5) * -100;
          img.style.transform = `translateY(${parallaxOffset}px)`;
        }
      });
    };

    const updateScrollAnimations = () => {
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
        const triggerPoint = windowHeight * 0.85;

        // Reveal section when entering viewport
        if (rect.top < triggerPoint && rect.bottom > 0) {
          if (!section.classList.contains("scroll-revealed")) {
            section.classList.add("scroll-revealed");
          }

          // Apply smooth scroll animations - text enters from left, images from top
          const textElements = section.querySelectorAll(
            ".animate-on-scroll-left, .animate-on-scroll-right",
          );
          textElements.forEach((el: Element) => {
            const htmlEl = el as HTMLElement;
            const elementRect = el.getBoundingClientRect();

            // Entry animation (from left when coming into view from bottom)
            if (elementRect.top < windowHeight && elementRect.bottom > 0) {
              const entryProgress = Math.min(
                1,
                Math.max(
                  0,
                  (windowHeight - elementRect.top) / (windowHeight * 0.8),
                ),
              );

              if (el.classList.contains("animate-on-scroll-left")) {
                const xOffset = Math.max(0, (1 - entryProgress) * 150);
                htmlEl.style.transform = `translateX(-${xOffset}px)`;
                htmlEl.style.opacity = Math.min(1, entryProgress).toString();
              } else if (el.classList.contains("animate-on-scroll-right")) {
                const yOffset = Math.max(0, (1 - entryProgress) * 100);
                htmlEl.style.transform = `translateY(-${yOffset}px)`;
                htmlEl.style.opacity = Math.min(1, entryProgress).toString();
              }
            }

            // Exit animation (to top when scrolling past)
            if (elementRect.top < 0) {
              const exitProgress = Math.min(
                1,
                Math.abs(elementRect.top) / (windowHeight * 0.5),
              );
              const yOffset = exitProgress * 80;
              htmlEl.style.transform = `translateY(-${yOffset}px)`;
              htmlEl.style.opacity = Math.max(
                0,
                1 - exitProgress * 1.2,
              ).toString();
            }
          });
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (autoScrollInterval) {
        clearInterval(autoScrollInterval);
      }
    };
  }, [isDragging]);

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
    <div className="min-h-screen bg-white overflow-x-hidden">
      <MarketingHeader />

      <style>{`
        @keyframes slideFromLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideFromRight {
          from {
            opacity: 0;
            transform: translateX(50px);
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

        @keyframes slideOutLeft {
          from {
            opacity: 1;
            transform: translateX(0);
          }
          to {
            opacity: 0;
            transform: translateX(-50px);
          }
        }

        @keyframes slideInFromBottom {
          from {
            opacity: 0;
            transform: translateY(50px);
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
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .hero-word-1 {
          animation: slideFromLeft 800ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
          animation-delay: 0ms;
          opacity: 0;
          will-change: transform, opacity;
        }

        .hero-word-2 {
          animation: slideFromLeft 800ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
          animation-delay: 150ms;
          opacity: 0;
          will-change: transform, opacity;
        }

        .hero-word-3 {
          animation: slideFromLeft 800ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
          animation-delay: 300ms;
          opacity: 0;
          will-change: transform, opacity;
        }

        .hero-subtitle {
          animation: slideFromLeft 800ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
          animation-delay: 450ms;
          opacity: 0;
          will-change: transform, opacity;
        }

        .hero-button {
          animation: fadeUp 800ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
          animation-delay: 600ms;
          opacity: 0;
          will-change: transform, opacity;
        }

        .hero-image-wrapper {
          animation: slideFromRight 900ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
          animation-delay: 200ms;
          opacity: 0;
          will-change: transform, opacity;
        }

        .hero-stat-1 {
          animation: fadeUp 700ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
          animation-delay: 750ms;
          opacity: 0;
          will-change: transform, opacity;
        }

        .hero-stat-2 {
          animation: fadeUp 700ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
          animation-delay: 850ms;
          opacity: 0;
          will-change: transform, opacity;
        }

        .hero-stat-3 {
          animation: fadeUp 700ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
          animation-delay: 950ms;
          opacity: 0;
          will-change: transform, opacity;
        }

        .hero-stat-4 {
          animation: fadeUp 700ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
          animation-delay: 1050ms;
          opacity: 0;
          will-change: transform, opacity;
        }

        section {
          opacity: 1;
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }

        section.scroll-revealed {
          opacity: 1;
        }

        .animate-on-scroll-left,
        .animate-on-scroll-right {
          opacity: 1;
          transition: transform 0.3s ease-out, opacity 0.3s ease-out;
        }

        section.scroll-revealed .animate-on-scroll-left {
          transition: transform 0.1s linear, opacity 0.3s ease-out;
          will-change: transform, opacity;
        }

        section.scroll-revealed .animate-on-scroll-up {
          animation: slideInFromBottom 800ms cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        section.scroll-revealed .animate-on-scroll-fade {
          animation: fadeIn 800ms cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        section.scroll-revealed .animate-on-scroll-scale {
          animation: scaleUp 800ms cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
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
        .stagger-2 { animation-delay: 150ms !important; }
        .stagger-3 { animation-delay: 300ms !important; }
        .stagger-4 { animation-delay: 450ms !important; }

        .stagger-fast-1 { animation-delay: 0ms !important; }
        .stagger-fast-2 { animation-delay: 100ms !important; }
        .stagger-fast-3 { animation-delay: 200ms !important; }
        .stagger-fast-4 { animation-delay: 300ms !important; }

        section.scroll-revealed {
          opacity: 1;
          transition: opacity 400ms ease-out;
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
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.5s;
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
          transform: translateY(-12px) scale(1.05);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
        }

        .service-card img {
          transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .service-card:hover img {
          transform: scale(1);
        }

        .parallax-image {
          will-change: transform;
          transition: transform 0.1s linear;
        }

        .footer-rounded-corners {
          border-top-left-radius: 30px;
          border-top-right-radius: 30px;
          border-bottom-left-radius: 30px;
          border-bottom-right-radius: 30px;
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
                  Please read our{" "}
                  <Link
                    to="/terms"
                    className="underline hover:text-emerald-300 transition-colors"
                  >
                    Terms & Conditions
                  </Link>{" "}
                  before booking
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs sm:text-sm text-white/80 font-medium">
                  {countdown}s
                </span>
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
        </div>

        {/* Hero Section */}
        <section
          ref={heroRef}
          className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-emerald-950 to-black py-8 sm:py-12 md:py-16 lg:py-20 scroll-revealed transition-all duration-700 ease-out"
        >
          <div className="absolute inset-0 overflow-hidden opacity-30">
            <svg
              className="absolute bottom-0 w-full h-48 sm:h-56 md:h-64"
              viewBox="0 0 1440 320"
              preserveAspectRatio="none"
            >
              <path
                fill="none"
                stroke="#047857"
                strokeWidth="3"
                d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,165.3C1248,171,1344,149,1392,138.7L1440,128"
              >
                <animate
                  attributeName="d"
                  dur="8s"
                  repeatCount="indefinite"
                  values="
                  M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,165.3C1248,171,1344,149,1392,138.7L1440,128;
                  M0,128L48,138.7C96,149,192,171,288,165.3C384,160,480,128,576,122.7C672,117,768,139,864,144C960,149,1056,139,1152,128C1248,117,1344,107,1392,101.3L1440,96;
                  M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,165.3C1248,171,1344,149,1392,138.7L1440,128"
                />
              </path>
            </svg>
          </div>

          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center mb-8 sm:mb-10">
              <div
                className="space-y-4 sm:space-y-6 w-full px-2 sm:px-0 transition-all duration-700 ease-out"
                style={{
                  opacity:
                    scrollY > 50 ? Math.max(0, 1 - (scrollY - 50) / 150) : 1,
                  transform: `translateY(${scrollY > 50 ? (scrollY - 50) * 0.4 : 0}px)`,
                }}
              >
                <h1
                  className="text-6xl sm:text-7xl md:text-6xl lg:text-6xl xl:text-[4rem] font-light leading-tight w-full text-white"
                  style={{ letterSpacing: "0.02em" }}
                >
                  RELAX & ENJOY
                </h1>

                <p className="hero-subtitle text-white/90 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-xl font-light">
                  Experience ultimate relaxation with our premium spa and
                  wellness services. Book your perfect moment of tranquility
                  today.
                </p>
                <div className="hero-button pt-2">
                  <Link to="/app">
                    <button className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full text-sm sm:text-base md:text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-emerald-500/50 inline-flex items-center gap-2">
                      Book Now
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                    </button>
                  </Link>
                </div>
              </div>

              <div
                className="hero-image-wrapper relative w-full px-4 sm:px-0 transition-all duration-500 ease-out"
                style={{
                  opacity:
                    scrollY > 50 ? Math.max(0.2, 1 - (scrollY - 50) / 200) : 1,
                  transform: `translateY(${scrollY > 50 ? Math.min((scrollY - 50) * 0.8, 300) : 0}px)`,
                }}
              >
                <div className="grid grid-cols-12 gap-3 sm:gap-4">
                  <div 
                    className="col-span-7 relative group transition-all duration-500 ease-out"
                    style={{
                      transform: `translateY(${scrollY > 50 ? Math.min((scrollY - 50) * 0.6, 200) : 0}px)`,
                      opacity: scrollY > 50 ? Math.max(0, 1 - (scrollY - 50) / 150) : 1,
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl sm:rounded-2xl md:rounded-3xl transform rotate-2 opacity-20 group-hover:rotate-3 group-hover:scale-105 transition-all duration-500"></div>
                    <img
                      src="/images/spa-treatment.jpg"
                      alt="Luxury Spa Treatment"
                      className="relative rounded-xl sm:rounded-2xl md:rounded-3xl shadow-2xl w-full h-52 sm:h-60 md:h-72 lg:h-80 xl:h-96 object-cover border-2 border-emerald-500/30 group-hover:scale-105 transition-transform duration-500"
                      loading="eager"
                    />
                  </div>
                  <div 
                    className="col-span-5 relative group transition-all duration-500 ease-out"
                    style={{
                      transform: `translateY(${scrollY > 50 ? Math.min((scrollY - 50) * 0.9, 250) : 0}px)`,
                      opacity: scrollY > 50 ? Math.max(0, 1 - (scrollY - 50) / 130) : 1,
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-green-700 rounded-xl sm:rounded-2xl md:rounded-3xl transform -rotate-1 opacity-15 group-hover:rotate-1 group-hover:scale-105 transition-all duration-500"></div>
                    <img
                      src="/images/massage-therapy.jpg"
                      alt="Professional Massage Therapy"
                      className="rounded-xl sm:rounded-2xl md:rounded-3xl shadow-xl w-full h-52 sm:h-60 md:h-72 lg:h-80 xl:h-96 object-cover border-2 border-emerald-500/20 group-hover:scale-105 transition-transform duration-500"
                      loading="eager"
                    />
                  </div>
                  <div 
                    className="col-span-5 relative group transition-all duration-500 ease-out"
                    style={{
                      transform: `translateY(${scrollY > 50 ? Math.min((scrollY - 50) * 1.0, 280) : 0}px)`,
                      opacity: scrollY > 50 ? Math.max(0, 1 - (scrollY - 50) / 120) : 1,
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 to-emerald-400 rounded-xl sm:rounded-2xl md:rounded-3xl transform rotate-1 opacity-15 group-hover:-rotate-1 group-hover:scale-105 transition-all duration-500"></div>
                    <img
                      src="/images/beauty-salon.jpg"
                      alt="Beauty Salon Services"
                      className="rounded-xl sm:rounded-2xl md:rounded-3xl shadow-xl w-full h-40 sm:h-48 md:h-56 lg:h-64 xl:h-72 object-cover border-2 border-emerald-500/20 group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div 
                    className="col-span-7 relative group transition-all duration-500 ease-out"
                    style={{
                      transform: `translateY(${scrollY > 50 ? Math.min((scrollY - 50) * 0.7, 220) : 0}px)`,
                      opacity: scrollY > 50 ? Math.max(0, 1 - (scrollY - 50) / 140) : 1,
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-600 rounded-xl sm:rounded-2xl md:rounded-3xl transform -rotate-2 opacity-20 group-hover:rotate-2 group-hover:scale-105 transition-all duration-500"></div>
                    <img
                      src="/images/sauna-couple.jpg"
                      alt="Premium Spa Experience"
                      className="rounded-xl sm:rounded-2xl md:rounded-3xl shadow-xl w-full h-40 sm:h-48 md:h-56 lg:h-64 xl:h-72 object-cover border-2 border-emerald-500/20 group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div
              className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8 pt-6 sm:pt-8 border-t border-emerald-500/30 transition-all duration-700 ease-out"
              style={{
                opacity:
                  scrollY > 50 ? Math.max(0, 1 - (scrollY - 50) / 150) : 1,
                transform: `translateY(${scrollY > 50 ? (scrollY - 50) * 0.6 : 0}px)`,
              }}
            >
              <div className="hero-stat-1 text-center px-2">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-300 mb-1 sm:mb-2">
                  10,000+
                </h2>
                <p className="text-white/80 text-xs sm:text-sm md:text-base">
                  Verified Professionals
                </p>
              </div>
              <div className="hero-stat-2 text-center px-2">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-300 mb-1 sm:mb-2">
                  50+
                </h2>
                <p className="text-white/80 text-xs sm:text-sm md:text-base">
                  Cities Covered
                </p>
              </div>
              <div className="hero-stat-3 text-center px-2">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-300 mb-1 sm:mb-2">
                  1M+
                </h2>
                <p className="text-white/80 text-xs sm:text-sm md:text-base">
                  Happy Customers
                </p>
              </div>
              <div className="hero-stat-4 text-center px-2">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-300 mb-1 sm:mb-2">
                  24/7
                </h2>
                <p className="text-white/80 text-xs sm:text-sm md:text-base">
                  Customer Support
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          ref={aboutRef}
          className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-b from-black via-gray-900 to-emerald-950 overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-24 sm:h-32 opacity-30">
            <svg
              viewBox="0 0 1440 320"
              className="w-full h-full"
              preserveAspectRatio="none"
            >
              <path
                fill="none"
                stroke="#10b981"
                strokeWidth="3"
                d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,165.3C1248,171,1344,149,1392,138.7L1440,128"
              >
                <animate
                  attributeName="d"
                  dur="10s"
                  repeatCount="indefinite"
                  values="
                  M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,165.3C1248,171,1344,149,1392,138.7L1440,128;
                  M0,128L48,138.7C96,149,192,171,288,165.3C384,160,480,128,576,122.7C672,117,768,139,864,144C960,149,1056,139,1152,128C1248,117,1344,107,1392,101.3L1440,96;
                  M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,165.3C1248,171,1344,149,1392,138.7L1440,128"
                />
              </path>
            </svg>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
              <div className="space-y-6 sm:space-y-8 lg:space-y-10">
                <div>
                  <p className="animate-on-scroll-fade stagger-1 text-xs sm:text-sm font-semibold text-emerald-400 tracking-wider mb-2 sm:mb-3 uppercase">
                    About Us
                  </p>
                  <h2 className="animate-on-scroll-left stagger-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white mb-4 sm:mb-6 font-normal">
                    Your Wellness Partner, At Your Doorstep
                  </h2>
                  <p className="animate-on-scroll-left stagger-3 text-white/90 text-sm sm:text-base md:text-md lg:text-md xl:text-xl leading-relaxed">
                    Ombaro delivers professional spa and salon services wherever
                    you need them. With certified therapists and experienced
                    beauty experts, we guarantee quality, hygiene, and comfort.
                    From relaxing massages to premium facials, everything is
                    taken care of..
                  </p>
                </div>
                <div className="animate-on-scroll-left stagger-4 bg-gradient-to-br from-emerald-900/40 to-green-900/40 backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl border border-emerald-500/30 shadow-2xl shadow-emerald-500/20">
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <img
                      src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=200&q=80"
                      alt="Customer"
                      className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full object-cover border-2 border-emerald-400"
                    />
                    <div>
                      <p className="font-semibold text-white text-sm sm:text-base lg:text-lg">
                        Priya Sharma
                      </p>
                      <p className="text-xs sm:text-sm text-emerald-300">
                        Regular Customer
                      </p>
                    </div>
                  </div>
                  <p className="text-white/80 leading-relaxed italic text-sm sm:text-base lg:text-lg">
                    "Ombaro has made my life so easy! Professional therapists,
                    great service, and the convenience of home service is
                    unbeatable."
                  </p>
                </div>
              </div>

              <div className="animate-on-scroll-right stagger-2 relative w-full">
                <div
                  className="relative rounded-2xl sm:rounded-3xl overflow-hidden"
                  style={{
                    clipPath:
                      "polygon(0% 0%, 85% 0%, 100% 15%, 100% 100%, 0% 100%)",
                  }}
                >
                  <div
                    className="absolute inset-0 rounded-2xl sm:rounded-3xl border-8 sm:border-12 md:border-16 border-white shadow-2xl z-10 pointer-events-none"
                    style={{
                      clipPath:
                        "polygon(0% 0%, 85% 0%, 100% 15%, 100% 100%, 0% 100%)",
                    }}
                  ></div>
                  <div
                    className="absolute top-0 right-0 w-32 sm:w-40 md:w-48 h-32 sm:h-40 md:h-48 border-t-8 sm:border-t-12 md:border-t-16 border-r-8 sm:border-r-12 md:border-r-16 border-white z-20 pointer-events-none"
                    style={{
                      clipPath: "polygon(85% 0%, 100% 0%, 100% 15%)",
                    }}
                  ></div>
                  <div className="absolute -inset-2 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-emerald-500/30 to-green-500/30 blur-xl z-0"></div>

                  <img
                    ref={aboutImageRef}
                    src="/images/massage-therapy.jpg"
                    alt="Professional Massage Therapy"
                    className="relative w-full rounded-2xl sm:rounded-3xl shadow-2xl parallax-image z-5"
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
          <div className="absolute bottom-0 left-0 w-full h-32 sm:h-40 md:h-48 opacity-20">
            <svg
              viewBox="0 0 1440 320"
              className="w-full h-full"
              preserveAspectRatio="none"
            >
              <path
                fill="none"
                stroke="#10b981"
                strokeWidth="2"
                d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128"
              >
                <animate
                  attributeName="d"
                  dur="12s"
                  repeatCount="indefinite"
                  values="
                  M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128;
                  M0,160L48,170.7C96,181,192,203,288,213.3C384,224,480,224,576,213.3C672,203,768,181,864,186.7C960,192,1056,224,1152,213.3C1248,203,1344,149,1392,122.7L1440,96;
                  M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128"
                />
              </path>
            </svg>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8 sm:mb-10 lg:mb-12">
              <p className="animate-on-scroll-fade stagger-1 text-xs sm:text-sm font-semibold text-emerald-400 tracking-wider mb-2 sm:mb-3 uppercase">
                Our Services
              </p>
              <h2 className="animate-on-scroll-left stagger-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-normal">
                Luxury Wellness Services, Anytime. Anywhere.
              </h2>
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
                  title: "Spa Massage",
                  image:
                    "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80",
                  link: "/spa-massage",
                },
                {
                  title: "Beauty Salon",
                  image:
                    "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80",
                  link: "/beauty-salon",
                },
                {
                  title: "Bridal Makeup",
                  image:
                    "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=80",
                  link: "/bridal-makeup",
                },
                {
                  title: "Hair Styling",
                  image:
                    "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&q=80",
                  link: "/services",
                },
              ].map((service, index) => (
                <Link key={index} to={service.link}>
                  <div
                    className={`service-card animate-on-scroll-scale stagger-fast-${index + 1} group relative rounded-xl sm:rounded-2xl`}
                  >
                    <div className="absolute -inset-1 rounded-xl sm:rounded-2xl bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-500 opacity-75 blur-lg group-hover:opacity-100 transition duration-500"></div>
                    <div className="absolute inset-0 rounded-xl sm:rounded-2xl border-2 border-emerald-400 shadow-2xl shadow-emerald-500/50 z-10 pointer-events-none group-hover:border-green-300 transition duration-500"></div>

                    <div className="relative h-80 sm:h-88 md:h-96 overflow-hidden rounded-xl sm:rounded-2xl">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                        draggable="false"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6">
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
                        {service.title}
                      </h3>
                      <div className="flex items-center justify-between">
                        <div className="w-12 sm:w-14 md:w-16 h-1 bg-gradient-to-r from-emerald-400 to-green-300 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 shadow-lg shadow-emerald-500/50"></div>
                        <span className="text-emerald-400 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          Learn More →
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section
          ref={whyChooseRef}
          className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-b from-black via-gray-900 to-emerald-950 overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-24 sm:h-32 opacity-30">
            <svg
              viewBox="0 0 1440 320"
              className="w-full h-full"
              preserveAspectRatio="none"
            >
              <path
                fill="none"
                stroke="#10b981"
                strokeWidth="3"
                d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,165.3C1248,171,1344,149,1392,138.7L1440,128"
              >
                <animate
                  attributeName="d"
                  dur="10s"
                  repeatCount="indefinite"
                  values="
                  M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,165.3C1248,171,1344,149,1392,138.7L1440,128;
                  M0,128L48,138.7C96,149,192,171,288,165.3C384,160,480,128,576,122.7C672,117,768,139,864,144C960,149,1056,139,1152,128C1248,117,1344,107,1392,101.3L1440,96;
                  M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,165.3C1248,171,1344,149,1392,138.7L1440,128"
                />
              </path>
            </svg>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
              <div className="animate-on-scroll-left stagger-1 relative order-2 lg:order-1 w-full">
                <div
                  className="relative h-64 sm:h-72 md:h-80 lg:h-96 rounded-2xl sm:rounded-3xl overflow-hidden"
                  style={{
                    clipPath:
                      "polygon(0% 0%, 85% 0%, 100% 15%, 100% 100%, 0% 100%)",
                  }}
                >
                  <div
                    className="absolute inset-0 rounded-2xl sm:rounded-3xl border-4 sm:border-6 border-white shadow-2xl z-10 pointer-events-none"
                    style={{
                      clipPath:
                        "polygon(0% 0%, 85% 0%, 100% 15%, 100% 100%, 0% 100%)",
                    }}
                  ></div>

                  <img
                    ref={whyChooseImageRef}
                    src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=1200&q=80"
                    alt="Professional Spa Service"
                    className="relative w-full h-full object-cover rounded-2xl sm:rounded-3xl shadow-2xl parallax-image z-5"
                  />
                </div>
              </div>

              <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
                <div>
                  <p className="animate-on-scroll-fade stagger-1 text-xs sm:text-sm font-semibold text-emerald-400 tracking-wider mb-2 sm:mb-3 uppercase">
                    Why Choose Us
                  </p>
                  <h2 className="animate-on-scroll-right stagger-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-4 sm:mb-6 font-normal">
                    What Makes Ombaro Different
                  </h2>
                </div>
                <div className="space-y-3 sm:space-4">
                  {[
                    {
                      title: "Verified Professionals",
                      desc: "Background-checked therapists and beauticians",
                    },
                    {
                      title: "Transparent Pricing",
                      desc: "No hidden charges, fixed prices",
                    },
                    {
                      title: "100% Hygiene",
                      desc: "Sanitized equipment and products",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className={`animate-on-scroll-right stagger-${index + 3} bg-gradient-to-br from-emerald-900/40 to-green-900/40 backdrop-blur-sm p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl border border-emerald-500/30`}
                    >
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-emerald-500 to-green-500 rounded-full flex items-center justify-center">
                          <Check className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-1">
                            {item.title}
                          </h3>
                          <p className="text-xs sm:text-sm md:text-base text-white/80">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section
          ref={testimonialsRef}
          className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-b from-emerald-950 via-gray-900 to-black overflow-hidden"
        >
          <div className="absolute bottom-0 left-0 w-full h-32 sm:h-40 md:h-48 opacity-20">
            <svg
              viewBox="0 0 1440 320"
              className="w-full h-full"
              preserveAspectRatio="none"
            >
              <path
                fill="none"
                stroke="#10b981"
                strokeWidth="2"
                d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128"
              >
                <animate
                  attributeName="d"
                  dur="12s"
                  repeatCount="indefinite"
                  values="
                  M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128;
                  M0,160L48,170.7C96,181,192,203,288,213.3C384,224,480,224,576,213.3C672,203,768,181,864,186.7C960,192,1056,224,1152,213.3C1248,203,1344,149,1392,122.7L1440,96;
                  M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128"
                />
              </path>
            </svg>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-10 lg:mb-12">
              <p className="animate-on-scroll-fade stagger-1 text-xs sm:text-sm font-semibold text-emerald-400 tracking-wider mb-2 sm:mb-3 uppercase">
                What Our Customers Say
              </p>
              <h2 className="animate-on-scroll-left stagger-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-normal">
                Loved by Thousands Across India
              </h2>
            </div>

            <div className="flex overflow-x-auto gap-4 sm:gap-6 pb-4 snap-x snap-mandatory scrollbar-hide">
              {[
                {
                  quote:
                    "The convenience of booking spa services at home is incredible! Professional service, verified therapists, and great prices. Ombaro has become my go-to for all wellness needs.",
                  name: "Priya Sharma",
                  role: "Mumbai",
                  image:
                    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
                },
                {
                  quote:
                    "I love how easy it is to compare different salons and their services. The reviews helped me choose the perfect makeup artist for my wedding. Highly recommend Ombaro!",
                  name: "Rahul Verma",
                  role: "Delhi",
                  image:
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
                },
                {
                  quote:
                    "As a working professional, Ombaro saves me so much time. I can book appointments at my convenience and get quality services at home. The platform is easy to use and reliable.",
                  name: "Anjali Patel",
                  role: "Bangalore",
                  image:
                    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-80 sm:w-96 snap-start bg-gradient-to-br from-emerald-900/40 to-green-900/40 backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl border border-emerald-500/30 shadow-2xl shadow-emerald-500/20"
                >
                  <div className="flex items-center space-x-1 mb-3 sm:mb-4 md:mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <p className="text-white/90 mb-4 sm:mb-5 md:mb-6 text-sm sm:text-base lg:text-lg leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-3 sm:gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full object-cover border-2 border-emerald-400"
                    />
                    <div>
                      <p className="font-semibold text-white text-sm sm:text-base lg:text-lg">
                        {testimonial.name}
                      </p>
                      <p className="text-xs sm:text-sm text-emerald-300">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
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
          <div className="absolute bottom-0 left-0 w-full h-32 sm:h-40 md:h-48 opacity-20">
            <svg
              viewBox="0 0 1440 320"
              className="w-full h-full"
              preserveAspectRatio="none"
            >
              <path
                fill="none"
                stroke="#10b981"
                strokeWidth="2"
                d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128"
              >
                <animate
                  attributeName="d"
                  dur="12s"
                  repeatCount="indefinite"
                  values="
                  M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128;
                  M0,160L48,170.7C96,181,192,203,288,213.3C384,224,480,224,576,213.3C672,203,768,181,864,186.7C960,192,1056,224,1152,213.3C1248,203,1344,149,1392,122.7L1440,96;
                  M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128"
                />
              </path>
            </svg>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-start">
              <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                <div>
                  <p className="animate-on-scroll-fade stagger-1 text-xs sm:text-sm font-semibold text-emerald-400 tracking-wider mb-2 sm:mb-3 uppercase">
                    FAQ
                  </p>
                  <h2 className="animate-on-scroll-left stagger-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-normal mb-3 sm:mb-4 md:mb-6">
                    Common questions answered
                  </h2>
                  <p className="animate-on-scroll-left stagger-3 text-sm sm:text-base lg:text-lg text-white/80">
                    Everything you need to know about our spa services
                  </p>
                </div>

                <div className="animate-on-scroll-left stagger-4 space-y-3 sm:space-y-4 md:space-y-6">
                  {[
                    {
                      q: "How do I book a spa service?",
                      a: "Simply click the 'Book Now' button, select your service, choose date & time, and confirm.",
                    },
                    {
                      q: "Are your therapists certified?",
                      a: "Yes, all our therapists are certified, background-verified professionals with years of experience.",
                    },
                    {
                      q: "What if I need to reschedule?",
                      a: "You can reschedule up to 2 hours before your appointment free of charge.",
                    },
                  ].map((faq, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-emerald-900/40 to-green-900/40 backdrop-blur-sm p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl border border-emerald-500/30 hover:border-emerald-400 transition-colors duration-300"
                    >
                      <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-2 sm:mb-3">
                        {faq.q}
                      </h3>
                      <p className="text-xs sm:text-sm md:text-base text-white/80 leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="animate-on-scroll-right stagger-2 relative w-full">
                <div
                  className="relative rounded-2xl sm:rounded-3xl overflow-hidden"
                  style={{
                    clipPath:
                      "polygon(0% 0%, 85% 0%, 100% 15%, 100% 100%, 0% 100%)",
                  }}
                >
                  <div
                    className="absolute inset-0 rounded-2xl sm:rounded-3xl border-8 sm:border-12 md:border-16 border-white shadow-2xl z-10 pointer-events-none"
                    style={{
                      clipPath:
                        "polygon(0% 0%, 85% 0%, 100% 15%, 100% 100%, 0% 100%)",
                    }}
                  ></div>
                  <div
                    className="absolute top-0 right-0 w-32 sm:w-40 md:w-48 h-32 sm:h-40 md:h-48 border-t-8 sm:border-t-12 md:border-t-16 border-r-8 sm:border-r-12 md:border-r-16 border-white z-20 pointer-events-none"
                    style={{
                      clipPath: "polygon(85% 0%, 100% 0%, 100% 15%)",
                    }}
                  ></div>
                  <div className="absolute -inset-2 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-emerald-500/30 to-green-500/30 blur-xl z-0"></div>

                  <img
                    ref={faqImageRef}
                    src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1200&q=80"
                    alt="Spa FAQ"
                    className="relative w-full h-auto rounded-2xl sm:rounded-3xl parallax-image z-5"
                  />
                </div>
                <div className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 bg-gradient-to-r from-emerald-500 to-green-500 text-white p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-2xl max-w-xs sm:max-w-sm">
                  <p className="text-sm sm:text-base md:text-lg font-semibold mb-1 sm:mb-2">
                    Still have questions?
                  </p>
                  <p className="text-xs sm:text-sm text-white/90 mb-2 sm:mb-3 md:mb-4">
                    We're here to help you
                  </p>
                  <Link to="/contact">
                    <button className="bg-white text-emerald-600 px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 inline-flex items-center gap-2 text-xs sm:text-sm md:text-base">
                      Contact Us
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          ref={ctaRef}
          className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden scroll-revealed"
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItMnptMC0ydi0yaDJ2Mmgtem0tMiAyaC0ydjJoMnYtem0wLTJoMnYtMmgtMnYyem0tMiAwaC0ydjJoMnYtem0wIDBoMnYtMmgtMnYyem0wLTJ2LTJoLTJ2Mmgyem0yIDBWMzBoMnYyaC0yem0wIDBoLTJ2Mmgydi0yem0yIDBWMzBoMnYyMmg0VjMwaC0yem0wIDJoMnYyaC0ydi0yem0yLTJoLTJ2Mmgydi0yaC0yem0wIDJoMnYyaC0ydi0yem01LTJoLTV2MmgydjBnMTJINjJWMzBoLTV6TTM2IDM0djItMnptMC0ydi0yaDJ2Mmgtem0tMiAyaC0ydjJoMnYtem0wLTJoMnYtMmgtMnYyem0tMiAwaC0ydjJoMnYtem0wIDBoMnYtMmgtMnYyem0wLTJ2LTJoLTJ2Mmgyem0yIDBWMzBoMnYyaC0yem0wIDBoLTJ2Mmgydi0yem0yIDBWMzBoMnYyMmg0VjMwaC0yem0wIDJoLTJ2Mmgydi0yem0yLTJoLTJ2Mmgydi0yaC0yem0wIDJoLTJ2Mmgydi0yem01LTJoLTV2MmgydjBnMTJINjJWMzBoLTV6TTM2IDM0djItMnptMC0ydi0yaDJ2Mmgtem0tMiAyaC0ydjJoMnYtem0wLTJoMnYtMmgtMnYyem0tMiAwaC0ydjJoMnYtem0wIDBoMnYtMmgtMnYyem0wLTJ2LTJoLTJ2Mmgyem0yIDBWMzBoMnYyaC0yem0wIDBoLTJ2Mmgydi0yem0yIDBWMzBoMnYyMmg0VjMwaC0yem0wIDJoLTJ2Mmgydi0yem0yLTJoLTJ2Mmgydi0yaC0yem0wIDJoLTJ2Mmgydi0yem01LTJoLTV2MmgydjBnMTJINjJWMzBoLTV6TTM2IDM0djItMnptMC0ydi0yaDJ2Mmgtem0tMiAyaC0ydjJoMnYtem0wLTJoMnYtMmgtMnYyem0tMiAwaC0ydjJoMnYtem0wIDBoMnYtMmgtMnYyem0wLTJ2LTJoLTJ2Mmgyem0yIDBWMzBoMnYyaC0yem0wIDBoLTJ2Mmgydi0yem0yIDBWMzBoMnYyMmg0VjMwaC0yem0wIDJoLTJ2Mmgydi0yem0yLTJoLTJ2Mmgydi0yaC0yem0wIDJoLTJ2Mmgydi0yem01LTJoLTV2MmgydjBnMTJINjJWMzBoLTV6TTM2IDM0djItMnptMC0ydi0yaDJ2Mmgtem0tMiAyaC0ydjJoMnYtem0wLTJoMnYtMmgtMnYyem0tMiAwaC0ydjJoMnYtem0wIDBoMnYtMmgtMnYyem0wLTJ2LTJoLTJ2Mmgyem0yIDBWMzBoMnYyaC0yem0wIDBoLTJ2Mmgydi0yem0yIDBWMzBoMnYyMmg0VjMwaC0yem0wIDJoLTJ2Mmgydi0yem0yLTJoLTJ2Mmgydi0yaC0yem0wIDJoLTJ2Mmgydi0yem01LTJoLTV2MmgydjBnMTJINjJWMzBoLTV6TTM2IDM0djItMnptMC0ydi0yaDJ2Mmgtem0tMiAyaC0ydjJoMnYtem0wLTJoMnYtMmgtMnYyem0tMiAwaC0ydjJoMnYtem0wIDBoMnYtMmgtMnYyem0wLTJ2LTJoLTJ2Mmgyem0yIDBWMzBoMnYyaC0yem0wIDBoLTJ2Mmgydi0yem0yIDBWMzBoMnYyMmg0VjMwaC0yem0wIDJoLTJ2Mmgydi0yem0yLTJoLTJ2Mmgydi0yaC0yem0wIDJoLTJ2Mmgydi0yem01LTJoLTV2MmgydjBnMTJINjJWMzBoLTV6TTM2IDM0djItMnptMC0ydi0yaDJ2Mmgtem0tMiAyaC0ydjJoMnYtem0wLTJoMnYtMmgtMnYyem0tMiAwaC0ydjJoMnYtem0wIDBoMnYtMmgtMnYyem0wLTJ2LTJoLTJ2Mmgyem0yIDBWMzBoMnYyaC0yem0wIDBoLTJ2Mmgydi0yem0yIDBWMzBoMnYyMmg0VjMwaC0yem0wIDJoLTJ2Mmgydi0yem0yLTJoLTJ2Mmgydi0yaC0yem0wIDJoLTJ2Mmgydi0yem01LTJoLTV2MmgydjBnMTJINjJWMzBoLTV6TTM2IDM0djItMnptMC0ydi0yaDJ2Mmgtem0tMiAyaC0ydjJoMnYtem0wLTJoMnYtMmgtMnYyem0tMiAwaC0ydjJoMnYtem0wIDBoMnYtMmgtMnYyem0wLTJ2LTJoLTJ2Mmgyem0yIDBWMzBoMnYyaC0yem0wIDBoLTJ2Mmgydi0yem0yIDBWMzBoMnYyMmg0VjMwaC0yem0wIDJoLTJ2Mmgydi0yem0yLTJoLTJ2Mmgydi0yaC0yem0wIDJoLTJ2Mmgydi0yZW0gZmlsbC11vcGFjaXR5PSIwLjA3Ij48cGF0aCBkPSJNNDguNTg2IDM1LjM3M0wyOC4wODIgMTQuODcgMTguODY4IDE0LjM4N2wtMjMuMTA0IDE5LjYxMi0uMzY4IDUuMzI2IDE5LjAyNSAwLjE1Ny0xOS4zOTEgMTkuNTQzIDUuMTAzLjI1IDIwLjI2Ny0xOS44NzEgMi44MjQtMS44NXptLjU4NSAzLjUwNy0yLjQzNyA1LjMxMiAxOS45NzMgMS4wMTIgNy4wOTQtMjAuNTc1LTE1LjQ2My03LjQuMjIyIDMuNzE3IDE3LjMxNC0xMC43NTUiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>

          <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 sm:w-60 md:w-72 h-48 sm:h-60 md:h-96 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-3xl animate-float"></div>
          <div
            className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-3xl animate-float"
            style={{ animationDelay: "3s" }}
          ></div>

          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="animate-on-scroll-scale stagger-1 inline-block mb-4 sm:mb-6 md:mb-8 px-4 sm:px-6 py-1.5 sm:py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <p className="text-xs sm:text-sm font-semibold text-white tracking-wider uppercase">
                Experience Luxury at Home
              </p>
            </div>
            <h2 className="animate-on-scroll-up stagger-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl mb-4 sm:mb-6 md:mb-8 font-normal leading-tight text-white">
              Ready to Relax
              <br />& Rejuvenate?
            </h2>
            <p className="animate-on-scroll-up stagger-3 text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed">
              Book your first session today and discover why thousands of
              Indians trust Ombaro for their wellness needs
            </p>
            <div className="animate-on-scroll-up stagger-4 flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center items-center">
              <Link to="/app">
                <button className="group bg-white hover:bg-gray-100 text-black px-8 sm:px-10 md:px-12 py-3 sm:py-4 md:py-5 rounded-full text-base sm:text-lg md:text-xl font-bold transition-all duration-500 shadow-2xl hover:shadow-white/20 hover:scale-110 inline-flex items-center gap-2 sm:gap-3">
                  Book Your Service
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform duration-300" />
                </button>
              </Link>
              <Link to="/services">
                <button className="px-8 sm:px-10 md:px-12 py-3 sm:py-4 md:py-5 rounded-full text-base sm:text-lg md:text-xl font-semibold border-2 border-white/30 hover:border-white text-white transition-all duration-500 hover:bg-white/10 hover:scale-105">
                  Explore Services
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <MarketingFooter className="footer-rounded-corners" />
    </div>
  );
};
