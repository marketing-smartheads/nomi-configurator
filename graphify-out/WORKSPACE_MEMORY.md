# Workspace Memory
This file is maintained automatically by Code Janitor so Claude, Codex, Bob, and any other AI agent can reuse repo context without rescanning everything from scratch.
Generated: 2026-11-11T15:13:14.752Z
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
- Last activity: 2026-11-11T15:13:12.682Z
## Workspace Focus
- Active file in focus: app/dashboard/page.tsx
- Hottest files right now: app/download/page.tsx (13), app/api/auth/login/route.ts (5), app/dashboard/page.tsx (5), components/configurator/StepFourConfirmation.tsx (4)
- Suggested starting points: app/dashboard/page.tsx, app/download/page.tsx, app/api/auth/login/route.ts, components/configurator/StepFourConfirmation.tsx, app/api/verify-voucher/route.ts, components/configurator/StepThreeVisuals.tsx
## Current Workspace
- Active file: app/dashboard/page.tsx
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
- app/dashboard/page.tsx | 397 lines | 19782 chars | hash f472d95f0ee7
  Last snapshot: 2026-11-11T15:13:12.682Z
  Preview: "'use client'; / import React, { useState, useEffect } from 'react'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / // Lijst van huurvouchers die we uit het dashboard willen f..."
- app/api/verify-voucher/route.ts | 217 lines | 7296 chars | hash 29f0ec9ff7a4
  Last snapshot: 2026-11-11T15:00:35.551Z
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
- app/api/vouchers/route.ts | 52 lines | 1666 chars | hash a0397091837f
  Last snapshot: 2026-11-11T10:14:40.122Z
  Preview: "import { NextResponse } from 'next/server'; / export const dynamic = 'force-dynamic'; / export async function GET(request: Request) { / try { / const endpoint = process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT || 'h..."
- components/configurator/StepFourConfirmation.tsx | 361 lines | 17897 chars | hash 56051d42a992
  Last snapshot: 2026-11-06T15:36:52.529Z
  Preview: "// components/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from '../Button';..."
- components/configurator/StepThreeVisuals.tsx | 492 lines | 20311 chars | hash 230088061fb3
  Last snapshot: 2026-11-06T11:15:50.269Z
  Preview: "// components/StepThreeVisuals.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / export default function StepThreeVisuals({ / stepTitle, / configuratorData, / desig..."

## Recent Changes
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

### 2026-11-11T12:57:11.153Z | saved | lib/cms.ts
- Summary: Line 1: replaced 56 lines with 316 lines.
- Before: 58 lines | 1,758 chars | hash fb9ca5b354eb | preview: "export async function getVoucherData(voucherCode: string) { / const cleanCode = voucherCode.trim().toUpperCase(); / const query = ` / query GetAllVouchers { / vouchers(first: 100) { / nodes { / title / slug / voucherV..."
- After: 318 lines | 9,223 chars | hash 32e06f359223 | preview: "// lib/cms.ts / export async function getPageData() { / const query = ` / query GetConfiguratorPage { / page(id: "28", idType: DATABASE_ID) { / sections { / hero { / subtitel / titel / omschrijving / afbeelding { / no..."
- Previous fragment: "export async function getVoucherData(voucherCode: string) { / const cleanCode = voucherCode.trim().toUpperCase(); / const query = ` / query GetAllVouchers { / vouchers(first: 10..."
- Current fragment: "// lib/cms.ts / export async function getPageData() { / const query = ` / query GetConfiguratorPage { / page(id: "28", idType: DATABASE_ID) { / sections { / hero { / subtitel /..."

### 2026-11-11T12:52:14.634Z | saved | lib/cms.ts
- Summary: Line 1: replaced 316 lines with 56 lines.
- Before: 318 lines | 9,223 chars | hash 32e06f359223 | preview: "// lib/cms.ts / export async function getPageData() { / const query = ` / query GetConfiguratorPage { / page(id: "28", idType: DATABASE_ID) { / sections { / hero { / subtitel / titel / omschrijving / afbeelding { / no..."
- After: 58 lines | 1,758 chars | hash fb9ca5b354eb | preview: "export async function getVoucherData(voucherCode: string) { / const cleanCode = voucherCode.trim().toUpperCase(); / const query = ` / query GetAllVouchers { / vouchers(first: 100) { / nodes { / title / slug / voucherV..."
- Previous fragment: "// lib/cms.ts / export async function getPageData() { / const query = ` / query GetConfiguratorPage { / page(id: "28", idType: DATABASE_ID) { / sections { / hero { / subtitel /..."
- Current fragment: "export async function getVoucherData(voucherCode: string) { / const cleanCode = voucherCode.trim().toUpperCase(); / const query = ` / query GetAllVouchers { / vouchers(first: 10..."

### 2026-11-11T12:47:20.512Z | saved | app/download/page.tsx
- Summary: Line 14: replaced 163 lines with 168 lines.
- Before: 412 lines | 20,005 chars | hash 7a1a33f7788a | preview: "'use client'; / import { useState, useEffect } from 'react'; / import { useRouter } from 'next/navigation'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / import { getPageDat..."
- After: 417 lines | 20,121 chars | hash 00549e87a8a1 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import { useRouter } from 'next/navigation'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / import { getPageDat..."
- Previous fragment: "3'); / const [designPakket, setDesignPakket] = useState<string>('Hotel Chic'); / const [pageData, setPageData] = useState<any>(null); / const [isDownloading, setIsDownloading] =..."
- Current fragment: "1'); / const [designPakket, setDesignPakket] = useState<string>('Modern Raw'); / const [pageData, setPageData] = useState<any>(null); / const [isDownloading, setIsDownloading] =..."

### 2026-11-11T12:35:42.323Z | saved | app/download/page.tsx
- Summary: Line 39: replaced 146 lines with 138 lines.
- Before: 420 lines | 20,448 chars | hash 7e834601ad89 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import { useRouter } from 'next/navigation'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / import { getPageDat..."
- After: 412 lines | 20,005 chars | hash 7a1a33f7788a | preview: "'use client'; / import { useState, useEffect } from 'react'; / import { useRouter } from 'next/navigation'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / import { getPageDat..."
- Previous fragment: "let cmsData = null; / try { / const fetchPromise = getPageData(); / const timeoutPromise = new Promise((_, reject) => / setTimeout(() => reject(new Error('CMS timeout')), 5000)..."
- Current fragment: "// 1. Haal ALTIJD direct de echte data op uit WordPress op basis van de vouchercode (100% Leidend) / let resolvedWoning = 'Type A'; / let resolvedPakket = 'Hotel Chic'; / let re..."

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


## Hot Files
- app/download/page.tsx (13 tracked changes)
- app/api/auth/login/route.ts (5 tracked changes)
- app/dashboard/page.tsx (5 tracked changes)
- components/configurator/StepFourConfirmation.tsx (4 tracked changes)
- app/api/verify-voucher/route.ts (3 tracked changes)
- components/configurator/StepThreeVisuals.tsx (3 tracked changes)
- lib/cms.ts (3 tracked changes)
- app/api/vouchers/route.ts (2 tracked changes)

## Git Snapshot
- Branch: main
- HEAD: 2026-11-11 9fab2db feat(dashboard & security): filter out rental vouchers to show only relevant buy-side homes
- Working tree summary: 1 modified
- M app/dashboard/page.tsx

## GitHub Snapshot
GitHub Repository: marketing-smartheads/nomi-configurator
Visibility: public | Default branch: main
Stars: 0 | Forks: 0 | Open issues: 0

Latest commit on main:
- ecdfcf8 by Bas van Dooremalen on 2026-11-11
  fix(auth): add NOMI-A002 and NOMI-A004 to restricted rental vouchers list

URL: https://github.com/marketing-smartheads/nomi-configurator

## Graphify Snapshot
Graphify report not found. Generate Graphify output if you want architecture-aware memory excerpts here.

## Project Planner
- Project planner is not configured yet. Enable it in the chat panel to generate a time-based todo list and progress rescue briefs.

## Agent Notes
- If a future task asks what changed recently, start with `Recent Changes`, `Tracked Snapshots`, `Hot Files`, and `Git Snapshot`.
- If a future task asks how the project is organized, combine this file with `graphify-out/GRAPH_REPORT.md`.
- If a future task needs repository-level context, use `Package Snapshot`, the GitHub snapshot, and the Graphify snapshot before rescanning broad parts of the repo.
