"use client"

import { useState } from "react"

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: "What portals do you cover?",
    answer:
      "Colorado SUTS (state + home-rule cities), CDTFA, MyTax Illinois, LaTAP + Parish E-File, ALDOR / ONE SPOT, MyDORWAY, Florida DOR, and Texas Comptroller WebFile. New jurisdictions take 1–2 weeks to onboard.",
  },
  {
    question: "What happens when a state DOR changes the portal UI?",
    answer:
      "Agents are resilient to portal UI changes by design. When an element can't be found at its expected location, the agent tries alternate locators, then falls back to text and ARIA-based matching, then a targeted LLM call to locate the element from the page's accessibility tree. Most portal updates resolve without human intervention. If a portal undergoes a major restructure, we re-run the agent on the updated portal and update the workflow.",
  },
  {
    question: "What happens when a government step requires physical mail or a wet signature?",
    answer:
      "Some compliance filings still require a physical document — a signed annual report, a notarized amendment, a paper check to a jurisdiction that doesn't accept ACH. We handle those steps in the workflow too. Where physical mail is required, we coordinate the send and record the tracking confirmation as part of the audit trail.",
  },
  {
    question: "How is this different from running our own Playwright + LLM stack?",
    answer:
      "Three things you don't have to build: (1) a pre-built, maintained library of portal agent workflows — we cover 9 state DORs and 330+ localities so you skip exploration entirely; (2) tamper-evident audit logs that cryptographically seal every submission and hold up in a state audit years later; (3) self-healing that survives overnight portal UI changes without re-recording. You connect credentials and send tasks. We own the portal library, the browser infrastructure, and the on-call rotation.",
  },
  {
    question: "What does a pilot look like?",
    answer:
      "Four weeks. We pick one jurisdiction together — ideally the portal that costs your ops team the most time today. We stand up the agent, integrate it with your system via API or SDK, and run live tasks. Fixed fee, no usage billing during the pilot.",
  },
  {
    question: "Do you handle the full compliance lifecycle, or just individual filings?",
    answer:
      "Full lifecycle. Registration, renewals, amendments, payments — agents handle every recurring step, not just the first filing. Once a jurisdiction is onboarded, the same workflow covers the ongoing compliance calendar. You don't need to re-scope each task type.",
  },
  {
    question: "What about CAPTCHAs, MFA, and session expiry on state portals?",
    answer:
      "CAPTCHAs (reCAPTCHA, hCaptcha, Turnstile) are solved automatically during agent execution. For portals that require MFA, we support persistent session cookies so you authenticate once and subsequent runs proceed without re-authenticating until the session expires.",
  },
  {
    question: "Is the data we submit secure?",
    answer:
      "Credentials are encrypted at rest with AES-256-GCM using per-account derived keys. Filing data in transit is TLS-encrypted. All access is scoped to your account via row-level security on the database.",
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
            automating government portals with Pokant.
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
