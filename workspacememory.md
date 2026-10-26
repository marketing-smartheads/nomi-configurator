# Workspace Memory
This file is maintained automatically by Code Janitor so Claude, Codex, Bob, and any other AI agent can reuse repo context without rescanning everything from scratch.
Generated: 2026-10-26T14:32:03.856Z
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
- Last activity: 2026-10-26T14:32:01.297Z
## Workspace Focus
- Active file in focus: components/configurator/StepOnewoning.tsx
- Hottest files right now: lib/cms.ts (8), components/configurator/StepFourConfirmation.tsx (6), components/configurator/StepOnewoning.tsx (6), components/ConfiguratorScreen.tsx (5)
- Suggested starting points: components/configurator/StepOnewoning.tsx, lib/cms.ts, components/configurator/StepFourConfirmation.tsx, components/ConfiguratorScreen.tsx, components/VoucherWelcomeModal.tsx, app/download/page.tsx
## Current Workspace
- Active file: components/configurator/StepOnewoning.tsx
- Tracked files in snapshot: 69
- Top-level areas: public (21), components (18), [root] (15), app (12), lib (3)
- Primary file types: .tsx (24), .svg (9), .ts (9), .json (4), .md (4), .woff (4), .woff2 (4), .png (3)
- Key files: .gitignore, AGENTS.md, README.md, package-lock.json, package.json, tsconfig.json
## Package Snapshot
- Package: tg-configurator v0.1.0
- Package manager: not declared
- Scripts: dev, build, start, lint
- Runtime dependencies: client-zip, next, react, react-dom, react-icons, react-player, resend
- Dev dependencies: @tailwindcss/postcss, @types/node, @types/react, @types/react-dom, eslint, eslint-config-next, tailwindcss, typescript
## Current Stack
- Logged change events: 40
- Change mix: save (36), create (4)
- Remembered file snapshots: 44
- Working tree summary: 4 modifieds
## Tracked Snapshots
- components/configurator/StepOnewoning.tsx | 100 lines | 4447 chars | hash 99a300fde68a
  Last snapshot: 2026-10-26T14:32:01.297Z
  Preview: "'use client'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / selectedIndeling, / setSelectedIndeling / }: any) { / // Filter de lijst op basis van het wo..."
- components/VoucherWelcomeModal.tsx | 96 lines | 3533 chars | hash b0287afaa956
  Last snapshot: 2026-10-15T12:55:29.900Z
  Preview: "'use client'; / import { useState, useEffect } from 'react'; / import { useSearchParams, useRouter } from 'next/navigation'; / import Button from './Button'; / export default function VoucherWelcomeModal() { / const s..."
- app/voucher/page.tsx | 19 lines | 563 chars | hash 0ffd40656a77
  Last snapshot: 2026-10-15T12:52:25.240Z
  Preview: "import { getPageData } from '@/lib/cms'; / import MainContent from '@/components/MainContent'; / import VoucherWelcomeModal from '@/components/VoucherWelcomeModal'; / export default async function VoucherLandingPage()..."
- app/page.tsx | 17 lines | 426 chars | hash 0d94bfd3ea1f
  Last snapshot: 2026-10-15T12:32:15.183Z
  Preview: "import { getPageData } from '@/lib/cms'; / import MainContent from '@/components/MainContent'; / import VoucherParamHandler from '@/components/VoucherParamHandler'; / export default async function Home() { / const { s..."
- components/VoucherParamHandler.tsx | 20 lines | 598 chars | hash 06ad36daf3da
  Last snapshot: 2026-10-15T12:31:55.849Z
  Preview: "'use client'; / import { useEffect } from 'react'; / import { useSearchParams } from 'next/navigation'; / export default function VoucherParamHandler() { / const searchParams = useSearchParams(); / useEffect(() => { /..."
- components/configurator/StepFourConfirmation.tsx | 484 lines | 22459 chars | hash 6cb8208e9f8a
  Last snapshot: 2026-10-13T08:02:12.530Z
  Preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from '../Button'; / // Partner voor de documentatielijst. /..."
- components/ConfiguratorScreen.tsx | 251 lines | 9757 chars | hash 934003a60b39
  Last snapshot: 2026-10-13T07:41:04.942Z
  Preview: "'use client'; / import { useState, useEffect } from 'react'; / import Button from './Button'; / import StepOneWoning from './configurator/StepOnewoning'; / import StepTwoDesign from './configurator/StepTwoDesign'; / i..."
- components/configurator/StepTwoDesign.tsx | 160 lines | 6478 chars | hash 46f4d92c2206
  Last snapshot: 2026-10-13T07:02:02.608Z
  Preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / // Vaste materialenlijsten per designpakket op basis van feedback Thomas de Gier / const..."

## Recent Changes
### 2026-10-26T14:32:01.297Z | saved | components/configurator/StepOnewoning.tsx
- Summary: Line 1: replaced 112 lines with 94 lines.
- Before: 118 lines | 5,390 chars | hash 7d3f73a5ba32 | preview: "import { useEffect } from 'react'; / import Image from 'next/image'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / setWoningType / }: any) { / // Filter..."
- After: 100 lines | 4,447 chars | hash 99a300fde68a | preview: "'use client'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / selectedIndeling, / setSelectedIndeling / }: any) { / // Filter de lijst op basis van het wo..."
- Previous fragment: "import { useEffect } from 'react'; / import Image from 'next/image'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType,..."
- Current fragment: "'use client'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / selectedIndeling, / setSelectedIndeling / }: any) {..."

### 2026-10-15T12:55:29.900Z | saved | components/VoucherWelcomeModal.tsx
- Summary: Line 84: inserted 1 line.
- Before: 96 lines | 3,522 chars | hash 14d64b1e13cc | preview: "'use client'; / import { useState, useEffect } from 'react'; / import { useSearchParams, useRouter } from 'next/navigation'; / import Button from './Button'; / export default function VoucherWelcomeModal() { / const s..."
- After: 96 lines | 3,533 chars | hash b0287afaa956 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import { useSearchParams, useRouter } from 'next/navigation'; / import Button from './Button'; / export default function VoucherWelcomeModal() { / const s..."
- Current fragment: "text-white"

### 2026-10-15T12:53:06.201Z | saved | components/VoucherWelcomeModal.tsx
- Summary: Saved without a textual diff.
- Before: 96 lines | 3,522 chars | hash 14d64b1e13cc | preview: "'use client'; / import { useState, useEffect } from 'react'; / import { useSearchParams, useRouter } from 'next/navigation'; / import Button from './Button'; / export default function VoucherWelcomeModal() { / const s..."
- After: 96 lines | 3,522 chars | hash 14d64b1e13cc | preview: "'use client'; / import { useState, useEffect } from 'react'; / import { useSearchParams, useRouter } from 'next/navigation'; / import Button from './Button'; / export default function VoucherWelcomeModal() { / const s..."

### 2026-10-15T12:52:53.130Z | saved | components/VoucherWelcomeModal.tsx
- Summary: Line 1: inserted 96 lines.
- Before: 0 lines | 0 chars | hash empty
- After: 96 lines | 3,522 chars | hash 14d64b1e13cc | preview: "'use client'; / import { useState, useEffect } from 'react'; / import { useSearchParams, useRouter } from 'next/navigation'; / import Button from './Button'; / export default function VoucherWelcomeModal() { / const s..."
- Current fragment: "'use client'; / import { useState, useEffect } from 'react'; / import { useSearchParams, useRouter } from 'next/navigation'; / import Button from './Button'; / export default fu..."

### 2026-10-15T12:52:48.563Z | created | components/VoucherWelcomeModal.tsx
- Summary: Created file.
- After: 0 lines | 0 chars | hash empty

### 2026-10-15T12:52:25.240Z | saved | app/voucher/page.tsx
- Summary: Line 1: inserted 19 lines.
- Before: 0 lines | 0 chars | hash empty
- After: 19 lines | 563 chars | hash 0ffd40656a77 | preview: "import { getPageData } from '@/lib/cms'; / import MainContent from '@/components/MainContent'; / import VoucherWelcomeModal from '@/components/VoucherWelcomeModal'; / export default async function VoucherLandingPage()..."
- Current fragment: "import { getPageData } from '@/lib/cms'; / import MainContent from '@/components/MainContent'; / import VoucherWelcomeModal from '@/components/VoucherWelcomeModal'; / export def..."

### 2026-10-15T12:52:19.481Z | created | app/voucher/page.tsx
- Summary: Created file.
- After: 0 lines | 0 chars | hash empty

### 2026-10-15T12:52:13.678Z | created | app/voucher
- Summary: Created file.

### 2026-10-15T12:32:15.183Z | saved | app/page.tsx
- Summary: Line 3: replaced 9 lines with 13 lines.
- Before: 13 lines | 308 chars | hash e95adef2762a | preview: "import { getPageData } from '@/lib/cms'; / import MainContent from '@/components/MainContent'; / export default async function Home() { / const { sections, configuratorData } = await getPageData(); / return ( / <MainC..."
- After: 17 lines | 426 chars | hash 0d94bfd3ea1f | preview: "import { getPageData } from '@/lib/cms'; / import MainContent from '@/components/MainContent'; / import VoucherParamHandler from '@/components/VoucherParamHandler'; / export default async function Home() { / const { s..."
- Previous fragment: "export default async function Home() { / const { sections, configuratorData } = await getPageData(); / return ( / <MainContent / sections={sections} / configuratorData={configur..."
- Current fragment: "import VoucherParamHandler from '@/components/VoucherParamHandler'; / export default async function Home() { / const { sections, configuratorData } = await getPageData(); / retu..."

### 2026-10-15T12:31:55.849Z | saved | components/VoucherParamHandler.tsx
- Summary: Line 1: inserted 20 lines.
- Before: 0 lines | 0 chars | hash empty
- After: 20 lines | 598 chars | hash 06ad36daf3da | preview: "'use client'; / import { useEffect } from 'react'; / import { useSearchParams } from 'next/navigation'; / export default function VoucherParamHandler() { / const searchParams = useSearchParams(); / useEffect(() => { /..."
- Current fragment: "'use client'; / import { useEffect } from 'react'; / import { useSearchParams } from 'next/navigation'; / export default function VoucherParamHandler() { / const searchParams =..."

### 2026-10-15T12:31:38.139Z | created | components/VoucherParamHandler.tsx
- Summary: Created file.
- After: 0 lines | 0 chars | hash empty

### 2026-10-13T08:02:12.530Z | saved | components/configurator/StepFourConfirmation.tsx
- Summary: Line 94: replaced 314 lines with 314 lines.
- Before: 484 lines | 22,609 chars | hash ab9ef7b47f37 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from '../Button'; / // Partner voor de documentatielijst. /..."
- After: 484 lines | 22,459 chars | hash 6cb8208e9f8a | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from '../Button'; / // Partner voor de documentatielijst. /..."
- Previous fragment: "const partnersTitel = configuratorData?.geselecteerdePartnersTitel || configuratorData?.geselecteerde_partners_titel || "Geselecteerde partners"; / const partnersOmschrijving =..."
- Current fragment: "// CMS-titel flexibel houden, maar standaard "Partners Nomi" tonen / const cmsPartnersTitel = configuratorData?.geselecteerdePartnersTitel || configuratorData?.geselecteerde_par..."

### 2026-10-13T07:55:04.620Z | saved | components/configurator/StepOnewoning.tsx
- Summary: Line 86: removed 1 line.
- Before: 118 lines | 5,440 chars | hash 6f56c94c4741 | preview: "import { useEffect } from 'react'; / import Image from 'next/image'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / setWoningType / }: any) { / // Filter..."
- After: 118 lines | 5,390 chars | hash 7d3f73a5ba32 | preview: "import { useEffect } from 'react'; / import Image from 'next/image'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / setWoningType / }: any) { / // Filter..."
- Previous fragment: "transition-transform duration-500 hover:scale-105"

### 2026-10-13T07:53:39.223Z | saved | components/configurator/StepOnewoning.tsx
- Summary: Line 80: replaced 10 lines with 14 lines.
- Before: 114 lines | 5,192 chars | hash 16186b6788a0 | preview: "import { useEffect } from 'react'; / import Image from 'next/image'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / setWoningType / }: any) { / // Filter..."
- After: 118 lines | 5,440 chars | hash 6f56c94c4741 | preview: "import { useEffect } from 'react'; / import Image from 'next/image'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / setWoningType / }: any) { / // Filter..."
- Previous fragment: "h-64 bg-secondary rounded-2xl mb-6 relative overflow-hidden flex items-center justify-center text-[11px] text-muted border border-dark/5"> / {imageUrl ? ( / <Image / src={imageU..."
- Current fragment: "aspect-16/10 bg-secondary rounded-2xl mb-6 relative overflow-hidden flex items-center justify-center text-[11px] text-muted border border-dark/5"> / {imageUrl ? ( / <Image / src..."

### 2026-10-13T07:49:03.469Z | saved | components/configurator/StepOnewoning.tsx
- Summary: Line 15: replaced 70 lines with 86 lines.
- Before: 98 lines | 4,508 chars | hash 25f960732805 | preview: "import { useEffect } from 'react'; / import Image from 'next/image'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / setWoningType / }: any) { / // Filter..."
- After: 114 lines | 5,192 chars | hash 16186b6788a0 | preview: "import { useEffect } from 'react'; / import Image from 'next/image'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / setWoningType / }: any) { / // Filter..."
- Previous fragment: "// Zorg voor een flexibele match (bijv. "type a" === "type a") / return typeNaam.toLowerCase().replaceAll(' ', '') === woningType.toLowerCase().replaceAll(' ', ''); / }) / : won..."
- Current fragment: "return typeNaam.toLowerCase().replaceAll(' ', '') === woningType.toLowerCase().replaceAll(' ', ''); / }) / : woningTypenLijst; / // Automatisch de enige gefilterde optie selecte..."


## Hot Files
- lib/cms.ts (8 tracked changes)
- components/configurator/StepFourConfirmation.tsx (6 tracked changes)
- components/configurator/StepOnewoning.tsx (6 tracked changes)
- components/ConfiguratorScreen.tsx (5 tracked changes)
- components/VoucherWelcomeModal.tsx (4 tracked changes)
- app/download/page.tsx (2 tracked changes)
- app/voucher/page.tsx (2 tracked changes)
- components/VoucherParamHandler.tsx (2 tracked changes)

## Git Snapshot
- Branch: main
- HEAD: 2026-10-15 1677305 changed text button to white
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
- 1677305 by Bas van Dooremalen on 2026-10-15
  changed text button to white

URL: https://github.com/marketing-smartheads/nomi-configurator

## Graphify Snapshot
Graphify report not found. Generate Graphify output if you want architecture-aware memory excerpts here.

## Project Planner
- Project planner is not configured yet. Enable it in the chat panel to generate a time-based todo list and progress rescue briefs.

## Agent Notes
- If a future task asks what changed recently, start with `Recent Changes`, `Tracked Snapshots`, `Hot Files`, and `Git Snapshot`.
- If a future task asks how the project is organized, combine this file with `graphify-out/GRAPH_REPORT.md`.
- If a future task needs repository-level context, use `Package Snapshot`, the GitHub snapshot, and the Graphify snapshot before rescanning broad parts of the repo.
