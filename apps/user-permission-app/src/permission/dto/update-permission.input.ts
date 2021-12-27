import { CreatePermissionInput } from './create-permission.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePermissionInput extends PartialType(CreatePermissionInput) {
  @Field(() => Int)
  id: number;
  @Field()
  name: string;
  @Field()
  permission: string;
  @Field(() => Boolean)
  status: boolean;
}
