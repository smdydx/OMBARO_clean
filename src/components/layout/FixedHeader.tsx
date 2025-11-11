import React, { useState } from 'react';
import { Bell, LogOut, MapPin, Search, Filter } from 'lucide-react';
import { User } from '../../types/auth';

interface FixedHeaderProps {
  user: Partial<User>;
  onLogout: () => void;
  onSearch?: (query: string) => void;
}

export const FixedHeader: React.FC<FixedHeaderProps> = ({
  user,
  onLogout,
  onSearch
}) => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    if (onSearch) {
      onSearch(searchQuery);
    }
    console.log('Search query:', searchQuery);
  };

  const handleSearchToggle = () => {
    setShowSearch(!showSearch);
    if (showSearch) {
      setSearchQuery('');
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-black shadow-lg">
      <div className="py-3 sm:py-4 md:py-5 px-4 sm:px-6 md:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 sm:space-x-4 min-w-0 flex-1">
            <div className="flex items-center">
              {/* Main Logo - Larger Size */}
              <img
                src="/ombaro-logo-new.png"
                alt="OMBARO"
                className="h-16 sm:h-20 md:h-24 lg:h-28 w-auto object-contain transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
          <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
            <button
              onClick={handleSearchToggle}
              aria-label="Toggle search"
              className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors"
            >
              <Search className="w-5 h-5 text-white" />
            </button>
            <button
              aria-label="View notifications"
              className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors"
            >
              <Bell className="w-5 h-5 text-white" />
            </button>
            <button
              onClick={onLogout}
              aria-label="Logout from account"
              className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors"
            >
              <LogOut className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Search Bar - Toggleable */}
      {showSearch && (
        <div className="px-4 sm:px-6 md:px-8 pb-4 border-t border-gray-800">
          <div className="relative mt-3">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="w-5 h-5 text-gray-400" />
            </div>
            <input
              placeholder="Search salons, services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              className="w-full pl-10 pr-16 py-3 bg-gray-900 text-white border border-gray-700 rounded-xl focus:ring-2 focus:ring-green-500 focus:outline-none transition-all duration-200"
              autoFocus
            />
            <button
              onClick={handleSearch}
              aria-label="Search and filter salons"
              className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 w-7 h-7 bg-green-600 hover:bg-green-700 rounded-lg flex items-center justify-center transition-colors"
            >
              <Filter className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};