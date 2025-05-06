
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout/Layout';
import ProductCard from '@/components/Product/ProductCard';
import { Button } from '@/components/ui/button';
import { getFeaturedProducts, categories } from '@/data/products';
import { ChevronRight, Dumbbell, Award, Package, ArrowRight } from 'lucide-react';

export default function Home() {
  const featuredProducts = getFeaturedProducts();
  
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-supplement-purple to-supplement-purple2 text-white py-16 md:py-24">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                Premium Supplements for <span className="text-supplement-green">Maximum Results</span>
              </h1>
              <p className="text-lg md:text-xl mb-8 opacity-90">
                Science-backed formulas to help you build muscle, increase strength, and achieve your fitness goals faster.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/products">
                  <Button size="lg" className="bg-white text-supplement-purple hover:bg-gray-100">
                    Shop Now
                  </Button>
                </Link>
                <Link to="/about">
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src="/images/hero-supplement.png" 
                alt="Fitness supplements" 
                className="max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">Featured Products</h2>
            <Link to="/products" className="flex items-center text-supplement-purple hover:underline">
              View All <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map(category => (
              <Link key={category.id} to={`/categories/${category.id}`} className="group">
                <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                  <div className="h-40 overflow-hidden">
                    <img 
                      src={category.image} 
                      alt={category.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="p-3 text-center">
                    <h3 className="font-semibold group-hover:text-supplement-purple transition-colors">{category.name}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Why Choose Our Supplements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
              <div className="bg-supplement-green rounded-full p-4 mb-4">
                <Award className="h-8 w-8 text-supplement-purple" />
              </div>
              <h3 className="font-bold text-lg mb-2">Premium Quality</h3>
              <p className="text-gray-600">All our products undergo rigorous testing and use only the highest quality ingredients.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
              <div className="bg-supplement-green rounded-full p-4 mb-4">
                <Dumbbell className="h-8 w-8 text-supplement-purple" />
              </div>
              <h3 className="font-bold text-lg mb-2">Science-Backed</h3>
              <p className="text-gray-600">Formulated based on the latest scientific research and proven to deliver results.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
              <div className="bg-supplement-green rounded-full p-4 mb-4">
                <Package className="h-8 w-8 text-supplement-purple" />
              </div>
              <h3 className="font-bold text-lg mb-2">Fast Shipping</h3>
              <p className="text-gray-600">Quick delivery and free shipping on orders over $50 to get you started faster.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-supplement-purple text-white">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Transform Your Fitness Journey?</h2>
          <p className="text-lg mb-8 opacity-90">Join thousands of satisfied customers who have achieved their fitness goals with our supplements.</p>
          <Link to="/products">
            <Button size="lg" className="bg-white text-supplement-purple hover:bg-gray-100">
              Start Shopping <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
