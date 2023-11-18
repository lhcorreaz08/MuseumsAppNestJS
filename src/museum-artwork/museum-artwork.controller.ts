/* eslint-disable prettier/prettier */
import { Controller, UseInterceptors } from '@nestjs/common';
import { BusinessErrorsInterceptor } from '../shared/interceptors/business-errors/business-errors.interceptor';
import { MuseumArtworkService } from './museum-artwork.service';
import { Post, Param, Get, Put, Body, Delete, HttpCode } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { ArtworkDto } from '../artwork/artwork.dto/artwork.dto';
import { ArtworkEntity } from '../artwork/artwork.entity';


@Controller('museums')
@UseInterceptors(BusinessErrorsInterceptor)
export class MuseumArtworkController {
   constructor(private readonly museumArtworkService: MuseumArtworkService){}

   @Post(':museumId/artworks/:artworkId')
   async addArtworkMuseum(@Param('museumId') museumId: string, @Param('artworkId') artworkId: string){
       return await this.museumArtworkService.addArtworkMuseum(museumId, artworkId);
   }

   @Get(':museumId/artworks/:artworkId')
   async findArtworkByMuseumIdArtworkId(@Param('museumId') museumId: string, @Param('artworkId') artworkId: string){
       return await this.museumArtworkService.findArtworkByMuseumIdArtworkId(museumId, artworkId);
   }

   @Get(':museumId/artworks')
   async findArtworksByMuseumId(@Param('museumId') museumId: string){
       return await this.museumArtworkService.findArtworksByMuseumId(museumId);
   }

   @Put(':museumId/artworks')
   async associateArtworksMuseum(@Body() artworksDto: ArtworkDto[], @Param('museumId') museumId: string){
       const artworks = plainToInstance(ArtworkEntity, artworksDto)
       return await this.museumArtworkService.associateArtworksMuseum(museumId, artworks);
   }

   @Delete(':museumId/artworks/:artworkId')
   @HttpCode(204)
   async deleteArtworkMuseum(@Param('museumId') museumId: string, @Param('artworkId') artworkId: string){
       return await this.museumArtworkService.deleteArtworkMuseum(museumId, artworkId);
   }

}