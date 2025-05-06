
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from '@/components/Layout/Layout';
import ProductCard from '@/components/Product/ProductCard';
import { getProductsByCategory, getCategoryInfo } from '@/data/products';

export default function CategoryProducts() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const categoryInfo = id ? getCategoryInfo(id) : undefined;
  const products = id ? getProductsByCategory(id) : [];
  
  // If category doesn't exist, redirect to products page
  useEffect(() => {
    if (id && !categoryInfo) {
      navigate('/products');
    }
  }, [id, categoryInfo, navigate]);
  
  if (!categoryInfo) {
    return null;
  }
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <a href="/" className="text-gray-500 hover:text-gray-700">Home</a>
              </li>
              <li>
                <div className="flex items-center">
                  <span className="mx-2 text-gray-400">/</span>
                  <a href="/products" className="text-gray-500 hover:text-gray-700">Products</a>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <span className="mx-2 text-gray-400">/</span>
                  <span className="text-gray-700">{categoryInfo.name}</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
        
        {/* Category Header */}
        <div className="bg-gradient-to-r from-supplement-purple to-supplement-purple2 rounded-lg text-white p-8 mb-8">
          <h1 className="text-3xl font-bold mb-2">{categoryInfo.name}</h1>
          <p className="text-lg opacity-90">{categoryInfo.description}</p>
        </div>
        
        {/* Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        {products.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold mb-2">No products found in this category</h3>
            <p className="text-gray-600">Check back soon for new products!</p>
          </div>
        )}
      </div>
    </Layout>
  );
}
