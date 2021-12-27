import { Controller, Get } from '@nestjs/common';
import { SbuAppService } from './sbu-app.service';

@Controller()
export class SbuAppController {
  constructor(private readonly sbuAppService: SbuAppService) {}

  @Get()
  getHello(): string {
    return this.sbuAppService.getHello();
  }
}
