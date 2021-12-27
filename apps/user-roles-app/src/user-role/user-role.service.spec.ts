import { Test, TestingModule } from '@nestjs/testing';
import { UserRoleService } from './user-role.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { UserRole } from './entities/user-role.entity';
import { Repository } from 'typeorm';

const userArray = [new UserRole(), new UserRole(), new UserRole()];

const oneUser = new UserRole();

describe('UserRoleService', () => {
  let service: UserRoleService;
  let repo: Repository<UserRole>;

  const mockUserRepository = {
    find: jest.fn().mockResolvedValue(userArray),
    findOne: jest.fn().mockReturnValue(oneUser),
    create: jest.fn().mockReturnValue(oneUser),
    update: jest.fn().mockReturnValue(oneUser),
    remove: jest.fn().mockResolvedValue(true),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserRoleService,
        {
          provide: getRepositoryToken(UserRole),
          useValue: mockUserRepository,
        },
      ],
    }).compile();

    service = module.get<UserRoleService>(UserRoleService);
    repo = module.get<Repository<UserRole>>(getRepositoryToken(UserRole));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getAllUsers', () => {
    it('Should return an array of users', async () => {
      const users = await service.getAll();
      expect(users).toEqual(userArray);
    });
  });

  describe('findOneUser', () => {
    it('Should find the relevant user', async () => {
      const users = await service.findOne('1');
      expect(users).toEqual(oneUser);
    });
  });
});
