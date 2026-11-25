# Workspace Memory
This file is maintained automatically by Code Janitor so Claude, Codex, Bob, and any other AI agent can reuse repo context without rescanning everything from scratch.
Generated: 2026-11-25T09:02:59.465Z
Workspace: tg-configurator
Workspace root: c:\Projects\NextJS\tg-configurator
Refresh reason: tracked-change
Output path: graphify-out/WORKSPACE_MEMORY.md
Shared mirror: workspacememory.md
Structured manifest: workspace.json
## Handoff Guidance
- Read `graphify-out/GRAPH_REPORT.md` first when the request is about architecture, dependencies, file ownership, or codebase navigation.
- Use this memory file and the workspace-root `workspacememory.md` mirror for recent activity, hot files, Git-aware status, and GitHub-enriched project context.
- Use the workspace-root `workspace.json` file when an AI agent wants machine-readable repo metadata, file inventory, package details, and Git/Graphify summaries without rescanning the repository.
- Refresh this file with the `Code Janitor: Refresh Workspace Memory` command after significant edits or branch changes.
## Repository Blueprint
- Audience: any AI agent working in this repository can treat this file as the current handoff ledger.
- Graphify report: not available yet
- Graphify graph: not available yet
- Last activity: 2026-11-25T09:02:57.076Z
## Workspace Focus
- Active file in focus: components/configurator/StepOnewoning.tsx
- Hottest files right now: components/Footer.tsx (9), components/configurator/StepOnewoning.tsx (8), components/LoginScreen.tsx (4), app/disclaimer/page.tsx (3)
- Suggested starting points: components/configurator/StepOnewoning.tsx, components/Footer.tsx, components/LoginScreen.tsx, app/disclaimer/page.tsx, app/layout.tsx, app/api/confirm/route.ts
## Current Workspace
- Active file: components/configurator/StepOnewoning.tsx
- Tracked files in snapshot: 83
- Top-level areas: public (32), components (18), [root] (15), app (15), lib (3)
- Primary file types: .tsx (25), .svg (15), .ts (11), .png (6), .json (4), .md (4), .woff (4), .woff2 (4)
- Key files: .gitignore, AGENTS.md, README.md, package-lock.json, package.json, tsconfig.json
## Package Snapshot
- Package: tg-configurator v0.1.0
- Package manager: not declared
- Scripts: dev, build, start, lint
- Runtime dependencies: client-zip, next, react, react-dom, react-icons, react-player, resend
- Dev dependencies: @tailwindcss/postcss, @types/node, @types/react, @types/react-dom, eslint, eslint-config-next, tailwindcss, typescript
## Current Stack
- Logged change events: 40
- Change mix: save (37), create (2), rename (1)
- Remembered file snapshots: 48
- Working tree summary: 4 modifieds
## Tracked Snapshots
- components/configurator/StepOnewoning.tsx | 238 lines | 11819 chars | hash a617efc2dd6a
  Last snapshot: 2026-11-25T09:02:57.076Z
  Preview: "// components/StepOneWoning.tsx / 'use client'; / import { useState, useEffect } from 'react'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / selectedInd..."
- app/disclaimer/page.tsx | 76 lines | 3893 chars | hash de208b5b7d08
  Last snapshot: 2026-11-24T15:43:16.327Z
  Preview: "// app/disclaimer/page.tsx / 'use client'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / export default function DisclaimerPage() { / return ( / <div className="min-h-screen..."
- app/privacy/page.tsx | 132 lines | 8760 chars | hash 3c1e47077271
  Last snapshot: 2026-11-24T12:43:02.654Z
  Preview: "// app/privacy/page.tsx / 'use client'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / export default function PrivacyPage() { / return ( / <div className="min-h-screen bg-[#..."
- app/layout.tsx | 99 lines | 2153 chars | hash 30c4a3950746
  Last snapshot: 2026-11-24T12:41:48.321Z
  Preview: "import type { Metadata } from "next"; / import Script from 'next/script'; / import localFont from 'next/font/local'; / import "./globals.css"; / const poppins = localFont({ / src: [ / { / path: '../public/fonts/Poppin..."
- components/LoginScreen.tsx | 290 lines | 10423 chars | hash dec1932e7178
  Last snapshot: 2026-11-24T12:30:31.441Z
  Preview: "// components/LoginScreen.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / import Button from './Button'; / import { useRouter } fr..."
- components/Footer.tsx | 215 lines | 11067 chars | hash fd0a4a00f8f4
  Last snapshot: 2026-11-24T12:22:52.501Z
  Preview: "// components/Footer.tsx / 'use client'; / import Image from 'next/image'; / import Link from 'next/link'; / interface FooterProps { / onNavigateHome?: () => void; / onNavigateConfigurator?: (step?: number) => void; /..."
- .env.local | 12 lines | 423 chars | hash 19cb3d3fc1cd
  Last snapshot: 2026-11-19T22:05:30.250Z
  Preview: "NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT=http://tg-backend.development/graphql / NEXT_PUBLIC_LIVE_WORDPRESS_ENDPOINT=https://cms.nomi-configurator.nl/graphql / NEXT_PUBLIC_PARTNER_EMAIL=tobias@aanhuis-spijk.nl / WORDPRE..."
- app/api/confirm/route.ts | 362 lines | 13222 chars | hash 5fe756e677ee
  Last snapshot: 2026-11-19T21:32:11.513Z
  Preview: "import { NextResponse } from 'next/server'; / import { Resend } from 'resend'; / const resend = new Resend(process.env.RESEND_API_KEY); / // Staat op false zodat Resend de partnermails daadwerkelijk verstuurt naar de..."

## Recent Changes
### 2026-11-25T09:02:57.076Z | saved | components/configurator/StepOnewoning.tsx
- Summary: Line 175: inserted 12 lines.
- Before: 227 lines | 11,009 chars | hash 7fb5f40fd071 | preview: "// components/StepOneWoning.tsx / 'use client'; / import { useState, useEffect } from 'react'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / selectedInd..."
- After: 238 lines | 11,819 chars | hash a617efc2dd6a | preview: "// components/StepOneWoning.tsx / 'use client'; / import { useState, useEffect } from 'react'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / selectedInd..."
- Current fragment: "<div className="text-center space-y-4 max-w-3xl mx-auto"> / <p className="text-[10px] tracking-[0.25em] uppercase text-primary font-semibold"> Disclaimer </p> / <h2 className="f..."

### 2026-11-24T15:43:16.327Z | saved | app/disclaimer/page.tsx
- Summary: Line 46: inserted 25 lines.
- Before: 52 lines | 2,486 chars | hash 376487bd87c7 | preview: "// app/disclaimer/page.tsx / 'use client'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / export default function DisclaimerPage() { / return ( / <div className="min-h-screen..."
- After: 76 lines | 3,893 chars | hash de208b5b7d08 | preview: "// app/disclaimer/page.tsx / 'use client'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / export default function DisclaimerPage() { / return ( / <div className="min-h-screen..."
- Current fragment: "<div className="space-y-3"> / <h2 className="text-lg sm:text-xl font-serif text-white pt-2"> / 3. Elektra- en lichtplan / </h2> / <p className="text-sm sm:text-base"> / Aanpassi..."

### 2026-11-24T12:43:02.654Z | saved | app/privacy/page.tsx
- Summary: Line 10: replaced 104 lines with 116 lines.
- Before: 120 lines | 7,556 chars | hash 1205b84156b3 | preview: "// app/privacy/page.tsx / 'use client'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / export default function PrivacyPage() { / return ( / <div className="min-h-screen bg-[#..."
- After: 132 lines | 8,760 chars | hash 3c1e47077271 | preview: "// app/privacy/page.tsx / 'use client'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / export default function PrivacyPage() { / return ( / <div className="min-h-screen bg-[#..."
- Previous fragment: "window.location.href = '/'} /> / <main className="flex-grow w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-8 sm:space-y-12"> / <div className="space-y-2 sm..."
- Current fragment: "(window.location.href = '/')} /> / <main className="flex-grow w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-8 sm:space-y-12"> / <div className="space-y-2..."

### 2026-11-24T12:41:48.321Z | saved | app/layout.tsx
- Summary: Line 2: replaced 76 lines with 94 lines.
- Before: 81 lines | 1,593 chars | hash ed08bbfcc175 | preview: "import type { Metadata } from "next"; / import localFont from 'next/font/local'; / import "./globals.css"; / const poppins = localFont({ / src: [ / { / path: '../public/fonts/Poppins-SemiBold.woff2', / weight: '600',..."
- After: 99 lines | 2,153 chars | hash 30c4a3950746 | preview: "import type { Metadata } from "next"; / import Script from 'next/script'; / import localFont from 'next/font/local'; / import "./globals.css"; / const poppins = localFont({ / src: [ / { / path: '../public/fonts/Poppin..."
- Previous fragment: "localFont from 'next/font/local'; / import "./globals.css"; / const poppins = localFont({ / src: [ / { / path: '../public/fonts/Poppins-SemiBold.woff2', / weight: '600', / style..."
- Current fragment: "Script from 'next/script'; / import localFont from 'next/font/local'; / import "./globals.css"; / const poppins = localFont({ / src: [ / { / path: '../public/fonts/Poppins-SemiB..."

### 2026-11-24T12:30:31.441Z | saved | components/LoginScreen.tsx
- Summary: Line 283: inserted 1 line.
- Before: 290 lines | 10,386 chars | hash 94b4a2eabb02 | preview: "// components/LoginScreen.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / import Button from './Button'; / import { useRouter } fr..."
- After: 290 lines | 10,423 chars | hash dec1932e7178 | preview: "// components/LoginScreen.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / import Button from './Button'; / import { useRouter } fr..."
- Current fragment: "flex justify-center mt-1.5 font-bold"

### 2026-11-24T12:25:36.123Z | saved | components/LoginScreen.tsx
- Summary: Line 282: inserted 3 lines.
- Before: 288 lines | 10,278 chars | hash 9d09484a36c4 | preview: "// components/LoginScreen.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / import Button from './Button'; / import { useRouter } fr..."
- After: 290 lines | 10,386 chars | hash 94b4a2eabb02 | preview: "// components/LoginScreen.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / import Button from './Button'; / import { useRouter } fr..."
- Current fragment: "<br/> / <a href="/disclaimer" className="underline hover:opacity-80">Disclaimer</a>"

### 2026-11-24T12:22:52.501Z | saved | components/Footer.tsx
- Summary: Line 209: replaced 1 line with 1 line.
- Before: 215 lines | 11,058 chars | hash 8fbc57033a19 | preview: "// components/Footer.tsx / 'use client'; / import Image from 'next/image'; / import Link from 'next/link'; / interface FooterProps { / onNavigateHome?: () => void; / onNavigateConfigurator?: (step?: number) => void; /..."
- After: 215 lines | 11,067 chars | hash fd0a4a00f8f4 | preview: "// components/Footer.tsx / 'use client'; / import Image from 'next/image'; / import Link from 'next/link'; / interface FooterProps { / onNavigateHome?: () => void; / onNavigateConfigurator?: (step?: number) => void; /..."
- Previous fragment: "#" className="hover:text-white transition-colors">Voorwaarden"
- Current fragment: "/disclaimer" className="hover:text-white transition-colors">Disclaimer"

### 2026-11-24T12:19:54.913Z | saved | app/disclaimer/page.tsx
- Summary: Line 1: inserted 52 lines.
- Before: 0 lines | 0 chars | hash empty
- After: 52 lines | 2,486 chars | hash 376487bd87c7 | preview: "// app/disclaimer/page.tsx / 'use client'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / export default function DisclaimerPage() { / return ( / <div className="min-h-screen..."
- Current fragment: "// app/disclaimer/page.tsx / 'use client'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / export default function DisclaimerPage() { /..."

### 2026-11-24T12:19:53.313Z | renamed | app/disclaimer/page.ts -> app/disclaimer/page.tsx
- Summary: Renamed file.
- Before: 0 lines | 0 chars | hash empty
- After: 0 lines | 0 chars | hash empty

### 2026-11-24T12:19:48.648Z | created | app/disclaimer/page.ts
- Summary: Created file.
- After: 0 lines | 0 chars | hash empty

### 2026-11-24T12:19:44.271Z | created | app/disclaimer
- Summary: Created file.

### 2026-11-19T22:05:56.243Z | saved | app/layout.tsx
- Summary: Line 58: replaced 1 line with 1 line.
- Before: 81 lines | 1,592 chars | hash 3db586e03830 | preview: "import type { Metadata } from "next"; / import localFont from 'next/font/local'; / import "./globals.css"; / const poppins = localFont({ / src: [ / { / path: '../public/fonts/Poppins-SemiBold.woff2', / weight: '600',..."
- After: 81 lines | 1,593 chars | hash ed08bbfcc175 | preview: "import type { Metadata } from "next"; / import localFont from 'next/font/local'; / import "./globals.css"; / const poppins = localFont({ / src: [ / { / path: '../public/fonts/Poppins-SemiBold.woff2', / weight: '600',..."
- Previous fragment: "tru"
- Current fragment: "fals"

### 2026-11-19T22:05:30.250Z | saved | .env.local
- Summary: Line 5: replaced 1 line with 1 line.
- Before: 12 lines | 432 chars | hash a1ea6608e103 | preview: "NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT=http://tg-backend.development/graphql / NEXT_PUBLIC_LIVE_WORDPRESS_ENDPOINT=https://cms.nomi-configurator.nl/graphql / NEXT_PUBLIC_PARTNER_EMAIL=webmaster@marketingsmartheads.nl..."
- After: 12 lines | 423 chars | hash 19cb3d3fc1cd | preview: "NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT=http://tg-backend.development/graphql / NEXT_PUBLIC_LIVE_WORDPRESS_ENDPOINT=https://cms.nomi-configurator.nl/graphql / NEXT_PUBLIC_PARTNER_EMAIL=tobias@aanhuis-spijk.nl / WORDPRE..."
- Previous fragment: "webmaster@marketingsmartheads"
- Current fragment: "tobias@aanhuis-spijk"

### 2026-11-19T21:46:08.019Z | saved | app/layout.tsx
- Summary: Line 58: replaced 1 line with 1 line.
- Before: 81 lines | 1,593 chars | hash ed08bbfcc175 | preview: "import type { Metadata } from "next"; / import localFont from 'next/font/local'; / import "./globals.css"; / const poppins = localFont({ / src: [ / { / path: '../public/fonts/Poppins-SemiBold.woff2', / weight: '600',..."
- After: 81 lines | 1,592 chars | hash 3db586e03830 | preview: "import type { Metadata } from "next"; / import localFont from 'next/font/local'; / import "./globals.css"; / const poppins = localFont({ / src: [ / { / path: '../public/fonts/Poppins-SemiBold.woff2', / weight: '600',..."
- Previous fragment: "fals"
- Current fragment: "tru"

### 2026-11-19T21:32:11.513Z | saved | app/api/confirm/route.ts
- Summary: Line 6: replaced 339 lines with 350 lines.
- Before: 351 lines | 12,842 chars | hash 0cd50a6bea2b | preview: "import { NextResponse } from 'next/server'; / import { Resend } from 'resend'; / const resend = new Resend(process.env.RESEND_API_KEY); / // Zet op true om partnermails lokaal/tijdelijk NIET rechtstreeks naar de exter..."
- After: 362 lines | 13,222 chars | hash 5fe756e677ee | preview: "import { NextResponse } from 'next/server'; / import { Resend } from 'resend'; / const resend = new Resend(process.env.RESEND_API_KEY); / // Staat op false zodat Resend de partnermails daadwerkelijk verstuurt naar de..."
- Previous fragment: "Zet op true om partnermails lokaal/tijdelijk NIET rechtstreeks naar de externe partners te sturen, / // maar wel uitgebreid te loggen in de console. Zet op false wanneer je live..."
- Current fragment: "Staat op false zodat Resend de partnermails daadwerkelijk verstuurt naar de adressen uit PARTNER_EMAILS_BY_NAME / const DRY_RUN_PARTNER_EMAILS = false; / // E-mailadressen gekop..."


## Hot Files
- components/Footer.tsx (9 tracked changes)
- components/configurator/StepOnewoning.tsx (8 tracked changes)
- components/LoginScreen.tsx (4 tracked changes)
- app/disclaimer/page.tsx (3 tracked changes)
- app/layout.tsx (3 tracked changes)
- app/api/confirm/route.ts (2 tracked changes)
- app/dashboard/page.tsx (2 tracked changes)
- app/privacy/page.tsx (2 tracked changes)

## Git Snapshot
- Branch: main
- HEAD: 2026-11-24 c8c318a feat(disclaimer): add electrical, lighting, and material ordering deadlines
- Working tree summary: 4 modifieds
- M components/configurator/StepOnewoning.tsx
- M graphify-out/WORKSPACE_MEMORY.md
- M workspace.json
- M workspacememory.md

## GitHub Snapshot
GitHub Repository: marketing-smartheads/nomi-configurator
Visibility: public | Default branch: main
Stars: 0 | Forks: 0 | Open issues: 0

Latest commit on main:
- c8c318a by Bas van Dooremalen on 2026-11-24
  feat(disclaimer): add electrical, lighting, and material ordering deadlines

URL: https://github.com/marketing-smartheads/nomi-configurator

## Graphify Snapshot
Graphify report not found. Generate Graphify output if you want architecture-aware memory excerpts here.

## Project Planner
- Project planner is not configured yet. Enable it in the chat panel to generate a time-based todo list and progress rescue briefs.

## Agent Notes
- If a future task asks what changed recently, start with `Recent Changes`, `Tracked Snapshots`, `Hot Files`, and `Git Snapshot`.
- If a future task asks how the project is organized, combine this file with `graphify-out/GRAPH_REPORT.md`.
- If a future task needs repository-level context, use `Package Snapshot`, the GitHub snapshot, and the Graphify snapshot before rescanning broad parts of the repo.
