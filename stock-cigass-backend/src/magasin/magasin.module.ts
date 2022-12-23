import { Module } from '@nestjs/common';
import { MagasinService } from './magasin.service';
import { MagasinController } from './magasin.controller';

@Module({
  controllers: [MagasinController],
  providers: [MagasinService]
})
export class MagasinModule {}
