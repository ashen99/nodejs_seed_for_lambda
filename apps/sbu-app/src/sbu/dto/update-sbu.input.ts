import { CreateSbuInput } from './create-sbu.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateSbuInput extends PartialType(CreateSbuInput) {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;
}
