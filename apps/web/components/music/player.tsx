"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Airplay, Cast, Heart, ListMusic, Maximize2, Pause, Play, Repeat, Shuffle, SkipBack, SkipForward, Volume2 } from "lucide-react";
import { AlbumArt } from "@/components/ui/album-art";
import { Button } from "@/components/ui/button";
import { usePlayer } from "@/lib/store";
import { cn } from "@/lib/utils";

export function Player() {
  const { current, isPlaying, toggle, next, previous, volume, setVolume, shuffle, toggleShuffle, repeat, cycleRepeat } = usePlayer();
  return (
    <AnimatePresence>
      <motion.footer
        initial={{ y: 120, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-black/72 px-4 pb-20 pt-3 backdrop-blur-2xl lg:left-72 lg:pb-4"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-[1fr_auto] items-center gap-3 lg:grid-cols-[1fr_1.4fr_1fr]">
          <div className="flex min-w-0 items-center gap-3">
            <AlbumArt cover={current.cover} title={current.album} className="h-14 w-14 shrink-0" />
            <div className="min-w-0">
              <div className="truncate text-sm font-bold">{current.title}</div>
              <div className="truncate text-xs text-white/55">{current.artist}</div>
            </div>
            <Button size="icon" variant="ghost" aria-label="Like track" className="hidden sm:inline-flex"><Heart className="h-4 w-4" /></Button>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-1 sm:gap-2">
              <Button size="icon" variant="ghost" aria-label="Shuffle" onClick={toggleShuffle} className={cn(shuffle && "text-habana-green")}><Shuffle className="h-4 w-4" /></Button>
              <Button size="icon" variant="ghost" aria-label="Previous" onClick={previous}><SkipBack className="h-5 w-5" /></Button>
              <Button size="icon" variant="primary" aria-label={isPlaying ? "Pause" : "Play"} onClick={toggle}>{isPlaying ? <Pause className="h-5 w-5 fill-current" /> : <Play className="h-5 w-5 fill-current" />}</Button>
              <Button size="icon" variant="ghost" aria-label="Next" onClick={next}><SkipForward className="h-5 w-5" /></Button>
              <Button size="icon" variant="ghost" aria-label="Repeat" onClick={cycleRepeat} className={cn(repeat !== "off" && "text-habana-green")}><Repeat className="h-4 w-4" /></Button>
            </div>
            <div className="hidden w-full max-w-xl items-center gap-2 text-[11px] text-white/45 sm:flex">
              <span>1:18</span>
              <div className="h-1 flex-1 overflow-hidden rounded-full bg-white/12"><motion.div className="h-full rounded-full bg-habana-green" animate={{ width: isPlaying ? "46%" : "34%" }} /></div>
              <span>{current.duration}</span>
            </div>
          </div>
          <div className="hidden items-center justify-end gap-2 lg:flex">
            <Button size="icon" variant="ghost" aria-label="Queue"><ListMusic className="h-4 w-4" /></Button>
            <Button size="icon" variant="ghost" aria-label="AirPlay"><Airplay className="h-4 w-4" /></Button>
            <Button size="icon" variant="ghost" aria-label="Chromecast"><Cast className="h-4 w-4" /></Button>
            <Volume2 className="h-4 w-4 text-white/55" />
            <input aria-label="Volume" value={volume} min={0} max={1} step={0.01} onChange={(event) => setVolume(Number(event.target.value))} type="range" className="w-24 accent-habana-green" />
            <Button size="icon" variant="ghost" aria-label="Fullscreen player"><Maximize2 className="h-4 w-4" /></Button>
          </div>
        </div>
      </motion.footer>
    </AnimatePresence>
  );
}
