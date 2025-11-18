import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Shield, X } from "lucide-react";
import { Button } from "../components/ui/Button";
import { MarketingHeader } from "../components/marketing/MarketingHeader";
import { MarketingFooter } from "../components/marketing/MarketingFooter";

export const HomePage: React.FC = () => {
  const [showTermsBanner, setShowTermsBanner] = useState(true);
  const [isClosing, setIsClosing] = useState(false);

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

  return (
    <div className="min-h-screen bg-white">
      <MarketingHeader />

      <main>
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
        <section className="relative overflow-hidden bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              {/* Hero Titles */}
              <div className="text-center space-y-4">
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-light text-gray-900 tracking-tight animate-fade-in">
                  Empowering
                </h1>
                <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                  <h1 className="text-6xl md:text-8xl lg:text-9xl font-light text-gray-900 tracking-tight">
                    Business
                  </h1>
                  <div className="relative w-64 h-64 md:w-96 md:h-96">
                    <img
                      src="https://cdn.prod.website-files.com/68bfd5901895b58f0d2e6d33/68c01353ba4fe52ebf9e1cd6_d899696bed5fc7d310c42da48c1b171f_IMG3.avif"
                      alt="Hero"
                      className="absolute inset-0 w-full h-full object-cover rounded-3xl shadow-2xl"
                    />
                  </div>
                  <h1 className="text-6xl md:text-8xl lg:text-9xl font-light text-primary-600 tracking-tight">
                    Growth
                  </h1>
                </div>
              </div>

              {/* Stats and CTA */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 pt-12">
                <div className="flex gap-12">
                  <div className="text-center md:text-left">
                    <h2 className="text-5xl font-bold text-gray-900">125+</h2>
                    <p className="text-gray-600">Industries served</p>
                  </div>
                  <div className="text-center md:text-left">
                    <h2 className="text-5xl font-bold text-gray-900">95%</h2>
                    <p className="text-gray-600">Client retention</p>
                  </div>
                </div>
                <div className="max-w-2xl space-y-6">
                  <p className="text-lg text-gray-600">
                    Our digital marketing solutions are designed to deliver measurable results & accelerate your online growth
                  </p>
                  <Link to="/app">
                    <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center gap-2">
                      Let's Talk
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div>
                  <p className="text-sm font-semibold text-primary-600 tracking-wider mb-3">
                    01 / About
                  </p>
                  <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
                    Trusted by over 100 businesses worldwide
                  </h2>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg">
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
                  <p className="text-gray-600 leading-relaxed">
                    We believe in creating meaningful, lasting connections through digital innovation. Whether it's building your brand, optimizing your website, or driving traffic with cutting-edge marketing strategies
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

        {/* Services Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <p className="text-sm font-semibold text-primary-600 tracking-wider mb-3">
                02 / Services
              </p>
              <h2 className="text-4xl md:text-5xl font-light text-gray-900">
                Digital solutions that deliver results
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                    <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <p className="text-sm font-semibold text-primary-600 tracking-wider mb-3">
                03 / Case studies
              </p>
              <h2 className="text-4xl md:text-5xl font-light text-gray-900">
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
                <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {study.title}
                    </h3>
                    <p className="text-gray-600">{study.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold text-primary-600 tracking-wider mb-3">
                04 / Testimonials
              </p>
              <h2 className="text-4xl md:text-5xl font-light text-gray-900">
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
                <div key={index} className="bg-gray-50 p-8 rounded-2xl shadow-lg">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  className={`bg-white p-8 rounded-2xl shadow-lg ${
                    plan.featured ? "ring-2 ring-primary-500 scale-105" : ""
                  }`}
                >
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600">{plan.subtitle}</p>
                  </div>
                  <div className="mb-6">
                    <p className="text-5xl font-bold text-gray-900">{plan.price}</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-600">
                        <Star className="w-4 h-4 text-primary-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact">
                    <button
                      className={`w-full py-3 rounded-full font-medium transition-all ${
                        plan.featured
                          ? "bg-primary-500 hover:bg-primary-600 text-white"
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

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
              Ready to talk? Get in touch
            </h2>
            <Link to="/contact">
              <Button size="lg" className="shadow-lg hover:shadow-xl">
                Let's Talk
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <MarketingFooter />
    </div>
  );
};