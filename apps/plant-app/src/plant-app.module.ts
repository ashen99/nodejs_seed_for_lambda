import { Module } from '@nestjs/common';
import { PlantAppController } from './plant-app.controller';
import { PlantAppService } from './plant-app.service';
import { PlantModule } from './plant/plant.module';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Plant } from "./plant/entities/plant.entity";
@Module({
  imports: [
    PlantModule,
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/plant-schema.gql'),
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 7000,
      username: 'postgres',
      password: '1234',
      database: 'plant',
      entities: [Plant],
      synchronize: true,
    }),
  ],
  controllers: [PlantAppController],
  providers: [PlantAppService],
})
export class PlantAppModule {}
