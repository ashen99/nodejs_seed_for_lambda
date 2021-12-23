import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Permission {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ nullable: false })
  name: string;

  @Field()
  @Column({ nullable: false, unique: true })
  permission: string;

  @Field(() => Boolean)
  @Column()
  status: boolean;

  constructor(name?: string, permission?: string, status?: boolean) {
    this.name = name;
    this.permission = permission;
    this.status = status;
  }
}
