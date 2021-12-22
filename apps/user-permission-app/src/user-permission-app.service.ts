import { Injectable } from '@nestjs/common';

@Injectable()
export class UserPermissionAppService {
  getHello(): string {
    return 'Hello World!';
  }
}
