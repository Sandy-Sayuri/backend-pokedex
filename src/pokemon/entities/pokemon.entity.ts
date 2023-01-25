import { type } from 'os';
import { Film } from 'src/film/entities/film.entity';
import { Type } from 'src/type/entities/type.entity';
import { Entity, Column, PrimaryGeneratedColumn,ManyToOne } from 'typeorm';

@Entity()
export class Pokemon {
    @PrimaryGeneratedColumn()
    id: number

    @Column("varchar", { length: 45, nullable: false })
    name: string

    @Column("varchar", { length: 5, nullable: true })
    imagem: string

    @ManyToOne(() => Type, type => type.id, { nullable: false })
    typeId: string

    @ManyToOne(() => Film, film =>  film.id, { nullable: false })
    filmId: number
}
