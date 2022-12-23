import { Repository } from 'typeorm';
import { ProductsEntity } from './products.entity';
export declare class ProductsService {
    private produitsRepository;
    constructor(produitsRepository: Repository<ProductsEntity>);
    listAll(): Promise<ProductsEntity[]>;
    create(data: any): Promise<ProductsEntity[]>;
    read(id: number): Promise<ProductsEntity>;
    update(id: number, data: any): Promise<ProductsEntity>;
    destroy(id: number): Promise<{
        deleted: boolean;
    }>;
}
