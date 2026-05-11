import { Download, Heart, History, ListMusic, Plus, UserRoundCheck } from "lucide-react";
import { ContentRail } from "@/components/sections/content-rail";

const tiles = [
  { label: "Liked Songs", value: "1,284", icon: Heart },
  { label: "Offline Downloads", value: "184", icon: Download },
  { label: "Created Playlists", value: "27", icon: Plus },
  { label: "Following Artists", value: "96", icon: UserRoundCheck },
  { label: "Listening History", value: "8,430", icon: History },
  { label: "Queue Presets", value: "12", icon: ListMusic }
];

export default function LibraryPage() {
  return (
    <div className="px-4 py-10 sm:px-8 lg:px-10">
      <h1 className="text-5xl font-black sm:text-7xl">Your Library</h1>
      <div className="mt-8 grid grid-cols-2 gap-3 lg:grid-cols-3">
        {tiles.map((tile) => {
          const Icon = tile.icon;
          return <div key={tile.label} className="glass rounded-3xl p-5"><Icon className="h-6 w-6 text-habana-green" /><div className="mt-4 text-3xl font-black">{tile.value}</div><div className="text-sm text-white/52">{tile.label}</div></div>;
        })}
      </div>
      <ContentRail title="Recently Played" />
      <ContentRail title="Saved Albums" />
    </div>
  );
}
