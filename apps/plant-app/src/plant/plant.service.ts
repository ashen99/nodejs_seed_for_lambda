import { Injectable } from '@nestjs/common';
import { CreatePlantInput } from './dto/create-plant.input';
import { UpdatePlantInput } from './dto/update-plant.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Plant } from './entities/plant.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PlantService {
  constructor(
    //Injecting TypeOrm Built in Repository
    @InjectRepository(Plant) private plantRepository: Repository<Plant>,
  ) {}

  //This function saves a New Plant in the Database
  async create(createPlantInput: CreatePlantInput) {
    const plant = this.plantRepository.create(createPlantInput);
    return this.plantRepository.save(plant);
  }

  //This function query all the data in the table and return
  async findAll() {
    return this.plantRepository.find();
  }


  //This function query the relavant data to the given object and return
  async findOne(id: string) {
    return this.plantRepository.findOne(id);
  }


  //This function updates the relavant data to the given new object and the id
  //Here first try to find the relavant data to the given id and then updates it and saves again
  async update(id: string, updatePlantInput: UpdatePlantInput) {
    const plant = await this.plantRepository.findOne({ where: { id } });
    if (!plant) {
      throw new Error(`The plant with id: ${id} does not exist!`);
    }

    Object.assign(plant, updatePlantInput);
    const savedPlant = await this.plantRepository.save(plant);
    return plant;
  }

  //This function deletes the relavant data to the given id
  //First try to find the relavant and then deletes it and send true otherwise if data not exists for the given id  returns an exception
  async remove(id: string) {
    const plant = await this.plantRepository.findOne({ where: { id } });

    if (!plant) {
      throw new Error(`The plant with id: ${id} does not exist!`);
    }

    const res = await this.plantRepository.remove(plant);
    return true;
  }
}
