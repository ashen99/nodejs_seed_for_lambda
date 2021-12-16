import { Module } from '@nestjs/common';
import { EmployeeAppController } from './employee-app.controller';
import { EmployeeAppService } from './employee-app.service';

@Module({
  imports: [],
  controllers: [EmployeeAppController],
  providers: [EmployeeAppService],
})
export class EmployeeAppModule {}
