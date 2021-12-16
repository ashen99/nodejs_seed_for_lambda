import { Controller, Get } from '@nestjs/common';
import { EmployeeAppService } from './employee-app.service';

@Controller('employee')
export class EmployeeAppController {
  constructor(private readonly employeeAppService: EmployeeAppService) {}

  @Get()
  getHello(): string {
    return this.employeeAppService.getHello();
  }
}
