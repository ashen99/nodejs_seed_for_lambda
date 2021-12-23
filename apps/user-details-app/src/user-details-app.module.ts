import { Module } from '@nestjs/common';
import { UserDetailsAppController } from './user-details-app.controller';
import { UserDetailsAppService } from './user-details-app.service';
import { UserDetailsModule } from './user-details/user-details.module';
import { GraphQLModule } from "@nestjs/graphql";
import {join} from 'path';
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserDetail } from "./user-details/entities/user-detail.entity";
@Module({
  imports: [UserDetailsModule,    GraphQLModule.forRoot({
    autoSchemaFile: join(process.cwd(), 'src/user-detail-schema.gql'),
  }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 7000,
      username: 'postgres',
      password: '1234',
      database: 'user-details',
      entities: [UserDetail],
      synchronize: true,
    })],
  controllers: [UserDetailsAppController],
  providers: [UserDetailsAppService],
})
export class UserDetailsAppModule {}
