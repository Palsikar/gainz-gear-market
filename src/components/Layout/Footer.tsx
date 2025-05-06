
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">GainzGear</h3>
            <p className="text-gray-300 mb-4">Your trusted source for premium fitness supplements to help you achieve your fitness goals.</p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-supplement-purple">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-supplement-purple">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-supplement-purple">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Shop Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li><Link to="/products" className="text-gray-300 hover:text-white">All Products</Link></li>
              <li><Link to="/categories/protein" className="text-gray-300 hover:text-white">Protein</Link></li>
              <li><Link to="/categories/pre-workout" className="text-gray-300 hover:text-white">Pre-Workout</Link></li>
              <li><Link to="/categories/vitamins" className="text-gray-300 hover:text-white">Vitamins & Minerals</Link></li>
              <li><Link to="/categories/weight-gainers" className="text-gray-300 hover:text-white">Weight Gainers</Link></li>
            </ul>
          </div>
          
          {/* Help Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Help</h3>
            <ul className="space-y-2">
              <li><Link to="/faq" className="text-gray-300 hover:text-white">FAQ</Link></li>
              <li><Link to="/shipping" className="text-gray-300 hover:text-white">Shipping Policy</Link></li>
              <li><Link to="/returns" className="text-gray-300 hover:text-white">Returns & Refunds</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact Us</Link></li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">Subscribe to get special offers and updates on new products.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-2 w-full bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-supplement-purple rounded-l"
              />
              <button type="submit" className="bg-supplement-purple hover:bg-supplement-purple2 px-4 py-2 rounded-r">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2025 GainzGear. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-400 hover:text-white">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
