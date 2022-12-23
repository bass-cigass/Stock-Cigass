import { ProductsEntity } from 'src/products/products.entity';
import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, OneToMany } from 'typeorm';
    @Entity('type')
    export class TypeEntity {
      @PrimaryGeneratedColumn()
      id: number;

      @Column()
      libelle: string;
      
      @OneToMany(()=> ProductsEntity, (prod) => prod.type)
      typeProd: ProductsEntity[];
    }