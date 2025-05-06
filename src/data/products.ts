
import { Product } from "@/types/product";
import { products } from "./products-data";
import { categories, getCategoryInfo } from "./categories";

// Export categories for direct access
export { categories, getCategoryInfo };

// Helper functions for accessing product data
export function getProductById(id: string): Product | undefined {
  return products.find(product => product.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(product => product.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter(product => product.featured);
}

// Export products array for direct access
export { products };
