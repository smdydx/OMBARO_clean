import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, CheckCircle, TrendingUp, Users, Calendar, Wallet,
  BarChart3, Shield, Star, Phone, Mail, Award, Target, Zap,
  ChevronDown, ChevronUp, Sparkles, Crown, Heart
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { MarketingHeader } from '../components/marketing/MarketingHeader';
import { MarketingFooter } from '../components/marketing/MarketingFooter';

export const BecomePartnerPage: React.FC = () => {
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <MarketingHeader />

      <main className="pt-16">
        {/* Hero Section - Piller Style */}
        <section className="relative min-h-screen flex items-center bg-gradient-to-br from-amber-50 via-white to-sky-50 overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-400 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <div className="mb-8">
                  <span className="inline-block px-6 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-semibold tracking-wider uppercase mb-6">
                    Premium Partnership
                  </span>
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light text-gray-900 mb-6 leading-tight">
                    Elevate Your
                    <span className="block font-semibold text-sky-600 mt-2">Spa Business</span>
                  </h1>
                  <div className="w-24 h-1 bg-amber-400 mb-8"></div>
                  <p className="text-xl text-gray-600 leading-relaxed mb-12">
                    Join India's most prestigious wellness platform and transform your spa into a thriving sanctuary of beauty and relaxation.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <Link to="/app">
                    <Button size="lg" className="bg-sky-600 hover:bg-sky-700 text-white px-10 py-6 rounded-none text-lg tracking-wide">
                      BECOME A PARTNER
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                  <a href="tel:+911234567890">
                    <Button size="lg" variant="outline" className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-10 py-6 rounded-none text-lg tracking-wide">
                      <Phone className="w-5 h-5 mr-2" />
                      CALL US
                    </Button>
                  </a>
                </div>

                <div className="flex gap-8 text-gray-700">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-amber-600" />
                    <span className="text-sm tracking-wide">No Setup Fee</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-amber-600" />
                    <span className="text-sm tracking-wide">Quick Approval</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-amber-600" />
                    <span className="text-sm tracking-wide">Premium Support</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=90"
                    alt="Luxury Spa"
                    className="w-full h-[600px] object-cover shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-12 left-12 right-12 text-white">
                    <h3 className="text-3xl font-serif mb-2">Join 500+ Partners</h3>
                    <p className="text-lg opacity-90">Building Success Together</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
              <div className="text-center">
                <div className="text-5xl font-serif font-light mb-3 text-amber-400">500+</div>
                <div className="text-sm tracking-widest uppercase text-gray-400">Partner Spas</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-serif font-light mb-3 text-amber-400">50K+</div>
                <div className="text-sm tracking-widest uppercase text-gray-400">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-serif font-light mb-3 text-amber-400">40%</div>
                <div className="text-sm tracking-widest uppercase text-gray-400">Revenue Growth</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-serif font-light mb-3 text-amber-400">4.8★</div>
                <div className="text-sm tracking-widest uppercase text-gray-400">Partner Rating</div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Partner Section */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <span className="text-sm tracking-widest uppercase text-amber-600 mb-4 block">Our Promise</span>
              <h2 className="text-5xl md:text-6xl font-serif font-light text-gray-900 mb-6">
                Why Choose OMBARO
              </h2>
              <div className="w-24 h-1 bg-amber-400 mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              <div className="group">
                <div className="relative overflow-hidden mb-8">
                  <img 
                    src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=90"
                    alt="Revenue Growth"
                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-8 left-8">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4">
                      <TrendingUp className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-serif mb-4 text-gray-900">Exponential Growth</h3>
                <div className="w-12 h-0.5 bg-amber-400 mb-4"></div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Experience an average 40% increase in bookings within your first quarter. Our platform drives quality customers to your doorstep.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-amber-600 mr-2" />
                    <span className="text-sm">Smart booking automation</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-amber-600 mr-2" />
                    <span className="text-sm">24/7 customer support</span>
                  </li>
                </ul>
              </div>

              <div className="group">
                <div className="relative overflow-hidden mb-8">
                  <img 
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=90"
                    alt="Smart Management"
                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-8 left-8">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4">
                      <Calendar className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-serif mb-4 text-gray-900">Effortless Management</h3>
                <div className="w-12 h-0.5 bg-amber-400 mb-4"></div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Save over 15 hours weekly with our intelligent scheduling and customer management system designed for spas.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-amber-600 mr-2" />
                    <span className="text-sm">Real-time scheduling</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-amber-600 mr-2" />
                    <span className="text-sm">CRM integration</span>
                  </li>
                </ul>
              </div>

              <div className="group">
                <div className="relative overflow-hidden mb-8">
                  <img 
                    src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=90"
                    alt="Instant Payments"
                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-8 left-8">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4">
                      <Wallet className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-serif mb-4 text-gray-900">Swift Payments</h3>
                <div className="w-12 h-0.5 bg-amber-400 mb-4"></div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Receive payments within 24 hours directly to your account. Transparent, secure, and hassle-free financial management.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-amber-600 mr-2" />
                    <span className="text-sm">Secure payments</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-amber-600 mr-2" />
                    <span className="text-sm">Detailed reports</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Perfect For Section */}
        <section className="py-32 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <span className="text-sm tracking-widest uppercase text-amber-600 mb-4 block">Designed For</span>
              <h2 className="text-5xl md:text-6xl font-serif font-light text-gray-900 mb-6">
                Perfect For Every Wellness Business
              </h2>
              <div className="w-24 h-1 bg-amber-400 mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="group relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=90"
                  alt="Luxury Spa"
                  className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-12 left-12 right-12 text-white">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6">
                    <Sparkles className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-serif mb-4">Luxury Spas</h3>
                  <div className="w-12 h-0.5 bg-amber-400 mb-4"></div>
                  <p className="text-lg mb-6 opacity-90">Premium booking management for upscale wellness centers</p>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-white/20 backdrop-blur-sm text-sm tracking-wide">Therapist Scheduling</span>
                    <span className="px-4 py-2 bg-white/20 backdrop-blur-sm text-sm tracking-wide">Service Packages</span>
                    <span className="px-4 py-2 bg-white/20 backdrop-blur-sm text-sm tracking-wide">Memberships</span>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&q=90"
                  alt="Beauty Salon"
                  className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-12 left-12 right-12 text-white">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6">
                    <Crown className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-serif mb-4">Beauty Salons</h3>
                  <div className="w-12 h-0.5 bg-amber-400 mb-4"></div>
                  <p className="text-lg mb-6 opacity-90">Complete salon management with stylist tracking</p>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-white/20 backdrop-blur-sm text-sm tracking-wide">Stylist Management</span>
                    <span className="px-4 py-2 bg-white/20 backdrop-blur-sm text-sm tracking-wide">Product Sales</span>
                    <span className="px-4 py-2 bg-white/20 backdrop-blur-sm text-sm tracking-wide">Loyalty Programs</span>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=90"
                  alt="Bridal Makeup"
                  className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-12 left-12 right-12 text-white">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6">
                    <Award className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-serif mb-4">Bridal Artists</h3>
                  <div className="w-12 h-0.5 bg-amber-400 mb-4"></div>
                  <p className="text-lg mb-6 opacity-90">Showcase your portfolio and manage wedding bookings</p>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-white/20 backdrop-blur-sm text-sm tracking-wide">Portfolio Gallery</span>
                    <span className="px-4 py-2 bg-white/20 backdrop-blur-sm text-sm tracking-wide">Package Booking</span>
                    <span className="px-4 py-2 bg-white/20 backdrop-blur-sm text-sm tracking-wide">Trial Sessions</span>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&q=90"
                  alt="Wellness Center"
                  className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-12 left-12 right-12 text-white">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6">
                    <Heart className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-serif mb-4">Wellness Centers</h3>
                  <div className="w-12 h-0.5 bg-amber-400 mb-4"></div>
                  <p className="text-lg mb-6 opacity-90">Holistic programs, yoga classes, and therapy services</p>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-white/20 backdrop-blur-sm text-sm tracking-wide">Class Scheduling</span>
                    <span className="px-4 py-2 bg-white/20 backdrop-blur-sm text-sm tracking-wide">Memberships</span>
                    <span className="px-4 py-2 bg-white/20 backdrop-blur-sm text-sm tracking-wide">Programs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <span className="text-sm tracking-widest uppercase text-amber-600 mb-4 block">Success Stories</span>
              <h2 className="text-5xl md:text-6xl font-serif font-light text-gray-900 mb-6">
                What Our Partners Say
              </h2>
              <div className="w-24 h-1 bg-amber-400 mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              <div className="bg-gray-50 p-12">
                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-8 italic text-lg leading-relaxed">
                  "OMBARO transformed our spa business. Revenue doubled in just 6 months. The platform is incredibly intuitive."
                </p>
                <div className="border-t border-gray-200 pt-6">
                  <div className="font-semibold text-gray-900 text-lg">Meera Kapoor</div>
                  <div className="text-sm text-amber-600 tracking-wide">Serenity Spa, Mumbai</div>
                </div>
              </div>

              <div className="bg-gray-50 p-12">
                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-8 italic text-lg leading-relaxed">
                  "Managing appointments was always chaos. OMBARO made everything seamless. Our clients love the booking experience."
                </p>
                <div className="border-t border-gray-200 pt-6">
                  <div className="font-semibold text-gray-900 text-lg">Rajesh Sharma</div>
                  <div className="text-sm text-amber-600 tracking-wide">Glamour Salon, Delhi</div>
                </div>
              </div>

              <div className="bg-gray-50 p-12">
                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-8 italic text-lg leading-relaxed">
                  "As a freelance artist, OMBARO gave me access to hundreds of brides. My calendar is fully booked months in advance!"
                </p>
                <div className="border-t border-gray-200 pt-6">
                  <div className="font-semibold text-gray-900 text-lg">Priya Deshmukh</div>
                  <div className="text-sm text-amber-600 tracking-wide">Bridal Artist, Pune</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-32 bg-gray-900 text-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <span className="text-sm tracking-widest uppercase text-amber-400 mb-4 block">Simple Process</span>
              <h2 className="text-5xl md:text-6xl font-serif font-light mb-6">
                Get Started in 4 Steps
              </h2>
              <div className="w-24 h-1 bg-amber-400 mx-auto"></div>
            </div>

            <div className="space-y-16">
              {[
                { num: '01', title: 'Register', desc: 'Complete our simple registration form in less than 5 minutes with your business details.' },
                { num: '02', title: 'Verification', desc: 'We verify your documents within 24-48 hours. Quick, secure, and hassle-free process.' },
                { num: '03', title: 'Setup Profile', desc: 'Add your services, photos, pricing, and availability. Create a stunning profile that attracts clients.' },
                { num: '04', title: 'Go Live', desc: 'Start receiving bookings immediately. Watch your business grow with our powerful platform.' }
              ].map((step, idx) => (
                <div key={idx} className="flex items-start gap-8 group">
                  <div className="flex-shrink-0">
                    <div className="text-6xl font-serif font-light text-amber-400 opacity-50 group-hover:opacity-100 transition-opacity">
                      {step.num}
                    </div>
                  </div>
                  <div className="flex-1 pt-4">
                    <h3 className="text-2xl font-serif mb-4">{step.title}</h3>
                    <div className="w-12 h-0.5 bg-amber-400 mb-4"></div>
                    <p className="text-gray-400 text-lg leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-20">
              <Link to="/app">
                <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white px-12 py-6 rounded-none text-lg tracking-widest">
                  START YOUR JOURNEY
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Platform Features */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <span className="text-sm tracking-widest uppercase text-amber-600 mb-4 block">What You Get</span>
              <h2 className="text-5xl md:text-6xl font-serif font-light text-gray-900 mb-6">
                Platform Features
              </h2>
              <div className="w-24 h-1 bg-amber-400 mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { icon: Calendar, title: 'Smart Booking', desc: 'Automated system' },
                { icon: Wallet, title: 'Fast Payouts', desc: 'Within 24 hours' },
                { icon: BarChart3, title: 'Analytics', desc: 'Track performance' },
                { icon: Users, title: 'CRM Tools', desc: 'Manage customers' },
                { icon: Shield, title: 'Trust & Safety', desc: 'Verified reviews' },
                { icon: Zap, title: 'Marketing', desc: 'Promotions' },
                { icon: Phone, title: '24/7 Support', desc: 'Always available' },
                { icon: Target, title: 'Multi-Location', desc: 'Manage branches' },
              ].map((feature, idx) => (
                <div key={idx} className="text-center group">
                  <div className="w-20 h-20 bg-gray-100 group-hover:bg-amber-100 flex items-center justify-center mx-auto mb-6 transition-colors">
                    <feature.icon className="w-10 h-10 text-gray-700 group-hover:text-amber-600 transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-32 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <span className="text-sm tracking-widest uppercase text-amber-600 mb-4 block">FAQ</span>
              <h2 className="text-5xl md:text-6xl font-serif font-light text-gray-900 mb-6">
                Common Questions
              </h2>
              <div className="w-24 h-1 bg-amber-400 mx-auto"></div>
            </div>

            <div className="space-y-4">
              {[
                { q: "How long does registration take?", a: "Just 10 minutes to apply, and 24-48 hours for approval. You can start accepting bookings immediately after approval." },
                { q: "What commission does OMBARO charge?", a: "Commission varies from 15-30% based on your partnership model. No hidden fees - you only pay on completed bookings." },
                { q: "When do I receive payments?", a: "Payments are processed instantly after service completion. Funds reach your bank account within 24-48 hours." },
                { q: "Can I manage multiple locations?", a: "Yes! Our platform supports multi-location management from a single dashboard." },
                { q: "Is there any setup fee?", a: "No setup fees, no hidden charges. Join for free and start growing your business immediately." }
              ].map((faq, idx) => (
                <div key={idx} className="bg-white border border-gray-200">
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-gray-900">{faq.q}</span>
                    {openFaq === idx ? (
                      <ChevronUp className="w-6 h-6 text-amber-600" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-amber-600" />
                    )}
                  </button>
                  {openFaq === idx && (
                    <div className="px-8 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-6">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-32 bg-sky-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-400 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-5xl md:text-6xl font-serif font-light mb-6">
              Ready to Elevate Your Business?
            </h2>
            <div className="w-24 h-1 bg-amber-400 mx-auto mb-8"></div>
            <p className="text-xl mb-12 opacity-90">
              Join 500+ successful wellness businesses on OMBARO today
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Link to="/app">
                <Button size="lg" className="bg-white text-sky-600 hover:bg-gray-100 px-12 py-6 rounded-none text-lg tracking-widest font-semibold">
                  START FREE REGISTRATION
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <a href="mailto:partners@ombaro.com">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-12 py-6 rounded-none text-lg tracking-widest">
                  <Mail className="w-5 h-5 mr-2" />
                  EMAIL US
                </Button>
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-sm tracking-wide">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5" />
                <span>Zero Setup Cost</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5" />
                <span>24hr Approval</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5" />
                <span>Premium Support</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <MarketingFooter />
    </div>
  );
};