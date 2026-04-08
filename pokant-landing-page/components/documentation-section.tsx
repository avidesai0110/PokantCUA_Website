"use client"

import { useState, useEffect } from "react"
import type React from "react"

function Badge({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="px-[14px] py-[6px] bg-white shadow-[0px_0px_0px_4px_rgba(55,50,47,0.05)] overflow-hidden rounded-[90px] flex justify-start items-center gap-[8px] border border-[rgba(2,6,23,0.08)] shadow-xs">
      <div className="w-[14px] h-[14px] relative overflow-hidden flex items-center justify-center">{icon}</div>
      <div className="text-center flex justify-center flex-col text-[#37322F] text-xs font-medium leading-3 font-sans">
        {text}
      </div>
    </div>
  )
}

const cards = [
  {
    title: "Explore — first run",
    description: "AI navigates any website. Returns structured JSON matching your schema.",
    code: `from pokant import PokantClient

client = PokantClient(api_key="pk_live_...")

# First run: AI explores the site
result = await client.run_task(
    url="https://example.com",
    task="Extract all pricing plans",
    schema={
        "plans": [{
            "name": "str",
            "price": "float"
        }]
    }
)

print(result.data)
# → {"plans": [{"name": "Pro", "price": 99.0}]}
print(result.workflow_id)  # save this`,
  },
  {
    title: "Replay — every run after",
    description: "Compiled deterministic script runs at 1/20th the cost. No AI required.",
    code: `from pokant import PokantClient

client = PokantClient(api_key="pk_live_...")

# Every subsequent run: deterministic replay
result = await client.replay(
    workflow_id="wf_abc123",  # from first run
)

print(result.data)
# → {"plans": [{"name": "Pro", "price": 99.0}]}
# Deterministic — no AI required
# Runs in ~1.2s vs ~8s for explore`,
  },
  {
    title: "Bring your own browser",
    description: "Connect Browserbase, local Chrome, or any CDP session.",
    code: `from pokant import PokantClient
from pokant.browsers import BrowserbaseSession

# Use your own Browserbase session
session = BrowserbaseSession(
    api_key="bb_live_...",
    project_id="proj_..."
)

client = PokantClient(
    api_key="pk_live_...",
    browser=session
)

result = await client.run_task(
    url="https://example.com",
    task="Extract pricing data"
)`,
  },
]

export default function DocumentationSection() {
  const [activeCard, setActiveCard] = useState(0)
  const [animationKey, setAnimationKey] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % cards.length)
      setAnimationKey((prev) => prev + 1)
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  const handleCardClick = (index: number) => {
    setActiveCard(index)
    setAnimationKey((prev) => prev + 1)
  }

  return (
    <div className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
      {/* Header Section */}
      <div className="self-stretch px-6 md:px-24 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center gap-6">
        <div className="w-full max-w-[586px] px-6 py-5 overflow-hidden rounded-lg flex flex-col justify-start items-center gap-4">
          <Badge
            icon={
              <div className="w-[10.50px] h-[10.50px] outline outline-[1.17px] outline-[#37322F] outline-offset-[-0.58px] rounded-full"></div>
            }
            text="API Reference"
          />
          <div className="self-stretch text-center flex justify-center flex-col text-[#49423D] text-3xl md:text-5xl font-bold leading-tight md:leading-[60px] font-display tracking-tight">
            From URL to structured data
          </div>
          <div className="self-stretch text-center text-[#605A57] text-base font-normal leading-7 font-sans">
            One API call to automate any browser workflow.
            <br />
            Explore once, replay forever.
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="self-stretch px-4 md:px-9 overflow-hidden flex justify-start items-center">
        <div className="flex-1 py-8 md:py-11 flex flex-col md:flex-row justify-start items-center gap-6 md:gap-12">
          {/* Left Column - Feature Cards */}
          <div className="w-full md:w-auto md:max-w-[400px] flex flex-col justify-center items-center gap-4 order-2 md:order-1">
            {cards.map((card, index) => {
              const isActive = index === activeCard

              return (
                <div
                  key={index}
                  onClick={() => handleCardClick(index)}
                  className={`w-full overflow-hidden flex flex-col justify-start items-start transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-white shadow-[0px_0px_0px_0.75px_#E0DEDB_inset]"
                      : "border border-[rgba(2,6,23,0.08)]"
                  }`}
                >
                  <div
                    className={`w-full h-0.5 bg-[rgba(50,45,43,0.08)] overflow-hidden ${isActive ? "opacity-100" : "opacity-0"}`}
                  >
                    <div
                      key={animationKey}
                      className="h-0.5 bg-[#322D2B] animate-[progressBar_6s_linear_forwards] will-change-transform"
                    />
                  </div>
                  <div className="px-6 py-5 w-full flex flex-col gap-2">
                    <div className="self-stretch flex justify-center flex-col text-[#49423D] text-sm font-semibold leading-6 font-sans">
                      {card.title}
                    </div>
                    <div className="self-stretch text-[#605A57] text-[13px] font-normal leading-[22px] font-sans">
                      {card.description}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Right Column - Code Block */}
          <div className="w-full md:w-auto rounded-lg flex flex-col justify-center items-center gap-2 order-1 md:order-2">
            <div className="w-full md:w-[580px] bg-[#1e1e2e] shadow-[0px_0px_0px_0.9px_rgba(0,0,0,0.08)] overflow-hidden rounded-lg flex flex-col justify-start items-start">
              {/* Code block header */}
              <div className="w-full flex items-center gap-2 px-4 py-3 border-b border-white/10">
                <div className="w-3 h-3 rounded-full bg-red-400/60"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400/60"></div>
                <div className="w-3 h-3 rounded-full bg-green-400/60"></div>
                <span className="ml-2 text-white/40 text-xs font-mono">example.py</span>
              </div>
              <div className="w-full p-4 overflow-auto min-h-[320px]">
                <pre className="text-[13px] leading-6 font-mono text-green-300/90 whitespace-pre">
                  {cards[activeCard].code}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes progressBar {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(0%); }
        }
      `}</style>
    </div>
  )
}
