import { Module } from '@nestjs/common';
import { UserPermissionAppController } from './user-permission-app.controller';
import { UserPermissionAppService } from './user-permission-app.service';
import { PermissionModule } from './permission/permission.module';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Permission } from './permission/entities/permission.entity';

@Module({
  imports: [
    PermissionModule,
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/permission-schema.gql'),
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      username: 'postgres',
      password: '1234',
      database: 'permission',
      entities: [Permission],
      synchronize: true,
    }),
  ],
  controllers: [UserPermissionAppController],
  providers: [UserPermissionAppService],
})
export class UserPermissionAppModule {}
