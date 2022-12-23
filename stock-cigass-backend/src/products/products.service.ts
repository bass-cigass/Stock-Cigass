import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductsDTO } from './products.dto';
import { ProductsEntity } from './products.entity';

@Injectable()
export class ProductsService {

    constructor(
        @InjectRepository(ProductsEntity)
        private produitsRepository: Repository<ProductsEntity>,
    ) { }

    async listAll() {
        return await this.produitsRepository.find();
      }

      
      async create(@Body() data: any) {
        const products = this.produitsRepository.create(data);
        await this.produitsRepository.save(data);
        return products;
      }

      

      async read(id: number) {
        return await this.produitsRepository.findOne({ where: { id: id } });
      }

      async update(id: number, data: any) {
        await this.produitsRepository.update({ id }, data);
        return await this.produitsRepository.findOne({ where : {id: id}});
      }

      async destroy(id: number) {
        await this.produitsRepository.delete({ id });
        return { deleted: true };
      }
}
