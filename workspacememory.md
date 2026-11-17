# Workspace Memory
This file is maintained automatically by Code Janitor so Claude, Codex, Bob, and any other AI agent can reuse repo context without rescanning everything from scratch.
Generated: 2026-11-17T19:30:23.965Z
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
- Last activity: 2026-11-17T19:30:22.084Z
## Workspace Focus
- Active file in focus: components/configurator/StepFourConfirmation.tsx
- Hottest files right now: components/configurator/StepFourConfirmation.tsx (28), components/ConfiguratorScreen.tsx (10), components/configurator/StepThreeVisuals.tsx (1), components/LoginScreen.tsx (1)
- Suggested starting points: components/configurator/StepFourConfirmation.tsx, components/ConfiguratorScreen.tsx, components/configurator/StepThreeVisuals.tsx, components/LoginScreen.tsx, .gitignore, AGENTS.md
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
- Working tree summary: 5 modifieds
## Tracked Snapshots
- components/configurator/StepFourConfirmation.tsx | 679 lines | 32801 chars | hash 952abd49ef73
  Last snapshot: 2026-11-17T19:30:22.084Z
  Preview: "// components/configurator/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from..."
- components/configurator/StepThreeVisuals.tsx | 500 lines | 20266 chars | hash 9697bd178c53
  Last snapshot: 2026-11-17T19:30:09.618Z
  Preview: "// components/StepThreeVisuals.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / export default function StepThreeVisuals({ / stepTitle, / configuratorData, / desig..."
- components/LoginScreen.tsx | 280 lines | 9944 chars | hash 0900a7d9f405
  Last snapshot: 2026-11-17T18:20:19.767Z
  Preview: "// components/LoginScreen.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / import Button from './Button'; / import { useRouter } fr..."
- components/ConfiguratorScreen.tsx | 131 lines | 5152 chars | hash 52285c4723da
  Last snapshot: 2026-11-17T17:40:22.102Z
  Preview: "// components/ConfiguratorScreen.tsx / 'use client'; / import { useState } from 'react'; / import StepOneWoning from './configurator/StepOnewoning'; / import StepTwoDesign from './configurator/StepTwoDesign'; / import..."
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
### 2026-11-17T19:30:22.084Z | saved | components/configurator/StepFourConfirmation.tsx
- Summary: Line 147: replaced 247 lines with 330 lines.
- Before: 596 lines | 27,166 chars | hash 3c167928698e | preview: "// components/configurator/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from..."
- After: 679 lines | 32,801 chars | hash 952abd49ef73 | preview: "// components/configurator/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from..."
- Previous fragment: "const materialenLijst = storedPakket?.materialenLijst || storedPakket?.materialen_lijst || []; / const materialenAantal = materialenLijst.length > 0 ? materialenLijst.length : 6..."
- Current fragment: "// Materialen lijst ophalen / const rawMaterialen = storedPakket?.materialenLijst || storedPakket?.materialen_lijst || []; / const materialenLijst = Array.isArray(rawMaterialen)..."

### 2026-11-17T19:30:09.618Z | saved | components/configurator/StepThreeVisuals.tsx
- Summary: Line 475: removed 1 line.
- Before: 500 lines | 20,276 chars | hash ec1f4947d2eb | preview: "// components/StepThreeVisuals.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / export default function StepThreeVisuals({ / stepTitle, / configuratorData, / desig..."
- After: 500 lines | 20,266 chars | hash 9697bd178c53 | preview: "// components/StepThreeVisuals.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / export default function StepThreeVisuals({ / stepTitle, / configuratorData, / desig..."
- Previous fragment: "Moodboard"

### 2026-11-17T19:24:20.367Z | saved | components/configurator/StepFourConfirmation.tsx

### 2026-11-17T19:24:17.789Z | saved | components/configurator/StepFourConfirmation.tsx
- Summary: Line 1: inserted 596 lines.
- Before: 0 lines | 0 chars | hash empty
- After: 596 lines | 27,166 chars | hash db930b5b8eae | preview: "// components/configurator/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from..."
- Current fragment: "// components/configurator/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from..."

### 2026-11-17T19:21:54.125Z | saved | components/configurator/StepFourConfirmation.tsx
- Summary: Line 388: replaced 1 line with 1 line.
- Before: 596 lines | 27,168 chars | hash b912f97649b0 | preview: "// components/configurator/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from..."
- After: 596 lines | 27,168 chars | hash 96a4db7fafb8 | preview: "// components/configurator/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from..."
- Previous fragment: "1"
- Current fragment: "3"

### 2026-11-17T19:21:42.075Z | saved | components/configurator/StepFourConfirmation.tsx
- Summary: Line 343: replaced 1 line with 1 line.
- Before: 596 lines | 27,168 chars | hash b7d1939d1640 | preview: "// components/configurator/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from..."
- After: 596 lines | 27,168 chars | hash b912f97649b0 | preview: "// components/configurator/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from..."
- Previous fragment: "1"
- Current fragment: "3"

### 2026-11-17T19:19:09.265Z | saved | components/configurator/StepFourConfirmation.tsx
- Summary: Line 374: replaced 3 lines with 3 lines.
- Before: 596 lines | 27,168 chars | hash 16893f39cd93 | preview: "// components/configurator/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from..."
- After: 596 lines | 27,168 chars | hash b7d1939d1640 | preview: "// components/configurator/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from..."
- Previous fragment: "4 className="text-2xl sm:text-3xl font-serif text-dark"> / {indelingTitel}{woningNaam ? ` · ${woningNaam}` : ''} / </h4"
- Current fragment: "3 className="text-2xl sm:text-3xl font-serif text-dark"> / {indelingTitel}{woningNaam ? ` · ${woningNaam}` : ''} / </h3"

### 2026-11-17T19:14:11.647Z | saved | components/configurator/StepFourConfirmation.tsx
- Summary: Line 343: replaced 46 lines with 46 lines.
- Before: 596 lines | 27,214 chars | hash b2c79fbc4f5b | preview: "// components/configurator/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from..."
- After: 596 lines | 27,168 chars | hash 16893f39cd93 | preview: "// components/configurator/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from..."
- Previous fragment: "sm:text-sm text-muted leading-relaxed pt-1"> / {pakketOmschrijving} / </p> / )} / </div> / </div> / <div className="md:col-span-5 flex flex-col h-full gap-6"> / {/* Gekozen inde..."
- Current fragment: "text-muted leading-relaxed pt-1"> / {pakketOmschrijving} / </p> / )} / </div> / </div> / <div className="md:col-span-5 flex flex-col h-full gap-6"> / {/* Gekozen indeling kaart:..."

### 2026-11-17T19:13:06.898Z | saved | components/configurator/StepFourConfirmation.tsx
- Summary: Line 374: inserted 1 line.
- Before: 596 lines | 27,201 chars | hash 040dc7aceac8 | preview: "// components/configurator/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from..."
- After: 596 lines | 27,214 chars | hash b2c79fbc4f5b | preview: "// components/configurator/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from..."
- Current fragment: "2xl sm:text-3"

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


## Hot Files
- components/configurator/StepFourConfirmation.tsx (28 tracked changes)
- components/ConfiguratorScreen.tsx (10 tracked changes)
- components/configurator/StepThreeVisuals.tsx (1 tracked changes)
- components/LoginScreen.tsx (1 tracked changes)

## Git Snapshot
- Branch: main
- HEAD: 2026-11-17 067751c small styling change
- Working tree summary: 5 modifieds
- M components/configurator/StepFourConfirmation.tsx
- M components/configurator/StepThreeVisuals.tsx
- M graphify-out/WORKSPACE_MEMORY.md
- M workspace.json
- M workspacememory.md

## GitHub Snapshot
GitHub Repository: marketing-smartheads/nomi-configurator
Visibility: public | Default branch: main
Stars: 0 | Forks: 0 | Open issues: 0

Latest commit on main:
- 067751c by Bas van Dooremalen on 2026-11-17
  small styling change

URL: https://github.com/marketing-smartheads/nomi-configurator

## Graphify Snapshot
Graphify report not found. Generate Graphify output if you want architecture-aware memory excerpts here.

## Project Planner
- Project planner is not configured yet. Enable it in the chat panel to generate a time-based todo list and progress rescue briefs.

## Agent Notes
- If a future task asks what changed recently, start with `Recent Changes`, `Tracked Snapshots`, `Hot Files`, and `Git Snapshot`.
- If a future task asks how the project is organized, combine this file with `graphify-out/GRAPH_REPORT.md`.
- If a future task needs repository-level context, use `Package Snapshot`, the GitHub snapshot, and the Graphify snapshot before rescanning broad parts of the repo.
