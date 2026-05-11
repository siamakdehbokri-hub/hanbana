import { Controller, Get, Query } from "@nestjs/common";
import { PrismaService } from "../common/prisma.service";

@Controller("recommendations")
export class RecommendationsController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  async personalized(@Query("userId") userId?: string, @Query("mood") mood?: string) {
    const history = userId ? await this.prisma.playEvent.findMany({ where: { userId }, include: { track: true }, take: 50, orderBy: { createdAt: "desc" } }) : [];
    const genreIds = history.map((event) => event.track.genreId).filter(Boolean) as string[];
    return this.prisma.track.findMany({
      where: {
        status: "PUBLISHED",
        genreId: genreIds.length ? { in: genreIds } : undefined,
        aiTags: mood ? { has: mood } : undefined
      },
      include: { artist: true, album: true },
      take: 30
    });
  }
}
