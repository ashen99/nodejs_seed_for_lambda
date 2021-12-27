import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SbuService } from './sbu.service';
import { Sbu } from './entities/sbu.entity';
import { CreateSbuInput } from './dto/create-sbu.input';
import { UpdateSbuInput } from './dto/update-sbu.input';

@Resolver(() => Sbu)
export class SbuResolver {
  //Injecting the SbuService
  constructor(private readonly sbuService: SbuService) {}

  //Mutation to create a new Sbu , CreateSbuInput is the DTO
  @Mutation(() => Sbu, { name: 'createSbu' })
  createSbu(@Args('createSbuInput') createSbuInput: CreateSbuInput) {
    return this.sbuService.create(createSbuInput);
  }

  //Query To get all the Sbu, Return type is Sbu array
  @Query(() => [Sbu], { name: 'findAllSbu' })
  findAll() {
    return this.sbuService.findAll();
  }

  //Query to get a Sbu,
  @Query(() => Sbu, { name: 'findOneSbu' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.sbuService.findOne(id);
  }

  //Updating a existing Sbu
  @Mutation(() => Sbu, { name: 'updateSbu' })
  updateSbu(@Args('updateSbuInput') updateSbuInput: UpdateSbuInput) {
    return this.sbuService.update(updateSbuInput.id, updateSbuInput);
  }

  //Deleting an Existing Sbu
  @Mutation(() => Sbu, { name: 'removeSbu' })
  removeSbu(@Args('id', { type: () => Int }) id: number) {
    return this.sbuService.remove(id);
  }
}
