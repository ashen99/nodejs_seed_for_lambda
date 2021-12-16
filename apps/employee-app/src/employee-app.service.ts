import { Injectable } from '@nestjs/common';

@Injectable()
export class EmployeeAppService {
  getHello(): string {
    return 'Hello World!';
  }
}
