import withPWA from "next-pwa";

const enablePwa = process.env.NEXT_PUBLIC_ENABLE_PWA === "true";

const pwa = withPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development" || !enablePwa,
  runtimeCaching: [
    {
      urlPattern: /^https?.*\.(?:mp3|m4a|aac|ogg|wav|m3u8|ts)$/i,
      handler: "CacheFirst",
      options: {
        cacheName: "habana-audio",
        expiration: { maxEntries: 80, maxAgeSeconds: 60 * 60 * 24 * 30 },
        rangeRequests: true
      }
    },
    {
      urlPattern: /^https?.*\.(?:png|jpg|jpeg|webp|avif)$/i,
      handler: "StaleWhileRevalidate",
      options: {
        cacheName: "habana-artwork",
        expiration: { maxEntries: 180, maxAgeSeconds: 60 * 60 * 24 * 14 }
      }
    },
    {
      urlPattern: /\/api\/(home|search|recommendations|me)/,
      handler: "NetworkFirst",
      options: {
        cacheName: "habana-api",
        networkTimeoutSeconds: 3,
        expiration: { maxEntries: 100, maxAgeSeconds: 60 * 15 }
      }
    }
  ]
});

export default pwa({
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"]
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "cdn.habana.app" }
    ]
  }
});
