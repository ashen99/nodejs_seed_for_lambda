import { Test, TestingModule } from '@nestjs/testing';
import { PlantAppController } from './plant-app.controller';
import { PlantAppService } from './plant-app.service';

describe('PlantAppController', () => {
  let plantAppController: PlantAppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [PlantAppController],
      providers: [PlantAppService],
    }).compile();

    plantAppController = app.get<PlantAppController>(PlantAppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(plantAppController.getHello()).toBe('Hello World!');
    });
  });
});
