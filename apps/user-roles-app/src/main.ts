import { NestFactory } from '@nestjs/core';
import { UserRolesAppModule } from './user-roles-app.module';

async function bootstrap() {
  const app = await NestFactory.create(UserRolesAppModule);
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
