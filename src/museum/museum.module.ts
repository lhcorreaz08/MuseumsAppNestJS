import { Module } from '@nestjs/common';
import { MuseumService } from './museum.service';
import { MuseumController } from './museum.controller';

@Module({
  providers: [MuseumService],
  controllers: [MuseumController]
})
export class MuseumModule {}
