import { Module } from '@nestjs/common';
import { SbuAppController } from './sbu-app.controller';
import { SbuAppService } from './sbu-app.service';
import { SbuModule } from './sbu/sbu.module';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { Sbu } from './sbu/entities/sbu.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    SbuModule,
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/sbu-schema.gql'),
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      username: 'postgres',
      password: '1234',
      database: 'sbu',
      entities: [Sbu],
      synchronize: true,
    }),
  ],
  controllers: [SbuAppController],
  providers: [SbuAppService],
})
export class SbuAppModule {}
