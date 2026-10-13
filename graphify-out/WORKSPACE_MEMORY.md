# Workspace Memory
This file is maintained automatically by Code Janitor so Claude, Codex, Bob, and any other AI agent can reuse repo context without rescanning everything from scratch.
Generated: 2026-10-13T07:27:38.232Z
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
- Last activity: 2026-10-13T07:27:35.929Z
## Workspace Focus
- Active file in focus: components/ConfiguratorScreen.tsx
- Hottest files right now: app/download/page.tsx (14), lib/cms.ts (10), components/configurator/StepFourConfirmation.tsx (9), components/ConfiguratorScreen.tsx (3)
- Suggested starting points: components/ConfiguratorScreen.tsx, app/download/page.tsx, lib/cms.ts, components/configurator/StepFourConfirmation.tsx, .env.local, app/api/confirm/route.ts
## Current Workspace
- Active file: components/ConfiguratorScreen.tsx
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
- components/ConfiguratorScreen.tsx | 234 lines | 9100 chars | hash 399bd5aa34c7
  Last snapshot: 2026-10-13T07:27:35.929Z
  Preview: "'use client'; / import { useState, useEffect } from 'react'; / import Button from './Button'; / import StepOneWoning from './configurator/StepOnewoning'; / import StepTwoDesign from './configurator/StepTwoDesign'; / i..."
- components/configurator/StepOnewoning.tsx | 90 lines | 4103 chars | hash dd200db0a700
  Last snapshot: 2026-10-13T07:17:16.876Z
  Preview: "import Image from 'next/image'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / setWoningType / }: any) { / // Filter de lijst zodat uitsluitend het type..."
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

### 2026-10-08T09:36:13.713Z | saved | .env.local
- Summary: Line 5: inserted 3 lines.
- Before: 10 lines | 370 chars | hash 58cf12c6dc42 | preview: "NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT=http://tg-backend.development/graphql / NEXT_PUBLIC_LIVE_WORDPRESS_ENDPOINT=https://cms.nomi-configurator.nl/graphql / WORDPRESS_AUTH_USER="webmaster-msh" / WORDPRESS_AUTH_PASSWO..."
- After: 12 lines | 432 chars | hash a1ea6608e103 | preview: "NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT=http://tg-backend.development/graphql / NEXT_PUBLIC_LIVE_WORDPRESS_ENDPOINT=https://cms.nomi-configurator.nl/graphql / NEXT_PUBLIC_PARTNER_EMAIL=webmaster@marketingsmartheads.nl..."
- Current fragment: "NEXT_PUBLIC_PARTNER_EMAIL=webmaster@marketingsmartheads.nl"

### 2026-10-08T09:24:10.240Z | saved | components/configurator/StepFourConfirmation.tsx
- Summary: Line 28: replaced 251 lines with 300 lines.
- Before: 325 lines | 16,042 chars | hash 3b3bf54c38e8 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from '../Button'; / interface StepFourConfirmationProps { /..."
- After: 374 lines | 18,125 chars | hash 0e1c6d9e733e | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from '../Button'; / interface StepFourConfirmationProps { /..."
- Previous fragment: "false); // Scenario toestemming partners / const [agreedWarning, setAgreedWarning] = useState(false); // Waarschuwing / definitief / const [klantNaam, setKlantNaam] = useState('..."
- Current fragment: "true); // Standaard aangevinkt (Wel akkoord) / const [agreedWarning, setAgreedWarning] = useState(false); // Definitief vinkje / const [klantNaam, setKlantNaam] = useState('');..."

### 2026-10-08T09:14:07.509Z | saved | lib/cms.ts
- Summary: Line 166: replaced 2 lines with 57 lines.
- Before: 168 lines | 4,460 chars | hash 6e0d4b7c422a | preview: "// lib/cms.ts / export async function getPageData() { / const query = ` / query GetConfiguratorPage { / page(id: "28", idType: DATABASE_ID) { / sections { / hero { / subtitel / titel / omschrijving / afbeelding { / no..."
- After: 223 lines | 6,051 chars | hash 188db5995315 | preview: "// lib/cms.ts / export async function getPageData() { / const query = ` / query GetConfiguratorPage { / page(id: "28", idType: DATABASE_ID) { / sections { / hero { / subtitel / titel / omschrijving / afbeelding { / no..."
- Previous fragment: "// Veilige vaste standaard tot de optiepagina in WordPress volledig is gekoppeld / };"
- Current fragment: "}; / } / export async function getVoucherData(voucherCode: string) { / const cleanCode = voucherCode.trim().toUpperCase(); / const query = ` / query GetAllVouchers { / vouchers(..."

### 2026-10-08T09:12:14.234Z | saved | lib/cms.ts
- Summary: Line 5: replaced 215 lines with 162 lines.
- Before: 221 lines | 6,020 chars | hash 86dbf689501a | preview: "// lib/cms.ts / export async function getPageData() { / const query = ` / query GetConfiguratorPage { / configuratorInstellingen { / downloadLimietDagen / } / page(id: "28", idType: DATABASE_ID) { / sections { / hero..."
- After: 168 lines | 4,460 chars | hash 6e0d4b7c422a | preview: "// lib/cms.ts / export async function getPageData() { / const query = ` / query GetConfiguratorPage { / page(id: "28", idType: DATABASE_ID) { / sections { / hero { / subtitel / titel / omschrijving / afbeelding { / no..."
- Previous fragment: "configuratorInstellingen { / downloadLimietDagen / } / page(id: "28", idType: DATABASE_ID) { / sections { / hero { / subtitel / titel / omschrijving / afbeelding { / node { / so..."
- Current fragment: "page(id: "28", idType: DATABASE_ID) { / sections { / hero { / subtitel / titel / omschrijving / afbeelding { / node { / sourceUrl / altText / } / } / } / story { / subtitel / ti..."

### 2026-10-08T09:07:29.506Z | saved | lib/cms.ts
- Summary: Line 4: replaced 235 lines with 217 lines.
- Before: 239 lines | 6,895 chars | hash d25ebf879d58 | preview: "// lib/cms.ts / export async function getPageData() { / const query = ` / query GetConfiguratorOptions { / configuratorInstellingen { # Of de gegenereerde GraphQL naam van je optiepagina / downloadLimietDagen / } / },..."
- After: 221 lines | 6,020 chars | hash 86dbf689501a | preview: "// lib/cms.ts / export async function getPageData() { / const query = ` / query GetConfiguratorPage { / configuratorInstellingen { / downloadLimietDagen / } / page(id: "28", idType: DATABASE_ID) { / sections { / hero..."
- Previous fragment: "query GetConfiguratorOptions { / configuratorInstellingen { # Of de gegenereerde GraphQL naam van je optiepagina / downloadLimietDagen / } / }, / query GetPageSections { / page(..."
- Current fragment: "query GetConfiguratorPage { / configuratorInstellingen { / downloadLimietDagen / } / page(id: "28", idType: DATABASE_ID) { / sections { / hero { / subtitel / titel / omschrijvin..."

### 2026-10-08T08:59:55.950Z | saved | lib/cms.ts
- Summary: Line 2: removed 2 lines.
- Before: 240 lines | 6,897 chars | hash 2d23958b4d26 | preview: "// lib/cms.ts / export async function getPageData() { / const query = ` / query GetConfiguratorOptions { / configuratorInstellingen { # Of de gegenereerde GraphQL naam van je optiepagina / downloadLimietDagen / } / },..."
- After: 239 lines | 6,895 chars | hash d25ebf879d58 | preview: "// lib/cms.ts / export async function getPageData() { / const query = ` / query GetConfiguratorOptions { / configuratorInstellingen { # Of de gegenereerde GraphQL naam van je optiepagina / downloadLimietDagen / } / },..."


## Hot Files
- app/download/page.tsx (14 tracked changes)
- lib/cms.ts (10 tracked changes)
- components/configurator/StepFourConfirmation.tsx (9 tracked changes)
- components/ConfiguratorScreen.tsx (3 tracked changes)
- .env.local (1 tracked changes)
- app/api/confirm/route.ts (1 tracked changes)
- components/configurator/StepOnewoning.tsx (1 tracked changes)
- components/configurator/StepTwoDesign.tsx (1 tracked changes)

## Git Snapshot
- Branch: main
- HEAD: 2026-10-13 53a96c7 fix(configurator): lock woningtype op basis van voucherCode sleutel
- Working tree summary: 1 modified
- M components/ConfiguratorScreen.tsx

## GitHub Snapshot
GitHub Repository: marketing-smartheads/nomi-configurator
Visibility: public | Default branch: main
Stars: 0 | Forks: 0 | Open issues: 0

Latest commit on main:
- 53a96c7 by Bas van Dooremalen on 2026-10-13
  fix(configurator): lock woningtype op basis van voucherCode sleutel

URL: https://github.com/marketing-smartheads/nomi-configurator

## Graphify Snapshot
Graphify report not found. Generate Graphify output if you want architecture-aware memory excerpts here.

## Project Planner
- Project planner is not configured yet. Enable it in the chat panel to generate a time-based todo list and progress rescue briefs.

## Agent Notes
- If a future task asks what changed recently, start with `Recent Changes`, `Tracked Snapshots`, `Hot Files`, and `Git Snapshot`.
- If a future task asks how the project is organized, combine this file with `graphify-out/GRAPH_REPORT.md`.
- If a future task needs repository-level context, use `Package Snapshot`, the GitHub snapshot, and the Graphify snapshot before rescanning broad parts of the repo.
