# Workspace Memory
This file is maintained automatically by Code Janitor so Claude, Codex, Bob, and any other AI agent can reuse repo context without rescanning everything from scratch.
Generated: 2026-11-17T09:50:55.096Z
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
- Last activity: 2026-11-17T09:50:53.246Z
## Workspace Focus
- Active file in focus: components/configurator/StepThreeVisuals.tsx
- Hottest files right now: components/configurator/StepFourConfirmation.tsx (11), components/configurator/StepThreeVisuals.tsx (7), components/configurator/StepOnewoning.tsx (6), components/configurator/StepTwoDesign.tsx (5)
- Suggested starting points: components/configurator/StepThreeVisuals.tsx, components/configurator/StepFourConfirmation.tsx, components/configurator/StepOnewoning.tsx, components/configurator/StepTwoDesign.tsx, app/api/vouchers/route.ts, components/ConfiguratorScreen.tsx
## Current Workspace
- Active file: components/configurator/StepThreeVisuals.tsx
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
- Working tree summary: 4 modifieds
## Tracked Snapshots
- components/configurator/StepThreeVisuals.tsx | 472 lines | 19377 chars | hash 46967eb226c9
  Last snapshot: 2026-11-17T09:50:53.246Z
  Preview: "// components/StepThreeVisuals.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / export default function StepThreeVisuals({ / stepTitle, / configuratorData, / desig..."
- components/ConfiguratorScreen.tsx | 269 lines | 10525 chars | hash 0fe1a42f9892
  Last snapshot: 2026-11-17T08:41:27.751Z
  Preview: "'use client'; / import { useState, useEffect } from 'react'; / import Button from './Button'; / import StepOneWoning from './configurator/StepOnewoning'; / import StepTwoDesign from './configurator/StepTwoDesign'; / i..."
- components/configurator/StepOnewoning.tsx | 163 lines | 6963 chars | hash 9a1b0f990d1f
  Last snapshot: 2026-11-17T08:39:17.868Z
  Preview: "'use client'; / import Image from 'next/image'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / selectedIndeling, / setSelectedIndeling / }: any) { / cons..."
- app/privacy/page.tsx | 127 lines | 7550 chars | hash e35fdd4c7a5a
  Last snapshot: 2026-11-16T18:41:14.101Z
  Preview: "// app/privacy/page.tsx / 'use client'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / export default function PrivacyPage() { / return ( / <div className="min-h-screen bg-[#..."
- app/api/vouchers/route.ts | 80 lines | 2922 chars | hash dac1e1e8ab6f
  Last snapshot: 2026-11-16T18:34:33.145Z
  Preview: "import { NextResponse } from 'next/server'; / export const dynamic = 'force-dynamic'; / const VERHUUR_VOUCHERS = new Set([ / 'nomi-a001', 'nomi-a003', 'nomi-a005', 'nomi-a006', 'nomi-a007', 'nomi-a013', / 'nomi-a019',..."
- components/CookieBanner.tsx | 202 lines | 9136 chars | hash 9dd1c03bc3b1
  Last snapshot: 2026-11-16T18:15:36.213Z
  Preview: "// components/CookieBanner.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import { LiaCookieSolid } from 'react-icons/lia'; / // Hulpfunctie om een echte cookie te zetten / const setCookie = (nam..."
- app/api/confirm/route.ts | 298 lines | 11232 chars | hash 8705fe271979
  Last snapshot: 2026-11-16T18:14:37.532Z
  Preview: "import { NextResponse } from 'next/server'; / import { Resend } from 'resend'; / const resend = new Resend(process.env.RESEND_API_KEY); / export async function POST(request: Request) { / try { / const body = await req..."
- components/WelcomeScreen.tsx | 46 lines | 1424 chars | hash 14a8ac3eab2d
  Last snapshot: 2026-11-16T18:13:19.803Z
  Preview: "import { useState, useEffect } from 'react'; / import Hero from './Hero'; / import Story from './Story'; / import Cta from './Cta'; / import Faq from './Faq'; / import { getPageData } from '../lib/cms'; / export defau..."

## Recent Changes
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

### 2026-11-17T09:16:28.219Z | saved | components/configurator/StepThreeVisuals.tsx
- Summary: Line 270: removed 1 line.
- Before: 472 lines | 19,362 chars | hash faf34aeee9fa | preview: "// components/StepThreeVisuals.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / export default function StepThreeVisuals({ / stepTitle, / configuratorData, / desig..."
- After: 472 lines | 19,353 chars | hash 88f4cd37a120 | preview: "// components/StepThreeVisuals.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / export default function StepThreeVisuals({ / stepTitle, / configuratorData, / desig..."
- Previous fragment: "Stap 3 ·"

### 2026-11-17T08:55:21.763Z | saved | components/ConfiguratorScreen.tsx

### 2026-11-17T08:55:21.484Z | saved | components/configurator/StepFourConfirmation.tsx

### 2026-11-17T08:41:27.751Z | saved | components/ConfiguratorScreen.tsx
- Summary: Line 135: replaced 2 lines with 21 lines.
- Before: 250 lines | 9,599 chars | hash 6af3f7e817b2 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Button from './Button'; / import StepOneWoning from './configurator/StepOnewoning'; / import StepTwoDesign from './configurator/StepTwoDesign'; / i..."
- After: 269 lines | 10,525 chars | hash 0fe1a42f9892 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Button from './Button'; / import StepOneWoning from './configurator/StepOnewoning'; / import StepTwoDesign from './configurator/StepTwoDesign'; / i..."
- Previous fragment: "w-full bg-secondary min-h-screen"> / <div className={`"
- Current fragment: "relative w-full bg-secondary min-h-screen overflow-hidden"> / {/* Linker achtergrond-element: sluit direct aan tegen de zwarte header en linker schermrand */} / <div className="..."

### 2026-11-17T08:39:17.868Z | saved | components/configurator/StepOnewoning.tsx
- Summary: Line 45: replaced 36 lines with 10 lines.
- Before: 189 lines | 8,430 chars | hash 96a1e0889a89 | preview: "'use client'; / import Image from 'next/image'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / selectedIndeling, / setSelectedIndeling / }: any) { / cons..."
- After: 163 lines | 6,963 chars | hash 9a1b0f990d1f | preview: "'use client'; / import Image from 'next/image'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / selectedIndeling, / setSelectedIndeling / }: any) { / cons..."
- Previous fragment: "overflow-hidden"> / <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-44 xl:w-56 pointer-events-none select-none z-0"> / <img src="/assets/Nomi achtergrond elemen..."
- Current fragment: ""> / <p className="text-xs text-muted tracking-widest uppercase animate-pulse z-10"> / Uw woningtype wordt geladen... / </p> / </div> / ); / } / return ( / <div className="relat..."

### 2026-11-17T08:31:15.665Z | saved | components/configurator/StepOnewoning.tsx
- Summary: Line 45: replaced 36 lines with 28 lines.
- Before: 197 lines | 8,613 chars | hash 501cf29af6c2 | preview: "'use client'; / import Image from 'next/image'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / selectedIndeling, / setSelectedIndeling / }: any) { / cons..."
- After: 189 lines | 8,430 chars | hash 96a1e0889a89 | preview: "'use client'; / import Image from 'next/image'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / selectedIndeling, / setSelectedIndeling / }: any) { / cons..."
- Previous fragment: "w-screen left-1/2 -translate-x-1/2 min-h-[400px] flex flex-col justify-center items-center overflow-hidden"> / <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-4..."
- Current fragment: "min-h-[400px] flex flex-col justify-center items-center overflow-hidden"> / <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-44 xl:w-56 pointer-events-none selec..."

### 2026-11-17T08:27:16.987Z | saved | components/configurator/StepOnewoning.tsx
- Summary: Line 45: replaced 69 lines with 73 lines.
- Before: 193 lines | 8,789 chars | hash ea2fdb4402e8 | preview: "'use client'; / import Image from 'next/image'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / selectedIndeling, / setSelectedIndeling / }: any) { / cons..."
- After: 197 lines | 8,613 chars | hash 501cf29af6c2 | preview: "'use client'; / import Image from 'next/image'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / selectedIndeling, / setSelectedIndeling / }: any) { / cons..."
- Previous fragment: "min-h-[400px] flex flex-col justify-center items-center overflow-hidden"> / {/* Achtergrondpatronen strak tegen de browser randen */} / <div className="fixed left-0 top-0 bottom..."
- Current fragment: "w-screen left-1/2 -translate-x-1/2 min-h-[400px] flex flex-col justify-center items-center overflow-hidden"> / <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-4..."

### 2026-11-17T08:25:03.135Z | saved | components/configurator/StepOnewoning.tsx
- Summary: Line 46: replaced 58 lines with 58 lines.
- Before: 193 lines | 8,742 chars | hash 53efe51703bc | preview: "'use client'; / import Image from 'next/image'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / selectedIndeling, / setSelectedIndeling / }: any) { / cons..."
- After: 193 lines | 8,789 chars | hash ea2fdb4402e8 | preview: "'use client'; / import Image from 'next/image'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / selectedIndeling, / setSelectedIndeling / }: any) { / cons..."
- Previous fragment: "randen */} / <div className="absolute left-0 top-0 bottom-0 w-48 sm:w-64 md:w-80 opacity-20 pointer-events-none select-none overflow-hidden flex items-center"> / <Image src="/as..."
- Current fragment: "browser randen */} / <div className="fixed left-0 top-0 bottom-0 w-48 sm:w-64 md:w-80 opacity-25 pointer-events-none select-none overflow-hidden flex items-center z-0"> / <Image..."

### 2026-11-17T08:19:41.216Z | saved | components/configurator/StepOnewoning.tsx
- Summary: Line 46: replaced 75 lines with 76 lines.
- Before: 192 lines | 8,611 chars | hash 4d3d976fb70f | preview: "'use client'; / import Image from 'next/image'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / selectedIndeling, / setSelectedIndeling / }: any) { / cons..."
- After: 193 lines | 8,742 chars | hash 53efe51703bc | preview: "'use client'; / import Image from 'next/image'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / selectedIndeling, / setSelectedIndeling / }: any) { / cons..."
- Previous fragment: "Decoratieve achtergrond elementen links en rechts */} / <div className="absolute left-0 top-1/2 -translate-y-1/2 w-32 md:w-48 opacity-20 pointer-events-none select-none"> / <Ima..."
- Current fragment: "Achtergrondpatronen strak tegen de randen */} / <div className="absolute left-0 top-0 bottom-0 w-48 sm:w-64 md:w-80 opacity-20 pointer-events-none select-none overflow-hidden fl..."

### 2026-11-17T08:14:34.893Z | saved | components/configurator/StepOnewoning.tsx
- Summary: Line 3: replaced 121 lines with 186 lines.
- Before: 127 lines | 5,717 chars | hash 62bafaf91d9e | preview: "'use client'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / selectedIndeling, / setSelectedIndeling / }: any) { / const data = configuratorData?.configu..."
- After: 192 lines | 8,611 chars | hash 4d3d976fb70f | preview: "'use client'; / import Image from 'next/image'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / selectedIndeling, / setSelectedIndeling / }: any) { / cons..."
- Previous fragment: "export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / selectedIndeling, / setSelectedIndeling / }: any) { / const data = c..."
- Current fragment: "import Image from 'next/image'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / selectedIndeling, / setSelectedInd..."

### 2026-11-16T18:41:14.101Z | saved | app/privacy/page.tsx
- Summary: Line 26: replaced 100 lines with 92 lines.
- Before: 135 lines | 8,229 chars | hash 1fa058bba875 | preview: "// app/privacy/page.tsx / 'use client'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / export default function PrivacyPage() { / return ( / <div className="min-h-screen bg-[#..."
- After: 127 lines | 7,550 chars | hash e35fdd4c7a5a | preview: "// app/privacy/page.tsx / 'use client'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / export default function PrivacyPage() { / return ( / <div className="min-h-screen bg-[#..."
- Previous fragment: "gebruiken en hoe wij omgaan met cookies, session storage en lokale opslag. / </p> / </section> / <div className="space-y-3"> / <h2 className="text-lg sm:text-xl font-serif text-..."
- Current fragment: "opslaan in ons CMS en hoe wij omgaan met sessie- en browseropslag. / </p> / </section> / <div className="space-y-3"> / <h2 className="text-lg sm:text-xl font-serif text-white pt..."


## Hot Files
- components/configurator/StepFourConfirmation.tsx (11 tracked changes)
- components/configurator/StepThreeVisuals.tsx (7 tracked changes)
- components/configurator/StepOnewoning.tsx (6 tracked changes)
- components/configurator/StepTwoDesign.tsx (5 tracked changes)
- app/api/vouchers/route.ts (3 tracked changes)
- components/ConfiguratorScreen.tsx (2 tracked changes)
- app/api/confirm/route.ts (1 tracked changes)
- app/privacy/page.tsx (1 tracked changes)

## Git Snapshot
- Branch: main
- HEAD: 2026-11-17 38d228c fix(step3): remove step prefix from subtitle and change heading text to jouw gekozen stijl
- Working tree summary: 4 modifieds
- M components/configurator/StepThreeVisuals.tsx
- M graphify-out/WORKSPACE_MEMORY.md
- M workspace.json
- M workspacememory.md

## GitHub Snapshot
GitHub Repository: marketing-smartheads/nomi-configurator
Visibility: public | Default branch: main
Stars: 0 | Forks: 0 | Open issues: 0

Latest commit on main:
- 38d228c by Bas van Dooremalen on 2026-11-17
  fix(step3): remove step prefix from subtitle and change heading text to jouw gekozen stijl

URL: https://github.com/marketing-smartheads/nomi-configurator

## Graphify Snapshot
Graphify report not found. Generate Graphify output if you want architecture-aware memory excerpts here.

## Project Planner
- Project planner is not configured yet. Enable it in the chat panel to generate a time-based todo list and progress rescue briefs.

## Agent Notes
- If a future task asks what changed recently, start with `Recent Changes`, `Tracked Snapshots`, `Hot Files`, and `Git Snapshot`.
- If a future task asks how the project is organized, combine this file with `graphify-out/GRAPH_REPORT.md`.
- If a future task needs repository-level context, use `Package Snapshot`, the GitHub snapshot, and the Graphify snapshot before rescanning broad parts of the repo.
