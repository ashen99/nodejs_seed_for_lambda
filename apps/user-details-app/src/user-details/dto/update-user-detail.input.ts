import { CreateUserDetailInput } from './create-user-detail.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUserDetailInput {
  @Field((type) => Int)
  id: number;

  @Field((type) => String,{ nullable: true })
  email: string;

  @Field((type) => String, { nullable: true })
  first_name: string;

  @Field((type) => String, { nullable: true })
  last_name: string;

  @Field((type) => String,{ nullable: true })
  user_name: string;

  @Field((type) => String,{ nullable: true })
  role: string;

  @Field((type) => [String],{ nullable: true })
  sbu: string[];

  @Field((type) => String,{ nullable: true })
  customer: string;

  @Field((type) => String,{ nullable: true })
  status: string;
}
