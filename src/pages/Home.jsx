
import React from 'react';
import Layout from '@/components/Layout/Layout';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <Layout>
      {/* Call to Action - Yellow Section Only */}
      <section className="py-16 bg-gradient-to-r from-yellow-400 to-orange-500 text-black min-h-screen flex items-center justify-center">
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
