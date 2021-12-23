import { Test, TestingModule } from '@nestjs/testing';
import { UserDetailsAppController } from './user-details-app.controller';
import { UserDetailsAppService } from './user-details-app.service';

describe('UserDetailsAppController', () => {
  let userDetailsAppController: UserDetailsAppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UserDetailsAppController],
      providers: [UserDetailsAppService],
    }).compile();

    userDetailsAppController = app.get<UserDetailsAppController>(UserDetailsAppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(userDetailsAppController.getHello()).toBe('Hello World!');
    });
  });
});
