import { notFound } from "next/navigation";
import { CalendarDays, Clock, Heart, Play, Share2 } from "lucide-react";
import { albums } from "@/lib/data";
import { AlbumArt } from "@/components/ui/album-art";
import { Button } from "@/components/ui/button";

export default async function AlbumPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const album = albums.find((item) => item.slug === slug);
  if (!album) notFound();
  return (
    <div className="px-4 py-10 sm:px-8 lg:px-10">
      <section className="relative overflow-hidden rounded-[2rem] border border-white/10 p-5 sm:p-8">
        <div className="absolute inset-0 opacity-35" style={{ background: album.cover }} />
        <div className="absolute inset-0 bg-gradient-to-t from-habana-black via-habana-black/70 to-transparent" />
        <div className="relative flex flex-col gap-6 md:flex-row md:items-end">
          <AlbumArt cover={album.cover} title={album.title} className="h-64 w-64" />
          <div>
            <div className="text-sm font-bold uppercase tracking-[0.22em] text-habana-gold">Album</div>
            <h1 className="mt-2 text-5xl font-black sm:text-7xl">{album.title}</h1>
            <p className="mt-4 text-lg text-white/68">{album.artist}</p>
            <div className="mt-3 flex flex-wrap gap-3 text-sm text-white/46">
              <span className="inline-flex items-center gap-2"><CalendarDays className="h-4 w-4" /> {album.releaseDate}</span>
              <span className="inline-flex items-center gap-2"><Clock className="h-4 w-4" /> {album.duration}</span>
              <span>{album.tracks.length} tracks</span>
            </div>
          </div>
        </div>
      </section>
      <div className="sticky top-0 z-20 mt-8 flex gap-3 border-b border-white/10 bg-habana-black/80 py-4 backdrop-blur-xl">
        <Button variant="primary"><Play className="h-4 w-4 fill-current" /> Play Album</Button>
        <Button size="icon" aria-label="Save album"><Heart className="h-5 w-5" /></Button>
        <Button size="icon" aria-label="Share album"><Share2 className="h-5 w-5" /></Button>
      </div>
      <div className="mt-4 overflow-hidden rounded-2xl border border-white/10">
        {album.tracks.map((track, index) => (
          <div key={track.id} className="grid grid-cols-[40px_1fr_80px] gap-3 px-4 py-4 text-sm transition hover:bg-white/8">
            <span className="text-white/40">{index + 1}</span>
            <div><div className="font-bold">{track.title}</div><div className="text-white/45">{track.artist}</div></div>
            <span className="text-white/45">{track.duration}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
