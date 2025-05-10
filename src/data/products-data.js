
// Converting from TypeScript to JavaScript
export const products = [
  {
    id: "p1",
    name: "Optimum Nutrition Creatine Powder",
    description: "100% pure creatine monohydrate for increased strength, power and muscle mass.",
    price: 29.99,
    image: "/lovable-uploads/007d0dff-5340-4856-b6f0-26cec1017819.png",
    category: "creatine",
    rating: Math.floor(Math.random() * 2) + 4, // Random rating between 4-5
    reviews: 423,
    inStock: true,
    featured: true,
    new: false,
    stock: 120,
    sizes: ["300g", "500g", "1000g"],
    nutritionInfo: {
      servingSize: "5g",
      servingsPerContainer: 60,
      calories: "0",
    },
    ingredients: ["Creatine Monohydrate"]
  },
  {
    id: "p2",
    name: "MuscleBlaze Wrath Pre-Workout",
    description: "Advanced pre-workout formula with Creapure and NitroBlaze for explosive energy.",
    price: 39.99,
    image: "/lovable-uploads/9e2b39d9-930f-4981-a108-c49a1920b943.png",
    category: "pre-workout",
    rating: Math.floor(Math.random() * 2) + 4, // Random rating between 4-5
    reviews: 312,
    inStock: true,
    featured: true,
    new: true,
    stock: 85,
    flavors: ["Fruit Fury"],
    sizes: ["510g"],
    nutritionInfo: {
      servingSize: "8.5g",
      servingsPerContainer: 60,
      calories: "15",
    },
    ingredients: ["Citrulline Malate", "Beta-Alanine", "Caffeine", "Creapure", "BioPerine"]
  },
  {
    id: "p3",
    name: "Caffeine Energy Boost",
    description: "Pure caffeine tablets for enhanced focus, improved energy levels and better workout performance.",
    price: 19.99,
    image: "/lovable-uploads/a32ac457-d8d7-480e-9d18-a65b8e510d0e.png",
    category: "pre-workout",
    rating: Math.floor(Math.random() * 2) + 4, // Random rating between 4-5
    reviews: 178,
    inStock: true,
    featured: false,
    new: true,
    stock: 150,
    sizes: ["100 tablets", "200 tablets"],
    nutritionInfo: {
      servingSize: "1 tablet",
      servingsPerContainer: 100,
    },
    ingredients: ["Caffeine Anhydrous 200mg", "Microcrystalline Cellulose"]
  },
  {
    id: "p4",
    name: "AM Mass Gainer",
    description: "High-calorie formula with quality protein and complex carbs designed to help hardgainers build size and strength.",
    price: 49.99,
    image: "/lovable-uploads/6f2924da-17e8-4bbd-a8c0-56fe86d1003e.png",
    category: "weight-gainers",
    rating: Math.floor(Math.random() * 2) + 4, // Random rating between 4-5
    reviews: 256,
    inStock: true,
    featured: true,
    new: false,
    stock: 70,
    flavors: ["Chocolate"],
    sizes: ["5lb", "10lb"],
    nutritionInfo: {
      servingSize: "165g",
      servingsPerContainer: 16,
      protein: "50g",
      carbs: "250g",
      fat: "10g",
      calories: "1250",
      sugar: "5g"
    },
    ingredients: ["Whey Protein Concentrate", "Maltodextrin", "Medium Chain Triglycerides", "Vitamins & Minerals"]
  },
  {
    id: "p5",
    name: "Pure Nutrition Whey Protein",
    description: "Premium whey protein for maximum muscle recovery and growth with minimal carbs and fat.",
    price: 54.99,
    image: "/lovable-uploads/a27652df-ef56-422e-81be-b0391cbd5950.png",
    category: "protein",
    rating: Math.floor(Math.random() * 2) + 4, // Random rating between 4-5
    reviews: 485,
    inStock: true,
    featured: true,
    new: false,
    stock: 100,
    flavors: ["Chocolate", "Vanilla", "Strawberry"],
    sizes: ["1kg", "2kg"],
    nutritionInfo: {
      servingSize: "30g",
      servingsPerContainer: 33,
      protein: "24g",
      carbs: "3g",
      fat: "1.5g",
      calories: "120",
      sugar: "2g"
    },
    ingredients: ["Whey Protein Isolate", "Whey Protein Concentrate", "Cocoa Powder", "Natural Flavors"]
  },
  {
    id: "p6",
    name: "MuscleBlaze MB-Vite Multivitamin",
    description: "Complete multivitamin with essential minerals for overall health and wellbeing.",
    price: 19.99,
    image: "/lovable-uploads/67ee56ed-7050-4c59-bbc5-3de1c08cb13a.png",
    category: "vitamins",
    rating: Math.floor(Math.random() * 2) + 4, // Random rating between 4-5
    reviews: 320,
    inStock: true,
    featured: true,
    new: false,
    stock: 200,
    sizes: ["60 tablets", "120 tablets"],
    nutritionInfo: {
      servingSize: "1 tablet",
      servingsPerContainer: 60,
      calories: "5",
    },
    ingredients: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin E", "B-Complex", "Minerals"]
  },
  {
    id: "p7",
    name: "Spring Valley Omega-3",
    description: "High-quality Omega-3 fish oil supplements for heart health and cognitive function.",
    price: 22.99,
    image: "/lovable-uploads/36eb6593-ae32-43c4-924c-2e409344f897.png",
    category: "vitamins",
    rating: Math.floor(Math.random() * 2) + 4, // Random rating between 4-5
    reviews: 275,
    inStock: true,
    featured: false,
    new: true,
    stock: 180,
    sizes: ["60 capsules", "120 capsules"],
    nutritionInfo: {
      servingSize: "1 capsule",
      servingsPerContainer: 60,
      calories: "10",
    },
    ingredients: ["Fish Oil", "EPA", "DHA", "Gelatin", "Glycerin", "Natural Lemon Flavor"]
  },
  {
    id: "p8",
    name: "Himalaya Shilajit",
    description: "Natural energy booster and adaptogen that enhances stamina and strength.",
    price: 34.99,
    image: "/lovable-uploads/a041dfcd-fba9-4889-9791-1749abc1a879.png",
    category: "vitamins",
    rating: Math.floor(Math.random() * 2) + 4, // Random rating between 4-5
    reviews: 189,
    inStock: true,
    featured: false,
    new: true,
    stock: 95,
    sizes: ["60 capsules"],
    nutritionInfo: {
      servingSize: "1 capsule",
      servingsPerContainer: 60,
    },
    ingredients: ["Purified Shilajit Extract", "Vegetable Capsule"]
  },
  {
    id: "p9",
    name: "CrazyBulk Trenorol",
    description: "Natural supplement for building muscle, improving strength and enhancing fat loss.",
    price: 64.99,
    image: "/lovable-uploads/4d6688c1-505a-4659-abd0-3649c2eaa835.png",
    category: "muscle-builders",
    rating: Math.floor(Math.random() * 2) + 4, // Random rating between 4-5
    reviews: 225,
    inStock: true,
    featured: true,
    new: false,
    stock: 50,
    sizes: ["90 capsules"],
    nutritionInfo: {
      servingSize: "3 capsules",
      servingsPerContainer: 30,
    },
    ingredients: ["Beta Sitosterol", "Samento Inner Bark", "Nettle Leaf Extract", "Pepsin"]
  },
  {
    id: "p10",
    name: "Nature's Velvet Multivitamin",
    description: "Herbal source of vitamins & minerals for daily nutritional support.",
    price: 18.99,
    image: "/lovable-uploads/81e02929-b5aa-4113-9df9-87a67b8fcedf.png",
    category: "vitamins",
    rating: Math.floor(Math.random() * 2) + 4, // Random rating between 4-5
    reviews: 145,
    inStock: true,
    featured: false,
    new: true,
    stock: 220,
    sizes: ["60 tablets"],
    nutritionInfo: {
      servingSize: "1 tablet",
      servingsPerContainer: 60,
    },
    ingredients: ["Herbal Extracts", "Essential Vitamins", "Minerals", "Plant Concentrates"]
  },
  {
    id: "p11",
    name: "MB BCAA Pro",
    description: "Essential branched-chain amino acids with L-Glutamine for muscle recovery and endurance.",
    price: 27.99,
    image: "/lovable-uploads/179b5b8a-8df5-4622-ad34-c3801bed1860.png",
    category: "amino-acids",
    rating: Math.floor(Math.random() * 2) + 4, // Random rating between 4-5
    reviews: 210,
    inStock: true,
    featured: true,
    new: false,
    stock: 75,
    flavors: ["Watermelon", "Blue Raspberry", "Unflavored"],
    sizes: ["250g", "500g"],
    nutritionInfo: {
      servingSize: "5g",
      servingsPerContainer: 50,
      calories: "20",
    },
    ingredients: ["L-Leucine", "L-Isoleucine", "L-Valine", "L-Glutamine", "Natural Flavors"]
  }
];
