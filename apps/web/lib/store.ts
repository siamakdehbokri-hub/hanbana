"use client";

import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { tracks, type Track } from "@/lib/data";

type PlayerState = {
  current: Track;
  queue: Track[];
  isPlaying: boolean;
  volume: number;
  repeat: "off" | "one" | "all";
  shuffle: boolean;
  play: (track: Track) => void;
  toggle: () => void;
  next: () => void;
  previous: () => void;
  setVolume: (volume: number) => void;
  toggleShuffle: () => void;
  cycleRepeat: () => void;
};

export const usePlayer = create<PlayerState>()(
  persist(
    (set, get) => ({
      current: tracks[0],
      queue: tracks,
      isPlaying: false,
      volume: 0.78,
      repeat: "off",
      shuffle: false,
      play: (track) => set({ current: track, isPlaying: true }),
      toggle: () => set((state) => ({ isPlaying: !state.isPlaying })),
      next: () => {
        const { current, queue, shuffle } = get();
        const index = queue.findIndex((track) => track.id === current.id);
        const nextTrack = shuffle ? queue[Math.floor(Math.random() * queue.length)] : queue[(index + 1) % queue.length];
        set({ current: nextTrack, isPlaying: true });
      },
      previous: () => {
        const { current, queue } = get();
        const index = queue.findIndex((track) => track.id === current.id);
        set({ current: queue[(index - 1 + queue.length) % queue.length], isPlaying: true });
      },
      setVolume: (volume) => set({ volume }),
      toggleShuffle: () => set((state) => ({ shuffle: !state.shuffle })),
      cycleRepeat: () => set((state) => ({ repeat: state.repeat === "off" ? "all" : state.repeat === "all" ? "one" : "off" }))
    }),
    {
      name: "habana-player",
      storage: createJSONStorage(() =>
        typeof window !== "undefined"
          ? window.localStorage
          : {
              getItem: () => null,
              setItem: () => undefined,
              removeItem: () => undefined
            }
      )
    }
  )
);
