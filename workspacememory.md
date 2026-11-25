# Workspace Memory
This file is maintained automatically by Code Janitor so Claude, Codex, Bob, and any other AI agent can reuse repo context without rescanning everything from scratch.
Generated: 2026-11-25T09:31:36.204Z
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
- Last activity: 2026-11-25T09:31:34.476Z
## Workspace Focus
- Active file in focus: components/configurator/StepTwoDesign.tsx
- Hottest files right now: components/configurator/StepOnewoning.tsx (12), components/Footer.tsx (4), components/LoginScreen.tsx (4), app/disclaimer/page.tsx (3)
- Suggested starting points: components/configurator/StepTwoDesign.tsx, components/configurator/StepOnewoning.tsx, components/Footer.tsx, components/LoginScreen.tsx, app/disclaimer/page.tsx, app/layout.tsx
## Current Workspace
- Active file: components/configurator/StepTwoDesign.tsx
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
- Working tree summary: 5 modifieds
## Tracked Snapshots
- components/configurator/StepTwoDesign.tsx | 284 lines | 13429 chars | hash 6d81768d35df
  Last snapshot: 2026-11-25T09:31:34.476Z
  Preview: "// components/StepTwoDesign.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / export default function StepTwoDesign({ / stepTitle, /..."
- components/configurator/StepOnewoning.tsx | 239 lines | 12105 chars | hash 87d837015a0a
  Last snapshot: 2026-11-25T09:30:31.906Z
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

## Recent Changes
### 2026-11-25T09:31:34.476Z | saved | components/configurator/StepTwoDesign.tsx
- Summary: Line 241: inserted 11 lines.
- Before: 274 lines | 12,546 chars | hash 80940f00b5bc | preview: "// components/StepTwoDesign.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / export default function StepTwoDesign({ / stepTitle, /..."
- After: 284 lines | 13,429 chars | hash 6d81768d35df | preview: "// components/StepTwoDesign.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / export default function StepTwoDesign({ / stepTitle, /..."
- Current fragment: "Disclaimer Elektra- en lichtplan */} / <div className="text-center space-y-4 max-w-3xl mx-auto"> / <p className="text-[10px] tracking-[0.25em] uppercase text-primary font-semibo..."

### 2026-11-25T09:31:01.138Z | saved | components/configurator/StepTwoDesign.tsx
- Summary: Line 124: inserted 2 lines.
- Before: 273 lines | 12,368 chars | hash 6c0aa94c4d43 | preview: "// components/StepTwoDesign.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / export default function StepTwoDesign({ / stepTitle, /..."
- After: 274 lines | 12,546 chars | hash 80940f00b5bc | preview: "// components/StepTwoDesign.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / export default function StepTwoDesign({ / stepTitle, /..."
- Current fragment: "<br/> / <a href="/disclaimer" className="text-dark text-xs sm:text-sm font-bold underline hover:no-underline" title="Disclaimer, t/m 7 december">Meer informatie</a>."

### 2026-11-25T09:30:31.906Z | saved | components/configurator/StepOnewoning.tsx
- Summary: Line 184: inserted 1 line.
- Before: 239 lines | 12,070 chars | hash fc2fb2afbbf5 | preview: "// components/StepOneWoning.tsx / 'use client'; / import { useState, useEffect } from 'react'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / selectedInd..."
- After: 239 lines | 12,105 chars | hash 87d837015a0a | preview: "// components/StepOneWoning.tsx / 'use client'; / import { useState, useEffect } from 'react'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / selectedInd..."
- Current fragment: "title="Disclaimer, t/m 7 december""

### 2026-11-25T09:30:09.737Z | saved | components/configurator/StepOnewoning.tsx
- Summary: Line 85: inserted 1 line.
- Before: 239 lines | 12,035 chars | hash c5f14f22e3eb | preview: "// components/StepOneWoning.tsx / 'use client'; / import { useState, useEffect } from 'react'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / selectedInd..."
- After: 239 lines | 12,070 chars | hash fc2fb2afbbf5 | preview: "// components/StepOneWoning.tsx / 'use client'; / import { useState, useEffect } from 'react'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / selectedInd..."
- Current fragment: "title="Disclaimer, t/m 7 december""

### 2026-11-25T09:23:05.790Z | saved | components/configurator/StepOnewoning.tsx
- Summary: Line 84: replaced 1 line with 2 lines.
- Before: 238 lines | 12,012 chars | hash 608fe07ed89a | preview: "// components/StepOneWoning.tsx / 'use client'; / import { useState, useEffect } from 'react'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / selectedInd..."
- After: 239 lines | 12,035 chars | hash c5f14f22e3eb | preview: "// components/StepOneWoning.tsx / 'use client'; / import { useState, useEffect } from 'react'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / selectedInd..."
- Previous fragment: "a href="/disclaimer" className="text-dark text-xs sm:text-sm font-bold underline hover:underline">"
- Current fragment: "br/> / <a href="/disclaimer" className="text-dark text-xs sm:text-sm font-bold underline hover:no-underline">"

### 2026-11-25T09:22:49.507Z | saved | components/configurator/StepOnewoning.tsx
- Summary: Line 182: removed 1 line.
- Before: 238 lines | 12,017 chars | hash 9b4e83958692 | preview: "// components/StepOneWoning.tsx / 'use client'; / import { useState, useEffect } from 'react'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / selectedInd..."
- After: 238 lines | 12,012 chars | hash 608fe07ed89a | preview: "// components/StepOneWoning.tsx / 'use client'; / import { useState, useEffect } from 'react'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / selectedInd..."
- Previous fragment: "{' '}"

### 2026-11-25T09:22:29.685Z | saved | components/configurator/StepOnewoning.tsx
- Summary: Line 183: inserted 1 line.
- Before: 238 lines | 12,012 chars | hash b89e29454ff6 | preview: "// components/StepOneWoning.tsx / 'use client'; / import { useState, useEffect } from 'react'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / selectedInd..."
- After: 238 lines | 12,017 chars | hash 9b4e83958692 | preview: "// components/StepOneWoning.tsx / 'use client'; / import { useState, useEffect } from 'react'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / selectedInd..."
- Current fragment: "br/><"

### 2026-11-25T09:22:08.589Z | saved | components/configurator/StepOnewoning.tsx
- Summary: Line 183: replaced 1 line with 1 line.
- Before: 238 lines | 12,010 chars | hash ff0f9d952bcd | preview: "// components/StepOneWoning.tsx / 'use client'; / import { useState, useEffect } from 'react'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / selectedInd..."
- After: 238 lines | 12,012 chars | hash b89e29454ff6 | preview: "// components/StepOneWoning.tsx / 'use client'; / import { useState, useEffect } from 'react'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / selectedInd..."
- Previous fragment: "underline">"
- Current fragment: "no-underline">"

### 2026-11-25T09:18:59.041Z | saved | components/configurator/StepOnewoning.tsx
- Summary: Line 183: replaced 4 lines with 1 line.
- Before: 241 lines | 12,053 chars | hash 93e96dfec300 | preview: "// components/StepOneWoning.tsx / 'use client'; / import { useState, useEffect } from 'react'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / selectedInd..."
- After: 238 lines | 12,010 chars | hash ff0f9d952bcd | preview: "// components/StepOneWoning.tsx / 'use client'; / import { useState, useEffect } from 'react'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / selectedInd..."
- Previous fragment: "Meer informatie / </a>"
- Current fragment: "Meer informatie</a>"

### 2026-11-25T09:18:50.697Z | saved | components/configurator/StepOnewoning.tsx
- Summary: Line 183: inserted 1 line.
- Before: 241 lines | 12,024 chars | hash dd65ee98f41c | preview: "// components/StepOneWoning.tsx / 'use client'; / import { useState, useEffect } from 'react'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / selectedInd..."
- After: 241 lines | 12,053 chars | hash 93e96dfec300 | preview: "// components/StepOneWoning.tsx / 'use client'; / import { useState, useEffect } from 'react'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / selectedInd..."
- Current fragment: "text-xs sm:text-sm font-bold"

### 2026-11-25T09:18:33.107Z | saved | components/configurator/StepOnewoning.tsx
- Summary: Line 84: replaced 1 line with 1 line.
- Before: 241 lines | 11,993 chars | hash 2de026706938 | preview: "// components/StepOneWoning.tsx / 'use client'; / import { useState, useEffect } from 'react'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / selectedInd..."
- After: 241 lines | 12,024 chars | hash dd65ee98f41c | preview: "// components/StepOneWoning.tsx / 'use client'; / import { useState, useEffect } from 'react'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / selectedInd..."
- Previous fragment: "underline hover:underline">Meer informatie</a>"
- Current fragment: "text-xs sm:text-sm font-bold underline hover:underline"> Meer informatie</a>."

### 2026-11-25T09:14:04.187Z | saved | components/configurator/StepOnewoning.tsx
- Summary: Line 83: replaced 103 lines with 106 lines.
- Before: 238 lines | 11,819 chars | hash a617efc2dd6a | preview: "// components/StepOneWoning.tsx / 'use client'; / import { useState, useEffect } from 'react'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / selectedInd..."
- After: 241 lines | 11,993 chars | hash 2de026706938 | preview: "// components/StepOneWoning.tsx / 'use client'; / import { useState, useEffect } from 'react'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / selectedInd..."
- Previous fragment: "</p> / )} / </div> / {/* Indelingen Grid */} / <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto w-full"> / {uniekeIndelingen.length > 0 ? ( / uniekeIndeli..."
- Current fragment: "<a href="/disclaimer" className="text-dark underline hover:underline">Meer informatie</a> / </p> / )} / </div> / {/* Indelingen Grid */} / <div className="grid grid-cols-1 md:gr..."

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


## Hot Files
- components/configurator/StepOnewoning.tsx (12 tracked changes)
- components/Footer.tsx (4 tracked changes)
- components/LoginScreen.tsx (4 tracked changes)
- app/disclaimer/page.tsx (3 tracked changes)
- app/layout.tsx (3 tracked changes)
- app/api/confirm/route.ts (2 tracked changes)
- app/dashboard/page.tsx (2 tracked changes)
- app/privacy/page.tsx (2 tracked changes)

## Git Snapshot
- Branch: main
- HEAD: 2026-11-25 05ff0e2 small change to styling disclaimer link
- Working tree summary: 5 modifieds
- M components/configurator/StepOnewoning.tsx
- M components/configurator/StepTwoDesign.tsx
- M graphify-out/WORKSPACE_MEMORY.md
- M workspace.json
- M workspacememory.md

## GitHub Snapshot
GitHub Repository: marketing-smartheads/nomi-configurator
Visibility: public | Default branch: main
Stars: 0 | Forks: 0 | Open issues: 0

Latest commit on main:
- 05ff0e2 by Bas van Dooremalen on 2026-11-25
  small change to styling disclaimer link

URL: https://github.com/marketing-smartheads/nomi-configurator

## Graphify Snapshot
Graphify report not found. Generate Graphify output if you want architecture-aware memory excerpts here.

## Project Planner
- Project planner is not configured yet. Enable it in the chat panel to generate a time-based todo list and progress rescue briefs.

## Agent Notes
- If a future task asks what changed recently, start with `Recent Changes`, `Tracked Snapshots`, `Hot Files`, and `Git Snapshot`.
- If a future task asks how the project is organized, combine this file with `graphify-out/GRAPH_REPORT.md`.
- If a future task needs repository-level context, use `Package Snapshot`, the GitHub snapshot, and the Graphify snapshot before rescanning broad parts of the repo.
