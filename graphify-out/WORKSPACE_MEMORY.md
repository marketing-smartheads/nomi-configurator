# Workspace Memory
This file is maintained automatically by Code Janitor so Claude, Codex, Bob, and any other AI agent can reuse repo context without rescanning everything from scratch.
Generated: 2026-11-12T10:39:27.425Z
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
- Last activity: 2026-11-12T10:39:25.575Z
## Workspace Focus
- Active file in focus: components/configurator/StepThreeVisuals.tsx
- Hottest files right now: app/download/page.tsx (13), app/dashboard/page.tsx (8), app/api/auth/login/route.ts (5), app/api/verify-voucher/route.ts (5)
- Suggested starting points: components/configurator/StepThreeVisuals.tsx, app/download/page.tsx, app/dashboard/page.tsx, app/api/auth/login/route.ts, app/api/verify-voucher/route.ts, lib/cms.ts
## Current Workspace
- Active file: components/configurator/StepThreeVisuals.tsx
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
- Working tree summary: 7 modifieds
## Tracked Snapshots
- components/configurator/StepThreeVisuals.tsx | 494 lines | 20251 chars | hash 3918fdaf7ddf
  Last snapshot: 2026-11-12T10:39:25.575Z
  Preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / export default function StepThreeVisuals({ / stepTitle, / configuratorData, / designPakket, / woningType / }: any) { / c..."
- components/configurator/StepTwoDesign.tsx | 207 lines | 9312 chars | hash bd7debac65d2
  Last snapshot: 2026-11-12T10:39:16.276Z
  Preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / export default function StepTwoDesign({ / stepTitle, / configuratorData, / designPakket,..."
- components/configurator/StepOnewoning.tsx | 127 lines | 5726 chars | hash a94e30c9f639
  Last snapshot: 2026-11-12T10:38:57.892Z
  Preview: "'use client'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / selectedIndeling, / setSelectedIndeling / }: any) { / const data = configuratorData?.configu..."
- app/dashboard/page.tsx | 415 lines | 20693 chars | hash 04b3d6a61487
  Last snapshot: 2026-11-12T06:52:19.528Z
  Preview: "'use client'; / import React, { useState, useEffect } from 'react'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / // Lijst van verhuur-vouchers die we uit het dashboard will..."
- app/api/verify-voucher/route.ts | 220 lines | 7360 chars | hash ce975addae9c
  Last snapshot: 2026-11-11T15:37:44.580Z
  Preview: "import { NextResponse } from 'next/server'; / export const dynamic = 'force-dynamic'; / // 🛑 32 Verhuur-bouwnummers (Jongerius) die in de code en het dashboard geblokkeerd zijn / const VERHUUR_VOUCHERS = new Set([ /..."
- lib/cms.ts | 316 lines | 9024 chars | hash 96f317a135a3
  Last snapshot: 2026-11-11T13:24:54.106Z
  Preview: "// lib/cms.ts / export async function getPageData() { / const query = ` / query GetConfiguratorPage { / page(id: "28", idType: DATABASE_ID) { / sections { / hero { / subtitel / titel / omschrijving / afbeelding { / no..."
- app/download/page.tsx | 418 lines | 20106 chars | hash 172d883371d9
  Last snapshot: 2026-11-11T13:12:34.040Z
  Preview: "'use client'; / import { useState, useEffect } from 'react'; / import { useRouter } from 'next/navigation'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / import { getPageDat..."
- app/api/auth/login/route.ts | 57 lines | 2010 chars | hash 7282b64cb271
  Last snapshot: 2026-11-11T11:15:01.634Z
  Preview: "import { NextResponse } from 'next/server'; / export async function POST(request: Request) { / try { / const { username, password } = await request.json(); / if (!username || !password) { / return NextResponse.json( /..."

## Recent Changes
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

### 2026-11-11T15:40:52.436Z | saved | app/dashboard/page.tsx
- Summary: Line 7: replaced 73 lines with 74 lines.
- Before: 399 lines | 19,757 chars | hash 17780e409e0e | preview: "'use client'; / import React, { useState, useEffect } from 'react'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / const VERHUUR_VOUCHERS = new Set([ / // Type A verhuur vouc..."
- After: 400 lines | 19,842 chars | hash e7f0442aa21f | preview: "'use client'; / import React, { useState, useEffect } from 'react'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / // Lijst van verhuur-vouchers die we uit het dashboard will..."
- Previous fragment: "const VERHUUR_VOUCHERS = new Set([ / // Type A verhuur vouchers / 'nomi-a001', 'nomi-a003', 'nomi-a005', 'nomi-a006', 'nomi-a007', 'nomi-a013', / 'nomi-a019', 'nomi-a020', 'nomi..."
- Current fragment: "// Lijst van verhuur-vouchers die we uit het dashboard willen filteren voor de makelaar / const VERHUUR_VOUCHERS = new Set([ / // Type A verhuur vouchers / 'nomi-a001', 'nomi-a0..."

### 2026-11-11T15:38:08.301Z | saved | app/dashboard/page.tsx
- Summary: Line 7: replaced 7 lines with 9 lines.
- Before: 397 lines | 19,782 chars | hash f472d95f0ee7 | preview: "'use client'; / import React, { useState, useEffect } from 'react'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / // Lijst van huurvouchers die we uit het dashboard willen f..."
- After: 399 lines | 19,757 chars | hash 17780e409e0e | preview: "'use client'; / import React, { useState, useEffect } from 'react'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / const VERHUUR_VOUCHERS = new Set([ / // Type A verhuur vouc..."
- Previous fragment: "// Lijst van huurvouchers die we uit het dashboard willen filteren voor de makelaar / const VERHUUR_VOUCHERS_SET = new Set([ / 'nomi-a001', 'nomi-a002', 'nomi-a003', 'nomi-a004'..."
- Current fragment: "const VERHUUR_VOUCHERS = new Set([ / // Type A verhuur vouchers / 'nomi-a001', 'nomi-a003', 'nomi-a005', 'nomi-a006', 'nomi-a007', 'nomi-a013', / 'nomi-a019', 'nomi-a020', 'nomi..."

### 2026-11-11T15:37:44.580Z | saved | app/api/verify-voucher/route.ts
- Summary: Saved without a textual diff.
- Before: 220 lines | 7,360 chars | hash ce975addae9c | preview: "import { NextResponse } from 'next/server'; / export const dynamic = 'force-dynamic'; / // 🛑 32 Verhuur-bouwnummers (Jongerius) die in de code en het dashboard geblokkeerd zijn / const VERHUUR_VOUCHERS = new Set([ /..."
- After: 220 lines | 7,360 chars | hash ce975addae9c | preview: "import { NextResponse } from 'next/server'; / export const dynamic = 'force-dynamic'; / // 🛑 32 Verhuur-bouwnummers (Jongerius) die in de code en het dashboard geblokkeerd zijn / const VERHUUR_VOUCHERS = new Set([ /..."

### 2026-11-11T15:33:02.102Z | saved | app/api/verify-voucher/route.ts
- Summary: Line 7: replaced 5 lines with 8 lines.
- Before: 217 lines | 7,296 chars | hash 29f0ec9ff7a4 | preview: "import { NextResponse } from 'next/server'; / export const dynamic = 'force-dynamic'; / // 🛑 32 Verhuur-bouwnummers (Jongerius) die in de code en het dashboard geblokkeerd zijn / const VERHUUR_VOUCHERS = new Set([ /..."
- After: 220 lines | 7,360 chars | hash ce975addae9c | preview: "import { NextResponse } from 'next/server'; / export const dynamic = 'force-dynamic'; / // 🛑 32 Verhuur-bouwnummers (Jongerius) die in de code en het dashboard geblokkeerd zijn / const VERHUUR_VOUCHERS = new Set([ /..."
- Previous fragment: "'nomi-a001', 'nomi-a002', 'nomi-a003', 'nomi-a004', 'nomi-a005', 'nomi-a006', 'nomi-a007', 'nomi-a013', / 'nomi-a019', 'nomi-a020', 'nomi-a021', 'nomi-a022', 'nomi-a023', 'nomi-..."
- Current fragment: "// Type A verhuur vouchers / 'nomi-a001', 'nomi-a003', 'nomi-a005', 'nomi-a006', 'nomi-a007', 'nomi-a013', / 'nomi-a019', 'nomi-a020', 'nomi-a021', 'nomi-a022', 'nomi-a023', 'no..."

### 2026-11-11T15:13:12.682Z | saved | app/dashboard/page.tsx
- Summary: Line 345: removed 1 line.
- Before: 397 lines | 19,811 chars | hash c6c46a934ccb | preview: "'use client'; / import React, { useState, useEffect } from 'react'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / // Lijst van huurvouchers die we uit het dashboard willen f..."
- After: 397 lines | 19,782 chars | hash f472d95f0ee7 | preview: "'use client'; / import React, { useState, useEffect } from 'react'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / // Lijst van huurvouchers die we uit het dashboard willen f..."
- Previous fragment: "in ? null : sortedVouchers.ma"

### 2026-11-11T15:10:16.937Z | saved | app/dashboard/page.tsx
- Summary: Line 7: replaced 324 lines with 339 lines.
- Before: 382 lines | 18,813 chars | hash 7355bba0f367 | preview: "'use client'; / import React, { useState, useEffect } from 'react'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / export default function DashboardPage() { / const [isLogged..."
- After: 397 lines | 19,811 chars | hash c6c46a934ccb | preview: "'use client'; / import React, { useState, useEffect } from 'react'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / // Lijst van huurvouchers die we uit het dashboard willen f..."
- Previous fragment: "export default function DashboardPage() { / const [isLoggedIn, setIsLoggedIn] = useState(false); / const [username, setUsername] = useState(''); / const [password, setPassword]..."
- Current fragment: "// Lijst van huurvouchers die we uit het dashboard willen filteren voor de makelaar / const VERHUUR_VOUCHERS_SET = new Set([ / 'nomi-a001', 'nomi-a002', 'nomi-a003', 'nomi-a004'..."

### 2026-11-11T15:00:35.551Z | saved | app/api/verify-voucher/route.ts
- Summary: Line 7: replaced 1 line with 1 line.
- Before: 217 lines | 7,270 chars | hash ceae6ca859f8 | preview: "import { NextResponse } from 'next/server'; / export const dynamic = 'force-dynamic'; / // 🛑 32 Verhuur-bouwnummers (Jongerius) die in de code en het dashboard geblokkeerd zijn / const VERHUUR_VOUCHERS = new Set([ /..."
- After: 217 lines | 7,296 chars | hash 29f0ec9ff7a4 | preview: "import { NextResponse } from 'next/server'; / export const dynamic = 'force-dynamic'; / // 🛑 32 Verhuur-bouwnummers (Jongerius) die in de code en het dashboard geblokkeerd zijn / const VERHUUR_VOUCHERS = new Set([ /..."
- Previous fragment: "3"
- Current fragment: "2', 'nomi-a003', 'nomi-a004"

### 2026-11-11T13:48:39.211Z | saved | app/api/verify-voucher/route.ts
- Summary: Line 115: replaced 1 line with 1 line.
- Before: 217 lines | 7,325 chars | hash 640b4a1e61dd | preview: "import { NextResponse } from 'next/server'; / export const dynamic = 'force-dynamic'; / // 🛑 32 Verhuur-bouwnummers (Jongerius) die in de code en het dashboard geblokkeerd zijn / const VERHUUR_VOUCHERS = new Set([ /..."
- After: 217 lines | 7,270 chars | hash ceae6ca859f8 | preview: "import { NextResponse } from 'next/server'; / export const dynamic = 'force-dynamic'; / // 🛑 32 Verhuur-bouwnummers (Jongerius) die in de code en het dashboard geblokkeerd zijn / const VERHUUR_VOUCHERS = new Set([ /..."
- Previous fragment: "it bouwnummer betreft een verhuurwoning (Jongerius). De indeling en afwerking van deze woning zijn reeds vastgelegd"
- Current fragment: "eze vouchercode is niet beschikbaar voor online configuratie"

### 2026-11-11T13:24:54.106Z | saved | lib/cms.ts
- Summary: Line 184: replaced 130 lines with 128 lines.
- Before: 318 lines | 9,223 chars | hash 32e06f359223 | preview: "// lib/cms.ts / export async function getPageData() { / const query = ` / query GetConfiguratorPage { / page(id: "28", idType: DATABASE_ID) { / sections { / hero { / subtitel / titel / omschrijving / afbeelding { / no..."
- After: 316 lines | 9,024 chars | hash 96f317a135a3 | preview: "// lib/cms.ts / export async function getPageData() { / const query = ` / query GetConfiguratorPage { / page(id: "28", idType: DATABASE_ID) { / sections { / hero { / subtitel / titel / omschrijving / afbeelding { / no..."
- Previous fragment: "indeling / status / } / } / } / } / `; / const graphqlEndpoint = 'https://cms.nomi-configurator.nl/graphql'; / try { / const res = await fetch(graphqlEndpoint, { / method: 'POST..."
- Current fragment: "klantEMail / } / } / } / } / `; / const graphqlEndpoint = 'https://cms.nomi-configurator.nl/graphql'; / try { / const res = await fetch(graphqlEndpoint, { / method: 'POST', / he..."

### 2026-11-11T13:12:34.040Z | saved | app/download/page.tsx
- Summary: Line 14: replaced 181 lines with 182 lines.
- Before: 417 lines | 20,121 chars | hash 00549e87a8a1 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import { useRouter } from 'next/navigation'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / import { getPageDat..."
- After: 418 lines | 20,106 chars | hash 172d883371d9 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import { useRouter } from 'next/navigation'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / import { getPageDat..."
- Previous fragment: "1'); / const [designPakket, setDesignPakket] = useState<string>('Modern Raw'); / const [pageData, setPageData] = useState<any>(null); / const [isDownloading, setIsDownloading] =..."
- Current fragment: "2'); / const [designPakket, setDesignPakket] = useState<string>('Modern Raw'); / const [pageData, setPageData] = useState<any>(null); / const [isDownloading, setIsDownloading] =..."


## Hot Files
- app/download/page.tsx (13 tracked changes)
- app/dashboard/page.tsx (8 tracked changes)
- app/api/auth/login/route.ts (5 tracked changes)
- app/api/verify-voucher/route.ts (5 tracked changes)
- lib/cms.ts (4 tracked changes)
- app/api/vouchers/route.ts (2 tracked changes)
- components/configurator/StepOnewoning.tsx (1 tracked changes)
- components/configurator/StepThreeVisuals.tsx (1 tracked changes)

## Git Snapshot
- Branch: main
- HEAD: 2026-11-12 7cea902 feat(dashboard): make voucher codes clickable to open in new tab via /voucher?code=
- Working tree summary: 7 modifieds
- M components/configurator/StepOnewoning.tsx
- M components/configurator/StepThreeVisuals.tsx
- M components/configurator/StepTwoDesign.tsx
- M graphify-out/WORKSPACE_MEMORY.md
- M lib/cms.ts
- M workspace.json
- M workspacememory.md

## GitHub Snapshot
GitHub Repository: marketing-smartheads/nomi-configurator
Visibility: public | Default branch: main
Stars: 0 | Forks: 0 | Open issues: 0

Latest commit on main:
- 7cea902 by Bas van Dooremalen on 2026-11-12
  feat(dashboard): make voucher codes clickable to open in new tab via /voucher?code=

URL: https://github.com/marketing-smartheads/nomi-configurator

## Graphify Snapshot
Graphify report not found. Generate Graphify output if you want architecture-aware memory excerpts here.

## Project Planner
- Project planner is not configured yet. Enable it in the chat panel to generate a time-based todo list and progress rescue briefs.

## Agent Notes
- If a future task asks what changed recently, start with `Recent Changes`, `Tracked Snapshots`, `Hot Files`, and `Git Snapshot`.
- If a future task asks how the project is organized, combine this file with `graphify-out/GRAPH_REPORT.md`.
- If a future task needs repository-level context, use `Package Snapshot`, the GitHub snapshot, and the Graphify snapshot before rescanning broad parts of the repo.
