import { useState } from "react";
import { Bot, Send, Sparkles, X } from "lucide-react";

const suggestions = ["Best protein for recovery?", "What is creatine used for?", "Show me low-cost options"];

export default function ShoppingAssistant() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hi, I’m your Gainz Gear guide. Ask me about products, ingredients, or finding the right fit for your goals." },
  ]);

  async function ask(question = input) {
    const content = question.trim();
    if (!content || loading) return;
    const next = [...messages, { role: "user", content }];
    setMessages(next);
    setInput("");
    setLoading(true);
    try {
      const response = await fetch("/api/chat", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ messages: next }) });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error);
      setMessages((current) => [...current, { role: "assistant", content: data.text }]);
    } catch (error) {
      setMessages((current) => [...current, { role: "assistant", content: error.message || "I couldn’t reach the assistant. Please try again." }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {open && (
        <section className="mb-3 flex h-[min(620px,calc(100vh-110px))] w-[min(380px,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl border bg-card shadow-2xl" aria-label="Gainz Gear shopping assistant">
          <header className="flex items-center justify-between bg-primary px-5 py-4 text-primary-foreground">
            <div className="flex items-center gap-3"><span className="rounded-xl bg-primary-foreground/15 p-2"><Sparkles size={18} /></span><div><h2 className="font-semibold">Gainz Guide</h2><p className="text-xs opacity-80">Catalog-powered recommendations</p></div></div>
            <button className="rounded-lg p-2 hover:bg-primary-foreground/15" onClick={() => setOpen(false)} aria-label="Close assistant"><X size={18} /></button>
          </header>
          <div className="flex-1 space-y-4 overflow-y-auto bg-muted/20 p-4">
            {messages.map((message, index) => <div key={`${message.role}-${index}`} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}><p className={`max-w-[88%] whitespace-pre-wrap rounded-2xl px-4 py-3 text-sm leading-6 ${message.role === "user" ? "rounded-br-sm bg-primary text-primary-foreground" : "rounded-bl-sm border bg-card text-card-foreground"}`}>{message.content}</p></div>)}
            {loading && <div className="flex items-center gap-2 text-sm text-muted-foreground"><span className="h-2 w-2 animate-bounce rounded-full bg-primary" /><span className="h-2 w-2 animate-bounce rounded-full bg-primary [animation-delay:120ms]" /><span className="h-2 w-2 animate-bounce rounded-full bg-primary [animation-delay:240ms]" /> Thinking...</div>}
          </div>
          {messages.length === 1 && <div className="flex flex-wrap gap-2 border-t bg-card px-4 py-3">{suggestions.map((suggestion) => <button key={suggestion} onClick={() => ask(suggestion)} className="rounded-full border px-3 py-1.5 text-xs transition-colors hover:border-primary hover:text-primary">{suggestion}</button>)}</div>}
          <form className="flex gap-2 border-t bg-card p-3" onSubmit={(event) => { event.preventDefault(); ask(); }}><input value={input} onChange={(event) => setInput(event.target.value)} placeholder="Ask about supplements..." className="min-w-0 flex-1 rounded-xl border bg-background px-3 py-2 text-sm outline-none ring-primary focus:ring-2" aria-label="Ask the shopping assistant" /><button type="submit" disabled={!input.trim() || loading} className="rounded-xl bg-primary px-3 text-primary-foreground disabled:cursor-not-allowed disabled:opacity-50" aria-label="Send question"><Send size={17} /></button></form>
        </section>
      )}
      <button onClick={() => setOpen((value) => !value)} className="ml-auto flex items-center gap-2 rounded-full bg-primary px-4 py-3 font-medium text-primary-foreground shadow-lg transition-transform hover:scale-105" aria-expanded={open}><Bot size={19} /><span className="hidden sm:inline">Ask Gainz Guide</span></button>
    </div>
  );
}
