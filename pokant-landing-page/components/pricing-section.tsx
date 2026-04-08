export default function PricingSection() {
  const plans = [
    {
      name: "Free",
      description: "For developers exploring browser automation.",
      price: "$0",
      priceNote: "no credit card required",
      cta: "Get API Key",
      ctaHref: "https://app.pokant.live",
      dark: false,
      features: [
        "50 explores / month",
        "500 replays / month",
        "1 API key",
        "JSON structured output",
        "Community support",
      ],
    },
    {
      name: "Pay-as-you-go",
      description: "For teams running automation at scale.",
      price: "$0.02",
      priceNote: "per replay · $0.40 per explore",
      cta: "Get started",
      ctaHref: "https://app.pokant.live",
      dark: true,
      features: [
        "Unlimited explores",
        "Unlimited replays",
        "10 API keys",
        "Priority support",
        "Webhook notifications",
        "Custom schemas",
        "Replay versioning",
        "Usage analytics",
      ],
    },
    {
      name: "Enterprise",
      description: "Dedicated infrastructure, SLA, and SSO.",
      price: "Custom",
      priceNote: "talk to us about your volume",
      cta: "Contact sales",
      ctaHref: "mailto:sales@pokant.live",
      dark: false,
      features: [
        "Unlimited explores",
        "Unlimited replays",
        "Unlimited API keys",
        "Dedicated infrastructure",
        "SLA guarantee",
        "SSO / SAML",
        "Custom data retention",
        "On-premise option",
      ],
    },
  ]

  return (
    <div className="w-full flex flex-col justify-center items-center gap-2">
      {/* Header */}
      <div className="self-stretch px-6 md:px-24 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center gap-6">
        <div className="w-full max-w-[586px] px-6 py-5 overflow-hidden rounded-lg flex flex-col justify-start items-center gap-4">
          <div className="px-[14px] py-[6px] bg-white shadow-[0px_0px_0px_4px_rgba(55,50,47,0.05)] overflow-hidden rounded-[90px] flex justify-start items-center gap-[8px] border border-[rgba(2,6,23,0.08)]">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6 1V11M8.5 3H4.75C4.28587 3 3.84075 3.18437 3.51256 3.51256C3.18437 3.84075 3 4.28587 3 4.75C3 5.21413 3.18437 5.65925 3.51256 5.98744C3.84075 6.31563 4.28587 6.5 4.75 6.5H7.25C7.71413 6.5 8.15925 6.68437 8.48744 7.01256C8.81563 7.34075 9 7.78587 9 8.25C9 8.71413 8.81563 9.15925 8.48744 9.48744C8.15925 9.81563 7.71413 10 7.25 10H3.5"
                stroke="#37322F"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="text-[#37322F] text-xs font-medium leading-3 font-sans">Pricing</div>
          </div>

          <div className="self-stretch text-center text-[#49423D] text-3xl md:text-5xl font-bold leading-tight tracking-tight font-display">
            Pay per task, not per seat
          </div>
          <div className="self-stretch text-center text-[#605A57] text-base font-normal leading-7 font-sans">
            Start free. Scale with replays at{" "}
            <span className="font-mono text-[#37322F] font-semibold">95%</span> lower cost.
            <br />
            Only pay AI cost when you need it.
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="self-stretch border-b border-t border-[rgba(55,50,47,0.12)] flex justify-center items-center">
        <div className="flex justify-center items-start w-full">
          {/* Left Decorative Pattern */}
          <div className="w-12 self-stretch relative overflow-hidden hidden md:block">
            <div className="w-[162px] left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
              {Array.from({ length: 200 }).map((_, i) => (
                <div
                  key={i}
                  className="self-stretch h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
                />
              ))}
            </div>
          </div>

          <div className="flex-1 flex flex-col md:flex-row justify-center items-stretch gap-6 py-12 md:py-0">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`flex-1 self-stretch px-6 py-8 overflow-hidden flex flex-col justify-between gap-8 border ${
                  plan.dark
                    ? "bg-[#37322F] border-[rgba(55,50,47,0.12)]"
                    : "bg-transparent border-[#E0DEDB]"
                }`}
              >
                {/* Top */}
                <div className="flex flex-col gap-7">
                  <div className="flex flex-col gap-1.5">
                    <div className={`text-lg font-semibold font-display ${plan.dark ? "text-[#FBFAF9]" : "text-[rgba(55,50,47,0.90)]"}`}>
                      {plan.name}
                    </div>
                    <div className={`text-sm font-normal leading-5 font-sans max-w-[220px] ${plan.dark ? "text-[#B2AEA9]" : "text-[rgba(41,37,35,0.70)]"}`}>
                      {plan.description}
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <div className={`text-5xl font-bold tracking-tight font-mono ${plan.dark ? "text-[#F0EFEE]" : "text-[#37322F]"}`}>
                      {plan.price}
                    </div>
                    <div className={`text-xs font-mono ${plan.dark ? "text-[#9E948F]" : "text-[#847971]"}`}>
                      {plan.priceNote}
                    </div>
                  </div>

                  <a
                    href={plan.ctaHref}
                    className={`w-full px-4 py-2.5 rounded-[99px] flex justify-center items-center no-underline transition-colors font-sans text-[13px] font-medium ${
                      plan.dark
                        ? "bg-[#FBFAF9] text-[#37322F] hover:bg-white"
                        : "bg-[#37322F] text-[#FBFAF9] hover:bg-[#2A2520]"
                    }`}
                  >
                    {plan.cta}
                  </a>
                </div>

                {/* Features */}
                <div className="flex flex-col gap-2">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path
                          d="M10 3L4.5 8.5L2 6"
                          stroke={plan.dark ? "#FF8000" : "#9CA3AF"}
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className={`text-[12.5px] font-normal leading-5 font-sans ${plan.dark ? "text-[#F0EFEE]" : "text-[rgba(55,50,47,0.80)]"}`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right Decorative Pattern */}
          <div className="w-12 self-stretch relative overflow-hidden hidden md:block">
            <div className="w-[162px] left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
              {Array.from({ length: 200 }).map((_, i) => (
                <div
                  key={i}
                  className="self-stretch h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
