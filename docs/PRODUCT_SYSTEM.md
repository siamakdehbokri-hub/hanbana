# HABANA Product System

## Design Language

- Deep black stage backgrounds.
- Neon green for primary playback and confirmation.
- Warm gold for Kurdish cultural accents, featured moments, and premium editorial signals.
- Glass panels only where a native music app would use floating controls.
- Album art is cinematic, square, and high-contrast.

## Core Screens

- Home: hero, search, continue listening, trending songs, artists, playlists, genres.
- Search: instant suggestions, AI picks, history, genres, top results.
- Artist: cinematic header, verification, socials, popular songs, albums, related artists.
- Album/playlist: sticky actions, duration, track list, likes, share.
- Library: liked songs, downloads, playlists, follows, history, queue presets.
- Auth: sign in, sign up, Google login, password reset, email verification flow.
- Admin: analytics, ingestion, moderation, users, roles, revenue, featured playlists.

## Performance Targets

- Lighthouse 95+ on production.
- Route-level code splitting.
- CDN-backed image and audio delivery.
- HLS adaptive streaming.
- Virtualized long track lists for large playlists.
- Skeleton loading for all remote sections.
- Offline cache for shell, artwork, and selected downloads.
