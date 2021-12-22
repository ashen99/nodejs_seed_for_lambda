import { Controller, Get } from '@nestjs/common';
import { UserPermissionAppService } from './user-permission-app.service';

@Controller()
export class UserPermissionAppController {
  constructor(private readonly userPermissionAppService: UserPermissionAppService) {}

  @Get()
  getHello(): string {
    return this.userPermissionAppService.getHello();
  }
}
