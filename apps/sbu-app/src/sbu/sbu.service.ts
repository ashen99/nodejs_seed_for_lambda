import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSbuInput } from './dto/create-sbu.input';
import { UpdateSbuInput } from './dto/update-sbu.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Sbu } from './entities/sbu.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SbuService {
  //Injecting TypeOrm Built in Repository
  constructor(@InjectRepository(Sbu) private sbuRepository: Repository<Sbu>) {}

  //This function saves a New Sbu in the Database
  async create(createSbuInput: CreateSbuInput): Promise<Sbu> {
    const sbu = this.sbuRepository.create(createSbuInput);
    return this.sbuRepository.save(sbu);
  }

  //This function query all the data in the table and return
  async findAll(): Promise<Sbu[]> {
    return this.sbuRepository.find();
  }

  //This function query the relevant data to the given object and return.. If data is not found, it will throw an error.
  async findOne(id: number): Promise<Sbu> {
    try {
      return await this.sbuRepository.findOneOrFail(id);
    } catch (e) {
      throw new NotFoundException('Sbu not found!');
    }
  }

  //This function updates the relevant data to the given new object and the id
  //Here first try to find the relevant data to the given id and then update it and save again
  async update(id: number, updateSbuInput: UpdateSbuInput): Promise<Sbu> {
    const existSbu = await this.findOne(id);
    Object.assign(existSbu, updateSbuInput);
    return this.sbuRepository.save(existSbu);
  }

  //This function deletes the relevant data to the given id
  //First try to find the relevant and then deletes it and send true otherwise if data not exists for the given id  returns an exception
  async remove(id: number): Promise<Sbu> {
    const existSbu = await this.findOne(id);
    await this.sbuRepository.remove(existSbu);
    return existSbu;
  }
}
