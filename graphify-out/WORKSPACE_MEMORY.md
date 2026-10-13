# Workspace Memory
This file is maintained automatically by Code Janitor so Claude, Codex, Bob, and any other AI agent can reuse repo context without rescanning everything from scratch.
Generated: 2026-10-13T07:55:06.831Z
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
- Last activity: 2026-10-13T07:55:04.620Z
## Workspace Focus
- Active file in focus: components/configurator/StepOnewoning.tsx
- Hottest files right now: app/download/page.tsx (12), lib/cms.ts (10), components/configurator/StepFourConfirmation.tsx (5), components/configurator/StepOnewoning.tsx (5)
- Suggested starting points: components/configurator/StepOnewoning.tsx, app/download/page.tsx, lib/cms.ts, components/configurator/StepFourConfirmation.tsx, components/ConfiguratorScreen.tsx, .env.local
## Current Workspace
- Active file: components/configurator/StepOnewoning.tsx
- Tracked files in snapshot: 66
- Top-level areas: public (21), components (16), [root] (15), app (11), lib (3)
- Primary file types: .tsx (21), .svg (9), .ts (9), .json (4), .md (4), .woff (4), .woff2 (4), .png (3)
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
- Remembered file snapshots: 41
- Working tree summary: 1 modified
## Tracked Snapshots
- components/configurator/StepOnewoning.tsx | 118 lines | 5390 chars | hash 7d3f73a5ba32
  Last snapshot: 2026-10-13T07:55:04.620Z
  Preview: "import { useEffect } from 'react'; / import Image from 'next/image'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / setWoningType / }: any) { / // Filter..."
- components/ConfiguratorScreen.tsx | 251 lines | 9757 chars | hash 934003a60b39
  Last snapshot: 2026-10-13T07:41:04.942Z
  Preview: "'use client'; / import { useState, useEffect } from 'react'; / import Button from './Button'; / import StepOneWoning from './configurator/StepOnewoning'; / import StepTwoDesign from './configurator/StepTwoDesign'; / i..."
- components/configurator/StepTwoDesign.tsx | 160 lines | 6478 chars | hash 46f4d92c2206
  Last snapshot: 2026-10-13T07:02:02.608Z
  Preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / // Vaste materialenlijsten per designpakket op basis van feedback Thomas de Gier / const..."
- components/configurator/StepFourConfirmation.tsx | 484 lines | 22609 chars | hash ab9ef7b47f37
  Last snapshot: 2026-10-08T09:49:41.022Z
  Preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from '../Button'; / // Partner voor de documentatielijst. /..."
- app/api/confirm/route.ts | 390 lines | 15369 chars | hash c56f8cd3c4e3
  Last snapshot: 2026-10-08T09:49:34.063Z
  Preview: "import { NextResponse } from 'next/server'; / import { Resend } from 'resend'; / const resend = new Resend(process.env.RESEND_API_KEY); / export async function POST(request: Request) { / try { / const body = await req..."
- .env.local | 12 lines | 432 chars | hash a1ea6608e103
  Last snapshot: 2026-10-08T09:36:13.713Z
  Preview: "NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT=http://tg-backend.development/graphql / NEXT_PUBLIC_LIVE_WORDPRESS_ENDPOINT=https://cms.nomi-configurator.nl/graphql / NEXT_PUBLIC_PARTNER_EMAIL=webmaster@marketingsmartheads.nl..."
- lib/cms.ts | 223 lines | 6051 chars | hash 188db5995315
  Last snapshot: 2026-10-08T09:14:07.509Z
  Preview: "// lib/cms.ts / export async function getPageData() { / const query = ` / query GetConfiguratorPage { / page(id: "28", idType: DATABASE_ID) { / sections { / hero { / subtitel / titel / omschrijving / afbeelding { / no..."
- app/download/page.tsx | 681 lines | 27231 chars | hash c783e7314120
  Last snapshot: 2026-10-08T08:37:15.306Z
  Preview: "'use client'; / import { useState, useEffect } from 'react'; / import { useRouter } from 'next/navigation'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / import { getPageDat..."

## Recent Changes
### 2026-10-13T07:55:04.620Z | saved | components/configurator/StepOnewoning.tsx
- Summary: Line 86: removed 1 line.
- Before: 118 lines | 5,440 chars | hash 6f56c94c4741 | preview: "import { useEffect } from 'react'; / import Image from 'next/image'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / setWoningType / }: any) { / // Filter..."
- After: 118 lines | 5,390 chars | hash 7d3f73a5ba32 | preview: "import { useEffect } from 'react'; / import Image from 'next/image'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / setWoningType / }: any) { / // Filter..."
- Previous fragment: "transition-transform duration-500 hover:scale-105"

### 2026-10-13T07:53:39.223Z | saved | components/configurator/StepOnewoning.tsx
- Summary: Line 80: replaced 10 lines with 14 lines.
- Before: 114 lines | 5,192 chars | hash 16186b6788a0 | preview: "import { useEffect } from 'react'; / import Image from 'next/image'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / setWoningType / }: any) { / // Filter..."
- After: 118 lines | 5,440 chars | hash 6f56c94c4741 | preview: "import { useEffect } from 'react'; / import Image from 'next/image'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / setWoningType / }: any) { / // Filter..."
- Previous fragment: "h-64 bg-secondary rounded-2xl mb-6 relative overflow-hidden flex items-center justify-center text-[11px] text-muted border border-dark/5"> / {imageUrl ? ( / <Image / src={imageU..."
- Current fragment: "aspect-16/10 bg-secondary rounded-2xl mb-6 relative overflow-hidden flex items-center justify-center text-[11px] text-muted border border-dark/5"> / {imageUrl ? ( / <Image / src..."

### 2026-10-13T07:49:03.469Z | saved | components/configurator/StepOnewoning.tsx
- Summary: Line 15: replaced 70 lines with 86 lines.
- Before: 98 lines | 4,508 chars | hash 25f960732805 | preview: "import { useEffect } from 'react'; / import Image from 'next/image'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / setWoningType / }: any) { / // Filter..."
- After: 114 lines | 5,192 chars | hash 16186b6788a0 | preview: "import { useEffect } from 'react'; / import Image from 'next/image'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / setWoningType / }: any) { / // Filter..."
- Previous fragment: "// Zorg voor een flexibele match (bijv. "type a" === "type a") / return typeNaam.toLowerCase().replaceAll(' ', '') === woningType.toLowerCase().replaceAll(' ', ''); / }) / : won..."
- Current fragment: "return typeNaam.toLowerCase().replaceAll(' ', '') === woningType.toLowerCase().replaceAll(' ', ''); / }) / : woningTypenLijst; / // Automatisch de enige gefilterde optie selecte..."

### 2026-10-13T07:41:26.398Z | saved | components/configurator/StepOnewoning.tsx
- Summary: Line 1: replaced 49 lines with 57 lines.
- Before: 90 lines | 4,103 chars | hash dd200db0a700 | preview: "import Image from 'next/image'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / setWoningType / }: any) { / // Filter de lijst zodat uitsluitend het type..."
- After: 98 lines | 4,508 chars | hash 25f960732805 | preview: "import { useEffect } from 'react'; / import Image from 'next/image'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / setWoningType / }: any) { / // Filter..."
- Previous fragment: "Image from 'next/image'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / setWoningType / }: any) { / // Filter de..."
- Current fragment: "{ useEffect } from 'react'; / import Image from 'next/image'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / setW..."

### 2026-10-13T07:41:04.942Z | saved | components/ConfiguratorScreen.tsx
- Summary: Line 25: replaced 30 lines with 47 lines.
- Before: 234 lines | 9,152 chars | hash 30517f73a742 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Button from './Button'; / import StepOneWoning from './configurator/StepOnewoning'; / import StepTwoDesign from './configurator/StepTwoDesign'; / i..."
- After: 251 lines | 9,757 chars | hash 934003a60b39 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Button from './Button'; / import StepOneWoning from './configurator/StepOnewoning'; / import StepTwoDesign from './configurator/StepTwoDesign'; / i..."
- Previous fragment: "van het woningtype op basis van de ingelogde vouchercode / useEffect(() => { / const fetchVoucherWoningType = async () => { / if (typeof window !== 'undefined') { / // Haal dire..."
- Current fragment: "& locking van het woningtype op basis van de vouchercode / useEffect(() => { / const fetchVoucherWoningType = async () => { / if (typeof window !== 'undefined') { / // Lees zowe..."

### 2026-10-13T07:31:22.072Z | saved | components/ConfiguratorScreen.tsx
- Summary: Line 29: replaced 26 lines with 26 lines.
- Before: 234 lines | 9,100 chars | hash 399bd5aa34c7 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Button from './Button'; / import StepOneWoning from './configurator/StepOnewoning'; / import StepTwoDesign from './configurator/StepTwoDesign'; / i..."
- After: 234 lines | 9,152 chars | hash 30517f73a742 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Button from './Button'; / import StepOneWoning from './configurator/StepOnewoning'; / import StepTwoDesign from './configurator/StepTwoDesign'; / i..."
- Previous fragment: "Check zowel localStorage als sessionStorage voor alle mogelijke sleutels / const opgeslagenCode = / sessionStorage.getItem('voucherCode') || / localStorage.getItem('voucherCode'..."
- Current fragment: "Haal direct de code op uit localStorage of sessionStorage / const opgeslagenCode = / localStorage.getItem('toegangscode') || / localStorage.getItem('voucherCode') || / sessionSt..."

### 2026-10-13T07:27:35.929Z | saved | components/ConfiguratorScreen.tsx
- Summary: Line 29: replaced 1 line with 1 line.
- Before: 234 lines | 9,099 chars | hash 42ab9ee6d146 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Button from './Button'; / import StepOneWoning from './configurator/StepOnewoning'; / import StepTwoDesign from './configurator/StepTwoDesign'; / i..."
- After: 234 lines | 9,100 chars | hash 399bd5aa34c7 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Button from './Button'; / import StepOneWoning from './configurator/StepOnewoning'; / import StepTwoDesign from './configurator/StepTwoDesign'; / i..."
- Previous fragment: "ontroleer zowel voucherCode (zoals opgeslagen bij login) alsegangscode"
- Current fragment: "heck zowel localStorage als sessionStorage voor alle mogelijke sleutels"

### 2026-10-13T07:17:16.876Z | saved | components/configurator/StepOnewoning.tsx
- Summary: Line 10: replaced 61 lines with 75 lines.
- Before: 76 lines | 3,448 chars | hash 568f8963cd5d | preview: "import Image from 'next/image'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / setWoningType / }: any) { / return ( / <div className="space-y-12"> / <div..."
- After: 90 lines | 4,103 chars | hash dd200db0a700 | preview: "import Image from 'next/image'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / setWoningType / }: any) { / // Filter de lijst zodat uitsluitend het type..."
- Previous fragment: "return ( / <div className="space-y-12"> / <div className="text-center space-y-4 max-w-3xl mx-auto"> / <p className="text-[10px] tracking-[0.25em] uppercase text-primary font-sem..."
- Current fragment: "// Filter de lijst zodat uitsluitend het type wordt getoond dat gekoppeld is aan de vouchercode / const gefilterdeLijst = woningType / ? woningTypenLijst.filter((item: any) => {..."

### 2026-10-13T07:16:57.548Z | saved | components/ConfiguratorScreen.tsx
- Summary: Line 29: replaced 1 line with 7 lines.
- Before: 228 lines | 8,886 chars | hash c678a6c895f6 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Button from './Button'; / import StepOneWoning from './configurator/StepOnewoning'; / import StepTwoDesign from './configurator/StepTwoDesign'; / i..."
- After: 234 lines | 9,099 chars | hash 42ab9ee6d146 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Button from './Button'; / import StepOneWoning from './configurator/StepOnewoning'; / import StepTwoDesign from './configurator/StepTwoDesign'; / i..."
- Previous fragment: "const opgeslagenCode = sessionStorage.getItem('toegangscode') || localStorage.getItem('toegangscode');"
- Current fragment: "// Controleer zowel voucherCode (zoals opgeslagen bij login) alsegangscode / const opgeslagenCode = / sessionStorage.getItem('voucherCode') || / localStorage.getItem('voucherCod..."

### 2026-10-13T07:11:36.767Z | saved | components/ConfiguratorScreen.tsx
- Summary: Line 25: replaced 157 lines with 178 lines.
- Before: 207 lines | 8,253 chars | hash c9eea385c9aa | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Button from './Button'; / import StepOneWoning from './configurator/StepOnewoning'; / import StepTwoDesign from './configurator/StepTwoDesign'; / i..."
- After: 228 lines | 8,886 chars | hash c678a6c895f6 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Button from './Button'; / import StepOneWoning from './configurator/StepOnewoning'; / import StepTwoDesign from './configurator/StepTwoDesign'; / i..."
- Previous fragment: "2. Sla de stap op in localStorage zodra deze verandert / useEffect(() => { / const handleStorageChange = () => { / if (typeof window !== 'undefined') { / const savedStep = local..."
- Current fragment: "Automatische koppeling van het woningtype op basis van de ingelogde vouchercode / useEffect(() => { / const fetchVoucherWoningType = async () => { / if (typeof window !== 'undef..."

### 2026-10-13T07:02:02.608Z | saved | components/configurator/StepTwoDesign.tsx
- Summary: Line 7: replaced 89 lines with 128 lines.
- Before: 121 lines | 4,928 chars | hash 8cd0bf1e088a | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / export default function StepTwoDesign({ / stepTitle, / configuratorData, / designPakket,..."
- After: 160 lines | 6,478 chars | hash 46f4d92c2206 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / // Vaste materialenlijsten per designpakket op basis van feedback Thomas de Gier / const..."
- Previous fragment: "export default function StepTwoDesign({ / stepTitle, / configuratorData, / designPakket, / setDesignPakket / }: any) { / const [isConfirmed, setIsConfirmed] = useState(false); /..."
- Current fragment: "// Vaste materialenlijsten per designpakket op basis van feedback Thomas de Gier / const MATERIALEN_MAP: Record<string, string[]> = { / 'modern raw': [ / 'Travertin look', / 'Be..."

### 2026-10-08T09:49:41.022Z | saved | components/configurator/StepFourConfirmation.tsx
- Summary: Line 9: replaced 142 lines with 141 lines.
- Before: 485 lines | 22,677 chars | hash 99504a202b1e | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from '../Button'; / // Partner voor de documentatielijst. /..."
- After: 484 lines | 22,609 chars | hash ab9ef7b47f37 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from '../Button'; / // Partner voor de documentatielijst. /..."
- Previous fragment: "Tijdens testen: zet NEXT_PUBLIC_PARTNER_EMAIL=webmaster@marketingsmartheads.nl in .env.local / // In productie: variabele weglaten, dan gaat de mail naar Tobias. / const PARTNER..."
- Current fragment: "Wordt getoond aan de klant (scenario 2). De API-route gebruikt dezelfde variabele als ontvanger. / // Tijdens testen: NEXT_PUBLIC_PARTNER_EMAIL=webmaster@marketingsmartheads.nl;..."

### 2026-10-08T09:49:34.063Z | saved | app/api/confirm/route.ts
- Summary: Line 18: replaced 295 lines with 373 lines.
- Before: 312 lines | 11,771 chars | hash 7818b7a67d18 | preview: "import { NextResponse } from 'next/server'; / import { Resend } from 'resend'; / const resend = new Resend(process.env.RESEND_API_KEY); / export async function POST(request: Request) { / try { / const body = await req..."
- After: 390 lines | 15,369 chars | hash c56f8cd3c4e3 | preview: "import { NextResponse } from 'next/server'; / import { Resend } from 'resend'; / const resend = new Resend(process.env.RESEND_API_KEY); / export async function POST(request: Request) { / try { / const body = await req..."
- Previous fragment: "console.log("📥 Ontvangen data in API route:", { / toegangscode, / klantNaam, / klantEmail, / woningType, / designPakket, / bestandenStructuur: Array.isArray(bestanden) ? `Array..."
- Current fragment: "let klantTelefoon = body.klantTelefoon || body.telefoon || ''; / // Delen met de partner (documentatielijst) mag alleen bij expliciete toestemming / const toestemmingPartner = b..."

### 2026-10-08T09:48:35.110Z | saved | components/configurator/StepFourConfirmation.tsx
- Summary: Line 129: replaced 300 lines with 310 lines.
- Before: 475 lines | 22,032 chars | hash c3271a6086db | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from '../Button'; / // Partner voor de documentatielijst. /..."
- After: 485 lines | 22,677 chars | hash 99504a202b1e | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from '../Button'; / // Partner voor de documentatielijst. /..."
- Previous fragment: "Scenario 1: wel akkoord -> mail naar partner + door naar downloadpagina / const handlePartnerConfirm = async () => { / setIsSubmitting(true); / setErrorMessage(''); / const opge..."
- Current fragment: "Verstuurt de bevestiging en stuurt de klant door naar de downloadpagina. / // toestemming = true  -> API mailt de partner (scenario 1) / // toestemming = false -> geen mail naar..."

### 2026-10-08T09:36:18.219Z | saved | components/configurator/StepFourConfirmation.tsx
- Summary: Line 8: replaced 329 lines with 430 lines.
- Before: 374 lines | 18,125 chars | hash 0e1c6d9e733e | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from '../Button'; / interface StepFourConfirmationProps { /..."
- After: 475 lines | 22,032 chars | hash c3271a6086db | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from '../Button'; / // Partner voor de documentatielijst. /..."
- Previous fragment: "interface StepFourConfirmationProps { / stepTitle: string; / configuratorData: any; / woningType: string | null; / designPakket: string | null; / onBack: () => void; / onConfirm..."
- Current fragment: "// Partner voor de documentatielijst. / // Tijdens testen: zet NEXT_PUBLIC_PARTNER_EMAIL=webmaster@marketingsmartheads.nl in .env.local / // In productie: variabele weglaten, da..."


## Hot Files
- app/download/page.tsx (12 tracked changes)
- lib/cms.ts (10 tracked changes)
- components/configurator/StepFourConfirmation.tsx (5 tracked changes)
- components/configurator/StepOnewoning.tsx (5 tracked changes)
- components/ConfiguratorScreen.tsx (5 tracked changes)
- .env.local (1 tracked changes)
- app/api/confirm/route.ts (1 tracked changes)
- components/configurator/StepTwoDesign.tsx (1 tracked changes)

## Git Snapshot
- Branch: main
- HEAD: 2026-10-13 76ec3d0 style wijziging voor type woning
- Working tree summary: 1 modified
- M components/configurator/StepOnewoning.tsx

## GitHub Snapshot
GitHub Repository: marketing-smartheads/nomi-configurator
Visibility: public | Default branch: main
Stars: 0 | Forks: 0 | Open issues: 0

Latest commit on main:
- 76ec3d0 by Bas van Dooremalen on 2026-10-13
  style wijziging voor type woning

URL: https://github.com/marketing-smartheads/nomi-configurator

## Graphify Snapshot
Graphify report not found. Generate Graphify output if you want architecture-aware memory excerpts here.

## Project Planner
- Project planner is not configured yet. Enable it in the chat panel to generate a time-based todo list and progress rescue briefs.

## Agent Notes
- If a future task asks what changed recently, start with `Recent Changes`, `Tracked Snapshots`, `Hot Files`, and `Git Snapshot`.
- If a future task asks how the project is organized, combine this file with `graphify-out/GRAPH_REPORT.md`.
- If a future task needs repository-level context, use `Package Snapshot`, the GitHub snapshot, and the Graphify snapshot before rescanning broad parts of the repo.
