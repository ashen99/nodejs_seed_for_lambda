import { Test, TestingModule } from '@nestjs/testing';
import { PermissionResolver } from './permission.resolver';
import { PermissionService } from './permission.service';
import { CreateSbuInput } from '../../../sbu-app/src/sbu/dto/create-sbu.input';
import { UpdateSbuInput } from '../../../sbu-app/src/sbu/dto/update-sbu.input';
import { Permission } from './entities/permission.entity';

describe('PermissionResolver', () => {
  let resolver: PermissionResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PermissionResolver,
        {
          provide: PermissionService,
          useFactory: () => {
            return {
              findAll: jest.fn(() => [
                {
                  id: 1,
                  name: 'Permission 1',
                  permission: 'P1',
                  status: true,
                },
              ]),
              findOne: jest.fn((id: number) => {
                const testPermission = new Permission();
                testPermission.id = id;
                testPermission.name = 'Permission 1';
                testPermission.permission = 'P1';
                testPermission.status = true;
                return testPermission;
              }),
              create: jest.fn((permission: CreateSbuInput) => ({
                id: 1,
                name: permission.name,
                permission: 'P1',
                status: true,
              })),
              update: jest.fn(
                (id: number, updatedPermission: UpdateSbuInput) => ({
                  id: 1,
                  name: updatedPermission.name,
                  permission: 'P1',
                  status: true,
                }),
              ),
              remove: jest.fn((id: number) => true),
            };
          },
        },
      ],
    }).compile();

    resolver = module.get<PermissionResolver>(PermissionResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('findAllPermission', () => {
    it('should get the permission array', () => {
      expect(resolver.findAll()).toEqual([
        {
          id: 1,
          name: 'Permission 1',
          permission: 'P1',
          status: true,
        },
      ]);
    });
  });

  describe('findOnePermission', () => {
    it('Should find the relevant permission', () => {
      expect(resolver.findOne(1)).toEqual({
        id: 1,
        name: 'Permission 1',
        permission: 'P1',
        status: true,
      });
    });
  });

  describe('createPermission', () => {
    it('Creating a New Permission', () => {
      expect(
        resolver.createPermission({
          name: 'Permission 1',
          permission: 'P1',
          status: true,
        }),
      ).toEqual({
        id: 1,
        name: 'Permission 1',
        permission: 'P1',
        status: true,
      });
    });
  });

  describe('updatePermission', () => {
    it('Updating a New Permission', () => {
      expect(
        resolver.updatePermission({
          id: 1,
          name: 'Permission 1',
          permission: 'P1',
          status: true,
        }),
      ).toEqual({
        id: 1,
        name: 'Permission 1',
        permission: 'P1',
        status: true,
      });
    });
  });

  describe('deletePermission', () => {
    it('Deleting the Permission', () => {
      expect(resolver.removePermission(4)).toBe(true);
    });
  });
});
