"use client"

import FooterSection from "../../components/footer-section"

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

const useCases = [
  {
    title: "Vendor portal extraction",
    description:
      "Pull invoices, shipping manifests, and inventory data from supplier portals on a schedule. No more manual exports or CSV wrangling.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="4" width="16" height="12" rx="1" stroke="#37322F" strokeWidth="1.25" fill="none" />
        <path d="M2 8h16" stroke="#37322F" strokeWidth="1.25" />
        <path d="M6 12h8" stroke="#37322F" strokeWidth="1.25" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Government form filing",
    description:
      "Submit compliance filings, license renewals, and regulatory forms to government portals automatically. Handle CAPTCHAs, auth walls, and session timeouts.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 2L3 6v8l7 4 7-4V6L10 2z" stroke="#37322F" strokeWidth="1.25" fill="none" />
        <path d="M10 2v12M3 6l7 4 7-4" stroke="#37322F" strokeWidth="1.25" />
      </svg>
    ),
  },
  {
    title: "Competitor price monitoring",
    description:
      "Track pricing across competitor sites daily. Get structured data delivered to your warehouse. Trigger alerts when prices move.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polyline points="3,14 7,9 11,12 17,5" stroke="#37322F" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <circle cx="17" cy="5" r="1.5" fill="#37322F" />
      </svg>
    ),
  },
  {
    title: "Insurance quote aggregation",
    description:
      "Run thousands of quote requests across carrier portals. Return structured JSON for every result. Built for high-volume, high-reliability workflows.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 3l-6 3v5c0 3.5 2.5 6.5 6 7.5 3.5-1 6-4 6-7.5V6L10 3z" stroke="#37322F" strokeWidth="1.25" fill="none" />
        <path d="M7 10l2 2 4-4" stroke="#37322F" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "HR & onboarding automation",
    description:
      "Submit new hire forms to benefits portals, payroll providers, and state tax agencies. Handle the back-office web work that no one wants to maintain.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="10" cy="7" r="3" stroke="#37322F" strokeWidth="1.25" fill="none" />
        <path d="M4 17c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="#37322F" strokeWidth="1.25" strokeLinecap="round" fill="none" />
      </svg>
    ),
  },
  {
    title: "Lead enrichment & CRM sync",
    description:
      "Scrape LinkedIn profiles, company sites, and directories. Enrich your CRM with structured data. Run nightly without touching a browser.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="10" cy="10" r="7" stroke="#37322F" strokeWidth="1.25" fill="none" />
        <path d="M10 7v6M7 10h6" stroke="#37322F" strokeWidth="1.25" strokeLinecap="round" />
      </svg>
    ),
  },
]

const guarantees = [
  {
    label: "We build it",
    description: "Describe your workflow. We implement, test, and deploy the automation.",
  },
  {
    label: "We monitor it",
    description: "24/7 monitoring with Slack/email alerts. We're on-call when something breaks.",
  },
  {
    label: "We fix it",
    description: "Sites change. We update your workflows when they do. No ticket required.",
  },
]

import type React from "react"

export default function EnterprisePage() {
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
                    <a href="/enterprise" className="text-[#37322F] text-xs md:text-[13px] font-medium leading-[14px] font-sans transition-colors">
                      Enterprise
                    </a>
                    <a href="/benchmark" className="text-[rgba(49,45,43,0.80)] text-xs md:text-[13px] font-medium leading-[14px] font-sans hover:text-[#37322F] transition-colors">
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
                  text="For Enterprise"
                  icon={
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="1" y="1" width="4.5" height="4.5" stroke="#37322F" strokeWidth="1" fill="none" />
                      <rect x="6.5" y="1" width="4.5" height="4.5" stroke="#37322F" strokeWidth="1" fill="none" />
                      <rect x="1" y="6.5" width="4.5" height="4.5" stroke="#37322F" strokeWidth="1" fill="none" />
                      <rect x="6.5" y="6.5" width="4.5" height="4.5" stroke="#37322F" strokeWidth="1" fill="none" />
                    </svg>
                  }
                />
                <h1 className="text-center text-[#37322F] text-[28px] sm:text-[42px] md:text-[56px] lg:text-[72px] font-bold leading-[1.05] tracking-tight font-display px-2">
                  Browser automation
                  <br />
                  for your team.
                </h1>
                <p className="text-center text-[rgba(55,50,47,0.70)] text-base md:text-lg leading-relaxed font-sans max-w-[540px]">
                  We build, deploy, and maintain browser automation workflows for ops teams. You tell us what to automate — we handle everything else.
                </p>
                <div className="flex items-center gap-4 mt-2">
                  <a
                    href="/contact"
                    className="h-11 px-8 relative bg-[#37322F] shadow-[0px_0px_0px_2.5px_rgba(255,255,255,0.08)_inset] overflow-hidden rounded-full flex justify-center items-center no-underline hover:bg-[#2A2520] transition-colors"
                  >
                    <div className="flex flex-col justify-center text-white text-[13px] font-medium leading-5 font-sans">
                      Talk to Sales
                    </div>
                  </a>
                  <a
                    href="https://api.pokant.live/docs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-11 px-8 relative bg-transparent border border-[#37322F]/30 overflow-hidden rounded-full flex justify-center items-center no-underline hover:border-[#37322F]/60 transition-colors"
                  >
                    <div className="flex flex-col justify-center text-[#37322F] text-[13px] font-medium leading-5 font-sans">
                      Read the Docs
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* What we do */}
            <div className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
              <div className="self-stretch px-6 md:px-24 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center">
                <div className="w-full max-w-[586px] flex flex-col items-center gap-4">
                  <Badge text="What we do" />
                  <div className="self-stretch text-center text-[#49423D] text-3xl md:text-5xl font-bold leading-tight md:leading-[60px] font-display tracking-tight">
                    We build and monitor it. You own the data.
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

                <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-0 border-l border-r border-[rgba(55,50,47,0.12)]">
                  {guarantees.map((item, i) => (
                    <div
                      key={i}
                      className="border-b md:border-b-0 border-r-0 md:border-r last:border-r-0 border-[rgba(55,50,47,0.12)] p-6 md:p-8 lg:p-10 flex flex-col gap-3"
                    >
                      <div className="w-8 h-8 rounded-full bg-[#37322F] flex items-center justify-center text-white text-xs font-semibold font-sans flex-shrink-0">
                        {i + 1}
                      </div>
                      <div className="text-[#37322F] text-lg font-semibold font-sans">{item.label}</div>
                      <div className="text-[#605A57] text-sm font-normal leading-relaxed font-sans">{item.description}</div>
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

            {/* Use Cases */}
            <div className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
              <div className="self-stretch px-6 md:px-24 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center">
                <div className="w-full max-w-[586px] flex flex-col items-center gap-4">
                  <Badge text="Use Cases" />
                  <div className="self-stretch text-center text-[#49423D] text-3xl md:text-5xl font-bold leading-tight md:leading-[60px] font-display tracking-tight">
                    Any web workflow, automated.
                  </div>
                  <div className="self-stretch text-center text-[#605A57] text-base font-normal leading-7 font-sans">
                    From vendor portals to government forms — if a human
                    <br className="hidden md:block" />
                    can do it in a browser, Pokant can automate it.
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
                  {useCases.map((item, i) => (
                    <div
                      key={i}
                      className="border-b border-r-0 md:odd:border-r border-[rgba(55,50,47,0.12)] p-6 md:p-8 flex flex-col gap-3"
                    >
                      <div className="w-9 h-9 rounded-lg bg-[#F0EDE9] flex items-center justify-center flex-shrink-0">
                        {item.icon}
                      </div>
                      <div className="text-[#37322F] text-base font-semibold font-sans">{item.title}</div>
                      <div className="text-[#605A57] text-sm font-normal leading-relaxed font-sans">{item.description}</div>
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

            {/* Already running automation? */}
            <div className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
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
                  {/* Left */}
                  <div className="border-b md:border-b-0 border-r-0 md:border-r border-[rgba(55,50,47,0.12)] p-6 md:p-8 lg:p-12 flex flex-col justify-center gap-6">
                    <div className="flex flex-col gap-2">
                      <Badge text="Already using Playwright or Browser Use?" />
                    </div>
                    <h2 className="text-[#49423D] text-2xl md:text-3xl font-bold font-display tracking-tight leading-tight">
                      Add reliability on top of what you have.
                    </h2>
                    <div className="flex flex-col gap-3">
                      <p className="text-[#605A57] text-sm md:text-base font-normal leading-relaxed font-sans">
                        Already running browser automation in-house? Pokant wraps your existing workflows with adaptive retry, failure diagnosis, cost tracking, and a dashboard your ops team can actually use.
                      </p>
                      <p className="text-[#605A57] text-sm md:text-base font-normal leading-relaxed font-sans">
                        You keep your scripts. We add the production reliability layer.
                      </p>
                    </div>
                    <div>
                      <a
                        href="/contact"
                        className="h-10 px-8 py-[6px] relative bg-[#37322F] shadow-[0px_2px_4px_rgba(55,50,47,0.12)] overflow-hidden rounded-[99px] flex justify-center items-center cursor-pointer hover:bg-[#2A2520] transition-colors no-underline inline-flex w-fit"
                      >
                        <div className="w-full h-[41px] absolute left-0 top-[-0.5px] bg-gradient-to-b from-[rgba(255,255,255,0.20)] to-[rgba(0,0,0,0.10)] mix-blend-multiply"></div>
                        <div className="flex flex-col justify-center text-[#FBFAF9] text-[13px] font-medium leading-5 font-sans">
                          Talk to Sales
                        </div>
                      </a>
                    </div>
                  </div>

                  {/* Right */}
                  <div className="p-6 md:p-8 lg:p-12 flex flex-col justify-center gap-8">
                    {[
                      { stat: "10x faster", label: "Automate hours of manual web work into minutes" },
                      { stat: "99% reliable", label: "Adaptive retry catches failures before you do" },
                      { stat: "Full visibility", label: "Dashboard with step replay, cost tracking, and alerts" },
                    ].map((item, i) => (
                      <div key={i} className="flex flex-col gap-2 border-b border-[rgba(55,50,47,0.08)] pb-8 last:border-0 last:pb-0">
                        <div className="text-[#37322F] text-2xl sm:text-3xl font-semibold font-serif">{item.stat}</div>
                        <div className="text-[#605A57] text-sm font-normal font-sans">{item.label}</div>
                      </div>
                    ))}
                  </div>
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
                      Ready to automate your workflows?
                    </div>
                    <div className="self-stretch text-center text-[#605A57] text-base leading-7 font-sans font-medium">
                      Book a 30-minute call. We&apos;ll scope your automation
                      <br />
                      and get the first workflow live within a week.
                    </div>
                  </div>
                  <div className="flex justify-start items-center gap-4">
                    <a
                      href="/contact"
                      className="h-10 px-12 py-[6px] relative bg-[#37322F] shadow-[0px_0px_0px_2.5px_rgba(255,255,255,0.08)_inset] overflow-hidden rounded-full flex justify-center items-center cursor-pointer hover:bg-[#2A2520] transition-colors no-underline"
                    >
                      <div className="w-44 h-[41px] absolute left-0 top-0 bg-gradient-to-b from-[rgba(255,255,255,0)] to-[rgba(0,0,0,0.10)] mix-blend-multiply"></div>
                      <div className="flex flex-col justify-center text-white text-[13px] font-medium leading-5 font-sans">
                        Book a Call
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
