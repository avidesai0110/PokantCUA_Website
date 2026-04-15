"use client"

import { useForm, ValidationError } from "@formspree/react"
import type React from "react"
import FooterSection from "../../components/footer-section"

export default function ContactPage() {
  const [state, handleSubmit] = useForm("xbdpwokl")

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
                  <nav className="pl-4 sm:pl-5 lg:pl-6 hidden sm:flex flex-row gap-3 md:gap-5">
                    <a href="/#features" className="text-[rgba(49,45,43,0.80)] text-xs md:text-[13px] font-medium leading-[14px] font-sans hover:text-[#37322F] transition-colors">
                      Features
                    </a>
                    <a href="https://api.pokant.live/docs" target="_blank" rel="noopener noreferrer" className="text-[rgba(49,45,43,0.80)] text-xs md:text-[13px] font-medium leading-[14px] font-sans hover:text-[#37322F] transition-colors">
                      Docs
                    </a>
                    <a href="/enterprise" className="text-[rgba(49,45,43,0.80)] text-xs md:text-[13px] font-medium leading-[14px] font-sans hover:text-[#37322F] transition-colors">
                      Enterprise
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
              <div className="w-full max-w-[760px] flex flex-col items-center gap-4 px-4">
                <div className="px-[14px] py-[6px] bg-white shadow-[0px_0px_0px_4px_rgba(55,50,47,0.05)] overflow-hidden rounded-[90px] flex justify-start items-center gap-[8px] border border-[rgba(2,6,23,0.08)]">
                  <div className="text-center flex justify-center flex-col text-[#37322F] text-xs font-medium leading-3 font-sans">
                    Talk to Sales
                  </div>
                </div>
                <h1 className="text-center text-[#37322F] text-[28px] sm:text-[42px] md:text-[56px] font-bold leading-[1.05] tracking-tight font-display px-2">
                  Let&apos;s talk about your workflow.
                </h1>
                <p className="text-center text-[rgba(55,50,47,0.70)] text-base md:text-lg leading-relaxed font-sans max-w-[480px]">
                  Tell us what you need automated. We&apos;ll scope it, build it, and get the first workflow live within a week.
                </p>
              </div>
            </div>

            {/* Form section */}
            <div className="w-full flex justify-center items-start">
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

              <div className="flex-1 border-l border-r border-[rgba(55,50,47,0.12)]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                  {/* Form */}
                  <div className="border-b md:border-b-0 border-r-0 md:border-r border-[rgba(55,50,47,0.12)] p-6 md:p-8 lg:p-12">
                    {state.succeeded ? (
                      <div className="flex flex-col gap-4 py-8">
                        <div className="w-10 h-10 rounded-full bg-[#37322F] flex items-center justify-center">
                          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 9l4 4 6-7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                        <div className="text-[#37322F] text-xl font-semibold font-sans">Message sent!</div>
                        <div className="text-[#605A57] text-sm leading-relaxed font-sans">
                          We&apos;ll be in touch within one business day. In the meantime, feel free to email us directly at{" "}
                          <a href="mailto:avidesai0110@gmail.com" className="text-[#37322F] underline underline-offset-2">
                            avidesai0110@gmail.com
                          </a>
                          .
                        </div>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                        <div className="flex flex-col gap-1.5">
                          <label className="text-[#37322F] text-xs font-medium font-sans" htmlFor="name">
                            Full name <span className="text-[rgba(55,50,47,0.40)]">*</span>
                          </label>
                          <input
                            id="name"
                            type="text"
                            name="name"
                            required
                            placeholder="Avi Desai"
                            className="h-10 px-3 bg-white border border-[rgba(55,50,47,0.16)] rounded-lg text-[#37322F] text-sm font-sans placeholder:text-[rgba(55,50,47,0.32)] focus:outline-none focus:border-[#37322F] transition-colors"
                          />
                          <ValidationError field="name" prefix="Name" errors={state.errors} className="text-red-500 text-xs font-sans" />
                        </div>

                        <div className="flex flex-col gap-1.5">
                          <label className="text-[#37322F] text-xs font-medium font-sans" htmlFor="email">
                            Work email <span className="text-[rgba(55,50,47,0.40)]">*</span>
                          </label>
                          <input
                            id="email"
                            type="email"
                            name="email"
                            required
                            placeholder="avi@company.com"
                            className="h-10 px-3 bg-white border border-[rgba(55,50,47,0.16)] rounded-lg text-[#37322F] text-sm font-sans placeholder:text-[rgba(55,50,47,0.32)] focus:outline-none focus:border-[#37322F] transition-colors"
                          />
                          <ValidationError field="email" prefix="Email" errors={state.errors} className="text-red-500 text-xs font-sans" />
                        </div>

                        <div className="flex flex-col gap-1.5">
                          <label className="text-[#37322F] text-xs font-medium font-sans" htmlFor="company">
                            Company
                          </label>
                          <input
                            id="company"
                            type="text"
                            name="company"
                            placeholder="Acme Corp"
                            className="h-10 px-3 bg-white border border-[rgba(55,50,47,0.16)] rounded-lg text-[#37322F] text-sm font-sans placeholder:text-[rgba(55,50,47,0.32)] focus:outline-none focus:border-[#37322F] transition-colors"
                          />
                        </div>

                        <div className="flex flex-col gap-1.5">
                          <label className="text-[#37322F] text-xs font-medium font-sans" htmlFor="message">
                            What do you need automated? <span className="text-[rgba(55,50,47,0.40)]">*</span>
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            required
                            placeholder="We pull invoices from 12 vendor portals every Monday morning and it takes 3 hours..."
                            rows={5}
                            className="px-3 py-2.5 bg-white border border-[rgba(55,50,47,0.16)] rounded-lg text-[#37322F] text-sm font-sans placeholder:text-[rgba(55,50,47,0.32)] focus:outline-none focus:border-[#37322F] transition-colors resize-none leading-relaxed"
                          />
                          <ValidationError field="message" prefix="Message" errors={state.errors} className="text-red-500 text-xs font-sans" />
                        </div>

                        <button
                          type="submit"
                          disabled={state.submitting}
                          className="h-10 px-8 relative bg-[#37322F] shadow-[0px_2px_4px_rgba(55,50,47,0.12)] overflow-hidden rounded-[99px] flex justify-center items-center cursor-pointer hover:bg-[#2A2520] transition-colors w-fit disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          <div className="w-full h-[41px] absolute left-0 top-[-0.5px] bg-gradient-to-b from-[rgba(255,255,255,0.20)] to-[rgba(0,0,0,0.10)] mix-blend-multiply"></div>
                          <span className="flex flex-col justify-center text-[#FBFAF9] text-[13px] font-medium leading-5 font-sans">
                            {state.submitting ? "Sending…" : "Send message"}
                          </span>
                        </button>
                      </form>
                    )}
                  </div>

                  {/* Right: info */}
                  <div className="p-6 md:p-8 lg:p-12 flex flex-col justify-center gap-8">
                    {[
                      {
                        label: "Quick response",
                        description: "We reply within one business day and typically schedule a call within 48 hours.",
                      },
                      {
                        label: "Scoped in one call",
                        description: "A 30-minute call is usually enough to scope your first workflow and estimate delivery time.",
                      },
                      {
                        label: "First workflow in a week",
                        description: "We move fast. Most teams have their first automation live within 5–7 business days of kickoff.",
                      },
                    ].map((item, i) => (
                      <div key={i} className="flex flex-col gap-2 border-b border-[rgba(55,50,47,0.08)] pb-8 last:border-0 last:pb-0">
                        <div className="flex items-center gap-2.5">
                          <div className="w-5 h-5 rounded-full bg-[#37322F] flex items-center justify-center text-white text-[10px] font-semibold font-sans flex-shrink-0">
                            {i + 1}
                          </div>
                          <div className="text-[#37322F] text-base font-semibold font-sans">{item.label}</div>
                        </div>
                        <div className="text-[#605A57] text-sm font-normal leading-relaxed font-sans pl-7">{item.description}</div>
                      </div>
                    ))}

                    <div className="pt-2">
                      <div className="text-[rgba(55,50,47,0.50)] text-xs font-sans">
                        Prefer email?{" "}
                        <a href="mailto:avidesai0110@gmail.com" className="text-[#37322F] underline underline-offset-2">
                          avidesai0110@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>
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

            {/* Footer */}
            <FooterSection />
          </div>
        </div>
      </div>
    </div>
  )
}
