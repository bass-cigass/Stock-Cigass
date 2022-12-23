import { Test, TestingModule } from '@nestjs/testing';
import { EmplacementController } from './emplacement.controller';

describe('EmplacementController', () => {
  let controller: EmplacementController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmplacementController],
    }).compile();

    controller = module.get<EmplacementController>(EmplacementController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
