import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UpdatePlantInput{
  @Field()
  id: string;

  @Field()
  address:string;
}
