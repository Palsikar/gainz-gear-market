import Layout from '@/components/Layout/Layout';
import ProductCard from '@/components/Product/ProductCard';
import { muscleblazeProducts } from '@/data/muscleblaze-products';

// Import only the featured products for the homepage
const featuredProducts = muscleblazeProducts.filter(product => product.featured);

export default function Home() {
  const features = [
    {
      name: 'Authentic Products',
      description: 'We guarantee the authenticity of all products.',
      image: '/images/authentic.svg',
    },
    {
      name: 'Free Shipping',
      description: 'Free shipping on orders over $50.',
      image: '/images/shipping.svg',
    },
    {
      name: 'Secure Payments',
      description: 'Your payments are secure with our encryption technology.',
      image: '/images/payment.svg',
    },
    {
      name: 'Customer Support',
      description: '24/7 customer support to assist you with any questions.',
      image: '/images/support.svg',
    },
  ];
  
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-supplement-green py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Fuel Your Performance with MuscleBlaze
              </h1>
              <p className="text-lg mb-6">
                Premium supplements to help you achieve your fitness goals. Quality ingredients, scientifically formulated.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="/products" className="bg-supplement-purple hover:bg-supplement-purple2 text-white font-bold py-3 px-6 rounded-full transition-colors">
                  Shop Now
                </a>
                <a href="/about" className="bg-transparent hover:bg-gray-100 text-gray-700 font-bold py-3 px-6 rounded-full border border-gray-300 transition-colors">
                  Learn More
                </a>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://www.muscleblaze.com/on/demandware.static/-/Sites-mb-storefront-catalog/default/dwd308dfa3/images/clinically-researched-ingredeints.png" 
                alt="MuscleBlaze Supplements" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold">Featured MuscleBlaze Products</h2>
            <p className="text-gray-600 mt-2">Top-rated supplements to elevate your fitness journey</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold">Why Choose GainzGear?</h2>
            <p className="text-gray-600 mt-2">Experience the best in quality, service, and support</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
                <img src={feature.image} alt={feature.name} className="mx-auto h-16 mb-4" />
                <h3 className="font-semibold text-lg mb-2">{feature.name}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-supplement-purple text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Elevate Your Fitness?</h2>
          <p className="text-lg mb-8">Explore our wide range of supplements and find the perfect products for your goals.</p>
          <a href="/products" className="bg-white text-supplement-purple hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition-colors inline-block">
            Shop Now
          </a>
        </div>
      </section>
    </Layout>
  );
}
