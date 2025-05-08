
import React from 'react';
import Layout from '@/components/Layout/Layout';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function Home() {
  return (
    <Layout>
      {/* Hero Section with improved visibility and color scheme */}
      <section className="bg-gradient-to-r from-supplement-purple2 via-blue-800 to-purple-900 min-h-screen flex items-center justify-center py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-extrabold mb-6 leading-tight animate-fade-in text-black">
              FUEL YOUR POTENTIAL
            </h1>
            
            <div className="h-2 w-40 bg-gradient-to-r from-orange-500 to-yellow-300 rounded-full mb-10 animate-pulse"></div>
            
            <Card className="w-full max-w-3xl mb-12 bg-white/90 backdrop-blur shadow-lg">
              <CardContent className="p-8">
                <p className="text-2xl md:text-3xl font-bold text-gray-800 animate-pulse">
                  "Transform your body, transform your life"
                </p>
              </CardContent>
            </Card>
            
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
      
      {/* Featured Categories Section */}
      <section className="py-16 bg-gradient-to-b from-gray-100 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Popular Categories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Category Card 1 */}
            <div className="bg-supplement-gray rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-2">
              <img 
                src="/images/category-protein.jpg" 
                alt="Protein" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Protein</h3>
                <p className="text-gray-600 mb-4">High-quality protein supplements for muscle growth and recovery.</p>
                <Link to="/products" className="text-supplement-purple font-medium flex items-center">
                  Shop Now
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
            
            {/* Category Card 2 */}
            <div className="bg-supplement-gray rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-2">
              <img 
                src="/images/category-preworkout.jpg" 
                alt="Pre-Workout" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Pre-Workout</h3>
                <p className="text-gray-600 mb-4">Boost your energy and focus for maximum workout performance.</p>
                <Link to="/products" className="text-supplement-purple font-medium flex items-center">
                  Shop Now
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
            
            {/* Category Card 3 */}
            <div className="bg-supplement-gray rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-2">
              <img 
                src="/images/category-vitamins.jpg" 
                alt="Vitamins" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Vitamins</h3>
                <p className="text-gray-600 mb-4">Essential vitamins and minerals for overall health and wellness.</p>
                <Link to="/products" className="text-supplement-purple font-medium flex items-center">
                  Shop Now
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-supplement-blue to-supplement-purple">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">Ready to Transform?</h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have transformed their fitness journey with our premium supplements.
          </p>
          <Link 
            to="/products" 
            className="inline-flex items-center bg-black text-white font-bold py-4 px-10 rounded-none transition-all duration-300 shadow-lg hover:shadow-xl text-lg group"
          >
            Browse Collection
            <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
