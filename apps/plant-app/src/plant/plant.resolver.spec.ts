import { Test, TestingModule } from '@nestjs/testing';
import { PlantResolver } from './plant.resolver';
import { PlantService } from './plant.service';

describe('PlantResolver', () => {
  let resolver: PlantResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlantResolver, PlantService],
    }).compile();

    resolver = module.get<PlantResolver>(PlantResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
