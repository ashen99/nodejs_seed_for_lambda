import { NestFactory } from '@nestjs/core';
import { UserPermissionAppModule } from './user-permission-app.module';

async function bootstrap() {
  const app = await NestFactory.create(UserPermissionAppModule);
  await app.listen(3000);
}
bootstrap();
