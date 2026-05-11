import { Body, Controller, Post } from "@nestjs/common";
import { IngestionService } from "./ingestion.service";

@Controller("ingestion")
export class IngestionController {
  constructor(private readonly ingestion: IngestionService) {}

  @Post("json")
  importJson(@Body() body: { sourceName: string; tracks: Array<Record<string, string>> }) {
    return this.ingestion.enqueueJson(body.sourceName, body.tracks);
  }

  @Post("api")
  importApi(@Body() body: { endpoint: string; token?: string }) {
    return this.ingestion.enqueueApi(body.endpoint, body.token);
  }
}
