import { PlantService } from './plant.service';
import { Plant } from './entities/plant.entity';
import { CreatePlantInput } from './dto/create-plant.input';
import { UpdatePlantInput } from './dto/update-plant.input';
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';

@Resolver(() => Plant)
export class PlantResolver {
  constructor(private readonly plantService: PlantService) {}

  @Mutation(() => Plant, { name: 'createPlant' })
  createPlant(@Args('createPlantInput') createPlantInput: CreatePlantInput) {
    return this.plantService.create(createPlantInput);
  }

  @Query(() => [Plant], { name: 'findAllPlants' })
  findAll() {
    return this.plantService.findAll();
  }

  @Query(() => Plant, { name: 'findOnePlant' })
  findOne(@Args('id') id: string) {
    return this.plantService.findOne(id);
  }

  @Mutation(() => Plant, { name: 'updatePlant' })
  updatePlant(@Args('updatePlantInput') updatePlantInput: UpdatePlantInput) {
    return this.plantService.update(updatePlantInput.id, updatePlantInput);
  }

  @Mutation(() => Boolean, { name: 'removePlant' })
  removePlant(@Args('id') id: string) {
    return this.plantService.remove(id);
  }
}
