import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePermissionInput } from './dto/create-permission.input';
import { UpdatePermissionInput } from './dto/update-permission.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Permission } from './entities/permission.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PermissionService {
  //Injecting TypeOrm Built in Repository
  constructor(
    @InjectRepository(Permission)
    private permissionRepository: Repository<Permission>,
  ) {}

  //This function saves a New Permission in the Database
  async create(
    createPermissionInput: CreatePermissionInput,
  ): Promise<Permission> {
    const permission = this.permissionRepository.create(createPermissionInput);
    return this.permissionRepository.save(permission);
  }

  //This function query all the data in the table and return
  async findAll(): Promise<Permission[]> {
    return this.permissionRepository.find();
  }

  //This function query the relevant data to the given object and return.. If data is not found, it will throw an error.
  async findOne(id: number): Promise<Permission> {
    try {
      return await this.permissionRepository.findOneOrFail(id);
    } catch (e) {
      throw new NotFoundException('Permission not found!');
    }
  }

  //This function updates the relevant data to the given new object and the id
  //Here first try to find the relevant data to the given id and then update it and save again
  async update(
    id: number,
    updatePermissionInput: UpdatePermissionInput,
  ): Promise<Permission> {
    const existPermission = await this.findOne(id);
    Object.assign(existPermission, updatePermissionInput);
    return this.permissionRepository.save(existPermission);
  }

  //This function deletes the relevant data to the given id
  //First try to find the relevant and then deletes it and send true otherwise if data not exists for the given id  returns an exception
  async remove(id: number): Promise<Permission> {
    const existPermission = await this.findOne(id);
    await this.permissionRepository.remove(existPermission);
    return existPermission;
  }
}
