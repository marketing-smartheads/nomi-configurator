# Workspace Memory
This file is maintained automatically by Code Janitor so Claude, Codex, Bob, and any other AI agent can reuse repo context without rescanning everything from scratch.
Generated: 2026-11-11T09:17:48.168Z
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
- Last activity: 2026-11-11T09:17:45.741Z
## Workspace Focus
- Active file in focus: app/api/auth/login/route.ts
- Hottest files right now: lib/cms.ts (18), components/configurator/StepFourConfirmation.tsx (4), components/configurator/StepThreeVisuals.tsx (4), components/configurator/StepTwoDesign.tsx (4)
- Suggested starting points: app/api/auth/login/route.ts, lib/cms.ts, components/configurator/StepFourConfirmation.tsx, components/configurator/StepThreeVisuals.tsx, components/configurator/StepTwoDesign.tsx, app/api/verify-voucher/route.ts
## Current Workspace
- Active file: app/api/auth/login/route.ts
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
- app/api/auth/login/route.ts | 87 lines | 2640 chars | hash f8f182e6ec97
  Last snapshot: 2026-11-11T09:17:45.741Z
  Preview: "import { NextResponse } from 'next/server'; / export const dynamic = 'force-dynamic'; / export async function POST(request: Request) { / try { / const { username, password } = await request.json(); / if (!username ||..."
- app/api/verify-voucher/route.ts | 217 lines | 7325 chars | hash 640b4a1e61dd
  Last snapshot: 2026-11-11T09:04:13.793Z
  Preview: "import { NextResponse } from 'next/server'; / export const dynamic = 'force-dynamic'; / // 🛑 32 Verhuur-bouwnummers (Jongerius) die in de code en het dashboard geblokkeerd zijn / const VERHUUR_VOUCHERS = new Set([ /..."
- app/dashboard/page.tsx | 388 lines | 19068 chars | hash 77f48e1eac2d
  Last snapshot: 2026-11-11T09:03:01.039Z
  Preview: "'use client'; / import React, { useState, useEffect } from 'react'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / // 🛑 32 Verhuur-bouwnummers (Jongerius) die uit het Dashbo..."
- components/configurator/StepFourConfirmation.tsx | 361 lines | 17897 chars | hash 56051d42a992
  Last snapshot: 2026-11-06T15:36:52.529Z
  Preview: "// components/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from '../Button';..."
- components/configurator/StepThreeVisuals.tsx | 492 lines | 20311 chars | hash 230088061fb3
  Last snapshot: 2026-11-06T11:15:50.269Z
  Preview: "// components/StepThreeVisuals.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / export default function StepThreeVisuals({ / stepTitle, / configuratorData, / desig..."
- components/configurator/StepTwoDesign.tsx | 205 lines | 9146 chars | hash 14bc4f3bcec2
  Last snapshot: 2026-11-06T11:10:28.030Z
  Preview: "// components/StepTwoDesign.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / export default function StepTwoDesign({ / stepTitle, /..."
- components/LoginScreen.tsx | 280 lines | 9936 chars | hash 7dfb1719bf66
  Last snapshot: 2026-11-06T00:00:55.468Z
  Preview: "// components/LoginScreen.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / import Button from './Button'; / import { useRouter } fr..."
- lib/cms.ts | 318 lines | 9223 chars | hash 32e06f359223
  Last snapshot: 2026-11-05T23:50:54.520Z
  Preview: "// lib/cms.ts / export async function getPageData() { / const query = ` / query GetConfiguratorPage { / page(id: "28", idType: DATABASE_ID) { / sections { / hero { / subtitel / titel / omschrijving / afbeelding { / no..."

## Recent Changes
### 2026-11-11T09:17:45.741Z | saved | app/api/auth/login/route.ts
- Summary: Line 3: replaced 47 lines with 79 lines.
- Before: 55 lines | 1,971 chars | hash 212f4454a10b | preview: "import { NextResponse } from 'next/server'; / export async function POST(request: Request) { / try { / const { username, password } = await request.json(); / if (!username || !password) { / return NextResponse.json({..."
- After: 87 lines | 2,640 chars | hash f8f182e6ec97 | preview: "import { NextResponse } from 'next/server'; / export const dynamic = 'force-dynamic'; / export async function POST(request: Request) { / try { / const { username, password } = await request.json(); / if (!username ||..."
- Previous fragment: "async function POST(request: Request) { / try { / const { username, password } = await request.json(); / if (!username || !password) { / return NextResponse.json({ error: 'Vul z..."
- Current fragment: "const dynamic = 'force-dynamic'; / export async function POST(request: Request) { / try { / const { username, password } = await request.json(); / if (!username || !password) {..."

### 2026-11-11T09:04:13.793Z | saved | app/api/verify-voucher/route.ts
- Summary: Line 5: replaced 144 lines with 173 lines.
- Before: 188 lines | 6,103 chars | hash c41fe8ed1e83 | preview: "import { NextResponse } from 'next/server'; / export const dynamic = 'force-dynamic'; / export async function GET(request: Request) { / const { searchParams } = new URL(request.url); / const code = searchParams.get('c..."
- After: 217 lines | 7,325 chars | hash 640b4a1e61dd | preview: "import { NextResponse } from 'next/server'; / export const dynamic = 'force-dynamic'; / // 🛑 32 Verhuur-bouwnummers (Jongerius) die in de code en het dashboard geblokkeerd zijn / const VERHUUR_VOUCHERS = new Set([ /..."
- Previous fragment: "export async function GET(request: Request) { / const { searchParams } = new URL(request.url); / const code = searchParams.get('code'); / if (!code) { / return NextResponse.json..."
- Current fragment: "// 🛑 32 Verhuur-bouwnummers (Jongerius) die in de code en het dashboard geblokkeerd zijn / const VERHUUR_VOUCHERS = new Set([ / 'nomi-a001', 'nomi-a003', 'nomi-a005', 'nomi-a00..."

### 2026-11-11T09:03:01.039Z | saved | app/dashboard/page.tsx
- Summary: Line 7: replaced 313 lines with 329 lines.
- Before: 372 lines | 18,002 chars | hash 402480d5c584 | preview: "'use client'; / import React, { useState, useEffect } from 'react'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / export default function DashboardPage() { / const [isLogged..."
- After: 388 lines | 19,068 chars | hash 77f48e1eac2d | preview: "'use client'; / import React, { useState, useEffect } from 'react'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / // 🛑 32 Verhuur-bouwnummers (Jongerius) die uit het Dashbo..."
- Previous fragment: "export default function DashboardPage() { / const [isLoggedIn, setIsLoggedIn] = useState(false); / const [username, setUsername] = useState(''); / const [password, setPassword]..."
- Current fragment: "// 🛑 32 Verhuur-bouwnummers (Jongerius) die uit het Dashboard zijn gefilterd (op wens van Chester) / const VERHUUR_VOUCHERS = new Set([ / 'nomi-a001', 'nomi-a003', 'nomi-a005',..."

### 2026-11-06T15:36:52.529Z | saved | components/configurator/StepFourConfirmation.tsx
- Summary: Line 335: replaced 7 lines with 7 lines.
- Before: 361 lines | 18,126 chars | hash 03f518673507 | preview: "// components/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from '../Button';..."
- After: 361 lines | 17,897 chars | hash 56051d42a992 | preview: "// components/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from '../Button';..."
- Previous fragment: "Subtiel en strak afgestemd contactblok */} / {agreedPartner === false && ( / <div className="p-4 rounded-xl bg-[#F9F6F0] border border-dark/10 text-sm text-muted space-y-1.5 ani..."
- Current fragment: "Netjes links uitgelijnd contactblok op exact dezelfde tekstgrootte (text-sm) */} / {agreedPartner === false && ( / <div className="p-4 rounded-xl bg-[#F9F6F0] border border-dark..."

### 2026-11-06T15:32:55.043Z | saved | components/configurator/StepFourConfirmation.tsx
- Summary: Line 322: replaced 30 lines with 30 lines.
- Before: 361 lines | 17,744 chars | hash ffaaf6547f67 | preview: "// components/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from '../Button';..."
- After: 361 lines | 18,126 chars | hash 03f518673507 | preview: "// components/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from '../Button';..."
- Previous fragment: ""> / We brengen u graag in contact met {PARTNER_NAAM}. Mogen we uw gegevens en keuze met hen delen, zodat zij de mogelijkheden vrijblijvend met u kunnen bespreken? / </p> / <div..."
- Current fragment: "leading-relaxed"> / We brengen u graag in contact met {PARTNER_NAAM}. Mogen we uw gegevens en keuze met hen delen, zodat zij de mogelijkheden vrijblijvend met u kunnen bespreken..."

### 2026-11-06T15:28:56.836Z | saved | components/configurator/StepFourConfirmation.tsx
- Summary: Line 12: replaced 331 lines with 330 lines.
- Before: 362 lines | 17,797 chars | hash 2c1519ef8a98 | preview: "// components/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from '../Button';..."
- After: 361 lines | 17,744 chars | hash ffaaf6547f67 | preview: "// components/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from '../Button';..."
- Previous fragment: "// of desgewenst aanpasbaar / interface StepFourConfirmationProps { / stepTitle: string; / configuratorData: any; / woningType: string | null; / designPakket: string | null; / o..."
- Current fragment: "interface StepFourConfirmationProps { / stepTitle: string; / configuratorData: any; / woningType: string | null; / designPakket: string | null; / onBack: () => void; / onConfirm..."

### 2026-11-06T15:24:23.613Z | saved | components/configurator/StepFourConfirmation.tsx
- Summary: Line 1: replaced 334 lines with 345 lines.
- Before: 351 lines | 17,011 chars | hash ad5e8b9d9763 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from '../Button'; / const PARTNER_NAAM = 'Aanhuis Spijk'; /..."
- After: 362 lines | 17,797 chars | hash 2c1519ef8a98 | preview: "// components/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from '../Button';..."
- Previous fragment: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from '../Button'; /..."
- Current fragment: "// components/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigat..."

### 2026-11-06T11:15:50.269Z | saved | components/configurator/StepThreeVisuals.tsx
- Summary: Line 82: replaced 61 lines with 407 lines.
- Before: 146 lines | 6,722 chars | hash bceddf87e6e2 | preview: "// components/StepThreeVisuals.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / export default function StepThreeVisuals({ / stepTitle, / configuratorData, / desig..."
- After: 492 lines | 20,311 chars | hash 230088061fb3 | preview: "// components/StepThreeVisuals.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / export default function StepThreeVisuals({ / stepTitle, / configuratorData, / desig..."
- Previous fragment: "'; / const rawVisuals = huidigPakketObj?.visualsSlider || huidigPakketObj?.visuals_slider; / let visuals: any[] = []; / if (Array.isArray(rawVisuals)) { / visuals = rawVisuals;..."
- Current fragment: "Zo ervaart u vooraf hoe het eindresultaat eruitziet — tot in de materialen en sferen.'; / const rawVisuals = huidigPakketObj?.visualsSlider || huidigPakketObj?.visuals_slider; /..."

### 2026-11-06T11:10:38.163Z | saved | components/configurator/StepThreeVisuals.tsx
- Summary: Saved without a textual diff.
- Before: 146 lines | 6,722 chars | hash bceddf87e6e2 | preview: "// components/StepThreeVisuals.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / export default function StepThreeVisuals({ / stepTitle, / configuratorData, / desig..."
- After: 146 lines | 6,722 chars | hash bceddf87e6e2 | preview: "// components/StepThreeVisuals.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / export default function StepThreeVisuals({ / stepTitle, / configuratorData, / desig..."

### 2026-11-06T11:10:33.193Z | saved | components/configurator/StepThreeVisuals.tsx
- Summary: Line 1: inserted 146 lines.
- Before: 0 lines | 0 chars | hash empty
- After: 146 lines | 6,722 chars | hash bceddf87e6e2 | preview: "// components/StepThreeVisuals.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / export default function StepThreeVisuals({ / stepTitle, / configuratorData, / desig..."
- Current fragment: "// components/StepThreeVisuals.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / export default function StepThreeVisuals({..."

### 2026-11-06T11:10:28.030Z | saved | components/configurator/StepTwoDesign.tsx
- Summary: Line 23: replaced 46 lines with 49 lines.
- Before: 202 lines | 9,066 chars | hash f757dfabf6eb | preview: "// components/StepTwoDesign.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / export default function StepTwoDesign({ / stepTitle, /..."
- After: 205 lines | 9,146 chars | hash 14bc4f3bcec2 | preview: "// components/StepTwoDesign.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / export default function StepTwoDesign({ / stepTitle, /..."
- Previous fragment: "Indeling, setOpgeslagenIndeling] = useState(''); / useEffect(() => { / if (typeof window !== 'undefined') { / try { / const rawInd = localStorage.getItem('selected_indeling') ||..."
- Current fragment: "Woning, setOpgeslagenWoning] = useState(woningType || ''); / const [opgeslagenIndeling, setOpgeslagenIndeling] = useState(''); / useEffect(() => { / if (typeof window !== 'undef..."

### 2026-11-06T11:04:05.762Z | saved | components/configurator/StepTwoDesign.tsx
- Summary: Saved without a textual diff.
- Before: 202 lines | 9,066 chars | hash f757dfabf6eb | preview: "// components/StepTwoDesign.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / export default function StepTwoDesign({ / stepTitle, /..."
- After: 202 lines | 9,066 chars | hash f757dfabf6eb | preview: "// components/StepTwoDesign.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / export default function StepTwoDesign({ / stepTitle, /..."

### 2026-11-06T11:03:21.027Z | saved | components/configurator/StepTwoDesign.tsx
- Summary: Line 46: replaced 19 lines with 23 lines.
- Before: 198 lines | 8,826 chars | hash e227e7a1b445 | preview: "// components/StepTwoDesign.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / export default function StepTwoDesign({ / stepTitle, /..."
- After: 202 lines | 9,066 chars | hash f757dfabf6eb | preview: "// components/StepTwoDesign.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / export default function StepTwoDesign({ / stepTitle, /..."
- Previous fragment: "STRIKTE FILTERING: Alleen rijen die exact matchen met het woningtype en indeling / const matchendeWoningRijen = woningTypenLijst.filter((w: any) => { / const naam = (w?.typeNaam..."
- Current fragment: "1. Zoek uitsluitend rijen die exact matchen met het woningtype en indeling / const matchendeWoningRijen = woningTypenLijst.filter((w: any) => { / const naam = (w?.typeNaam || w?..."

### 2026-11-06T10:58:05.109Z | saved | components/configurator/StepTwoDesign.tsx
- Summary: Line 1: replaced 65 lines with 63 lines.
- Before: 200 lines | 8,924 chars | hash 62093ff0ea75 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / export default function StepTwoDesign({ / stepTitle, / configuratorData, / designPakket,..."
- After: 198 lines | 8,826 chars | hash e227e7a1b445 | preview: "// components/StepTwoDesign.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / export default function StepTwoDesign({ / stepTitle, /..."
- Previous fragment: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / export default function StepTwoDesign({ / stepTi..."
- Current fragment: "// components/StepTwoDesign.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / export default..."

### 2026-11-06T08:23:10.084Z | saved | components/configurator/StepThreeVisuals.tsx
- Summary: Line 1: replaced 175 lines with 183 lines.
- Before: 509 lines | 21,194 chars | hash 55a56b73a3e1 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / export default function StepThreeVisuals({ / stepTitle, / configuratorData, / designPakket, / woningType / }: any) { / c..."
- After: 517 lines | 21,684 chars | hash 0c1bb76eb05c | preview: "// components/StepThreeVisuals.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / export default function StepThreeVisuals({ / stepTitle, / configuratorData, / desig..."
- Previous fragment: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / export default function StepThreeVisuals({ / stepTitle, / configuratorData, / de..."
- Current fragment: "// components/StepThreeVisuals.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / export default function StepThreeVisuals({..."


## Hot Files
- lib/cms.ts (18 tracked changes)
- components/configurator/StepFourConfirmation.tsx (4 tracked changes)
- components/configurator/StepThreeVisuals.tsx (4 tracked changes)
- components/configurator/StepTwoDesign.tsx (4 tracked changes)
- app/api/verify-voucher/route.ts (3 tracked changes)
- app/download/page.tsx (3 tracked changes)
- components/LoginScreen.tsx (2 tracked changes)
- app/api/auth/login/route.ts (1 tracked changes)

## Git Snapshot
- Branch: main
- HEAD: 2026-11-11 8529092 feat(dashboard & security): filter out 32 rental units (Jongerius) from dashboard & block rental vouchers in login api
- Working tree summary: 1 modified
- M app/api/auth/login/route.ts

## GitHub Snapshot
GitHub Repository: marketing-smartheads/nomi-configurator
Visibility: public | Default branch: main
Stars: 0 | Forks: 0 | Open issues: 0

Latest commit on main:
- 8529092 by Bas van Dooremalen on 2026-11-11
  feat(dashboard & security): filter out 32 rental units (Jongerius) from dashboard & block rental vouchers in login api

URL: https://github.com/marketing-smartheads/nomi-configurator

## Graphify Snapshot
Graphify report not found. Generate Graphify output if you want architecture-aware memory excerpts here.

## Project Planner
- Project planner is not configured yet. Enable it in the chat panel to generate a time-based todo list and progress rescue briefs.

## Agent Notes
- If a future task asks what changed recently, start with `Recent Changes`, `Tracked Snapshots`, `Hot Files`, and `Git Snapshot`.
- If a future task asks how the project is organized, combine this file with `graphify-out/GRAPH_REPORT.md`.
- If a future task needs repository-level context, use `Package Snapshot`, the GitHub snapshot, and the Graphify snapshot before rescanning broad parts of the repo.
