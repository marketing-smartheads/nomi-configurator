# Workspace Memory
This file is maintained automatically by Code Janitor so Claude, Codex, Bob, and any other AI agent can reuse repo context without rescanning everything from scratch.
Generated: 2026-11-17T15:55:31.921Z
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
- Last activity: 2026-11-17T15:55:29.353Z
## Workspace Focus
- Active file in focus: components/configurator/StepFourConfirmation.tsx
- Hottest files right now: components/configurator/StepFourConfirmation.tsx (11), components/configurator/StepThreeVisuals.tsx (10), components/configurator/StepOnewoning.tsx (7), app/api/vouchers/route.ts (3)
- Suggested starting points: components/configurator/StepFourConfirmation.tsx, components/configurator/StepThreeVisuals.tsx, components/configurator/StepOnewoning.tsx, app/api/vouchers/route.ts, components/configurator/StepTwoDesign.tsx, components/ConfiguratorScreen.tsx
## Current Workspace
- Active file: components/configurator/StepFourConfirmation.tsx
- Tracked files in snapshot: 76
- Top-level areas: public (26), components (18), [root] (15), app (14), lib (3)
- Primary file types: .tsx (24), .svg (14), .ts (11), .json (4), .md (4), .woff (4), .woff2 (4), .png (3)
- Key files: .gitignore, AGENTS.md, README.md, package-lock.json, package.json, tsconfig.json
## Package Snapshot
- Package: tg-configurator v0.1.0
- Package manager: not declared
- Scripts: dev, build, start, lint
- Runtime dependencies: client-zip, next, react, react-dom, react-icons, react-player, resend
- Dev dependencies: @tailwindcss/postcss, @types/node, @types/react, @types/react-dom, eslint, eslint-config-next, tailwindcss, typescript
## Current Stack
- Logged change events: 40
- Change mix: save (40)
- Remembered file snapshots: 47
- Working tree summary: 1 modified
## Tracked Snapshots
- components/configurator/StepFourConfirmation.tsx | 488 lines | 22537 chars | hash 80363421aa66
  Last snapshot: 2026-11-17T15:55:29.353Z
  Preview: "// components/configurator/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from..."
- components/configurator/StepThreeVisuals.tsx | 500 lines | 20276 chars | hash ec1f4947d2eb
  Last snapshot: 2026-11-17T15:39:56.569Z
  Preview: "// components/StepThreeVisuals.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / export default function StepThreeVisuals({ / stepTitle, / configuratorData, / desig..."
- components/configurator/StepTwoDesign.tsx | 301 lines | 13253 chars | hash 6d55e2e61897
  Last snapshot: 2026-11-17T10:43:09.499Z
  Preview: "// components/StepTwoDesign.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / export default function StepTwoDesign({ / stepTitle, /..."
- components/configurator/StepOnewoning.tsx | 163 lines | 7027 chars | hash 83a38aaa8934
  Last snapshot: 2026-11-17T10:34:00.860Z
  Preview: "'use client'; / import Image from 'next/image'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / selectedIndeling, / setSelectedIndeling / }: any) { / cons..."
- components/ConfiguratorScreen.tsx | 269 lines | 10525 chars | hash 0fe1a42f9892
  Last snapshot: 2026-11-17T08:41:27.751Z
  Preview: "'use client'; / import { useState, useEffect } from 'react'; / import Button from './Button'; / import StepOneWoning from './configurator/StepOnewoning'; / import StepTwoDesign from './configurator/StepTwoDesign'; / i..."
- app/privacy/page.tsx | 127 lines | 7550 chars | hash e35fdd4c7a5a
  Last snapshot: 2026-11-16T18:41:14.101Z
  Preview: "// app/privacy/page.tsx / 'use client'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / export default function PrivacyPage() { / return ( / <div className="min-h-screen bg-[#..."
- app/api/vouchers/route.ts | 80 lines | 2922 chars | hash dac1e1e8ab6f
  Last snapshot: 2026-11-16T18:34:33.145Z
  Preview: "import { NextResponse } from 'next/server'; / export const dynamic = 'force-dynamic'; / const VERHUUR_VOUCHERS = new Set([ / 'nomi-a001', 'nomi-a003', 'nomi-a005', 'nomi-a006', 'nomi-a007', 'nomi-a013', / 'nomi-a019',..."
- components/CookieBanner.tsx | 202 lines | 9136 chars | hash 9dd1c03bc3b1
  Last snapshot: 2026-11-16T18:15:36.213Z
  Preview: "// components/CookieBanner.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import { LiaCookieSolid } from 'react-icons/lia'; / // Hulpfunctie om een echte cookie te zetten / const setCookie = (nam..."

## Recent Changes
### 2026-11-17T15:55:29.353Z | saved | components/configurator/StepFourConfirmation.tsx
- Summary: Saved without a textual diff.
- Before: 488 lines | 22,537 chars | hash 80363421aa66 | preview: "// components/configurator/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from..."
- After: 488 lines | 22,537 chars | hash 80363421aa66 | preview: "// components/configurator/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from..."

### 2026-11-17T15:39:56.569Z | saved | components/configurator/StepThreeVisuals.tsx
- Summary: Line 445: replaced 1 line with 1 line.
- Before: 500 lines | 20,273 chars | hash a727505f7d29 | preview: "// components/StepThreeVisuals.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / export default function StepThreeVisuals({ / stepTitle, / configuratorData, / desig..."
- After: 500 lines | 20,276 chars | hash ec1f4947d2eb | preview: "// components/StepThreeVisuals.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / export default function StepThreeVisuals({ / stepTitle, / configuratorData, / desig..."
- Previous fragment: "stijl"
- Current fragment: "indeling"

### 2026-11-17T15:39:36.502Z | saved | components/configurator/StepThreeVisuals.tsx
- Summary: Saved without a textual diff.
- Before: 500 lines | 20,273 chars | hash a727505f7d29 | preview: "// components/StepThreeVisuals.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / export default function StepThreeVisuals({ / stepTitle, / configuratorData, / desig..."
- After: 500 lines | 20,273 chars | hash a727505f7d29 | preview: "// components/StepThreeVisuals.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / export default function StepThreeVisuals({ / stepTitle, / configuratorData, / desig..."

### 2026-11-17T10:43:18.403Z | saved | components/configurator/StepThreeVisuals.tsx
- Summary: Line 282: inserted 29 lines.
- Before: 472 lines | 19,377 chars | hash 46967eb226c9 | preview: "// components/StepThreeVisuals.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / export default function StepThreeVisuals({ / stepTitle, / configuratorData, / desig..."
- After: 500 lines | 20,272 chars | hash 4b0a002ce7da | preview: "// components/StepThreeVisuals.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / export default function StepThreeVisuals({ / stepTitle, / configuratorData, / desig..."
- Current fragment: "Logo's boven de visuals/content */} / <div className="flex items-center justify-center gap-6 sm:gap-8 py-2"> / <div className="relative h-8 sm:h-10 w-36 sm:w-44"> / <Image / src..."

### 2026-11-17T10:43:09.499Z | saved | components/configurator/StepTwoDesign.tsx
- Summary: Line 129: inserted 29 lines.
- Before: 273 lines | 12,360 chars | hash b4fa3adfccd3 | preview: "// components/StepTwoDesign.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / export default function StepTwoDesign({ / stepTitle, /..."
- After: 301 lines | 13,253 chars | hash 6d55e2e61897 | preview: "// components/StepTwoDesign.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / export default function StepTwoDesign({ / stepTitle, /..."
- Current fragment: "{/* Logo's boven de pakketblokken */} / <div className="flex items-center justify-center gap-6 sm:gap-8 py-2"> / <div className="relative h-8 sm:h-10 w-36 sm:w-44"> / <Image / s..."

### 2026-11-17T10:39:04.036Z | saved | components/configurator/StepThreeVisuals.tsx
- Summary: Saved without a textual diff.
- Before: 472 lines | 19,377 chars | hash 46967eb226c9 | preview: "// components/StepThreeVisuals.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / export default function StepThreeVisuals({ / stepTitle, / configuratorData, / desig..."
- After: 472 lines | 19,377 chars | hash 46967eb226c9 | preview: "// components/StepThreeVisuals.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / export default function StepThreeVisuals({ / stepTitle, / configuratorData, / desig..."

### 2026-11-17T10:38:49.276Z | saved | components/configurator/StepTwoDesign.tsx
- Summary: Line 1: replaced 116 lines with 117 lines.
- Before: 272 lines | 12,314 chars | hash 19f36b2caade | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / export default function StepTwoDesign({ / stepTitle, / configuratorData, / designPakket,..."
- After: 273 lines | 12,360 chars | hash b4fa3adfccd3 | preview: "// components/StepTwoDesign.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / export default function StepTwoDesign({ / stepTitle, /..."
- Previous fragment: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / export default function StepTwoDesign({ / stepTi..."
- Current fragment: "// components/StepTwoDesign.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / export default..."

### 2026-11-17T10:34:00.860Z | saved | components/configurator/StepOnewoning.tsx
- Summary: Line 73: replaced 13 lines with 13 lines.
- Before: 163 lines | 6,963 chars | hash 9a1b0f990d1f | preview: "'use client'; / import Image from 'next/image'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / selectedIndeling, / setSelectedIndeling / }: any) { / cons..."
- After: 163 lines | 7,027 chars | hash 83a38aaa8934 | preview: "'use client'; / import Image from 'next/image'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / selectedIndeling, / setSelectedIndeling / }: any) { / cons..."
- Previous fragment: "*/} / <div className="flex items-center justify-center gap-6 sm:gap-8 py-2"> / <div className="relative h-8 sm:h-10 w-36 sm:w-44"> / <Image / src="/assets/logo-nomi.svg" / alt="..."
- Current fragment: "(Met de juiste assets uit public/assets) */} / <div className="flex items-center justify-center gap-6 sm:gap-8 py-2"> / <div className="relative h-8 sm:h-10 w-36 sm:w-44"> / <Im..."

### 2026-11-17T10:17:55.518Z | saved | components/configurator/StepFourConfirmation.tsx
- Summary: Line 285: replaced 104 lines with 105 lines.
- Before: 478 lines | 22,695 chars | hash e80ca2817d48 | preview: "// components/configurator/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from..."
- After: 479 lines | 22,786 chars | hash f4e57e90644a | preview: "// components/configurator/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from..."
- Previous fragment: "Jouw contactgegevens voor de bevestiging</h3> / <div> / <label htmlFor="klantNaam" className="block text-[11px] font-bold uppercase tracking-wider text-muted mb-2">Volledige naa..."
- Current fragment: "Uw contactgegevens voor de bevestiging</h3> / <div> / <label htmlFor="klantNaam" className="block text-[11px] font-bold uppercase tracking-wider text-muted mb-2">Volledige naam..."

### 2026-11-17T09:57:28.159Z | saved | components/configurator/StepFourConfirmation.tsx
- Summary: Line 388: replaced 1 line with 1 line.
- Before: 478 lines | 22,690 chars | hash af9ee2080d3c | preview: "// components/configurator/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from..."
- After: 478 lines | 22,695 chars | hash e80ca2817d48 | preview: "// components/configurator/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from..."
- Previous fragment: "t u dat we uw gegevens en gekozen configuratie delen met <strong>{PARTNER_NAAM}</strong>, zodat zij vrijblijvend contact met u"
- Current fragment: "je dat we jouw gegevens en gekozen configuratie delen met <strong>{PARTNER_NAAM}</strong>, zodat zij vrijblijvend contact met jouw"

### 2026-11-17T09:54:47.357Z | saved | components/configurator/StepFourConfirmation.tsx
- Summary: Line 285: replaced 1 line with 1 line.
- Before: 478 lines | 22,688 chars | hash 414d48a175a2 | preview: "// components/configurator/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from..."
- After: 478 lines | 22,690 chars | hash af9ee2080d3c | preview: "// components/configurator/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from..."
- Previous fragment: "U"
- Current fragment: "Jou"

### 2026-11-17T09:50:53.246Z | saved | components/configurator/StepThreeVisuals.tsx
- Summary: Line 291: inserted 1 line.
- Before: 472 lines | 19,375 chars | hash 660e876370f8 | preview: "// components/StepThreeVisuals.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / export default function StepThreeVisuals({ / stepTitle, / configuratorData, / desig..."
- After: 472 lines | 19,377 chars | hash 46967eb226c9 | preview: "// components/StepThreeVisuals.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / export default function StepThreeVisuals({ / stepTitle, / configuratorData, / desig..."
- Current fragment: "jo"

### 2026-11-17T09:50:35.904Z | saved | components/configurator/StepThreeVisuals.tsx
- Summary: Line 450: inserted 1 line.
- Before: 472 lines | 19,373 chars | hash 066bb04109fc | preview: "// components/StepThreeVisuals.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / export default function StepThreeVisuals({ / stepTitle, / configuratorData, / desig..."
- After: 472 lines | 19,375 chars | hash 660e876370f8 | preview: "// components/StepThreeVisuals.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / export default function StepThreeVisuals({ / stepTitle, / configuratorData, / desig..."
- Current fragment: "jo"

### 2026-11-17T09:50:24.211Z | saved | components/configurator/StepThreeVisuals.tsx
- Summary: Line 417: inserted 1 line.
- Before: 472 lines | 19,371 chars | hash 6360f6334ef8 | preview: "// components/StepThreeVisuals.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / export default function StepThreeVisuals({ / stepTitle, / configuratorData, / desig..."
- After: 472 lines | 19,373 chars | hash 066bb04109fc | preview: "// components/StepThreeVisuals.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / export default function StepThreeVisuals({ / stepTitle, / configuratorData, / desig..."
- Current fragment: "jo"

### 2026-11-17T09:33:38.591Z | saved | components/configurator/StepThreeVisuals.tsx
- Summary: Line 82: replaced 189 lines with 189 lines.
- Before: 472 lines | 19,353 chars | hash 88f4cd37a120 | preview: "// components/StepThreeVisuals.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / export default function StepThreeVisuals({ / stepTitle, / configuratorData, / desig..."
- After: 472 lines | 19,371 chars | hash 6360f6334ef8 | preview: "// components/StepThreeVisuals.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / export default function StepThreeVisuals({ / stepTitle, / configuratorData, / desig..."
- Previous fragment: "Uw gekozen stijl: ${pakketTitel}`; / const stapOmschrijving = stappenBalk[2]?.stapOmschrijving || stappenBalk[2]?.stap_omschrijving || ''; / const rawVisuals = huidigPakketObj?...."
- Current fragment: "Jouw gekozen stijl: ${pakketTitel}`; / const stapOmschrijving = stappenBalk[2]?.stapOmschrijving || stappenBalk[2]?.stap_omschrijving || ''; / const rawVisuals = huidigPakketObj..."


## Hot Files
- components/configurator/StepFourConfirmation.tsx (11 tracked changes)
- components/configurator/StepThreeVisuals.tsx (10 tracked changes)
- components/configurator/StepOnewoning.tsx (7 tracked changes)
- app/api/vouchers/route.ts (3 tracked changes)
- components/configurator/StepTwoDesign.tsx (2 tracked changes)
- components/ConfiguratorScreen.tsx (2 tracked changes)
- app/api/confirm/route.ts (1 tracked changes)
- app/privacy/page.tsx (1 tracked changes)

## Git Snapshot
- Branch: main
- HEAD: 2026-11-17 b444fef changed sentences
- Working tree summary: 1 modified
- M components/configurator/StepFourConfirmation.tsx

## GitHub Snapshot
GitHub Repository: marketing-smartheads/nomi-configurator
Visibility: public | Default branch: main
Stars: 0 | Forks: 0 | Open issues: 0

Latest commit on main:
- b444fef by Bas van Dooremalen on 2026-11-17
  changed sentences

URL: https://github.com/marketing-smartheads/nomi-configurator

## Graphify Snapshot
Graphify report not found. Generate Graphify output if you want architecture-aware memory excerpts here.

## Project Planner
- Project planner is not configured yet. Enable it in the chat panel to generate a time-based todo list and progress rescue briefs.

## Agent Notes
- If a future task asks what changed recently, start with `Recent Changes`, `Tracked Snapshots`, `Hot Files`, and `Git Snapshot`.
- If a future task asks how the project is organized, combine this file with `graphify-out/GRAPH_REPORT.md`.
- If a future task needs repository-level context, use `Package Snapshot`, the GitHub snapshot, and the Graphify snapshot before rescanning broad parts of the repo.
