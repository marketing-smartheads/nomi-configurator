# Workspace Memory
This file is maintained automatically by Code Janitor so Claude, Codex, Bob, and any other AI agent can reuse repo context without rescanning everything from scratch.
Generated: 2026-11-18T22:12:13.033Z
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
- Last activity: 2026-11-18T22:12:11.257Z
## Workspace Focus
- Active file in focus: components/configurator/StepOnewoning.tsx
- Hottest files right now: components/configurator/StepFourConfirmation.tsx (26), components/configurator/StepOnewoning.tsx (9), components/configurator/StepTwoDesign.tsx (3), components/configurator/StepThreeVisuals.tsx (1)
- Suggested starting points: components/configurator/StepOnewoning.tsx, components/configurator/StepFourConfirmation.tsx, components/configurator/StepTwoDesign.tsx, components/configurator/StepThreeVisuals.tsx, lib/cms.ts, .gitignore
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
- components/configurator/StepOnewoning.tsx | 268 lines | 13348 chars | hash a5107feef067
  Last snapshot: 2026-11-18T22:12:11.257Z
  Preview: "// components/StepOneWoning.tsx / 'use client'; / import { useState, useEffect } from 'react'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / selectedInd..."
- components/configurator/StepFourConfirmation.tsx | 793 lines | 35622 chars | hash 0e2c3d0d1461
  Last snapshot: 2026-11-18T21:36:52.488Z
  Preview: "// components/configurator/StepFourConfirmation.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from..."
- components/configurator/StepTwoDesign.tsx | 273 lines | 12368 chars | hash 6c0aa94c4d43
  Last snapshot: 2026-11-18T20:16:44.791Z
  Preview: "// components/StepTwoDesign.tsx / 'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / export default function StepTwoDesign({ / stepTitle, /..."
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
### 2026-11-18T22:12:11.257Z | saved | components/configurator/StepOnewoning.tsx
- Summary: Line 176: replaced 28 lines with 41 lines.
- Before: 255 lines | 12,284 chars | hash 39735c0904f8 | preview: "// components/StepOneWoning.tsx / 'use client'; / import { useState, useEffect } from 'react'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / selectedInd..."
- After: 268 lines | 13,348 chars | hash a5107feef067 | preview: "// components/StepOneWoning.tsx / 'use client'; / import { useState, useEffect } from 'react'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / selectedInd..."
- Previous fragment: "Consistente en duidelijke navigatieknoppen onderaan */} / <div className="max-w-4xl mx-auto px-4 py-12 mt-12 border-t border-dark/15 flex flex-col sm:flex-row justify-between it..."
- Current fragment: "Navigatieknoppen onderaan: twee herkenbare knoppen met pijlen en duidelijke tekst */} / <nav / aria-label="Stappennavigatie" / className="max-w-4xl mx-auto px-4 pt-12 mt-12 bord..."

### 2026-11-18T22:07:47.633Z | saved | components/configurator/StepOnewoning.tsx
- Summary: Saved without a textual diff.
- Before: 255 lines | 12,284 chars | hash 39735c0904f8 | preview: "// components/StepOneWoning.tsx / 'use client'; / import { useState, useEffect } from 'react'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / selectedInd..."
- After: 255 lines | 12,284 chars | hash 39735c0904f8 | preview: "// components/StepOneWoning.tsx / 'use client'; / import { useState, useEffect } from 'react'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / selectedInd..."

### 2026-11-18T22:07:40.658Z | saved | components/configurator/StepOnewoning.tsx
- Summary: Line 176: replaced 2 lines with 2 lines.
- Before: 255 lines | 12,286 chars | hash eaf1f60dba97 | preview: "// components/StepOneWoning.tsx / 'use client'; / import { useState, useEffect } from 'react'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / selectedInd..."
- After: 255 lines | 12,284 chars | hash 39735c0904f8 | preview: "// components/StepOneWoning.tsx / 'use client'; / import { useState, useEffect } from 'react'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / selectedInd..."
- Previous fragment: "Navigatiesectie onderaan met professionele SVG-iconen */} / <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-dark/10 max-w-4xl m..."
- Current fragment: "en duidelijke navigatieknoppen onderaan */} / <div className="max-w-4xl mx-auto px-4 py-12 mt-12 border-t border-dark/15 flex flex-col sm:flex-row justify-between items-center g..."

### 2026-11-18T22:01:58.706Z | saved | components/configurator/StepOnewoning.tsx
- Summary: Line 176: replaced 19 lines with 25 lines.
- Before: 249 lines | 11,768 chars | hash 6ec998528a21 | preview: "// components/StepOneWoning.tsx / 'use client'; / import { useState, useEffect } from 'react'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / selectedInd..."
- After: 255 lines | 12,286 chars | hash eaf1f60dba97 | preview: "// components/StepOneWoning.tsx / 'use client'; / import { useState, useEffect } from 'react'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / selectedInd..."
- Previous fragment: "*/} / <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-dark/10 max-w-4xl mx-auto w-full"> / {onBack ? ( / <button / type="button..."
- Current fragment: "met professionele SVG-iconen */} / <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-dark/10 max-w-4xl mx-auto w-full"> / {onBack..."

### 2026-11-18T21:53:43.288Z | saved | components/configurator/StepOnewoning.tsx
- Summary: Line 177: replaced 23 lines with 21 lines.
- Before: 251 lines | 11,820 chars | hash 24fff1f5e112 | preview: "// components/StepOneWoning.tsx / 'use client'; / import { useState, useEffect } from 'react'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / selectedInd..."
- After: 249 lines | 11,768 chars | hash 6ec998528a21 | preview: "// components/StepOneWoning.tsx / 'use client'; / import { useState, useEffect } from 'react'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / selectedInd..."
- Previous fragment: "{(onBack || onNext) && ( / <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-dark/10 max-w-4xl mx-auto w-full"> / {onBack ? ( / <..."
- Current fragment: "<div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-dark/10 max-w-4xl mx-auto w-full"> / {onBack ? ( / <button / type="button" / on..."

### 2026-11-18T21:46:45.672Z | saved | components/configurator/StepOnewoning.tsx
- Summary: Line 1: replaced 172 lines with 199 lines.
- Before: 224 lines | 10,637 chars | hash cfbb07adedbd | preview: "// components/StepOnewoning.tsx / 'use client'; / import { useState, useEffect } from 'react'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / selectedInd..."
- After: 251 lines | 11,820 chars | hash 24fff1f5e112 | preview: "// components/StepOneWoning.tsx / 'use client'; / import { useState, useEffect } from 'react'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / selectedInd..."
- Previous fragment: "woning.tsx / 'use client'; / import { useState, useEffect } from 'react'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woning..."
- Current fragment: "Woning.tsx / 'use client'; / import { useState, useEffect } from 'react'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woning..."

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


## Hot Files
- components/configurator/StepFourConfirmation.tsx (26 tracked changes)
- components/configurator/StepOnewoning.tsx (9 tracked changes)
- components/configurator/StepTwoDesign.tsx (3 tracked changes)
- components/configurator/StepThreeVisuals.tsx (1 tracked changes)
- lib/cms.ts (1 tracked changes)

## Git Snapshot
- Branch: main
- HEAD: 2026-11-18 012f1b3 style(step1): redesign bottom navigation with prominent pill buttons and professional svg arrows
- Working tree summary: 1 modified
- M components/configurator/StepOnewoning.tsx

## GitHub Snapshot
GitHub Repository: marketing-smartheads/nomi-configurator
Visibility: public | Default branch: main
Stars: 0 | Forks: 0 | Open issues: 0

Latest commit on main:
- fc5aca4 by Bas van Dooremalen on 2026-11-18
  style(step1): replace text arrows with clean professional SVG icons in bottom navigation

URL: https://github.com/marketing-smartheads/nomi-configurator

## Graphify Snapshot
Graphify report not found. Generate Graphify output if you want architecture-aware memory excerpts here.

## Project Planner
- Project planner is not configured yet. Enable it in the chat panel to generate a time-based todo list and progress rescue briefs.

## Agent Notes
- If a future task asks what changed recently, start with `Recent Changes`, `Tracked Snapshots`, `Hot Files`, and `Git Snapshot`.
- If a future task asks how the project is organized, combine this file with `graphify-out/GRAPH_REPORT.md`.
- If a future task needs repository-level context, use `Package Snapshot`, the GitHub snapshot, and the Graphify snapshot before rescanning broad parts of the repo.
