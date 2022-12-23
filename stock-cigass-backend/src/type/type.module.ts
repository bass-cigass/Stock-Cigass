import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeEntity } from './type.entity';
import { TypeService } from './type.service';
import { TypeController } from './type.controller';

@Module({
    imports: [TypeOrmModule.forFeature([TypeEntity])],
      controllers: [TypeController],
      providers: [TypeService],
})
export class TypeModule {}
