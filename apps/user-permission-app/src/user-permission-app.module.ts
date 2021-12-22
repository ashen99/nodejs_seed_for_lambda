import { Module } from '@nestjs/common';
import { UserPermissionAppController } from './user-permission-app.controller';
import { UserPermissionAppService } from './user-permission-app.service';
import { PermissionModule } from './permission/permission.module';

@Module({
  imports: [PermissionModule],
  controllers: [UserPermissionAppController],
  providers: [UserPermissionAppService],
})
export class UserPermissionAppModule {}
