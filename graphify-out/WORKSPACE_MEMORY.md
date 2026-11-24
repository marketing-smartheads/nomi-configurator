# Workspace Memory
This file is maintained automatically by Code Janitor so Claude, Codex, Bob, and any other AI agent can reuse repo context without rescanning everything from scratch.
Generated: 2026-11-24T08:28:51.949Z
Workspace: tg-configurator
Workspace root: c:\Projects\NextJS\tg-configurator
Refresh reason: startup
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
- Last activity: 2026-11-19T22:05:56.243Z
## Workspace Focus
- Active file in focus: app/api/confirm/route.ts
- Hottest files right now: components/configurator/StepOnewoning.tsx (10), components/Footer.tsx (8), components/configurator/StepFourConfirmation.tsx (3), components/configurator/StepTwoDesign.tsx (3)
- Suggested starting points: app/api/confirm/route.ts, components/configurator/StepOnewoning.tsx, components/Footer.tsx, components/configurator/StepFourConfirmation.tsx, components/configurator/StepTwoDesign.tsx, app/dashboard/page.tsx
## Current Workspace
- Active file: app/api/confirm/route.ts
- Tracked files in snapshot: 82
- Top-level areas: public (32), components (18), [root] (15), app (14), lib (3)
- Primary file types: .tsx (24), .svg (15), .ts (11), .png (6), .json (4), .md (4), .woff (4), .woff2 (4)
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
- Working tree summary: 4 modifieds
## Tracked Snapshots
- app/layout.tsx | 81 lines | 1593 chars | hash ed08bbfcc175
  Last snapshot: 2026-11-19T22:05:56.243Z
  Preview: "import type { Metadata } from "next"; / import localFont from 'next/font/local'; / import "./globals.css"; / const poppins = localFont({ / src: [ / { / path: '../public/fonts/Poppins-SemiBold.woff2', / weight: '600',..."
- .env.local | 12 lines | 423 chars | hash 19cb3d3fc1cd
  Last snapshot: 2026-11-19T22:05:30.250Z
  Preview: "NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT=http://tg-backend.development/graphql / NEXT_PUBLIC_LIVE_WORDPRESS_ENDPOINT=https://cms.nomi-configurator.nl/graphql / NEXT_PUBLIC_PARTNER_EMAIL=tobias@aanhuis-spijk.nl / WORDPRE..."
- app/api/confirm/route.ts | 362 lines | 13222 chars | hash 5fe756e677ee
  Last snapshot: 2026-11-19T21:32:11.513Z
  Preview: "import { NextResponse } from 'next/server'; / import { Resend } from 'resend'; / const resend = new Resend(process.env.RESEND_API_KEY); / // Staat op false zodat Resend de partnermails daadwerkelijk verstuurt naar de..."
- app/dashboard/page.tsx | 716 lines | 33443 chars | hash a4090c4728ac
  Last snapshot: 2026-11-19T20:29:22.682Z
  Preview: "'use client'; / import React, { useState, useEffect } from 'react'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / // Lijst van verhuur-vouchers die we uit het dashboard filt..."
- app/api/auth/login/route.ts | 186 lines | 5783 chars | hash 095d3e8a3b71
  Last snapshot: 2026-11-19T20:25:42.124Z
  Preview: "import { NextResponse } from 'next/server'; / const BEKENDE_GEBRUIKERS: Record<string, { firstName: string; email: string; role?: 'admin' | 'makelaar' }> = { / 'mark nc': { / firstName: 'Mark', / email: 'mark.vanwoude..."
- app/privacy/page.tsx | 120 lines | 7556 chars | hash 1205b84156b3
  Last snapshot: 2026-11-19T08:18:16.042Z
  Preview: "// app/privacy/page.tsx / 'use client'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / export default function PrivacyPage() { / return ( / <div className="min-h-screen bg-[#..."
- app/download/page.tsx | 419 lines | 20138 chars | hash 3b3996f5e235
  Last snapshot: 2026-11-18T23:19:22.291Z
  Preview: "// app/download/page.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import { useRouter } from 'next/navigation'; / import Header from '@/components/Header'; / import Footer from '@/components/Foo..."
- components/LoginScreen.tsx | 288 lines | 10278 chars | hash 9d09484a36c4
  Last snapshot: 2026-11-18T23:06:31.465Z
  Preview: "// components/LoginScreen.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / import Button from './Button'; / import { useRouter } fr..."

## Recent Changes
### 2026-11-19T22:05:56.243Z | saved | app/layout.tsx
- Summary: Line 58: replaced 1 line with 1 line.
- Before: 81 lines | 1,592 chars | hash 3db586e03830 | preview: "import type { Metadata } from "next"; / import localFont from 'next/font/local'; / import "./globals.css"; / const poppins = localFont({ / src: [ / { / path: '../public/fonts/Poppins-SemiBold.woff2', / weight: '600',..."
- After: 81 lines | 1,593 chars | hash ed08bbfcc175 | preview: "import type { Metadata } from "next"; / import localFont from 'next/font/local'; / import "./globals.css"; / const poppins = localFont({ / src: [ / { / path: '../public/fonts/Poppins-SemiBold.woff2', / weight: '600',..."
- Previous fragment: "tru"
- Current fragment: "fals"

### 2026-11-19T22:05:30.250Z | saved | .env.local
- Summary: Line 5: replaced 1 line with 1 line.
- Before: 12 lines | 432 chars | hash a1ea6608e103 | preview: "NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT=http://tg-backend.development/graphql / NEXT_PUBLIC_LIVE_WORDPRESS_ENDPOINT=https://cms.nomi-configurator.nl/graphql / NEXT_PUBLIC_PARTNER_EMAIL=webmaster@marketingsmartheads.nl..."
- After: 12 lines | 423 chars | hash 19cb3d3fc1cd | preview: "NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT=http://tg-backend.development/graphql / NEXT_PUBLIC_LIVE_WORDPRESS_ENDPOINT=https://cms.nomi-configurator.nl/graphql / NEXT_PUBLIC_PARTNER_EMAIL=tobias@aanhuis-spijk.nl / WORDPRE..."
- Previous fragment: "webmaster@marketingsmartheads"
- Current fragment: "tobias@aanhuis-spijk"

### 2026-11-19T21:46:08.019Z | saved | app/layout.tsx
- Summary: Line 58: replaced 1 line with 1 line.
- Before: 81 lines | 1,593 chars | hash ed08bbfcc175 | preview: "import type { Metadata } from "next"; / import localFont from 'next/font/local'; / import "./globals.css"; / const poppins = localFont({ / src: [ / { / path: '../public/fonts/Poppins-SemiBold.woff2', / weight: '600',..."
- After: 81 lines | 1,592 chars | hash 3db586e03830 | preview: "import type { Metadata } from "next"; / import localFont from 'next/font/local'; / import "./globals.css"; / const poppins = localFont({ / src: [ / { / path: '../public/fonts/Poppins-SemiBold.woff2', / weight: '600',..."
- Previous fragment: "fals"
- Current fragment: "tru"

### 2026-11-19T21:32:11.513Z | saved | app/api/confirm/route.ts
- Summary: Line 6: replaced 339 lines with 350 lines.
- Before: 351 lines | 12,842 chars | hash 0cd50a6bea2b | preview: "import { NextResponse } from 'next/server'; / import { Resend } from 'resend'; / const resend = new Resend(process.env.RESEND_API_KEY); / // Zet op true om partnermails lokaal/tijdelijk NIET rechtstreeks naar de exter..."
- After: 362 lines | 13,222 chars | hash 5fe756e677ee | preview: "import { NextResponse } from 'next/server'; / import { Resend } from 'resend'; / const resend = new Resend(process.env.RESEND_API_KEY); / // Staat op false zodat Resend de partnermails daadwerkelijk verstuurt naar de..."
- Previous fragment: "Zet op true om partnermails lokaal/tijdelijk NIET rechtstreeks naar de externe partners te sturen, / // maar wel uitgebreid te loggen in de console. Zet op false wanneer je live..."
- Current fragment: "Staat op false zodat Resend de partnermails daadwerkelijk verstuurt naar de adressen uit PARTNER_EMAILS_BY_NAME / const DRY_RUN_PARTNER_EMAILS = false; / // E-mailadressen gekop..."

### 2026-11-19T20:44:59.359Z | saved | app/api/confirm/route.ts
- Summary: Line 6: replaced 287 lines with 340 lines.
- Before: 298 lines | 11,232 chars | hash 8705fe271979 | preview: "import { NextResponse } from 'next/server'; / import { Resend } from 'resend'; / const resend = new Resend(process.env.RESEND_API_KEY); / export async function POST(request: Request) { / try { / const body = await req..."
- After: 351 lines | 12,842 chars | hash 0cd50a6bea2b | preview: "import { NextResponse } from 'next/server'; / import { Resend } from 'resend'; / const resend = new Resend(process.env.RESEND_API_KEY); / // Zet op true om partnermails lokaal/tijdelijk NIET rechtstreeks naar de exter..."
- Previous fragment: "export async function POST(request: Request) { / try { / const body = await request.json(); / let toegangscode = body.toegangscode || body.voucherCode || ''; / let klantNaam = b..."
- Current fragment: "// Zet op true om partnermails lokaal/tijdelijk NIET rechtstreeks naar de externe partners te sturen, / // maar wel uitgebreid te loggen in de console. Zet op false wanneer je l..."

### 2026-11-19T20:29:22.682Z | saved | app/dashboard/page.tsx
- Summary: Line 121: replaced 392 lines with 389 lines.
- Before: 719 lines | 33,586 chars | hash a3997340e337 | preview: "'use client'; / import React, { useState, useEffect } from 'react'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / // Lijst van verhuur-vouchers die we uit het dashboard filt..."
- After: 716 lines | 33,443 chars | hash a4090c4728ac | preview: "'use client'; / import React, { useState, useEffect } from 'react'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / // Lijst van verhuur-vouchers die we uit het dashboard filt..."
- Previous fragment: "cleanUser = username.trim().toLowerCase(); / const isMakelaar = / data.role === 'makelaar' || / cleanUser.includes('makelaar') || / cleanUser.includes('dekeizer') || / cleanUser..."
- Current fragment: "wpUserObj = data.user || data.data || {}; / const resolvedFirstName = / data.firstName || / data.voornaam || / data.first_name || / wpUserObj.firstName || / wpUserObj.voornaam |..."

### 2026-11-19T20:25:42.124Z | saved | app/api/auth/login/route.ts
- Summary: Line 3: replaced 46 lines with 175 lines.
- Before: 57 lines | 2,010 chars | hash 7282b64cb271 | preview: "import { NextResponse } from 'next/server'; / export async function POST(request: Request) { / try { / const { username, password } = await request.json(); / if (!username || !password) { / return NextResponse.json( /..."
- After: 186 lines | 5,783 chars | hash 095d3e8a3b71 | preview: "import { NextResponse } from 'next/server'; / const BEKENDE_GEBRUIKERS: Record<string, { firstName: string; email: string; role?: 'admin' | 'makelaar' }> = { / 'mark nc': { / firstName: 'Mark', / email: 'mark.vanwoude..."
- Previous fragment: "export async function POST(request: Request) { / try { / const { username, password } = await request.json(); / if (!username || !password) { / return NextResponse.json( / { err..."
- Current fragment: "const BEKENDE_GEBRUIKERS: Record<string, { firstName: string; email: string; role?: 'admin' | 'makelaar' }> = { / 'mark nc': { / firstName: 'Mark', / email: 'mark.vanwoudenberg@..."

### 2026-11-19T20:20:25.626Z | saved | app/dashboard/page.tsx
- Summary: Line 56: replaced 561 lines with 643 lines.
- Before: 637 lines | 29,934 chars | hash e6d63c4a0772 | preview: "'use client'; / import React, { useState, useEffect } from 'react'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / // Lijst van verhuur-vouchers die we uit het dashboard filt..."
- After: 719 lines | 33,586 chars | hash a3997340e337 | preview: "'use client'; / import React, { useState, useEffect } from 'react'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / // Lijst van verhuur-vouchers die we uit het dashboard filt..."
- Previous fragment: "export default function DashboardPage() { / const [isLoggedIn, setIsLoggedIn] = useState(false); / const [userRole, setUserRole] = useState<'admin' | 'makelaar'>('admin'); / con..."
- Current fragment: "interface LoggedInUser { / firstName: string; / email: string; / } / export default function DashboardPage() { / const [isLoggedIn, setIsLoggedIn] = useState(false); / const [us..."

### 2026-11-19T08:18:16.042Z | saved | app/privacy/page.tsx
- Summary: Line 19: replaced 100 lines with 93 lines.
- Before: 127 lines | 7,550 chars | hash e35fdd4c7a5a | preview: "// app/privacy/page.tsx / 'use client'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / export default function PrivacyPage() { / return ( / <div className="min-h-screen bg-[#..."
- After: 120 lines | 7,556 chars | hash 1205b84156b3 | preview: "// app/privacy/page.tsx / 'use client'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / export default function PrivacyPage() { / return ( / <div className="min-h-screen bg-[#..."
- Previous fragment: "juni 2026 / </p> / </div> / <div className="space-y-8 sm:space-y-10 text-sm sm:text-base text-zinc-300 leading-relaxed"> / <section className="space-y-3 p-5 sm:p-6 rounded-2xl s..."
- Current fragment: "november 2026 / </p> / </div> / <div className="space-y-8 sm:space-y-10 text-sm sm:text-base text-zinc-300 leading-relaxed"> / <section className="space-y-3 p-5 sm:p-6 rounded-2..."

### 2026-11-18T23:19:22.291Z | saved | app/download/page.tsx
- Summary: Line 1: replaced 341 lines with 342 lines.
- Before: 418 lines | 20,106 chars | hash 172d883371d9 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import { useRouter } from 'next/navigation'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / import { getPageDat..."
- After: 419 lines | 20,138 chars | hash 3b3996f5e235 | preview: "// app/download/page.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import { useRouter } from 'next/navigation'; / import Header from '@/components/Header'; / import Footer from '@/components/Foo..."
- Previous fragment: "'use client'; / import { useState, useEffect } from 'react'; / import { useRouter } from 'next/navigation'; / import Header from '@/components/Header'; / import Footer from '@/c..."
- Current fragment: "// app/download/page.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import { useRouter } from 'next/navigation'; / import Header from '@/components/Header'..."

### 2026-11-18T23:06:31.465Z | saved | components/LoginScreen.tsx
- Summary: Line 77: replaced 156 lines with 156 lines.
- Before: 288 lines | 10,311 chars | hash d5e18238d7a0 | preview: "// components/LoginScreen.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / import Button from './Button'; / import { useRouter } fr..."
- After: 288 lines | 10,278 chars | hash 9d09484a36c4 | preview: "// components/LoginScreen.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / import Button from './Button'; / import { useRouter } fr..."
- Previous fragment: "(vereist o.a. een @ en een geldige domeinextensie zoals .nl/.com) / const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; / if (!emailRegex.test(ingevoerdeEmailClean)) { / setCustomE..."
- Current fragment: "op het e-mailadres veld / const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; / if (!emailRegex.test(ingevoerdeEmailClean)) { / setCustomError('Voer een geldig e-mailadres in (incl..."

### 2026-11-18T23:04:32.703Z | saved | components/LoginScreen.tsx
- Summary: Line 77: replaced 148 lines with 156 lines.
- Before: 280 lines | 9,944 chars | hash 0900a7d9f405 | preview: "// components/LoginScreen.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / import Button from './Button'; / import { useRouter } fr..."
- After: 288 lines | 10,311 chars | hash d5e18238d7a0 | preview: "// components/LoginScreen.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / import Button from './Button'; / import { useRouter } fr..."
- Previous fragment: "Aanroep naar onze stabiele API-route / const response = await fetch('/api/verify-voucher', { / method: 'POST', / headers: { 'Content-Type': 'application/json' }, / body: JSON.st..."
- Current fragment: "Strenge e-mailvalidatie check (vereist o.a. een @ en een geldige domeinextensie zoals .nl/.com) / const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; / if (!emailRegex.test(ingevoe..."

### 2026-11-18T23:01:09.050Z | saved | components/Footer.tsx
- Summary: Line 76: replaced 118 lines with 119 lines.
- Before: 214 lines | 11,204 chars | hash 38c9c7dfe5d9 | preview: "// components/Footer.tsx / 'use client'; / import Image from 'next/image'; / import Link from 'next/link'; / interface FooterProps { / onNavigateHome?: () => void; / onNavigateConfigurator?: (step?: number) => void; /..."
- After: 215 lines | 11,058 chars | hash 8fbc57033a19 | preview: "// components/Footer.tsx / 'use client'; / import Image from 'next/image'; / import Link from 'next/link'; / interface FooterProps { / onNavigateHome?: () => void; / onNavigateConfigurator?: (step?: number) => void; /..."
- Previous fragment: "<div className="md:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-8 justify-end"> / <div className="flex flex-col space-y-4"> / <span className="font-poppins font-semibold text-..."
- Current fragment: "{/* Navigatie & Configurator rechts uitgelijnd */} / <div className="md:col-span-6 flex flex-col md:flex-row justify-end gap-16"> / <div className="flex flex-col space-y-4"> / <..."

### 2026-11-18T22:58:46.169Z | saved | components/Footer.tsx
- Summary: Line 1: inserted 214 lines.
- Before: 0 lines | 0 chars | hash empty
- After: 214 lines | 11,204 chars | hash 38c9c7dfe5d9 | preview: "// components/Footer.tsx / 'use client'; / import Image from 'next/image'; / import Link from 'next/link'; / interface FooterProps { / onNavigateHome?: () => void; / onNavigateConfigurator?: (step?: number) => void; /..."
- Current fragment: "// components/Footer.tsx / 'use client'; / import Image from 'next/image'; / import Link from 'next/link'; / interface FooterProps { / onNavigateHome?: () => void; / onNavigateC..."

### 2026-11-18T22:56:51.050Z | saved | components/ConfiguratorScreen.tsx
- Summary: Line 1: inserted 285 lines.
- Before: 0 lines | 0 chars | hash empty
- After: 285 lines | 11,414 chars | hash 1ef6ecbe6bc4 | preview: "// components/ConfiguratorScreen.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Button from './Button'; / import StepOneWoning from './configurator/StepOnewoning'; / import StepTwoDesign f..."
- Current fragment: "// components/ConfiguratorScreen.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Button from './Button'; / import StepOneWoning from './configurator/..."


## Hot Files
- components/configurator/StepOnewoning.tsx (10 tracked changes)
- components/Footer.tsx (8 tracked changes)
- components/configurator/StepFourConfirmation.tsx (3 tracked changes)
- components/configurator/StepTwoDesign.tsx (3 tracked changes)
- app/api/confirm/route.ts (2 tracked changes)
- app/dashboard/page.tsx (2 tracked changes)
- app/layout.tsx (2 tracked changes)
- components/ConfiguratorScreen.tsx (2 tracked changes)

## Git Snapshot
- Branch: main
- HEAD: 2026-11-19 019e27e feat(confirm): map partner emails by partner name in code and send via Resend
- Working tree summary: 4 modifieds
- M app/api/confirm/route.ts
- M  graphify-out/WORKSPACE_MEMORY.md
- M  workspace.json
- M  workspacememory.md

## GitHub Snapshot
GitHub Repository: marketing-smartheads/nomi-configurator
Visibility: public | Default branch: main
Stars: 0 | Forks: 0 | Open issues: 0

Latest commit on main:
- 019e27e by Bas van Dooremalen on 2026-11-19
  feat(confirm): map partner emails by partner name in code and send via Resend

URL: https://github.com/marketing-smartheads/nomi-configurator

## Graphify Snapshot
Graphify report not found. Generate Graphify output if you want architecture-aware memory excerpts here.

## Project Planner
- Project planner is not configured yet. Enable it in the chat panel to generate a time-based todo list and progress rescue briefs.

## Agent Notes
- If a future task asks what changed recently, start with `Recent Changes`, `Tracked Snapshots`, `Hot Files`, and `Git Snapshot`.
- If a future task asks how the project is organized, combine this file with `graphify-out/GRAPH_REPORT.md`.
- If a future task needs repository-level context, use `Package Snapshot`, the GitHub snapshot, and the Graphify snapshot before rescanning broad parts of the repo.
