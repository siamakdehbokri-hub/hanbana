import { Controller, Get } from "@nestjs/common";
import { PrismaService } from "../common/prisma.service";

@Controller("home")
export class HomeController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  async feed() {
    const [trending, newReleases, artists, playlists] = await Promise.all([
      this.prisma.track.findMany({ where: { status: "PUBLISHED" }, include: { artist: true, album: true, genre: true }, take: 10, orderBy: { playEvents: { _count: "desc" } } }),
      this.prisma.album.findMany({ include: { artist: true }, take: 10, orderBy: { createdAt: "desc" } }),
      this.prisma.artist.findMany({ take: 10, orderBy: { monthlyListeners: "desc" } }),
      this.prisma.playlist.findMany({ where: { isFeatured: true, isPublic: true }, take: 10, orderBy: { updatedAt: "desc" } })
    ]);
    return { trending, newReleases, artists, playlists };
  }
}
