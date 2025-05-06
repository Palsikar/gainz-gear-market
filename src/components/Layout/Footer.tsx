
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Company Info */}
          <div className="mb-4 md:mb-0">
            <Link to="/" className="flex items-center gap-2">
              <svg 
                viewBox="0 0 24 24" 
                fill="none" 
                className="h-8 w-8 text-purple-400"
                stroke="currentColor" 
                strokeWidth="2"
              >
                <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
                <line x1="16" y1="8" x2="2" y2="22" />
                <line x1="17.5" y1="15" x2="9" y2="15" />
              </svg>
              <span className="font-bold text-xl">GainzGear</span>
            </Link>
          </div>
          
          {/* Social Links */}
          <div className="flex space-x-6">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
              <Instagram size={22} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
              <Facebook size={22} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
              <Twitter size={22} />
            </a>
          </div>
          
          {/* Copyright */}
          <div className="mt-4 md:mt-0 text-sm text-gray-400">
            © 2025 GainzGear. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
