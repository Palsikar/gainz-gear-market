
import { useState, useEffect } from 'react';
import Layout from '@/components/Layout/Layout';
import ProductCard from '@/components/Product/ProductCard';
import { products, categories } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { SlidersHorizontal, X } from 'lucide-react';

export default function Products() {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [showFilters, setShowFilters] = useState(false);
  
  // Get price range from products
  const maxPrice = Math.max(...products.map(product => product.price));
  
  // Filter products when criteria changes
  useEffect(() => {
    let result = [...products];
    
    // Filter by selected categories
    if (selectedCategories.length > 0) {
      result = result.filter(product => selectedCategories.includes(product.category));
    }
    
    // Filter by price range
    result = result.filter(product => 
      product.price >= priceRange[0] && 
      product.price <= (priceRange[1] === 100 ? maxPrice : priceRange[1])
    );
    
    setFilteredProducts(result);
  }, [selectedCategories, priceRange, maxPrice]);
  
  // Toggle category selection
  const toggleCategory = (category) => {
    setSelectedCategories(prev => 
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };
  
  // Clear all filters
  const clearFilters = () => {
    setSelectedCategories([]);
    setPriceRange([0, 100]);
  };
  
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-purple-900 via-indigo-900 to-purple-900 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 animate-fade-in">
              Premium Supplements
            </h1>
            <p className="text-xl text-purple-200 max-w-2xl mx-auto">
              Quality supplements scientifically formulated to help you achieve your fitness goals
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            {/* Mobile Filter Toggle */}
            <div className="md:hidden mb-4">
              <Button 
                onClick={() => setShowFilters(!showFilters)} 
                variant="outline" 
                className={`w-full flex justify-between items-center border-2 border-purple-500 bg-gray-800/50 text-white ${showFilters ? 'bg-purple-900/50' : ''}`}
              >
                <span className="flex items-center">
                  <SlidersHorizontal className="h-4 w-4 mr-2" />
                  Filters
                </span>
                {showFilters ? <X className="h-4 w-4" /> : null}
              </Button>
            </div>
            
            {/* Sidebar Filters */}
            <div className={`md:w-1/4 ${showFilters ? 'block' : 'hidden md:block'}`}>
              <div className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-purple-500/20 sticky top-20">
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="font-bold text-xl text-white">Filters</h2>
                    <button 
                      onClick={clearFilters}
                      className="text-sm text-purple-400 hover:text-purple-300 font-medium hover:underline"
                    >
                      Clear all
                    </button>
                  </div>
                  
                  {/* Categories */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-lg mb-3 text-white">Categories</h3>
                    <div className="space-y-3">
                      {categories.map(category => (
                        <div key={category.id} className="flex items-center">
                          <Checkbox
                            id={`category-${category.id}`}
                            checked={selectedCategories.includes(category.id)}
                            onCheckedChange={() => toggleCategory(category.id)}
                            className="border-2 border-purple-500/50 data-[state=checked]:bg-purple-600 data-[state=checked]:border-purple-600"
                          />
                          <label 
                            htmlFor={`category-${category.id}`}
                            className="ml-3 text-gray-300 cursor-pointer hover:text-purple-300 transition-colors"
                          >
                            {category.name}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Price Range */}
                  <div>
                    <h3 className="font-semibold text-lg mb-3 text-white">Price Range</h3>
                    <Slider
                      defaultValue={priceRange}
                      max={100}
                      step={1}
                      value={priceRange}
                      onValueChange={setPriceRange}
                      className="mb-6"
                    />
                    <div className="flex justify-between text-sm font-medium">
                      <span className="bg-purple-900/70 px-3 py-1 rounded-lg text-purple-200">${priceRange[0].toFixed(2)}</span>
                      <span className="bg-purple-900/70 px-3 py-1 rounded-lg text-purple-200">
                        ${priceRange[1] === 100 ? maxPrice.toFixed(2) : priceRange[1].toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Product Grid */}
            <div className="md:w-3/4">
              {filteredProducts.length > 0 ? (
                <>
                  <p className="mb-6 text-purple-300 font-medium">{filteredProducts.length} products found</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProducts.map(product => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                </>
              ) : (
                <div className="text-center py-16 bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-md border border-purple-500/20">
                  <h3 className="text-2xl font-bold mb-3 text-white">No products found</h3>
                  <p className="text-gray-400 mb-8">Try changing your filters or search query</p>
                  <Button 
                    onClick={clearFilters}
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 border-0 text-white"
                  >
                    Clear all filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
