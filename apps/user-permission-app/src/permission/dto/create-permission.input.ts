import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreatePermissionInput {
  @Field()
  name: string;
  @Field()
  permission: string;
  @Field(() => Boolean)
  status: boolean;
}
