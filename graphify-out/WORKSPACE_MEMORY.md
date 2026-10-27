# Workspace Memory
This file is maintained automatically by Code Janitor so Claude, Codex, Bob, and any other AI agent can reuse repo context without rescanning everything from scratch.
Generated: 2026-10-27T12:17:55.429Z
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
- Last activity: 2026-10-27T12:17:53.102Z
## Workspace Focus
- Active file in focus: app/download/page.tsx
- Hottest files right now: components/configurator/StepFourConfirmation.tsx (18), app/download/page.tsx (8), components/configurator/StepThreeVisuals.tsx (8), components/configurator/StepTwoDesign.tsx (3)
- Suggested starting points: app/download/page.tsx, components/configurator/StepFourConfirmation.tsx, components/configurator/StepThreeVisuals.tsx, components/configurator/StepTwoDesign.tsx, lib/cms.ts, app/api/confirm/route.ts
## Current Workspace
- Active file: app/download/page.tsx
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
- app/download/page.tsx | 480 lines | 22743 chars | hash 9b21e1741f7d
  Last snapshot: 2026-10-27T12:17:53.102Z
  Preview: "'use client'; / import { useState, useEffect } from 'react'; / import { useRouter } from 'next/navigation'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / import { getPageDat..."
- components/configurator/StepFourConfirmation.tsx | 307 lines | 14831 chars | hash c65841c87fbd
  Last snapshot: 2026-10-27T11:43:31.026Z
  Preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from '../Button'; / const PARTNER_NAAM = 'Aanhuis Spijk'; /..."
- app/api/confirm/route.ts | 308 lines | 11550 chars | hash e789f59957a2
  Last snapshot: 2026-10-27T11:42:58.917Z
  Preview: "import { NextResponse } from 'next/server'; / import { Resend } from 'resend'; / const resend = new Resend(process.env.RESEND_API_KEY); / export async function POST(request: Request) { / try { / const body = await req..."
- lib/cms.ts | 224 lines | 6049 chars | hash 15c866223c79
  Last snapshot: 2026-10-27T10:51:01.817Z
  Preview: "// lib/cms.ts / export async function getPageData() { / const query = ` / query GetConfiguratorPage { / page(id: "28", idType: DATABASE_ID) { / sections { / hero { / subtitel / titel / omschrijving / afbeelding { / no..."
- components/configurator/StepThreeVisuals.tsx | 422 lines | 17204 chars | hash 7c13abe084e1
  Last snapshot: 2026-10-27T08:55:56.454Z
  Preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / export default function StepThreeVisuals({ / stepTitle, / configuratorData, / designPakket, / woningType / }: any) { / /..."
- components/configurator/StepTwoDesign.tsx | 135 lines | 5497 chars | hash 829aaad9c45c
  Last snapshot: 2026-10-27T00:47:00.540Z
  Preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / export default function StepTwoDesign({ / stepTitle, / configuratorData, / designPakket,..."
- components/configurator/StepOnewoning.tsx | 103 lines | 4563 chars | hash 3c15fc14d5bc
  Last snapshot: 2026-10-26T15:22:36.985Z
  Preview: "'use client'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / selectedIndeling, / setSelectedIndeling / }: any) { / const gefilterdeLijst = woningType / ?..."
- lib/useConfigurator.ts | 191 lines | 5604 chars | hash 6b9a1c08487a
  Last snapshot: 2026-10-26T15:19:19.500Z
  Preview: "'use client'; / import { useState, useEffect } from 'react'; / type ScreenType = 'welcome' | 'configurator' | 'download' | 'login'; / export function useConfigurator() { / const [screen, setScreenState] = useState<Scr..."

## Recent Changes
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

### 2026-10-27T12:07:31.334Z | saved | app/download/page.tsx
- Summary: Line 197: replaced 213 lines with 216 lines.
- Before: 450 lines | 21,214 chars | hash 69ad8ebf96d4 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import { useRouter } from 'next/navigation'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / import { getPageDat..."
- After: 453 lines | 21,397 chars | hash 86ed78038622 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import { useRouter } from 'next/navigation'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / import { getPageDat..."
- Previous fragment: ": ''; / if (needsVoucherInput) { / return ( / <div className="min-h-screen bg-dark flex flex-col justify-between text-dark"> / <Header currentScreen="download" /> / <main classN..."
- Current fragment: ".replace(/^0+/, '') : ''; / // Helper om bestanden te filteren met slimme fallback / const getGefilterdeBestanden = (rawBestandenLijst: any[]) => { / const pakketGefilterd = raw..."

### 2026-10-27T12:01:20.581Z | saved | app/download/page.tsx
- Summary: Line 196: replaced 218 lines with 225 lines.
- Before: 443 lines | 20,973 chars | hash 77daeb8fb697 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import { useRouter } from 'next/navigation'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / import { getPageDat..."
- After: 450 lines | 21,214 chars | hash 69ad8ebf96d4 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import { useRouter } from 'next/navigation'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / import { getPageDat..."
- Previous fragment: "// Extraheer indelingnummer (bijv. "02" uit "Indeling 02" of "EC02") / const indelingNummerMatch = (gekozenIndeling || '').match(/\d+/); / const indelingNummer = indelingNummerM..."
- Current fragment: "const indelingNummerMatch = (gekozenIndeling || '').match(/\d+/); / const indelingNummer = indelingNummerMatch ? indelingNummerMatch[0] : ''; / if (needsVoucherInput) { / return..."

### 2026-10-27T11:55:39.136Z | saved | app/download/page.tsx
- Summary: Line 23: replaced 528 lines with 417 lines.
- Before: 554 lines | 22,645 chars | hash f82dad4c5249 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import { useRouter } from 'next/navigation'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / import { getPageDat..."
- After: 443 lines | 20,973 chars | hash 77daeb8fb697 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import { useRouter } from 'next/navigation'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / import { getPageDat..."
- Previous fragment: "// Initialiseer en valideer de downloadpagina & koppel voucher dynamisch op basis van WordPress data / useEffect(() => { / let isMounted = true; / async function initDownloadPag..."
- Current fragment: "useEffect(() => { / let isMounted = true; / async function initDownloadPage() { / try { / let cmsData = null; / try { / const fetchPromise = getPageData(); / const timeoutPromis..."

### 2026-10-27T11:43:31.026Z | saved | components/configurator/StepFourConfirmation.tsx
- Summary: Line 48: replaced 440 lines with 254 lines.
- Before: 493 lines | 22,271 chars | hash f4436a5f41b4 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from '../Button'; / const PARTNER_NAAM = 'Aanhuis Spijk'; /..."
- After: 307 lines | 14,831 chars | hash c65841c87fbd | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from '../Button'; / const PARTNER_NAAM = 'Aanhuis Spijk'; /..."
- Previous fragment: "sessionStorage.getItem('email') || / localStorage.getItem('email') || ''; / setKlantEmail(opgeslagenEmail); / const opgeslagenNaam = / sessionStorage.getItem('klantNaam') || / l..."
- Current fragment: "''; / setKlantEmail(opgeslagenEmail); / const opgeslagenNaam = / sessionStorage.getItem('klantNaam') || / localStorage.getItem('klantNaam') || ''; / if (opgeslagenNaam) setKlant..."

### 2026-10-27T11:42:58.917Z | saved | app/api/confirm/route.ts
- Summary: Line 14: replaced 363 lines with 281 lines.
- Before: 390 lines | 15,369 chars | hash c56f8cd3c4e3 | preview: "import { NextResponse } from 'next/server'; / import { Resend } from 'resend'; / const resend = new Resend(process.env.RESEND_API_KEY); / export async function POST(request: Request) { / try { / const body = await req..."
- After: 308 lines | 11,550 chars | hash e789f59957a2 | preview: "import { NextResponse } from 'next/server'; / import { Resend } from 'resend'; / const resend = new Resend(process.env.RESEND_API_KEY); / export async function POST(request: Request) { / try { / const body = await req..."
- Previous fragment: "designPakket = body.designPakket || body.selected_designPakket || body.geselecteerdePakket; / let woningObject = body.woningObject || 'Nomi — Object'; / let partners = body.part..."
- Current fragment: "gekozenIndeling = body.gekozenIndeling || body.selected_indeling || body.geselecteerdeIndeling || 'Standaard indeling'; / let designPakket = body.designPakket || body.selected_d..."

### 2026-10-27T11:29:41.938Z | saved | app/download/page.tsx
- Summary: Line 96: replaced 13 lines with 22 lines.
- Before: 545 lines | 22,242 chars | hash 1090c35185df | preview: "'use client'; / import { useState, useEffect } from 'react'; / import { useRouter } from 'next/navigation'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / import { getPageDat..."
- After: 554 lines | 22,645 chars | hash f82dad4c5249 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import { useRouter } from 'next/navigation'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / import { getPageDat..."
- Previous fragment: "Ophalen van gekozen indeling uit localStorage / sessionStorage / let rawIndelingObj = {}; / try { / rawIndelingObj = JSON.parse(localStorage.getItem('selected_indeling') || '{}'..."
- Current fragment: "Robuust ophalen van de gekozen indeling (of het nu een object of string is) / let resolvedIndeling = ''; / try { / const rawLocalStorageIndeling = localStorage.getItem('selected..."

### 2026-10-27T11:19:16.781Z | saved | app/download/page.tsx
- Summary: Line 14: replaced 409 lines with 430 lines.
- Before: 524 lines | 21,353 chars | hash f77a5c92bea1 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import { useRouter } from 'next/navigation'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / import { getPageDat..."
- After: 545 lines | 22,242 chars | hash 1090c35185df | preview: "'use client'; / import { useState, useEffect } from 'react'; / import { useRouter } from 'next/navigation'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / import { getPageDat..."
- Previous fragment: "designPakket, setDesignPakket] = useState<string>('Hotel Chic'); / const [pageData, setPageData] = useState<any>(null); / const [isDownloading, setIsDownloading] = useState<bool..."
- Current fragment: "gekozenIndeling, setGekozenIndeling] = useState<string>(''); / const [designPakket, setDesignPakket] = useState<string>('Hotel Chic'); / const [pageData, setPageData] = useState..."

### 2026-10-27T11:04:59.181Z | saved | components/configurator/StepFourConfirmation.tsx
- Summary: Line 69: replaced 39 lines with 31 lines.
- Before: 501 lines | 22,218 chars | hash 5ecfa4a27ef8 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from '../Button'; / const PARTNER_NAAM = 'Aanhuis Spijk'; /..."
- After: 493 lines | 22,271 chars | hash f4436a5f41b4 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from '../Button'; / const PARTNER_NAAM = 'Aanhuis Spijk'; /..."
- Previous fragment: "const rawDesignPakketten = data?.designPaketten || data?.design_paketten || []; / const designPakkettenLijst = Array.isArray(rawDesignPakketten) ? rawDesignPakketten : rawDesign..."
- Current fragment: "// Gecorrigeerd: let op de dubbele 'k' (designPakketten) die overeenkomt met lib/cms.ts / const rawDesignPakketten = data?.designPakketten || data?.designPaketten || data?.desig..."

### 2026-10-27T11:00:49.581Z | saved | components/configurator/StepFourConfirmation.tsx
- Summary: Line 87: replaced 12 lines with 21 lines.
- Before: 492 lines | 22,077 chars | hash a7ff2f0ae634 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from '../Button'; / const PARTNER_NAAM = 'Aanhuis Spijk'; /..."
- After: 501 lines | 22,218 chars | hash 5ecfa4a27ef8 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from '../Button'; / const PARTNER_NAAM = 'Aanhuis Spijk'; /..."
- Previous fragment: "echtstreeks op uit het geselecteerde pakket[cite: 21] / const bevData = storedPakket?.bevestigingStap || {}; / const rawImage = bevData?.bannerAfbeelding; / const heroImage = /..."
- Current fragment: "obuust op (inclusief snake_case en camelCase varianten) / const bevData = / storedPakket?.bevestigingStap || / storedPakket?.bevestiging_stap || / {}; / const rawImage = / bevDa..."

### 2026-10-27T10:56:05.712Z | saved | components/configurator/StepFourConfirmation.tsx
- Summary: Line 87: replaced 23 lines with 12 lines.
- Before: 503 lines | 22,267 chars | hash 9d1aaba99dd7 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from '../Button'; / const PARTNER_NAAM = 'Aanhuis Spijk'; /..."
- After: 492 lines | 22,077 chars | hash a7ff2f0ae634 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from '../Button'; / const PARTNER_NAAM = 'Aanhuis Spijk'; /..."
- Previous fragment: "const bevData = / storedPakket?.bevestigingStap || / storedPakket?.bevestiging_stap || / {}; / const rawImage = / bevData?.bannerAfbeelding || / bevData?.banner_afbeelding || /..."
- Current fragment: "[cite: 21] / const bevData = storedPakket?.bevestigingStap || {}; / const rawImage = bevData?.bannerAfbeelding; / const heroImage = / typeof rawImage === 'string' ? rawImage : /..."

### 2026-10-27T10:51:01.817Z | saved | lib/cms.ts
- Summary: Line 113: replaced 7 lines with 16 lines.
- Before: 215 lines | 5,824 chars | hash 3b57281655f0 | preview: "// lib/cms.ts / export async function getPageData() { / const query = ` / query GetConfiguratorPage { / page(id: "28", idType: DATABASE_ID) { / sections { / hero { / subtitel / titel / omschrijving / afbeelding { / no..."
- After: 224 lines | 6,049 chars | hash 15c866223c79 | preview: "// lib/cms.ts / export async function getPageData() { / const query = ` / query GetConfiguratorPage { / page(id: "28", idType: DATABASE_ID) { / sections { / hero { / subtitel / titel / omschrijving / afbeelding { / no..."
- Previous fragment: "} / moodboardGallery { / nodes { / sourceUrl / } / }"
- Current fragment: "} / moodboardGallery { / nodes { / sourceUrl / } / } / bevestigingStap { / bannerAfbeelding { / node { / sourceUrl / mediaItemUrl / } / } / bannerTitel / }"

### 2026-10-27T10:45:53.446Z | saved | components/configurator/StepFourConfirmation.tsx
- Summary: Line 87: replaced 26 lines with 23 lines.
- Before: 506 lines | 22,365 chars | hash 7f6cc257e2a0 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from '../Button'; / const PARTNER_NAAM = 'Aanhuis Spijk'; /..."
- After: 503 lines | 22,267 chars | hash 9d1aaba99dd7 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from '../Button'; / const PARTNER_NAAM = 'Aanhuis Spijk'; /..."
- Previous fragment: "const bevData = / storedPakket?.bevestigingStap || / storedPakket?.bevestiging_stap || / {}; / const rawImage = / bevData?.bannerAfbeelding || / bevData?.banner_afbeelding || /..."
- Current fragment: "// Haal de bevestigingsstap rechtstreeks op uit het geselecteerde pakket / const bevData = / storedPakket?.bevestigingStap || / storedPakket?.bevestiging_stap || / {}; / const r..."

### 2026-10-27T10:42:53.950Z | saved | components/configurator/StepFourConfirmation.tsx
- Summary: Line 90: replaced 33 lines with 23 lines.
- Before: 516 lines | 22,756 chars | hash 2188db4aeac1 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from '../Button'; / const PARTNER_NAAM = 'Aanhuis Spijk'; /..."
- After: 506 lines | 22,365 chars | hash 7f6cc257e2a0 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from '../Button'; / const PARTNER_NAAM = 'Aanhuis Spijk'; /..."
- Previous fragment: "data?.bevestigingStap || / data?.bevestiging_stap || / {}; / const rawImage = / bevData?.bannerAfbeelding || / bevData?.banner_afbeelding || / storedPakket?.pakketAfbeelding ||..."
- Current fragment: "{}; / const rawImage = / bevData?.bannerAfbeelding || / bevData?.banner_afbeelding || / storedPakket?.pakketAfbeelding || / storedPakket?.pakket_afbeelding || / storedPakket?.pa..."


## Hot Files
- components/configurator/StepFourConfirmation.tsx (18 tracked changes)
- app/download/page.tsx (8 tracked changes)
- components/configurator/StepThreeVisuals.tsx (8 tracked changes)
- components/configurator/StepTwoDesign.tsx (3 tracked changes)
- lib/cms.ts (2 tracked changes)
- app/api/confirm/route.ts (1 tracked changes)

## Git Snapshot
- Branch: main
- HEAD: 2026-10-27 2c77995 fix(download): implement strict layout filtering to exclude files belonging to other layout variants
- Working tree summary: 1 modified
- M app/download/page.tsx

## GitHub Snapshot
GitHub Repository: marketing-smartheads/nomi-configurator
Visibility: public | Default branch: main
Stars: 0 | Forks: 0 | Open issues: 0

Latest commit on main:
- 2c77995 by Bas van Dooremalen on 2026-10-27
  fix(download): implement strict layout filtering to exclude files belonging to other layout variants

URL: https://github.com/marketing-smartheads/nomi-configurator

## Graphify Snapshot
Graphify report not found. Generate Graphify output if you want architecture-aware memory excerpts here.

## Project Planner
- Project planner is not configured yet. Enable it in the chat panel to generate a time-based todo list and progress rescue briefs.

## Agent Notes
- If a future task asks what changed recently, start with `Recent Changes`, `Tracked Snapshots`, `Hot Files`, and `Git Snapshot`.
- If a future task asks how the project is organized, combine this file with `graphify-out/GRAPH_REPORT.md`.
- If a future task needs repository-level context, use `Package Snapshot`, the GitHub snapshot, and the Graphify snapshot before rescanning broad parts of the repo.
