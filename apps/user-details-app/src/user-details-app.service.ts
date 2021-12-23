import { Injectable } from '@nestjs/common';

@Injectable()
export class UserDetailsAppService {
  getHello(): string {
    return 'Hello World!';
  }
}
