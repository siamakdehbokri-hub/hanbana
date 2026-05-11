import { cn } from "@/lib/utils";

export function AlbumArt({ cover, className, title }: { cover: string; className?: string; title?: string }) {
  return (
    <div
      aria-label={title}
      className={cn("relative overflow-hidden rounded-md shadow-2xl", className)}
      style={{ background: cover }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,.45),transparent_24%),linear-gradient(145deg,rgba(0,0,0,0),rgba(0,0,0,.45))]" />
      <div className="absolute bottom-4 left-4 right-4 h-1 rounded-full bg-white/35" />
      <div className="absolute inset-x-5 top-5 h-10 rounded-full border border-white/20" />
    </div>
  );
}
