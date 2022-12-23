import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('magasin')
export class Magasin {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    designation: string;

    @Column()
    type:string;

}
