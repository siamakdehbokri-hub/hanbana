import { Controller, Get, Param } from "@nestjs/common";
import { PrismaService } from "../common/prisma.service";

@Controller("albums")
export class AlbumsController {
  constructor(private readonly prisma: PrismaService) {}

  @Get(":slug")
  detail(@Param("slug") slug: string) {
    return this.prisma.album.findUniqueOrThrow({ where: { slug }, include: { artist: true, tracks: true } });
  }
}
