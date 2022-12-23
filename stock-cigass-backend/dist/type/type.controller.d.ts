import { HttpStatus } from '@nestjs/common';
import { TypeDTO } from './type.dto';
import { TypeService } from './type.service';
export declare class TypeController {
    private typeService;
    constructor(typeService: TypeService);
    listAllTypes(): Promise<{
        statusCode: HttpStatus;
        message: string;
        users: import("./type.entity").TypeEntity[];
    }>;
    createUsers(data: TypeDTO): Promise<{
        statusCode: HttpStatus;
        message: string;
        type: import("./type.entity").TypeEntity;
    }>;
    readUser(id: number): Promise<{
        statusCode: HttpStatus;
        message: string;
        data: import("./type.entity").TypeEntity;
    }>;
    uppdateUser(id: number, data: Partial<TypeDTO>): Promise<{
        statusCode: HttpStatus;
        message: string;
    }>;
    deleteUser(id: number): Promise<{
        statusCode: HttpStatus;
        message: string;
    }>;
}
