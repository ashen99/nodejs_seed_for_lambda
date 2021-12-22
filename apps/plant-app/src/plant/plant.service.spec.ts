import { Test, TestingModule } from '@nestjs/testing';
import { PlantService } from './plant.service';
import { Plant } from './entities/plant.entity';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';

const plantArray = [
  new Plant('Colombo'),
  new Plant('Kadawatha'),
  new Plant('Kandy'),
];

const onePlant = new Plant('Ja Ela');

describe('PlantService', () => {
  let service: PlantService;
  let repo: Repository<Plant>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: getRepositoryToken(Plant),
          useValue: {
            find: jest.fn().mockResolvedValue(plantArray),
            findOneOrFail: jest.fn().mockReturnValue(onePlant),
            create: jest.fn().mockReturnValue(onePlant),
            update: jest.fn().mockReturnValue(onePlant),
            delete: jest.fn().mockResolvedValue(true),
          },
        },
        PlantService,
      ],
    }).compile();

    service = module.get<PlantService>(PlantService);
    repo = module.get<Repository<Plant>>(getRepositoryToken(Plant));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('Should return an array of plants', async () => {
      const plants = await service.findAll();
      expect(plants).toEqual(plantArray);
    });
  });

/*  describe('findOne', () => {
    it('Should return single Plant', async () => {
      const repoSpy = jest.spyOn(repo, 'findOneOrFail');
      await expect(
        service.findOne('5dbe839b-b803-4aab-9943-6cb5aa361869'),
      ).resolves.toEqual(onePlant);
      expect(repoSpy).toBeCalledWith({
        id: '5dbe839b-b803-4aab-9943-6cb5aa361869',
      });
    });
  });*/
});
