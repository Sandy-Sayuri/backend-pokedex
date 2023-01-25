
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Type {
    @PrimaryGeneratedColumn()
    id: number

    @Column("varchar", { length: 45, nullable: false })
    name: string
}