import { NestFactory } from '@nestjs/core';
import { SbuAppModule } from './sbu-app.module';

async function bootstrap() {
  const app = await NestFactory.create(SbuAppModule);
  await app.listen(3000);
}
bootstrap();
