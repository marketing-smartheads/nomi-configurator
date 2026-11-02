# Workspace Memory
This file is maintained automatically by Code Janitor so Claude, Codex, Bob, and any other AI agent can reuse repo context without rescanning everything from scratch.
Generated: 2026-11-02T10:37:59.847Z
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
- Last activity: 2026-11-02T10:37:57.411Z
## Workspace Focus
- Active file in focus: components/LoginScreen.tsx
- Hottest files right now: app/download/page.tsx (15), components/configurator/StepFourConfirmation.tsx (10), app/dashboard/page.tsx (6), app/api/confirm/route.ts (2)
- Suggested starting points: components/LoginScreen.tsx, app/download/page.tsx, components/configurator/StepFourConfirmation.tsx, app/dashboard/page.tsx, app/api/confirm/route.ts, app/api/vouchers/route.ts
## Current Workspace
- Active file: components/LoginScreen.tsx
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
- components/LoginScreen.tsx | 272 lines | 9894 chars | hash 9b7741ac908a
  Last snapshot: 2026-11-02T10:37:57.411Z
  Preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / import Button from './Button'; / import { useRouter } from 'next/navigation'; / interfac..."
- app/globals.css | 106 lines | 2720 chars | hash 7e080d34cd3e
  Last snapshot: 2026-11-02T10:32:36.827Z
  Preview: "@import "tailwindcss"; / @theme { / /* --- Kleuren (Design System) --- */ / --color-primary: #C2A06A;       /* De goud/bronskleur */ / --color-dark: #181820;          /* De diepe, donkere kleur (geeft bg-dark) */ / --..."
- components/configurator/StepFourConfirmation.tsx | 307 lines | 14829 chars | hash 27617c309371
  Last snapshot: 2026-11-01T22:01:43.676Z
  Preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from '../Button'; / const PARTNER_NAAM = 'Aanhuis Spijk'; /..."
- app/layout.tsx | 81 lines | 1593 chars | hash ed08bbfcc175
  Last snapshot: 2026-10-27T16:32:07.771Z
  Preview: "import type { Metadata } from "next"; / import localFont from 'next/font/local'; / import "./globals.css"; / const poppins = localFont({ / src: [ / { / path: '../public/fonts/Poppins-SemiBold.woff2', / weight: '600',..."
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

## Recent Changes
### 2026-11-02T10:37:57.411Z | saved | components/LoginScreen.tsx
- Summary: Line 221: replaced 20 lines with 20 lines.
- Before: 272 lines | 9,890 chars | hash 5c2df540a650 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / import Button from './Button'; / import { useRouter } from 'next/navigation'; / interfac..."
- After: 272 lines | 9,894 chars | hash 9b7741ac908a | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / import Button from './Button'; / import { useRouter } from 'next/navigation'; / interfac..."
- Previous fragment: "xs sm:text-sm tracking-widest font-sans / bg-dark border border-white/10 / backdrop-blur-[3.75rem] / text-white placeholder-white/40 / focus:outline-none focus:border-white/35 t..."
- Current fragment: "base sm:text-sm tracking-widest font-sans / bg-dark border border-white/10 / backdrop-blur-[3.75rem] / text-white placeholder-white/40 / focus:outline-none focus:border-white/35..."

### 2026-11-02T10:32:36.827Z | saved | app/globals.css
- Summary: Line 102: inserted 5 lines.
- Before: 102 lines | 2,661 chars | hash b8c04f0eb1b0 | preview: "@import "tailwindcss"; / @theme { / /* --- Kleuren (Design System) --- */ / --color-primary: #C2A06A;       /* De goud/bronskleur */ / --color-dark: #181820;          /* De diepe, donkere kleur (geeft bg-dark) */ / --..."
- After: 106 lines | 2,720 chars | hash 7e080d34cd3e | preview: "@import "tailwindcss"; / @theme { / /* --- Kleuren (Design System) --- */ / --color-primary: #C2A06A;       /* De goud/bronskleur */ / --color-dark: #181820;          /* De diepe, donkere kleur (geeft bg-dark) */ / --..."
- Current fragment: "input, select, textarea { / font-size: 16px !important; / }"

### 2026-11-01T22:01:43.676Z | saved | components/configurator/StepFourConfirmation.tsx
- Summary: Line 281: removed 1 line.
- Before: 307 lines | 14,830 chars | hash 876d0a69796b | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from '../Button'; / const PARTNER_NAAM = 'Aanhuis Spijk'; /..."
- After: 307 lines | 14,829 chars | hash 27617c309371 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from '../Button'; / const PARTNER_NAAM = 'Aanhuis Spijk'; /..."
- Previous fragment: "s"

### 2026-11-01T22:01:25.022Z | saved | components/configurator/StepFourConfirmation.tsx
- Summary: Line 269: removed 1 line.
- Before: 307 lines | 14,831 chars | hash c65841c87fbd | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from '../Button'; / const PARTNER_NAAM = 'Aanhuis Spijk'; /..."
- After: 307 lines | 14,830 chars | hash 876d0a69796b | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from '../Button'; / const PARTNER_NAAM = 'Aanhuis Spijk'; /..."
- Previous fragment: "S"

### 2026-10-27T16:32:07.771Z | saved | app/layout.tsx
- Summary: Line 56: inserted 5 lines.
- Before: 77 lines | 1,540 chars | hash 11070fac90dc | preview: "import type { Metadata } from "next"; / import localFont from 'next/font/local'; / import "./globals.css"; / const poppins = localFont({ / src: [ / { / path: '../public/fonts/Poppins-SemiBold.woff2', / weight: '600',..."
- After: 81 lines | 1,593 chars | hash ed08bbfcc175 | preview: "import type { Metadata } from "next"; / import localFont from 'next/font/local'; / import "./globals.css"; / const poppins = localFont({ / src: [ / { / path: '../public/fonts/Poppins-SemiBold.woff2', / weight: '600',..."
- Current fragment: "robots: { / index: true, / follow: false, / },"

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


## Hot Files
- app/download/page.tsx (15 tracked changes)
- components/configurator/StepFourConfirmation.tsx (10 tracked changes)
- app/dashboard/page.tsx (6 tracked changes)
- app/api/confirm/route.ts (2 tracked changes)
- app/api/vouchers/route.ts (1 tracked changes)
- app/globals.css (1 tracked changes)
- app/layout.tsx (1 tracked changes)
- app/voucher/page.tsx (1 tracked changes)

## Git Snapshot
- Branch: main
- HEAD: 2026-11-02 967e259 fix(inputs): prevent automatic iOS zoom on form fields by setting font-size to 16px
- Working tree summary: 1 modified
- M components/LoginScreen.tsx

## GitHub Snapshot
GitHub Repository: marketing-smartheads/nomi-configurator
Visibility: public | Default branch: main
Stars: 0 | Forks: 0 | Open issues: 0

Latest commit on main:
- 967e259 by Bas van Dooremalen on 2026-11-02
  fix(inputs): prevent automatic iOS zoom on form fields by setting font-size to 16px

URL: https://github.com/marketing-smartheads/nomi-configurator

## Graphify Snapshot
Graphify report not found. Generate Graphify output if you want architecture-aware memory excerpts here.

## Project Planner
- Project planner is not configured yet. Enable it in the chat panel to generate a time-based todo list and progress rescue briefs.

## Agent Notes
- If a future task asks what changed recently, start with `Recent Changes`, `Tracked Snapshots`, `Hot Files`, and `Git Snapshot`.
- If a future task asks how the project is organized, combine this file with `graphify-out/GRAPH_REPORT.md`.
- If a future task needs repository-level context, use `Package Snapshot`, the GitHub snapshot, and the Graphify snapshot before rescanning broad parts of the repo.
