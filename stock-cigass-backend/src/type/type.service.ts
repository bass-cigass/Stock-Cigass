import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TypeDTO } from './type.dto';
import { TypeEntity } from './type.entity';

@Injectable()
export class TypeService {

    constructor(
        @InjectRepository(TypeEntity)
        private typesRepository: Repository<TypeEntity>,
      ) {}


      async listAll() {
        return await this.typesRepository.find();
      }

      async create(data: TypeDTO) {
        const type = this.typesRepository.create(data);
        await this.typesRepository.save(data);
        return type;
      }

      async findByLibelle(libelle: string): Promise<TypeDTO> {
         return await this.typesRepository.findOne({
          where: {
            libelle: libelle,
          },
         });
      }

      async read(id: number) {
        return await this.typesRepository.findOne({ where: { id: id } });
      }

      async update(id: number, data: Partial<TypeDTO>) {
        await this.typesRepository.update({ id }, data);
        return await this.typesRepository.findOne({ where:{
            id:id
        } 
     });
      }

      async destroy(id: number) {
        await this.typesRepository.delete({ id });
        return { deleted: true };
      }
}
