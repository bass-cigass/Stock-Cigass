import { HttpStatus } from '@nestjs/common';
import { ProductsDTO } from './products.dto';
import { ProductsService } from './products.service';
export declare class ProductsController {
    private produitsService;
    constructor(produitsService: ProductsService);
    listAllProducts(res: any): Promise<any>;
    createProduits(data: ProductsDTO): Promise<{
        statusCode: HttpStatus;
        message: string;
        products: import("./products.entity").ProductsEntity[];
    }>;
    readUser(id: number): Promise<{
        statusCode: HttpStatus;
        message: string;
        data: import("./products.entity").ProductsEntity;
    }>;
    uppdateUser(id: number, data: Partial<ProductsDTO>): Promise<{
        statusCode: HttpStatus;
        message: string;
    }>;
    deleteUser(id: number): Promise<{
        statusCode: HttpStatus;
        message: string;
    }>;
}
