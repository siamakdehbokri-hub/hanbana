# HABANA Architecture

HABANA is a PWA-first Kurdish music streaming platform built as a modular monorepo.

## Frontend

- Next.js 15 App Router, React 19, TypeScript
- Tailwind design tokens with dark premium Spotify-style surfaces
- Framer Motion for transitions and player animation
- Zustand for playback persistence, queue, shuffle, repeat, and volume
- TanStack Query-ready API layer for catalog, search, auth, and recommendations
- PWA manifest, service worker caching, audio range request caching, app shortcuts, and iOS metadata

## Backend

- NestJS API with versioned routes under `/api/v1`
- PostgreSQL with Prisma ORM
- Redis and BullMQ for background ingestion, metadata extraction, AI tagging, and HLS transcoding jobs
- JWT access tokens, refresh tokens, Google OAuth hooks, email verification, password reset, sessions
- Helmet, validation pipes, CORS, signed CDN streaming URLs, and role-based admin modules

## Streaming

1. Original MP3/WAV is uploaded or imported.
2. Background worker probes metadata and duration.
3. Worker generates HLS variants such as 64k, 128k, 256k, and 320k.
4. Audio and waveform JSON are stored in S3 or Cloudinary.
5. API returns signed CDN playback URLs.
6. Web player lazy-loads audio and persists queue state locally.

## AI System

- Recommendation seed: listening history, liked tracks, follows, skipped tracks, genre affinity, and time-of-day behavior.
- Track embedding seed: title, artist bio, genre, tempo, waveform features, lyrics, and cultural tags.
- Admin AI tagging: mood, language, danceability, region, era, instrumentation, similar artists.
- Search suggestions: typo-tolerant lexical search plus embedding-powered semantic suggestions.

## Production Deployment

- Frontend: Vercel with image optimization and PWA headers.
- Backend: Railway, Render, AWS ECS, or Fly.io.
- Database: managed PostgreSQL.
- Cache/queues: managed Redis.
- Media: S3 + CloudFront or Cloudinary.
- Observability: OpenTelemetry, Sentry, structured logs, uptime monitors.
