import { Test, TestingModule } from '@nestjs/testing';
import { SbuAppController } from './sbu-app.controller';
import { SbuAppService } from './sbu-app.service';

describe('SbuAppController', () => {
  let sbuAppController: SbuAppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [SbuAppController],
      providers: [SbuAppService],
    }).compile();

    sbuAppController = app.get<SbuAppController>(SbuAppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(sbuAppController.getHello()).toBe('Hello World!');
    });
  });
});
