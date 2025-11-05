import React from 'react';
import Slider from 'react-slick';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface SlideContent {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  cta: string;
  ctaLink: string;
}

export const HeroSlider: React.FC = () => {
  const slides: SlideContent[] = [
    {
      image: 'https://images.pexels.com/photos/3865676/pexels-photo-3865676.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Relaxing Body Massage',
      subtitle: 'Premium Massage Therapy',
      description: 'Deep tissue, Swedish, Thai, and aromatherapy massages by expert therapists',
      cta: 'Book Massage',
      ctaLink: '/app'
    },
    {
      image: 'https://images.pexels.com/photos/3757952/pexels-photo-3757952.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Therapeutic Body Treatments',
      subtitle: 'Healing Touch Therapy',
      description: 'Professional body massage and spa treatments for complete relaxation and wellness',
      cta: 'Book Now',
      ctaLink: '/app'
    },
    {
      image: 'https://images.pexels.com/photos/3997392/pexels-photo-3997392.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Luxury Spa & Massage',
      subtitle: 'Rejuvenate Your Body & Mind',
      description: 'Experience premium spa treatments and therapeutic massages from certified professionals',
      cta: 'Book Spa Session',
      ctaLink: '/app'
    },
    {
      image: 'https://images.pexels.com/photos/3992860/pexels-photo-3992860.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Bridal Makeup & Styling',
      subtitle: 'Your Dream Wedding Look',
      description: 'Expert bridal makeup artists to make your special day unforgettable',
      cta: 'Book Bridal Package',
      ctaLink: '/app'
    },
    {
      image: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Premium Beauty Salon',
      subtitle: 'Hair, Skin & Nails',
      description: 'Complete beauty services including haircuts, styling, facials, and manicures',
      cta: 'Explore Services',
      ctaLink: '/app'
    },
    {
      image: 'https://images.pexels.com/photos/3997986/pexels-photo-3997986.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Wellness & Skincare',
      subtitle: 'Radiant Skin Solutions',
      description: 'Professional skincare treatments and wellness programs tailored for you',
      cta: 'Start Your Journey',
      ctaLink: '/app'
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    pauseOnHover: true,
    arrows: true,
    cssEase: 'ease-in-out',
    dotsClass: 'slick-dots custom-dots',
  };

  return (
    <div className="hero-slider-container relative">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="slider-slide">
            <div className="relative h-[600px] md:h-[700px] lg:h-[750px] overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center center'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-900/95 via-primary-800/90 to-primary-950/95" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-950/80 via-transparent to-transparent" />
              </div>

              <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
                <div className="max-w-2xl animate-fade-in-up">
                  <div className="inline-flex items-center space-x-2 glass backdrop-blur-lg border border-white/30 rounded-full px-6 py-3 mb-8 animate-fade-in-down shadow-lg">
                    <Sparkles className="w-5 h-5 text-amber-300 animate-bounce-subtle" />
                    <span className="text-white text-sm font-semibold tracking-wide">{slide.subtitle}</span>
                  </div>

                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-black text-white mb-8 leading-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                    {slide.title}
                  </h1>

                  <p className="text-xl md:text-2xl text-white/95 mb-10 leading-relaxed max-w-xl font-light animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    {slide.description}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                    <Link to={slide.ctaLink}>
                      <button className="w-full sm:w-auto bg-white text-primary-900 hover:bg-primary-50 font-bold rounded-2xl px-10 py-5 shadow-strong transition-all duration-300 hover:scale-105 hover:shadow-xl focus:ring-4 focus:ring-white/30 focus:outline-none flex items-center justify-center group">
                        {slide.cta}
                        <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                      </button>
                    </Link>
                    <Link to="/services">
                      <button className="w-full sm:w-auto border-3 border-white text-white hover:bg-white hover:text-primary-900 font-bold rounded-2xl px-10 py-5 transition-all duration-300 backdrop-blur-sm hover:scale-105 hover:shadow-xl focus:ring-4 focus:ring-white/30 focus:outline-none">
                        View All Services
                      </button>
                    </Link>
                  </div>

                  <div className="mt-10 flex items-center space-x-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                    <div className="flex items-center space-x-3">
                      <div className="flex -space-x-3">
                        {[1, 2, 3, 4].map((i) => (
                          <div
                            key={i}
                            className="w-12 h-12 rounded-full border-3 border-white bg-gradient-to-br from-accent-400 via-primary-400 to-primary-600 shadow-lg animate-float"
                            style={{ animationDelay: `${i * 0.2}s` }}
                          />
                        ))}
                      </div>
                      <span className="text-white text-base font-semibold drop-shadow-lg">50,000+ Happy Customers</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <style>{`
        .hero-slider-container .slick-dots {
          bottom: 40px;
          z-index: 20;
        }

        .hero-slider-container .slick-dots li {
          margin: 0 8px;
        }

        .hero-slider-container .slick-dots li button {
          width: 16px;
          height: 16px;
        }

        .hero-slider-container .slick-dots li button:before {
          color: white;
          opacity: 0.4;
          font-size: 14px;
          line-height: 16px;
          width: 16px;
          height: 16px;
          transition: all 0.3s ease;
        }

        .hero-slider-container .slick-dots li.slick-active button:before {
          opacity: 1;
          color: white;
          transform: scale(1.3);
        }

        .hero-slider-container .slick-dots li:hover button:before {
          opacity: 0.8;
          transform: scale(1.2);
        }

        .hero-slider-container .slick-prev,
        .hero-slider-container .slick-next {
          z-index: 20;
          width: 60px;
          height: 60px;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          border-radius: 50%;
          transition: all 0.3s ease;
        }

        .hero-slider-container .slick-prev:hover,
        .hero-slider-container .slick-next:hover {
          background: rgba(255, 255, 255, 0.25);
          transform: scale(1.1);
        }

        .hero-slider-container .slick-prev {
          left: 30px;
        }

        .hero-slider-container .slick-next {
          right: 30px;
        }

        .hero-slider-container .slick-prev:before,
        .hero-slider-container .slick-next:before {
          font-size: 28px;
          opacity: 1;
          line-height: 60px;
        }

        @media (max-width: 640px) {
          .hero-slider-container .slick-prev,
          .hero-slider-container .slick-next {
            width: 48px;
            height: 48px;
          }

          .hero-slider-container .slick-prev {
            left: 15px;
          }

          .hero-slider-container .slick-next {
            right: 15px;
          }

          .hero-slider-container .slick-prev:before,
          .hero-slider-container .slick-next:before {
            font-size: 24px;
            line-height: 48px;
          }
        }
      `}</style>
    </div>
  );
};