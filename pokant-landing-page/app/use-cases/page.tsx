"use client"

import { useState } from "react"
import FooterSection from "../../components/footer-section"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../../components/ui/tabs"
import { loadUseCases, groupByCategory, summary } from "../../data/use-cases"
import type { UseCase } from "../../data/use-cases/types"
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

const whereLoseItems = [
  {
    title: "Speed",
    description: "We average 74 seconds per query. Perplexity returns results in 2-5 seconds. If you need instant answers, we're not the right tool.",
    status: "Optimizing with parallel source fetching",
  },
  {
    title: "Conversational follow-ups",
    description: "We run single research tasks, not multi-turn conversations. You can't ask clarifying questions mid-research.",
    status: "Not on the roadmap — by design",
  },
  {
    title: "Real-time data",
    description: "We scrape and synthesize web content. We don't have access to live databases, stock tickers, or real-time feeds.",
    status: "Exploring partnerships for live data sources",
  },
  {
    title: "General chat",
    description: "This is a research API, not a chatbot. If you just want to ask a question, use ChatGPT or Claude directly.",
    status: "Not applicable — different product category",
  },
  {
    title: "Paywalled content",
    description: "We can only access publicly available web pages. Paywalled journals, gated reports, and login-required content are not accessible.",
    status: "Investigating institutional access partnerships",
  },
  {
    title: "Non-English sources",
    description: "Our source discovery is optimized for English-language content. Non-English results are included when found but not specifically targeted.",
    status: "Multi-language support planned for Q3",
  },
]

function UseCaseCard({ useCase }: { useCase: UseCase }) {
  return (
    <div className="border-b border-r-0 md:odd:border-r border-[rgba(55,50,47,0.12)] p-6 md:p-8 flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="px-2 py-0.5 bg-[#F0EDE9] rounded text-[10px] font-medium text-[#605A57] font-sans uppercase tracking-wide">
            {useCase.category}
          </span>
          {useCase.status === "failed" && (
            <span className="px-2 py-0.5 bg-red-50 rounded text-[10px] font-medium text-red-600 font-sans uppercase tracking-wide">
              Failed
            </span>
          )}
        </div>
        <div className="text-[#37322F] text-base font-semibold font-sans">{useCase.use_case}</div>
        <div className="text-[#605A57] text-sm font-normal font-sans">{useCase.topic}</div>
      </div>

      {/* Metrics strip */}
      <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs font-sans text-[#605A57]">
        <span>{useCase.duration_seconds}s</span>
        <span>${useCase.cost_usd.toFixed(2)}</span>
        <span>{useCase.sources.length} sources</span>
        <span className={useCase.schema_match ? "text-green-600" : "text-red-500"}>
          {useCase.schema_match ? "Schema match" : "Schema mismatch"}
        </span>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="output" className="w-full gap-3">
        <TabsList className="bg-[#F0EDE9] border border-[rgba(55,50,47,0.12)] rounded-lg h-8 p-[2px]">
          <TabsTrigger
            value="output"
            className="text-xs data-[state=active]:bg-white data-[state=active]:text-[#37322F] data-[state=active]:shadow-sm rounded-md px-3 py-1"
          >
            Output
          </TabsTrigger>
          <TabsTrigger
            value="schema"
            className="text-xs data-[state=active]:bg-white data-[state=active]:text-[#37322F] data-[state=active]:shadow-sm rounded-md px-3 py-1"
          >
            Schema
          </TabsTrigger>
          <TabsTrigger
            value="sources"
            className="text-xs data-[state=active]:bg-white data-[state=active]:text-[#37322F] data-[state=active]:shadow-sm rounded-md px-3 py-1"
          >
            Sources
          </TabsTrigger>
        </TabsList>

        <TabsContent value="output">
          <pre className="bg-[#fbfaf9] border border-[rgba(55,50,47,0.12)] rounded-lg p-3 text-[11px] font-mono text-[#605A57] overflow-x-auto max-h-[200px] overflow-y-auto leading-relaxed">
            {JSON.stringify(useCase.result, null, 2)}
          </pre>
        </TabsContent>

        <TabsContent value="schema">
          <pre className="bg-[#fbfaf9] border border-[rgba(55,50,47,0.12)] rounded-lg p-3 text-[11px] font-mono text-[#605A57] overflow-x-auto max-h-[200px] overflow-y-auto leading-relaxed">
            {JSON.stringify(useCase.schema, null, 2)}
          </pre>
        </TabsContent>

        <TabsContent value="sources">
          <div className="bg-[#fbfaf9] border border-[rgba(55,50,47,0.12)] rounded-lg p-3 max-h-[200px] overflow-y-auto">
            <div className="flex flex-col gap-1.5">
              {useCase.sources.map((source, si) => (
                <div key={si} className="flex items-start gap-2 text-[11px] font-sans">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 flex-shrink-0" />
                  <div className="flex flex-col min-w-0">
                    <span className="text-[#37322F] truncate">{source.title}</span>
                    <span className="text-[#605A57] truncate">{source.domain}</span>
                  </div>
                </div>
              ))}
              {useCase.sources_failed.length > 0 && (
                <>
                  <div className="text-[10px] text-[#605A57] font-medium uppercase tracking-wide mt-2 mb-1">Failed sources</div>
                  {useCase.sources_failed.map((source, si) => (
                    <div key={si} className="flex items-start gap-2 text-[11px] font-sans">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 flex-shrink-0" />
                      <div className="flex flex-col min-w-0">
                        <span className="text-[#605A57] truncate">{source.title}</span>
                        <span className="text-[rgba(55,50,47,0.40)] truncate">{source.domain}</span>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default function UseCasesPage() {
  const useCases = loadUseCases()
  const grouped = groupByCategory(useCases)

  const metrics = [
    { value: summary.total_tasks.toString(), label: "Tasks completed" },
    { value: `${summary.avg_duration_seconds}s`, label: "Avg duration" },
    { value: `$${summary.avg_cost_usd.toFixed(2)}`, label: "Avg cost" },
    { value: summary.avg_sources.toString(), label: "Avg sources" },
    { value: `${Math.round(summary.schema_match_rate * 100)}%`, label: "Schema match" },
    { value: `${Math.round(summary.success_rate * 100)}%`, label: "Success rate" },
  ]

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
                    <a href="/benchmark" className="text-[rgba(49,45,43,0.80)] text-xs md:text-[13px] font-medium leading-[14px] font-sans hover:text-[#37322F] transition-colors">
                      Benchmark
                    </a>
                    <a href="/use-cases" className="text-[#37322F] text-xs md:text-[13px] font-medium leading-[14px] font-sans transition-colors">
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
                  text="Real Research Outputs"
                  icon={
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 10V4l3-2.5L8 4v6" stroke="#37322F" strokeWidth="1" fill="none" />
                      <rect x="4" y="7" width="2" height="3" stroke="#37322F" strokeWidth="0.75" fill="none" />
                    </svg>
                  }
                />
                <h1 className="text-center text-[#37322F] text-[28px] sm:text-[42px] md:text-[56px] lg:text-[72px] font-bold leading-[1.05] tracking-tight font-display px-2">
                  Real research.
                  <br />
                  Real outputs.
                </h1>
                <p className="text-center text-[rgba(55,50,47,0.70)] text-base md:text-lg leading-relaxed font-sans max-w-[540px]">
                  Every result below is a real API response from Pokant Deep Research. Unedited JSON, actual sources, true costs. Browse by category or search for your domain.
                </p>
              </div>
            </div>

            {/* Aggregate Metrics Bar */}
            <div className="w-full border-b border-[rgba(55,50,47,0.12)]">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
                {metrics.map((stat, i) => (
                  <div
                    key={i}
                    className={`p-6 flex flex-col items-center gap-1 ${
                      i < metrics.length - 1 ? "border-r border-[rgba(55,50,47,0.12)]" : ""
                    } ${i < 4 ? "border-b lg:border-b-0 border-[rgba(55,50,47,0.12)]" : ""} ${i === 4 ? "border-b md:border-b-0 border-[rgba(55,50,47,0.12)]" : ""}`}
                  >
                    <div className="text-[#37322F] text-2xl font-semibold font-serif">{stat.value}</div>
                    <div className="text-[#605A57] text-xs font-normal font-sans text-center">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Use Case Cards by Category */}
            {Object.entries(grouped).map(([category, cases]) => (
              <div key={category} className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col items-center">
                <div className="self-stretch px-6 md:px-24 py-8 md:py-10 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center">
                  <div className="w-full max-w-[586px] flex flex-col items-center gap-2">
                    <div className="text-center text-[#49423D] text-2xl md:text-3xl font-bold font-display tracking-tight">
                      {category}
                    </div>
                    <div className="text-[#605A57] text-sm font-sans">
                      {cases.length} tasks
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
                    {cases.map((useCase) => (
                      <UseCaseCard key={useCase.id} useCase={useCase} />
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
            ))}

            {/* Where We Lose */}
            <div className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col items-center">
              <div className="self-stretch px-6 md:px-24 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center">
                <div className="w-full max-w-[586px] flex flex-col items-center gap-4">
                  <Badge text="Transparency" />
                  <div className="self-stretch text-center text-[#49423D] text-3xl md:text-5xl font-bold leading-tight md:leading-[60px] font-display tracking-tight">
                    Where we lose
                  </div>
                  <p className="text-center text-[rgba(55,50,47,0.70)] text-base leading-relaxed font-sans max-w-[480px]">
                    No product is perfect. Here&apos;s where other tools outperform us today.
                  </p>
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

                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-l border-r border-[rgba(55,50,47,0.12)]">
                  {whereLoseItems.map((item, i) => (
                    <div
                      key={i}
                      className="border-b border-r-0 md:even:border-r-0 lg:even:border-r md:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(3n)]:border-r-0 md:odd:border-r lg:odd:border-r border-[rgba(55,50,47,0.12)] p-6 md:p-8 flex flex-col gap-3"
                    >
                      <div className="text-[#37322F] text-base font-semibold font-sans">{item.title}</div>
                      <div className="text-[#605A57] text-sm font-normal leading-relaxed font-sans">{item.description}</div>
                      <div className="text-[rgba(55,50,47,0.45)] text-xs font-normal font-sans italic">{item.status}</div>
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
                      Try It on Your Own Topic
                    </div>
                    <div className="self-stretch text-center text-[#605A57] text-base leading-7 font-sans font-medium">
                      Send any research query to the API and get
                      <br />
                      structured, sourced results in under two minutes.
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
                      href="/benchmark"
                      className="h-10 px-8 relative bg-transparent border border-[#37322F]/30 overflow-hidden rounded-full flex justify-center items-center no-underline hover:border-[#37322F]/60 transition-colors"
                    >
                      <div className="flex flex-col justify-center text-[#37322F] text-[13px] font-medium leading-5 font-sans">
                        View Benchmark
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
