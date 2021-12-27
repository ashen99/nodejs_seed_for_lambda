import { Test, TestingModule } from '@nestjs/testing';
import { UserRoleResolver } from './user-role.resolver';
import { UserRoleService } from './user-role.service';
import { UserRole } from './entities/user-role.entity';
import { UserRoleCreateDto } from './dto/create-user-role.input';
import { UserRoleUpdateDto } from './dto/update-user-role.input';

describe('UserRoleResolver', () => {
  let resolver: UserRoleResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserRoleResolver,
        {
          provide: UserRoleService,
          useFactory: () => {
            return {
              getAll: jest.fn(() => [
                {
                  id: '7bfd52c0-22e5-44e1-9943-1bf438da6a15',
                  roleName: 'manager',
                  permission: ['a7689db8-12d4-4efb-b6ad-0641feafca94'],
                },
              ]),
              create: jest.fn((UserRole: UserRoleCreateDto) => ({
                roleName: 'new role',
                permission: Array['a7689db8-12d4-4efb-b6ad-0641feafca94'],
              })),
              update: jest.fn(
                (id: string, updateUserRole: UserRoleUpdateDto) => ({
                  id: id,
                  roleName: updateUserRole.roleName,
                  permission: updateUserRole.permission,
                }),
              ),
              remove: jest.fn((id: string) => true),
            };
          },
        },
      ],
    }).compile();

    resolver = module.get<UserRoleResolver>(UserRoleResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('findAllUserRoles', () => {
    it('should get the userrole array', () => {
      expect(resolver.getAll()).toEqual([
        {
          id: '7bfd52c0-22e5-44e1-9943-1bf438da6a15',
          roleName: 'manager',
          permission: ['a7689db8-12d4-4efb-b6ad-0641feafca94'],
        },
      ]);
    });
  });

  describe('createUserRole', () => {
    it('Creating a New UserRole', () => {
      expect(
        resolver.create({
          roleName: 'new role',
          permission: Array['a7689db8-12d4-4efb-b6ad-0641feafca94'],
        }),
      ).toEqual({
        roleName: 'new role',
        permission: Array['a7689db8-12d4-4efb-b6ad-0641feafca94'],
      });
    });
  });

  describe('updateUserRole', () => {
    it('Updating a UserRole', () => {
      expect(
        resolver.updateUserRole({
          id: 'f1600970-69d3-4394-ba48-2d243bcf2504',
          roleName: 'co-admin',
          permission: Array['a7689db8-12d4-4efb-b6ad-0641feafca94'],
        }),
      ).toEqual({
        id: 'f1600970-69d3-4394-ba48-2d243bcf2504',
        roleName: 'co-admin',
        permission: Array['a7689db8-12d4-4efb-b6ad-0641feafca94'],
      });
    });
  });

  describe('deleteRole', () => {
    it('Deleting a userrole', () => {
      expect(
        resolver.removeUserRole('ed2a61d6-62f0-11ec-90d6-0242ac120003'),
      ).toBe(true);
    });
  });
});
