import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateSbuInput {
  @Field()
  name: string;
}
