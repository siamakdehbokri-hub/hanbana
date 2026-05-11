# Deployment Guide

1. Create PostgreSQL and Redis services.
2. Copy `.env.example` to `.env` and replace secrets.
3. Run Prisma generation and migrations:

```bash
npm run db:generate
npm run db:migrate
```

4. Deploy `apps/web` to Vercel.
5. Deploy `apps/api` to Railway, Render, AWS, or Fly.io.
6. Configure media storage:
   - S3 bucket for originals and HLS variants.
   - CloudFront CDN with signed URL policy.
   - Image transformation through Cloudinary or Next image CDN.
7. Add production security:
   - Strong JWT secrets.
   - HTTPS-only secure cookies.
   - API rate limits.
   - Upload MIME sniffing and file size caps.
   - Admin role guard on moderation and import routes.
8. Run Lighthouse on mobile and desktop. Keep JS bundles split by route and cache audio/artwork through the service worker.
