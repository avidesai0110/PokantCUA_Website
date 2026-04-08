# Landing Page Design Rules

## Aesthetic Direction
- Light/white theme with editorial typography
- Inspiration: browserbase.com layout, linear.app typography, stripe.com code examples
- This is a developer tool AND enterprise product — professional, not playful

## Typography
- Headings: Use font-serif (Playfair Display or Instrument Serif via next/font/google)
- Body: Use font-sans (DM Sans via next/font/google)
- Code: Use font-mono (JetBrains Mono via next/font/google)
- DO NOT use Inter, Roboto, Arial, system fonts, or Space Grotesk for anything

## Colors
- Background: white (#ffffff) main, #fafafa alternating sections
- Text: #0a0a0a headings, #374151 body
- Accent: #2563eb (blue-600) for CTAs — NO purple, NO gradients on buttons
- Code blocks: dark (#1e1e2e) with syntax colors — code stays dark on light page
- Cards: white, border-gray-200, shadow-sm

## Animations (using motion library, NOT framer-motion)
- Import from "motion/react" not "framer-motion"
- Hero: staggered fade-in-up on page load
- Sections: whileInView fade-in-up with stagger for cards
- Code block: typing animation for hero code example
- Nav: backdrop-blur on scroll
- Keep it subtle — 0.5-0.8s duration, ease-out, no bouncing

## Layout
- max-w-6xl mx-auto for content
- py-24 md:py-32 between sections
- Alternating white / #fafafa section backgrounds
- "use client" directive required (motion needs client-side React)

## DO NOT
- Use purple gradients
- Use Inter font
- Use generic card layouts with rounded-2xl and heavy shadows
- Use emoji as section icons
- Make it look like every other AI landing page
