import { Module } from '@nestjs/common';
import { UserRoleService } from './user-role.service';
import { UserRoleResolver } from './user-role.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRole } from './entities/user-role.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserRole])],
  providers: [UserRoleService, UserRoleResolver],
})
export class UserRoleModule {}
