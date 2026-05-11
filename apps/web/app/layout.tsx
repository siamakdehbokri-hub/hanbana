import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/layout/sidebar";
import { MobileNav } from "@/components/layout/mobile-nav";
import { Player } from "@/components/music/player";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });

export const metadata: Metadata = {
  title: {
    default: "HABANA - Kurdish Music Streaming",
    template: "%s | HABANA"
  },
  description: "A premium Kurdish music streaming PWA with adaptive audio, creator tools, and AI recommendations.",
  appleWebApp: {
    capable: true,
    title: "HABANA",
    statusBarStyle: "black-translucent"
  },
  openGraph: {
    title: "HABANA",
    description: "Spotify for Kurdish music, rebuilt as a cinematic PWA.",
    type: "website"
  }
};

export const viewport: Viewport = {
  themeColor: "#1ED760",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${geist.variable} bg-habana-black font-sans antialiased`}>
        <div className="min-h-dvh bg-radial-stage">
          <Sidebar />
          <main className="pb-40 lg:pl-72">
            {children}
          </main>
          <Player />
          <MobileNav />
        </div>
      </body>
    </html>
  );
}
