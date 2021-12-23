import { Test, TestingModule } from '@nestjs/testing';
import { SbuService } from './sbu.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Sbu } from './entities/sbu.entity';
import { Repository } from 'typeorm';

const sbuArray = [
  new Sbu('New SBU 1'),
  new Sbu('New SBU 2'),
  new Sbu('New SBU 3'),
];

const oneSbu = new Sbu('New SBU 4');

describe('SbuService', () => {
  let service: SbuService;
  let repo: Repository<Sbu>;

  const mockSbuRepository = {
    find: jest.fn().mockResolvedValue(sbuArray),
    findOneOrFail: jest.fn().mockReturnValue(oneSbu),
    create: jest.fn().mockReturnValue(oneSbu),
    update: jest.fn().mockReturnValue(oneSbu),
    delete: jest.fn().mockResolvedValue(true),
  };

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
    repo = module.get<Repository<Sbu>>(getRepositoryToken(Sbu));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAllSbu', () => {
    it('Should return an array of sbu', async () => {
      const sbu = await service.findAll();
      expect(sbu).toEqual(sbuArray);
    });
  });

  describe('findOneSbu', () => {
    it('Should find the relevant Sbu', async () => {
      const sbu = await service.findOne(4);
      expect(sbu).toEqual(oneSbu);
    });
  });
});
