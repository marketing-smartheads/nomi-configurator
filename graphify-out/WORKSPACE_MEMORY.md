# Workspace Memory
This file is maintained automatically by Code Janitor so Claude, Codex, Bob, and any other AI agent can reuse repo context without rescanning everything from scratch.
Generated: 2026-11-17T08:31:18.001Z
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
- Last activity: 2026-11-17T08:31:15.665Z
## Workspace Focus
- Active file in focus: components/configurator/StepOnewoning.tsx
- Hottest files right now: components/configurator/StepFourConfirmation.tsx (12), components/configurator/StepTwoDesign.tsx (9), components/configurator/StepOnewoning.tsx (6), app/api/vouchers/route.ts (3)
- Suggested starting points: components/configurator/StepOnewoning.tsx, components/configurator/StepFourConfirmation.tsx, components/configurator/StepTwoDesign.tsx, app/api/vouchers/route.ts, components/configurator/StepThreeVisuals.tsx, app/api/confirm/route.ts
## Current Workspace
- Active file: components/configurator/StepOnewoning.tsx
- Tracked files in snapshot: 76
- Top-level areas: public (26), components (18), [root] (15), app (14), lib (3)
- Primary file types: .tsx (24), .svg (14), .ts (11), .json (4), .md (4), .woff (4), .woff2 (4), .png (3)
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
- components/configurator/StepOnewoning.tsx | 189 lines | 8430 chars | hash 96a1e0889a89
  Last snapshot: 2026-11-17T08:31:15.665Z
  Preview: "'use client'; / import Image from 'next/image'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / selectedIndeling, / setSelectedIndeling / }: any) { / cons..."
- app/privacy/page.tsx | 127 lines | 7550 chars | hash e35fdd4c7a5a
  Last snapshot: 2026-11-16T18:41:14.101Z
  Preview: "// app/privacy/page.tsx / 'use client'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / export default function PrivacyPage() { / return ( / <div className="min-h-screen bg-[#..."
- app/api/vouchers/route.ts | 80 lines | 2922 chars | hash dac1e1e8ab6f
  Last snapshot: 2026-11-16T18:34:33.145Z
  Preview: "import { NextResponse } from 'next/server'; / export const dynamic = 'force-dynamic'; / const VERHUUR_VOUCHERS = new Set([ / 'nomi-a001', 'nomi-a003', 'nomi-a005', 'nomi-a006', 'nomi-a007', 'nomi-a013', / 'nomi-a019',..."
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

## Recent Changes
### 2026-11-17T08:31:15.665Z | saved | components/configurator/StepOnewoning.tsx
- Summary: Line 45: replaced 36 lines with 28 lines.
- Before: 197 lines | 8,613 chars | hash 501cf29af6c2 | preview: "'use client'; / import Image from 'next/image'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / selectedIndeling, / setSelectedIndeling / }: any) { / cons..."
- After: 189 lines | 8,430 chars | hash 96a1e0889a89 | preview: "'use client'; / import Image from 'next/image'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / selectedIndeling, / setSelectedIndeling / }: any) { / cons..."
- Previous fragment: "w-screen left-1/2 -translate-x-1/2 min-h-[400px] flex flex-col justify-center items-center overflow-hidden"> / <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-4..."
- Current fragment: "min-h-[400px] flex flex-col justify-center items-center overflow-hidden"> / <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-44 xl:w-56 pointer-events-none selec..."

### 2026-11-17T08:27:16.987Z | saved | components/configurator/StepOnewoning.tsx
- Summary: Line 45: replaced 69 lines with 73 lines.
- Before: 193 lines | 8,789 chars | hash ea2fdb4402e8 | preview: "'use client'; / import Image from 'next/image'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / selectedIndeling, / setSelectedIndeling / }: any) { / cons..."
- After: 197 lines | 8,613 chars | hash 501cf29af6c2 | preview: "'use client'; / import Image from 'next/image'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / selectedIndeling, / setSelectedIndeling / }: any) { / cons..."
- Previous fragment: "min-h-[400px] flex flex-col justify-center items-center overflow-hidden"> / {/* Achtergrondpatronen strak tegen de browser randen */} / <div className="fixed left-0 top-0 bottom..."
- Current fragment: "w-screen left-1/2 -translate-x-1/2 min-h-[400px] flex flex-col justify-center items-center overflow-hidden"> / <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-4..."

### 2026-11-17T08:25:03.135Z | saved | components/configurator/StepOnewoning.tsx
- Summary: Line 46: replaced 58 lines with 58 lines.
- Before: 193 lines | 8,742 chars | hash 53efe51703bc | preview: "'use client'; / import Image from 'next/image'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / selectedIndeling, / setSelectedIndeling / }: any) { / cons..."
- After: 193 lines | 8,789 chars | hash ea2fdb4402e8 | preview: "'use client'; / import Image from 'next/image'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / selectedIndeling, / setSelectedIndeling / }: any) { / cons..."
- Previous fragment: "randen */} / <div className="absolute left-0 top-0 bottom-0 w-48 sm:w-64 md:w-80 opacity-20 pointer-events-none select-none overflow-hidden flex items-center"> / <Image src="/as..."
- Current fragment: "browser randen */} / <div className="fixed left-0 top-0 bottom-0 w-48 sm:w-64 md:w-80 opacity-25 pointer-events-none select-none overflow-hidden flex items-center z-0"> / <Image..."

### 2026-11-17T08:19:41.216Z | saved | components/configurator/StepOnewoning.tsx
- Summary: Line 46: replaced 75 lines with 76 lines.
- Before: 192 lines | 8,611 chars | hash 4d3d976fb70f | preview: "'use client'; / import Image from 'next/image'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / selectedIndeling, / setSelectedIndeling / }: any) { / cons..."
- After: 193 lines | 8,742 chars | hash 53efe51703bc | preview: "'use client'; / import Image from 'next/image'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / selectedIndeling, / setSelectedIndeling / }: any) { / cons..."
- Previous fragment: "Decoratieve achtergrond elementen links en rechts */} / <div className="absolute left-0 top-1/2 -translate-y-1/2 w-32 md:w-48 opacity-20 pointer-events-none select-none"> / <Ima..."
- Current fragment: "Achtergrondpatronen strak tegen de randen */} / <div className="absolute left-0 top-0 bottom-0 w-48 sm:w-64 md:w-80 opacity-20 pointer-events-none select-none overflow-hidden fl..."

### 2026-11-17T08:14:34.893Z | saved | components/configurator/StepOnewoning.tsx
- Summary: Line 3: replaced 121 lines with 186 lines.
- Before: 127 lines | 5,717 chars | hash 62bafaf91d9e | preview: "'use client'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / selectedIndeling, / setSelectedIndeling / }: any) { / const data = configuratorData?.configu..."
- After: 192 lines | 8,611 chars | hash 4d3d976fb70f | preview: "'use client'; / import Image from 'next/image'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / selectedIndeling, / setSelectedIndeling / }: any) { / cons..."
- Previous fragment: "export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / selectedIndeling, / setSelectedIndeling / }: any) { / const data = c..."
- Current fragment: "import Image from 'next/image'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / selectedIndeling, / setSelectedInd..."

### 2026-11-16T18:41:14.101Z | saved | app/privacy/page.tsx
- Summary: Line 26: replaced 100 lines with 92 lines.
- Before: 135 lines | 8,229 chars | hash 1fa058bba875 | preview: "// app/privacy/page.tsx / 'use client'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / export default function PrivacyPage() { / return ( / <div className="min-h-screen bg-[#..."
- After: 127 lines | 7,550 chars | hash e35fdd4c7a5a | preview: "// app/privacy/page.tsx / 'use client'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / export default function PrivacyPage() { / return ( / <div className="min-h-screen bg-[#..."
- Previous fragment: "gebruiken en hoe wij omgaan met cookies, session storage en lokale opslag. / </p> / </section> / <div className="space-y-3"> / <h2 className="text-lg sm:text-xl font-serif text-..."
- Current fragment: "opslaan in ons CMS en hoe wij omgaan met sessie- en browseropslag. / </p> / </section> / <div className="space-y-3"> / <h2 className="text-lg sm:text-xl font-serif text-white pt..."

### 2026-11-16T18:34:33.145Z | saved | app/api/vouchers/route.ts
- Summary: Line 16: replaced 13 lines with 9 lines.
- Before: 84 lines | 3,030 chars | hash bdaba5dab9ef | preview: "import { NextResponse } from 'next/server'; / export const dynamic = 'force-dynamic'; / const VERHUUR_VOUCHERS = new Set([ / 'nomi-a001', 'nomi-a003', 'nomi-a005', 'nomi-a006', 'nomi-a007', 'nomi-a013', / 'nomi-a019',..."
- After: 80 lines | 2,922 chars | hash dac1e1e8ab6f | preview: "import { NextResponse } from 'next/server'; / export const dynamic = 'force-dynamic'; / const VERHUUR_VOUCHERS = new Set([ / 'nomi-a001', 'nomi-a003', 'nomi-a005', 'nomi-a006', 'nomi-a007', 'nomi-a013', / 'nomi-a019',..."
- Previous fragment: "// Check of het verzoek van het interne dashboard komt via een speciale header / const secretKey = request.headers.get('x-admin-secret'); / const expectedSecret = process.env.AD..."
- Current fragment: "const secretKey = request.headers.get('x-admin-secret'); / const expectedSecret = process.env.ADMIN_SECRET_KEY || 'veiligheids-token-hier'; / const referer = request.headers.get..."

### 2026-11-16T18:31:09.181Z | saved | app/api/vouchers/route.ts
- Summary: Line 5: replaced 66 lines with 64 lines.
- Before: 86 lines | 3,361 chars | hash 177755a9b846 | preview: "import { NextResponse } from 'next/server'; / export const dynamic = 'force-dynamic'; / // 🛑 Strenge set van de 32 verhuur-bouwnummers (Jongerius) die strikt uit het dashboard moeten worden gefilterd / const VERHUUR_..."
- After: 84 lines | 3,030 chars | hash bdaba5dab9ef | preview: "import { NextResponse } from 'next/server'; / export const dynamic = 'force-dynamic'; / const VERHUUR_VOUCHERS = new Set([ / 'nomi-a001', 'nomi-a003', 'nomi-a005', 'nomi-a006', 'nomi-a007', 'nomi-a013', / 'nomi-a019',..."
- Previous fragment: "// 🛑 Strenge set van de 32 verhuur-bouwnummers (Jongerius) die strikt uit het dashboard moeten worden gefilterd / const VERHUUR_VOUCHERS = new Set([ / 'nomi-a001', 'nomi-a003',..."
- Current fragment: "const VERHUUR_VOUCHERS = new Set([ / 'nomi-a001', 'nomi-a003', 'nomi-a005', 'nomi-a006', 'nomi-a007', 'nomi-a013', / 'nomi-a019', 'nomi-a020', 'nomi-a021', 'nomi-a022', 'nomi-a0..."

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


## Hot Files
- components/configurator/StepFourConfirmation.tsx (12 tracked changes)
- components/configurator/StepTwoDesign.tsx (9 tracked changes)
- components/configurator/StepOnewoning.tsx (6 tracked changes)
- app/api/vouchers/route.ts (3 tracked changes)
- components/configurator/StepThreeVisuals.tsx (3 tracked changes)
- app/api/confirm/route.ts (1 tracked changes)
- app/api/verify-voucher/route.ts (1 tracked changes)
- app/privacy/page.tsx (1 tracked changes)

## Git Snapshot
- Branch: main
- HEAD: 2026-11-17 f51217d style(step1): position solid side svg patterns flush to viewport edges without fixed or opacity
- Working tree summary: 1 modified
- M components/configurator/StepOnewoning.tsx

## GitHub Snapshot
GitHub Repository: marketing-smartheads/nomi-configurator
Visibility: public | Default branch: main
Stars: 0 | Forks: 0 | Open issues: 0

Latest commit on main:
- f51217d by Bas van Dooremalen on 2026-11-17
  style(step1): position solid side svg patterns flush to viewport edges without fixed or opacity

URL: https://github.com/marketing-smartheads/nomi-configurator

## Graphify Snapshot
Graphify report not found. Generate Graphify output if you want architecture-aware memory excerpts here.

## Project Planner
- Project planner is not configured yet. Enable it in the chat panel to generate a time-based todo list and progress rescue briefs.

## Agent Notes
- If a future task asks what changed recently, start with `Recent Changes`, `Tracked Snapshots`, `Hot Files`, and `Git Snapshot`.
- If a future task asks how the project is organized, combine this file with `graphify-out/GRAPH_REPORT.md`.
- If a future task needs repository-level context, use `Package Snapshot`, the GitHub snapshot, and the Graphify snapshot before rescanning broad parts of the repo.
