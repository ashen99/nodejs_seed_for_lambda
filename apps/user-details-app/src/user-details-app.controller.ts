import { Controller, Get } from '@nestjs/common';
import { UserDetailsAppService } from './user-details-app.service';

@Controller()
export class UserDetailsAppController {
  constructor(private readonly userDetailsAppService: UserDetailsAppService) {}

  @Get()
  getHello(): string {
    return this.userDetailsAppService.getHello();
  }
}
