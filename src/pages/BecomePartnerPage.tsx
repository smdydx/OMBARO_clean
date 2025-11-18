import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Wallet,
  Shield,
  Star,
  Phone,
  ChevronDown,
  ChevronUp,
  Crown,
  Sparkles,
  Users,
  BarChart3,
  MapPin,
  Award,
  CheckCircle2,
  Building2,
  BadgeCheck,
  Zap,
  Briefcase,
} from "lucide-react";
import { Button } from "../components/ui/Button";
import { MarketingHeader } from "../components/marketing/MarketingHeader";
import { MarketingFooter } from "../components/marketing/MarketingFooter";

export const BecomePartnerPage: React.FC = () => {
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);
  const [scrollY, setScrollY] = React.useState(0);

  const heroRef = React.useRef<HTMLElement>(null);
  const whyTraditionalRef = React.useRef<HTMLElement>(null);
  const businessTypesRef = React.useRef<HTMLElement>(null);
  const showcaseRef = React.useRef<HTMLElement>(null);
  const benefitsRef = React.useRef<HTMLElement>(null);
  const processRef = React.useRef<HTMLElement>(null);
  const storiesRef = React.useRef<HTMLElement>(null);
  const requirementsRef = React.useRef<HTMLElement>(null);
  const faqRef = React.useRef<HTMLElement>(null);
  const ctaRef = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          updateScrollAnimations();
          ticking = false;
        });
        ticking = true;
      }
    };

    const updateScrollAnimations = () => {
      const sections = [
        heroRef.current,
        whyTraditionalRef.current,
        businessTypesRef.current,
        showcaseRef.current,
        benefitsRef.current,
        processRef.current,
        storiesRef.current,
        requirementsRef.current,
        faqRef.current,
        ctaRef.current,
      ];

      sections.forEach((section) => {
        if (!section) return;

        const rect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const triggerPoint = windowHeight * 0.85;

        if (rect.top < triggerPoint && rect.bottom > 0) {
          if (!section.classList.contains("scroll-revealed")) {
            section.classList.add("scroll-revealed");
          }

          const textElements = section.querySelectorAll(
            ".animate-on-scroll-left, .animate-on-scroll-right",
          );
          textElements.forEach((el: Element) => {
            const htmlEl = el as HTMLElement;
            const elementRect = el.getBoundingClientRect();
            const elementScrollProgress = Math.min(
              1,
              Math.max(0, (windowHeight - elementRect.top) / windowHeight),
            );
            const offset = (1 - elementScrollProgress) * 20;

            if (el.classList.contains("animate-on-scroll-left")) {
              htmlEl.style.transform = `translateX(${Math.max(0, offset)}px)`;
              htmlEl.style.opacity = Math.min(
                1,
                elementScrollProgress + 0.3,
              ).toString();
            } else if (el.classList.contains("animate-on-scroll-right")) {
              htmlEl.style.transform = `translateX(-${Math.max(0, offset)}px)`;
              htmlEl.style.opacity = Math.min(
                1,
                elementScrollProgress + 0.3,
              ).toString();
            }
          });
        }

        if (rect.top < windowHeight * 0.2 && rect.bottom > windowHeight * 0.8) {
          const textElements = section.querySelectorAll(
            ".animate-on-scroll-left, .animate-on-scroll-right",
          );
          textElements.forEach((el: Element) => {
            const htmlEl = el as HTMLElement;
            htmlEl.style.transform = "translateX(0)";
            htmlEl.style.opacity = "1";
          });
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const businessTypes = [
    {
      title: "Spa & Massage",
      subtitle: "Full-service spa with massage therapy",
      description:
        "Transform your spa into a thriving wellness destination. Reach customers who actively search for premium massage and spa services.",
      features: [
        "Therapist assignment",
        "Service packages",
        "Membership management",
      ],
      image: "/images/luxury_spa_treatment_ef5ecb59.jpg",
    },
    {
      title: "Beauty Salon",
      subtitle: "Hair, makeup, and beauty services",
      description:
        "Elevate your salon business with smart booking tools. Connect with beauty enthusiasts looking for expert styling and grooming.",
      features: ["Stylist scheduling", "Service catalog", "Product inventory"],
      image: "/images/professional_beauty__6992f974.jpg",
    },
    {
      title: "Wellness Center",
      subtitle: "Holistic wellness and therapy center",
      description:
        "Expand your wellness practice with our comprehensive platform. Attract health-conscious clients seeking holistic healing.",
      features: [
        "Class scheduling",
        "Membership plans",
        "Instructor management",
      ],
      image: "/images/premium_wellness_spa_05199f74.jpg",
    },
    {
      title: "Home Service",
      subtitle: "Mobile spa and salon services",
      description:
        "Grow your on-demand beauty business. Tap into the booming market of customers who prefer professional services at home.",
      features: ["GPS tracking", "Travel charges", "Service radius"],
      image: "/images/spa_massage_therapy__22ac4be9.jpg",
    },
    {
      title: "Hotel Spa",
      subtitle: "Luxury hotel spa facilities",
      description:
        "Enhance your hotel spa bookings. Attract both hotel guests and external customers seeking premium spa experiences.",
      features: ["Guest integration", "Package deals", "Multi-service booking"],
      image: "/images/luxury_spa_reception_05371daf.jpg",
    },
    {
      title: "Gym & Fitness",
      subtitle: "Fitness center with wellness services",
      description:
        "Boost your gym membership and wellness services. Connect with fitness enthusiasts looking for comprehensive health solutions.",
      features: ["Class scheduling", "Personal training", "Wellness packages"],
      image: "/images/spa_treatment_room_i_609c3288.jpg",
    },
    {
      title: "Yoga & Meditation",
      subtitle: "Yoga studio and meditation center",
      description:
        "Scale your yoga practice digitally. Reach seekers of inner peace and wellness through our growing community of mindful customers.",
      features: ["Class management", "Workshop booking", "Retreat planning"],
      image: "/images/spa_treatment_room_i_79626365.jpg",
    },
    {
      title: "Ayurveda Center",
      subtitle: "Traditional Ayurvedic treatments",
      description:
        "Bring ancient healing to modern customers. Connect with clients seeking authentic Ayurvedic wellness and traditional therapies.",
      features: [
        "Consultation booking",
        "Treatment packages",
        "Herbal products",
      ],
      image: "/images/elegant_spa_interior_b93a48aa.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <MarketingHeader />

      <main className="">
        {/* Premium Hero Section */}
        <section
          ref={heroRef}
          className="relative min-h-[450px] sm:min-h-[550px] md:min-h-[600px] lg:min-h-[75vh] flex items-center overflow-hidden bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 scroll-revealed"
        >
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-0 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-gradient-to-br from-green-300 to-emerald-400 rounded-full blur-3xl opacity-30 animate-pulse"></div>
            <div
              className="absolute bottom-0 right-0 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-gradient-to-br from-teal-300 to-green-400 rounded-full blur-3xl opacity-30 animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-gradient-to-br from-emerald-200 to-green-300 rounded-full blur-3xl opacity-20 animate-pulse"
              style={{ animationDelay: "2s" }}
            ></div>
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgxNiwgMTg1LCAxMjksIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 w-full py-6 sm:py-8 md:py-10 lg:py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
              {/* Left Content */}
              <div className="order-2 lg:order-1 text-center lg:text-left">
                <div className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 rounded-full px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 mb-4 sm:mb-5 md:mb-6 lg:mb-8 shadow-2xl shadow-green-500/50 animate-pulse">
                  <Crown className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white animate-bounce" />
                  <span className="text-white text-xs sm:text-sm md:text-base font-bold tracking-wider uppercase">
                    0% Commission for 1st Month
                  </span>
                </div>

                {/* Success Metrics */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-5 md:mb-6">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg sm:rounded-xl px-3 sm:px-4 py-1.5 sm:py-2 shadow-lg border-2 border-green-200">
                    <div className="text-green-600 font-bold text-xs sm:text-sm whitespace-nowrap">
                      500+ Partners
                    </div>
                  </div>
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg sm:rounded-xl px-3 sm:px-4 py-1.5 sm:py-2 shadow-lg border-2 border-green-200">
                    <div className="text-green-600 font-bold text-xs sm:text-sm whitespace-nowrap">
                      50K+ Bookings
                    </div>
                  </div>
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg sm:rounded-xl px-3 sm:px-4 py-1.5 sm:py-2 shadow-lg border-2 border-green-200">
                    <div className="text-green-600 font-bold text-xs sm:text-sm whitespace-nowrap">
                      25+ Cities
                    </div>
                  </div>
                </div>

                <h1
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light mb-3 sm:mb-4 md:mb-5 lg:mb-6 leading-tight text-gray-900"
                  style={{ fontFamily: "'Tenor Sans', serif" }}
                >
                  Partner with
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 animate-gradient">
                    OMBARO
                  </span>
                </h1>

                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 md:mb-5 text-green-600">
                  at 0% commission for 1st month!
                </h2>

                <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-5 sm:mb-6 md:mb-7 lg:mb-8 text-gray-700 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Join thousands of successful wellness businesses growing their
                  revenue by{" "}
                  <span className="text-green-600 font-bold">3X</span> with more
                  customers than traditional methods.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8 justify-center lg:justify-start">
                  <Link to="/app" className="w-full sm:w-auto group">
                    <Button
                      size="lg"
                      className="w-full sm:w-auto bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 hover:from-green-600 hover:via-emerald-600 hover:to-teal-600 text-white shadow-2xl shadow-green-500/50 text-base sm:text-lg md:text-xl px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 md:py-5 lg:py-6 rounded-full transform hover:scale-105 transition-all duration-300 font-bold relative overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center justify-center">
                        Get Started
                        <ArrowRight className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 ml-2 group-hover:translate-x-1 transition-transform" />
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                    </Button>
                  </Link>
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto border-2 sm:border-3 border-green-600 text-green-700 bg-white hover:bg-green-600 hover:text-white text-base sm:text-lg md:text-xl px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 lg:py-6 rounded-full font-bold shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                  >
                    See How It Works
                  </Button>
                </div>
              </div>

              {/* Right Content - Image Collage */}
              <div className="relative order-1 lg:order-2 px-4 sm:px-0">
                <div className="grid grid-cols-12 gap-3 sm:gap-4">
                  <div className="col-span-7 relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-600 rounded-xl sm:rounded-2xl md:rounded-3xl transform rotate-2 opacity-20 group-hover:rotate-3 group-hover:scale-105 transition-all duration-500"></div>
                    <img
                      src="/images/luxury_spa_treatment_ef5ecb59.jpg"
                      alt="Luxury Spa Treatment"
                      className="relative rounded-xl sm:rounded-2xl md:rounded-3xl shadow-2xl w-full h-52 sm:h-60 md:h-72 lg:h-80 xl:h-96 object-cover border-2 border-green-500/30 group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="col-span-5 relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-green-700 rounded-xl sm:rounded-2xl md:rounded-3xl transform -rotate-1 opacity-15 group-hover:rotate-1 group-hover:scale-105 transition-all duration-500"></div>
                    <img
                      src="/images/professional_beauty__6992f974.jpg"
                      alt="Beauty Services"
                      className="rounded-xl sm:rounded-2xl md:rounded-3xl shadow-xl w-full h-52 sm:h-60 md:h-72 lg:h-80 xl:h-96 object-cover border-2 border-green-500/20 group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="col-span-5 relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-green-400 rounded-xl sm:rounded-2xl md:rounded-3xl transform rotate-1 opacity-15 group-hover:-rotate-1 group-hover:scale-105 transition-all duration-500"></div>
                    <img
                      src="/images/spa_massage_therapy__22ac4be9.jpg"
                      alt="Massage Therapy"
                      className="rounded-xl sm:rounded-2xl md:rounded-3xl shadow-xl w-full h-40 sm:h-48 md:h-56 lg:h-64 xl:h-72 object-cover border-2 border-green-500/20 group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="col-span-7 relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-600 rounded-xl sm:rounded-2xl md:rounded-3xl transform -rotate-2 opacity-20 group-hover:rotate-2 group-hover:scale-105 transition-all duration-500"></div>
                    <img
                      src="/images/elegant_spa_interior_b93a48aa.jpg"
                      alt="Spa Interior"
                      className="rounded-xl sm:rounded-2xl md:rounded-3xl shadow-xl w-full h-40 sm:h-48 md:h-56 lg:h-64 xl:h-72 object-cover border-2 border-green-500/20 group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Traditional Methods Limit Growth */}
        <section
          ref={whyTraditionalRef}
          className="py-12 sm:py-16 md:py-20 bg-white"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 sm:mb-12 md:mb-16">
              <h2
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-4 sm:mb-6"
                style={{ fontFamily: "'Tenor Sans', serif" }}
              >
                Why Traditional Methods{" "}
                <span className="text-green-600 font-normal">Limit Growth</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
                Break Free from Traditional Limitations
              </p>
              <p className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto mt-4">
                Stop relying only on walk-ins and word-of-mouth. Our aggregator
                platform brings you qualified customers actively searching for
                your services.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Traditional Way */}
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-6 sm:p-8 border-2 border-red-200 shadow-xl">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 text-red-700 flex items-center">
                  <span className="mr-2">❌</span> Traditional Way
                </h3>
                <p className="text-sm font-semibold text-red-600 mb-4">
                  Limited & Slow Growth
                </p>
                <div className="space-y-3">
                  {[
                    "Limited to walk-in customers only",
                    "Manual booking management & phone calls",
                    "Difficult to track revenue & performance",
                    "Empty slots during off-peak hours",
                    "No customer data or insights",
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start space-x-2 text-gray-700"
                    >
                      <span className="text-red-500 font-bold">✕</span>
                      <span className="text-sm sm:text-base">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* With OMBARO */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-6 sm:p-8 border-2 border-green-300 shadow-xl">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 text-green-700 flex items-center">
                  <span className="mr-2">✓</span> With OMBARO
                </h3>
                <p className="text-sm font-semibold text-green-600 mb-4">
                  Exponential Growth
                </p>
                <div className="space-y-3">
                  {[
                    "50,000+ customers actively searching monthly",
                    "100% automated booking & payment system",
                    "Real-time analytics & revenue dashboard",
                    "Fill 90% of available time slots",
                    "Customer preferences & behavior insights",
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start space-x-2 text-gray-800"
                    >
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base font-medium">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 bg-white/70 rounded-2xl p-4 text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-green-600">
                    3X
                  </div>
                  <div className="text-sm font-semibold text-gray-700">
                    Average Revenue Increase
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-10">
              <Link to="/app">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700 text-base sm:text-lg px-8 sm:px-12 py-4 sm:py-6 rounded-full shadow-xl font-bold transform hover:scale-105 transition-all"
                >
                  Start Growing Today - 0% Commission for 1st Month
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Perfect For All Business Types */}
        <section
          ref={businessTypesRef}
          className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-green-50"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 sm:mb-12 md:mb-16">
              <h2
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-4 sm:mb-6"
                style={{ fontFamily: "'Tenor Sans', serif" }}
              >
                Perfect For{" "}
                <span className="text-green-600 font-normal">
                  All Business Types
                </span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
                Whatever Your Business, We've Got You Covered
              </p>
              <p className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto mt-4">
                From traditional spas to modern fitness centers, OMBARO empowers
                every wellness business to reach more customers and maximize
                revenue.
              </p>
            </div>

            <div className="flex overflow-x-auto gap-4 sm:gap-5 md:gap-6 pb-4 snap-x snap-mandatory scrollbar-hide lg:grid lg:grid-cols-3 xl:grid-cols-4 lg:overflow-visible">
              {businessTypes.map((business, idx) => (
                <div
                  key={idx}
                  className={`animate-on-scroll-left stagger-${(idx % 4) + 1} group bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-green-200 hover:border-green-400 transform hover:-translate-y-2 flex-shrink-0 w-80 sm:w-96 snap-start lg:w-auto`}
                >
                  <div className="relative h-40 sm:h-44 md:h-48 overflow-hidden">
                    <img
                      src={business.image}
                      alt={business.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <h3 className="text-base sm:text-lg md:text-xl font-bold mb-0.5 text-white leading-tight">
                        {business.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-green-200">
                        {business.subtitle}
                      </p>
                    </div>
                  </div>
                  <div className="p-4 sm:p-5 md:p-6">
                    <p className="text-xs sm:text-sm text-gray-700 mb-3 sm:mb-4 leading-relaxed line-clamp-3">
                      {business.description}
                    </p>
                    <div className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-5">
                      {business.features.map((feature, i) => (
                        <div
                          key={i}
                          className="flex items-start space-x-2 text-xs sm:text-sm text-gray-600"
                        >
                          <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Link to="/app">
                      <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-full py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm font-semibold shadow-lg">
                        Get Started
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 sm:p-12 border-2 border-green-200">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                Don't see your business type?
              </h3>
              <p className="text-base sm:text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
                We welcome all beauty and wellness professionals! Contact us to
                discuss how we can help grow your specific business.
              </p>
              <Link to="/app">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-full py-3 font-semibold shadow-lg"
                >
                  Register Your Business Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Infinite Scrolling Image Showcase */}
        <section
          ref={showcaseRef}
          className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-green-50 overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
            <div className="text-center">
              <h2
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-4"
                style={{ fontFamily: "'Tenor Sans', serif" }}
              >
                Our{" "}
                <span className="text-green-600 font-normal">
                  Partner Network
                </span>
              </h2>
              <p className="text-base sm:text-lg text-gray-700">
                Trusted by thousands of wellness professionals across India
              </p>
            </div>
          </div>

          {/* Infinite Scroll Container */}
          <div className="relative">
            <div className="flex overflow-hidden">
              <div className="flex animate-scroll-left gap-4 sm:gap-6">
                {[...Array(3)].map((_, setIdx) => (
                  <React.Fragment key={setIdx}>
                    {[
                      "/images/luxury_spa_treatment_ef5ecb59.jpg",
                      "/images/professional_beauty__6992f974.jpg",
                      "/images/premium_wellness_spa_05199f74.jpg",
                      "/images/spa_massage_therapy__22ac4be9.jpg",
                      "/images/elegant_spa_interior_b93a48aa.jpg",
                      "/images/spa_treatment_room_i_609c3288.jpg",
                    ].map((img, idx) => (
                      <div key={`${setIdx}-${idx}`} className="relative group flex-shrink-0">
                        <div className="w-64 h-40 sm:w-80 sm:h-52 rounded-2xl overflow-hidden shadow-xl border-2 border-green-200 group-hover:border-green-400 transition-all duration-300">
                          <img
                            src={img}
                            alt="Partner Showcase"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                        </div>
                      </div>
                    ))}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Platform Benefits - Modern Transaction Cards */}
        <section
          ref={benefitsRef}
          className="py-12 sm:py-16 md:py-20 bg-white relative overflow-hidden"
        >
          {/* Background Effects */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-green-200/20 to-emerald-300/20 rounded-full blur-3xl opacity-40 animate-pulse"></div>
            <div
              className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-teal-200/20 to-green-300/20 rounded-full blur-3xl opacity-30 animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 sm:mb-12 md:mb-16">
              <h2
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-4 sm:mb-6"
                style={{ fontFamily: "'Tenor Sans', serif" }}
              >
                Platform{" "}
                <span className="text-green-600 font-normal">Benefits</span>
              </h2>
              <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-600 mx-auto mb-4 sm:mb-6"></div>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
                Everything You Need to Succeed
              </p>
              <p className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto mt-4">
                Our comprehensive platform provides all the tools and support
                you need to manage and grow your beauty business successfully.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
              {[
                {
                  icon: TrendingUp,
                  title: "Increase Your Revenue",
                  description:
                    "Get access to thousands of customers actively searching for beauty and wellness services.",
                  stat: "+40%",
                  statLabel: "Avg. Increase",
                  gradient: "from-green-500 to-emerald-600",
                },
                {
                  icon: Sparkles,
                  title: "Smart Booking",
                  description:
                    "Automated scheduling, real-time availability updates, and instant confirmations.",
                  stat: "100%",
                  statLabel: "Automated",
                  gradient: "from-emerald-500 to-teal-600",
                },
                {
                  icon: Wallet,
                  title: "Secure Payments",
                  description:
                    "Get paid instantly with our secure payment gateway and financial management tools.",
                  stat: "24-48h",
                  statLabel: "Settlement",
                  gradient: "from-teal-500 to-green-600",
                },
                {
                  icon: BarChart3,
                  title: "Business Analytics",
                  description:
                    "Powerful insights into your business performance with real-time dashboards.",
                  stat: "Real-time",
                  statLabel: "Data",
                  gradient: "from-green-500 to-emerald-600",
                },
                {
                  icon: Users,
                  title: "CRM Tools",
                  description:
                    "Build lasting relationships with integrated customer management tools.",
                  stat: "360°",
                  statLabel: "View",
                  gradient: "from-emerald-500 to-teal-600",
                },
                {
                  icon: Shield,
                  title: "Trust & Safety",
                  description:
                    "Verified reviews, secure transactions, and platform protection for your business.",
                  stat: "100%",
                  statLabel: "Secure",
                  gradient: "from-teal-500 to-green-600",
                },
                {
                  icon: Zap,
                  title: "Marketing Support",
                  description:
                    "Get featured in our app and run promotional campaigns to reach new customers.",
                  stat: "50K+",
                  statLabel: "Monthly Reach",
                  gradient: "from-green-500 to-emerald-600",
                },
                {
                  icon: MapPin,
                  title: "Multi-Location",
                  description:
                    "Manage multiple branches or locations from a single powerful dashboard.",
                  stat: "Unlimited",
                  statLabel: "Locations",
                  gradient: "from-emerald-500 to-teal-600",
                },
              ].map((benefit, idx) => (
                <div
                  key={idx}
                  className={`animate-on-scroll-left stagger-${(idx % 4) + 1} group relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-green-400 transform hover:-translate-y-2 overflow-hidden`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  ></div>

                  <div className="relative flex items-center gap-3 mb-3">
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${benefit.gradient} rounded-lg flex items-center justify-center shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 flex-shrink-0`}
                    >
                      <benefit.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 group-hover:text-green-600 transition-colors leading-tight">
                      {benefit.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-3 sm:mb-4 line-clamp-3">
                    {benefit.description}
                  </p>

                  <div className="flex items-center justify-between bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-2.5 sm:p-3 border border-green-200">
                    <div>
                      <div
                        className={`text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r ${benefit.gradient} bg-clip-text text-transparent`}
                      >
                        {benefit.stat}
                      </div>
                      <div className="text-xs text-gray-600">
                        {benefit.statLabel}
                      </div>
                    </div>
                    <div
                      className={`w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br ${benefit.gradient} rounded-lg flex items-center justify-center opacity-20 group-hover:opacity-100 transition-opacity`}
                    >
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Simple 4-Step Process */}
        <section
          ref={processRef}
          className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-green-50 to-emerald-50"
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 sm:mb-12 md:mb-16">
              <h2
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-4 sm:mb-6 text-gray-900"
                style={{ fontFamily: "'Tenor Sans', serif" }}
              >
                Simple{" "}
                <span className="text-green-600 font-normal">
                  4-Step Process
                </span>
              </h2>
              <div className="w-16 sm:w-20 md:w-24 h-1 bg-green-600 mx-auto mb-4 sm:mb-6"></div>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-2">
                How to Get Started
              </p>
              <p className="text-sm sm:text-base text-gray-600">
                Join OMBARO in just 4 simple steps and start growing your
                business today. The entire process takes less than 48 hours from
                registration to going live.
              </p>
            </div>

            <div className="space-y-8 sm:space-y-10 md:space-y-12">
              {[
                {
                  step: "01",
                  title: "Register Your Business",
                  description:
                    "Fill out a simple online form with your business details, contact information, and services offered. Takes just 10 minutes to complete.",
                  items: [
                    "Business information",
                    "Contact details",
                    "Service offerings",
                    "Business documents",
                  ],
                },
                {
                  step: "02",
                  title: "Verification & Approval",
                  description:
                    "Our team reviews your application within 24-48 hours. We verify your credentials, documents, and business authenticity.",
                  items: [
                    "Document verification",
                    "Quality standards check",
                    "Background verification",
                    "Approval notification",
                  ],
                },
                {
                  step: "03",
                  title: "Setup Your Profile",
                  description:
                    "Complete your vendor profile with photos, services, pricing, and availability. Our team helps you create an attractive listing.",
                  items: [
                    "Upload photos",
                    "Add services & pricing",
                    "Set availability",
                    "Configure settings",
                  ],
                },
                {
                  step: "04",
                  title: "Start Receiving Bookings",
                  description:
                    "Go live and start accepting bookings instantly. Manage appointments, track earnings, and grow your business with our tools.",
                  items: [
                    "Accept bookings",
                    "Manage calendar",
                    "Track revenue",
                    "Analyze performance",
                  ],
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6 md:space-x-8 bg-white p-4 sm:p-5 md:p-6 shadow-lg border-2 border-green-500/30 rounded-2xl sm:rounded-3xl"
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-gradient-to-br from-green-400 to-green-600 text-white rounded-full flex items-center justify-center shadow-2xl">
                      <span className="text-2xl sm:text-3xl font-bold">
                        {item.step}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 text-gray-900">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                      {item.description}
                    </p>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {item.items.map((subItem, i) => (
                        <div
                          key={i}
                          className="flex items-center space-x-2 text-sm text-gray-600"
                        >
                          <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                          <span>{subItem}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12 sm:mt-14 md:mt-16">
              <Link to="/app">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700 text-base sm:text-lg md:text-xl px-10 sm:px-12 md:px-16 py-5 sm:py-6 md:py-7 rounded-full shadow-2xl font-bold transform hover:scale-105 transition-all"
                >
                  Start Your Registration
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                </Button>
              </Link>
              <p className="text-gray-600 text-xs sm:text-sm mt-3 sm:mt-4">
                Get approved in 24-48 hours • No hidden fees • Free to join
              </p>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section ref={storiesRef} className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 sm:mb-12 md:mb-16">
              <h2
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-4 sm:mb-6"
                style={{ fontFamily: "'Tenor Sans', serif" }}
              >
                Success{" "}
                <span className="text-green-600 font-normal">Stories</span>
              </h2>
              <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-600 mx-auto mb-4 sm:mb-6"></div>
              <p className="text-base sm:text-lg md:text-xl text-gray-700">
                Real Results from Real Partners
              </p>
              <p className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto mt-4">
                See how OMBARO has helped beauty businesses grow their revenue,
                increase bookings, and achieve their business goals.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  quote:
                    "OMBARO transformed our spa business completely. We have seen a 45% increase in bookings and our revenue has doubled in just 6 months. The platform is easy to use and customer support is excellent.",
                  name: "Meera Kapoor",
                  business: "Serenity Spa, Mumbai",
                  stats: { bookings: "+45%", revenue: "2x", rating: "4.8/5" },
                },
                {
                  quote:
                    "As a salon owner, managing appointments was always a headache. OMBARO made everything so simple. Now I can focus on providing great service while the platform handles all bookings and payments.",
                  name: "Rajesh Sharma",
                  business: "Glamour Salon, Delhi",
                  stats: { bookings: "+60%", revenue: "1.8x", rating: "4.9/5" },
                },
                {
                  quote:
                    "Being a freelance bridal makeup artist, I was struggling to get consistent bookings. OMBARO gave me access to hundreds of brides looking for professional makeup services. My calendar is now fully booked!",
                  name: "Priya Deshmukh",
                  business: "Bridal Makeup Artist, Pune",
                  stats: { bookings: "+80%", revenue: "2.5x", rating: "5.0/5" },
                },
              ].map((story, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-white to-green-50 p-6 sm:p-8 shadow-xl border-2 border-green-200 hover:border-green-400 transition-all hover:shadow-2xl rounded-3xl"
                >
                  <div className="flex items-center mb-4 sm:mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 italic leading-relaxed">
                    "{story.quote}"
                  </p>

                  <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-white/70 rounded-2xl">
                    <div className="text-center">
                      <div className="text-lg sm:text-xl font-bold text-green-600">
                        {story.stats.bookings}
                      </div>
                      <div className="text-xs text-gray-600">Bookings</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg sm:text-xl font-bold text-green-600">
                        {story.stats.revenue}
                      </div>
                      <div className="text-xs text-gray-600">Revenue</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg sm:text-xl font-bold text-green-600">
                        {story.stats.rating}
                      </div>
                      <div className="text-xs text-gray-600">Rating</div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-green-200">
                    <div className="font-bold text-gray-900 text-base sm:text-lg">
                      {story.name}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600">
                      {story.business}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link to="/app">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700 text-base sm:text-lg px-8 sm:px-12 py-4 sm:py-6 rounded-full shadow-xl font-bold"
                >
                  Join Our Success Stories
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Requirements & Eligibility */}
        <section
          ref={requirementsRef}
          className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-green-50"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 sm:mb-12 md:mb-16">
              <h2
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-4 sm:mb-6"
                style={{ fontFamily: "'Tenor Sans', serif" }}
              >
                Requirements &{" "}
                <span className="text-green-600 font-normal">Eligibility</span>
              </h2>
              <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-600 mx-auto mb-4 sm:mb-6"></div>
              <p className="text-base sm:text-lg md:text-xl text-gray-700">
                What You Need to Get Started
              </p>
              <p className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto mt-4">
                Simple requirements to ensure quality and trust for all our
                customers.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
              {[
                {
                  icon: Building2,
                  title: "Business Registration",
                  items: [
                    "Valid business license or registration",
                    "GST registration (for applicable businesses)",
                    "PAN card of business/proprietor",
                    "Address proof of business location",
                  ],
                },
                {
                  icon: BadgeCheck,
                  title: "Professional Credentials",
                  items: [
                    "Minimum 1 year experience in beauty/wellness industry",
                    "Relevant certifications or training certificates",
                    "Portfolio of previous work (if applicable)",
                    "Professional liability insurance (recommended)",
                  ],
                },
                {
                  icon: Briefcase,
                  title: "Infrastructure & Facilities",
                  items: [
                    "Clean and hygienic workspace",
                    "Quality equipment and products",
                    "Adequate staff for service delivery",
                    "Safety and sanitation protocols in place",
                  ],
                },
                {
                  icon: Award,
                  title: "Quality Standards",
                  items: [
                    "Commitment to service excellence",
                    "Professional conduct and ethics",
                    "Customer satisfaction focus",
                    "Compliance with health and safety regulations",
                  ],
                },
              ].map((requirement, idx) => (
                <div
                  key={idx}
                  className={`animate-on-scroll-left stagger-${(idx % 4) + 1} bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:p-6 shadow-lg border-2 border-green-200 hover:border-green-400 transition-all hover:shadow-2xl`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                      <requirement.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 leading-tight">
                      {requirement.title}
                    </h3>
                  </div>
                  <div className="space-y-2 sm:space-y-2.5">
                    {requirement.items.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-start space-x-2 text-xs sm:text-sm text-gray-700"
                      >
                        <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="line-clamp-2">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ - Modern Horizontal Scroll Layout */}
        <section
          ref={faqRef}
          className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-green-50 to-white overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-10">
              <h2
                className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-3"
                style={{ fontFamily: "'Tenor Sans', serif" }}
              >
                Frequently Asked{" "}
                <span className="text-green-600 font-normal">Questions</span>
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-green-500 to-emerald-600 mx-auto mb-3"></div>
              <p className="text-sm sm:text-base text-gray-600">
                Everything you need to know about partnering with OMBARO
              </p>
            </div>

            {/* Horizontal Scrollable FAQ Cards */}
            <div className="relative">
              <div
                className="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory scrollbar-hide"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {[
                  {
                    q: "How long does the registration process take?",
                    a: "The registration process is quick and simple. After you submit your application with all required documents, our team reviews it within 24-48 hours. Once approved, you can immediately start setting up your profile and go live to accept bookings.",
                  },
                  {
                    q: "What commission does OMBARO charge?",
                    a: "We offer 0% commission for your first month as a welcome offer! After that, our commission structure is competitive and transparent, typically ranging from 15-25% depending on your service category and booking volume. Higher volume partners enjoy lower commission rates.",
                  },
                  {
                    q: "When do I receive payments?",
                    a: "Payments are processed quickly and securely. You receive payments within 24-48 hours after service completion directly to your registered bank account. We offer weekly settlements to ensure smooth cash flow for your business.",
                  },
                  {
                    q: "Can I manage multiple locations?",
                    a: "Yes! Our platform supports multi-location management. You can manage multiple branches or outlets from a single dashboard, making it perfect for growing businesses with franchises or multiple locations across different cities.",
                  },
                  {
                    q: "What kind of support do partners receive?",
                    a: "We provide comprehensive support including: 24/7 customer service, dedicated account manager, technical assistance, marketing support, training resources, and business growth consultation. Our success team is always ready to help you grow.",
                  },
                  {
                    q: "Can I set my own service prices?",
                    a: "Absolutely! You have complete control over your service pricing. Set your rates based on your expertise, market positioning, and business strategy. We provide market insights to help you price competitively while maximizing your revenue.",
                  },
                  {
                    q: "How do I handle cancellations?",
                    a: "Our platform has a clear cancellation policy that protects both partners and customers. You can set your own cancellation terms. The system automatically handles cancellations, refunds, and rescheduling according to your policy settings.",
                  },
                  {
                    q: "What if there is a dispute with a customer?",
                    a: "We have a dedicated dispute resolution team that mediates fairly between partners and customers. Our platform protection ensures you're not unfairly penalized. We review each case individually and work towards amicable solutions.",
                  },
                  {
                    q: "Do I need technical knowledge to use the platform?",
                    a: "Not at all! Our platform is designed to be user-friendly and intuitive. We provide complete onboarding training, video tutorials, and step-by-step guides. Our support team is always available to help you navigate any technical aspects.",
                  },
                  {
                    q: "Can I offer special promotions and discounts?",
                    a: "Yes! You can create and manage your own promotional campaigns, special offers, seasonal discounts, and loyalty programs. Our marketing tools help you attract new customers and retain existing ones through targeted promotions.",
                  },
                ].map((faq, idx) => (
                  <div
                    key={idx}
                    className="flex-shrink-0 w-80 sm:w-96 snap-start"
                  >
                    <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-xl border-2 border-green-200 hover:border-green-400 transition-all h-full hover:shadow-2xl transform hover:-translate-y-1 duration-300">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-base sm:text-lg font-bold text-gray-900 pr-2 leading-tight">
                          {faq.q}
                        </h3>
                        <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold text-sm">
                            {idx + 1}
                          </span>
                        </div>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Scroll Indicator */}
              <div className="text-center mt-4">
                <p className="text-xs text-gray-500 flex items-center justify-center gap-2">
                  <span>←</span>
                  <span>Scroll to see more</span>
                  <span>→</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section
          ref={ctaRef}
          className="relative py-16 sm:py-20 md:py-24 lg:py-28 bg-gradient-to-br from-green-400 via-emerald-500 to-teal-600 text-white overflow-hidden"
        >
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-64 sm:w-96 md:w-[500px] h-64 sm:h-96 md:h-[500px] bg-white/20 rounded-full blur-3xl animate-pulse"></div>
            <div
              className="absolute bottom-0 right-0 w-64 sm:w-96 md:w-[500px] h-64 sm:h-96 md:h-[500px] bg-white/20 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-yellow-300/10 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "2s" }}
            ></div>
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>
          </div>

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-md rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8 border-2 border-white/30">
              <Crown className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-300 animate-bounce" />
              <span className="text-sm sm:text-base font-bold tracking-wide">
                LIMITED TIME OFFER
              </span>
            </div>

            <h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight"
              style={{ fontFamily: "'Tenor Sans', serif" }}
            >
              Ready to Transform
              <br className="hidden sm:block" />
              <span className="text-yellow-300 drop-shadow-2xl">
                Your Business?
              </span>
            </h2>

            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-8 sm:mb-10 text-white font-semibold drop-shadow-lg">
              Join thousands of successful beauty professionals who have already
              grown their business with OMBARO
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-8 sm:mb-10">
              <Link to="/app" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-white text-green-600 hover:bg-gray-100 text-base sm:text-lg md:text-xl px-10 sm:px-12 md:px-16 py-5 sm:py-6 md:py-7 rounded-full shadow-2xl font-bold transform hover:scale-105 transition-all"
                >
                  Start Your Journey Today
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 ml-2" />
                </Button>
              </Link>
              <a href="tel:+919876543210" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-2 sm:border-3 border-white text-white hover:bg-white/10 text-base sm:text-lg md:text-xl px-8 sm:px-10 md:px-12 py-5 sm:py-6 md:py-7 rounded-full backdrop-blur-sm"
                >
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
                  Call Now
                </Button>
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 text-xs sm:text-sm font-medium">
              <div className="flex items-center space-x-1.5 sm:space-x-2">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>0% Commission 1st Month</span>
              </div>
              <div className="flex items-center space-x-1.5 sm:space-x-2">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>24hr Approval</span>
              </div>
              <div className="flex items-center space-x-1.5 sm:space-x-2">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>No Hidden Fees</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <MarketingFooter />
    </div>
  );
};
