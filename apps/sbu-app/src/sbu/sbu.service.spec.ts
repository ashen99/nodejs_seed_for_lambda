import { Test, TestingModule } from '@nestjs/testing';
import { SbuService } from './sbu.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Sbu } from './entities/sbu.entity';

describe('SbuService', () => {
  let service: SbuService;

  const mockSbuRepository = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SbuService,
        {
          provide: getRepositoryToken(Sbu),
          useValue: mockSbuRepository,
        },
      ],
    }).compile();

    service = module.get<SbuService>(SbuService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
