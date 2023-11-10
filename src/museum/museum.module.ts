import { Module } from '@nestjs/common';
import { MuseumService } from './museum.service';

@Module({
  providers: [MuseumService]
})
export class MuseumModule {}
