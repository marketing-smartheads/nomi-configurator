# Workspace Memory
This file is maintained automatically by Code Janitor so Claude, Codex, Bob, and any other AI agent can reuse repo context without rescanning everything from scratch.
Generated: 2026-11-06T11:04:07.548Z
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
- Last activity: 2026-11-06T11:04:05.762Z
## Workspace Focus
- Active file in focus: components/configurator/StepTwoDesign.tsx
- Hottest files right now: lib/cms.ts (19), components/LoginScreen.tsx (6), app/api/verify-voucher/route.ts (3), app/download/page.tsx (3)
- Suggested starting points: components/configurator/StepTwoDesign.tsx, lib/cms.ts, components/LoginScreen.tsx, app/api/verify-voucher/route.ts, app/download/page.tsx, app/api/vouchers/route.ts
## Current Workspace
- Active file: components/configurator/StepTwoDesign.tsx
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
- Change mix: save (39), delete (1)
- Remembered file snapshots: 47
- Working tree summary: 4 modifieds
## Tracked Snapshots
- components/configurator/StepTwoDesign.tsx | 202 lines | 9066 chars | hash f757dfabf6eb
  Last snapshot: 2026-11-06T11:04:05.762Z
  Preview: "// components/StepTwoDesign.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / export default function StepTwoDesign({ / stepTitle, /..."
- components/configurator/StepThreeVisuals.tsx | 517 lines | 21684 chars | hash 0c1bb76eb05c
  Last snapshot: 2026-11-06T08:23:10.084Z
  Preview: "// components/StepThreeVisuals.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / export default function StepThreeVisuals({ / stepTitle, / configuratorData, / desig..."
- components/LoginScreen.tsx | 280 lines | 9936 chars | hash 7dfb1719bf66
  Last snapshot: 2026-11-06T00:00:55.468Z
  Preview: "// components/LoginScreen.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / import Button from './Button'; / import { useRouter } fr..."
- app/api/verify-voucher/route.ts | 188 lines | 6103 chars | hash c41fe8ed1e83
  Last snapshot: 2026-11-06T00:00:47.474Z
  Preview: "import { NextResponse } from 'next/server'; / export const dynamic = 'force-dynamic'; / export async function GET(request: Request) { / const { searchParams } = new URL(request.url); / const code = searchParams.get('c..."
- lib/cms.ts | 318 lines | 9223 chars | hash 32e06f359223
  Last snapshot: 2026-11-05T23:50:54.520Z
  Preview: "// lib/cms.ts / export async function getPageData() { / const query = ` / query GetConfiguratorPage { / page(id: "28", idType: DATABASE_ID) { / sections { / hero { / subtitel / titel / omschrijving / afbeelding { / no..."
- app/download/page.tsx | 399 lines | 19298 chars | hash d6c80bb2a10b
  Last snapshot: 2026-11-05T23:03:35.990Z
  Preview: "'use client'; / import { useState, useEffect } from 'react'; / import { useRouter } from 'next/navigation'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / import { getPageDat..."
- lib/useConfigurator.ts | 206 lines | 6358 chars | hash 6df8a1bf9348
  Last snapshot: 2026-11-05T22:22:17.496Z
  Preview: "'use client'; / import { useState, useEffect } from 'react'; / type ScreenType = 'welcome' | 'configurator' | 'download' | 'login'; / export function useConfigurator() { / const [screen, setScreenState] = useState<Scr..."
- app/api/vouchers/route.ts | 170 lines | 5453 chars | hash dfb46144d938
  Last snapshot: 2026-11-05T22:16:56.146Z
  Preview: "import { NextResponse } from 'next/server'; / export const dynamic = 'force-dynamic'; / // 1. GET: Voor het ophalen van alle vouchers / export async function GET() { / try { / const endpoint = process.env.NEXT_PUBLIC_..."

## Recent Changes
### 2026-11-06T11:04:05.762Z | saved | components/configurator/StepTwoDesign.tsx
- Summary: Saved without a textual diff.
- Before: 202 lines | 9,066 chars | hash f757dfabf6eb | preview: "// components/StepTwoDesign.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / export default function StepTwoDesign({ / stepTitle, /..."
- After: 202 lines | 9,066 chars | hash f757dfabf6eb | preview: "// components/StepTwoDesign.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / export default function StepTwoDesign({ / stepTitle, /..."

### 2026-11-06T11:03:21.027Z | saved | components/configurator/StepTwoDesign.tsx
- Summary: Line 46: replaced 19 lines with 23 lines.
- Before: 198 lines | 8,826 chars | hash e227e7a1b445 | preview: "// components/StepTwoDesign.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / export default function StepTwoDesign({ / stepTitle, /..."
- After: 202 lines | 9,066 chars | hash f757dfabf6eb | preview: "// components/StepTwoDesign.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / export default function StepTwoDesign({ / stepTitle, /..."
- Previous fragment: "STRIKTE FILTERING: Alleen rijen die exact matchen met het woningtype en indeling / const matchendeWoningRijen = woningTypenLijst.filter((w: any) => { / const naam = (w?.typeNaam..."
- Current fragment: "1. Zoek uitsluitend rijen die exact matchen met het woningtype en indeling / const matchendeWoningRijen = woningTypenLijst.filter((w: any) => { / const naam = (w?.typeNaam || w?..."

### 2026-11-06T10:58:05.109Z | saved | components/configurator/StepTwoDesign.tsx
- Summary: Line 1: replaced 65 lines with 63 lines.
- Before: 200 lines | 8,924 chars | hash 62093ff0ea75 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / export default function StepTwoDesign({ / stepTitle, / configuratorData, / designPakket,..."
- After: 198 lines | 8,826 chars | hash e227e7a1b445 | preview: "// components/StepTwoDesign.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / export default function StepTwoDesign({ / stepTitle, /..."
- Previous fragment: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / export default function StepTwoDesign({ / stepTi..."
- Current fragment: "// components/StepTwoDesign.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / export default..."

### 2026-11-06T08:23:10.084Z | saved | components/configurator/StepThreeVisuals.tsx
- Summary: Line 1: replaced 175 lines with 183 lines.
- Before: 509 lines | 21,194 chars | hash 55a56b73a3e1 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / export default function StepThreeVisuals({ / stepTitle, / configuratorData, / designPakket, / woningType / }: any) { / c..."
- After: 517 lines | 21,684 chars | hash 0c1bb76eb05c | preview: "// components/StepThreeVisuals.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / export default function StepThreeVisuals({ / stepTitle, / configuratorData, / desig..."
- Previous fragment: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / export default function StepThreeVisuals({ / stepTitle, / configuratorData, / de..."
- Current fragment: "// components/StepThreeVisuals.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / export default function StepThreeVisuals({..."

### 2026-11-06T00:00:55.468Z | saved | components/LoginScreen.tsx
- Summary: Line 9: replaced 73 lines with 81 lines.
- Before: 272 lines | 9,764 chars | hash 7c0b97494bc5 | preview: "// components/LoginScreen.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / import Button from './Button'; / import { useRouter } fr..."
- After: 280 lines | 9,936 chars | hash 7dfb1719bf66 | preview: "// components/LoginScreen.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / import Button from './Button'; / import { useRouter } fr..."
- Previous fragment: "import { verifyAndAuthVoucher } from '../lib/cms'; / interface LoginScreenProps { / toegangscode: string; / setToegangscode: (val: string) => void; / klantEmail: string; / setKl..."
- Current fragment: "interface LoginScreenProps { / toegangscode: string; / setToegangscode: (val: string) => void; / klantEmail: string; / setKlantEmail: (val: string) => void; / error: string | nu..."

### 2026-11-06T00:00:47.474Z | saved | app/api/verify-voucher/route.ts
- Summary: Line 131: inserted 58 lines.
- Before: 131 lines | 4,145 chars | hash 879d9623513b | preview: "import { NextResponse } from 'next/server'; / export const dynamic = 'force-dynamic'; / export async function GET(request: Request) { / const { searchParams } = new URL(request.url); / const code = searchParams.get('c..."
- After: 188 lines | 6,103 chars | hash c41fe8ed1e83 | preview: "import { NextResponse } from 'next/server'; / export const dynamic = 'force-dynamic'; / export async function GET(request: Request) { / const { searchParams } = new URL(request.url); / const code = searchParams.get('c..."
- Current fragment: "ige vouchercode. Controleer uw invoer.' }, / { status: 404 } / ); / } / const velden = voucher.voucherVelden || {}; / const opgeslagenEmail = (velden.klantEMail || '').trim().to..."

### 2026-11-06T00:00:41.491Z | saved | app/api/verify-voucher/route.ts
- Summary: Line 14: replaced 176 lines with 118 lines.
- Before: 189 lines | 6,106 chars | hash 110421b695dd | preview: "import { NextResponse } from 'next/server'; / export const dynamic = 'force-dynamic'; / export async function GET(request: Request) { / const { searchParams } = new URL(request.url); / const code = searchParams.get('c..."
- After: 131 lines | 4,145 chars | hash 879d9623513b | preview: "import { NextResponse } from 'next/server'; / export const dynamic = 'force-dynamic'; / export async function GET(request: Request) { / const { searchParams } = new URL(request.url); / const code = searchParams.get('c..."
- Previous fragment: "'; / const wpUser = process.env.WORDPRESS_AUTH_USER; / const wpPass = process.env.WORDPRESS_AUTH_PASSWORD; / const basicAuth = wpUser && wpPass ? 'Basic ' + Buffer.from(`${wpUse..."
- Current fragment: "https://cms.nomi-configurator.nl/graphql'; / const wpUser = process.env.WORDPRESS_AUTH_USER; / const wpPass = process.env.WORDPRESS_AUTH_PASSWORD; / const basicAuth = wpUser &&..."

### 2026-11-05T23:55:51.869Z | saved | components/LoginScreen.tsx
- Summary: Line 1: replaced 102 lines with 98 lines.
- Before: 276 lines | 9,862 chars | hash 904ae93bdd1a | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / import Button from './Button'; / import { useRouter } from 'next/navigation'; / import {..."
- After: 272 lines | 9,764 chars | hash 7c0b97494bc5 | preview: "// components/LoginScreen.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / import Button from './Button'; / import { useRouter } fr..."
- Previous fragment: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / import Button from './Button'; / import { useRou..."
- Current fragment: "// components/LoginScreen.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / import Button fr..."

### 2026-11-05T23:50:54.520Z | saved | lib/cms.ts
- Summary: Line 291: inserted 2 lines.
- Before: 317 lines | 9,139 chars | hash 6bb76d191141 | preview: "// lib/cms.ts / export async function getPageData() { / const query = ` / query GetConfiguratorPage { / page(id: "28", idType: DATABASE_ID) { / sections { / hero { / subtitel / titel / omschrijving / afbeelding { / no..."
- After: 318 lines | 9,223 chars | hash 32e06f359223 | preview: "// lib/cms.ts / export async function getPageData() { / const query = ` / query GetConfiguratorPage { / page(id: "28", idType: DATABASE_ID) { / sections { / hero { / subtitel / titel / omschrijving / afbeelding { / no..."
- Current fragment: "// Ongebruikte voucher: koppel het e-mailadres direct dynamisch in WordPress"

### 2026-11-05T23:47:39.200Z | saved | lib/cms.ts
- Summary: Line 232: replaced 64 lines with 59 lines.
- Before: 322 lines | 9,591 chars | hash 226caf9bbf89 | preview: "// lib/cms.ts / export async function getPageData() { / const query = ` / query GetConfiguratorPage { / page(id: "28", idType: DATABASE_ID) { / sections { / hero { / subtitel / titel / omschrijving / afbeelding { / no..."
- After: 317 lines | 9,139 chars | hash 6bb76d191141 | preview: "// lib/cms.ts / export async function getPageData() { / const query = ` / query GetConfiguratorPage { / page(id: "28", idType: DATABASE_ID) { / sections { / hero { / subtitel / titel / omschrijving / afbeelding { / no..."
- Previous fragment: "// Gebruik de exacte graphql_field_name uit je ACF configuratie: 'klantEMail' / const query = ` / query GetAllVouchersForAuth { / vouchers(first: 100) { / nodes { / databaseId /..."
- Current fragment: "const query = ` / query GetAllVouchersForAuth { / vouchers(first: 100) { / nodes { / databaseId / title / slug / voucherVelden { / toegangscode / status / klantEMail / } / } / }..."

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


## Hot Files
- lib/cms.ts (19 tracked changes)
- components/LoginScreen.tsx (6 tracked changes)
- app/api/verify-voucher/route.ts (3 tracked changes)
- app/download/page.tsx (3 tracked changes)
- components/configurator/StepTwoDesign.tsx (3 tracked changes)
- app/api/vouchers/route.ts (2 tracked changes)
- lib/useConfigurator.ts (2 tracked changes)
- app/api/auth-voucher (1 tracked changes)

## Git Snapshot
- Branch: main
- HEAD: 2026-11-06 3191c36 fix(packages): remove fallback behavior so only packages explicitly configured for the selected housing type and layout are shown
- Working tree summary: 4 modifieds
- M components/configurator/StepTwoDesign.tsx
- M graphify-out/WORKSPACE_MEMORY.md
- M workspace.json
- M workspacememory.md

## GitHub Snapshot
GitHub Repository: marketing-smartheads/nomi-configurator
Visibility: public | Default branch: main
Stars: 0 | Forks: 0 | Open issues: 0

Latest commit on main:
- 3191c36 by Bas van Dooremalen on 2026-11-06
  fix(packages): remove fallback behavior so only packages explicitly configured for the selected housing type and layout are shown

URL: https://github.com/marketing-smartheads/nomi-configurator

## Graphify Snapshot
Graphify report not found. Generate Graphify output if you want architecture-aware memory excerpts here.

## Project Planner
- Project planner is not configured yet. Enable it in the chat panel to generate a time-based todo list and progress rescue briefs.

## Agent Notes
- If a future task asks what changed recently, start with `Recent Changes`, `Tracked Snapshots`, `Hot Files`, and `Git Snapshot`.
- If a future task asks how the project is organized, combine this file with `graphify-out/GRAPH_REPORT.md`.
- If a future task needs repository-level context, use `Package Snapshot`, the GitHub snapshot, and the Graphify snapshot before rescanning broad parts of the repo.
