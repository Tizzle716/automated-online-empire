import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState, type MouseEvent } from "react";
import { headerHtml, introHtml, modulesHtml, pricingHtml, footerHtml } from "@/content/sections";
import { AGENTS_DATABASE, type Agent } from "@/content/agents";

const TITLE = "AI Staffing Solution Consultants LLC | Enterprise AI Workforces & 284+ Agent Skills";
const DESC =
  "AISSC engineers autonomous multi-agent digital workforces, SUAD serverless architecture on Google Cloud, and a Web3 agent marketplace with 284+ specialized agent skills.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const CATS = [
  ["all", "All Divisions"],
  ["engineering", "Engineering"],
  ["design", "Design"],
  ["paid-media", "Paid Media"],
  ["sales", "Sales"],
  ["marketing", "Marketing"],
] as const;

function Html({ html }: { html: string }) {
  return <div className="contents" dangerouslySetInnerHTML={{ __html: html }} />;
}

function SkillsLibrary({ onOpen }: { onOpen: (a: Agent) => void }) {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("all");
  const filtered = useMemo(() => {
    const s = q.toLowerCase();
    return AGENTS_DATABASE.filter(
      (a) =>
        (cat === "all" || a.category === cat) &&
        (a.name.toLowerCase().includes(s) || a.spec.toLowerCase().includes(s) || a.when.toLowerCase().includes(s)),
    );
  }, [q, cat]);

  return (
    <section id="skills-library" className="py-20 bg-slate-950 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="web3-badge font-mono uppercase tracking-widest text-cyan-300 px-3.5 py-1.5 rounded-full text-xs inline-block mb-3">
            Official 284+ Agent Skills Directory
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">284+ Enterprise Agent Skills Roster</h2>
          <p className="text-slate-400 mt-3 text-sm">
            Search and explore every specialized agent in the complete Agency Agents roster engineered by{" "}
            <strong className="text-purple-300">AI Staffing Solution Consultants LLC</strong>.
          </p>
        </div>

        <div className="glass-panel p-6 rounded-2xl border border-purple-500/30 mb-10 space-y-4">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="relative w-full md:flex-grow">
              <i className="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search by agent name, skill keyword (e.g. React, Solidity, PPC, TikTok)..."
                className="w-full bg-slate-950/90 border border-slate-800 rounded-xl pl-11 pr-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
              />
            </div>
            <div className="whitespace-nowrap font-mono text-xs text-purple-300 bg-purple-950/80 px-4 py-3 rounded-xl border border-purple-500/30 flex items-center gap-2">
              <i className="fa-solid fa-robot text-cyan-400" />
              <span>
                Showing <strong className="text-white">{filtered.length}</strong> Agents
              </span>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-800/80 text-xs font-mono">
            <span className="text-slate-400 mr-2 text-[11px]">Division:</span>
            {CATS.map(([id, label]) => (
              <button
                key={id}
                onClick={() => setCat(id)}
                className={
                  cat === id
                    ? "px-3 py-1.5 rounded-lg bg-purple-600 text-white font-bold"
                    : "px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300"
                }
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.length === 0 && (
            <div className="col-span-full text-center py-12 text-slate-500 font-mono text-sm">
              <i className="fa-solid fa-ghost text-3xl mb-3 text-purple-400 block" />
              No agent skills found matching your search query.
            </div>
          )}
          {filtered.slice(0, 48).map((a) => (
            <div
              key={a.name}
              onClick={() => onOpen(a)}
              className="glass-card p-5 rounded-2xl border border-slate-800 hover:border-purple-500/50 hover:bg-slate-900/90 transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-0.5 rounded bg-purple-500/20 text-purple-300 text-[10px] font-mono font-bold uppercase">
                    {a.catLabel}
                  </span>
                  <i className={`fa-solid ${a.icon} text-cyan-400 group-hover:scale-110 transition-transform`} />
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">{a.name}</h3>
                <p className="text-xs text-slate-300 mt-2 line-clamp-2 leading-relaxed">{a.spec}</p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between font-mono text-[11px] text-slate-400">
                <span>When: {a.when.substring(0, 24)}...</span>
                <span className="text-cyan-400 font-bold group-hover:underline">View &rarr;</span>
              </div>
            </div>
          ))}
          {filtered.length > 48 && (
            <div className="col-span-full text-center pt-6">
              <span className="inline-block px-6 py-3 rounded-xl bg-slate-900 border border-purple-500/40 text-purple-300 font-mono text-xs font-bold">
                + Showing 48 of {filtered.length} Matching Agents (Refine search for specific skills)
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

const TOTAL = 1214;
const CHAPTERS = [
  { p: 0, t: "00:00", end: "05:20", name: "The Infrastructure Trap", color: "text-purple-400", tag: "COST REDUCTION", h: "Stopping Always-On VPS Billing Bleed", d: "Why paying 24/7 server rent kills agent margins, and how SUAD physics brings idle baseline fees to strictly $0.00." },
  { p: 26, t: "05:20", end: "12:40", name: "NEXUS Structured Thought", color: "text-cyan-400", tag: "DRIFT PROTECTION", h: "NEXUS Framework & Declarative Markdown/YAML State", d: "Locking agent cognitive state through MCP server routing and schema gauntlets across project phases." },
  { p: 62, t: "12:40", end: "20:14", name: "2-Way Avatar CVI Interface", color: "text-emerald-400", tag: "EXECUTIVE OVERVIEW", h: "Sheryl Executive Avatar & WASM Face Tracking", d: "Sub-500ms WebRTC conversational video interface with local WASM perception and zero raw video cloud egress." },
];

function fmt(pct: number) {
  const s = Math.floor((pct / 100) * TOTAL);
  const m = Math.floor(s / 60);
  return `${String(m).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;
}

function Podcast() {
  const [playing, setPlaying] = useState(false);
  const [pct, setPct] = useState(11);
  const [chapter, setChapter] = useState("Chapter 1: The Infrastructure Trap");
  useEffect(() => {
    if (!playing) return;
    const id = setInterval(() => setPct((p) => (p + 0.2 > 100 ? 0 : p + 0.2)), 1000);
    return () => clearInterval(id);
  }, [playing]);
  const clamp = (v: number) => Math.min(100, Math.max(0, v));
  const seek = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    setPct(clamp(((e.clientX - r.left) / r.width) * 100));
  };

  return (
    <section id="podcast-media" className="py-20 bg-slate-950 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-purple-400 bg-purple-500/10 px-3.5 py-1.5 rounded-full border border-purple-500/20 inline-flex items-center gap-2">
            <i className="fa-solid fa-headphones" /> Strategy Briefing
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4">20-Minute Strategy Briefing Podcast</h2>
          <p className="text-slate-400 text-sm mt-3">
            Explore how AI Staffing Solution Consultants LLC solves the AI "Infrastructure Trap" and eliminates chat window hallucinations through SUAD physics.
          </p>
        </div>
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-purple-500/30 shadow-2xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 to-purple-950/50 p-6 rounded-2xl border border-purple-500/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-purple-600 to-cyan-500 flex items-center justify-center text-white text-2xl shadow-lg shadow-purple-500/30 flex-shrink-0">
                  <i className="fa-solid fa-podcast" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20">
                    Deep Dive Briefing
                  </span>
                  <h3 className="text-base font-bold text-white mt-1">Decoding SUAD Physics & CVI</h3>
                  <p className="text-xs text-slate-400">Runtime: 20:14 • AISSC LLC</p>
                </div>
              </div>
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>{fmt(pct)}</span>
                  <span className="text-purple-400 font-semibold">{chapter}</span>
                  <span>20:14</span>
                </div>
                <div className="relative w-full bg-slate-800 h-2 rounded-full cursor-pointer overflow-hidden" onClick={seek}>
                  <div className="bg-gradient-to-r from-purple-500 to-cyan-500 h-full transition-all" style={{ width: `${pct}%` }} />
                </div>
                <div className="flex items-center justify-between pt-2">
                  <button onClick={() => setPct((p) => clamp(p - (15 / TOTAL) * 100))} className="text-slate-400 hover:text-white text-xs">
                    <i className="fa-solid fa-rotate-left" /> 15s
                  </button>
                  <button
                    onClick={() => setPlaying((v) => !v)}
                    aria-label={playing ? "Pause" : "Play"}
                    className="w-10 h-10 rounded-full bg-purple-600 hover:bg-purple-500 text-white flex items-center justify-center text-sm shadow-lg shadow-purple-600/40"
                  >
                    <i className={playing ? "fa-solid fa-pause" : "fa-solid fa-play"} />
                  </button>
                  <button onClick={() => setPct((p) => clamp(p + (15 / TOTAL) * 100))} className="text-slate-400 hover:text-white text-xs">
                    15s <i className="fa-solid fa-rotate-right" />
                  </button>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 space-y-3 text-xs">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <i className="fa-solid fa-list-check text-purple-400" /> Podcast Timestamps & Breakdown
              </h3>
              {CHAPTERS.map((c, i) => (
                <div
                  key={c.t}
                  onClick={() => {
                    setPct(c.p);
                    setChapter(c.name);
                    setPlaying(true);
                  }}
                  className={
                    i === 0
                      ? "p-3 rounded-xl bg-purple-950/20 hover:bg-purple-900/30 border border-purple-500/30 cursor-pointer transition-all"
                      : "p-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 cursor-pointer transition-all"
                  }
                >
                  <div className="flex items-center justify-between font-mono text-[11px]">
                    <span className={`${c.color} font-bold`}>
                      {c.t} - {c.end}
                    </span>
                    <span className="text-slate-400">{c.tag}</span>
                  </div>
                  <h4 className="text-xs font-semibold text-white mt-1">{c.h}</h4>
                  <p className="text-slate-300 text-[11px] mt-0.5 leading-relaxed">{c.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Modal({ onClose, border, children }: { onClose: () => void; border: string; children: React.ReactNode }) {
  return (
    <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div
        className={`bg-slate-900 border ${border} rounded-2xl p-6 sm:p-8 max-w-lg w-full shadow-2xl relative space-y-4 text-xs`}
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} aria-label="Close" className="absolute top-4 right-4 text-slate-400 hover:text-white text-lg">
          <i className="fa-solid fa-xmark" />
        </button>
        {children}
      </div>
    </div>
  );
}

const inputCls =
  "w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-purple-500";

function Index() {
  const [demo, setDemo] = useState<string | null>(null);
  const [agent, setAgent] = useState<Agent | null>(null);
  const [sent, setSent] = useState(false);
  const pricingRef = useRef<HTMLDivElement>(null);

  const onPricingClick = (e: MouseEvent) => {
    const btn = (e.target as HTMLElement).closest("[data-demo]");
    if (btn) {
      setSent(false);
      setDemo(btn.getAttribute("data-demo"));
    }
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-purple-500 selection:text-white">
      <Html html={headerHtml} />
      <main className="flex-grow">
        <Html html={introHtml} />
        <SkillsLibrary onOpen={setAgent} />
        <Html html={modulesHtml} />
        <Podcast />
        <div ref={pricingRef} onClick={onPricingClick}>
          <Html html={pricingHtml} />
        </div>
      </main>
      <Html html={footerHtml} />

      {agent && (
        <Modal onClose={() => setAgent(null)} border="border-cyan-500/40">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center text-xl border border-cyan-500/30">
              <i className={`fa-solid ${agent.icon}`} />
            </div>
            <div>
              <span className="px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 font-mono text-[10px] uppercase">{agent.catLabel}</span>
              <h3 className="text-lg font-bold text-white mt-0.5">{agent.name}</h3>
            </div>
          </div>
          <div className="space-y-2">
            <h4 className="font-bold text-slate-300">Core Specialty:</h4>
            <p className="text-slate-300 leading-relaxed bg-slate-950 p-3 rounded-xl border border-slate-800">{agent.spec}</p>
          </div>
          <div className="space-y-2">
            <h4 className="font-bold text-slate-300">When to Deploy:</h4>
            <p className="text-slate-400 leading-relaxed bg-slate-950 p-3 rounded-xl border border-slate-800">{agent.when}</p>
          </div>
          <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
            <span className="text-emerald-400 font-mono text-[11px]">
              <i className="fa-solid fa-circle-check" /> AISSC Ready
            </span>
            <button
              onClick={() => {
                setSent(false);
                setDemo("Agent: " + agent.name);
                setAgent(null);
              }}
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold font-mono text-xs"
            >
              Deploy This Agent
            </button>
          </div>
        </Modal>
      )}

      {demo && (
        <Modal onClose={() => setDemo(null)} border="border-purple-500/40">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-300 flex items-center justify-center text-lg border border-purple-500/30">
              <i className="fa-solid fa-paper-plane" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Contact AI Staffing Solutions</h3>
              <p className="text-xs text-purple-300 font-mono">Selected: {demo}</p>
            </div>
          </div>
          {sent ? (
            <p className="text-slate-300 leading-relaxed bg-slate-950 p-4 rounded-xl border border-emerald-500/30">
              <i className="fa-solid fa-circle-check text-emerald-400 mr-2" />
              Thank you for contacting AI Staffing Solution Consultants LLC! Our technical team will reach out to schedule your deployment.
            </p>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-slate-300 font-medium mb-1">Your Name / Organization</label>
                <input type="text" required placeholder="Jane Doe, Acme Corp" className={inputCls} />
              </div>
              <div>
                <label className="block text-slate-300 font-medium mb-1">Work Email</label>
                <input type="email" required placeholder="jane@company.com" className={inputCls} />
              </div>
              <div>
                <label className="block text-slate-300 font-medium mb-1">Deployment Goal / Message</label>
                <textarea rows={3} placeholder="Specify your GCP project requirements or AI staffing goals..." className={inputCls} />
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold text-xs shadow-lg transition-all"
              >
                Submit Deployment Request
              </button>
              <p className="text-[10px] text-slate-500 text-center">
                Alternatively, connect directly via{" "}
                <a href="https://www.linkedin.com/in/ai-staffing-solutions/" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">
                  LinkedIn
                </a>
                .
              </p>
            </form>
          )}
        </Modal>
      )}
    </div>
  );
}
