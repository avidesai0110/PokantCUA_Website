export default function EnterpriseSection() {
  const valueProps = [
    {
      stat: "9 state DORs",
      label: "CDTFA, Colorado SUTS, MyTax Illinois, LaTAP, Parish E-File, ALDOR / ONE SPOT, MyDORWAY, Florida DOR, Texas WebFile",
    },
    {
      stat: "330+ localities",
      label: "70+ Colorado home-rule cities, 64 Louisiana parishes, ~200 Alabama self-administered localities",
    },
    {
      stat: "Audit-grade",
      label: "Timestamped screenshots, action traces, and field values for every run",
    },
  ]

  return (
    <div className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
      {/* Header */}
      <div className="self-stretch px-6 md:px-24 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center gap-6">
        <div className="w-full max-w-[586px] px-6 py-5 overflow-hidden rounded-lg flex flex-col justify-start items-center gap-4">
          {/* Eyebrow badge */}
          <div className="px-[14px] py-[6px] bg-white shadow-[0px_0px_0px_4px_rgba(55,50,47,0.05)] overflow-hidden rounded-[90px] flex justify-start items-center gap-[8px] border border-[rgba(2,6,23,0.08)]">
            <div className="w-[14px] h-[14px] relative overflow-hidden flex items-center justify-center">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1" y="1" width="4.5" height="4.5" stroke="#37322F" strokeWidth="1" fill="none" />
                <rect x="6.5" y="1" width="4.5" height="4.5" stroke="#37322F" strokeWidth="1" fill="none" />
                <rect x="1" y="6.5" width="4.5" height="4.5" stroke="#37322F" strokeWidth="1" fill="none" />
                <rect x="6.5" y="6.5" width="4.5" height="4.5" stroke="#37322F" strokeWidth="1" fill="none" />
              </svg>
            </div>
            <div className="text-center flex justify-center flex-col text-[#37322F] text-xs font-medium leading-3 font-sans">
              Coverage
            </div>
          </div>

          {/* Title */}
          <div className="self-stretch text-center flex justify-center flex-col text-[#49423D] text-3xl md:text-5xl font-bold leading-tight md:leading-[60px] font-display tracking-tight">
            Built for the jurisdictions nobody else covers
          </div>
        </div>
      </div>

      {/* Content */}
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
          {/* Left: Description */}
          <div className="border-b md:border-b-0 border-r-0 md:border-r border-[rgba(55,50,47,0.12)] p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-center gap-6">
            <div className="flex flex-col gap-4">
              <p className="text-[#605A57] text-sm md:text-base font-normal leading-relaxed font-sans">
                State and local tax portals have no APIs. Your customers operate in hundreds of jurisdictions — each with a separate web portal that changes without warning.
              </p>
              <p className="text-[#605A57] text-sm md:text-base font-normal leading-relaxed font-sans">
                We deploy computer-use agents that navigate these portals the way a human would — logging in, filling forms, handling CAPTCHAs, and confirming submission. You send a task. The agent completes it.
              </p>
              <p className="text-[#605A57] text-sm md:text-base font-normal leading-relaxed font-sans">
                Every action produces an audit trail: timestamped screenshots, the full navigation sequence, and exact field values submitted. When a state issues a notice, you have the receipts.
              </p>
            </div>

            {/* CTA */}
            <div className="flex items-center">
              <a href="/contact" className="h-10 px-8 py-[6px] relative bg-[#37322F] shadow-[0px_2px_4px_rgba(55,50,47,0.12)] overflow-hidden rounded-[99px] flex justify-center items-center cursor-pointer hover:bg-[#2A2520] transition-colors no-underline">
                <div className="w-full h-[41px] absolute left-0 top-[-0.5px] bg-gradient-to-b from-[rgba(255,255,255,0.20)] to-[rgba(0,0,0,0.10)] mix-blend-multiply"></div>
                <div className="flex flex-col justify-center text-[#FBFAF9] text-[13px] font-medium leading-5 font-sans">
                  Get pilot access
                </div>
              </a>
            </div>
          </div>

          {/* Right: Value props */}
          <div className="p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-center gap-8">
            {valueProps.map((item, i) => (
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
  )
}
