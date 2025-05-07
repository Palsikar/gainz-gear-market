
import React from 'react';
import Layout from '@/components/Layout/Layout';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <Layout>
      {/* Hero Section with vibrant gradient background */}
      <section className="bg-gradient-to-r from-black via-purple-900 to-black min-h-screen flex items-center justify-center py-24 md:py-32 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight animate-fade-in text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500">
              FUEL YOUR POTENTIAL
            </h1>
            <div className="h-2 w-32 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full mb-8 animate-pulse"></div>
            <p className="text-2xl md:text-3xl mb-12 font-bold text-white leading-relaxed max-w-3xl text-shadow-glow">
              "Transform your body, transform your life"
            </p>
            <Link 
              to="/products" 
              className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg group"
            >
              Shop Collection
              <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
