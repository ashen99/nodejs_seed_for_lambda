import { Module } from '@nestjs/common';
import { UserDetailsService } from './user-details.service';
import { UserDetailsResolver } from './user-details.resolver';
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserDetail } from "./entities/user-detail.entity";

@Module({
  imports:[TypeOrmModule.forFeature([UserDetail])],
  providers: [UserDetailsResolver, UserDetailsService]
})
export class UserDetailsModule {}
