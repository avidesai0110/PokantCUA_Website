"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useMotionValueEvent } from "motion/react"
import {
  RefreshCw,
  EyeOff,
  TrendingUp,
  Zap,
  Shield,
  DollarSign,
  Play,
  Eye,
  Cpu,
  ArrowRight,
  Menu,
  X,
  Check,
  Terminal,
} from "lucide-react"

/* ─── Typing animation hook ─── */
function useTypingAnimation(code: string, speed = 18, startDelay = 800) {
  const [displayed, setDisplayed] = useState("")
  const [done, setDone] = useState(false)

  useEffect(() => {
    let i = 0
    let timer: ReturnType<typeof setTimeout>

    const start = setTimeout(() => {
      const tick = () => {
        if (i < code.length) {
          setDisplayed(code.slice(0, i + 1))
          i++
          timer = setTimeout(tick, speed)
        } else {
          setDone(true)
        }
      }
      tick()
    }, startDelay)

    return () => {
      clearTimeout(start)
      clearTimeout(timer)
    }
  }, [code, speed, startDelay])

  return { displayed, done }
}

/* ─── Syntax-highlighted code renderer ─── */
function SyntaxCode({ code }: { code: string }) {
  const colorize = (text: string) => {
    return text.split("\n").map((line, li) => {
      const parts: React.ReactNode[] = []
      let remaining = line
      let key = 0

      const patterns: [RegExp, string][] = [
        [/^(#.*)$/, "#6a9955"],
        [/^(from |import )/, "#c586c0"],
        [/(def |return |await |async )/, "#c586c0"],
        [/("(?:[^"\\]|\\.)*")/, "#ce9178"],
        [/('(?:[^'\\]|\\.)*')/, "#ce9178"],
        [/(True|False|None)/, "#569cd6"],
        [/(\d+\.?\d*)/, "#b5cea8"],
        [/(run_task|extract_data|print|pokant)/, "#dcdcaa"],
        [/(task|url|result|data|client|PokantClient)/, "#9cdcfe"],
      ]

      while (remaining.length > 0) {
        let earliest: { index: number; length: number; color: string; match: string } | null = null

        for (const [pat, color] of patterns) {
          const m = remaining.match(pat)
          if (m && m.index !== undefined) {
            if (!earliest || m.index < earliest.index) {
              earliest = { index: m.index, length: m[1]?.length ?? m[0].length, color, match: m[1] ?? m[0] }
            }
          }
        }

        if (earliest) {
          if (earliest.index > 0) {
            parts.push(<span key={key++} className="text-[#d4d4d4]">{remaining.slice(0, earliest.index)}</span>)
          }
          parts.push(<span key={key++} style={{ color: earliest.color }}>{earliest.match}</span>)
          remaining = remaining.slice(earliest.index + earliest.length)
        } else {
          parts.push(<span key={key++} className="text-[#d4d4d4]">{remaining}</span>)
          remaining = ""
        }
      }

      return (
        <div key={li} className="leading-relaxed">
          {parts.length > 0 ? parts : "\u00A0"}
        </div>
      )
    })
  }

  return <>{colorize(code)}</>
}

/* ─── Constants ─── */
const HERO_CODE = `from pokant import PokantClient

client = PokantClient()

result = await client.run_task(
    task="Go to Hacker News, find the top 3 posts",
    url="https://news.ycombinator.com"
)

print(result.data)`

const HERO_JSON = `{
  "status": "completed",
  "cost": "$0.02",
  "steps": 4,
  "data": [
    { "rank": 1, "title": "Show HN: Pokant..." },
    { "rank": 2, "title": "Why browser agents..." },
    { "rank": 3, "title": "The future of web..." }
  ]
}`

const STEP1_CODE = `result = await client.run_task(
    task="Extract pricing from competitor.com",
    url="https://competitor.com/pricing"
)`

const STEP3_CODE = `{
  "status": "completed",
  "cost": "$0.02",
  "data": {
    "plans": [
      { "name": "Starter", "price": "$29/mo" },
      { "name": "Pro", "price": "$99/mo" }
    ]
  }
}`

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Enterprise", href: "#enterprise" },
  { label: "Pricing", href: "#pricing" },
]

const PROBLEM_CARDS = [
  {
    icon: RefreshCw,
    title: "Blind retries waste money",
    desc: "Current tools retry the same failing approach 3 times, burning credits on identical errors. Pokant adapts its strategy on each attempt.",
  },
  {
    icon: EyeOff,
    title: "No visibility into failures",
    desc: "When a task fails at 3am, you get a generic error. Pokant captures screenshots, DOM state, and reasoning at every step.",
  },
  {
    icon: TrendingUp,
    title: "Every run costs the same",
    desc: "Whether it\u2019s the 1st or 10,000th run of the same task, you pay full AI price. Pokant compiles successful runs into cheap replays.",
  },
]

const FEATURES = [
  {
    icon: Zap,
    title: "Adaptive Retry Intelligence",
    desc: "Failed steps get different strategies \u2014 alternative selectors, navigation paths, and wait conditions \u2014 not blind repeats.",
  },
  {
    icon: Play,
    title: "Explore \u2192 Replay",
    desc: "First run uses AI to explore. Subsequent runs replay the compiled path at 95% lower cost with deterministic execution.",
  },
  {
    icon: Shield,
    title: "Post-Action Verification",
    desc: "Every click, form fill, and navigation is verified with a screenshot + DOM assertion before proceeding to the next step.",
  },
  {
    icon: DollarSign,
    title: "Cost Circuit Breakers",
    desc: "Set per-task and monthly budgets. Pokant halts execution before runaway costs, with configurable thresholds.",
  },
  {
    icon: Eye,
    title: "Visual Step Replay",
    desc: "Full screenshot timeline for every execution. Debug failures visually instead of reading logs. Exportable as video.",
  },
  {
    icon: Cpu,
    title: "Agent Agnostic",
    desc: "Works with Browser Use, Playwright, Puppeteer, or any CDP-compatible browser. Bring your own agent or use ours.",
  },
]

const PRICING_PLANS = [
  {
    name: "Starter",
    price: "$0",
    period: "forever",
    desc: "For side projects and prototyping.",
    features: ["100 tasks/month", "Community support", "Basic retry logic", "7-day log retention"],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$99",
    period: "/month",
    desc: "For teams shipping to production.",
    features: [
      "10,000 tasks/month",
      "Explore \u2192 Replay compilation",
      "Priority support",
      "Visual step replay",
      "Cost circuit breakers",
      "30-day log retention",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "For teams that need white-glove setup.",
    features: [
      "Unlimited tasks",
      "Dedicated infrastructure",
      "Custom SLAs",
      "SSO & RBAC",
      "We build your automations",
      "Unlimited retention",
    ],
    cta: "Talk to Us",
    highlighted: false,
  },
]

const TOOLS = ["Browser Use", "Playwright", "Puppeteer", "Claude", "GPT-4o", "Browserbase", "Chromium"]

/* ─── Hero Code Block ─── */
function HeroCodeBlock() {
  const { displayed, done } = useTypingAnimation(HERO_CODE, 16, 1200)

  return (
    <div className="relative mx-auto max-w-2xl">
      <div className="rounded-xl bg-[#1e1e2e] shadow-2xl shadow-gray-900/20 overflow-hidden border border-gray-800/50">
        {/* Browser chrome */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-700/50">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <div className="w-3 h-3 rounded-full bg-[#28c840]" />
          </div>
          <span className="text-xs text-gray-500 font-mono ml-2">main.py</span>
        </div>

        {/* Code */}
        <div className="p-5 font-mono text-sm leading-relaxed overflow-x-auto">
          <SyntaxCode code={displayed} />
          {!done && (
            <span className="inline-block w-2 h-4 bg-gray-400 animate-cursor-blink ml-0.5 -mb-0.5" />
          )}
        </div>

        {/* Result */}
        {done && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="border-t border-gray-700/50"
          >
            <div className="flex items-center gap-2 px-4 py-2 bg-[#1a1a28]">
              <Terminal className="w-3.5 h-3.5 text-green-400" />
              <span className="text-xs text-green-400 font-mono">Output</span>
            </div>
            <div className="p-5 font-mono text-xs leading-relaxed bg-[#1a1a28]">
              <SyntaxCode code={HERO_JSON} />
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}

/* ─── Mini Dashboard (Enterprise) ─── */
function MiniDashboard() {
  return (
    <div className="relative">
      <div className="bg-white rounded-xl shadow-2xl border border-gray-200 p-6 -rotate-1 hover:rotate-0 transition-transform duration-500">
        <div className="flex items-center justify-between mb-6">
          <div>
            <div className="text-xs text-gray-400 font-sans">Dashboard</div>
            <div className="text-sm font-semibold text-gray-900">Task Overview</div>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-green-400" />
            <span className="text-xs text-green-600">Live</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-6">
          {[
            { label: "Success", value: "99.2%", color: "text-green-600" },
            { label: "Avg Cost", value: "$0.02", color: "text-blue-600" },
            { label: "Tasks/hr", value: "1,247", color: "text-gray-900" },
          ].map((s) => (
            <div key={s.label} className="bg-gray-50 rounded-lg p-3">
              <div className="text-[10px] text-gray-400 uppercase tracking-wider">{s.label}</div>
              <div className={`text-lg font-semibold ${s.color} font-mono`}>{s.value}</div>
            </div>
          ))}
        </div>

        <div className="flex items-end gap-1 h-16">
          {[40, 65, 55, 80, 70, 90, 85, 95, 88, 92, 78, 96].map((h, i) => (
            <div key={i} className="flex-1 rounded-sm bg-blue-100" style={{ height: `${h}%` }}>
              <div className="w-full rounded-sm bg-blue-500" style={{ height: `${Math.min(100, h + 5)}%` }} />
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-2">
          <span className="text-[10px] text-gray-300">12h ago</span>
          <span className="text-[10px] text-gray-300">now</span>
        </div>
      </div>
      <div className="absolute -z-10 inset-2 bg-blue-50 rounded-xl rotate-2" />
    </div>
  )
}

/* ─── Nav ─── */
function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (v) => {
    setScrolled(v > 20)
  })

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-gray-200/60 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-display font-bold text-xl text-gray-900 tracking-tight">
          Pokant
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a href="https://github.com" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
            GitHub
          </a>
          <a href="#pricing" className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-5 py-2 rounded-lg transition-colors">
            Get Started
          </a>
        </div>

        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2 text-gray-600" aria-label="Toggle menu">
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {mobileOpen && (
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="md:hidden bg-white border-b border-gray-200 px-6 py-4">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="block py-3 text-gray-600 hover:text-gray-900 text-sm border-b border-gray-100 last:border-0">
              {l.label}
            </a>
          ))}
          <a href="#pricing" onClick={() => setMobileOpen(false)} className="block mt-4 text-center bg-blue-600 text-white text-sm font-medium px-5 py-2.5 rounded-lg">
            Get Started
          </a>
        </motion.div>
      )}
    </nav>
  )
}

/* ─── Fade-in wrapper ─── */
function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.4, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/* ═══════════════════════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════════════════════ */
export default function LandingPage() {
  return (
    <>
      <Nav />

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage: "radial-gradient(circle, #d1d5db 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="hero-animate-1 font-display text-5xl md:text-7xl tracking-tight text-gray-900 leading-[1.1]">
            Browser automation that{" "}
            <span className="relative inline-block">
              actually works
              <span className="absolute bottom-1 left-0 right-0 h-3 bg-blue-200/60 -z-10 rounded-sm" />
            </span>{" "}
            in production.
          </h1>

          <p className="hero-animate-2 mt-6 text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            One API to automate any browser workflow. AI-powered navigation,
            self-healing retries, and structured output &mdash; at 95% lower cost
            than running AI agents on every execution.
          </p>

          <div className="hero-animate-3 mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#pricing" className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-lg transition-colors text-sm">
              Get Started
            </a>
            <a href="#how-it-works" className="border border-gray-300 hover:border-gray-400 text-gray-700 font-medium px-8 py-3 rounded-lg transition-colors text-sm">
              View Documentation
            </a>
          </div>

          <p className="hero-animate-4 mt-4 text-sm text-gray-400">
            Works with Browser Use &middot; Playwright &middot; Claude &middot; GPT-4o &middot; Any CDP browser
          </p>
        </div>

        <div className="hero-animate-5 relative z-10 w-full mt-16 max-w-2xl mx-auto">
          <HeroCodeBlock />
        </div>
      </section>

      {/* ─── SOCIAL PROOF ─── */}
      <section className="bg-gray-50 py-8 border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-xs tracking-widest text-gray-400 uppercase font-semibold mb-4">
            Works with the tools you already use
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {TOOLS.map((t, i) => (
              <span key={t} className="text-sm text-gray-400 font-medium">
                {t}
                {i < TOOLS.length - 1 && <span className="ml-6 text-gray-300 hidden sm:inline">&middot;</span>}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROBLEM ─── */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn className="text-center max-w-2xl mx-auto">
            <p className="text-sm font-semibold tracking-widest text-blue-600 uppercase">The Problem</p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl tracking-tight text-gray-900">
              Browser automation breaks in production.
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              AI agents work 80% of the time in demos. Production needs 99%.
            </p>
          </FadeIn>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {PROBLEM_CARDS.map((card, i) => (
              <FadeIn key={card.title} delay={i * 0.1}>
                <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-md transition-shadow duration-300 h-full">
                  <card.icon className="w-6 h-6 text-blue-600" strokeWidth={1.5} />
                  <h3 className="mt-4 text-lg font-semibold text-gray-900">{card.title}</h3>
                  <p className="mt-2 text-sm text-gray-500 leading-relaxed">{card.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section id="how-it-works" className="bg-[#fafafa] py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn className="text-center max-w-2xl mx-auto">
            <p className="text-sm font-semibold tracking-widest text-blue-600 uppercase">How It Works</p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl tracking-tight text-gray-900">
              Three steps. Structured JSON back.
            </h2>
          </FadeIn>

          <div className="mt-20 max-w-3xl mx-auto">
            {/* Step 1 */}
            <FadeIn>
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-semibold shrink-0">1</div>
                  <div className="w-px flex-1 bg-gray-200 mt-2" />
                </div>
                <div className="pb-16 flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">Send a task</h3>
                  <p className="mt-1 text-sm text-gray-500">Describe what you want in plain English. Include a URL.</p>
                  <div className="mt-4 bg-[#1e1e2e] rounded-lg p-4 font-mono text-sm overflow-x-auto">
                    <SyntaxCode code={STEP1_CODE} />
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Step 2 */}
            <FadeIn delay={0.1}>
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-semibold shrink-0">2</div>
                  <div className="w-px flex-1 bg-gray-200 mt-2" />
                </div>
                <div className="pb-16 flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">We handle everything</h3>
                  <p className="mt-1 text-sm text-gray-500">AI navigates, verifies each step, retries intelligently, and validates the result.</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {["AI Agent", "Navigate", "Verify", "Retry", "Validate"].map((step, i) => (
                      <div key={step} className="flex items-center gap-2">
                        <span className="bg-white border border-gray-200 text-gray-700 text-sm px-4 py-2 rounded-lg font-medium shadow-sm">{step}</span>
                        {i < 4 && <ArrowRight className="w-4 h-4 text-gray-300 shrink-0" />}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Step 3 */}
            <FadeIn delay={0.2}>
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-semibold shrink-0">3</div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">Get structured JSON</h3>
                  <p className="mt-1 text-sm text-gray-500">Clean, typed output you can pipe directly into your application.</p>
                  <div className="mt-4 bg-[#1e1e2e] rounded-lg p-4 font-mono text-sm overflow-x-auto">
                    <SyntaxCode code={STEP3_CODE} />
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Cost callout */}
          <FadeIn delay={0.15}>
            <div className="mt-16 max-w-3xl mx-auto bg-blue-50 border border-blue-100 rounded-xl p-6 md:p-8">
              <p className="text-gray-900 font-semibold text-lg">
                First run: <span className="text-blue-600">$0.40</span>{" "}
                <span className="text-gray-400 font-normal">(AI explores)</span>
              </p>
              <p className="text-gray-900 font-semibold text-lg mt-1">
                Every run after: <span className="text-blue-600">$0.02</span>{" "}
                <span className="text-gray-400 font-normal">(compiled replay)</span>
              </p>
              <p className="mt-2 text-sm text-gray-500">
                That&apos;s 95% cheaper at scale. The first run teaches the system. Every subsequent run replays the compiled path.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── FEATURES ─── */}
      <section id="features" className="bg-white py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn className="text-center max-w-2xl mx-auto">
            <p className="text-sm font-semibold tracking-widest text-blue-600 uppercase">Features</p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl tracking-tight text-gray-900">
              Built for production, not demos.
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Every feature exists to make browser automation reliable, cost-effective, and observable at scale.
            </p>
          </FadeIn>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURES.map((f, i) => (
              <FadeIn key={f.title} delay={i * 0.08}>
                <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-md transition-shadow duration-300 h-full">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                    <f.icon className="w-5 h-5 text-blue-600" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-gray-900">{f.title}</h3>
                  <p className="mt-2 text-sm text-gray-500 leading-relaxed">{f.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ENTERPRISE ─── */}
      <section id="enterprise" className="bg-[#fafafa] py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
            <FadeIn className="lg:col-span-3">
              <p className="text-sm font-semibold tracking-widest text-blue-600 uppercase">For Enterprise</p>
              <h2 className="mt-3 font-display text-3xl md:text-4xl tracking-tight text-gray-900">
                We build and manage browser automation for your team.
              </h2>
              <div className="mt-6 space-y-4 text-gray-500 leading-relaxed">
                <p>Don&apos;t have the engineering bandwidth to build and maintain browser automations? Our team writes, tests, and monitors your tasks end-to-end.</p>
                <p>We deploy on your infrastructure or ours, with dedicated SLAs, SSO, and compliance controls your security team will approve.</p>
                <p>From onboarding to production in days, not months. No DevOps required.</p>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-4">
                {[
                  { stat: "10x", label: "faster setup" },
                  { stat: "99%", label: "reliability" },
                  { stat: "Full", label: "visibility" },
                ].map((s) => (
                  <div key={s.label} className="text-center bg-white rounded-lg border border-gray-200 p-4">
                    <div className="text-2xl font-bold text-gray-900">{s.stat}</div>
                    <div className="text-xs text-gray-500 mt-1">{s.label}</div>
                  </div>
                ))}
              </div>

              <a href="#pricing" className="inline-flex items-center gap-2 mt-8 bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors text-sm">
                Talk to us <ArrowRight className="w-4 h-4" />
              </a>
            </FadeIn>

            <FadeIn delay={0.2} className="lg:col-span-2">
              <MiniDashboard />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── PRICING ─── */}
      <section id="pricing" className="bg-white py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn className="text-center max-w-2xl mx-auto">
            <p className="text-sm font-semibold tracking-widest text-blue-600 uppercase">Pricing</p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl tracking-tight text-gray-900">
              Simple, transparent pricing.
            </h2>
            <p className="mt-4 text-lg text-gray-500">Start free. Scale when you&apos;re ready.</p>
          </FadeIn>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {PRICING_PLANS.map((plan, i) => (
              <FadeIn key={plan.name} delay={i * 0.1}>
                <div className={`relative rounded-xl p-8 h-full flex flex-col ${plan.highlighted ? "bg-white border-2 border-blue-600 shadow-lg" : "bg-white border border-gray-200"} hover:shadow-lg transition-shadow duration-300`}>
                  {plan.highlighted && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Most Popular
                    </div>
                  )}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{plan.name}</h3>
                    <div className="mt-2 flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                      {plan.period && <span className="text-gray-500 text-sm">{plan.period}</span>}
                    </div>
                    <p className="mt-2 text-sm text-gray-500">{plan.desc}</p>
                  </div>

                  <ul className="mt-8 space-y-3 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-gray-600">
                        <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <a href="#" className={`mt-8 block text-center font-medium text-sm py-3 rounded-lg transition-colors ${plan.highlighted ? "bg-blue-600 hover:bg-blue-700 text-white" : "bg-gray-100 hover:bg-gray-200 text-gray-900"}`}>
                    {plan.cta}
                  </a>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="font-display text-3xl md:text-5xl tracking-tight text-gray-900">
              Start automating in 5 minutes.
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto">
              Install the SDK, send your first task, and get structured JSON back. No infrastructure to manage.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#pricing" className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-lg transition-colors text-sm">
                Get Started Free
              </a>
              <a href="#how-it-works" className="border border-gray-300 hover:border-gray-400 text-gray-700 font-medium px-8 py-3 rounded-lg transition-colors text-sm">
                Read the Docs
              </a>
            </div>

            <div className="mt-6 inline-flex items-center gap-3 bg-[#1e1e2e] text-gray-300 font-mono text-sm px-5 py-3 rounded-lg">
              <Terminal className="w-4 h-4 text-gray-500" />
              <span>pip install pokant</span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="bg-gray-900 text-gray-400 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-white font-semibold text-sm mb-4">Product</h4>
              <ul className="space-y-2.5">
                {["Features", "Pricing", "Enterprise", "Changelog"].map((l) => (
                  <li key={l}><a href="#" className="text-sm hover:text-white transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm mb-4">Resources</h4>
              <ul className="space-y-2.5">
                {["Documentation", "API Reference", "Examples", "Status"].map((l) => (
                  <li key={l}><a href="#" className="text-sm hover:text-white transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm mb-4">Company</h4>
              <ul className="space-y-2.5">
                {["About", "Blog", "Careers", "Contact"].map((l) => (
                  <li key={l}><a href="#" className="text-sm hover:text-white transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm mb-4">Legal</h4>
              <ul className="space-y-2.5">
                {["Privacy", "Terms", "Security", "DPA"].map((l) => (
                  <li key={l}><a href="#" className="text-sm hover:text-white transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="font-display font-bold text-white">Pokant</span>
              <span className="text-sm text-gray-500">&copy; 2026 Pokant. All rights reserved.</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
