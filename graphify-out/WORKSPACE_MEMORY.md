# Workspace Memory
This file is maintained automatically by Code Janitor so Claude, Codex, Bob, and any other AI agent can reuse repo context without rescanning everything from scratch.
Generated: 2026-11-17T19:09:49.657Z
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
- Last activity: 2026-11-17T19:09:46.238Z
## Workspace Focus
- Active file in focus: components/configurator/StepFourConfirmation.tsx
- Hottest files right now: components/configurator/StepFourConfirmation.tsx (22), components/ConfiguratorScreen.tsx (10), components/configurator/StepThreeVisuals.tsx (4), components/configurator/StepTwoDesign.tsx (2)
- Suggested starting points: components/configurator/StepFourConfirmation.tsx, components/ConfiguratorScreen.tsx, components/configurator/StepThreeVisuals.tsx, components/configurator/StepTwoDesign.tsx, components/configurator/StepOnewoning.tsx, components/LoginScreen.tsx
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
- components/configurator/StepFourConfirmation.tsx | 596 lines | 27201 chars | hash 040dc7aceac8
  Last snapshot: 2026-11-17T19:09:46.238Z
  Preview: "// components/configurator/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from..."
- components/LoginScreen.tsx | 280 lines | 9944 chars | hash 0900a7d9f405
  Last snapshot: 2026-11-17T18:20:19.767Z
  Preview: "// components/LoginScreen.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / import Button from './Button'; / import { useRouter } fr..."
- components/ConfiguratorScreen.tsx | 131 lines | 5152 chars | hash 52285c4723da
  Last snapshot: 2026-11-17T17:40:22.102Z
  Preview: "// components/ConfiguratorScreen.tsx / 'use client'; / import { useState } from 'react'; / import StepOneWoning from './configurator/StepOnewoning'; / import StepTwoDesign from './configurator/StepTwoDesign'; / import..."
- components/configurator/StepThreeVisuals.tsx | 500 lines | 20276 chars | hash ec1f4947d2eb
  Last snapshot: 2026-11-17T15:39:56.569Z
  Preview: "// components/StepThreeVisuals.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / export default function StepThreeVisuals({ / stepTitle, / configuratorData, / desig..."
- components/configurator/StepTwoDesign.tsx | 301 lines | 13253 chars | hash 6d55e2e61897
  Last snapshot: 2026-11-17T10:43:09.499Z
  Preview: "// components/StepTwoDesign.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / export default function StepTwoDesign({ / stepTitle, /..."
- components/configurator/StepOnewoning.tsx | 163 lines | 7027 chars | hash 83a38aaa8934
  Last snapshot: 2026-11-17T10:34:00.860Z
  Preview: "'use client'; / import Image from 'next/image'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / selectedIndeling, / setSelectedIndeling / }: any) { / cons..."
- app/privacy/page.tsx | 127 lines | 7550 chars | hash e35fdd4c7a5a
  Last snapshot: 2026-11-16T18:41:14.101Z
  Preview: "// app/privacy/page.tsx / 'use client'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / export default function PrivacyPage() { / return ( / <div className="min-h-screen bg-[#..."
- app/api/vouchers/route.ts | 80 lines | 2922 chars | hash dac1e1e8ab6f
  Last snapshot: 2026-11-16T18:34:33.145Z
  Preview: "import { NextResponse } from 'next/server'; / export const dynamic = 'force-dynamic'; / const VERHUUR_VOUCHERS = new Set([ / 'nomi-a001', 'nomi-a003', 'nomi-a005', 'nomi-a006', 'nomi-a007', 'nomi-a013', / 'nomi-a019',..."

## Recent Changes
### 2026-11-17T19:09:46.238Z | saved | components/configurator/StepFourConfirmation.tsx
- Summary: Line 343: replaced 47 lines with 47 lines.
- Before: 596 lines | 27,154 chars | hash 6538241a581a | preview: "// components/configurator/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from..."
- After: 596 lines | 27,201 chars | hash 040dc7aceac8 | preview: "// components/configurator/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from..."
- Previous fragment: "text-muted leading-relaxed pt-1"> / {pakketOmschrijving} / </p> / )} / </div> / </div> / <div className="md:col-span-5 flex flex-col justify-between h-full gap-6"> / {/* Gekozen..."
- Current fragment: "sm:text-sm text-muted leading-relaxed pt-1"> / {pakketOmschrijving} / </p> / )} / </div> / </div> / <div className="md:col-span-5 flex flex-col h-full gap-6"> / {/* Gekozen inde..."

### 2026-11-17T18:56:21.728Z | saved | components/configurator/StepFourConfirmation.tsx
- Summary: Line 352: removed 1 line.
- Before: 596 lines | 27,170 chars | hash 958cbe400d9c | preview: "// components/configurator/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from..."
- After: 596 lines | 27,154 chars | hash 6538241a581a | preview: "// components/configurator/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from..."
- Previous fragment: "justify-between"

### 2026-11-17T18:55:35.779Z | saved | components/configurator/StepFourConfirmation.tsx

### 2026-11-17T18:54:59.000Z | saved | components/configurator/StepFourConfirmation.tsx
- Summary: Saved without a textual diff.
- Before: 596 lines | 27,165 chars | hash 4a861f35a117 | preview: "// components/configurator/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from..."
- After: 596 lines | 27,165 chars | hash 4a861f35a117 | preview: "// components/configurator/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from..."

### 2026-11-17T18:42:35.023Z | saved | components/configurator/StepFourConfirmation.tsx
- Summary: Line 343: replaced 47 lines with 47 lines.
- Before: 596 lines | 27,198 chars | hash fb105c5aeee7 | preview: "// components/configurator/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from..."
- After: 596 lines | 27,165 chars | hash 4a861f35a117 | preview: "// components/configurator/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from..."
- Previous fragment: "sm:text-sm text-muted leading-relaxed pt-1"> / {pakketOmschrijving} / </p> / )} / </div> / </div> / <div className="md:col-span-5 flex flex-col justify-between h-full gap-6"> /..."
- Current fragment: "text-muted leading-relaxed pt-1"> / {pakketOmschrijving} / </p> / )} / </div> / </div> / <div className="md:col-span-5 flex flex-col justify-between h-full gap-6"> / {/* Gekozen..."

### 2026-11-17T18:40:52.600Z | saved | components/configurator/StepFourConfirmation.tsx
- Summary: Line 385: replaced 1 line with 1 line.
- Before: 596 lines | 27,216 chars | hash 2af38c437efe | preview: "// components/configurator/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from..."
- After: 596 lines | 27,198 chars | hash fb105c5aeee7 | preview: "// components/configurator/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from..."
- Previous fragment: "[#C5A880] uppercase font-serif mb-1"
- Current fragment: "primary uppercase"

### 2026-11-17T18:36:52.174Z | saved | components/configurator/StepFourConfirmation.tsx
- Summary: Line 343: replaced 45 lines with 46 lines.
- Before: 595 lines | 27,091 chars | hash 503a28d97aad | preview: "// components/configurator/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from..."
- After: 596 lines | 27,216 chars | hash 2af38c437efe | preview: "// components/configurator/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from..."
- Previous fragment: "text-muted leading-relaxed pt-1"> / {pakketOmschrijving} / </p> / )} / </div> / </div> / <div className="md:col-span-5 flex flex-col justify-between h-full gap-6"> / <div classN..."
- Current fragment: "sm:text-sm text-muted leading-relaxed pt-1"> / {pakketOmschrijving} / </p> / )} / </div> / </div> / <div className="md:col-span-5 flex flex-col justify-between h-full gap-6"> /..."

### 2026-11-17T18:33:40.969Z | saved | components/configurator/StepFourConfirmation.tsx
- Summary: Line 384: replaced 1 line with 1 line.
- Before: 595 lines | 27,104 chars | hash 22b3e2f04f37 | preview: "// components/configurator/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from..."
- After: 595 lines | 27,091 chars | hash 503a28d97aad | preview: "// components/configurator/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from..."
- Previous fragment: "[#C5A880] uppercase font-serif"
- Current fragment: "primary uppercase"

### 2026-11-17T18:32:27.152Z | saved | components/configurator/StepFourConfirmation.tsx
- Summary: Line 343: replaced 45 lines with 45 lines.
- Before: 595 lines | 27,121 chars | hash c203a731036e | preview: "// components/configurator/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from..."
- After: 595 lines | 27,104 chars | hash 22b3e2f04f37 | preview: "// components/configurator/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from..."
- Previous fragment: "sm:text-sm text-muted leading-relaxed pt-1"> / {pakketOmschrijving} / </p> / )} / </div> / </div> / <div className="md:col-span-5 flex flex-col justify-between h-full gap-6"> /..."
- Current fragment: "text-muted leading-relaxed pt-1"> / {pakketOmschrijving} / </p> / )} / </div> / </div> / <div className="md:col-span-5 flex flex-col justify-between h-full gap-6"> / <div classN..."

### 2026-11-17T18:27:55.311Z | saved | components/configurator/StepFourConfirmation.tsx
- Summary: Line 96: replaced 292 lines with 292 lines.
- Before: 595 lines | 27,086 chars | hash 5bfa6afb5a26 | preview: "// components/configurator/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from..."
- After: 595 lines | 27,121 chars | hash c203a731036e | preview: "// components/configurator/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from..."
- Previous fragment: "// 100% veilige array check om de filter crash definitief te voorkomen / const matchendeRijen = Array.isArray(woningTypenLijst) ? woningTypenLijst.filter((w: any) => { / if (!w)..."
- Current fragment: "const matchendeRijen = Array.isArray(woningTypenLijst) ? woningTypenLijst.filter((w: any) => { / if (!w) return false; / const naam = (w?.typeNaam || w?.typenaam || '').toLowerC..."

### 2026-11-17T18:20:19.767Z | saved | components/LoginScreen.tsx
- Summary: Line 211: replaced 63 lines with 63 lines.
- Before: 280 lines | 9,936 chars | hash 7dfb1719bf66 | preview: "// components/LoginScreen.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / import Button from './Button'; / import { useRouter } fr..."
- After: 280 lines | 9,944 chars | hash 0900a7d9f405 | preview: "// components/LoginScreen.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / import Button from './Button'; / import { useRouter } fr..."
- Previous fragment: "uw nieuwe<br />interieur / </h1> / <p className="text-sm text-dark"> / Voer uw unieke vouchercode en e-mailadres in om uw interieurreis te starten. / </p> / </div> / <div classN..."
- Current fragment: "jouw nieuwe<br />interieur / </h1> / <p className="text-sm text-dark"> / Voer jouw unieke vouchercode en e-mailadres in om jouw interieurreis te starten. / </p> / </div> / <div..."

### 2026-11-17T18:11:33.943Z | saved | components/configurator/StepFourConfirmation.tsx
- Summary: Line 566: inserted 30 lines.
- Before: 566 lines | 26,025 chars | hash 9ab0752733da | preview: "// components/configurator/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from..."
- After: 595 lines | 27,086 chars | hash 5bfa6afb5a26 | preview: "// components/configurator/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from..."
- Current fragment: "ame="mt-0.5 w-4 h-4 accent-dark rounded" / /> / <span className="text-[11px] font-bold text-primary uppercase tracking-wide leading-snug"> / {waarschuwingTekst} / </span> / </la..."

### 2026-11-17T17:40:22.102Z | saved | components/ConfiguratorScreen.tsx
- Summary: Saved without a textual diff.
- Before: 131 lines | 5,152 chars | hash 52285c4723da | preview: "// components/ConfiguratorScreen.tsx / 'use client'; / import { useState } from 'react'; / import StepOneWoning from './configurator/StepOnewoning'; / import StepTwoDesign from './configurator/StepTwoDesign'; / import..."
- After: 131 lines | 5,152 chars | hash 52285c4723da | preview: "// components/ConfiguratorScreen.tsx / 'use client'; / import { useState } from 'react'; / import StepOneWoning from './configurator/StepOnewoning'; / import StepTwoDesign from './configurator/StepTwoDesign'; / import..."

### 2026-11-17T17:36:47.963Z | saved | components/configurator/StepFourConfirmation.tsx
- Summary: Line 64: replaced 443 lines with 436 lines.
- Before: 602 lines | 28,156 chars | hash 1204167a697a | preview: "// components/configurator/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from..."
- After: 595 lines | 27,642 chars | hash 7b09db57b537 | preview: "// components/configurator/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from..."
- Previous fragment: "; / const rawWoningTypen = data?.woningTypen || data?.woning_typen || []; / const woningTypenLijst = Array.isArray(rawWoningTypen) ? rawWoningTypen : rawWoningTypen?.nodes || []..."
- Current fragment: "|| {}; / const rawWoningTypen = data?.woningTypen || data?.woning_typen || []; / const woningTypenLijst = Array.isArray(rawWoningTypen) / ? rawWoningTypen / : (rawWoningTypen?.n..."

### 2026-11-17T17:33:48.119Z | saved | components/configurator/StepFourConfirmation.tsx
- Summary: Line 94: replaced 24 lines with 25 lines.
- Before: 601 lines | 28,022 chars | hash b1f24751b3f3 | preview: "// components/configurator/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from..."
- After: 602 lines | 28,156 chars | hash 1204167a697a | preview: "// components/configurator/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from..."
- Previous fragment: "const matchendeRijen = woningTypenLijst.filter((w: any) => { / const naam = (w?.typeNaam || w?.typenaam || '').toLowerCase().replace(/[^a-z0-9]/g, ''); / const indTitel = (w?.in..."
- Current fragment: "// Veilige filter controle zodat .filter() nooit op undefined kan crashen / const matchendeRijen = Array.isArray(woningTypenLijst) ? woningTypenLijst.filter((w: any) => { / cons..."


## Hot Files
- components/configurator/StepFourConfirmation.tsx (22 tracked changes)
- components/ConfiguratorScreen.tsx (10 tracked changes)
- components/configurator/StepThreeVisuals.tsx (4 tracked changes)
- components/configurator/StepTwoDesign.tsx (2 tracked changes)
- components/configurator/StepOnewoning.tsx (1 tracked changes)
- components/LoginScreen.tsx (1 tracked changes)

## Git Snapshot
- Branch: main
- HEAD: 2026-11-17 87cf4b6 changed some styling
- Working tree summary: 1 modified
- M components/configurator/StepFourConfirmation.tsx

## GitHub Snapshot
GitHub Repository: marketing-smartheads/nomi-configurator
Visibility: public | Default branch: main
Stars: 0 | Forks: 0 | Open issues: 0

Latest commit on main:
- 87cf4b6 by Bas van Dooremalen on 2026-11-17
  changed some styling

URL: https://github.com/marketing-smartheads/nomi-configurator

## Graphify Snapshot
Graphify report not found. Generate Graphify output if you want architecture-aware memory excerpts here.

## Project Planner
- Project planner is not configured yet. Enable it in the chat panel to generate a time-based todo list and progress rescue briefs.

## Agent Notes
- If a future task asks what changed recently, start with `Recent Changes`, `Tracked Snapshots`, `Hot Files`, and `Git Snapshot`.
- If a future task asks how the project is organized, combine this file with `graphify-out/GRAPH_REPORT.md`.
- If a future task needs repository-level context, use `Package Snapshot`, the GitHub snapshot, and the Graphify snapshot before rescanning broad parts of the repo.
