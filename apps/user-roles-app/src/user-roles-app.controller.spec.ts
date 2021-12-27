import { Test, TestingModule } from '@nestjs/testing';
import { UserRolesAppController } from './user-roles-app.controller';
import { UserRolesAppService } from './user-roles-app.service';

describe('UserRolesAppController', () => {
  let userRolesAppController: UserRolesAppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UserRolesAppController],
      providers: [UserRolesAppService],
    }).compile();

    userRolesAppController = app.get<UserRolesAppController>(UserRolesAppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(userRolesAppController.getHello()).toBe('Hello World!');
    });
  });
});
