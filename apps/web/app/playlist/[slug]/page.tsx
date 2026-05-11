import { notFound } from "next/navigation";
import { Clock, Heart, MoreHorizontal, Play, Share2 } from "lucide-react";
import { playlists, tracks } from "@/lib/data";
import { AlbumArt } from "@/components/ui/album-art";
import { Button } from "@/components/ui/button";

export default async function PlaylistPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const playlist = playlists.find((item) => item.slug === slug);
  if (!playlist) notFound();
  return (
    <div className="px-4 py-10 sm:px-8 lg:px-10">
      <section className="flex flex-col gap-6 md:flex-row md:items-end">
        <AlbumArt cover={playlist.cover} title={playlist.title} className="h-64 w-64" />
        <div>
          <div className="text-sm font-bold uppercase tracking-[0.22em] text-habana-gold">Playlist</div>
          <h1 className="mt-2 text-5xl font-black sm:text-7xl">{playlist.title}</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/66">{playlist.subtitle}</p>
          <p className="mt-2 text-sm text-white/46">HABANA · {playlist.count} · 3 hr 12 min</p>
        </div>
      </section>
      <div className="sticky top-0 z-20 mt-8 flex gap-3 border-b border-white/10 bg-habana-black/80 py-4 backdrop-blur-xl">
        <Button variant="primary"><Play className="h-4 w-4 fill-current" /> Play</Button>
        <Button size="icon" aria-label="Like"><Heart className="h-5 w-5" /></Button>
        <Button size="icon" aria-label="Share"><Share2 className="h-5 w-5" /></Button>
        <Button size="icon" aria-label="More"><MoreHorizontal className="h-5 w-5" /></Button>
      </div>
      <div className="mt-4 overflow-hidden rounded-2xl border border-white/10">
        <div className="grid grid-cols-[40px_1fr_100px_70px] gap-3 border-b border-white/10 bg-white/5 px-4 py-3 text-sm text-white/42"><span>#</span><span>Title</span><span>Plays</span><Clock className="h-4 w-4" /></div>
        {tracks.map((track, index) => (
          <div key={track.id} className="grid grid-cols-[40px_1fr_100px_70px] gap-3 px-4 py-3 text-sm transition hover:bg-white/8">
            <span className="text-white/40">{index + 1}</span>
            <div><div className="font-bold">{track.title}</div><div className="text-white/45">{track.artist}</div></div>
            <span className="text-white/45">{track.plays}</span>
            <span className="text-white/45">{track.duration}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
