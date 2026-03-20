# Kenya Chic Inn (Next.js)

Boutique hotel landing + crypto checkout via Coinbase Commerce.

## Local setup

1. Install dependencies:
   - `npm install`
2. Configure environment variables:
   - copy `.env.example` to `.env.local`
3. Run the dev server:
   - `npm run dev`

## Required environment variables

- `COINBASE_API_KEY`
- `COINBASE_WEBHOOK_SECRET`
- `NEXT_PUBLIC_BASE_URL` (used for Coinbase redirect/cancel URLs)

## Deploy

This repo is ready to deploy on any platform that can run Node.js (Vercel/Render/Railway, etc.).

GitHub Actions CI is included to run `npm run build` on pushes and PRs.

