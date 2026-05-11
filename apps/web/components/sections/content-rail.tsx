"use client";

import Link from "next/link";
import { Play } from "lucide-react";
import { AlbumArt } from "@/components/ui/album-art";
import { Button } from "@/components/ui/button";
import { tracks, type Track } from "@/lib/data";
import { usePlayer } from "@/lib/store";

export function ContentRail({ title, eyebrow, items = tracks }: { title: string; eyebrow?: string; items?: Track[] }) {
  const play = usePlayer((state) => state.play);
  return (
    <section className="px-4 py-6 sm:px-8 lg:px-10">
      <div className="mb-4 flex items-end justify-between gap-4">
        <div>
          {eyebrow ? <div className="mb-1 text-xs font-bold uppercase tracking-[0.22em] text-habana-gold">{eyebrow}</div> : null}
          <h2 className="text-2xl font-black text-white sm:text-3xl">{title}</h2>
        </div>
        <Link href="/search" className="text-sm font-bold text-white/55 hover:text-white">View all</Link>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5">
        {items.map((track) => (
          <article key={track.id} className="group rounded-2xl border border-white/10 bg-white/[0.055] p-3 transition hover:-translate-y-1 hover:bg-white/[0.09]">
            <div className="relative">
              <AlbumArt cover={track.cover} title={track.album} className="aspect-square w-full" />
              <Button size="icon" variant="primary" aria-label={`Play ${track.title}`} onClick={() => play(track)} className="absolute bottom-3 right-3 translate-y-2 opacity-0 shadow-2xl transition group-hover:translate-y-0 group-hover:opacity-100">
                <Play className="h-5 w-5 fill-current" />
              </Button>
            </div>
            <h3 className="mt-3 truncate font-bold">{track.title}</h3>
            <p className="truncate text-sm text-white/52">{track.artist}</p>
            <div className="mt-2 flex items-center justify-between text-xs text-white/38">
              <span>{track.genre}</span>
              <span>{track.plays}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
