import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UserDetailsService } from './user-details.service';
import { UserDetail } from './entities/user-detail.entity';
import { CreateUserDetailInput } from './dto/create-user-detail.input';
import { UpdateUserDetailInput } from './dto/update-user-detail.input';

@Resolver(() => UserDetail)
export class UserDetailsResolver {
  //Injecting userDetailsService
  constructor(private readonly userDetailsService: UserDetailsService) {}

  //Creating user and returning that user.
  @Mutation(() => UserDetail, { name: 'createUserDetail' })
  createUserDetail(
    @Args('createUserDetailInput') createUserDetailInput: CreateUserDetailInput,
  ) {
    return this.userDetailsService.create(createUserDetailInput);
  }

  //find all the userDetails return type is userdetails array.
  @Query(() => [UserDetail], { name: 'findAllUserDetails' })
  findAll() {
    return this.userDetailsService.findAll();
  }

  //find one user detail
  @Query(() => UserDetail, { name: 'findOneUserDetail' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.userDetailsService.findOne(id);
  }

  //update existing userdetail
  @Mutation(() => UserDetail, { name: 'updateUserDetail' })
  updateUserDetail(
    @Args('updateUserDetailInput') updateUserDetailInput: UpdateUserDetailInput,
  ) {
    return this.userDetailsService.update(
      updateUserDetailInput.id,
      updateUserDetailInput,
    );
  }

  //deleting existing userdetail
  @Mutation(() => Boolean, { name: 'deleteUserDetail' })
  removeUserDetail(@Args('id', { type: () => Int }) id: number) {
    return this.userDetailsService.remove(id);
  }
}
