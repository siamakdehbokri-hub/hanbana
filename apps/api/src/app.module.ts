import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { BullModule } from "@nestjs/bullmq";
import { AuthModule } from "./auth/auth.module";
import { TracksModule } from "./tracks/tracks.module";
import { ArtistsModule } from "./artists/artists.module";
import { AlbumsModule } from "./albums/albums.module";
import { PlaylistsModule } from "./playlists/playlists.module";
import { AdminModule } from "./admin/admin.module";
import { IngestionModule } from "./ingestion/ingestion.module";
import { RecommendationsModule } from "./recommendations/recommendations.module";
import { CommonModule } from "./common/common.module";
import { HomeModule } from "./home/home.module";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    BullModule.forRoot({
      connection: {
        host: process.env.REDIS_HOST ?? "localhost",
        port: Number(process.env.REDIS_PORT ?? 6379)
      }
    }),
    AuthModule,
    TracksModule,
    ArtistsModule,
    AlbumsModule,
    PlaylistsModule,
    AdminModule,
    IngestionModule,
    RecommendationsModule,
    HomeModule,
    CommonModule
  ],
  providers: []
})
export class AppModule {}
