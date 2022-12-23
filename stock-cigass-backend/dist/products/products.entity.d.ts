import { TypeEntity } from 'src/type/type.entity';
import { EmplacementEntity } from 'src/emplacement/emplacement.entity';
import { ProjetEntity } from 'src/projet/projet.entity';
export declare class ProductsEntity {
    id: number;
    date: Date;
    type: TypeEntity;
    projet: ProjetEntity;
    emplacement: EmplacementEntity;
    ref: string;
    libelle: string;
    date_exp: Date;
    quantite: number;
    unite: string;
    seuil: number;
}
