import { Test, TestingModule } from '@nestjs/testing';
import { PermissionService } from './permission.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Permission } from './entities/permission.entity';
import { Repository } from 'typeorm';

const permissionArray = [
  new Permission('Permission 1', 'P1', true),
  new Permission('Permission 2', 'P2', false),
  new Permission('Permission 3', 'P3', true),
];

const onePermission = new Permission('Permission 4', 'P4', false);

describe('PermissionService', () => {
  let service: PermissionService;
  let repo: Repository<Permission>;

  const mockSbuRepository = {
    find: jest.fn().mockResolvedValue(permissionArray),
    findOneOrFail: jest.fn().mockReturnValue(onePermission),
    create: jest.fn().mockReturnValue(onePermission),
    update: jest.fn().mockReturnValue(onePermission),
    delete: jest.fn().mockResolvedValue(true),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PermissionService,
        {
          provide: getRepositoryToken(Permission),
          useValue: mockSbuRepository,
        },
      ],
    }).compile();

    service = module.get<PermissionService>(PermissionService);
    repo = module.get<Repository<Permission>>(getRepositoryToken(Permission));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAllPermission', () => {
    it('Should return an array of permission', async () => {
      const permissions = await service.findAll();
      expect(permissions).toEqual(permissionArray);
    });
  });

  describe('findOnePermission', () => {
    it('Should find the relevant Permission', async () => {
      const permission = await service.findOne(4);
      expect(permission).toEqual(onePermission);
    });
  });
});
