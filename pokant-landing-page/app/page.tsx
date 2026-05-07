"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import EffortlessIntegration from "../components/effortless-integration-updated"
import { DashboardPreview } from "../components/dashboard-preview"
import DocumentationSection from "../components/documentation-section"
import WhyDifferentSection from "../components/why-different-section"
import EnterpriseSection from "../components/enterprise-section"
import FAQSection from "../components/faq-section"
import CTASection from "../components/cta-section"
import FooterSection from "../components/footer-section"

// Reusable Badge Component
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

export default function LandingPage() {
  const [activeCard, setActiveCard] = useState(0)
  const [progress, setProgress] = useState(0)
  const mountedRef = useRef(true)

  useEffect(() => {
    const progressInterval = setInterval(() => {
      if (!mountedRef.current) return

      setProgress((prev) => {
        if (prev >= 100) {
          if (mountedRef.current) {
            setActiveCard((current) => (current + 1) % 3)
          }
          return 0
        }
        return prev + 2 // 2% every 100ms = 5 seconds total
      })
    }, 100)

    return () => {
      clearInterval(progressInterval)
      mountedRef.current = false
    }
  }, [])

  useEffect(() => {
    return () => {
      mountedRef.current = false
    }
  }, [])

  const handleCardClick = (index: number) => {
    if (!mountedRef.current) return
    setActiveCard(index)
    setProgress(0)
  }

  const getDashboardContent = () => {
    switch (activeCard) {
      case 0:
        return <div className="text-[#828387] text-sm">Customer Subscription Status and Details</div>
      case 1:
        return <div className="text-[#828387] text-sm">Analytics Dashboard - Real-time Insights</div>
      case 2:
        return <div className="text-[#828387] text-sm">Data Visualization - Charts and Metrics</div>
      default:
        return <div className="text-[#828387] text-sm">Customer Subscription Status and Details</div>
    }
  }

  return (
    <div className="w-full min-h-screen relative bg-[#F7F5F3] overflow-x-hidden flex flex-col justify-start items-center">
      <div className="relative flex flex-col justify-start items-center w-full">
        {/* Main container with proper margins */}
        <div className="w-full max-w-none px-4 sm:px-6 md:px-8 lg:px-0 lg:max-w-[1060px] lg:w-[1060px] relative flex flex-col justify-start items-start min-h-screen">
          {/* Left vertical line */}
          <div className="w-[1px] h-full absolute left-4 sm:left-6 md:left-8 lg:left-0 top-0 bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] z-0"></div>

          {/* Right vertical line */}
          <div className="w-[1px] h-full absolute right-4 sm:right-6 md:right-8 lg:right-0 top-0 bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] z-0"></div>

          <div className="self-stretch pt-[9px] overflow-hidden border-b border-[rgba(55,50,47,0.06)] flex flex-col justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-[66px] relative z-10">
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
                  <nav className="pl-4 sm:pl-5 lg:pl-6 hidden sm:flex flex-row gap-3 md:gap-5">
                    <a href="#how-it-works" className="text-[rgba(49,45,43,0.80)] text-xs md:text-[13px] font-medium leading-[14px] font-sans hover:text-[#37322F] transition-colors">
                      How it works
                    </a>
                    <a href="#use-cases" className="text-[rgba(49,45,43,0.80)] text-xs md:text-[13px] font-medium leading-[14px] font-sans hover:text-[#37322F] transition-colors">
                      Use cases
                    </a>
                    <a href="#coverage" className="text-[rgba(49,45,43,0.80)] text-xs md:text-[13px] font-medium leading-[14px] font-sans hover:text-[#37322F] transition-colors">
                      Coverage
                    </a>
                    {/* <a href="https://api.pokant.live/docs" target="_blank" rel="noopener noreferrer" className="text-[rgba(49,45,43,0.80)] text-xs md:text-[13px] font-medium leading-[14px] font-sans hover:text-[#37322F] transition-colors">
                      Docs
                    </a> */}
                  </nav>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <a
                    href="/contact"
                    className="px-3 sm:px-4 md:px-[16px] py-1.5 sm:py-2 bg-[#37322F] shadow-[0px_1px_2px_rgba(55,50,47,0.12)] overflow-hidden rounded-full flex justify-center items-center no-underline hover:bg-[#2A2520] transition-colors"
                  >
                    <span className="text-white text-xs md:text-[13px] font-medium leading-5 font-sans">Get pilot access</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Hero Section */}
            <div className="pt-16 sm:pt-20 md:pt-24 lg:pt-[216px] pb-8 sm:pb-12 md:pb-16 flex flex-col justify-start items-center px-2 sm:px-4 md:px-8 lg:px-0 w-full sm:pl-0 sm:pr-0 pl-0 pr-0">
              <div className="w-full max-w-[937px] lg:w-[937px] flex flex-col justify-center items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6">
                <div className="self-stretch rounded-[3px] flex flex-col justify-center items-center gap-4 sm:gap-5 md:gap-6 lg:gap-8">
                  <div className="w-full max-w-[820px] text-center flex justify-center flex-col text-[#37322F] text-[28px] sm:text-[42px] md:text-[62px] lg:text-[84px] font-bold leading-[1.05] tracking-tight font-display px-2 sm:px-4 md:px-0">
                    Automate any task
                    <br />
                    on any government portal.
                  </div>
                  <div className="w-full max-w-[520px] text-center text-[rgba(55,50,47,0.70)] text-sm sm:text-base md:text-lg leading-relaxed font-sans font-normal px-2 sm:px-4 md:px-0">
                    Computer-use agents that navigate, fill, submit, and extract — across tax agencies,
                    <br className="hidden sm:block" />
                    licensing boards, and regulatory portals. No portal APIs needed. Simple REST API for your team.
                  </div>
                </div>
              </div>

              <div className="w-full max-w-[497px] lg:w-[497px] flex flex-col justify-center items-center gap-4 relative z-10 mt-6 sm:mt-8 md:mt-10 lg:mt-12">
                <div className="backdrop-blur-[8.25px] flex justify-start items-center gap-4">
                  <a href="/contact" className="h-10 sm:h-11 md:h-12 px-6 sm:px-8 md:px-10 lg:px-12 py-2 sm:py-[6px] relative bg-[#37322F] shadow-[0px_0px_0px_2.5px_rgba(255,255,255,0.08)_inset] overflow-hidden rounded-full flex justify-center items-center no-underline hover:bg-[#2A2520] hover:scale-105 active:scale-95 transition-all duration-200 ease-out">
                    <div className="w-20 sm:w-24 md:w-28 lg:w-44 h-[41px] absolute left-0 top-[-0.5px] bg-gradient-to-b from-[rgba(255,255,255,0)] to-[rgba(0,0,0,0.10)] mix-blend-multiply"></div>
                    <div className="flex flex-col justify-center text-white text-sm sm:text-base md:text-[15px] font-medium leading-5 font-sans">
                      Get pilot access
                    </div>
                  </a>
                </div>
              </div>

              <div className="absolute top-[232px] sm:top-[248px] md:top-[264px] lg:top-[320px] left-1/2 transform -translate-x-1/2 z-0 pointer-events-none">
                <img
                  src="/mask-group-pattern.svg"
                  alt=""
                  className="w-[936px] sm:w-[1404px] md:w-[2106px] lg:w-[2808px] h-auto opacity-30 sm:opacity-40 md:opacity-50 mix-blend-multiply"
                  style={{
                    filter: "hue-rotate(15deg) saturate(0.7) brightness(1.2)",
                  }}
                />
              </div>

              <div className="w-full relative z-5 my-8 sm:my-12 md:my-16 lg:my-16 mb-0">
                <DashboardPreview activeCard={activeCard} />
              </div>

              <div className="self-stretch border-t border-[#E0DEDB] border-b border-[#E0DEDB] flex justify-center items-start">
                <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden">
                  {/* Left decorative pattern */}
                  <div className="w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
                    {Array.from({ length: 50 }).map((_, i) => (
                      <div
                        key={i}
                        className="self-stretch h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
                      ></div>
                    ))}
                  </div>
                </div>

                <div className="flex-1 px-0 sm:px-2 md:px-0 flex flex-col md:flex-row justify-center items-stretch gap-0">
                  {/* Feature Cards */}
                  <FeatureCard
                    title="Pre-built for 330+ jurisdictions"
                    description="A maintained library of agent workflows for state DORs and local portals — Colorado home-rule cities, Louisiana parishes, Alabama localities. No recording required."
                    isActive={activeCard === 0}
                    progress={activeCard === 0 ? progress : 0}
                    onClick={() => handleCardClick(0)}
                  />
                  <FeatureCard
                    title="Handles the hard parts"
                    description="Login walls, CAPTCHAs, MFA, session timeouts, multi-step forms — the agent navigates them end-to-end. Submission is confirmed and receipted before the task is marked complete."
                    isActive={activeCard === 1}
                    progress={activeCard === 1 ? progress : 0}
                    onClick={() => handleCardClick(1)}
                  />
                  <FeatureCard
                    title="Tamper-evident audit trail"
                    description="Every run produces a cryptographically sealed record — timestamped screenshots, the full action sequence, and exact field values submitted. So there's never any question about what was submitted."
                    isActive={activeCard === 2}
                    progress={activeCard === 2 ? progress : 0}
                    onClick={() => handleCardClick(2)}
                  />
                </div>

                <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden">
                  {/* Right decorative pattern */}
                  <div className="w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
                    {Array.from({ length: 50 }).map((_, i) => (
                      <div
                        key={i}
                        className="self-stretch h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
                      ></div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bento Grid Section */}
              <div id="how-it-works" className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
                {/* Header Section */}
                <div className="self-stretch px-4 sm:px-6 md:px-8 lg:px-0 lg:max-w-[1060px] lg:w-[1060px] py-8 sm:py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center gap-6">
                  <div className="w-full max-w-[616px] lg:w-[616px] px-4 sm:px-6 py-4 sm:py-5 shadow-[0px_2px_4px_rgba(50,45,43,0.06)] overflow-hidden rounded-lg flex flex-col justify-start items-center gap-3 sm:gap-4 shadow-none">
                    <Badge
                      icon={
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="1" y="1" width="4" height="4" stroke="#37322F" strokeWidth="1" fill="none" />
                          <rect x="7" y="1" width="4" height="4" stroke="#37322F" strokeWidth="1" fill="none" />
                          <rect x="1" y="7" width="4" height="4" stroke="#37322F" strokeWidth="1" fill="none" />
                          <rect x="7" y="7" width="4" height="4" stroke="#37322F" strokeWidth="1" fill="none" />
                        </svg>
                      }
                      text="How it works"
                    />
                    <div className="w-full max-w-[598.06px] lg:w-[598.06px] text-center flex justify-center flex-col text-[#49423D] text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold leading-tight md:leading-[60px] font-display tracking-tight">
                      Describe the task. The agent handles the rest.
                    </div>
                    <div className="self-stretch text-center text-[#605A57] text-sm sm:text-base font-normal leading-6 sm:leading-7 font-sans">
                      No scripts to write. No selectors to maintain.
                      <br />
                      No portal APIs required.
                    </div>
                  </div>
                </div>

                {/* Bento Grid Content */}
                <div className="self-stretch flex justify-center items-start">
                  <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden">
                    {/* Left decorative pattern */}
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
                    {/* Step 1 — Connect */}
                    <div className="border-b md:border-b-0 border-r-0 md:border-r border-[rgba(55,50,47,0.12)] p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-start items-start gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-[#37322F] flex items-center justify-center text-white text-xs font-semibold font-sans flex-shrink-0">1</div>
                        <h3 className="text-[#37322F] text-lg font-semibold leading-tight font-sans">Connect</h3>
                      </div>
                      <p className="text-[#605A57] text-sm font-normal leading-relaxed font-sans">
                        Provide credentials for the portals you need to automate. They&apos;re encrypted at rest and scoped to your account — the agent uses them to authenticate on your behalf.
                      </p>
                      <div className="w-full mt-2 bg-[#fbfaf9] border border-[rgba(55,50,47,0.12)] rounded-lg p-3 text-xs font-mono text-[#605A57] space-y-1">
                        <div className="text-[#37322F] font-medium">&rarr; Credentials stored AES-256-GCM</div>
                        <div>&rarr; Scoped to your account</div>
                        <div>&rarr; Row-level isolation</div>
                        <div className="text-green-600 font-medium mt-1">&check; Ready to automate</div>
                      </div>
                    </div>

                    {/* Step 2 — Describe */}
                    <div className="border-b md:border-b-0 border-r-0 md:border-r border-[rgba(55,50,47,0.12)] p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-start items-start gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-[#37322F] flex items-center justify-center text-white text-xs font-semibold font-sans flex-shrink-0">2</div>
                        <h3 className="text-[#37322F] text-lg font-semibold leading-tight font-sans">Describe or record</h3>
                      </div>
                      <p className="text-[#605A57] text-sm font-normal leading-relaxed font-sans">
                        Describe the task in plain language, or walk through it once and we record the workflow. Either way, the agent handles every run from there — authentication, form filling, submission.
                      </p>
                      <div className="w-full mt-2 bg-[#fbfaf9] border border-[rgba(55,50,47,0.12)] rounded-lg p-3 text-xs font-mono text-[#605A57] space-y-1">
                        <div className="text-[#37322F] font-medium">&rarr; Plain language or recorded workflow</div>
                        <div>&rarr; Handle login + MFA</div>
                        <div>&rarr; Fill and verify fields</div>
                        <div>&rarr; Submit and confirm</div>
                        <div className="text-green-600 font-medium mt-1">&check; Task complete</div>
                      </div>
                    </div>

                    {/* Step 3 — Audit */}
                    <div className="p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-start items-start gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-[#37322F] flex items-center justify-center text-white text-xs font-semibold font-sans flex-shrink-0">3</div>
                        <h3 className="text-[#37322F] text-lg font-semibold leading-tight font-sans">Audit</h3>
                      </div>
                      <p className="text-[#605A57] text-sm font-normal leading-relaxed font-sans">
                        Every run produces a tamper-evident audit trail — timestamped screenshots at each step, the full action sequence, and the exact values submitted. Records are cryptographically sealed so they hold up years later in a state audit. Retrieve them any time via API.
                      </p>
                      <div className="w-full mt-auto bg-[#fbfaf9] border border-[rgba(55,50,47,0.12)] rounded-lg p-3 text-xs font-mono text-[#605A57] space-y-1">
                        <div className="text-[#37322F] font-medium">&rarr; Timestamped screenshots</div>
                        <div>&rarr; Full action trace</div>
                        <div>&rarr; Submitted field values</div>
                        <div>&rarr; Cryptographic seal</div>
                        <div className="text-green-600 font-medium mt-1">&check; Audit-grade</div>
                      </div>
                    </div>
                  </div>

                  <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden">
                    {/* Right decorative pattern */}
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

              {/* Use Cases Section */}
              <div id="use-cases" className="w-full">
                <DocumentationSection />
              </div>

              {/* Coverage Section */}
              <div id="coverage" className="w-full">
                <EnterpriseSection />
              </div>

              {/* Why Different Section */}
              <WhyDifferentSection />

              {/* FAQ Section */}
              <FAQSection />

              {/* CTA Section */}
              <CTASection />

              {/* Footer Section */}
              <FooterSection />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// FeatureCard component definition inline to fix import error
function FeatureCard({
  title,
  description,
  isActive,
  progress,
  onClick,
}: {
  title: string
  description: string
  isActive: boolean
  progress: number
  onClick: () => void
}) {
  return (
    <div
      className={`w-full md:flex-1 self-stretch px-6 py-5 overflow-hidden flex flex-col justify-start items-start gap-2 cursor-pointer relative border-b md:border-b-0 last:border-b-0 ${
        isActive
          ? "bg-white shadow-[0px_0px_0px_0.75px_#E0DEDB_inset]"
          : "border-l-0 border-r-0 md:border border-[#E0DEDB]/80"
      }`}
      onClick={onClick}
    >
      {isActive && (
        <div className="absolute top-0 left-0 w-full h-0.5 bg-[rgba(50,45,43,0.08)]">
          <div
            className="h-full bg-[#322D2B] transition-all duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}

      <div className="self-stretch flex justify-center flex-col text-[#49423D] text-sm md:text-sm font-semibold leading-6 md:leading-6 font-sans">
        {title}
      </div>
      <div className="self-stretch text-[#605A57] text-[13px] md:text-[13px] font-normal leading-[22px] md:leading-[22px] font-sans">
        {description}
      </div>
    </div>
  )
}
