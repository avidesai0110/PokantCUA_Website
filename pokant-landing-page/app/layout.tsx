import type React from "react"
import type { Metadata, Viewport } from "next"
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google"
import { RejectionHandler } from "./rejection-handler"
import "./globals.css"

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
})

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Pokant - Production reliability for browser agents",
  description:
    "Add reliability, observability, and error recovery to any browser automation agent. Two lines of code. Zero dependencies.",
  keywords: [
    "browser automation",
    "agent reliability",
    "error recovery",
    "browser use",
    "playwright",
    "observability",
    "web scraping",
    "RPA",
  ],
}

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${jakarta.variable} ${jetbrains.variable}`}>
      <body className="font-sans antialiased">
        <RejectionHandler />
        {children}
      </body>
    </html>
  )
}
