
import { Link } from 'react-router-dom';
import { Star, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Product } from '@/types/product';
import { useCart } from '@/hooks/useCart';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  
  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
  };

  // Generate random background gradient
  const gradients = [
    'bg-gradient-to-r from-pink-500 to-purple-500',
    'bg-gradient-to-r from-blue-500 to-teal-500',
    'bg-gradient-to-r from-yellow-400 to-orange-500',
    'bg-gradient-to-r from-green-400 to-cyan-500',
    'bg-gradient-to-r from-purple-600 to-indigo-600',
  ];
  
  const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];

  return (
    <div className="product-card bg-white rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
      <div className={`${randomGradient} p-1 rounded-t-2xl`}>
        <HoverCard>
          <HoverCardTrigger asChild>
            <Link to={`/product/${product.id}`} className="block">
              <div className="relative h-64 overflow-hidden bg-white rounded-t-xl">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-contain transition-transform hover:scale-110 p-4"
                />
                {product.new && (
                  <span className="absolute top-2 right-2 bg-red-500 text-white text-sm px-3 py-1 rounded-full font-bold">
                    NEW
                  </span>
                )}
              </div>
            </Link>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="space-y-2">
              <h4 className="text-lg font-semibold">{product.name}</h4>
              <p className="text-sm text-gray-600">{product.description}</p>
              {product.nutritionInfo && (
                <div className="text-xs text-gray-500">
                  <p>Serving size: {product.nutritionInfo.servingSize}</p>
                  {product.nutritionInfo.protein && <p>Protein: {product.nutritionInfo.protein}</p>}
                  {product.nutritionInfo.calories && <p>Calories: {product.nutritionInfo.calories}</p>}
                </div>
              )}
            </div>
          </HoverCardContent>
        </HoverCard>
      </div>
      
      <div className="p-5 space-y-3">
        <div className="flex items-center justify-between">
          <span className="inline-block px-3 py-1 bg-supplement-gray text-gray-700 rounded-full text-xs font-medium capitalize">
            {product.category.replace('-', ' ')}
          </span>
          <div className="flex items-center bg-yellow-100 px-2 py-1 rounded-full">
            <Star className="h-4 w-4 fill-yellow-400 stroke-yellow-400 mr-1" />
            <span className="text-sm font-bold text-yellow-700">{product.rating}</span>
          </div>
        </div>
        
        <Link to={`/product/${product.id}`}>
          <h3 className="font-bold text-xl line-clamp-1 hover:text-supplement-purple transition-colors">
            {product.name}
          </h3>
        </Link>
        
        <div className="flex items-center justify-between pt-2">
          <span className="font-extrabold text-2xl text-gray-800">${product.price.toFixed(2)}</span>
          <Button 
            onClick={handleAddToCart}
            className={`rounded-full ${randomGradient} hover:opacity-90 transition-opacity text-white`}
          >
            <ShoppingCart className="h-5 w-5 mr-1" />
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
}
