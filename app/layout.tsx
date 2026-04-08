import type React from "react"
import type { Metadata, Viewport } from "next"
import { Outfit, Instrument_Sans, JetBrains_Mono, Geist } from "next/font/google"
import { RejectionHandler } from "./rejection-handler"
import "./globals.css"
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
})

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Pokant — Production-grade browser automation",
  description:
    "One API to automate any browser workflow. AI-powered navigation, self-healing retries, and structured output. First run $0.40, every run after $0.02.",
  keywords: [
    "browser automation",
    "AI agent",
    "web scraping",
    "RPA",
    "browser use",
    "playwright",
    "web automation API",
  ],
  openGraph: {
    title: "Pokant — Browser automation that works in production",
    description:
      "One API to automate any browser workflow. AI-powered, self-healing, 95% cheaper at scale.",
    url: "https://pokant.live",
    siteName: "Pokant",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pokant — Browser automation that works in production",
    description: "One API to automate any browser workflow.",
  },
}

export const viewport: Viewport = {
  themeColor: "#ffffff",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={cn(outfit.variable, instrumentSans.variable, jetbrainsMono.variable, "font-sans", geist.variable)}>
      <body className="font-sans antialiased">
        <RejectionHandler />
        {children}
      </body>
    </html>
  )
}
