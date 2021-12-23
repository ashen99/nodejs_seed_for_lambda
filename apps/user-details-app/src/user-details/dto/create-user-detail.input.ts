import { InputType, Int, Field } from '@nestjs/graphql';
import { Column } from 'typeorm';

@InputType()
export class CreateUserDetailInput {
  @Field((type) => Int)
  id: number;

  @Field((type) => String)
  email: string;

  @Field((type) => String, { nullable: true })
  first_name: string;

  @Field((type) => String, { nullable: true })
  last_name: string;

  @Field((type) => String)
  user_name: string;

  @Field((type) => String)
  role: string;

  @Field((type) => [String])
  sbu: string[];

  @Field((type) => String)
  customer: string;

  @Field((type) => String)
  status: string;
}
