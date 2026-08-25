# Workspace Memory
This file is maintained automatically by Code Janitor so Claude, Codex, Bob, and any other AI agent can reuse repo context without rescanning everything from scratch.
Generated: 2026-08-25T22:51:43.737Z
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
- Last activity: 2026-08-25T22:51:42.028Z
## Workspace Focus
- Active file in focus: app/layout.tsx
- Hottest files right now: components/Footer.tsx (13), components/Header.tsx (6), lib/useConfigurator.ts (4), app/layout.tsx (3)
- Suggested starting points: app/layout.tsx, components/Footer.tsx, components/Header.tsx, lib/useConfigurator.ts, app/download/page.tsx, app/page.tsx
## Current Workspace
- Active file: app/layout.tsx
- Tracked files in snapshot: 58
- Top-level areas: public (20), [root] (15), components (15), app (5), lib (3)
- Primary file types: .tsx (18), .svg (11), .ts (6), .json (4), .md (4), .woff (4), .woff2 (4), .mjs (2)
- Key files: .gitignore, AGENTS.md, README.md, package-lock.json, package.json, tsconfig.json
## Package Snapshot
- Package: tg-configurator v0.1.0
- Package manager: not declared
- Scripts: dev, build, start, lint
- Runtime dependencies: client-zip, next, react, react-dom, react-player
- Dev dependencies: @tailwindcss/postcss, @types/node, @types/react, @types/react-dom, eslint, eslint-config-next, tailwindcss, typescript
## Current Stack
- Logged change events: 40
- Change mix: save (38), create (1), delete (1)
- Remembered file snapshots: 33
- Working tree summary: 4 modifieds
## Tracked Snapshots
- app/layout.tsx | 75 lines | 1480 chars | hash 4bce9bf36449
  Last snapshot: 2026-08-25T22:51:42.028Z
  Preview: "import type { Metadata } from "next"; / import localFont from 'next/font/local'; / import "./globals.css"; / const poppins = localFont({ / src: [ / { / path: '../public/fonts/Poppins-SemiBold.woff2', / weight: '600',..."
- .env.local | 5 lines | 165 chars | hash d41b2e03a08a
  Last snapshot: 2026-08-25T19:24:08.152Z
  Preview: "NEXT_PUBLIC_WORDPRESS_API_URL=http://tg-backend.development/graphql / WORDPRESS_AUTH_USER="webmaster-msh" / WORDPRESS_AUTH_PASSWORD="aXHQ 5Rqv eryS KDak uaBH EzZ6""
- next.config.ts | 19 lines | 438 chars | hash 65abf67cbe71
  Last snapshot: 2026-08-25T19:23:47.842Z
  Preview: "import type { NextConfig } from 'next'; / const isDev = process.env.NODE_ENV === 'development'; / const nextConfig: NextConfig = { / output: 'standalone', / images: { / unoptimized: true, / remotePatterns: [ / { / pro..."
- server.js | 26 lines | 757 chars | hash 57dee3a51b83
  Last snapshot: 2026-08-25T14:13:01.783Z
  Preview: "const { createServer } = require('http') / const { parse } = require('url') / const next = require('next') / const dev = process.env.NODE_ENV !== 'production' / const hostname = 'localhost' / const port = process.env...."
- lib/useConfigurator.ts | 116 lines | 3342 chars | hash e826f930eae0
  Last snapshot: 2026-08-25T13:23:57.244Z
  Preview: "'use client'; / import { useState } from 'react'; / type ScreenType = 'welcome' | 'configurator' | 'download' | 'login'; / export function useConfigurator() { / const [screen, setScreenState] = useState<ScreenType>(()..."
- components/configurator/StepFourConfirmation.tsx | 226 lines | 9568 chars | hash 8a16a1793c59
  Last snapshot: 2026-08-25T12:24:34.039Z
  Preview: "'use client'; / import { useState } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from '../Button'; / interface StepFourConfirmationProps { / stepTitle:..."
- components/Header.tsx | 179 lines | 7828 chars | hash be2c0465cf4b
  Last snapshot: 2026-08-25T10:36:02.501Z
  Preview: "'use client'; / import React, { useState, useRef, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / interface HeaderProps { / onStart?: () => void; / currentScreen: 'welcome..."
- components/Footer.tsx | 122 lines | 5381 chars | hash b253ea39f865
  Last snapshot: 2026-08-25T10:34:15.963Z
  Preview: "'use client'; / import Image from 'next/image'; / import Link from 'next/link'; / interface FooterProps { / onNavigateHome?: () => void; / onNavigateConfigurator?: (step?: number) => void; / } / export default functio..."

## Recent Changes
### 2026-08-25T22:51:42.028Z | saved | app/layout.tsx
- Summary: Line 57: replaced 1 line with 1 line.
- Before: 75 lines | 1,483 chars | hash e4aec73f1175 | preview: "import type { Metadata } from "next"; / import localFont from 'next/font/local'; / import "./globals.css"; / const poppins = localFont({ / src: [ / { / path: '../public/fonts/Poppins-SemiBold.woff2', / weight: '600',..."
- After: 75 lines | 1,480 chars | hash 4bce9bf36449 | preview: "import type { Metadata } from "next"; / import localFont from 'next/font/local'; / import "./globals.css"; / const poppins = localFont({ / src: [ / { / path: '../public/fonts/Poppins-SemiBold.woff2', / weight: '600',..."
- Previous fragment: "null,"
- Current fragment: "[],"

### 2026-08-25T22:50:30.848Z | saved | app/layout.tsx
- Summary: Line 56: inserted 4 lines.
- Before: 72 lines | 1,450 chars | hash f1f7c853144d | preview: "import type { Metadata } from "next"; / import localFont from 'next/font/local'; / import "./globals.css"; / const poppins = localFont({ / src: [ / { / path: '../public/fonts/Poppins-SemiBold.woff2', / weight: '600',..."
- After: 75 lines | 1,483 chars | hash e4aec73f1175 | preview: "import type { Metadata } from "next"; / import localFont from 'next/font/local'; / import "./globals.css"; / const poppins = localFont({ / src: [ / { / path: '../public/fonts/Poppins-SemiBold.woff2', / weight: '600',..."
- Current fragment: "icons: { / icon: null, / },"

### 2026-08-25T22:50:02.534Z | saved | app/layout.tsx
- Summary: Line 2: removed 1 line.
- Before: 72 lines | 1,452 chars | hash 36f8e6700e91 | preview: "import type { Metadata } from "next"; / import localFont from 'next/font/local';`` / import "./globals.css"; / const poppins = localFont({ / src: [ / { / path: '../public/fonts/Poppins-SemiBold.woff2', / weight: '600'..."
- After: 72 lines | 1,450 chars | hash f1f7c853144d | preview: "import type { Metadata } from "next"; / import localFont from 'next/font/local'; / import "./globals.css"; / const poppins = localFont({ / src: [ / { / path: '../public/fonts/Poppins-SemiBold.woff2', / weight: '600',..."
- Previous fragment: "``"

### 2026-08-25T22:39:19.867Z | deleted | app/favicon.ico
- Summary: Deleted file.

### 2026-08-25T19:24:08.152Z | saved | .env.local
- Summary: Saved without a textual diff.
- Before: 5 lines | 165 chars | hash d41b2e03a08a | preview: "NEXT_PUBLIC_WORDPRESS_API_URL=http://tg-backend.development/graphql / WORDPRESS_AUTH_USER="webmaster-msh" / WORDPRESS_AUTH_PASSWORD="aXHQ 5Rqv eryS KDak uaBH EzZ6""
- After: 5 lines | 165 chars | hash d41b2e03a08a | preview: "NEXT_PUBLIC_WORDPRESS_API_URL=http://tg-backend.development/graphql / WORDPRESS_AUTH_USER="webmaster-msh" / WORDPRESS_AUTH_PASSWORD="aXHQ 5Rqv eryS KDak uaBH EzZ6""

### 2026-08-25T19:23:47.842Z | saved | next.config.ts
- Summary: Line 3: replaced 13 lines with 10 lines.
- Before: 22 lines | 539 chars | hash 31d18825387e | preview: "import type { NextConfig } from 'next'; / const nextConfig: NextConfig = { / images: { / // Altijd unoptimized in development om private IP / SSRF errors met lokaal WordPress te voorkomen / unoptimized: true, / remote..."
- After: 19 lines | 438 chars | hash 65abf67cbe71 | preview: "import type { NextConfig } from 'next'; / const isDev = process.env.NODE_ENV === 'development'; / const nextConfig: NextConfig = { / output: 'standalone', / images: { / unoptimized: true, / remotePatterns: [ / { / pro..."
- Previous fragment: "nextConfig: NextConfig = { / images: { / // Altijd unoptimized in development om private IP / SSRF errors met lokaal WordPress te voorkomen / unoptimized: true, / remotePatterns..."
- Current fragment: "isDev = process.env.NODE_ENV === 'development'; / const nextConfig: NextConfig = { / output: 'standalone', / images: { / unoptimized: true, / remotePatterns: [ / { / protocol: i..."

### 2026-08-25T14:13:01.783Z | saved | server.js
- Summary: Line 1: inserted 26 lines.
- Before: 0 lines | 0 chars | hash empty
- After: 26 lines | 757 chars | hash 57dee3a51b83 | preview: "const { createServer } = require('http') / const { parse } = require('url') / const next = require('next') / const dev = process.env.NODE_ENV !== 'production' / const hostname = 'localhost' / const port = process.env...."
- Current fragment: "const { createServer } = require('http') / const { parse } = require('url') / const next = require('next') / const dev = process.env.NODE_ENV !== 'production' / const hostname =..."

### 2026-08-25T14:12:54.616Z | created | server.js
- Summary: Created file.
- After: 0 lines | 0 chars | hash empty

### 2026-08-25T13:23:57.244Z | saved | lib/useConfigurator.ts
- Summary: Line 5: replaced 35 lines with 40 lines.
- Before: 111 lines | 3,134 chars | hash 0898c2ae3eda | preview: "'use client'; / import { useState } from 'react'; / export function useConfigurator() { / const [screen, setScreenState] = useState<'welcome' | 'configurator' | 'download' | 'login'>(() => { / if (typeof window !== 'u..."
- After: 116 lines | 3,342 chars | hash e826f930eae0 | preview: "'use client'; / import { useState } from 'react'; / type ScreenType = 'welcome' | 'configurator' | 'download' | 'login'; / export function useConfigurator() { / const [screen, setScreenState] = useState<ScreenType>(()..."
- Previous fragment: "export function useConfigurator() { / const [screen, setScreenState] = useState<'welcome' | 'configurator' | 'download' | 'login'>(() => { / if (typeof window !== 'undefined') {..."
- Current fragment: "type ScreenType = 'welcome' | 'configurator' | 'download' | 'login'; / export function useConfigurator() { / const [screen, setScreenState] = useState<ScreenType>(() => { / if (..."

### 2026-08-25T13:23:09.452Z | saved | lib/useConfigurator.ts
- Summary: Saved without a textual diff.
- Before: 111 lines | 3,134 chars | hash 0898c2ae3eda | preview: "'use client'; / import { useState } from 'react'; / export function useConfigurator() { / const [screen, setScreenState] = useState<'welcome' | 'configurator' | 'download' | 'login'>(() => { / if (typeof window !== 'u..."
- After: 111 lines | 3,134 chars | hash 0898c2ae3eda | preview: "'use client'; / import { useState } from 'react'; / export function useConfigurator() { / const [screen, setScreenState] = useState<'welcome' | 'configurator' | 'download' | 'login'>(() => { / if (typeof window !== 'u..."

### 2026-08-25T13:06:13.939Z | saved | lib/useConfigurator.ts
- Summary: Line 6: replaced 1 line with 1 line.
- Before: 111 lines | 3,091 chars | hash ac1909e76e67 | preview: "'use client'; / import { useState } from 'react'; / export function useConfigurator() { / const [screen, setScreenState] = useState<string>(() => { / if (typeof window !== 'undefined') { / // Controleer of de URL expl..."
- After: 111 lines | 3,134 chars | hash 0898c2ae3eda | preview: "'use client'; / import { useState } from 'react'; / export function useConfigurator() { / const [screen, setScreenState] = useState<'welcome' | 'configurator' | 'download' | 'login'>(() => { / if (typeof window !== 'u..."
- Previous fragment: "string"
- Current fragment: "'welcome' | 'configurator' | 'download' | 'login'"

### 2026-08-25T12:24:34.039Z | saved | components/configurator/StepFourConfirmation.tsx
- Summary: Line 14: inserted 2 lines.
- Before: 225 lines | 9,541 chars | hash 7705596b2e05 | preview: "'use client'; / import { useState } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from '../Button'; / interface StepFourConfirmationProps { / stepTitle:..."
- After: 226 lines | 9,568 chars | hash 8a16a1793c59 | preview: "'use client'; / import { useState } from 'react'; / import Image from 'next/image'; / import { useRouter } from 'next/navigation'; / import Button from '../Button'; / interface StepFourConfirmationProps { / stepTitle:..."
- Current fragment: "onConfirm?: () => void;"

### 2026-08-25T10:36:02.501Z | saved | components/Header.tsx
- Summary: Line 59: replaced 97 lines with 94 lines.
- Before: 182 lines | 8,148 chars | hash b5778a9a52ad | preview: "'use client'; / import React, { useState, useRef, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / interface HeaderProps { / onStart?: () => void; / currentScreen: 'welcome..."
- After: 179 lines | 7,828 chars | hash be2c0465cf4b | preview: "'use client'; / import React, { useState, useRef, useEffect } from 'react'; / import Image from 'next/image'; / import Link from 'next/link'; / interface HeaderProps { / onStart?: () => void; / currentScreen: 'welcome..."
- Previous fragment: "return ( / <header className="w-full max-w-360 mx-auto h-24 sm:h-37.5 px-6 sm:px-16 flex items-center justify-between relative"> / {/* LOGOS CONTAINER */} / <div className="flex..."
- Current fragment: "return ( / <header className="w-full max-w-360 mx-auto h-24 sm:h-37.5 px-6 sm:px-16 flex items-center justify-between relative"> / <div className="flex items-center gap-3 sm:gap..."

### 2026-08-25T10:34:15.963Z | saved | components/Footer.tsx
- Summary: Line 58: replaced 59 lines with 52 lines.
- Before: 129 lines | 5,668 chars | hash f4b93e592beb | preview: "'use client'; / import Image from 'next/image'; / import Link from 'next/link'; / interface FooterProps { / onNavigateHome?: () => void; / onNavigateConfigurator?: (step?: number) => void; / } / export default functio..."
- After: 122 lines | 5,381 chars | hash b253ea39f865 | preview: "'use client'; / import Image from 'next/image'; / import Link from 'next/link'; / interface FooterProps { / onNavigateHome?: () => void; / onNavigateConfigurator?: (step?: number) => void; / } / export default functio..."
- Previous fragment: "<Image / src="/assets/x-symbol-white.svg" / alt="X" / width={16} / height={16} / className="object-contain opacity-60" / /> / <Image / src="/assets/logo-tdg-white.svg" / alt="Th..."
- Current fragment: "<Image / src="/assets/x-symbol-white.svg" / alt="X" / width={16} / height={16} / className="object-contain opacity-60" / /> / <Image / src="/assets/logo-tdg-white.svg" / alt="Th..."

### 2026-08-25T10:33:46.162Z | saved | components/Footer.tsx
- Summary: Line 52: replaced 37 lines with 24 lines.
- Before: 142 lines | 6,361 chars | hash 956232258345 | preview: "'use client'; / import Image from 'next/image'; / import Link from 'next/link'; / interface FooterProps { / onNavigateHome?: () => void; / onNavigateConfigurator?: (step?: number) => void; / } / export default functio..."
- After: 129 lines | 5,668 chars | hash f4b93e592beb | preview: "'use client'; / import Image from 'next/image'; / import Link from 'next/link'; / interface FooterProps { / onNavigateHome?: () => void; / onNavigateConfigurator?: (step?: number) => void; / } / export default functio..."
- Previous fragment: "a / href="https://www.nomi-utrecht.nl/" / target="_blank" / rel="noopener noreferrer" / className="hover:opacity-80 transition-opacity" / > / <Image / src="/assets/logo-nomi-whi..."
- Current fragment: "Image / src="/assets/logo-nomi-white.svg" / alt="Nomi Utrecht" / width={90} / height={30} / className="object-contain" / /> / <Image / src="/assets/x-symbol-white.svg" / alt="X"..."


## Hot Files
- components/Footer.tsx (13 tracked changes)
- components/Header.tsx (6 tracked changes)
- lib/useConfigurator.ts (4 tracked changes)
- app/layout.tsx (3 tracked changes)
- app/download/page.tsx (2 tracked changes)
- app/page.tsx (2 tracked changes)
- components/MainContent.tsx (2 tracked changes)
- lib/cms.ts (2 tracked changes)

## Git Snapshot
- Branch: main
- HEAD: 2026-08-26 094c89e Update project without heavy files
- Working tree summary: 4 modifieds
- M app/layout.tsx
- M graphify-out/WORKSPACE_MEMORY.md
- M workspace.json
- M workspacememory.md

## GitHub Snapshot
GitHub Repository: marketing-smartheads/nomi-configurator
Visibility: public | Default branch: main
Stars: 0 | Forks: 0 | Open issues: 0

Latest commit on main:
- 094c89e by Bas van Dooremalen on 2026-08-25
  Update project without heavy files

URL: https://github.com/marketing-smartheads/nomi-configurator

## Graphify Snapshot
Graphify report not found. Generate Graphify output if you want architecture-aware memory excerpts here.

## Project Planner
- Project planner is not configured yet. Enable it in the chat panel to generate a time-based todo list and progress rescue briefs.

## Agent Notes
- If a future task asks what changed recently, start with `Recent Changes`, `Tracked Snapshots`, `Hot Files`, and `Git Snapshot`.
- If a future task asks how the project is organized, combine this file with `graphify-out/GRAPH_REPORT.md`.
- If a future task needs repository-level context, use `Package Snapshot`, the GitHub snapshot, and the Graphify snapshot before rescanning broad parts of the repo.
