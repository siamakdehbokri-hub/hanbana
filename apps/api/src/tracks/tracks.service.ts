import { Injectable } from "@nestjs/common";
import { PrismaService } from "../common/prisma.service";

@Injectable()
export class TracksService {
  constructor(private readonly prisma: PrismaService) {}

  list(filter: { q?: string; genre?: string }) {
    return this.prisma.track.findMany({
      where: {
        status: "PUBLISHED",
        title: filter.q ? { contains: filter.q, mode: "insensitive" } : undefined,
        genre: filter.genre ? { slug: filter.genre } : undefined
      },
      include: { artist: true, album: true, genre: true },
      take: 50,
      orderBy: { createdAt: "desc" }
    });
  }

  async stream(slug: string) {
    const track = await this.prisma.track.findUniqueOrThrow({ where: { slug } });
    return {
      hlsUrl: track.hlsUrl,
      fallbackUrl: track.audioUrl,
      waveformUrl: track.waveformUrl,
      license: "signed-cdn-url-issued-here"
    };
  }
}
