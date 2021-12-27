import { Module } from '@nestjs/common';
import { UserRolesAppController } from './user-roles-app.controller';
import { UserRolesAppService } from './user-roles-app.service';
import { UserRoleModule } from './user-role/user-role.module';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRole } from './user-role/entities/user-role.entity';

@Module({
  imports: [
    UserRoleModule,
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'userroles',
      entities: [UserRole],
      synchronize: true,
    }),
  ],
  controllers: [UserRolesAppController],
  providers: [UserRolesAppService],
})
export class UserRolesAppModule {}
