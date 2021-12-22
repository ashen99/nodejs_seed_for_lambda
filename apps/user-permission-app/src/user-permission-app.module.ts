import { Module } from '@nestjs/common';
import { UserPermissionAppController } from './user-permission-app.controller';
import { UserPermissionAppService } from './user-permission-app.service';

@Module({
  imports: [],
  controllers: [UserPermissionAppController],
  providers: [UserPermissionAppService],
})
export class UserPermissionAppModule {}
