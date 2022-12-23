import { Magasin } from 'src/magasin/entities/magasin.entity';
import { ProductsEntity } from 'src/products/products.entity';
import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, OneToOne, JoinColumn, OneToMany } from 'typeorm';
    @Entity('emplacement')
    export class EmplacementEntity {
      @PrimaryGeneratedColumn()
      id : number;

      // @OneToOne(() => Magasin)
      // @JoinColumn()
      // localisation_id : Magasin;
      
      @Column()
      designation : string;
      
      @OneToMany(()=> ProductsEntity, (prod) => prod.emplacement)
      produits: ProductsEntity[];
    }