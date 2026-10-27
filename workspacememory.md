# Workspace Memory
This file is maintained automatically by Code Janitor so Claude, Codex, Bob, and any other AI agent can reuse repo context without rescanning everything from scratch.
Generated: 2026-10-27T00:27:43.913Z
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
- Last activity: 2026-10-27T00:27:42.144Z
## Workspace Focus
- Active file in focus: lib/cms.ts
- Hottest files right now: lib/cms.ts (12), components/configurator/StepTwoDesign.tsx (8), components/configurator/StepOnewoning.tsx (5), components/VoucherWelcomeModal.tsx (4)
- Suggested starting points: lib/cms.ts, components/configurator/StepTwoDesign.tsx, components/configurator/StepOnewoning.tsx, components/VoucherWelcomeModal.tsx, components/ConfiguratorScreen.tsx, app/voucher/page.tsx
## Current Workspace
- Active file: lib/cms.ts
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
- Change mix: save (37), create (3)
- Remembered file snapshots: 44
- Working tree summary: 5 modifieds
## Tracked Snapshots
- lib/cms.ts | 215 lines | 5824 chars | hash 3b57281655f0
  Last snapshot: 2026-10-27T00:27:42.144Z
  Preview: "// lib/cms.ts / export async function getPageData() { / const query = ` / query GetConfiguratorPage { / page(id: "28", idType: DATABASE_ID) { / sections { / hero { / subtitel / titel / omschrijving / afbeelding { / no..."
- components/configurator/StepTwoDesign.tsx | 136 lines | 5624 chars | hash 1ca9595154e4
  Last snapshot: 2026-10-27T00:27:37.847Z
  Preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / export default function StepTwoDesign({ / stepTitle, / configuratorData, / designPakket,..."
- components/configurator/StepThreeVisuals.tsx | 263 lines | 10896 chars | hash 88578395a651
  Last snapshot: 2026-10-26T23:39:45.836Z
  Preview: "'use client'; / import { useState } from 'react'; / import Image from 'next/image'; / export default function StepThreeVisuals({ / stepTitle, / configuratorData, / designPakket / }: any) { / const rawPakketten = / con..."
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
- components/VoucherWelcomeModal.tsx | 96 lines | 3533 chars | hash b0287afaa956
  Last snapshot: 2026-10-15T12:55:29.900Z
  Preview: "'use client'; / import { useState, useEffect } from 'react'; / import { useSearchParams, useRouter } from 'next/navigation'; / import Button from './Button'; / export default function VoucherWelcomeModal() { / const s..."

## Recent Changes
### 2026-10-27T00:27:42.144Z | saved | lib/cms.ts
- Summary: Line 97: replaced 1 line with 1 line.
- Before: 215 lines | 5,823 chars | hash 7943584eac3d | preview: "// lib/cms.ts / export async function getPageData() { / const query = ` / query GetConfiguratorPage { / page(id: "28", idType: DATABASE_ID) { / sections { / hero { / subtitel / titel / omschrijving / afbeelding { / no..."
- After: 215 lines | 5,824 chars | hash 3b57281655f0 | preview: "// lib/cms.ts / export async function getPageData() { / const query = ` / query GetConfiguratorPage { / page(id: "28", idType: DATABASE_ID) { / sections { / hero { / subtitel / titel / omschrijving / afbeelding { / no..."
- Previous fragment: "pa"
- Current fragment: "Pak"

### 2026-10-27T00:27:37.847Z | saved | components/configurator/StepTwoDesign.tsx
- Summary: Line 28: replaced 1 line with 1 line.
- Before: 136 lines | 5,622 chars | hash ffea82492dbf | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / export default function StepTwoDesign({ / stepTitle, / configuratorData, / designPakket,..."
- After: 136 lines | 5,624 chars | hash 1ca9595154e4 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / export default function StepTwoDesign({ / stepTitle, / configuratorData, / designPakket,..."
- Previous fragment: "const rawPakketten = configuratorData?.designp"
- Current fragment: "const rawPakketten = configuratorData?.designP"

### 2026-10-27T00:27:34.751Z | saved | components/configurator/StepTwoDesign.tsx
- Summary: Line 28: removed 1 line.
- Before: 136 lines | 5,624 chars | hash 80cbbcb8c846 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / export default function StepTwoDesign({ / stepTitle, / configuratorData, / designPakket,..."
- After: 136 lines | 5,622 chars | hash ffea82492dbf | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / export default function StepTwoDesign({ / stepTitle, / configuratorData, / designPakket,..."

### 2026-10-27T00:25:56.740Z | saved | components/configurator/StepTwoDesign.tsx
- Summary: Line 28: replaced 1 line with 1 line.
- Before: 136 lines | 5,624 chars | hash 1ca9595154e4 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / export default function StepTwoDesign({ / stepTitle, / configuratorData, / designPakket,..."
- After: 136 lines | 5,624 chars | hash 80cbbcb8c846 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / export default function StepTwoDesign({ / stepTitle, / configuratorData, / designPakket,..."
- Previous fragment: "P"
- Current fragment: "p"

### 2026-10-27T00:25:40.564Z | saved | lib/cms.ts
- Summary: Saved without a textual diff.
- Before: 215 lines | 5,823 chars | hash 7943584eac3d | preview: "// lib/cms.ts / export async function getPageData() { / const query = ` / query GetConfiguratorPage { / page(id: "28", idType: DATABASE_ID) { / sections { / hero { / subtitel / titel / omschrijving / afbeelding { / no..."
- After: 215 lines | 5,823 chars | hash 7943584eac3d | preview: "// lib/cms.ts / export async function getPageData() { / const query = ` / query GetConfiguratorPage { / page(id: "28", idType: DATABASE_ID) { / sections { / hero { / subtitel / titel / omschrijving / afbeelding { / no..."

### 2026-10-27T00:23:45.427Z | saved | lib/cms.ts
- Summary: Line 97: replaced 1 line with 1 line.
- Before: 215 lines | 5,824 chars | hash 3b57281655f0 | preview: "// lib/cms.ts / export async function getPageData() { / const query = ` / query GetConfiguratorPage { / page(id: "28", idType: DATABASE_ID) { / sections { / hero { / subtitel / titel / omschrijving / afbeelding { / no..."
- After: 215 lines | 5,823 chars | hash 7943584eac3d | preview: "// lib/cms.ts / export async function getPageData() { / const query = ` / query GetConfiguratorPage { / page(id: "28", idType: DATABASE_ID) { / sections { / hero { / subtitel / titel / omschrijving / afbeelding { / no..."
- Previous fragment: "Pak"
- Current fragment: "pa"

### 2026-10-27T00:11:41.078Z | saved | components/configurator/StepTwoDesign.tsx
- Summary: Line 13: inserted 2 lines.
- Before: 135 lines | 5,562 chars | hash 02539b1ab342 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / export default function StepTwoDesign({ / stepTitle, / configuratorData, / designPakket,..."
- After: 136 lines | 5,624 chars | hash 1ca9595154e4 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / export default function StepTwoDesign({ / stepTitle, / configuratorData, / designPakket,..."
- Current fragment: "ole.log("Stap 2 configuratorData:", configuratorData); / cons"

### 2026-10-27T00:08:29.259Z | saved | lib/cms.ts
- Summary: Line 97: inserted 1 line.
- Before: 215 lines | 5,823 chars | hash add39ca44442 | preview: "// lib/cms.ts / export async function getPageData() { / const query = ` / query GetConfiguratorPage { / page(id: "28", idType: DATABASE_ID) { / sections { / hero { / subtitel / titel / omschrijving / afbeelding { / no..."
- After: 215 lines | 5,824 chars | hash 3b57281655f0 | preview: "// lib/cms.ts / export async function getPageData() { / const query = ` / query GetConfiguratorPage { / page(id: "28", idType: DATABASE_ID) { / sections { / hero { / subtitel / titel / omschrijving / afbeelding { / no..."
- Current fragment: "k"

### 2026-10-27T00:05:34.241Z | saved | lib/cms.ts
- Summary: Saved without a textual diff.
- Before: 215 lines | 5,823 chars | hash add39ca44442 | preview: "// lib/cms.ts / export async function getPageData() { / const query = ` / query GetConfiguratorPage { / page(id: "28", idType: DATABASE_ID) { / sections { / hero { / subtitel / titel / omschrijving / afbeelding { / no..."
- After: 215 lines | 5,823 chars | hash add39ca44442 | preview: "// lib/cms.ts / export async function getPageData() { / const query = ` / query GetConfiguratorPage { / page(id: "28", idType: DATABASE_ID) { / sections { / hero { / subtitel / titel / omschrijving / afbeelding { / no..."

### 2026-10-27T00:05:29.102Z | saved | lib/cms.ts
- Summary: Line 97: replaced 1 line with 1 line.
- Before: 215 lines | 5,824 chars | hash 305c860c6d40 | preview: "// lib/cms.ts / export async function getPageData() { / const query = ` / query GetConfiguratorPage { / page(id: "28", idType: DATABASE_ID) { / sections { / hero { / subtitel / titel / omschrijving / afbeelding { / no..."
- After: 215 lines | 5,823 chars | hash add39ca44442 | preview: "// lib/cms.ts / export async function getPageData() { / const query = ` / query GetConfiguratorPage { / page(id: "28", idType: DATABASE_ID) { / sections { / hero { / subtitel / titel / omschrijving / afbeelding { / no..."
- Previous fragment: "_p"
- Current fragment: "P"

### 2026-10-27T00:03:21.804Z | saved | lib/cms.ts
- Summary: Line 97: replaced 1 line with 1 line.
- Before: 215 lines | 5,823 chars | hash add39ca44442 | preview: "// lib/cms.ts / export async function getPageData() { / const query = ` / query GetConfiguratorPage { / page(id: "28", idType: DATABASE_ID) { / sections { / hero { / subtitel / titel / omschrijving / afbeelding { / no..."
- After: 215 lines | 5,824 chars | hash 305c860c6d40 | preview: "// lib/cms.ts / export async function getPageData() { / const query = ` / query GetConfiguratorPage { / page(id: "28", idType: DATABASE_ID) { / sections { / hero { / subtitel / titel / omschrijving / afbeelding { / no..."
- Previous fragment: "P"
- Current fragment: "_p"

### 2026-10-26T23:59:24.462Z | saved | components/configurator/StepTwoDesign.tsx
- Summary: Line 24: replaced 25 lines with 23 lines.
- Before: 137 lines | 5,707 chars | hash ab8329f59817 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / export default function StepTwoDesign({ / stepTitle, / configuratorData, / designPakket,..."
- After: 135 lines | 5,562 chars | hash 02539b1ab342 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / export default function StepTwoDesign({ / stepTitle, / configuratorData, / designPakket,..."
- Previous fragment: "1 || configuratorData?.titelStap2 || 'Kies uw designpakket'; / const omschrijving = configuratorData?.stap2omschrijving || ''; / // Direct gekoppeld aan de juiste array uit de c..."
- Current fragment: "2 || 'Kies uw designpakket'; / const omschrijving = configuratorData?.stap2omschrijving || ''; / const rawPakketten = configuratorData?.designPaketten || []; / const pakkettenLi..."

### 2026-10-26T23:59:14.045Z | saved | lib/cms.ts
- Summary: Line 97: replaced 31 lines with 23 lines.
- Before: 223 lines | 6,051 chars | hash 188db5995315 | preview: "// lib/cms.ts / export async function getPageData() { / const query = ` / query GetConfiguratorPage { / page(id: "28", idType: DATABASE_ID) { / sections { / hero { / subtitel / titel / omschrijving / afbeelding { / no..."
- After: 215 lines | 5,823 chars | hash add39ca44442 | preview: "// lib/cms.ts / export async function getPageData() { / const query = ` / query GetConfiguratorPage { / page(id: "28", idType: DATABASE_ID) { / sections { / hero { / subtitel / titel / omschrijving / afbeelding { / no..."
- Previous fragment: "ketten { / pakketId / pakketTitel / pakketOmschrijving / pakketAabeelding { / node { / sourceUrl / } / } / stap3Omschrijving / visualsSlider { / nodes { / sourceUrl / } / } / ma..."
- Current fragment: "etten { / pakketId / pakketTitel / pakketOmschrijving / pakketAabeelding { / node { / sourceUrl / } / } / stap3Omschrijving / visualsSlider { / nodes { / sourceUrl / } / } / mat..."

### 2026-10-26T23:56:51.668Z | saved | lib/cms.ts
- Summary: Line 63: replaced 57 lines with 65 lines.
- Before: 215 lines | 5,826 chars | hash 2eac94d030e5 | preview: "// lib/cms.ts / export async function getPageData() { / const query = ` / query GetConfiguratorPage { / page(id: "28", idType: DATABASE_ID) { / sections { / hero { / subtitel / titel / omschrijving / afbeelding { / no..."
- After: 223 lines | 6,051 chars | hash 188db5995315 | preview: "// lib/cms.ts / export async function getPageData() { / const query = ` / query GetConfiguratorPage { / page(id: "28", idType: DATABASE_ID) { / sections { / hero { / subtitel / titel / omschrijving / afbeelding { / no..."
- Previous fragment: "mediaItemUrl / } / } / } / downloadCategorie { / categorieTitel / bestandenLijst { / bestandTitel / uploadBestand { / node { / sourceUrl / mediaItemUrl / fileSize / mimeType / }..."
- Current fragment: "mediaItemUrl / } / } / } / downloadCategorie { / categorieTitel / bestandenLijst { / bestandTitel / uploadBestand { / node { / sourceUrl / mediaItemUrl / fileSize / mimeType / }..."

### 2026-10-26T23:55:49.640Z | saved | lib/cms.ts
- Summary: Line 63: replaced 65 lines with 57 lines.
- Before: 223 lines | 6,051 chars | hash 188db5995315 | preview: "// lib/cms.ts / export async function getPageData() { / const query = ` / query GetConfiguratorPage { / page(id: "28", idType: DATABASE_ID) { / sections { / hero { / subtitel / titel / omschrijving / afbeelding { / no..."
- After: 215 lines | 5,826 chars | hash 2eac94d030e5 | preview: "// lib/cms.ts / export async function getPageData() { / const query = ` / query GetConfiguratorPage { / page(id: "28", idType: DATABASE_ID) { / sections { / hero { / subtitel / titel / omschrijving / afbeelding { / no..."
- Previous fragment: "mediaItemUrl / } / } / } / downloadCategorie { / categorieTitel / bestandenLijst { / bestandTitel / uploadBestand { / node { / sourceUrl / mediaItemUrl / fileSize / mimeType / }..."
- Current fragment: "mediaItemUrl / } / } / } / downloadCategorie { / categorieTitel / bestandenLijst { / bestandTitel / uploadBestand { / node { / sourceUrl / mediaItemUrl / fileSize / mimeType / }..."


## Hot Files
- lib/cms.ts (12 tracked changes)
- components/configurator/StepTwoDesign.tsx (8 tracked changes)
- components/configurator/StepOnewoning.tsx (5 tracked changes)
- components/VoucherWelcomeModal.tsx (4 tracked changes)
- components/ConfiguratorScreen.tsx (3 tracked changes)
- app/voucher/page.tsx (2 tracked changes)
- components/configurator/StepThreeVisuals.tsx (2 tracked changes)
- components/MainContent.tsx (2 tracked changes)

## Git Snapshot
- Branch: main
- HEAD: 2026-10-27 138681e fix(cms): update designpaketten graphql field name to lowercase matching schema
- Working tree summary: 5 modifieds
- M components/configurator/StepTwoDesign.tsx
- M graphify-out/WORKSPACE_MEMORY.md
- M lib/cms.ts
- M workspace.json
- M workspacememory.md

## GitHub Snapshot
GitHub Repository: marketing-smartheads/nomi-configurator
Visibility: public | Default branch: main
Stars: 0 | Forks: 0 | Open issues: 0

Latest commit on main:
- 05f9ec8 by Bas van Dooremalen on 2026-10-27
  debug config data

URL: https://github.com/marketing-smartheads/nomi-configurator

## Graphify Snapshot
Graphify report not found. Generate Graphify output if you want architecture-aware memory excerpts here.

## Project Planner
- Project planner is not configured yet. Enable it in the chat panel to generate a time-based todo list and progress rescue briefs.

## Agent Notes
- If a future task asks what changed recently, start with `Recent Changes`, `Tracked Snapshots`, `Hot Files`, and `Git Snapshot`.
- If a future task asks how the project is organized, combine this file with `graphify-out/GRAPH_REPORT.md`.
- If a future task needs repository-level context, use `Package Snapshot`, the GitHub snapshot, and the Graphify snapshot before rescanning broad parts of the repo.
