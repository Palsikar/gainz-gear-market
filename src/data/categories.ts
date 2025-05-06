
import { CategoryInfo } from "@/types/product";

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

export function getCategoryInfo(categoryId: string): CategoryInfo | undefined {
  return categories.find(category => category.id === categoryId);
}
