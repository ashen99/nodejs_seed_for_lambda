import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserRoleCreateDto } from './dto/create-user-role.input';
import { UserRoleUpdateDto } from './dto/update-user-role.input';
import { UserRole } from './entities/user-role.entity';

@Injectable()
export class UserRoleService {
  constructor(
    @InjectRepository(UserRole)
    private userRoleRepository: Repository<UserRole>,
  ) {}

  //this is used to get all rows in the table
  async getAll(): Promise<UserRole[]> {
    return this.userRoleRepository.find();
  }

  //this is used to create a new role in the user role table
  async create(userole: UserRoleCreateDto): Promise<UserRole> {
    const userRole = this.userRoleRepository.create(userole);
    return this.userRoleRepository.save(userRole);
  }

  //this will update the specific row when the id is given
  async update(id: string, userrole: UserRoleUpdateDto): Promise<UserRole> {
    const { roleName } = userrole;
    const user = await this.findOne(id);

    if (roleName) {
      user.roleName = roleName;
    }

    return this.userRoleRepository.save(user);
  }

  //this is used to find the specific role by id
  findOne(id: string) {
    return this.userRoleRepository.findOne(id);
  }

  //this will remove the specifi role from the table
  async remove(id: string) {
    let usr = this.findOne(id);
    if (usr) {
      let ret = await this.userRoleRepository.delete(id);
      if (ret.affected === 1) {
        return usr;
      }
    }
    throw new NotFoundException(`Record cannot find by id ${id}`);
  }
}
