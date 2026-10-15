# Workspace Memory
This file is maintained automatically by Code Janitor so Claude, Codex, Bob, and any other AI agent can reuse repo context without rescanning everything from scratch.
Generated: 2026-10-15T12:32:16.941Z
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
- Last activity: 2026-10-15T12:32:15.183Z
## Workspace Focus
- Active file in focus: app/page.tsx
- Hottest files right now: lib/cms.ts (10), app/download/page.tsx (8), components/configurator/StepFourConfirmation.tsx (6), components/configurator/StepOnewoning.tsx (5)
- Suggested starting points: app/page.tsx, lib/cms.ts, app/download/page.tsx, components/configurator/StepFourConfirmation.tsx, components/configurator/StepOnewoning.tsx, components/ConfiguratorScreen.tsx
## Current Workspace
- Active file: app/page.tsx
- Tracked files in snapshot: 67
- Top-level areas: public (21), components (17), [root] (15), app (11), lib (3)
- Primary file types: .tsx (22), .svg (9), .ts (9), .json (4), .md (4), .woff (4), .woff2 (4), .png (3)
- Key files: .gitignore, AGENTS.md, README.md, package-lock.json, package.json, tsconfig.json
## Package Snapshot
- Package: tg-configurator v0.1.0
- Package manager: not declared
- Scripts: dev, build, start, lint
- Runtime dependencies: client-zip, next, react, react-dom, react-icons, react-player, resend
- Dev dependencies: @tailwindcss/postcss, @types/node, @types/react, @types/react-dom, eslint, eslint-config-next, tailwindcss, typescript
## Current Stack
- Logged change events: 40
- Change mix: save (39), create (1)
- Remembered file snapshots: 42
- Working tree summary: 4 modifieds, 1 untracked
## Tracked Snapshots
- app/page.tsx | 17 lines | 426 chars | hash 0d94bfd3ea1f
  Last snapshot: 2026-10-15T12:32:15.183Z
  Preview: "import { getPageData } from '@/lib/cms'; / import MainContent from '@/components/MainContent'; / import VoucherParamHandler from '@/components/VoucherParamHandler'; / export default async function Home() { / const { s..."
- components/VoucherParamHandler.tsx | 20 lines | 598 chars | hash 06ad36daf3da
  Last snapshot: 2026-10-15T12:31:55.849Z
  Preview: "'use client'; / import { useEffect } from 'react'; / import { useSearchParams } from 'next/navigation'; / export default function VoucherParamHandler() { / const searchParams = useSearchParams(); / useEffect(() => { /..."
- components/configurator/StepFourConfirmation.tsx | 484 lines | 22459 chars | hash 6cb8208e9f8a
  Last snapshot: 2026-10-13T08:02:12.530Z
  Preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from '../Button'; / // Partner voor de documentatielijst. /..."
- components/configurator/StepOnewoning.tsx | 118 lines | 5390 chars | hash 7d3f73a5ba32
  Last snapshot: 2026-10-13T07:55:04.620Z
  Preview: "import { useEffect } from 'react'; / import Image from 'next/image'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / setWoningType / }: any) { / // Filter..."
- components/ConfiguratorScreen.tsx | 251 lines | 9757 chars | hash 934003a60b39
  Last snapshot: 2026-10-13T07:41:04.942Z
  Preview: "'use client'; / import { useState, useEffect } from 'react'; / import Button from './Button'; / import StepOneWoning from './configurator/StepOnewoning'; / import StepTwoDesign from './configurator/StepTwoDesign'; / i..."
- components/configurator/StepTwoDesign.tsx | 160 lines | 6478 chars | hash 46f4d92c2206
  Last snapshot: 2026-10-13T07:02:02.608Z
  Preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / // Vaste materialenlijsten per designpakket op basis van feedback Thomas de Gier / const..."
- app/api/confirm/route.ts | 390 lines | 15369 chars | hash c56f8cd3c4e3
  Last snapshot: 2026-10-08T09:49:34.063Z
  Preview: "import { NextResponse } from 'next/server'; / import { Resend } from 'resend'; / const resend = new Resend(process.env.RESEND_API_KEY); / export async function POST(request: Request) { / try { / const body = await req..."
- .env.local | 12 lines | 432 chars | hash a1ea6608e103
  Last snapshot: 2026-10-08T09:36:13.713Z
  Preview: "NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT=http://tg-backend.development/graphql / NEXT_PUBLIC_LIVE_WORDPRESS_ENDPOINT=https://cms.nomi-configurator.nl/graphql / NEXT_PUBLIC_PARTNER_EMAIL=webmaster@marketingsmartheads.nl..."

## Recent Changes
### 2026-10-15T12:32:15.183Z | saved | app/page.tsx
- Summary: Line 3: replaced 9 lines with 13 lines.
- Before: 13 lines | 308 chars | hash e95adef2762a | preview: "import { getPageData } from '@/lib/cms'; / import MainContent from '@/components/MainContent'; / export default async function Home() { / const { sections, configuratorData } = await getPageData(); / return ( / <MainC..."
- After: 17 lines | 426 chars | hash 0d94bfd3ea1f | preview: "import { getPageData } from '@/lib/cms'; / import MainContent from '@/components/MainContent'; / import VoucherParamHandler from '@/components/VoucherParamHandler'; / export default async function Home() { / const { s..."
- Previous fragment: "export default async function Home() { / const { sections, configuratorData } = await getPageData(); / return ( / <MainContent / sections={sections} / configuratorData={configur..."
- Current fragment: "import VoucherParamHandler from '@/components/VoucherParamHandler'; / export default async function Home() { / const { sections, configuratorData } = await getPageData(); / retu..."

### 2026-10-15T12:31:55.849Z | saved | components/VoucherParamHandler.tsx
- Summary: Line 1: inserted 20 lines.
- Before: 0 lines | 0 chars | hash empty
- After: 20 lines | 598 chars | hash 06ad36daf3da | preview: "'use client'; / import { useEffect } from 'react'; / import { useSearchParams } from 'next/navigation'; / export default function VoucherParamHandler() { / const searchParams = useSearchParams(); / useEffect(() => { /..."
- Current fragment: "'use client'; / import { useEffect } from 'react'; / import { useSearchParams } from 'next/navigation'; / export default function VoucherParamHandler() { / const searchParams =..."

### 2026-10-15T12:31:38.139Z | created | components/VoucherParamHandler.tsx
- Summary: Created file.
- After: 0 lines | 0 chars | hash empty

### 2026-10-13T08:02:12.530Z | saved | components/configurator/StepFourConfirmation.tsx
- Summary: Line 94: replaced 314 lines with 314 lines.
- Before: 484 lines | 22,609 chars | hash ab9ef7b47f37 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from '../Button'; / // Partner voor de documentatielijst. /..."
- After: 484 lines | 22,459 chars | hash 6cb8208e9f8a | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from '../Button'; / // Partner voor de documentatielijst. /..."
- Previous fragment: "const partnersTitel = configuratorData?.geselecteerdePartnersTitel || configuratorData?.geselecteerde_partners_titel || "Geselecteerde partners"; / const partnersOmschrijving =..."
- Current fragment: "// CMS-titel flexibel houden, maar standaard "Partners Nomi" tonen / const cmsPartnersTitel = configuratorData?.geselecteerdePartnersTitel || configuratorData?.geselecteerde_par..."

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


## Hot Files
- lib/cms.ts (10 tracked changes)
- app/download/page.tsx (8 tracked changes)
- components/configurator/StepFourConfirmation.tsx (6 tracked changes)
- components/configurator/StepOnewoning.tsx (5 tracked changes)
- components/ConfiguratorScreen.tsx (5 tracked changes)
- components/VoucherParamHandler.tsx (2 tracked changes)
- .env.local (1 tracked changes)
- app/api/confirm/route.ts (1 tracked changes)

## Git Snapshot
- Branch: main
- HEAD: 2026-10-13 478a056 fix(copy): gebruik 'Partners Nomi' als standaard titel met CMS-fallback
- Working tree summary: 4 modifieds, 1 untracked
- M app/page.tsx
- M graphify-out/WORKSPACE_MEMORY.md
- M workspace.json
- M workspacememory.md
- ?? components/VoucherParamHandler.tsx

## GitHub Snapshot
GitHub Repository: marketing-smartheads/nomi-configurator
Visibility: public | Default branch: main
Stars: 0 | Forks: 0 | Open issues: 0

Latest commit on main:
- 478a056 by Bas van Dooremalen on 2026-10-13
  fix(copy): gebruik 'Partners Nomi' als standaard titel met CMS-fallback

URL: https://github.com/marketing-smartheads/nomi-configurator

## Graphify Snapshot
Graphify report not found. Generate Graphify output if you want architecture-aware memory excerpts here.

## Project Planner
- Project planner is not configured yet. Enable it in the chat panel to generate a time-based todo list and progress rescue briefs.

## Agent Notes
- If a future task asks what changed recently, start with `Recent Changes`, `Tracked Snapshots`, `Hot Files`, and `Git Snapshot`.
- If a future task asks how the project is organized, combine this file with `graphify-out/GRAPH_REPORT.md`.
- If a future task needs repository-level context, use `Package Snapshot`, the GitHub snapshot, and the Graphify snapshot before rescanning broad parts of the repo.
