import { Module } from '@nestjs/common';
import { VideosService } from './videos.service';
import { VideosResolver } from './videos.resolver';
import { DB_LANDINGPAGE_CONNECTION, VIDEOS_MODEL } from '../constants';
import { Connection } from 'mongoose';
import { VideoSchema } from './schemas/videos.schema';
import { DatabaseModule } from '../database/database.module';
import { StakeholdersModule } from '../stakeholders/stakeholders.module';

export const videosProviders = [
  {
    provide: VIDEOS_MODEL,
    useFactory: (connection: Connection) => connection.model('Video', VideoSchema),
    inject: [DB_LANDINGPAGE_CONNECTION]
  }
];

@Module({
  imports: [
    DatabaseModule,
    StakeholdersModule
  ],
  providers: [
    ...videosProviders,
    VideosService,
    VideosResolver
  ],
  exports: [
    ...videosProviders,
    VideosService,
    VideosResolver
  ]
})
export class VideosModule {}