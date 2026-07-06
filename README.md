# MPGS Furniture Ecommerce Global Site Plan

> **Dual-market furniture ecommerce platform** — serving both mass consumers and luxury/trade clients.
> Backend: Medusa v2 · Storefront: Next.js 16 · Target: localhost → VPS

---

## Overview

MPGS Enterprises is a furniture ecommerce platform built for two distinct audiences from a single backend:

- **Mass consumers** — self-serve browsing, configurators, checkout
- **Luxury / trade clients** — project boards, quote requests, trade pricing, white-glove delivery, concierge

Both segments share one Medusa instance, one catalog, and one storefront codebase — differentiated by sales channels, customer groups, and design tokens.

---

## Tech Stack

| Layer | Technology | Purpose |
|---|---|---|
| **Backend** | [Medusa v2.17.2](https://docs.medusajs.com) | Commerce engine — products, pricing, inventory, orders, payments, B2B |
| **Database** | PostgreSQL 15+ | Primary data store |
| **Cache / Queue** | Redis 7+ | Workflow engine, cache, background jobs |
| **Storefront** | [Next.js 16](https://nextjs.org) (App Router) | Headless frontend — RSC, Server Actions, ISR |
| **UI** | shadcn/ui + Radix + Tailwind v4 | Accessible component library, dual-brand theming |
| **Search** | Meilisearch | Product search, faceted navigation |
| **Payments** | Stripe Payment Element | Cards, Apple Pay, Klarna, Afterpay |
| **Images** | Local (dev) → Cloudflare Images (prod) | Product photography, AVIF/WebP |
| **CMS** | Sanity | Editorial content — lookbooks, designer stories |
| **Storage** | Local (dev) → S3 / R2 (prod) | Product images, media |

---

## Prerequisites

- **Node.js** >= 20.x
- **pnpm** >= 10.x (`npm install -g pnpm@latest`)
- **PostgreSQL** >= 15 (local or [Railway](https://railway.app) free tier)
- **Redis** >= 7 (local or Railway free tier)
- **Medusa CLI** (`npm install -g @medusajs/cli`)
- **Git**

---

## Getting Started (Local Development)

### 1. Clone and scaffold

```bash
git clone <repo-url> mpgs-enterprises
cd mpgs-enterprises

# Bootstrap the Medusa monorepo (official DTC starter)
npx create-medusa-app@latest --with-nextjs-starter --directory=.
```

This creates:
```
mpgs-enterprises/
├── apps/
│   ├── backend/        # Medusa v2 server
│   │   ├── src/
│   │   │   ├── modules/   # Custom modules
│   │   │   ├── workflows/ # Custom workflows
│   │   │   └── subscribers/
│   │   ├── medusa-config.ts
│   │   └── package.json
│   └── storefront/    # Next.js 16 storefront
│       ├── app/         # App Router pages
│       ├── components/  # React components
│       ├── lib/         # SDK, utilities
│       └── package.json
├── .env.example
└── package.json          # pnpm workspace root
```

### 2. Configure environment

```bash
cp .env.example apps/backend/.env
cp .env.example apps/storefront/.env.local
```

**`apps/backend/.env`** — minimal local setup:
```env
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/mpgs_medusa
REDIS_URL=redis://localhost:6379
JWT_SECRET=supersecret-change-me
COOKIE_SECRET=supersecret-change-me
STORE_CORS=http://localhost:8000
ADMIN_CORS=http://localhost:9000
AUTH_CORS=http://localhost:8000,http://localhost:9000
NODE_ENV=development
```

**`apps/storefront/.env.local`**:
```env
NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY=pk_temp
NEXT_PUBLIC_MEDUSA_BACKEND_URL=http://localhost:9000
NEXT_PUBLIC_DEFAULT_REGION=us
NEXT_PUBLIC_STRIPE_KEY=pk_test_placeholder
```

### 3. Create the database

```bash
createdb mpgs_medusa
# or via psql:
# psql -U postgres -c "CREATE DATABASE mpgs_medusa;"
```

### 4. Install dependencies

```bash
pnpm install
```

### 5. Run database migrations

```bash
cd apps/backend
npx medusa db:migrate
npx medusa db:seed  # optional — loads demo product data
```

### 6. Start development

Terminal 1 — Medusa backend:
```bash
cd apps/backend
npx medusa develop
```
Starts on **http://localhost:9000** · Admin UI at **http://localhost:9000/app**

Terminal 2 — Next.js storefront:
```bash
cd apps/storefront
pnpm dev
```
Starts on **http://localhost:8000**

### 7. Verify

```bash
# Backend health
curl http://localhost:9000/store/products | head

# Storefront
open http://localhost:8000
```

---

## Local Development Workflow

### Running both services together (recommended)

```bash
# From repo root — uses pnpm workspaces
pnpm dev
```
Requires a root `package.json` script pointing to `concurrently` or Turborepo (dtc-starter ships with Turborepo by default).

### Key commands

| Command | Location | What it does |
|---|---|---|
| `pnpm dev` | Root | Starts backend + storefront concurrently |
| `npx medusa develop` | `apps/backend` | Start Medusa (API + admin + workers) |
| `pnpm dev` | `apps/storefront` | Start Next.js dev server |
| `npx medusa db:migrate` | `apps/backend` | Run pending migrations |
| `npx medusa db:seed` | `apps/backend` | Seed demo data |
| `npx medusa exec <script>` | `apps/backend` | Run a one-off script |
| `pnpm build` | Root | Production build |
| `pnpm lint` | Root | Lint all workspaces |

### Seeding furniture data

The default seed creates generic products. For furniture-specific seed data, refer to the [Solace starter](https://github.com/rigby-sh/solace-medusa-starter) or create custom seed scripts under `apps/backend/src/scripts/`.

---

## Environment Variables Reference

### Backend (`apps/backend/.env`)

| Variable | Required | Default (dev) | Description |
|---|---|---|---|
| `DATABASE_URL` | Yes | — | PostgreSQL connection string |
| `REDIS_URL` | Yes | `redis://localhost:6379` | Redis connection string |
| `JWT_SECRET` | Yes | — | JWT signing secret (min 32 chars) |
| `COOKIE_SECRET` | Yes | — | Session cookie secret (min 32 chars) |
| `STORE_CORS` | Yes | `http://localhost:8000` | Allowed storefront origins |
| `ADMIN_CORS` | Yes | `http://localhost:9000` | Allowed admin origins |
| `AUTH_CORS` | Yes | — | Allowed auth origins |
| `STRIPE_API_KEY` | No | — | Stripe secret key (for payments) |
| `STRIPE_WEBHOOK_SECRET` | No | — | Stripe webhook signing secret |
| `MEILISEARCH_URL` | No | — | Meilisearch instance URL |
| `MEILISEARCH_API_KEY` | No | — | Meilisearch API key |
| `S3_*` | No | — | S3/R2 credentials for file storage |
| `RESEND_API_KEY` | No | — | Resend API key for emails |

### Storefront (`apps/storefront/.env.local`)

| Variable | Required | Default (dev) | Description |
|---|---|---|---|
| `NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY` | Yes | — | Store publishable API key |
| `NEXT_PUBLIC_MEDUSA_BACKEND_URL` | Yes | `http://localhost:9000` | Backend URL |
| `NEXT_PUBLIC_DEFAULT_REGION` | Yes | `us` | Default store region |
| `NEXT_PUBLIC_STRIPE_KEY` | Yes | — | Stripe publishable key |
| `NEXT_PUBLIC_BASE_URL` | No | `http://localhost:8000` | Storefront canonical URL |
| `REVALIDATE_SECRET` | No | — | Webhook revalidation secret |

---

## Project Architecture (After Scaffold)

```
mpgs-enterprises/
│
├── apps/
│   ├── backend/                     # Medusa v2
│   │   ├── src/
│   │   │   ├── modules/             # Custom business modules
│   │   │   │   ├── delivery-class/  # White-glove / threshold / parcel
│   │   │   │   └── designer/        # Designer attribution
│   │   │   ├── workflows/           # Custom orchestration
│   │   │   ├── subscribers/         # Event handlers
│   │   │   ├── scripts/             # Seed & migration scripts
│   │   │   └── admin/               # Admin widget extensions
│   │   ├── medusa-config.ts
│   │   └── integration-tests/
│   │
│   └── storefront/                  # Next.js 16
│       ├── app/
│       │   ├── (store)/             # DTC consumer routes
│       │   │   ├── products/        # Product listing + detail
│       │   │   ├── cart/
│       │   │   ├── checkout/
│       │   │   └── account/
│       │   ├── (trade)/             # Luxury / trade portal
│       │   │   ├── projects/
│       │   │   ├── quotes/
│       │   │   └── concierge/
│       │   └── api/                 # Webhook handlers
│       ├── components/
│       │   ├── ui/                  # shadcn primitives
│       │   ├── primitives/          # Brand-wrapped components
│       │   └── blocks/              # ProductCard, VariantPicker, etc.
│       ├── lib/
│       │   ├── sdk.ts               # Medusa JS SDK client
│       │   └── store/               # Zustand stores (cart, ui)
│       └── styles/
│           ├── globals.css          # Base tokens
│           └── themes/              # Consumer.css, Luxury.css
│
├── .env.example
├── .gitignore
├── package.json                     # pnpm workspace root
└── turbo.json                       # Turborepo config
```

---

## Dual-Brand Strategy (Consumer + Luxury)

This project serves two audiences from **one codebase**. The switch happens via Medusa's built-in primitives:

| Primitive | Consumer | Luxury / Trade |
|---|---|---|
| **Sales channel** | `mass-market` | `luxury-trade` |
| **Customer group** | `retail` | `trade-standard` / `trade-premium` / `vip` |
| **Price list** | Retail pricing | Per-group discount tiers |
| **Checkout** | Self-serve cart | Quote request / net-terms |
| **Delivery** | Standard / threshold | White-glove scheduling |
| **Design tokens** | CSS variables (consumer) | CSS variables (luxury) |
| **CTA strategy** | Add to cart | Request quote / Book consultation |

The same product, same SKU, same imagery — two surrounding chrome and CTA strategies based on user role.

---

## Local VPS Preview (Before Domain)

When you're ready to preview on a VPS without buying a domain:

```bash
# On your VPS (Ubuntu/Debian example)
# 1. Install Node 20, pnpm, PostgreSQL, Redis
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs postgresql redis-server
sudo npm install -g pnpm

# 2. Clone and build
git clone <repo-url> /opt/mpgs
cd /opt/mpgs
pnpm install
cd apps/backend && npx medusa db:migrate && cd ../..
pnpm build

# 3. Run via PM2
sudo npm install -g pm2
pm2 start apps/backend/node_modules/.bin/medusa --name medusa -- develop -- --port 9000
pm2 start apps/storefront/node_modules/.bin/next --name storefront -- start -- --port 8000

# 4. Access via IP
# http://<vps-ip>:8000 — storefront
# http://<vps-ip>:9000/app — admin

# 5. (Optional) Reverse proxy with nginx
# See: .omo/deploy/nginx.conf.example (create when deploying)
```

---

## References

- [Project plan (full)](.omo/plans/furniture-ecommerce-plan.md) — architecture, features, timeline
- [Research synthesis](.omo/ulw-research/20260706-153408/SYNTHESIS.md) — all findings and sources
- [Medusa docs](https://docs.medusajs.com) — official documentation
- [dtc-starter](https://github.com/medusajs/dtc-starter) — official monorepo foundation
- [Solace starter](https://github.com/rigby-sh/solace-medusa-starter) — furniture DTC reference
- [Agilo / Sofa Society](https://github.com/Agilo/fashion-starter) — furniture brand design reference

---

## License

MIT — see [LICENSE](LICENSE)
