import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, X, Send, Bot, Sparkles } from "lucide-react";
import { profile, experience, education, projects, stats, skillGroups } from "../data";

/* ── Types ── */
type Message = { id: number; from: "user" | "bot"; text: string };

/* ── Quick-start suggestions ── */
const QUICK = [
  "Tell me about Deepan",
  "What's his tech stack?",
  "Show me his projects",
  "How to hire him?",
];

/* ── Inline bold renderer: **text** → <strong> ── */
function RichText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <strong key={i} className="font-semibold">
            {part.slice(2, -2)}
          </strong>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </>
  );
}

/* ── Knowledge-base responder ── */
function getResponse(raw: string): string {
  const q = raw.toLowerCase().trim();

  /* Greeting */
  if (/^(hi|hello|hey|sup|howdy|good\s*(morning|afternoon|evening))/i.test(q)) {
    return `Hi there! 👋 I'm **Deepan's AI assistant**. I can tell you about his experience, skills, projects, or how to get in touch. What would you like to know?`;
  }

  /* About / who is */
  if (/\b(about|who|yourself|introduce|tell me about deepan)\b/i.test(q)) {
    return `${profile.about}\n\nDeepan is based in **${profile.location}** and currently **open to new opportunities** in AI engineering and full-stack development.`;
  }

  /* Experience / career */
  if (/\b(experience|career|work|job|role|company|companies|background)\b/i.test(q)) {
    const list = experience
      .map((j) => `• **${j.title}** at ${j.company} *(${j.dates})*`)
      .join("\n");
    return `Deepan has **${stats[0].value}** of professional experience across **${stats[2].value} companies**:\n\n${list}`;
  }

  /* Hackathon / awards */
  if (/\b(hackathon|champion|won|win|competition|award|trophy|achievement)\b/i.test(q)) {
    return `Deepan is a **7× Hackathon Champion** 🏆 — winning competitions across AI, full-stack, and blockchain domains.\n\nHe also received the **"Above & Beyond Award"** at Aravind Eye Care System for exceptional contribution to enterprise healthcare platforms.`;
  }

  /* Skills / tech */
  if (/\b(skill|tech|stack|language|framework|tool|know|use|expertise)\b/i.test(q)) {
    const groups = skillGroups
      .map((g) => `**${g.label}:** ${g.items.join(", ")}`)
      .join("\n\n");
    return `Here's Deepan's tech stack:\n\n${groups}`;
  }

  /* Projects */
  if (/\b(project|build|built|made|developed|portfolio|work\s*sample)\b/i.test(q)) {
    const top = projects
      .slice(0, 6)
      .map((p) => `• **${p.name}** — ${p.tech}`)
      .join("\n");
    return `Deepan has **${projects.length} projects** in his portfolio. Highlights:\n\n${top}\n\n…and ${projects.length - 6} more! Scroll to the Projects section to see them all.`;
  }

  /* Education */
  if (/\b(education|degree|college|university|study|studied|academic)\b/i.test(q)) {
    return `📚 **${education.degree}**\n${education.school}\n*(${education.dates})*\n\nRelevant areas: ${education.relevant}`;
  }

  /* Contact */
  if (/\b(contact|email|phone|mobile|reach|linkedin|connect|message)\b/i.test(q)) {
    return `Here's how to reach Deepan:\n\n📧 **Email:** ${profile.email}\n📱 **Phone:** ${profile.phone}\n🔗 **LinkedIn:** ${profile.linkedin}`;
  }

  /* Availability / hire */
  if (/\b(available|hire|hiring|open|opportunity|job\s*offer|looking|recruit)\b/i.test(q)) {
    return `Yes! Deepan is **currently open to new opportunities** 🟢\n\nHe's interested in roles in AI engineering, full-stack development, and related fields — on-site or remote. Drop him a line at **${profile.email}**`;
  }

  /* Location */
  if (/\b(location|where|based|city|country|india|remote)\b/i.test(q)) {
    return `Deepan is based in **${profile.location}** and open to both on-site and remote opportunities.`;
  }

  /* AI / LLM specific */
  if (/\b(ai|llm|gpt|agent|mcp|model context|machine learning|ml|nlp|genai)\b/i.test(q)) {
    return `AI is Deepan's core focus. He works with:\n\n• **LLMs & AI Agents** — building autonomous intelligent systems\n• **MCP (Model Context Protocol)** — enterprise AI integrations\n• **Demand Forecasting & DemandAI+** — supply chain intelligence\n• **FastAPI / FastMCP** — production-grade AI microservices\n\nCurrently at **Logility (Aptean)** building next-gen AI-powered planning tools.`;
  }

  /* Current company / current job */
  if (/\b(current|now|currently|latest|recent|logility|aptean)\b/i.test(q)) {
    const current = experience[0];
    return `Deepan currently works as **${current.title}** at **${current.company}** (${current.dates}).\n\n${current.bullets.slice(0, 2).join("\n\n")}`;
  }

  /* Stats */
  if (/\b(stats|numbers|facts|summary|overview)\b/i.test(q)) {
    const s = stats.map((st) => `• **${st.value}** — ${st.label}`).join("\n");
    return `Here's a quick snapshot:\n\n${s}`;
  }

  /* Fallback */
  return `I'm not sure about that, but I can tell you about Deepan's **experience**, **skills**, **projects**, **education**, or **contact** details. Try one of those topics!`;
}

/* ── Typing indicator ── */
function TypingDots() {
  return (
    <div className="flex items-center gap-2">
      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-100">
        <Bot size={13} className="text-indigo-600" />
      </div>
      <div className="flex items-center gap-1 rounded-2xl rounded-tl-sm bg-slate-100 px-3.5 py-3">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="h-1.5 w-1.5 rounded-full bg-slate-400"
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 0.55, delay: i * 0.14, repeat: Infinity }}
          />
        ))}
      </div>
    </div>
  );
}

/* ── Main component ── */
export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      from: "bot",
      text: `Hi! 👋 I'm **Deepan's AI assistant**. Ask me anything about his experience, skills, projects, or how to hire him!`,
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  /* Scroll to bottom on new messages */
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  /* Auto-focus input when panel opens */
  useEffect(() => {
    if (open) {
      const t = setTimeout(() => inputRef.current?.focus(), 250);
      return () => clearTimeout(t);
    }
  }, [open]);

  /* Lock body scroll on mobile when open */
  useEffect(() => {
    if (open && window.innerWidth < 640) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const send = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || typing) return;
    setMessages((prev) => [...prev, { id: Date.now(), from: "user", text: trimmed }]);
    setInput("");
    setTyping(true);
    const delay = 700 + Math.random() * 400;
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, from: "bot", text: getResponse(trimmed) },
      ]);
      setTyping(false);
    }, delay);
  };

  const isFirstMessage = messages.length === 1 && !typing;

  return (
    <>
      {/* ── Chat panel ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-24 right-4 z-[70] flex w-[92vw] max-w-[370px] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-900/15 sm:right-6"
          >
            {/* Header */}
            <div className="flex items-center gap-3 bg-indigo-600 px-4 py-3.5">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/20">
                <Sparkles size={16} className="text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-white">Deepan's AI Assistant</p>
                <div className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <p className="text-[11px] text-indigo-200">Online · Usually instant</p>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="rounded-lg p-1 text-white/60 transition-colors hover:bg-white/15 hover:text-white"
                aria-label="Close chat"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className="scrollbar-hide flex h-80 flex-col gap-3 overflow-y-auto p-4 sm:h-[340px]">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex items-end gap-2 ${msg.from === "user" ? "flex-row-reverse" : "flex-row"}`}
                >
                  {msg.from === "bot" && (
                    <div className="mb-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-100">
                      <Bot size={13} className="text-indigo-600" />
                    </div>
                  )}
                  <div
                    className={`max-w-[78%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed whitespace-pre-line ${
                      msg.from === "user"
                        ? "rounded-br-sm bg-indigo-600 text-white"
                        : "rounded-bl-sm bg-slate-100 text-slate-700"
                    }`}
                  >
                    <RichText text={msg.text} />
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {typing && <TypingDots />}

              {/* Quick-start chips (shown only before first user message) */}
              {isFirstMessage && (
                <div className="mt-1 flex flex-wrap gap-2">
                  {QUICK.map((q) => (
                    <button
                      key={q}
                      onClick={() => send(q)}
                      className="rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1.5 text-xs font-medium text-indigo-600 transition-colors hover:bg-indigo-100 active:scale-95"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}

              <div ref={bottomRef} />
            </div>

            {/* Input bar */}
            <div className="border-t border-slate-100 p-3">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  send(input);
                }}
                className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 transition-colors focus-within:border-indigo-300 focus-within:bg-white"
              >
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask anything about Deepan…"
                  className="flex-1 bg-transparent text-sm text-slate-800 placeholder-slate-400 outline-none"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || typing}
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-indigo-600 text-white transition-all hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <Send size={13} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Floating trigger button ── */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Open AI assistant"}
        className="fixed bottom-5 right-4 z-[70] flex h-14 w-14 items-center justify-center rounded-full bg-indigo-600 text-white shadow-xl shadow-indigo-600/35 transition-transform hover:scale-105 hover:bg-indigo-700 active:scale-95 sm:right-6"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.18 }}
            >
              <X size={22} />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.18 }}
            >
              <MessageCircle size={22} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Online dot — only when closed */}
        {!open && (
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 2.3 }}
            className="absolute -top-0.5 -right-0.5 h-4 w-4 rounded-full border-2 border-white bg-emerald-500"
          />
        )}
      </motion.button>
    </>
  );
}
