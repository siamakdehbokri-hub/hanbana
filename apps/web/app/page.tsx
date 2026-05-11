import { Hero } from "@/components/sections/hero";
import { ContentRail } from "@/components/sections/content-rail";
import { artists, genres, playlists, tracks } from "@/lib/data";
import { AlbumArt } from "@/components/ui/album-art";
import Link from "next/link";
import { Search } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className="px-4 pt-4 sm:px-8 lg:px-10">
        <label className="glass mx-auto flex max-w-3xl items-center gap-3 rounded-2xl px-5 py-4 text-white/55">
          <Search className="h-5 w-5" />
          <input className="w-full bg-transparent text-base text-white outline-none placeholder:text-white/40" placeholder="Search Kurdish songs, artists, albums, and moods" />
        </label>
      </section>
      <ContentRail title="Continue Listening" eyebrow="Personalized" />
      <ContentRail title="Trending Kurdish Songs" eyebrow="Live in HABANA" items={[...tracks].reverse()} />
      <section className="px-4 py-6 sm:px-8 lg:px-10">
        <div className="mb-4 flex items-end justify-between"><h2 className="text-2xl font-black sm:text-3xl">Popular Artists</h2><Link href="/search" className="text-sm font-bold text-white/55">View all</Link></div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {artists.map((artist) => (
            <Link href={`/artist/${artist.slug}`} key={artist.slug} className="rounded-2xl border border-white/10 bg-white/[0.055] p-4 transition hover:bg-white/[0.09]">
              <AlbumArt cover={artist.image} title={artist.name} className="mx-auto aspect-square w-full rounded-full" />
              <div className="mt-4 text-center font-black">{artist.name}</div>
              <div className="text-center text-sm text-white/50">{artist.listeners} monthly listeners</div>
            </Link>
          ))}
        </div>
      </section>
      <section className="grid gap-6 px-4 py-6 sm:px-8 lg:grid-cols-[1fr_.8fr] lg:px-10">
        <div>
          <h2 className="mb-4 text-2xl font-black sm:text-3xl">Recommended Playlists</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {playlists.map((playlist) => (
              <Link href={`/playlist/${playlist.slug}`} key={playlist.slug} className="glass flex items-center gap-4 rounded-2xl p-3 transition hover:bg-white/15">
                <AlbumArt cover={playlist.cover} title={playlist.title} className="h-20 w-20 shrink-0" />
                <div><div className="font-black">{playlist.title}</div><div className="text-sm text-white/52">{playlist.subtitle}</div><div className="mt-2 text-xs text-habana-gold">{playlist.count}</div></div>
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="mb-4 text-2xl font-black sm:text-3xl">Kurdish Genres</h2>
          <div className="grid grid-cols-2 gap-3">
            {genres.map((genre, index) => (
              <Link href={`/search?genre=${encodeURIComponent(genre)}`} key={genre} className="min-h-28 overflow-hidden rounded-2xl border border-white/10 p-4 font-black shadow-2xl transition hover:scale-[1.02]" style={{ background: tracks[index % tracks.length].cover }}>
                <span className="drop-shadow-lg">{genre}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
