# Workspace Memory
This file is maintained automatically by Code Janitor so Claude, Codex, Bob, and any other AI agent can reuse repo context without rescanning everything from scratch.
Generated: 2026-10-26T15:14:56.430Z
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
- Last activity: 2026-10-26T15:14:54.076Z
## Workspace Focus
- Active file in focus: components/MainContent.tsx
- Hottest files right now: components/configurator/StepOnewoning.tsx (9), components/ConfiguratorScreen.tsx (8), components/configurator/StepFourConfirmation.tsx (5), components/VoucherWelcomeModal.tsx (4)
- Suggested starting points: components/MainContent.tsx, components/configurator/StepOnewoning.tsx, components/ConfiguratorScreen.tsx, components/configurator/StepFourConfirmation.tsx, components/VoucherWelcomeModal.tsx, lib/cms.ts
## Current Workspace
- Active file: components/MainContent.tsx
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
- Working tree summary: 1 modified
## Tracked Snapshots
- components/MainContent.tsx | 220 lines | 9176 chars | hash 2f54f2a9b999
  Last snapshot: 2026-10-26T15:14:54.076Z
  Preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useConfigurator } from '../lib/useConfigurator'; / import LoginScreen from '../components/LoginScreen'; / impor..."
- components/ConfiguratorScreen.tsx | 250 lines | 9599 chars | hash 6af3f7e817b2
  Last snapshot: 2026-10-26T15:10:32.454Z
  Preview: "'use client'; / import { useState, useEffect } from 'react'; / import Button from './Button'; / import StepOneWoning from './configurator/StepOnewoning'; / import StepTwoDesign from './configurator/StepTwoDesign'; / i..."
- components/configurator/StepOnewoning.tsx | 106 lines | 4670 chars | hash c684c361c24a
  Last snapshot: 2026-10-26T15:05:54.467Z
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

## Recent Changes
### 2026-10-26T15:14:54.076Z | saved | components/MainContent.tsx
- Summary: Line 27: replaced 172 lines with 165 lines.
- Before: 227 lines | 9,623 chars | hash f904222d275d | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useConfigurator } from '../lib/useConfigurator'; / import LoginScreen from '../components/LoginScreen'; / impor..."
- After: 220 lines | 9,176 chars | hash 2f54f2a9b999 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useConfigurator } from '../lib/useConfigurator'; / import LoginScreen from '../components/LoginScreen'; / impor..."
- Previous fragment: "handleLogin, handleSaveChoices / } = useConfigurator(); / const [isMounted, setIsMounted] = useState(false); / const [isReedsBevestigd, setIsReedsBevestigd] = useState(false); /..."
- Current fragment: "selectedIndeling, setSelectedIndeling, // <-- TOEGEVOEGD: Ophalen uit de hook / handleLogin, handleSaveChoices / } = useConfigurator(); / const [isMounted, setIsMounted] = useSt..."

### 2026-10-26T15:10:32.454Z | saved | components/ConfiguratorScreen.tsx
- Summary: Saved without a textual diff.
- Before: 250 lines | 9,599 chars | hash 6af3f7e817b2 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Button from './Button'; / import StepOneWoning from './configurator/StepOnewoning'; / import StepTwoDesign from './configurator/StepTwoDesign'; / i..."
- After: 250 lines | 9,599 chars | hash 6af3f7e817b2 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Button from './Button'; / import StepOneWoning from './configurator/StepOnewoning'; / import StepTwoDesign from './configurator/StepTwoDesign'; / i..."

### 2026-10-26T15:05:54.467Z | saved | components/configurator/StepOnewoning.tsx
- Summary: Line 12: replaced 53 lines with 59 lines.
- Before: 100 lines | 4,443 chars | hash e505e6d9f285 | preview: "'use client'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / selectedIndeling, / setSelectedIndeling / }: any) { / const gefilterdeLijst = woningType / ?..."
- After: 106 lines | 4,670 chars | hash c684c361c24a | preview: "'use client'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / selectedIndeling, / setSelectedIndeling / }: any) { / // Filter de lijst op basis van het wo..."
- Previous fragment: "const gefilterdeLijst = woningType / ? woningTypenLijst.filter((item: any) => { / const typeNaam = item.typeNaam || item.type_naam || item.titel || ''; / return typeNaam.toLower..."
- Current fragment: "// Filter de lijst op basis van het woningtype van de voucher / const gefilterdeLijst = woningType / ? woningTypenLijst.filter((item: any) => { / const typeNaam = item.typeNaam..."

### 2026-10-26T14:59:28.030Z | saved | components/configurator/StepOnewoning.tsx
- Summary: Line 12: replaced 83 lines with 82 lines.
- Before: 101 lines | 4,545 chars | hash 8e0fb7650573 | preview: "'use client'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / selectedIndeling, / setSelectedIndeling / }: any) { / // Filter de lijst op basis van het wo..."
- After: 100 lines | 4,443 chars | hash e505e6d9f285 | preview: "'use client'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / selectedIndeling, / setSelectedIndeling / }: any) { / const gefilterdeLijst = woningType / ?..."
- Previous fragment: "// Filter de lijst op basis van het woningtype van de voucher / const gefilterdeLijst = woningType / ? woningTypenLijst.filter((item: any) => { / const typeNaam = item.typeNaam..."
- Current fragment: "const gefilterdeLijst = woningType / ? woningTypenLijst.filter((item: any) => { / const typeNaam = item.typeNaam || item.type_naam || item.titel || ''; / return typeNaam.toLower..."

### 2026-10-26T14:47:36.836Z | saved | components/configurator/StepOnewoning.tsx
- Summary: Line 52: replaced 13 lines with 14 lines.
- Before: 100 lines | 4,447 chars | hash 99a300fde68a | preview: "'use client'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / selectedIndeling, / setSelectedIndeling / }: any) { / // Filter de lijst op basis van het wo..."
- After: 101 lines | 4,545 chars | hash 8e0fb7650573 | preview: "'use client'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / selectedIndeling, / setSelectedIndeling / }: any) { / // Filter de lijst op basis van het wo..."
- Previous fragment: "const isSelected = selectedIndeling?.indelingTitel === indelingTitel; / return ( / <button / key={indelingTitel + index} / type="button" / onClick={() => setSelectedIndeling(ite..."
- Current fragment: "// Controleer of deze specifieke indeling momenteel geselecteerd is / const isSelected = selectedIndeling?.indelingTitel === indelingTitel || selectedIndeling?.indeling_titel ==..."

### 2026-10-26T14:46:52.117Z | saved | components/ConfiguratorScreen.tsx
- Summary: Line 216: inserted 35 lines.
- Before: 216 lines | 8,406 chars | hash 1e25cdae80da | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Button from './Button'; / import StepOneWoning from './configurator/StepOnewoning'; / import StepTwoDesign from './configurator/StepTwoDesign'; / i..."
- After: 250 lines | 9,599 chars | hash 6af3f7e817b2 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Button from './Button'; / import StepOneWoning from './configurator/StepOnewoning'; / import StepTwoDesign from './configurator/StepTwoDesign'; / i..."
- Current fragment: "Pakket} / onConfirm={onConfirm} / onBack={handlePrevious} / loading={loading} / /> / )} / </div> / {/* ONDERSTE NAVIGATIE BALK */} / {currentStep !== 4 && ( / <div className="px..."

### 2026-10-26T14:46:47.228Z | saved | components/ConfiguratorScreen.tsx
- Summary: Line 13: replaced 239 lines with 204 lines.
- Before: 251 lines | 9,757 chars | hash 934003a60b39 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Button from './Button'; / import StepOneWoning from './configurator/StepOnewoning'; / import StepTwoDesign from './configurator/StepTwoDesign'; / i..."
- After: 216 lines | 8,406 chars | hash 1e25cdae80da | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Button from './Button'; / import StepOneWoning from './configurator/StepOnewoning'; / import StepTwoDesign from './configurator/StepTwoDesign'; / i..."
- Previous fragment: "loading, onBack, onConfirm, / configuratorData / }: any) { / // 1. Initialiseer currentStep vanuit localStorage (default is 1) / const [currentStep, setCurrentStep] = useState((..."
- Current fragment: "selectedIndeling, setSelectedIndeling, / loading, onBack, onConfirm, / configuratorData / }: any) { / // 1. Initialiseer currentStep vanuit localStorage (default is 1) / const [..."

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


## Hot Files
- components/configurator/StepOnewoning.tsx (9 tracked changes)
- components/ConfiguratorScreen.tsx (8 tracked changes)
- components/configurator/StepFourConfirmation.tsx (5 tracked changes)
- components/VoucherWelcomeModal.tsx (4 tracked changes)
- lib/cms.ts (4 tracked changes)
- app/voucher/page.tsx (2 tracked changes)
- components/VoucherParamHandler.tsx (2 tracked changes)
- .env.local (1 tracked changes)

## Git Snapshot
- Branch: main
- HEAD: 2026-10-26 85432ac Zorg dat setSelectedIndeling correct wordt meegegeven als functie aan ConfiguratorScreen
- Working tree summary: 1 modified
- M components/MainContent.tsx

## GitHub Snapshot
GitHub Repository: marketing-smartheads/nomi-configurator
Visibility: public | Default branch: main
Stars: 0 | Forks: 0 | Open issues: 0

Latest commit on main:
- 85432ac by Bas van Dooremalen on 2026-10-26
  Zorg dat setSelectedIndeling correct wordt meegegeven als functie aan ConfiguratorScreen

URL: https://github.com/marketing-smartheads/nomi-configurator

## Graphify Snapshot
Graphify report not found. Generate Graphify output if you want architecture-aware memory excerpts here.

## Project Planner
- Project planner is not configured yet. Enable it in the chat panel to generate a time-based todo list and progress rescue briefs.

## Agent Notes
- If a future task asks what changed recently, start with `Recent Changes`, `Tracked Snapshots`, `Hot Files`, and `Git Snapshot`.
- If a future task asks how the project is organized, combine this file with `graphify-out/GRAPH_REPORT.md`.
- If a future task needs repository-level context, use `Package Snapshot`, the GitHub snapshot, and the Graphify snapshot before rescanning broad parts of the repo.
