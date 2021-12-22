import { PlantService } from './plant.service';
import { Plant } from './entities/plant.entity';
import { CreatePlantInput } from './dto/create-plant.input';
import { UpdatePlantInput } from './dto/update-plant.input';
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';

@Resolver(() => Plant)
export class PlantResolver {
  //Injecting the PlantService
  constructor(private readonly plantService: PlantService) {}


  //Mutation to create a new Plant , CreatePlantInput is the DTO
  @Mutation(() => Plant, { name: 'createPlant' })
  createPlant(@Args('createPlantInput') createPlantInput: CreatePlantInput) {
    return this.plantService.create(createPlantInput);
  }


  //Query To get all the Plants, Return type is Plant array
  @Query(() => [Plant], { name: 'findAllPlants' })
  findAll() {
    return this.plantService.findAll();
  }


  //Query to get a Plant,
  @Query(() => Plant, { name: 'findOnePlant' })
  findOne(@Args('id') id: string) {
    return this.plantService.findOne(id);
  }


  //Updating a existing Plant
  @Mutation(() => Plant, { name: 'updatePlant' })
  updatePlant(@Args('updatePlantInput') updatePlantInput: UpdatePlantInput) {
    return this.plantService.update(updatePlantInput.id, updatePlantInput);
  }

  //Deleting an Existing Plant
  @Mutation(() => Boolean, { name: 'removePlant' })
  removePlant(@Args('id') id: string) {
    return this.plantService.remove(id);
  }
}
