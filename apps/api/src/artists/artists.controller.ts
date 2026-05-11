import { Controller, Get, Param } from "@nestjs/common";
import { PrismaService } from "../common/prisma.service";

@Controller("artists")
export class ArtistsController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  list() {
    return this.prisma.artist.findMany({ orderBy: { monthlyListeners: "desc" }, take: 50 });
  }

  @Get(":slug")
  detail(@Param("slug") slug: string) {
    return this.prisma.artist.findUniqueOrThrow({ where: { slug }, include: { albums: true, tracks: { take: 10 } } });
  }
}
