# Workspace Memory
This file is maintained automatically by Code Janitor so Claude, Codex, Bob, and any other AI agent can reuse repo context without rescanning everything from scratch.
Generated: 2026-11-17T18:20:22.463Z
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
- Last activity: 2026-11-17T18:20:19.767Z
## Workspace Focus
- Active file in focus: components/LoginScreen.tsx
- Hottest files right now: components/configurator/StepFourConfirmation.tsx (15), components/ConfiguratorScreen.tsx (12), components/configurator/StepThreeVisuals.tsx (9), components/configurator/StepTwoDesign.tsx (2)
- Suggested starting points: components/LoginScreen.tsx, components/configurator/StepFourConfirmation.tsx, components/ConfiguratorScreen.tsx, components/configurator/StepThreeVisuals.tsx, components/configurator/StepTwoDesign.tsx, components/configurator/StepOnewoning.tsx
## Current Workspace
- Active file: components/LoginScreen.tsx
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
- components/LoginScreen.tsx | 280 lines | 9944 chars | hash 0900a7d9f405
  Last snapshot: 2026-11-17T18:20:19.767Z
  Preview: "// components/LoginScreen.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / import Button from './Button'; / import { useRouter } fr..."
- components/configurator/StepFourConfirmation.tsx | 595 lines | 27086 chars | hash 5bfa6afb5a26
  Last snapshot: 2026-11-17T18:11:33.943Z
  Preview: "// components/configurator/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from..."
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

### 2026-11-17T17:29:46.178Z | saved | components/ConfiguratorScreen.tsx
- Summary: Line 6: replaced 2 lines with 2 lines.
- Before: 131 lines | 5,126 chars | hash af5d7e4cff12 | preview: "// components/ConfiguratorScreen.tsx / 'use client'; / import { useState } from 'react'; / import StepOneWoning from './configurator/StepOnewoning'; / import StepTwoDesign from './StepTwoDesign'; / import StepThreeVis..."
- After: 131 lines | 5,152 chars | hash 52285c4723da | preview: "// components/ConfiguratorScreen.tsx / 'use client'; / import { useState } from 'react'; / import StepOneWoning from './configurator/StepOnewoning'; / import StepTwoDesign from './configurator/StepTwoDesign'; / import..."
- Previous fragment: "StepTwoDesign'; / import StepThreeVisuals from '."
- Current fragment: "configurator/StepTwoDesign'; / import StepThreeVisuals from './configurator"

### 2026-11-17T17:27:41.822Z | saved | components/ConfiguratorScreen.tsx
- Summary: Line 1: replaced 598 lines with 128 lines.
- Before: 601 lines | 27,476 chars | hash c601ec4cc066 | preview: "// components/configurator/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from..."
- After: 131 lines | 5,126 chars | hash af5d7e4cff12 | preview: "// components/ConfiguratorScreen.tsx / 'use client'; / import { useState } from 'react'; / import StepOneWoning from './configurator/StepOnewoning'; / import StepTwoDesign from './StepTwoDesign'; / import StepThreeVis..."
- Previous fragment: "configurator/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigati..."
- Current fragment: "ConfiguratorScreen.tsx / 'use client'; / import { useState } from 'react'; / import StepOneWoning from './configurator/StepOnewoning'; / import StepTwoDesign from './StepTwoDesi..."

### 2026-11-17T17:23:28.924Z | saved | components/ConfiguratorScreen.tsx
- Summary: Line 30: replaced 118 lines with 120 lines.
- Before: 165 lines | 6,527 chars | hash 4ba5250ee896 | preview: "// components/ConfiguratorScreen.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import StepOneWoning from './configurator/StepOnewoning'; / import StepTwoDesign from './configurator/StepTwoDesign..."
- After: 167 lines | 6,688 chars | hash 9d21b31f7f64 | preview: "// components/ConfiguratorScreen.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import StepOneWoning from './configurator/StepOnewoning'; / import StepTwoDesign from './configurator/StepTwoDesign..."
- Previous fragment: "// Onthoud de actieve stap bij een refresh via sessionStorage (valt terug op stap 1) / const [currentStep, setCurrentStep] = useState<number>(() => { / if (typeof window !== 'un..."
- Current fragment: "const data = configuratorData?.configurator || configuratorData; / const rawStappen = data?.stappenBalk || data?.stappen_balk || []; / const stappenBalk = Array.isArray(rawStapp..."

### 2026-11-17T17:20:19.369Z | saved | components/ConfiguratorScreen.tsx
- Summary: Line 14: replaced 19 lines with 34 lines.
- Before: 150 lines | 5,810 chars | hash c18cfa19aec8 | preview: "// components/ConfiguratorScreen.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import StepOneWoning from './configurator/StepOnewoning'; / import StepTwoDesign from './configurator/StepTwoDesign..."
- After: 165 lines | 6,527 chars | hash 4ba5250ee896 | preview: "// components/ConfiguratorScreen.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import StepOneWoning from './configurator/StepOnewoning'; / import StepTwoDesign from './configurator/StepTwoDesign..."
- Previous fragment: "} / export default function ConfiguratorScreen({ / configuratorData, / initialWoningType, / initialDesignPakket, / }: ConfiguratorScreenProps) { / // Onthoud de actieve stap bij..."
- Current fragment: "woningType?: string | null; / setWoningType?: (type: string | null) => void; / designPakket?: string | null; / setDesignPakket?: (pakket: string | null) => void; / [key: string]..."

### 2026-11-17T17:18:43.605Z | saved | components/ConfiguratorScreen.tsx
- Summary: Line 5: replaced 3 lines with 3 lines.
- Before: 150 lines | 5,831 chars | hash d09aaa275840 | preview: "// components/ConfiguratorScreen.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import StepOneWoning from './configurator/StepOnewoning'; // Let op de kleine 'w' of juiste bestandsnaam / import S..."
- After: 150 lines | 5,810 chars | hash c18cfa19aec8 | preview: "// components/ConfiguratorScreen.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import StepOneWoning from './configurator/StepOnewoning'; / import StepTwoDesign from './configurator/StepTwoDesign..."
- Previous fragment: "// Let op de kleine 'w' of juiste bestandsnaam / import StepTwoDesign from './StepTwoDesign'; / import StepThreeVisuals from '."
- Current fragment: "import StepTwoDesign from './configurator/StepTwoDesign'; / import StepThreeVisuals from './configurator"

### 2026-11-17T17:16:09.470Z | saved | components/ConfiguratorScreen.tsx
- Summary: Line 5: replaced 1 line with 1 line.
- Before: 150 lines | 5,784 chars | hash c6b183ef0fdb | preview: "// components/ConfiguratorScreen.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import StepOneWoning from './configurator/StepOneWoning'; / import StepTwoDesign from './StepTwoDesign'; / import S..."
- After: 150 lines | 5,831 chars | hash d09aaa275840 | preview: "// components/ConfiguratorScreen.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import StepOneWoning from './configurator/StepOnewoning'; // Let op de kleine 'w' of juiste bestandsnaam / import S..."
- Previous fragment: "Woning';"
- Current fragment: "woning'; // Let op de kleine 'w' of juiste bestandsnaam"

### 2026-11-17T17:15:59.127Z | saved | components/configurator/StepFourConfirmation.tsx
- Summary: Line 1: replaced 147 lines with 598 lines.
- Before: 150 lines | 5,831 chars | hash d09aaa275840 | preview: "// components/ConfiguratorScreen.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import StepOneWoning from './configurator/StepOnewoning'; // Let op de kleine 'w' of juiste bestandsnaam / import S..."
- After: 601 lines | 28,022 chars | hash b1f24751b3f3 | preview: "// components/configurator/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from..."
- Previous fragment: "ConfiguratorScreen.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import StepOneWoning from './configurator/StepOnewoning'; // Let op de kleine 'w' of juis..."
- Current fragment: "configurator/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigati..."

### 2026-11-17T17:15:54.240Z | saved | components/configurator/StepFourConfirmation.tsx
- Summary: Line 1: replaced 598 lines with 147 lines.
- Before: 601 lines | 28,022 chars | hash b1f24751b3f3 | preview: "// components/configurator/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from..."
- After: 150 lines | 5,831 chars | hash d09aaa275840 | preview: "// components/ConfiguratorScreen.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import StepOneWoning from './configurator/StepOnewoning'; // Let op de kleine 'w' of juiste bestandsnaam / import S..."
- Previous fragment: "configurator/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigati..."
- Current fragment: "ConfiguratorScreen.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import StepOneWoning from './configurator/StepOnewoning'; // Let op de kleine 'w' of juis..."

### 2026-11-17T17:11:31.082Z | saved | components/configurator/StepFourConfirmation.tsx
- Summary: Line 166: replaced 344 lines with 346 lines.
- Before: 599 lines | 27,839 chars | hash dabcea409f0f | preview: "// components/configurator/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from..."
- After: 601 lines | 28,022 chars | hash b1f24751b3f3 | preview: "// components/configurator/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from..."
- Previous fragment: "uw keuze en werken volgens onze richtlijnen. Zij nemen vrijblijvend contact met u op om u te informeren over de mogelijkheden.'; / const rawPartners = storedWoning?.partnerLijst..."
- Current fragment: "jouw keuze en werken volgens onze richtlijnen. Zij nemen vrijblijvend contact met je op om je te informeren over de mogelijkheden.'; / const rawPartners = storedWoning?.partnerL..."

### 2026-11-17T17:02:30.993Z | saved | components/ConfiguratorScreen.tsx
- Summary: Line 1: replaced 598 lines with 147 lines.
- Before: 601 lines | 28,076 chars | hash c7c4aa266ff2 | preview: "// components/configurator/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from..."
- After: 150 lines | 5,784 chars | hash c6b183ef0fdb | preview: "// components/ConfiguratorScreen.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import StepOneWoning from './configurator/StepOneWoning'; / import StepTwoDesign from './StepTwoDesign'; / import S..."
- Previous fragment: "configurator/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigati..."
- Current fragment: "ConfiguratorScreen.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import StepOneWoning from './configurator/StepOneWoning'; / import StepTwoDesign from './..."


## Hot Files
- components/configurator/StepFourConfirmation.tsx (15 tracked changes)
- components/ConfiguratorScreen.tsx (12 tracked changes)
- components/configurator/StepThreeVisuals.tsx (9 tracked changes)
- components/configurator/StepTwoDesign.tsx (2 tracked changes)
- components/configurator/StepOnewoning.tsx (1 tracked changes)
- components/LoginScreen.tsx (1 tracked changes)

## Git Snapshot
- Branch: main
- HEAD: 2026-11-17 66b540f fix(step4): add safe array check to stable 802d6ef layout to prevent undefined filter crash
- Working tree summary: 1 modified
- M components/LoginScreen.tsx

## GitHub Snapshot
GitHub Repository: marketing-smartheads/nomi-configurator
Visibility: public | Default branch: main
Stars: 0 | Forks: 0 | Open issues: 0

Latest commit on main:
- 66b540f by Bas van Dooremalen on 2026-11-17
  fix(step4): add safe array check to stable 802d6ef layout to prevent undefined filter crash

URL: https://github.com/marketing-smartheads/nomi-configurator

## Graphify Snapshot
Graphify report not found. Generate Graphify output if you want architecture-aware memory excerpts here.

## Project Planner
- Project planner is not configured yet. Enable it in the chat panel to generate a time-based todo list and progress rescue briefs.

## Agent Notes
- If a future task asks what changed recently, start with `Recent Changes`, `Tracked Snapshots`, `Hot Files`, and `Git Snapshot`.
- If a future task asks how the project is organized, combine this file with `graphify-out/GRAPH_REPORT.md`.
- If a future task needs repository-level context, use `Package Snapshot`, the GitHub snapshot, and the Graphify snapshot before rescanning broad parts of the repo.
