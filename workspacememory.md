# Workspace Memory
This file is maintained automatically by Code Janitor so Claude, Codex, Bob, and any other AI agent can reuse repo context without rescanning everything from scratch.
Generated: 2026-10-27T14:51:18.900Z
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
- Last activity: 2026-10-27T14:51:17.159Z
## Workspace Focus
- Active file in focus: app/api/vouchers/route.ts
- Hottest files right now: components/configurator/StepFourConfirmation.tsx (18), app/download/page.tsx (15), app/dashboard/page.tsx (3), app/api/confirm/route.ts (2)
- Suggested starting points: app/api/vouchers/route.ts, components/configurator/StepFourConfirmation.tsx, app/download/page.tsx, app/dashboard/page.tsx, app/api/confirm/route.ts, lib/cms.ts
## Current Workspace
- Active file: app/api/vouchers/route.ts
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
- Working tree summary: 5 modifieds
## Tracked Snapshots
- app/api/vouchers/route.ts | 52 lines | 1568 chars | hash 0eacd0d2ae72
  Last snapshot: 2026-10-27T14:51:17.159Z
  Preview: "import { NextResponse } from 'next/server'; / export async function GET() { / try { / const endpoint = process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT || ''; / const wpUser = process.env.WORDPRESS_AUTH_USER; / cons..."
- app/dashboard/page.tsx | 302 lines | 13974 chars | hash bdc42371f0d2
  Last snapshot: 2026-10-27T14:50:01.149Z
  Preview: "'use client'; / import React, { useState, useEffect } from 'react'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / export default function DashboardPage() { / const [isLogged..."
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
- components/configurator/StepThreeVisuals.tsx | 422 lines | 17204 chars | hash 7c13abe084e1
  Last snapshot: 2026-10-27T08:55:56.454Z
  Preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / export default function StepThreeVisuals({ / stepTitle, / configuratorData, / designPakket, / woningType / }: any) { / /..."
- components/configurator/StepTwoDesign.tsx | 135 lines | 5497 chars | hash 829aaad9c45c
  Last snapshot: 2026-10-27T00:47:00.540Z
  Preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / export default function StepTwoDesign({ / stepTitle, / configuratorData, / designPakket,..."

## Recent Changes
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

### 2026-10-27T12:30:17.617Z | saved | app/download/page.tsx
- Summary: Line 196: replaced 41 lines with 71 lines.
- Before: 476 lines | 22,549 chars | hash 003818703585 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import { useRouter } from 'next/navigation'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / import { getPageDat..."
- After: 506 lines | 23,882 chars | hash fa2fc7a584ea | preview: "'use client'; / import { useState, useEffect } from 'react'; / import { useRouter } from 'next/navigation'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / import { getPageDat..."
- Previous fragment: "exact het cijfer van de indeling op (bijv. "2" uit "Indeling 02") / const indelingNummerMatch = (gekozenIndeling || '').match(/\d+/); / const indelingNummer = indelingNummerMatc..."
- Current fragment: "het getal van de gekozen indeling op (bijv. "2" uit "Indeling 02") / const indelingNummerMatch = (gekozenIndeling || '').match(/\d+/); / const indelingNummer = indelingNummerMat..."

### 2026-10-27T12:26:34.211Z | saved | app/download/page.tsx
- Summary: Line 196: replaced 59 lines with 41 lines.
- Before: 494 lines | 23,392 chars | hash 6f42b8a86751 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import { useRouter } from 'next/navigation'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / import { getPageDat..."
- After: 476 lines | 22,549 chars | hash 003818703585 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import { useRouter } from 'next/navigation'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / import { getPageDat..."
- Previous fragment: "het indelingnummer op (bijv. "2" uit "Indeling 02") / const indelingNummerMatch = (gekozenIndeling || '').match(/\d+/); / const indelingNummer = indelingNummerMatch ? indelingNu..."
- Current fragment: "exact het cijfer van de indeling op (bijv. "2" uit "Indeling 02") / const indelingNummerMatch = (gekozenIndeling || '').match(/\d+/); / const indelingNummer = indelingNummerMatc..."

### 2026-10-27T12:23:40.664Z | saved | app/download/page.tsx
- Summary: Line 1: inserted 494 lines.
- Before: 0 lines | 0 chars | hash empty
- After: 494 lines | 23,392 chars | hash 6f42b8a86751 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import { useRouter } from 'next/navigation'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / import { getPageDat..."
- Current fragment: "'use client'; / import { useState, useEffect } from 'react'; / import { useRouter } from 'next/navigation'; / import Header from '@/components/Header'; / import Footer from '@/c..."

### 2026-10-27T12:17:53.102Z | saved | app/download/page.tsx
- Summary: Line 196: replaced 21 lines with 42 lines.
- Before: 459 lines | 21,729 chars | hash 28126dfa6b9d | preview: "'use client'; / import { useState, useEffect } from 'react'; / import { useRouter } from 'next/navigation'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / import { getPageDat..."
- After: 480 lines | 22,743 chars | hash 9b21e1741f7d | preview: "'use client'; / import { useState, useEffect } from 'react'; / import { useRouter } from 'next/navigation'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / import { getPageDat..."
- Previous fragment: "Extract het getal uit de gekozen indeling (bijv. "02" of "2" uit "Indeling 02") / const indelingNummerMatch = (gekozenIndeling || '').match(/\d+/); / const indelingNummer = inde..."
- Current fragment: "Haal het getal uit de gekozen indeling (bijv. "2" uit "Indeling 02") / const indelingNummerMatch = (gekozenIndeling || '').match(/\d+/); / const indelingNummer = indelingNummerM..."

### 2026-10-27T12:11:51.527Z | saved | app/download/page.tsx
- Summary: Line 196: replaced 19 lines with 25 lines.
- Before: 453 lines | 21,397 chars | hash 86ed78038622 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import { useRouter } from 'next/navigation'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / import { getPageDat..."
- After: 459 lines | 21,729 chars | hash 28126dfa6b9d | preview: "'use client'; / import { useState, useEffect } from 'react'; / import { useRouter } from 'next/navigation'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / import { getPageDat..."
- Previous fragment: "const indelingNummerMatch = (gekozenIndeling || '').match(/\d+/); / const indelingNummer = indelingNummerMatch ? indelingNummerMatch[0].replace(/^0+/, '') : ''; / // Helper om b..."
- Current fragment: "// Extract het getal uit de gekozen indeling (bijv. "02" of "2" uit "Indeling 02") / const indelingNummerMatch = (gekozenIndeling || '').match(/\d+/); / const indelingNummer = i..."


## Hot Files
- components/configurator/StepFourConfirmation.tsx (18 tracked changes)
- app/download/page.tsx (15 tracked changes)
- app/dashboard/page.tsx (3 tracked changes)
- app/api/confirm/route.ts (2 tracked changes)
- app/api/vouchers/route.ts (1 tracked changes)
- lib/cms.ts (1 tracked changes)

## Git Snapshot
- Branch: main
- HEAD: 2026-10-27 d2a4134 feat(dashboard): display selected layout correctly and add voucher code column next to status in frontend dashboard
- Working tree summary: 5 modifieds
- M app/api/vouchers/route.ts
- M app/dashboard/page.tsx
- M graphify-out/WORKSPACE_MEMORY.md
- M workspace.json
- M workspacememory.md

## GitHub Snapshot
GitHub Repository: marketing-smartheads/nomi-configurator
Visibility: public | Default branch: main
Stars: 0 | Forks: 0 | Open issues: 0

Latest commit on main:
- 35290b3 by Bas van Dooremalen on 2026-10-27
  feat(dashboard): add selected layout (indeling) column to the frontend public cheque-dashboard table and CSV exporter

URL: https://github.com/marketing-smartheads/nomi-configurator

## Graphify Snapshot
Graphify report not found. Generate Graphify output if you want architecture-aware memory excerpts here.

## Project Planner
- Project planner is not configured yet. Enable it in the chat panel to generate a time-based todo list and progress rescue briefs.

## Agent Notes
- If a future task asks what changed recently, start with `Recent Changes`, `Tracked Snapshots`, `Hot Files`, and `Git Snapshot`.
- If a future task asks how the project is organized, combine this file with `graphify-out/GRAPH_REPORT.md`.
- If a future task needs repository-level context, use `Package Snapshot`, the GitHub snapshot, and the Graphify snapshot before rescanning broad parts of the repo.
