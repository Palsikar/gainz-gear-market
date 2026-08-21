import { products } from "../data/products-data";

const STOP_WORDS = new Set(["the", "and", "for", "with", "what", "which", "are", "can", "you", "recommend", "best", "good", "from"]);

const normalize = (value = "") => value.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();

export function retrieveProducts(query, limit = 5) {
  const terms = normalize(query).split(/\s+/).filter((term) => term.length > 2 && !STOP_WORDS.has(term));
  const scored = products.map((product) => {
    const text = normalize([
      product.name,
      product.description,
      product.category,
      ...(product.ingredients || []),
      ...(product.flavors || []),
      ...(product.sizes || []),
    ].join(" "));
    const score = terms.reduce((total, term) => total + (text.includes(term) ? (text.includes(normalize(product.name)) ? 3 : 1) : 0), 0);
    return { product, score };
  });

  const matches = scored.filter(({ score }) => score > 0).sort((a, b) => b.score - a.score).slice(0, limit);
  return matches.length ? matches.map(({ product }) => product) : products.filter((product) => product.featured).slice(0, limit);
}

export function toCatalogContext(items) {
  return items.map((product) => JSON.stringify({
    id: product.id,
    name: product.name,
    category: product.category,
    description: product.description,
    price: product.price,
    inStock: product.inStock,
    ingredients: product.ingredients,
    flavors: product.flavors,
    sizes: product.sizes,
    nutritionInfo: product.nutritionInfo,
  })).join("\n");
}
