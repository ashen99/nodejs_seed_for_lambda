import { Module } from '@nestjs/common';
import { PlantService } from './plant.service';
import { PlantResolver } from './plant.resolver';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Plant } from "./entities/plant.entity";

@Module({
  imports:[TypeOrmModule.forFeature([Plant])],
  providers: [PlantResolver, PlantService]
})
export class PlantModule {}
