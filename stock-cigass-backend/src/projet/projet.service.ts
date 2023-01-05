import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProjetDTO } from './projet.dto';
import { ProjetEntity } from './projet.entity';

@Injectable()
export class ProjetService {
        constructor(
                @InjectRepository(ProjetEntity)
                private projetRepository: Repository<ProjetEntity>,
            ) { }


            async listAll() {
                return await this.projetRepository.find();
              }

              async create(@Body() data: any) {
                const products = this.projetRepository.create(data);
                await this.projetRepository.save(data);
                return products;
              }
        read(id: number) {
                throw new Error('Method not implemented.');
        }
        update(id: number, data: ProjetDTO) {
                throw new Error('Method not implemented.');
        }
        destroy(id: number) {
                throw new Error('Method not implemented.');
        }
    
}
