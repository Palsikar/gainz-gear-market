import { generateText, gateway } from "ai";
import { retrieveProducts, toCatalogContext } from "../src/lib/catalog-retrieval.js";

const MODEL = process.env.AI_MODEL || "openai/gpt-4.1-mini";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  try {
    const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
    const messages = Array.isArray(body?.messages) ? body.messages : [];
    const latest = messages.at(-1)?.content?.trim();

    if (!latest || latest.length > 1000) return res.status(400).json({ error: "Please send a question under 1,000 characters." });

    const context = toCatalogContext(retrieveProducts(latest));
    const result = await generateText({
      model: gateway(MODEL),
      system: `You are Gainz Gear's helpful supplement shopping assistant. Answer only from the catalog context below. Never invent products, prices, stock, ingredients, nutrition facts, or medical benefits. If the catalog does not support an answer, say that clearly and suggest browsing the product catalog. You may compare products and recommend options based on the user's stated goal, but do not diagnose, prescribe, or promise results. For health, medication, pregnancy, allergy, or dosing questions, recommend consulting a qualified healthcare professional. Keep answers concise and include product names and prices when relevant.\n\nCATALOG CONTEXT:\n${context}`,
      messages: messages.slice(-8).map(({ role, content }) => ({ role, content })),
      maxOutputTokens: 500,
    });

    return res.status(200).json({ text: result.text });
  } catch (error) {
    console.error("[v0] Chat request failed", error);
    return res.status(500).json({ error: "The assistant is temporarily unavailable. Please try again." });
  }
}
