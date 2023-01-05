import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, OneToOne, JoinColumn, IsNull, ManyToOne } from 'typeorm';
    import * as crypto from 'crypto';
import { TypeEntity } from 'src/type/type.entity';
import { Type } from '@angular/core';
import { EmplacementEntity } from 'src/emplacement/emplacement.entity';
import { isEmpty } from 'rxjs';
import { ProjetEntity } from 'src/projet/projet.entity';
    @Entity('produits')
    export class ProductsEntity {
      @PrimaryGeneratedColumn()
      id: number;

      @Column()
      date_entree : Date;

    @ManyToOne(() => TypeEntity, (type) => type.typeProd)
    type: TypeEntity;
  
    @ManyToOne(() => ProjetEntity, (projet) => projet.projetProd)
    projet: ProjetEntity;

    @ManyToOne(() => EmplacementEntity, (emplacement) => emplacement.produits)
    emplacement: EmplacementEntity;

    @Column()
    ref : string;

    @Column()
    libelle:string;

    @Column()
    date_exp : Date;

    @Column()
    quantite: number;

    @Column()
    unite: string;
   
    @Column()
    seuil: number;

    }