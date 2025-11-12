import { Link } from 'react-router-dom';
import { Menu, X, User, LogOut } from 'lucide-react';
import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';

export default function FixedHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signOut } = useAuth();

  return (
    <header className="fixed top-0 left-0 right-0 bg-black shadow-lg z-50">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/ombaro-logo-new.png" 
              alt="Ombaro" 
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-emerald-400 transition-colors font-medium">
              Home
            </Link>
            <Link to="/services" className="text-white hover:text-emerald-400 transition-colors font-medium">
              Services
            </Link>
            <Link to="/how-it-works" className="text-white hover:text-emerald-400 transition-colors font-medium">
              How It Works
            </Link>
            <Link to="/become-partner" className="text-white hover:text-emerald-400 transition-colors font-medium">
              Become Partner
            </Link>
            <Link to="/about" className="text-white hover:text-emerald-400 transition-colors font-medium">
              About
            </Link>
            <Link to="/contact" className="text-white hover:text-emerald-400 transition-colors font-medium">
              Contact
            </Link>

            {user ? (
              <div className="flex items-center space-x-4">
                <Link 
                  to="/profile" 
                  className="flex items-center space-x-2 text-white hover:text-emerald-400 transition-colors"
                >
                  <User className="w-5 h-5" />
                  <span>Profile</span>
                </Link>
                <button
                  onClick={signOut}
                  className="flex items-center space-x-2 text-white hover:text-emerald-400 transition-colors"
                >
                  <LogOut className="w-5 h-5" />
                  <span>Logout</span>
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-2 rounded-full hover:from-emerald-600 hover:to-teal-700 transition-all shadow-lg"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-emerald-400 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            <Link 
              to="/" 
              className="block text-white hover:text-emerald-400 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className="block text-white hover:text-emerald-400 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/how-it-works" 
              className="block text-white hover:text-emerald-400 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link 
              to="/become-partner" 
              className="block text-white hover:text-emerald-400 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Become Partner
            </Link>
            <Link 
              to="/about" 
              className="block text-white hover:text-emerald-400 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="block text-white hover:text-emerald-400 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            {user ? (
              <>
                <Link 
                  to="/profile" 
                  className="block text-white hover:text-emerald-400 transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Profile
                </Link>
                <button
                  onClick={() => {
                    signOut();
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left text-white hover:text-emerald-400 transition-colors py-2"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="block bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-2 rounded-full text-center hover:from-emerald-600 hover:to-teal-700 transition-all shadow-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
            )}
          </div>
        )}
      </nav>
    </header>
  );
};

export default FixedHeader;