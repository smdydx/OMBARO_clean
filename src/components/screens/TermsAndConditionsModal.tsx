import React from 'react';
import { X, Shield, AlertTriangle, Users, Scale } from 'lucide-react';
import { Button } from '../ui/Button';

interface TermsAndConditionsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TermsAndConditionsModal: React.FC<TermsAndConditionsModalProps> = ({
  isOpen,
  onClose
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-3 sm:p-4">
      <div className="bg-gradient-to-br from-green-600 to-green-800 rounded-xl sm:rounded-2xl w-full max-w-xs sm:max-w-md md:max-w-2xl max-h-[90vh] overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-green-700 to-green-900 border-b border-green-500/30 p-4 sm:p-6 flex items-center justify-between">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 backdrop-blur-sm rounded-lg sm:rounded-xl flex items-center justify-center">
              <Scale className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <h2 className="text-base sm:text-xl font-bold text-white">Terms & Conditions</h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close terms and conditions"
            className="w-7 h-7 sm:w-8 sm:h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors"
          >
            <X className="w-4 h-4 text-white" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 overflow-y-auto max-h-[calc(90vh-100px)] sm:max-h-[calc(90vh-140px)]">
          <div className="space-y-4 sm:space-y-6">
            {/* Introduction */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 border border-white/20">
              <p className="text-white font-medium text-xs sm:text-sm md:text-base leading-relaxed">
                By proceeding with a booking on the <strong>OMBARO App</strong>, you (the "Customer") acknowledge, 
                confirm, and agree to the following terms and conditions:
              </p>
            </div>

            {/* Section 1: Scope of Service */}
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs sm:text-sm">1</span>
                </div>
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white">Scope of Service</h3>
              </div>
              <div className="ml-6 sm:ml-8 space-y-1 sm:space-y-2 text-white/90 text-xs sm:text-sm md:text-base">
                <p>• OMBARO provides a platform to connect customers with independent, verified wellness professionals and service vendors ("Vendors").</p>
                <p>• Services include massage, spa, wellness, beauty, and related non-medical, non-sexual therapies only.</p>
                <p>• Services are strictly for <strong className="text-white">wellness, relaxation, and therapeutic purposes</strong>.</p>
              </div>
            </div>

            {/* Section 2: Zero Tolerance Policy */}
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs sm:text-sm">2</span>
                </div>
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white flex items-center space-x-2">
                  <span>Zero Tolerance Policy</span>
                  <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-300" />
                </h3>
              </div>
              <div className="ml-6 sm:ml-8 space-y-2">
                <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg p-3">
                  <p className="text-white font-medium mb-2 text-xs sm:text-sm">OMBARO <strong>does not engage in, promote, or support</strong> any form of:</p>
                  <ul className="text-white/90 space-y-1 ml-4 text-xs sm:text-sm">
                    <li>• Human trafficking, forced labor, or exploitation</li>
                    <li>• Sexual activity, sexual services, or any illegal conduct</li>
                  </ul>
                </div>
                <p className="text-white/90 text-xs sm:text-sm">Customers are strictly prohibited from soliciting or attempting to engage Vendors in any activity of this nature.</p>
              </div>
            </div>

            {/* Section 3: Customer Conduct */}
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs sm:text-sm">3</span>
                </div>
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white flex items-center space-x-2">
                  <span>Customer Conduct</span>
                  <Users className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </h3>
              </div>
              <div className="ml-6 sm:ml-8 space-y-2 text-white/90 text-xs sm:text-sm">
                <p>• Customers must treat Vendors with respect and professionalism at all times.</p>
                <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg p-3">
                  <p className="text-white font-medium mb-2">Any attempt to:</p>
                  <ul className="text-white/90 space-y-1 ml-4">
                    <li>• Force, coerce, harass, or exploit a Vendor, or</li>
                    <li>• Engage in inappropriate or unlawful behavior</li>
                  </ul>
                  <p className="text-white font-semibold mt-2">
                    will result in <strong>immediate service termination, account suspension, and possible legal action</strong>.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4: Vendor Safety */}
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs sm:text-sm">4</span>
                </div>
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white flex items-center space-x-2">
                  <span>Vendor Safety & Legal Rights</span>
                  <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </h3>
              </div>
              <div className="ml-6 sm:ml-8 space-y-1 sm:space-y-2 text-white/90 text-xs sm:text-sm">
                <p>• Vendors have the <strong className="text-white">right to refuse service</strong> if they feel unsafe, disrespected, or pressured to perform outside the agreed scope.</p>
                <p>• OMBARO reserves the right to fully cooperate with law enforcement in cases of misconduct or violation of these Terms.</p>
              </div>
            </div>

            {/* Important Notice */}
            <div className="bg-yellow-500/20 backdrop-blur-sm border-2 border-yellow-400/50 rounded-lg sm:rounded-xl p-3 sm:p-4">
              <div className="flex items-start space-x-2 sm:space-x-3">
                <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-300 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-white mb-1 sm:mb-2 text-xs sm:text-sm">Important Legal Notice</h4>
                  <p className="text-white/90 text-xs sm:text-sm leading-relaxed">
                    OMBARO has a zero-tolerance policy for any form of exploitation, trafficking, or inappropriate conduct. 
                    We work closely with law enforcement and will prosecute violations to the full extent of the law.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-gradient-to-r from-green-700 to-green-900 border-t border-green-500/30 p-4 sm:p-6">
          <Button
            onClick={onClose}
            size="lg"
            className="w-full bg-white text-green-600 hover:bg-gray-100 font-semibold text-sm sm:text-base"
          >
            I Understand These Terms
          </Button>
        </div>
      </div>
    </div>
  );
};