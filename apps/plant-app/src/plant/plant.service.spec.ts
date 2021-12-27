import { Test, TestingModule } from '@nestjs/testing';
import { PlantService } from './plant.service';
import { Plant } from './entities/plant.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CreatePlantInput } from './dto/create-plant.input';
import { UpdatePlantInput } from "./dto/update-plant.input";

const plantArray = [
  new Plant('Colombo'),
  new Plant('Kadawatha'),
  new Plant('Kandy'),
];

const onePlant = new Plant('Ja Ela');
onePlant.id = 'ed2a61d6-62f0-11ec-90d6-0242ac120003';

const createPlantDto = new CreatePlantInput();
createPlantDto.address = 'Warakapola';

const updatePlantDto = new UpdatePlantInput();
updatePlantDto.address = 'Samanala';
updatePlantDto.id = "ed2a61d6-62f0-11ec-90d6-0242ac120003"
describe('PlantService', () => {
  let service: PlantService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: getRepositoryToken(Plant),
          useValue: {
            create: jest.fn().mockImplementation((payload) => payload),
            save: jest.fn().mockImplementation((plant) =>
              Promise.resolve({
                id: 'ed2a61d6-62f0-11ec-90d6-0242ac120003',
                ...plant,
              }),
            ),
            find: jest
              .fn()
              .mockImplementation(() => Promise.resolve(plantArray)),
            findOne: jest
              .fn()
              .mockImplementation(() => Promise.resolve(onePlant)),
            remove: jest.fn().mockImplementation((plant) => true),
          },
        },
        PlantService,
      ],
    }).compile();

    service = module.get<PlantService>(PlantService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a new plant', async () => {
    expect(await service.create(createPlantDto)).toEqual({
      id: 'ed2a61d6-62f0-11ec-90d6-0242ac120003',
      ...createPlantDto,
    });
  });

  it('should get plant array', async () => {
    expect(await service.findAll()).toEqual(plantArray);
  });

  it('should get a plant ', async () => {
    expect(
      await service.findOne('ed2a61d6-62f0-11ec-90d6-0242ac120003'),
    ).toEqual(onePlant);
  });

  it('should remove a plant', async () => {
    expect(
      await service.remove('ed2a61d6-62f0-11ec-90d6-0242ac120003'),
    ).toEqual(true);
  });

  it('should update the plant',async  () =>{
    expect(await service.update("ed2a61d6-62f0-11ec-90d6-0242ac120003",updatePlantDto)).toEqual({id:"ed2a61d6-62f0-11ec-90d6-0242ac120003",...onePlant})
  })
});
