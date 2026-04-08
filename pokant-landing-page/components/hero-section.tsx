import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative pt-[216px] pb-16">
      <div className="max-w-[1060px] mx-auto px-4">
        <div className="flex flex-col items-center gap-12">
          {/* Hero Content */}
          <div className="max-w-[937px] flex flex-col items-center gap-3">
            <div className="flex flex-col items-center gap-6">
              <h1 className="max-w-[748px] text-center text-[#37322f] text-5xl md:text-[80px] font-normal leading-tight md:leading-[96px] font-serif">
                Give your agents access to the entire web.
              </h1>
              <p className="max-w-[506px] text-center text-[#37322f]/80 text-lg font-medium leading-7">
                One API to automate any browser workflow. AI-powered navigation, adaptive retries, and structured output
                — production-ready from day one.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex justify-center items-center gap-4">
            <Button className="h-10 px-12 bg-[#37322f] hover:bg-[#37322f]/90 text-white rounded-full font-medium text-sm shadow-[0px_0px_0px_2.5px_rgba(255,255,255,0.08)_inset]">
              Get API Key
            </Button>
            <Button variant="outline" className="h-10 px-8 rounded-full font-medium text-sm border-[#37322f]/30 text-[#37322f] hover:border-[#37322f]/60">
              View Documentation
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
