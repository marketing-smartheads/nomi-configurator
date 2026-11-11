# Workspace Memory
This file is maintained automatically by Code Janitor so Claude, Codex, Bob, and any other AI agent can reuse repo context without rescanning everything from scratch.
Generated: 2026-11-11T12:30:16.468Z
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
- Last activity: 2026-11-11T12:30:14.059Z
## Workspace Focus
- Active file in focus: app/download/page.tsx
- Hottest files right now: app/download/page.tsx (10), app/api/auth/login/route.ts (5), components/configurator/StepFourConfirmation.tsx (4), components/configurator/StepThreeVisuals.tsx (4)
- Suggested starting points: app/download/page.tsx, app/api/auth/login/route.ts, components/configurator/StepFourConfirmation.tsx, components/configurator/StepThreeVisuals.tsx, components/configurator/StepTwoDesign.tsx, app/api/verify-voucher/route.ts
## Current Workspace
- Active file: app/download/page.tsx
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
- app/download/page.tsx | 420 lines | 20448 chars | hash 7e834601ad89
  Last snapshot: 2026-11-11T12:30:14.059Z
  Preview: "'use client'; / import { useState, useEffect } from 'react'; / import { useRouter } from 'next/navigation'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / import { getPageDat..."
- app/api/auth/login/route.ts | 57 lines | 2010 chars | hash 7282b64cb271
  Last snapshot: 2026-11-11T11:15:01.634Z
  Preview: "import { NextResponse } from 'next/server'; / export async function POST(request: Request) { / try { / const { username, password } = await request.json(); / if (!username || !password) { / return NextResponse.json( /..."
- app/dashboard/page.tsx | 382 lines | 18813 chars | hash 7355bba0f367
  Last snapshot: 2026-11-11T11:02:54.488Z
  Preview: "'use client'; / import React, { useState, useEffect } from 'react'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / export default function DashboardPage() { / const [isLogged..."
- app/api/vouchers/route.ts | 52 lines | 1666 chars | hash a0397091837f
  Last snapshot: 2026-11-11T10:14:40.122Z
  Preview: "import { NextResponse } from 'next/server'; / export const dynamic = 'force-dynamic'; / export async function GET(request: Request) { / try { / const endpoint = process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT || 'h..."
- app/api/verify-voucher/route.ts | 217 lines | 7325 chars | hash 640b4a1e61dd
  Last snapshot: 2026-11-11T09:04:13.793Z
  Preview: "import { NextResponse } from 'next/server'; / export const dynamic = 'force-dynamic'; / // 🛑 32 Verhuur-bouwnummers (Jongerius) die in de code en het dashboard geblokkeerd zijn / const VERHUUR_VOUCHERS = new Set([ /..."
- components/configurator/StepFourConfirmation.tsx | 361 lines | 17897 chars | hash 56051d42a992
  Last snapshot: 2026-11-06T15:36:52.529Z
  Preview: "// components/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from '../Button';..."
- components/configurator/StepThreeVisuals.tsx | 492 lines | 20311 chars | hash 230088061fb3
  Last snapshot: 2026-11-06T11:15:50.269Z
  Preview: "// components/StepThreeVisuals.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / export default function StepThreeVisuals({ / stepTitle, / configuratorData, / desig..."
- components/configurator/StepTwoDesign.tsx | 205 lines | 9146 chars | hash 14bc4f3bcec2
  Last snapshot: 2026-11-06T11:10:28.030Z
  Preview: "// components/StepTwoDesign.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / export default function StepTwoDesign({ / stepTitle, /..."

## Recent Changes
### 2026-11-11T12:30:14.059Z | saved | app/download/page.tsx
- Summary: Line 59: replaced 110 lines with 110 lines.
- Before: 420 lines | 20,418 chars | hash efe0c973525b | preview: "'use client'; / import { useState, useEffect } from 'react'; / import { useRouter } from 'next/navigation'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / import { getPageDat..."
- After: 420 lines | 20,448 chars | hash 7e834601ad89 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import { useRouter } from 'next/navigation'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / import { getPageDat..."
- Previous fragment: "WordPress database is ALTIJD leidend bij een vouchercode! / let resolvedWoning = ''; / let resolvedPakket = ''; / let resolvedIndeling = ''; / if (voucherCode) { / try { / const..."
- Current fragment: "STAP 1: WordPress database is ALTIJD 100% leidend bij een vouchercode! / let resolvedWoning = ''; / let resolvedPakket = ''; / let resolvedIndeling = ''; / if (voucherCode) { /..."

### 2026-11-11T12:25:01.645Z | saved | app/download/page.tsx
- Summary: Line 27: replaced 158 lines with 171 lines.
- Before: 407 lines | 19,955 chars | hash 3693fadf8a3c | preview: "'use client'; / import { useState, useEffect } from 'react'; / import { useRouter } from 'next/navigation'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / import { getPageDat..."
- After: 420 lines | 20,418 chars | hash efe0c973525b | preview: "'use client'; / import { useState, useEffect } from 'react'; / import { useRouter } from 'next/navigation'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / import { getPageDat..."
- Previous fragment: "'') / : ''; / const isDefinitiefBevestigd = / (typeof window !== 'undefined' && localStorage.getItem('configurator_definitief_bevestigd') === 'true') || / (typeof window !== 'un..."
- Current fragment: "sessionStorage.getItem('voucherCode') || localStorage.getItem('voucherCode') || '') / : ''; / const isDefinitiefBevestigd = / (typeof window !== 'undefined' && localStorage.getI..."

### 2026-11-11T12:18:00.321Z | saved | app/download/page.tsx
- Summary: Line 66: inserted 1 line.
- Before: 407 lines | 19,948 chars | hash df9374613365 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import { useRouter } from 'next/navigation'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / import { getPageDat..."
- After: 407 lines | 19,955 chars | hash 3693fadf8a3c | preview: "'use client'; / import { useState, useEffect } from 'react'; / import { useRouter } from 'next/navigation'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / import { getPageDat..."
- Current fragment: "as any"

### 2026-11-11T12:14:58.948Z | saved | app/download/page.tsx
- Summary: Line 59: replaced 124 lines with 126 lines.
- Before: 405 lines | 19,557 chars | hash f4ac65e82e83 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import { useRouter } from 'next/navigation'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / import { getPageDat..."
- After: 407 lines | 19,948 chars | hash df9374613365 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import { useRouter } from 'next/navigation'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / import { getPageDat..."
- Previous fragment: "Haal altijd eerst de echte WordPress gegevens op via de vouchercode (leidend) / let resolvedWoning = ''; / let resolvedPakket = ''; / let resolvedIndeling = ''; / if (voucherCod..."
- Current fragment: "LEIDEND: Haal ALTIJD eerst de echte configuratie op uit de WordPress Voucher tabel op basis van vouchercode / let resolvedWoning = ''; / let resolvedPakket = ''; / let resolvedI..."

### 2026-11-11T11:55:57.864Z | saved | app/download/page.tsx
- Summary: Line 59: replaced 289 lines with 272 lines.
- Before: 422 lines | 20,250 chars | hash 7815a2fe9606 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import { useRouter } from 'next/navigation'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / import { getPageDat..."
- After: 405 lines | 19,557 chars | hash f4ac65e82e83 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import { useRouter } from 'next/navigation'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / import { getPageDat..."
- Previous fragment: "1. Haal ALTIJD eerst de gegevens op uit WordPress op basis van de vouchercode (deze zijn leidend!) / let resolvedWoning = ''; / let resolvedPakket = ''; / let resolvedIndeling =..."
- Current fragment: "Haal altijd eerst de echte WordPress gegevens op via de vouchercode (leidend) / let resolvedWoning = ''; / let resolvedPakket = ''; / let resolvedIndeling = ''; / if (voucherCod..."

### 2026-11-11T11:44:13.062Z | saved | app/download/page.tsx
- Summary: Line 14: replaced 171 lines with 170 lines.
- Before: 423 lines | 20,214 chars | hash d0374c981d6d | preview: "'use client'; / import { useState, useEffect } from 'react'; / import { useRouter } from 'next/navigation'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / import { getPageDat..."
- After: 422 lines | 20,250 chars | hash 7815a2fe9606 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import { useRouter } from 'next/navigation'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / import { getPageDat..."
- Previous fragment: "2'); / const [designPakket, setDesignPakket] = useState<string>('Modern Raw'); / const [pageData, setPageData] = useState<any>(null); / const [isDownloading, setIsDownloading] =..."
- Current fragment: "3'); / const [designPakket, setDesignPakket] = useState<string>('Hotel Chic'); / const [pageData, setPageData] = useState<any>(null); / const [isDownloading, setIsDownloading] =..."

### 2026-11-11T11:23:03.729Z | saved | app/download/page.tsx
- Summary: Line 166: replaced 28 lines with 36 lines.
- Before: 415 lines | 20,274 chars | hash 386c73b4cf72 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import { useRouter } from 'next/navigation'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / import { getPageDat..."
- After: 423 lines | 20,214 chars | hash d0374c981d6d | preview: "'use client'; / import { useState, useEffect } from 'react'; / import { useRouter } from 'next/navigation'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / import { getPageDat..."
- Previous fragment: "// Toon alleen Modern Raw / Pakket A, filter Hotel Chic en Pakket B eruit / if (titel.includes('hotel chic') || titel.includes('pakket b')) return false; / return true; / } / if..."
- Current fragment: "if (titel.includes('hotel chic') || titel.includes('pakket b')) return false; / return true; / } / if (isHotelChic) { / if (titel.includes('modern raw') || titel.includes('pakke..."

### 2026-11-11T11:15:01.634Z | saved | app/api/auth/login/route.ts
- Summary: Line 15: replaced 36 lines with 34 lines.
- Before: 59 lines | 1,580 chars | hash e10c9943f1a5 | preview: "import { NextResponse } from 'next/server'; / export async function POST(request: Request) { / try { / const { username, password } = await request.json(); / if (!username || !password) { / return NextResponse.json( /..."
- After: 57 lines | 2,010 chars | hash 7282b64cb271 | preview: "import { NextResponse } from 'next/server'; / export async function POST(request: Request) { / try { / const { username, password } = await request.json(); / if (!username || !password) { / return NextResponse.json( /..."
- Previous fragment: "// Probeer in te loggen door te testen of de credentials werken via WordPress Basic Auth / const basicAuth = 'Basic ' + Buffer.from(`${username}:${password}`).toString('base64')..."
- Current fragment: "const wpBaseUrl = endpoint.replace('/graphql', ''); / // Verifieer direct via de ingebouwde WordPress REST API / wp-login endpoint / // Dit ondersteunt de standaard gebruikersna..."

### 2026-11-11T11:11:29.098Z | saved | app/api/auth/login/route.ts
- Summary: Line 9: replaced 60 lines with 47 lines.
- Before: 72 lines | 2,206 chars | hash be83984de81f | preview: "import { NextResponse } from 'next/server'; / export async function POST(request: Request) { / try { / const { username, password } = await request.json(); / if (!username || !password) { / return NextResponse.json( /..."
- After: 59 lines | 1,580 chars | hash e10c9943f1a5 | preview: "import { NextResponse } from 'next/server'; / export async function POST(request: Request) { / try { / const { username, password } = await request.json(); / if (!username || !password) { / return NextResponse.json( /..."
- Previous fragment: "Gebruikersnaam en wachtwoord zijn verplicht.' }, / { status: 400 } / ); / } / const wpEndpoint = process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT || 'https://cms.nomi-configur..."
- Current fragment: "Vul zowel je gebruikersnaam als wachtwoord in.' }, / { status: 400 } / ); / } / const endpoint = process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT || 'https://cms.nomi-configur..."

### 2026-11-11T11:02:54.488Z | saved | app/dashboard/page.tsx
- Summary: Line 195: replaced 22 lines with 22 lines.
- Before: 382 lines | 18,835 chars | hash f5b869b5ccb5 | preview: "'use client'; / import React, { useState, useEffect } from 'react'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / export default function DashboardPage() { / const [isLogged..."
- After: 382 lines | 18,813 chars | hash 7355bba0f367 | preview: "'use client'; / import React, { useState, useEffect } from 'react'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / export default function DashboardPage() { / const [isLogged..."
- Previous fragment: "Applicatie wachtwoord.</p> / {loginError && ( / <div className="bg-[#FDF2F2] border border-[#F5C6CB] text-[#721C24] p-3 rounded-lg text-xs mb-4"> / {loginError} / </div> / )} /..."
- Current fragment: "wachtwoord.</p> / {loginError && ( / <div className="bg-[#FDF2F2] border border-[#F5C6CB] text-[#721C24] p-3 rounded-lg text-xs mb-4"> / {loginError} / </div> / )} / <form onSub..."

### 2026-11-11T11:02:07.087Z | saved | app/api/auth/login/route.ts
- Summary: Line 3: replaced 62 lines with 68 lines.
- Before: 66 lines | 2,182 chars | hash 6e4b2b5d2090 | preview: "import { NextResponse } from 'next/server'; / export const dynamic = 'force-dynamic'; / export async function POST(request: Request) { / try { / const { username, password } = await request.json(); / if (!username ||..."
- After: 72 lines | 2,206 chars | hash be83984de81f | preview: "import { NextResponse } from 'next/server'; / export async function POST(request: Request) { / try { / const { username, password } = await request.json(); / if (!username || !password) { / return NextResponse.json( /..."
- Previous fragment: "const dynamic = 'force-dynamic'; / export async function POST(request: Request) { / try { / const { username, password } = await request.json(); / if (!username || !password) {..."
- Current fragment: "async function POST(request: Request) { / try { / const { username, password } = await request.json(); / if (!username || !password) { / return NextResponse.json( / { error: 'Ge..."

### 2026-11-11T10:51:07.877Z | saved | app/download/page.tsx
- Summary: Line 14: replaced 176 lines with 180 lines.
- Before: 411 lines | 19,595 chars | hash 385ae959c3a9 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import { useRouter } from 'next/navigation'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / import { getPageDat..."
- After: 415 lines | 20,274 chars | hash 386c73b4cf72 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import { useRouter } from 'next/navigation'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / import { getPageDat..."
- Previous fragment: "1'); / const [designPakket, setDesignPakket] = useState<string>('Modern Raw'); / const [pageData, setPageData] = useState<any>(null); / const [isDownloading, setIsDownloading] =..."
- Current fragment: "2'); / const [designPakket, setDesignPakket] = useState<string>('Modern Raw'); / const [pageData, setPageData] = useState<any>(null); / const [isDownloading, setIsDownloading] =..."

### 2026-11-11T10:44:59.008Z | saved | app/download/page.tsx
- Summary: Line 174: replaced 8 lines with 16 lines.
- Before: 403 lines | 19,534 chars | hash 6d6c33b404e3 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import { useRouter } from 'next/navigation'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / import { getPageDat..."
- After: 411 lines | 19,595 chars | hash 385ae959c3a9 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import { useRouter } from 'next/navigation'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / import { getPageDat..."
- Previous fragment: "let rawIntro = downloadSectie?.downloadIntroductie || downloadSectie?.download_introductie || 'Alle designbestanden voor %type% — %designpakket%. Download losse bestanden of all..."
- Current fragment: "// Strikte controle: negeer alles wat op JSON of ongewenste data lijkt / let rawIntro = downloadSectie?.downloadIntroductie || downloadSectie?.download_introductie || ''; / if (..."

### 2026-11-11T10:38:50.578Z | saved | app/download/page.tsx
- Summary: Line 174: replaced 83 lines with 87 lines.
- Before: 399 lines | 19,298 chars | hash d6c80bb2a10b | preview: "'use client'; / import { useState, useEffect } from 'react'; / import { useRouter } from 'next/navigation'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / import { getPageDat..."
- After: 403 lines | 19,534 chars | hash 6d6c33b404e3 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import { useRouter } from 'next/navigation'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / import { getPageDat..."
- Previous fragment: "const rawIntro = downloadSectie?.downloadIntroductie || downloadSectie?.download_introductie || 'Alle designbestanden voor %type% — %designpakket%. Download losse bestanden of a..."
- Current fragment: "let rawIntro = downloadSectie?.downloadIntroductie || downloadSectie?.download_introductie || 'Alle designbestanden voor %type% — %designpakket%. Download losse bestanden of all..."

### 2026-11-11T10:33:59.499Z | saved | app/api/vouchers/route.ts


## Hot Files
- app/download/page.tsx (10 tracked changes)
- app/api/auth/login/route.ts (5 tracked changes)
- components/configurator/StepFourConfirmation.tsx (4 tracked changes)
- components/configurator/StepThreeVisuals.tsx (4 tracked changes)
- components/configurator/StepTwoDesign.tsx (4 tracked changes)
- app/api/verify-voucher/route.ts (3 tracked changes)
- app/dashboard/page.tsx (3 tracked changes)
- lib/cms.ts (3 tracked changes)

## Git Snapshot
- Branch: main
- HEAD: 2026-11-11 32feaa2 fix(download): sync storage immediately with wordpress voucher data and ensure correct package labels
- Working tree summary: 1 modified
- M app/download/page.tsx

## GitHub Snapshot
GitHub Repository: marketing-smartheads/nomi-configurator
Visibility: public | Default branch: main
Stars: 0 | Forks: 0 | Open issues: 0

Latest commit on main:
- 32feaa2 by Bas van Dooremalen on 2026-11-11
  fix(download): sync storage immediately with wordpress voucher data and ensure correct package labels

URL: https://github.com/marketing-smartheads/nomi-configurator

## Graphify Snapshot
Graphify report not found. Generate Graphify output if you want architecture-aware memory excerpts here.

## Project Planner
- Project planner is not configured yet. Enable it in the chat panel to generate a time-based todo list and progress rescue briefs.

## Agent Notes
- If a future task asks what changed recently, start with `Recent Changes`, `Tracked Snapshots`, `Hot Files`, and `Git Snapshot`.
- If a future task asks how the project is organized, combine this file with `graphify-out/GRAPH_REPORT.md`.
- If a future task needs repository-level context, use `Package Snapshot`, the GitHub snapshot, and the Graphify snapshot before rescanning broad parts of the repo.
