import { Module } from '@nestjs/common';
import { ReactifsService } from './reactifs.service';
import { ReactifsController } from './reactifs.controller';

@Module({
  controllers: [ReactifsController],
  providers: [ReactifsService]
})
export class ReactifsModule {}
