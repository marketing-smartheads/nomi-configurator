# Workspace Memory
This file is maintained automatically by Code Janitor so Claude, Codex, Bob, and any other AI agent can reuse repo context without rescanning everything from scratch.
Generated: 2026-11-16T14:08:53.250Z
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
- Last activity: 2026-11-16T14:08:50.327Z
## Workspace Focus
- Active file in focus: components/configurator/StepTwoDesign.tsx
- Hottest files right now: app/download/page.tsx (10), components/configurator/StepTwoDesign.tsx (7), app/dashboard/page.tsx (6), app/api/verify-voucher/route.ts (5)
- Suggested starting points: components/configurator/StepTwoDesign.tsx, app/download/page.tsx, app/dashboard/page.tsx, app/api/verify-voucher/route.ts, lib/cms.ts, app/api/auth/login/route.ts
## Current Workspace
- Active file: components/configurator/StepTwoDesign.tsx
- Tracked files in snapshot: 71
- Top-level areas: public (21), components (18), [root] (15), app (14), lib (3)
- Primary file types: .tsx (24), .ts (11), .svg (9), .json (4), .md (4), .woff (4), .woff2 (4), .png (3)
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
- components/configurator/StepTwoDesign.tsx | 219 lines | 9662 chars | hash 76facdd6978d
  Last snapshot: 2026-11-16T14:08:50.327Z
  Preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / export default function StepTwoDesign({ / stepTitle, / configuratorData, / designPakket,..."
- components/configurator/StepOnewoning.tsx | 127 lines | 5717 chars | hash 62bafaf91d9e
  Last snapshot: 2026-11-16T13:17:48.708Z
  Preview: "'use client'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / selectedIndeling, / setSelectedIndeling / }: any) { / const data = configuratorData?.configu..."
- app/api/verify-voucher/route.ts | 218 lines | 7299 chars | hash 4cc859d6c53a
  Last snapshot: 2026-11-16T13:09:16.604Z
  Preview: "import { NextResponse } from 'next/server'; / export const dynamic = 'force-dynamic'; / // 🛑 32 Verhuur-bouwnummers (Jongerius) die in de code en het dashboard geblokkeerd zijn / const VERHUUR_VOUCHERS = new Set([ /..."
- components/configurator/StepFourConfirmation.tsx | 361 lines | 17901 chars | hash f7fdb39517cd
  Last snapshot: 2026-11-12T10:49:37.611Z
  Preview: "// components/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from '../Button';..."
- components/configurator/StepThreeVisuals.tsx | 494 lines | 20251 chars | hash 3918fdaf7ddf
  Last snapshot: 2026-11-12T10:39:25.575Z
  Preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / export default function StepThreeVisuals({ / stepTitle, / configuratorData, / designPakket, / woningType / }: any) { / c..."
- app/dashboard/page.tsx | 415 lines | 20693 chars | hash 04b3d6a61487
  Last snapshot: 2026-11-12T06:52:19.528Z
  Preview: "'use client'; / import React, { useState, useEffect } from 'react'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / // Lijst van verhuur-vouchers die we uit het dashboard will..."
- lib/cms.ts | 316 lines | 9024 chars | hash 96f317a135a3
  Last snapshot: 2026-11-11T13:24:54.106Z
  Preview: "// lib/cms.ts / export async function getPageData() { / const query = ` / query GetConfiguratorPage { / page(id: "28", idType: DATABASE_ID) { / sections { / hero { / subtitel / titel / omschrijving / afbeelding { / no..."
- app/download/page.tsx | 418 lines | 20106 chars | hash 172d883371d9
  Last snapshot: 2026-11-11T13:12:34.040Z
  Preview: "'use client'; / import { useState, useEffect } from 'react'; / import { useRouter } from 'next/navigation'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / import { getPageDat..."

## Recent Changes
### 2026-11-16T14:08:50.327Z | saved | components/configurator/StepTwoDesign.tsx
- Summary: Line 112: inserted 1 line.
- Before: 219 lines | 9,651 chars | hash 95f84782fc37 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / export default function StepTwoDesign({ / stepTitle, / configuratorData, / designPakket,..."
- After: 219 lines | 9,662 chars | hash 76facdd6978d | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / export default function StepTwoDesign({ / stepTitle, / configuratorData, / designPakket,..."
- Current fragment: "sm:text-sm"

### 2026-11-16T14:01:26.333Z | saved | components/configurator/StepTwoDesign.tsx
- Summary: Line 106: removed 1 line.
- Before: 219 lines | 9,660 chars | hash 352962670873 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / export default function StepTwoDesign({ / stepTitle, / configuratorData, / designPakket,..."
- After: 219 lines | 9,651 chars | hash 95f84782fc37 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / export default function StepTwoDesign({ / stepTitle, / configuratorData, / designPakket,..."
- Previous fragment: "Stap 2 ·"

### 2026-11-16T14:01:21.707Z | saved | components/configurator/StepTwoDesign.tsx
- Summary: Saved without a textual diff.
- Before: 219 lines | 9,660 chars | hash 352962670873 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / export default function StepTwoDesign({ / stepTitle, / configuratorData, / designPakket,..."
- After: 219 lines | 9,660 chars | hash 352962670873 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / export default function StepTwoDesign({ / stepTitle, / configuratorData, / designPakket,..."

### 2026-11-16T14:01:10.079Z | saved | components/configurator/StepTwoDesign.tsx
- Summary: Line 112: removed 1 line.
- Before: 219 lines | 9,671 chars | hash 2161041e64cf | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / export default function StepTwoDesign({ / stepTitle, / configuratorData, / designPakket,..."
- After: 219 lines | 9,660 chars | hash 352962670873 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / export default function StepTwoDesign({ / stepTitle, / configuratorData, / designPakket,..."
- Previous fragment: "sm:text-sm"

### 2026-11-16T13:52:53.594Z | saved | components/configurator/StepTwoDesign.tsx
- Summary: Line 123: replaced 38 lines with 45 lines.
- Before: 212 lines | 9,434 chars | hash 2d7e4427fb95 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / export default function StepTwoDesign({ / stepTitle, / configuratorData, / designPakket,..."
- After: 219 lines | 9,671 chars | hash 2161041e64cf | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / export default function StepTwoDesign({ / stepTitle, / configuratorData, / designPakket,..."
- Previous fragment: "const pakketOmschrijving = pakket.pakketOmschrijving || pakket.pakket_omschrijving || ''; / const actueelGekozen = designPakket || (typeof window !== 'undefined' ? localStorage...."
- Current fragment: "// Haal de omschrijving zuiver uit het CMS veld (zonder hardcoded fallback) / const pakketOmschrijving = pakket.pakketOmschrijving || pakket.pakket_omschrijving || ''; / const a..."

### 2026-11-16T13:40:10.038Z | saved | components/configurator/StepTwoDesign.tsx
- Summary: Line 72: replaced 4 lines with 9 lines.
- Before: 207 lines | 9,312 chars | hash bd7debac65d2 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / export default function StepTwoDesign({ / stepTitle, / configuratorData, / designPakket,..."
- After: 212 lines | 9,434 chars | hash 2d7e4427fb95 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / export default function StepTwoDesign({ / stepTitle, / configuratorData, / designPakket,..."
- Previous fragment: "const pakkettenLijst = alleVerzameldePakketten.filter((pakket, index, self) => { / const t = (pakket.pakketTitel || pakket.pakket_titel || pakket.pakketId || pakket.pakket_id ||..."
- Current fragment: "// WATERDICHTE DUBBELEN-FILTER: Sorteer en filter op unieke titel/id via een Map / const uniekePakketMap = new Map(); / alleVerzameldePakketten.forEach((pakket) => { / const sch..."

### 2026-11-16T13:17:48.708Z | saved | components/configurator/StepOnewoning.tsx
- Summary: Line 55: removed 1 line.
- Before: 127 lines | 5,726 chars | hash a94e30c9f639 | preview: "'use client'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / selectedIndeling, / setSelectedIndeling / }: any) { / const data = configuratorData?.configu..."
- After: 127 lines | 5,717 chars | hash 62bafaf91d9e | preview: "'use client'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / selectedIndeling, / setSelectedIndeling / }: any) { / const data = configuratorData?.configu..."
- Previous fragment: "Stap 1 ·"

### 2026-11-16T13:09:16.604Z | saved | app/api/verify-voucher/route.ts
- Summary: Line 28: replaced 9 lines with 7 lines.
- Before: 220 lines | 7,360 chars | hash ce975addae9c | preview: "import { NextResponse } from 'next/server'; / export const dynamic = 'force-dynamic'; / // 🛑 32 Verhuur-bouwnummers (Jongerius) die in de code en het dashboard geblokkeerd zijn / const VERHUUR_VOUCHERS = new Set([ /..."
- After: 218 lines | 7,299 chars | hash 4cc859d6c53a | preview: "import { NextResponse } from 'next/server'; / export const dynamic = 'force-dynamic'; / // 🛑 32 Verhuur-bouwnummers (Jongerius) die in de code en het dashboard geblokkeerd zijn / const VERHUUR_VOUCHERS = new Set([ /..."
- Previous fragment: "Controleer of de vouchercode bij een verhuurwoning hoort / if (VERHUUR_VOUCHERS.has(cleanCode)) { / return NextResponse.json({ / success: true, / isVerhuur: true, / isBevestigd:..."
- Current fragment: "🛑 Strenge blokkade voor verhuurwoningen bij GET-requests (zoals rechtstreekse links) / if (VERHUUR_VOUCHERS.has(cleanCode)) { / return NextResponse.json({ / success: false, / i..."

### 2026-11-12T10:49:37.611Z | saved | components/configurator/StepFourConfirmation.tsx
- Summary: Line 250: removed 1 line.
- Before: 361 lines | 17,919 chars | hash 5581ebfa135c | preview: "// components/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from '../Button';..."
- After: 361 lines | 17,901 chars | hash f7fdb39517cd | preview: "// components/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from '../Button';..."
- Previous fragment: "max-w-2xl mx-auto"

### 2026-11-12T10:49:25.071Z | saved | components/configurator/StepFourConfirmation.tsx
- Summary: Line 250: replaced 1 line with 1 line.
- Before: 361 lines | 17,897 chars | hash 56051d42a992 | preview: "// components/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from '../Button';..."
- After: 361 lines | 17,919 chars | hash 5581ebfa135c | preview: "// components/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from '../Button';..."
- Previous fragment: "muted text-base leading-relaxed pt-2"
- Current fragment: "xs sm:text-sm text-muted leading-relaxed max-w-2xl mx-auto"

### 2026-11-12T10:39:25.575Z | saved | components/configurator/StepThreeVisuals.tsx
- Summary: Line 1: replaced 288 lines with 290 lines.
- Before: 492 lines | 20,311 chars | hash 230088061fb3 | preview: "// components/StepThreeVisuals.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / export default function StepThreeVisuals({ / stepTitle, / configuratorData, / desig..."
- After: 494 lines | 20,251 chars | hash 3918fdaf7ddf | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / export default function StepThreeVisuals({ / stepTitle, / configuratorData, / designPakket, / woningType / }: any) { / c..."
- Previous fragment: "// components/StepThreeVisuals.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / export default function StepThreeVisuals({..."
- Current fragment: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / export default function StepThreeVisuals({ / stepTitle, / configuratorData, / de..."

### 2026-11-12T10:39:16.276Z | saved | components/configurator/StepTwoDesign.tsx
- Summary: Line 1: replaced 108 lines with 110 lines.
- Before: 205 lines | 9,146 chars | hash 14bc4f3bcec2 | preview: "// components/StepTwoDesign.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / export default function StepTwoDesign({ / stepTitle, /..."
- After: 207 lines | 9,312 chars | hash bd7debac65d2 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / export default function StepTwoDesign({ / stepTitle, / configuratorData, / designPakket,..."
- Previous fragment: "// components/StepTwoDesign.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / export default..."
- Current fragment: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / export default function StepTwoDesign({ / stepTi..."

### 2026-11-12T10:38:57.892Z | saved | components/configurator/StepOnewoning.tsx
- Summary: Line 11: replaced 49 lines with 54 lines.
- Before: 122 lines | 5,571 chars | hash 7c52c9f0546f | preview: "'use client'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / selectedIndeling, / setSelectedIndeling / }: any) { / const gefilterdeLijst = woningType / ?..."
- After: 127 lines | 5,726 chars | hash a94e30c9f639 | preview: "'use client'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / selectedIndeling, / setSelectedIndeling / }: any) { / const data = configuratorData?.configu..."
- Previous fragment: "const gefilterdeLijst = woningType / ? woningTypenLijst.filter((item: any) => { / const typeNaam = item.typeNaam || item.type_naam || item.titel || ''; / return typeNaam.toLower..."
- Current fragment: "const data = configuratorData?.configurator || configuratorData; / const stappenBalk = data?.stappenBalk || data?.stappen_balk || []; / const stap1Omschrijving = stappenBalk[0]?..."

### 2026-11-12T10:34:56.696Z | saved | lib/cms.ts

### 2026-11-12T06:52:19.528Z | saved | app/dashboard/page.tsx
- Summary: Line 1: inserted 415 lines.
- Before: 0 lines | 0 chars | hash empty
- After: 415 lines | 20,693 chars | hash 04b3d6a61487 | preview: "'use client'; / import React, { useState, useEffect } from 'react'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / // Lijst van verhuur-vouchers die we uit het dashboard will..."
- Current fragment: "'use client'; / import React, { useState, useEffect } from 'react'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / // Lijst van verhuu..."


## Hot Files
- app/download/page.tsx (10 tracked changes)
- components/configurator/StepTwoDesign.tsx (7 tracked changes)
- app/dashboard/page.tsx (6 tracked changes)
- app/api/verify-voucher/route.ts (5 tracked changes)
- lib/cms.ts (4 tracked changes)
- app/api/auth/login/route.ts (3 tracked changes)
- components/configurator/StepFourConfirmation.tsx (2 tracked changes)
- components/configurator/StepOnewoning.tsx (2 tracked changes)

## Git Snapshot
- Branch: main
- HEAD: 2026-11-16 ff2c621 fix(step2): ensure unique cms package descriptions are correctly rendered per card
- Working tree summary: 4 modifieds
- M components/configurator/StepTwoDesign.tsx
- M graphify-out/WORKSPACE_MEMORY.md
- M workspace.json
- M workspacememory.md

## GitHub Snapshot
GitHub Repository: marketing-smartheads/nomi-configurator
Visibility: public | Default branch: main
Stars: 0 | Forks: 0 | Open issues: 0

Latest commit on main:
- ff2c621 by Bas van Dooremalen on 2026-11-16
  fix(step2): ensure unique cms package descriptions are correctly rendered per card

URL: https://github.com/marketing-smartheads/nomi-configurator

## Graphify Snapshot
Graphify report not found. Generate Graphify output if you want architecture-aware memory excerpts here.

## Project Planner
- Project planner is not configured yet. Enable it in the chat panel to generate a time-based todo list and progress rescue briefs.

## Agent Notes
- If a future task asks what changed recently, start with `Recent Changes`, `Tracked Snapshots`, `Hot Files`, and `Git Snapshot`.
- If a future task asks how the project is organized, combine this file with `graphify-out/GRAPH_REPORT.md`.
- If a future task needs repository-level context, use `Package Snapshot`, the GitHub snapshot, and the Graphify snapshot before rescanning broad parts of the repo.
