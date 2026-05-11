"use client";

import { Search, SlidersHorizontal, Sparkles } from "lucide-react";
import { ContentRail } from "@/components/sections/content-rail";
import { Button } from "@/components/ui/button";
import { artists, genres, playlists, tracks } from "@/lib/data";
import Link from "next/link";

export default function SearchPage() {
  return (
    <div className="px-4 py-8 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-4xl font-black sm:text-6xl">Search</h1>
        <div className="mt-6 flex gap-3">
          <label className="glass flex flex-1 items-center gap-3 rounded-2xl px-5 py-4">
            <Search className="h-5 w-5 text-white/55" />
            <input className="w-full bg-transparent outline-none placeholder:text-white/40" placeholder="Try Dilan Baran, Govand, Newroz, acoustic..." />
          </label>
          <Button size="icon" aria-label="Filters"><SlidersHorizontal className="h-5 w-5" /></Button>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {["AI picks", "Typo tolerant", "Trending now", "Recent searches"].map((tag) => <span key={tag} className="rounded-full bg-white/10 px-3 py-2 text-sm text-white/68">{tag}</span>)}
        </div>
      </div>
      <section className="mt-8 grid gap-3 md:grid-cols-3">
        {genres.map((genre, index) => <Link href="#" key={genre} className="rounded-2xl p-5 text-xl font-black" style={{ background: tracks[index % tracks.length].cover }}>{genre}</Link>)}
      </section>
      <section className="mt-8 grid gap-4 lg:grid-cols-[1.1fr_.9fr]">
        <div className="glass rounded-3xl p-5">
          <div className="mb-4 flex items-center gap-2 text-habana-gold"><Sparkles className="h-5 w-5" /><h2 className="font-black">Smart Suggestions</h2></div>
          <div className="space-y-3">
            {tracks.map((track) => <div key={track.id} className="flex items-center justify-between border-b border-white/10 pb-3 last:border-0"><div><div className="font-bold">{track.title}</div><div className="text-sm text-white/48">{track.artist} · {track.genre}</div></div><span className="text-sm text-white/42">{track.duration}</span></div>)}
          </div>
        </div>
        <div className="glass rounded-3xl p-5">
          <h2 className="mb-4 font-black">Top Results</h2>
          <div className="space-y-3">
            {artists.map((artist) => <Link href={`/artist/${artist.slug}`} key={artist.slug} className="block rounded-2xl bg-white/8 p-4 hover:bg-white/12"><div className="font-bold">{artist.name}</div><div className="text-sm text-white/50">{artist.listeners} monthly listeners</div></Link>)}
            {playlists.slice(0, 2).map((playlist) => <Link href={`/playlist/${playlist.slug}`} key={playlist.slug} className="block rounded-2xl bg-white/8 p-4 hover:bg-white/12"><div className="font-bold">{playlist.title}</div><div className="text-sm text-white/50">{playlist.subtitle}</div></Link>)}
          </div>
        </div>
      </section>
      <ContentRail title="Search Discovery" items={tracks} />
    </div>
  );
}
