# Landing Page Design Rules

## Aesthetic Direction
- Dark theme (#0a0a0a background) with layered visual depth
- Inspiration: browserbase.com immersive hero, linear.app typography, neon.tech glow effects
- This is a developer tool AND enterprise product — premium, atmospheric, not playful
- The page should feel IMMERSIVE — layered backgrounds, not flat

## Typography
- Headings: Use font-sans (Space Grotesk or Instrument Sans via next/font/google) — bold, modern
- Body: DM Sans for body text
- Code: JetBrains Mono
- DO NOT use Inter for headings. Inter is acceptable for body only.
- DO NOT use Roboto, Arial, or system fonts for anything

## Colors
- Background: #0a0a0a (near-black)
- Text: white for headings, gray-400 (#9ca3af) for body text
- Accent: #3b82f6 (blue-500) for CTAs, highlights, interactive elements
- Cards: bg-white/5 with border-white/10
- Hover states: border-blue-500/30 glow
- NO purple anywhere. NO gradients on buttons.
- Code blocks: slightly lighter dark (#1e1e2e)

## Hero Visual Effects (CRITICAL — this is what makes the page not look generic)
- Layer z-0: Animated CSS gradient background (large gradient, animate background-position)
- Layer z-10: Dot grid pattern overlay (radial-gradient dots, masked with radial fade)
- Layer z-20: 2-3 floating glow blobs (bg-blue-500/20 blur-[100px], CSS keyframe animated)
- Layer z-30: Content (headline, subtext, CTAs)
- The hero must NOT be flat black with text. It needs atmospheric depth.

## Animations
- Use motion library (import from "motion/react", NOT "framer-motion")
- Hero: staggered fade-in on mount
- Sections: whileInView with viewport={{ once: true }}
- 0.5-0.8s duration, ease-out
- NO bouncing, NO spinning, NO aggressive effects

## Layout
- max-w-6xl mx-auto for content
- py-24 md:py-32 between sections
- Section dividers: border-t border-white/5 (subtle, not heavy)
- "use client" directive required at top of page.tsx

## Components Available
- Magic UI: AnimatedGridPattern, DotPattern, Marquee, TypingAnimation (installed via shadcn)
- Lucide React icons (already installed)
- motion library (already installed)
- Use these instead of building from scratch

## DO NOT
- Use a white/light background
- Put code blocks in the hero section
- Use typing animations in the hero
- Use purple gradients
- Make it look like every other AI landing page
- Use flat, solid backgrounds without layered effects
