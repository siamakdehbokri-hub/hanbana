import { Controller, Get } from "@nestjs/common";
import { PrismaService } from "../common/prisma.service";

@Controller("admin")
export class AdminController {
  constructor(private readonly prisma: PrismaService) {}

  @Get("analytics")
  async analytics() {
    const [users, tracks, streams, imports] = await Promise.all([
      this.prisma.user.count(),
      this.prisma.track.count(),
      this.prisma.playEvent.count(),
      this.prisma.importJob.count({ where: { status: "PROCESSING" } })
    ]);
    return { users, tracks, streams, imports };
  }
}
