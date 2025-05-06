
import { Product, CategoryInfo } from "@/types/product";

export const products: Product[] = [
  {
    id: "p1",
    name: "Ultra Whey Protein",
    description: "Premium whey protein isolate for maximum muscle recovery and growth. Each serving delivers 24g of high-quality protein with minimal fat and carbs.",
    price: 49.99,
    image: "/images/protein1.jpg",
    category: "protein",
    rating: 4.8,
    reviews: 342,
    inStock: true,
    featured: true,
    flavors: ["Chocolate", "Vanilla", "Strawberry", "Cookies & Cream"],
    sizes: ["2lb", "5lb", "10lb"],
    nutritionInfo: {
      servingSize: "30g",
      servingsPerContainer: 30,
      protein: "24g",
      carbs: "3g",
      fat: "1g",
      calories: "120",
      sugar: "1g"
    },
    ingredients: ["Whey Protein Isolate", "Cocoa Powder", "Natural & Artificial Flavors", "Salt", "Sucralose"]
  },
  {
    id: "p2",
    name: "Explosive Pre-Workout",
    description: "Maximize your training with our high-energy pre-workout formula. Provides intense energy, focus, and pumps for your most demanding workouts.",
    price: 39.99,
    image: "/images/preworkout1.jpg",
    category: "pre-workout",
    rating: 4.6,
    reviews: 275,
    inStock: true,
    featured: true,
    flavors: ["Fruit Punch", "Blue Raspberry", "Watermelon", "Orange"],
    sizes: ["30 servings", "60 servings"],
    nutritionInfo: {
      servingSize: "10g",
      servingsPerContainer: 30,
      calories: "5",
    },
    ingredients: ["Citrulline Malate", "Beta-Alanine", "Caffeine", "L-Tyrosine", "Taurine"]
  },
  {
    id: "p3",
    name: "Daily Multivitamin Complex",
    description: "Complete multivitamin formula designed specifically for active individuals. Supports overall health, immune function, and recovery.",
    price: 29.99,
    image: "/images/vitamin1.jpg",
    category: "vitamins",
    rating: 4.7,
    reviews: 189,
    inStock: true,
    featured: false,
    sizes: ["60 tablets", "120 tablets"],
    nutritionInfo: {
      servingSize: "1 tablet",
      servingsPerContainer: 60,
    },
    ingredients: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin E", "B-Complex Vitamins", "Zinc", "Magnesium"]
  },
  {
    id: "p4",
    name: "Mass Gainer 5000",
    description: "High-calorie formula designed to help hardgainers build size and strength. Contains quality protein, complex carbs, and essential nutrients.",
    price: 54.99,
    image: "/images/gainer1.jpg",
    category: "weight-gainers",
    rating: 4.5,
    reviews: 213,
    inStock: true,
    featured: true,
    flavors: ["Chocolate", "Vanilla", "Banana"],
    sizes: ["6lb", "12lb"],
    nutritionInfo: {
      servingSize: "165g",
      servingsPerContainer: 16,
      protein: "50g",
      carbs: "250g",
      fat: "10g",
      calories: "1250",
      sugar: "5g"
    },
    ingredients: ["Protein Blend (Whey, Casein)", "Maltodextrin", "Medium Chain Triglycerides", "Vitamins & Minerals", "Digestive Enzymes"]
  },
  {
    id: "p5",
    name: "Essential BCAAs",
    description: "Branched Chain Amino Acids supplement with optimal 2:1:1 ratio. Supports muscle recovery, reduces muscle breakdown during intense training.",
    price: 34.99,
    image: "/images/bcaa1.jpg",
    category: "amino-acids",
    rating: 4.6,
    reviews: 157,
    inStock: true,
    featured: false,
    flavors: ["Lemon-Lime", "Cherry", "Unflavored"],
    sizes: ["30 servings", "60 servings"],
    nutritionInfo: {
      servingSize: "7g",
      servingsPerContainer: 30,
      calories: "0",
    },
    ingredients: ["L-Leucine", "L-Isoleucine", "L-Valine", "Citric Acid", "Natural Flavors"]
  },
  {
    id: "p6",
    name: "Micronized Creatine Monohydrate",
    description: "100% pure creatine monohydrate for increased strength, power and muscle mass. Supports ATP energy production during high-intensity exercise.",
    price: 19.99,
    image: "/images/creatine1.jpg",
    category: "creatine",
    rating: 4.9,
    reviews: 423,
    inStock: true,
    featured: false,
    sizes: ["300g", "500g", "1000g"],
    nutritionInfo: {
      servingSize: "5g",
      servingsPerContainer: 60,
      calories: "0",
    },
    ingredients: ["Creatine Monohydrate"]
  },
  {
    id: "p7",
    name: "Plant Protein Plus",
    description: "Complete plant-based protein blend with 20g protein per serving. Perfect for vegans and those with dairy sensitivities.",
    price: 44.99,
    image: "/images/protein2.jpg",
    category: "protein",
    rating: 4.5,
    reviews: 178,
    inStock: true,
    featured: false,
    flavors: ["Chocolate", "Vanilla", "Berry"],
    sizes: ["2lb", "4lb"],
    nutritionInfo: {
      servingSize: "32g",
      servingsPerContainer: 28,
      protein: "20g",
      carbs: "7g",
      fat: "2g",
      calories: "130",
      sugar: "2g"
    },
    ingredients: ["Pea Protein Isolate", "Brown Rice Protein", "Hemp Protein", "Flaxseed", "Natural Flavors", "Stevia"]
  },
  {
    id: "p8",
    name: "ZMA Sleep & Recovery",
    description: "Synergistic combination of Zinc, Magnesium and Vitamin B6. Supports testosterone production, muscle recovery and quality sleep.",
    price: 22.99,
    image: "/images/vitamin2.jpg",
    category: "vitamins",
    rating: 4.7,
    reviews: 134,
    inStock: true,
    featured: false,
    sizes: ["90 capsules", "180 capsules"],
    nutritionInfo: {
      servingSize: "3 capsules",
      servingsPerContainer: 30,
    },
    ingredients: ["Zinc Monomethionine Aspartate", "Magnesium Aspartate", "Vitamin B6"]
  }
];

export const categories: CategoryInfo[] = [
  {
    id: "protein",
    name: "Protein",
    description: "High-quality protein supplements for muscle growth and recovery.",
    image: "/images/category-protein.jpg"
  },
  {
    id: "pre-workout",
    name: "Pre-Workout",
    description: "Energy-boosting formulas for maximum training intensity.",
    image: "/images/category-preworkout.jpg"
  },
  {
    id: "vitamins",
    name: "Vitamins & Minerals",
    description: "Essential nutrients to support overall health and wellness.",
    image: "/images/category-vitamins.jpg"
  },
  {
    id: "weight-gainers",
    name: "Weight Gainers",
    description: "Calorie-dense formulas to support mass building goals.",
    image: "/images/category-gainers.jpg"
  },
  {
    id: "amino-acids",
    name: "Amino Acids",
    description: "Building blocks of protein for muscle repair and growth.",
    image: "/images/category-aminos.jpg"
  },
  {
    id: "creatine",
    name: "Creatine",
    description: "Boost strength, power and muscle mass with this proven supplement.",
    image: "/images/category-creatine.jpg"
  }
];

export function getProductById(id: string): Product | undefined {
  return products.find(product => product.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(product => product.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter(product => product.featured);
}

export function getCategoryInfo(categoryId: string): CategoryInfo | undefined {
  return categories.find(category => category.id === categoryId);
}
