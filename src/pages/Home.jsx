
import React from 'react';
import Layout from '@/components/Layout/Layout';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <Layout>
      {/* Hero Section with new background color */}
      <section className="bg-gradient-to-r from-purple-800 to-indigo-900 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-extrabold mb-6 text-white animate-fade-in">
              FUEL YOUR POTENTIAL
            </h1>
            
            <p className="text-xl text-purple-200 mb-10 max-w-2xl mx-auto">
              Premium supplements to maximize your performance and recovery
            </p>
            
            <Link 
              to="/products" 
              className="inline-flex items-center bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 px-10 rounded-none transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
            >
              Shop Collection
              <ArrowRight className="ml-2 h-6 w-6" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Featured Products */}
      <section className="py-16 bg-gradient-to-r from-indigo-100 to-purple-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Featured Products</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Product 1 */}
            <div className="bg-white rounded-lg p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <img 
                src="/lovable-uploads/91fbdc3d-c803-419f-b13f-3f5e46b9edb4.png" 
                alt="BCAA Pro" 
                className="w-full h-48 object-contain mb-4"
              />
              <h3 className="font-bold text-lg text-gray-800">BCAA Pro</h3>
              <p className="text-gray-600 text-sm mb-4">Essential branched-chain amino acids for recovery</p>
              <span className="font-bold text-supplement-purple">$27.99</span>
            </div>
            
            {/* Product 2 */}
            <div className="bg-white rounded-lg p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <img 
                src="/lovable-uploads/ca3593da-8420-46a5-90b2-3300211184f4.png" 
                alt="Creatine Monohydrate" 
                className="w-full h-48 object-contain mb-4"
              />
              <h3 className="font-bold text-lg text-gray-800">Creatine Powder</h3>
              <p className="text-gray-600 text-sm mb-4">100% pure micronized creatine for strength</p>
              <span className="font-bold text-supplement-purple">$29.99</span>
            </div>
            
            {/* Product 3 */}
            <div className="bg-white rounded-lg p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <img 
                src="/lovable-uploads/3b0e53a4-9404-4026-89e3-bab30199d7df.png" 
                alt="Mass Gainer" 
                className="w-full h-48 object-contain mb-4"
              />
              <h3 className="font-bold text-lg text-gray-800">Mass Gainer</h3>
              <p className="text-gray-600 text-sm mb-4">High-calorie formula for muscle mass</p>
              <span className="font-bold text-supplement-purple">$49.99</span>
            </div>
            
            {/* Product 4 */}
            <div className="bg-white rounded-lg p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <img 
                src="/lovable-uploads/c552a74b-2ca7-4f1d-ba36-4043c58fcdcf.png" 
                alt="Pre-Workout" 
                className="w-full h-48 object-contain mb-4"
              />
              <h3 className="font-bold text-lg text-gray-800">Wrath Pre-Workout</h3>
              <p className="text-gray-600 text-sm mb-4">Advanced formula for explosive energy</p>
              <span className="font-bold text-supplement-purple">$39.99</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Best Sellers */}
      <section className="py-16 bg-gradient-to-r from-purple-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Best Sellers</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Best Seller 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <img 
                src="/lovable-uploads/9cf47cb9-b432-427f-99d0-3ae05c69083b.png" 
                alt="Caffeine Tablets" 
                className="w-full h-48 object-contain bg-gray-50"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Caffeine Energy</h3>
                <p className="text-gray-600 text-sm mb-4">Pure caffeine tablets for enhanced focus and energy.</p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-supplement-purple">$19.99</span>
                  <Link to="/products" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Best Seller 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <img 
                src="/lovable-uploads/1ec2c40f-62bb-49d5-9bd1-5e9984a9ca6e.png" 
                alt="MB-Vite Multivitamin" 
                className="w-full h-48 object-contain bg-gray-50"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">MB-Vite Multivitamin</h3>
                <p className="text-gray-600 text-sm mb-4">Complete multivitamin with essential minerals for overall health.</p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-supplement-purple">$19.99</span>
                  <Link to="/products" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Best Seller 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <img 
                src="/lovable-uploads/b40ff15e-2ae1-419b-86a1-818515cfea81.png" 
                alt="Shilajit" 
                className="w-full h-48 object-contain bg-gray-50"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Himalaya Shilajit</h3>
                <p className="text-gray-600 text-sm mb-4">Natural energy booster that enhances stamina and strength.</p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-supplement-purple">$34.99</span>
                  <Link to="/products" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-yellow-400 to-orange-500 text-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto text-gray-800">
            Join thousands of satisfied customers who have transformed their fitness journey with our premium supplements.
          </p>
          <Link 
            to="/products" 
            className="inline-flex items-center bg-black text-white font-bold py-4 px-10 rounded-none transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
          >
            Browse Collection
            <ArrowRight className="ml-2 h-6 w-6" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
