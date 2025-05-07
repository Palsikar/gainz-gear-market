
import { products } from "./products-data";
import { categories, getCategoryInfo } from "./categories";

// Export categories for direct access
export { categories, getCategoryInfo };

// Helper functions for accessing product data
export function getProductById(id) {
  return products.find(product => product.id === id);
}

export function getProductsByCategory(category) {
  return products.filter(product => product.category === category);
}

export function getFeaturedProducts() {
  return products.filter(product => product.featured);
}

// Export products array for direct access
export { products };
