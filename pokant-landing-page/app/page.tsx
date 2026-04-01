"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import Link from "next/link"
import {
  ArrowRight,
  ArrowDown,
  Menu,
  X,
  Check,
  Copy,
  AlertTriangle,
  RefreshCw,
  EyeOff,
  Shield,
  Activity,
  Camera,
  DollarSign,
  Lock,
  LayoutDashboard,
  Package,
  HardDrive,
  Scale,
  GitBranch,
  Clock,
  Sparkles,
  Star,
  ExternalLink,
  Terminal,
} from "lucide-react"

/* ─── Hooks ──────────────────────────────────────────────────────── */

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsInView(true)
      },
      { threshold }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, isInView }
}

/* ─── Components ─────────────────────────────────────────────────── */

function CopyButton({ text, variant = "icon" }: { text: string; variant?: "icon" | "pill" }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = useCallback(async () => {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, [text])

  if (variant === "pill") {
    return (
      <button
        onClick={handleCopy}
        className="group inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-primary-foreground px-5 py-3 rounded-lg font-mono text-sm transition-colors"
      >
        <span className="opacity-50">$</span>
        <span>{text}</span>
        {copied ? (
          <Check className="w-3.5 h-3.5 ml-1" />
        ) : (
          <Copy className="w-3.5 h-3.5 ml-1 opacity-40 group-hover:opacity-80 transition-opacity" />
        )}
      </button>
    )
  }

  return (
    <button
      onClick={handleCopy}
      className="text-zinc-500 hover:text-zinc-300 transition-colors p-1"
      aria-label={copied ? "Copied" : "Copy to clipboard"}
    >
      {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
    </button>
  )
}

/* ─── Data ───────────────────────────────────────────────────────── */

const problems = [
  {
    icon: AlertTriangle,
    title: "Silent failures",
    description:
      "Your agent crashes on a transient API error at 3 am. No retry, no alert, no visibility into what happened. You find out when a customer complains.",
  },
  {
    icon: RefreshCw,
    title: "Infinite loops",
    description:
      "The agent clicks the same button 47 times because the page didn\u2019t load as expected. You burn $12 in API costs before the timeout kills it.",
  },
  {
    icon: EyeOff,
    title: "Black box execution",
    description:
      "The task failed. Why? Was it the website, the LLM, the network, the credentials? Without step-by-step replay, you\u2019re guessing.",
  },
]

const features = [
  {
    icon: Shield,
    title: "Error Classification & Auto-Retry",
    description:
      "Seven error categories. Transient failures retry automatically with exponential backoff. Permanent failures surface immediately.",
  },
  {
    icon: Activity,
    title: "Stuck Detection",
    description:
      "Detects visual stagnation, action loops, and failure spirals in real time. Kills the agent before it wastes your budget.",
  },
  {
    icon: Camera,
    title: "Step-by-Step Replay",
    description:
      "Every action screenshotted, timestamped, and saved. HTML files you can open in any browser\u2014no account needed.",
  },
  {
    icon: DollarSign,
    title: "Cost & Token Tracking",
    description:
      "Per-step and total LLM cost monitoring. Know exactly how much each task costs before your invoice surprises you.",
  },
  {
    icon: Lock,
    title: "Session Persistence",
    description:
      "Encrypted cookie storage across runs. Your agent stays logged in without re-authenticating every time.",
  },
  {
    icon: LayoutDashboard,
    title: "Local Dashboard",
    description:
      "pokant dashboard launches a debugging UI on your machine. See all runs, replay steps, inspect errors. No cloud required.",
  },
]

const beforeItems = [
  "Task fails silently on 429 rate limit",
  "No way to see what the agent did",
  "No retry \u2014 manual re-run required",
  "Session cookies lost \u2014 re-authenticates every run",
  "Cost unknown until monthly invoice",
]

const afterItems = [
  "429 classified as rate_limited, auto-retried after backoff",
  "Step replay shows exactly what happened on each page",
  "3 retries with exponential backoff, succeeded on attempt 2",
  "Cookies persisted \u2014 agent stayed logged in",
  "Cost tracked: $0.034 for the successful run",
]

const openSourcePoints = [
  {
    icon: Package,
    title: "Zero dependencies",
    description:
      "Core library is pure Python. No accounts, no API keys beyond your LLM provider, no vendor lock-in.",
  },
  {
    icon: HardDrive,
    title: "Your data stays local",
    description:
      "Screenshots, replays, and run metadata saved to .pokant/ on your machine. Nothing leaves your environment unless you configure it.",
  },
  {
    icon: Scale,
    title: "MIT Licensed",
    description: "Use it commercially, modify it, contribute back. The code is on GitHub.",
  },
]

const roadmapItems = [
  {
    icon: GitBranch,
    title: "Workflow Definitions",
    description: "Save and reuse task templates with parameterized inputs.",
  },
  {
    icon: Clock,
    title: "Scheduled Execution",
    description: "Run workflows on a cron schedule.",
  },
  {
    icon: Sparkles,
    title: "Self-Improving Playbooks",
    description: "The system learns from every run. Success patterns become reusable knowledge.",
  },
]

const architectureLayers = [
  "Error Classification",
  "Auto-Retry (exp backoff)",
  "Stuck Detection",
  "Screenshot Capture",
  "Cost Tracking",
  "Report Generation",
]

const dashboardSteps = [
  { step: "Navigate to acme.com/pricing", time: "0.8s", cost: "$0.003", ok: true },
  { step: "Click \u2018Enterprise\u2019 tab", time: "1.2s", cost: "$0.008", ok: true },
  { step: "Extract pricing table", time: "2.1s", cost: "$0.012", ok: true },
  { step: "Handle rate limit (retry 1)", time: "3.0s", cost: "$0.004", ok: false },
  { step: "Extract feature comparison", time: "1.8s", cost: "$0.011", ok: true },
]

/* ─── Page ───────────────────────────────────────────────────────── */

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const problemRef = useInView()
  const featuresRef = useInView()
  const architectureRef = useInView()
  const worksWithRef = useInView()
  const quickStartRef = useInView()
  const beforeAfterRef = useInView()
  const openSourceRef = useInView()
  const roadmapRef = useInView()

  return (
    <div className="min-h-screen bg-background">
      {/* ── Navigation ───────────────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <Link href="/" prefetch={false} className="text-foreground font-bold text-xl tracking-tight font-mono">
              pokant
            </Link>

            <div className="hidden md:flex items-center gap-8">
              <Link href="#problem" prefetch={false} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Problem
              </Link>
              <Link href="#features" prefetch={false} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Features
              </Link>
              <Link href="#quick-start" prefetch={false} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Quick Start
              </Link>
              <Link href="#open-source" prefetch={false} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Open Source
              </Link>
            </div>

            <div className="hidden md:flex items-center gap-4">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1.5"
              >
                GitHub
                <ExternalLink className="w-3 h-3" />
              </a>
              <Link
                href="#quick-start"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-primary hover:bg-primary/90 text-primary-foreground h-9 px-4 transition-colors"
              >
                Get Started
              </Link>
            </div>

            <button className="md:hidden text-foreground" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border/50">
            <div className="px-6 py-6 space-y-4">
              <Link href="#problem" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-muted-foreground hover:text-foreground">
                Problem
              </Link>
              <Link href="#features" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-muted-foreground hover:text-foreground">
                Features
              </Link>
              <Link href="#quick-start" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-muted-foreground hover:text-foreground">
                Quick Start
              </Link>
              <Link href="#open-source" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-muted-foreground hover:text-foreground">
                Open Source
              </Link>
              <hr className="border-border/50" />
              <a href="#" target="_blank" rel="noopener noreferrer" className="block text-sm text-muted-foreground hover:text-foreground">
                GitHub
              </a>
              <CopyButton text="pip install pokant" variant="pill" />
            </div>
          </div>
        )}
      </nav>

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 px-6 lg:px-8">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-primary/[0.07] rounded-full blur-[128px]" />
          <div className="absolute top-40 left-0 w-[400px] h-[400px] bg-violet-500/[0.04] rounded-full blur-[100px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Headline */}
          <div
            className="text-center mb-12"
            style={{ animation: "fade-in-up 0.8s ease-out 0.1s both" }}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight mb-6 leading-[1.1]">
              Your browser agent works in demos.
              <br />
              <span className="text-primary">Make it work in production.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Pokant adds reliability, observability, and error recovery to any browser automation agent. Two lines of code. Zero dependencies.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <CopyButton text="pip install pokant" variant="pill" />
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-border text-foreground hover:bg-card text-sm transition-colors"
              >
                View on GitHub
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Code Comparison */}
          <div
            className="grid md:grid-cols-2 gap-4"
            style={{ animation: "fade-in-up 0.8s ease-out 0.35s both" }}
          >
            {/* Without Pokant */}
            <div className="rounded-xl overflow-hidden border border-white/[0.06] bg-[#0d1117]">
              <div className="flex items-center gap-3 px-4 py-2.5 bg-white/[0.02] border-b border-white/[0.06]">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]/80" />
                  <div className="w-3 h-3 rounded-full bg-[#febc2e]/80" />
                  <div className="w-3 h-3 rounded-full bg-[#28c840]/80" />
                </div>
                <span className="text-[11px] text-zinc-500 font-mono">without_pokant.py</span>
              </div>
              <div className="p-5 overflow-x-auto">
                <code className="font-mono text-[13px] leading-7 block whitespace-pre">
                  <div>
                    <span className="text-zinc-300">agent</span>
                    <span className="text-zinc-500"> = </span>
                    <span className="code-property">Agent</span>
                    <span className="text-zinc-400">(task=</span>
                    <span className="code-string">&quot;Extract pricing&quot;</span>
                    <span className="text-zinc-400">, llm=llm)</span>
                  </div>
                  <div>
                    <span className="text-zinc-300">result</span>
                    <span className="text-zinc-500"> = </span>
                    <span className="code-keyword">await</span>
                    <span className="text-zinc-300"> agent.</span>
                    <span className="code-property">run</span>
                    <span className="text-zinc-400">()</span>
                  </div>
                  <div className="text-red-400/50"># Crashes on API errors</div>
                  <div className="text-red-400/50"># Loops forever on broken pages</div>
                  <div className="text-red-400/50"># No idea what happened</div>
                  <div className="text-red-400/50"># Costs spiral invisibly</div>
                </code>
              </div>
            </div>

            {/* With Pokant */}
            <div className="rounded-xl overflow-hidden border border-primary/30 bg-[#0d1117] shadow-[0_0_40px_-12px_rgba(59,130,246,0.15)]">
              <div className="flex items-center gap-3 px-4 py-2.5 bg-primary/[0.03] border-b border-primary/10">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]/80" />
                  <div className="w-3 h-3 rounded-full bg-[#febc2e]/80" />
                  <div className="w-3 h-3 rounded-full bg-[#28c840]/80" />
                </div>
                <span className="text-[11px] text-zinc-500 font-mono">with_pokant.py</span>
              </div>
              <div className="p-5 overflow-x-auto">
                <code className="font-mono text-[13px] leading-7 block whitespace-pre">
                  <div>
                    <span className="code-keyword">from</span>
                    <span className="text-zinc-300"> pokant </span>
                    <span className="code-keyword">import</span>
                    <span className="text-zinc-300"> </span>
                    <span className="code-property">wrap</span>
                  </div>
                  <div>
                    <span className="text-zinc-300">result</span>
                    <span className="text-zinc-500"> = </span>
                    <span className="code-keyword">await</span>
                    <span className="text-zinc-300"> </span>
                    <span className="code-property">wrap</span>
                    <span className="text-zinc-400">(agent)</span>
                    <span className="text-zinc-300">.</span>
                    <span className="code-property">run</span>
                    <span className="text-zinc-400">()</span>
                  </div>
                  <div className="text-emerald-400/60"># Auto-retry on transient errors</div>
                  <div className="text-emerald-400/60"># Stuck detection kills loops</div>
                  <div className="text-emerald-400/60"># Step-by-step screenshots + replay</div>
                  <div className="text-emerald-400/60"># Cost tracking per step</div>
                </code>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="flex justify-center mt-16"
          style={{ animation: "fade-in 0.8s ease-out 1.2s both" }}
        >
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <span className="text-xs">Scroll to explore</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </div>
        </div>
      </section>

      {/* ── The Problem ──────────────────────────────────────────── */}
      <section id="problem" className="py-24 px-6 lg:px-8" ref={problemRef.ref}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 transition-all duration-700 ${
                problemRef.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Browser agents break in production.
              <br className="hidden sm:block" />
              Every team hits the same wall.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {problems.map((item, i) => (
              <div
                key={item.title}
                className={`group bg-card border border-border/50 rounded-xl p-6 transition-all duration-700 hover:border-primary/30 hover:-translate-y-1 ${
                  problemRef.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center mb-4 group-hover:bg-red-500/15 transition-colors">
                  <item.icon className="w-5 h-5 text-red-400" />
                </div>
                <h3 className="text-base font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ─────────────────────────────────────────────── */}
      <section id="features" className="py-24 px-6 lg:px-8 bg-card/30" ref={featuresRef.ref}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 transition-all duration-700 ${
                featuresRef.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Production reliability in one function call.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((item, i) => (
              <div
                key={item.title}
                className={`group bg-card border border-border/50 rounded-xl p-6 transition-all duration-700 hover:border-primary/30 hover:-translate-y-1 ${
                  featuresRef.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-base font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Architecture ─────────────────────────────────────────── */}
      <section id="architecture" className="py-24 px-6 lg:px-8" ref={architectureRef.ref}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 transition-all duration-700 ${
                architectureRef.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Sits between your agent and the browser.
              <br className="hidden sm:block" />
              Intercepts nothing, observes everything.
            </h2>
          </div>

          <div
            className={`flex flex-col items-center transition-all duration-700 delay-150 ${
              architectureRef.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Your Code */}
            <div className="px-8 py-3 bg-card border border-border/50 rounded-lg">
              <span className="font-mono text-sm">Your Code</span>
            </div>

            <div className="w-px h-8 bg-border/60" />

            {/* wrap / track */}
            <div className="px-8 py-3 bg-card border border-border/50 rounded-lg text-center">
              <span className="font-mono text-sm text-primary">wrap(agent)</span>
              <span className="text-sm text-muted-foreground mx-2">or</span>
              <span className="font-mono text-sm text-primary">track(page)</span>
            </div>

            <div className="w-px h-8 bg-border/60" />

            {/* Pokant Layer */}
            <div className="w-full max-w-sm bg-card border border-primary/20 rounded-xl overflow-hidden">
              <div className="px-6 py-3 bg-primary/[0.04] border-b border-primary/10">
                <span className="font-semibold text-sm">Pokant Layer</span>
              </div>
              <div className="px-6 py-4 space-y-2.5">
                {architectureLayers.map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="w-px h-8 bg-border/60" />

            {/* Browser */}
            <div className="px-8 py-3 bg-card border border-border/50 rounded-lg text-center">
              <span className="font-mono text-sm">Browser</span>
              <span className="block text-xs text-muted-foreground mt-0.5">Chromium / Browserbase / CDP</span>
            </div>
          </div>

          <p className="text-center text-muted-foreground max-w-2xl mx-auto mt-12 text-sm leading-relaxed">
            Works with Browser Use, Playwright, or any browser automation framework. Bring your own agent&mdash;Pokant doesn&rsquo;t replace it, it makes it reliable.
          </p>
        </div>
      </section>

      {/* ── Works With ───────────────────────────────────────────── */}
      <section id="works-with" className="py-24 px-6 lg:px-8 bg-card/30" ref={worksWithRef.ref}>
        <div className="max-w-4xl mx-auto">
          <h2
            className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-14 transition-all duration-700 ${
              worksWithRef.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Agent agnostic. Framework agnostic.
          </h2>

          <div
            className={`grid md:grid-cols-3 gap-10 text-center transition-all duration-700 delay-150 ${
              worksWithRef.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div>
              <div className="text-[11px] uppercase tracking-widest text-primary font-semibold mb-5">Browser Automation</div>
              <div className="space-y-3">
                <div className="text-sm font-medium">Browser Use <span className="text-muted-foreground font-normal text-xs ml-1">81K+ stars</span></div>
                <div className="text-sm font-medium">Playwright</div>
                <div className="text-sm text-muted-foreground">Any agent with a run() method</div>
              </div>
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-widest text-primary font-semibold mb-5">LLM Providers</div>
              <div className="space-y-3">
                <div className="text-sm font-medium">Claude</div>
                <div className="text-sm font-medium">GPT-4o</div>
                <div className="text-sm text-muted-foreground">Any LangChain-compatible model</div>
              </div>
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-widest text-primary font-semibold mb-5">Browser Infrastructure</div>
              <div className="space-y-3">
                <div className="text-sm font-medium">Local Chromium</div>
                <div className="text-sm font-medium">Browserbase</div>
                <div className="text-sm text-muted-foreground">Any CDP-compatible browser</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Quick Start ──────────────────────────────────────────── */}
      <section id="quick-start" className="py-24 px-6 lg:px-8" ref={quickStartRef.ref}>
        <div className="max-w-3xl mx-auto">
          <h2
            className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-14 transition-all duration-700 ${
              quickStartRef.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            60 seconds to production reliability.
          </h2>

          <div
            className={`space-y-10 transition-all duration-700 delay-150 ${
              quickStartRef.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Step 1 */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-sm font-bold text-primary font-mono">
                  1
                </div>
                <h3 className="font-semibold">Install</h3>
              </div>
              <div className="bg-[#0d1117] rounded-xl border border-white/[0.06] px-5 py-4 flex items-center justify-between">
                <code className="font-mono text-sm text-zinc-300">
                  <span className="text-zinc-500">$ </span>pip install pokant
                </code>
                <CopyButton text="pip install pokant" />
              </div>
            </div>

            {/* Step 2 */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-sm font-bold text-primary font-mono">
                  2
                </div>
                <h3 className="font-semibold">Wrap your agent</h3>
              </div>
              <div className="bg-[#0d1117] rounded-xl border border-white/[0.06] px-5 py-4 flex items-start justify-between gap-4">
                <code className="font-mono text-[13px] leading-7 block">
                  <div>
                    <span className="code-keyword">from</span>
                    <span className="text-zinc-300"> pokant </span>
                    <span className="code-keyword">import</span>
                    <span className="text-zinc-300"> </span>
                    <span className="code-property">wrap</span>
                  </div>
                  <div>
                    <span className="text-zinc-300">result</span>
                    <span className="text-zinc-500"> = </span>
                    <span className="code-keyword">await</span>
                    <span className="text-zinc-300"> </span>
                    <span className="code-property">wrap</span>
                    <span className="text-zinc-400">(agent)</span>
                    <span className="text-zinc-300">.</span>
                    <span className="code-property">run</span>
                    <span className="text-zinc-400">()</span>
                  </div>
                </code>
                <CopyButton text={"from pokant import wrap\nresult = await wrap(agent).run()"} />
              </div>
            </div>

            {/* Step 3 */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-sm font-bold text-primary font-mono">
                  3
                </div>
                <h3 className="font-semibold">See what happened</h3>
              </div>
              <div className="bg-[#0d1117] rounded-xl border border-white/[0.06] px-5 py-4 flex items-start justify-between gap-4 mb-4">
                <code className="font-mono text-sm leading-7 block text-zinc-300">
                  <div><span className="text-zinc-500">$ </span>pip install pokant[dashboard]</div>
                  <div><span className="text-zinc-500">$ </span>pokant dashboard</div>
                </code>
                <CopyButton text={"pip install pokant[dashboard]\npokant dashboard"} />
              </div>

              {/* Dashboard Mockup */}
              <div className="bg-card border border-border/50 rounded-xl overflow-hidden">
                <div className="px-4 py-2.5 bg-card border-b border-border/50 flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f57]/80" />
                    <div className="w-3 h-3 rounded-full bg-[#febc2e]/80" />
                    <div className="w-3 h-3 rounded-full bg-[#28c840]/80" />
                  </div>
                  <span className="text-[11px] text-muted-foreground font-mono">pokant dashboard &mdash; localhost:8420</span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-5 pb-4 border-b border-border/30">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span className="text-sm font-mono font-medium">Extract pricing data from acme.com</span>
                    <span className="text-xs text-green-400 ml-auto">Completed</span>
                  </div>
                  <div className="space-y-2.5">
                    {dashboardSteps.map((s, i) => (
                      <div key={i} className="flex items-center gap-3 text-[13px]">
                        <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${s.ok ? "bg-green-500" : "bg-amber-500"}`} />
                        <span className="text-muted-foreground font-mono flex-1 truncate">{s.step}</span>
                        <span className="text-zinc-600 font-mono text-xs shrink-0">{s.time}</span>
                        <span className="text-zinc-600 font-mono text-xs shrink-0 w-14 text-right">{s.cost}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-3 border-t border-border/30 flex items-center justify-between text-xs font-mono text-muted-foreground">
                    <span>5 steps &middot; 1 retry &middot; 8.9s total</span>
                    <span className="text-foreground">$0.038</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Before / After ───────────────────────────────────────── */}
      <section id="before-after" className="py-24 px-6 lg:px-8 bg-card/30" ref={beforeAfterRef.ref}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2
              className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 transition-all duration-700 ${
                beforeAfterRef.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Real example: extracting data from a SaaS portal.
            </h2>
            <p
              className={`text-muted-foreground max-w-xl mx-auto transition-all duration-700 delay-100 ${
                beforeAfterRef.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Same task, same agent, same target website. The only difference is two lines of code.
            </p>
          </div>

          <div
            className={`grid md:grid-cols-2 gap-5 transition-all duration-700 delay-200 ${
              beforeAfterRef.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Before */}
            <div className="bg-card border border-border/50 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-red-500" />
                <span className="text-sm font-semibold text-red-400">Before (raw Browser Use)</span>
              </div>
              <div className="space-y-4">
                {beforeItems.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <X className="w-4 h-4 text-red-500/60 mt-0.5 shrink-0" />
                    <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* After */}
            <div className="bg-card border border-primary/20 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-sm font-semibold text-green-400">After (with Pokant)</span>
              </div>
              <div className="space-y-4">
                {afterItems.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-green-500/60 mt-0.5 shrink-0" />
                    <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Open Source ───────────────────────────────────────────── */}
      <section id="open-source" className="py-24 px-6 lg:px-8" ref={openSourceRef.ref}>
        <div className="max-w-5xl mx-auto">
          <h2
            className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-14 transition-all duration-700 ${
              openSourceRef.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Open source. Local first. No cloud required.
          </h2>

          <div
            className={`grid sm:grid-cols-3 gap-5 transition-all duration-700 delay-150 ${
              openSourceRef.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {openSourcePoints.map((item, i) => (
              <div
                key={item.title}
                className="bg-card border border-border/50 rounded-xl p-6 text-center"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-base font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-6 mt-10">
            <a href="#" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <Star className="w-4 h-4" />
              Star on GitHub
            </a>
            <a href="#" className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors">
              View Source
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* ── Roadmap ──────────────────────────────────────────────── */}
      <section id="roadmap" className="py-24 px-6 lg:px-8 bg-card/30" ref={roadmapRef.ref}>
        <div className="max-w-2xl mx-auto">
          <h2
            className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-14 transition-all duration-700 ${
              roadmapRef.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Where it&apos;s going.
          </h2>

          <div
            className={`space-y-0 transition-all duration-700 delay-150 ${
              roadmapRef.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {roadmapItems.map((item, i) => (
              <div key={item.title} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  {i < roadmapItems.length - 1 && <div className="w-px flex-1 bg-border/60 mt-2" />}
                </div>
                <div className="pb-8">
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-4">
            <a href="#" className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors">
              <Star className="w-4 h-4" />
              Star the repo to follow progress
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer CTA ───────────────────────────────────────────── */}
      <section className="py-24 px-6 lg:px-8 border-t border-border/50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
            Two lines of code. That&apos;s it.
          </h2>

          <div className="bg-[#0d1117] rounded-xl border border-white/[0.06] p-6 max-w-sm mx-auto mb-10">
            <code className="font-mono text-[13px] leading-7 block text-left">
              <div>
                <span className="code-keyword">from</span>
                <span className="text-zinc-300"> pokant </span>
                <span className="code-keyword">import</span>
                <span className="text-zinc-300"> </span>
                <span className="code-property">wrap</span>
              </div>
              <div>
                <span className="text-zinc-300">result</span>
                <span className="text-zinc-500"> = </span>
                <span className="code-keyword">await</span>
                <span className="text-zinc-300"> </span>
                <span className="code-property">wrap</span>
                <span className="text-zinc-400">(agent)</span>
                <span className="text-zinc-300">.</span>
                <span className="code-property">run</span>
                <span className="text-zinc-400">()</span>
              </div>
            </code>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <CopyButton text="pip install pokant" variant="pill" />
            <a
              href="#"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-border text-foreground hover:bg-card text-sm transition-colors"
            >
              Read the Docs
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-border text-foreground hover:bg-card text-sm transition-colors"
            >
              GitHub
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────────── */}
      <footer className="border-t border-border/50 py-12 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10">
            <div>
              <div className="font-bold text-lg mb-3 font-mono">pokant</div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Production reliability for browser automation agents.
              </p>
            </div>
            <div>
              <div className="text-sm font-semibold mb-3">Product</div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">Documentation</a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">GitHub</a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">PyPI</a>
                </li>
              </ul>
            </div>
            <div>
              <div className="text-sm font-semibold mb-3">Resources</div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#quick-start" className="hover:text-foreground transition-colors">Quick Start</Link>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">Examples</a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">Changelog</a>
                </li>
              </ul>
            </div>
            <div>
              <div className="text-sm font-semibold mb-3">Legal</div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">MIT License</a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
            &copy; 2026 Pokant. MIT Licensed.
          </div>
        </div>
      </footer>
    </div>
  )
}
