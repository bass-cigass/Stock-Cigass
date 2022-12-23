import { Injectable } from '@nestjs/common';
import { CreateMagasinDto } from './dto/create-magasin.dto';
import { UpdateMagasinDto } from './dto/update-magasin.dto';

@Injectable()
export class MagasinService {
  create(createMagasinDto: CreateMagasinDto) {
    return 'This action adds a new magasin';
  }

  findAll() {
    return `This action returns all magasin`;
  }

  findOne(id: number) {
    return `This action returns a #${id} magasin`;
  }

  update(id: number, updateMagasinDto: UpdateMagasinDto) {
    return `This action updates a #${id} magasin`;
  }

  remove(id: number) {
    return `This action removes a #${id} magasin`;
  }
}
