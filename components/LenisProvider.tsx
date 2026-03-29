'use client'

import { ReactNode } from "react"

/**
 * Simple scroll wrapper. We removed Lenis (@studio-freight/react-lenis) because
 * the deprecated package conflicts with GSAP ScrollTrigger in React 19 / Next.js 16.
 * Smooth scroll is achieved via CSS `scroll-behavior: smooth` on <html>.
 * This can be swapped for the modern `lenis` package later if needed.
 */
export default function LenisProvider({ children }: { children: ReactNode }) {
  return <>{children}</>
}
