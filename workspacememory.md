# Workspace Memory
This file is maintained automatically by Code Janitor so Claude, Codex, Bob, and any other AI agent can reuse repo context without rescanning everything from scratch.
Generated: 2026-09-08T09:40:57.544Z
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
- Last activity: 2026-09-08T09:40:55.224Z
## Workspace Focus
- Active file in focus: app/dashboard/page.tsx
- Hottest files right now: components/MainContent.tsx (16), app/dashboard/page.tsx (5), lib/useConfigurator.ts (5), app/api/vouchers/route.ts (4)
- Suggested starting points: app/dashboard/page.tsx, components/MainContent.tsx, lib/useConfigurator.ts, app/api/vouchers/route.ts, app/download/page.tsx, components/LoginScreen.tsx
## Current Workspace
- Active file: app/dashboard/page.tsx
- Tracked files in snapshot: 62
- Top-level areas: public (20), [root] (15), components (15), app (9), lib (3)
- Primary file types: .tsx (19), .svg (11), .ts (9), .json (4), .md (4), .woff (4), .woff2 (4), .mjs (2)
- Key files: .gitignore, AGENTS.md, README.md, package-lock.json, package.json, tsconfig.json
## Package Snapshot
- Package: tg-configurator v0.1.0
- Package manager: not declared
- Scripts: dev, build, start, lint
- Runtime dependencies: client-zip, next, react, react-dom, react-player, resend
- Dev dependencies: @tailwindcss/postcss, @types/node, @types/react, @types/react-dom, eslint, eslint-config-next, tailwindcss, typescript
## Current Stack
- Logged change events: 40
- Change mix: save (40)
- Remembered file snapshots: 38
- Working tree summary: 12 modifieds, 4 untrackeds
## Tracked Snapshots
- app/api/confirm/route.ts | 322 lines | 11980 chars | hash 5a7eaeff8b09
  Last snapshot: 2026-09-08T09:30:39.016Z
  Preview: "import { NextResponse } from 'next/server'; / import { Resend } from 'resend'; / const resend = new Resend(process.env.RESEND_API_KEY); / export async function POST(request: Request) { / try { / const body = await req..."
- components/LoginScreen.tsx | 273 lines | 10005 chars | hash d21d8749caec
  Last snapshot: 2026-09-08T09:22:29.649Z
  Preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / import Button from './Button'; / import { useRouter } from 'next/navigation'; / interfac..."
- components/MainContent.tsx | 201 lines | 8109 chars | hash 9d2082a0d5c9
  Last snapshot: 2026-09-08T08:21:47.503Z
  Preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useConfigurator } from '../lib/useConfigurator'; / import LoginScreen from '../components/LoginScreen'; / impor..."
- components/Header.tsx | 179 lines | 7828 chars | hash be2c0465cf4b
  Last snapshot: 2026-09-08T07:48:23.044Z
  Preview: "'use client'; / import React, { useState, useRef, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / interface HeaderProps { / onStart?: () => void; / currentScreen: 'welcome..."
- app/download/page.tsx | 359 lines | 14508 chars | hash 9a689d5e6b7c
  Last snapshot: 2026-09-08T07:40:14.543Z
  Preview: "'use client'; / import { useState, useEffect } from 'react'; / import { useRouter } from 'next/navigation'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / import { getPageDat..."
- lib/useConfigurator.ts | 170 lines | 5134 chars | hash 0e3e8bd2cac5
  Last snapshot: 2026-09-08T07:31:04.034Z
  Preview: "'use client'; / import { useState, useEffect } from 'react'; / type ScreenType = 'welcome' | 'configurator' | 'download' | 'login'; / export function useConfigurator() { / const [screen, setScreenState] = useState<Scr..."
- app/dashboard/page.tsx | 300 lines | 13649 chars | hash 34e0868128fd
  Last snapshot: 2026-09-06T21:18:51.893Z
  Preview: "'use client'; / import React, { useState, useEffect } from 'react'; / import Header from '@/components/Header'; / import Footer from '@/components/Footer'; / export default function DashboardPage() { / const [isLogged..."
- app/api/vouchers/route.ts | 51 lines | 1537 chars | hash 8e387415497b
  Last snapshot: 2026-09-06T21:16:24.977Z
  Preview: "import { NextResponse } from 'next/server'; / export async function GET() { / try { / const endpoint = process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT || ''; / const wpUser = process.env.WORDPRESS_AUTH_USER; / cons..."

## Recent Changes
### 2026-09-08T09:40:55.224Z | saved | app/dashboard/page.tsx

### 2026-09-08T09:30:39.016Z | saved | app/api/confirm/route.ts
- Summary: Saved without a textual diff.
- Before: 322 lines | 11,980 chars | hash 5a7eaeff8b09 | preview: "import { NextResponse } from 'next/server'; / import { Resend } from 'resend'; / const resend = new Resend(process.env.RESEND_API_KEY); / export async function POST(request: Request) { / try { / const body = await req..."
- After: 322 lines | 11,980 chars | hash 5a7eaeff8b09 | preview: "import { NextResponse } from 'next/server'; / import { Resend } from 'resend'; / const resend = new Resend(process.env.RESEND_API_KEY); / export async function POST(request: Request) { / try { / const body = await req..."

### 2026-09-08T09:22:29.649Z | saved | components/LoginScreen.tsx
- Summary: Line 31: replaced 98 lines with 114 lines.
- Before: 257 lines | 9,789 chars | hash a6f90896b58b | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / import Button from './Button'; / import { useRouter } from 'next/navigation'; / interfac..."
- After: 273 lines | 10,005 chars | hash d21d8749caec | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / import Button from './Button'; / import { useRouter } from 'next/navigation'; / interfac..."
- Previous fragment: "// Lokaal foutmelding-statusje voor de check / useEffect(() => { / if (typeof window !== 'undefined') { / const confirmed = sessionStorage.getItem('configuratorConfirmed'); / if..."
- Current fragment: "useEffect(() => { / if (typeof window !== 'undefined') { / const confirmed = sessionStorage.getItem('configuratorConfirmed'); / if (confirmed === 'true') { / setIsReedsBevestigd..."

### 2026-09-08T09:19:15.780Z | saved | components/LoginScreen.tsx
- Summary: Saved without a textual diff.
- Before: 257 lines | 9,789 chars | hash a6f90896b58b | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / import Button from './Button'; / import { useRouter } from 'next/navigation'; / interfac..."
- After: 257 lines | 9,789 chars | hash a6f90896b58b | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / import Button from './Button'; / import { useRouter } from 'next/navigation'; / interfac..."

### 2026-09-08T08:21:47.503Z | saved | components/MainContent.tsx
- Summary: Line 143: replaced 14 lines with 13 lines.
- Before: 202 lines | 8,346 chars | hash b667a04f851b | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useConfigurator } from '../lib/useConfigurator'; / import LoginScreen from '../components/LoginScreen'; / impor..."
- After: 201 lines | 8,109 chars | hash 9d2082a0d5c9 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useConfigurator } from '../lib/useConfigurator'; / import LoginScreen from '../components/LoginScreen'; / impor..."
- Previous fragment: "{/* De configurator is altijd zichtbaar op de achtergrond */} / <ConfiguratorScreen / woningType={woningType} / setWoningType={setWoningType} / designPakket={designPakket} / set..."
- Current fragment: "<ConfiguratorScreen / woningType={woningType} / setWoningType={setWoningType} / designPakket={designPakket} / setDesignPakket={setDesignPakket} / loading={loading} / onBack={han..."

### 2026-09-08T08:21:40.752Z | saved | components/MainContent.tsx
- Summary: Line 158: replaced 1 line with 1 line.
- Before: 202 lines | 8,347 chars | hash 7a65aa2d7472 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useConfigurator } from '../lib/useConfigurator'; / import LoginScreen from '../components/LoginScreen'; / impor..."
- After: 202 lines | 8,346 chars | hash b667a04f851b | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useConfigurator } from '../lib/useConfigurator'; / import LoginScreen from '../components/LoginScreen'; / impor..."
- Previous fragment: "center"
- Current fragment: "start"

### 2026-09-08T08:11:59.863Z | saved | components/MainContent.tsx
- Summary: Saved without a textual diff.
- Before: 202 lines | 8,405 chars | hash af962c5b9001 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useConfigurator } from '../lib/useConfigurator'; / import LoginScreen from '../components/LoginScreen'; / impor..."
- After: 202 lines | 8,405 chars | hash af962c5b9001 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useConfigurator } from '../lib/useConfigurator'; / import LoginScreen from '../components/LoginScreen'; / impor..."

### 2026-09-08T08:06:31.315Z | saved | components/MainContent.tsx
- Summary: Line 155: replaced 9 lines with 6 lines.
- Before: 204 lines | 8,396 chars | hash 58616399cfb9 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useConfigurator } from '../lib/useConfigurator'; / import LoginScreen from '../components/LoginScreen'; / impor..."
- After: 201 lines | 8,279 chars | hash 8cab645d03a6 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useConfigurator } from '../lib/useConfigurator'; / import LoginScreen from '../components/LoginScreen'; / impor..."
- Previous fragment: "Geen FIXED meer! / - absolute inset-0 bedekt PRECIES de configurator (en dus niet de header/footer). / - sticky top-32 zorgt dat de melding mooi in beeld blijft plakken tijdens..."
- Current fragment: "Absolute overlay met flex en verticale padding (py-24) zodat er zowel boven als onder ruimte overblijft */} / {isReedsBevestigd && ( / <div className="absolute inset-0 z-40 flex..."

### 2026-09-08T08:04:49.535Z | saved | components/MainContent.tsx
- Summary: Line 155: replaced 7 lines with 9 lines.
- Before: 202 lines | 8,394 chars | hash b0a5ce014440 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useConfigurator } from '../lib/useConfigurator'; / import LoginScreen from '../components/LoginScreen'; / impor..."
- After: 204 lines | 8,396 chars | hash 58616399cfb9 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useConfigurator } from '../lib/useConfigurator'; / import LoginScreen from '../components/LoginScreen'; / impor..."
- Previous fragment: "Vaste overlay over het hele scherm met pointer-events-none zodat header en footer klikbaar blijven */} / {isReedsBevestigd && ( / <div className="relative inset-0 z-40 flex item..."
- Current fragment: "Geen FIXED meer! / - absolute inset-0 bedekt PRECIES de configurator (en dus niet de header/footer). / - sticky top-32 zorgt dat de melding mooi in beeld blijft plakken tijdens..."

### 2026-09-08T08:04:28.645Z | saved | components/MainContent.tsx
- Summary: Line 157: replaced 1 line with 1 line.
- Before: 202 lines | 8,391 chars | hash 6e19624bacc0 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useConfigurator } from '../lib/useConfigurator'; / import LoginScreen from '../components/LoginScreen'; / impor..."
- After: 202 lines | 8,394 chars | hash b0a5ce014440 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useConfigurator } from '../lib/useConfigurator'; / import LoginScreen from '../components/LoginScreen'; / impor..."
- Previous fragment: "fixed"
- Current fragment: "relative"

### 2026-09-08T08:03:46.780Z | saved | components/MainContent.tsx
- Summary: Line 155: replaced 6 lines with 7 lines.
- Before: 201 lines | 8,284 chars | hash fc52bed9cd3b | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useConfigurator } from '../lib/useConfigurator'; / import LoginScreen from '../components/LoginScreen'; / impor..."
- After: 202 lines | 8,391 chars | hash 6e19624bacc0 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useConfigurator } from '../lib/useConfigurator'; / import LoginScreen from '../components/LoginScreen'; / impor..."
- Previous fragment: "die precies onder de header begint en de popup perfect gecentreerd houdt */} / {isReedsBevestigd && ( / <div className="fixed top-24 sm:top-37.5 left-0 right-0 bottom-0 z-40 fle..."
- Current fragment: "over het hele scherm met pointer-events-none zodat header en footer klikbaar blijven */} / {isReedsBevestigd && ( / <div className="fixed inset-0 z-40 flex items-center justify-..."

### 2026-09-08T08:03:06.245Z | saved | components/MainContent.tsx
- Summary: Line 155: replaced 3 lines with 3 lines.
- Before: 201 lines | 8,204 chars | hash 26bca97a6b01 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useConfigurator } from '../lib/useConfigurator'; / import LoginScreen from '../components/LoginScreen'; / impor..."
- After: 201 lines | 8,284 chars | hash fc52bed9cd3b | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useConfigurator } from '../lib/useConfigurator'; / import LoginScreen from '../components/LoginScreen'; / impor..."
- Previous fragment: "Blur overlay en reeds gebruikt melding */} / {isReedsBevestigd && ( / <div className="absolute inset"
- Current fragment: "Vaste overlay die precies onder de header begint en de popup perfect gecentreerd houdt */} / {isReedsBevestigd && ( / <div className="fixed top-24 sm:top-37.5 left-0 right-0 bottom"

### 2026-09-08T08:00:54.494Z | saved | components/MainContent.tsx
- Summary: Line 134: replaced 47 lines with 52 lines.
- Before: 196 lines | 7,858 chars | hash f523f44da0a2 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useConfigurator } from '../lib/useConfigurator'; / import LoginScreen from '../components/LoginScreen'; / impor..."
- After: 201 lines | 8,204 chars | hash 26bca97a6b01 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useConfigurator } from '../lib/useConfigurator'; / import LoginScreen from '../components/LoginScreen'; / impor..."
- Previous fragment: ""> / {screen === 'welcome' && ( / <div className="flex flex-col items-center justify-center flex-grow"> / <WelcomeScreen onStart={() => setScreen('configurator')} /> / </div> /..."
- Current fragment: "relative"> / {screen === 'welcome' && ( / <div className="flex flex-col items-center justify-center flex-grow"> / <WelcomeScreen onStart={() => setScreen('configurator')} /> / <..."

### 2026-09-08T07:59:12.143Z | saved | components/MainContent.tsx
- Summary: Line 141: replaced 55 lines with 53 lines.
- Before: 198 lines | 7,955 chars | hash 535fbf6baa5a | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useConfigurator } from '../lib/useConfigurator'; / import LoginScreen from '../components/LoginScreen'; / impor..."
- After: 196 lines | 7,858 chars | hash f523f44da0a2 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useConfigurator } from '../lib/useConfigurator'; / import LoginScreen from '../components/LoginScreen'; / impor..."
- Previous fragment: "( / <ConfiguratorScreen / woningType={woningType} / setWoningType={setWoningType} / designPakket={designPakket} / setDesignPakket={setDesignPakket} / loading={loading} / onBack=..."
- Current fragment: "!isReedsBevestigd && ( / <ConfiguratorScreen / woningType={woningType} / setWoningType={setWoningType} / designPakket={designPakket} / setDesignPakket={setDesignPakket} / loadin..."

### 2026-09-08T07:56:27.662Z | saved | components/MainContent.tsx
- Summary: Line 168: replaced 1 line with 1 line.
- Before: 198 lines | 7,990 chars | hash 0391e094e8a4 | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useConfigurator } from '../lib/useConfigurator'; / import LoginScreen from '../components/LoginScreen'; / impor..."
- After: 198 lines | 7,955 chars | hash 535fbf6baa5a | preview: "'use client'; / import { useState, useEffect } from 'react'; / import Image from 'next/image'; / import { useConfigurator } from '../lib/useConfigurator'; / import LoginScreen from '../components/LoginScreen'; / impor..."
- Previous fragment: "top-24 sm:top-37.5 left-0 right-0 bottom"
- Current fragment: "inset"


## Hot Files
- components/MainContent.tsx (16 tracked changes)
- app/dashboard/page.tsx (5 tracked changes)
- lib/useConfigurator.ts (5 tracked changes)
- app/api/vouchers/route.ts (4 tracked changes)
- app/download/page.tsx (4 tracked changes)
- components/LoginScreen.tsx (3 tracked changes)
- components/Header.tsx (2 tracked changes)
- app/api/confirm/route.ts (1 tracked changes)

## Git Snapshot
- Branch: main
- HEAD: 2026-08-26 be78d03 Trigger Vercel deploy
- Working tree summary: 12 modifieds, 4 untrackeds
- M app/download/page.tsx
- M app/globals.css
- M components/LoginScreen.tsx
- M components/MainContent.tsx
- M components/configurator/StepFourConfirmation.tsx
- M graphify-out/WORKSPACE_MEMORY.md
- M lib/cms.ts
- M lib/useConfigurator.ts
- M package-lock.json
- M package.json
- M workspace.json
- M workspacememory.md
- Additional git status lines were omitted for brevity.

## GitHub Snapshot
GitHub Repository: marketing-smartheads/nomi-configurator
Visibility: public | Default branch: main
Stars: 0 | Forks: 0 | Open issues: 0

Latest commit on main:
- be78d03 by Bas van Dooremalen on 2026-08-25
  Trigger Vercel deploy

URL: https://github.com/marketing-smartheads/nomi-configurator

## Graphify Snapshot
Graphify report not found. Generate Graphify output if you want architecture-aware memory excerpts here.

## Project Planner
- Project planner is not configured yet. Enable it in the chat panel to generate a time-based todo list and progress rescue briefs.

## Agent Notes
- If a future task asks what changed recently, start with `Recent Changes`, `Tracked Snapshots`, `Hot Files`, and `Git Snapshot`.
- If a future task asks how the project is organized, combine this file with `graphify-out/GRAPH_REPORT.md`.
- If a future task needs repository-level context, use `Package Snapshot`, the GitHub snapshot, and the Graphify snapshot before rescanning broad parts of the repo.
