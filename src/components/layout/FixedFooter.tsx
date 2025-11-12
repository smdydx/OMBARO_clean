import React from 'react';
import { Calendar, MapPin, Home, User } from 'lucide-react';

interface FixedFooterProps {
  onNavigate: (screen: string, data?: any) => void;
}

export const FixedFooter: React.FC<FixedFooterProps> = ({ onNavigate }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-2xl border-t border-gray-200">
      <div className="grid grid-cols-4 gap-2 p-4 max-w-screen-xl mx-auto">
        <button
          onClick={() => onNavigate('home')}
          aria-label="Go to home screen"
          className="flex flex-col items-center justify-center py-2 px-3 rounded-lg hover:bg-emerald-50 transition-all active:bg-emerald-100"
        >
          <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mb-1">
            <Home className="w-5 h-5 text-emerald-600" />
          </div>
          <span className="text-xs font-medium text-gray-700">Home</span>
        </button>

        <button
          onClick={() => onNavigate('bookings')}
          aria-label="View my bookings and appointments"
          className="flex flex-col items-center justify-center py-2 px-3 rounded-lg hover:bg-emerald-50 transition-all active:bg-emerald-100"
        >
          <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mb-1">
            <Calendar className="w-5 h-5 text-emerald-600" />
          </div>
          <span className="text-xs font-medium text-gray-700">Bookings</span>
        </button>

        <button
          onClick={() => onNavigate('mapView')}
          aria-label="Find spa centers near my location"
          className="flex flex-col items-center justify-center py-2 px-3 rounded-lg hover:bg-emerald-50 transition-all active:bg-emerald-100"
        >
          <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mb-1">
            <MapPin className="w-5 h-5 text-emerald-600" />
          </div>
          <span className="text-xs font-medium text-gray-700">Explore</span>
        </button>

        <button
          onClick={() => onNavigate('profile')}
          aria-label="View my profile and account settings"
          className="flex flex-col items-center justify-center py-2 px-3 rounded-lg hover:bg-emerald-50 transition-all active:bg-emerald-100"
        >
          <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mb-1">
            <User className="w-5 h-5 text-emerald-600" />
          </div>
          <span className="text-xs font-medium text-gray-700">Profile</span>
        </button>
      </div>
    </div>
  );
};