import { Test, TestingModule } from '@nestjs/testing';
import { ReactifsController } from './reactifs.controller';
import { ReactifsService } from './reactifs.service';

describe('ReactifsController', () => {
  let controller: ReactifsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReactifsController],
      providers: [ReactifsService],
    }).compile();

    controller = module.get<ReactifsController>(ReactifsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
