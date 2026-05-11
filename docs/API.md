# HABANA API Surface

## Auth

- `POST /api/v1/auth/signup`
- `POST /api/v1/auth/signin`
- `POST /api/v1/auth/refresh`
- `POST /api/v1/auth/forgot-password`
- `GET /api/v1/auth/google`

## Catalog

- `GET /api/v1/tracks?q=&genre=`
- `GET /api/v1/tracks/:slug/stream`
- `GET /api/v1/artists`
- `GET /api/v1/artists/:slug`
- `GET /api/v1/albums/:slug`
- `GET /api/v1/playlists/:slug`
- `POST /api/v1/playlists`

## Admin

- `GET /api/v1/admin/analytics`
- `POST /api/v1/ingestion/json`
- `POST /api/v1/ingestion/api`

## Import JSON Example

```json
{
  "sourceName": "Kurdish archive batch 01",
  "tracks": [
    {
      "title": "Zagros Afterglow",
      "artist": "Dilan Baran",
      "mp3Url": "https://example.com/zagros.mp3",
      "album": "Mountain Lights",
      "coverImage": "https://example.com/cover.jpg",
      "genre": "Kurdish Pop"
    }
  ]
}
```
