import { Field, InputType } from '@nestjs/graphql';
import { Column } from 'typeorm';

@InputType()
export class UserRoleCreateDto {
  @Field()
  roleName: string;
  @Field(() => [String])
  permission: string[];
}
