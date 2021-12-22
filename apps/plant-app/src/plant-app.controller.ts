import { Controller, Get } from '@nestjs/common';
import { PlantAppService } from './plant-app.service';

@Controller()
export class PlantAppController {
  constructor(private readonly plantAppService: PlantAppService) {}

  @Get()
  getHello(): string {
    return this.plantAppService.getHello();
  }
}
