import { Activity, BadgeCheck, Database, FileJson, Gauge, Music2, RadioTower, Shield, UploadCloud, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { label: "Streams today", value: "428K", icon: Activity },
  { label: "Queued imports", value: "36", icon: FileJson },
  { label: "Pending approvals", value: "14", icon: BadgeCheck },
  { label: "Active users", value: "82K", icon: Users }
];

const modules = [
  "Upload songs, albums, and artist images",
  "Bulk JSON and CSV music import",
  "API ingestion with duplicate detection",
  "Auto metadata, cover art, slug, and HLS generation",
  "Role permissions, user bans, and moderation",
  "Revenue, retention, and most-played analytics"
];

export default function AdminPage() {
  return (
    <div className="px-4 py-10 sm:px-8 lg:px-10">
      <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="mb-2 text-sm font-bold uppercase tracking-[0.22em] text-habana-gold">Admin Studio</div>
          <h1 className="text-5xl font-black sm:text-7xl">Control Room</h1>
          <p className="mt-4 max-w-2xl text-white/62">Professional content operations for a streaming catalog that can grow without manual song-by-song work.</p>
        </div>
        <Button variant="primary"><UploadCloud className="h-4 w-4" /> New Import</Button>
      </div>
      <section className="mt-8 grid gap-3 md:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return <div key={stat.label} className="glass rounded-3xl p-5"><Icon className="h-6 w-6 text-habana-green" /><div className="mt-4 text-3xl font-black">{stat.value}</div><div className="text-sm text-white/52">{stat.label}</div></div>;
        })}
      </section>
      <section className="mt-8 grid gap-4 lg:grid-cols-[1.1fr_.9fr]">
        <div className="glass rounded-3xl p-5">
          <h2 className="mb-5 text-2xl font-black">Automated Ingestion Pipeline</h2>
          <div className="grid gap-3">
            {["Validate JSON/CSV/API payload", "Create or merge artists and albums", "Fetch cover art and extract audio metadata", "Transcode MP3 to HLS adaptive variants", "AI tag mood, genre, language, and similarity", "Publish or route to moderation queue"].map((step, index) => (
              <div key={step} className="flex items-center gap-4 rounded-2xl bg-white/8 p-4">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-habana-green font-black text-black">{index + 1}</span>
                <span className="font-semibold">{step}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="glass rounded-3xl p-5">
          <h2 className="mb-5 text-2xl font-black">Operations</h2>
          <div className="grid gap-3">
            {modules.map((module, index) => {
              const icons = [Music2, FileJson, Database, RadioTower, Shield, Gauge];
              const Icon = icons[index];
              return <div key={module} className="flex items-center gap-3 rounded-2xl bg-white/8 p-4"><Icon className="h-5 w-5 text-habana-gold" /><span className="text-sm font-semibold text-white/72">{module}</span></div>;
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
