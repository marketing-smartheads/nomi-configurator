# Workspace Memory
This file is maintained automatically by Code Janitor so Claude, Codex, Bob, and any other AI agent can reuse repo context without rescanning everything from scratch.
Generated: 2026-10-27T11:00:51.319Z
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
- Last activity: 2026-10-27T11:00:49.581Z
## Workspace Focus
- Active file in focus: components/configurator/StepFourConfirmation.tsx
- Hottest files right now: components/configurator/StepFourConfirmation.tsx (16), components/configurator/StepThreeVisuals.tsx (8), lib/cms.ts (8), components/configurator/StepTwoDesign.tsx (7)
- Suggested starting points: components/configurator/StepFourConfirmation.tsx, components/configurator/StepThreeVisuals.tsx, lib/cms.ts, components/configurator/StepTwoDesign.tsx, app/download/page.tsx, .gitignore
## Current Workspace
- Active file: components/configurator/StepFourConfirmation.tsx
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
- components/configurator/StepFourConfirmation.tsx | 501 lines | 22218 chars | hash 5ecfa4a27ef8
  Last snapshot: 2026-10-27T11:00:49.581Z
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
- components/configurator/StepOnewoning.tsx | 103 lines | 4563 chars | hash 3c15fc14d5bc
  Last snapshot: 2026-10-26T15:22:36.985Z
  Preview: "'use client'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / selectedIndeling, / setSelectedIndeling / }: any) { / const gefilterdeLijst = woningType / ?..."
- lib/useConfigurator.ts | 191 lines | 5604 chars | hash 6b9a1c08487a
  Last snapshot: 2026-10-26T15:19:19.500Z
  Preview: "'use client'; / import { useState, useEffect } from 'react'; / type ScreenType = 'welcome' | 'configurator' | 'download' | 'login'; / export function useConfigurator() { / const [screen, setScreenState] = useState<Scr..."
- components/MainContent.tsx | 217 lines | 8847 chars | hash ca1e0d747e51
  Last snapshot: 2026-10-26T15:16:47.784Z
  Preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useConfigurator } from '../lib/useConfigurator'; / import LoginScreen from '../components/LoginScreen'; / impor..."
- components/ConfiguratorScreen.tsx | 250 lines | 9599 chars | hash 6af3f7e817b2
  Last snapshot: 2026-10-26T15:10:32.454Z
  Preview: "'use client'; / import { useState, useEffect } from 'react'; / import Button from './Button'; / import StepOneWoning from './configurator/StepOnewoning'; / import StepTwoDesign from './configurator/StepTwoDesign'; / i..."

## Recent Changes
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

### 2026-10-27T10:36:50.377Z | saved | components/configurator/StepFourConfirmation.tsx
- Summary: Line 87: replaced 30 lines with 36 lines.
- Before: 510 lines | 22,576 chars | hash 3e972f72e684 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from '../Button'; / const PARTNER_NAAM = 'Aanhuis Spijk'; /..."
- After: 516 lines | 22,756 chars | hash 2188db4aeac1 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from '../Button'; / const PARTNER_NAAM = 'Aanhuis Spijk'; /..."
- Previous fragment: "// Haal de bevestigingsstap data op uit het geselecteerde pakket of configurator root / const bevData = / storedPakket?.bevestigingStap || / storedPakket?.bevestiging_stap || /..."
- Current fragment: "const bevData = / storedPakket?.bevestigingStap || / storedPakket?.bevestiging_stap || / data?.bevestigingStap || / data?.bevestiging_stap || / {}; / const rawImage = / bevData?..."

### 2026-10-27T10:32:59.443Z | saved | components/configurator/StepFourConfirmation.tsx
- Summary: Line 87: replaced 33 lines with 30 lines.
- Before: 513 lines | 22,622 chars | hash 339a7b6eda77 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from '../Button'; / const PARTNER_NAAM = 'Aanhuis Spijk'; /..."
- After: 510 lines | 22,576 chars | hash 3e972f72e684 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from '../Button'; / const PARTNER_NAAM = 'Aanhuis Spijk'; /..."
- Previous fragment: "pakket, de configurator root of direct uit opties / const bevData = / storedPakket?.bevestigingStap || / storedPakket?.bevestiging_stap || / data?.bevestigingStap || / data?.bev..."
- Current fragment: "geselecteerde pakket of configurator root / const bevData = / storedPakket?.bevestigingStap || / storedPakket?.bevestiging_stap || / data?.bevestigingStap || / data?.bevestiging..."

### 2026-10-27T09:30:50.240Z | saved | components/configurator/StepFourConfirmation.tsx
- Summary: Line 87: replaced 25 lines with 33 lines.
- Before: 505 lines | 22,297 chars | hash 7ea9d383cc25 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from '../Button'; / const PARTNER_NAAM = 'Aanhuis Spijk'; /..."
- After: 513 lines | 22,622 chars | hash 339a7b6eda77 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from '../Button'; / const PARTNER_NAAM = 'Aanhuis Spijk'; /..."
- Previous fragment: "const bevData = / storedPakket?.bevestigingStap || / storedPakket?.bevestiging_stap || / data?.bevestigingStap || / data?.bevestiging_stap || / {}; / const rawImage = / bevData?..."
- Current fragment: "// Haal de bevestigingsstap data op uit het pakket, de configurator root of direct uit opties / const bevData = / storedPakket?.bevestigingStap || / storedPakket?.bevestiging_st..."

### 2026-10-27T09:26:47.803Z | saved | components/configurator/StepFourConfirmation.tsx
- Summary: Line 97: replaced 14 lines with 14 lines.
- Before: 505 lines | 22,297 chars | hash 81c470b6f018 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from '../Button'; / const PARTNER_NAAM = 'Aanhuis Spijk'; /..."
- After: 505 lines | 22,297 chars | hash 7ea9d383cc25 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from '../Button'; / const PARTNER_NAAM = 'Aanhuis Spijk'; /..."
- Previous fragment: "afbeelding || / storedPakket?.pakket_a_afbeelding; / const heroImage = / typeof rawImage === 'string' ? rawImage : / rawImage?.node?.sourceUrl || / rawImage?.sourceUrl || / rawI..."
- Current fragment: "fbeelding || / storedPakket?.pakket_afbeelding; / const heroImage = / typeof rawImage === 'string' ? rawImage : / rawImage?.node?.sourceUrl || / rawImage?.sourceUrl || / rawImag..."

### 2026-10-27T09:23:47.710Z | saved | components/configurator/StepFourConfirmation.tsx
- Summary: Line 87: replaced 13 lines with 12 lines.
- Before: 506 lines | 22,396 chars | hash bbe228d76324 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from '../Button'; / const PARTNER_NAAM = 'Aanhuis Spijk'; /..."
- After: 505 lines | 22,297 chars | hash 81c470b6f018 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from '../Button'; / const PARTNER_NAAM = 'Aanhuis Spijk'; /..."
- Previous fragment: "// Haal de bevestigingsstap data op uit het geselecteerde pakket of direct uit configuratorData / const bevData = / storedPakket?.bevestigingStap || / storedPakket?.bevestiging_..."
- Current fragment: "const bevData = / storedPakket?.bevestigingStap || / storedPakket?.bevestiging_stap || / data?.bevestigingStap || / data?.bevestiging_stap || / {}; / const rawImage = / bevData?..."

### 2026-10-27T09:21:55.402Z | saved | components/configurator/StepFourConfirmation.tsx
- Summary: Line 87: replaced 17 lines with 26 lines.
- Before: 497 lines | 22,259 chars | hash edbbeb145427 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from '../Button'; / const PARTNER_NAAM = 'Aanhuis Spijk'; /..."
- After: 506 lines | 22,396 chars | hash bbe228d76324 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from '../Button'; / const PARTNER_NAAM = 'Aanhuis Spijk'; /..."
- Previous fragment: "specifiek op uit het geselecteerde designpakket repeater item / const bevData = / storedPakket?.bevestigingStap || / storedPakket?.bevestiging_stap || / data?.bevestigingStap ||..."
- Current fragment: "op uit het geselecteerde pakket of direct uit configuratorData / const bevData = / storedPakket?.bevestigingStap || / storedPakket?.bevestiging_stap || / data?.bevestigingStap |..."

### 2026-10-27T09:13:11.261Z | saved | components/configurator/StepFourConfirmation.tsx
- Summary: Saved without a textual diff.
- Before: 497 lines | 22,259 chars | hash edbbeb145427 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from '../Button'; / const PARTNER_NAAM = 'Aanhuis Spijk'; /..."
- After: 497 lines | 22,259 chars | hash edbbeb145427 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from '../Button'; / const PARTNER_NAAM = 'Aanhuis Spijk'; /..."

### 2026-10-27T09:11:08.194Z | saved | components/configurator/StepFourConfirmation.tsx
- Summary: Line 8: replaced 110 lines with 111 lines.
- Before: 496 lines | 22,230 chars | hash b3e1e93f000e | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from '../Button'; / // Partner voor de documentatielijst. /..."
- After: 497 lines | 22,259 chars | hash edbbeb145427 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from '../Button'; / const PARTNER_NAAM = 'Aanhuis Spijk'; /..."
- Previous fragment: "// Partner voor de documentatielijst. / const PARTNER_NAAM = 'Aanhuis Spijk'; / const PARTNER_CONTACT = 'Tobias'; / const PARTNER_EMAIL = process.env.NEXT_PUBLIC_PARTNER_EMAIL |..."
- Current fragment: "const PARTNER_NAAM = 'Aanhuis Spijk'; / const PARTNER_CONTACT = 'Tobias'; / const PARTNER_EMAIL = process.env.NEXT_PUBLIC_PARTNER_EMAIL || 'tobias@aanhuis-spijk.nl'; / interface..."

### 2026-10-27T09:05:59.946Z | saved | components/configurator/StepFourConfirmation.tsx
- Summary: Line 9: replaced 90 lines with 94 lines.
- Before: 492 lines | 22,082 chars | hash d0ec0c3d6194 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from '../Button'; / // Partner voor de documentatielijst. /..."
- After: 496 lines | 22,230 chars | hash b3e1e93f000e | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from '../Button'; / // Partner voor de documentatielijst. /..."
- Previous fragment: "// Wordt getoond aan de klant (scenario 2). De API-route gebruikt dezelfde variabele als ontvanger. / const PARTNER_NAAM = 'Aanhuis Spijk'; / const PARTNER_CONTACT = 'Tobias'; /..."
- Current fragment: "const PARTNER_NAAM = 'Aanhuis Spijk'; / const PARTNER_CONTACT = 'Tobias'; / const PARTNER_EMAIL = process.env.NEXT_PUBLIC_PARTNER_EMAIL || 'tobias@aanhuis-spijk.nl'; / interface..."

### 2026-10-27T09:03:36.390Z | saved | components/configurator/StepFourConfirmation.tsx
- Summary: Line 79: replaced 6 lines with 7 lines.
- Before: 491 lines | 22,125 chars | hash be14cb5a90ac | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from '../Button'; / // Partner voor de documentatielijst. /..."
- After: 492 lines | 22,082 chars | hash d0ec0c3d6194 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from '../Button'; / // Partner voor de documentatielijst. /..."
- Previous fragment: "bevestigingsstap op uit configuratorData of de root / const bevData = / configuratorData?.bevestigingStap || / configuratorData?.bevestiging_stap || / configuratorData?.configur..."
- Current fragment: "robuuste configurator data op / const data = configuratorData?.configurator || configuratorData; / const beheer = data?.configuratorBeheer || data; / const bevData = / beheren?...."


## Hot Files
- components/configurator/StepFourConfirmation.tsx (16 tracked changes)
- components/configurator/StepThreeVisuals.tsx (8 tracked changes)
- lib/cms.ts (8 tracked changes)
- components/configurator/StepTwoDesign.tsx (7 tracked changes)
- app/download/page.tsx (1 tracked changes)

## Git Snapshot
- Branch: main
- HEAD: 2026-10-27 c20c708 fix(components): extract confirmation banner image and title directly from CMS confirmation step data in StepFourConfirmation
- Working tree summary: 1 modified
- M components/configurator/StepFourConfirmation.tsx

## GitHub Snapshot
GitHub Repository: marketing-smartheads/nomi-configurator
Visibility: public | Default branch: main
Stars: 0 | Forks: 0 | Open issues: 0

Latest commit on main:
- bae5bd1 by Bas van Dooremalen on 2026-10-27
  fix(cms): haal bevestigingStap op in designPakketten query

URL: https://github.com/marketing-smartheads/nomi-configurator

## Graphify Snapshot
Graphify report not found. Generate Graphify output if you want architecture-aware memory excerpts here.

## Project Planner
- Project planner is not configured yet. Enable it in the chat panel to generate a time-based todo list and progress rescue briefs.

## Agent Notes
- If a future task asks what changed recently, start with `Recent Changes`, `Tracked Snapshots`, `Hot Files`, and `Git Snapshot`.
- If a future task asks how the project is organized, combine this file with `graphify-out/GRAPH_REPORT.md`.
- If a future task needs repository-level context, use `Package Snapshot`, the GitHub snapshot, and the Graphify snapshot before rescanning broad parts of the repo.
