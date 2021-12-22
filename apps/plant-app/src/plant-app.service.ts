import { Injectable } from '@nestjs/common';

@Injectable()
export class PlantAppService {
  getHello(): string {
    return 'Hello World!';
  }
}
