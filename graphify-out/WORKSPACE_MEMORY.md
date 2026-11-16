# Workspace Memory
This file is maintained automatically by Code Janitor so Claude, Codex, Bob, and any other AI agent can reuse repo context without rescanning everything from scratch.
Generated: 2026-11-16T15:06:42.849Z
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
- Last activity: 2026-11-16T15:06:40.332Z
## Workspace Focus
- Active file in focus: components/configurator/StepFourConfirmation.tsx
- Hottest files right now: components/configurator/StepTwoDesign.tsx (10), app/download/page.tsx (8), app/api/verify-voucher/route.ts (5), app/dashboard/page.tsx (5)
- Suggested starting points: components/configurator/StepFourConfirmation.tsx, components/configurator/StepTwoDesign.tsx, app/download/page.tsx, app/api/verify-voucher/route.ts, app/dashboard/page.tsx, lib/cms.ts
## Current Workspace
- Active file: components/configurator/StepFourConfirmation.tsx
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
- Working tree summary: 1 modified
## Tracked Snapshots
- components/configurator/StepFourConfirmation.tsx | 392 lines | 19972 chars | hash 3cc9d626399a
  Last snapshot: 2026-11-16T15:06:40.332Z
  Preview: "// components/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from '../Button';..."
- components/configurator/StepThreeVisuals.tsx | 495 lines | 20323 chars | hash 21d3217c9bba
  Last snapshot: 2026-11-16T14:30:34.311Z
  Preview: "// components/StepThreeVisuals.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / export default function StepThreeVisuals({ / stepTitle, / configuratorData, / desig..."
- components/configurator/StepTwoDesign.tsx | 272 lines | 12314 chars | hash 19f36b2caade
  Last snapshot: 2026-11-16T14:25:34.510Z
  Preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / export default function StepTwoDesign({ / stepTitle, / configuratorData, / designPakket,..."
- components/configurator/StepOnewoning.tsx | 127 lines | 5717 chars | hash 62bafaf91d9e
  Last snapshot: 2026-11-16T13:17:48.708Z
  Preview: "'use client'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / selectedIndeling, / setSelectedIndeling / }: any) { / const data = configuratorData?.configu..."
- app/api/verify-voucher/route.ts | 218 lines | 7299 chars | hash 4cc859d6c53a
  Last snapshot: 2026-11-16T13:09:16.604Z
  Preview: "import { NextResponse } from 'next/server'; / export const dynamic = 'force-dynamic'; / // 🛑 32 Verhuur-bouwnummers (Jongerius) die in de code en het dashboard geblokkeerd zijn / const VERHUUR_VOUCHERS = new Set([ /..."
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
### 2026-11-16T15:06:40.332Z | saved | components/configurator/StepFourConfirmation.tsx
- Summary: Line 128: replaced 131 lines with 136 lines.
- Before: 387 lines | 19,566 chars | hash 74acf90b8b68 | preview: "// components/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from '../Button';..."
- After: 392 lines | 19,972 chars | hash 3cc9d626399a | preview: "// components/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from '../Button';..."
- Previous fragment: "Rotsvaste ophaallogica voor partners (zowel uit de gematchte woningrij als fallback) / const rawPartners = storedWoning?.partnerLijst || storedWoning?.partner_lijst || data?.par..."
- Current fragment: "Haal dynamische partner koptekst en omschrijving op uit de bevestigingStap groep (ACF) / const partnersSectieTitel = bevData?.geselecteerdePartnersTitel || bevData?.geselecteerd..."

### 2026-11-16T14:55:27.956Z | saved | components/configurator/StepFourConfirmation.tsx
- Summary: Line 9: replaced 327 lines with 353 lines.
- Before: 361 lines | 17,901 chars | hash f7fdb39517cd | preview: "// components/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from '../Button';..."
- After: 387 lines | 19,566 chars | hash 74acf90b8b68 | preview: "// components/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from '../Button';..."
- Previous fragment: "const PARTNER_NAAM = 'Aanhuis Spijk'; / const PARTNER_CONTACT = 'Tobias'; / const PARTNER_EMAIL = process.env.NEXT_PUBLIC_PARTNER_EMAIL || 'tobias@aanhuis-spijk.nl'; / const PAR..."
- Current fragment: "interface StepFourConfirmationProps { / stepTitle: string; / configuratorData: any; / woningType: string | null; / designPakket: string | null; / onBack: () => void; / onConfirm..."

### 2026-11-16T14:30:34.311Z | saved | components/configurator/StepThreeVisuals.tsx
- Summary: Line 1: replaced 451 lines with 452 lines.
- Before: 494 lines | 20,251 chars | hash 3918fdaf7ddf | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / export default function StepThreeVisuals({ / stepTitle, / configuratorData, / designPakket, / woningType / }: any) { / c..."
- After: 495 lines | 20,323 chars | hash 21d3217c9bba | preview: "// components/StepThreeVisuals.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / export default function StepThreeVisuals({ / stepTitle, / configuratorData, / desig..."
- Previous fragment: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / export default function StepThreeVisuals({ / stepTitle, / configuratorData, / de..."
- Current fragment: "// components/StepThreeVisuals.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / export default function StepThreeVisuals({..."

### 2026-11-16T14:25:34.510Z | saved | components/configurator/StepTwoDesign.tsx
- Summary: Line 193: inserted 1 line.
- Before: 272 lines | 12,311 chars | hash 2dfe6999bb5f | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / export default function StepTwoDesign({ / stepTitle, / configuratorData, / designPakket,..."
- After: 272 lines | 12,314 chars | hash 19f36b2caade | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / export default function StepTwoDesign({ / stepTitle, / configuratorData, / designPakket,..."
- Current fragment: "sm:"

### 2026-11-16T14:21:35.241Z | saved | components/configurator/StepTwoDesign.tsx
- Summary: Saved without a textual diff.
- Before: 272 lines | 12,311 chars | hash 2dfe6999bb5f | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / export default function StepTwoDesign({ / stepTitle, / configuratorData, / designPakket,..."
- After: 272 lines | 12,311 chars | hash 2dfe6999bb5f | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / export default function StepTwoDesign({ / stepTitle, / configuratorData, / designPakket,..."

### 2026-11-16T14:21:32.259Z | saved | components/configurator/StepTwoDesign.tsx
- Summary: Saved without a textual diff.
- Before: 219 lines | 9,662 chars | hash 76facdd6978d | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / export default function StepTwoDesign({ / stepTitle, / configuratorData, / designPakket,..."
- After: 219 lines | 9,662 chars | hash 76facdd6978d | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / export default function StepTwoDesign({ / stepTitle, / configuratorData, / designPakket,..."

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


## Hot Files
- components/configurator/StepTwoDesign.tsx (10 tracked changes)
- app/download/page.tsx (8 tracked changes)
- app/api/verify-voucher/route.ts (5 tracked changes)
- app/dashboard/page.tsx (5 tracked changes)
- components/configurator/StepFourConfirmation.tsx (4 tracked changes)
- lib/cms.ts (4 tracked changes)
- components/configurator/StepOnewoning.tsx (2 tracked changes)
- components/configurator/StepThreeVisuals.tsx (2 tracked changes)

## Git Snapshot
- Branch: main
- HEAD: 2026-11-16 2405734 feat(step4): restore partners section list extracted correctly from the updated woningtypen repeater
- Working tree summary: 1 modified
- M components/configurator/StepFourConfirmation.tsx

## GitHub Snapshot
GitHub Repository: marketing-smartheads/nomi-configurator
Visibility: public | Default branch: main
Stars: 0 | Forks: 0 | Open issues: 0

Latest commit on main:
- 2405734 by Bas van Dooremalen on 2026-11-16
  feat(step4): restore partners section list extracted correctly from the updated woningtypen repeater

URL: https://github.com/marketing-smartheads/nomi-configurator

## Graphify Snapshot
Graphify report not found. Generate Graphify output if you want architecture-aware memory excerpts here.

## Project Planner
- Project planner is not configured yet. Enable it in the chat panel to generate a time-based todo list and progress rescue briefs.

## Agent Notes
- If a future task asks what changed recently, start with `Recent Changes`, `Tracked Snapshots`, `Hot Files`, and `Git Snapshot`.
- If a future task asks how the project is organized, combine this file with `graphify-out/GRAPH_REPORT.md`.
- If a future task needs repository-level context, use `Package Snapshot`, the GitHub snapshot, and the Graphify snapshot before rescanning broad parts of the repo.
