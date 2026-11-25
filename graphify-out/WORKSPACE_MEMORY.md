# Workspace Memory
This file is maintained automatically by Code Janitor so Claude, Codex, Bob, and any other AI agent can reuse repo context without rescanning everything from scratch.
Generated: 2026-11-25T10:42:01.213Z
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
- Last activity: 2026-11-25T10:41:59.440Z
## Workspace Focus
- Active file in focus: components/configurator/StepOnewoning.tsx
- Hottest files right now: components/configurator/StepOnewoning.tsx (12), components/configurator/StepTwoDesign.tsx (5), components/configurator/StepFourConfirmation.tsx (4), app/disclaimer/page.tsx (3)
- Suggested starting points: components/configurator/StepOnewoning.tsx, components/configurator/StepTwoDesign.tsx, components/configurator/StepFourConfirmation.tsx, app/disclaimer/page.tsx, app/layout.tsx, components/configurator/StepThreeVisuals.tsx
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
- Working tree summary: 7 modifieds
## Tracked Snapshots
- components/configurator/StepOnewoning.tsx | 257 lines | 13099 chars | hash c8e25f1b118c
  Last snapshot: 2026-11-25T10:41:59.440Z
  Preview: "// components/StepOneWoning.tsx / 'use client'; / import { useState, useEffect } from 'react'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / selectedInd..."
- components/configurator/StepTwoDesign.tsx | 302 lines | 14389 chars | hash 5f85fcefca51
  Last snapshot: 2026-11-25T10:41:47.930Z
  Preview: "// components/StepTwoDesign.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / export default function StepTwoDesign({ / stepTitle, /..."
- components/configurator/StepThreeVisuals.tsx | 501 lines | 21441 chars | hash 84f06adb3c6c
  Last snapshot: 2026-11-25T10:41:33.159Z
  Preview: "// components/StepThreeVisuals.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / export default function StepThreeVisuals({ / stepTitle, / configuratorData, / desig..."
- components/configurator/StepFourConfirmation.tsx | 823 lines | 37736 chars | hash 8cb0c5c682ce
  Last snapshot: 2026-11-25T10:41:28.890Z
  Preview: "// components/configurator/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from..."
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

## Recent Changes
### 2026-11-25T10:41:59.440Z | saved | components/configurator/StepOnewoning.tsx
- Summary: Line 1: inserted 257 lines.
- Before: 0 lines | 0 chars | hash empty
- After: 257 lines | 13,099 chars | hash c8e25f1b118c | preview: "// components/StepOneWoning.tsx / 'use client'; / import { useState, useEffect } from 'react'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / selectedInd..."
- Current fragment: "// components/StepOneWoning.tsx / 'use client'; / import { useState, useEffect } from 'react'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / wonin..."

### 2026-11-25T10:41:47.930Z | saved | components/configurator/StepTwoDesign.tsx
- Summary: Line 242: replaced 26 lines with 26 lines.
- Before: 302 lines | 14,439 chars | hash ebc6aab849ad | preview: "// components/StepTwoDesign.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / export default function StepTwoDesign({ / stepTitle, /..."
- After: 302 lines | 14,389 chars | hash 5f85fcefca51 | preview: "// components/StepTwoDesign.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / export default function StepTwoDesign({ / stepTitle, /..."
- Previous fragment: "<div className="text-center space-y-6 max-w-3xl mx-auto pt-4"> / <div className="space-y-3"> / <p className="text-[10px] tracking-[0.25em] uppercase text-primary font-semibold">..."
- Current fragment: "<div className="text-center space-y-6 max-w-3xl mx-auto pt-4"> / <div className="space-y-3"> / <p className="text-[10px] tracking-[0.25em] uppercase text-primary font-semibold">..."

### 2026-11-25T10:41:45.746Z | saved | components/configurator/StepTwoDesign.tsx
- Summary: Line 1: inserted 302 lines.
- Before: 0 lines | 0 chars | hash empty
- After: 302 lines | 14,439 chars | hash ebc6aab849ad | preview: "// components/StepTwoDesign.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / export default function StepTwoDesign({ / stepTitle, /..."
- Current fragment: "// components/StepTwoDesign.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / export default..."

### 2026-11-25T10:41:33.159Z | saved | components/configurator/StepThreeVisuals.tsx
- Summary: Line 1: inserted 501 lines.
- Before: 0 lines | 0 chars | hash empty
- After: 501 lines | 21,441 chars | hash 84f06adb3c6c | preview: "// components/StepThreeVisuals.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / export default function StepThreeVisuals({ / stepTitle, / configuratorData, / desig..."
- Current fragment: "// components/StepThreeVisuals.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / export default function StepThreeVisuals({..."

### 2026-11-25T10:41:28.890Z | saved | components/configurator/StepFourConfirmation.tsx
- Summary: Line 1: inserted 823 lines.
- Before: 0 lines | 0 chars | hash empty
- After: 823 lines | 37,736 chars | hash 8cb0c5c682ce | preview: "// components/configurator/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from..."
- Current fragment: "// components/configurator/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from..."

### 2026-11-25T09:37:59.157Z | saved | components/configurator/StepFourConfirmation.tsx
- Summary: Line 699: replaced 8 lines with 8 lines.
- Before: 805 lines | 36,694 chars | hash eabc5de581a7 | preview: "// components/configurator/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from..."
- After: 805 lines | 36,742 chars | hash 4506ede8e6a1 | preview: "// components/configurator/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from..."
- Previous fragment: "<div className="text-center space-y-4 max-w-3xl mx-auto"> / <p className="text-[10px] tracking-[0.25em] uppercase text-primary font-semibold">Disclaimer</p> / <h2 className="fon..."
- Current fragment: "<div className="text-center space-y-4 max-w-3xl mx-auto"> / <p className="text-[10px] tracking-[0.25em] uppercase text-primary font-semibold">Disclaimer</p> / <h2 className="fon..."

### 2026-11-25T09:37:55.494Z | saved | components/configurator/StepFourConfirmation.tsx
- Summary: Line 697: inserted 11 lines.
- Before: 795 lines | 35,816 chars | hash cc32e35536b5 | preview: "// components/configurator/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from..."
- After: 805 lines | 36,694 chars | hash eabc5de581a7 | preview: "// components/configurator/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from..."
- Current fragment: "{/* Disclaimer Elektra- en lichtplan */} / <div className="text-center space-y-4 max-w-3xl mx-auto"> / <p className="text-[10px] tracking-[0.25em] uppercase text-primary font-se..."

### 2026-11-25T09:37:03.622Z | saved | components/configurator/StepFourConfirmation.tsx
- Summary: Line 413: inserted 3 lines.
- Before: 793 lines | 35,622 chars | hash 0e2c3d0d1461 | preview: "// components/configurator/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from..."
- After: 795 lines | 35,816 chars | hash cc32e35536b5 | preview: "// components/configurator/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from..."
- Current fragment: "<br/> / <a href="/disclaimer" className="text-dark text-xs sm:text-sm font-bold underline hover:no-underline" title="Disclaimer, t/m 7 december">Meer informatie</a>."

### 2026-11-25T09:36:26.419Z | saved | components/configurator/StepThreeVisuals.tsx
- Summary: Line 277: inserted 2 lines.
- Before: 482 lines | 20,254 chars | hash dfd48a0b5774 | preview: "// components/StepThreeVisuals.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / export default function StepThreeVisuals({ / stepTitle, / configuratorData, / desig..."
- After: 483 lines | 20,432 chars | hash 9d13d57613d5 | preview: "// components/StepThreeVisuals.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / export default function StepThreeVisuals({ / stepTitle, / configuratorData, / desig..."
- Current fragment: "<br/> / <a href="/disclaimer" className="text-dark text-xs sm:text-sm font-bold underline hover:no-underline" title="Disclaimer, t/m 7 december">Meer informatie</a>."

### 2026-11-25T09:36:18.740Z | saved | components/configurator/StepTwoDesign.tsx
- Summary: Saved without a textual diff.
- Before: 284 lines | 13,429 chars | hash 6d81768d35df | preview: "// components/StepTwoDesign.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / export default function StepTwoDesign({ / stepTitle, /..."
- After: 284 lines | 13,429 chars | hash 6d81768d35df | preview: "// components/StepTwoDesign.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / export default function StepTwoDesign({ / stepTitle, /..."

### 2026-11-25T09:35:17.410Z | saved | components/configurator/StepThreeVisuals.tsx
- Summary: Line 470: inserted 11 lines.
- Before: 472 lines | 19,371 chars | hash 1e3076199a8e | preview: "// components/StepThreeVisuals.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / export default function StepThreeVisuals({ / stepTitle, / configuratorData, / desig..."
- After: 482 lines | 20,254 chars | hash dfd48a0b5774 | preview: "// components/StepThreeVisuals.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / export default function StepThreeVisuals({ / stepTitle, / configuratorData, / desig..."
- Current fragment: "{/* Disclaimer Elektra- en lichtplan */} / <div className="text-center space-y-4 max-w-3xl mx-auto"> / <p className="text-[10px] tracking-[0.25em] uppercase text-primary font-se..."

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


## Hot Files
- components/configurator/StepOnewoning.tsx (12 tracked changes)
- components/configurator/StepTwoDesign.tsx (5 tracked changes)
- components/configurator/StepFourConfirmation.tsx (4 tracked changes)
- app/disclaimer/page.tsx (3 tracked changes)
- app/layout.tsx (3 tracked changes)
- components/configurator/StepThreeVisuals.tsx (3 tracked changes)
- app/api/confirm/route.ts (2 tracked changes)
- components/LoginScreen.tsx (2 tracked changes)

## Git Snapshot
- Branch: main
- HEAD: 2026-11-25 4bfd769 added disclaimer to all steps
- Working tree summary: 7 modifieds
- M components/configurator/StepFourConfirmation.tsx
- M components/configurator/StepOnewoning.tsx
- M components/configurator/StepThreeVisuals.tsx
- M components/configurator/StepTwoDesign.tsx
- M graphify-out/WORKSPACE_MEMORY.md
- M workspace.json
- M workspacememory.md

## GitHub Snapshot
GitHub Repository: marketing-smartheads/nomi-configurator
Visibility: public | Default branch: main
Stars: 0 | Forks: 0 | Open issues: 0

Latest commit on main:
- 4bfd769 by Bas van Dooremalen on 2026-11-25
  added disclaimer to all steps

URL: https://github.com/marketing-smartheads/nomi-configurator

## Graphify Snapshot
Graphify report not found. Generate Graphify output if you want architecture-aware memory excerpts here.

## Project Planner
- Project planner is not configured yet. Enable it in the chat panel to generate a time-based todo list and progress rescue briefs.

## Agent Notes
- If a future task asks what changed recently, start with `Recent Changes`, `Tracked Snapshots`, `Hot Files`, and `Git Snapshot`.
- If a future task asks how the project is organized, combine this file with `graphify-out/GRAPH_REPORT.md`.
- If a future task needs repository-level context, use `Package Snapshot`, the GitHub snapshot, and the Graphify snapshot before rescanning broad parts of the repo.
