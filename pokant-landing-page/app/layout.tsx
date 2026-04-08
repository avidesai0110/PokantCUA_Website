import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, JetBrains_Mono, Instrument_Serif } from "next/font/google"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  preload: true,
})

const spaceGroteskDisplay = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  preload: true,
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  preload: true,
})

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
  display: "swap",
  preload: false,
})

export const metadata: Metadata = {
  title: "Pokant — Browser automation that works in production",
  description:
    "One API to automate any browser workflow. AI-powered navigation, adaptive retries, and structured output.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${spaceGroteskDisplay.variable} ${jetbrainsMono.variable} ${instrumentSerif.variable} antialiased`}
    >
      <head />
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
