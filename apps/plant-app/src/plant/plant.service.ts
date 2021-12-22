import { Injectable } from '@nestjs/common';
import { CreatePlantInput } from './dto/create-plant.input';
import { UpdatePlantInput } from './dto/update-plant.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Plant } from './entities/plant.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PlantService {
  constructor(
    @InjectRepository(Plant) private plantRepository: Repository<Plant>,
  ) {}
  async create(createPlantInput: CreatePlantInput) {
    const plant = this.plantRepository.create(createPlantInput);
    return this.plantRepository.save(plant);
  }

  async findAll() {
    return this.plantRepository.find();
  }

  async findOne(id: string) {
    return this.plantRepository.findOne(id);
  }

  async update(id: string, updatePlantInput: UpdatePlantInput) {
    const plant = await this.plantRepository.findOne({ where: { id } });
    console.log(plant);
    if (!plant) {
      throw new Error(`The plant with id: ${id} does not exist!`);
    }

    Object.assign(plant, updatePlantInput);
    console.log(plant);
    const savedPlant = await this.plantRepository.save(plant);
    console.log(savedPlant);
    return plant;
  }

  async remove(id: string) {
    const plant = await this.plantRepository.findOne({ where: { id } });

    if (!plant) {
      throw new Error(`The plant with id: ${id} does not exist!`);
    }

    const res = await this.plantRepository.remove(plant);
    console.log(res);
    return true;
  }
}
