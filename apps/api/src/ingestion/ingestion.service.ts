import { InjectQueue } from "@nestjs/bullmq";
import { Injectable } from "@nestjs/common";
import { Queue } from "bullmq";
import { PrismaService } from "../common/prisma.service";

@Injectable()
export class IngestionService {
  constructor(@InjectQueue("music-ingestion") private readonly queue: Queue, private readonly prisma: PrismaService) {}

  async enqueueJson(sourceName: string, tracks: Array<Record<string, string>>) {
    const job = await this.prisma.importJob.create({ data: { sourceName, type: "JSON", status: "QUEUED", payload: tracks } });
    await this.queue.add("json-import", { jobId: job.id });
    return job;
  }

  async enqueueApi(endpoint: string, token?: string) {
    const job = await this.prisma.importJob.create({ data: { sourceName: endpoint, type: "API", status: "QUEUED", payload: { endpoint, token } } });
    await this.queue.add("api-import", { jobId: job.id });
    return job;
  }
}
