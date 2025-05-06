
import { useState } from 'react';
import { Star, ShoppingCart, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Product } from '@/types/product';
import { useCart } from '@/hooks/useCart';

interface ProductDetailProps {
  product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const [selectedFlavor, setSelectedFlavor] = useState(product.flavors ? product.flavors[0] : null);
  const [selectedSize, setSelectedSize] = useState(product.sizes ? product.sizes[0] : null);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: product.id,
        name: product.name + (selectedFlavor ? ` - ${selectedFlavor}` : '') + (selectedSize ? ` (${selectedSize})` : ''),
        price: product.price,
        image: product.image,
      });
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
        {/* Product Image */}
        <div className="flex justify-center items-center">
          <img src={product.image} alt={product.name} className="max-h-[400px] object-cover rounded-md" />
        </div>
        
        {/* Product Information */}
        <div className="flex flex-col">
          <div className="mb-2">
            <span className="text-sm text-gray-500 uppercase tracking-wider">{product.category}</span>
          </div>
          
          <h1 className="text-2xl md:text-3xl font-bold mb-2">{product.name}</h1>
          
          <div className="flex items-center mb-4">
            <div className="flex items-center mr-4">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`h-4 w-4 ${i < Math.floor(product.rating) ? "fill-yellow-400 stroke-yellow-400" : "stroke-gray-300"}`} 
                />
              ))}
              <span className="ml-2 text-sm font-medium">{product.rating} ({product.reviews} reviews)</span>
            </div>
            <span className={`px-2 py-1 text-xs rounded ${product.inStock ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
              {product.inStock ? "In Stock" : "Out of Stock"}
            </span>
          </div>
          
          <p className="text-gray-700 mb-6">{product.description}</p>
          
          <div className="mb-6">
            <span className="text-2xl font-bold">${product.price.toFixed(2)}</span>
          </div>
          
          {/* Flavor Selection */}
          {product.flavors && (
            <div className="mb-6">
              <h3 className="font-medium mb-2">Flavor</h3>
              <div className="flex flex-wrap gap-2">
                {product.flavors.map(flavor => (
                  <button
                    key={flavor}
                    className={`px-3 py-1 rounded-full text-sm ${
                      selectedFlavor === flavor
                        ? "bg-supplement-purple text-white"
                        : "bg-gray-100 hover:bg-gray-200"
                    }`}
                    onClick={() => setSelectedFlavor(flavor)}
                  >
                    {flavor}
                  </button>
                ))}
              </div>
            </div>
          )}
          
          {/* Size Selection */}
          {product.sizes && (
            <div className="mb-6">
              <h3 className="font-medium mb-2">Size</h3>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    className={`px-3 py-1 rounded-full text-sm ${
                      selectedSize === size
                        ? "bg-supplement-purple text-white"
                        : "bg-gray-100 hover:bg-gray-200"
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}
          
          {/* Quantity Selection */}
          <div className="mb-6">
            <h3 className="font-medium mb-2">Quantity</h3>
            <div className="flex items-center">
              <button
                className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-l-md"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                -
              </button>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-12 h-8 text-center border-y border-gray-300"
              />
              <button
                className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-r-md"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
          </div>
          
          {/* Add to Cart Button */}
          <Button 
            onClick={handleAddToCart} 
            className="bg-supplement-purple hover:bg-supplement-purple2 text-white px-8 py-2 rounded flex items-center justify-center gap-2"
            disabled={!product.inStock}
          >
            <ShoppingCart className="h-5 w-5" />
            Add to Cart
          </Button>
          
          {/* Shipping Info */}
          <div className="flex items-center mt-6 text-sm text-gray-600">
            <Package className="h-4 w-4 mr-2" />
            <span>Free shipping on orders over $50</span>
          </div>
        </div>
      </div>
      
      {/* Product Details Tabs */}
      <div className="p-6 border-t">
        <Tabs defaultValue="description">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
            <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
          </TabsList>
          <TabsContent value="description" className="p-4">
            <p className="text-gray-700">{product.description}</p>
          </TabsContent>
          <TabsContent value="nutrition" className="p-4">
            {product.nutritionInfo ? (
              <div>
                <h3 className="font-medium mb-2">Nutrition Information</h3>
                <div className="grid grid-cols-2 gap-y-2 text-sm">
                  <div className="font-medium">Serving Size:</div>
                  <div>{product.nutritionInfo.servingSize}</div>
                  
                  <div className="font-medium">Servings Per Container:</div>
                  <div>{product.nutritionInfo.servingsPerContainer}</div>
                  
                  {product.nutritionInfo.calories && (
                    <>
                      <div className="font-medium">Calories:</div>
                      <div>{product.nutritionInfo.calories}</div>
                    </>
                  )}
                  
                  {product.nutritionInfo.protein && (
                    <>
                      <div className="font-medium">Protein:</div>
                      <div>{product.nutritionInfo.protein}</div>
                    </>
                  )}
                  
                  {product.nutritionInfo.carbs && (
                    <>
                      <div className="font-medium">Carbohydrates:</div>
                      <div>{product.nutritionInfo.carbs}</div>
                    </>
                  )}
                  
                  {product.nutritionInfo.fat && (
                    <>
                      <div className="font-medium">Fat:</div>
                      <div>{product.nutritionInfo.fat}</div>
                    </>
                  )}
                  
                  {product.nutritionInfo.sugar && (
                    <>
                      <div className="font-medium">Sugar:</div>
                      <div>{product.nutritionInfo.sugar}</div>
                    </>
                  )}
                </div>
              </div>
            ) : (
              <p className="text-gray-500">Nutrition information not available for this product.</p>
            )}
          </TabsContent>
          <TabsContent value="ingredients" className="p-4">
            {product.ingredients ? (
              <div>
                <h3 className="font-medium mb-2">Ingredients</h3>
                <ul className="list-disc pl-5">
                  {product.ingredients.map((ingredient, index) => (
                    <li key={index} className="mb-1">{ingredient}</li>
                  ))}
                </ul>
              </div>
            ) : (
              <p className="text-gray-500">Ingredients information not available for this product.</p>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
