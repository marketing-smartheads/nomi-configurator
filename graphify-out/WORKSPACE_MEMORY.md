# Workspace Memory
This file is maintained automatically by Code Janitor so Claude, Codex, Bob, and any other AI agent can reuse repo context without rescanning everything from scratch.
Generated: 2026-11-05T22:04:32.361Z
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
- Last activity: 2026-11-05T22:04:29.852Z
## Workspace Focus
- Active file in focus: app/api/vouchers/route.ts
- Hottest files right now: app/api/verify-voucher/route.ts (7), app/api/auth/route.ts (6), app/api/vouchers/route.ts (6), components/LoginScreen.tsx (6)
- Suggested starting points: app/api/vouchers/route.ts, app/api/verify-voucher/route.ts, app/api/auth/route.ts, components/LoginScreen.tsx, app/download/page.tsx, components/configurator/StepOnewoning.tsx
## Current Workspace
- Active file: app/api/vouchers/route.ts
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
- Working tree summary: 5 modifieds
## Tracked Snapshots
- app/api/vouchers/route.ts | 173 lines | 5829 chars | hash 7d05d0a67a66
  Last snapshot: 2026-11-05T22:04:29.852Z
  Preview: "import { NextResponse } from 'next/server'; / export const dynamic = 'force-dynamic'; / // 1. GET: Voor het ophalen van alle vouchers (data-functionaliteit) / export async function GET() { / try { / const endpoint = p..."
- app/api/verify-voucher/route.ts | 123 lines | 4121 chars | hash d299169ddd87
  Last snapshot: 2026-11-05T22:03:02.152Z
  Preview: "import { NextResponse } from 'next/server'; / export const dynamic = 'force-dynamic'; / export async function POST(request: Request) { / try { / const body = await request.json(); / const { toegangscode, klantEmail }..."
- components/LoginScreen.tsx | 284 lines | 10037 chars | hash c83357215be8
  Last snapshot: 2026-11-05T21:50:19.121Z
  Preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / import Button from './Button'; / import { useRouter } from 'next/navigation'; / interfac..."
- app/api/auth-voucher/route.ts | 122 lines | 4017 chars | hash 78581114598f
  Last snapshot: 2026-11-05T21:41:45.970Z
  Preview: "import { NextResponse } from 'next/server'; / export const dynamic = 'force-dynamic'; / export async function POST(request: Request) { / try { / const body = await request.json(); / const { toegangscode, klantEmail }..."
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
### 2026-11-05T22:04:29.852Z | saved | app/api/vouchers/route.ts
- Summary: Line 5: replaced 156 lines with 159 lines.
- Before: 170 lines | 5,387 chars | hash 1570ced2b270 | preview: "import { NextResponse } from 'next/server'; / export const dynamic = 'force-dynamic'; / // 1. GET: Vangt normale dataverzoeken op / export async function GET() { / try { / const endpoint = process.env.NEXT_PUBLIC_WORD..."
- After: 173 lines | 5,829 chars | hash 7d05d0a67a66 | preview: "import { NextResponse } from 'next/server'; / export const dynamic = 'force-dynamic'; / // 1. GET: Voor het ophalen van alle vouchers (data-functionaliteit) / export async function GET() { / try { / const endpoint = p..."
- Previous fragment: "angt normale dataverzoeken op / export async function GET() { / try { / const endpoint = process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT || ''; / const wpUser = process.env.W..."
- Current fragment: "oor het ophalen van alle vouchers (data-functionaliteit) / export async function GET() { / try { / const endpoint = process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT || ''; / c..."

### 2026-11-05T22:03:02.152Z | saved | app/api/verify-voucher/route.ts
- Summary: Saved without a textual diff.
- Before: 123 lines | 4,121 chars | hash d299169ddd87 | preview: "import { NextResponse } from 'next/server'; / export const dynamic = 'force-dynamic'; / export async function POST(request: Request) { / try { / const body = await request.json(); / const { toegangscode, klantEmail }..."
- After: 123 lines | 4,121 chars | hash d299169ddd87 | preview: "import { NextResponse } from 'next/server'; / export const dynamic = 'force-dynamic'; / export async function POST(request: Request) { / try { / const body = await request.json(); / const { toegangscode, klantEmail }..."

### 2026-11-05T21:59:17.742Z | saved | app/api/verify-voucher/route.ts
- Summary: Line 5: replaced 179 lines with 113 lines.
- Before: 189 lines | 6,035 chars | hash 624e8459beac | preview: "import { NextResponse } from 'next/server'; / export const dynamic = 'force-dynamic'; / export async function GET(request: Request) { / const { searchParams } = new URL(request.url); / const code = searchParams.get('c..."
- After: 123 lines | 4,121 chars | hash d299169ddd87 | preview: "import { NextResponse } from 'next/server'; / export const dynamic = 'force-dynamic'; / export async function POST(request: Request) { / try { / const body = await request.json(); / const { toegangscode, klantEmail }..."
- Previous fragment: "GET(request: Request) { / const { searchParams } = new URL(request.url); / const code = searchParams.get('code'); / const email = searchParams.get('email'); / if (!code) { / ret..."
- Current fragment: "POST(request: Request) { / try { / const body = await request.json(); / const { toegangscode, klantEmail } = body; / if (!toegangscode || !klantEmail) { / return NextResponse.js..."

### 2026-11-05T21:50:19.121Z | saved | components/LoginScreen.tsx
- Summary: Line 76: replaced 1 line with 1 line.
- Before: 284 lines | 10,043 chars | hash 032b66f8cf72 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / import Button from './Button'; / import { useRouter } from 'next/navigation'; / interfac..."
- After: 284 lines | 10,037 chars | hash c83357215be8 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / import Button from './Button'; / import { useRouter } from 'next/navigation'; / interfac..."
- Previous fragment: "erify-voucher"
- Current fragment: "ouchers"

### 2026-11-05T21:49:30.682Z | saved | app/api/vouchers/route.ts
- Summary: Line 5: replaced 160 lines with 160 lines.
- Before: 170 lines | 5,400 chars | hash 91dd6934c722 | preview: "import { NextResponse } from 'next/server'; / export const dynamic = 'force-dynamic'; / // 1. GET: Altijd veilig array-formaat teruggeven / export async function GET() { / try { / const endpoint = process.env.NEXT_PUB..."
- After: 170 lines | 5,387 chars | hash 1570ced2b270 | preview: "import { NextResponse } from 'next/server'; / export const dynamic = 'force-dynamic'; / // 1. GET: Vangt normale dataverzoeken op / export async function GET() { / try { / const endpoint = process.env.NEXT_PUBLIC_WORD..."
- Previous fragment: "Altijd veilig array-formaat teruggeven / export async function GET() { / try { / const endpoint = process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT || ''; / const wpUser = proc..."
- Current fragment: "Vangt normale dataverzoeken op / export async function GET() { / try { / const endpoint = process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT || ''; / const wpUser = process.env...."

### 2026-11-05T21:46:40.042Z | saved | components/LoginScreen.tsx
- Summary: Line 76: replaced 9 lines with 8 lines.
- Before: 285 lines | 10,126 chars | hash 5cfbae817c0e | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / import Button from './Button'; / import { useRouter } from 'next/navigation'; / interfac..."
- After: 284 lines | 10,043 chars | hash 032b66f8cf72 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / import Button from './Button'; / import { useRouter } from 'next/navigation'; / interfac..."
- Previous fragment: "// Roep het /api/vouchers endpoint aan om de combinatie strikt te verifiëren / const res = await fetch('/api/auth-voucher', { / method: 'POST', / headers: { 'Content-Type': 'app..."
- Current fragment: "const res = await fetch('/api/verify-voucher', { / method: 'POST', / headers: { 'Content-Type': 'application/json' }, / body: JSON.stringify({ / toegangscode: ingevoerdeCodeClea..."

### 2026-11-05T21:46:14.270Z | saved | app/api/verify-voucher/route.ts
- Summary: Line 3: replaced 78 lines with 185 lines.
- Before: 82 lines | 2,711 chars | hash 6ee5746b80fa | preview: "import { NextResponse } from 'next/server'; / export async function GET(request: Request) { / const { searchParams } = new URL(request.url); / const code = searchParams.get('code'); / const email = searchParams.get('e..."
- After: 189 lines | 6,035 chars | hash 624e8459beac | preview: "import { NextResponse } from 'next/server'; / export const dynamic = 'force-dynamic'; / export async function GET(request: Request) { / const { searchParams } = new URL(request.url); / const code = searchParams.get('c..."
- Previous fragment: "async function GET(request: Request) { / const { searchParams } = new URL(request.url); / const code = searchParams.get('code'); / const email = searchParams.get('email'); / if..."
- Current fragment: "const dynamic = 'force-dynamic'; / export async function GET(request: Request) { / const { searchParams } = new URL(request.url); / const code = searchParams.get('code'); / cons..."

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


## Hot Files
- app/api/verify-voucher/route.ts (7 tracked changes)
- app/api/auth/route.ts (6 tracked changes)
- app/api/vouchers/route.ts (6 tracked changes)
- components/LoginScreen.tsx (6 tracked changes)
- app/download/page.tsx (5 tracked changes)
- components/configurator/StepOnewoning.tsx (4 tracked changes)
- app/api/auth-voucher/route.ts (2 tracked changes)
- components/configurator/StepFourConfirmation.tsx (2 tracked changes)

## Git Snapshot
- Branch: main
- HEAD: 2026-11-05 b8a87df fix(auth): unify login and verification into the stable /api/vouchers POST endpoint
- Working tree summary: 5 modifieds
- M app/api/verify-voucher/route.ts
- M app/api/vouchers/route.ts
- M graphify-out/WORKSPACE_MEMORY.md
- M workspace.json
- M workspacememory.md

## GitHub Snapshot
GitHub Repository: marketing-smartheads/nomi-configurator
Visibility: public | Default branch: main
Stars: 0 | Forks: 0 | Open issues: 0

Latest commit on main:
- b8a87df by Bas van Dooremalen on 2026-11-05
  fix(auth): unify login and verification into the stable /api/vouchers POST endpoint

URL: https://github.com/marketing-smartheads/nomi-configurator

## Graphify Snapshot
Graphify report not found. Generate Graphify output if you want architecture-aware memory excerpts here.

## Project Planner
- Project planner is not configured yet. Enable it in the chat panel to generate a time-based todo list and progress rescue briefs.

## Agent Notes
- If a future task asks what changed recently, start with `Recent Changes`, `Tracked Snapshots`, `Hot Files`, and `Git Snapshot`.
- If a future task asks how the project is organized, combine this file with `graphify-out/GRAPH_REPORT.md`.
- If a future task needs repository-level context, use `Package Snapshot`, the GitHub snapshot, and the Graphify snapshot before rescanning broad parts of the repo.
