# brain.md

## Project
- Name: Nexora — Research Funding & Innovation Intelligence Platform
- Purpose (one line): Enterprise intelligence platform connecting research, intellectual property, grants, patent landscaping, and commercialization pathways.
- Live URL: Local development (`http://localhost:3000` / `http://localhost:8000`)
- Stack/versions: Next.js 14.2.35, TypeScript 5.4.5, Tailwind CSS 3.4.4, Google Fonts (Plus Jakarta Sans, Inter, JetBrains Mono), FastAPI 0.111.0, SQLAlchemy 2.0.31, PostgreSQL (asyncpg), SQLite (aiosqlite for tests), Docker Compose
- Icon library (CDN): Lucide React (`lucide-react`)
- Fonts: `Plus Jakarta Sans` (Display/Headings), `Inter` (Continuous reading), `JetBrains Mono` (Technical micro tracking)
- Design tokens: base (`#0b0d10` cosmic abyss black), surface elevated (`#111419`), surface hover (`#161b22`), hairline borders (`rgba(255, 255, 255, 0.08)`), text primary (`#ffffff` / `#e2e2e6`), text secondary (`#8b949e`), accents (`#10b981` mint emerald, `#06b6d4` cyan)

## Architecture
- Folder structure:
  - `backend/app/`: FastAPI core, API v1 routes, models (SQLAlchemy ORM), schemas (Pydantic v2), and services.
  - `backend/alembic/`: Database migrations.
  - `backend/tests/`: Pytest suite (30 test modules with isolated in-memory SQLite async engine).
  - `backend/scripts/`: Seeding and administrative setup (`create_admin.py`, `seed_demo_data.py`).
  - `frontend/src/app/`: Next.js App Router with `(auth)` and `(dashboard)` route groups.
  - `frontend/src/components/`: Reusable UI elements, navigation, dashboard widgets, and filters.
  - `frontend/src/lib/`: Typed API client (`axios`), state utilities, and test suites (`vitest`).
- Data flow and key patterns:
  - Frontend queries FastAPI via centralized Axios client (`frontend/src/lib/api.ts`) with Bearer token authentication in `localStorage`.
  - Backend runs asynchronous SQLAlchemy with dependency-injected session management (`get_db`).
  - Modular intelligence domains: Funding recommendations, patent analytics, technology intelligence, commercialization viability, and automated executive reports.
- Auth approach:
  - JWT Access/Refresh tokens (HS256) signed with `python-jose`, bcrypt password hashing (`passlib`), role-based access control (RBAC) supporting Researcher, Reviewer, and Admin roles.
- Env vars (names only):
  - `ENVIRONMENT`, `PROJECT_NAME`, `API_V1_STR`, `BACKEND_HOST`, `BACKEND_PORT`, `JWT_SECRET`, `JWT_ALGORITHM`, `ACCESS_TOKEN_EXPIRE_MINUTES`, `REFRESH_TOKEN_EXPIRE_DAYS`, `DATABASE_URL`, `TEST_DATABASE_URL`, `MONGODB_URL`, `MONGODB_DB_NAME`, `CORS_ORIGINS`, `NEXT_PUBLIC_API_URL`
- Third-party services:
  - OpenAlex, Semantic Scholar, Crossref, Gemini AI / OpenAI (optional paper analysis integrations)

## File Map
| Path | Purpose |
|---|---|
| `backend/app/main.py` | FastAPI application entry point, lifespan startup, CORS, and exception handling |
| `backend/app/core/config.py` | Pydantic BaseSettings loading environment configuration |
| `backend/app/core/database.py` | Async SQLAlchemy engine and session factory (`create_async_engine`) |
| `backend/app/core/security.py` | Password hashing (bcrypt) and JWT encode/decode utilities |
| `backend/app/core/deps.py` | Route dependencies for database session, current user, and RBAC |
| `backend/app/models/` | SQLAlchemy ORM database models (User, Funding, Patent, Publication, etc.) |
| `backend/app/schemas/` | Pydantic request and response models |
| `backend/app/services/` | Business logic for paper analysis, patent clustering, scoring, and reports |
| `backend/app/api/v1/` | REST API route endpoints |
| `frontend/src/app/globals.css` | Hamol Studio design system tokens, hairline grid, lunar nebula gradient, live pulse nodes |
| `frontend/src/app/layout.tsx` | Root layout importing Plus Jakarta Sans, Inter, JetBrains Mono and dark cosmic background |
| `frontend/src/app/page.tsx` | Redesigned landing page inspired by Hamol Studio (monogram bar, hero, interactive row index, 3-column disciplines, 5-pillar matrix, schematic flow) |
| `frontend/src/app/(auth)/login/page.tsx` | Minimalist dark cosmic terminal authentication page |
| `frontend/src/app/(auth)/register/page.tsx` | Sleek workspace deployment & role selection registration page |
| `frontend/src/app/(dashboard)/layout.tsx` | Dashboard shell with 01–11 numbered navigation rail, system live node, and hairline styling |
| `frontend/src/app/(dashboard)/dashboard/page.tsx` | Command center with 6-tile scoreboard, 4 protocol workflows, live activity feed, and deadline radar |
| `frontend/src/components/CtaSection.tsx` | Dual-button centered conversion block with pill-shaped non-wrapping buttons |
| `frontend/src/components/ui/` | Shared UI atoms (Input, Button, Badge) with hairline borders and emerald active accents |
| `frontend/src/lib/api.ts` | Centralized Axios HTTP client with auth interceptors |

## Routes
| Route | File | Notes |
|---|---|---|
| `/` | `frontend/src/app/page.tsx` | Editorial landing overview & interactive module index |
| `/login` | `frontend/src/app/(auth)/login/page.tsx` | Terminal access authentication |
| `/register` | `frontend/src/app/(auth)/register/page.tsx` | Workspace initialization & role selection |
| `/dashboard` | `frontend/src/app/(dashboard)/dashboard/page.tsx` | Command center telemetry & multi-stream feed |
| `/funding` | `frontend/src/app/(dashboard)/funding/page.tsx` | Funding discovery & opportunity matching |
| `/patents` | `frontend/src/app/(dashboard)/patents/page.tsx` | Patent search & IP clustering |
| `/publications` | `frontend/src/app/(dashboard)/publications/page.tsx` | Publication index & literature search |
| `/research-intelligence` | `frontend/src/app/(dashboard)/research-intelligence/page.tsx` | Citation analytics & research clustering |
| `/technology-intelligence` | `frontend/src/app/(dashboard)/technology-intelligence/page.tsx` | Tech intelligence & market landscape |
| `/commercialization` | `frontend/src/app/(dashboard)/commercialization/page.tsx` | TRL evaluation & commercialization pipelines |
| `/scoring` | `frontend/src/app/(dashboard)/scoring/page.tsx` | Multi-dimensional innovation scoring |
| `/reports` | `frontend/src/app/(dashboard)/reports/page.tsx` | Executive reporting & PDF/Excel exports |
| `/admin` | `frontend/src/app/(dashboard)/admin/page.tsx` | User administration & system metrics |
| `/profile` | `frontend/src/app/(dashboard)/profile/page.tsx` | User profile & researcher credentials |

## Conventions & Decisions
- Hamol Studio Aesthetic (`https://hamol.studio/`): Cosmic abyss black (`#0b0d10`), hairline structural borders (`rgba(255, 255, 255, 0.08)`), subtle lunar nebula radial ambient fields, micro monospace metadata eyebrows (`JetBrains Mono`, tracking `+0.2em`), numbered indices (`01`, `02`...), and pill-shaped action controls (`rounded-full`).
- StitchMCP Integration: Created project `projects/14565498786321983604` (`Kinetic Intellect` design system `assets/a8abba2e663f4596b1db6a52273ca4bc`), generating high-fidelity screens for Landing, Dashboard, Funding Radar, and Patent Landscape.
- Typography: High-contrast pairing of `Plus Jakarta Sans` for editorial display headlines with `Inter` for sustained reading and `JetBrains Mono` for machine telemetry.
- SQLite `aiosqlite:///:memory:` for automated tests: Provides sub-second execution of 30 test modules without external database dependencies.
- Next.js 14 App Router: Grouping into `(auth)` and `(dashboard)` separates authentication layouts from authenticated administrative shells.

## Known Issues / Tech Debt
- None identified.

## Change Log (newest first)
### 2026-11-03 — Complete Hamol Studio UI Redesign & StitchMCP Generation
- What changed:
  - Created StitchMCP project `projects/14565498786321983604` (`Nexora — Research Funding & Innovation Intelligence Platform (Hamol Studio Aesthetic)`) with design system `Kinetic Intellect`.
  - Generated Stitch screens for Landing Page, Command Center Dashboard, Funding Radar & Vector Matchmaking, and Patent Landscape & Prior-Art Fencing.
  - Implemented Hamol Studio visual language across the Next.js frontend:
    - Updated `frontend/src/app/globals.css` with cosmic background `#0b0d10`, `.lunar-nebula` radial gradients, `.hairline-grid`, and `.live-pulse` indicators.
    - Updated `frontend/tailwind.config.js` with `fontFamily` tokens (`sans`, `heading`, `mono`) and cosmic palette extensions.
    - Updated `frontend/src/app/layout.tsx` with Google fonts `Plus Jakarta Sans`, `Inter`, and `JetBrains Mono`.
    - Completely redesigned `frontend/src/app/page.tsx`: editorial minimal navigation bar with monogram node and live system indicator; atmospheric hero with telemetry ticker ($48.2B capital, 1.4M+ vectors, 320+ labs, 78.4% win rate); interactive module list (`01 Funding Radar`, `02 Patent Landscape`, `03 Tech Intel`, `04 Commercialization`, `05 Research Gap Engine`, `06 Executive Reporting`); 3-column architectural disciplines grid; 5-pillar composite scoring matrix; 3-phase methodology flow (`Detect`, `Formulate`, `Commercialize`); stakeholder role cards; customized CTA section; and monolithic minimal footer with live latency indicator (`LATENCY // 14ms · BUILD // 8940.b`).
    - Redesigned `frontend/src/app/(dashboard)/layout.tsx`: abyss black canvas, `01`–`11` numbered navigation rail, live workspace node indicator, and sleek disconnect terminal trigger.
    - Redesigned `frontend/src/app/(dashboard)/dashboard/page.tsx`: strategic command center with 6-tile scoreboard, 4 protocol workflow cards, live multi-stream feed, and upcoming grant deadline radar.
    - Refined `(auth)/login/page.tsx`, `(auth)/register/page.tsx`, `components/ui/input.tsx`, and `components/ui/badge.tsx` to match the dark cosmic terminal styling.
  - Verified: 70/70 frontend vitest tests passed; Next.js 14 production build succeeded (18/18 routes statically generated).
- Files touched:
  - `frontend/src/app/globals.css`
  - `frontend/tailwind.config.js`
  - `frontend/src/app/layout.tsx`
  - `frontend/src/app/page.tsx`
  - `frontend/src/app/(dashboard)/layout.tsx`
  - `frontend/src/app/(dashboard)/dashboard/page.tsx`
  - `frontend/src/app/(auth)/login/page.tsx`
  - `frontend/src/app/(auth)/register/page.tsx`
  - `frontend/src/components/CtaSection.tsx`
  - `frontend/src/components/ui/input.tsx`
  - `frontend/src/components/ui/badge.tsx`
  - `brain.md`
- Decisions / gotchas: Avoided generic bright or plain cards; used hairline borders (`rgba(255, 255, 255, 0.08)`), micro uppercase tracking, and dual pill buttons (`rounded-full`) inspired directly by hamol.studio.
- Open items: Commit and push changes to GitHub `origin/main` for automated Vercel deployment.

### 2026-11-02 — High-Impact Call-To-Action (CTA) Section Implementation
- What changed: Created standalone [CtaSection.tsx](file:///home/jyotirmaya/project/Research-Funding-Innovation-Intelligence-Platform/frontend/src/components/CtaSection.tsx) matching exact specifications: centered vertical stack, restrained-width supporting copy, large multi-line primary heading, and non-wrapping dual pill-shaped buttons with 16px gap (`Get Started` primary and `Sign In` secondary outline); embedded into landing page ([frontend/src/app/page.tsx](file:///home/jyotirmaya/project/Research-Funding-Innovation-Intelligence-Platform/frontend/src/app/page.tsx)); verified TypeScript compilation and Next.js static build (18/18 routes passed).
- Files touched: `frontend/src/components/CtaSection.tsx`, `frontend/src/app/page.tsx`, `brain.md`
- Decisions / gotchas: Used `flex-nowrap` on the button row with equal `h-12` heights and `rounded-full` pill styling to ensure balanced alignment across all viewports.
- Open items: Commit and push changes to GitHub.

### 2026-11-02 — Nexora Brand Identity Adoption
- What changed: Official platform naming designated as **Nexora** (*Nexora — Research Funding & Innovation Intelligence Platform*); updated frontend metadata and titles (`layout.tsx`, `page.tsx`, `(dashboard)/layout.tsx`, `(auth)/login/page.tsx`); updated backend `PROJECT_NAME` across `backend/app/core/config.py` and `render.yaml`.
- Files touched: `frontend/src/app/layout.tsx`, `frontend/src/app/page.tsx`, `frontend/src/app/(dashboard)/layout.tsx`, `frontend/src/app/(auth)/login/page.tsx`, `backend/app/core/config.py`, `render.yaml`, `brain.md`
- Decisions / gotchas: Selected brand name **Nexora** combining *Nexus* (connection hub of research, capital, and IP) with *Aurora* (dawn of technological discovery).
- Open items: Configure custom subdomain `nexora.jyotirmayabehera.com` on Vercel.

### 2026-11-02 — Cloud Deployment Readiness (Vercel & Render)
- What changed: Added `render.yaml` Blueprint specification for 1-click Render deployment of PostgreSQL and FastAPI backend; resolved Render schema validation issue `databases[0].user not a valid DB user name` by removing reserved `user: postgres`; separated build command (`pip install -r requirements.txt`) from database migrations by creating `backend/start.sh` so Alembic runs at runtime with full database connectivity; enabled automated zero-touch admin provisioning and demo data seeding on startup via environment variables (`ADMIN_EMAIL`, `ADMIN_PASSWORD`, `SEED_DEMO_DATA`), eliminating the need for paid Render Web Shell; pinned Python runtime to `3.11.9` via `backend/.python-version` and `render.yaml`; updated `backend/app/core/config.py` with automatic `DATABASE_URL` normalization for Render/Cloud PostgreSQL connection strings (`postgres://` / `postgresql://` -> `postgresql+asyncpg://` and `sslmode=` -> `ssl=`); added automatic CORS regex matching for Vercel domains (`r"https://.*\.vercel\.app"`) in `backend/app/main.py`; updated repository URLs in `README.md` to `jyotirmaya2004/Research-Funding-Innovation-Intelligence-Platform`; verified all 221 backend tests pass.
- Files touched: `render.yaml`, `backend/start.sh`, `backend/.python-version`, `README.md`, `backend/app/core/config.py`, `backend/app/main.py`, `brain.md`
- Decisions / gotchas: Render build containers do not have network access to internal databases. Database migrations (`alembic upgrade head`) must execute at runtime inside `startCommand` (or `start.sh`) rather than during `buildCommand`. Render Free compute instances disable interactive Web Shell, so admin provisioning and demo seeding were automated via `start.sh` and Blueprint envVars.
- Open items: Push updates to GitHub and re-sync Render service, then deploy frontend on Vercel.

### 2026-11-02 — Full Project Verification, Dependency Installation & Live Run
- What changed: Created `.env` with secure secret and `frontend/.env.local`; created Python virtual environment (`backend/.venv`) and installed all backend requirements; installed all frontend npm dependencies; resolved missing test mock property in `frontend/src/lib/paper_recommendations_and_gaps.test.ts` and made `citation_count?: number` optional in `frontend/src/types/publication.ts`; ran Alembic migrations (`alembic upgrade head`); provisioned administrative user via `create_admin.py`; seeded demo data into PostgreSQL via `seed_demo_data.py`; verified both backend FastAPI server and Next.js frontend dev & production builds.
- Files touched: `.env`, `frontend/.env.local`, `frontend/src/types/publication.ts`, `frontend/src/lib/paper_recommendations_and_gaps.test.ts`, `backend/scripts/seed_demo_data.py`, `brain.md`
- Decisions / gotchas: Updated `backend/scripts/seed_demo_data.py` to prioritize `settings.DATABASE_URL` from `.env` over hardcoded local sqlite fallback; executed all 8 Alembic migration revisions against PostgreSQL; verified SQLite in-memory engine isolates 221 automated backend tests.
- Open items: All verifications complete. 221/221 backend tests passed; 70/70 frontend tests passed; Next.js 14 production build succeeded (18/18 routes). Both servers online and responding.
