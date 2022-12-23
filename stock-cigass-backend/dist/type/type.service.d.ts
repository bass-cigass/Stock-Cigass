import { Repository } from 'typeorm';
import { TypeDTO } from './type.dto';
import { TypeEntity } from './type.entity';
export declare class TypeService {
    private typesRepository;
    constructor(typesRepository: Repository<TypeEntity>);
    listAll(): Promise<TypeEntity[]>;
    create(data: TypeDTO): Promise<TypeEntity>;
    findByLibelle(libelle: string): Promise<TypeDTO>;
    read(id: number): Promise<TypeEntity>;
    update(id: number, data: Partial<TypeDTO>): Promise<TypeEntity>;
    destroy(id: number): Promise<{
        deleted: boolean;
    }>;
}
