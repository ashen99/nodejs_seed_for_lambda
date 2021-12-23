import { Injectable } from '@nestjs/common';
import { CreateUserDetailInput } from './dto/create-user-detail.input';
import { UpdateUserDetailInput } from './dto/update-user-detail.input';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDetail } from './entities/user-detail.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserDetailsService {
  constructor(
    //Injecting the Built in Repository
    @InjectRepository(UserDetail)
    private userDetailRepository: Repository<UserDetail>,
  ) {}

  //Creating a new UserDetail
  async create(userDetail: CreateUserDetailInput) {
    const uDetail = this.userDetailRepository.create(userDetail);
    return this.userDetailRepository.save(uDetail);
  }
  //Find All the UserDetails
  async findAll() {
    return this.userDetailRepository.find();
  }

  //Find One User Detail
  async findOne(id: number) {
    return this.userDetailRepository.findOne({ id: id });
  }

  //Update existing User if the user not exists throw an error
  async update(id: number, updateUserDetailInput: UpdateUserDetailInput) {
    const userDetail = await this.userDetailRepository.findOne({ id: id });
    if (!userDetail) {
      throw new Error(`The User Details with id: ${id} does not exist!`);
    }
    Object.assign(userDetail, updateUserDetailInput);

    return this.userDetailRepository.save(userDetail);
  }

  //Deleting an existing User. Here i have used the logic of considering affected number of rows to check whether it is deleted.

  async remove(id: number) {
    const res = await this.userDetailRepository.delete({ id: id });
    return res.affected;
  }
}
