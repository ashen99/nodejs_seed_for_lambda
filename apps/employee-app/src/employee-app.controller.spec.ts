import { Test, TestingModule } from '@nestjs/testing';
import { EmployeeAppController } from './employee-app.controller';
import { EmployeeAppService } from './employee-app.service';

describe('EmployeeAppController', () => {
  let employeeAppController: EmployeeAppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [EmployeeAppController],
      providers: [EmployeeAppService],
    }).compile();

    employeeAppController = app.get<EmployeeAppController>(EmployeeAppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(employeeAppController.getHello()).toBe('Hello World!');
    });
  });
});
