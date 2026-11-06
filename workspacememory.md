# Workspace Memory
This file is maintained automatically by Code Janitor so Claude, Codex, Bob, and any other AI agent can reuse repo context without rescanning everything from scratch.
Generated: 2026-11-06T15:32:57.727Z
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
- Last activity: 2026-11-06T15:32:55.043Z
## Workspace Focus
- Active file in focus: components/configurator/StepFourConfirmation.tsx
- Hottest files right now: lib/cms.ts (19), components/configurator/StepThreeVisuals.tsx (4), components/configurator/StepTwoDesign.tsx (4), components/LoginScreen.tsx (4)
- Suggested starting points: components/configurator/StepFourConfirmation.tsx, lib/cms.ts, components/configurator/StepThreeVisuals.tsx, components/configurator/StepTwoDesign.tsx, components/LoginScreen.tsx, app/download/page.tsx
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
- components/configurator/StepFourConfirmation.tsx | 361 lines | 18126 chars | hash 03f518673507
  Last snapshot: 2026-11-06T15:32:55.043Z
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
- app/api/verify-voucher/route.ts | 188 lines | 6103 chars | hash c41fe8ed1e83
  Last snapshot: 2026-11-06T00:00:47.474Z
  Preview: "import { NextResponse } from 'next/server'; / export const dynamic = 'force-dynamic'; / export async function GET(request: Request) { / const { searchParams } = new URL(request.url); / const code = searchParams.get('c..."
- lib/cms.ts | 318 lines | 9223 chars | hash 32e06f359223
  Last snapshot: 2026-11-05T23:50:54.520Z
  Preview: "// lib/cms.ts / export async function getPageData() { / const query = ` / query GetConfiguratorPage { / page(id: "28", idType: DATABASE_ID) { / sections { / hero { / subtitel / titel / omschrijving / afbeelding { / no..."
- app/download/page.tsx | 399 lines | 19298 chars | hash d6c80bb2a10b
  Last snapshot: 2026-11-05T23:03:35.990Z
  Preview: "'use client'; / import { useState, useEffect } from 'react'; / import { useRouter } from 'next/navigation'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / import { getPageDat..."
- lib/useConfigurator.ts | 206 lines | 6358 chars | hash 6df8a1bf9348
  Last snapshot: 2026-11-05T22:22:17.496Z
  Preview: "'use client'; / import { useState, useEffect } from 'react'; / type ScreenType = 'welcome' | 'configurator' | 'download' | 'login'; / export function useConfigurator() { / const [screen, setScreenState] = useState<Scr..."

## Recent Changes
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

### 2026-11-06T00:00:55.468Z | saved | components/LoginScreen.tsx
- Summary: Line 9: replaced 73 lines with 81 lines.
- Before: 272 lines | 9,764 chars | hash 7c0b97494bc5 | preview: "// components/LoginScreen.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / import Button from './Button'; / import { useRouter } fr..."
- After: 280 lines | 9,936 chars | hash 7dfb1719bf66 | preview: "// components/LoginScreen.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / import Button from './Button'; / import { useRouter } fr..."
- Previous fragment: "import { verifyAndAuthVoucher } from '../lib/cms'; / interface LoginScreenProps { / toegangscode: string; / setToegangscode: (val: string) => void; / klantEmail: string; / setKl..."
- Current fragment: "interface LoginScreenProps { / toegangscode: string; / setToegangscode: (val: string) => void; / klantEmail: string; / setKlantEmail: (val: string) => void; / error: string | nu..."

### 2026-11-06T00:00:47.474Z | saved | app/api/verify-voucher/route.ts
- Summary: Line 131: inserted 58 lines.
- Before: 131 lines | 4,145 chars | hash 879d9623513b | preview: "import { NextResponse } from 'next/server'; / export const dynamic = 'force-dynamic'; / export async function GET(request: Request) { / const { searchParams } = new URL(request.url); / const code = searchParams.get('c..."
- After: 188 lines | 6,103 chars | hash c41fe8ed1e83 | preview: "import { NextResponse } from 'next/server'; / export const dynamic = 'force-dynamic'; / export async function GET(request: Request) { / const { searchParams } = new URL(request.url); / const code = searchParams.get('c..."
- Current fragment: "ige vouchercode. Controleer uw invoer.' }, / { status: 404 } / ); / } / const velden = voucher.voucherVelden || {}; / const opgeslagenEmail = (velden.klantEMail || '').trim().to..."

### 2026-11-06T00:00:41.491Z | saved | app/api/verify-voucher/route.ts
- Summary: Line 14: replaced 176 lines with 118 lines.
- Before: 189 lines | 6,106 chars | hash 110421b695dd | preview: "import { NextResponse } from 'next/server'; / export const dynamic = 'force-dynamic'; / export async function GET(request: Request) { / const { searchParams } = new URL(request.url); / const code = searchParams.get('c..."
- After: 131 lines | 4,145 chars | hash 879d9623513b | preview: "import { NextResponse } from 'next/server'; / export const dynamic = 'force-dynamic'; / export async function GET(request: Request) { / const { searchParams } = new URL(request.url); / const code = searchParams.get('c..."
- Previous fragment: "'; / const wpUser = process.env.WORDPRESS_AUTH_USER; / const wpPass = process.env.WORDPRESS_AUTH_PASSWORD; / const basicAuth = wpUser && wpPass ? 'Basic ' + Buffer.from(`${wpUse..."
- Current fragment: "https://cms.nomi-configurator.nl/graphql'; / const wpUser = process.env.WORDPRESS_AUTH_USER; / const wpPass = process.env.WORDPRESS_AUTH_PASSWORD; / const basicAuth = wpUser &&..."

### 2026-11-05T23:55:51.869Z | saved | components/LoginScreen.tsx
- Summary: Line 1: replaced 102 lines with 98 lines.
- Before: 276 lines | 9,862 chars | hash 904ae93bdd1a | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / import Button from './Button'; / import { useRouter } from 'next/navigation'; / import {..."
- After: 272 lines | 9,764 chars | hash 7c0b97494bc5 | preview: "// components/LoginScreen.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / import Button from './Button'; / import { useRouter } fr..."
- Previous fragment: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / import Button from './Button'; / import { useRou..."
- Current fragment: "// components/LoginScreen.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / import Button fr..."


## Hot Files
- lib/cms.ts (19 tracked changes)
- components/configurator/StepThreeVisuals.tsx (4 tracked changes)
- components/configurator/StepTwoDesign.tsx (4 tracked changes)
- components/LoginScreen.tsx (4 tracked changes)
- app/download/page.tsx (3 tracked changes)
- components/configurator/StepFourConfirmation.tsx (3 tracked changes)
- app/api/verify-voucher/route.ts (2 tracked changes)
- lib/useConfigurator.ts (1 tracked changes)

## Git Snapshot
- Branch: main
- HEAD: 2026-11-06 3ea1369 style(confirmation): make partner contact info block more subtle and clean
- Working tree summary: 1 modified
- M components/configurator/StepFourConfirmation.tsx

## GitHub Snapshot
GitHub Repository: marketing-smartheads/nomi-configurator
Visibility: public | Default branch: main
Stars: 0 | Forks: 0 | Open issues: 0

Latest commit on main:
- 3ea1369 by Bas van Dooremalen on 2026-11-06
  style(confirmation): make partner contact info block more subtle and clean

URL: https://github.com/marketing-smartheads/nomi-configurator

## Graphify Snapshot
Graphify report not found. Generate Graphify output if you want architecture-aware memory excerpts here.

## Project Planner
- Project planner is not configured yet. Enable it in the chat panel to generate a time-based todo list and progress rescue briefs.

## Agent Notes
- If a future task asks what changed recently, start with `Recent Changes`, `Tracked Snapshots`, `Hot Files`, and `Git Snapshot`.
- If a future task asks how the project is organized, combine this file with `graphify-out/GRAPH_REPORT.md`.
- If a future task needs repository-level context, use `Package Snapshot`, the GitHub snapshot, and the Graphify snapshot before rescanning broad parts of the repo.
