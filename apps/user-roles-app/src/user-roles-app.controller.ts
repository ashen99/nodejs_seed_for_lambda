import { Controller, Get } from '@nestjs/common';
import { UserRolesAppService } from './user-roles-app.service';

@Controller()
export class UserRolesAppController {
  constructor(private readonly userRolesAppService: UserRolesAppService) {}

  @Get()
  getHello(): string {
    return this.userRolesAppService.getHello();
  }
}
