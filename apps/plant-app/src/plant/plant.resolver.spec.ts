import { Test, TestingModule } from '@nestjs/testing';
import { PlantResolver } from './plant.resolver';
import { PlantService } from './plant.service';
import { Plant } from './entities/plant.entity';
import { CreatePlantInput } from './dto/create-plant.input';
import { UpdatePlantInput } from './dto/update-plant.input';
import exp from 'constants';

describe('PlantResolver', () => {
  let resolver: PlantResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PlantResolver,
        {
          provide: PlantService,
          useFactory: () => {
            return {
              findAll: jest.fn(() => [
                {
                  id: 'ed2a61d6-62f0-11ec-90d6-0242ac120003',
                  address: 'Thulhiriya',
                },
              ]),
              findOne: jest.fn((id: { id: string }) => {
                const testPlant = new Plant();
                testPlant.id = id;
                testPlant.address = 'Thulhiriya';
                return testPlant;
              }),
              createPlant: jest.fn((plant: CreatePlantInput) => ({
                id: 'ed2a61d6-62f0-11ec-90d6-0242ac120003',
                address: plant.address,
              })),
              updatePlant: jest.fn(
                (id: string, updatedPlant: UpdatePlantInput) => ({
                  id: 'ed2a61d6-62f0-11ec-90d6-0242ac120003',
                  address: updatedPlant.address,
                }),
              ),
              deletePlant: jest.fn((id: string) => true),
            };
          },
        },
      ],
    }).compile();

    resolver = module.get<PlantResolver>(PlantResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('findAllPlants', () => {
    it('should get the plants array', () => {
      expect(resolver.findAll()).toEqual([
        {
          id: 'ed2a61d6-62f0-11ec-90d6-0242ac120003',
          address: 'Thulhiriya',
        },
      ]);
    });
  });

  describe('findOnePlant', () => {
    it('Should find the relavant Plant', () => {
      expect(resolver.findOne('ed2a61d6-62f0-11ec-90d6-0242ac120003')).toEqual({
        id: 'ed2a61d6-62f0-11ec-90d6-0242ac120003',
        address: 'Thulhiriya',
      });
    });
  });

  describe('createPlant', () => {
    it('Creating a New Plant', () => {
      expect(resolver.createPlant({ address: 'Thulhiriya' })).toEqual({
        id: 'ed2a61d6-62f0-11ec-90d6-0242ac120003',
        address: 'Thulhiriya',
      });
    });
  });

  describe('updatePlant', () => {
    it('Updating a New Plant', () => {
      expect(resolver.updatePlant({id:"ed2a61d6-62f0-11ec-90d6-0242ac120003",address:"Warakapola"})).toEqual({
        id:"ed2a61d6-62f0-11ec-90d6-0242ac120003",
        address:"Warakapola"
      })
    });
  });

  describe('deletePlant',()=>{
    it('Deleting the Plant',()=>{
      expect(resolver.removePlant("ed2a61d6-62f0-11ec-90d6-0242ac120003")).toBe(true);
    })
  })

});
