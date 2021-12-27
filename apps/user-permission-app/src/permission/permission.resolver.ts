import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PermissionService } from './permission.service';
import { Permission } from './entities/permission.entity';
import { CreatePermissionInput } from './dto/create-permission.input';
import { UpdatePermissionInput } from './dto/update-permission.input';

@Resolver(() => Permission)
export class PermissionResolver {
  //Injecting the PermissionService
  constructor(private readonly permissionService: PermissionService) {}

  //Mutation to create a new Permission , CreatePermissionInput is the DTO
  @Mutation(() => Permission, { name: 'createPermission' })
  createPermission(
    @Args('createPermissionInput') createPermissionInput: CreatePermissionInput,
  ) {
    return this.permissionService.create(createPermissionInput);
  }

  //Query To get all the Permissions, Return type is Permission array
  @Query(() => [Permission], { name: 'findAllPermission' })
  findAll() {
    return this.permissionService.findAll();
  }

  //Query to get a Permission,
  @Query(() => Permission, { name: 'findOnePermission' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.permissionService.findOne(id);
  }

  //Updating a existing Permission
  @Mutation(() => Permission, { name: 'updatePermission' })
  updatePermission(
    @Args('updatePermissionInput') updatePermissionInput: UpdatePermissionInput,
  ) {
    return this.permissionService.update(
      updatePermissionInput.id,
      updatePermissionInput,
    );
  }

  //Deleting an Existing Permission
  @Mutation(() => Permission, { name: 'removePermission' })
  removePermission(@Args('id', { type: () => Int }) id: number) {
    return this.permissionService.remove(id);
  }
}
