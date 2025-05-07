import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import { useCart } from '@/hooks/useCart';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth();
  const { cartItems } = useCart();

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <svg 
              viewBox="0 0 24 24" 
              fill="none" 
              className="h-8 w-8 text-supplement-purple"
              stroke="currentColor" 
              strokeWidth="2"
            >
              <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
              <line x1="16" y1="8" x2="2" y2="22" />
              <line x1="17.5" y1="15" x2="9" y2="15" />
            </svg>
            <span className="font-bold text-xl text-gray-800">GainzGear</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-medium text-gray-800 hover:text-supplement-purple transition-colors">Home</Link>
            <Link to="/products" className="font-medium text-gray-800 hover:text-supplement-purple transition-colors">Shop</Link>
            <Link to="/categories" className="font-medium text-gray-800 hover:text-supplement-purple transition-colors">Categories</Link>
            <Link to="/about" className="font-medium text-gray-800 hover:text-supplement-purple transition-colors">About</Link>
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <div className="flex items-center gap-4">
                <Link to="/account">
                  <Button variant="ghost" size="icon">
                    <User className="h-5 w-5 text-gray-800" />
                  </Button>
                </Link>
                <Button variant="ghost" onClick={logout} className="text-gray-800">Logout</Button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Link to="/login">
                  <Button variant="ghost" className="text-gray-800">Login</Button>
                </Link>
                <Link to="/register">
                  <Button className="bg-supplement-purple text-white hover:bg-supplement-purple/80">Sign Up</Button>
                </Link>
              </div>
            )}
            <Link to="/cart" className="relative">
              <Button variant="ghost" size="icon" className="text-gray-800">
                <ShoppingCart className="h-5 w-5" />
                {cartItems.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-supplement-purple text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {cartItems.length}
                  </span>
                )}
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <Link to="/cart" className="relative">
              <Button variant="ghost" size="icon" className="text-gray-800">
                <ShoppingCart className="h-5 w-5" />
                {cartItems.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-supplement-purple text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {cartItems.length}
                  </span>
                )}
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5 text-gray-800" />
              ) : (
                <Menu className="h-5 w-5 text-gray-800" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white p-4 shadow-lg animate-fade-in">
          <div className="flex flex-col space-y-3">
            <Link to="/" className="p-2 hover:bg-gray-100 rounded text-gray-800 font-medium" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link to="/products" className="p-2 hover:bg-gray-100 rounded text-gray-800 font-medium" onClick={() => setIsMenuOpen(false)}>
              Shop
            </Link>
            <Link to="/categories" className="p-2 hover:bg-gray-100 rounded text-gray-800 font-medium" onClick={() => setIsMenuOpen(false)}>
              Categories
            </Link>
            <Link to="/about" className="p-2 hover:bg-gray-100 rounded text-gray-800 font-medium" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
            <div className="border-t border-gray-200 pt-2">
              {isAuthenticated ? (
                <>
                  <Link to="/account" className="block p-2 hover:bg-gray-100 rounded text-gray-800 font-medium" onClick={() => setIsMenuOpen(false)}>
                    My Account
                  </Link>
                  <button 
                    className="w-full text-left p-2 hover:bg-gray-100 rounded text-gray-800"
                    onClick={() => {
                      logout();
                      setIsMenuOpen(false);
                    }}
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" className="block p-2 hover:bg-gray-100 rounded text-gray-800 font-medium" onClick={() => setIsMenuOpen(false)}>
                    Login
                  </Link>
                  <Link to="/register" className="block p-2 hover:bg-gray-100 rounded text-gray-800 font-medium" onClick={() => setIsMenuOpen(false)}>
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
