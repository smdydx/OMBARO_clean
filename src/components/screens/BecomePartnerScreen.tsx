import { ArrowRight, CheckCircle, Users, TrendingUp, Award, Clock, Shield, Sparkles } from 'lucide-react';
import { Button } from '../ui/Button';

interface BecomePartnerScreenProps {
  onNavigate: (screen: string) => void;
}

export function BecomePartnerScreen({ onNavigate }: BecomePartnerScreenProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDAsIDAsIDAsIDAuMDIpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-2xl">
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold text-rose-600 bg-rose-100 px-4 py-2 rounded-full">
                Partnership Opportunity
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Welcome to Our
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-purple-600">
                Wellness Partner Program
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Join OMBARO and transform your spa, salon, or wellness business. 
              Connect with thousands of customers seeking premium wellness experiences.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={() => onNavigate('vendorCategorySelection')}
                className="bg-gradient-to-r from-rose-600 to-purple-600 text-white px-8 py-4 text-lg rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Become a Partner
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline"
                onClick={() => onNavigate('vendorLogin')}
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 text-lg rounded-full hover:border-rose-600 hover:text-rose-600 transition-all duration-300"
              >
                Partner Login
              </Button>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-rose-400 to-pink-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-br from-purple-400 to-indigo-400 rounded-full blur-3xl opacity-20 animate-pulse delay-1000"></div>
      </section>

      {/* Partner Types Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-rose-600 uppercase tracking-wide">Partnership Models</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-3 mb-4">
              Choose Your Partnership Type
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer flexible partnership models designed to help your business grow
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Franchise',
                description: 'Operate under the OMBARO brand with full support and proven business model',
                icon: Award,
                color: 'from-rose-500 to-pink-500'
              },
              {
                title: 'Association',
                description: 'Partner association bringing multiple wellness providers together',
                icon: Users,
                color: 'from-purple-500 to-indigo-500'
              },
              {
                title: 'Aggregator',
                description: 'Manage multiple wellness businesses under one umbrella',
                icon: TrendingUp,
                color: 'from-blue-500 to-cyan-500'
              },
              {
                title: 'Independent',
                description: 'Individual spa, salon, or wellness center looking to expand reach',
                icon: Sparkles,
                color: 'from-green-500 to-emerald-500'
              }
            ].map((type, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-transparent overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${type.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${type.color} flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                  <type.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{type.title}</h3>
                <p className="text-gray-600 leading-relaxed">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-rose-600 uppercase tracking-wide">Why Partner With Us</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-3 mb-4">
              Benefits of Joining OMBARO
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Grow your business with our comprehensive platform and support system
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Wider Customer Reach',
                description: 'Connect with thousands of wellness seekers actively looking for premium services',
                icon: Users
              },
              {
                title: 'Boost Revenue',
                description: 'Increase bookings and revenue with our marketing and promotional support',
                icon: TrendingUp
              },
              {
                title: 'Digital Transformation',
                description: 'Get access to cutting-edge booking and management technology',
                icon: Sparkles
              },
              {
                title: 'Real-time Management',
                description: 'Track bookings, therapists, and revenue in real-time through our dashboard',
                icon: Clock
              },
              {
                title: 'Trusted Platform',
                description: 'Benefit from our brand reputation and customer trust',
                icon: Shield
              },
              {
                title: 'Professional Support',
                description: 'Dedicated account manager and 24/7 technical support',
                icon: Award
              }
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-rose-100 to-purple-100 flex items-center justify-center mb-5">
                  <benefit.icon className="w-6 h-6 text-rose-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-rose-600 uppercase tracking-wide">Simple Process</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-3 mb-4">
              How to Get Started
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our streamlined onboarding process gets you up and running quickly
            </p>
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-rose-200 via-purple-200 to-rose-200 transform -translate-y-1/2"></div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              {[
                {
                  step: '01',
                  title: 'Submit Application',
                  description: 'Fill out our simple partner registration form with your business details'
                },
                {
                  step: '02',
                  title: 'Verification',
                  description: 'Our team reviews your application and verifies your credentials'
                },
                {
                  step: '03',
                  title: 'Setup Profile',
                  description: 'Create your business profile, add services, therapists, and pricing'
                },
                {
                  step: '04',
                  title: 'Go Live',
                  description: 'Start receiving bookings and grow your wellness business'
                }
              ].map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 relative z-10">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-rose-600 to-purple-600 flex items-center justify-center mb-6 mx-auto">
                      <span className="text-2xl font-bold text-white">{step.step}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{step.title}</h3>
                    <p className="text-gray-600 text-center leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-rose-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Join Our Growing Network
            </h2>
            <p className="text-xl text-rose-100">
              Be part of India's fastest-growing wellness platform
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Partner Locations' },
              { number: '2000+', label: 'Professional Therapists' },
              { number: '50K+', label: 'Happy Customers' },
              { number: '4.8', label: 'Average Rating' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-rose-100 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-rose-600 uppercase tracking-wide">Requirements</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-3 mb-4">
              What You Need to Join
            </h2>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-rose-50 rounded-2xl p-10">
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Valid business registration/license',
                'Physical location or mobile service capability',
                'Qualified and certified therapists/beauticians',
                'Professional service standards',
                'Quality equipment and hygiene protocols',
                'Customer service commitment',
                'Liability insurance (recommended)',
                'Digital payment acceptance capability'
              ].map((req, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-rose-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-lg">{req}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Join hundreds of successful wellness partners and start growing your business today. 
            Our team is ready to help you get started.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              onClick={() => onNavigate('vendorCategorySelection')}
              className="bg-gradient-to-r from-rose-600 to-purple-600 text-white px-10 py-4 text-lg rounded-full hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              Start Your Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              className="border-2 border-white text-white px-10 py-4 text-lg rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Contact Support
            </Button>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-700">
            <p className="text-gray-400">
              Have questions? Email us at{' '}
              <a href="mailto:partners@ombaro.com" className="text-rose-400 hover:text-rose-300">
                partners@ombaro.com
              </a>
              {' '}or call{' '}
              <a href="tel:+918001234567" className="text-rose-400 hover:text-rose-300">
                +91 800-123-4567
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
