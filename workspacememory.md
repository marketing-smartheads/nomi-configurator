# Workspace Memory
This file is maintained automatically by Code Janitor so Claude, Codex, Bob, and any other AI agent can reuse repo context without rescanning everything from scratch.
Generated: 2026-11-16T18:23:29.858Z
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
- Last activity: 2026-11-16T18:23:27.210Z
## Workspace Focus
- Active file in focus: app/api/vouchers/route.ts
- Hottest files right now: components/configurator/StepFourConfirmation.tsx (12), components/configurator/StepTwoDesign.tsx (10), app/api/verify-voucher/route.ts (3), app/dashboard/page.tsx (3)
- Suggested starting points: app/api/vouchers/route.ts, components/configurator/StepFourConfirmation.tsx, components/configurator/StepTwoDesign.tsx, app/api/verify-voucher/route.ts, app/dashboard/page.tsx, components/configurator/StepThreeVisuals.tsx
## Current Workspace
- Active file: app/api/vouchers/route.ts
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
- Change mix: save (40)
- Remembered file snapshots: 47
- Working tree summary: 1 modified
## Tracked Snapshots
- app/api/vouchers/route.ts | 86 lines | 3361 chars | hash 177755a9b846
  Last snapshot: 2026-11-16T18:23:27.210Z
  Preview: "import { NextResponse } from 'next/server'; / export const dynamic = 'force-dynamic'; / // 🛑 Strenge set van de 32 verhuur-bouwnummers (Jongerius) die strikt uit het dashboard moeten worden gefilterd / const VERHUUR_..."
- components/CookieBanner.tsx | 202 lines | 9136 chars | hash 9dd1c03bc3b1
  Last snapshot: 2026-11-16T18:15:36.213Z
  Preview: "// components/CookieBanner.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import { LiaCookieSolid } from 'react-icons/lia'; / // Hulpfunctie om een echte cookie te zetten / const setCookie = (nam..."
- app/api/confirm/route.ts | 298 lines | 11232 chars | hash 8705fe271979
  Last snapshot: 2026-11-16T18:14:37.532Z
  Preview: "import { NextResponse } from 'next/server'; / import { Resend } from 'resend'; / const resend = new Resend(process.env.RESEND_API_KEY); / export async function POST(request: Request) { / try { / const body = await req..."
- components/WelcomeScreen.tsx | 46 lines | 1424 chars | hash 14a8ac3eab2d
  Last snapshot: 2026-11-16T18:13:19.803Z
  Preview: "import { useState, useEffect } from 'react'; / import Hero from './Hero'; / import Story from './Story'; / import Cta from './Cta'; / import Faq from './Faq'; / import { getPageData } from '../lib/cms'; / export defau..."
- components/Faq.tsx | 73 lines | 2892 chars | hash 383bd60b41f2
  Last snapshot: 2026-11-16T16:44:34.274Z
  Preview: "// components/Faq.tsx / 'use client'; / import { useState } from 'react'; / interface FaqItem { / vraag: string; / antwoord: string; / } / interface FaqProps { / data: { / subtitel: string; / titel: string; / vragen:..."
- components/configurator/StepThreeVisuals.tsx | 472 lines | 19362 chars | hash faf34aeee9fa
  Last snapshot: 2026-11-16T16:18:20.984Z
  Preview: "// components/StepThreeVisuals.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / export default function StepThreeVisuals({ / stepTitle, / configuratorData, / desig..."
- components/configurator/StepFourConfirmation.tsx | 452 lines | 21190 chars | hash 1af2672256b8
  Last snapshot: 2026-11-16T16:07:38.565Z
  Preview: "// components/configurator/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from..."
- lib/cms.ts | 317 lines | 9033 chars | hash 0406b70d3127
  Last snapshot: 2026-11-16T15:25:58.489Z
  Preview: "// lib/cms.ts / export async function getPageData() { / const query = ` / query GetConfiguratorPage { / page(id: "28", idType: DATABASE_ID) { / sections { / hero { / subtitel / titel / omschrijving / afbeelding { / no..."

## Recent Changes
### 2026-11-16T18:23:27.210Z | saved | app/api/vouchers/route.ts
- Summary: Line 17: replaced 44 lines with 58 lines.
- Before: 72 lines | 2,656 chars | hash 792080aa23e8 | preview: "import { NextResponse } from 'next/server'; / export const dynamic = 'force-dynamic'; / // 🛑 Strenge set van de 32 verhuur-bouwnummers (Jongerius) die strikt uit het dashboard moeten worden gefilterd / const VERHUUR_..."
- After: 86 lines | 3,361 chars | hash 177755a9b846 | preview: "import { NextResponse } from 'next/server'; / export const dynamic = 'force-dynamic'; / // 🛑 Strenge set van de 32 verhuur-bouwnummers (Jongerius) die strikt uit het dashboard moeten worden gefilterd / const VERHUUR_..."
- Previous fragment: "const endpoint = process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT || 'https://cms.nomi-configurator.nl/graphql'; / const wpUser = process.env.WORDPRESS_AUTH_USER; / const wpPa..."
- Current fragment: "// BEVEILIGINGSCHECK: Controleer op eengeheime header of token zodat willekeurige bezoekers geen data kunnen inzien / const authHeader = request.headers.get('authorization'); /..."

### 2026-11-16T18:15:36.213Z | saved | components/CookieBanner.tsx
- Summary: Line 32: replaced 12 lines with 1 line.
- Before: 213 lines | 9,503 chars | hash d679e25f6e7a | preview: "// components/CookieBanner.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import { LiaCookieSolid } from 'react-icons/lia'; / // Hulpfunctie om een echte cookie te zetten / const setCookie = (nam..."
- After: 202 lines | 9,136 chars | hash 9dd1c03bc3b1 | preview: "// components/CookieBanner.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import { LiaCookieSolid } from 'react-icons/lia'; / // Hulpfunctie om een echte cookie te zetten / const setCookie = (nam..."
- Previous fragment: "if (consent.analytics) { / console.log('[Cookies] Analytische toestemming verleend.'); / } else { / console.log('[Cookies] Analytische cookies uitgeschakeld.'); / } / if (consen..."

### 2026-11-16T18:14:37.532Z | saved | app/api/confirm/route.ts
- Summary: Line 23: removed 11 lines.
- Before: 308 lines | 11,535 chars | hash ef6f9a97b4ac | preview: "import { NextResponse } from 'next/server'; / import { Resend } from 'resend'; / const resend = new Resend(process.env.RESEND_API_KEY); / export async function POST(request: Request) { / try { / const body = await req..."
- After: 298 lines | 11,232 chars | hash 8705fe271979 | preview: "import { NextResponse } from 'next/server'; / import { Resend } from 'resend'; / const resend = new Resend(process.env.RESEND_API_KEY); / export async function POST(request: Request) { / try { / const body = await req..."
- Previous fragment: "ole.log("📥 Ontvangen data in API route:", { / toegangscode, / klantNaam, / klantEmail, / woningType, / gekozenIndeling, / designPakket, / bestandenStructuur: Array.isArray(best..."

### 2026-11-16T18:13:19.803Z | saved | components/WelcomeScreen.tsx
- Summary: Line 20: removed 2 lines.
- Before: 47 lines | 1,525 chars | hash 08e1ef7a07ae | preview: "import { useState, useEffect } from 'react'; / import Hero from './Hero'; / import Story from './Story'; / import Cta from './Cta'; / import Faq from './Faq'; / import { getPageData } from '../lib/cms'; / export defau..."
- After: 46 lines | 1,424 chars | hash 14a8ac3eab2d | preview: "import { useState, useEffect } from 'react'; / import Hero from './Hero'; / import Story from './Story'; / import Cta from './Cta'; / import Faq from './Faq'; / import { getPageData } from '../lib/cms'; / export defau..."
- Previous fragment: "console.log('Ontvangen data uit WordPress:', data); // Handig om te debuggen in F12 console"

### 2026-11-16T16:44:34.274Z | saved | components/Faq.tsx
- Summary: Line 1: replaced 62 lines with 64 lines.
- Before: 71 lines | 2,765 chars | hash bc96fb7b690d | preview: "'use client'; / import { useState } from 'react'; / interface FaqItem { / vraag: string; / antwoord: string; / } / interface FaqProps { / data: { / subtitel: string; / titel: string; / vragen: FaqItem[]; / }; / } / ex..."
- After: 73 lines | 2,892 chars | hash 383bd60b41f2 | preview: "// components/Faq.tsx / 'use client'; / import { useState } from 'react'; / interface FaqItem { / vraag: string; / antwoord: string; / } / interface FaqProps { / data: { / subtitel: string; / titel: string; / vragen:..."
- Previous fragment: "'use client'; / import { useState } from 'react'; / interface FaqItem { / vraag: string; / antwoord: string; / } / interface FaqProps { / data: { / subtitel: string; / titel: st..."
- Current fragment: "// components/Faq.tsx / 'use client'; / import { useState } from 'react'; / interface FaqItem { / vraag: string; / antwoord: string; / } / interface FaqProps { / data: { / subti..."

### 2026-11-16T16:18:20.984Z | saved | components/configurator/StepThreeVisuals.tsx
- Summary: Line 96: replaced 396 lines with 373 lines.
- Before: 495 lines | 20,323 chars | hash 21d3217c9bba | preview: "// components/StepThreeVisuals.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / export default function StepThreeVisuals({ / stepTitle, / configuratorData, / desig..."
- After: 472 lines | 19,362 chars | hash faf34aeee9fa | preview: "// components/StepThreeVisuals.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / export default function StepThreeVisuals({ / stepTitle, / configuratorData, / desig..."
- Previous fragment: "const rawMoodboard = huidigPakketObj?.moodboardGallery || huidigPakketObj?.moodboard_gallery; / let moodboardGallery: any[] = []; / if (Array.isArray(rawMoodboard)) { / moodboar..."
- Current fragment: "// Pannellum 360° logica / const [isPannellumLoaded, setIsPannellumLoaded] = useState<boolean>(false); / useEffect(() => { / if (typeof window !== 'undefined' && (window as any)..."

### 2026-11-16T16:07:38.565Z | saved | components/configurator/StepFourConfirmation.tsx
- Summary: Line 9: replaced 391 lines with 436 lines.
- Before: 407 lines | 20,495 chars | hash a4464314b6cc | preview: "// components/configurator/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from..."
- After: 452 lines | 21,190 chars | hash 1af2672256b8 | preview: "// components/configurator/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from..."
- Previous fragment: "// Vaste partnergegevens volgens de instructies van Thomas de Gier / const PARTNER_NAAM = 'Aanhuis Spijk'; / const PARTNER_CONTACT = 'Tobias'; / const PARTNER_EMAIL = process.en..."
- Current fragment: "const PARTNER_NAAM = 'Aanhuis Spijk'; / const PARTNER_CONTACT = 'Tobias'; / const PARTNER_EMAIL = 'Tobias@aanhuis-spijk.nl'; / const PARTNER_TELEFOON = '030 - 600 82 40'; / inte..."

### 2026-11-16T15:49:53.011Z | saved | components/configurator/StepFourConfirmation.tsx
- Summary: Line 242: inserted 166 lines.
- Before: 242 lines | 11,115 chars | hash 52e2518b5bb8 | preview: "// components/configurator/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from..."
- After: 407 lines | 20,495 chars | hash a4464314b6cc | preview: "// components/configurator/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from..."
- Current fragment: "pakketNaam || 'Niet geselecteerd'}</span> / </div> / </div> / </div> / </div> / <div className="max-w-xl max-sm:px-4 mx-auto text-center space-y-8 py-16"> / <div className="spac..."

### 2026-11-16T15:49:43.301Z | saved | components/configurator/StepFourConfirmation.tsx
- Summary: Line 9: replaced 399 lines with 234 lines.
- Before: 407 lines | 20,675 chars | hash 68789188bcc4 | preview: "// components/configurator/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from..."
- After: 242 lines | 11,115 chars | hash 52e2518b5bb8 | preview: "// components/configurator/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from..."
- Previous fragment: "interface StepFourConfirmationProps { / stepTitle: string; / configuratorData: any; / woningType: string | null; / designPakket: string | null; / onBack: () => void; / onConfirm..."
- Current fragment: "// Vaste partnergegevens volgens de instructies van Thomas de Gier / const PARTNER_NAAM = 'Aanhuis Spijk'; / const PARTNER_CONTACT = 'Tobias'; / const PARTNER_EMAIL = process.en..."

### 2026-11-16T15:44:18.428Z | saved | components/configurator/StepFourConfirmation.tsx
- Summary: Line 142: replaced 215 lines with 216 lines.
- Before: 406 lines | 20,526 chars | hash 3eb9a9a89ad1 | preview: "// components/configurator/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from..."
- After: 407 lines | 20,675 chars | hash 68789188bcc4 | preview: "// components/configurator/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from..."
- Previous fragment: "Nomi Utrecht'; / const PARTNER_EMAIL = primairePartner.partnerEMail || primairePartner.partner_email || process.env.NEXT_PUBLIC_PARTNER_EMAIL || 'info@nomi-configurator.nl'; / c..."
- Current fragment: "Aanhuis Spijk'; / const PARTNER_EMAIL = primairePartner.partnerEMail || primairePartner.partner_email || process.env.NEXT_PUBLIC_PARTNER_EMAIL || 'tobias@aanhuis-spijk.nl'; / //..."

### 2026-11-16T15:39:57.815Z | saved | components/configurator/StepFourConfirmation.tsx
- Summary: Line 128: replaced 264 lines with 271 lines.
- Before: 399 lines | 20,008 chars | hash 65733ad4b8cc | preview: "// components/configurator/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from..."
- After: 406 lines | 20,526 chars | hash 3eb9a9a89ad1 | preview: "// components/configurator/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from..."
- Previous fragment: "// Dynamische partner koptekst en omschrijving uit de bevestiging_stap groep / const partnersSectieTitel = / bevData?.geselecteerdePartnersTitel || / bevData?.geselecteerde_part..."
- Current fragment: "const partnersSectieTitel = / bevData?.geselecteerdePartnersTitel || / bevData?.geselecteerde_partners_titel || / 'Geselecteerde partners'; / const partnersSectieOmschrijving =..."

### 2026-11-16T15:31:53.031Z | saved | components/configurator/StepFourConfirmation.tsx
- Summary: Line 128: replaced 228 lines with 228 lines.
- Before: 399 lines | 20,088 chars | hash e69f90a5ab8d | preview: "// components/configurator/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from..."
- After: 399 lines | 20,008 chars | hash 65733ad4b8cc | preview: "// components/configurator/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from..."
- Previous fragment: "Haal de partners sectie titel en omschrijving exact op uit de bevestiging_stap groep / const partnersSectieTitel = / bevData?.geselecteerdePartnersTitel || / bevData?.geselectee..."
- Current fragment: "Dynamische partner koptekst en omschrijving uit de bevestiging_stap groep / const partnersSectieTitel = / bevData?.geselecteerdePartnersTitel || / bevData?.geselecteerde_partner..."

### 2026-11-16T15:26:05.314Z | saved | components/configurator/StepFourConfirmation.tsx
- Summary: Line 1: replaced 355 lines with 354 lines.
- Before: 400 lines | 20,123 chars | hash 19c214557917 | preview: "// components/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from '../Button';..."
- After: 399 lines | 20,088 chars | hash e69f90a5ab8d | preview: "// components/configurator/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from..."
- Previous fragment: "StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import..."
- Current fragment: "configurator/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigati..."

### 2026-11-16T15:25:58.489Z | saved | lib/cms.ts
- Summary: Line 92: replaced 201 lines with 201 lines.
- Before: 317 lines | 9,056 chars | hash 2ba4a52a9efc | preview: "// lib/cms.ts / export async function getPageData() { / const query = ` / query GetConfiguratorPage { / page(id: "28", idType: DATABASE_ID) { / sections { / hero { / subtitel / titel / omschrijving / afbeelding { / no..."
- After: 317 lines | 9,033 chars | hash 0406b70d3127 | preview: "// lib/cms.ts / export async function getPageData() { / const query = ` / query GetConfiguratorPage { / page(id: "28", idType: DATABASE_ID) { / sections { / hero { / subtitel / titel / omschrijving / afbeelding { / no..."
- Previous fragment: "} / } / panoramaRenders { / stijlNaam / renderBestand { / node { / sourceUrl / mediaItemUrl / } / } / } / downloadCategorie { / categorieTitel / bestandenLijst { / bestandTitel..."
- Current fragment: "geselecteerdePartnersTitel / geselecteerdePartnersOmschrijving / } / } / panoramaRenders { / stijlNaam / renderBestand { / node { / sourceUrl / mediaItemUrl / } / } / } / downlo..."

### 2026-11-16T15:13:55.882Z | saved | components/configurator/StepFourConfirmation.tsx
- Summary: Line 128: replaced 200 lines with 208 lines.
- Before: 392 lines | 19,972 chars | hash 3cc9d626399a | preview: "// components/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from '../Button';..."
- After: 400 lines | 20,123 chars | hash 19c214557917 | preview: "// components/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from '../Button';..."
- Previous fragment: "ACF) / const partnersSectieTitel = bevData?.geselecteerdePartnersTitel || bevData?.geselecteerde_partners_titel || 'Geselecteerde partners'; / const partnersSectieOmschrijving =..."
- Current fragment: "met veilige fallbacks) / const partnersSectieTitel = / bevData?.geselecteerdePartnersTitel || / bevData?.geselecteerde_partners_titel || / 'Geselecteerde partners'; / const part..."


## Hot Files
- components/configurator/StepFourConfirmation.tsx (12 tracked changes)
- components/configurator/StepTwoDesign.tsx (10 tracked changes)
- app/api/verify-voucher/route.ts (3 tracked changes)
- app/dashboard/page.tsx (3 tracked changes)
- components/configurator/StepThreeVisuals.tsx (3 tracked changes)
- components/configurator/StepOnewoning.tsx (2 tracked changes)
- lib/cms.ts (2 tracked changes)
- app/api/confirm/route.ts (1 tracked changes)

## Git Snapshot
- Branch: main
- HEAD: 2026-11-16 c89447c remove console.log functions, no longer needed
- Working tree summary: 1 modified
- M app/api/vouchers/route.ts

## GitHub Snapshot
GitHub Repository: marketing-smartheads/nomi-configurator
Visibility: public | Default branch: main
Stars: 0 | Forks: 0 | Open issues: 0

Latest commit on main:
- c89447c by Bas van Dooremalen on 2026-11-16
  remove console.log functions, no longer needed

URL: https://github.com/marketing-smartheads/nomi-configurator

## Graphify Snapshot
Graphify report not found. Generate Graphify output if you want architecture-aware memory excerpts here.

## Project Planner
- Project planner is not configured yet. Enable it in the chat panel to generate a time-based todo list and progress rescue briefs.

## Agent Notes
- If a future task asks what changed recently, start with `Recent Changes`, `Tracked Snapshots`, `Hot Files`, and `Git Snapshot`.
- If a future task asks how the project is organized, combine this file with `graphify-out/GRAPH_REPORT.md`.
- If a future task needs repository-level context, use `Package Snapshot`, the GitHub snapshot, and the Graphify snapshot before rescanning broad parts of the repo.
