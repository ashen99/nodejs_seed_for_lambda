import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRolesAppService {
  getHello(): string {
    return 'Hello World!';
  }
}
