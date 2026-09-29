# Workspace Memory
This file is maintained automatically by Code Janitor so Claude, Codex, Bob, and any other AI agent can reuse repo context without rescanning everything from scratch.
Generated: 2026-09-29T11:22:16.455Z
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
- Last activity: 2026-09-29T11:22:14.750Z
## Workspace Focus
- Active file in focus: No active file detected
- Hottest files right now: components/configurator/StepThreeVisuals.tsx (11), components/LoginScreen.tsx (10), components/MainContent.tsx (8), app/api/confirm/route.ts (5)
- Suggested starting points: components/configurator/StepThreeVisuals.tsx, components/LoginScreen.tsx, components/MainContent.tsx, app/api/confirm/route.ts, components/ConfiguratorScreen.tsx, app/dashboard/page.tsx
## Current Workspace
- Active file: No active file detected
- Tracked files in snapshot: 62
- Top-level areas: public (20), [root] (15), components (15), app (9), lib (3)
- Primary file types: .tsx (19), .svg (11), .ts (9), .json (4), .md (4), .woff (4), .woff2 (4), .mjs (2)
- Key files: .gitignore, AGENTS.md, README.md, package-lock.json, package.json, tsconfig.json
## Package Snapshot
- Package: tg-configurator v0.1.0
- Package manager: not declared
- Scripts: dev, build, start, lint
- Runtime dependencies: client-zip, next, react, react-dom, react-player, resend
- Dev dependencies: @tailwindcss/postcss, @types/node, @types/react, @types/react-dom, eslint, eslint-config-next, tailwindcss, typescript
## Current Stack
- Logged change events: 40
- Change mix: save (40)
- Remembered file snapshots: 38
- Working tree summary: 8 modifieds
## Tracked Snapshots
- components/configurator/StepOnewoning.tsx | 76 lines | 3448 chars | hash 568f8963cd5d
  Last snapshot: 2026-09-29T11:22:14.750Z
  Preview: "import Image from 'next/image'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / setWoningType / }: any) { / return ( / <div className="space-y-12"> / <div..."
- components/Faq.tsx | 71 lines | 2765 chars | hash bc96fb7b690d
  Last snapshot: 2026-09-28T09:09:14.836Z
  Preview: "'use client'; / import { useState } from 'react'; / interface FaqItem { / vraag: string; / antwoord: string; / } / interface FaqProps { / data: { / subtitel: string; / titel: string; / vragen: FaqItem[]; / }; / } / ex..."
- components/LoginScreen.tsx | 272 lines | 9890 chars | hash 5c2df540a650
  Last snapshot: 2026-09-28T08:54:35.326Z
  Preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / import Button from './Button'; / import { useRouter } from 'next/navigation'; / interfac..."
- components/MainContent.tsx | 199 lines | 8057 chars | hash 73ae74ec6663
  Last snapshot: 2026-09-28T08:49:47.331Z
  Preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useConfigurator } from '../lib/useConfigurator'; / import LoginScreen from '../components/LoginScreen'; / impor..."
- components/configurator/StepThreeVisuals.tsx | 286 lines | 14204 chars | hash cb600e2582ee
  Last snapshot: 2026-09-28T08:49:29.169Z
  Preview: "'use client'; / import { useState } from 'react'; / import Image from 'next/image'; / export default function StepThreeVisuals({ / stepTitle, / configuratorData, / designPakket / }: any) { / const rawPakketten = confi..."
- app/api/confirm/route.ts | 322 lines | 11980 chars | hash 5a7eaeff8b09
  Last snapshot: 2026-09-14T21:39:07.182Z
  Preview: "import { NextResponse } from 'next/server'; / import { Resend } from 'resend'; / const resend = new Resend(process.env.RESEND_API_KEY); / export async function POST(request: Request) { / try { / const body = await req..."
- components/ConfiguratorScreen.tsx | 207 lines | 8253 chars | hash c9eea385c9aa
  Last snapshot: 2026-09-14T20:18:37.108Z
  Preview: "'use client'; / import { useState, useEffect } from 'react'; / import Button from './Button'; / import StepOneWoning from './configurator/StepOnewoning'; / import StepTwoDesign from './configurator/StepTwoDesign'; / i..."
- components/configurator/StepFourConfirmation.tsx | 302 lines | 14641 chars | hash f97bde831204
  Last snapshot: 2026-09-08T09:49:11.578Z
  Preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from '../Button'; / interface StepFourConfirmationProps { /..."

## Recent Changes
### 2026-09-29T11:22:14.750Z | saved | components/configurator/StepOnewoning.tsx
- Summary: Line 24: replaced 1 line with 1 line.
- Before: 76 lines | 3,448 chars | hash ecde23ea6db7 | preview: "import Image from 'next/image'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / setWoningType / }: any) { / return ( / <div className="space-y-12"> / <div..."
- After: 76 lines | 3,448 chars | hash 568f8963cd5d | preview: "import Image from 'next/image'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / setWoningType / }: any) { / return ( / <div className="space-y-12"> / <div..."
- Previous fragment: "3"
- Current fragment: "2"

### 2026-09-28T09:09:14.836Z | saved | components/Faq.tsx
- Summary: Line 32: removed 1 line.
- Before: 71 lines | 2,783 chars | hash ef1212947373 | preview: "'use client'; / import { useState } from 'react'; / interface FaqItem { / vraag: string; / antwoord: string; / } / interface FaqProps { / data: { / subtitel: string; / titel: string; / vragen: FaqItem[]; / }; / } / ex..."
- After: 71 lines | 2,765 chars | hash bc96fb7b690d | preview: "'use client'; / import { useState } from 'react'; / interface FaqItem { / vraag: string; / antwoord: string; / } / interface FaqProps { / data: { / subtitel: string; / titel: string; / vragen: FaqItem[]; / }; / } / ex..."
- Previous fragment: "{/* Header */}"

### 2026-09-28T08:54:35.326Z | saved | components/LoginScreen.tsx
- Summary: Line 104: removed 2 lines.
- Before: 273 lines | 9,985 chars | hash c2e7ccb2f7c4 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / import Button from './Button'; / import { useRouter } from 'next/navigation'; / interfac..."
- After: 272 lines | 9,890 chars | hash 5c2df540a650 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / import Button from './Button'; / import { useRouter } from 'next/navigation'; / interfac..."
- Previous fragment: "// 4. Als alles akkoord is, opslaan in storage en doorgaan met de standaard submit-logica"

### 2026-09-28T08:54:18.867Z | saved | components/LoginScreen.tsx
- Summary: Line 116: replaced 1 line with 1 line.
- Before: 273 lines | 9,988 chars | hash 76c2ea0cdfc2 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / import Button from './Button'; / import { useRouter } from 'next/navigation'; / interfac..."
- After: 273 lines | 9,985 chars | hash c2e7ccb2f7c4 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / import Button from './Button'; / import { useRouter } from 'next/navigation'; / interfac..."
- Previous fragment: "[2rem]"
- Current fragment: "4xl"

### 2026-09-28T08:54:05.863Z | saved | components/LoginScreen.tsx
- Summary: Saved without a textual diff.
- Before: 273 lines | 9,988 chars | hash 76c2ea0cdfc2 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / import Button from './Button'; / import { useRouter } from 'next/navigation'; / interfac..."
- After: 273 lines | 9,988 chars | hash 76c2ea0cdfc2 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / import Button from './Button'; / import { useRouter } from 'next/navigation'; / interfac..."

### 2026-09-28T08:53:56.767Z | saved | components/LoginScreen.tsx
- Summary: Saved without a textual diff.
- Before: 273 lines | 9,988 chars | hash 76c2ea0cdfc2 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / import Button from './Button'; / import { useRouter } from 'next/navigation'; / interfac..."
- After: 273 lines | 9,988 chars | hash 76c2ea0cdfc2 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / import Button from './Button'; / import { useRouter } from 'next/navigation'; / interfac..."

### 2026-09-28T08:53:12.799Z | saved | components/LoginScreen.tsx
- Summary: Saved without a textual diff.
- Before: 273 lines | 9,988 chars | hash 76c2ea0cdfc2 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / import Button from './Button'; / import { useRouter } from 'next/navigation'; / interfac..."
- After: 273 lines | 9,988 chars | hash 76c2ea0cdfc2 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / import Button from './Button'; / import { useRouter } from 'next/navigation'; / interfac..."

### 2026-09-28T08:52:35.730Z | saved | components/LoginScreen.tsx
- Summary: Line 128: replaced 1 line with 1 line.
- Before: 273 lines | 9,988 chars | hash 6bba180cc48a | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / import Button from './Button'; / import { useRouter } from 'next/navigation'; / interfac..."
- After: 273 lines | 9,988 chars | hash 76c2ea0cdfc2 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / import Button from './Button'; / import { useRouter } from 'next/navigation'; / interfac..."
- Previous fragment: "l"
- Current fragment: "k"

### 2026-09-28T08:52:33.784Z | saved | components/LoginScreen.tsx
- Summary: Line 128: replaced 1 line with 1 line.
- Before: 273 lines | 9,988 chars | hash ed3e473448a1 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / import Button from './Button'; / import { useRouter } from 'next/navigation'; / interfac..."
- After: 273 lines | 9,988 chars | hash 6bba180cc48a | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / import Button from './Button'; / import { useRouter } from 'next/navigation'; / interfac..."
- Previous fragment: "-medium text-dark"
- Current fragment: "medium text-darl"

### 2026-09-28T08:51:49.904Z | saved | components/LoginScreen.tsx
- Summary: Line 116: replaced 34 lines with 34 lines.
- Before: 273 lines | 10,005 chars | hash d21d8749caec | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / import Button from './Button'; / import { useRouter } from 'next/navigation'; / interfac..."
- After: 273 lines | 9,988 chars | hash ed3e473448a1 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / import Button from './Button'; / import { useRouter } from 'next/navigation'; / interfac..."
- Previous fragment: "[33.75rem] relative border border-white/10 shadow-2xl overflow-hidden flex flex-col justify-between rounded-[2rem] px-5 py-8 sm:px-14 sm:py-12 text-center space-y-6" / style={{..."
- Current fragment: "135 relative border border-white/10 shadow-2xl overflow-hidden flex flex-col justify-between rounded-[2rem] px-5 py-8 sm:px-14 sm:py-12 text-center space-y-6" / style={{ / backg..."

### 2026-09-28T08:49:47.331Z | saved | components/MainContent.tsx
- Summary: Line 159: inserted 1 line.
- Before: 199 lines | 8,056 chars | hash 27021f1e3e42 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useConfigurator } from '../lib/useConfigurator'; / import LoginScreen from '../components/LoginScreen'; / impor..."
- After: 199 lines | 8,057 chars | hash 73ae74ec6663 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useConfigurator } from '../lib/useConfigurator'; / import LoginScreen from '../components/LoginScreen'; / impor..."
- Current fragment: "."

### 2026-09-28T08:49:29.169Z | saved | components/configurator/StepThreeVisuals.tsx
- Summary: Line 1: inserted 286 lines.
- Before: 0 lines | 0 chars | hash empty
- After: 286 lines | 14,204 chars | hash cb600e2582ee | preview: "'use client'; / import { useState } from 'react'; / import Image from 'next/image'; / export default function StepThreeVisuals({ / stepTitle, / configuratorData, / designPakket / }: any) { / const rawPakketten = confi..."
- Current fragment: "'use client'; / import { useState } from 'react'; / import Image from 'next/image'; / export default function StepThreeVisuals({ / stepTitle, / configuratorData, / designPakket..."

### 2026-09-28T08:48:45.722Z | saved | components/configurator/StepThreeVisuals.tsx
- Summary: Line 123: inserted 1 line.
- Before: 286 lines | 14,202 chars | hash a8749c4e786c | preview: "'use client'; / import { useState } from 'react'; / import Image from 'next/image'; / export default function StepThreeVisuals({ / stepTitle, / configuratorData, / designPakket / }: any) { / const rawPakketten = confi..."
- After: 286 lines | 14,203 chars | hash bdd478f6b8d5 | preview: "'use client'; / import { useState } from 'react'; / import Image from 'next/image'; / export default function StepThreeVisuals({ / stepTitle, / configuratorData, / designPakket / }: any) { / const rawPakketten = confi..."
- Current fragment: "."

### 2026-09-28T08:48:29.716Z | saved | components/configurator/StepThreeVisuals.tsx
- Summary: Line 234: replaced 1 line with 1 line.
- Before: 286 lines | 14,198 chars | hash fe9bfe2f15f6 | preview: "'use client'; / import { useState } from 'react'; / import Image from 'next/image'; / export default function StepThreeVisuals({ / stepTitle, / configuratorData, / designPakket / }: any) { / const rawPakketten = confi..."
- After: 286 lines | 14,202 chars | hash a8749c4e786c | preview: "'use client'; / import { useState } from 'react'; / import Image from 'next/image'; / export default function StepThreeVisuals({ / stepTitle, / configuratorData, / designPakket / }: any) { / const rawPakketten = confi..."
- Previous fragment: "Meer"
- Current fragment: "Volgende"

### 2026-09-28T08:48:25.049Z | saved | components/configurator/StepThreeVisuals.tsx
- Summary: Saved without a textual diff.
- Before: 286 lines | 14,198 chars | hash fe9bfe2f15f6 | preview: "'use client'; / import { useState } from 'react'; / import Image from 'next/image'; / export default function StepThreeVisuals({ / stepTitle, / configuratorData, / designPakket / }: any) { / const rawPakketten = confi..."
- After: 286 lines | 14,198 chars | hash fe9bfe2f15f6 | preview: "'use client'; / import { useState } from 'react'; / import Image from 'next/image'; / export default function StepThreeVisuals({ / stepTitle, / configuratorData, / designPakket / }: any) { / const rawPakketten = confi..."


## Hot Files
- components/configurator/StepThreeVisuals.tsx (11 tracked changes)
- components/LoginScreen.tsx (10 tracked changes)
- components/MainContent.tsx (8 tracked changes)
- app/api/confirm/route.ts (5 tracked changes)
- components/ConfiguratorScreen.tsx (2 tracked changes)
- app/dashboard/page.tsx (1 tracked changes)
- components/configurator/StepFourConfirmation.tsx (1 tracked changes)
- components/configurator/StepOnewoning.tsx (1 tracked changes)

## Git Snapshot
- Branch: main
- HEAD: 2026-09-14 12bcd72 removed unwanted padding
- Working tree summary: 8 modifieds
- M components/Faq.tsx
- M components/LoginScreen.tsx
- M components/MainContent.tsx
- M components/configurator/StepOnewoning.tsx
- M components/configurator/StepThreeVisuals.tsx
- M graphify-out/WORKSPACE_MEMORY.md
- M workspace.json
- M workspacememory.md

## GitHub Snapshot
GitHub Repository: marketing-smartheads/nomi-configurator
Visibility: public | Default branch: main
Stars: 0 | Forks: 0 | Open issues: 0

Latest commit on main:
- 12bcd72 by Bas van Dooremalen on 2026-09-14
  removed unwanted padding

URL: https://github.com/marketing-smartheads/nomi-configurator

## Graphify Snapshot
Graphify report not found. Generate Graphify output if you want architecture-aware memory excerpts here.

## Project Planner
- Project planner is not configured yet. Enable it in the chat panel to generate a time-based todo list and progress rescue briefs.

## Agent Notes
- If a future task asks what changed recently, start with `Recent Changes`, `Tracked Snapshots`, `Hot Files`, and `Git Snapshot`.
- If a future task asks how the project is organized, combine this file with `graphify-out/GRAPH_REPORT.md`.
- If a future task needs repository-level context, use `Package Snapshot`, the GitHub snapshot, and the Graphify snapshot before rescanning broad parts of the repo.
