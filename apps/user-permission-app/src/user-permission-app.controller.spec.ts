import { Test, TestingModule } from '@nestjs/testing';
import { UserPermissionAppController } from './user-permission-app.controller';
import { UserPermissionAppService } from './user-permission-app.service';

describe('UserPermissionAppController', () => {
  let userPermissionAppController: UserPermissionAppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UserPermissionAppController],
      providers: [UserPermissionAppService],
    }).compile();

    userPermissionAppController = app.get<UserPermissionAppController>(UserPermissionAppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(userPermissionAppController.getHello()).toBe('Hello World!');
    });
  });
});
