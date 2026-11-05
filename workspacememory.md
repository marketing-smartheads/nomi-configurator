# Workspace Memory
This file is maintained automatically by Code Janitor so Claude, Codex, Bob, and any other AI agent can reuse repo context without rescanning everything from scratch.
Generated: 2026-11-05T23:45:07.873Z
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
- Last activity: 2026-11-05T23:45:05.463Z
## Workspace Focus
- Active file in focus: lib/cms.ts
- Hottest files right now: lib/cms.ts (17), components/LoginScreen.tsx (7), app/api/verify-voucher/route.ts (4), app/api/vouchers/route.ts (3)
- Suggested starting points: lib/cms.ts, components/LoginScreen.tsx, app/api/verify-voucher/route.ts, app/api/vouchers/route.ts, app/download/page.tsx, app/api/auth-voucher
## Current Workspace
- Active file: lib/cms.ts
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
- Change mix: save (37), create (2), delete (1)
- Remembered file snapshots: 47
- Working tree summary: 1 modified
## Tracked Snapshots
- lib/cms.ts | 322 lines | 9591 chars | hash 226caf9bbf89
  Last snapshot: 2026-11-05T23:45:05.463Z
  Preview: "// lib/cms.ts / export async function getPageData() { / const query = ` / query GetConfiguratorPage { / page(id: "28", idType: DATABASE_ID) { / sections { / hero { / subtitel / titel / omschrijving / afbeelding { / no..."
- app/download/page.tsx | 399 lines | 19298 chars | hash d6c80bb2a10b
  Last snapshot: 2026-11-05T23:03:35.990Z
  Preview: "'use client'; / import { useState, useEffect } from 'react'; / import { useRouter } from 'next/navigation'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / import { getPageDat..."
- components/LoginScreen.tsx | 276 lines | 9862 chars | hash 904ae93bdd1a
  Last snapshot: 2026-11-05T22:30:02.126Z
  Preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / import Button from './Button'; / import { useRouter } from 'next/navigation'; / import {..."
- lib/useConfigurator.ts | 206 lines | 6358 chars | hash 6df8a1bf9348
  Last snapshot: 2026-11-05T22:22:17.496Z
  Preview: "'use client'; / import { useState, useEffect } from 'react'; / type ScreenType = 'welcome' | 'configurator' | 'download' | 'login'; / export function useConfigurator() { / const [screen, setScreenState] = useState<Scr..."
- app/api/vouchers/route.ts | 170 lines | 5453 chars | hash dfb46144d938
  Last snapshot: 2026-11-05T22:16:56.146Z
  Preview: "import { NextResponse } from 'next/server'; / export const dynamic = 'force-dynamic'; / // 1. GET: Voor het ophalen van alle vouchers / export async function GET() { / try { / const endpoint = process.env.NEXT_PUBLIC_..."
- app/api/verify-voucher/route.ts | 189 lines | 6106 chars | hash 110421b695dd
  Last snapshot: 2026-11-05T22:07:48.581Z
  Preview: "import { NextResponse } from 'next/server'; / export const dynamic = 'force-dynamic'; / export async function GET(request: Request) { / const { searchParams } = new URL(request.url); / const code = searchParams.get('c..."
- app/api/auth-voucher/route.ts | 122 lines | 4017 chars | hash 78581114598f
  Last snapshot: 2026-11-05T21:41:45.970Z
  Preview: "import { NextResponse } from 'next/server'; / export const dynamic = 'force-dynamic'; / export async function POST(request: Request) { / try { / const body = await request.json(); / const { toegangscode, klantEmail }..."
- app/api/auth/route.ts | 119 lines | 3894 chars | hash aab870b5b72b
  Last snapshot: 2026-11-05T21:09:16.942Z
  Preview: "import { NextResponse } from 'next/server'; / export async function POST(request: Request) { / try { / const body = await request.json(); / const { toegangscode, klantEmail } = body; / if (!toegangscode || !klantEmail..."

## Recent Changes
### 2026-11-05T23:45:05.463Z | saved | lib/cms.ts
- Summary: Line 232: replaced 67 lines with 67 lines.
- Before: 322 lines | 9,555 chars | hash 1b9f059103c2 | preview: "// lib/cms.ts / export async function getPageData() { / const query = ` / query GetConfiguratorPage { / page(id: "28", idType: DATABASE_ID) { / sections { / hero { / subtitel / titel / omschrijving / afbeelding { / no..."
- After: 322 lines | 9,591 chars | hash 226caf9bbf89 | preview: "// lib/cms.ts / export async function getPageData() { / const query = ` / query GetConfiguratorPage { / page(id: "28", idType: DATABASE_ID) { / sections { / hero { / subtitel / titel / omschrijving / afbeelding { / no..."
- Previous fragment: "Dit is de correcte veldnaam volgens het WordPress schema: 'klantEmail' / const query = ` / query GetAllVouchersForAuth { / vouchers(first: 100) { / nodes { / databaseId / title..."
- Current fragment: "Gebruik de exacte graphql_field_name uit je ACF configuratie: 'klantEMail' / const query = ` / query GetAllVouchersForAuth { / vouchers(first: 100) { / nodes { / databaseId / ti..."

### 2026-11-05T23:38:07.867Z | saved | lib/cms.ts
- Summary: Line 232: replaced 73 lines with 67 lines.
- Before: 328 lines | 9,753 chars | hash 89e4fbac150b | preview: "// lib/cms.ts / export async function getPageData() { / const query = ` / query GetConfiguratorPage { / page(id: "28", idType: DATABASE_ID) { / sections { / hero { / subtitel / titel / omschrijving / afbeelding { / no..."
- After: 322 lines | 9,555 chars | hash 1b9f059103c2 | preview: "// lib/cms.ts / export async function getPageData() { / const query = ` / query GetConfiguratorPage { / page(id: "28", idType: DATABASE_ID) { / sections { / hero { / subtitel / titel / omschrijving / afbeelding { / no..."
- Previous fragment: "We vangen alle mogelijke ACF veldnaam-varianten op zodat de query nooit faalt / const query = ` / query GetAllVouchersForAuth { / vouchers(first: 100) { / nodes { / databaseId /..."
- Current fragment: "Dit is de correcte veldnaam volgens het WordPress schema: 'klantEmail' / const query = ` / query GetAllVouchersForAuth { / vouchers(first: 100) { / nodes { / databaseId / title..."

### 2026-11-05T23:35:01.560Z | saved | lib/cms.ts
- Summary: Line 232: replaced 68 lines with 73 lines.
- Before: 323 lines | 9,730 chars | hash dfc39aa891ec | preview: "// lib/cms.ts / export async function getPageData() { / const query = ` / query GetConfiguratorPage { / page(id: "28", idType: DATABASE_ID) { / sections { / hero { / subtitel / titel / omschrijving / afbeelding { / no..."
- After: 328 lines | 9,753 chars | hash 89e4fbac150b | preview: "// lib/cms.ts / export async function getPageData() { / const query = ` / query GetConfiguratorPage { / page(id: "28", idType: DATABASE_ID) { / sections { / hero { / subtitel / titel / omschrijving / afbeelding { / no..."
- Previous fragment: "gebruiken nu de juiste veldnaam 'klantEmail' zoals gedefinieerd in WordPress WPGraphQL / const query = ` / query GetAllVouchersForAuth { / vouchers(first: 100) { / nodes { / dat..."
- Current fragment: "vangen alle mogelijke ACF veldnaam-varianten op zodat de query nooit faalt / const query = ` / query GetAllVouchersForAuth { / vouchers(first: 100) { / nodes { / databaseId / ti..."

### 2026-11-05T23:30:57.755Z | saved | lib/cms.ts
- Summary: Line 232: replaced 68 lines with 68 lines.
- Before: 323 lines | 9,722 chars | hash 073cca7e70e2 | preview: "// lib/cms.ts / export async function getPageData() { / const query = ` / query GetConfiguratorPage { / page(id: "28", idType: DATABASE_ID) { / sections { / hero { / subtitel / titel / omschrijving / afbeelding { / no..."
- After: 323 lines | 9,730 chars | hash dfc39aa891ec | preview: "// lib/cms.ts / export async function getPageData() { / const query = ` / query GetConfiguratorPage { / page(id: "28", idType: DATABASE_ID) { / sections { / hero { / subtitel / titel / omschrijving / afbeelding { / no..."
- Previous fragment: "halen het e-mailveld feilloos op via de juiste ACF veldnaam (`klant_email`) / const query = ` / query GetAllVouchersForAuth { / vouchers(first: 100) { / nodes { / databaseId / t..."
- Current fragment: "gebruiken nu de juiste veldnaam 'klantEmail' zoals gedefinieerd in WordPress WPGraphQL / const query = ` / query GetAllVouchersForAuth { / vouchers(first: 100) { / nodes { / dat..."

### 2026-11-05T23:21:45.236Z | saved | lib/cms.ts
- Summary: Line 232: replaced 57 lines with 82 lines.
- Before: 298 lines | 8,744 chars | hash 283b32fc338c | preview: "// lib/cms.ts / export async function getPageData() { / const query = ` / query GetConfiguratorPage { / page(id: "28", idType: DATABASE_ID) { / sections { / hero { / subtitel / titel / omschrijving / afbeelding { / no..."
- After: 323 lines | 9,722 chars | hash 073cca7e70e2 | preview: "// lib/cms.ts / export async function getPageData() { / const query = ` / query GetConfiguratorPage { / page(id: "28", idType: DATABASE_ID) { / sections { / hero { / subtitel / titel / omschrijving / afbeelding { / no..."
- Previous fragment: "gebruiken de bewezen werkende query om alle vouchers op te halen / const query = ` / query GetAllVouchersForAuth { / vouchers(first: 100) { / nodes { / databaseId / title / slug..."
- Current fragment: "halen het e-mailveld feilloos op via de juiste ACF veldnaam (`klant_email`) / const query = ` / query GetAllVouchersForAuth { / vouchers(first: 100) { / nodes { / databaseId / t..."

### 2026-11-05T23:19:13.176Z | saved | lib/cms.ts
- Summary: Line 232: replaced 74 lines with 57 lines.
- Before: 315 lines | 9,315 chars | hash 4d4e1069a662 | preview: "// lib/cms.ts / export async function getPageData() { / const query = ` / query GetConfiguratorPage { / page(id: "28", idType: DATABASE_ID) { / sections { / hero { / subtitel / titel / omschrijving / afbeelding { / no..."
- After: 298 lines | 8,744 chars | hash 283b32fc338c | preview: "// lib/cms.ts / export async function getPageData() { / const query = ` / query GetConfiguratorPage { / page(id: "28", idType: DATABASE_ID) { / sections { / hero { / subtitel / titel / omschrijving / afbeelding { / no..."
- Previous fragment: "halen klantEmail expliciet op uit de voucherVelden / const query = ` / query GetAllVouchersForAuth { / vouchers(first: 100) { / nodes { / databaseId / title / slug / voucherVeld..."
- Current fragment: "gebruiken de bewezen werkende query om alle vouchers op te halen / const query = ` / query GetAllVouchersForAuth { / vouchers(first: 100) { / nodes { / databaseId / title / slug..."

### 2026-11-05T23:16:29.964Z | saved | lib/cms.ts
- Summary: Line 232: replaced 45 lines with 77 lines.
- Before: 283 lines | 7,942 chars | hash b67d52898205 | preview: "// lib/cms.ts / export async function getPageData() { / const query = ` / query GetConfiguratorPage { / page(id: "28", idType: DATABASE_ID) { / sections { / hero { / subtitel / titel / omschrijving / afbeelding { / no..."
- After: 315 lines | 9,315 chars | hash 4d4e1069a662 | preview: "// lib/cms.ts / export async function getPageData() { / const query = ` / query GetConfiguratorPage { / page(id: "28", idType: DATABASE_ID) { / sections { / hero { / subtitel / titel / omschrijving / afbeelding { / no..."
- Previous fragment: "const query = ` / query GetAllVouchersForAuth { / vouchers(first: 100) { / nodes { / databaseId / title / slug / voucherVelden { / toegangscode / status / } / } / } / } / `; / t..."
- Current fragment: "// We halen klantEmail expliciet op uit de voucherVelden / const query = ` / query GetAllVouchersForAuth { / vouchers(first: 100) { / nodes { / databaseId / title / slug / vouch..."

### 2026-11-05T23:12:17.248Z | saved | lib/cms.ts
- Summary: Line 242: replaced 76 lines with 37 lines.
- Before: 322 lines | 9,598 chars | hash e0c9e452ea51 | preview: "// lib/cms.ts / export async function getPageData() { / const query = ` / query GetConfiguratorPage { / page(id: "28", idType: DATABASE_ID) { / sections { / hero { / subtitel / titel / omschrijving / afbeelding { / no..."
- After: 283 lines | 7,942 chars | hash b67d52898205 | preview: "// lib/cms.ts / export async function getPageData() { / const query = ` / query GetConfiguratorPage { / page(id: "28", idType: DATABASE_ID) { / sections { / hero { / subtitel / titel / omschrijving / afbeelding { / no..."
- Previous fragment: "klantEmail / klantE_mail / klantenEmail / email / } / } / } / } / `; / try { / const res = await fetch(graphqlEndpoint, { / method: 'POST', / headers: { 'Content-Type': 'applica..."
- Current fragment: "} / } / } / } / `; / try { / const res = await fetch(graphqlEndpoint, { / method: 'POST', / headers: { 'Content-Type': 'application/json' }, / body: JSON.stringify({ query }), /..."

### 2026-11-05T23:08:34.867Z | saved | lib/cms.ts
- Summary: Line 232: replaced 64 lines with 86 lines.
- Before: 300 lines | 8,553 chars | hash a23a93ea3aee | preview: "// lib/cms.ts / export async function getPageData() { / const query = ` / query GetConfiguratorPage { / page(id: "28", idType: DATABASE_ID) { / sections { / hero { / subtitel / titel / omschrijving / afbeelding { / no..."
- After: 322 lines | 9,598 chars | hash e0c9e452ea51 | preview: "// lib/cms.ts / export async function getPageData() { / const query = ` / query GetConfiguratorPage { / page(id: "28", idType: DATABASE_ID) { / sections { / hero { / subtitel / titel / omschrijving / afbeelding { / no..."
- Previous fragment: "// Dynamische opvraag van alle mogelijke e-mail en status velden uit WordPress ACF / const query = ` / query GetAllVouchersForAuth { / vouchers(first: 100) { / nodes { / databas..."
- Current fragment: "const query = ` / query GetAllVouchersForAuth { / vouchers(first: 100) { / nodes { / databaseId / title / slug / voucherVelden { / toegangscode / status / klantEmail / klantE_ma..."

### 2026-11-05T23:03:35.990Z | saved | app/download/page.tsx
- Summary: Line 14: replaced 64 lines with 65 lines.
- Before: 398 lines | 19,266 chars | hash 34de51cfb2e4 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import { useRouter } from 'next/navigation'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / import { getPageDat..."
- After: 399 lines | 19,298 chars | hash d6c80bb2a10b | preview: "'use client'; / import { useState, useEffect } from 'react'; / import { useRouter } from 'next/navigation'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / import { getPageDat..."
- Previous fragment: "'); / const [designPakket, setDesignPakket] = useState<string>('Modern Raw'); / const [pageData, setPageData] = useState<any>(null); / const [isDownloading, setIsDownloading] =..."
- Current fragment: "Indeling 01'); / const [designPakket, setDesignPakket] = useState<string>('Modern Raw'); / const [pageData, setPageData] = useState<any>(null); / const [isDownloading, setIsDown..."

### 2026-11-05T23:03:04.458Z | saved | lib/cms.ts
- Summary: Line 232: replaced 58 lines with 62 lines.
- Before: 296 lines | 8,639 chars | hash 20e8ad72b3de | preview: "// lib/cms.ts / export async function getPageData() { / const query = ` / query GetConfiguratorPage { / page(id: "28", idType: DATABASE_ID) { / sections { / hero { / subtitel / titel / omschrijving / afbeelding { / no..."
- After: 300 lines | 8,553 chars | hash a23a93ea3aee | preview: "// lib/cms.ts / export async function getPageData() { / const query = ` / query GetConfiguratorPage { / page(id: "28", idType: DATABASE_ID) { / sections { / hero { / subtitel / titel / omschrijving / afbeelding { / no..."
- Previous fragment: "We vragen nu veilig velden op zonder te crashen; let op: we valideren de opgeslagen e-mail indien aanwezig in de title/slug/status of via een veilige check. / const query = ` /..."
- Current fragment: "Dynamische opvraag van alle mogelijke e-mail en status velden uit WordPress ACF / const query = ` / query GetAllVouchersForAuth { / vouchers(first: 100) { / nodes { / databaseId..."

### 2026-11-05T23:02:07.588Z | saved | lib/cms.ts
- Summary: Line 218: replaced 57 lines with 70 lines.
- Before: 283 lines | 7,842 chars | hash 38f52a242b53 | preview: "// lib/cms.ts / export async function getPageData() { / const query = ` / query GetConfiguratorPage { / page(id: "28", idType: DATABASE_ID) { / sections { / hero { / subtitel / titel / omschrijving / afbeelding { / no..."
- After: 296 lines | 8,639 chars | hash 20e8ad72b3de | preview: "// lib/cms.ts / export async function getPageData() { / const query = ` / query GetConfiguratorPage { / page(id: "28", idType: DATABASE_ID) { / sections { / hero { / subtitel / titel / omschrijving / afbeelding { / no..."
- Previous fragment: "', / }; / } catch (error) { / console.error('Fout bij ophalen vouchers via GraphQL:', error); / return null; / } / } / export async function verifyAndAuthVoucher(toegangscode: s..."
- Current fragment: "Indeling 01', / }; / } catch (error) { / console.error('Fout bij ophalen vouchers via GraphQL:', error); / return null; / } / } / export async function verifyAndAuthVoucher(toeg..."

### 2026-11-05T22:59:06.876Z | saved | app/download/page.tsx
- Summary: Line 7: replaced 73 lines with 71 lines.
- Before: 400 lines | 19,186 chars | hash 19a6bc5aad08 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import { useRouter } from 'next/navigation'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / import { getPageDat..."
- After: 398 lines | 19,266 chars | hash 34de51cfb2e4 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import { useRouter } from 'next/navigation'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / import { getPageDat..."
- Previous fragment: "} from '@/lib/cms'; / import { downloadZip } from 'client-zip'; / export default function DownloadPage() { / const router = useRouter(); / const [woningType, setWoningType] = us..."
- Current fragment: ", getVoucherData } from '@/lib/cms'; / import { downloadZip } from 'client-zip'; / export default function DownloadPage() { / const router = useRouter(); / const [woningType, se..."

### 2026-11-05T22:58:35.221Z | saved | lib/cms.ts
- Summary: Line 183: replaced 41 lines with 43 lines.
- Before: 281 lines | 7,764 chars | hash 33e5efc5d32c | preview: "// lib/cms.ts / export async function getPageData() { / const query = ` / query GetConfiguratorPage { / page(id: "28", idType: DATABASE_ID) { / sections { / hero { / subtitel / titel / omschrijving / afbeelding { / no..."
- After: 283 lines | 7,842 chars | hash 38f52a242b53 | preview: "// lib/cms.ts / export async function getPageData() { / const query = ` / query GetConfiguratorPage { / page(id: "28", idType: DATABASE_ID) { / sections { / hero { / subtitel / titel / omschrijving / afbeelding { / no..."
- Previous fragment: "status / } / } / } / } / `; / const graphqlEndpoint = 'https://cms.nomi-configurator.nl/graphql'; / try { / const res = await fetch(graphqlEndpoint, { / method: 'POST', / header..."
- Current fragment: "gekozenIndeling / indeling / status / } / } / } / } / `; / const graphqlEndpoint = 'https://cms.nomi-configurator.nl/graphql'; / try { / const res = await fetch(graphqlEndpoint,..."

### 2026-11-05T22:53:06.944Z | saved | app/download/page.tsx
- Summary: Line 39: replaced 139 lines with 117 lines.
- Before: 422 lines | 20,388 chars | hash a12394416f45 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import { useRouter } from 'next/navigation'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / import { getPageDat..."
- After: 400 lines | 19,186 chars | hash 19a6bc5aad08 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import { useRouter } from 'next/navigation'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / import { getPageDat..."
- Previous fragment: "try { / const res = await fetch(`/api/verify-voucher?code=${encodeURIComponent(voucherCode)}`); / if (res.ok) { / const voucherInfo = await res.json(); / if (!voucherInfo || vou..."
- Current fragment: "let cmsData = null; / try { / const fetchPromise = getPageData(); / const timeoutPromise = new Promise((_, reject) => / setTimeout(() => reject(new Error('CMS timeout')), 5000)..."


## Hot Files
- lib/cms.ts (17 tracked changes)
- components/LoginScreen.tsx (7 tracked changes)
- app/api/verify-voucher/route.ts (4 tracked changes)
- app/api/vouchers/route.ts (3 tracked changes)
- app/download/page.tsx (3 tracked changes)
- app/api/auth-voucher (2 tracked changes)
- app/api/auth-voucher/route.ts (2 tracked changes)
- lib/useConfigurator.ts (2 tracked changes)

## Git Snapshot
- Branch: main
- HEAD: 2026-11-06 f3ccbdd fix(auth): use exact WPGraphQL field name klantEmail
- Working tree summary: 1 modified
- M lib/cms.ts

## GitHub Snapshot
GitHub Repository: marketing-smartheads/nomi-configurator
Visibility: public | Default branch: main
Stars: 0 | Forks: 0 | Open issues: 0

Latest commit on main:
- f3ccbdd by Bas van Dooremalen on 2026-11-05
  fix(auth): use exact WPGraphQL field name klantEmail

URL: https://github.com/marketing-smartheads/nomi-configurator

## Graphify Snapshot
Graphify report not found. Generate Graphify output if you want architecture-aware memory excerpts here.

## Project Planner
- Project planner is not configured yet. Enable it in the chat panel to generate a time-based todo list and progress rescue briefs.

## Agent Notes
- If a future task asks what changed recently, start with `Recent Changes`, `Tracked Snapshots`, `Hot Files`, and `Git Snapshot`.
- If a future task asks how the project is organized, combine this file with `graphify-out/GRAPH_REPORT.md`.
- If a future task needs repository-level context, use `Package Snapshot`, the GitHub snapshot, and the Graphify snapshot before rescanning broad parts of the repo.
