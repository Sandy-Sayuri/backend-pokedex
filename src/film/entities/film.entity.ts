import { Entity, Column, PrimaryGeneratedColumn,ManyToOne } from 'typeorm';
export class Film {
    @PrimaryGeneratedColumn()
    id: number

    @Column("varchar", { length: 45, nullable: false })
    name: string

}
