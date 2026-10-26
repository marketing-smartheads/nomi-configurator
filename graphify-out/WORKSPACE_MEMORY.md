# Workspace Memory
This file is maintained automatically by Code Janitor so Claude, Codex, Bob, and any other AI agent can reuse repo context without rescanning everything from scratch.
Generated: 2026-10-26T23:53:00.739Z
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
- Last activity: 2026-10-26T23:52:58.919Z
## Workspace Focus
- Active file in focus: lib/cms.ts
- Hottest files right now: components/configurator/StepOnewoning.tsx (10), components/ConfiguratorScreen.tsx (8), components/configurator/StepTwoDesign.tsx (4), components/VoucherWelcomeModal.tsx (4)
- Suggested starting points: lib/cms.ts, components/configurator/StepOnewoning.tsx, components/ConfiguratorScreen.tsx, components/configurator/StepTwoDesign.tsx, components/VoucherWelcomeModal.tsx, app/voucher/page.tsx
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
- Change mix: save (36), create (4)
- Remembered file snapshots: 44
- Working tree summary: 1 modified
## Tracked Snapshots
- lib/cms.ts | 223 lines | 6051 chars | hash 188db5995315
  Last snapshot: 2026-10-26T23:52:58.919Z
  Preview: "// lib/cms.ts / export async function getPageData() { / const query = ` / query GetConfiguratorPage { / page(id: "28", idType: DATABASE_ID) { / sections { / hero { / subtitel / titel / omschrijving / afbeelding { / no..."
- components/configurator/StepTwoDesign.tsx | 137 lines | 5707 chars | hash ab8329f59817
  Last snapshot: 2026-10-26T23:45:32.193Z
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
### 2026-10-26T23:52:58.919Z | saved | lib/cms.ts
- Summary: Line 97: inserted 1 line.
- Before: 223 lines | 6,050 chars | hash 117d3c6ee43c | preview: "// lib/cms.ts / export async function getPageData() { / const query = ` / query GetConfiguratorPage { / page(id: "28", idType: DATABASE_ID) { / sections { / hero { / subtitel / titel / omschrijving / afbeelding { / no..."
- After: 223 lines | 6,051 chars | hash 188db5995315 | preview: "// lib/cms.ts / export async function getPageData() { / const query = ` / query GetConfiguratorPage { / page(id: "28", idType: DATABASE_ID) { / sections { / hero { / subtitel / titel / omschrijving / afbeelding { / no..."
- Current fragment: "k"

### 2026-10-26T23:51:13.866Z | saved | lib/cms.ts
- Summary: Line 97: removed 1 line.
- Before: 223 lines | 6,051 chars | hash 188db5995315 | preview: "// lib/cms.ts / export async function getPageData() { / const query = ` / query GetConfiguratorPage { / page(id: "28", idType: DATABASE_ID) { / sections { / hero { / subtitel / titel / omschrijving / afbeelding { / no..."
- After: 223 lines | 6,050 chars | hash 117d3c6ee43c | preview: "// lib/cms.ts / export async function getPageData() { / const query = ` / query GetConfiguratorPage { / page(id: "28", idType: DATABASE_ID) { / sections { / hero { / subtitel / titel / omschrijving / afbeelding { / no..."
- Previous fragment: "k"

### 2026-10-26T23:45:32.193Z | saved | components/configurator/StepTwoDesign.tsx
- Summary: Line 13: replaced 90 lines with 82 lines.
- Before: 145 lines | 6,072 chars | hash 4bdb3c1429b0 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / export default function StepTwoDesign({ / stepTitle, / configuratorData, / designPakket,..."
- After: 137 lines | 5,707 chars | hash ab8329f59817 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / export default function StepTwoDesign({ / stepTitle, / configuratorData, / designPakket,..."
- Previous fragment: "ole.log("DEBUG configuratorData:", configuratorData); / const [isConfirmed, setIsConfirmed] = useState(false); / useEffect(() => { / if (typeof window !== 'undefined') { / const..."
- Current fragment: "t [isConfirmed, setIsConfirmed] = useState(false); / useEffect(() => { / if (typeof window !== 'undefined') { / const confirmedStatus = localStorage.getItem('configuratorConfirm..."

### 2026-10-26T23:39:45.836Z | saved | components/configurator/StepThreeVisuals.tsx
- Summary: Line 11: replaced 216 lines with 222 lines.
- Before: 257 lines | 10,594 chars | hash efc95a224145 | preview: "'use client'; / import { useState } from 'react'; / import Image from 'next/image'; / export default function StepThreeVisuals({ / stepTitle, / configuratorData, / designPakket / }: any) { / const rawPakketten = confi..."
- After: 263 lines | 10,896 chars | hash 88578395a651 | preview: "'use client'; / import { useState } from 'react'; / import Image from 'next/image'; / export default function StepThreeVisuals({ / stepTitle, / configuratorData, / designPakket / }: any) { / const rawPakketten = / con..."
- Previous fragment: "configuratorData?.designPaketten || []; / const pakkettenLijst = Array.isArray(rawPakketten) ? rawPakketten : rawPakketten?.nodes || []; / // Zoek het juiste pakket op basis van..."
- Current fragment: "configuratorData?.designPaketten || / configuratorData?.design_paketten || / configuratorData?.configuratorBeheer?.designPaketten || / configuratorData?.configuratorBeheer?.desi..."

### 2026-10-26T23:39:37.361Z | saved | components/configurator/StepTwoDesign.tsx
- Summary: Line 27: replaced 70 lines with 75 lines.
- Before: 139 lines | 5,834 chars | hash bb8372e6abd6 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / export default function StepTwoDesign({ / stepTitle, / configuratorData, / designPakket,..."
- After: 144 lines | 6,011 chars | hash ee310f80390b | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / export default function StepTwoDesign({ / stepTitle, / configuratorData, / designPakket,..."
- Previous fragment: "Ophalen van de ACF repeater data via de juiste camelCase GraphQL naam / const rawPakketten = configuratorData?.designPaketten || []; / const pakkettenLijst = Array.isArray(rawPa..."
- Current fragment: "Robuuste check om de repeater array op te halen uit elk mogelijk GraphQL-pad / const rawPakketten = / configuratorData?.designPaketten || / configuratorData?.design_paketten ||..."

### 2026-10-26T23:35:09.495Z | saved | components/configurator/StepThreeVisuals.tsx

### 2026-10-26T23:34:59.637Z | saved | components/configurator/StepTwoDesign.tsx
- Summary: Line 7: replaced 119 lines with 98 lines.
- Before: 160 lines | 6,478 chars | hash 46f4d92c2206 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / // Vaste materialenlijsten per designpakket op basis van feedback Thomas de Gier / const..."
- After: 139 lines | 5,834 chars | hash bb8372e6abd6 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / export default function StepTwoDesign({ / stepTitle, / configuratorData, / designPakket,..."
- Previous fragment: "// Vaste materialenlijsten per designpakket op basis van feedback Thomas de Gier / const MATERIALEN_MAP: Record<string, string[]> = { / 'modern raw': [ / 'Travertin look', / 'Be..."
- Current fragment: "export default function StepTwoDesign({ / stepTitle, / configuratorData, / designPakket, / setDesignPakket / }: any) { / const [isConfirmed, setIsConfirmed] = useState(false); /..."

### 2026-10-26T15:22:36.985Z | saved | components/configurator/StepOnewoning.tsx
- Summary: Line 12: replaced 65 lines with 62 lines.
- Before: 106 lines | 4,670 chars | hash c684c361c24a | preview: "'use client'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / selectedIndeling, / setSelectedIndeling / }: any) { / // Filter de lijst op basis van het wo..."
- After: 103 lines | 4,563 chars | hash 3c15fc14d5bc | preview: "'use client'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / selectedIndeling, / setSelectedIndeling / }: any) { / const gefilterdeLijst = woningType / ?..."
- Previous fragment: "// Filter de lijst op basis van het woningtype van de voucher / const gefilterdeLijst = woningType / ? woningTypenLijst.filter((item: any) => { / const typeNaam = item.typeNaam..."
- Current fragment: "const gefilterdeLijst = woningType / ? woningTypenLijst.filter((item: any) => { / const typeNaam = item.typeNaam || item.type_naam || item.titel || ''; / return typeNaam.toLower..."

### 2026-10-26T15:19:19.500Z | saved | lib/useConfigurator.ts
- Summary: Line 38: replaced 129 lines with 150 lines.
- Before: 170 lines | 5,088 chars | hash ca6f0728b2fd | preview: "'use client'; / import { useState, useEffect } from 'react'; / type ScreenType = 'welcome' | 'configurator' | 'download' | 'login'; / export function useConfigurator() { / const [screen, setScreenState] = useState<Scr..."
- After: 191 lines | 5,604 chars | hash 6b9a1c08487a | preview: "'use client'; / import { useState, useEffect } from 'react'; / type ScreenType = 'welcome' | 'configurator' | 'download' | 'login'; / export function useConfigurator() { / const [screen, setScreenState] = useState<Scr..."
- Previous fragment: "toegangscode, setToegangscode] = useState(() => { / if (typeof window !== 'undefined') { / return localStorage.getItem('toegangscode') || ''; / } / return ''; / }); / const [kla..."
- Current fragment: "selectedIndeling, setSelectedIndelingState] = useState<any>(() => { / if (typeof window !== 'undefined') { / const saved = localStorage.getItem('selected_indeling'); / return sa..."

### 2026-10-26T15:16:47.784Z | saved | components/MainContent.tsx
- Summary: Line 27: replaced 128 lines with 125 lines.
- Before: 220 lines | 9,176 chars | hash 2f54f2a9b999 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useConfigurator } from '../lib/useConfigurator'; / import LoginScreen from '../components/LoginScreen'; / impor..."
- After: 217 lines | 8,847 chars | hash ca1e0d747e51 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useConfigurator } from '../lib/useConfigurator'; / import LoginScreen from '../components/LoginScreen'; / impor..."
- Previous fragment: "// <-- TOEGEVOEGD: Ophalen uit de hook / handleLogin, handleSaveChoices / } = useConfigurator(); / const [isMounted, setIsMounted] = useState(false); / const [isReedsBevestigd,..."
- Current fragment: "handleLogin, handleSaveChoices / } = useConfigurator(); / const [isMounted, setIsMounted] = useState(false); / const [isReedsBevestigd, setIsReedsBevestigd] = useState(false); /..."

### 2026-10-26T15:14:54.076Z | saved | components/MainContent.tsx
- Summary: Line 27: replaced 172 lines with 165 lines.
- Before: 227 lines | 9,623 chars | hash f904222d275d | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useConfigurator } from '../lib/useConfigurator'; / import LoginScreen from '../components/LoginScreen'; / impor..."
- After: 220 lines | 9,176 chars | hash 2f54f2a9b999 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useConfigurator } from '../lib/useConfigurator'; / import LoginScreen from '../components/LoginScreen'; / impor..."
- Previous fragment: "handleLogin, handleSaveChoices / } = useConfigurator(); / const [isMounted, setIsMounted] = useState(false); / const [isReedsBevestigd, setIsReedsBevestigd] = useState(false); /..."
- Current fragment: "selectedIndeling, setSelectedIndeling, // <-- TOEGEVOEGD: Ophalen uit de hook / handleLogin, handleSaveChoices / } = useConfigurator(); / const [isMounted, setIsMounted] = useSt..."

### 2026-10-26T15:10:32.454Z | saved | components/ConfiguratorScreen.tsx
- Summary: Saved without a textual diff.
- Before: 250 lines | 9,599 chars | hash 6af3f7e817b2 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Button from './Button'; / import StepOneWoning from './configurator/StepOnewoning'; / import StepTwoDesign from './configurator/StepTwoDesign'; / i..."
- After: 250 lines | 9,599 chars | hash 6af3f7e817b2 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Button from './Button'; / import StepOneWoning from './configurator/StepOnewoning'; / import StepTwoDesign from './configurator/StepTwoDesign'; / i..."

### 2026-10-26T15:05:54.467Z | saved | components/configurator/StepOnewoning.tsx
- Summary: Line 12: replaced 53 lines with 59 lines.
- Before: 100 lines | 4,443 chars | hash e505e6d9f285 | preview: "'use client'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / selectedIndeling, / setSelectedIndeling / }: any) { / const gefilterdeLijst = woningType / ?..."
- After: 106 lines | 4,670 chars | hash c684c361c24a | preview: "'use client'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / selectedIndeling, / setSelectedIndeling / }: any) { / // Filter de lijst op basis van het wo..."
- Previous fragment: "const gefilterdeLijst = woningType / ? woningTypenLijst.filter((item: any) => { / const typeNaam = item.typeNaam || item.type_naam || item.titel || ''; / return typeNaam.toLower..."
- Current fragment: "// Filter de lijst op basis van het woningtype van de voucher / const gefilterdeLijst = woningType / ? woningTypenLijst.filter((item: any) => { / const typeNaam = item.typeNaam..."

### 2026-10-26T14:59:28.030Z | saved | components/configurator/StepOnewoning.tsx
- Summary: Line 12: replaced 83 lines with 82 lines.
- Before: 101 lines | 4,545 chars | hash 8e0fb7650573 | preview: "'use client'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / selectedIndeling, / setSelectedIndeling / }: any) { / // Filter de lijst op basis van het wo..."
- After: 100 lines | 4,443 chars | hash e505e6d9f285 | preview: "'use client'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / selectedIndeling, / setSelectedIndeling / }: any) { / const gefilterdeLijst = woningType / ?..."
- Previous fragment: "// Filter de lijst op basis van het woningtype van de voucher / const gefilterdeLijst = woningType / ? woningTypenLijst.filter((item: any) => { / const typeNaam = item.typeNaam..."
- Current fragment: "const gefilterdeLijst = woningType / ? woningTypenLijst.filter((item: any) => { / const typeNaam = item.typeNaam || item.type_naam || item.titel || ''; / return typeNaam.toLower..."

### 2026-10-26T14:47:36.836Z | saved | components/configurator/StepOnewoning.tsx
- Summary: Line 52: replaced 13 lines with 14 lines.
- Before: 100 lines | 4,447 chars | hash 99a300fde68a | preview: "'use client'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / selectedIndeling, / setSelectedIndeling / }: any) { / // Filter de lijst op basis van het wo..."
- After: 101 lines | 4,545 chars | hash 8e0fb7650573 | preview: "'use client'; / export default function StepOneWoning({ / stepTitle, / configuratorData, / woningTypenLijst, / woningType, / selectedIndeling, / setSelectedIndeling / }: any) { / // Filter de lijst op basis van het wo..."
- Previous fragment: "const isSelected = selectedIndeling?.indelingTitel === indelingTitel; / return ( / <button / key={indelingTitel + index} / type="button" / onClick={() => setSelectedIndeling(ite..."
- Current fragment: "// Controleer of deze specifieke indeling momenteel geselecteerd is / const isSelected = selectedIndeling?.indelingTitel === indelingTitel || selectedIndeling?.indeling_titel ==..."


## Hot Files
- components/configurator/StepOnewoning.tsx (10 tracked changes)
- components/ConfiguratorScreen.tsx (8 tracked changes)
- components/configurator/StepTwoDesign.tsx (4 tracked changes)
- components/VoucherWelcomeModal.tsx (4 tracked changes)
- app/voucher/page.tsx (2 tracked changes)
- components/configurator/StepThreeVisuals.tsx (2 tracked changes)
- components/MainContent.tsx (2 tracked changes)
- components/VoucherParamHandler.tsx (2 tracked changes)

## Git Snapshot
- Branch: main
- HEAD: 2026-10-27 3bf8fee fix(cms): update graphql query structure for design packages and materials matching backend schema
- Working tree summary: 1 modified
- M lib/cms.ts

## GitHub Snapshot
GitHub Repository: marketing-smartheads/nomi-configurator
Visibility: public | Default branch: main
Stars: 0 | Forks: 0 | Open issues: 0

Latest commit on main:
- 59b954f by Bas van Dooremalen on 2026-10-26
  fix(designpakket): map ACF camelCase subvelden correct voor weergave

URL: https://github.com/marketing-smartheads/nomi-configurator

## Graphify Snapshot
Graphify report not found. Generate Graphify output if you want architecture-aware memory excerpts here.

## Project Planner
- Project planner is not configured yet. Enable it in the chat panel to generate a time-based todo list and progress rescue briefs.

## Agent Notes
- If a future task asks what changed recently, start with `Recent Changes`, `Tracked Snapshots`, `Hot Files`, and `Git Snapshot`.
- If a future task asks how the project is organized, combine this file with `graphify-out/GRAPH_REPORT.md`.
- If a future task needs repository-level context, use `Package Snapshot`, the GitHub snapshot, and the Graphify snapshot before rescanning broad parts of the repo.
