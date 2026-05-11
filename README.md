# HABANA

HABANA is a premium Kurdish music streaming PWA: a Spotify-inspired, mobile-first platform with cinematic dark UI, persistent playback state, admin ingestion tools, Prisma data modeling, and a NestJS backend architecture.

## What Is Included

- `apps/web`: Next.js 15, React 19, TypeScript, Tailwind, Framer Motion, Zustand, PWA manifest, offline/audio cache configuration, responsive music UI.
- `apps/api`: NestJS API scaffold with auth, catalog, playlists, admin analytics, ingestion queues, recommendations, security middleware, and Swagger.
- `apps/api/prisma/schema.prisma`: production-oriented PostgreSQL schema for users, sessions, songs, albums, artists, genres, playlists, likes, follows, listening history, notifications, recommendations, and import jobs.
- `packages/shared`: shared brand constants and import input contracts.
- `infra`: Docker Compose for PostgreSQL, Redis, and API.
- `docs`: architecture, API, deployment, and product system guides.

## Key Product Features

- Cinematic home page with hero, featured songs, trending tracks, artists, playlists, mood and genre discovery.
- World-class persistent player UI: play, pause, next, previous, shuffle, repeat, seekbar, volume, queue, AirPlay and Chromecast affordances.
- Native-feeling mobile layout with bottom navigation and installable PWA configuration.
- Search experience with AI suggestion affordances, smart filters, genres, and top results.
- Artist, playlist, album, library, auth, and admin dashboard pages.
- Automated music import architecture for JSON/API ingestion, artist/album creation, duplicate-safe upserts, moderation status, AI tags, and HLS-ready URLs.

## Local Development

```bash
npm install
npm run dev:web
```

API:

```bash
cp .env.example .env
docker compose -f infra/docker-compose.yml up postgres redis
npm run db:generate
npm run db:migrate
npm run dev:api
```

## Production Direction

- Frontend: Vercel.
- Backend: Railway, Render, AWS, Fly.io, or ECS.
- Database: managed PostgreSQL.
- Cache and queues: managed Redis.
- Media: S3 + CloudFront signed URLs or Cloudinary.
- Audio pipeline: upload original, extract metadata, generate HLS variants, produce waveform JSON, cache through CDN, serve signed playback manifests.

## Important Files

- Web home: `apps/web/app/page.tsx`
- Player: `apps/web/components/music/player.tsx`
- Design system: `apps/web/tailwind.config.ts`
- PWA config: `apps/web/next.config.mjs` and `apps/web/app/manifest.ts`
- API bootstrap: `apps/api/src/main.ts`
- Ingestion worker: `apps/api/src/ingestion/ingestion.processor.ts`
- Database schema: `apps/api/prisma/schema.prisma`
