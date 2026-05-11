"use client";

import Link from "next/link";
import { BarChart3, Compass, Heart, Home, Library, Search, Shield, Sparkles } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const nav = [
  { href: "/", label: "Home", icon: Home },
  { href: "/search", label: "Search", icon: Search },
  { href: "/library", label: "Library", icon: Library },
  { href: "/artist/dilan-baran", label: "Artists", icon: Sparkles },
  { href: "/playlist/newroz-heat", label: "Playlists", icon: Heart },
  { href: "/admin", label: "Admin", icon: Shield }
];

export function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="fixed left-0 top-0 z-30 hidden h-dvh w-72 border-r border-white/10 bg-black/35 p-5 backdrop-blur-2xl lg:block">
      <Link href="/" className="mb-9 flex items-center gap-3">
        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-habana-green text-xl font-black text-black shadow-glow">H</div>
        <div>
          <div className="text-2xl font-black tracking-wide">HABANA</div>
          <div className="text-xs uppercase tracking-[0.24em] text-habana-gold">Kurdish Music</div>
        </div>
      </Link>
      <nav className="space-y-2">
        {nav.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;
          return (
            <Link key={item.href} href={item.href} className={cn("flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-white/66 transition hover:bg-white/10 hover:text-white", active && "bg-white/12 text-white shadow-glow")}>
              <Icon className="h-5 w-5" />
              {item.label}
            </Link>
          );
        })}
      </nav>
      <div className="absolute bottom-6 left-5 right-5 rounded-2xl border border-habana-gold/20 bg-habana-gold/10 p-4">
        <div className="flex items-center gap-2 text-sm font-bold text-habana-amber"><BarChart3 className="h-4 w-4" /> Creator Pulse</div>
        <p className="mt-2 text-sm leading-5 text-white/58">Streaming analytics, ingestion queues, and featured culture moments are ready in Admin.</p>
      </div>
    </aside>
  );
}
