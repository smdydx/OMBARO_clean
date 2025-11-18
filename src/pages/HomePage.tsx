
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
  
  const carouselRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLElement>(null);
  const caseStudiesRef = useRef<HTMLElement>(null);
  const testimonialsRef = useRef<HTMLElement>(null);
  const pricingRef = useRef<HTMLElement>(null);
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
    const sections = [
      heroRef.current,
      aboutRef.current,
      servicesRef.current,
      caseStudiesRef.current,
      testimonialsRef.current,
      pricingRef.current,
      ctaRef.current,
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("scroll-revealed");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );

    sections.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sections.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
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
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(1.2) translateY(-250px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(500px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scrollReveal {
          from {
            opacity: 0;
            transform: translateY(60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-scale-in {
          animation: scaleIn 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .animate-slide-in-right {
          animation: slideInRight 0.8s ease-out forwards;
        }

        section {
          opacity: 0;
          transform: translateY(60px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }

        section.scroll-revealed {
          opacity: 1;
          transform: translateY(0);
        }

        .hero-image {
          height: 50vw;
          max-height: 600px;
          min-height: 400px;
          will-change: transform;
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

        {/* Hero Section - Exact Webflow Style */}
        <section ref={heroRef} className="relative overflow-hidden bg-white py-12 md:py-20 lg:py-32">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            {/* Hero Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-12">
              {/* Left Text Content */}
              <div className="space-y-6 animate-fade-in-up">
                <h1 className="webflow-heading text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-gray-900 font-normal">
                  Empowering Business Growth
                </h1>
                <p className="webflow-text max-w-xl text-lg">
                  Our digital marketing solutions are designed to deliver measurable results and accelerate your online growth through innovative strategies.
                </p>
                <div className="flex gap-4 pt-4">
                  <Link to="/app">
                    <button className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-full text-base font-medium transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center gap-2">
                      Let's Talk
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </Link>
                </div>
              </div>

              {/* Right Image */}
              <div className="relative animate-scale-in">
                <div className="hero-image relative rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="https://cdn.prod.website-files.com/68bfd5901895b58f0d2e6d33/68c01353ba4fe52ebf9e1cd6_d899696bed5fc7d310c42da48c1b171f_IMG3.avif"
                    alt="Hero"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-gray-200 animate-slide-in-right">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">125+</h2>
                <p className="text-gray-600">Industries served</p>
              </div>
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">95%</h2>
                <p className="text-gray-600">Client retention</p>
              </div>
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">500+</h2>
                <p className="text-gray-600">Projects completed</p>
              </div>
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">24/7</h2>
                <p className="text-gray-600">Support available</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section - Exact Webflow Style */}
        <section ref={aboutRef} className="py-20 bg-gray-50">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div>
                  <p className="text-sm font-semibold text-gray-500 tracking-wider mb-3 uppercase">
                    01 / About
                  </p>
                  <h2 className="webflow-heading text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-6 font-normal">
                    Trusted by over 100 businesses worldwide
                  </h2>
                  <p className="webflow-text text-lg">
                    We believe in creating meaningful, lasting connections through digital innovation. Whether it's building your brand, optimizing your website, or driving traffic with cutting-edge marketing strategies.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-lg">
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
              <div>
                <img
                  src="https://cdn.prod.website-files.com/68bfd5901895b58f0d2e6d33/68c0fa82a5e8c587cb5976bd_2039ece10f2ad381c4a36262e21daef2_about-img.avif"
                  alt="About"
                  className="w-full rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section - Horizontal Scrolling Carousel */}
        <section ref={servicesRef} className="py-20 bg-white">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <p className="text-sm font-semibold text-gray-500 tracking-wider mb-3 uppercase">
                02 / Services
              </p>
              <h2 className="webflow-heading text-4xl md:text-5xl lg:text-6xl text-gray-900 font-normal">
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
                  className="service-card group relative rounded-2xl shadow-lg"
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

        {/* Case Studies - Exact Webflow Cards */}
        <section ref={caseStudiesRef} className="py-20 bg-gray-50">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <p className="text-sm font-semibold text-gray-500 tracking-wider mb-3 uppercase">
                03 / Case studies
              </p>
              <h2 className="webflow-heading text-4xl md:text-5xl lg:text-6xl text-gray-900 font-normal">
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
                  className="case-study-card bg-white rounded-2xl shadow-lg overflow-hidden"
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

        {/* Testimonials - Exact Webflow Style */}
        <section ref={testimonialsRef} className="py-20 bg-white">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold text-gray-500 tracking-wider mb-3 uppercase">
                04 / Testimonials
              </p>
              <h2 className="webflow-heading text-4xl md:text-5xl lg:text-6xl text-gray-900 font-normal">
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
                <div key={index} className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-500">
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

        {/* Pricing - Exact Webflow Cards */}
        <section ref={pricingRef} className="py-20 bg-gray-50">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold text-gray-500 tracking-wider mb-3 uppercase">
                05 / Pricing
              </p>
              <h2 className="webflow-heading text-4xl md:text-5xl lg:text-6xl text-gray-900 font-normal">
                Choose your perfect plan
              </h2>
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
                  className={`bg-white p-8 rounded-2xl shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
                    plan.featured ? "ring-2 ring-black scale-105 relative" : ""
                  }`}
                >
                  {plan.featured && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  )}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600">{plan.subtitle}</p>
                  </div>
                  <div className="mb-8">
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
                      className={`w-full py-4 rounded-full font-semibold transition-all duration-300 ${
                        plan.featured
                          ? "bg-black hover:bg-gray-800 text-white shadow-lg hover:shadow-xl"
                          : "bg-gray-100 hover:bg-gray-200 text-gray-900"
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

        {/* CTA Section - Enhanced Bold & Prominent */}
        <section ref={ctaRef} className="relative py-32 md:py-40 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItMnptMC0ydi0yaDJ2Mmgtem0tMiAyaC0ydjJoMnYtem0wLTJoMnYtMmgtMnYyem0tMiAwaC0ydjJoMnYtem0wIDBoMnYtMmgtMnYyem0wLTJ2LTJoLTJ2Mmgyem0yIDBWMzBoMnYyaC0yem0wIDBoLTJ2Mmgydi0yem0yIDB2Mmgydi0yaC0yem0wIDJ2Mmgydi0yaC0yem0yLTJ2LTJoMnYyaC0yem0wIDBoLTJ2Mmgydi0yem0wIDJoMnYyaC0ydi0yem0tMiAwdi0yaC0ydjJoMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-block mb-6 px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <p className="text-sm font-semibold text-white tracking-wider uppercase">
                Let's Build Something Amazing
              </p>
            </div>
            <h2 className="webflow-heading text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-8 font-normal leading-tight">
              Ready to Transform<br />Your Digital Presence?
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Let's discuss how we can help elevate your brand and drive measurable results with cutting-edge digital solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/contact">
                <button className="group bg-white hover:bg-gray-100 text-black px-12 py-5 rounded-full text-xl font-bold transition-all duration-300 shadow-2xl hover:shadow-white/20 hover:scale-105 inline-flex items-center gap-3">
                  Let's Talk
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link to="/services">
                <button className="px-12 py-5 rounded-full text-xl font-semibold border-2 border-white/30 hover:border-white text-white transition-all duration-300 hover:bg-white/10">
                  View Our Services
                </button>
              </Link>
            </div>
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-white/20">
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-bold mb-2">125+</p>
                <p className="text-gray-400 text-sm">Industries Served</p>
              </div>
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-bold mb-2">95%</p>
                <p className="text-gray-400 text-sm">Client Retention</p>
              </div>
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-bold mb-2">500+</p>
                <p className="text-gray-400 text-sm">Projects Done</p>
              </div>
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-bold mb-2">24/7</p>
                <p className="text-gray-400 text-sm">Support</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <MarketingFooter />
    </div>
  );
};
