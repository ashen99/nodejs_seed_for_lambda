import { NestFactory } from '@nestjs/core';
import { PlantAppModule } from './plant-app.module';

async function bootstrap() {
  const app = await NestFactory.create(PlantAppModule);
  await app.listen(3000);
}
bootstrap();
