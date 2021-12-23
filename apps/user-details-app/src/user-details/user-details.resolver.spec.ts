import { Test, TestingModule } from '@nestjs/testing';
import { UserDetailsResolver } from './user-details.resolver';
import { UserDetailsService } from './user-details.service';

describe('UserDetailsResolver', () => {
  let resolver: UserDetailsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserDetailsResolver, UserDetailsService],
    }).compile();

    resolver = module.get<UserDetailsResolver>(UserDetailsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
