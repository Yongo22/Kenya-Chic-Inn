# 🇰🇪 Kenya Chic Inn - Crypto-Booking Engine

A high-performance, mobile-first boutique hotel booking application built for the Nairobi market. This app allows guests to book luxury stays using Bitcoin, Ethereum, and USDC via Coinbase Commerce.

## 🚀 Key Features
- **Ultra-Fast Loading:** Optimized for Kenyan 4G/5G mobile networks (Under 2s load time).
- **Crypto-Native:** Direct integration with Coinbase Commerce API.
- **Secure Webhooks:** Automatic booking confirmation once the blockchain verifies payment.
- **Chic Design:** Tailored luxury aesthetic using Tailwind CSS and Playfair Display typography.

## 🛠️ Tech Stack
- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Payments:** [Coinbase Commerce API](https://commerce.coinbase.com/)
- **Deployment:** [Vercel](https://vercel.com/)

## 📂 Project Structure
```text
Kenya-Chic-Inn/
├── app/                  # UI, Layouts, and API Routes
│   ├── api/              # Payment & Webhook Engines
│   ├── layout.js         # Global Shell
│   ├── page.js           # Homepage UI
│   └── globals.css       # Chic Styling
├── tailwind.config.js    # Design System Config
├── package.json          # Build Instructions
└── .env.local            # Private API Keys (Hidden)
