import { Controller, Get, Param, Query } from "@nestjs/common";
import { TracksService } from "./tracks.service";

@Controller("tracks")
export class TracksController {
  constructor(private readonly tracks: TracksService) {}

  @Get()
  list(@Query("q") q?: string, @Query("genre") genre?: string) {
    return this.tracks.list({ q, genre });
  }

  @Get(":slug/stream")
  stream(@Param("slug") slug: string) {
    return this.tracks.stream(slug);
  }
}
