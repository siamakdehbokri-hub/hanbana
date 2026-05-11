"use client";

import { motion } from "framer-motion";
import { Play, Radio, Sparkles } from "lucide-react";
import { AlbumArt } from "@/components/ui/album-art";
import { Button } from "@/components/ui/button";
import { tracks } from "@/lib/data";
import { usePlayer } from "@/lib/store";

export function Hero() {
  const track = tracks[0];
  const play = usePlayer((state) => state.play);
  return (
    <section className="relative min-h-[560px] overflow-hidden px-4 py-6 sm:px-8 lg:px-10">
      <div className="absolute inset-0 opacity-70" style={{ background: track.cover }} />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,7,6,.94),rgba(5,7,6,.58)_48%,rgba(5,7,6,.95)),radial-gradient(circle_at_70%_10%,rgba(255,255,255,.25),transparent_28%)]" />
      <div className="kurdish-thread absolute inset-x-0 top-0 h-16 opacity-25" />
      <div className="relative mx-auto grid max-w-7xl items-end gap-8 pt-16 lg:grid-cols-[1.1fr_.9fr]">
        <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-habana-gold/25 bg-habana-gold/10 px-4 py-2 text-sm font-bold text-habana-amber">
            <Sparkles className="h-4 w-4" /> New Kurdish wave
          </div>
          <h1 className="max-w-3xl text-5xl font-black leading-[0.96] tracking-normal text-white sm:text-7xl lg:text-8xl">
            HABANA
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/72 sm:text-xl">
            A cinematic streaming home for Kurdish music, from mountain ballads to Newroz dance floors and future-facing daf fusion.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button variant="primary" onClick={() => play(track)}><Play className="h-4 w-4 fill-current" /> Play Featured</Button>
            <Button variant="glass"><Radio className="h-4 w-4" /> Start Radio</Button>
          </div>
          <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
            {["2.8M monthly listeners", "95+ Lighthouse target", "HLS adaptive audio"].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.06] p-3 text-sm font-semibold text-white/76 backdrop-blur-xl">{item}</div>
            ))}
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.92, rotate: -2 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 0.8 }} className="relative mx-auto w-full max-w-[430px] pb-8">
          <div className="absolute inset-8 rounded-full bg-habana-green/25 blur-3xl" />
          <AlbumArt cover={track.cover} title={track.album} className="aspect-square w-full rounded-[2rem]" />
          <div className="glass absolute -bottom-2 left-6 right-6 rounded-3xl p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-black">{track.title}</div>
                <div className="text-sm text-white/58">{track.artist} · {track.album}</div>
              </div>
              <div className="flex h-10 items-end gap-1">
                {[0, 120, 240, 80].map((delay) => <span key={delay} className="h-8 w-1 rounded-full bg-habana-green animate-equalize" style={{ animationDelay: `${delay}ms` }} />)}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
