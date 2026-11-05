# Workspace Memory
This file is maintained automatically by Code Janitor so Claude, Codex, Bob, and any other AI agent can reuse repo context without rescanning everything from scratch.
Generated: 2026-11-05T13:20:45.235Z
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
- Last activity: 2026-11-05T13:20:43.470Z
## Workspace Focus
- Active file in focus: components/configurator/StepThreeVisuals.tsx
- Hottest files right now: lib/cms.ts (12), components/configurator/StepThreeVisuals.tsx (8), app/dashboard/page.tsx (6), components/configurator/StepFourConfirmation.tsx (2)
- Suggested starting points: components/configurator/StepThreeVisuals.tsx, lib/cms.ts, app/dashboard/page.tsx, components/configurator/StepFourConfirmation.tsx, components/Hero.tsx, components/LoginScreen.tsx
## Current Workspace
- Active file: components/configurator/StepThreeVisuals.tsx
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
- Working tree summary: 4 modifieds
## Tracked Snapshots
- components/configurator/StepThreeVisuals.tsx | 485 lines | 20221 chars | hash a07bd0d5336f
  Last snapshot: 2026-11-05T13:20:43.470Z
  Preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / export default function StepThreeVisuals({ / stepTitle, / configuratorData, / designPakket, / woningType / }: any) { / c..."
- lib/cms.ts | 225 lines | 6205 chars | hash 012326f81e88
  Last snapshot: 2026-11-05T12:48:32.342Z
  Preview: "// lib/cms.ts / export async function getPageData() { / const query = ` / query GetConfiguratorPage { / page(id: "28", idType: DATABASE_ID) { / sections { / hero { / subtitel / titel / omschrijving / afbeelding { / no..."
- components/configurator/StepTwoDesign.tsx | 179 lines | 7987 chars | hash 6f6825fb8b83
  Last snapshot: 2026-11-05T11:54:45.219Z
  Preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / export default function StepTwoDesign({ / stepTitle, / configuratorData, / designPakket,..."
- components/Hero.tsx | 64 lines | 2504 chars | hash 47d3a0d89c7a
  Last snapshot: 2026-11-05T08:49:02.674Z
  Preview: "import React from 'react'; / import Image from 'next/image'; / import Button from './Button'; / interface HeroProps { / onStart: () => void; / data?: { // Maak data optioneel met een ? / subtitel?: string; / titel?: s..."
- components/MainContent.tsx | 217 lines | 8844 chars | hash e6c5e1499cef
  Last snapshot: 2026-11-02T10:45:40.365Z
  Preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useConfigurator } from '../lib/useConfigurator'; / import LoginScreen from '../components/LoginScreen'; / impor..."
- components/LoginScreen.tsx | 288 lines | 10168 chars | hash 79594072f6a6
  Last snapshot: 2026-11-02T10:44:41.742Z
  Preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / import Button from './Button'; / import { useRouter } from 'next/navigation'; / interfac..."
- app/globals.css | 106 lines | 2720 chars | hash 7e080d34cd3e
  Last snapshot: 2026-11-02T10:32:36.827Z
  Preview: "@import "tailwindcss"; / @theme { / /* --- Kleuren (Design System) --- */ / --color-primary: #C2A06A;       /* De goud/bronskleur */ / --color-dark: #181820;          /* De diepe, donkere kleur (geeft bg-dark) */ / --..."
- components/configurator/StepFourConfirmation.tsx | 307 lines | 14829 chars | hash 27617c309371
  Last snapshot: 2026-11-01T22:01:43.676Z
  Preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from '../Button'; / const PARTNER_NAAM = 'Aanhuis Spijk'; /..."

## Recent Changes
### 2026-11-05T13:20:43.470Z | saved | components/configurator/StepThreeVisuals.tsx
- Summary: Line 471: replaced 2 lines with 1 line.
- Before: 486 lines | 20,297 chars | hash ff1c99067ae0 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / export default function StepThreeVisuals({ / stepTitle, / configuratorData, / designPakket, / woningType / }: any) { / c..."
- After: 485 lines | 20,221 chars | hash a07bd0d5336f | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / export default function StepThreeVisuals({ / stepTitle, / configuratorData, / designPakket, / woningType / }: any) { / c..."
- Previous fragment: "{/* Enkele moodboard visual over de volledige breedte van de container */}"

### 2026-11-05T13:20:38.334Z | saved | components/configurator/StepThreeVisuals.tsx
- Summary: Line 76: replaced 393 lines with 397 lines.
- Before: 482 lines | 19,942 chars | hash 2a4dc1407769 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / export default function StepThreeVisuals({ / stepTitle, / configuratorData, / designPakket, / woningType / }: any) { / c..."
- After: 486 lines | 20,297 chars | hash ff1c99067ae0 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / export default function StepThreeVisuals({ / stepTitle, / configuratorData, / designPakket, / woningType / }: any) { / c..."
- Previous fragment: "const rawMoodboard = huidigPakket?.moodboardGallery || huidigPakket?.moodboard_gallery; / let moodboardGallery: any[] = []; / if (Array.isArray(rawMoodboard)) { / moodboardGalle..."
- Current fragment: "// Moodboard gallery: pak enkel de eerste afbeelding (single moodboard visual) / const rawMoodboard = huidigPakket?.moodboardGallery || huidigPakket?.moodboard_gallery; / let mo..."

### 2026-11-05T13:20:31.224Z | saved | components/configurator/StepThreeVisuals.tsx
- Summary: Line 469: replaced 17 lines with 8 lines.
- Before: 491 lines | 20,409 chars | hash df5ffb8d393f | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / export default function StepThreeVisuals({ / stepTitle, / configuratorData, / designPakket, / woningType / }: any) { / c..."
- After: 482 lines | 19,942 chars | hash 2a4dc1407769 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / export default function StepThreeVisuals({ / stepTitle, / configuratorData, / designPakket, / woningType / }: any) { / c..."
- Previous fragment: "Gallery.length > 0 && ( / <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 sm:p-0"> / {moodboardGallery.map((img: any, idx: number) => { / const imageUrl = img?.sourceU..."
- Current fragment: "Url && ( / <div className="w-full relative aspect-video overflow-hidden bg-secondary"> / <Image / src={moodboardUrl} / alt={`Moodboard ${pakketTitel}`} / fill / className="objec..."

### 2026-11-05T12:48:32.342Z | saved | lib/cms.ts
- Summary: Line 68: replaced 11 lines with 11 lines.
- Before: 225 lines | 6,203 chars | hash 04694a32fc10 | preview: "// lib/cms.ts / export async function getPageData() { / const query = ` / query GetConfiguratorPage { / page(id: "28", idType: DATABASE_ID) { / sections { / hero { / subtitel / titel / omschrijving / afbeelding { / no..."
- After: 225 lines | 6,205 chars | hash 012326f81e88 | preview: "// lib/cms.ts / export async function getPageData() { / const query = ` / query GetConfiguratorPage { / page(id: "28", idType: DATABASE_ID) { / sections { / hero { / subtitel / titel / omschrijving / afbeelding { / no..."
- Previous fragment: "{ / nodes(first: 50) { / sourceUrl / mediaItemUrl / } / } / materialenLijst { / materiaalTitel / } / moodboardGallery { / nodes(first: 50)"
- Current fragment: "(first: 100) { / nodes { / sourceUrl / mediaItemUrl / } / } / materialenLijst { / materiaalTitel / } / moodboardGallery(first: 100) { / nodes"

### 2026-11-05T12:45:47.011Z | saved | lib/cms.ts
- Summary: Line 69: replaced 10 lines with 10 lines.
- Before: 225 lines | 6,181 chars | hash 759e72d2dd03 | preview: "// lib/cms.ts / export async function getPageData() { / const query = ` / query GetConfiguratorPage { / page(id: "28", idType: DATABASE_ID) { / sections { / hero { / subtitel / titel / omschrijving / afbeelding { / no..."
- After: 225 lines | 6,203 chars | hash 04694a32fc10 | preview: "// lib/cms.ts / export async function getPageData() { / const query = ` / query GetConfiguratorPage { / page(id: "28", idType: DATABASE_ID) { / sections { / hero { / subtitel / titel / omschrijving / afbeelding { / no..."
- Previous fragment: "{ / sourceUrl / mediaItemUrl / } / } / materialenLijst { / materiaalTitel / } / moodboardGallery { / nodes"
- Current fragment: "(first: 50) { / sourceUrl / mediaItemUrl / } / } / materialenLijst { / materiaalTitel / } / moodboardGallery { / nodes(first: 50)"

### 2026-11-05T12:42:25.375Z | saved | lib/cms.ts
- Summary: Line 69: replaced 16 lines with 12 lines.
- Before: 229 lines | 6,293 chars | hash 542201b41f6c | preview: "// lib/cms.ts / export async function getPageData() { / const query = ` / query GetConfiguratorPage { / page(id: "28", idType: DATABASE_ID) { / sections { / hero { / subtitel / titel / omschrijving / afbeelding { / no..."
- After: 225 lines | 6,181 chars | hash 759e72d2dd03 | preview: "// lib/cms.ts / export async function getPageData() { / const query = ` / query GetConfiguratorPage { / page(id: "28", idType: DATABASE_ID) { / sections { / hero { / subtitel / titel / omschrijving / afbeelding { / no..."
- Previous fragment: "... on MediaItem { / sourceUrl / } / nodes { / sourceUrl / } / } / materialenLijst { / materiaalTitel / } / moodboardGallery { / ... on MediaItem { / sourceUrl / } / nodes { / s..."
- Current fragment: "nodes { / sourceUrl / mediaItemUrl / } / } / materialenLijst { / materiaalTitel / } / moodboardGallery { / nodes { / sourceUrl / mediaItem"

### 2026-11-05T12:37:46.162Z | saved | components/configurator/StepThreeVisuals.tsx
- Summary: Line 64: replaced 373 lines with 377 lines.
- Before: 487 lines | 20,249 chars | hash 154f87251e36 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / export default function StepThreeVisuals({ / stepTitle, / configuratorData, / designPakket, / woningType / }: any) { / c..."
- After: 491 lines | 20,409 chars | hash df5ffb8d393f | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / export default function StepThreeVisuals({ / stepTitle, / configuratorData, / designPakket, / woningType / }: any) { / c..."
- Previous fragment: "// --- ROBUUSTE UITLEZEN VAN ALLE VISUALS (ACF Gallery) --- / const rawVisuals = huidigPakket?.visualsSlider || huidigPakket?.visuals_slider; / let visuals: any[] = []; / if (Ar..."
- Current fragment: "const rawVisuals = huidigPakket?.visualsSlider || huidigPakket?.visuals_slider; / let visuals: any[] = []; / if (Array.isArray(rawVisuals)) { / visuals = rawVisuals; / } else if..."

### 2026-11-05T12:37:19.578Z | saved | components/configurator/StepThreeVisuals.tsx
- Summary: Saved without a textual diff.
- Before: 487 lines | 20,249 chars | hash 154f87251e36 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / export default function StepThreeVisuals({ / stepTitle, / configuratorData, / designPakket, / woningType / }: any) { / c..."
- After: 487 lines | 20,249 chars | hash 154f87251e36 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / export default function StepThreeVisuals({ / stepTitle, / configuratorData, / designPakket, / woningType / }: any) { / c..."

### 2026-11-05T12:37:10.159Z | saved | lib/cms.ts
- Summary: Line 69: replaced 12 lines with 16 lines.
- Before: 225 lines | 6,181 chars | hash 759e72d2dd03 | preview: "// lib/cms.ts / export async function getPageData() { / const query = ` / query GetConfiguratorPage { / page(id: "28", idType: DATABASE_ID) { / sections { / hero { / subtitel / titel / omschrijving / afbeelding { / no..."
- After: 229 lines | 6,293 chars | hash 542201b41f6c | preview: "// lib/cms.ts / export async function getPageData() { / const query = ` / query GetConfiguratorPage { / page(id: "28", idType: DATABASE_ID) { / sections { / hero { / subtitel / titel / omschrijving / afbeelding { / no..."
- Previous fragment: "nodes { / sourceUrl / mediaItemUrl / } / } / materialenLijst { / materiaalTitel / } / moodboardGallery { / nodes { / sourceUrl / mediaItem"
- Current fragment: "... on MediaItem { / sourceUrl / } / nodes { / sourceUrl / } / } / materialenLijst { / materiaalTitel / } / moodboardGallery { / ... on MediaItem { / sourceUrl / } / nodes { / s..."

### 2026-11-05T12:28:14.539Z | saved | lib/cms.ts
- Summary: Line 69: replaced 9 lines with 13 lines.
- Before: 221 lines | 6,077 chars | hash 426f87c5a81b | preview: "// lib/cms.ts / export async function getPageData() { / const query = ` / query GetConfiguratorPage { / page(id: "28", idType: DATABASE_ID) { / sections { / hero { / subtitel / titel / omschrijving / afbeelding { / no..."
- After: 225 lines | 6,181 chars | hash 759e72d2dd03 | preview: "// lib/cms.ts / export async function getPageData() { / const query = ` / query GetConfiguratorPage { / page(id: "28", idType: DATABASE_ID) { / sections { / hero { / subtitel / titel / omschrijving / afbeelding { / no..."
- Previous fragment: "sourceUrl / mediaItemUrl / } / materialenLijst { / materiaalTitel / } / moodboardGallery { / sourceUrl / mediaItemUrl"
- Current fragment: "nodes { / sourceUrl / mediaItemUrl / } / } / materialenLijst { / materiaalTitel / } / moodboardGallery { / nodes { / sourceUrl / mediaItemUrl / }"

### 2026-11-05T12:26:27.527Z | saved | lib/cms.ts
- Summary: Line 69: replaced 17 lines with 9 lines.
- Before: 229 lines | 6,293 chars | hash 542201b41f6c | preview: "// lib/cms.ts / export async function getPageData() { / const query = ` / query GetConfiguratorPage { / page(id: "28", idType: DATABASE_ID) { / sections { / hero { / subtitel / titel / omschrijving / afbeelding { / no..."
- After: 221 lines | 6,077 chars | hash 426f87c5a81b | preview: "// lib/cms.ts / export async function getPageData() { / const query = ` / query GetConfiguratorPage { / page(id: "28", idType: DATABASE_ID) { / sections { / hero { / subtitel / titel / omschrijving / afbeelding { / no..."
- Previous fragment: "... on MediaItem { / sourceUrl / } / nodes { / sourceUrl / } / } / materialenLijst { / materiaalTitel / } / moodboardGallery { / ... on MediaItem { / sourceUrl / } / nodes { / s..."
- Current fragment: "sourceUrl / mediaItemUrl / } / materialenLijst { / materiaalTitel / } / moodboardGallery { / sourceUrl / mediaItemUrl"

### 2026-11-05T12:23:34.638Z | saved | lib/cms.ts
- Summary: Saved without a textual diff.
- Before: 229 lines | 6,293 chars | hash 542201b41f6c | preview: "// lib/cms.ts / export async function getPageData() { / const query = ` / query GetConfiguratorPage { / page(id: "28", idType: DATABASE_ID) { / sections { / hero { / subtitel / titel / omschrijving / afbeelding { / no..."
- After: 229 lines | 6,293 chars | hash 542201b41f6c | preview: "// lib/cms.ts / export async function getPageData() { / const query = ` / query GetConfiguratorPage { / page(id: "28", idType: DATABASE_ID) { / sections { / hero { / subtitel / titel / omschrijving / afbeelding { / no..."

### 2026-11-05T12:23:31.971Z | saved | lib/cms.ts
- Summary: Saved without a textual diff.
- Before: 229 lines | 6,293 chars | hash 542201b41f6c | preview: "// lib/cms.ts / export async function getPageData() { / const query = ` / query GetConfiguratorPage { / page(id: "28", idType: DATABASE_ID) { / sections { / hero { / subtitel / titel / omschrijving / afbeelding { / no..."
- After: 229 lines | 6,293 chars | hash 542201b41f6c | preview: "// lib/cms.ts / export async function getPageData() { / const query = ` / query GetConfiguratorPage { / page(id: "28", idType: DATABASE_ID) { / sections { / hero { / subtitel / titel / omschrijving / afbeelding { / no..."

### 2026-11-05T12:20:52.334Z | saved | lib/cms.ts
- Summary: Saved without a textual diff.
- Before: 229 lines | 6,293 chars | hash 542201b41f6c | preview: "// lib/cms.ts / export async function getPageData() { / const query = ` / query GetConfiguratorPage { / page(id: "28", idType: DATABASE_ID) { / sections { / hero { / subtitel / titel / omschrijving / afbeelding { / no..."
- After: 229 lines | 6,293 chars | hash 542201b41f6c | preview: "// lib/cms.ts / export async function getPageData() { / const query = ` / query GetConfiguratorPage { / page(id: "28", idType: DATABASE_ID) { / sections { / hero { / subtitel / titel / omschrijving / afbeelding { / no..."

### 2026-11-05T12:17:56.761Z | saved | components/configurator/StepThreeVisuals.tsx
- Summary: Line 40: replaced 359 lines with 397 lines.
- Before: 449 lines | 18,529 chars | hash faa41e22a89e | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / export default function StepThreeVisuals({ / stepTitle, / configuratorData, / designPakket, / woningType / }: any) { / c..."
- After: 487 lines | 20,249 chars | hash 154f87251e36 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / export default function StepThreeVisuals({ / stepTitle, / configuratorData, / designPakket, / woningType / }: any) { / c..."
- Previous fragment: "// Match het exacte woningtype + indeling-object / const huidigWoningTypeObj = woningTypenLijst.find((w: any) => { / const naam = (w?.typeNaam || w?.typenaam || '').toLowerCase(..."
- Current fragment: "const huidigWoningTypeObj = woningTypenLijst.find((w: any) => { / const naam = (w?.typeNaam || w?.typenaam || '').toLowerCase().replace(/[^a-z0-9]/g, ''); / const indTitel = (w?..."


## Hot Files
- lib/cms.ts (12 tracked changes)
- components/configurator/StepThreeVisuals.tsx (8 tracked changes)
- app/dashboard/page.tsx (6 tracked changes)
- components/configurator/StepFourConfirmation.tsx (2 tracked changes)
- components/Hero.tsx (2 tracked changes)
- components/LoginScreen.tsx (2 tracked changes)
- components/MainContent.tsx (2 tracked changes)
- app/api/vouchers/route.ts (1 tracked changes)

## Git Snapshot
- Branch: main
- HEAD: 2026-11-05 9ac450e fix(cms): move first: 100 argument to visualsSlider and moodboardGallery connection fields
- Working tree summary: 4 modifieds
- M components/configurator/StepThreeVisuals.tsx
- M graphify-out/WORKSPACE_MEMORY.md
- M workspace.json
- M workspacememory.md

## GitHub Snapshot
GitHub Repository: marketing-smartheads/nomi-configurator
Visibility: public | Default branch: main
Stars: 0 | Forks: 0 | Open issues: 0

Latest commit on main:
- 9ac450e by Bas van Dooremalen on 2026-11-05
  fix(cms): move first: 100 argument to visualsSlider and moodboardGallery connection fields

URL: https://github.com/marketing-smartheads/nomi-configurator

## Graphify Snapshot
Graphify report not found. Generate Graphify output if you want architecture-aware memory excerpts here.

## Project Planner
- Project planner is not configured yet. Enable it in the chat panel to generate a time-based todo list and progress rescue briefs.

## Agent Notes
- If a future task asks what changed recently, start with `Recent Changes`, `Tracked Snapshots`, `Hot Files`, and `Git Snapshot`.
- If a future task asks how the project is organized, combine this file with `graphify-out/GRAPH_REPORT.md`.
- If a future task needs repository-level context, use `Package Snapshot`, the GitHub snapshot, and the Graphify snapshot before rescanning broad parts of the repo.
