"use client"

import { useEffect } from "react"

/**
 * Intercepts unhandled promise rejections where the reason is an Event object.
 * Next.js converts these to "Error: [object Event]" which is unhelpful.
 * We prevent these from reaching the Next.js error overlay by calling preventDefault().
 */
export function RejectionHandler() {
  useEffect(() => {
    const handler = (ev: PromiseRejectionEvent) => {
      const reason = ev?.reason
      if (reason instanceof Event || (reason && String(reason) === "[object Event]")) {
        ev.preventDefault()
        ev.stopImmediatePropagation()
      }
    }
    window.addEventListener("unhandledrejection", handler, { capture: true })
    return () => window.removeEventListener("unhandledrejection", handler, { capture: true })
  }, [])
  return null
}
