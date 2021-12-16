import { NestFactory } from '@nestjs/core';
import { EmployeeAppModule } from './employee-app.module';

async function bootstrap() {
  const app = await NestFactory.create(EmployeeAppModule);
  await app.listen(3000);
}
bootstrap();
