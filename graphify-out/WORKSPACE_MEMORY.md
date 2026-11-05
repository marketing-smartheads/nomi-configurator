# Workspace Memory
This file is maintained automatically by Code Janitor so Claude, Codex, Bob, and any other AI agent can reuse repo context without rescanning everything from scratch.
Generated: 2026-11-05T21:42:22.162Z
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
- Last activity: 2026-11-05T21:42:20.418Z
## Workspace Focus
- Active file in focus: components/LoginScreen.tsx
- Hottest files right now: app/api/auth/route.ts (6), components/configurator/StepThreeVisuals.tsx (6), app/download/page.tsx (5), components/configurator/StepOnewoning.tsx (5)
- Suggested starting points: components/LoginScreen.tsx, app/api/auth/route.ts, components/configurator/StepThreeVisuals.tsx, app/download/page.tsx, components/configurator/StepOnewoning.tsx, app/api/verify-voucher/route.ts
## Current Workspace
- Active file: components/LoginScreen.tsx
- Tracked files in snapshot: 72
- Top-level areas: public (21), components (18), [root] (15), app (15), lib (3)
- Primary file types: .tsx (24), .ts (12), .svg (9), .json (4), .md (4), .woff (4), .woff2 (4), .png (3)
- Key files: .gitignore, AGENTS.md, README.md, package-lock.json, package.json, tsconfig.json
## Package Snapshot
- Package: tg-configurator v0.1.0
- Package manager: not declared
- Scripts: dev, build, start, lint
- Runtime dependencies: client-zip, next, react, react-dom, react-icons, react-player, resend
- Dev dependencies: @tailwindcss/postcss, @types/node, @types/react, @types/react-dom, eslint, eslint-config-next, tailwindcss, typescript
## Current Stack
- Logged change events: 40
- Change mix: save (35), create (5)
- Remembered file snapshots: 47
- Working tree summary: 4 modifieds, 1 untracked
## Tracked Snapshots
- components/LoginScreen.tsx | 285 lines | 10126 chars | hash 5cfbae817c0e
  Last snapshot: 2026-11-05T21:42:20.418Z
  Preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / import Button from './Button'; / import { useRouter } from 'next/navigation'; / interfac..."
- app/api/auth-voucher/route.ts | 122 lines | 4017 chars | hash 78581114598f
  Last snapshot: 2026-11-05T21:41:45.970Z
  Preview: "import { NextResponse } from 'next/server'; / export const dynamic = 'force-dynamic'; / export async function POST(request: Request) { / try { / const body = await request.json(); / const { toegangscode, klantEmail }..."
- app/api/vouchers/route.ts | 170 lines | 5400 chars | hash 91dd6934c722
  Last snapshot: 2026-11-05T21:35:38.578Z
  Preview: "import { NextResponse } from 'next/server'; / export const dynamic = 'force-dynamic'; / // 1. GET: Altijd veilig array-formaat teruggeven / export async function GET() { / try { / const endpoint = process.env.NEXT_PUB..."
- app/api/verify-voucher/route.ts | 82 lines | 2711 chars | hash 6ee5746b80fa
  Last snapshot: 2026-11-05T21:16:12.510Z
  Preview: "import { NextResponse } from 'next/server'; / export async function GET(request: Request) { / const { searchParams } = new URL(request.url); / const code = searchParams.get('code'); / const email = searchParams.get('e..."
- app/api/auth/route.ts | 119 lines | 3894 chars | hash aab870b5b72b
  Last snapshot: 2026-11-05T21:09:16.942Z
  Preview: "import { NextResponse } from 'next/server'; / export async function POST(request: Request) { / try { / const body = await request.json(); / const { toegangscode, klantEmail } = body; / if (!toegangscode || !klantEmail..."
- app/download/page.tsx | 422 lines | 20388 chars | hash a12394416f45
  Last snapshot: 2026-11-05T18:04:09.989Z
  Preview: "'use client'; / import { useState, useEffect } from 'react'; / import { useRouter } from 'next/navigation'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / import { getPageDat..."
- components/configurator/StepFourConfirmation.tsx | 351 lines | 17011 chars | hash ad5e8b9d9763
  Last snapshot: 2026-11-05T17:41:37.984Z
  Preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from '../Button'; / const PARTNER_NAAM = 'Aanhuis Spijk'; /..."
- components/configurator/StepOnewoning.tsx | 122 lines | 5571 chars | hash 7c52c9f0546f
  Last snapshot: 2026-11-05T17:28:34.891Z
  Preview: "'use client'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / selectedIndeling, / setSelectedIndeling / }: any) { / const gefilterdeLijst = woningType / ?..."

## Recent Changes
### 2026-11-05T21:42:20.418Z | saved | components/LoginScreen.tsx
- Summary: Line 77: replaced 1 line with 1 line.
- Before: 285 lines | 10,122 chars | hash 032ed2f2b615 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / import Button from './Button'; / import { useRouter } from 'next/navigation'; / interfac..."
- After: 285 lines | 10,126 chars | hash 5cfbae817c0e | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / import Button from './Button'; / import { useRouter } from 'next/navigation'; / interfac..."
- Previous fragment: "vouchers"
- Current fragment: "auth-voucher"

### 2026-11-05T21:41:45.970Z | saved | app/api/auth-voucher/route.ts
- Summary: Line 1: inserted 122 lines.
- Before: 0 lines | 0 chars | hash empty
- After: 122 lines | 4,017 chars | hash 78581114598f | preview: "import { NextResponse } from 'next/server'; / export const dynamic = 'force-dynamic'; / export async function POST(request: Request) { / try { / const body = await request.json(); / const { toegangscode, klantEmail }..."
- Current fragment: "import { NextResponse } from 'next/server'; / export const dynamic = 'force-dynamic'; / export async function POST(request: Request) { / try { / const body = await request.json(..."

### 2026-11-05T21:41:40.944Z | created | app/api/auth-voucher/route.ts
- Summary: Created file.
- After: 0 lines | 0 chars | hash empty

### 2026-11-05T21:41:32.383Z | created | app/api/auth-voucher
- Summary: Created file.

### 2026-11-05T21:35:38.578Z | saved | app/api/vouchers/route.ts
- Summary: Line 5: replaced 124 lines with 126 lines.
- Before: 168 lines | 5,397 chars | hash 4871544f8023 | preview: "import { NextResponse } from 'next/server'; / export const dynamic = 'force-dynamic'; / // 1. GET: Voor het ophalen van alle vouchers (nodig voor frontend checks) / export async function GET() { / try { / const endpoi..."
- After: 170 lines | 5,400 chars | hash 91dd6934c722 | preview: "import { NextResponse } from 'next/server'; / export const dynamic = 'force-dynamic'; / // 1. GET: Altijd veilig array-formaat teruggeven / export async function GET() { / try { / const endpoint = process.env.NEXT_PUB..."
- Previous fragment: "Voor het ophalen van alle vouchers (nodig voor frontend checks) / export async function GET() { / try { / const endpoint = process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT ||..."
- Current fragment: "Altijd veilig array-formaat teruggeven / export async function GET() { / try { / const endpoint = process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT || ''; / const wpUser = proc..."

### 2026-11-05T21:31:27.484Z | saved | app/api/vouchers/route.ts
- Summary: Line 3: replaced 124 lines with 126 lines.
- Before: 166 lines | 5,400 chars | hash 5d6cca9cae30 | preview: "import { NextResponse } from 'next/server'; / // 1. GET: Voor het ophalen van alle vouchers (nodig voor andere componenten in de app) / export async function GET() { / try { / const endpoint = process.env.NEXT_PUBLIC_..."
- After: 168 lines | 5,397 chars | hash 4871544f8023 | preview: "import { NextResponse } from 'next/server'; / export const dynamic = 'force-dynamic'; / // 1. GET: Voor het ophalen van alle vouchers (nodig voor frontend checks) / export async function GET() { / try { / const endpoi..."
- Previous fragment: "// 1. GET: Voor het ophalen van alle vouchers (nodig voor andere componenten in de app) / export async function GET() { / try { / const endpoint = process.env.NEXT_PUBLIC_WORDPR..."
- Current fragment: "export const dynamic = 'force-dynamic'; / // 1. GET: Voor het ophalen van alle vouchers (nodig voor frontend checks) / export async function GET() { / try { / const endpoint = p..."

### 2026-11-05T21:23:04.616Z | saved | app/api/vouchers/route.ts
- Summary: Line 3: replaced 68 lines with 115 lines.
- Before: 119 lines | 3,880 chars | hash ee96066e9cc0 | preview: "import { NextResponse } from 'next/server'; / export async function POST(request: Request) { / try { / const body = await request.json(); / const { toegangscode, klantEmail } = body; / if (!toegangscode || !klantEmail..."
- After: 166 lines | 5,400 chars | hash 5d6cca9cae30 | preview: "import { NextResponse } from 'next/server'; / // 1. GET: Voor het ophalen van alle vouchers (nodig voor andere componenten in de app) / export async function GET() { / try { / const endpoint = process.env.NEXT_PUBLIC_..."
- Previous fragment: "export async function POST(request: Request) { / try { / const body = await request.json(); / const { toegangscode, klantEmail } = body; / if (!toegangscode || !klantEmail) { /..."
- Current fragment: "// 1. GET: Voor het ophalen van alle vouchers (nodig voor andere componenten in de app) / export async function GET() { / try { / const endpoint = process.env.NEXT_PUBLIC_WORDPR..."

### 2026-11-05T21:19:23.058Z | saved | components/LoginScreen.tsx
- Summary: Line 76: replaced 20 lines with 20 lines.
- Before: 285 lines | 10,065 chars | hash ed423437d36b | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / import Button from './Button'; / import { useRouter } from 'next/navigation'; / interfac..."
- After: 285 lines | 10,122 chars | hash 032ed2f2b615 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / import Button from './Button'; / import { useRouter } from 'next/navigation'; / interfac..."
- Previous fragment: "auth endpoint aan / const res = await fetch('/api/auth', { / method: 'POST', / headers: { 'Content-Type': 'application/json' }, / body: JSON.stringify({ / toegangscode: ingevoer..."
- Current fragment: "vouchers endpoint aan om de combinatie strikt te verifiëren / const res = await fetch('/api/vouchers', { / method: 'POST', / headers: { 'Content-Type': 'application/json' }, / b..."

### 2026-11-05T21:16:23.103Z | saved | app/api/vouchers/route.ts
- Summary: Line 3: replaced 48 lines with 115 lines.
- Before: 52 lines | 1,568 chars | hash 0eacd0d2ae72 | preview: "import { NextResponse } from 'next/server'; / export async function GET() { / try { / const endpoint = process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT || ''; / const wpUser = process.env.WORDPRESS_AUTH_USER; / cons..."
- After: 119 lines | 3,880 chars | hash ee96066e9cc0 | preview: "import { NextResponse } from 'next/server'; / export async function POST(request: Request) { / try { / const body = await request.json(); / const { toegangscode, klantEmail } = body; / if (!toegangscode || !klantEmail..."
- Previous fragment: "GET() { / try { / const endpoint = process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT || ''; / const wpUser = process.env.WORDPRESS_AUTH_USER; / const wpPass = process.env.WORDP..."
- Current fragment: "POST(request: Request) { / try { / const body = await request.json(); / const { toegangscode, klantEmail } = body; / if (!toegangscode || !klantEmail) { / return NextResponse.js..."

### 2026-11-05T21:16:12.510Z | saved | app/api/verify-voucher/route.ts
- Summary: Line 3: replaced 115 lines with 78 lines.
- Before: 119 lines | 3,880 chars | hash ee96066e9cc0 | preview: "import { NextResponse } from 'next/server'; / export async function POST(request: Request) { / try { / const body = await request.json(); / const { toegangscode, klantEmail } = body; / if (!toegangscode || !klantEmail..."
- After: 82 lines | 2,711 chars | hash 6ee5746b80fa | preview: "import { NextResponse } from 'next/server'; / export async function GET(request: Request) { / const { searchParams } = new URL(request.url); / const code = searchParams.get('code'); / const email = searchParams.get('e..."
- Previous fragment: "POST(request: Request) { / try { / const body = await request.json(); / const { toegangscode, klantEmail } = body; / if (!toegangscode || !klantEmail) { / return NextResponse.js..."
- Current fragment: "GET(request: Request) { / const { searchParams } = new URL(request.url); / const code = searchParams.get('code'); / const email = searchParams.get('email'); / if (!code) { / ret..."

### 2026-11-05T21:16:03.815Z | saved | app/api/verify-voucher/route.ts
- Summary: Line 3: replaced 78 lines with 115 lines.
- Before: 82 lines | 2,711 chars | hash 6ee5746b80fa | preview: "import { NextResponse } from 'next/server'; / export async function GET(request: Request) { / const { searchParams } = new URL(request.url); / const code = searchParams.get('code'); / const email = searchParams.get('e..."
- After: 119 lines | 3,880 chars | hash ee96066e9cc0 | preview: "import { NextResponse } from 'next/server'; / export async function POST(request: Request) { / try { / const body = await request.json(); / const { toegangscode, klantEmail } = body; / if (!toegangscode || !klantEmail..."
- Previous fragment: "GET(request: Request) { / const { searchParams } = new URL(request.url); / const code = searchParams.get('code'); / const email = searchParams.get('email'); / if (!code) { / ret..."
- Current fragment: "POST(request: Request) { / try { / const body = await request.json(); / const { toegangscode, klantEmail } = body; / if (!toegangscode || !klantEmail) { / return NextResponse.js..."

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


## Hot Files
- app/api/auth/route.ts (6 tracked changes)
- components/configurator/StepThreeVisuals.tsx (6 tracked changes)
- app/download/page.tsx (5 tracked changes)
- components/configurator/StepOnewoning.tsx (5 tracked changes)
- app/api/verify-voucher/route.ts (4 tracked changes)
- app/api/vouchers/route.ts (4 tracked changes)
- components/LoginScreen.tsx (4 tracked changes)
- app/api/auth-voucher/route.ts (2 tracked changes)

## Git Snapshot
- Branch: main
- HEAD: 2026-11-05 63008f4 fix(api): ensure safe array response in GET and fix POST handler for vouchers
- Working tree summary: 4 modifieds, 1 untracked
- M components/LoginScreen.tsx
- M graphify-out/WORKSPACE_MEMORY.md
- M workspace.json
- M workspacememory.md
- ?? app/api/auth-voucher/

## GitHub Snapshot
GitHub Repository: marketing-smartheads/nomi-configurator
Visibility: public | Default branch: main
Stars: 0 | Forks: 0 | Open issues: 0

Latest commit on main:
- 63008f4 by Bas van Dooremalen on 2026-11-05
  fix(api): ensure safe array response in GET and fix POST handler for vouchers

URL: https://github.com/marketing-smartheads/nomi-configurator

## Graphify Snapshot
Graphify report not found. Generate Graphify output if you want architecture-aware memory excerpts here.

## Project Planner
- Project planner is not configured yet. Enable it in the chat panel to generate a time-based todo list and progress rescue briefs.

## Agent Notes
- If a future task asks what changed recently, start with `Recent Changes`, `Tracked Snapshots`, `Hot Files`, and `Git Snapshot`.
- If a future task asks how the project is organized, combine this file with `graphify-out/GRAPH_REPORT.md`.
- If a future task needs repository-level context, use `Package Snapshot`, the GitHub snapshot, and the Graphify snapshot before rescanning broad parts of the repo.
