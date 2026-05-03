import type React from "react"

function Badge({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="px-[14px] py-[6px] bg-white shadow-[0px_0px_0px_4px_rgba(55,50,47,0.05)] overflow-hidden rounded-[90px] flex justify-start items-center gap-[8px] border border-[rgba(2,6,23,0.08)]">
      <div className="w-[14px] h-[14px] relative overflow-hidden flex items-center justify-center">{icon}</div>
      <div className="text-center flex justify-center flex-col text-[#37322F] text-xs font-medium leading-3 font-sans">
        {text}
      </div>
    </div>
  )
}

const tiles = [
  {
    title: "Pre-built portal library",
    description:
      "We maintain a library of agent workflows for every jurisdiction we support. Describe the task or record a workflow once — we handle every run from there. No exploring, no scripting, no maintenance.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="7" height="7" rx="0.5" stroke="#37322F" strokeWidth="1.25" fill="none" />
        <rect x="11" y="2" width="7" height="7" rx="0.5" stroke="#37322F" strokeWidth="1.25" fill="none" />
        <rect x="2" y="11" width="7" height="7" rx="0.5" stroke="#37322F" strokeWidth="1.25" fill="none" />
        <rect x="11" y="11" width="7" height="7" rx="0.5" stroke="#37322F" strokeWidth="1.25" fill="none" />
      </svg>
    ),
  },
  {
    title: "4-tier self-healing",
    description:
      "Government portals change their UI without notice — often overnight. When a step breaks, our repair cascade tries alternate locators, ARIA-based matching, and a targeted LLM recovery call before escalating. Most changes resolve before your next run.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.5 10a6.5 6.5 0 1 1 1.9 4.6" stroke="#37322F" strokeWidth="1.25" strokeLinecap="round" />
        <path d="M3.5 15V10H8.5" stroke="#37322F" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Cryptographically sealed receipts",
    description:
      "Every run produces a tamper-evident record: timestamped screenshots, the full action sequence, and exact field values submitted — sealed so they can be replayed in an audit years later. Not just logs. Receipts.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="2" width="14" height="16" rx="1" stroke="#37322F" strokeWidth="1.25" fill="none" />
        <circle cx="10" cy="9" r="2.5" stroke="#37322F" strokeWidth="1.25" fill="none" />
        <path d="M7.5 14c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5" stroke="#37322F" strokeWidth="1.25" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "End-to-end, including physical steps",
    description:
      "Registration to renewals to amendments to payments — we cover the full compliance lifecycle. Where a government step requires physical mail or a wet signature, we handle that too.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="5" width="16" height="11" rx="1" stroke="#37322F" strokeWidth="1.25" fill="none" />
        <path d="M2 7l8 5 8-5" stroke="#37322F" strokeWidth="1.25" strokeLinecap="round" />
      </svg>
    ),
  },
]

export default function WhyDifferentSection() {
  return (
    <div className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
      {/* Header */}
      <div className="self-stretch px-6 md:px-24 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center gap-6">
        <div className="w-full max-w-[586px] px-6 py-5 overflow-hidden rounded-lg flex flex-col justify-start items-center gap-4">
          <Badge
            icon={
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 1v10M1 6h10" stroke="#37322F" strokeWidth="1.25" strokeLinecap="round" />
                <circle cx="6" cy="6" r="3" stroke="#37322F" strokeWidth="1" fill="none" />
              </svg>
            }
            text="Why it's different"
          />
          <div className="self-stretch text-center flex justify-center flex-col text-[#49423D] text-3xl md:text-5xl font-bold leading-tight md:leading-[60px] font-display tracking-tight">
            Government portals aren&apos;t websites. They&apos;re bureaucracies.
          </div>
          <div className="self-stretch text-center text-[#605A57] text-base font-normal leading-7 font-sans">
            Generic automation treats a state DOR portal like a shopping cart checkout.
            <br className="hidden md:block" />
            We don&apos;t. Every layer is built for the specific failure modes of government compliance infrastructure.
          </div>
        </div>
      </div>

      {/* Tiles grid */}
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
          {tiles.map((item, i) => (
            <div
              key={i}
              className="border-b border-r-0 md:odd:border-r border-[rgba(55,50,47,0.12)] p-6 md:p-8 lg:p-10 flex flex-col gap-4"
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
  )
}
