import { Processor, WorkerHost } from "@nestjs/bullmq";
import { Job } from "bullmq";
import { PrismaService } from "../common/prisma.service";

@Processor("music-ingestion")
export class IngestionProcessor extends WorkerHost {
  constructor(private readonly prisma: PrismaService) {
    super();
  }

  async process(job: Job<{ jobId: string }>) {
    const importJob = await this.prisma.importJob.update({ where: { id: job.data.jobId }, data: { status: "PROCESSING" } });
    const rows = Array.isArray(importJob.payload) ? importJob.payload as Array<Record<string, string>> : [];

    for (const row of rows) {
      const artist = await this.prisma.artist.upsert({
        where: { slug: slugify(row.artist) },
        update: {},
        create: { name: row.artist, slug: slugify(row.artist), imageUrl: row.artistImage, bio: "Imported artist profile." }
      });
      const album = await this.prisma.album.upsert({
        where: { slug: slugify(`${row.album}-${row.artist}`) },
        update: {},
        create: { title: row.album, slug: slugify(`${row.album}-${row.artist}`), coverUrl: row.coverImage, artistId: artist.id }
      });
      const genre = await this.prisma.genre.upsert({
        where: { slug: slugify(row.genre ?? "Kurdish") },
        update: {},
        create: { name: row.genre ?? "Kurdish", slug: slugify(row.genre ?? "Kurdish") }
      });
      await this.prisma.track.upsert({
        where: { slug: slugify(`${row.title}-${row.artist}`) },
        update: {},
        create: {
          title: row.title,
          slug: slugify(`${row.title}-${row.artist}`),
          audioUrl: row.mp3Url,
          hlsUrl: row.hlsUrl,
          coverUrl: row.coverImage,
          artistId: artist.id,
          albumId: album.id,
          genreId: genre.id,
          status: "PENDING_REVIEW",
          aiTags: ["auto-imported", "needs-review"]
        }
      });
    }

    return this.prisma.importJob.update({ where: { id: job.data.jobId }, data: { status: "COMPLETED", completedAt: new Date() } });
  }
}

function slugify(value = "") {
  return value.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
