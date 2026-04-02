# CLAUDE.md

This file provides guidance to Claude Code when working with code in this repository.

## Project Overview

Voxture (internally "Pokant") is a voice AI optimization platform. It ingests real call transcripts from voice bots, uses Claude to analyze failures and extract structured attributes, clusters failures into patterns, then auto-generates and tests prompt variants to fix them.

**Pipeline**: Ingest calls → Claude analysis (15 attributes) → embedding + clustering → GPT-4o variant generation → Claude simulation testing → A/B deploy

## Repository Structure

```
Voxture/
├── CLAUDE.md
├── package.json              # pnpm workspace root
├── pnpm-workspace.yaml
├── index.html                # Dev redirect (checks localhost ports)
├── scripts/
│   └── build-cloudflare-pages.sh
└── pokant-landing-page/      # Next.js frontend
```

## Tech Stack

### Frontend (`pokant-landing-page/`)
- **Framework**: Next.js 15 (React 19, TypeScript)
- **UI**: Tailwind CSS + shadcn/ui (59 Radix components in `components/ui/`)
- **Charts**: Recharts
- **Build**: Static export (`output: 'export'` in next.config.mjs)
- **Deploy**: Cloudflare Pages

## Development

```bash
pnpm dev                    # Next.js dev server on :3000
pnpm build                  # Static export
```

## Frontend Architecture (`pokant-landing-page/`)

### Pages
- `app/page.tsx` — Landing page (hero, features, pricing, waveform visualization)
- `app/dashboard/page.tsx` — Dashboard stub linking to static HTML pages

### Static Dashboard Pages (`public/`)
9 HTML files served via Next.js static export. All use Tailwind CDN + vanilla JS with a consistent layout:
- **Fixed top nav** (h-14): Logo, connected bot indicator, settings
- **Fixed left sidebar** (w-56): Navigation with active state highlighting
- **Scrollable main content**
- **Fixed right sidebar** (w-80/w-72): Contextual widgets

Pages: dashboard.html, test-runs.html, settings.html, analytics.html, testing.html, call-breakdown.html, results.html, setup.html, signin.html

### Design System (Static Pages)
- Dark theme: Background `#0a0a0a`, Cards `#1a1a1a`, Borders `zinc-800`
- Accent: Blue `#3b82f6`
- Severity colors: Red (critical), Amber (moderate), Green (low)
- Monospace: `.mono` class (JetBrains Mono)
- Active nav: `bg-blue-500/10 text-blue-400 border border-blue-500/20`
- Live indicators: `.pulse-dot` animation
- Bot branding: "ServiceBot" connected to "Zendesk"
