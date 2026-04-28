"use client"

import FooterSection from "../../components/footer-section"
import {
  quickStats,
  comparisonFeatures,
  costAtScale,
  structuralAdvantages,
  methodology,
} from "../../data/benchmark"
import type React from "react"

function Badge({ text, icon }: { text: string; icon?: React.ReactNode }) {
  return (
    <div className="px-[14px] py-[6px] bg-white shadow-[0px_0px_0px_4px_rgba(55,50,47,0.05)] overflow-hidden rounded-[90px] flex justify-start items-center gap-[8px] border border-[rgba(2,6,23,0.08)]">
      {icon && (
        <div className="w-[14px] h-[14px] relative overflow-hidden flex items-center justify-center">{icon}</div>
      )}
      <div className="text-center flex justify-center flex-col text-[#37322F] text-xs font-medium leading-3 font-sans">
        {text}
      </div>
    </div>
  )
}

const iconMap: Record<string, React.ReactNode> = {
  CheckSquare: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="3" width="14" height="14" rx="2" stroke="#37322F" strokeWidth="1.25" fill="none" />
      <path d="M7 10l2 2 4-4" stroke="#37322F" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Layers: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 2L2 7l8 5 8-5-8-5z" stroke="#37322F" strokeWidth="1.25" strokeLinejoin="round" fill="none" />
      <path d="M2 13l8 5 8-5" stroke="#37322F" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M2 10l8 5 8-5" stroke="#37322F" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  ),
  Link: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 12a4 4 0 005.66 0l2-2a4 4 0 00-5.66-5.66l-1 1" stroke="#37322F" strokeWidth="1.25" strokeLinecap="round" fill="none" />
      <path d="M12 8a4 4 0 00-5.66 0l-2 2a4 4 0 005.66 5.66l1-1" stroke="#37322F" strokeWidth="1.25" strokeLinecap="round" fill="none" />
    </svg>
  ),
  Sliders: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="4" y1="6" x2="4" y2="18" stroke="#37322F" strokeWidth="1.25" strokeLinecap="round" />
      <line x1="10" y1="2" x2="10" y2="14" stroke="#37322F" strokeWidth="1.25" strokeLinecap="round" />
      <line x1="16" y1="6" x2="16" y2="18" stroke="#37322F" strokeWidth="1.25" strokeLinecap="round" />
      <circle cx="4" cy="4" r="2" stroke="#37322F" strokeWidth="1.25" fill="none" />
      <circle cx="10" cy="16" r="2" stroke="#37322F" strokeWidth="1.25" fill="none" />
      <circle cx="16" cy="4" r="2" stroke="#37322F" strokeWidth="1.25" fill="none" />
    </svg>
  ),
  Code: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polyline points="6,6 2,10 6,14" stroke="#37322F" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <polyline points="14,6 18,10 14,14" stroke="#37322F" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <line x1="12" y1="4" x2="8" y2="16" stroke="#37322F" strokeWidth="1.25" strokeLinecap="round" />
    </svg>
  ),
  DollarSign: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="10" y1="2" x2="10" y2="18" stroke="#37322F" strokeWidth="1.25" strokeLinecap="round" />
      <path d="M14 6c0-1.657-1.79-3-4-3S6 4.343 6 6s1.79 3 4 3 4 1.343 4 3-1.79 3-4 3-4-1.343-4-3" stroke="#37322F" strokeWidth="1.25" strokeLinecap="round" fill="none" />
    </svg>
  ),
}

export default function BenchmarkPage() {
  return (
    <div className="w-full min-h-screen relative bg-[#F7F5F3] overflow-x-hidden flex flex-col justify-start items-center">
      <div className="relative flex flex-col justify-start items-center w-full">
        <div className="w-full max-w-none px-4 sm:px-6 md:px-8 lg:px-0 lg:max-w-[1060px] lg:w-[1060px] relative flex flex-col justify-start items-start min-h-screen">
          {/* Left vertical line */}
          <div className="w-[1px] h-full absolute left-4 sm:left-6 md:left-8 lg:left-0 top-0 bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] z-0"></div>
          {/* Right vertical line */}
          <div className="w-[1px] h-full absolute right-4 sm:right-6 md:right-8 lg:right-0 top-0 bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] z-0"></div>

          <div className="self-stretch pt-[9px] flex flex-col justify-center items-center relative z-10">
            {/* Navigation */}
            <div className="w-full h-14 sm:h-16 md:h-20 lg:h-[100px] absolute left-0 top-0 flex justify-center items-center z-20 px-6 sm:px-8 md:px-12 lg:px-0">
              <div className="w-full h-0 absolute left-0 top-7 sm:top-8 md:top-10 lg:top-[50px] border-t border-[rgba(55,50,47,0.12)] shadow-[0px_1px_0px_white]"></div>
              <div className="w-full max-w-[calc(100%-32px)] sm:max-w-[calc(100%-48px)] md:max-w-[calc(100%-64px)] lg:max-w-[760px] lg:w-[760px] h-12 sm:h-13 md:h-14 py-2 sm:py-2.5 px-4 sm:px-5 pr-2.5 sm:pr-3 bg-[#F7F5F3] backdrop-blur-sm shadow-[0px_0px_0px_2px_white] overflow-hidden rounded-[50px] flex justify-between items-center relative z-30">
                <div className="flex justify-center items-center">
                  <a href="/" className="flex justify-start items-center no-underline">
                    <div className="flex flex-col justify-center text-[#2F3037] text-base sm:text-lg md:text-xl lg:text-xl font-semibold leading-5 font-sans">
                      Pokant
                    </div>
                  </a>
                  <nav className="pl-4 sm:pl-5 lg:pl-6 hidden sm:flex flex-row gap-2 md:gap-4">
                    <a href="/#features" className="text-[rgba(49,45,43,0.80)] text-xs md:text-[13px] font-medium leading-[14px] font-sans hover:text-[#37322F] transition-colors">
                      Features
                    </a>
                    <a href="https://api.pokant.live/docs" target="_blank" rel="noopener noreferrer" className="text-[rgba(49,45,43,0.80)] text-xs md:text-[13px] font-medium leading-[14px] font-sans hover:text-[#37322F] transition-colors">
                      Docs
                    </a>
                    <a href="/enterprise" className="text-[rgba(49,45,43,0.80)] text-xs md:text-[13px] font-medium leading-[14px] font-sans hover:text-[#37322F] transition-colors">
                      Enterprise
                    </a>
                    <a href="/benchmark" className="text-[#37322F] text-xs md:text-[13px] font-medium leading-[14px] font-sans transition-colors">
                      Benchmark
                    </a>
                    <a href="/use-cases" className="text-[rgba(49,45,43,0.80)] text-xs md:text-[13px] font-medium leading-[14px] font-sans hover:text-[#37322F] transition-colors">
                      Use Cases
                    </a>
                  </nav>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <a
                    href="https://app.pokant.live/login"
                    className="px-3 sm:px-4 md:px-[16px] py-1.5 sm:py-2 bg-white shadow-[0px_1px_2px_rgba(55,50,47,0.12)] overflow-hidden rounded-full flex justify-center items-center no-underline hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-[#37322F] text-xs md:text-[13px] font-medium leading-5 font-sans">Log in</span>
                  </a>
                  <a
                    href="https://app.pokant.live/login"
                    className="px-3 sm:px-4 md:px-[16px] py-1.5 sm:py-2 bg-[#37322F] shadow-[0px_1px_2px_rgba(55,50,47,0.12)] overflow-hidden rounded-full flex justify-center items-center no-underline hover:bg-[#2A2520] transition-colors"
                  >
                    <span className="text-white text-xs md:text-[13px] font-medium leading-5 font-sans">Get Started</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Hero */}
            <div className="pt-16 sm:pt-20 md:pt-24 lg:pt-[140px] pb-12 md:pb-16 border-b border-[rgba(55,50,47,0.12)] w-full flex justify-center">
              <div className="w-full max-w-[760px] flex flex-col items-center gap-5 px-4">
                <Badge
                  text="Benchmark Results"
                  icon={
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <polyline points="1,8 4,4 7,6 11,2" stroke="#37322F" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </svg>
                  }
                />
                <h1 className="text-center text-[#37322F] text-[28px] sm:text-[42px] md:text-[56px] lg:text-[72px] font-bold leading-[1.05] tracking-tight font-display px-2">
                  How We Compare
                </h1>
                <p className="text-center text-[rgba(55,50,47,0.70)] text-base md:text-lg leading-relaxed font-sans max-w-[540px]">
                  Real benchmark data from 36 research tasks across 6 categories. No cherry-picked results — every query, every metric, fully transparent.
                </p>
              </div>
            </div>

            {/* Quick Stats Bar */}
            <div className="w-full border-b border-[rgba(55,50,47,0.12)]">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
                {quickStats.map((stat, i) => (
                  <div
                    key={i}
                    className={`p-6 flex flex-col items-center gap-1 ${
                      i < quickStats.length - 1 ? "border-r border-[rgba(55,50,47,0.12)]" : ""
                    } ${i < 4 ? "border-b lg:border-b-0 border-[rgba(55,50,47,0.12)]" : ""} ${i === 4 ? "border-b md:border-b-0 border-[rgba(55,50,47,0.12)]" : ""}`}
                  >
                    <div className="text-[#37322F] text-2xl font-semibold font-serif">{stat.value}</div>
                    <div className="text-[#605A57] text-xs font-normal font-sans text-center">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Feature Comparison Table */}
            <div className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col items-center">
              <div className="self-stretch px-6 md:px-24 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center">
                <div className="w-full max-w-[586px] flex flex-col items-center gap-4">
                  <Badge text="Feature Comparison" />
                  <div className="self-stretch text-center text-[#49423D] text-3xl md:text-5xl font-bold leading-tight md:leading-[60px] font-display tracking-tight">
                    Side-by-side breakdown
                  </div>
                </div>
              </div>

              <div className="w-full overflow-x-auto">
                <table className="w-full min-w-[800px] text-sm font-sans">
                  <thead>
                    <tr className="border-b border-[rgba(55,50,47,0.12)]">
                      <th className="sticky left-0 bg-[#F7F5F3] text-left p-4 text-[#605A57] font-medium z-10 min-w-[160px]">Feature</th>
                      <th className="p-4 text-left font-medium bg-[#37322F] text-white min-w-[120px]">Pokant</th>
                      <th className="p-4 text-left text-[#605A57] font-medium min-w-[120px]">OpenAI o3</th>
                      <th className="p-4 text-left text-[#605A57] font-medium min-w-[120px]">Perplexity Sonar</th>
                      <th className="p-4 text-left text-[#605A57] font-medium min-w-[120px]">Firecrawl+LLM</th>
                      <th className="p-4 text-left text-[#605A57] font-medium min-w-[120px]">Tavily+LLM</th>
                      <th className="p-4 text-left text-[#605A57] font-medium min-w-[100px]">DIY</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonFeatures.map((row, i) => (
                      <tr key={i} className="border-b border-[rgba(55,50,47,0.08)]">
                        <td className="sticky left-0 bg-[#F7F5F3] p-4 text-[#37322F] font-medium z-10">{row.feature}</td>
                        <td className="p-4 text-[#37322F] font-medium bg-[#F7F5F3]/50">{row.pokant}</td>
                        <td className="p-4 text-[#605A57]">{row.openai_o3}</td>
                        <td className="p-4 text-[#605A57]">{row.perplexity_sonar}</td>
                        <td className="p-4 text-[#605A57]">{row.firecrawl_llm}</td>
                        <td className="p-4 text-[#605A57]">{row.tavily_llm}</td>
                        <td className="p-4 text-[#605A57]">{row.diy}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Cost at Scale */}
            <div className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col items-center">
              <div className="self-stretch px-6 md:px-24 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center">
                <div className="w-full max-w-[586px] flex flex-col items-center gap-4">
                  <Badge text="Cost at Scale" />
                  <div className="self-stretch text-center text-[#49423D] text-3xl md:text-5xl font-bold leading-tight md:leading-[60px] font-display tracking-tight">
                    Pricing that scales
                  </div>
                </div>
              </div>

              <div className="w-full overflow-x-auto">
                <table className="w-full text-sm font-sans">
                  <thead>
                    <tr className="border-b border-[rgba(55,50,47,0.12)]">
                      <th className="text-left p-4 text-[#605A57] font-medium">Provider</th>
                      <th className="text-left p-4 text-[#605A57] font-medium">Cost</th>
                      <th className="text-left p-4 text-[#605A57] font-medium">Note</th>
                    </tr>
                  </thead>
                  <tbody>
                    {costAtScale.map((row, i) => (
                      <tr
                        key={i}
                        className={`border-b border-[rgba(55,50,47,0.08)] ${
                          row.highlighted ? "bg-[#37322F]/[0.03]" : ""
                        }`}
                      >
                        <td className={`p-4 ${row.highlighted ? "text-[#37322F] font-semibold" : "text-[#605A57]"}`}>
                          {row.provider}
                        </td>
                        <td className={`p-4 ${row.highlighted ? "text-[#37322F] font-semibold" : "text-[#605A57]"}`}>
                          {row.cost}
                        </td>
                        <td className="p-4 text-[#605A57]">{row.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Structural Advantages */}
            <div className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col items-center">
              <div className="self-stretch px-6 md:px-24 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center">
                <div className="w-full max-w-[586px] flex flex-col items-center gap-4">
                  <Badge text="Why It Matters" />
                  <div className="self-stretch text-center text-[#49423D] text-3xl md:text-5xl font-bold leading-tight md:leading-[60px] font-display tracking-tight">
                    Structural advantages
                  </div>
                </div>
              </div>

              <div className="self-stretch flex justify-center items-start">
                <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden">
                  <div className="w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
                    {Array.from({ length: 200 }).map((_, i) => (
                      <div
                        key={i}
                        className="self-stretch h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
                      />
                    ))}
                  </div>
                </div>

                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-0 border-l border-r border-[rgba(55,50,47,0.12)]">
                  {structuralAdvantages.map((item, i) => (
                    <div
                      key={i}
                      className="border-b border-r-0 md:odd:border-r border-[rgba(55,50,47,0.12)] p-6 md:p-8 flex flex-col gap-3"
                    >
                      <div className="w-9 h-9 rounded-lg bg-[#F0EDE9] flex items-center justify-center flex-shrink-0">
                        {iconMap[item.icon]}
                      </div>
                      <div className="text-[#37322F] text-base font-semibold font-sans">{item.title}</div>
                      <div className="text-[#605A57] text-sm font-normal leading-relaxed font-sans">{item.description}</div>
                      <div className="text-[rgba(55,50,47,0.50)] text-xs font-normal leading-relaxed font-sans italic">
                        Competitors: {item.competitors}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden">
                  <div className="w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
                    {Array.from({ length: 200 }).map((_, i) => (
                      <div
                        key={i}
                        className="self-stretch h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Methodology */}
            <div className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col items-center">
              <div className="self-stretch px-6 md:px-24 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center">
                <div className="w-full max-w-[586px] flex flex-col items-center gap-4">
                  <Badge text="Methodology" />
                  <div className="self-stretch text-center text-[#49423D] text-3xl md:text-5xl font-bold leading-tight md:leading-[60px] font-display tracking-tight">
                    How we tested
                  </div>
                </div>
              </div>

              <div className="w-full max-w-[680px] mx-auto px-6 py-12">
                <ol className="flex flex-col gap-6">
                  {methodology.map((step, i) => (
                    <li key={i} className="flex gap-4">
                      <div className="w-7 h-7 rounded-full bg-[#37322F] flex items-center justify-center text-white text-xs font-semibold font-sans flex-shrink-0 mt-0.5">
                        {i + 1}
                      </div>
                      <div className="text-[#605A57] text-sm font-normal leading-relaxed font-sans pt-1">{step}</div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* CTA */}
            <div className="w-full relative overflow-hidden flex flex-col justify-center items-center gap-2">
              <div className="self-stretch px-6 md:px-24 py-12 md:py-12 border-t border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center gap-6 relative z-10">
                <div className="absolute inset-0 w-full h-full overflow-hidden">
                  <div className="w-full h-full relative">
                    {Array.from({ length: 300 }).map((_, i) => (
                      <div
                        key={i}
                        className="absolute h-4 w-full rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
                        style={{
                          top: `${i * 16 - 120}px`,
                          left: "-100%",
                          width: "300%",
                        }}
                      ></div>
                    ))}
                  </div>
                </div>

                <div className="w-full max-w-[586px] px-6 py-5 md:py-8 overflow-hidden rounded-lg flex flex-col justify-start items-center gap-6 relative z-20">
                  <div className="self-stretch flex flex-col justify-start items-start gap-3">
                    <div className="self-stretch text-center flex justify-center flex-col text-[#49423D] text-3xl md:text-5xl font-bold leading-tight md:leading-[56px] font-display tracking-tight">
                      See It for Yourself
                    </div>
                    <div className="self-stretch text-center text-[#605A57] text-base leading-7 font-sans font-medium">
                      Run your own research queries and compare
                      <br />
                      the results against any alternative.
                    </div>
                  </div>
                  <div className="flex justify-start items-center gap-4">
                    <a
                      href="/contact"
                      className="h-10 px-12 py-[6px] relative bg-[#37322F] shadow-[0px_0px_0px_2.5px_rgba(255,255,255,0.08)_inset] overflow-hidden rounded-full flex justify-center items-center cursor-pointer hover:bg-[#2A2520] transition-colors no-underline"
                    >
                      <div className="w-44 h-[41px] absolute left-0 top-0 bg-gradient-to-b from-[rgba(255,255,255,0)] to-[rgba(0,0,0,0.10)] mix-blend-multiply"></div>
                      <div className="flex flex-col justify-center text-white text-[13px] font-medium leading-5 font-sans">
                        Start Free
                      </div>
                    </a>
                    <a
                      href="/use-cases"
                      className="h-10 px-8 relative bg-transparent border border-[#37322F]/30 overflow-hidden rounded-full flex justify-center items-center no-underline hover:border-[#37322F]/60 transition-colors"
                    >
                      <div className="flex flex-col justify-center text-[#37322F] text-[13px] font-medium leading-5 font-sans">
                        View Use Cases
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <FooterSection />
          </div>
        </div>
      </div>
    </div>
  )
}
