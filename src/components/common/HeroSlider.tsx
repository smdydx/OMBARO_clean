import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { ArrowRight, Sparkles, Play, Star, Award, TrendingUp, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Button: React.FC<any> = ({ children, className, variant, size, ...props }) => {
  const baseStyles = "inline-flex items-center justify-center font-bold rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
  const variantStyles = variant === "outline"
    ? "bg-transparent border-2 hover:bg-white/10"
    : "bg-white text-primary-900 hover:bg-neutral-100";
  const sizeStyles = size === "lg"
    ? "h-10 px-6 py-3 text-base"
    : "h-9 px-4 py-2 text-sm";
  return (
    <button className={`${baseStyles} ${variantStyles} ${sizeStyles} ${className || ''}`} {...props}>
      {children}
    </button>
  );
};

interface SlideContent {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  cta: string;
  ctaLink: string;
  features: string[];
  rating: number;
}

export const HeroSlider: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const slides: SlideContent[] = [
    {
      image: '/attached_assets/stock_images/luxury_spa_massage_t_2767ba26.jpg',
      title: 'Luxury Spa Experiences',
      subtitle: 'Premium Wellness Sanctuary',
      description: 'Indulge in our signature spa treatments designed for ultimate relaxation and rejuvenation',
      cta: 'Book Spa Session',
      ctaLink: '/app',
      features: ['Expert Therapists', '100% Natural Products', 'Private Suites'],
      rating: 4.9
    },
    {
      image: '/attached_assets/stock_images/spa_treatment_room_i_f52c1c96.jpg',
      title: 'Therapeutic Massages',
      subtitle: 'Healing Touch Therapy',
      description: 'Deep tissue, Swedish, Thai, and aromatherapy massages by certified professionals',
      cta: 'Book Massage',
      ctaLink: '/app',
      features: ['Swedish Massage', 'Deep Tissue', 'Hot Stone'],
      rating: 5.0
    },
    {
      image: '/attached_assets/stock_images/beauty_salon_facial__29de6e5b.jpg',
      title: 'Bridal Beauty Studio',
      subtitle: 'Your Dream Wedding Look',
      description: 'Expert makeup artists and stylists to create your perfect bridal transformation',
      cta: 'Book Bridal Package',
      ctaLink: '/app',
      features: ['HD Makeup', 'Hair Styling', 'Pre-Wedding Care'],
      rating: 4.8
    },
    {
      image: '/attached_assets/stock_images/luxury_spa_massage_t_6f866171.jpg',
      title: 'Premium Hair Salon',
      subtitle: 'Hair Artistry & Styling',
      description: 'Transform your look with our expert hair treatments, coloring, and styling services',
      cta: 'Explore Hair Services',
      ctaLink: '/app',
      features: ['Color Expert', 'Keratin Treatment', 'Hair Spa'],
      rating: 4.9
    },
    {
      image: '/attached_assets/stock_images/spa_treatment_room_i_79626365.jpg',
      title: 'Advanced Skincare',
      subtitle: 'Radiant Skin Solutions',
      description: 'Professional facials and skincare treatments for glowing, healthy skin',
      cta: 'Start Skincare Journey',
      ctaLink: '/app',
      features: ['Anti-Aging', 'Hydra Facial', 'Skin Analysis'],
      rating: 5.0
    },
    {
      image: '/attached_assets/stock_images/beauty_salon_facial__338eb5d5.jpg',
      title: 'Nail Art Studio',
      subtitle: 'Creative Nail Designs',
      description: 'Express your style with our artistic nail designs and premium manicure services',
      cta: 'Book Nail Art',
      ctaLink: '/app',
      features: ['Gel Extensions', '3D Art', 'Spa Manicure'],
      rating: 4.8
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: !isHovered,
    autoplaySpeed: 5000,
    fade: true,
    pauseOnHover: true,
    arrows: false,
    cssEase: 'cubic-bezier(0.4, 0, 0.2, 1)',
    dotsClass: 'slick-dots custom-dots',
    beforeChange: (current: number, next: number) => setActiveSlide(next),
  };

  return (
    <div
      className="hero-slider-container relative overflow-visible mt-20"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Zigzag Top Border Design */}
      <div className="absolute top-0 left-0 right-0 h-8 z-20 overflow-hidden">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 40" preserveAspectRatio="none">
          <path d="M0,40 L40,0 L80,40 L120,0 L160,40 L200,0 L240,40 L280,0 L320,40 L360,0 L400,40 L440,0 L480,40 L520,0 L560,40 L600,0 L640,40 L680,0 L720,40 L760,0 L800,40 L840,0 L880,40 L920,0 L960,40 L1000,0 L1040,40 L1080,0 L1120,40 L1160,0 L1200,40 L1200,40 L0,40 Z" 
                fill="url(#zigzagGradient)" />
          <defs>
            <linearGradient id="zigzagGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#e0f2fe" />
              <stop offset="50%" stopColor="#bae6fd" />
              <stop offset="100%" stopColor="#7dd3fc" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="slider-slide">
            <div className="relative h-[600px] sm:h-[650px] md:h-[700px] lg:h-[800px] overflow-hidden">
              {/* Background Image with Premium Overlay */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="w-full h-full">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover object-center transform transition-all duration-[1500ms] ease-out hover:scale-105"
                    loading="lazy"
                    style={{
                      objectFit: 'cover',
                      objectPosition: 'center',
                    }}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1920&q=90';
                    }}
                  />
                </div>

                {/* Soft Gradient Overlays - Light and Premium */}
                <div className="absolute inset-0 bg-gradient-to-br from-sky-100/40 via-blue-50/30 to-cyan-100/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent" />
              </div>

              {/* Premium Content Container */}
              <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 h-full items-center">
                  {/* Left Content */}
                  <div className="space-y-4 sm:space-y-6 lg:space-y-8 animate-fade-in-up py-8 sm:py-0 pb-16 sm:pb-8">
                    {/* Premium Badge */}
                    <div className="inline-flex items-center space-x-3 bg-white/90 backdrop-blur-xl border border-sky-200 rounded-2xl px-6 py-4 shadow-xl group hover:scale-105 transition-all duration-300 cursor-pointer">
                      <div className="w-10 h-10 bg-gradient-to-br from-sky-400 to-blue-500 rounded-xl flex items-center justify-center animate-bounce-subtle">
                        <Sparkles className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-sky-800 text-sm font-bold tracking-wider uppercase">{slide.subtitle}</div>
                        <div className="flex items-center space-x-1 mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`w-3 h-3 ${i < Math.floor(slide.rating) ? 'fill-amber-400 text-amber-400' : 'text-neutral-300'}`} />
                          ))}
                          <span className="text-sky-700 text-xs ml-1">{slide.rating}</span>
                        </div>
                      </div>
                    </div>

                    {/* Title with Soft Gradient */}
                    <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-black leading-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                      <span className="bg-gradient-to-r from-sky-700 via-blue-600 to-cyan-700 bg-clip-text text-transparent drop-shadow-xl">
                        {slide.title}
                      </span>
                    </h1>

                    {/* Description */}
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-neutral-700 leading-relaxed max-w-xl font-light animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                      {slide.description}
                    </p>

                    {/* Features Grid */}
                    <div className="grid grid-cols-3 gap-4 animate-fade-in-up" style={{ animationDelay: '0.25s' }}>
                      {slide.features.map((feature, idx) => (
                        <div key={idx} className="bg-white/90 backdrop-blur-xl border border-sky-200 rounded-xl p-3 text-center hover:scale-105 transition-all duration-300 cursor-pointer group shadow-md">
                          <div className="w-8 h-8 bg-gradient-to-br from-sky-400 to-blue-500 rounded-lg mx-auto mb-2 flex items-center justify-center group-hover:rotate-12 transition-transform">
                            <Award className="w-4 h-4 text-white" />
                          </div>
                          <div className="text-sky-800 text-xs font-semibold">{feature}</div>
                        </div>
                      ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-in-up pb-4 sm:pb-0" style={{ animationDelay: '0.3s' }}>
                      <Link to={slide.ctaLink} className="flex-1">
                        <button className="w-full bg-gradient-to-r from-sky-500 via-blue-500 to-cyan-500 hover:from-sky-600 hover:via-blue-600 hover:to-cyan-600 text-white font-bold rounded-2xl px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-base shadow-xl transition-all duration-500 hover:scale-105 hover:shadow-sky-500/50 focus:ring-4 focus:ring-sky-500/50 focus:outline-none flex items-center justify-center group relative overflow-hidden">
                          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                          <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:scale-125 transition-transform" />
                          <span className="truncate text-xs sm:text-base">{slide.cta}</span>
                          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                        </button>
                      </Link>
                      <Link to="/services" className="flex-1">
                        <button className="w-full bg-white/90 backdrop-blur-xl border-2 border-sky-300 text-sky-700 hover:bg-sky-50 hover:border-sky-400 font-bold rounded-2xl px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-base transition-all duration-500 hover:scale-105 hover:shadow-xl focus:ring-4 focus:ring-sky-200 focus:outline-none flex items-center justify-center group">
                          <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:rotate-12 transition-transform" />
                          <span className="truncate text-xs sm:text-base">View Services</span>
                        </button>
                      </Link>
                    </div>
                  </div>

                  {/* Right Content - Interactive Feature Cards */}
                  <div className="hidden lg:flex flex-col space-y-4 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                    {[
                      { icon: Award, title: 'Premium Quality', desc: 'Top-rated services' },
                      { icon: Star, title: 'Expert Professionals', desc: 'Certified therapists' },
                      { icon: TrendingUp, title: 'Best Prices', desc: 'Affordable luxury' }
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="bg-white/90 backdrop-blur-xl border border-sky-200 rounded-3xl p-6 hover:scale-105 transition-all duration-500 cursor-pointer group shadow-xl"
                        style={{ animationDelay: `${0.6 + idx * 0.1}s` }}
                      >
                        <div className="flex items-center space-x-4">
                          <div className="w-16 h-16 bg-gradient-to-br from-sky-400 to-blue-500 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform shadow-lg">
                            <item.icon className="w-8 h-8 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-sky-800 text-xl font-bold mb-1">{item.title}</h3>
                            <p className="text-neutral-600 text-sm">{item.desc}</p>
                          </div>
                          <ArrowRight className="w-6 h-6 text-neutral-400 group-hover:text-sky-600 group-hover:translate-x-2 transition-all" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <style>{`
        .hero-slider-container .slick-dots {
          bottom: 30px;
          z-index: 30;
          display: flex !important;
          justify-content: center;
          align-items: center;
          gap: 12px;
        }

        .hero-slider-container .slick-dots li {
          margin: 0;
          width: auto;
          height: auto;
        }

        .hero-slider-container .slick-dots li button {
          width: 12px;
          height: 12px;
          padding: 0;
        }

        .hero-slider-container .slick-dots li button:before {
          content: '';
          position: absolute;
          width: 12px;
          height: 12px;
          background: rgba(14, 165, 233, 0.4);
          border-radius: 50%;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border: 2px solid transparent;
        }

        .hero-slider-container .slick-dots li.slick-active button:before {
          width: 40px;
          border-radius: 12px;
          background: linear-gradient(135deg, #0ea5e9, #06b6d4);
          box-shadow: 0 4px 20px rgba(14, 165, 233, 0.5);
          border-color: rgba(255, 255, 255, 0.3);
        }

        .hero-slider-container .slick-dots li:hover button:before {
          background: rgba(14, 165, 233, 0.7);
          transform: scale(1.3);
        }

        @media (max-width: 1024px) {
          .hero-slider-container .slick-dots {
            bottom: 20px;
          }
        }

        @media (max-width: 640px) {
          .hero-slider-container .slick-dots {
            bottom: 15px;
          }
        }
      `}</style>
    </div>
  );
};