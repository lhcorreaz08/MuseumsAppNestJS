/* eslint-disable prettier/prettier */
/* archivo: src/museum/museum.service.ts */
import { CacheModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MuseumEntity } from './museum.entity';
import { MuseumService } from './museum.service';
import { MuseumController } from './museum.controller';
import { MuseumResolver } from './museum.resolver';

@Module({
  providers: [MuseumService, MuseumResolver],
  imports: [TypeOrmModule.forFeature([MuseumEntity]), CacheModule.register()],
  controllers: [MuseumController],
})
export class MuseumModule {}
