import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

export const HeroSlider: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-b from-green-50 to-white overflow-hidden">
      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-800 mb-6 leading-tight">
              RELAX
              <br />
              <span className="font-normal text-green-600">& ENJOY</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Experience ultimate relaxation with our premium spa and wellness services. 
              Book your perfect moment of tranquility today.
            </p>
            <Link to="/app">
              <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center">
                Book Now
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </Link>
          </div>

          {/* Right Image */}
          <div className="relative">
            <img
              src="/attached_assets/stock_images/luxury_spa_massage_t_690db67f.jpg"
              alt="Spa Relaxation"
              className="rounded-3xl shadow-2xl w-full object-cover h-[400px] md:h-[500px]"
            />
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" className="w-full h-24" preserveAspectRatio="none">
          <path d="M0,0 Q300,60 600,30 T1200,0 L1200,120 L0,120 Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  );
};