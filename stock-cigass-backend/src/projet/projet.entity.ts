import { ProductsEntity } from 'src/products/products.entity';
import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, OneToMany } from 'typeorm';
    @Entity('type')
    export class ProjetEntity {
      @PrimaryGeneratedColumn()
      id: number;

      @Column()
      nom: string;

      @OneToMany(()=> ProductsEntity, (prod) => prod.projet)
      projetProd: ProductsEntity[];
    }