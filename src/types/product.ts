
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  featured: boolean;
  flavors?: string[];
  sizes?: string[];
  nutritionInfo?: {
    servingSize: string;
    servingsPerContainer: number;
    protein?: string;
    carbs?: string;
    fat?: string;
    calories?: string;
    sugar?: string;
  };
  ingredients?: string[];
}

export type ProductCategory = 
  | 'protein' 
  | 'pre-workout' 
  | 'vitamins' 
  | 'weight-gainers' 
  | 'amino-acids' 
  | 'creatine';

export interface CategoryInfo {
  id: ProductCategory;
  name: string;
  description: string;
  image: string;
}
