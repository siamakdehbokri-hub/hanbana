import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "HABANA",
    short_name: "HABANA",
    description: "Premium Kurdish music streaming.",
    start_url: "/",
    display: "standalone",
    background_color: "#050706",
    theme_color: "#1ED760",
    orientation: "portrait-primary",
    categories: ["music", "entertainment"],
    shortcuts: [
      { name: "Search", short_name: "Search", url: "/search", icons: [{ src: "/icons/icon-192.svg", sizes: "192x192" }] },
      { name: "Library", short_name: "Library", url: "/library", icons: [{ src: "/icons/icon-192.svg", sizes: "192x192" }] }
    ],
    icons: [
      { src: "/icons/icon-192.svg", sizes: "192x192", type: "image/svg+xml" },
      { src: "/icons/icon-512.svg", sizes: "512x512", type: "image/svg+xml" }
    ]
  };
}
