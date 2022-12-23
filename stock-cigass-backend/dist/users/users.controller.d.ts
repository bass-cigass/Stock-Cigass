import { HttpStatus } from '@nestjs/common';
import { UsersDTO } from './users.dto';
import { UsersService } from './users.service';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    listAllUsers(res: any): Promise<any>;
    createUsers(data: UsersDTO): Promise<{
        statusCode: HttpStatus;
        message: string;
        user: import("./users.entity").UsersEntity;
    }>;
    readUser(id: number): Promise<{
        statusCode: HttpStatus;
        message: string;
        data: import("./users.entity").UsersEntity;
    }>;
    uppdateUser(id: number, data: Partial<UsersDTO>): Promise<{
        statusCode: HttpStatus;
        message: string;
    }>;
    deleteUser(id: number): Promise<{
        statusCode: HttpStatus;
        message: string;
    }>;
}
