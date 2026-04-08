"use client"

import { useState } from "react"

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: "What is Pokant?",
    answer:
      "Pokant is a browser automation platform with a single API. You send a URL and a task in plain English, and get structured JSON back. No selectors, no scripts, no maintenance. Pokant uses AI to navigate sites, extract data, and fill forms — and compiles successful runs into deterministic replays for production.",
  },
  {
    question: "What browsers and agents do you support?",
    answer:
      "Pokant works with Browser Use, Playwright, and any CDP-compatible browser. For LLMs, it supports Claude, GPT-4o, and any LangChain-compatible model. You can also bring your own Browserbase session or local Chrome instance.",
  },
  {
    question: "How reliable is it?",
    answer:
      "Pokant uses adaptive retry with 7 distinct error categories — network timeouts, element not found, auth walls, rate limits, CAPTCHA, navigation errors, and extraction failures. Each category has its own recovery strategy. Post-action verification confirms the task actually succeeded before returning a result.",
  },
  {
    question: "How is Pokant different from Skyvern?",
    answer:
      "Skyvern is an agent — you use their AI or nothing. Pokant is the platform layer above. Today we use Browser Use under the hood (89% on WebVoyager, higher than Skyvern's 85%). Tomorrow we route to whatever agent works best. The architecture is agent-agnostic: Pokant adds compile-to-replay, adaptive retry, cost tracking, and structured output on top of any underlying agent.",
  },
  {
    question: "Can I self-host?",
    answer:
      "Yes. The Pokant SDK is open source under the MIT License. You can run it against your own browser infrastructure. The cloud API provides managed execution, auto-scaling, and session pooling — but you're never locked in.",
  },
]

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  return (
    <div className="w-full flex justify-center items-start">
      <div className="flex-1 px-4 md:px-12 py-16 md:py-20 flex flex-col lg:flex-row justify-start items-start gap-6 lg:gap-12">
        {/* Left Column - Header */}
        <div className="w-full lg:flex-1 flex flex-col justify-center items-start gap-4 lg:py-5">
          <div className="w-full flex flex-col justify-center text-[#49423D] font-bold leading-tight md:leading-[44px] font-display text-4xl tracking-tight">
            Frequently Asked Questions
          </div>
          <div className="w-full text-[#605A57] text-base font-normal leading-7 font-sans">
            Everything you need to know about
            <br className="hidden md:block" />
            Pokant's browser automation API.
          </div>
        </div>

        {/* Right Column - FAQ Items */}
        <div className="w-full lg:flex-1 flex flex-col justify-center items-center">
          <div className="w-full flex flex-col">
            {faqData.map((item, index) => {
              const isOpen = openItems.includes(index)

              return (
                <div key={index} className="w-full border-b border-[rgba(73,66,61,0.16)] overflow-hidden">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full px-5 py-[18px] flex justify-between items-center gap-5 text-left hover:bg-[rgba(73,66,61,0.02)] transition-colors duration-200"
                    aria-expanded={isOpen}
                  >
                    <div className="flex-1 text-[#49423D] text-base font-medium leading-6 font-sans">
                      {item.question}
                    </div>
                    <div className="flex justify-center items-center">
                      <ChevronDownIcon
                        className={`w-6 h-6 text-[rgba(73,66,61,0.60)] transition-transform duration-300 ease-in-out ${
                          isOpen ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-5 pb-[18px] text-[#605A57] text-sm font-normal leading-6 font-sans">
                      {item.answer}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
