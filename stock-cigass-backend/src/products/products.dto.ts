import { EmplacementDto } from "src/emplacement/emplacement.dto";
import { ProjetDTO } from "src/projet/projet.dto";
import { TypeDTO } from "src/type/type.dto";
import { ProductsEntity } from "./products.entity";

export interface ProductsDTO {
    id: number;
    date_entree: Date;
    date_exp: Date;
    ref: string;
    libelle: string;
    projet_: ProjetDTO["id"];
    type_: TypeDTO["id"];
    emplacement_: EmplacementDto["id"];
    

}