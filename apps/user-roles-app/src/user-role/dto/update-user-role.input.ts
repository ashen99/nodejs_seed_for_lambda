import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UserRoleUpdateDto {
  @Field()
  id: string;
  @Field()
  roleName: string;
  @Field(() => [String])
  permission: string[];
}
