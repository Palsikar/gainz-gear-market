import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import { useCart } from '@/hooks/useCart';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth();
  const { cartItems } = useCart();

  return (
    <nav className="bg-gradient-to-r from-black to-purple-800 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-8 w-8 text-pink-500"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
              <line x1="16" y1="8" x2="2" y2="22" />
              <line x1="17.5" y1="15" x2="9" y2="15" />
            </svg>
            <span className="font-extrabold text-2xl text-white tracking-wide">GainzGear</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-semibold text-white hover:text-pink-400 transition-colors">Home</Link>
            <Link to="/products" className="font-semibold text-white hover:text-pink-400 transition-colors">Shop</Link>
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <Button variant="ghost" onClick={logout} className="text-white hover:bg-pink-600/30 font-semibold">Logout</Button>
            ) : (
              <div className="flex items-center gap-2">
                <Link to="/login">
                  <Button variant="ghost" className="text-white hover:bg-pink-600/30 font-semibold">Login</Button>
                </Link>
                <Link to="/register">
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold">Sign Up</Button>
                </Link>
              </div>
            )}
            <Link to="/cart" className="relative">
              <Button variant="ghost" size="icon" className="text-white hover:bg-pink-600/30">
                <ShoppingCart className="h-5 w-5" />
                {cartItems.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                    {cartItems.length}
                  </span>
                )}
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <Link to="/cart" className="relative">
              <Button variant="ghost" size="icon" className="text-white hover:bg-pink-600/30">
                <ShoppingCart className="h-5 w-5" />
                {cartItems.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                    {cartItems.length}
                  </span>
                )}
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:bg-pink-600/30"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black p-4 shadow-lg animate-fade-in">
          <div className="flex flex-col space-y-3">
            <Link to="/" className="p-2 hover:bg-pink-600/30 rounded text-white font-medium" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link to="/products" className="p-2 hover:bg-pink-600/30 rounded text-white font-medium" onClick={() => setIsMenuOpen(false)}>
              Shop
            </Link>
            <div className="border-t border-gray-700 pt-2">
              {isAuthenticated ? (
                <button 
                  className="w-full text-left p-2 hover:bg-pink-600/30 rounded text-white font-medium"
                  onClick={() => {
                    logout();
                    setIsMenuOpen(false);
                  }}
                >
                  Logout
                </button>
              ) : (
                <>
                  <Link to="/login" className="block p-2 hover:bg-pink-600/30 rounded text-white font-medium" onClick={() => setIsMenuOpen(false)}>
                    Login
                  </Link>
                  <Link to="/register" className="block p-2 hover:bg-pink-600/30 rounded text-white font-medium" onClick={() => setIsMenuOpen(false)}>
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
