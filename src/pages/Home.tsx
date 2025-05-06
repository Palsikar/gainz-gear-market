
import Layout from '@/components/Layout/Layout';
import ProductCard from '@/components/Product/ProductCard';
import { products } from '@/data/products';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <Layout>
      {/* Hero Section with gradient background */}
      <section className="bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-700 py-16 md:py-24 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
                Power Your Workouts with Premium Supplements
              </h1>
              <p className="text-xl mb-8 text-purple-100">
                Quality ingredients, scientifically formulated to help you achieve your fitness goals.
              </p>
              <Link 
                to="/products" 
                className="inline-flex items-center bg-white text-purple-700 hover:bg-purple-50 font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img 
                src={products[1].image}
                alt="Featured Supplement" 
                className="h-80 object-contain rounded-lg transform rotate-3 hover:rotate-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products with animated cards */}
      <section className="py-16 bg-gradient-to-b from-violet-50 to-purple-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Featured Products
            </h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              Top-rated supplements to elevate your fitness journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.filter(product => product.featured).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/products" 
              className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
            >
              View All Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
