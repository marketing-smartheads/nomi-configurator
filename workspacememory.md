# Workspace Memory
This file is maintained automatically by Code Janitor so Claude, Codex, Bob, and any other AI agent can reuse repo context without rescanning everything from scratch.
Generated: 2026-11-05T17:11:33.611Z
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
- Last activity: 2026-11-05T17:11:31.875Z
## Workspace Focus
- Active file in focus: components/configurator/StepOnewoning.tsx
- Hottest files right now: components/configurator/StepThreeVisuals.tsx (16), lib/cms.ts (13), components/configurator/StepTwoDesign.tsx (4), components/configurator/StepFourConfirmation.tsx (3)
- Suggested starting points: components/configurator/StepOnewoning.tsx, components/configurator/StepThreeVisuals.tsx, lib/cms.ts, components/configurator/StepTwoDesign.tsx, components/configurator/StepFourConfirmation.tsx, app/download/page.tsx
## Current Workspace
- Active file: components/configurator/StepOnewoning.tsx
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
- components/configurator/StepOnewoning.tsx | 122 lines | 5571 chars | hash 7c52c9f0546f
  Last snapshot: 2026-11-05T17:11:31.875Z
  Preview: "'use client'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / selectedIndeling, / setSelectedIndeling / }: any) { / const gefilterdeLijst = woningType / ?..."
- components/configurator/StepThreeVisuals.tsx | 509 lines | 21194 chars | hash 55a56b73a3e1
  Last snapshot: 2026-11-05T17:06:56.479Z
  Preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / export default function StepThreeVisuals({ / stepTitle, / configuratorData, / designPakket, / woningType / }: any) { / c..."
- components/configurator/StepTwoDesign.tsx | 200 lines | 8924 chars | hash 62093ff0ea75
  Last snapshot: 2026-11-05T16:19:57.343Z
  Preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / export default function StepTwoDesign({ / stepTitle, / configuratorData, / designPakket,..."
- app/download/page.tsx | 422 lines | 19675 chars | hash 5a4b08bcd6c0
  Last snapshot: 2026-11-05T15:02:44.770Z
  Preview: "'use client'; / import { useState, useEffect } from 'react'; / import { useRouter } from 'next/navigation'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / import { getPageDat..."
- components/configurator/StepFourConfirmation.tsx | 322 lines | 15166 chars | hash 221f402a9bba
  Last snapshot: 2026-11-05T15:02:32.648Z
  Preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from '../Button'; / const PARTNER_NAAM = 'Aanhuis Spijk'; /..."
- lib/cms.ts | 225 lines | 6176 chars | hash 4ba55e533623
  Last snapshot: 2026-11-05T14:51:49.893Z
  Preview: "// lib/cms.ts / export async function getPageData() { / const query = ` / query GetConfiguratorPage { / page(id: "28", idType: DATABASE_ID) { / sections { / hero { / subtitel / titel / omschrijving / afbeelding { / no..."
- components/Hero.tsx | 64 lines | 2504 chars | hash 47d3a0d89c7a
  Last snapshot: 2026-11-05T08:49:02.674Z
  Preview: "import React from 'react'; / import Image from 'next/image'; / import Button from './Button'; / interface HeroProps { / onStart: () => void; / data?: { // Maak data optioneel met een ? / subtitel?: string; / titel?: s..."
- components/MainContent.tsx | 217 lines | 8844 chars | hash e6c5e1499cef
  Last snapshot: 2026-11-02T10:45:40.365Z
  Preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useConfigurator } from '../lib/useConfigurator'; / import LoginScreen from '../components/LoginScreen'; / impor..."

## Recent Changes
### 2026-11-05T17:11:31.875Z | saved | components/configurator/StepOnewoning.tsx
- Summary: Line 25: replaced 44 lines with 57 lines.
- Before: 109 lines | 5,060 chars | hash 95cd67c49c6f | preview: "'use client'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / selectedIndeling, / setSelectedIndeling / }: any) { / const gefilterdeLijst = woningType / ?..."
- After: 122 lines | 5,571 chars | hash 7c52c9f0546f | preview: "'use client'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / selectedIndeling, / setSelectedIndeling / }: any) { / const gefilterdeLijst = woningType / ?..."
- Previous fragment: "if (!woningType && woningTypenLijst.length > 0) { / return ( / <div className="space-y-12 min-h-[400px] flex flex-col justify-center items-center"> / <p className="text-xs text-..."
- Current fragment: "const handleSelectIndeling = (item: any, indelingTitel: string) => { / setSelectedIndeling(item); / if (typeof window !== 'undefined') { / try { / localStorage.setItem('selected..."

### 2026-11-05T17:06:56.479Z | saved | components/configurator/StepThreeVisuals.tsx
- Summary: Line 47: replaced 123 lines with 130 lines.
- Before: 502 lines | 21,036 chars | hash 28fb5556115b | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / export default function StepThreeVisuals({ / stepTitle, / configuratorData, / designPakket, / woningType / }: any) { / c..."
- After: 509 lines | 21,194 chars | hash 55a56b73a3e1 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / export default function StepThreeVisuals({ / stepTitle, / configuratorData, / designPakket, / woningType / }: any) { / c..."
- Previous fragment: "const huidigWoningTypeObj = woningTypenLijst.find((w: any) => { / const naam = (w?.typeNaam || w?.typenaam || '').toLowerCase().replace(/[^a-z0-9]/g, ''); / const indTitel = (w?..."
- Current fragment: "// Verzamel ALLE rijen die matchen met het woningtype en de geselecteerde indeling / const matchendeRijen = woningTypenLijst.filter((w: any) => { / const naam = (w?.typeNaam ||..."

### 2026-11-05T17:02:34.730Z | saved | components/configurator/StepThreeVisuals.tsx
- Summary: Line 32: replaced 366 lines with 375 lines.
- Before: 493 lines | 20,516 chars | hash 55481051f944 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / export default function StepThreeVisuals({ / stepTitle, / configuratorData, / designPakket, / woningType / }: any) { / c..."
- After: 502 lines | 21,036 chars | hash 28fb5556115b | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / export default function StepThreeVisuals({ / stepTitle, / configuratorData, / designPakket, / woningType / }: any) { / c..."
- Previous fragment: "// Haal direct op uit sessionStorage of localStorage met absolute prioriteit voor Modern Raw / const sessionPak = sessionStorage.getItem('geselecteerdPakket'); / const localPak..."
- Current fragment: "const sessionPak = sessionStorage.getItem('geselecteerdPakket'); / const localPak = localStorage.getItem('selected_designPakket'); / const gekozen = sessionPak || localPak || de..."

### 2026-11-05T16:57:41.682Z | saved | components/configurator/StepThreeVisuals.tsx
- Summary: Line 17: replaced 454 lines with 457 lines.
- Before: 490 lines | 20,353 chars | hash 6e15cccf6274 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / export default function StepThreeVisuals({ / stepTitle, / configuratorData, / designPakket, / woningType / }: any) { / c..."
- After: 493 lines | 20,516 chars | hash 55481051f944 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / export default function StepThreeVisuals({ / stepTitle, / configuratorData, / designPakket, / woningType / }: any) { / c..."
- Previous fragment: "opgeslagenPakket, setOpgeslagenPakket] = useState(''); / useEffect(() => { / if (typeof window !== 'undefined') { / try { / const rawInd = localStorage.getItem('selected_indelin..."
- Current fragment: "actiefPakket, setActiefPakket] = useState('Hotel Chic'); / useEffect(() => { / if (typeof window !== 'undefined') { / try { / const rawInd = localStorage.getItem('selected_indel..."

### 2026-11-05T16:53:44.101Z | saved | components/configurator/StepThreeVisuals.tsx
- Summary: Line 42: replaced 21 lines with 21 lines.
- Before: 490 lines | 20,314 chars | hash 3e66695cda37 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / export default function StepThreeVisuals({ / stepTitle, / configuratorData, / designPakket, / woningType / }: any) { / c..."
- After: 490 lines | 20,353 chars | hash 6e15cccf6274 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / export default function StepThreeVisuals({ / stepTitle, / configuratorData, / designPakket, / woningType / }: any) { / c..."
- Previous fragment: "const actiefPakket = designPakket || opgeslagenPakket || 'Hotel Chic'; / const normIndeling = (opgeslagenIndeling || '').toLowerCase().replace(/[^a-z0-9]/g, ''); / const normPak..."
- Current fragment: "// BELANGRIJK: Geef sessionStorage (opgeslagenPakket) prioriteit boven de prop om stale state te voorkomen / const actiefPakket = opgeslagenPakket || designPakket || 'Hotel Chic..."

### 2026-11-05T16:49:53.952Z | saved | components/configurator/StepThreeVisuals.tsx
- Summary: Line 32: replaced 108 lines with 108 lines.
- Before: 490 lines | 20,286 chars | hash 4b884ff938b7 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / export default function StepThreeVisuals({ / stepTitle, / configuratorData, / designPakket, / woningType / }: any) { / c..."
- After: 490 lines | 20,314 chars | hash 3e66695cda37 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / export default function StepThreeVisuals({ / stepTitle, / configuratorData, / designPakket, / woningType / }: any) { / c..."
- Previous fragment: "// Lees sessionStorage.geselecteerdPakket uit (zoals te zien in DevTools) als primaire bron / const rawPak = sessionStorage.getItem('geselecteerdPakket') || localStorage.getItem..."
- Current fragment: "const rawPak = sessionStorage.getItem('geselecteerdPakket') || localStorage.getItem('selected_designPakket') || ''; / if (rawPak) { / setOpgeslagenPakket(rawPak); / } / } catch..."

### 2026-11-05T16:40:49.258Z | saved | components/configurator/StepThreeVisuals.tsx
- Summary: Saved without a textual diff.
- Before: 490 lines | 20,286 chars | hash 4b884ff938b7 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / export default function StepThreeVisuals({ / stepTitle, / configuratorData, / designPakket, / woningType / }: any) { / c..."
- After: 490 lines | 20,286 chars | hash 4b884ff938b7 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / export default function StepThreeVisuals({ / stepTitle, / configuratorData, / designPakket, / woningType / }: any) { / c..."

### 2026-11-05T16:40:44.417Z | saved | components/configurator/StepThreeVisuals.tsx
- Summary: Line 32: replaced 1 line with 2 lines.
- Before: 489 lines | 20,185 chars | hash 4dfd31317796 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / export default function StepThreeVisuals({ / stepTitle, / configuratorData, / designPakket, / woningType / }: any) { / c..."
- After: 490 lines | 20,286 chars | hash 4b884ff938b7 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / export default function StepThreeVisuals({ / stepTitle, / configuratorData, / designPakket, / woningType / }: any) { / c..."
- Previous fragment: "const rawPak = localStorage.getItem('selected_designPakket') || sessionStorage.getItem('geselecteerd"
- Current fragment: "// Lees sessionStorage.geselecteerdPakket uit (zoals te zien in DevTools) als primaire bron / const rawPak = sessionStorage.getItem('geselecteerdPakket') || localStorage.getItem..."

### 2026-11-05T16:20:05.701Z | saved | components/configurator/StepThreeVisuals.tsx
- Summary: Line 17: replaced 412 lines with 416 lines.
- Before: 485 lines | 20,221 chars | hash a07bd0d5336f | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / export default function StepThreeVisuals({ / stepTitle, / configuratorData, / designPakket, / woningType / }: any) { / c..."
- After: 489 lines | 20,185 chars | hash 4dfd31317796 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / export default function StepThreeVisuals({ / stepTitle, / configuratorData, / designPakket, / woningType / }: any) { / c..."
- Previous fragment: "useEffect(() => { / if (typeof window !== 'undefined') { / try { / const rawInd = localStorage.getItem('selected_indeling') || sessionStorage.getItem('selected_indeling') || '';..."
- Current fragment: "const [opgeslagenPakket, setOpgeslagenPakket] = useState(''); / useEffect(() => { / if (typeof window !== 'undefined') { / try { / const rawInd = localStorage.getItem('selected_..."

### 2026-11-05T16:19:57.343Z | saved | components/configurator/StepTwoDesign.tsx
- Summary: Line 45: replaced 129 lines with 135 lines.
- Before: 194 lines | 8,834 chars | hash 13b5d12dce44 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / export default function StepTwoDesign({ / stepTitle, / configuratorData, / designPakket,..."
- After: 200 lines | 8,924 chars | hash 62093ff0ea75 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / export default function StepTwoDesign({ / stepTitle, / configuratorData, / designPakket,..."
- Previous fragment: "// Zoek alle woningtype-rijen die overeenkomen met de gekozen indeling of het woningtype / const matchendeWoningRijen = woningTypenLijst.filter((w: any) => { / const naam = (w?...."
- Current fragment: "const matchendeWoningRijen = woningTypenLijst.filter((w: any) => { / const naam = (w?.typeNaam || w?.typenaam || '').toLowerCase().replace(/[^a-z0-9]/g, ''); / const indTitel =..."

### 2026-11-05T16:07:15.323Z | saved | components/configurator/StepTwoDesign.tsx
- Summary: Line 45: replaced 15 lines with 30 lines.
- Before: 179 lines | 8,027 chars | hash 4e1c09fd17ad | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / export default function StepTwoDesign({ / stepTitle, / configuratorData, / designPakket,..."
- After: 194 lines | 8,834 chars | hash 13b5d12dce44 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / export default function StepTwoDesign({ / stepTitle, / configuratorData, / designPakket,..."
- Previous fragment: "het specifieke woningtype/indeling object op basis van geselecteerde indeling uit Stap 1 / const huidigWoningTypeObj = woningTypenLijst.find((w: any) => { / const naam = (w?.typ..."
- Current fragment: "alle woningtype-rijen die overeenkomen met de gekozen indeling of het woningtype / const matchendeWoningRijen = woningTypenLijst.filter((w: any) => { / const naam = (w?.typeNaam..."

### 2026-11-05T16:00:14.513Z | saved | components/configurator/StepTwoDesign.tsx
- Summary: Line 22: replaced 137 lines with 137 lines.
- Before: 179 lines | 7,987 chars | hash 6f6825fb8b83 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / export default function StepTwoDesign({ / stepTitle, / configuratorData, / designPakket,..."
- After: 179 lines | 8,027 chars | hash 4e1c09fd17ad | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / export default function StepTwoDesign({ / stepTitle, / configuratorData, / designPakket,..."
- Previous fragment: "// Haal gekozen indeling op uit storage om de exacte indeling-rij te matchen / const [opgeslagenIndeling, setOpgeslagenIndeling] = useState(''); / useEffect(() => { / if (typeof..."
- Current fragment: "const [opgeslagenIndeling, setOpgeslagenIndeling] = useState(''); / useEffect(() => { / if (typeof window !== 'undefined') { / try { / const rawInd = localStorage.getItem('selec..."

### 2026-11-05T15:51:35.030Z | saved | components/configurator/StepOnewoning.tsx
- Summary: Line 19: replaced 49 lines with 55 lines.
- Before: 103 lines | 4,563 chars | hash 3c15fc14d5bc | preview: "'use client'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / selectedIndeling, / setSelectedIndeling / }: any) { / const gefilterdeLijst = woningType / ?..."
- After: 109 lines | 5,060 chars | hash 95cd67c49c6f | preview: "'use client'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / selectedIndeling, / setSelectedIndeling / }: any) { / const gefilterdeLijst = woningType / ?..."
- Previous fragment: "if (!woningType && woningTypenLijst.length > 0) { / return ( / <div className="space-y-12 min-h-[400px] flex flex-col justify-center items-center"> / <p className="text-xs text-..."
- Current fragment: "// Unieke indelingen filteren op basis van indelingstitel zodat dubbele rijen uit het CMS netjes worden samengevoegd / const uniekeIndelingen = gefilterdeLijst.filter((item: any..."

### 2026-11-05T15:02:44.770Z | saved | app/download/page.tsx
- Summary: Line 7: replaced 286 lines with 204 lines.
- Before: 504 lines | 23,775 chars | hash 6f867323f7b2 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import { useRouter } from 'next/navigation'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / import { getPageDat..."
- After: 422 lines | 19,675 chars | hash 5a4b08bcd6c0 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import { useRouter } from 'next/navigation'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / import { getPageDat..."
- Previous fragment: ", getVoucherData } from '@/lib/cms'; / import { downloadZip } from 'client-zip'; / export default function DownloadPage() { / const router = useRouter(); / const [woningType, se..."
- Current fragment: "} from '@/lib/cms'; / import { downloadZip } from 'client-zip'; / export default function DownloadPage() { / const router = useRouter(); / const [woningType, setWoningType] = us..."

### 2026-11-05T15:02:32.648Z | saved | components/configurator/StepFourConfirmation.tsx
- Summary: Saved without a textual diff.
- Before: 322 lines | 15,166 chars | hash 221f402a9bba | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from '../Button'; / const PARTNER_NAAM = 'Aanhuis Spijk'; /..."
- After: 322 lines | 15,166 chars | hash 221f402a9bba | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from '../Button'; / const PARTNER_NAAM = 'Aanhuis Spijk'; /..."


## Hot Files
- components/configurator/StepThreeVisuals.tsx (16 tracked changes)
- lib/cms.ts (13 tracked changes)
- components/configurator/StepTwoDesign.tsx (4 tracked changes)
- components/configurator/StepFourConfirmation.tsx (3 tracked changes)
- components/configurator/StepOnewoning.tsx (2 tracked changes)
- app/download/page.tsx (1 tracked changes)
- components/Hero.tsx (1 tracked changes)

## Git Snapshot
- Branch: main
- HEAD: 2026-11-05 8b363dd fix(step3): aggregate design packages and panorama renders across all matching cms layout rows
- Working tree summary: 1 modified
- M components/configurator/StepOnewoning.tsx

## GitHub Snapshot
GitHub Repository: marketing-smartheads/nomi-configurator
Visibility: public | Default branch: main
Stars: 0 | Forks: 0 | Open issues: 0

Latest commit on main:
- 7d515c4 by Bas van Dooremalen on 2026-11-05
  fix(step3): add keyword-based fallback matching for design packages like modern raw

URL: https://github.com/marketing-smartheads/nomi-configurator

## Graphify Snapshot
Graphify report not found. Generate Graphify output if you want architecture-aware memory excerpts here.

## Project Planner
- Project planner is not configured yet. Enable it in the chat panel to generate a time-based todo list and progress rescue briefs.

## Agent Notes
- If a future task asks what changed recently, start with `Recent Changes`, `Tracked Snapshots`, `Hot Files`, and `Git Snapshot`.
- If a future task asks how the project is organized, combine this file with `graphify-out/GRAPH_REPORT.md`.
- If a future task needs repository-level context, use `Package Snapshot`, the GitHub snapshot, and the Graphify snapshot before rescanning broad parts of the repo.
