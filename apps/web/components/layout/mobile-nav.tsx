"use client";

import Link from "next/link";
import { Home, Library, Search, Shield, User } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const items = [
  { href: "/", label: "Home", icon: Home },
  { href: "/search", label: "Search", icon: Search },
  { href: "/library", label: "Library", icon: Library },
  { href: "/admin", label: "Admin", icon: Shield },
  { href: "/auth", label: "Profile", icon: User }
];

export function MobileNav() {
  const pathname = usePathname();
  return (
    <nav className="fixed inset-x-3 bottom-3 z-50 grid grid-cols-5 rounded-3xl border border-white/10 bg-black/70 p-2 shadow-2xl backdrop-blur-2xl lg:hidden">
      {items.map((item) => {
        const Icon = item.icon;
        const active = pathname === item.href;
        return (
          <Link key={item.href} href={item.href} className={cn("flex h-12 flex-col items-center justify-center gap-1 rounded-2xl text-[11px] font-semibold text-white/55", active && "bg-habana-green text-black")}>
            <Icon className="h-4 w-4" />
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
