
import React from 'react';
import Layout from '@/components/Layout/Layout';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <Layout>
      {/* Hero Section with vibrant gradient background */}
      <section className="bg-gradient-to-r from-purple-900 via-indigo-800 to-blue-900 min-h-screen flex items-center justify-center py-24 md:py-32 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-extrabold mb-6 leading-tight animate-fade-in text-black">
              FUEL YOUR POTENTIAL
            </h1>
            <div className="h-2 w-40 bg-gradient-to-r from-pink-500 to-yellow-300 rounded-full mb-8 animate-pulse"></div>
            <p className="text-3xl md:text-4xl mb-12 font-extrabold animate-pulse text-black">
              "Transform your body, transform your life"
            </p>
            <Link 
              to="/products" 
              className="inline-flex items-center bg-black text-white font-bold py-4 px-10 rounded-none transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg group"
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
