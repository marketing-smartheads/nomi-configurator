# Workspace Memory
This file is maintained automatically by Code Janitor so Claude, Codex, Bob, and any other AI agent can reuse repo context without rescanning everything from scratch.
Generated: 2026-11-05T21:09:25.512Z
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
- Last activity: 2026-11-05T21:09:23.749Z
## Workspace Focus
- Active file in focus: components/LoginScreen.tsx
- Hottest files right now: components/configurator/StepThreeVisuals.tsx (8), app/api/auth/route.ts (6), app/download/page.tsx (6), components/configurator/StepOnewoning.tsx (6)
- Suggested starting points: components/LoginScreen.tsx, components/configurator/StepThreeVisuals.tsx, app/api/auth/route.ts, app/download/page.tsx, components/configurator/StepOnewoning.tsx, components/configurator/StepFourConfirmation.tsx
## Current Workspace
- Active file: components/LoginScreen.tsx
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
- Change mix: save (37), create (3)
- Remembered file snapshots: 46
- Working tree summary: 5 modifieds
## Tracked Snapshots
- components/LoginScreen.tsx | 285 lines | 10065 chars | hash ed423437d36b
  Last snapshot: 2026-11-05T21:09:23.749Z
  Preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / import Button from './Button'; / import { useRouter } from 'next/navigation'; / interfac..."
- app/api/auth/route.ts | 119 lines | 3894 chars | hash aab870b5b72b
  Last snapshot: 2026-11-05T21:09:16.942Z
  Preview: "import { NextResponse } from 'next/server'; / export async function POST(request: Request) { / try { / const body = await request.json(); / const { toegangscode, klantEmail } = body; / if (!toegangscode || !klantEmail..."
- app/api/verify-voucher/route.ts | 82 lines | 2711 chars | hash 6ee5746b80fa
  Last snapshot: 2026-11-05T20:52:17.775Z
  Preview: "import { NextResponse } from 'next/server'; / export async function GET(request: Request) { / const { searchParams } = new URL(request.url); / const code = searchParams.get('code'); / const email = searchParams.get('e..."
- app/download/page.tsx | 422 lines | 20388 chars | hash a12394416f45
  Last snapshot: 2026-11-05T18:04:09.989Z
  Preview: "'use client'; / import { useState, useEffect } from 'react'; / import { useRouter } from 'next/navigation'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / import { getPageDat..."
- components/configurator/StepFourConfirmation.tsx | 351 lines | 17011 chars | hash ad5e8b9d9763
  Last snapshot: 2026-11-05T17:41:37.984Z
  Preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from '../Button'; / const PARTNER_NAAM = 'Aanhuis Spijk'; /..."
- components/configurator/StepOnewoning.tsx | 122 lines | 5571 chars | hash 7c52c9f0546f
  Last snapshot: 2026-11-05T17:28:34.891Z
  Preview: "'use client'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / selectedIndeling, / setSelectedIndeling / }: any) { / const gefilterdeLijst = woningType / ?..."
- components/configurator/StepThreeVisuals.tsx | 509 lines | 21194 chars | hash 55a56b73a3e1
  Last snapshot: 2026-11-05T17:06:56.479Z
  Preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / export default function StepThreeVisuals({ / stepTitle, / configuratorData, / designPakket, / woningType / }: any) { / c..."
- components/configurator/StepTwoDesign.tsx | 200 lines | 8924 chars | hash 62093ff0ea75
  Last snapshot: 2026-11-05T16:19:57.343Z
  Preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / export default function StepTwoDesign({ / stepTitle, / configuratorData, / designPakket,..."

## Recent Changes
### 2026-11-05T21:09:23.749Z | saved | components/LoginScreen.tsx
- Summary: Line 76: replaced 41 lines with 36 lines.
- Before: 290 lines | 10,590 chars | hash 811f6f13c11b | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / import Button from './Button'; / import { useRouter } from 'next/navigation'; / interfac..."
- After: 285 lines | 10,065 chars | hash ed423437d36b | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / import Button from './Button'; / import { useRouter } from 'next/navigation'; / interfac..."
- Previous fragment: "1. Strenge server-side validatie via /api/auth / const res = await fetch('/api/auth', { / method: 'POST', / headers: { 'Content-Type': 'application/json' }, / body: JSON.stringi..."
- Current fragment: "Roep het /api/auth endpoint aan / const res = await fetch('/api/auth', { / method: 'POST', / headers: { 'Content-Type': 'application/json' }, / body: JSON.stringify({ / toegangs..."

### 2026-11-05T21:09:16.942Z | saved | app/api/auth/route.ts
- Summary: Line 20: replaced 86 lines with 91 lines.
- Before: 114 lines | 3,901 chars | hash e9346bfe8afb | preview: "import { NextResponse } from 'next/server'; / export async function POST(request: Request) { / try { / const body = await request.json(); / const { toegangscode, klantEmail } = body; / if (!toegangscode || !klantEmail..."
- After: 119 lines | 3,894 chars | hash aab870b5b72b | preview: "import { NextResponse } from 'next/server'; / export async function POST(request: Request) { / try { / const body = await request.json(); / const { toegangscode, klantEmail } = body; / if (!toegangscode || !klantEmail..."
- Previous fragment: "// Haal de eerste 100 vouchers op om zeker te zijn dat we de juiste vinden / const query = ` / query GetAllVouchersForAuth { / vouchers(first: 100) { / nodes { / databaseId / ti..."
- Current fragment: "const query = ` / query GetAllVouchersForAuth { / vouchers(first: 100) { / nodes { / databaseId / title / voucherVelden { / toegangscode / status / klantEmail / klantNaam / } /..."

### 2026-11-05T21:06:25.699Z | saved | app/api/auth/route.ts
- Summary: Line 73: replaced 27 lines with 27 lines.
- Before: 114 lines | 3,891 chars | hash d9f5be722e52 | preview: "import { NextResponse } from 'next/server'; / export async function POST(request: Request) { / try { / const body = await request.json(); / const { toegangscode, klantEmail } = body; / if (!toegangscode || !klantEmail..."
- After: 114 lines | 3,901 chars | hash e9346bfe8afb | preview: "import { NextResponse } from 'next/server'; / export async function POST(request: Request) { / try { / const body = await request.json(); / const { toegangscode, klantEmail } = body; / if (!toegangscode || !klantEmail..."
- Previous fragment: ") { / return NextResponse.json( / { error: 'Dit e-mailadres komt niet overeen met het e-mailadres dat aan deze vouchercode is gekoppeld.' }, / { status: 401 } / ); / } / } else..."
- Current fragment: "Clean) { / return NextResponse.json( / { error: 'Dit e-mailadres komt niet overeen met het e-mailadres dat aan deze vouchercode is gekoppeld.' }, / { status: 401 } / ); / } / }..."

### 2026-11-05T21:03:17.487Z | saved | app/api/auth/route.ts
- Summary: Line 20: replaced 77 lines with 83 lines.
- Before: 108 lines | 3,505 chars | hash 9b430fcc09dc | preview: "import { NextResponse } from 'next/server'; / export async function POST(request: Request) { / try { / const body = await request.json(); / const { toegangscode, klantEmail } = body; / if (!toegangscode || !klantEmail..."
- After: 114 lines | 3,891 chars | hash d9f5be722e52 | preview: "import { NextResponse } from 'next/server'; / export async function POST(request: Request) { / try { / const body = await request.json(); / const { toegangscode, klantEmail } = body; / if (!toegangscode || !klantEmail..."
- Previous fragment: "const query = ` / query GetVoucher($code: String!) { / vouchers(where: { search: $code }) { / nodes { / databaseId / title / voucherVelden { / toegangscode / status / klantEmail..."
- Current fragment: "// Haal de eerste 100 vouchers op om zeker te zijn dat we de juiste vinden / const query = ` / query GetAllVouchersForAuth { / vouchers(first: 100) { / nodes { / databaseId / ti..."

### 2026-11-05T21:00:38.755Z | saved | components/LoginScreen.tsx
- Summary: Line 33: replaced 92 lines with 94 lines.
- Before: 288 lines | 10,168 chars | hash 79594072f6a6 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / import Button from './Button'; / import { useRouter } from 'next/navigation'; / interfac..."
- After: 290 lines | 10,590 chars | hash 811f6f13c11b | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / import Button from './Button'; / import { useRouter } from 'next/navigation'; / interfac..."
- Previous fragment: "// Lokale state voor vloeiend typen op mobiel zonder direct te herrenderen in de parent / const [localCode, setLocalCode] = useState(toegangscode); / const [localEmail, setLocal..."
- Current fragment: "const [localCode, setLocalCode] = useState(toegangscode); / const [localEmail, setLocalEmail] = useState(klantEmail); / useEffect(() => { / setLocalCode(toegangscode); / }, [toe..."

### 2026-11-05T20:52:17.775Z | saved | app/api/verify-voucher/route.ts
- Summary: Line 1: inserted 82 lines.
- Before: 0 lines | 0 chars | hash empty
- After: 82 lines | 2,711 chars | hash 6ee5746b80fa | preview: "import { NextResponse } from 'next/server'; / export async function GET(request: Request) { / const { searchParams } = new URL(request.url); / const code = searchParams.get('code'); / const email = searchParams.get('e..."
- Current fragment: "import { NextResponse } from 'next/server'; / export async function GET(request: Request) { / const { searchParams } = new URL(request.url); / const code = searchParams.get('cod..."

### 2026-11-05T20:52:11.775Z | created | app/api/verify-voucher/route.ts
- Summary: Created file.
- After: 0 lines | 0 chars | hash empty

### 2026-11-05T20:52:07.165Z | created | app/api/verify-voucher
- Summary: Created file.

### 2026-11-05T20:50:48.614Z | saved | app/api/auth/route.ts
- Summary: Line 20: replaced 79 lines with 77 lines.
- Before: 110 lines | 3,696 chars | hash ef793b37ea67 | preview: "import { NextResponse } from 'next/server'; / export async function POST(request: Request) { / try { / const body = await request.json(); / const { toegangscode, klantEmail } = body; / if (!toegangscode || !klantEmail..."
- After: 108 lines | 3,505 chars | hash 9b430fcc09dc | preview: "import { NextResponse } from 'next/server'; / export async function POST(request: Request) { / try { / const body = await request.json(); / const { toegangscode, klantEmail } = body; / if (!toegangscode || !klantEmail..."
- Previous fragment: "// 1. Zoek de voucher op in WordPress via GraphQL / const query = ` / query GetVoucher($code: String!) { / vouchers(where: { search: $code }) { / nodes { / databaseId / title /..."
- Current fragment: "const query = ` / query GetVoucher($code: String!) { / vouchers(where: { search: $code }) { / nodes { / databaseId / title / voucherVelden { / toegangscode / status / klantEmail..."

### 2026-11-05T20:39:39.791Z | saved | app/api/auth/route.ts
- Summary: Line 1: inserted 110 lines.
- Before: 0 lines | 0 chars | hash empty
- After: 110 lines | 3,696 chars | hash ef793b37ea67 | preview: "import { NextResponse } from 'next/server'; / export async function POST(request: Request) { / try { / const body = await request.json(); / const { toegangscode, klantEmail } = body; / if (!toegangscode || !klantEmail..."
- Current fragment: "import { NextResponse } from 'next/server'; / export async function POST(request: Request) { / try { / const body = await request.json(); / const { toegangscode, klantEmail } =..."

### 2026-11-05T20:39:32.792Z | created | app/api/auth/route.ts
- Summary: Created file.
- After: 0 lines | 0 chars | hash empty

### 2026-11-05T18:04:09.989Z | saved | app/download/page.tsx
- Summary: Line 122: replaced 227 lines with 260 lines.
- Before: 389 lines | 18,877 chars | hash 242f0a80c3a9 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import { useRouter } from 'next/navigation'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / import { getPageDat..."
- After: 422 lines | 20,388 chars | hash a12394416f45 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import { useRouter } from 'next/navigation'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / import { getPageDat..."
- Previous fragment: "const matchendeRijen = woningTypenLijst.filter((w: any) => { / const naam = (w?.typeNaam || w?.typenaam || '').toLowerCase().replace(/[^a-z0-9]/g, ''); / const indTitel = (w?.in..."
- Current fragment: "// 1. Verzamel alle rijen die matchen met woningtype én indeling / const matchendeRijen = woningTypenLijst.filter((w: any) => { / const naam = (w?.typeNaam || w?.typenaam || '')..."

### 2026-11-05T17:49:48.314Z | saved | app/download/page.tsx
- Summary: Line 39: replaced 121 lines with 116 lines.
- Before: 394 lines | 19,207 chars | hash 9f8b311e0fe8 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import { useRouter } from 'next/navigation'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / import { getPageDat..."
- After: 389 lines | 18,877 chars | hash 242f0a80c3a9 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import { useRouter } from 'next/navigation'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / import { getPageDat..."
- Previous fragment: "// Live backend verificatie / try { / const res = await fetch(`/api/verify-voucher?code=${encodeURIComponent(voucherCode)}`); / if (res.ok) { / const voucherInfo = await res.jso..."
- Current fragment: "try { / const res = await fetch(`/api/verify-voucher?code=${encodeURIComponent(voucherCode)}`); / if (res.ok) { / const voucherInfo = await res.json(); / if (!voucherInfo || vou..."

### 2026-11-05T17:47:48.401Z | saved | app/download/page.tsx
- Summary: Line 1: inserted 394 lines.
- Before: 0 lines | 0 chars | hash empty
- After: 394 lines | 19,207 chars | hash 9f8b311e0fe8 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import { useRouter } from 'next/navigation'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / import { getPageDat..."
- Current fragment: "'use client'; / import { useState, useEffect } from 'react'; / import { useRouter } from 'next/navigation'; / import Header from '@/components/Header'; / import Footer from '@/c..."

### 2026-11-05T17:41:37.984Z | saved | components/configurator/StepFourConfirmation.tsx
- Summary: Line 57: replaced 1 line with 1 line.
- Before: 351 lines | 17,011 chars | hash 34c0c7bfcdaa | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from '../Button'; / const PARTNER_NAAM = 'Aanhuis Spijk'; /..."
- After: 351 lines | 17,011 chars | hash ad5e8b9d9763 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from '../Button'; / const PARTNER_NAAM = 'Aanhuis Spijk'; /..."
- Previous fragment: "]"
- Current fragment: ")"


## Hot Files
- components/configurator/StepThreeVisuals.tsx (8 tracked changes)
- app/api/auth/route.ts (6 tracked changes)
- app/download/page.tsx (6 tracked changes)
- components/configurator/StepOnewoning.tsx (6 tracked changes)
- components/configurator/StepFourConfirmation.tsx (5 tracked changes)
- components/configurator/StepTwoDesign.tsx (3 tracked changes)
- app/api/verify-voucher/route.ts (2 tracked changes)
- components/LoginScreen.tsx (2 tracked changes)

## Git Snapshot
- Branch: main
- HEAD: 2026-11-05 247774b fix(auth): fix typo in email variable name for TypeScript check
- Working tree summary: 5 modifieds
- M app/api/auth/route.ts
- M components/LoginScreen.tsx
- M graphify-out/WORKSPACE_MEMORY.md
- M workspace.json
- M workspacememory.md

## GitHub Snapshot
GitHub Repository: marketing-smartheads/nomi-configurator
Visibility: public | Default branch: main
Stars: 0 | Forks: 0 | Open issues: 0

Latest commit on main:
- 6163e5c by Bas van Dooremalen on 2026-11-05
  fix(auth): fetch all vouchers and robustly match access code case-insensitively

URL: https://github.com/marketing-smartheads/nomi-configurator

## Graphify Snapshot
Graphify report not found. Generate Graphify output if you want architecture-aware memory excerpts here.

## Project Planner
- Project planner is not configured yet. Enable it in the chat panel to generate a time-based todo list and progress rescue briefs.

## Agent Notes
- If a future task asks what changed recently, start with `Recent Changes`, `Tracked Snapshots`, `Hot Files`, and `Git Snapshot`.
- If a future task asks how the project is organized, combine this file with `graphify-out/GRAPH_REPORT.md`.
- If a future task needs repository-level context, use `Package Snapshot`, the GitHub snapshot, and the Graphify snapshot before rescanning broad parts of the repo.
