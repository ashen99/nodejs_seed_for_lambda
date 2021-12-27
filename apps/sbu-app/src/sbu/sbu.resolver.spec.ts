import { Test, TestingModule } from '@nestjs/testing';
import { SbuResolver } from './sbu.resolver';
import { SbuService } from './sbu.service';
import { Sbu } from './entities/sbu.entity';
import { CreateSbuInput } from './dto/create-sbu.input';
import { UpdateSbuInput } from './dto/update-sbu.input';

describe('SbuResolver', () => {
  let resolver: SbuResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SbuResolver,
        {
          provide: SbuService,
          useFactory: () => {
            return {
              findAll: jest.fn(() => [
                {
                  id: 1,
                  name: 'New SBU 1',
                },
              ]),
              findOne: jest.fn((id: number) => {
                const testSbu = new Sbu();
                testSbu.id = id;
                testSbu.name = 'New SBU 1';
                return testSbu;
              }),
              create: jest.fn((sbu: CreateSbuInput) => ({
                id: 1,
                name: sbu.name,
              })),
              update: jest.fn((id: number, updatedSbu: UpdateSbuInput) => ({
                id: 1,
                name: updatedSbu.name,
              })),
              remove: jest.fn((id: number) => true),
            };
          },
        },
      ],
    }).compile();

    resolver = module.get<SbuResolver>(SbuResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('findAllSbu', () => {
    it('should get the sbu array', () => {
      expect(resolver.findAll()).toEqual([
        {
          id: 1,
          name: 'New SBU 1',
        },
      ]);
    });
  });

  describe('findOneSbu', () => {
    it('Should find the relevant Sbu', () => {
      expect(resolver.findOne(1)).toEqual({
        id: 1,
        name: 'New SBU 1',
      });
    });
  });

  describe('createSbu', () => {
    it('Creating a New Sbu', () => {
      expect(resolver.createSbu({ name: 'New SBU 1' })).toEqual({
        id: 1,
        name: 'New SBU 1',
      });
    });
  });

  describe('updateSbu', () => {
    it('Updating a New Sbu', () => {
      expect(
        resolver.updateSbu({
          id: 1,
          name: 'Updated SBU 1',
        }),
      ).toEqual({
        id: 1,
        name: 'Updated SBU 1',
      });
    });
  });

  describe('deleteSbu', () => {
    it('Deleting the Sbu', () => {
      expect(resolver.removeSbu(4)).toBe(true);
    });
  });
});
