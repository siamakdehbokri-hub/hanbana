import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { PrismaService } from "../common/prisma.service";

@Controller("playlists")
export class PlaylistsController {
  constructor(private readonly prisma: PrismaService) {}

  @Get(":slug")
  detail(@Param("slug") slug: string) {
    return this.prisma.playlist.findUniqueOrThrow({ where: { slug }, include: { tracks: { include: { track: true }, orderBy: { position: "asc" } } } });
  }

  @Post()
  create(@Body() body: { name: string; userId: string; description?: string }) {
    return this.prisma.playlist.create({ data: { name: body.name, slug: body.name.toLowerCase().replaceAll(" ", "-"), userId: body.userId, description: body.description } });
  }
}
