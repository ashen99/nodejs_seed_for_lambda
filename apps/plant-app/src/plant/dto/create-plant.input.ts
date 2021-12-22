import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreatePlantInput {
  @Field()
  address: string;
}
