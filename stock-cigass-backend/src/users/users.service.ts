import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsersDTO } from './users.dto';
import { UsersEntity } from './users.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UsersEntity)
        private usersRepository: Repository<UsersEntity>,
      ) {}
    
      async listAll() {
        return await this.usersRepository.find();
      }

      async create(data: UsersDTO) {
        const user = this.usersRepository.create(data);
        await this.usersRepository.save(data);
        return user;
      }

      async findByEmail(email: string): Promise<UsersDTO> {
        return await this.usersRepository.findOne({
          where: {
            email: email,
          },
        });
      }

      async read(id: number) {
        return await this.usersRepository.findOne({ where: { id: id } });
      }

      async update(id: number, data: Partial<UsersDTO>) {
        await this.usersRepository.update({ id }, data);
        return await this.usersRepository.findOne({ where :{
            id : id
        }});
      }

      async destroy(id: number) {
        await this.usersRepository.delete({ id });
        return { deleted: true };
      }
}
