import { Test, TestingModule } from '@nestjs/testing';
import { ReactifsService } from './reactifs.service';

describe('ReactifsService', () => {
  let service: ReactifsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReactifsService],
    }).compile();

    service = module.get<ReactifsService>(ReactifsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
