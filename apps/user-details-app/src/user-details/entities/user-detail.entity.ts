import { ObjectType, Field, Int, addFieldMetadata } from '@nestjs/graphql';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@ObjectType()
@Entity()
export class UserDetail {
  @Field((type) => Int)
  @Column({ nullable: false })
  @PrimaryColumn()
  id: number;

  @Field((type) => String)
  @Column({ nullable: false })
  email: string;

  @Field((type) => String, { nullable: true })
  @Column({ nullable: true })
  first_name: string;

  @Field((type) => String, { nullable: true })
  @Column({ nullable: true })
  last_name: string;

  @Field((type) => String)
  @Column()
  user_name: string;

  @Field((type) => String)
  @Column({ nullable: false })
  role: string;

  @Field((type) => [String])
  @Column('text', { nullable: false, array: true })
  sbu: string[];

  @Field((type) => String)
  @Column({ nullable: false })
  customer: string;

  @Field((type) => String)
  @Column({ nullable: false })
  status: string;
}
