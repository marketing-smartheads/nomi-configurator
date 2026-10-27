# Workspace Memory
This file is maintained automatically by Code Janitor so Claude, Codex, Bob, and any other AI agent can reuse repo context without rescanning everything from scratch.
Generated: 2026-10-27T15:59:35.238Z
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
- Last activity: 2026-10-27T15:59:32.776Z
## Workspace Focus
- Active file in focus: app/voucher/page.tsx
- Hottest files right now: app/download/page.tsx (15), components/configurator/StepFourConfirmation.tsx (13), app/dashboard/page.tsx (6), app/api/confirm/route.ts (2)
- Suggested starting points: app/voucher/page.tsx, app/download/page.tsx, components/configurator/StepFourConfirmation.tsx, app/dashboard/page.tsx, app/api/confirm/route.ts, app/api/vouchers/route.ts
## Current Workspace
- Active file: app/voucher/page.tsx
- Tracked files in snapshot: 69
- Top-level areas: public (21), components (18), [root] (15), app (12), lib (3)
- Primary file types: .tsx (24), .svg (9), .ts (9), .json (4), .md (4), .woff (4), .woff2 (4), .png (3)
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
- Remembered file snapshots: 44
- Working tree summary: 1 modified
## Tracked Snapshots
- app/voucher/page.tsx | 22 lines | 730 chars | hash 950e3928e018
  Last snapshot: 2026-10-27T15:59:32.776Z
  Preview: "import { getPageData } from '@/lib/cms'; / import MainContent from '@/components/MainContent'; / import VoucherWelcomeModal from '@/components/VoucherWelcomeModal'; / import VoucherParamHandler from '@/components/Vouc..."
- components/VoucherParamHandler.tsx | 26 lines | 903 chars | hash ec9c2628508d
  Last snapshot: 2026-10-27T15:47:30.331Z
  Preview: "'use client'; / import { useEffect } from 'react'; / import { useSearchParams, useRouter, usePathname } from 'next/navigation'; / export default function VoucherParamHandler() { / const searchParams = useSearchParams(..."
- app/dashboard/page.tsx | 372 lines | 18002 chars | hash 402480d5c584
  Last snapshot: 2026-10-27T15:01:12.831Z
  Preview: "'use client'; / import React, { useState, useEffect } from 'react'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / export default function DashboardPage() { / const [isLogged..."
- app/api/vouchers/route.ts | 52 lines | 1568 chars | hash 0eacd0d2ae72
  Last snapshot: 2026-10-27T14:51:17.159Z
  Preview: "import { NextResponse } from 'next/server'; / export async function GET() { / try { / const endpoint = process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT || ''; / const wpUser = process.env.WORDPRESS_AUTH_USER; / cons..."
- app/api/confirm/route.ts | 308 lines | 11535 chars | hash ef6f9a97b4ac
  Last snapshot: 2026-10-27T13:33:01.869Z
  Preview: "import { NextResponse } from 'next/server'; / import { Resend } from 'resend'; / const resend = new Resend(process.env.RESEND_API_KEY); / export async function POST(request: Request) { / try { / const body = await req..."
- app/download/page.tsx | 504 lines | 23775 chars | hash 6f867323f7b2
  Last snapshot: 2026-10-27T13:02:50.504Z
  Preview: "'use client'; / import { useState, useEffect } from 'react'; / import { useRouter } from 'next/navigation'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / import { getPageDat..."
- components/configurator/StepFourConfirmation.tsx | 307 lines | 14831 chars | hash c65841c87fbd
  Last snapshot: 2026-10-27T11:43:31.026Z
  Preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from '../Button'; / const PARTNER_NAAM = 'Aanhuis Spijk'; /..."
- lib/cms.ts | 224 lines | 6049 chars | hash 15c866223c79
  Last snapshot: 2026-10-27T10:51:01.817Z
  Preview: "// lib/cms.ts / export async function getPageData() { / const query = ` / query GetConfiguratorPage { / page(id: "28", idType: DATABASE_ID) { / sections { / hero { / subtitel / titel / omschrijving / afbeelding { / no..."

## Recent Changes
### 2026-10-27T15:59:32.776Z | saved | app/voucher/page.tsx
- Summary: Line 4: replaced 14 lines with 17 lines.
- Before: 19 lines | 563 chars | hash 0ffd40656a77 | preview: "import { getPageData } from '@/lib/cms'; / import MainContent from '@/components/MainContent'; / import VoucherWelcomeModal from '@/components/VoucherWelcomeModal'; / export default async function VoucherLandingPage()..."
- After: 22 lines | 730 chars | hash 950e3928e018 | preview: "import { getPageData } from '@/lib/cms'; / import MainContent from '@/components/MainContent'; / import VoucherWelcomeModal from '@/components/VoucherWelcomeModal'; / import VoucherParamHandler from '@/components/Vouc..."
- Previous fragment: "export default async function VoucherLandingPage() { / const { sections, configuratorData } = await getPageData(); / return ( / <> / {/* Activeert automatisch de welkomst-popup..."
- Current fragment: "import VoucherParamHandler from '@/components/VoucherParamHandler'; / import { Suspense } from 'react'; / export default async function VoucherLandingPage() { / const { sections..."

### 2026-10-27T15:47:30.331Z | saved | components/VoucherParamHandler.tsx
- Summary: Line 4: replaced 14 lines with 20 lines.
- Before: 20 lines | 598 chars | hash 06ad36daf3da | preview: "'use client'; / import { useEffect } from 'react'; / import { useSearchParams } from 'next/navigation'; / export default function VoucherParamHandler() { / const searchParams = useSearchParams(); / useEffect(() => { /..."
- After: 26 lines | 903 chars | hash ec9c2628508d | preview: "'use client'; / import { useEffect } from 'react'; / import { useSearchParams, useRouter, usePathname } from 'next/navigation'; / export default function VoucherParamHandler() { / const searchParams = useSearchParams(..."
- Previous fragment: "} from 'next/navigation'; / export default function VoucherParamHandler() { / const searchParams = useSearchParams(); / useEffect(() => { / const codeParam = searchParams.get('c..."
- Current fragment: ", useRouter, usePathname } from 'next/navigation'; / export default function VoucherParamHandler() { / const searchParams = useSearchParams(); / const router = useRouter(); / co..."

### 2026-10-27T15:01:12.831Z | saved | app/dashboard/page.tsx
- Summary: Line 17: replaced 233 lines with 306 lines.
- Before: 299 lines | 14,024 chars | hash f235ada8fd93 | preview: "'use client'; / import React, { useState, useEffect } from 'react'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / export default function DashboardPage() { / const [isLogged..."
- After: 372 lines | 18,002 chars | hash 402480d5c584 | preview: "'use client'; / import React, { useState, useEffect } from 'react'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / export default function DashboardPage() { / const [isLogged..."
- Previous fragment: "useEffect(() => { / const savedAuth = sessionStorage.getItem('nomi_dashboard_auth'); / if (savedAuth === 'true') { / setIsLoggedIn(true); / fetchVouchers(); / } / }, []); / cons..."
- Current fragment: "// Sorteer states / const [sortField, setSortField] = useState<string>('vouchercode'); / const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc'); / useEffect((..."

### 2026-10-27T15:00:15.348Z | saved | app/dashboard/page.tsx
- Summary: Line 242: removed 1 line.
- Before: 299 lines | 14,038 chars | hash 13465c996da3 | preview: "'use client'; / import React, { useState, useEffect } from 'react'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / export default function DashboardPage() { / const [isLogged..."
- After: 299 lines | 14,024 chars | hash f235ada8fd93 | preview: "'use client'; / import React, { useState, useEffect } from 'react'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / export default function DashboardPage() { / const [isLogged..."
- Previous fragment: "uit WordPress"

### 2026-10-27T14:58:48.731Z | saved | app/dashboard/page.tsx
- Summary: Line 82: replaced 183 lines with 180 lines.
- Before: 302 lines | 13,974 chars | hash bdc42371f0d2 | preview: "'use client'; / import React, { useState, useEffect } from 'react'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / export default function DashboardPage() { / const [isLogged..."
- After: 299 lines | 14,038 chars | hash 13465c996da3 | preview: "'use client'; / import React, { useState, useEffect } from 'react'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / export default function DashboardPage() { / const [isLogged..."
- Previous fragment: "woningType = `"${details.gekozenTypeWoning || details.gekozen_type_woning || 'Onbekend'}"`; / const indeling = `"${details.gekozenIndeling || details.gekozen_indeling || '—'}"`;..."
- Current fragment: "statusVal = String(details.status || ''); / const isVerzilverd = statusVal === 'bevestigd' || statusVal.toLowerCase().includes('bevestigd') || statusVal.toLowerCase().includes('..."

### 2026-10-27T14:51:17.159Z | saved | app/api/vouchers/route.ts
- Summary: Line 23: inserted 2 lines.
- Before: 51 lines | 1,537 chars | hash 8e387415497b | preview: "import { NextResponse } from 'next/server'; / export async function GET() { / try { / const endpoint = process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT || ''; / const wpUser = process.env.WORDPRESS_AUTH_USER; / cons..."
- After: 52 lines | 1,568 chars | hash 0eacd0d2ae72 | preview: "import { NextResponse } from 'next/server'; / export async function GET() { / try { / const endpoint = process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT || ''; / const wpUser = process.env.WORDPRESS_AUTH_USER; / cons..."
- Current fragment: "gekozenIndeling"

### 2026-10-27T14:50:01.149Z | saved | app/dashboard/page.tsx
- Summary: Line 243: removed 1 line.
- Before: 302 lines | 13,988 chars | hash 39c23fe90aa4 | preview: "'use client'; / import React, { useState, useEffect } from 'react'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / export default function DashboardPage() { / const [isLogged..."
- After: 302 lines | 13,974 chars | hash bdc42371f0d2 | preview: "'use client'; / import React, { useState, useEffect } from 'react'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / export default function DashboardPage() { / const [isLogged..."
- Previous fragment: "uit WordPress"

### 2026-10-27T14:48:23.468Z | saved | app/dashboard/page.tsx
- Summary: Line 17: replaced 271 lines with 269 lines.
- Before: 304 lines | 14,012 chars | hash 7d7c3ff88074 | preview: "'use client'; / import React, { useState, useEffect } from 'react'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / export default function DashboardPage() { / const [isLogged..."
- After: 302 lines | 13,988 chars | hash 39c23fe90aa4 | preview: "'use client'; / import React, { useState, useEffect } from 'react'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / export default function DashboardPage() { / const [isLogged..."
- Previous fragment: "// Check of de sessie al bekend is bij herladen / useEffect(() => { / const savedAuth = sessionStorage.getItem('nomi_dashboard_auth'); / if (savedAuth === 'true') { / setIsLogge..."
- Current fragment: "useEffect(() => { / const savedAuth = sessionStorage.getItem('nomi_dashboard_auth'); / if (savedAuth === 'true') { / setIsLoggedIn(true); / fetchVouchers(); / } / }, []); / cons..."

### 2026-10-27T14:41:15.131Z | saved | app/dashboard/page.tsx
- Summary: Line 79: replaced 190 lines with 194 lines.
- Before: 300 lines | 13,641 chars | hash 39178477b1a4 | preview: "'use client'; / import React, { useState, useEffect } from 'react'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / export default function DashboardPage() { / const [isLogged..."
- After: 304 lines | 14,012 chars | hash 7d7c3ff88074 | preview: "'use client'; / import React, { useState, useEffect } from 'react'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / export default function DashboardPage() { / const [isLogged..."
- Previous fragment: "Klantnaam', 'Klant E-mail', 'Designpakket', 'Status']; / const rows = vouchers.map(v => { / const details = v.voucherVelden || {}; / const toegangscode = `"${details.toegangscod..."
- Current fragment: "Indeling', 'Klantnaam', 'Klant E-mail', 'Designpakket', 'Status']; / const rows = vouchers.map(v => { / const details = v.voucherVelden || {}; / const toegangscode = `"${details..."

### 2026-10-27T13:33:01.869Z | saved | app/api/confirm/route.ts
- Summary: Line 247: replaced 4 lines with 4 lines.
- Before: 308 lines | 11,550 chars | hash e789f59957a2 | preview: "import { NextResponse } from 'next/server'; / import { Resend } from 'resend'; / const resend = new Resend(process.env.RESEND_API_KEY); / export async function POST(request: Request) { / try { / const body = await req..."
- After: 308 lines | 11,535 chars | hash ef6f9a97b4ac | preview: "import { NextResponse } from 'next/server'; / import { Resend } from 'resend'; / const resend = new Resend(process.env.RESEND_API_KEY); / export async function POST(request: Request) { / try { / const body = await req..."
- Previous fragment: "amp;') / .replace(/</g, '&lt;') / .replace(/>/g, '&gt;') / .replace(/"/g, '&quot;"
- Current fragment: "') / .replace(/</g, '<') / .replace(/>/g, '>') / .replace(/"/g, '""

### 2026-10-27T13:02:50.504Z | saved | app/download/page.tsx
- Summary: Line 169: replaced 53 lines with 65 lines.
- Before: 492 lines | 23,261 chars | hash e284cbdf9fcc | preview: "'use client'; / import { useState, useEffect } from 'react'; / import { useRouter } from 'next/navigation'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / import { getPageDat..."
- After: 504 lines | 23,775 chars | hash 6f867323f7b2 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import { useRouter } from 'next/navigation'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / import { getPageDat..."
- Previous fragment: "Woning = (woningType || '').toLowerCase().replace(/[^a-z0-9]/g, ''); / const huidigWoningTypeObj = woningTypenLijst.find((w: any) => { / const naam = (w?.typeNaam || w?.typenaam..."
- Current fragment: "aliseer = (s: string) => (s || '').toLowerCase().replace(/[^a-z0-9]/g, ''); / const safeDecode = (s: string) => { try { return decodeURIComponent(s); } catch { return s; } }; /..."

### 2026-10-27T12:58:32.461Z | saved | app/download/page.tsx
- Summary: Line 196: replaced 40 lines with 57 lines.
- Before: 475 lines | 22,268 chars | hash 6d6e3495277a | preview: "'use client'; / import { useState, useEffect } from 'react'; / import { useRouter } from 'next/navigation'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / import { getPageDat..."
- After: 492 lines | 23,261 chars | hash e284cbdf9fcc | preview: "'use client'; / import { useState, useEffect } from 'react'; / import { useRouter } from 'next/navigation'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / import { getPageDat..."
- Previous fragment: "Haal het getal van de gekozen indeling op (bijv. "2" uit "Indeling 02") / const indelingNummerMatch = (gekozenIndeling || '').match(/\d+/); / const indelingNummer = indelingNumm..."
- Current fragment: "--------------------------------------------------------------------- / // SLIMME FILTER: matcht op pakket + indelingnummer, via titel én bestandsnaam / // ---------------------..."

### 2026-10-27T12:53:58.859Z | saved | app/download/page.tsx
- Summary: Line 196: replaced 39 lines with 34 lines.
- Before: 480 lines | 22,688 chars | hash 2d0d95ca6552 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import { useRouter } from 'next/navigation'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / import { getPageDat..."
- After: 475 lines | 22,268 chars | hash 6d6e3495277a | preview: "'use client'; / import { useState, useEffect } from 'react'; / import { useRouter } from 'next/navigation'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / import { getPageDat..."
- Previous fragment: "exact het cijfer op van de gekozen indeling (bijv. "2" uit "Indeling 02") / const indelingNummerMatch = (gekozenIndeling || '').match(/\d+/); / const indelingNummer = indelingNu..."
- Current fragment: "het getal van de gekozen indeling op (bijv. "2" uit "Indeling 02") / const indelingNummerMatch = (gekozenIndeling || '').match(/\d+/); / const indelingNummer = indelingNummerMat..."

### 2026-10-27T12:42:45.859Z | saved | app/download/page.tsx
- Summary: Line 196: replaced 36 lines with 39 lines.
- Before: 477 lines | 22,508 chars | hash 0358ebd61053 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import { useRouter } from 'next/navigation'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / import { getPageDat..."
- After: 480 lines | 22,688 chars | hash 2d0d95ca6552 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import { useRouter } from 'next/navigation'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / import { getPageDat..."
- Previous fragment: "het getal van de gekozen indeling op (bijv. "2" uit "Indeling 02") / const indelingNummerMatch = (gekozenIndeling || '').match(/\d+/); / const indelingNummer = indelingNummerMat..."
- Current fragment: "exact het cijfer op van de gekozen indeling (bijv. "2" uit "Indeling 02") / const indelingNummerMatch = (gekozenIndeling || '').match(/\d+/); / const indelingNummer = indelingNu..."

### 2026-10-27T12:35:46.347Z | saved | app/download/page.tsx
- Summary: Line 200: replaced 67 lines with 38 lines.
- Before: 506 lines | 23,882 chars | hash fa2fc7a584ea | preview: "'use client'; / import { useState, useEffect } from 'react'; / import { useRouter } from 'next/navigation'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / import { getPageDat..."
- After: 477 lines | 22,508 chars | hash 0358ebd61053 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import { useRouter } from 'next/navigation'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / import { getPageDat..."
- Previous fragment: "EN NAUWKEURIGE FILTERFUNCTIE / const getGefilterdeBestanden = (rawBestandenLijst: any[]) => { / const activePakketLower = (designPakket || '').toLowerCase(); // bijv. "hotel chi..."
- Current fragment: "FILTER OP BASIS VAN DE BESTAND TITEL IN HET CMS / const getGefilterdeBestanden = (rawBestandenLijst: any[]) => { / const activePakketLower = (designPakket || '').toLowerCase();..."


## Hot Files
- app/download/page.tsx (15 tracked changes)
- components/configurator/StepFourConfirmation.tsx (13 tracked changes)
- app/dashboard/page.tsx (6 tracked changes)
- app/api/confirm/route.ts (2 tracked changes)
- app/api/vouchers/route.ts (1 tracked changes)
- app/voucher/page.tsx (1 tracked changes)
- components/VoucherParamHandler.tsx (1 tracked changes)
- lib/cms.ts (1 tracked changes)

## Git Snapshot
- Branch: main
- HEAD: 2026-10-27 e4c1b7f feat(voucher): remove code parameter from browser address bar after storing token
- Working tree summary: 1 modified
- M app/voucher/page.tsx

## GitHub Snapshot
GitHub Repository: marketing-smartheads/nomi-configurator
Visibility: public | Default branch: main
Stars: 0 | Forks: 0 | Open issues: 0

Latest commit on main:
- e4c1b7f by Bas van Dooremalen on 2026-10-27
  feat(voucher): remove code parameter from browser address bar after storing token

URL: https://github.com/marketing-smartheads/nomi-configurator

## Graphify Snapshot
Graphify report not found. Generate Graphify output if you want architecture-aware memory excerpts here.

## Project Planner
- Project planner is not configured yet. Enable it in the chat panel to generate a time-based todo list and progress rescue briefs.

## Agent Notes
- If a future task asks what changed recently, start with `Recent Changes`, `Tracked Snapshots`, `Hot Files`, and `Git Snapshot`.
- If a future task asks how the project is organized, combine this file with `graphify-out/GRAPH_REPORT.md`.
- If a future task needs repository-level context, use `Package Snapshot`, the GitHub snapshot, and the Graphify snapshot before rescanning broad parts of the repo.
