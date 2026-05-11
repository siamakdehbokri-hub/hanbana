import { notFound } from "next/navigation";
import { BadgeCheck, Instagram, LinkIcon, Play, Twitter } from "lucide-react";
import { artists, tracks } from "@/lib/data";
import { AlbumArt } from "@/components/ui/album-art";
import { Button } from "@/components/ui/button";
import { ContentRail } from "@/components/sections/content-rail";

export default async function ArtistPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const artist = artists.find((item) => item.slug === slug);
  if (!artist) notFound();
  return (
    <div>
      <section className="relative overflow-hidden px-4 py-12 sm:px-8 lg:px-10">
        <div className="absolute inset-0 opacity-55" style={{ background: artist.image }} />
        <div className="absolute inset-0 bg-gradient-to-t from-habana-black via-habana-black/78 to-habana-black/35" />
        <div className="relative flex flex-col gap-6 md:flex-row md:items-end">
          <AlbumArt cover={artist.image} title={artist.name} className="h-56 w-56 rounded-full" />
          <div>
            <div className="mb-3 flex items-center gap-2 text-sm font-bold text-habana-mint">{artist.verified && <BadgeCheck className="h-5 w-5" />} Verified Artist</div>
            <h1 className="text-5xl font-black sm:text-7xl">{artist.name}</h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-white/72">{artist.bio}</p>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <Button variant="primary"><Play className="h-4 w-4 fill-current" /> Play</Button>
              <Button>Follow</Button>
              <Button size="icon" aria-label="Instagram"><Instagram className="h-4 w-4" /></Button>
              <Button size="icon" aria-label="Twitter"><Twitter className="h-4 w-4" /></Button>
              <Button size="icon" aria-label="Website"><LinkIcon className="h-4 w-4" /></Button>
              <span className="text-sm text-white/55">{artist.listeners} monthly listeners</span>
            </div>
          </div>
        </div>
      </section>
      <ContentRail title="Popular Songs" items={tracks} />
      <ContentRail title="Albums" items={[...tracks].reverse()} />
      <ContentRail title="Related Artists" items={tracks.slice(1)} />
    </div>
  );
}
