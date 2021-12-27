import { Injectable } from '@nestjs/common';

@Injectable()
export class SbuAppService {
  getHello(): string {
    return 'Hello World!';
  }
}
