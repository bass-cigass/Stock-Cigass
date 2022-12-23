import { Repository } from 'typeorm';
import { UsersDTO } from './users.dto';
import { UsersEntity } from './users.entity';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<UsersEntity>);
    listAll(): Promise<UsersEntity[]>;
    create(data: UsersDTO): Promise<UsersEntity>;
    findByEmail(email: string): Promise<UsersDTO>;
    read(id: number): Promise<UsersEntity>;
    update(id: number, data: Partial<UsersDTO>): Promise<UsersEntity>;
    destroy(id: number): Promise<{
        deleted: boolean;
    }>;
}
