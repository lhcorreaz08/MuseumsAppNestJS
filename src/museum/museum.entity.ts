import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ExhibitionEntity } from '../exhibition/exhibition.entity';
import { ArtworkEntity } from '../artwork/artwork.entity';

@Entity()
export class MuseumEntity {   
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;
    
    @Column()
    description: string;
    
    @Column()
    address: string;
    
    @Column()
    city: string;
   
    @Column()
    image: string;


    @OneToMany(() => ExhibitionEntity, exhibition => exhibition.museum)
    exhibitions: ExhibitionEntity[];

    @OneToMany(() => ArtworkEntity, artwork => artwork.museum)
    artworks: ArtworkEntity[];

}

