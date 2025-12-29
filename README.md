## Project Overview

A small Next.js project (App Router) that demonstrates a blog-style front-end and a simple admin area. It uses an in-memory mock database, server API routes, and cookie-based session authentication (`SESSION_SECRET`).

## Features

- Public front-end for posts, categories and contact form
- Admin area to view contacts (protected)
- Mock database with seeded posts and users (no external DB required)
- Authentication using signed JWT sessions stored in a cookie

## Prerequisites

- Node.js 18+ (recommended)
- npm, yarn, or pnpm

## Environment Variables

Create a `.env.local` file in the project root with at least:

```
SESSION_SECRET=your_random_secret_here
# Optional: override API base URL when needed
API_BASE=http://localhost:3000/api
```

Make sure `SESSION_SECRET` is a long, random string in production.

## Quick Start

1. Install dependencies:

```bash
npm install
```

2. Start the dev server:

```bash
npm run dev
```

3. Open the app at: `http://localhost:3000`

## Admin account

Use the seeded admin to log in to the admin area (for local/testing):

- **Email:** `admin123@gmail.com`
- **Password:** `admin123`

## Build & Run for Production

```bash
npm run build
npm start
```

## Lint

```bash
npm run lint
```

## Notes

- Data is stored in-memory (see `src/lib/database.js`) and will reset on restart.
- For production, provide a secure `SESSION_SECRET` and connect to a persistent DB if required.
