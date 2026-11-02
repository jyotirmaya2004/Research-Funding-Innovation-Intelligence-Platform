# brain.md

## Project
- Name: Research Funding & Innovation Intelligence Platform
- Purpose (one line): Enterprise intelligence platform connecting research, intellectual property, grants, patent landscaping, and commercialization pathways.
- Live URL: Local development (`http://localhost:3000` / `http://localhost:8000`)
- Stack/versions: Next.js 14.2.4, TypeScript 5.4.5, Tailwind CSS 3.4.4, FastAPI 0.111.0, SQLAlchemy 2.0.31, PostgreSQL (asyncpg), SQLite (aiosqlite for tests), Docker Compose
- Icon library (CDN): Lucide React (`lucide-react`)
- Fonts: System Sans-Serif (`-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`)
- Design tokens: base (`#0f172a` to `#020617` radial dark gradient) / text (`#f8fafc`) / accent (`#8b5cf6`, `#3b82f6`, `#ec4899`)

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
| `frontend/src/app/page.tsx` | Landing page highlighting platform capabilities and portal navigation |
| `frontend/src/app/(auth)/login/page.tsx` | Authentication and user sign-in page |
| `frontend/src/app/(dashboard)/layout.tsx` | Main dashboard shell with responsive sidebar, notifications, and navigation |
| `frontend/src/lib/api.ts` | Centralized Axios HTTP client with auth interceptors |

## Routes
| Route | File | Notes |
|---|---|---|
| `/` | `frontend/src/app/page.tsx` | Landing overview & module showcase |
| `/login` | `frontend/src/app/(auth)/login/page.tsx` | User authentication |
| `/register` | `frontend/src/app/(auth)/register/page.tsx` | Account registration |
| `/dashboard` | `frontend/src/app/(dashboard)/dashboard/page.tsx` | Command center overview & metrics |
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
- SQLite `aiosqlite:///:memory:` for automated tests: Provides sub-second execution of 30 test modules without external database dependencies.
- Next.js 14 App Router: Grouping into `(auth)` and `(dashboard)` separates authentication layouts from authenticated administrative shells.
- Pydantic v2 Settings: Multi-path `.env` resolution (`.env`, `../.env`, `../../.env`) ensuring robust execution from both workspace root and subdirectories.

## Known Issues / Tech Debt
- None identified.

## Change Log (newest first)
### 2026-11-02 — Cloud Deployment Readiness (Vercel & Render)
- What changed: Added `render.yaml` Blueprint specification for 1-click Render deployment of PostgreSQL and FastAPI backend; resolved Render schema validation issue `databases[0].user not a valid DB user name` by removing reserved `user: postgres`; separated build command (`pip install -r requirements.txt`) from database migrations by creating `backend/start.sh` so Alembic runs at runtime with full database connectivity; pinned Python runtime to `3.11.9` via `backend/.python-version` and `render.yaml`; updated `backend/app/core/config.py` with automatic `DATABASE_URL` normalization for Render/Cloud PostgreSQL connection strings (`postgres://` / `postgresql://` -> `postgresql+asyncpg://` and `sslmode=` -> `ssl=`); added automatic CORS regex matching for Vercel domains (`r"https://.*\.vercel\.app"`) in `backend/app/main.py`; updated repository URLs in `README.md` to `jyotirmaya2004/Research-Funding-Innovation-Intelligence-Platform`; verified all 221 backend tests pass.
- Files touched: `render.yaml`, `backend/start.sh`, `backend/.python-version`, `README.md`, `backend/app/core/config.py`, `backend/app/main.py`, `brain.md`
- Decisions / gotchas: Render build containers do not have network access to internal databases. Database migrations (`alembic upgrade head`) must execute at runtime inside `startCommand` (or `start.sh`) rather than during `buildCommand`.
- Open items: Push updates to GitHub and re-sync Render service.

### 2026-11-02 — Full Project Verification, Dependency Installation & Live Run
- What changed: Created `.env` with secure secret and `frontend/.env.local`; created Python virtual environment (`backend/.venv`) and installed all backend requirements; installed all frontend npm dependencies; resolved missing test mock property in `frontend/src/lib/paper_recommendations_and_gaps.test.ts` and made `citation_count?: number` optional in `frontend/src/types/publication.ts`; ran Alembic migrations (`alembic upgrade head`); provisioned administrative user via `create_admin.py`; seeded demo data into PostgreSQL via `seed_demo_data.py`; verified both backend FastAPI server and Next.js frontend dev & production builds.
- Files touched: `.env`, `frontend/.env.local`, `frontend/src/types/publication.ts`, `frontend/src/lib/paper_recommendations_and_gaps.test.ts`, `backend/scripts/seed_demo_data.py`, `brain.md`
- Decisions / gotchas: Updated `backend/scripts/seed_demo_data.py` to prioritize `settings.DATABASE_URL` from `.env` over hardcoded local sqlite fallback; executed all 8 Alembic migration revisions against PostgreSQL; verified SQLite in-memory engine isolates 221 automated backend tests.
- Open items: All verifications complete. 221/221 backend tests passed; 70/70 frontend tests passed; Next.js 14 production build succeeded (18/18 routes). Both servers online and responding.

