import { Injectable } from '@nestjs/common';
import { CreateReactifDto } from './dto/create-reactif.dto';
import { UpdateReactifDto } from './dto/update-reactif.dto';

@Injectable()
export class ReactifsService {
  create(createReactifDto: CreateReactifDto) {
    return 'This action adds a new reactif';
  }

  findAll() {
    return `This action returns all reactifs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} reactif`;
  }

  update(id: number, updateReactifDto: UpdateReactifDto) {
    return `This action updates a #${id} reactif`;
  }

  remove(id: number) {
    return `This action removes a #${id} reactif`;
  }
}
