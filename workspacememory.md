# Workspace Memory
This file is maintained automatically by Code Janitor so Claude, Codex, Bob, and any other AI agent can reuse repo context without rescanning everything from scratch.
Generated: 2026-11-18T21:36:55.039Z
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
- Last activity: 2026-11-18T21:36:52.488Z
## Workspace Focus
- Active file in focus: components/configurator/StepFourConfirmation.tsx
- Hottest files right now: components/configurator/StepFourConfirmation.tsx (31), components/configurator/StepOnewoning.tsx (3), components/configurator/StepTwoDesign.tsx (3), components/configurator/StepThreeVisuals.tsx (2)
- Suggested starting points: components/configurator/StepFourConfirmation.tsx, components/configurator/StepOnewoning.tsx, components/configurator/StepTwoDesign.tsx, components/configurator/StepThreeVisuals.tsx, lib/cms.ts, .gitignore
## Current Workspace
- Active file: components/configurator/StepFourConfirmation.tsx
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
- components/configurator/StepFourConfirmation.tsx | 793 lines | 35622 chars | hash 0e2c3d0d1461
  Last snapshot: 2026-11-18T21:36:52.488Z
  Preview: "// components/configurator/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from..."
- components/configurator/StepTwoDesign.tsx | 273 lines | 12368 chars | hash 6c0aa94c4d43
  Last snapshot: 2026-11-18T20:16:44.791Z
  Preview: "// components/StepTwoDesign.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / export default function StepTwoDesign({ / stepTitle, /..."
- components/configurator/StepOnewoning.tsx | 224 lines | 10637 chars | hash cfbb07adedbd
  Last snapshot: 2026-11-18T19:42:37.402Z
  Preview: "// components/StepOnewoning.tsx / 'use client'; / import { useState, useEffect } from 'react'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / selectedInd..."
- components/configurator/StepThreeVisuals.tsx | 472 lines | 19371 chars | hash 1e3076199a8e
  Last snapshot: 2026-11-18T18:33:10.366Z
  Preview: "// components/StepThreeVisuals.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / export default function StepThreeVisuals({ / stepTitle, / configuratorData, / desig..."
- components/LoginScreen.tsx | 280 lines | 9944 chars | hash 0900a7d9f405
  Last snapshot: 2026-11-17T18:20:19.767Z
  Preview: "// components/LoginScreen.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / import Button from './Button'; / import { useRouter } fr..."
- components/ConfiguratorScreen.tsx | 131 lines | 5152 chars | hash 52285c4723da
  Last snapshot: 2026-11-17T17:40:22.102Z
  Preview: "// components/ConfiguratorScreen.tsx / 'use client'; / import { useState } from 'react'; / import StepOneWoning from './configurator/StepOnewoning'; / import StepTwoDesign from './configurator/StepTwoDesign'; / import..."
- app/privacy/page.tsx | 127 lines | 7550 chars | hash e35fdd4c7a5a
  Last snapshot: 2026-11-16T18:41:14.101Z
  Preview: "// app/privacy/page.tsx / 'use client'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / export default function PrivacyPage() { / return ( / <div className="min-h-screen bg-[#..."
- app/api/vouchers/route.ts | 80 lines | 2922 chars | hash dac1e1e8ab6f
  Last snapshot: 2026-11-16T18:34:33.145Z
  Preview: "import { NextResponse } from 'next/server'; / export const dynamic = 'force-dynamic'; / const VERHUUR_VOUCHERS = new Set([ / 'nomi-a001', 'nomi-a003', 'nomi-a005', 'nomi-a006', 'nomi-a007', 'nomi-a013', / 'nomi-a019',..."

## Recent Changes
### 2026-11-18T21:36:52.488Z | saved | components/configurator/StepFourConfirmation.tsx
- Summary: Line 1: replaced 218 lines with 787 lines.
- Before: 224 lines | 10,414 chars | hash 9953ab57cc2c | preview: "// components/StepOnewoning.tsx / 'use client'; / import { useState, useEffect } from 'react'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / selectedInd..."
- After: 793 lines | 35,622 chars | hash 0e2c3d0d1461 | preview: "// components/configurator/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from..."
- Previous fragment: "StepOnewoning.tsx / 'use client'; / import { useState, useEffect } from 'react'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, /..."
- Current fragment: "configurator/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigati..."

### 2026-11-18T21:16:44.220Z | saved | components/configurator/StepFourConfirmation.tsx
- Summary: Line 1: replaced 659 lines with 218 lines.
- Before: 665 lines | 31,193 chars | hash 89d5541e2877 | preview: "// components/configurator/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from..."
- After: 224 lines | 10,414 chars | hash 9953ab57cc2c | preview: "// components/StepOnewoning.tsx / 'use client'; / import { useState, useEffect } from 'react'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / selectedInd..."
- Previous fragment: "configurator/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigati..."
- Current fragment: "StepOnewoning.tsx / 'use client'; / import { useState, useEffect } from 'react'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, /..."

### 2026-11-18T20:16:44.791Z | saved | components/configurator/StepTwoDesign.tsx
- Summary: Line 193: replaced 1 line with 1 line.
- Before: 273 lines | 12,361 chars | hash 898c669a2c73 | preview: "// components/StepTwoDesign.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / export default function StepTwoDesign({ / stepTitle, /..."
- After: 273 lines | 12,368 chars | hash 6c0aa94c4d43 | preview: "// components/StepTwoDesign.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / export default function StepTwoDesign({ / stepTitle, /..."
- Previous fragment: "pakke"
- Current fragment: "designconcep"

### 2026-11-18T20:16:36.012Z | saved | components/configurator/StepTwoDesign.tsx
- Summary: Line 180: replaced 1 line with 1 line.
- Before: 273 lines | 12,360 chars | hash b4fa3adfccd3 | preview: "// components/StepTwoDesign.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / export default function StepTwoDesign({ / stepTitle, /..."
- After: 273 lines | 12,361 chars | hash 898c669a2c73 | preview: "// components/StepTwoDesign.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / export default function StepTwoDesign({ / stepTitle, /..."
- Previous fragment: "pakke"
- Current fragment: "concep"

### 2026-11-18T19:42:37.402Z | saved | components/configurator/StepOnewoning.tsx
- Summary: Line 153: replaced 72 lines with 56 lines.
- Before: 240 lines | 11,344 chars | hash 349e42f5280c | preview: "// components/StepOnewoning.tsx / 'use client'; / import { useState, useEffect } from 'react'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / selectedInd..."
- After: 224 lines | 10,637 chars | hash cfbb07adedbd | preview: "// components/StepOnewoning.tsx / 'use client'; / import { useState, useEffect } from 'react'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / selectedInd..."
- Previous fragment: "between pt-4 mt-4 border-t border-dark/5"> / <button / type="button" / onClick={() => { / if (imageUrl) { / setLightboxImage({ / url: imageUrl, / title: `${typeNaam} · ${indelin..."
- Current fragment: "end pt-4 mt-4 border-t border-dark/5"> / <button / type="button" / onClick={() => handleSelectIndeling(item, indelingTitel)} / className={`cursor-pointer px-5 py-2.5 rounded-ful..."

### 2026-11-18T19:07:30.415Z | saved | components/configurator/StepOnewoning.tsx
- Summary: Line 1: replaced 130 lines with 237 lines.
- Before: 133 lines | 6,001 chars | hash 855ee3eff854 | preview: "'use client'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / selectedIndeling, / setSelectedIndeling / }: any) { / const data = configuratorData?.configu..."
- After: 240 lines | 11,344 chars | hash 349e42f5280c | preview: "// components/StepOnewoning.tsx / 'use client'; / import { useState, useEffect } from 'react'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / selectedInd..."
- Previous fragment: "'use client'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / selectedIndeling, / setSelectedIndeling / }: any) {..."
- Current fragment: "// components/StepOnewoning.tsx / 'use client'; / import { useState, useEffect } from 'react'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / wonin..."

### 2026-11-18T19:07:19.185Z | saved | lib/cms.ts

### 2026-11-18T18:34:38.235Z | saved | components/configurator/StepFourConfirmation.tsx
- Summary: Line 304: removed 28 lines.
- Before: 692 lines | 32,170 chars | hash 90df63b66172 | preview: "// components/configurator/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from..."
- After: 665 lines | 31,193 chars | hash 89d5541e2877 | preview: "// components/configurator/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from..."
- Previous fragment: "<div className="flex items-center justify-center gap-6 sm:gap-8 py-2"> / <div className="relative h-8 sm:h-10 w-36 sm:w-44"> / <Image / src="/assets/imgi_1_Logo_NOMI_LANDSCAPE_G..."

### 2026-11-18T18:33:10.366Z | saved | components/configurator/StepThreeVisuals.tsx
- Summary: Line 282: removed 29 lines.
- Before: 500 lines | 20,266 chars | hash 9697bd178c53 | preview: "// components/StepThreeVisuals.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / export default function StepThreeVisuals({ / stepTitle, / configuratorData, / desig..."
- After: 472 lines | 19,371 chars | hash 1e3076199a8e | preview: "// components/StepThreeVisuals.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / export default function StepThreeVisuals({ / stepTitle, / configuratorData, / desig..."
- Previous fragment: "Logo's boven de visuals/content */} / <div className="flex items-center justify-center gap-6 sm:gap-8 py-2"> / <div className="relative h-8 sm:h-10 w-36 sm:w-44"> / <Image / src..."

### 2026-11-18T18:32:57.112Z | saved | components/configurator/StepTwoDesign.tsx
- Summary: Line 129: removed 29 lines.
- Before: 301 lines | 13,253 chars | hash 6d55e2e61897 | preview: "// components/StepTwoDesign.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / export default function StepTwoDesign({ / stepTitle, /..."
- After: 273 lines | 12,360 chars | hash b4fa3adfccd3 | preview: "// components/StepTwoDesign.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / export default function StepTwoDesign({ / stepTitle, /..."
- Previous fragment: "{/* Logo's boven de pakketblokken */} / <div className="flex items-center justify-center gap-6 sm:gap-8 py-2"> / <div className="relative h-8 sm:h-10 w-36 sm:w-44"> / <Image / s..."

### 2026-11-18T18:32:42.331Z | saved | components/configurator/StepOnewoning.tsx
- Summary: Line 3: replaced 96 lines with 66 lines.
- Before: 163 lines | 7,027 chars | hash 83a38aaa8934 | preview: "'use client'; / import Image from 'next/image'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / selectedIndeling, / setSelectedIndeling / }: any) { / cons..."
- After: 133 lines | 6,001 chars | hash 855ee3eff854 | preview: "'use client'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / selectedIndeling, / setSelectedIndeling / }: any) { / const data = configuratorData?.configu..."
- Previous fragment: "import Image from 'next/image'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / selectedIndeling, / setSelectedInd..."
- Current fragment: "export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / selectedIndeling, / setSelectedIndeling / }: any) { / const data = c..."

### 2026-11-17T20:41:09.754Z | saved | components/configurator/StepFourConfirmation.tsx
- Summary: Line 147: replaced 304 lines with 285 lines.
- Before: 711 lines | 33,108 chars | hash 8d4d597f0471 | preview: "// components/configurator/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from..."
- After: 692 lines | 32,170 chars | hash 90df63b66172 | preview: "// components/configurator/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from..."
- Previous fragment: "Uitgebreide ophaalmethode voor ACF Galerij (pakket_aabeelding / pakketAfbeelding) / const extractMediaList = (field: any) => { / if (!field) return []; / if (Array.isArray(field..."
- Current fragment: "Ophalen van de enkele pakket_aabeelding (met 'aabeelding') / const rawPakketAfb = / storedPakket?.pakket_aabeelding || / storedPakket?.pakketAabeelding || / storedPakket?.pakket..."

### 2026-11-17T20:36:54.153Z | saved | components/configurator/StepFourConfirmation.tsx
- Summary: Line 147: replaced 286 lines with 293 lines.
- Before: 704 lines | 32,844 chars | hash dcab45a1eeae | preview: "// components/configurator/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from..."
- After: 711 lines | 33,108 chars | hash 8d4d597f0471 | preview: "// components/configurator/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from..."
- Previous fragment: "Waterdichte ophaalmethode inclusief de ontdekte typefout 'pakketAabeelding' / 'pakket_aabeelding' / const rawPakketAfb = / storedPakket?.pakketAabeelding || / storedPakket?.pakk..."
- Current fragment: "Uitgebreide ophaalmethode voor ACF Galerij (pakket_aabeelding / pakketAfbeelding) / const extractMediaList = (field: any) => { / if (!field) return []; / if (Array.isArray(field..."

### 2026-11-17T20:30:31.248Z | saved | components/configurator/StepFourConfirmation.tsx
- Summary: Line 147: replaced 297 lines with 299 lines.
- Before: 702 lines | 32,832 chars | hash be07876351fd | preview: "// components/configurator/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from..."
- After: 704 lines | 32,844 chars | hash dcab45a1eeae | preview: "// components/configurator/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from..."
- Previous fragment: "1. Waterdichte ophaalmethode voor exact de 'pakketAfbeelding' of 'pakketAfbeeldingen' repeater uit het CMS / const rawPakketAfb = / storedPakket?.pakketAfbeelding || / storedPak..."
- Current fragment: "Waterdichte ophaalmethode inclusief de ontdekte typefout 'pakketAabeelding' / 'pakket_aabeelding' / const rawPakketAfb = / storedPakket?.pakketAabeelding || / storedPakket?.pakk..."

### 2026-11-17T20:19:35.772Z | saved | components/configurator/StepFourConfirmation.tsx
- Summary: Line 147: replaced 216 lines with 220 lines.
- Before: 698 lines | 32,812 chars | hash ba049d251aa4 | preview: "// components/configurator/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from..."
- After: 702 lines | 32,832 chars | hash be07876351fd | preview: "// components/configurator/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from..."
- Previous fragment: "Uitgebreide en correcte ophaalmethode voor de echte pakketAfbeeldingen (moodboard) repeater / const rawPakketAfb = storedPakket?.pakketAfbeeldingen || storedPakket?.pakket_afbee..."
- Current fragment: "1. Waterdichte ophaalmethode voor exact de 'pakketAfbeelding' of 'pakketAfbeeldingen' repeater uit het CMS / const rawPakketAfb = / storedPakket?.pakketAfbeelding || / storedPak..."


## Hot Files
- components/configurator/StepFourConfirmation.tsx (31 tracked changes)
- components/configurator/StepOnewoning.tsx (3 tracked changes)
- components/configurator/StepTwoDesign.tsx (3 tracked changes)
- components/configurator/StepThreeVisuals.tsx (2 tracked changes)
- lib/cms.ts (1 tracked changes)

## Git Snapshot
- Branch: main
- HEAD: 2026-11-18 b91bd80 refactor(step1): remove view floor plan text link and rename lightbox header to Inhoudelijk interieuradvies
- Working tree summary: 1 modified
- M components/configurator/StepFourConfirmation.tsx

## GitHub Snapshot
GitHub Repository: marketing-smartheads/nomi-configurator
Visibility: public | Default branch: main
Stars: 0 | Forks: 0 | Open issues: 0

Latest commit on main:
- df4163a by Bas van Dooremalen on 2026-11-18
  sentences adjusted

URL: https://github.com/marketing-smartheads/nomi-configurator

## Graphify Snapshot
Graphify report not found. Generate Graphify output if you want architecture-aware memory excerpts here.

## Project Planner
- Project planner is not configured yet. Enable it in the chat panel to generate a time-based todo list and progress rescue briefs.

## Agent Notes
- If a future task asks what changed recently, start with `Recent Changes`, `Tracked Snapshots`, `Hot Files`, and `Git Snapshot`.
- If a future task asks how the project is organized, combine this file with `graphify-out/GRAPH_REPORT.md`.
- If a future task needs repository-level context, use `Package Snapshot`, the GitHub snapshot, and the Graphify snapshot before rescanning broad parts of the repo.
